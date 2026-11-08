/* EduZone Learn v3 - Science, Egyptian Primary 6, Term 1 (Ministry book 2026-2027).
   Ten chapters = ten lessons, grouped in four themed units (ids p6u1..p6u4, lessons p6u1l1...):
     U1 Air, Burning and Breathing : Ch1 Conditions for Burning (p6), Ch2 Respiration (p18)
     U2 Inside Our Body            : Ch3 Digestion (p24), Ch4 Blood Circulation and Excretion (p34)
     U3 Plants and Food Chains     : Ch5 Photosynthesis (p46), Ch6 Transportation of Water in Plants (p54),
                                     Ch7 Food Chain (p62), Ch8 Food Chain in Egypt (p68)
     U4 Solutions and Metals       : Ch9 Properties of Solutions (p74), Ch10 Reaction between Solutions and Metals (p82)
   Registers EZ3.SCIG.p6 (lessons), EZ3.SCI3_OBJ / EZ3.SCI3_EXTRA / EZ3.sciDiagrams entries and ten
   live canvas simulations EZ3.sciLabs.p6_* (original designs, built on EZ3.simKit). */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCIG = E.SCIG || {};
  E.SCI3_OBJ = E.SCI3_OBJ || {};
  E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  E.sciDiagrams = E.sciDiagrams || {};

  var U = [];

  /* ================= UNIT 1 - Air, Burning and Breathing ================= */
  U.push({
    id: "p6u1", num: 1, icon: "🔥", color: "orange",
    title: { en: "Air, Burning and Breathing", ar: "الهواء والاحتراق والتنفس" },
    lessons: [
      {
        id: "p6u1l1", icon: "🕯️", page: 6,
        title: { en: "Conditions for Burning", ar: "شروط الاحتراق" },
        idea: {
          official: {
            en: ["For things to keep burning, fresh air must constantly flow in and out. Where the air is not replaced, burning stops after a while.",
              "A candle inside a glass jar with a lid goes out once the air inside is used up. With gaps at the top and the bottom, fresh air flows in and the candle keeps burning.",
              "Air is a mixture of gases: nitrogen (about 78%), oxygen (about 21%), carbon dioxide (about 0.04%) and other gases.",
              "Oxygen helps things burn. A candle burns brightly in a jar of oxygen, but its flame goes out in nitrogen or in carbon dioxide.",
              "When things burn, part of the oxygen is used, so oxygen decreases, and new carbon dioxide is produced, so carbon dioxide increases.",
              "Clear, colourless limewater turns milky white with carbon dioxide, so we use it to check for this gas."],
            ar: ["لكي تستمر الأشياء في الاحتراق يجب أن يتجدد الهواء باستمرار دخولًا وخروجًا، وفي المكان الذي لا يتجدد فيه الهواء يتوقف الاحتراق بعد فترة.",
              "الشمعة داخل برطمان زجاجي مغطى بغطاء تنطفئ عندما يُستهلك الهواء الذي بداخله، أما إذا تُركت فتحات من أعلى ومن أسفل فيدخل هواء متجدد وتستمر الشمعة في الاشتعال.",
              "الهواء خليط من الغازات: النيتروجين (حوالي ٧٨٪)، والأكسجين (حوالي ٢١٪)، وثاني أكسيد الكربون (حوالي ٠٫٠٤٪)، وغازات أخرى.",
              "الأكسجين يساعد على الاشتعال؛ فالشمعة تشتعل بشدة في برطمان به أكسجين، بينما ينطفئ لهبها في النيتروجين أو في ثاني أكسيد الكربون.",
              "عند احتراق الأشياء يُستهلك جزء من الأكسجين فتقل كميته، ويتكوّن ثاني أكسيد الكربون من جديد فتزداد كميته.",
              "ماء الجير الرائق عديم اللون يتعكر ويصبح أبيض لبنيًا مع ثاني أكسيد الكربون، لذلك نستخدمه للكشف عن هذا الغاز."]
          },
          story: {
            en: ["The lights went out at Salma's grandmother's house in Fayoum, so Grandma lit a candle on the table.",
              "Salma put an upside-down glass over the candle. After a little while the flame shrank and went out. \"It ran out of fresh air!\" said Grandma.",
              "Grandma lit it again and lifted the glass a little at the bottom. Now air could flow in at the bottom and out at the top, and the flame kept dancing.",
              "\"The secret gas is oxygen,\" said Grandma. \"Long ago, Egyptian goldsmiths pumped air into their fire with bellows to give it more oxygen and melt gold.\"",
              "Later, in the school lab, Salma shook limewater in the jar where the candle had burned. It turned milky white: the burning had made carbon dioxide."],
            ar: ["انقطعت الكهرباء في بيت جدة سلمى بالفيوم، فأشعلت الجدة شمعة على المنضدة.",
              "وضعت سلمى كوبًا مقلوبًا فوق الشمعة، وبعد قليل صغر اللهب ثم انطفأ. قالت الجدة: «نفد منها الهواء المتجدد!»",
              "أشعلت الجدة الشمعة مرة أخرى ورفعت الكوب قليلًا من أسفل، فصار الهواء يدخل من أسفل ويخرج من أعلى، واستمر اللهب يتراقص.",
              "قالت الجدة: «الغاز السري هو الأكسجين؛ فقديمًا كان صائغو الذهب المصريون ينفخون الهواء في النار بالمنفاخ ليزيدوا الأكسجين ويصهروا الذهب.»",
              "وفي معمل المدرسة رجّت سلمى ماء الجير في البرطمان الذي احترقت فيه الشمعة، فصار أبيض لبنيًا؛ لأن الاحتراق كوّن ثاني أكسيد الكربون."]
          }
        },
        words: [
          ["Burning", "الاحتراق", "Things burning with a flame. Burning needs oxygen, and fresh air must keep flowing for it to continue.", "اشتعال المواد بلهب، ويحتاج إلى الأكسجين، ولكي يستمر يجب أن يتجدد الهواء."],
          ["Oxygen", "الأكسجين", "About 21% of the air. The gas that helps things burn.", "يكوّن حوالي ٢١٪ من الهواء، وهو الغاز الذي يساعد على الاشتعال."],
          ["Nitrogen", "النيتروجين", "About 78% of the air. It does not help things burn.", "يكوّن حوالي ٧٨٪ من الهواء، ولا يساعد على الاشتعال."],
          ["Carbon dioxide", "ثاني أكسيد الكربون", "About 0.04% of the air. It does not help burning, and it increases when things burn.", "يكوّن حوالي ٠٫٠٤٪ من الهواء، ولا يساعد على الاشتعال، وتزداد كميته عند احتراق الأشياء."],
          ["Limewater", "ماء الجير الرائق", "A clear, colourless liquid that turns milky white with carbon dioxide.", "سائل رائق عديم اللون يتعكر ويصبح أبيض لبنيًا مع ثاني أكسيد الكربون."],
          ["Gas detector tube", "أنبوبة الكشف عن الغاز", "A glass tube with a chemical that changes colour; the scale shows the percentage of a gas in the air.", "أنبوبة زجاجية بها مادة كيميائية يتغير لونها، ويوضح تدريجها النسبة المئوية للغاز في الهواء."]
        ],
        lab: { parts: [{ type: "p6_candle" }, {
          type: "sort",
          prompt: ["Tap a situation, then tap what happens to the flame.", "اضغط على موقف، ثم اضغط على ما يحدث للهب."],
          bins: [["on", "🔥", "Keeps burning", "يستمر في الاشتعال"], ["off", "💨", "Goes out", "ينطفئ"]],
          items: [
            [["Jar with gaps at the top and the bottom", "برطمان به فتحات من أعلى ومن أسفل"], "on"], [["Candle in a jar of oxygen", "شمعة في برطمان به أكسجين"], "on"],
            [["Candle in the open air of the classroom", "شمعة في هواء الفصل المفتوح"], "on"], [["Jar covered with a lid", "برطمان مغطى بغطاء"], "off"],
            [["Candle in a jar of nitrogen", "شمعة في برطمان به نيتروجين"], "off"], [["Candle in a jar of carbon dioxide", "شمعة في برطمان به ثاني أكسيد الكربون"], "off"]
          ]
        }] },
        quiz: [
          { q: ["A burning candle is inside a jar and you put a lid on the jar. Why does the flame go out?", "شمعة مشتعلة داخل برطمان ووضعت عليه غطاء. لماذا ينطفئ اللهب؟"],
            c: [["The air inside the jar is not renewed", "لأن الهواء داخل البرطمان لا يتجدد"], ["There is no water vapour in the jar", "لأنه لا يوجد بخار ماء في البرطمان"], ["It got dark inside the jar", "لأن البرطمان أصبح مظلمًا من الداخل"], ["The candle became too cold", "لأن الشمعة بردت كثيرًا"]],
            off: ["For burning to continue, fresh air must flow in and out. With the lid on, the air is used up and not replaced.", "لكي يستمر الاحتراق يجب أن يتجدد الهواء دخولًا وخروجًا، ومع الغطاء يُستهلك الهواء ولا يتجدد."],
            sto: ["Like Salma's glass over the candle: the flame used its air and no fresh air could come in.", "مثل كوب سلمى فوق الشمعة: استهلك اللهب هواءه ولم يدخل هواء جديد."] },
          { q: ["Which gas in the air helps things burn?", "أي غاز في الهواء يساعد على الاشتعال؟"],
            c: [["Oxygen", "الأكسجين"], ["Nitrogen", "النيتروجين"], ["Carbon dioxide", "ثاني أكسيد الكربون"], ["Water vapour", "بخار الماء"]],
            off: ["Oxygen helps things burn; nitrogen and carbon dioxide do not.", "الأكسجين يساعد على الاشتعال، أما النيتروجين وثاني أكسيد الكربون فلا يساعدان."],
            sto: ["Grandma called oxygen the secret gas that the goldsmiths pumped into their fire.", "سمّت الجدة الأكسجين الغاز السري الذي كان الصائغون يضخّونه في النار."] },
          { q: ["About how much of the air is oxygen?", "ما النسبة التقريبية للأكسجين في الهواء؟"],
            c: [["About 21%", "حوالي ٢١٪"], ["About 78%", "حوالي ٧٨٪"], ["About 0.04%", "حوالي ٠٫٠٤٪"], ["About 50%", "حوالي ٥٠٪"]],
            off: ["Air is about 78% nitrogen, about 21% oxygen and about 0.04% carbon dioxide.", "الهواء حوالي ٧٨٪ نيتروجين، وحوالي ٢١٪ أكسجين، وحوالي ٠٫٠٤٪ ثاني أكسيد الكربون."],
            sto: ["Picture 100 air particles in a room: about 78 are nitrogen and about 21 are oxygen.", "تخيّل ١٠٠ جزيء من الهواء في غرفة: حوالي ٧٨ منها نيتروجين وحوالي ٢١ أكسجين."] },
          { q: ["What happens to a burning incense stick put into a jar of carbon dioxide?", "ماذا يحدث لعود بخور مشتعل عند وضعه في برطمان به ثاني أكسيد الكربون؟"],
            c: [["The flame goes out", "ينطفئ اللهب"], ["It burns brightly", "يشتعل بشدة"], ["It keeps burning as it is", "يستمر في الاشتعال كما هو"], ["It turns blue", "يصبح لونه أزرق"]],
            off: ["Carbon dioxide does not help burning, so the flame goes out.", "ثاني أكسيد الكربون لا يساعد على الاشتعال، فينطفئ اللهب."],
            sto: ["In carbon dioxide the flame finds no oxygen helper, so it gives up.", "في ثاني أكسيد الكربون لا يجد اللهب مساعده الأكسجين فينطفئ."] },
          { q: ["How does the amount of oxygen in a jar change after a candle burns in it?", "كيف تتغير كمية الأكسجين في البرطمان بعد احتراق شمعة فيه؟"],
            c: [["It decreases", "تقل"], ["It increases", "تزداد"], ["It stays the same", "تبقى كما هي"], ["It turns into nitrogen", "تتحول إلى نيتروجين"]],
            off: ["Part of the oxygen is used when things burn, so the amount of oxygen decreases.", "يُستهلك جزء من الأكسجين عند احتراق الأشياء، فتقل كميته."],
            sto: ["The flame eats oxygen as its food, so less oxygen is left in the jar.", "اللهب يتغذى على الأكسجين، فيتبقى أكسجين أقل في البرطمان."] },
          { q: ["Limewater is shaken in a jar where a candle burned. What happens?", "رُجّ ماء الجير في برطمان احترقت فيه شمعة. ماذا يحدث؟"],
            c: [["It turns milky white", "يتعكر ويصبح أبيض لبنيًا"], ["It turns blue", "يصبح أزرق"], ["It turns yellow", "يصبح أصفر"], ["It stays clear", "يبقى رائقًا"]],
            off: ["Burning produced carbon dioxide, and limewater turns milky white with carbon dioxide.", "الاحتراق كوّن ثاني أكسيد الكربون، وماء الجير يتعكر مع ثاني أكسيد الكربون."],
            sto: ["Salma's limewater went milky: the proof that the candle made carbon dioxide.", "تعكّر ماء الجير عند سلمى، وهذا دليل على أن الشمعة كوّنت ثاني أكسيد الكربون."] },
          { q: ["A candle is in a jar with gaps at the top and the bottom. What happens?", "شمعة في برطمان به فتحات من أعلى ومن أسفل. ماذا يحدث؟"],
            c: [["It keeps burning", "تستمر في الاشتعال"], ["It goes out at once", "تنطفئ فورًا"], ["It burns more brightly than in oxygen", "تشتعل أشد من اشتعالها في الأكسجين"], ["It melts without a flame", "تنصهر بدون لهب"]],
            off: ["Fresh air enters at the bottom and used air leaves at the top, so the air is renewed and burning continues.", "يدخل هواء متجدد من أسفل ويخرج الهواء المستهلك من أعلى، فيتجدد الهواء ويستمر الاحتراق."],
            sto: ["Like Grandma lifting the glass: a door below and a window above keep the air moving.", "مثلما رفعت الجدة الكوب: باب من أسفل ونافذة من أعلى يجعلان الهواء يتحرك."] }
        ]
      },
      {
        id: "p6u1l2", icon: "🫁", page: 18,
        title: { en: "Respiration", ar: "التنفس" },
        idea: {
          official: {
            en: ["We breathe in to take oxygen from the air and breathe out to get rid of carbon dioxide.",
              "The process by which the body obtains oxygen and expels carbon dioxide is called respiration.",
              "Breathed-out air still contains oxygen, but less than breathed-in air, and it contains more carbon dioxide, so it turns limewater milky white.",
              "Air enters through the nose and mouth, passes down the trachea (windpipe) and reaches the left and right lungs in the chest.",
              "In the lungs, oxygen passes from the air in the alveoli into the blood in the surrounding blood vessels, and carbon dioxide passes from the blood into the air.",
              "The heart pumps the oxygen-rich blood to the whole body. Fish let out carbon dioxide through their gills."],
            ar: ["نأخذ الشهيق لنحصل على الأكسجين من الهواء، ونُخرج الزفير لنتخلص من ثاني أكسيد الكربون.",
              "العملية التي يحصل بها الجسم على الأكسجين ويتخلص من ثاني أكسيد الكربون تسمى التنفس.",
              "هواء الزفير ما زال يحتوي على الأكسجين ولكن بكمية أقل من هواء الشهيق، ويحتوي على ثاني أكسيد الكربون بكمية أكبر، لذلك يعكّر ماء الجير.",
              "يدخل الهواء من الأنف والفم، ويمر في القصبة الهوائية، ليصل إلى الرئتين اليمنى واليسرى في الصدر.",
              "في الرئتين ينتقل الأكسجين من الهواء الموجود في الحويصلات الهوائية إلى الدم في الأوعية الدموية المحيطة بها، وينتقل ثاني أكسيد الكربون من الدم إلى الهواء.",
              "يضخ القلب الدم الغني بالأكسجين إلى الجسم كله، أما الأسماك فتُخرج ثاني أكسيد الكربون من خياشيمها."]
          },
          story: {
            en: ["Youssef was racing his sister around the lake in Al-Azhar Park. He was puffing hard!",
              "\"Every breath in brings oxygen,\" his sister said. \"Every breath out takes carbon dioxide away.\"",
              "The air rushed in through his nose, down the trachea like a lift going down a tower, and into his two lungs.",
              "Inside the lungs are millions of tiny air sacs called alveoli. There, oxygen jumps into the blood and carbon dioxide jumps out into the air.",
              "The heart then sends the blood like delivery bikes all over Cairo, carrying oxygen to his legs, so he could run even faster."],
            ar: ["كان يوسف يتسابق مع أخته حول البحيرة في حديقة الأزهر، وكان يلهث بشدة!",
              "قالت أخته: «كل شهيق يُدخل الأكسجين، وكل زفير يُخرج ثاني أكسيد الكربون.»",
              "اندفع الهواء من أنفه إلى القصبة الهوائية كمصعد ينزل في برج، ثم إلى رئتيه الاثنتين.",
              "داخل الرئتين ملايين الأكياس الهوائية الصغيرة تسمى الحويصلات الهوائية، وفيها يقفز الأكسجين إلى الدم ويقفز ثاني أكسيد الكربون إلى الهواء.",
              "ثم يرسل القلب الدم مثل دراجات التوصيل في أنحاء القاهرة، فيحمل الأكسجين إلى رجليه، فيجري أسرع."]
          }
        },
        words: [
          ["Respiration", "التنفس", "The process by which the body obtains oxygen and expels carbon dioxide.", "العملية التي يحصل بها الجسم على الأكسجين ويتخلص من ثاني أكسيد الكربون."],
          ["Trachea (windpipe)", "القصبة الهوائية", "The tube that carries air from the nose and mouth to the lungs.", "الأنبوب الذي ينقل الهواء من الأنف والفم إلى الرئتين."],
          ["Lungs", "الرئتان", "Two organs in the chest where gas exchange takes place.", "عضوان في الصدر يحدث فيهما تبادل الغازات."],
          ["Alveoli", "الحويصلات الهوائية", "Tiny air sacs in the lungs, surrounded by blood vessels.", "أكياس هوائية دقيقة في الرئتين تحيط بها الأوعية الدموية."],
          ["Gas exchange", "تبادل الغازات", "Oxygen moves from the air into the blood and carbon dioxide moves from the blood into the air.", "انتقال الأكسجين من الهواء إلى الدم، وانتقال ثاني أكسيد الكربون من الدم إلى الهواء."],
          ["Gills", "الخياشيم", "The breathing organs of fish; fish let out carbon dioxide through them.", "أعضاء التنفس في الأسماك، وتُخرج الأسماك منها ثاني أكسيد الكربون."]
        ],
        lab: { parts: [{ type: "p6_breath" }, {
          type: "sort",
          prompt: ["Tap a fact, then tap the air it describes.", "اضغط على معلومة، ثم اضغط على الهواء الذي تصفه."],
          bins: [["in", "🌬️", "Breathed-in air", "هواء الشهيق"], ["out", "😮‍💨", "Breathed-out air", "هواء الزفير"]],
          items: [
            [["More oxygen", "أكسجين أكثر"], "in"], [["Less carbon dioxide", "ثاني أكسيد كربون أقل"], "in"], [["Leaves limewater clear", "يترك ماء الجير رائقًا"], "in"],
            [["More carbon dioxide", "ثاني أكسيد كربون أكثر"], "out"], [["Still has some oxygen", "ما زال به بعض الأكسجين"], "out"], [["Turns limewater milky", "يعكّر ماء الجير"], "out"]
          ]
        }] },
        quiz: [
          { q: ["What gas do we take into our body when we breathe in?", "ما الغاز الذي نأخذه إلى أجسامنا في الشهيق؟"],
            c: [["Oxygen", "الأكسجين"], ["Carbon dioxide", "ثاني أكسيد الكربون"], ["Nitrogen only", "النيتروجين فقط"], ["Hydrogen", "الهيدروجين"]],
            off: ["We breathe in to obtain oxygen from the air.", "نأخذ الشهيق لنحصل على الأكسجين من الهواء."],
            sto: ["Every breath Youssef took in brought fresh oxygen for his running legs.", "كل شهيق أخذه يوسف أحضر أكسجينًا جديدًا لرجليه."] },
          { q: ["Comparing breathed-in and breathed-out air, which gas increases in breathed-out air?", "عند المقارنة بين هواء الشهيق وهواء الزفير، أي غاز يزداد في هواء الزفير؟"],
            c: [["Carbon dioxide", "ثاني أكسيد الكربون"], ["Oxygen", "الأكسجين"], ["Neither increases", "لا يزداد أي منهما"], ["Both increase", "يزداد كلاهما"]],
            off: ["The body lets out carbon dioxide, so breathed-out air has more of it.", "الجسم يتخلص من ثاني أكسيد الكربون، لذلك يحتوي هواء الزفير على كمية أكبر منه."],
            sto: ["The breath out carries the body's used gas away, like a rubbish bag leaving the house.", "الزفير يحمل الغاز المستهلك خارج الجسم، مثل كيس القمامة الخارج من البيت."] },
          { q: ["Which statement about breathed-out air is correct?", "أي عبارة عن هواء الزفير صحيحة؟"],
            c: [["It has oxygen, but less than breathed-in air", "به أكسجين ولكن أقل من هواء الشهيق"], ["It has no oxygen at all", "ليس به أكسجين على الإطلاق"], ["It has more oxygen than breathed-in air", "به أكسجين أكثر من هواء الشهيق"], ["It has less carbon dioxide than breathed-in air", "به ثاني أكسيد كربون أقل من هواء الشهيق"]],
            off: ["Gas detector tubes show that exhaled air still contains oxygen, but less, and more carbon dioxide.", "تبيّن أنابيب الكشف عن الغاز أن هواء الزفير ما زال به أكسجين ولكن أقل، وبه ثاني أكسيد كربون أكثر."],
            sto: ["The lungs take only part of the oxygen from each breath, so some is left in the breath out.", "الرئتان تأخذان جزءًا فقط من أكسجين كل نفس، فيتبقى بعضه في الزفير."] },
          { q: ["Where does the exchange of oxygen and carbon dioxide take place?", "أين يحدث تبادل الأكسجين وثاني أكسيد الكربون؟"],
            c: [["In the lungs", "في الرئتين"], ["In the stomach", "في المعدة"], ["In the trachea only", "في القصبة الهوائية فقط"], ["In the kidneys", "في الكليتين"]],
            off: ["Gas exchange happens through the blood vessels around the alveoli in the lungs.", "يحدث تبادل الغازات عبر الأوعية الدموية المحيطة بالحويصلات الهوائية في الرئتين."],
            sto: ["The alveoli are the swap market where oxygen and carbon dioxide trade places.", "الحويصلات الهوائية هي سوق التبادل الذي يتبادل فيه الأكسجين وثاني أكسيد الكربون أماكنهما."] },
          { q: ["What carries the oxygen taken in by the lungs to the whole body?", "ما الذي ينقل الأكسجين الذي تأخذه الرئتان إلى الجسم كله؟"],
            c: [["Blood", "الدم"], ["Muscles", "العضلات"], ["Bones", "العظام"], ["Air in the trachea", "الهواء في القصبة الهوائية"]],
            off: ["Blood transports oxygen to the whole body by the work of the heart.", "ينقل الدم الأكسجين إلى الجسم كله بعمل القلب."],
            sto: ["Blood is the delivery bike, and the heart is the engine that keeps it moving.", "الدم هو دراجة التوصيل، والقلب هو المحرك الذي يجعلها تتحرك."] },
          { q: ["What is the correct path of air into the body?", "ما المسار الصحيح للهواء داخل الجسم؟"],
            c: [["Nose and mouth → trachea → lungs", "الأنف والفم ← القصبة الهوائية ← الرئتان"], ["Lungs → trachea → nose", "الرئتان ← القصبة الهوائية ← الأنف"], ["Mouth → stomach → lungs", "الفم ← المعدة ← الرئتان"], ["Nose → heart → lungs", "الأنف ← القلب ← الرئتان"]],
            off: ["Air enters from the nose and mouth, passes through the trachea and reaches the left and right lungs.", "يدخل الهواء من الأنف والفم ويمر في القصبة الهوائية ليصل إلى الرئتين اليمنى واليسرى."],
            sto: ["In through the front door, down the lift, and into the two rooms of the lungs.", "يدخل من الباب الأمامي، وينزل بالمصعد، ثم إلى غرفتي الرئتين."] },
          { q: ["How do fish let out carbon dioxide?", "كيف تُخرج الأسماك ثاني أكسيد الكربون؟"],
            c: [["Through their gills", "من خياشيمها"], ["Through lungs like ours", "من رئتين مثلنا"], ["Through their fins", "من زعانفها"], ["Through their scales", "من قشورها"]],
            off: ["Fish do gas exchange with their gills and let out carbon dioxide from them.", "تقوم الأسماك بتبادل الغازات بخياشيمها وتُخرج منها ثاني أكسيد الكربون."],
            sto: ["The tilapia in the Nile have gills instead of lungs to do the same job underwater.", "أسماك البلطي في النيل لها خياشيم بدل الرئتين لتؤدي العمل نفسه تحت الماء."] }
        ]
      }
    ]
  });

  /* ================= UNIT 2 - Inside Our Body ================= */
  U.push({
    id: "p6u2", num: 2, icon: "🫀", color: "red",
    title: { en: "Inside Our Body", ar: "داخل أجسامنا" },
    lessons: [
      {
        id: "p6u2l1", icon: "🍞", page: 24,
        title: { en: "Digestion", ar: "الهضم" },
        idea: {
          official: {
            en: ["Breaking down food with the teeth and changing it into a form that is easy to absorb is called digestion.",
              "Food passes in order: mouth → pharynx → esophagus (food pipe) → stomach → small intestine → large intestine. Undigested food comes out from the anus. This path is the digestive tract (canal).",
              "Saliva breaks down the starch in foods like rice and bread into another substance that is easy to digest. Liquids that digest food are called digestive juices; they are made in the mouth, the stomach and the small intestine.",
              "Iodine turns starch dark blue. Starch with water turns dark blue, but starch with saliva, warmed at about 40 °C like the inside of the body, does not.",
              "Nutrients are absorbed mainly in the small intestine, along with water. Its villi make the inner surface larger, so absorption is efficient. More water is absorbed in the large intestine and the rest leaves as feces.",
              "The blood carries the absorbed nutrients through the liver, which stores some of them and sends them out to the body when needed."],
            ar: ["تكسير الطعام بالأسنان وتحويله إلى صورة يسهل امتصاصها يسمى الهضم.",
              "يمر الطعام بالترتيب: الفم ← البلعوم ← المريء ← المعدة ← الأمعاء الدقيقة ← الأمعاء الغليظة، ويخرج الطعام غير المهضوم من فتحة الشرج، وهذا المسار يسمى القناة الهضمية.",
              "اللعاب يحوّل النشا الموجود في أطعمة مثل الأرز والخبز إلى مادة أخرى يسهل هضمها، والسوائل التي تهضم الطعام تسمى العصارات الهاضمة، وتُفرز في الفم والمعدة والأمعاء الدقيقة.",
              "محلول اليود يحوّل لون النشا إلى الأزرق الداكن؛ فالنشا مع الماء يتلون بالأزرق الداكن، أما النشا مع اللعاب بعد تدفئته عند حوالي ٤٠ درجة سيليزية مثل داخل الجسم فلا يتلون.",
              "تُمتص العناصر الغذائية مع الماء غالبًا في الأمعاء الدقيقة، وخملاتها تزيد مساحة سطحها الداخلي فيكون الامتصاص فعالًا، ثم يُمتص مزيد من الماء في الأمعاء الغليظة ويخرج الباقي في صورة براز.",
              "ينقل الدم العناصر الغذائية الممتصة مرورًا بالكبد، الذي يخزن بعضها ويرسلها إلى الجسم عند الحاجة."]
          },
          story: {
            en: ["Mariam was having lunch in Alexandria: a piece of baladi bread with ful.",
              "She chewed the bread for a long time, and it started to taste sweet! Her saliva was changing the starch into a sweet, easy-to-digest substance.",
              "Then the food took a trip like the Cairo Metro, stopping at each station in order: pharynx, esophagus, stomach, small intestine, large intestine.",
              "In the small intestine, millions of tiny villi, like the loops of a fluffy towel, soaked up the nutrients and passed them to the blood.",
              "The blood carried them to the liver, the body's storeroom, and the large intestine took back the extra water before the rest left the body."],
            ar: ["كانت مريم تتناول الغداء في الإسكندرية: رغيف عيش بلدي مع الفول.",
              "مضغت مريم الخبز مدة طويلة فبدأ طعمه يصبح حلوًا! لقد كان لعابها يحوّل النشا إلى مادة حلوة يسهل هضمها.",
              "ثم بدأ الطعام رحلة مثل مترو القاهرة، يتوقف في كل محطة بالترتيب: البلعوم، ثم المريء، ثم المعدة، ثم الأمعاء الدقيقة، ثم الأمعاء الغليظة.",
              "في الأمعاء الدقيقة امتصت ملايين الخملات الصغيرة، مثل حلقات الفوطة الناعمة، العناصر الغذائية ونقلتها إلى الدم.",
              "حمل الدم هذه العناصر إلى الكبد، مخزن الجسم، واستعادت الأمعاء الغليظة الماء الزائد قبل أن يخرج الباقي من الجسم."]
          }
        },
        words: [
          ["Digestion", "الهضم", "Breaking down food and changing it into a form that is easy to absorb.", "تكسير الطعام وتحويله إلى صورة يسهل امتصاصها."],
          ["Digestive tract", "القناة الهضمية", "The path of food from the mouth to the anus.", "مسار الطعام من الفم حتى فتحة الشرج."],
          ["Saliva", "اللعاب", "A digestive juice in the mouth that breaks down starch.", "عصارة هاضمة في الفم تحوّل النشا إلى مادة أخرى."],
          ["Digestive juice", "العصارة الهاضمة", "A liquid that digests food; made in the mouth, stomach and small intestine.", "سائل يهضم الطعام، ويُفرز في الفم والمعدة والأمعاء الدقيقة."],
          ["Villi", "الخملات", "Small bumps on the inner wall of the small intestine that make its surface larger for absorption.", "بروزات صغيرة في الجدار الداخلي للأمعاء الدقيقة تزيد مساحة سطحها للامتصاص."],
          ["Liver", "الكبد", "Stores some nutrients and sends them out when needed; also breaks down harmful substances.", "يخزن بعض العناصر الغذائية ويرسلها عند الحاجة، ويكسّر المواد الضارة."],
          ["Esophagus", "المريء", "The food pipe between the pharynx and the stomach.", "أنبوب الطعام بين البلعوم والمعدة."]
        ],
        lab: { parts: [{ type: "p6_digest" }] },
        quiz: [
          { q: ["What do we call changing food into a form that is easy to absorb into the body?", "ماذا نسمي تحويل الطعام إلى صورة يسهل امتصاصها في الجسم؟"],
            c: [["Digestion", "الهضم"], ["Respiration", "التنفس"], ["Circulation", "الدوران"], ["Excretion", "الإخراج"]],
            off: ["Breaking down food and changing it into an easy-to-absorb form is digestion.", "تكسير الطعام وتحويله إلى صورة يسهل امتصاصها هو الهضم."],
            sto: ["Mariam's teeth and saliva started the digestion of her bread right in her mouth.", "بدأت أسنان مريم ولعابها هضم الخبز في فمها مباشرة."] },
          { q: ["What is the correct order that food passes through?", "ما الترتيب الصحيح لمرور الطعام؟"],
            c: [["Mouth → pharynx → esophagus → stomach → small intestine → large intestine", "الفم ← البلعوم ← المريء ← المعدة ← الأمعاء الدقيقة ← الأمعاء الغليظة"],
              ["Mouth → stomach → pharynx → esophagus → small intestine → large intestine", "الفم ← المعدة ← البلعوم ← المريء ← الأمعاء الدقيقة ← الأمعاء الغليظة"],
              ["Mouth → pharynx → esophagus → stomach → large intestine → small intestine", "الفم ← البلعوم ← المريء ← المعدة ← الأمعاء الغليظة ← الأمعاء الدقيقة"],
              ["Mouth → esophagus → pharynx → small intestine → stomach → large intestine", "الفم ← المريء ← البلعوم ← الأمعاء الدقيقة ← المعدة ← الأمعاء الغليظة"]],
            off: ["Food is carried in the order mouth, pharynx, esophagus, stomach, small intestine, large intestine, then out of the anus.", "يُنقل الطعام بترتيب: الفم، البلعوم، المريء، المعدة، الأمعاء الدقيقة، الأمعاء الغليظة، ثم يخرج من فتحة الشرج."],
            sto: ["Like metro stations: you cannot reach the large intestine station before the small intestine one.", "مثل محطات المترو: لا تصل إلى محطة الأمعاء الغليظة قبل محطة الأمعاء الدقيقة."] },
          { q: ["Tube A has starch + water and tube B has starch + saliva, both warmed. Iodine is added. What is the result?", "الأنبوبة (أ) بها نشا وماء، والأنبوبة (ب) بها نشا ولعاب، وكلتاهما دافئة. أضيف محلول اليود. ما النتيجة؟"],
            c: [["A turns dark blue; B does not", "تتلون (أ) بالأزرق الداكن ولا تتلون (ب)"], ["Both turn dark blue", "تتلون الأنبوبتان بالأزرق الداكن"], ["Neither changes", "لا تتغير أي منهما"], ["B turns dark blue; A does not", "تتلون (ب) بالأزرق الداكن ولا تتلون (أ)"]],
            off: ["Saliva broke down the starch in B, so there is no starch left to turn iodine dark blue. A still has starch.", "اللعاب حوّل النشا في (ب) فلم يتبقَّ نشا يتلون باليود، أما (أ) فما زال بها نشا."],
            sto: ["The saliva ate the starch in tube B, so iodine had nothing to paint blue.", "اللعاب «أكل» النشا في الأنبوبة (ب)، فلم يجد اليود شيئًا يلونه بالأزرق."] },
          { q: ["Why are the test tubes warmed in water at about 40 °C?", "لماذا تُدفأ الأنابيب في ماء درجة حرارته حوالي ٤٠ درجة سيليزية؟"],
            c: [["To make it like the temperature inside the body", "لتكون مثل درجة الحرارة داخل الجسم"], ["To evaporate the water", "لتبخير الماء"], ["To disinfect the tubes", "لتطهير الأنابيب"], ["To make the starch dark blue", "لجعل النشا أزرق داكنًا"]],
            off: ["About 40 °C makes the same environment as inside the body, where saliva works.", "حوالي ٤٠ درجة سيليزية تحاكي البيئة داخل الجسم حيث يعمل اللعاب."],
            sto: ["The tubes take a warm bath so the saliva feels at home, like inside Mariam's mouth.", "الأنابيب تأخذ حمامًا دافئًا ليشعر اللعاب أنه في بيته، مثل داخل فم مريم."] },
          { q: ["Where are the digested nutrients mainly absorbed into the blood?", "أين تُمتص العناصر الغذائية المهضومة غالبًا إلى الدم؟"],
            c: [["Small intestine", "الأمعاء الدقيقة"], ["Esophagus", "المريء"], ["Stomach", "المعدة"], ["Large intestine", "الأمعاء الغليظة"]],
            off: ["Nutrients are absorbed mainly in the small intestine along with water.", "تُمتص العناصر الغذائية غالبًا في الأمعاء الدقيقة مع الماء."],
            sto: ["The small intestine is the towel that soaks up the good stuff.", "الأمعاء الدقيقة هي الفوطة التي تمتص الأشياء المفيدة."] },
          { q: ["What is the advantage of villi on the wall of the small intestine?", "ما فائدة الخملات في جدار الأمعاء الدقيقة؟"],
            c: [["They make the surface larger, so nutrients are absorbed efficiently", "تزيد مساحة السطح فتُمتص العناصر الغذائية بكفاءة"], ["They make it easier to swallow food", "تسهّل بلع الطعام"], ["They make food move faster", "تجعل الطعام يتحرك أسرع"], ["They produce saliva", "تُفرز اللعاب"]],
            off: ["Villi are lined up closely, so the inner surface area becomes larger and absorption is efficient.", "الخملات متراصة بجانب بعضها، فتزداد مساحة السطح الداخلي ويصبح الامتصاص فعالًا."],
            sto: ["A towel with many loops soaks up more water than a flat cloth. Villi are those loops.", "الفوطة ذات الحلقات الكثيرة تمتص ماءً أكثر من القماش الأملس، والخملات هي هذه الحلقات."] },
          { q: ["Where do the nutrients absorbed in the small intestine pass through first, to be sent to the whole body?", "أين تمر العناصر الغذائية الممتصة في الأمعاء الدقيقة أولًا لتُرسل إلى الجسم كله؟"],
            c: [["The liver", "الكبد"], ["The stomach", "المعدة"], ["The large intestine", "الأمعاء الغليظة"], ["The lungs", "الرئتان"]],
            off: ["The blood carries the nutrients through the liver, which stores some and sends them out when needed.", "ينقل الدم العناصر الغذائية مرورًا بالكبد الذي يخزن بعضها ويرسلها عند الحاجة."],
            sto: ["The liver is the storeroom: it keeps some supplies and hands them out later.", "الكبد هو المخزن: يحتفظ ببعض المؤن ويوزعها فيما بعد."] }
        ]
      },
      {
        id: "p6u2l2", icon: "❤️", page: 34,
        title: { en: "Blood Circulation and Excretion", ar: "الدورة الدموية والإخراج" },
        idea: {
          official: {
            en: ["Nutrients from the small intestine and oxygen from the lungs are carried to the whole body by the blood. The heart pumps the blood out; it travels around the body and returns to the heart.",
              "The movement of the heart when pumping out blood is a heartbeat. It travels through the blood vessels and is felt as a pulse at the wrist, the neck or the ankle.",
              "When you exercise, your pulse becomes faster, so the blood carries more oxygen and nutrients to the whole body quickly.",
              "Blood collects carbon dioxide and waste from the body. Blood returning to the heart is sent to the lungs to let out carbon dioxide and take in oxygen.",
              "The two kidneys, one on each side of the backbone in the lower back, filter waste and excess water out of the blood to make urine. Urine is stored in the bladder, then discharged.",
              "The lungs and heart are in the chest, protected by the ribs; the stomach and intestines are in the abdomen. All organs are connected by blood vessels and work together."],
            ar: ["تنقل الدماء العناصر الغذائية من الأمعاء الدقيقة والأكسجين من الرئتين إلى الجسم كله، ويضخ القلب الدم فينتقل في أنحاء الجسم ثم يعود إلى القلب.",
              "حركة القلب أثناء ضخ الدم تسمى ضربة القلب (نبضة القلب)، وهي تنتقل عبر الأوعية الدموية ونشعر بها نبضًا عند الرسغ أو الرقبة أو الكاحل.",
              "عند ممارسة الرياضة يصبح النبض أسرع، فيحمل الدم مزيدًا من الأكسجين والعناصر الغذائية إلى الجسم كله بسرعة.",
              "يجمع الدم ثاني أكسيد الكربون والفضلات من الجسم، والدم العائد إلى القلب يُرسل إلى الرئتين ليتخلص من ثاني أكسيد الكربون ويأخذ الأكسجين.",
              "الكليتان، واحدة على كل جانب من العمود الفقري أسفل الظهر، ترشّحان الفضلات والماء الزائد من الدم فيتكوّن البول، الذي يُخزَّن في المثانة البولية ثم يخرج من الجسم.",
              "الرئتان والقلب في الصدر وتحميها الضلوع، والمعدة والأمعاء في البطن، وكل الأعضاء متصلة بالأوعية الدموية وتعمل معًا."]
          },
          story: {
            en: ["Omar was playing football at the youth centre in Shubra. After a fast run, he felt his heart thumping.",
              "The coach showed him how to find the pulse at the base of his thumb. Sitting, he counted about 80 beats in a minute; after running, many more!",
              "\"Your heart is a pump,\" said the coach. \"When your legs need more oxygen, it beats faster to deliver it quickly.\"",
              "Omar remembered the water filter jug at home. \"Your kidneys are like that filter,\" the coach said, \"cleaning waste out of your blood all day.\"",
              "At the Egyptian Museum, Omar later saw canopic jars. The ancient Egyptians knew exactly where the organs are inside the body!"],
            ar: ["كان عمر يلعب كرة القدم في مركز الشباب بشبرا، وبعد جري سريع شعر بقلبه يدق بقوة.",
              "علّمه المدرب كيف يجد النبض عند قاعدة الإبهام في الرسغ. وهو جالس عدّ حوالي ٨٠ نبضة في الدقيقة، وبعد الجري عدّ أكثر بكثير!",
              "قال المدرب: «قلبك مضخة؛ عندما تحتاج رجلاك إلى أكسجين أكثر يدق أسرع ليوصله بسرعة.»",
              "تذكّر عمر فلتر الماء في البيت، فقال المدرب: «كليتاك تشبهان هذا الفلتر، تنظفان دمك من الفضلات طوال اليوم.»",
              "وفيما بعد رأى عمر الأواني الكانوبية في المتحف المصري؛ فقد عرف المصريون القدماء أماكن الأعضاء داخل الجسم بدقة!"]
          }
        },
        words: [
          ["Heart", "القلب", "The organ that works like a pump to send blood to the whole body.", "العضو الذي يعمل كمضخة لإرسال الدم إلى الجسم كله."],
          ["Heartbeat", "ضربة القلب", "The movement of the heart when it pumps out blood.", "حركة القلب أثناء ضخ الدم."],
          ["Pulse", "النبض", "The heartbeat felt through a blood vessel, for example at the wrist.", "ضربات القلب التي نشعر بها عبر وعاء دموي، مثل الرسغ."],
          ["Blood circulation", "الدورة الدموية", "Blood leaving the heart, travelling around the body and returning to the heart.", "خروج الدم من القلب وانتقاله في أنحاء الجسم ثم عودته إلى القلب."],
          ["Kidneys", "الكليتان", "Two organs in the lower back that filter waste and excess water from the blood.", "عضوان أسفل الظهر يرشّحان الفضلات والماء الزائد من الدم."],
          ["Urine", "البول", "The liquid waste made by the kidneys.", "الفضلات السائلة التي تكوّنها الكليتان."],
          ["Bladder", "المثانة البولية", "Stores urine for a while before it is discharged from the body.", "تخزن البول مؤقتًا قبل خروجه من الجسم."]
        ],
        lab: { parts: [{ type: "p6_heart" }, {
          type: "sort",
          prompt: ["Tap an organ, then tap where it is in the body.", "اضغط على عضو، ثم اضغط على مكانه في الجسم."],
          bins: [["chest", "🫁", "Chest", "الصدر"], ["abd", "🍽️", "Abdomen", "البطن"], ["back", "🦴", "Lower back", "أسفل الظهر"]],
          items: [
            [["Lungs", "الرئتان"], "chest"], [["Heart", "القلب"], "chest"], [["Stomach", "المعدة"], "abd"],
            [["Small intestine", "الأمعاء الدقيقة"], "abd"], [["Large intestine", "الأمعاء الغليظة"], "abd"], [["Kidneys", "الكليتان"], "back"]
          ]
        }] },
        quiz: [
          { q: ["What is the organ that works like a pump to send blood to the whole body?", "ما العضو الذي يعمل كمضخة لإرسال الدم إلى الجسم كله؟"],
            c: [["The heart", "القلب"], ["The lungs", "الرئتان"], ["The liver", "الكبد"], ["The kidneys", "الكليتان"]],
            off: ["The heart is constantly beating to pump out blood.", "القلب يدق باستمرار ليضخ الدم."],
            sto: ["Omar's coach called the heart a pump that never takes a holiday.", "سمّى مدرب عمر القلب مضخة لا تأخذ إجازة أبدًا."] },
          { q: ["Why does your pulse become faster after exercising?", "لماذا يصبح النبض أسرع بعد ممارسة الرياضة؟"],
            c: [["To carry more oxygen and nutrients to the body quickly", "لنقل مزيد من الأكسجين والعناصر الغذائية إلى الجسم بسرعة"], ["To let the blood rest", "لكي يستريح الدم"], ["Because there are not enough nutrients", "لأن العناصر الغذائية غير كافية"], ["To stop the lungs working", "لإيقاف عمل الرئتين"]],
            off: ["Working muscles need more oxygen and nutrients, so the heart beats faster to deliver them quickly.", "العضلات العاملة تحتاج إلى أكسجين وعناصر غذائية أكثر، فيدق القلب أسرع ليوصلها بسرعة."],
            sto: ["More running means more orders, so the delivery bikes must go faster.", "جري أكثر يعني طلبات أكثر، فيجب أن تسرع دراجات التوصيل."] },
          { q: ["What do we call the movement of the heart while pumping out blood?", "ماذا نسمي حركة القلب أثناء ضخ الدم؟"],
            c: [["A heartbeat", "ضربة القلب"], ["Digestion", "الهضم"], ["Transpiration", "النتح"], ["Breathing", "الشهيق والزفير"]],
            off: ["The movement of the heart during pumping out blood is called a heartbeat; we feel it as a pulse.", "حركة القلب أثناء ضخ الدم تسمى ضربة القلب، ونشعر بها نبضًا."],
            sto: ["Each squeeze of the pump is one beat, like one push of a hand pump.", "كل عصرة للمضخة هي ضربة واحدة، مثل ضغطة واحدة على مضخة يدوية."] },
          { q: ["Where is blood that returns to the heart sent next, to let out carbon dioxide?", "إلى أين يُرسل الدم العائد إلى القلب ليتخلص من ثاني أكسيد الكربون؟"],
            c: [["To the lungs", "إلى الرئتين"], ["To the stomach", "إلى المعدة"], ["To the bladder", "إلى المثانة"], ["To the small intestine", "إلى الأمعاء الدقيقة"]],
            off: ["Returning blood is sent to the lungs to let out carbon dioxide and take in oxygen.", "يُرسل الدم العائد إلى الرئتين ليتخلص من ثاني أكسيد الكربون ويأخذ الأكسجين."],
            sto: ["The blue blood goes to the lungs to swap its rubbish for fresh oxygen and comes back red.", "يذهب الدم الأزرق إلى الرئتين ليبادل فضلاته بأكسجين جديد ويعود أحمر."] },
          { q: ["Which statement correctly explains how the kidneys work?", "أي عبارة تشرح عمل الكليتين بشكل صحيح؟"],
            c: [["They take waste products out of the blood", "تُخرج الفضلات من الدم"], ["They absorb oxygen from the blood", "تمتص الأكسجين من الدم"], ["They pump blood to the whole body", "تضخ الدم إلى الجسم كله"], ["They digest food", "تهضم الطعام"]],
            off: ["In the kidneys, waste and excess water are filtered out of the blood to become urine.", "في الكليتين تُرشَّح الفضلات والماء الزائد من الدم ليتكوّن البول."],
            sto: ["Like the water filter jug at Omar's house, the kidneys keep the clean part and remove the dirt.", "مثل فلتر الماء في بيت عمر، تحتفظ الكليتان بالجزء النظيف وتزيلان الشوائب."] },
          { q: ["Where is urine stored until it is discharged from the body?", "أين يُخزن البول حتى يخرج من الجسم؟"],
            c: [["In the bladder", "في المثانة البولية"], ["In the kidneys forever", "في الكليتين دائمًا"], ["In the stomach", "في المعدة"], ["In the heart", "في القلب"]],
            off: ["Urine is stored for a while in the bladder, then discharged out of the body.", "يُخزن البول مؤقتًا في المثانة البولية ثم يخرج من الجسم."],
            sto: ["The bladder is the waiting tank before the waste leaves the house.", "المثانة هي خزان الانتظار قبل أن تخرج الفضلات من البيت."] },
          { q: ["Which two organs are inside the chest?", "ما العضوان الموجودان داخل الصدر؟"],
            c: [["Heart and lungs", "القلب والرئتان"], ["Stomach and heart", "المعدة والقلب"], ["Lungs and small intestine", "الرئتان والأمعاء الدقيقة"], ["Kidneys and stomach", "الكليتان والمعدة"]],
            off: ["The left and right lungs are in the chest with the heart between them, protected by the ribs.", "الرئتان اليمنى واليسرى في الصدر والقلب بينهما، وتحميها الضلوع."],
            sto: ["The ribs are a strong cage guarding the heart and lungs, like a fence round a garden.", "الضلوع قفص قوي يحرس القلب والرئتين، مثل سور حول حديقة."] }
        ]
      }
    ]
  });

  /* ================= UNIT 3 - Plants and Food Chains ================= */
  U.push({
    id: "p6u3", num: 3, icon: "🌿", color: "green",
    title: { en: "Plants and Food Chains", ar: "النباتات والسلاسل الغذائية" },
    lessons: [
      {
        id: "p6u3l1", icon: "☀️", page: 46,
        title: { en: "Photosynthesis", ar: "البناء الضوئي" },
        idea: {
          official: {
            en: ["When sunlight falls on the leaves, the plant performs photosynthesis: it uses water and carbon dioxide to make its food (sugar) and stores part of it as starch, needed for growth.",
              "Iodine solution turns starch dark blue. To test a leaf: soften it in hot water, remove its green colour in warmed ethanol, wash it, then dip it in dilute iodine solution.",
              "A leaf covered with aluminium foil gets no sunlight and makes no starch, so it does not turn dark blue. The only condition we change is whether the leaf gets sunlight.",
              "When sunlight hits the leaves, plants take in carbon dioxide and release oxygen. Plants also breathe to live and grow: they take in oxygen and release carbon dioxide.",
              "In the daytime, taking in carbon dioxide is very active, so overall plants take in more carbon dioxide than they release. At night, with no light, they only breathe."],
            ar: ["عندما يسقط ضوء الشمس على الأوراق يقوم النبات بعملية البناء الضوئي؛ فيستخدم الماء وثاني أكسيد الكربون لصنع غذائه (السكر)، ويخزن جزءًا منه في صورة نشا يحتاجه للنمو.",
              "محلول اليود يحوّل لون النشا إلى الأزرق الداكن. ولاختبار الورقة: نضعها في ماء ساخن لتلين، ثم في كحول إيثيلي دافئ لإزالة لونها الأخضر، ثم نغسلها ونغمسها في محلول اليود المخفف.",
              "الورقة المغطاة بورق الألومنيوم لا يصلها ضوء الشمس فلا تصنع نشا، ولذلك لا تتلون بالأزرق الداكن، والعامل الوحيد الذي نغيّره هو وصول ضوء الشمس إلى الورقة.",
              "عندما يسقط ضوء الشمس على الأوراق يأخذ النبات ثاني أكسيد الكربون ويُخرج الأكسجين، والنبات يتنفس أيضًا ليعيش وينمو فيأخذ الأكسجين ويُخرج ثاني أكسيد الكربون.",
              "في النهار يكون أخذ ثاني أكسيد الكربون نشطًا جدًا، فيأخذ النبات إجمالًا ثاني أكسيد كربون أكثر مما يُخرج، وفي الليل لا يوجد ضوء فيتنفس فقط."]
          },
          story: {
            en: ["Nour spent a weekend on her grandfather's mango farm in Ismailia.",
              "She wrapped one mango leaf in aluminium foil like a little sandwich and left the others in the hot sun.",
              "The next day, at the farm lab, they tested the leaves with iodine. The sunny leaves turned dark blue, but the foil leaf did not: no sunlight, no starch!",
              "\"Leaves are tiny kitchens,\" said Grandpa. \"With sunlight, water and carbon dioxide, they cook sugar and store some as starch.\"",
              "Nour also learned that the trees breathe day and night, but in daylight they take in far more carbon dioxide and give out oxygen for us."],
            ar: ["قضت نور عطلة نهاية الأسبوع في مزرعة المانجو التي يملكها جدها في الإسماعيلية.",
              "لفّت نور ورقة مانجو واحدة بورق الألومنيوم مثل الساندويتش الصغير، وتركت باقي الأوراق في الشمس الحارة.",
              "في اليوم التالي اختبرا الأوراق بمحلول اليود، فتلونت الأوراق المشمسة بالأزرق الداكن ولم تتلون الورقة المغطاة: لا ضوء، لا نشا!",
              "قال الجد: «الأوراق مطابخ صغيرة؛ بضوء الشمس والماء وثاني أكسيد الكربون تطبخ السكر وتخزن بعضه نشا.»",
              "وعرفت نور أن الأشجار تتنفس ليلًا ونهارًا، لكنها في ضوء النهار تأخذ ثاني أكسيد كربون أكثر بكثير وتُخرج لنا الأكسجين."]
          }
        },
        words: [
          ["Photosynthesis", "البناء الضوئي", "Plants using sunlight, water and carbon dioxide to make their food (sugar).", "استخدام النبات لضوء الشمس والماء وثاني أكسيد الكربون لصنع غذائه (السكر)."],
          ["Starch", "النشا", "Stored food made in leaves in sunlight; it turns dark blue with iodine.", "غذاء مخزن تصنعه الأوراق في ضوء الشمس، ويتلون بالأزرق الداكن مع اليود."],
          ["Iodine solution", "محلول اليود", "A solution used to test for starch: starch turns dark blue.", "محلول يُستخدم للكشف عن النشا؛ فيتلون النشا بالأزرق الداكن."],
          ["Ethanol", "الكحول الإيثيلي", "Warmed (never over a flame) to remove the green colour from a leaf.", "يُدفأ (وليس على اللهب مباشرة) لإزالة اللون الأخضر من الورقة."],
          ["Aluminium foil", "ورق الألومنيوم", "Used to cover leaves so that sunlight does not fall on them.", "يُستخدم لتغطية الأوراق حتى لا يسقط عليها ضوء الشمس."],
          ["Plant breathing", "تنفس النبات", "Plants take in oxygen and release carbon dioxide, day and night.", "يأخذ النبات الأكسجين ويُخرج ثاني أكسيد الكربون ليلًا ونهارًا."]
        ],
        lab: { parts: [{ type: "p6_photo" }, {
          type: "sort",
          prompt: ["Tap a fact, then tap when it happens.", "اضغط على معلومة، ثم اضغط على وقت حدوثها."],
          bins: [["day", "☀️", "Daytime (light)", "النهار (ضوء)"], ["night", "🌙", "Night only", "الليل فقط"], ["both", "🔁", "Day and night", "ليلًا ونهارًا"]],
          items: [
            [["Starch is made in the leaves", "يُصنع النشا في الأوراق"], "day"], [["More carbon dioxide taken in than released", "يأخذ ثاني أكسيد كربون أكثر مما يُخرج"], "day"],
            [["Only breathing happens", "يحدث التنفس فقط"], "night"], [["Carbon dioxide in the bag rises", "يزداد ثاني أكسيد الكربون في الكيس"], "night"],
            [["The plant breathes: takes in oxygen", "يتنفس النبات: يأخذ الأكسجين"], "both"]
          ]
        }] },
        quiz: [
          { q: ["What nutrient is produced and stored when sunlight falls on the leaves of plants?", "ما المادة الغذائية التي تُصنع وتُخزن عندما يسقط ضوء الشمس على أوراق النبات؟"],
            c: [["Starch", "النشا"], ["Salt", "الملح"], ["Iodine", "اليود"], ["Oxygen only", "الأكسجين فقط"]],
            off: ["The plant makes sugar by photosynthesis and stores part of it as starch.", "يصنع النبات السكر بالبناء الضوئي ويخزن جزءًا منه في صورة نشا."],
            sto: ["Nour's sunny mango leaves were full of starch, the plant's stored lunch.", "كانت أوراق المانجو المشمسة عند نور مليئة بالنشا، الغداء المخزن للنبات."] },
          { q: ["What colour does a leaf that was in the sunlight turn when dipped in iodine solution?", "ما اللون الذي تتلون به ورقة كانت في ضوء الشمس عند غمسها في محلول اليود؟"],
            c: [["Dark blue", "أزرق داكن"], ["Yellow", "أصفر"], ["Red", "أحمر"], ["It does not change", "لا يتغير"]],
            off: ["The leaf contains starch, and iodine turns starch dark blue.", "الورقة تحتوي على نشا، ومحلول اليود يحوّل لون النشا إلى الأزرق الداكن."],
            sto: ["Iodine is a starch detective: wherever starch hides, it paints it dark blue.", "اليود محقق النشا: أينما اختبأ النشا يلونه بالأزرق الداكن."] },
          { q: ["In the experiment to check if sunlight is needed to make starch, what is the condition you change?", "في تجربة التحقق من أن ضوء الشمس لازم لصنع النشا، ما العامل الذي تغيّره؟"],
            c: [["Whether the leaf gets sunlight or not", "وصول ضوء الشمس إلى الورقة أو عدم وصوله"], ["The amount of water in the pot", "كمية الماء في الأصيص"], ["The type of plant", "نوع النبات"], ["The colour of the foil", "لون ورق الألومنيوم"]],
            off: ["We change only one condition: whether the leaf receives sunlight. Everything else stays the same.", "نغيّر عاملًا واحدًا فقط وهو وصول ضوء الشمس إلى الورقة، ويبقى كل شيء آخر كما هو."],
            sto: ["Nour wrapped just one leaf on the same tree, so the only difference was the light.", "لفّت نور ورقة واحدة على الشجرة نفسها، فكان الفرق الوحيد هو الضوء."] },
          { q: ["Part of a leaf is covered with aluminium foil in the sun. How does that part react with iodine?", "غُطي جزء من ورقة بورق الألومنيوم في الشمس. كيف يتفاعل هذا الجزء مع اليود؟"],
            c: [["It does not turn dark blue", "لا يتلون بالأزرق الداكن"], ["It turns dark blue", "يتلون بالأزرق الداكن"], ["It turns red", "يتلون بالأحمر"], ["It burns", "يحترق"]],
            off: ["No sunlight reached that part, so no starch was made there.", "لم يصل ضوء الشمس إلى هذا الجزء، فلم يُصنع فيه نشا."],
            sto: ["The foil was a sunshade: the kitchen under it had no fire to cook.", "كان ورق الألومنيوم مظلة: المطبخ تحته لم يجد نارًا للطهي."] },
          { q: ["What gas do plants release into the air when they are in sunlight?", "ما الغاز الذي يُخرجه النبات إلى الهواء عندما يكون في ضوء الشمس؟"],
            c: [["Oxygen", "الأكسجين"], ["Carbon dioxide only", "ثاني أكسيد الكربون فقط"], ["Nitrogen", "النيتروجين"], ["Water vapour only", "بخار الماء فقط"]],
            off: ["When sunlight hits the leaves, plants take in carbon dioxide and release oxygen.", "عندما يسقط ضوء الشمس على الأوراق يأخذ النبات ثاني أكسيد الكربون ويُخرج الأكسجين."],
            sto: ["Grandpa's mango trees give out oxygen for Nour all day long.", "تُخرج أشجار المانجو عند الجد الأكسجين لنور طوال النهار."] },
          { q: ["At night, with no light, what gas exchange do plants do?", "في الليل حيث لا يوجد ضوء، ما تبادل الغازات الذي يقوم به النبات؟"],
            c: [["They take in oxygen and release carbon dioxide (breathing)", "يأخذ الأكسجين ويُخرج ثاني أكسيد الكربون (التنفس)"], ["They take in carbon dioxide and release oxygen", "يأخذ ثاني أكسيد الكربون ويُخرج الأكسجين"], ["They do no gas exchange at all", "لا يقوم بأي تبادل للغازات"], ["They release only nitrogen", "يُخرج النيتروجين فقط"]],
            off: ["Without light there is no photosynthesis, so plants only breathe.", "بدون ضوء لا يحدث بناء ضوئي، فيتنفس النبات فقط."],
            sto: ["At night the kitchen closes, but the plant still breathes like us.", "في الليل يُغلق المطبخ، لكن النبات ما زال يتنفس مثلنا."] },
          { q: ["Which statement is correct?", "أي عبارة صحيحة؟"],
            c: [["In the daytime, plants take in more carbon dioxide than they release by breathing", "في النهار يأخذ النبات ثاني أكسيد كربون أكثر مما يُخرجه بالتنفس"], ["Plants release only oxygen all day and night", "يُخرج النبات الأكسجين فقط ليلًا ونهارًا"], ["Plants do not breathe while sunlight hits them", "النبات لا يتنفس أثناء سقوط ضوء الشمس عليه"], ["Plants make starch in the dark", "يصنع النبات النشا في الظلام"]],
            off: ["Breathing also happens in the day, but taking in carbon dioxide for photosynthesis is much more active.", "التنفس يحدث في النهار أيضًا، لكن أخذ ثاني أكسيد الكربون للبناء الضوئي يكون أنشط بكثير."],
            sto: ["In the day the plant spends a little and earns a lot, so overall it takes in carbon dioxide.", "في النهار ينفق النبات قليلًا ويكسب كثيرًا، فيأخذ ثاني أكسيد الكربون إجمالًا."] }
        ]
      },
      {
        id: "p6u3l2", icon: "💧", page: 54,
        title: { en: "Transportation of Water in Plants", ar: "انتقال الماء في النبات" },
        idea: {
          official: {
            en: ["Some of the water absorbed by the roots goes out into the air from the leaves.",
              "The process of water inside the plant changing into water vapour and being released into the air is called transpiration.",
              "Stomata are small pores, mostly on the lower surface of the leaves. They are the exits for water vapour, and transpiration happens mainly through them.",
              "In the sun, a bag over a plant with leaves becomes cloudy with water drops, but a bag over a plant with its leaves taken off does not.",
              "Plants have paths in the roots, stems and leaves to carry water, in the order roots → stems → leaves. Coloured water shows these paths in red.",
              "A wilted plant recovers after its base is watered, because water spreads to the whole plant. Transpiration also cools the air around plants."],
            ar: ["جزء من الماء الذي تمتصه الجذور يخرج إلى الهواء من الأوراق.",
              "عملية تحوّل الماء داخل النبات إلى بخار ماء وخروجه إلى الهواء تسمى النتح.",
              "الثغور فتحات صغيرة توجد غالبًا على السطح السفلي للأوراق، وهي مخارج لبخار الماء، ويحدث النتح غالبًا من خلالها.",
              "في الشمس يصبح الكيس الموضوع على نبات له أوراق معتمًا وتتكون عليه قطرات ماء، أما الكيس الموضوع على نبات نُزعت أوراقه فلا يحدث فيه ذلك.",
              "في الجذور والسيقان والأوراق مسارات لنقل الماء بالترتيب: الجذور ← الساق ← الأوراق، والماء الملون يُظهر هذه المسارات باللون الأحمر.",
              "النبات الذابل يستعيد نضارته بعد ري قاعدته لأن الماء ينتشر في النبات كله، والنتح أيضًا يلطّف الهواء حول النبات."]
          },
          story: {
            en: ["It was a hot July day in Cairo, and the molokhia plants on Karim's balcony were drooping sadly.",
              "Karim watered the soil, and after a while the plants stood up again. The water had travelled up through the roots, then the stems, then the leaves.",
              "His teacher put a celery stick in water with red food colour. Hours later, red lines ran up the stem like tiny water pipes.",
              "Karim tied a plastic bag over a leafy branch in the sun. Soon the bag was cloudy with drops: water vapour was leaving through the stomata.",
              "\"Plants are natural air conditioners,\" said his teacher. \"Transpiration cools the air, which is why it feels fresh under the trees by the Nile.\""],
            ar: ["كان يومًا حارًا من شهر يوليو في القاهرة، وكانت نباتات الملوخية في بلكونة كريم ذابلة حزينة.",
              "سقى كريم التربة، وبعد فترة وقفت النباتات من جديد؛ فقد صعد الماء في الجذور ثم الساق ثم الأوراق.",
              "وضعت المعلمة عود كرفس في ماء ملون بصبغة طعام حمراء، وبعد ساعات ظهرت خطوط حمراء في الساق مثل مواسير ماء صغيرة.",
              "ربط كريم كيسًا بلاستيكيًا على فرع مورق في الشمس، وسرعان ما أصبح الكيس معتمًا بالقطرات؛ فبخار الماء يخرج من الثغور.",
              "قالت المعلمة: «النباتات مكيفات طبيعية؛ النتح يلطّف الهواء، ولهذا نشعر بالانتعاش تحت الأشجار على شاطئ النيل.»"]
          }
        },
        words: [
          ["Transpiration", "النتح", "Water inside the plant changing into water vapour and being released into the air.", "تحوّل الماء داخل النبات إلى بخار ماء وخروجه إلى الهواء."],
          ["Stomata", "الثغور", "Small pores, mostly on the lower surface of leaves; exits for water vapour.", "فتحات صغيرة توجد غالبًا على السطح السفلي للأوراق، وهي مخارج لبخار الماء."],
          ["Water vapour", "بخار الماء", "Water as a gas; it leaves the leaves and can form drops on a cool bag.", "الماء في صورة غاز، يخرج من الأوراق وقد يتكثف قطرات على الكيس."],
          ["Roots", "الجذور", "Absorb water from the soil; the first part of the water path.", "تمتص الماء من التربة، وهي أول جزء في مسار الماء."],
          ["Stem", "الساق", "Carries water in tubes from the roots up to the leaves.", "تنقل الماء في أنابيب من الجذور إلى الأوراق."],
          ["Wilting", "الذبول", "Drooping of a plant that lacks water; it recovers when watered.", "ارتخاء النبات عند نقص الماء، ويستعيد نضارته عند ريّه."]
        ],
        lab: { parts: [{ type: "p6_water" }] },
        quiz: [
          { q: ["What is the process called when water inside a plant changes into water vapour and leaves from the leaves?", "ما اسم العملية التي يتحول فيها الماء داخل النبات إلى بخار ويخرج من الأوراق؟"],
            c: [["Transpiration", "النتح"], ["Photosynthesis", "البناء الضوئي"], ["Digestion", "الهضم"], ["Respiration", "التنفس"]],
            off: ["Water changing into water vapour and being released into the air from the plant is transpiration.", "تحوّل الماء إلى بخار وخروجه من النبات إلى الهواء هو النتح."],
            sto: ["The drops in Karim's bag came from transpiration through the leaves.", "القطرات في كيس كريم جاءت من النتح عبر الأوراق."] },
          { q: ["Why did water drops form inside the plastic bag over the leafy plant?", "لماذا تكونت قطرات ماء داخل الكيس البلاستيكي الموضوع على النبات المورق؟"],
            c: [["Water vapour came out of the leaves and changed into water", "خرج بخار الماء من الأوراق وتحول إلى ماء"], ["It rained from outside", "لأن المطر سقط من الخارج"], ["The plant released carbon dioxide", "لأن النبات أخرج ثاني أكسيد الكربون"], ["The bag was wet before", "لأن الكيس كان مبللًا من قبل"]],
            off: ["Transpired water vapour collected in the closed bag and turned back into drops of water.", "تجمع بخار الماء الناتج عن النتح في الكيس المغلق وتحول مرة أخرى إلى قطرات ماء."],
            sto: ["The plant was sweating invisible steam, and the bag caught it as drops.", "كان النبات يُخرج بخارًا غير مرئي، والكيس التقطه في صورة قطرات."] },
          { q: ["What are the small pores, mostly on the lower surface of leaves, that are exits for water vapour?", "ما اسم الفتحات الصغيرة الموجودة غالبًا على السطح السفلي للأوراق والتي تعد مخارج لبخار الماء؟"],
            c: [["Stomata", "الثغور"], ["Villi", "الخملات"], ["Alveoli", "الحويصلات الهوائية"], ["Gills", "الخياشيم"]],
            off: ["Stomata are the small pores through which transpiration mainly happens.", "الثغور هي الفتحات الصغيرة التي يحدث النتح غالبًا من خلالها."],
            sto: ["Stomata are the tiny doors on the underside of the leaf where vapour slips out.", "الثغور أبواب صغيرة أسفل الورقة يتسلل منها البخار."] },
          { q: ["In what order does water absorbed by the roots move through the plant?", "بأي ترتيب ينتقل الماء الذي تمتصه الجذور داخل النبات؟"],
            c: [["Roots → stems → leaves", "الجذور ← الساق ← الأوراق"], ["Leaves → stems → roots", "الأوراق ← الساق ← الجذور"], ["Stems → roots → leaves", "الساق ← الجذور ← الأوراق"], ["Roots → leaves → stems", "الجذور ← الأوراق ← الساق"]],
            off: ["Water is transported in the order roots, stems, leaves.", "يُنقل الماء بالترتيب: الجذور، ثم الساق، ثم الأوراق."],
            sto: ["Like water climbing a building: from the basement pump, up the pipes, to the top floor taps.", "مثل الماء في عمارة: من مضخة البدروم، في المواسير، إلى حنفيات الدور الأخير."] },
          { q: ["Which statement correctly explains the path of water in plants?", "أي عبارة تشرح مسار الماء في النبات بشكل صحيح؟"],
            c: [["Tubes are connected from the roots to the tips of the leaves to carry water", "توجد أنابيب متصلة من الجذور حتى أطراف الأوراق لنقل الماء"], ["Water flows freely everywhere inside the stem", "يتدفق الماء بحرية في كل مكان داخل الساق"], ["Water passes through the stem but does not reach the leaves", "يمر الماء في الساق ولكنه لا يصل إلى الأوراق"], ["Water enters through the leaves and leaves through the roots", "يدخل الماء من الأوراق ويخرج من الجذور"]],
            off: ["When the plant is cut, only certain parts are coloured red: these are the connected water paths.", "عند قطع النبات تتلون أجزاء معينة فقط بالأحمر، وهي مسارات الماء المتصلة."],
            sto: ["The red lines in the celery were the plant's own water pipes.", "الخطوط الحمراء في الكرفس كانت مواسير الماء الخاصة بالنبات."] },
          { q: ["A plant is wilted. What should you do to help it recover?", "نبات ذابل. ماذا تفعل لمساعدته على استعادة نضارته؟"],
            c: [["Water the base of the plant", "أروي قاعدة النبات"], ["Cover it with aluminium foil", "أغطيه بورق الألومنيوم"], ["Remove all its leaves", "أنزع كل أوراقه"], ["Put it in a sealed box", "أضعه في صندوق مغلق"]],
            off: ["After watering the base, water spreads through the whole plant and it recovers after a while.", "بعد ري القاعدة ينتشر الماء في النبات كله فيستعيد نضارته بعد فترة."],
            sto: ["Karim's molokhia stood up again after a good drink of water.", "وقفت ملوخية كريم من جديد بعد أن شربت الماء جيدًا."] },
          { q: ["How do plants help in a hot, desert country like Egypt?", "كيف تساعد النباتات في بلد حار صحراوي مثل مصر؟"],
            c: [["Transpiration cools the air around them", "النتح يلطّف الهواء حولها"], ["They heat the air at night", "تسخّن الهواء ليلًا"], ["They stop the wind completely", "توقف الرياح تمامًا"], ["They release nitrogen", "تُخرج النيتروجين"]],
            off: ["Transpiration lowers the temperature around plants, acting like a natural air conditioner.", "النتح يخفض درجة الحرارة حول النبات، فيعمل كمكيف هواء طبيعي."],
            sto: ["That is why the shade of a tree by the Nile feels so fresh in summer.", "ولهذا نشعر بانتعاش في ظل شجرة على النيل في الصيف."] }
        ]
      },
      {
        id: "p6u3l3", icon: "🐸", page: 62,
        title: { en: "Food Chain", ar: "السلسلة الغذائية" },
        idea: {
          official: {
            en: ["The eater-and-eaten relationship (the feeding among living organisms) is called a food chain.",
              "Plants use sunlight to produce nutrients inside their bodies, so plants are the beginning of every food chain.",
              "Herbivores are animals that eat plants, like grasshoppers and rabbits. Carnivores are animals that eat other animals, like snakes, falcons, eagles and lions.",
              "We show a chain with arrows: Grass → Grasshopper → Frog → Snake → Owl. The arrow points in the direction energy moves.",
              "Animals use the oxygen released by plants to breathe, and plants use the carbon dioxide breathed out by animals for photosynthesis.",
              "Plants release water vapour by transpiration. It joins the water cycle with water that evaporates from oceans, rivers and lakes, forms clouds and falls as rain."],
            ar: ["علاقة «آكل ومأكول» (التغذي بين الكائنات الحية) تسمى السلسلة الغذائية.",
              "النباتات تستخدم ضوء الشمس لصنع الغذاء داخل أجسامها، ولذلك تبدأ كل سلسلة غذائية بالنباتات.",
              "آكلات الأعشاب حيوانات تتغذى على النباتات مثل الجراد والأرانب، وآكلات اللحوم حيوانات تتغذى على حيوانات أخرى مثل الثعابين والصقور والنسور والأسود.",
              "نوضح السلسلة بالأسهم: العشب ← الجرادة ← الضفدع ← الثعبان ← البومة، والسهم يشير إلى اتجاه انتقال الطاقة.",
              "تستخدم الحيوانات الأكسجين الذي تُخرجه النباتات في التنفس، وتستخدم النباتات ثاني أكسيد الكربون الذي تُخرجه الحيوانات في البناء الضوئي.",
              "تُخرج النباتات بخار الماء بالنتح، فينضم إلى دورة الماء مع الماء المتبخر من البحار والأنهار والبحيرات، فيكوّن السحب ويسقط مطرًا."]
          },
          story: {
            en: ["Hana was helping in her school garden in Mansoura when she saw a grasshopper munching a blade of grass.",
              "Suddenly a frog leapt out and caught the grasshopper! \"That is a food chain,\" said her teacher.",
              "Hana drew it with arrows: grass → grasshopper → frog. \"The arrows show where the energy goes, from the eaten to the eater.\"",
              "\"And who eats the frog?\" asked Hana. \"A snake,\" said the teacher, \"and an owl can eat the snake.\"",
              "Then Hana took a deep breath: the oxygen came from the garden plants, and the carbon dioxide she breathed out would help them make food."],
            ar: ["كانت هناء تساعد في حديقة مدرستها بالمنصورة عندما رأت جرادة تقضم ورقة عشب.",
              "وفجأة قفز ضفدع وأمسك بالجرادة! قالت المعلمة: «هذه سلسلة غذائية.»",
              "رسمتها هناء بالأسهم: العشب ← الجرادة ← الضفدع، وقالت المعلمة: «الأسهم توضح اتجاه انتقال الطاقة من المأكول إلى الآكل.»",
              "سألت هناء: «ومن يأكل الضفدع؟» فقالت المعلمة: «الثعبان، وقد تأكل البومة الثعبان.»",
              "ثم أخذت هناء نفسًا عميقًا؛ فالأكسجين جاء من نباتات الحديقة، وثاني أكسيد الكربون الذي أخرجته سيساعدها على صنع الغذاء."]
          }
        },
        words: [
          ["Food chain", "السلسلة الغذائية", "The eater-and-eaten relationship among living organisms.", "علاقة الآكل والمأكول بين الكائنات الحية."],
          ["Herbivore", "آكل الأعشاب", "An animal that eats plants, like a grasshopper or a rabbit.", "حيوان يتغذى على النباتات مثل الجرادة أو الأرنب."],
          ["Carnivore", "آكل اللحوم", "An animal that eats other animals, like a snake, falcon, eagle or lion.", "حيوان يتغذى على حيوانات أخرى مثل الثعبان أو الصقر أو النسر أو الأسد."],
          ["Energy arrow", "سهم الطاقة", "The arrow in a food chain points from the eaten to the eater: the direction energy moves.", "السهم في السلسلة الغذائية يتجه من المأكول إلى الآكل، وهو اتجاه انتقال الطاقة."],
          ["Water cycle", "دورة الماء", "Water evaporates and transpires, forms clouds and falls as rain, again and again.", "يتبخر الماء ويُنتح، فيكوّن السحب ويسقط مطرًا، مرة بعد مرة."]
        ],
        lab: { parts: [{ type: "p6_chain" }, {
          type: "sort",
          prompt: ["Tap a living thing, then tap its group.", "اضغط على كائن حي، ثم اضغط على مجموعته."],
          bins: [["pl", "🌱", "Plant (start of the chain)", "نبات (بداية السلسلة)"], ["he", "🐇", "Herbivore", "آكل أعشاب"], ["ca", "🦅", "Carnivore", "آكل لحوم"]],
          items: [
            [["Grass", "العشب"], "pl"], [["Clover", "البرسيم"], "pl"], [["Grasshopper", "الجرادة"], "he"], [["Rabbit", "الأرنب"], "he"],
            [["Snake", "الثعبان"], "ca"], [["Falcon", "الصقر"], "ca"], [["Lion", "الأسد"], "ca"], [["Frog", "الضفدع"], "ca"]
          ]
        }] },
        quiz: [
          { q: ["What do we call the food relationship between living organisms?", "ماذا نسمي العلاقة الغذائية بين الكائنات الحية؟"],
            c: [["A food chain", "السلسلة الغذائية"], ["The water cycle", "دورة الماء"], ["Transpiration", "النتح"], ["Digestion", "الهضم"]],
            off: ["The eater-and-eaten relationship among living organisms is called a food chain.", "علاقة الآكل والمأكول بين الكائنات الحية تسمى السلسلة الغذائية."],
            sto: ["Grass, grasshopper and frog in Hana's garden were linked like beads on one chain.", "العشب والجرادة والضفدع في حديقة هناء كانت مترابطة مثل حبات في سلسلة واحدة."] },
          { q: ["What kind of living organisms are the beginning of the food chain?", "ما نوع الكائنات الحية التي تبدأ بها السلسلة الغذائية؟"],
            c: [["Plants that make nutrients using sunlight", "النباتات التي تصنع غذاءها باستخدام ضوء الشمس"], ["Strong carnivores", "آكلات اللحوم القوية"], ["Herbivores like insects", "آكلات الأعشاب مثل الحشرات"], ["Owls", "البوم"]],
            off: ["Plants make their own food from sunlight, so every food chain starts with plants.", "النباتات تصنع غذاءها من ضوء الشمس، لذلك تبدأ كل سلسلة غذائية بالنباتات."],
            sto: ["The sun cooks for the plants, and everyone else eats from that kitchen.", "الشمس تطبخ للنباتات، والجميع يأكلون من هذا المطبخ."] },
          { q: ["In a food chain, which way does the arrow point?", "في السلسلة الغذائية، إلى أين يشير السهم؟"],
            c: [["From the eaten to the eater, the direction energy moves", "من المأكول إلى الآكل، وهو اتجاه انتقال الطاقة"], ["From the eater to the eaten", "من الآكل إلى المأكول"], ["From the biggest animal to the smallest", "من أكبر حيوان إلى أصغره"], ["It can point any way", "يمكن أن يشير إلى أي اتجاه"]],
            off: ["The arrow points in the direction energy moves: grass → grasshopper means the grasshopper gets energy from the grass.", "يشير السهم إلى اتجاه انتقال الطاقة؛ فالعشب ← الجرادة يعني أن الجرادة تحصل على الطاقة من العشب."],
            sto: ["Follow the food: the arrow travels with the meal into the eater's stomach.", "اتبع الطعام: السهم يسافر مع الوجبة إلى معدة الآكل."] },
          { q: ["Which animal is a herbivore?", "أي حيوان من آكلات الأعشاب؟"],
            c: [["Rabbit", "الأرنب"], ["Snake", "الثعبان"], ["Eagle", "النسر"], ["Lion", "الأسد"]],
            off: ["Herbivores are animals that eat plants, such as rabbits and grasshoppers.", "آكلات الأعشاب حيوانات تتغذى على النباتات مثل الأرانب والجراد."],
            sto: ["The rabbit's menu is all green: grass and leaves only.", "قائمة طعام الأرنب كلها خضراء: عشب وأوراق فقط."] },
          { q: ["Put in order: grasshopper, grass, eagle, frog. Which chain is correct?", "رتّب: جرادة، عشب، نسر، ضفدع. أي سلسلة صحيحة؟"],
            c: [["Grass → grasshopper → frog → eagle", "العشب ← الجرادة ← الضفدع ← النسر"], ["Eagle → frog → grasshopper → grass", "النسر ← الضفدع ← الجرادة ← العشب"], ["Grasshopper → grass → frog → eagle", "الجرادة ← العشب ← الضفدع ← النسر"], ["Grass → frog → grasshopper → eagle", "العشب ← الضفدع ← الجرادة ← النسر"]],
            off: ["Start with the plant, then the herbivore that eats it, then the carnivores in order.", "ابدأ بالنبات، ثم آكل العشب الذي يتغذى عليه، ثم آكلات اللحوم بالترتيب."],
            sto: ["The grasshopper eats grass, the frog eats the grasshopper, and the eagle swoops on the frog.", "الجرادة تأكل العشب، والضفدع يأكل الجرادة، والنسر ينقض على الضفدع."] },
          { q: ["What gas do animals breathe out and plants take in?", "ما الغاز الذي تُخرجه الحيوانات وتأخذه النباتات؟"],
            c: [["Carbon dioxide", "ثاني أكسيد الكربون"], ["Oxygen", "الأكسجين"], ["Nitrogen", "النيتروجين"], ["Hydrogen", "الهيدروجين"]],
            off: ["Plants use the carbon dioxide breathed out by animals for photosynthesis, and release oxygen.", "تستخدم النباتات ثاني أكسيد الكربون الذي تُخرجه الحيوانات في البناء الضوئي وتُخرج الأكسجين."],
            sto: ["Hana's breath out is a gift for the garden, and the garden gives oxygen back.", "زفير هناء هدية للحديقة، والحديقة ترد الهدية بالأكسجين."] },
          { q: ["Which statement about water on Earth is correct?", "أي عبارة عن الماء على الأرض صحيحة؟"],
            c: [["It keeps circulating and is used again and again by living things", "يظل في دوران ويُستخدم مرارًا بواسطة الكائنات الحية"], ["It is used once and disappears", "يُستخدم مرة واحدة ثم يختفي"], ["Plants never return water to the air", "النباتات لا تعيد الماء إلى الهواء أبدًا"], ["Rain comes only from oceans, never from plants", "المطر يأتي من البحار فقط وليس من النباتات أبدًا"]],
            off: ["Water evaporates and transpires, forms clouds and falls as rain, so it keeps circulating.", "يتبخر الماء ويُنتح ويكوّن السحب ويسقط مطرًا، فيظل في دوران."],
            sto: ["The water Hana drank today may once have been part of a cloud or inside a tree.", "الماء الذي شربته هناء اليوم ربما كان يومًا جزءًا من سحابة أو داخل شجرة."] }
        ]
      },
      {
        id: "p6u3l4", icon: "🐊", page: 68,
        title: { en: "Food Chain in Egypt", ar: "السلاسل الغذائية في مصر" },
        idea: {
          official: {
            en: ["Egypt has completely different food chains in its water environment (the Nile River) and its dry areas (the deserts).",
              "Nile chain: algae and water plants → herbivorous fish (Nile tilapia) → carnivorous fish (Nile perch) → top carnivore (Nile crocodile).",
              "Desert chain: desert shrubs and grass → herbivores (grasshoppers and jerboas) → top carnivores (fennec foxes and Egyptian vultures).",
              "More chains: shrub seeds → jerboa → viper → fennec fox, and papyrus → grasshopper → frog → heron.",
              "Plants are producers, herbivores are primary consumers, and carnivores are secondary and tertiary consumers up to the apex predator. Even when the animals differ, every chain starts with plants."],
            ar: ["في مصر سلاسل غذائية مختلفة تمامًا في البيئة المائية (نهر النيل) والمناطق الجافة (الصحاري).",
              "سلسلة النيل: الطحالب والنباتات المائية ← أسماك عاشبة (البلطي النيلي) ← أسماك لاحمة (قشر البياض) ← آكل لحوم في القمة (التمساح النيلي).",
              "سلسلة الصحراء: الشجيرات والأعشاب الصحراوية ← آكلات أعشاب (الجراد والجربوع) ← آكلات لحوم في القمة (ثعلب الفنك والنسر المصري).",
              "سلاسل أخرى: بذور الشجيرات ← الجربوع ← الأفعى ← ثعلب الفنك، والبردي ← الجرادة ← الضفدع ← مالك الحزين.",
              "النباتات منتجات، وآكلات الأعشاب مستهلكات أولية، وآكلات اللحوم مستهلكات ثانوية وثالثية حتى المفترس الأعلى، ومهما اختلفت الحيوانات تبدأ كل سلسلة بالنباتات."]
          },
          story: {
            en: ["Ziad was on a felucca in Aswan, watching tiny fish nibble the green algae near the boat.",
              "\"Those are tilapia,\" said the boatman. \"The big Nile perch eat them, and the crocodile is the king of the river.\"",
              "In the winter holiday, Ziad went camping in the desert near Siwa and found tiny jerboa footprints in the sand.",
              "At night they saw a fennec fox with huge ears hunting. \"The desert king,\" whispered his father. \"No plants, no jerboas, no foxes.\"",
              "On the way home they visited Wadi al-Hitan, the Valley of the Whales: once an ocean with its own food chain, now a desert full of fossils."],
            ar: ["كان زياد في فلوكة بأسوان يشاهد أسماكًا صغيرة تقضم الطحالب الخضراء قرب المركب.",
              "قال المراكبي: «هذه أسماك البلطي، يأكلها قشر البياض الكبير، والتمساح هو ملك النهر.»",
              "وفي إجازة نصف العام ذهب زياد في رحلة تخييم في الصحراء قرب سيوة، فوجد آثار أقدام جربوع صغيرة في الرمال.",
              "وفي الليل رأوا ثعلب فنك بأذنين كبيرتين يصطاد، فهمس والده: «ملك الصحراء؛ بدون نباتات لا جرابيع، وبدون جرابيع لا ثعالب.»",
              "وفي طريق العودة زاروا وادي الحيتان، الذي كان محيطًا له سلسلته الغذائية، وأصبح الآن صحراء مليئة بالحفريات."]
          }
        },
        words: [
          ["Producer", "المنتج", "A plant that makes its own food from sunlight; the base of every chain.", "نبات يصنع غذاءه من ضوء الشمس، وهو قاعدة كل سلسلة."],
          ["Primary consumer", "المستهلك الأول", "A herbivore that eats producers, like the Nile tilapia or the jerboa.", "آكل أعشاب يتغذى على المنتجات، مثل البلطي النيلي أو الجربوع."],
          ["Apex predator", "المفترس الأعلى", "The top carnivore of a chain, like the Nile crocodile or the fennec fox.", "آكل اللحوم في قمة السلسلة، مثل التمساح النيلي أو ثعلب الفنك."],
          ["Food pyramid", "الهرم الغذائي", "A diagram of feeding levels; its base is always plants (producers).", "رسم لمستويات التغذية، وقاعدته دائمًا النباتات (المنتجات)."],
          ["Nile tilapia", "البلطي النيلي", "A herbivorous fish of the Nile that eats algae and water plants.", "سمكة عاشبة في النيل تتغذى على الطحالب والنباتات المائية."],
          ["Jerboa", "الجربوع", "A small desert herbivore that eats seeds and plants.", "حيوان صحراوي صغير عاشب يتغذى على البذور والنباتات."],
          ["Fennec fox", "ثعلب الفنك", "A desert carnivore with big ears; a top carnivore of the desert chain.", "حيوان صحراوي لاحم له أذنان كبيرتان، وهو في قمة السلسلة الصحراوية."]
        ],
        lab: { parts: [{ type: "p6_egypt" }] },
        quiz: [
          { q: ["Which animal is a top carnivore of the Nile River food chain?", "أي حيوان هو آكل اللحوم في قمة السلسلة الغذائية لنهر النيل؟"],
            c: [["Nile crocodile", "التمساح النيلي"], ["Nile tilapia", "البلطي النيلي"], ["Jerboa", "الجربوع"], ["Grasshopper", "الجرادة"]],
            off: ["Nile chain: algae → Nile tilapia → Nile perch → Nile crocodile at the top.", "سلسلة النيل: الطحالب ← البلطي النيلي ← قشر البياض ← التمساح النيلي في القمة."],
            sto: ["The boatman in Aswan called the crocodile the king of the river.", "سمّى المراكبي في أسوان التمساح ملك النهر."] },
          { q: ["Which statement correctly explains food chains in Egypt?", "أي عبارة تشرح السلاسل الغذائية في مصر بشكل صحيح؟"],
            c: [["In the desert, fennec foxes eat small animals like jerboas", "في الصحراء تأكل ثعالب الفنك حيوانات صغيرة مثل الجرابيع"], ["In the Nile, crocodiles eat algae directly", "في النيل تأكل التماسيح الطحالب مباشرة"], ["Desert chains start with foxes", "سلاسل الصحراء تبدأ بالثعالب"], ["The Nile tilapia is a top carnivore", "البلطي النيلي آكل لحوم في القمة"]],
            off: ["Crocodiles are carnivores that eat fish, not algae. In the desert, fennec foxes hunt jerboas.", "التماسيح آكلات لحوم تأكل الأسماك وليس الطحالب، وفي الصحراء تصطاد ثعالب الفنك الجرابيع."],
            sto: ["Ziad saw the big-eared fox hunting at night: that is the desert's top hunter at work.", "رأى زياد الثعلب ذا الأذنين الكبيرتين يصطاد ليلًا؛ إنه صياد الصحراء الأعلى أثناء عمله."] },
          { q: ["Give a herbivore that eats plants in the desert food chain.", "اذكر آكل أعشاب يتغذى على النباتات في السلسلة الغذائية الصحراوية."],
            c: [["Jerboa", "الجربوع"], ["Fennec fox", "ثعلب الفنك"], ["Viper", "الأفعى"], ["Egyptian vulture", "النسر المصري"]],
            off: ["Desert herbivores include grasshoppers and jerboas, which eat shrubs, grass and seeds.", "من آكلات الأعشاب في الصحراء الجراد والجربوع، وهي تأكل الشجيرات والأعشاب والبذور."],
            sto: ["The tiny jerboa footprints near Siwa belonged to a seed-eater.", "آثار أقدام الجربوع الصغيرة قرب سيوة كانت لآكل بذور."] },
          { q: ["What is at the base of every food pyramid?", "ماذا يوجد في قاعدة كل هرم غذائي؟"],
            c: [["Plants (producers)", "النباتات (المنتجات)"], ["Apex predators", "المفترسات العليا"], ["Herbivores", "آكلات الأعشاب"], ["Fossils", "الحفريات"]],
            off: ["The bottom of the food pyramid is always plants, which produce their own food from sunlight.", "قاعدة الهرم الغذائي دائمًا النباتات التي تصنع غذاءها من ضوء الشمس."],
            sto: ["Like the pyramids of Giza, the heavy top needs a wide strong base: the plants.", "مثل أهرامات الجيزة، القمة الثقيلة تحتاج إلى قاعدة عريضة قوية: النباتات."] },
          { q: ["If all the plants in the desert died out, what would happen to the carnivores?", "إذا ماتت كل النباتات في الصحراء، ماذا يحدث لآكلات اللحوم؟"],
            c: [["They would decrease, because herbivores would have no food", "تقل أعدادها لأن آكلات الأعشاب لن تجد غذاءً"], ["They would increase", "تزداد أعدادها"], ["Nothing would change", "لا يتغير شيء"], ["They would start eating sand", "تبدأ في أكل الرمال"]],
            off: ["Without plants, herbivores have no food and decrease, so the carnivores that eat them also decrease.", "بدون نباتات لا تجد آكلات الأعشاب غذاءً فتقل، فتقل آكلات اللحوم التي تتغذى عليها."],
            sto: ["No plants, no jerboas, no foxes, as Ziad's father whispered in the dark.", "بدون نباتات لا جرابيع، وبدون جرابيع لا ثعالب، كما همس والد زياد في الظلام."] },
          { q: ["In papyrus → grasshopper → frog → heron, what is the frog?", "في السلسلة: البردي ← الجرادة ← الضفدع ← مالك الحزين، ماذا يكون الضفدع؟"],
            c: [["A secondary consumer", "مستهلك ثانوي"], ["A producer", "منتج"], ["A primary consumer", "مستهلك أول"], ["The apex predator", "المفترس الأعلى"]],
            off: ["Papyrus is the producer, the grasshopper the primary consumer, the frog the secondary consumer and the heron at the top.", "البردي منتج، والجرادة مستهلك أول، والضفدع مستهلك ثانوي، ومالك الحزين في القمة."],
            sto: ["Count the steps from the plant: the frog is two meals away from the papyrus.", "عُدّ الخطوات من النبات: الضفدع يبعد وجبتين عن البردي."] }
        ]
      }
    ]
  });

  /* ================= UNIT 4 - Solutions and Metals ================= */
  U.push({
    id: "p6u4", num: 4, icon: "🧪", color: "purple",
    title: { en: "Solutions and Metals", ar: "المحاليل والفلزات" },
    lessons: [
      {
        id: "p6u4l1", icon: "🍋", page: 74,
        title: { en: "Properties of Solutions", ar: "خواص المحاليل" },
        idea: {
          official: {
            en: ["Solutions may look alike and clear, but they differ in their properties. Litmus paper sorts them into 3 groups.",
              "Acidic solutions turn blue litmus paper red. Examples: lemon juice, vinegar and hydrochloric acid.",
              "Neutral solutions do not change the colour of either litmus paper. Examples: salt water, sugar water and distilled water.",
              "Alkaline solutions turn red litmus paper blue. Examples: soapy solution, limewater and ammonia solution.",
              "Evaporating a solution shows what was dissolved: solids such as salt or baking soda stay at the bottom of the dish.",
              "Dissolved gases escape into the air, so nothing stays. Sparkling (carbonated) water has carbon dioxide dissolved in it. Turn off the heat while a little liquid is left, and waft smells with your hand."],
            ar: ["قد تبدو المحاليل متشابهة ورائقة، لكنها تختلف في خواصها، وورق عباد الشمس يقسمها إلى ٣ مجموعات.",
              "المحاليل الحمضية تحوّل ورق عباد الشمس الأزرق إلى اللون الأحمر، مثل عصير الليمون والخل وحمض الهيدروكلوريك.",
              "المحاليل المتعادلة لا تغيّر لون أي من ورقتي عباد الشمس، مثل الماء المالح وماء السكر والماء المقطر.",
              "المحاليل القلوية تحوّل ورق عباد الشمس الأحمر إلى اللون الأزرق، مثل محلول الصابون وماء الجير ومحلول النشادر.",
              "تبخير المحلول يكشف ما كان ذائبًا فيه؛ فالمواد الصلبة مثل الملح أو بيكربونات الصوديوم تبقى في قاع الجفنة.",
              "الغازات الذائبة تتصاعد إلى الهواء فلا يتبقى شيء، والماء الغازي ذائب فيه غاز ثاني أكسيد الكربون. أطفئ اللهب عندما يتبقى قليل من السائل، واستخدم يدك لتقريب الرائحة."]
          },
          story: {
            en: ["Laila was helping her mother in their kitchen in Giza. Lemon juice, vinegar, salt water, soapy water: all clear liquids!",
              "Her science kit had blue and red litmus strips. A drop of lemon juice turned the blue strip red: acidic!",
              "Soapy water turned the red strip blue: alkaline. Salt water changed neither: neutral.",
              "\"The ancient Egyptians used natron, a strongly alkaline powder from desert salt lakes, to make mummies,\" her mother said.",
              "At school, Laila's teacher gently evaporated salt water: white salt appeared. Soda water left nothing, because its carbon dioxide escaped into the air."],
            ar: ["كانت ليلى تساعد والدتها في مطبخ بيتهما بالجيزة: عصير ليمون، وخل، وماء مالح، وماء بالصابون؛ كلها سوائل رائقة!",
              "كان في أدوات العلوم الخاصة بها شرائط عباد الشمس الزرقاء والحمراء، فقطرة من عصير الليمون حوّلت الشريط الأزرق إلى الأحمر: محلول حمضي!",
              "والماء بالصابون حوّل الشريط الأحمر إلى الأزرق: محلول قلوي، أما الماء المالح فلم يغيّر أيًّا منهما: محلول متعادل.",
              "قالت والدتها: «استخدم المصريون القدماء النطرون، وهو مسحوق قلوي قوي من البحيرات المالحة في الصحراء، في التحنيط.»",
              "وفي المدرسة بخّرت المعلمة الماء المالح بهدوء فظهر ملح أبيض، أما الماء الغازي فلم يترك شيئًا؛ لأن ثاني أكسيد الكربون تصاعد إلى الهواء."]
          }
        },
        words: [
          ["Acidic solution", "المحلول الحمضي", "Turns blue litmus paper red: lemon juice, vinegar, hydrochloric acid.", "يحوّل ورق عباد الشمس الأزرق إلى الأحمر، مثل عصير الليمون والخل وحمض الهيدروكلوريك."],
          ["Neutral solution", "المحلول المتعادل", "Changes neither litmus paper: salt water, sugar water, distilled water.", "لا يغيّر لون أي من ورقتي عباد الشمس، مثل الماء المالح وماء السكر والماء المقطر."],
          ["Alkaline solution", "المحلول القلوي", "Turns red litmus paper blue: soapy solution, limewater, ammonia solution.", "يحوّل ورق عباد الشمس الأحمر إلى الأزرق، مثل محلول الصابون وماء الجير ومحلول النشادر."],
          ["Litmus paper", "ورق عباد الشمس", "Blue and red strips that change colour to show if a solution is acidic, neutral or alkaline.", "شرائط زرقاء وحمراء يتغير لونها لتوضح إن كان المحلول حمضيًا أو متعادلًا أو قلويًا."],
          ["Evaporation", "التبخير", "Heating a solution so the water leaves, showing what was dissolved.", "تسخين المحلول حتى يتصاعد الماء فيظهر ما كان ذائبًا فيه."],
          ["Evaporating dish", "جفنة التبخير", "The dish used to heat a solution gently until it dries.", "الإناء الذي يُستخدم لتسخين المحلول بهدوء حتى يجف."],
          ["Carbonated water", "الماء الغازي", "Water with carbon dioxide gas dissolved in it; nothing is left when it evaporates.", "ماء ذائب فيه غاز ثاني أكسيد الكربون، ولا يتبقى منه شيء عند تبخيره."]
        ],
        lab: { parts: [{ type: "p6_litmus" }, {
          type: "sort",
          prompt: ["Tap a solution, then tap its group.", "اضغط على محلول، ثم اضغط على مجموعته."],
          bins: [["ac", "🍋", "Acidic", "حمضي"], ["ne", "💧", "Neutral", "متعادل"], ["al", "🧼", "Alkaline", "قلوي"]],
          items: [
            [["Lemon juice", "عصير الليمون"], "ac"], [["Vinegar", "الخل"], "ac"], [["Dilute hydrochloric acid", "حمض الهيدروكلوريك المخفف"], "ac"],
            [["Salt water", "الماء المالح"], "ne"], [["Sugar water", "ماء السكر"], "ne"], [["Distilled water", "الماء المقطر"], "ne"],
            [["Soapy solution", "محلول الصابون"], "al"], [["Limewater", "ماء الجير"], "al"], [["Ammonia solution", "محلول النشادر"], "al"]
          ]
        }] },
        quiz: [
          { q: ["What type of solution turns blue litmus paper red?", "ما نوع المحلول الذي يحوّل ورق عباد الشمس الأزرق إلى الأحمر؟"],
            c: [["Acidic", "حمضي"], ["Neutral", "متعادل"], ["Alkaline", "قلوي"], ["Any solution", "أي محلول"]],
            off: ["Acidic solutions turn blue litmus paper red.", "المحاليل الحمضية تحوّل ورق عباد الشمس الأزرق إلى الأحمر."],
            sto: ["Laila's lemon drop blushed the blue strip red.", "قطرة الليمون عند ليلى جعلت الشريط الأزرق يحمرّ خجلًا."] },
          { q: ["Soapy water turned red litmus paper blue. What kind of solution is it?", "حوّل الماء بالصابون ورق عباد الشمس الأحمر إلى الأزرق. ما نوع هذا المحلول؟"],
            c: [["Alkaline", "قلوي"], ["Acidic", "حمضي"], ["Neutral", "متعادل"], ["A gas", "غاز"]],
            off: ["Alkaline solutions turn red litmus paper blue.", "المحاليل القلوية تحوّل ورق عباد الشمس الأحمر إلى الأزرق."],
            sto: ["Soap is a cleaner, and alkaline cleaners paint the red strip blue.", "الصابون منظف، والمنظفات القلوية تلوّن الشريط الأحمر بالأزرق."] },
          { q: ["Which of these is a neutral solution?", "أي مما يلي محلول متعادل؟"],
            c: [["Salt water", "الماء المالح"], ["Vinegar", "الخل"], ["Limewater", "ماء الجير"], ["Lemon juice", "عصير الليمون"]],
            off: ["Salt water, sugar water and distilled water do not change either litmus paper.", "الماء المالح وماء السكر والماء المقطر لا تغيّر لون أي من ورقتي عباد الشمس."],
            sto: ["Salt water is shy: it leaves both strips just as they were.", "الماء المالح خجول: يترك الشريطين كما هما."] },
          { q: ["What is the white solid left in the dish when salt water is evaporated?", "ما المادة الصلبة البيضاء التي تتبقى في الجفنة عند تبخير الماء المالح؟"],
            c: [["Salt", "الملح"], ["Sugar", "السكر"], ["Iodine", "اليود"], ["Aluminium", "الألومنيوم"]],
            off: ["The water evaporates and the dissolved salt stays at the bottom of the dish.", "يتبخر الماء ويبقى الملح الذائب في قاع الجفنة."],
            sto: ["The salt was hiding in the water; when the water left, the salt was found.", "كان الملح مختبئًا في الماء، وعندما رحل الماء ظهر الملح."] },
          { q: ["Why is nothing left in the dish when dilute hydrochloric acid is evaporated?", "لماذا لا يتبقى شيء في الجفنة عند تبخير حمض الهيدروكلوريك المخفف؟"],
            c: [["What was dissolved escaped as a gas", "لأن المادة الذائبة تصاعدت في صورة غاز"], ["Nothing was dissolved in it", "لأنه لم يكن به شيء ذائب"], ["It melted from the heat", "لأنه انصهر من الحرارة"], ["The dish absorbed it", "لأن الجفنة امتصته"]],
            off: ["The dissolved substance in hydrochloric acid is a gas, so it escapes into the air.", "المادة الذائبة في حمض الهيدروكلوريك غاز، فتتصاعد إلى الهواء."],
            sto: ["A gas cannot sit in the dish; it flies away with the steam.", "الغاز لا يستطيع البقاء في الجفنة؛ إنه يطير مع البخار."] },
          { q: ["What gas is dissolved in carbonated (soda) water?", "ما الغاز الذائب في الماء الغازي؟"],
            c: [["Carbon dioxide", "ثاني أكسيد الكربون"], ["Oxygen", "الأكسجين"], ["Hydrogen", "الهيدروجين"], ["Nitrogen", "النيتروجين"]],
            off: ["Sparkling water has carbon dioxide gas dissolved in it.", "الماء الغازي ذائب فيه غاز ثاني أكسيد الكربون."],
            sto: ["The fizz in a soda bottle is carbon dioxide trying to escape.", "الفوران في زجاجة المياه الغازية هو ثاني أكسيد الكربون يحاول الهرب."] },
          { q: ["When evaporating a solution, when should you turn off the heat?", "عند تبخير محلول، متى يجب أن تطفئ اللهب؟"],
            c: [["While a little liquid is still left", "عندما يتبقى قليل من السائل"], ["After the dish starts to burn", "بعد أن تبدأ الجفنة في الاحتراق"], ["Never; keep it on high heat", "أبدًا؛ أستمر على لهب قوي"], ["Before you start heating", "قبل أن أبدأ التسخين"]],
            off: ["Turn off the heat while a little liquid is left, and let the remaining heat dry it.", "أطفئ اللهب عندما يتبقى قليل من السائل، واترك الحرارة المتبقية تجففه."],
            sto: ["Like turning off the stove a little early: the hot pan finishes the job safely.", "مثل إطفاء البوتاجاز مبكرًا قليلًا: الإناء الساخن يُكمل المهمة بأمان."] }
        ]
      },
      {
        id: "p6u4l2", icon: "🔩", page: 82,
        title: { en: "Reaction between Solutions and Metals", ar: "تفاعل المحاليل مع الفلزات" },
        idea: {
          official: {
            en: ["Metals are shiny materials that we use a lot in daily life, such as iron, aluminium and gold.",
              "Some aqueous solutions can react with metals. When dilute hydrochloric acid is poured on aluminium or iron, the metals react and produce bubbles.",
              "Water does not make aluminium or iron bubble in the same way, so we compare each metal in acid and in water.",
              "Evaporating the liquid in which aluminium reacted leaves a white solid. It is not shiny, and in dilute hydrochloric acid it does not react or produce bubbles.",
              "So the metal changed into a new substance with completely different properties. The bubbles are hydrogen gas.",
              "Gold is very stable and does not dissolve in hydrochloric acid; that is why Tutankhamun's golden mask still shines."],
            ar: ["الفلزات مواد لامعة نستخدمها كثيرًا في حياتنا اليومية، مثل الحديد والألومنيوم والذهب.",
              "بعض المحاليل المائية تتفاعل مع الفلزات؛ فعند صب حمض الهيدروكلوريك المخفف على الألومنيوم أو الحديد تتفاعل الفلزات وتتكون فقاعات.",
              "الماء لا يجعل الألومنيوم أو الحديد يُكوّن فقاعات بالطريقة نفسها، لذلك نقارن كل فلز في الحمض وفي الماء.",
              "تبخير السائل الذي تفاعل فيه الألومنيوم يترك مادة صلبة بيضاء غير لامعة، وإذا وُضعت في حمض الهيدروكلوريك المخفف لا تتفاعل ولا تتكون فقاعات.",
              "إذن تحوّل الفلز إلى مادة جديدة لها خواص مختلفة تمامًا، والفقاعات هي غاز الهيدروجين.",
              "الذهب فلز ثابت جدًا لا يذوب في حمض الهيدروكلوريك، ولهذا ما زال قناع توت عنخ آمون الذهبي لامعًا."]
          },
          story: {
            en: ["Adam visited the Grand Egyptian Museum and stood in front of Tutankhamun's golden mask. After thousands of years, it still shone!",
              "Back at school, his teacher dropped small pieces of aluminium and a ball of steel wool into dilute hydrochloric acid. Fizz! Bubbles everywhere.",
              "In the tubes with water, the metals just sat there quietly.",
              "Next lesson they gently evaporated the liquid where the aluminium had reacted. A white powder was left, not shiny at all, and it made no bubbles in acid.",
              "\"The aluminium became a brand-new substance,\" said the teacher. \"Gold is different: acid cannot touch it, so the mask still shines.\""],
            ar: ["زار آدم المتحف المصري الكبير ووقف أمام قناع توت عنخ آمون الذهبي؛ فبعد آلاف السنين ما زال لامعًا!",
              "وفي المدرسة أسقطت المعلمة قطعًا صغيرة من الألومنيوم وكرة من سلك المواعين (صوف الصلب) في حمض الهيدروكلوريك المخفف، ففارت الفقاعات في كل مكان!",
              "أما في الأنابيب التي بها ماء فبقيت الفلزات هادئة بلا تغيير.",
              "وفي الحصة التالية بخّروا بهدوء السائل الذي تفاعل فيه الألومنيوم، فتبقى مسحوق أبيض غير لامع على الإطلاق، ولم يُكوّن فقاعات في الحمض.",
              "قالت المعلمة: «لقد أصبح الألومنيوم مادة جديدة تمامًا، أما الذهب فمختلف؛ الحمض لا يؤثر فيه، ولهذا ما زال القناع لامعًا.»"]
          }
        },
        words: [
          ["Metal", "الفلز", "A shiny material such as iron, aluminium or gold.", "مادة لامعة مثل الحديد والألومنيوم والذهب."],
          ["Aqueous solution", "المحلول المائي", "A solution in which a substance is dissolved in water.", "محلول تكون فيه المادة ذائبة في الماء."],
          ["Dilute hydrochloric acid", "حمض الهيدروكلوريك المخفف", "An acidic solution that reacts with aluminium and iron, producing bubbles.", "محلول حمضي يتفاعل مع الألومنيوم والحديد وتتكون فقاعات."],
          ["Hydrogen gas", "غاز الهيدروجين", "The gas in the bubbles when iron or aluminium reacts with dilute hydrochloric acid.", "الغاز الموجود في الفقاعات عند تفاعل الحديد أو الألومنيوم مع حمض الهيدروكلوريك المخفف."],
          ["New substance", "مادة جديدة", "What the metal becomes after reacting: a white, non-shiny solid with different properties.", "ما يتحول إليه الفلز بعد التفاعل: مادة صلبة بيضاء غير لامعة لها خواص مختلفة."],
          ["Steel wool", "سلك المواعين (صوف الصلب)", "Thin iron threads used in the experiment as the iron sample.", "خيوط رفيعة من الحديد تُستخدم في التجربة كعينة من الحديد."]
        ],
        lab: { parts: [{ type: "p6_metal" }] },
        quiz: [
          { q: ["What happens when dilute hydrochloric acid is poured on aluminium or iron?", "ماذا يحدث عند صب حمض الهيدروكلوريك المخفف على الألومنيوم أو الحديد؟"],
            c: [["The metals react and produce bubbles", "تتفاعل الفلزات وتتكون فقاعات"], ["Nothing happens", "لا يحدث شيء"], ["The metals become shinier", "تصبح الفلزات أكثر لمعانًا"], ["The acid freezes", "يتجمد الحمض"]],
            off: ["Hydrochloric acid reacts with aluminium and iron, and bubbles are produced.", "حمض الهيدروكلوريك يتفاعل مع الألومنيوم والحديد وتتكون فقاعات."],
            sto: ["Fizz! Adam's test tubes filled with bubbles as the metals reacted.", "فوران! امتلأت أنابيب آدم بالفقاعات أثناء تفاعل الفلزات."] },
          { q: ["Which statement is correct?", "أي عبارة صحيحة؟"],
            c: [["Hydrochloric acid can react with aluminium and iron", "حمض الهيدروكلوريك يمكنه التفاعل مع الألومنيوم والحديد"], ["Hydrochloric acid reacts with iron but not aluminium", "حمض الهيدروكلوريك يتفاعل مع الحديد وليس مع الألومنيوم"], ["Water reacts with iron and makes many bubbles", "الماء يتفاعل مع الحديد ويُكوّن فقاعات كثيرة"], ["Gold dissolves easily in hydrochloric acid", "الذهب يذوب بسهولة في حمض الهيدروكلوريك"]],
            off: ["Both aluminium and iron react with dilute hydrochloric acid; gold does not.", "يتفاعل كل من الألومنيوم والحديد مع حمض الهيدروكلوريك المخفف، أما الذهب فلا."],
            sto: ["Aluminium and steel wool both fizzed; the golden mask would just keep shining.", "فار الألومنيوم وسلك المواعين كلاهما، أما القناع الذهبي فسيظل لامعًا."] },
          { q: ["What is left when the liquid in which aluminium reacted is evaporated?", "ماذا يتبقى عند تبخير السائل الذي تفاعل فيه الألومنيوم؟"],
            c: [["A white solid that is not a metal", "مادة صلبة بيضاء ليست فلزًا"], ["The original shiny aluminium", "الألومنيوم اللامع الأصلي"], ["Nothing is left", "لا يتبقى شيء"], ["Drops of water", "قطرات ماء"]],
            off: ["Evaporating the liquid leaves a white, non-shiny solid: a new substance.", "تبخير السائل يترك مادة صلبة بيضاء غير لامعة، وهي مادة جديدة."],
            sto: ["The shiny metal did not come back; a white powder appeared instead.", "لم يعد الفلز اللامع؛ بل ظهر مسحوق أبيض بدلًا منه."] },
          { q: ["Dilute hydrochloric acid is poured on the powder left after evaporation. What happens?", "صُب حمض الهيدروكلوريك المخفف على المسحوق المتبقي بعد التبخير. ماذا يحدث؟"],
            c: [["No bubbles are produced", "لا تتكون فقاعات"], ["It bubbles just like the original metal", "تتكون فقاعات مثل الفلز الأصلي"], ["It explodes", "ينفجر"], ["It turns back into shiny metal", "يعود فلزًا لامعًا"]],
            off: ["The powder is a different substance, so it does not react with the acid like the metal did.", "المسحوق مادة مختلفة، فلا يتفاعل مع الحمض كما تفاعل الفلز."],
            sto: ["The powder had already done its fizzing; it has new properties now.", "المسحوق انتهى من فورانه؛ أصبحت له خواص جديدة الآن."] },
          { q: ["What happened to the metal that reacted with the acid?", "ماذا حدث للفلز الذي تفاعل مع الحمض؟"],
            c: [["It changed into a new substance with different properties", "تحوّل إلى مادة جديدة لها خواص مختلفة"], ["It is just hiding and is still the same metal", "إنه مختبئ فقط وما زال الفلز نفسه"], ["It changed only its shape", "تغيّر شكله فقط"], ["It disappeared from the universe", "اختفى من الكون"]],
            off: ["The solid is not shiny and does not bubble in acid, so it is a new substance.", "المادة الصلبة غير لامعة ولا تُكوّن فقاعات في الحمض، إذن هي مادة جديدة."],
            sto: ["The aluminium went into the acid as one thing and came out as something new.", "دخل الألومنيوم الحمض شيئًا وخرج شيئًا جديدًا."] },
          { q: ["What gas is in the bubbles when iron reacts with dilute hydrochloric acid?", "ما الغاز الموجود في الفقاعات عند تفاعل الحديد مع حمض الهيدروكلوريك المخفف؟"],
            c: [["Hydrogen", "الهيدروجين"], ["Oxygen", "الأكسجين"], ["Carbon dioxide", "ثاني أكسيد الكربون"], ["Water vapour", "بخار الماء"]],
            off: ["The bubbles formed when iron or aluminium reacts with dilute hydrochloric acid are hydrogen gas.", "الفقاعات التي تتكون عند تفاعل الحديد أو الألومنيوم مع حمض الهيدروكلوريك المخفف هي غاز الهيدروجين."],
            sto: ["Each bubble is a tiny balloon of hydrogen escaping the tube.", "كل فقاعة بالون صغير من الهيدروجين يهرب من الأنبوبة."] },
          { q: ["Why has Tutankhamun's golden mask kept its shine for thousands of years?", "لماذا احتفظ قناع توت عنخ آمون الذهبي بلمعانه آلاف السنين؟"],
            c: [["Gold is very stable and does not react easily", "لأن الذهب ثابت جدًا ولا يتفاعل بسهولة"], ["It was polished every day", "لأنه كان يُلمع كل يوم"], ["Gold reacts with air to make it shine", "لأن الذهب يتفاعل مع الهواء ليلمع"], ["It is made of aluminium", "لأنه مصنوع من الألومنيوم"]],
            off: ["Gold does not react easily with surrounding substances and does not dissolve in hydrochloric acid.", "الذهب لا يتفاعل بسهولة مع المواد المحيطة ولا يذوب في حمض الهيدروكلوريك."],
            sto: ["Gold is the calm metal: acids knock on its door and it never answers.", "الذهب هو الفلز الهادئ: تطرق الأحماض بابه فلا يرد أبدًا."] }
        ]
      }
    ]
  });

  E.SCIG.p6 = { book: { en: "Science, Primary 6, Term 1 (Ministry of Education, 2026-2027)", ar: "العلوم - الصف السادس الابتدائي - الفصل الدراسي الأول (وزارة التربية والتعليم ٢٠٢٦-٢٠٢٧)" }, units: U };

  /* ================= "In this lesson" objectives ================= */
  var OBJ = {
    p6u1l1: [["Why fresh air must flow in and out for burning", "لماذا يجب أن يتجدد الهواء لاستمرار الاحتراق"], ["The gases in air and their percentages", "غازات الهواء ونسبها"], ["Oxygen helps burning; nitrogen and carbon dioxide do not", "الأكسجين يساعد على الاشتعال والنيتروجين وثاني أكسيد الكربون لا يساعدان"], ["How air changes after burning; the limewater test", "تغيّر الهواء بعد الاحتراق واختبار ماء الجير"]],
    p6u1l2: [["Breathing in oxygen and breathing out carbon dioxide", "شهيق الأكسجين وزفير ثاني أكسيد الكربون"], ["Comparing breathed-in and breathed-out air", "المقارنة بين هواء الشهيق وهواء الزفير"], ["The path of air: nose, trachea, lungs", "مسار الهواء: الأنف، القصبة الهوائية، الرئتان"], ["Gas exchange in the alveoli and the role of blood", "تبادل الغازات في الحويصلات الهوائية ودور الدم"]],
    p6u2l1: [["The meaning of digestion", "معنى الهضم"], ["The order of the digestive tract", "ترتيب أعضاء القناة الهضمية"], ["How saliva changes starch (iodine test)", "كيف يغيّر اللعاب النشا (اختبار اليود)"], ["Absorption by villi, and the liver", "الامتصاص بالخملات ودور الكبد"]],
    p6u2l2: [["The heart as a pump; heartbeat and pulse", "القلب مضخة، وضربات القلب والنبض"], ["Why the pulse rises with exercise", "لماذا يزداد النبض مع الرياضة"], ["Blood circulation through lungs and body", "الدورة الدموية في الرئتين والجسم"], ["Kidneys, urine and bladder; where organs are", "الكليتان والبول والمثانة، وأماكن الأعضاء"]],
    p6u3l1: [["Sunlight, water and carbon dioxide make starch", "ضوء الشمس والماء وثاني أكسيد الكربون تصنع النشا"], ["Testing a leaf for starch with iodine", "اختبار الورقة للكشف عن النشا باليود"], ["Changing one condition: the foil test", "تغيير عامل واحد: تجربة ورق الألومنيوم"], ["Plant gas exchange by day and by night", "تبادل الغازات في النبات نهارًا وليلًا"]],
    p6u3l2: [["Transpiration and the stomata", "النتح والثغور"], ["The bag test: with and without leaves", "تجربة الكيس: بأوراق وبدون أوراق"], ["The water path: roots, stems, leaves", "مسار الماء: الجذور، الساق، الأوراق"], ["Why a wilted plant recovers", "لماذا يستعيد النبات الذابل نضارته"]],
    p6u3l3: [["What a food chain is", "معنى السلسلة الغذائية"], ["Plants, herbivores and carnivores", "النباتات وآكلات الأعشاب وآكلات اللحوم"], ["Energy arrows in a food chain", "أسهم الطاقة في السلسلة الغذائية"], ["How air and water connect living things", "كيف يربط الهواء والماء الكائنات الحية"]],
    p6u3l4: [["The Nile River food chain", "السلسلة الغذائية في نهر النيل"], ["The desert food chain", "السلسلة الغذائية في الصحراء"], ["Producers, consumers and apex predators", "المنتجات والمستهلكات والمفترسات العليا"], ["Why every chain depends on plants", "لماذا تعتمد كل سلسلة على النباتات"]],
    p6u4l1: [["Testing solutions with litmus paper", "اختبار المحاليل بورق عباد الشمس"], ["Acidic, neutral and alkaline examples", "أمثلة للمحاليل الحمضية والمتعادلة والقلوية"], ["Evaporating to find what is dissolved", "التبخير لمعرفة المادة الذائبة"], ["Solids stay, gases escape; lab safety", "المواد الصلبة تبقى والغازات تتصاعد، والأمان في المعمل"]],
    p6u4l2: [["Metals react with dilute hydrochloric acid", "تفاعل الفلزات مع حمض الهيدروكلوريك المخفف"], ["Comparing acid and water", "المقارنة بين الحمض والماء"], ["The white solid after evaporation", "المادة الصلبة البيضاء بعد التبخير"], ["A new substance with new properties", "مادة جديدة بخواص جديدة"]]
  };
  Object.keys(OBJ).forEach(function (k) { E.SCI3_OBJ[k] = { en: OBJ[k].map(function (x) { return x[0]; }), ar: OBJ[k].map(function (x) { return x[1]; }) }; });

  /* ================= extra hands-on quiz items ================= */
  var X = E.SCI3_EXTRA;
  X.p6u1l1 = [
    { k: "match", q: ["Match each gas to the right fact.", "صِل كل غاز بالمعلومة الصحيحة."],
      pairs: [[["Nitrogen", "النيتروجين"], ["About 78% of air", "حوالي ٧٨٪ من الهواء"]], [["Oxygen", "الأكسجين"], ["Helps things burn", "يساعد على الاشتعال"]], [["Carbon dioxide", "ثاني أكسيد الكربون"], ["Turns limewater milky", "يعكّر ماء الجير"]]],
      off: ["Nitrogen is most of the air, oxygen helps burning, and carbon dioxide turns limewater milky white.", "النيتروجين أكبر جزء من الهواء، والأكسجين يساعد على الاشتعال، وثاني أكسيد الكربون يعكّر ماء الجير."],
      sto: ["Three gases, three jobs: the big crowd, the fire helper and the limewater painter.", "ثلاثة غازات وثلاث مهام: الحشد الكبير، ومساعد النار، ورسّام ماء الجير."] },
    { k: "tf", q: ["True or false: after a candle burns in a closed jar, there is more oxygen in the jar.", "صواب أم خطأ: بعد احتراق شمعة في برطمان مغلق تزداد كمية الأكسجين فيه."], a: false,
      off: ["False. Burning uses part of the oxygen, so oxygen decreases and carbon dioxide increases.", "خطأ؛ الاحتراق يستهلك جزءًا من الأكسجين فيقل، ويزداد ثاني أكسيد الكربون."],
      sto: ["The flame ate some oxygen for dinner, so less is left.", "اللهب تناول بعض الأكسجين على العشاء، فتبقى منه أقل."] }
  ];
  X.p6u1l2 = [
    { k: "order", q: ["Put the path of oxygen in order.", "رتّب مسار الأكسجين."],
      items: [["Nose and mouth", "الأنف والفم"], ["Trachea", "القصبة الهوائية"], ["Lungs (alveoli)", "الرئتان (الحويصلات الهوائية)"], ["Blood", "الدم"], ["Whole body", "الجسم كله"]],
      off: ["Air enters the nose and mouth, goes down the trachea to the lungs, oxygen passes into the blood and the heart pumps it to the whole body.", "يدخل الهواء من الأنف والفم ويمر في القصبة الهوائية إلى الرئتين، فينتقل الأكسجين إلى الدم ويضخه القلب إلى الجسم كله."],
      sto: ["Front door, lift, swap market, delivery bike, then every house in the city.", "الباب الأمامي، ثم المصعد، ثم سوق التبادل، ثم دراجة التوصيل، ثم كل بيوت المدينة."] },
    { k: "tf", q: ["True or false: the air we breathe out has no oxygen at all.", "صواب أم خطأ: هواء الزفير ليس به أكسجين على الإطلاق."], a: false,
      off: ["False. Breathed-out air still contains oxygen, but less than breathed-in air.", "خطأ؛ هواء الزفير ما زال به أكسجين ولكن أقل من هواء الشهيق."],
      sto: ["The lungs take only part of each breath's oxygen.", "الرئتان تأخذان جزءًا فقط من أكسجين كل نفس."] }
  ];
  X.p6u2l1 = [
    { k: "order", q: ["Put the digestive tract in order, starting at the mouth.", "رتّب أعضاء القناة الهضمية بدءًا من الفم."],
      items: [["Mouth", "الفم"], ["Pharynx", "البلعوم"], ["Esophagus", "المريء"], ["Stomach", "المعدة"], ["Small intestine", "الأمعاء الدقيقة"], ["Large intestine", "الأمعاء الغليظة"]],
      off: ["Mouth, pharynx, esophagus, stomach, small intestine, large intestine, then the anus.", "الفم، البلعوم، المريء، المعدة، الأمعاء الدقيقة، الأمعاء الغليظة، ثم فتحة الشرج."],
      sto: ["Ride the food metro and stop at every station in order.", "اركب مترو الطعام وتوقف عند كل محطة بالترتيب."] },
    { k: "tf", q: ["True or false: most nutrients are absorbed in the stomach.", "صواب أم خطأ: معظم العناصر الغذائية تُمتص في المعدة."], a: false,
      off: ["False. Nutrients are absorbed mainly in the small intestine, through the villi.", "خطأ؛ تُمتص العناصر الغذائية غالبًا في الأمعاء الدقيقة عن طريق الخملات."],
      sto: ["The towel with loops is the small intestine, not the stomach.", "الفوطة ذات الحلقات هي الأمعاء الدقيقة وليست المعدة."] }
  ];
  X.p6u2l2 = [
    { k: "match", q: ["Match each organ to its job.", "صِل كل عضو بوظيفته."],
      pairs: [[["Heart", "القلب"], ["Pumps blood", "يضخ الدم"]], [["Lungs", "الرئتان"], ["Take in oxygen", "تأخذان الأكسجين"]], [["Kidneys", "الكليتان"], ["Filter waste into urine", "ترشّحان الفضلات إلى بول"]], [["Bladder", "المثانة البولية"], ["Stores urine", "تخزن البول"]]],
      off: ["The heart pumps, the lungs exchange gases, the kidneys filter waste and the bladder stores urine.", "القلب يضخ، والرئتان تتبادلان الغازات، والكليتان ترشّحان الفضلات، والمثانة تخزن البول."],
      sto: ["Pump, swap market, filter jug and waiting tank: one team in one body.", "مضخة، وسوق تبادل، وفلتر ماء، وخزان انتظار: فريق واحد في جسم واحد."] },
    { k: "tf", q: ["True or false: there are two kidneys, one on each side of the backbone.", "صواب أم خطأ: توجد كليتان، واحدة على كل جانب من العمود الفقري."], a: true,
      off: ["True. The two kidneys are in the lower back, one on each side of the backbone.", "صواب؛ الكليتان أسفل الظهر، واحدة على كل جانب من العمود الفقري."],
      sto: ["Like two guards standing on both sides of a gate.", "مثل حارسين يقفان على جانبي بوابة."] }
  ];
  X.p6u3l1 = [
    { k: "order", q: ["Put the leaf starch test in order.", "رتّب خطوات اختبار النشا في الورقة."],
      items: [["Put the leaf in hot water to soften it", "ضع الورقة في ماء ساخن لتلين"], ["Put it in warmed ethanol to remove the green colour", "ضعها في كحول إيثيلي دافئ لإزالة اللون الأخضر"], ["Wash it with hot water", "اغسلها بماء ساخن"], ["Dip it in dilute iodine solution", "اغمسها في محلول اليود المخفف"]],
      off: ["Soften, remove the green colour with warm ethanol, wash, then test with iodine.", "تليين، ثم إزالة اللون الأخضر بالكحول الدافئ، ثم الغسل، ثم الاختبار باليود."],
      sto: ["Bath, bleach the green, rinse, then the iodine detective arrives.", "حمام، ثم إزالة الأخضر، ثم شطف، ثم يصل محقق اليود."] },
    { k: "tf", q: ["True or false: plants stop breathing while sunlight is hitting them.", "صواب أم خطأ: يتوقف النبات عن التنفس أثناء سقوط ضوء الشمس عليه."], a: false,
      off: ["False. Plants breathe all the time; in light they also take in much more carbon dioxide for photosynthesis.", "خطأ؛ النبات يتنفس طوال الوقت، وفي الضوء يأخذ أيضًا ثاني أكسيد كربون أكثر بكثير للبناء الضوئي."],
      sto: ["The kitchen opens in the day, but breathing never closes.", "المطبخ يفتح في النهار، لكن التنفس لا يتوقف أبدًا."] }
  ];
  X.p6u3l2 = [
    { k: "match", q: ["Match each part to its role in moving water.", "صِل كل جزء بدوره في نقل الماء."],
      pairs: [[["Roots", "الجذور"], ["Absorb water from the soil", "تمتص الماء من التربة"]], [["Stem", "الساق"], ["Carries water up in tubes", "تنقل الماء لأعلى في أنابيب"]], [["Leaves", "الأوراق"], ["Release water vapour", "تُخرج بخار الماء"]], [["Stomata", "الثغور"], ["Exits on the lower surface", "مخارج على السطح السفلي"]]],
      off: ["Roots absorb, the stem carries, leaves release water vapour through the stomata.", "الجذور تمتص، والساق تنقل، والأوراق تُخرج بخار الماء من الثغور."],
      sto: ["Pump, pipes, and tiny exit doors.", "مضخة، ومواسير، وأبواب خروج صغيرة."] },
    { k: "tf", q: ["True or false: transpiration happens mainly through the stems, not the leaves.", "صواب أم خطأ: يحدث النتح غالبًا من الساق وليس من الأوراق."], a: false,
      off: ["False. Transpiration happens mainly through the stomata of the leaves.", "خطأ؛ يحدث النتح غالبًا من ثغور الأوراق."],
      sto: ["The bag on the leafless plant stayed almost dry.", "الكيس على النبات الذي بلا أوراق بقي جافًا تقريبًا."] }
  ];
  X.p6u3l3 = [
    { k: "order", q: ["Build the food chain from the book.", "كوّن السلسلة الغذائية التي في الكتاب."],
      items: [["Grass", "العشب"], ["Grasshopper", "الجرادة"], ["Frog", "الضفدع"], ["Snake", "الثعبان"], ["Owl", "البومة"]],
      off: ["Grass → grasshopper → frog → snake → owl; the arrows follow the energy.", "العشب ← الجرادة ← الضفدع ← الثعبان ← البومة، والأسهم تتبع الطاقة."],
      sto: ["Each one is lunch for the next.", "كل واحد غداء للذي بعده."] },
    { k: "tf", q: ["True or false: if all the carnivores disappeared, the plants would grow healthier.", "صواب أم خطأ: إذا اختفت كل آكلات اللحوم ستنمو النباتات بشكل أفضل."], a: false,
      off: ["False. Without carnivores, herbivores increase and eat more plants, so the plants decrease.", "خطأ؛ بدون آكلات اللحوم تزداد آكلات الأعشاب وتأكل نباتات أكثر، فتقل النباتات."],
      sto: ["No snakes and owls means a party for grasshoppers, and the grass pays the bill.", "غياب الثعابين والبوم يعني حفلة للجراد، والعشب هو من يدفع الثمن."] }
  ];
  X.p6u3l4 = [
    { k: "match", q: ["Match each animal to its place in the chain.", "صِل كل حيوان بموقعه في السلسلة."],
      pairs: [[["Algae", "الطحالب"], ["Producer", "منتج"]], [["Nile tilapia", "البلطي النيلي"], ["Primary consumer", "مستهلك أول"]], [["Nile perch", "قشر البياض"], ["Secondary consumer", "مستهلك ثانوي"]], [["Nile crocodile", "التمساح النيلي"], ["Apex predator", "المفترس الأعلى"]]],
      off: ["Algae → Nile tilapia → Nile perch → Nile crocodile: producer, primary, secondary, apex.", "الطحالب ← البلطي النيلي ← قشر البياض ← التمساح النيلي: منتج، مستهلك أول، مستهلك ثانوي، مفترس أعلى."],
      sto: ["Climb the Nile ladder from the green algae to the king crocodile.", "اصعد سلّم النيل من الطحالب الخضراء إلى الملك التمساح."] },
    { k: "tf", q: ["True or false: desert food chains start with shrubs, grass or seeds, just like Nile chains start with plants.", "صواب أم خطأ: السلاسل الصحراوية تبدأ بالشجيرات أو الأعشاب أو البذور، كما تبدأ سلاسل النيل بالنباتات."], a: true,
      off: ["True. Even when the animals differ, every chain starts with plants.", "صواب؛ مهما اختلفت الحيوانات تبدأ كل سلسلة بالنباتات."],
      sto: ["River or sand, the first link is always green.", "في النهر أو في الرمال، الحلقة الأولى دائمًا خضراء."] }
  ];
  X.p6u4l1 = [
    { k: "match", q: ["Match each solution to its litmus result.", "صِل كل محلول بنتيجة ورق عباد الشمس."],
      pairs: [[["Vinegar", "الخل"], ["Blue litmus turns red", "الأزرق يصبح أحمر"]], [["Sugar water", "ماء السكر"], ["No change", "لا تغيير"]], [["Ammonia solution", "محلول النشادر"], ["Red litmus turns blue", "الأحمر يصبح أزرق"]]],
      off: ["Vinegar is acidic, sugar water is neutral and ammonia solution is alkaline.", "الخل حمضي، وماء السكر متعادل، ومحلول النشادر قلوي."],
      sto: ["Sour, calm and soapy-slippery: three families of solutions.", "حامض، وهادئ، وزلق كالصابون: ثلاث عائلات من المحاليل."] },
    { k: "tf", q: ["True or false: when soda water is evaporated, a white solid is left.", "صواب أم خطأ: عند تبخير الماء الغازي تتبقى مادة صلبة بيضاء."], a: false,
      off: ["False. The carbon dioxide dissolved in it is a gas, so it escapes and nothing is left.", "خطأ؛ ثاني أكسيد الكربون الذائب فيه غاز، فيتصاعد ولا يتبقى شيء."],
      sto: ["The fizz flew away, leaving an empty dish.", "طار الفوران وترك الجفنة فارغة."] }
  ];
  X.p6u4l2 = [
    { k: "order", q: ["Put the experiment in order.", "رتّب خطوات التجربة."],
      items: [["Put aluminium pieces in a test tube", "ضع قطع الألومنيوم في أنبوبة اختبار"], ["Add dilute hydrochloric acid with a pipette", "أضف حمض الهيدروكلوريك المخفف بالماصة"], ["Observe the bubbles", "لاحظ الفقاعات"], ["Evaporate the liquid gently", "بخّر السائل بهدوء"], ["Test the white powder with acid: no bubbles", "اختبر المسحوق الأبيض بالحمض: لا فقاعات"]],
      off: ["Metal + acid gives bubbles; evaporating leaves a white solid that does not bubble in acid.", "الفلز مع الحمض يُكوّن فقاعات، والتبخير يترك مادة صلبة بيضاء لا تُكوّن فقاعات في الحمض."],
      sto: ["Fizz first, then dry it, then prove it is something new.", "الفوران أولًا، ثم التجفيف، ثم إثبات أنه شيء جديد."] },
    { k: "tf", q: ["True or false: the powder left after evaporation is the same as the original aluminium.", "صواب أم خطأ: المسحوق المتبقي بعد التبخير هو نفسه الألومنيوم الأصلي."], a: false,
      off: ["False. It is white, not shiny, and gives no bubbles with acid: a new substance.", "خطأ؛ فهو أبيض غير لامع ولا يُكوّن فقاعات مع الحمض: مادة جديدة."],
      sto: ["Same parts hidden inside, but a whole new character.", "الأجزاء نفسها مختبئة بداخله، لكن بشخصية جديدة تمامًا."] }
  ];

  /* ================= tappable diagrams (viewBox 0 0 400 240) ================= */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, ex, sz) { return '<text x="' + x + '" y="' + y + '" ' + (ex || ink) + ' font-size="' + (sz || 12) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function arrowDefs(id, c) { return '<defs><marker id="' + id + '" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto"><path d="M0,0 L12,6 L0,12 z" fill="' + c + '"/></marker></defs>'; }
  var D = E.sciDiagrams;

  D.p6u1l1 = {
    title: ["Candle in a jar", "الشمعة في البرطمان"],
    svg: function () {
      return '<g direction="ltr">' + arrowDefs("p6a1", "#3b82f6") +
        '<rect x="40" y="200" width="320" height="14" rx="4" fill="#a16207" opacity=".6"/><rect x="80" y="188" width="240" height="14" rx="5" fill="#d6d3d1"/>' +
        '<rect x="196" y="140" width="12" height="48" rx="3" fill="#fef3c7" stroke="var(--muted)"/><path d="M202 112 C194 126 196 136 202 140 C208 136 210 126 202 112 z" fill="#f97316"/>' +
        '<rect x="140" y="60" width="124" height="128" rx="6" fill="var(--blue-soft)" fill-opacity=".35" stroke="var(--muted)" stroke-width="3"/>' +
        '<rect x="134" y="50" width="136" height="10" rx="3" fill="#94a3b8"/>' +
        '<rect x="140" y="180" width="18" height="8" fill="var(--card)"/>' +
        '<path d="M110 184 L150 184" stroke="#3b82f6" stroke-width="3" marker-end="url(#p6a1)"/><path d="M250 70 L250 30" stroke="#3b82f6" stroke-width="3" stroke-dasharray="5 4" marker-end="url(#p6a1)"/>' +
        '<rect x="300" y="70" width="18" height="70" rx="6" fill="#f8fafc" stroke="var(--muted)" stroke-width="2"/><rect x="302" y="110" width="14" height="28" rx="4" fill="#e5e7eb"/>' +
        tx(309, 158, t("limewater", "ماء الجير"), mut, 11) + tx(202, 230, t("clay on a wooden board", "صلصال على لوح خشبي"), mut, 11) + "</g>";
    },
    spots: [
      [202, 52, ["The lid", "الغطاء"], ["With the lid on, the air inside is not renewed, so the flame goes out once the air is used up.", "مع وضع الغطاء لا يتجدد الهواء بالداخل، فينطفئ اللهب عندما يُستهلك الهواء."]],
      [150, 184, ["Gap at the bottom", "فتحة من أسفل"], ["Cutting the clay makes a gap where fresh air can flow in.", "قطع الصلصال يصنع فتحة يدخل منها هواء متجدد."]],
      [250, 40, ["Air leaves at the top", "الهواء يخرج من أعلى"], ["With gaps at the top and bottom, air flows in and out, so the candle keeps burning.", "مع وجود فتحات من أعلى ومن أسفل يدخل الهواء ويخرج فتستمر الشمعة في الاشتعال."]],
      [202, 124, ["The flame needs oxygen", "اللهب يحتاج إلى الأكسجين"], ["Oxygen (about 21% of air) helps burning; nitrogen (about 78%) and carbon dioxide do not.", "الأكسجين (حوالي ٢١٪ من الهواء) يساعد على الاشتعال، أما النيتروجين (حوالي ٧٨٪) وثاني أكسيد الكربون فلا."]],
      [309, 100, ["Limewater test", "اختبار ماء الجير"], ["After burning, limewater turns milky white: carbon dioxide increased and oxygen decreased.", "بعد الاحتراق يتعكر ماء الجير: زاد ثاني أكسيد الكربون وقل الأكسجين."]]
    ]
  };

  D.p6u1l2 = {
    title: ["The breathing system", "جهاز التنفس"],
    svg: function () {
      return '<g direction="ltr">' +
        '<circle cx="110" cy="40" r="26" fill="var(--orange-soft)" stroke="var(--muted)" stroke-width="2"/>' +
        '<path d="M110 66 L110 110" stroke="#f9a8b4" stroke-width="10" stroke-linecap="round"/><path d="M110 108 L86 128 M110 108 L134 128" stroke="#f9a8b4" stroke-width="7" stroke-linecap="round"/>' +
        '<ellipse cx="74" cy="160" rx="30" ry="52" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/><ellipse cx="146" cy="160" rx="30" ry="52" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>' +
        '<path d="M110 150 C102 140 102 128 110 132 C118 128 118 140 110 150 z" fill="#ef4444"/>' +
        '<circle cx="300" cy="120" r="62" fill="var(--blue-soft)" stroke="var(--muted)" stroke-width="2"/>' +
        '<path d="M238 150 C270 200 330 200 362 150" stroke="#ef4444" stroke-width="10" fill="none" opacity=".75"/>' +
        '<circle cx="285" cy="110" r="6" fill="#3b82f6"/><circle cx="300" cy="140" r="6" fill="#3b82f6"/><circle cx="318" cy="128" r="6" fill="#6b7280"/>' +
        '<path d="M160 160 L240 130" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/>' +
        tx(300, 80, t("alveolus", "حويصلة هوائية"), mut, 11) + tx(300, 214, t("blood vessel", "وعاء دموي"), mut, 11) + "</g>";
    },
    spots: [
      [110, 40, ["Nose and mouth", "الأنف والفم"], ["Air enters through the nose and mouth.", "يدخل الهواء من الأنف والفم."]],
      [110, 88, ["Trachea (windpipe)", "القصبة الهوائية"], ["The trachea carries air down to the left and right lungs.", "تنقل القصبة الهوائية الهواء إلى الرئتين اليمنى واليسرى."]],
      [74, 170, ["Lungs", "الرئتان"], ["The lungs in the chest are the site of gas exchange.", "الرئتان في الصدر هما مكان تبادل الغازات."]],
      [290, 112, ["Oxygen into the blood", "الأكسجين إلى الدم"], ["Oxygen in the air of the alveoli passes into the blood in the blood vessels around them.", "ينتقل الأكسجين من هواء الحويصلات إلى الدم في الأوعية الدموية المحيطة بها."]],
      [320, 130, ["Carbon dioxide out", "ثاني أكسيد الكربون إلى الخارج"], ["Carbon dioxide passes from the blood into the air and is breathed out through the trachea.", "ينتقل ثاني أكسيد الكربون من الدم إلى الهواء ويخرج مع الزفير عبر القصبة الهوائية."]],
      [110, 140, ["The heart", "القلب"], ["The heart pumps the oxygen-rich blood to the whole body.", "يضخ القلب الدم الغني بالأكسجين إلى الجسم كله."]]
    ]
  };

  D.p6u2l1 = {
    title: ["The digestive tract", "القناة الهضمية"],
    svg: function () {
      return '<g direction="ltr">' +
        '<circle cx="120" cy="30" r="20" fill="var(--orange-soft)" stroke="var(--muted)" stroke-width="2"/>' +
        '<path d="M120 50 L120 96" stroke="#fb923c" stroke-width="9" stroke-linecap="round"/>' +
        '<path d="M120 94 C160 88 176 112 158 128 C140 140 112 128 116 108" fill="#fdba74" stroke="#ea580c" stroke-width="2"/>' +
        '<path d="M95 150 C140 140 170 150 168 162 C166 174 100 166 102 178 C104 190 168 184 166 196 C164 206 110 204 112 212" fill="none" stroke="#f472b6" stroke-width="8" stroke-linecap="round"/>' +
        '<path d="M80 214 L80 146 L184 146 L184 214" fill="none" stroke="#a16207" stroke-width="12" stroke-linejoin="round" opacity=".75"/>' +
        '<path d="M66 112 C70 96 104 98 112 110 C106 122 74 126 66 112 z" fill="#b91c1c" opacity=".8"/>' +
        '<rect x="240" y="60" width="140" height="120" rx="10" fill="var(--green-soft)" stroke="var(--muted)" stroke-width="2"/>' +
        '<path d="M255 170 L255 120 C255 108 271 108 271 120 L271 170 M285 170 L285 110 C285 98 301 98 301 110 L301 170 M315 170 L315 116 C315 104 331 104 331 116 L331 170 M345 170 L345 120 C345 108 361 108 361 120 L361 170" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>' +
        '<path d="M263 160 L263 122 M293 160 L293 112 M323 160 L323 118 M353 160 L353 122" stroke="#ef4444" stroke-width="2"/>' +
        tx(310, 78, t("villi (zoom)", "الخملات (تكبير)"), mut, 11) + "</g>";
    },
    spots: [
      [120, 30, ["Mouth: teeth and saliva", "الفم: الأسنان واللعاب"], ["Teeth break food into small pieces; saliva changes starch into a substance that is easy to digest.", "الأسنان تكسر الطعام إلى قطع صغيرة، واللعاب يحوّل النشا إلى مادة يسهل هضمها."]],
      [120, 72, ["Pharynx and esophagus", "البلعوم والمريء"], ["After the mouth, food passes the pharynx and the esophagus (food pipe) to the stomach.", "بعد الفم يمر الطعام في البلعوم ثم المريء إلى المعدة."]],
      [140, 116, ["Stomach", "المعدة"], ["The stomach makes digestive juices that continue digestion.", "تُفرز المعدة عصارات هاضمة تُكمل الهضم."]],
      [135, 180, ["Small intestine", "الأمعاء الدقيقة"], ["Nutrients and water are mainly absorbed here.", "تُمتص العناصر الغذائية والماء غالبًا هنا."]],
      [310, 130, ["Villi", "الخملات"], ["Closely lined bumps make the surface larger, and nutrients enter the blood capillaries inside them.", "بروزات متراصة تزيد مساحة السطح، وتدخل العناصر الغذائية إلى الشعيرات الدموية بداخلها."]],
      [86, 110, ["Liver", "الكبد"], ["Blood carries nutrients through the liver, which stores some and sends them out when needed.", "ينقل الدم العناصر الغذائية مرورًا بالكبد الذي يخزن بعضها ويرسلها عند الحاجة."]]
    ]
  };

  D.p6u2l2 = {
    title: ["Blood circulation and the kidneys", "الدورة الدموية والكليتان"],
    svg: function () {
      return '<g direction="ltr">' + arrowDefs("p6r", "#ef4444") + arrowDefs("p6b", "#3b82f6") +
        '<ellipse cx="200" cy="34" rx="70" ry="22" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>' +
        '<path d="M200 128 C180 104 160 116 170 132 C178 146 200 158 200 158 C200 158 222 146 230 132 C240 116 220 104 200 128 z" fill="#ef4444"/>' +
        '<path d="M180 116 C150 90 150 60 172 52" stroke="#3b82f6" stroke-width="5" fill="none" marker-end="url(#p6b)"/><path d="M228 52 C252 64 252 92 222 116" stroke="#ef4444" stroke-width="5" fill="none" marker-end="url(#p6r)"/>' +
        '<path d="M230 140 C300 150 320 190 260 214" stroke="#ef4444" stroke-width="5" fill="none" marker-end="url(#p6r)"/><path d="M140 214 C80 190 100 150 172 142" stroke="#3b82f6" stroke-width="5" fill="none" marker-end="url(#p6b)"/>' +
        '<rect x="150" y="200" width="100" height="30" rx="10" fill="var(--orange-soft)" stroke="var(--muted)"/>' +
        '<ellipse cx="330" cy="170" rx="13" ry="20" fill="#9f1239"/><ellipse cx="364" cy="170" rx="13" ry="20" fill="#9f1239"/><rect x="335" y="208" width="24" height="20" rx="8" fill="#fde68a" stroke="var(--muted)"/>' +
        tx(200, 38, t("lungs", "الرئتان"), ink, 12) + tx(200, 219, t("whole body", "الجسم كله"), ink, 12) + "</g>";
    },
    spots: [
      [200, 134, ["Heart: the pump", "القلب: المضخة"], ["The heart pumps blood out; each pump is a heartbeat, felt as a pulse at the wrist.", "يضخ القلب الدم، وكل ضخة هي ضربة قلب نشعر بها نبضًا عند الرسغ."]],
      [148, 34, ["Lungs", "الرئتان"], ["Returning blood goes to the lungs to let out carbon dioxide and take in oxygen.", "يذهب الدم العائد إلى الرئتين ليتخلص من ثاني أكسيد الكربون ويأخذ الأكسجين."]],
      [292, 176, ["Red: oxygen-rich blood", "الأحمر: دم غني بالأكسجين"], ["Blood from the heart carries oxygen and nutrients to the whole body.", "الدم الخارج من القلب يحمل الأكسجين والعناصر الغذائية إلى الجسم كله."]],
      [108, 176, ["Blue: carbon dioxide-rich blood", "الأزرق: دم غني بثاني أكسيد الكربون"], ["Blood collects carbon dioxide and waste and returns to the heart.", "يجمع الدم ثاني أكسيد الكربون والفضلات ويعود إلى القلب."]],
      [347, 168, ["Kidneys", "الكليتان"], ["Two kidneys, one each side of the backbone, filter waste and extra water from the blood to make urine.", "الكليتان، واحدة على كل جانب من العمود الفقري، ترشّحان الفضلات والماء الزائد من الدم فيتكوّن البول."]],
      [347, 218, ["Bladder", "المثانة البولية"], ["Urine is stored in the bladder, then discharged.", "يُخزن البول في المثانة البولية ثم يخرج من الجسم."]]
    ]
  };

  D.p6u3l1 = {
    title: ["Sunlight, leaves and starch", "ضوء الشمس والأوراق والنشا"],
    svg: function () {
      return '<g direction="ltr">' + arrowDefs("p6g", "#64748b") +
        '<circle cx="50" cy="44" r="24" fill="#facc15"/><path d="M80 60 L140 96" stroke="#facc15" stroke-width="4"/>' +
        '<path d="M150 120 C170 70 260 70 290 116 C260 160 170 166 150 120 z" fill="#22c55e" stroke="#15803d" stroke-width="2"/><path d="M150 120 L290 116" stroke="#15803d" stroke-width="2"/>' +
        '<rect x="232" y="98" width="40" height="34" rx="4" fill="#cbd5e1" stroke="#64748b"/>' +
        '<path d="M150 120 L120 200" stroke="#15803d" stroke-width="5"/>' +
        '<path d="M60 160 L130 130" stroke="var(--muted)" stroke-width="2" marker-end="url(#p6g)"/>' +
        '<path d="M290 60 L250 90" stroke="var(--muted)" stroke-width="2" marker-end="url(#p6g)"/><path d="M200 90 L230 40" stroke="var(--muted)" stroke-width="2" marker-end="url(#p6g)"/>' +
        tx(48, 172, t("water", "الماء"), mut, 11) + tx(318, 54, "CO₂", mut, 13) + tx(240, 30, "O₂", mut, 13) +
        '<rect x="300" y="160" width="80" height="60" rx="8" fill="#1e3a8a" opacity=".85"/>' + tx(340, 236, t("iodine: dark blue", "اليود: أزرق داكن"), mut, 11) + "</g>";
    },
    spots: [
      [50, 44, ["Sunlight", "ضوء الشمس"], ["When sunlight falls on the leaves, the plant performs photosynthesis.", "عندما يسقط ضوء الشمس على الأوراق يقوم النبات بالبناء الضوئي."]],
      [190, 118, ["The leaf makes sugar", "الورقة تصنع السكر"], ["Using water and carbon dioxide, the leaf makes sugar and stores part of it as starch.", "باستخدام الماء وثاني أكسيد الكربون تصنع الورقة السكر وتخزن جزءًا منه نشا."]],
      [252, 115, ["Aluminium foil", "ورق الألومنيوم"], ["The covered part gets no sunlight, makes no starch and does not turn dark blue with iodine.", "الجزء المغطى لا يصله الضوء فلا يصنع نشا ولا يتلون بالأزرق الداكن مع اليود."]],
      [318, 70, ["Carbon dioxide in", "دخول ثاني أكسيد الكربون"], ["In sunlight the plant takes in carbon dioxide.", "في ضوء الشمس يأخذ النبات ثاني أكسيد الكربون."]],
      [228, 44, ["Oxygen out", "خروج الأكسجين"], ["In sunlight the plant releases oxygen. At night it only breathes: oxygen in, carbon dioxide out.", "في ضوء الشمس يُخرج النبات الأكسجين، وفي الليل يتنفس فقط: يأخذ الأكسجين ويُخرج ثاني أكسيد الكربون."]],
      [340, 190, ["Iodine test", "اختبار اليود"], ["Iodine turns starch dark blue, so a sunlit leaf turns dark blue.", "اليود يحوّل لون النشا إلى الأزرق الداكن، فتتلون الورقة المشمسة بالأزرق الداكن."]]
    ]
  };

  D.p6u3l2 = {
    title: ["How water moves in a plant", "كيف ينتقل الماء في النبات"],
    svg: function () {
      return '<g direction="ltr">' + arrowDefs("p6w", "#ef4444") +
        '<path d="M60 150 L60 226 L180 226 L180 150" fill="var(--blue-soft)" stroke="var(--muted)" stroke-width="2"/><rect x="62" y="170" width="116" height="54" fill="#f87171" opacity=".35"/>' +
        '<path d="M120 200 L106 222 M120 200 L134 222 M120 200 L120 224" stroke="#a16207" stroke-width="3"/>' +
        '<path d="M120 200 L120 70" stroke="#16a34a" stroke-width="10"/><path d="M120 200 L120 74" stroke="#ef4444" stroke-width="3" marker-end="url(#p6w)"/>' +
        '<path d="M120 100 C80 80 60 60 64 44 C90 46 112 70 120 100 z" fill="#4ade80" stroke="#15803d"/><path d="M120 80 C160 60 180 40 176 26 C150 28 128 52 120 80 z" fill="#4ade80" stroke="#15803d"/>' +
        '<circle cx="74" cy="60" r="2.5" fill="#94a3b8"/><circle cx="168" cy="38" r="2.5" fill="#94a3b8"/>' +
        '<ellipse cx="310" cy="120" rx="70" ry="44" fill="#86efac" stroke="#15803d" stroke-width="2"/>' +
        '<ellipse cx="290" cy="110" rx="9" ry="5" fill="#15803d"/><ellipse cx="330" cy="130" rx="9" ry="5" fill="#15803d"/><ellipse cx="300" cy="140" rx="9" ry="5" fill="#15803d"/>' +
        '<circle cx="290" cy="80" r="3" fill="#93c5fd"/><circle cx="296" cy="66" r="3" fill="#93c5fd"/><circle cx="330" cy="70" r="3" fill="#93c5fd"/>' +
        tx(310, 186, t("lower surface (zoom)", "السطح السفلي (تكبير)"), mut, 11) + tx(120, 160, "", mut) + "</g>";
    },
    spots: [
      [120, 214, ["Roots", "الجذور"], ["Roots absorb water; the coloured water enters here first.", "تمتص الجذور الماء، ويدخل الماء الملون من هنا أولًا."]],
      [120, 140, ["Stem: water paths", "الساق: مسارات الماء"], ["Tubes in the stem carry water up. Cut surfaces show these paths in red.", "أنابيب في الساق تنقل الماء لأعلى، والأسطح المقطوعة تُظهر هذه المسارات باللون الأحمر."]],
      [90, 70, ["Leaves", "الأوراق"], ["Water reaches the leaves last: roots → stems → leaves.", "يصل الماء إلى الأوراق في النهاية: الجذور ← الساق ← الأوراق."]],
      [310, 128, ["Stomata", "الثغور"], ["Small pores, mostly on the lower surface of leaves: the exits for water vapour.", "فتحات صغيرة غالبًا على السطح السفلي للأوراق، وهي مخارج بخار الماء."]],
      [305, 70, ["Transpiration", "النتح"], ["Water inside the plant changes into water vapour and is released into the air. It also cools the air.", "يتحول الماء داخل النبات إلى بخار ويخرج إلى الهواء، وهذا يلطّف الهواء أيضًا."]]
    ]
  };

  D.p6u3l3 = {
    title: ["A food chain and the air cycle", "سلسلة غذائية ودورة الهواء"],
    svg: function () {
      var names = [["🌱", t("grass", "العشب")], ["🦗", t("grasshopper", "الجرادة")], ["🐸", t("frog", "الضفدع")], ["🐍", t("snake", "الثعبان")], ["🦉", t("owl", "البومة")]], s = arrowDefs("p6c", "#f97316");
      names.forEach(function (nm, i) {
        var x = 40 + i * 80;
        s += '<circle cx="' + x + '" cy="80" r="28" fill="var(--green-soft)" stroke="var(--muted)" stroke-width="2"/>' + tx(x, 87, nm[0], ink, 24) + tx(x, 126, nm[1], mut, 11);
        if (i < 4) s += '<path d="M' + (x + 30) + ' 80 L' + (x + 48) + ' 80" stroke="#f97316" stroke-width="4" marker-end="url(#p6c)"/>';
      });
      s += '<path d="M90 190 C150 160 250 160 310 190" stroke="#3b82f6" stroke-width="3" fill="none" marker-end="url(#p6c)"/><path d="M310 214 C250 236 150 236 90 214" stroke="#64748b" stroke-width="3" fill="none" marker-end="url(#p6c)"/>' +
        tx(60, 206, "🌳", ink, 24) + tx(340, 206, "🧍", ink, 24) + tx(200, 160, "O₂", mut, 13) + tx(200, 231, "CO₂", mut, 13);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [40, 80, ["Plants start the chain", "النباتات تبدأ السلسلة"], ["Plants use sunlight to make nutrients, so they are the beginning of the food chain.", "النباتات تستخدم ضوء الشمس لصنع الغذاء، فهي بداية السلسلة الغذائية."]],
      [120, 80, ["Herbivore", "آكل أعشاب"], ["The grasshopper eats plants.", "الجرادة تتغذى على النباتات."]],
      [240, 80, ["Carnivores", "آكلات اللحوم"], ["The frog, snake and owl eat other animals.", "الضفدع والثعبان والبومة تتغذى على حيوانات أخرى."]],
      [160, 64, ["Energy arrow", "سهم الطاقة"], ["Each arrow points from the eaten to the eater: the direction energy moves.", "كل سهم يتجه من المأكول إلى الآكل: اتجاه انتقال الطاقة."]],
      [200, 176, ["Oxygen and carbon dioxide", "الأكسجين وثاني أكسيد الكربون"], ["Animals breathe the oxygen from plants; plants use the carbon dioxide animals breathe out.", "تتنفس الحيوانات الأكسجين الذي تُخرجه النباتات، وتستخدم النباتات ثاني أكسيد الكربون الذي تُخرجه الحيوانات."]]
    ]
  };

  D.p6u3l4 = {
    title: ["Nile and desert food chains", "سلاسل النيل والصحراء"],
    svg: function () {
      var s = arrowDefs("p6e", "#f97316");
      s += '<rect x="6" y="10" width="190" height="220" rx="12" fill="var(--blue-soft)"/><rect x="204" y="10" width="190" height="220" rx="12" fill="var(--orange-soft)"/>';
      s += tx(101, 30, t("Nile River", "نهر النيل"), ink, 13) + tx(299, 30, t("Desert", "الصحراء"), ink, 13);
      var a = [["🌿", t("algae", "الطحالب")], ["🐟", t("tilapia", "البلطي")], ["🐠", t("Nile perch", "قشر البياض")], ["🐊", t("crocodile", "التمساح")]], b = [["🌾", t("seeds", "البذور")], ["🐭", t("jerboa", "الجربوع")], ["🐍", t("viper", "الأفعى")], ["🦊", t("fennec fox", "ثعلب الفنك")]];
      a.forEach(function (x, i) { var y = 206 - i * 50; s += tx(70, y, x[0], ink, 22) + tx(140, y - 4, x[1], mut, 11); if (i < 3) s += '<path d="M70 ' + (y - 21) + ' L70 ' + (y - 40) + '" stroke="#f97316" stroke-width="3" marker-end="url(#p6e)"/>'; });
      b.forEach(function (x, i) { var y = 206 - i * 50; s += tx(268, y, x[0], ink, 22) + tx(338, y - 4, x[1], mut, 11); if (i < 3) s += '<path d="M268 ' + (y - 21) + ' L268 ' + (y - 40) + '" stroke="#f97316" stroke-width="3" marker-end="url(#p6e)"/>'; });
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [70, 200, ["Producers", "المنتجات"], ["Algae and water plants (and shrubs, grass and seeds in the desert) start every chain.", "الطحالب والنباتات المائية (والشجيرات والأعشاب والبذور في الصحراء) تبدأ كل سلسلة."]],
      [70, 150, ["Nile tilapia", "البلطي النيلي"], ["A herbivorous fish: the primary consumer of the Nile chain.", "سمكة عاشبة، وهي المستهلك الأول في سلسلة النيل."]],
      [70, 50, ["Nile crocodile", "التمساح النيلي"], ["The top carnivore of the Nile; it eats fish like the Nile perch.", "آكل اللحوم في قمة سلسلة النيل، ويتغذى على أسماك مثل قشر البياض."]],
      [268, 150, ["Jerboa", "الجربوع"], ["A desert herbivore that eats seeds; grasshoppers are desert herbivores too.", "حيوان صحراوي عاشب يتغذى على البذور، والجراد أيضًا من آكلات الأعشاب في الصحراء."]],
      [268, 50, ["Fennec fox", "ثعلب الفنك"], ["A top carnivore of the desert, with the Egyptian vulture.", "من آكلات اللحوم في قمة السلسلة الصحراوية، مع النسر المصري."]]
    ]
  };

  D.p6u4l1 = {
    title: ["Testing solutions with litmus", "اختبار المحاليل بورق عباد الشمس"],
    svg: function () {
      var s = "", cols = [[t("Acidic", "حمضي"), "#ef4444", "#ef4444", "🍋"], [t("Neutral", "متعادل"), "#3b82f6", "#ef4444", "🧂"], [t("Alkaline", "قلوي"), "#3b82f6", "#3b82f6", "🧼"]];
      cols.forEach(function (c, i) {
        var x = 20 + i * 128;
        s += '<rect x="' + x + '" y="20" width="114" height="150" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>' + tx(x + 57, 42, c[0], ink, 13) + tx(x + 57, 76, c[3], ink, 24);
        s += '<rect x="' + (x + 22) + '" y="96" width="26" height="56" rx="3" fill="' + c[1] + '"/><rect x="' + (x + 66) + '" y="96" width="26" height="56" rx="3" fill="' + c[2] + '"/>';
      });
      s += '<path d="M150 196 L250 196 L240 226 L160 226 z" fill="#e2e8f0" stroke="var(--muted)" stroke-width="2"/><rect x="186" y="212" width="28" height="8" rx="3" fill="#f8fafc"/>' + tx(320, 214, t("evaporating dish", "جفنة التبخير"), mut, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [77, 124, ["Acidic", "حمضي"], ["Blue litmus turns red: lemon juice, vinegar, hydrochloric acid.", "ورق عباد الشمس الأزرق يصبح أحمر: عصير الليمون والخل وحمض الهيدروكلوريك."]],
      [205, 124, ["Neutral", "متعادل"], ["Neither litmus changes: salt water, sugar water, distilled water.", "لا يتغير لون أي من الورقتين: الماء المالح وماء السكر والماء المقطر."]],
      [333, 124, ["Alkaline", "قلوي"], ["Red litmus turns blue: soapy solution, limewater, ammonia solution.", "ورق عباد الشمس الأحمر يصبح أزرق: محلول الصابون وماء الجير ومحلول النشادر."]],
      [200, 214, ["Evaporating", "التبخير"], ["Dissolved solids (salt, baking soda) stay in the dish. Turn off the heat while a little liquid is left.", "المواد الصلبة الذائبة (الملح، بيكربونات الصوديوم) تبقى في الجفنة. أطفئ اللهب عندما يتبقى قليل من السائل."]],
      [300, 190, ["Dissolved gases", "الغازات الذائبة"], ["Gases escape into the air, so nothing is left: soda water has carbon dioxide dissolved in it.", "الغازات تتصاعد إلى الهواء فلا يتبقى شيء؛ فالماء الغازي ذائب فيه ثاني أكسيد الكربون."]]
    ]
  };

  D.p6u4l2 = {
    title: ["Metals in acid and water", "الفلزات في الحمض والماء"],
    svg: function () {
      var s = "", tubes = [[t("Al + acid", "ألومنيوم + حمض"), true], [t("Fe + acid", "حديد + حمض"), true], [t("Al + water", "ألومنيوم + ماء"), false], [t("Fe + water", "حديد + ماء"), false]];
      tubes.forEach(function (tb, i) {
        var x = 30 + i * 62;
        s += '<path d="M' + x + ' 30 L' + x + ' 150 C' + x + ' 166 ' + (x + 30) + ' 166 ' + (x + 30) + ' 150 L' + (x + 30) + ' 30" fill="none" stroke="var(--muted)" stroke-width="2"/>';
        s += '<rect x="' + (x + 2) + '" y="90" width="26" height="62" fill="' + (tb[1] ? "#fef9c3" : "#dbeafe") + '" opacity=".8"/>';
        s += '<rect x="' + (x + 8) + '" y="136" width="14" height="14" rx="3" fill="' + (i % 2 ? "#6b7280" : "#d4d4d8") + '"/>';
        if (tb[1]) for (var j = 0; j < 5; j++) s += '<circle cx="' + (x + 9 + (j * 7) % 14) + '" cy="' + (128 - j * 8) + '" r="3" fill="none" stroke="#64748b"/>';
        s += tx(x + 15, 182, tb[0], mut, 10);
      });
      s += '<path d="M290 120 L380 120 L370 150 L300 150 z" fill="#e2e8f0" stroke="var(--muted)" stroke-width="2"/><ellipse cx="335" cy="132" rx="22" ry="6" fill="#f8fafc" stroke="#cbd5e1"/>' + tx(335, 172, t("white solid", "مادة صلبة بيضاء"), mut, 11);
      s += '<circle cx="335" cy="60" r="26" fill="#facc15" stroke="#a16207" stroke-width="2"/>' + tx(335, 66, "Au", ink, 14);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [45, 110, ["Aluminium + acid", "الألومنيوم + الحمض"], ["Dilute hydrochloric acid reacts with aluminium and produces bubbles.", "حمض الهيدروكلوريك المخفف يتفاعل مع الألومنيوم وتتكون فقاعات."]],
      [107, 110, ["Iron + acid", "الحديد + الحمض"], ["Steel wool (iron) also reacts with dilute hydrochloric acid and produces bubbles of hydrogen gas.", "سلك المواعين (الحديد) يتفاعل أيضًا مع حمض الهيدروكلوريك المخفف وتتكون فقاعات غاز الهيدروجين."]],
      [200, 120, ["Metals in water", "الفلزات في الماء"], ["In water, aluminium and iron do not bubble: compare to see that the acid causes the reaction.", "في الماء لا يُكوّن الألومنيوم والحديد فقاعات: نقارن لنرى أن الحمض هو سبب التفاعل."]],
      [335, 134, ["White solid", "مادة صلبة بيضاء"], ["After evaporating, a white solid is left. It is not shiny and gives no bubbles with acid: a new substance.", "بعد التبخير تتبقى مادة صلبة بيضاء غير لامعة لا تُكوّن فقاعات مع الحمض: مادة جديدة."]],
      [335, 60, ["Gold", "الذهب"], ["Gold is very stable and does not dissolve in hydrochloric acid, so Tutankhamun's mask still shines.", "الذهب ثابت جدًا ولا يذوب في حمض الهيدروكلوريك، ولهذا ما زال قناع توت عنخ آمون لامعًا."]]
    ]
  };

  /* =====================================================================
     SIMULATIONS (original designs). Shared helpers first.
     ===================================================================== */
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function r1(v) { return Math.round(v * 10) / 10; }
  function bar(c, x, y, w, h, f, col, C) { c.fillStyle = C.line; K.rr(c, x, y, w, h, Math.min(5, h / 2)); c.fill(); if (f > 0.003) { c.fillStyle = col; K.rr(c, x, y, Math.max(h, clamp(f, 0, 1) * w), h, Math.min(5, h / 2)); c.fill(); } }
  function btnRow(list) { return '<div class="btn-row">' + list.map(function (b) { return '<button type="button" class="btn sm ' + (b[2] || "") + '" id="' + b[0] + '">' + b[1] + "</button>"; }).join("") + "</div>"; }
  function arrowLine(c, x1, y1, x2, y2, col, w) {
    var a = Math.atan2(y2 - y1, x2 - x1), hl = 9 + (w || 3);
    c.strokeStyle = col; c.fillStyle = col; c.lineWidth = w || 3; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2 - Math.cos(a) * hl * 0.6, y2 - Math.sin(a) * hl * 0.6); c.stroke();
    c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - Math.cos(a - 0.45) * hl, y2 - Math.sin(a - 0.45) * hl); c.lineTo(x2 - Math.cos(a + 0.45) * hl, y2 - Math.sin(a + 0.45) * hl); c.closePath(); c.fill();
  }
  /* polyline in 0..1 coordinates -> pixel path with length and point-at-distance */
  function poly(pts, W, H) {
    var P = pts.map(function (p) { return { x: p[0] * W, y: p[1] * H, tag: p[2] }; }), cum = [0];
    for (var i = 1; i < P.length; i++) cum.push(cum[i - 1] + Math.hypot(P[i].x - P[i - 1].x, P[i].y - P[i - 1].y));
    return {
      P: P, cum: cum, len: cum[cum.length - 1],
      at: function (s) {
        s = clamp(s, 0, cum[cum.length - 1]);
        for (var i = 1; i < P.length; i++) if (s <= cum[i] || i === P.length - 1) { var f = (s - cum[i - 1]) / Math.max(1e-6, cum[i] - cum[i - 1]); return { x: P[i - 1].x + (P[i].x - P[i - 1].x) * f, y: P[i - 1].y + (P[i].y - P[i - 1].y) * f, tag: P[i - 1].tag, i: i - 1 }; }
        return P[0];
      },
      near: function (x, y, s0, win) {
        var best = s0, bd = 1e9;
        for (var s = Math.max(0, s0 - win); s <= Math.min(cum[cum.length - 1], s0 + win); s += 3) { var q = this.at(s), d = (q.x - x) * (q.x - x) + (q.y - y) * (q.y - y); if (d < bd) { bd = d; best = s; } }
        return best;
      }
    };
  }

  /* ---------------------------------------------------------------------
     1. p6_candle - candle under a glass jar: lid, gap in the clay, gas jars,
        live O2 / CO2 / N2 meter and a limewater test.
     --------------------------------------------------------------------- */
  L.p6_candle = function (host, cfg, done) {
    host.innerHTML = hint(t("Light the candle, then try the lid and the gap in the clay. Fill the jar with different gases. Watch the gas meter and the flame.", "أشعل الشمعة، ثم جرّب الغطاء والفتحة في الصلصال، واملأ البرطمان بغازات مختلفة، وراقب مقياس الغازات واللهب.")) + '<div class="seg" id="p6cg"></div>';
    var S = K.make(host, 0.62, 380), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = btnRow([["p6cl", "🔥 " + t("Light", "إشعال"), "primary"], ["p6lid", "🟫 " + t("Lid", "الغطاء"), "tg"], ["p6gap", "✂️ " + t("Gap at the bottom", "فتحة من أسفل"), "tg"], ["p6lime", "🧪 " + t("Shake limewater", "رجّ ماء الجير"), ""]]);
    var tick = L._goals(host, [t("Put the lid on and watch the flame go out.", "ضع الغطاء وشاهد اللهب ينطفئ."), t("Keep the candle burning for 10 seconds with gaps at the top and the bottom.", "اجعل الشمعة تشتعل ١٠ ثوانٍ مع فتحات من أعلى ومن أسفل."),
      t("Make the candle burn brightly in a jar of oxygen.", "اجعل الشمعة تشتعل بشدة في برطمان به أكسجين."), t("See the flame go out in nitrogen or carbon dioxide.", "شاهد اللهب ينطفئ في النيتروجين أو ثاني أكسيد الكربون."),
      t("After burning in air, shake limewater until it turns milky white.", "بعد الاحتراق في الهواء، رجّ ماء الجير حتى يتعكر.")], done);
    var o2 = 21, co2 = 0.04, lid = false, gap = false, lit = false, fl = 0, gas = "air", openT = 0, brightT = 0, lime = -1, flow = [], msgT = 0, msg = "";
    var GAS = { air: [21, 0.04], o2: [76, 0.03], n2: [6.3, 0.01], co2: [6.3, 70] };
    function say(s) { msg = s; msgT = 3; E.speak(s); }
    function setTg() { ctl.querySelector("#p6lid").classList.toggle("on", lid); ctl.querySelector("#p6gap").classList.toggle("on", gap); }
    var seg = K.seg(host, "#p6cg", [["air", "🌬️ " + t("Air", "هواء")], ["o2", "O₂ " + t("Oxygen", "أكسجين")], ["n2", "N₂ " + t("Nitrogen", "نيتروجين")], ["co2", "CO₂ " + t("Carbon dioxide", "ثاني أكسيد الكربون")]], gas, function (v) {
      gas = v; o2 = GAS[v][0]; co2 = GAS[v][1]; lime = -1;
      if (v !== "air") { lid = true; gap = false; lit = true; fl = 0.5; say(t("The jar is filled with the gas, a lit candle is lowered in and the lid is closed.", "مُلئ البرطمان بالغاز، وأُنزلت شمعة مشتعلة وأُغلق الغطاء.")); }
      setTg();
    });
    ctl.querySelector("#p6cl").onclick = function () { if (lit) return; lit = true; fl = 0.3; if (o2 < 16.4) say(t("Not enough oxygen: the flame goes out at once.", "لا يوجد أكسجين كافٍ: ينطفئ اللهب فورًا.")); };
    ctl.querySelector("#p6lid").onclick = function () { lid = !lid; setTg(); };
    ctl.querySelector("#p6gap").onclick = function () { gap = !gap; setTg(); };
    ctl.querySelector("#p6lime").onclick = function () {
      lime = clamp((co2 - 0.04) / 2.5, 0, 1);
      say(lime > 0.4 ? t("The limewater turned milky white: there is more carbon dioxide.", "تعكّر ماء الجير: يوجد ثاني أكسيد كربون أكثر.") : t("The limewater stays clear: very little carbon dioxide.", "يبقى ماء الجير رائقًا: ثاني أكسيد الكربون قليل جدًا."));
      if (lime > 0.4 && gas === "air") tick(4);
    };
    setTg();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      var f = lit ? clamp((o2 - 16) / 5, 0, 2.6) : 0;
      if (lit && f < 0.06) {
        lit = false;
        if (gas === "n2" || gas === "co2") { tick(3); say(t("The flame went out: this gas does not help burning.", "انطفأ اللهب: هذا الغاز لا يساعد على الاشتعال.")); }
        else if (lid) { tick(0); say(t("The flame went out: the air inside was used up and not renewed.", "انطفأ اللهب: استُهلك الهواء بالداخل ولم يتجدد.")); }
        else say(t("The flame went out: the air was not renewed fast enough.", "انطفأ اللهب: لم يتجدد الهواء بالسرعة الكافية."));
      }
      var cons = 1.2 * f; o2 -= cons * dt; co2 += cons * 0.8 * dt;
      var ex = lid ? (gap ? 0.01 : 0) : (gap ? 0.5 : 0.06);
      o2 += ex * (21 - o2) * dt; co2 += ex * (0.04 - co2) * dt; o2 = clamp(o2, 0, 100); co2 = clamp(co2, 0, 100);
      if (ex > 0.4 && gas !== "air") gas = "air";
      fl += ((lit ? f : 0) - fl) * Math.min(1, dt * 5);
      if (lit && !lid && gap) { openT += dt; if (openT > 10) tick(1); } else openT = 0;
      if (lit && gas === "o2" && f > 1.8) { brightT += dt; if (brightT > 1) tick(2); } else brightT = 0;
      if (msgT > 0) msgT -= dt;
      // geometry
      var by = H * 0.9, jw = Math.min(W * 0.3, 180), jh = H * 0.6, cx = W * 0.32, jx = cx - jw / 2, jt = by - 12 - jh;
      c.clearRect(0, 0, W, H);
      // board + clay
      c.fillStyle = "#a16207"; c.globalAlpha = 0.55; c.fillRect(W * 0.04, by, W * 0.56, 10); c.globalAlpha = 1;
      c.fillStyle = "#d6d3d1"; K.rr(c, jx - 26, by - 12, jw + 52, 12, 4); c.fill();
      if (gap) { c.clearRect(jx - 6, by - 12, 22, 12); }
      // gas inside the jar
      var tint = gas === "co2" ? "rgba(100,116,139," : gas === "n2" ? "rgba(203,213,225," : "rgba(56,189,248,";
      c.fillStyle = tint + (0.1 + clamp(o2 / 100, 0, 1) * 0.25) + ")"; c.fillRect(jx, jt, jw, jh);
      // air flow particles
      if (lit && ex > 0.05 && Math.random() < ex * 3 * dt * 20) flow.push(gap ? { x: jx - 30, y: by - 6, vx: 70, vy: 0, l: 3 } : { x: cx + K.rnd(-jw * 0.4, jw * 0.4), y: jt - 6, vx: 0, vy: 18, l: 2.2, sw: 1 });
      flow.forEach(function (p) {
        if (p.sw) { p.y += p.vy * dt; if (p.y > jt + 40) p.vy = -18; }
        else { if (p.x > jx + 10) { p.vx *= 0.96; p.vy -= 160 * dt; p.x += (cx - p.x) * dt * 1.5; } p.x += p.vx * dt; p.y += p.vy * dt; }
        p.l -= dt; K.dot(c, p.x, p.y, 3, "rgba(59,130,246,.75)");
      });
      flow = flow.filter(function (p) { return p.l > 0 && p.y > -10; });
      // candle
      var ch = Math.min(60, jh * 0.32), ctop = by - 12 - ch;
      c.fillStyle = "#fef3c7"; K.rr(c, cx - 8, ctop, 16, ch, 3); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 1; c.stroke();
      c.strokeStyle = "#292524"; c.lineWidth = 2; c.beginPath(); c.moveTo(cx, ctop); c.lineTo(cx, ctop - 6); c.stroke();
      if (fl > 0.03) {
        var s = 0.6 + fl * 0.75, fh = 26 * s, fw = 8 * s, wob = Math.sin(performance.now() / 90) * 1.5;
        c.globalCompositeOperation = "lighter"; K.dot(c, cx, ctop - fh * 0.6, fh * 0.9, "rgba(251,191,36,.18)"); c.globalCompositeOperation = "source-over";
        c.fillStyle = fl > 1.6 ? "#fde047" : "#f97316"; c.beginPath(); c.moveTo(cx + wob, ctop - 6 - fh); c.quadraticCurveTo(cx + fw * 1.4, ctop - 6 - fh * 0.3, cx, ctop - 4); c.quadraticCurveTo(cx - fw * 1.4, ctop - 6 - fh * 0.3, cx + wob, ctop - 6 - fh); c.fill();
        K.dot(c, cx, ctop - 6 - fh * 0.25, fw * 0.45, "rgba(59,130,246,.8)");
      }
      // jar glass + lid
      c.strokeStyle = C.muted; c.lineWidth = 3; c.strokeRect(jx, jt, jw, jh);
      c.strokeStyle = "rgba(255,255,255,.45)"; c.lineWidth = 2; c.beginPath(); c.moveTo(jx + 8, jt + 10); c.lineTo(jx + 8, jt + jh - 10); c.stroke();
      if (lid) { c.fillStyle = "#94a3b8"; K.rr(c, jx - 6, jt - 9, jw + 12, 10, 3); c.fill(); }
      else K.txt(c, t("open top", "فتحة علوية"), cx, jt - 10, { c: C.muted, s: 11 });
      if (gap) K.txt(c, t("gap", "فتحة"), jx + 5, by + 20, { c: C.muted, s: 11 });
      // meter
      var mx = W * 0.62, mw = W * 0.34, my = H * 0.1, rows = [["O₂", o2, "#3b82f6", 100], ["CO₂", co2, "#64748b", 100], ["N₂", Math.max(0, 100 - o2 - co2 - 0.9), "#a78bfa", 100]];
      K.txt(c, t("Gas meter (inside the jar)", "مقياس الغازات (داخل البرطمان)"), mx, my, { c: C.ink, s: 13, a: "left" });
      rows.forEach(function (r, i) {
        var y = my + 22 + i * 34;
        K.txt(c, r[0], mx, y + 7, { c: C.ink, s: 12, a: "left" }); bar(c, mx + 36, y, mw - 100, 14, r[1] / r[3], r[2], C);
        K.txt(c, n(r1(r[1])) + "%", mx + mw, y + 7, { c: C.ink, s: 12, a: "right" });
      });
      var fy = my + 22 + 3 * 34 + 8;
      K.txt(c, t("Flame: ", "اللهب: ") + (fl < 0.05 ? t("out", "منطفئ") : fl > 1.6 ? t("very bright", "شديد جدًا") : fl > 0.6 ? t("normal", "عادي") : t("weak", "ضعيف")), mx, fy, { c: C.ink, s: 13, a: "left" });
      // limewater tube
      var tx0 = mx + 10, ty0 = fy + 18, th = Math.max(40, H - ty0 - 34);
      c.fillStyle = lime < 0 ? "rgba(226,232,240,.35)" : "rgba(255,255,255," + (0.15 + lime * 0.8) + ")"; K.rr(c, tx0, ty0 + th * 0.35, 20, th * 0.65, 8); c.fill();
      c.strokeStyle = C.muted; c.lineWidth = 2; K.rr(c, tx0, ty0, 20, th, 8); c.stroke();
      K.txt(c, lime < 0 ? t("limewater: not tested", "ماء الجير: لم يُختبر") : lime > 0.4 ? t("milky white!", "متعكر!") : t("clear", "رائق"), tx0 + 30, ty0 + th * 0.6, { c: C.muted, s: 12, a: "left" });
      if (msgT > 0) { c.globalAlpha = Math.min(1, msgT); K.txt(c, msg.length > 70 ? msg.slice(0, 68) + "…" : msg, W / 2, H - 10, { c: C.ink, s: 12 }); c.globalAlpha = 1; }
    });
  };

  /* ---------------------------------------------------------------------
     2. p6_breath - drag the chest handle to breathe; air enters the lungs,
        gas exchange in a zoomed alveolus, exhaled-air readout, limewater bags.
     --------------------------------------------------------------------- */
  L.p6_breath = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the orange handle down to breathe in and up to breathe out (or press Auto). Watch oxygen (blue) cross into the blood and carbon dioxide (grey) come out.", "اسحب المقبض البرتقالي لأسفل لأخذ الشهيق ولأعلى لإخراج الزفير (أو اضغط تلقائي)، وراقب الأكسجين (أزرق) ينتقل إلى الدم وثاني أكسيد الكربون (رمادي) يخرج.")) + '<div class="seg" id="p6bm"></div>';
    var S = K.make(host, 0.76, 430), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = btnRow([["p6auto", "▶ " + t("Auto", "تلقائي"), "tg"], ["p6room", "🧪 " + t("Limewater: bag of room air", "ماء الجير: كيس هواء الغرفة"), ""], ["p6exh", "🧪 " + t("Limewater: bag of breathed-out air", "ماء الجير: كيس هواء الزفير"), ""]]);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Breathe in: fill the lungs with fresh air.", "خذ شهيقًا: املأ الرئتين بهواء جديد."), t("Breathe out: push the used air out.", "أخرج الزفير: ادفع الهواء المستهلك إلى الخارج."),
      t("Pass 20 oxygen particles into the blood.", "انقل ٢٠ جزيء أكسجين إلى الدم."), t("Show that breathed-out air turns limewater milky.", "أثبت أن هواء الزفير يعكّر ماء الجير.")], done);
    var v = 0.2, vT = 0.2, vPrev = 0.2, auto = false, ph = 0, mode = "rest", lO2 = 4, lCO2 = 1, moving = [], delivered = 0, body = 70, wasFull = false, inhaled = 0, absorbed = 0, exO2 = null, exCO2 = null, tubes = { room: -1, exh: -1 }, dragOn = false, flowP = [];
    K.seg(host, "#p6bm", [["rest", "🪑 " + t("Resting", "راحة")], ["run", "🏃 " + t("Running", "جري")]], mode, function (m) { mode = m; });
    ctl.querySelector("#p6auto").onclick = function () { auto = !auto; this.classList.toggle("on", auto); };
    ctl.querySelector("#p6room").onclick = function () { tubes.room = 0.05; E.speak(t("Room air: the limewater stays clear.", "هواء الغرفة: يبقى ماء الجير رائقًا.")); show(); };
    ctl.querySelector("#p6exh").onclick = function () {
      if (exCO2 == null) { E.toast(t("Breathe in and out first to fill the bag.", "خذ شهيقًا وزفيرًا أولًا لملء الكيس.")); return; }
      tubes.exh = clamp(exCO2 / 4, 0.3, 1); E.speak(t("Breathed-out air: the limewater turns milky white.", "هواء الزفير: يتعكر ماء الجير.")); tick(3); show();
    };
    function show() {
      out.innerHTML = "<span>🌬️ " + t("Breathed-in air", "هواء الشهيق") + ': <b dir="ltr">O₂ ' + n(21) + "% · CO₂ " + n(0.04) + "%</b></span>" +
        "<span>😮‍💨 " + t("Breathed-out air", "هواء الزفير") + ": " + (exO2 == null ? t("breathe out first", "أخرج الزفير أولًا") : '<b dir="ltr">O₂ ≈ ' + n(r1(exO2)) + "% · CO₂ ≈ " + n(r1(exCO2)) + "%</b>") + "</span>" +
        '<span class="sub">' + t("Oxygen delivered to the blood: ", "الأكسجين المنقول إلى الدم: ") + n(delivered) + "</span>";
    }
    function geo() { var W = S.W, H = S.H; return { hx: W * 0.22, hy: H * 0.1, ly: H * 0.5, hdl: H * 0.76 + v * H * 0.12, zx: W * 0.68, zy: H * 0.4, zr: Math.min(W * 0.17, H * 0.27) }; }
    S.drag({
      down: function (p) { var g = geo(); if (Math.abs(p.x - g.hx) < S.W * 0.16 && Math.abs(p.y - g.hdl) < 26) { dragOn = true; auto = false; ctl.querySelector("#p6auto").classList.remove("on"); return true; } return false; },
      move: function (p) { if (dragOn) vT = clamp((p.y - S.H * 0.76) / (S.H * 0.12), 0, 1); },
      up: function () { dragOn = false; },
      hover: function (p) { var g = geo(); return Math.abs(p.x - g.hx) < S.W * 0.16 && Math.abs(p.y - g.hdl) < 26; }
    });
    show();
    var acc = 0, showT = 0;
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      if (auto) { ph += dt * (mode === "run" ? 2.6 : 1.2); vT = 0.5 - 0.5 * Math.cos(ph); }
      v += (vT - v) * Math.min(1, dt * 8);
      var dv = v - vPrev; vPrev = v;
      if (dv > 0) { var add = dv * 26; lO2 = Math.min(26, lO2 + add); inhaled += add; for (var k = 0; k < add * 2; k++) flowP.push({ s: 0, dir: 1 }); }
      if (dv < 0 && v > 0.01) {
        var fr = clamp(-dv / Math.max(0.05, v - dv), 0, 1), ro = lO2 * fr, rc = lCO2 * fr; lO2 -= ro; lCO2 -= rc;
        for (var k2 = 0; k2 < (ro + rc) * 2; k2++) flowP.push({ s: 1, dir: -1 });
      }
      if (v > 0.85) { tick(0); wasFull = true; }
      if (v < 0.1 && wasFull) {
        wasFull = false; tick(1);
        var q = inhaled > 0 ? clamp(absorbed / inhaled, 0, 1) : 0; exO2 = 21 - 4 * clamp(q * 2, 0, 1); exCO2 = 0.04 + 4 * clamp(q * 2, 0, 1); inhaled = 0; absorbed = 0; show();
      }
      // gas exchange in the alveolus
      acc += dt;
      if (acc > 0.12) {
        acc = 0;
        if (lO2 > 0.6 && Math.random() < 0.08 + lO2 / 80) { lO2 -= 1; absorbed++; moving.push({ k: "o", t: 0 }); }
      }
      moving.forEach(function (m) { m.t += dt * 1.4; if (m.k === "o" && m.t >= 1 && !m.done) { m.done = 1; delivered++; body = Math.min(100, body + 3); lCO2 = Math.min(20, lCO2 + 0.8); if (delivered >= 20) tick(2); } });
      moving = moving.filter(function (m) { return m.t < 1.6; });
      body = clamp(body - dt * (mode === "run" ? 8 : 2.5), 0, 100);
      showT += dt; if (showT > 1) { showT = 0; show(); }
      var g = geo();
      c.clearRect(0, 0, W, H);
      // body: head, trachea, lungs
      c.fillStyle = "rgba(251,146,60,.18)"; K.rr(c, g.hx - W * 0.16, H * 0.2, W * 0.32, H * 0.6, 30); c.fill();
      K.dot(c, g.hx, g.hy, Math.min(26, H * 0.08), "rgba(251,146,60,.35)", C.muted);
      var lx = W * 0.075 * (0.82 + 0.3 * v), lyR = H * 0.2 * (0.85 + 0.25 * v);
      c.fillStyle = "#fecdd3"; c.strokeStyle = "#fb7185"; c.lineWidth = 2;
      [-1, 1].forEach(function (sd) { c.beginPath(); c.ellipse(g.hx + sd * W * 0.075, g.ly, lx, lyR, 0, 0, 7); c.fill(); c.stroke(); });
      c.strokeStyle = "#f9a8b4"; c.lineWidth = 8; c.beginPath(); c.moveTo(g.hx, g.hy + 18); c.lineTo(g.hx, g.ly - lyR * 0.6); c.moveTo(g.hx, g.ly - lyR * 0.6); c.lineTo(g.hx - 22, g.ly - lyR * 0.3); c.moveTo(g.hx, g.ly - lyR * 0.6); c.lineTo(g.hx + 22, g.ly - lyR * 0.3); c.stroke();
      K.txt(c, t("trachea", "القصبة الهوائية"), g.hx + 12, g.hy + 34, { c: C.muted, s: 10, a: "left" });
      // air particles travelling in the trachea
      flowP.forEach(function (p) { p.s += p.dir * dt * 1.8; var y = g.hy + 18 + (g.ly - g.hy - 18) * clamp(p.s, 0, 1); K.dot(c, g.hx + K.rnd(-2, 2), y, 2.6, p.dir > 0 ? "rgba(59,130,246,.8)" : "rgba(100,116,139,.8)"); });
      flowP = flowP.filter(function (p) { return p.s >= 0 && p.s <= 1; });
      // handle
      c.fillStyle = "#f97316"; K.rr(c, g.hx - W * 0.14, g.hdl - 7, W * 0.28, 14, 7); c.fill();
      K.txt(c, v > 0.6 ? t("breathing in", "شهيق") : v < 0.3 ? t("breathing out", "زفير") : "↕", g.hx, g.hdl + 20, { c: C.ink, s: 12 });
      // zoom: alveolus + blood vessel
      c.strokeStyle = C.muted; c.lineWidth = 1; c.setLineDash([4, 4]); c.beginPath(); c.moveTo(g.hx + W * 0.14, g.ly); c.lineTo(g.zx - g.zr, g.zy); c.stroke(); c.setLineDash([]);
      c.fillStyle = "rgba(147,197,253,.25)"; c.strokeStyle = "#fb7185"; c.lineWidth = 3; c.beginPath(); c.arc(g.zx, g.zy, g.zr * (0.92 + 0.08 * v), 0, 7); c.fill(); c.stroke();
      K.txt(c, t("alveolus (zoom)", "حويصلة هوائية (تكبير)"), g.zx, g.zy - g.zr - 10, { c: C.ink, s: 12 });
      var vy = g.zy + g.zr + 14;
      c.fillStyle = "rgba(239,68,68,.28)"; K.rr(c, g.zx - g.zr * 1.4, vy - 12, g.zr * 2.8, 24, 12); c.fill();
      K.txt(c, t("blood vessel → body", "وعاء دموي ← الجسم"), g.zx, vy + 26, { c: C.muted, s: 11 });
      var tm = performance.now() / 1000;
      for (var i = 0; i < 7; i++) { var bx = g.zx - g.zr * 1.3 + ((i * 0.37 + tm * 0.25) % 1) * g.zr * 2.6; K.dot(c, bx, vy, 7, "#ef4444"); }
      for (i = 0; i < Math.round(lO2); i++) { var a = i * 2.39, rr = g.zr * 0.75 * Math.sqrt(((i * 0.61) % 1)); K.dot(c, g.zx + Math.cos(a + tm * 0.3) * rr, g.zy + Math.sin(a + tm * 0.3) * rr, 4.5, "#3b82f6"); }
      for (i = 0; i < Math.round(lCO2); i++) { var a2 = i * 2.1 + 1, rr2 = g.zr * 0.7 * Math.sqrt(((i * 0.43 + 0.3) % 1)); K.dot(c, g.zx + Math.cos(a2 - tm * 0.25) * rr2, g.zy + Math.sin(a2 - tm * 0.25) * rr2, 4.5, "#64748b"); }
      moving.forEach(function (m) { var tt = clamp(m.t, 0, 1); K.dot(c, g.zx + (m.t * 37 % 20) - 10, g.zy + g.zr * 0.6 + tt * (vy - g.zy - g.zr * 0.6), 4.5, "#3b82f6"); if (m.t > 0.3) K.dot(c, g.zx + 18, vy - (m.t - 0.3) * g.zr, 4, "rgba(100,116,139," + clamp(1.3 - m.t, 0, 1) + ")"); });
      // legend + body oxygen
      var lgx = W * 0.48, lgy = H * 0.96;
      K.dot(c, lgx, lgy, 5, "#3b82f6"); K.txt(c, "O₂", lgx + 10, lgy, { c: C.ink, s: 11, a: "left" }); K.dot(c, lgx + 46, lgy, 5, "#64748b"); K.txt(c, "CO₂", lgx + 56, lgy, { c: C.ink, s: 11, a: "left" });
      K.txt(c, t("Body oxygen", "أكسجين الجسم"), W * 0.97, H * 0.06, { c: C.ink, s: 12, a: "right" }); bar(c, W * 0.74, H * 0.1, W * 0.23, 12, body / 100, body > 40 ? "#22c55e" : "#ef4444", C);
      // limewater bag tubes
      [["room", t("room air", "هواء الغرفة")], ["exh", t("breathed out", "هواء الزفير")]].forEach(function (tb, j) {
        var x = W * 0.8 + j * W * 0.12, y0 = vy + 36, th = Math.max(26, H - y0 - 18), val = tubes[tb[0]];
        c.fillStyle = val < 0 ? "rgba(226,232,240,.3)" : "rgba(255,255,255," + (0.12 + val * 0.85) + ")"; K.rr(c, x - 8, y0 + th * 0.4, 16, th * 0.6, 7); c.fill();
        c.strokeStyle = C.muted; c.lineWidth = 2; K.rr(c, x - 8, y0, 16, th, 7); c.stroke(); K.txt(c, tb[1], x, y0 + th + 9, { c: C.muted, s: 9 });
      });
    });
  };

  /* ---------------------------------------------------------------------
     3. p6_digest - drag the food along the digestive tract; chewing,
        digestion, absorption in the small intestine (villi), water in the
        large intestine; plus the saliva + iodine test tubes.
     --------------------------------------------------------------------- */
  L.p6_digest = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the food along the digestive tract. Keep it in each organ long enough to do its job. Then try the saliva test.", "اسحب الطعام على طول القناة الهضمية، واتركه في كل عضو مدة كافية ليؤدي وظيفته، ثم جرّب اختبار اللعاب."));
    var S = K.make(host, 0.72, 430), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = btnRow([["p6warm", "🌡️ " + t("Warm both tubes to 40 °C", "دفّئ الأنبوبتين إلى ٤٠ °س"), ""], ["p6iod", "💧 " + t("Add iodine", "أضف محلول اليود"), ""], ["p6tre", "↺ " + t("New tubes", "أنابيب جديدة"), "ghost"]]);
    var tick = L._goals(host, [t("Chew the food in the mouth.", "امضغ الطعام في الفم."), t("Swallow it down to the stomach in the right order.", "ابلعه حتى يصل إلى المعدة بالترتيب الصحيح."),
      t("Absorb all the nutrients in the small intestine.", "امتص كل العناصر الغذائية في الأمعاء الدقيقة."), t("Absorb the water in the large intestine, then let the rest leave.", "امتص الماء في الأمعاء الغليظة، ثم اترك الباقي يخرج."),
      t("Saliva test: show the saliva tube does not turn dark blue.", "اختبار اللعاب: أثبت أن أنبوبة اللعاب لا تتلون بالأزرق الداكن.")], done);
    var PTS = [[0.3, 0.06, "mouth"], [0.3, 0.13, "pharynx"], [0.3, 0.19, "eso"], [0.3, 0.36, "stomach"], [0.4, 0.36, "stomach"], [0.45, 0.43, "stomach"], [0.36, 0.5, "si"], [0.2, 0.585, "si"], [0.41, 0.625, "si"], [0.2, 0.665, "si"], [0.41, 0.705, "si"], [0.2, 0.745, "si"], [0.4, 0.785, "li"], [0.47, 0.8, "li"], [0.47, 0.535, "li"], [0.13, 0.535, "li"], [0.13, 0.86, "li"], [0.3, 0.86, "anus"], [0.3, 0.95, "anus"]];
    var NM = { mouth: [t("Mouth", "الفم"), t("Teeth and saliva", "الأسنان واللعاب")], pharynx: [t("Pharynx", "البلعوم"), t("Food passes on", "يمر الطعام")], eso: [t("Esophagus (food pipe)", "المريء"), t("Carries food down", "ينقل الطعام لأسفل")],
      stomach: [t("Stomach", "المعدة"), t("Digestive juice", "عصارة هاضمة")], si: [t("Small intestine", "الأمعاء الدقيقة"), t("Villi absorb nutrients", "الخملات تمتص الغذاء")], li: [t("Large intestine", "الأمعاء الغليظة"), t("Water is absorbed", "يُمتص الماء")], anus: [t("Anus", "فتحة الشرج"), t("The rest leaves", "يخرج الباقي")] };
    var FOODS = [["🍞", t("bread", "خبز")], ["🍚", t("rice", "أرز")], ["🫘", t("ful", "فول")]], fi = 0;
    var s = 0, chew = 0, dig = 0, nut = 0, wat = 0, drag = false, dots = [], last = "", warn = 0, tubeWarm = 0, warming = false, iod = false, tubeT = 0;
    function newFood() { s = 0; chew = 0; dig = 0; nut = 0; wat = 0; fi = (fi + 1) % FOODS.length; }
    ctl.querySelector("#p6warm").onclick = function () { if (!warming && tubeWarm < 1) { warming = true; iod = false; } };
    ctl.querySelector("#p6iod").onclick = function () {
      iod = true;
      if (tubeWarm >= 1) { E.speak(t("Tube A turned dark blue, but tube B did not: saliva broke down the starch.", "تلونت الأنبوبة (أ) بالأزرق الداكن ولم تتلون (ب)؛ فاللعاب حوّل النشا.")); tick(4); }
      else E.speak(t("Both tubes turned dark blue: warm them first so the saliva can work, like inside the body.", "تلونت الأنبوبتان بالأزرق الداكن؛ دفّئهما أولًا ليعمل اللعاب كما في داخل الجسم."));
    };
    ctl.querySelector("#p6tre").onclick = function () { tubeWarm = 0; warming = false; iod = false; };
    var path = poly(PTS, Math.min(S.W, S.H * 1.6), S.H);
    S.drag({
      down: function (p) { var q = path.at(s); if (Math.hypot(p.x - q.x, p.y - q.y) < 34) { drag = true; return true; } return false; },
      move: function (p) {
        if (!drag) return;
        var ns = path.near(p.x, p.y, s, 70), tag = path.at(ns).tag;
        if (chew < 1 && tag !== "mouth") { ns = Math.min(ns, s); if (warn <= 0) { E.toast(t("Chew first: keep the food in the mouth.", "امضغ أولًا: اترك الطعام في الفم.")); warn = 2; } }
        if (tag === "anus" && wat < 0.9) { ns = Math.min(ns, s); if (warn <= 0) { E.toast(t("Absorb the water in the large intestine first.", "امتص الماء في الأمعاء الغليظة أولًا.")); warn = 2; } }
        if (ns < s - 40) ns = s - 40; s = ns;
      },
      up: function () { drag = false; },
      hover: function (p) { var q = path.at(s); return Math.hypot(p.x - q.x, p.y - q.y) < 34; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      var bw = Math.min(W, H * 1.6); path = poly(PTS, bw, H);
      var q = path.at(s), tag = q.tag; if (warn > 0) warn -= dt;
      if (tag === "mouth") { chew = Math.min(1, chew + dt / 2.2); if (chew >= 1) tick(0); }
      if (tag === "stomach") { tick(1); dig = Math.min(0.5, dig + dt / 4); }
      if (tag === "si") { dig = Math.min(1, dig + dt / 3); if (dig > 0.4) { var an = Math.min(1 - nut, dt / 3.5); nut += an; wat = Math.min(0.5, wat + dt / 8); if (an > 0 && Math.random() < 0.5) dots.push({ x: q.x, y: q.y, t: 0 }); } if (nut > 0.97) tick(2); }
      if (tag === "li") wat = Math.min(1, wat + dt / 3.5);
      if (tag === "anus" && s > path.len - 6 && wat >= 0.9) { tick(3); E.speak(t("Water absorbed; the rest leaves the body as feces.", "امتُص الماء، ويخرج الباقي من الجسم في صورة براز.")); newFood(); }
      if (tag !== last) { last = tag; E.speak(NM[tag][0]); }
      if (warming) { tubeWarm = Math.min(1, tubeWarm + dt / 2.5); if (tubeWarm >= 1) warming = false; }
      c.clearRect(0, 0, W, H);
      // body outline
      c.fillStyle = "rgba(251,146,60,.13)"; K.rr(c, bw * 0.06, H * 0.02, bw * 0.48, H * 0.96, 40); c.fill();
      // liver
      var lvx = bw * 0.17, lvy = H * 0.4; c.fillStyle = "rgba(153,27,27,.55)"; c.beginPath(); c.ellipse(lvx, lvy, bw * 0.08, H * 0.05, -0.2, 0, 7); c.fill(); K.txt(c, t("liver", "الكبد"), lvx, lvy, { c: "#fff", s: 11 });
      // tract
      c.lineCap = "round"; c.lineJoin = "round";
      var segs = path.P;
      for (var i = 1; i < segs.length; i++) {
        var tg = segs[i - 1].tag, col = tg === "stomach" ? "#fdba74" : tg === "si" ? "#f9a8d4" : tg === "li" ? "#d6b48a" : "#fca5a5", wd = tg === "stomach" ? 26 : tg === "li" ? 18 : tg === "si" ? 11 : 12;
        c.strokeStyle = col; c.lineWidth = wd; c.beginPath(); c.moveTo(segs[i - 1].x, segs[i - 1].y); c.lineTo(segs[i].x, segs[i].y); c.stroke();
      }
      c.lineCap = "butt";
      // nutrient dots flying to the liver
      dots.forEach(function (d) { d.t += dt * 0.9; K.dot(c, d.x + (lvx - d.x) * d.t, d.y + (lvy - d.y) * d.t, 3.5, "#facc15", "rgba(0,0,0,.25)"); });
      dots = dots.filter(function (d) { return d.t < 1; });
      // food bolus
      var fsz = 16 - chew * 6 - dig * 3 - nut * 2, fc = tag === "li" || tag === "anus" ? "#92400e" : "#fde68a";
      K.dot(c, q.x, q.y, fsz + 4, "rgba(0,0,0,.08)"); K.dot(c, q.x, q.y, fsz, fc, "rgba(0,0,0,.35)");
      if (chew < 0.2) K.txt(c, FOODS[fi][0], q.x, q.y + 1, { s: 18 });
      if (tag === "mouth" && chew < 1) for (var k = 0; k < 4; k++) K.dot(c, q.x + K.rnd(-14, 14), q.y + K.rnd(-10, 10), 2, "rgba(147,197,253,.9)");
      // info panel
      var px = bw * 0.6, pw = W - px - 10;
      K.txt(c, NM[tag][0], px, H * 0.06, { c: C.ink, s: 15, a: "left" }); K.txt(c, NM[tag][1], px, H * 0.11, { c: C.muted, s: 12, a: "left" });
      [[t("Chewed", "المضغ"), chew, "#f59e0b"], [t("Digested", "الهضم"), dig, "#ec4899"], [t("Nutrients absorbed", "امتصاص الغذاء"), nut, "#eab308"], [t("Water absorbed", "امتصاص الماء"), wat, "#38bdf8"]].forEach(function (r, j) {
        var y = H * 0.17 + j * H * 0.075; K.txt(c, r[0], px, y, { c: C.ink, s: 11, a: "left" }); bar(c, px, y + 8, pw, 9, r[1], r[2], C);
      });
      // villi zoom while in the small intestine
      if (tag === "si") {
        var vx = px, vy0 = H * 0.5, vw = pw, vh = H * 0.14; c.fillStyle = "rgba(34,197,94,.12)"; K.rr(c, vx, vy0, vw, vh, 8); c.fill();
        for (var vi = 0; vi < 6; vi++) { var xx = vx + 8 + vi * (vw - 16) / 6, hh = vh * (0.55 + 0.15 * Math.sin(performance.now() / 300 + vi)); c.fillStyle = "#fbcfe8"; K.rr(c, xx, vy0 + vh - hh, (vw - 16) / 6 - 4, hh, 6); c.fill(); c.strokeStyle = "#ef4444"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(xx + 6, vy0 + vh); c.lineTo(xx + 6, vy0 + vh - hh + 6); c.stroke(); }
        K.txt(c, t("villi (zoom)", "الخملات (تكبير)"), vx + vw / 2, vy0 - 8, { c: C.muted, s: 11 });
      }
      // saliva test tubes
      var ty = H * 0.68, tH = H * 0.2;
      K.txt(c, t("Saliva test", "اختبار اللعاب"), px, ty - 10, { c: C.ink, s: 12, a: "left" });
      c.fillStyle = "rgba(56,189,248," + (0.12 + tubeWarm * 0.2) + ")"; K.rr(c, px, ty, pw, tH, 8); c.fill();
      K.txt(c, n(Math.round(20 + tubeWarm * 20)) + " °C", px + pw - 6, ty + 12, { c: C.ink, s: 11, a: "right" });
      [[t("A", "أ"), t("A = starch + water", "أ = نشا + ماء"), true], [t("B", "ب"), t("B = starch + saliva", "ب = نشا + لعاب"), false]].forEach(function (tb, j) {
        var x = px + pw * (0.25 + j * 0.35), col = !iod ? "rgba(255,255,255,.75)" : (tb[2] || tubeWarm < 1) ? "#1e3a8a" : "#d6b26e";
        c.fillStyle = col; K.rr(c, x - 8, ty + tH * 0.35, 16, tH * 0.55, 7); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 2; K.rr(c, x - 8, ty + 6, 16, tH * 0.84, 7); c.stroke();
        K.txt(c, tb[0], x - 16, ty + tH * 0.5, { c: C.ink, s: 12 });
        K.txt(c, tb[1], px, ty + tH + 10 + j * 13, { c: C.muted, s: 10, a: "left" });
      });
    });
  };

  /* ---------------------------------------------------------------------
     4. p6_heart - you set the heart rate; activity sets the muscles' need.
        Blood loops (lungs / body), pulse counter, kidneys fill the bladder.
     --------------------------------------------------------------------- */
  L.p6_heart = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose an activity and set the heart rate. Keep the muscles supplied with oxygen. Measure the pulse, and watch the kidneys clean the blood.", "اختر النشاط واضبط معدل ضربات القلب، وحافظ على وصول الأكسجين إلى العضلات، وقِس النبض، وشاهد الكليتين تنظفان الدم."));
    var S = K.make(host, 0.66, 410), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Activity", "النشاط"), 0, 100, 10, 0, "") + L._slider(t("Heart rate", "معدل ضربات القلب"), 50, 170, 5, 75, "") +
      btnRow([["p6pulse", "⏱️ " + t("Measure pulse (6 s × 10)", "قِس النبض (٦ ث × ١٠)"), "primary"], ["p6empty", "🚻 " + t("Empty the bladder", "أفرغ المثانة"), ""]]);
    var tick = L._goals(host, [t("Sit still (activity 0) and measure the pulse.", "اجلس بهدوء (النشاط صفر) وقِس النبض."), t("Run (activity 80 or more) and set a heart rate that keeps the muscles green for 5 seconds.", "اجرِ (النشاط ٨٠ أو أكثر) واضبط معدل القلب ليبقى مؤشر العضلات أخضر ٥ ثوانٍ."),
      t("Measure the pulse while running: it is faster than at rest.", "قِس النبض أثناء الجري: إنه أسرع منه في الراحة."), t("Let the kidneys fill the bladder with urine, then empty it.", "اترك الكليتين تملآن المثانة بالبول، ثم أفرغها.")], done);
    var ins = ctl.querySelectorAll("input"), act = 0, hr = 75, mus = 80, beatT = 0, beatK = 0, beats = 0, meas = -1, measN = 0, rest = -1, last = "", greenT = 0, blad = 0, dots = [], tm = 0;
    function upd() { var sl = ctl.querySelectorAll(".slv"); sl[0].textContent = n(act) + " · " + (act < 20 ? t("sitting", "جلوس") : act < 60 ? t("walking", "مشي") : t("running", "جري")); sl[1].textContent = n(hr) + " " + t("beats/min", "نبضة/دقيقة"); }
    ins[0].oninput = function () { act = Number(ins[0].value); upd(); };
    ins[1].oninput = function () { hr = Number(ins[1].value); upd(); };
    upd();
    ctl.querySelector("#p6pulse").onclick = function () { if (meas >= 0) return; meas = 6; measN = 0; E.speak(t("Counting the pulse for 6 seconds.", "نعدّ النبض ٦ ثوانٍ.")); };
    ctl.querySelector("#p6empty").onclick = function () { if (blad > 0.6) { tick(3); E.speak(t("Urine is discharged from the bladder.", "يخرج البول من المثانة.")); } else E.toast(t("The bladder is not full yet. Wait for the kidneys to filter more blood.", "المثانة لم تمتلئ بعد؛ انتظر حتى ترشّح الكليتان مزيدًا من الدم.")); blad = 0; };
    var A = [[0.5, 0.4], [0.38, 0.3], [0.38, 0.13], [0.62, 0.13], [0.62, 0.3], [0.5, 0.4]];
    var B = [[0.5, 0.4], [0.64, 0.5], [0.78, 0.66], [0.64, 0.86], [0.36, 0.86], [0.22, 0.66], [0.36, 0.5], [0.5, 0.4]];
    for (var i = 0; i < 14; i++) dots.push({ L: "A", u: i / 14, w: 0 });
    for (i = 0; i < 22; i++) dots.push({ L: "B", u: i / 22, w: 0 });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; tm += dt;
      var pA = poly(A, W, H), pB = poly(B, W, H);
      // beats
      beatT += dt; var per = 60 / hr; if (beatT >= per) { beatT -= per; beats++; beatK = 1; if (meas >= 0) measN++; }
      beatK = Math.max(0, beatK - dt * 5);
      if (meas >= 0) { meas -= dt; if (meas < 0) { var res = measN * 10; E.speak(t("Pulse: " + res + " beats per minute.", "النبض: " + res + " نبضة في الدقيقة.")); last = res; if (act <= 10) { rest = res; tick(0); } if (act >= 70 && rest > 0 && res > rest) tick(2); else if (act >= 70 && rest > 0) E.toast(t("Raise the heart rate: running muscles need more oxygen.", "ارفع معدل ضربات القلب: عضلات الجري تحتاج أكسجين أكثر.")); else if (act >= 70 && rest < 0) E.toast(t("Measure the resting pulse too, to compare.", "قِس نبض الراحة أيضًا للمقارنة.")); } }
      // muscles
      var need = 4 + 0.08 * act, sup = (hr - 20) * 0.09; mus = clamp(mus + (sup - need) * 3 * dt, 0, 100);
      if (act >= 80 && mus > 60) { greenT += dt; if (greenT > 5) tick(1); } else greenT = 0;
      // blood flow
      var sp = hr / 75 * 0.12, bodyU = (pB.cum[3] + pB.cum[4]) / 2 / pB.len, kidU = pB.cum[5] / pB.len, lungU = (pA.cum[2] + pA.cum[3]) / 2 / pA.len;
      dots.forEach(function (d) {
        var u0 = d.u; d.u = (d.u + sp * dt * (d.L === "A" ? 1.3 : 1)) % 1;
        if (d.L === "B") { if (u0 < bodyU && d.u >= bodyU) d.w = 1; if (d.w && u0 < kidU && d.u >= kidU) { d.w = 0; blad = Math.min(1, blad + 0.025); } }
      });
      c.clearRect(0, 0, W, H);
      // organs
      c.fillStyle = "#fecdd3"; c.beginPath(); c.ellipse(W * 0.44, H * 0.14, W * 0.07, H * 0.08, 0, 0, 7); c.ellipse(W * 0.56, H * 0.14, W * 0.07, H * 0.08, 0, 0, 7); c.fill();
      K.txt(c, t("lungs", "الرئتان"), W * 0.5, H * 0.03 + 4, { c: C.ink, s: 12 });
      var mg = mus > 60 ? "#22c55e" : mus > 30 ? "#f59e0b" : "#ef4444";
      c.fillStyle = mg; c.globalAlpha = 0.28; K.rr(c, W * 0.34, H * 0.8, W * 0.32, H * 0.12, 12); c.fill(); c.globalAlpha = 1;
      K.txt(c, "💪 " + t("body muscles", "عضلات الجسم"), W * 0.5, H * 0.95, { c: C.ink, s: 12 });
      c.fillStyle = "#9f1239"; c.beginPath(); c.ellipse(W * 0.17, H * 0.62, W * 0.022, H * 0.045, 0.3, 0, 7); c.ellipse(W * 0.23, H * 0.6, W * 0.022, H * 0.045, -0.3, 0, 7); c.fill();
      K.txt(c, t("kidneys", "الكليتان"), W * 0.2, H * 0.52, { c: C.ink, s: 11 });
      var bx = W * 0.2, byy = H * 0.76; c.strokeStyle = C.muted; c.lineWidth = 2; K.rr(c, bx - 16, byy, 32, 36, 10); c.stroke(); c.fillStyle = "rgba(250,204,21,.8)"; K.rr(c, bx - 14, byy + 34 - 32 * blad, 28, 32 * blad, 8); c.fill();
      c.strokeStyle = "#facc15"; c.lineWidth = 2; c.beginPath(); c.moveTo(bx, H * 0.66); c.lineTo(bx, byy); c.stroke();
      K.txt(c, t("bladder", "المثانة"), bx, byy + 48, { c: C.muted, s: 10 });
      K.txt(c, t("small intestine:", "الأمعاء الدقيقة:"), W * 0.87, H * 0.5, { c: C.muted, s: 10 }); K.txt(c, t("nutrients join", "يدخل الغذاء"), W * 0.87, H * 0.5 + 12, { c: C.muted, s: 10 });
      // vessels
      [pA, pB].forEach(function (p) { c.strokeStyle = C.line; c.lineWidth = 10; c.lineJoin = "round"; c.beginPath(); p.P.forEach(function (pt, k) { if (k) c.lineTo(pt.x, pt.y); else c.moveTo(pt.x, pt.y); }); c.stroke(); });
      dots.forEach(function (d) {
        var p = d.L === "A" ? pA : pB, q = p.at(d.u * p.len), red = d.L === "A" ? d.u > lungU : d.u < bodyU;
        K.dot(c, q.x, q.y, 5, red ? "#ef4444" : "#3b82f6"); if (d.w) K.dot(c, q.x, q.y, 2, "#facc15");
      });
      // heart
      var hs = 1 + beatK * 0.18, hx = W * 0.5, hy = H * 0.42, hz = Math.min(W, H) * 0.06 * hs;
      c.fillStyle = "#dc2626"; c.beginPath(); c.moveTo(hx, hy + hz); c.bezierCurveTo(hx - hz * 1.8, hy - hz * 0.2, hx - hz * 0.7, hy - hz * 1.4, hx, hy - hz * 0.5); c.bezierCurveTo(hx + hz * 0.7, hy - hz * 1.4, hx + hz * 1.8, hy - hz * 0.2, hx, hy + hz); c.fill();
      K.txt(c, t("heart", "القلب"), hx, hy - hz * 1.5, { c: C.ink, s: 12 });
      // readouts
      K.txt(c, t("Muscle oxygen", "أكسجين العضلات"), W * 0.97, H * 0.06, { c: C.ink, s: 12, a: "right" }); bar(c, W * 0.72, H * 0.1, W * 0.25, 12, mus / 100, mg, C);
      K.txt(c, t("need ", "الحاجة ") + n(r1(need)) + " · " + t("supply ", "الإمداد ") + n(r1(sup)), W * 0.97, H * 0.18, { c: C.muted, s: 11, a: "right" });
      K.txt(c, meas >= 0 ? "⏱️ " + n(Math.ceil(meas)) + " s · " + n(measN) + " " + t("beats", "نبضة") : last !== "" ? t("Last pulse: ", "آخر نبض: ") + n(last) + t(" /min", " /دقيقة") : t("Pulse not measured", "لم يُقس النبض"), W * 0.03, H * 0.06, { c: C.ink, s: 12, a: "left" });
      if (rest > 0) K.txt(c, t("Resting pulse: ", "نبض الراحة: ") + n(rest), W * 0.03, H * 0.12, { c: C.muted, s: 11, a: "left" });
      var lg = H * 0.2; K.dot(c, W * 0.04, lg, 5, "#ef4444"); K.txt(c, t("oxygen-rich", "غني بالأكسجين"), W * 0.06, lg, { c: C.muted, s: 10, a: "left" }); K.dot(c, W * 0.04, lg + 16, 5, "#3b82f6"); K.txt(c, t("carbon dioxide-rich", "غني بثاني أكسيد الكربون"), W * 0.06, lg + 16, { c: C.muted, s: 10, a: "left" }); K.dot(c, W * 0.04, lg + 32, 3, "#facc15"); K.txt(c, t("waste", "فضلات"), W * 0.06, lg + 32, { c: C.muted, s: 10, a: "left" });
    });
  };

  /* ---------------------------------------------------------------------
     5. p6_photo - a leaf with a draggable foil cover, light slider, plant in
        a sealed bag with O2 / CO2 meter, iodine test view.
     --------------------------------------------------------------------- */
  L.p6_photo = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the foil onto the leaf, set the light, then do the iodine test. Breathe into the bag and watch the gases change by day and by night.", "اسحب ورق الألومنيوم فوق الورقة، واضبط الضوء، ثم أجرِ اختبار اليود. انفخ في الكيس وراقب تغيّر الغازات نهارًا وليلًا."));
    var S = K.make(host, 0.62, 390), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Sunlight", "ضوء الشمس"), 0, 100, 10, 0, "%") +
      btnRow([["p6iodine", "💧 " + t("Iodine test", "اختبار اليود"), "primary"], ["p6blow", "😮‍💨 " + t("Breathe into the bag", "انفخ في الكيس"), ""], ["p6wat", "🚿 " + t("Water the plant", "اسقِ النبات"), ""], ["p6new", "🍃 " + t("New leaf (kept in the dark)", "ورقة جديدة (في الظلام)"), "ghost"]]);
    var tick = L._goals(host, [t("Give the leaf sunlight, then do the iodine test: dark blue means starch.", "أعطِ الورقة ضوء الشمس ثم أجرِ اختبار اليود: الأزرق الداكن يعني وجود نشا."), t("Cover part of a new leaf with foil; show that part stays pale.", "غطِّ جزءًا من ورقة جديدة بورق الألومنيوم، وأثبت أنه لا يتلون."),
      t("Breathe into the bag, then give light: CO₂ goes down and O₂ goes up.", "انفخ في الكيس ثم أعطِ الضوء: يقل ثاني أكسيد الكربون ويزيد الأكسجين."), t("Turn the light off (night): CO₂ rises because the plant only breathes.", "أطفئ الضوء (الليل): يزيد ثاني أكسيد الكربون لأن النبات يتنفس فقط.")], done);
    var GX = 12, GY = 7, st = [], light = 0, o2 = 21, co2 = 0.04, water = 1, peak = 0.04, nightBase = -1, iodT = 0, foil = { x: 0, y: 0, w: 0, h: 0, on: false }, dragF = null;
    function newLeaf() { st = []; for (var i = 0; i < GX * GY; i++) st.push(0); }
    newLeaf();
    var ins = ctl.querySelector("input");
    function upd() { ctl.querySelector(".slv").textContent = n(light) + "%"; }
    ins.oninput = function () { light = Number(ins.value); upd(); if (light > 0) nightBase = -1; };
    upd();
    ctl.querySelector("#p6blow").onclick = function () { co2 = Math.min(5, co2 + 2.5); o2 = Math.max(15, o2 - 2); peak = co2; E.speak(t("Your breath added carbon dioxide to the bag.", "أضاف نفَسك ثاني أكسيد الكربون إلى الكيس.")); };
    ctl.querySelector("#p6wat").onclick = function () { water = 1; };
    ctl.querySelector("#p6new").onclick = function () { newLeaf(); iodT = 0; };
    function leafG() { var W = S.W, H = S.H; return { x: W * 0.4, y: H * 0.2, w: W * 0.4, h: H * 0.56 }; }
    function inLeaf(i, j, g) { var u = (i + 0.5) / GX, v = (j + 0.5) / GY, half = Math.sin(Math.PI * u) * 0.5; return Math.abs(v - 0.5) < half * 0.95; }
    function cellCovered(i, j, g) { if (!foil.on) return false; var cx = g.x + (i + 0.5) * g.w / GX, cy = g.y + (j + 0.5) * g.h / GY; return cx > foil.x && cx < foil.x + foil.w && cy > foil.y && cy < foil.y + foil.h; }
    function foilHome() { var W = S.W, H = S.H; foil.w = W * 0.13; foil.h = H * 0.22; if (!foil.on && !dragF) { foil.x = W * 0.84; foil.y = H * 0.7; } }
    foilHome(); S.onSize = foilHome;
    S.drag({
      down: function (p) { if (p.x > foil.x && p.x < foil.x + foil.w && p.y > foil.y && p.y < foil.y + foil.h) { dragF = { dx: p.x - foil.x, dy: p.y - foil.y }; return true; } return false; },
      move: function (p) { if (dragF) { foil.x = p.x - dragF.dx; foil.y = p.y - dragF.dy; } },
      up: function () { var g = leafG(); foil.on = foil.x + foil.w > g.x + 10 && foil.x < g.x + g.w - 10 && foil.y + foil.h > g.y + 10 && foil.y < g.y + g.h - 10; dragF = null; if (!foil.on) foilHome(); },
      hover: function (p) { return p.x > foil.x && p.x < foil.x + foil.w && p.y > foil.y && p.y < foil.y + foil.h; }
    });
    ctl.querySelector("#p6iodine").onclick = function () {
      iodT = 4; var g = leafG(), tot = 0, blue = 0, cov = 0, covS = 0, unc = 0, uncB = 0;
      for (var j = 0; j < GY; j++) for (var i = 0; i < GX; i++) { if (!inLeaf(i, j, g)) continue; var v = st[j * GX + i]; tot++; if (v > 0.5) blue++; if (cellCovered(i, j, g)) { cov++; covS += v; } else { unc++; if (v > 0.5) uncB++; } }
      if (blue / tot > 0.4) tick(0);
      if (cov >= 3 && covS / cov < 0.3 && unc && uncB / unc > 0.6) { tick(1); E.speak(t("The covered part stayed pale: no sunlight, no starch.", "الجزء المغطى لم يتلون: لا ضوء، لا نشا.")); }
      else if (blue / tot > 0.4) E.speak(t("Dark blue: the leaf made starch in the light.", "أزرق داكن: صنعت الورقة النشا في الضوء."));
      else E.speak(t("No dark blue: there is no starch yet. Give the leaf more light.", "لا يوجد أزرق داكن: لا يوجد نشا بعد. أعطِ الورقة ضوءًا أكثر."));
    };
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = leafG();
      var P = light / 100 * (water > 0.05 ? 1 : 0), Pg = P * clamp(co2 / 0.6, 0.15, 1);
      water = Math.max(0, water - dt * 0.012 * light / 100);
      co2 = Math.max(0.01, co2 + (0.07 - Pg * 0.55) * dt); o2 = clamp(o2 + (Pg * 0.55 - 0.07) * dt, 10, 30);
      if (light >= 50 && peak - co2 >= 1.5) tick(2);
      if (light === 0) { if (nightBase < 0) nightBase = co2; if (co2 - nightBase >= 0.3) tick(3); }
      for (var j = 0; j < GY; j++) for (var i = 0; i < GX; i++) { var k = j * GX + i; if (P > 0 && !cellCovered(i, j, g)) st[k] = Math.min(1, st[k] + P * 0.22 * dt); else st[k] = Math.max(0, st[k] - 0.01 * dt); }
      if (iodT > 0) iodT -= dt;
      c.clearRect(0, 0, W, H);
      // sky
      c.fillStyle = "rgba(" + Math.round(30 + light * 1.6) + "," + Math.round(41 + light * 1.4) + "," + Math.round(80 + light * 1.4) + ",.18)"; c.fillRect(0, 0, W, H);
      var sx0 = W * 0.92, sy0 = H * 0.11;
      if (light > 0) { K.dot(c, sx0, sy0, 14 + light * 0.06, "#facc15"); for (var r = 0; r < 8; r++) { var a = r * 0.785; c.strokeStyle = "rgba(250,204,21," + light / 120 + ")"; c.lineWidth = 2; c.beginPath(); c.moveTo(sx0 + Math.cos(a) * 22, sy0 + Math.sin(a) * 22); c.lineTo(sx0 + Math.cos(a) * 30, sy0 + Math.sin(a) * 30); c.stroke(); } }
      else { K.dot(c, sx0, sy0, 14, "#e2e8f0"); K.dot(c, sx0 + 6, sy0 - 3, 12, C.card); }
      // plant in bag
      var px = W * 0.2, py = H * 0.88;
      c.fillStyle = "#b45309"; c.beginPath(); c.moveTo(px - 30, py - 30); c.lineTo(px + 30, py - 30); c.lineTo(px + 22, py); c.lineTo(px - 22, py); c.fill();
      c.strokeStyle = "#16a34a"; c.lineWidth = 5; c.beginPath(); c.moveTo(px, py - 30); c.lineTo(px, py - H * 0.4); c.stroke();
      [0.15, 0.25, 0.35].forEach(function (h, k) { var yy = py - H * h, sd = k % 2 ? 1 : -1; c.fillStyle = water > 0.05 ? "#4ade80" : "#a3a35a"; c.beginPath(); c.ellipse(px + sd * 22, yy, 22, 9, sd * -0.4, 0, 7); c.fill(); });
      c.strokeStyle = C.muted; c.lineWidth = 2; c.setLineDash([5, 4]); K.rr(c, px - W * 0.12, py - H * 0.56, W * 0.24, H * 0.56 - 26, 20); c.stroke(); c.setLineDash([]);
      K.txt(c, t("sealed bag", "كيس مغلق"), px, py - H * 0.58, { c: C.muted, s: 11 });
      // gas meter
      var mx = W * 0.03, my = H * 0.05;
      [["O₂", o2, 30, "#3b82f6"], ["CO₂", co2, 5, "#64748b"]].forEach(function (rw, k) {
        var y = my + k * 26; K.txt(c, rw[0], mx, y + 6, { c: C.ink, s: 11, a: "left" }); bar(c, mx + 30, y, W * 0.16, 12, rw[1] / rw[2], rw[3], C); K.txt(c, n(r1(rw[1])) + "%", mx + 34 + W * 0.16, y + 6, { c: C.ink, s: 11, a: "left" });
      });
      K.txt(c, "💧 " + t("water ", "الماء ") + n(Math.round(water * 100)) + "%", px, H * 0.96, { c: water > 0.05 ? C.muted : "#ef4444", s: 11 });
      // big leaf grid
      var iod = iodT > 0;
      for (j = 0; j < GY; j++) for (i = 0; i < GX; i++) {
        if (!inLeaf(i, j, g)) continue;
        var v = st[j * GX + i], x = g.x + i * g.w / GX, y = g.y + j * g.h / GY;
        c.fillStyle = iod ? (v > 0.5 ? "#1e3a8a" : v > 0.25 ? "#6b6aa6" : "#e7cf96") : "rgb(" + Math.round(74 - 30 * v) + "," + Math.round(222 - 60 * v) + "," + Math.round(128 - 50 * v) + ")";
        c.fillRect(x, y, g.w / GX + 0.5, g.h / GY + 0.5);
      }
      c.strokeStyle = "#15803d"; c.lineWidth = 2; c.beginPath(); c.moveTo(g.x, g.y + g.h / 2); c.lineTo(g.x + g.w, g.y + g.h / 2); c.stroke();
      c.strokeStyle = "#15803d"; c.lineWidth = 6; c.beginPath(); c.moveTo(g.x - 30, g.y + g.h / 2 + 10); c.lineTo(g.x, g.y + g.h / 2); c.stroke();
      K.txt(c, iod ? t("after iodine: dark blue = starch", "بعد اليود: الأزرق الداكن = نشا") : t("leaf (starch builds up in the light)", "الورقة (يتكوّن النشا في الضوء)"), g.x + g.w / 2, g.y - 12, { c: C.ink, s: 12 });
      // foil
      if (!iod || !foil.on) { c.fillStyle = "rgba(203,213,225,.95)"; c.fillRect(foil.x, foil.y, foil.w, foil.h); c.strokeStyle = "#64748b"; c.lineWidth = 1.5; c.strokeRect(foil.x, foil.y, foil.w, foil.h); K.txt(c, t("foil", "ألومنيوم"), foil.x + foil.w / 2, foil.y + foil.h / 2, { c: "#334155", s: 11 }); }
      else { c.strokeStyle = "#64748b"; c.setLineDash([4, 3]); c.strokeRect(foil.x, foil.y, foil.w, foil.h); c.setLineDash([]); }
      K.txt(c, light === 0 ? "🌙 " + t("night: only breathing", "الليل: تنفس فقط") : "☀️ " + t("photosynthesis + breathing", "بناء ضوئي + تنفس"), W * 0.62, H * 0.95, { c: C.ink, s: 12 });
    });
  };

  /* ---------------------------------------------------------------------
     6. p6_water - wilted plant, coloured water rising roots -> stem -> leaves,
        bag over the plant collects transpired drops, leaves on/off, cut view.
     --------------------------------------------------------------------- */
  L.p6_water = function (host, cfg, done) {
    host.innerHTML = hint(t("Pour coloured water for the wilted plant and set the sunlight. Put a bag over it, take the leaves off and on, and cut the plant to see the water paths.", "اسكب الماء الملون للنبات الذابل واضبط ضوء الشمس، ثم ضع كيسًا فوقه، وانزع الأوراق وأعدها، واقطع النبات لترى مسارات الماء."));
    var S = K.make(host, 0.64, 400), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Sunlight", "ضوء الشمس"), 0, 100, 10, 60, "%") +
      btnRow([["p6pour", "🫗 " + t("Pour coloured water", "اسكب الماء الملون"), "primary"], ["p6bag", "🛍️ " + t("Bag over the plant", "كيس فوق النبات"), "tg"], ["p6leaf", "🍃 " + t("Leaves on", "الأوراق موجودة"), "tg on"], ["p6cut", "🔪 " + t("Cut and look", "اقطع وانظر"), ""]]);
    var tick = L._goals(host, [t("Give the wilted plant water and watch it recover.", "اسقِ النبات الذابل وشاهده يستعيد نضارته."), t("When the colour reaches the leaves, cut the plant and find the red water paths.", "عندما يصل اللون إلى الأوراق اقطع النبات وابحث عن مسارات الماء الحمراء."),
      t("Put a bag over the plant with leaves in the sun and collect 20 water drops.", "ضع كيسًا فوق النبات ذي الأوراق في الشمس واجمع ٢٠ قطرة ماء."), t("Take the leaves off, bag it in the sun for 6 seconds: almost no drops.", "انزع الأوراق وضع الكيس في الشمس ٦ ثوانٍ: لا قطرات تقريبًا.")], done);
    var sun = 60, filled = false, d = 0, w = 0.12, bag = false, leaves = true, drops = [], acc = 0, nlT = 0, cutT = 0, recov = false;
    var ins = ctl.querySelector("input");
    function upd() { ctl.querySelector(".slv").textContent = n(sun) + "%"; }
    ins.oninput = function () { sun = Number(ins.value); upd(); }; upd();
    ctl.querySelector("#p6pour").onclick = function () { filled = true; };
    ctl.querySelector("#p6bag").onclick = function () { bag = !bag; this.classList.toggle("on", bag); drops = []; nlT = 0; };
    ctl.querySelector("#p6leaf").onclick = function () { leaves = !leaves; this.classList.toggle("on", leaves); this.innerHTML = "🍃 " + (leaves ? t("Leaves on", "الأوراق موجودة") : t("Leaves taken off", "الأوراق منزوعة")); drops = []; nlT = 0; };
    ctl.querySelector("#p6cut").onclick = function () {
      cutT = 6;
      if (d >= 1) { tick(1); E.speak(t("The red parts are the paths of the coloured water: roots, stem and leaves.", "الأجزاء الحمراء هي مسارات الماء الملون: الجذور والساق والأوراق.")); }
      else E.toast(t("The colour has not reached the leaves yet. Wait a little.", "لم يصل اللون إلى الأوراق بعد، انتظر قليلًا."));
    };
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      if (filled) d = Math.min(1, d + (0.06 + 0.18 * sun / 100 * (leaves ? 1 : 0.15)) * dt);
      w += (0.12 + 0.88 * clamp(d / 0.7, 0, 1) - w) * Math.min(1, dt * 2);
      if (w > 0.95 && !recov) { recov = true; tick(0); E.speak(t("The plant has recovered: water spread through the whole plant.", "استعاد النبات نضارته: انتشر الماء في النبات كله.")); }
      if (bag && d > 0.3) {
        acc += dt * sun / 100 * (leaves ? 5 : 0.12);
        while (acc >= 1) { acc -= 1; if (drops.length < 90) drops.push({ x: Math.random(), y: Math.random(), r: K.rnd(1.6, 3.2) }); }
        if (leaves && drops.length >= 20) tick(2);
        if (!leaves && sun >= 50) { nlT += dt; if (nlT > 6 && drops.length <= 3) { tick(3); E.speak(t("Almost no drops without leaves: transpiration happens mainly through the leaves.", "لا قطرات تقريبًا بدون أوراق: النتح يحدث غالبًا من الأوراق.")); nlT = -1e9; } }
      }
      if (cutT > 0) cutT -= dt;
      c.clearRect(0, 0, W, H);
      // sun
      K.dot(c, W * 0.06, H * 0.09, 10 + sun * 0.1, "rgba(250,204,21," + (0.25 + sun / 140) + ")");
      // flask
      var fx = W * 0.3, fb = H * 0.95, ft = H * 0.68;
      c.beginPath(); c.moveTo(fx - 16, ft); c.lineTo(fx - 16, ft + 30); c.lineTo(fx - 56, fb); c.lineTo(fx + 56, fb); c.lineTo(fx + 16, ft + 30); c.lineTo(fx + 16, ft); c.closePath();
      if (filled) { c.save(); c.clip(); c.fillStyle = "rgba(239,68,68,.45)"; c.fillRect(fx - 60, ft + 40, 120, fb - ft); c.restore(); }
      c.strokeStyle = C.muted; c.lineWidth = 2.5; c.stroke();
      // roots
      c.strokeStyle = d > 0.02 ? "#dc2626" : "#a16207"; c.lineWidth = 2;
      [[-24, 0.9], [-8, 0.96], [10, 0.94], [26, 0.88]].forEach(function (r) { c.beginPath(); c.moveTo(fx, ft + 26); c.quadraticCurveTo(fx + r[0] * 0.5, ft + 40, fx + r[0], H * r[1]); c.stroke(); });
      // stem (bends when wilted)
      var top = H * 0.16, bend = (1 - w) * W * 0.12, sx = function (f) { return fx + bend * f * f; }, sy = function (f) { return ft + 26 - (ft + 26 - top) * f * (0.75 + 0.25 * w); };
      c.strokeStyle = "#16a34a"; c.lineWidth = 9; c.beginPath(); for (var f = 0; f <= 1.001; f += 0.1) { if (f === 0) c.moveTo(sx(f), sy(f)); else c.lineTo(sx(f), sy(f)); } c.stroke();
      var dyeF = clamp((d - 0.05) / 0.8, 0, 1);
      if (dyeF > 0) { c.strokeStyle = "#dc2626"; c.lineWidth = 2.5; c.beginPath(); for (f = 0; f <= dyeF + 0.001; f += 0.05) { if (f === 0) c.moveTo(sx(f) - 2, sy(f)); else c.lineTo(sx(f) - 2, sy(f)); } c.stroke(); }
      // leaves
      [0.45, 0.65, 0.85, 1].forEach(function (f, k) {
        var x0 = sx(f), y0 = sy(f), sd = k % 2 ? 1 : -1;
        if (!leaves) { c.fillStyle = "#15803d"; K.dot(c, x0 + sd * 5, y0, 2.5, "#15803d"); return; }
        c.save(); c.translate(x0, y0); c.rotate(sd > 0 ? -0.35 + (1 - w) * 1.2 : Math.PI + 0.35 - (1 - w) * 1.2);
        var lw = Math.min(56, W * 0.09);
        c.fillStyle = w > 0.6 ? "#4ade80" : "#a3b85a"; c.beginPath(); c.ellipse(lw * 0.55, 0, lw * 0.55, lw * 0.22, 0, 0, 7); c.fill();
        var vein = clamp((d - 0.85) / 0.15, 0, 1); c.strokeStyle = vein > 0 ? "rgba(220,38,38," + (0.3 + 0.7 * vein) + ")" : "#15803d"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(0, 0); c.lineTo(lw * 1.05, 0); c.stroke();
        c.restore();
      });
      // bag
      if (bag) {
        var bx = fx - W * 0.17, by = top - 22, bw2 = W * 0.34, bh = ft - top + 10;
        c.fillStyle = "rgba(226,232,240," + Math.min(0.45, 0.08 + drops.length / 140) + ")"; K.rr(c, bx, by, bw2, bh, 24); c.fill();
        c.strokeStyle = C.muted; c.lineWidth = 1.5; K.rr(c, bx, by, bw2, bh, 24); c.stroke();
        drops.forEach(function (p) { K.dot(c, bx + 10 + p.x * (bw2 - 20), by + 10 + p.y * (bh - 20), p.r, "rgba(59,130,246,.7)"); });
        c.strokeStyle = "#a16207"; c.lineWidth = 3; c.beginPath(); c.moveTo(fx - 18, ft + 2); c.lineTo(fx + 18, ft + 2); c.stroke();
      }
      // readouts
      var rx = W * 0.56;
      K.txt(c, t("Water reached:", "وصل الماء إلى:"), rx, H * 0.07, { c: C.ink, s: 12, a: "left" });
      K.txt(c, d < 0.05 ? "—" : d < 0.35 ? t("roots", "الجذور") : d < 0.85 ? t("roots → stem", "الجذور ← الساق") : t("roots → stem → leaves", "الجذور ← الساق ← الأوراق"), rx, H * 0.14, { c: "#dc2626", s: 12, a: "left" });
      K.txt(c, t("Plant: ", "النبات: ") + (w > 0.9 ? t("fresh", "نضر") : w > 0.5 ? t("recovering", "يستعيد نضارته") : t("wilted", "ذابل")), rx, H * 0.21, { c: C.muted, s: 12, a: "left" });
      K.txt(c, t("Drops in the bag: ", "القطرات في الكيس: ") + (bag ? n(drops.length) : "—"), rx, H * 0.28, { c: C.muted, s: 12, a: "left" });
      // cut view
      if (cutT > 0) {
        var cy = H * 0.58, rr = Math.min(W * 0.055, H * 0.09);
        [[t("root", "الجذر"), d > 0.05], [t("stem", "الساق"), d > 0.35], [t("leaf", "الورقة"), d > 0.85]].forEach(function (p, k) {
          var cx = rx + rr + k * (rr * 2 + 8);
          c.fillStyle = "#bbf7d0"; c.beginPath(); c.arc(cx, cy, rr, 0, 7); c.fill(); c.strokeStyle = "#15803d"; c.lineWidth = 2; c.stroke();
          for (var m = 0; m < 8; m++) { var a = m * 0.785; K.dot(c, cx + Math.cos(a) * rr * (k === 0 ? 0.25 : 0.62), cy + Math.sin(a) * rr * (k === 0 ? 0.25 : 0.62), 3.2, p[1] ? "#dc2626" : "#86efac"); }
          K.txt(c, p[0], cx, cy + rr + 14, { c: C.ink, s: 11 });
        });
        K.txt(c, t("cut: red = water paths", "القطع: الأحمر = مسارات الماء"), rx, cy - rr - 12, { c: C.ink, s: 11, a: "left" });
      }
    });
  };

  /* ---------------------------------------------------------------------
     7. p6_chain - drag organism cards into a chain (energy arrows checked),
        then run nature and knock out a level to see the populations change.
     --------------------------------------------------------------------- */
  L.p6_chain = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag cards into the slots to build a food chain, starting with a plant. Then press Run nature and tap a living thing in the chain to remove it.", "اسحب البطاقات إلى الخانات لتكوين سلسلة غذائية تبدأ بنبات، ثم اضغط «شغّل الطبيعة» واضغط على كائن في السلسلة لإزالته."));
    var S = K.make(host, 0.72, 440), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = btnRow([["p6run", "🌍 " + t("Run nature", "شغّل الطبيعة"), "primary"], ["p6back", "✏️ " + t("Edit the chain", "عدّل السلسلة"), ""]]);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Build a correct food chain of 3 or more that starts with a plant.", "كوّن سلسلة غذائية صحيحة من ٣ كائنات أو أكثر تبدأ بنبات."), t("Build the book chain: grass → grasshopper → frog → snake → owl.", "كوّن سلسلة الكتاب: العشب ← الجرادة ← الضفدع ← الثعبان ← البومة."),
      t("Run nature and remove the plants. What happens to the animals?", "شغّل الطبيعة وأزل النباتات. ماذا يحدث للحيوانات؟"), t("Remove a carnivore and watch the animal it eats increase.", "أزل آكل لحوم وشاهد الحيوان الذي يأكله يزداد.")], done);
    var ORG = { grass: ["🌱", t("grass", "العشب")], grasshopper: ["🦗", t("grasshopper", "الجرادة")], rabbit: ["🐇", t("rabbit", "الأرنب")], frog: ["🐸", t("frog", "الضفدع")], snake: ["🐍", t("snake", "الثعبان")], owl: ["🦉", t("owl", "البومة")], eagle: ["🦅", t("eagle", "النسر")] };
    var EATS = { grasshopper: ["grass"], rabbit: ["grass"], frog: ["grasshopper"], snake: ["frog", "rabbit"], owl: ["snake", "frog", "rabbit"], eagle: ["snake", "rabbit", "frog"] };
    var keys = Object.keys(ORG), cards = keys.map(function (k) { return { k: k, x: 0, y: 0, slot: -1 }; }), slots = [null, null, null, null, null];
    var drag = null, mode = "edit", pops = [], base = [1, 0.7, 0.45, 0.28, 0.16], removed = -1, hist = [], hT = 0;
    var COL = ["#22c55e", "#eab308", "#f97316", "#ef4444", "#8b5cf6"];
    function G() { var W = S.W, H = S.H, cw = Math.min(74, (W - 20) / 7 - 6); return { cw: cw, ch: cw * 1.05, py: 10, sy: H * 0.3, gx: 10, gy: H * 0.56, gw: W - 20, gh: H * 0.4 }; }
    function home(cd) { var g = G(), i = keys.indexOf(cd.k), gap = (S.W - 7 * g.cw) / 8; return { x: gap + i * (g.cw + gap), y: g.py }; }
    function slotPos(i) { var g = G(), gap = (S.W - 5 * g.cw) / 6; return { x: gap + i * (g.cw + gap), y: g.sy }; }
    function place() { cards.forEach(function (cd) { if (cd === drag) return; var p = cd.slot >= 0 ? slotPos(cd.slot) : home(cd); cd.x = p.x; cd.y = p.y; }); }
    function chain() { var a = []; for (var i = 0; i < 5 && slots[i]; i++) a.push(slots[i].k); return a; }
    function check() {
      var ch = chain(), bad = "", ok = ch.length >= 1;
      if (ch.length && ch[0] !== "grass") { ok = false; bad = t("A food chain must start with a plant.", "يجب أن تبدأ السلسلة الغذائية بنبات."); }
      for (var i = 1; i < ch.length && ok; i++) if ((EATS[ch[i]] || []).indexOf(ch[i - 1]) < 0) { ok = false; bad = t("A " + ORG[ch[i]][1] + " does not eat " + ORG[ch[i - 1]][1] + ".", ORG[ch[i]][1] + " لا يتغذى على " + ORG[ch[i - 1]][1] + "."); }
      var gaps = slots.some(function (s, i) { return s && i >= ch.length; });
      if (gaps) bad = (bad ? bad + " " : "") + t("Fill the slots from the left with no gaps.", "املأ الخانات من اليسار بدون فراغات.");
      out.innerHTML = ch.length ? (ok && !gaps ? "<b class=\"ok-t\">✔ " + t("Correct chain!", "سلسلة صحيحة!") + "</b> " + ch.map(function (k) { return ORG[k][0]; }).join(" → ") : "<b class=\"no-t\">✖</b> " + esc(bad)) : t("Drag a plant into the first slot.", "اسحب نباتًا إلى الخانة الأولى.");
      var good = ok && !gaps && ch.length >= 3;
      if (good) tick(0);
      if (good && ch.join(",") === "grass,grasshopper,frog,snake,owl") tick(1);
      return good;
    }
    function targets() {
      var ch = chain(), tg = ch.map(function (k, i) { return base[i]; });
      if (removed >= 0) tg = tg.map(function (v, i) { if (i >= removed) return 0; var dlt = removed - i; return v * (dlt === 1 ? 1.7 : dlt === 2 ? 0.5 : dlt === 3 ? 1.3 : 0.85); });
      return tg;
    }
    ctl.querySelector("#p6run").onclick = function () { if (!check()) { E.toast(t("Build a correct chain of 3 or more first.", "كوّن سلسلة صحيحة من ٣ أو أكثر أولًا.")); return; } mode = "nature"; removed = -1; pops = chain().map(function (k, i) { return base[i]; }); hist = []; E.speak(t("Nature is running. Tap a living thing to remove it.", "الطبيعة تعمل. اضغط على كائن لإزالته.")); };
    ctl.querySelector("#p6back").onclick = function () { mode = "edit"; removed = -1; };
    function hitCard(p) { var g = G(); for (var i = cards.length - 1; i >= 0; i--) { var cd = cards[i]; if (p.x > cd.x && p.x < cd.x + g.cw && p.y > cd.y && p.y < cd.y + g.ch) return cd; } return null; }
    S.drag({
      down: function (p) {
        var cd = hitCard(p); if (!cd) return false;
        if (mode === "nature") {
          if (cd.slot >= 0 && cd.slot < pops.length) { removed = removed === cd.slot ? -1 : cd.slot; E.speak(removed >= 0 ? t("Removed: ", "أُزيل: ") + ORG[cd.k][1] : t("Brought back", "أُعيد")); }
          return false;
        }
        drag = cd; cd.ox = p.x - cd.x; cd.oy = p.y - cd.y; return true;
      },
      move: function (p) { if (drag) { drag.x = p.x - drag.ox; drag.y = p.y - drag.oy; } },
      up: function () {
        if (!drag) return; var g = G(), best = -1, bd = 1e9;
        for (var i = 0; i < 5; i++) { var sp = slotPos(i), dd = Math.hypot(sp.x - drag.x, sp.y - drag.y); if (dd < bd) { bd = dd; best = i; } }
        if (drag.slot >= 0) slots[drag.slot] = null;
        if (bd < g.cw * 0.9) { if (slots[best]) slots[best].slot = -1; slots[best] = drag; drag.slot = best; } else drag.slot = -1;
        drag = null; check();
      },
      hover: function (p) { return !!hitCard(p); }
    });
    check();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = G();
      place();
      if (mode === "nature") {
        var tg = targets();
        pops = pops.map(function (v, i) { return v + (tg[i] - v) * Math.min(1, dt * (0.35 + 0.12 * (pops.length - i))); });
        hT += dt; if (hT > 0.1) { hT = 0; hist.push(pops.slice()); if (hist.length > 120) hist.shift(); }
        if (removed === 0 && pops.slice(1).every(function (v, i) { return v < base[i + 1] * 0.15; })) { tick(2); }
        if (removed >= 2 && pops[removed - 1] > base[removed - 1] * 1.4) tick(3);
      }
      c.clearRect(0, 0, W, H);
      // slots + arrows
      var ch = chain();
      for (var i = 0; i < 5; i++) {
        var sp = slotPos(i); c.strokeStyle = C.line; c.lineWidth = 2; c.setLineDash([5, 4]); K.rr(c, sp.x, sp.y, g.cw, g.ch, 10); c.stroke(); c.setLineDash([]);
        if (i > 0 && slots[i] && slots[i - 1]) { var okL = (EATS[slots[i].k] || []).indexOf(slots[i - 1].k) >= 0; arrowLine(c, sp.x - (sp.x - slotPos(i - 1).x - g.cw) + 2, sp.y + g.ch / 2, sp.x - 2, sp.y + g.ch / 2, okL ? "#22c55e" : "#ef4444", 3); }
      }
      K.txt(c, t("energy →", "الطاقة ←"), W / 2, g.sy - 10, { c: C.muted, s: 11 });
      // cards
      cards.forEach(function (cd) {
        var lvl = cd.slot, rem = mode === "nature" && lvl === removed, fade = mode === "nature" && lvl >= 0 && lvl < pops.length ? clamp(pops[lvl] / base[lvl], 0.15, 1) : 1;
        c.globalAlpha = rem ? 0.3 : (cd.slot < 0 && mode === "nature" ? 0.4 : 1);
        c.fillStyle = C.card; K.rr(c, cd.x, cd.y, g.cw, g.ch, 10); c.fill(); c.strokeStyle = lvl >= 0 ? COL[lvl] : C.line; c.lineWidth = 2; c.stroke();
        c.globalAlpha *= fade; K.txt(c, ORG[cd.k][0], cd.x + g.cw / 2, cd.y + g.ch * 0.42, { s: Math.round(g.cw * 0.42) }); c.globalAlpha = rem ? 0.3 : 1;
        K.txt(c, ORG[cd.k][1], cd.x + g.cw / 2, cd.y + g.ch * 0.84, { c: C.ink, s: Math.max(9, Math.round(g.cw * 0.15)) });
        if (rem) { c.strokeStyle = "#ef4444"; c.lineWidth = 3; c.beginPath(); c.moveTo(cd.x + 8, cd.y + 8); c.lineTo(cd.x + g.cw - 8, cd.y + g.ch - 8); c.moveTo(cd.x + g.cw - 8, cd.y + 8); c.lineTo(cd.x + 8, cd.y + g.ch - 8); c.stroke(); }
        c.globalAlpha = 1;
      });
      // population graph
      c.strokeStyle = C.line; c.lineWidth = 1; c.strokeRect(g.gx, g.gy, g.gw, g.gh);
      K.txt(c, t("Number of living things", "أعداد الكائنات الحية"), g.gx + 8, g.gy + 12, { c: C.muted, s: 11, a: "left" });
      if (mode !== "nature") K.txt(c, t("Build a correct chain, then press Run nature.", "كوّن سلسلة صحيحة ثم اضغط «شغّل الطبيعة»."), W / 2, g.gy + g.gh / 2, { c: C.muted, s: 13 });
      else if (hist.length > 1) {
        for (var L2 = 0; L2 < pops.length; L2++) {
          c.strokeStyle = COL[L2]; c.lineWidth = 2.5; c.beginPath();
          hist.forEach(function (hp, j) { var x = g.gx + 6 + j / 119 * (g.gw - 40), y = g.gy + g.gh - 6 - clamp(hp[L2] / 1.8, 0, 1) * (g.gh - 24); if (j) c.lineTo(x, y); else c.moveTo(x, y); });
          c.stroke();
          var lastP = hist[hist.length - 1][L2], lx = g.gx + 6 + (hist.length - 1) / 119 * (g.gw - 40);
          K.txt(c, ORG[ch[L2]][0], lx + 14, g.gy + g.gh - 6 - clamp(lastP / 1.8, 0, 1) * (g.gh - 24), { s: 14 });
        }
      }
    });
  };

  /* ---------------------------------------------------------------------
     8. p6_egypt - Nile / desert scenes; drag from the eaten to the eater to
        draw energy arrows; roles appear as the chains grow.
     --------------------------------------------------------------------- */
  L.p6_egypt = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag from a living thing to the one that eats it to draw an energy arrow. Switch between the Nile and the desert.", "اسحب من كائن حي إلى الكائن الذي يأكله لترسم سهم الطاقة، وبدّل بين النيل والصحراء.")) + '<div class="seg" id="p6hab"></div>';
    var S = K.make(host, 0.72, 430), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = btnRow([["p6clr", "↺ " + t("Clear arrows", "امسح الأسهم"), "ghost"]]);
    var tick = L._goals(host, [t("Nile: algae → Nile tilapia → Nile perch → Nile crocodile.", "النيل: الطحالب ← البلطي النيلي ← قشر البياض ← التمساح النيلي."), t("River bank: papyrus → grasshopper → frog → heron.", "شاطئ النهر: البردي ← الجرادة ← الضفدع ← مالك الحزين."),
      t("Desert: shrub seeds → jerboa → viper → fennec fox.", "الصحراء: بذور الشجيرات ← الجربوع ← الأفعى ← ثعلب الفنك."), t("Desert: build a chain that ends with the Egyptian vulture.", "الصحراء: كوّن سلسلة تنتهي بالنسر المصري.")], done);
    var HAB = {
      nile: { org: { algae: [0.13, 0.78, "🌿", t("algae", "الطحالب"), 1], tilapia: [0.36, 0.66, "🐟", t("Nile tilapia", "البلطي النيلي")], perch: [0.6, 0.78, "🐠", t("Nile perch", "قشر البياض")], croc: [0.86, 0.62, "🐊", t("Nile crocodile", "التمساح النيلي")],
        papyrus: [0.12, 0.32, "🎋", t("papyrus", "البردي"), 1], grasshopper: [0.36, 0.16, "🦗", t("grasshopper", "الجرادة")], frog: [0.6, 0.34, "🐸", t("frog", "الضفدع")], heron: [0.86, 0.17, "🐦", t("heron", "مالك الحزين")] },
        ok: ["algae>tilapia", "tilapia>perch", "perch>croc", "tilapia>croc", "papyrus>grasshopper", "grasshopper>frog", "frog>heron", "tilapia>heron"], arrows: [] },
      desert: { org: { shrubs: [0.13, 0.78, "🌵", t("shrubs, grass", "شجيرات وأعشاب"), 1], seeds: [0.13, 0.42, "🌾", t("shrub seeds", "بذور الشجيرات"), 1], grasshopper: [0.38, 0.78, "🦗", t("grasshopper", "الجرادة")], jerboa: [0.38, 0.44, "🐭", t("jerboa", "الجربوع")],
        viper: [0.62, 0.62, "🐍", t("viper", "الأفعى")], fennec: [0.86, 0.74, "🦊", t("fennec fox", "ثعلب الفنك")], vulture: [0.86, 0.2, "🦅", t("Egyptian vulture", "النسر المصري")] },
        ok: ["shrubs>grasshopper", "shrubs>jerboa", "seeds>jerboa", "grasshopper>fennec", "jerboa>fennec", "jerboa>viper", "viper>fennec", "jerboa>vulture"], arrows: [] }
    };
    var hab = "nile", from = null, ptr = null, pulses = 0;
    K.seg(host, "#p6hab", [["nile", "🌊 " + t("Nile River", "نهر النيل")], ["desert", "🏜️ " + t("Desert", "الصحراء")]], hab, function (v) { hab = v; });
    ctl.querySelector("#p6clr").onclick = function () { HAB[hab].arrows = []; };
    function pos(k) { var o = HAB[hab].org[k]; return { x: o[0] * S.W, y: o[1] * S.H }; }
    function hit(p) { var ks = Object.keys(HAB[hab].org); for (var i = 0; i < ks.length; i++) { var q = pos(ks[i]); if (Math.hypot(p.x - q.x, p.y - q.y) < 30) return ks[i]; } return null; }
    function has(h, a) { return HAB[h].arrows.indexOf(a) >= 0; }
    function level(k, seen) {
      var o = HAB[hab].org[k]; if (o[4]) return 0; seen = seen || {}; if (seen[k]) return 0; seen[k] = 1;
      var best = -1; HAB[hab].arrows.forEach(function (a) { var pr = a.split(">"); if (pr[1] === k) best = Math.max(best, level(pr[0], seen)); });
      return best < 0 ? -1 : best + 1;
    }
    function goals() {
      if (has("nile", "algae>tilapia") && has("nile", "tilapia>perch") && has("nile", "perch>croc")) tick(0);
      if (has("nile", "papyrus>grasshopper") && has("nile", "grasshopper>frog") && has("nile", "frog>heron")) tick(1);
      if (has("desert", "seeds>jerboa") && has("desert", "jerboa>viper") && has("desert", "viper>fennec")) tick(2);
      if ((has("desert", "shrubs>jerboa") || has("desert", "seeds>jerboa")) && has("desert", "jerboa>vulture")) tick(3);
    }
    S.drag({
      down: function (p) { var k = hit(p); if (!k) return false; from = k; ptr = p; return true; },
      move: function (p) { ptr = p; },
      up: function (p) {
        var to = hit(p), H0 = HAB[hab];
        if (from && to && to !== from) {
          var a = from + ">" + to, nf = H0.org[from][3], nt = H0.org[to][3];
          if (H0.ok.indexOf(a) >= 0) { if (H0.arrows.indexOf(a) < 0) H0.arrows.push(a); E.speak(nf + " → " + nt); goals(); }
          else if (H0.ok.indexOf(to + ">" + from) >= 0) E.toast(t("Wrong way! The arrow goes from the eaten to the eater (the way energy moves).", "الاتجاه خطأ! السهم يتجه من المأكول إلى الآكل (اتجاه انتقال الطاقة)."));
          else E.toast(t("The " + nt + " does not eat the " + nf + " in this chain.", nt + " لا يتغذى على " + nf + " في هذه السلسلة."));
        }
        from = null; ptr = null;
      },
      hover: function (p) { return !!hit(p); }
    });
    var LV = [t("producer", "منتج"), t("primary consumer", "مستهلك أول"), t("secondary consumer", "مستهلك ثانوي"), t("tertiary consumer", "مستهلك ثالث")];
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, H0 = HAB[hab]; pulses = (pulses + dt * 0.7) % 1;
      c.clearRect(0, 0, W, H);
      if (hab === "nile") { c.fillStyle = "rgba(34,197,94,.14)"; c.fillRect(0, 0, W, H * 0.5); c.fillStyle = "rgba(59,130,246,.2)"; c.fillRect(0, H * 0.5, W, H * 0.5); K.txt(c, t("river bank", "شاطئ النهر"), W * 0.98, H * 0.46, { c: C.muted, s: 11, a: "right" }); K.txt(c, t("Nile water", "مياه النيل"), W * 0.98, H * 0.54, { c: C.muted, s: 11, a: "right" }); }
      else { c.fillStyle = "rgba(251,191,36,.2)"; c.fillRect(0, 0, W, H); c.fillStyle = "rgba(217,119,6,.14)"; c.beginPath(); c.moveTo(0, H * 0.7); c.quadraticCurveTo(W * 0.3, H * 0.55, W * 0.6, H * 0.72); c.quadraticCurveTo(W * 0.8, H * 0.82, W, H * 0.66); c.lineTo(W, H); c.lineTo(0, H); c.fill(); }
      H0.arrows.forEach(function (a) {
        var pr = a.split(">"), p1 = pos(pr[0]), p2 = pos(pr[1]), dx = p2.x - p1.x, dy = p2.y - p1.y, L0 = Math.hypot(dx, dy), ux = dx / L0, uy = dy / L0;
        arrowLine(c, p1.x + ux * 30, p1.y + uy * 30, p2.x - ux * 30, p2.y - uy * 30, "#f97316", 3);
        for (var k = 0; k < 2; k++) { var f = (pulses + k * 0.5) % 1; K.dot(c, p1.x + ux * 30 + (L0 - 60) * ux * f, p1.y + uy * 30 + (L0 - 60) * uy * f, 3.5, "#facc15"); }
      });
      if (from && ptr) { var p0 = pos(from); c.strokeStyle = C.muted; c.setLineDash([6, 5]); c.lineWidth = 2; c.beginPath(); c.moveTo(p0.x, p0.y); c.lineTo(ptr.x, ptr.y); c.stroke(); c.setLineDash([]); }
      Object.keys(H0.org).forEach(function (k) {
        var o = H0.org[k], q = pos(k), lv = level(k);
        K.dot(c, q.x, q.y, 26, C.card, from === k ? "#f97316" : C.line);
        K.txt(c, o[2], q.x, q.y + 1, { s: 24 });
        K.txt(c, o[3], q.x, q.y + 38, { c: C.ink, s: 11 });
        if (lv >= 0 && (o[4] || lv > 0)) K.txt(c, LV[Math.min(3, lv)], q.x, q.y + 51, { c: C.muted, s: 10 });
      });
    });
  };

  /* ---------------------------------------------------------------------
     9. p6_litmus - drag a bottle onto litmus strips (acidic / neutral /
        alkaline) or into the evaporating dish and heat it safely.
     --------------------------------------------------------------------- */
  L.p6_litmus = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag a bottle onto the litmus paper. In Evaporate mode, drag it into the dish, heat it gently and turn the heat off while a little liquid is left.", "اسحب زجاجة إلى ورق عباد الشمس. وفي وضع التبخير اسحبها إلى الجفنة، وسخّنها بهدوء، وأطفئ اللهب عندما يتبقى قليل من السائل.")) + '<div class="seg" id="p6lm"></div>';
    var S = K.make(host, 0.66, 410), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = btnRow([["p6heat", "🔥 " + t("Heat gently", "سخّن بهدوء"), "tg"], ["p6clean", "🧽 " + t("Clean the dish", "نظّف الجفنة"), "ghost"]]);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Find an acidic solution (blue litmus turns red).", "اكتشف محلولًا حمضيًا (الأزرق يصبح أحمر)."), t("Find an alkaline solution (red litmus turns blue).", "اكتشف محلولًا قلويًا (الأحمر يصبح أزرق)."), t("Find a neutral solution (no change).", "اكتشف محلولًا متعادلًا (لا تغيير)."),
      t("Evaporate salt water safely and get a white solid.", "بخّر الماء المالح بأمان واحصل على مادة صلبة بيضاء."), t("Evaporate soda water: nothing is left, the gas escaped.", "بخّر الماء الغازي: لا يتبقى شيء لأن الغاز تصاعد.")], done);
    var SOL = [["lemon", "🍋", t("lemon juice", "عصير الليمون"), "ac", null], ["vinegar", "🫙", t("vinegar", "الخل"), "ac", null], ["hcl", "⚗️", t("dilute HCl", "حمض HCl"), "ac", "none"], ["soda", "🥤", t("soda water", "الماء الغازي"), "ac", "none"],
      ["salt", "🧂", t("salt water", "الماء المالح"), "ne", "white"], ["sugar", "🍬", t("sugar water", "ماء السكر"), "ne", "brown"], ["dist", "💧", t("distilled water", "ماء مقطر"), "ne", null],
      ["soap", "🧼", t("soapy water", "ماء الصابون"), "al", null], ["lime", "🥛", t("limewater", "ماء الجير"), "al", null], ["amm", "🧴", t("ammonia", "النشادر"), "al", "none"], ["bak", "🧁", t("baking soda", "بيكربونات"), "al", "white"]];
    var GN = { ac: t("acidic", "حمضي"), ne: t("neutral", "متعادل"), al: t("alkaline", "قلوي") };
    var mode = "lit", drag = null, test = null, tt = 0, tested = {}, dish = null, heat = false, steam = [];
    K.seg(host, "#p6lm", [["lit", "🧻 " + t("Litmus test", "اختبار عباد الشمس")], ["evap", "🔥 " + t("Evaporate", "التبخير")]], mode, function (v) { mode = v; });
    ctl.querySelector("#p6heat").onclick = function () {
      if (!dish || dish.dry) { E.toast(t("Put a solution in the dish first.", "ضع محلولًا في الجفنة أولًا.")); return; }
      heat = !heat; this.classList.toggle("on", heat);
      if (!heat && dish.lvl > 0 && dish.lvl <= 0.35) { dish.safe = true; E.speak(t("Good: the remaining heat will dry it.", "أحسنت: الحرارة المتبقية ستجففه.")); }
    };
    ctl.querySelector("#p6clean").onclick = function () { dish = null; heat = false; ctl.querySelector("#p6heat").classList.remove("on"); };
    function bpos(i) { var W = S.W, H = S.H, row = i < 6 ? 0 : 1, col = row ? i - 6 : i, nr = row ? 5 : 6, gap = W / nr; return { x: gap * (col + 0.5), y: H * (0.08 + row * 0.17) }; }
    function bhit(p) { for (var i = 0; i < SOL.length; i++) { var b = bpos(i); if (Math.abs(p.x - b.x) < 22 && Math.abs(p.y - b.y) < 24) return i; } return -1; }
    function zone() { var W = S.W, H = S.H; return mode === "lit" ? { x: W * 0.3, y: H * 0.52, w: W * 0.4, h: H * 0.3 } : { x: W * 0.35, y: H * 0.5, w: W * 0.3, h: H * 0.22 }; }
    function report() {
      var gs = { ac: [], ne: [], al: [] }; Object.keys(tested).forEach(function (k) { var s = SOL.filter(function (x) { return x[0] === k; })[0]; gs[s[3]].push(s[2]); });
      out.innerHTML = ["ac", "ne", "al"].map(function (g) { return "<span><b>" + GN[g] + ":</b> " + (gs[g].length ? esc(gs[g].join(E.isAr() ? "، " : ", ")) : "—") + "</span>"; }).join("");
    }
    report();
    S.drag({
      down: function (p) { var i = bhit(p); if (i < 0) return false; drag = { i: i, x: p.x, y: p.y }; return true; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () {
        if (!drag) return; var z = zone(), s = SOL[drag.i];
        if (drag.x > z.x - 20 && drag.x < z.x + z.w + 20 && drag.y > z.y - 30 && drag.y < z.y + z.h + 20) {
          if (mode === "lit") {
            test = s; tt = 0; tested[s[0]] = 1; report();
            E.speak(s[2] + ": " + GN[s[3]]);
            tick(s[3] === "ac" ? 0 : s[3] === "al" ? 1 : 2);
          } else {
            if (s[4] === null) E.toast(t("In the book we evaporate salt water, soda water, dilute HCl, baking soda solution, ammonia solution and sugar water.", "في الكتاب نبخّر الماء المالح والماء الغازي وحمض HCl المخفف ومحلول بيكربونات الصوديوم ومحلول النشادر وماء السكر."));
            else { dish = { s: s, lvl: 1, dry: false, safe: false, dryT: 0 }; heat = false; ctl.querySelector("#p6heat").classList.remove("on"); }
          }
        }
        drag = null;
      },
      hover: function (p) { return bhit(p) >= 0; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, z = zone();
      tt = Math.min(1, tt + dt * 1.5);
      if (dish && !dish.dry) {
        if (heat) { dish.lvl = Math.max(0, dish.lvl - dt * (dish.lvl > 0.35 ? 0.12 : 0.055)); if (Math.random() < 0.5) steam.push({ x: z.x + z.w / 2 + K.rnd(-z.w * 0.25, z.w * 0.25), y: z.y + z.h * 0.35, l: 1.2, gas: dish.s[4] === "none" && Math.random() < 0.4 }); if (dish.lvl <= 0) { dish.dry = true; heat = false; ctl.querySelector("#p6heat").classList.remove("on"); E.toast(t("Too much heat! Turn the heat off while a little liquid is still left.", "حرارة زائدة! أطفئ اللهب عندما يتبقى قليل من السائل.")); } }
        else if (dish.safe) { dish.dryT += dt; dish.lvl = Math.max(0, dish.lvl - dt * 0.15); if (dish.dryT > 1.6) { dish.dry = true; dish.lvl = 0; if (dish.s[0] === "salt") { tick(3); E.speak(t("A white solid is left: salt.", "تتبقى مادة صلبة بيضاء: الملح.")); } else if (dish.s[4] === "none") { if (dish.s[0] === "soda") tick(4); E.speak(t("Nothing is left: the dissolved gas escaped into the air.", "لا يتبقى شيء: الغاز الذائب تصاعد إلى الهواء.")); } else E.speak(t("A solid is left in the dish.", "تتبقى مادة صلبة في الجفنة.")); } }
      }
      steam.forEach(function (p) { p.y -= 40 * dt; p.x += K.rnd(-8, 8) * dt; p.l -= dt; });
      steam = steam.filter(function (p) { return p.l > 0; });
      c.clearRect(0, 0, W, H);
      // bottles
      SOL.forEach(function (s, i) {
        var b = bpos(i), dim = mode === "evap" && s[4] === null; if (drag && drag.i === i) return;
        c.globalAlpha = dim ? 0.35 : 1; c.fillStyle = "rgba(186,230,253,.55)"; K.rr(c, b.x - 15, b.y - 20, 30, 36, 8); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 1.5; c.stroke();
        K.txt(c, s[1], b.x, b.y - 2, { s: 16 }); K.txt(c, s[2], b.x, b.y + 27, { c: C.ink, s: Math.max(9, Math.min(11, W / 60)) }); c.globalAlpha = 1;
      });
      if (mode === "lit") {
        c.fillStyle = "#f8fafc"; K.rr(c, z.x, z.y, z.w, z.h, 10); c.fill(); c.strokeStyle = C.line; c.stroke();
        K.txt(c, t("filter paper", "ورق الترشيح"), z.x + z.w / 2, z.y + z.h + 14, { c: C.muted, s: 11 });
        var sw = z.w * 0.18, sh = z.h * 0.7, bxs = z.x + z.w * 0.22, rxs = z.x + z.w * 0.6, sy = z.y + z.h * 0.15;
        var bN = test && test[3] === "ac" ? tt : 0, rN = test && test[3] === "al" ? tt : 0;
        c.fillStyle = "rgb(" + Math.round(59 + 180 * bN) + "," + Math.round(130 - 62 * bN) + "," + Math.round(246 - 178 * bN) + ")"; c.fillRect(bxs, sy, sw, sh);
        c.fillStyle = "rgb(" + Math.round(239 - 180 * rN) + "," + Math.round(68 + 62 * rN) + "," + Math.round(68 + 178 * rN) + ")"; c.fillRect(rxs, sy, sw, sh);
        K.txt(c, t("litmus paper", "ورق عباد الشمس"), z.x + z.w / 2, z.y - 10, { c: C.ink, s: 11 }); K.txt(c, t("blue", "أزرق"), bxs + sw / 2, sy - 7, { c: "#334155", s: 10 }); K.txt(c, t("red", "أحمر"), rxs + sw / 2, sy - 7, { c: "#334155", s: 10 });
        if (test) { K.dot(c, bxs + sw / 2, sy + sh * 0.5, 7, "rgba(255,255,255,.5)"); K.dot(c, rxs + sw / 2, sy + sh * 0.5, 7, "rgba(255,255,255,.5)"); K.txt(c, test[2] + " → " + GN[test[3]], W / 2, H * 0.94, { c: C.ink, s: 14 }); }
      } else {
        var cx = z.x + z.w / 2, dy = z.y + z.h * 0.35;
        c.fillStyle = "#64748b"; c.fillRect(cx - z.w * 0.4, z.y + z.h * 0.75, z.w * 0.8, 8); c.fillStyle = "#475569"; c.fillRect(cx - 12, z.y + z.h * 0.75 + 8, 24, H * 0.18);
        c.strokeStyle = "#94a3b8"; c.lineWidth = 2; for (var gx = -4; gx <= 4; gx++) { c.beginPath(); c.moveTo(cx + gx * z.w * 0.08, z.y + z.h * 0.68); c.lineTo(cx + gx * z.w * 0.08 + 6, z.y + z.h * 0.74); c.stroke(); }
        if (heat) for (var fl = 0; fl < 6; fl++) K.dot(c, cx + K.rnd(-14, 14), z.y + z.h * 0.72 - K.rnd(0, 14), 4, "rgba(59,130,246,.6)");
        c.fillStyle = "#e2e8f0"; c.beginPath(); c.ellipse(cx, dy, z.w * 0.38, z.h * 0.3, 0, 0, Math.PI); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.ellipse(cx, dy, z.w * 0.38, z.h * 0.3, 0, 0, Math.PI); c.stroke();
        c.beginPath(); c.ellipse(cx, dy, z.w * 0.38, z.h * 0.06, 0, 0, 7); c.stroke();
        if (dish && dish.lvl > 0) { c.fillStyle = "rgba(186,230,253,.85)"; c.beginPath(); c.ellipse(cx, dy + z.h * 0.12 * (1 - dish.lvl), z.w * 0.34 * (0.4 + 0.6 * dish.lvl), z.h * 0.05 + z.h * 0.1 * dish.lvl, 0, 0, 7); c.fill(); }
        if (dish && dish.dry && dish.s[4] !== "none") for (var k = 0; k < 26; k++) K.dot(c, cx + Math.cos(k * 2.4) * z.w * 0.2 * ((k * 0.37) % 1), dy + z.h * 0.12 + Math.sin(k * 2.4) * z.h * 0.06 * ((k * 0.37) % 1), 2.6, dish.s[4] === "brown" ? "#a16207" : "#ffffff", "#cbd5e1");
        steam.forEach(function (p) { K.dot(c, p.x, p.y, p.gas ? 3 : 5, p.gas ? "rgba(100,116,139," + p.l * 0.6 + ")" : "rgba(226,232,240," + p.l * 0.5 + ")"); });
        K.txt(c, t("evaporating dish", "جفنة التبخير"), cx, z.y - 10, { c: C.muted, s: 11 });
        var msg = !dish ? t("Drag a solution into the dish.", "اسحب محلولًا إلى الجفنة.") : dish.dry ? (dish.s[4] === "none" ? t("Nothing left: the dissolved gas escaped.", "لم يتبقَّ شيء: الغاز الذائب تصاعد.") : dish.s[4] === "brown" ? t("A brownish solid (sugar) is left.", "تتبقى مادة صلبة بنية (سكر).") : t("A white solid is left.", "تتبقى مادة صلبة بيضاء.")) :
          heat && dish.lvl <= 0.35 ? "⚠️ " + t("Turn the heat off now!", "أطفئ اللهب الآن!") : dish.s[2] + " · " + n(Math.round(dish.lvl * 100)) + "%";
        K.txt(c, msg, W / 2, H * 0.95, { c: heat && dish && dish.lvl <= 0.35 ? "#ef4444" : C.ink, s: 13 });
      }
      if (drag) { var s = SOL[drag.i]; c.fillStyle = "rgba(186,230,253,.8)"; K.rr(c, drag.x - 15, drag.y - 20, 30, 36, 8); c.fill(); K.txt(c, s[1], drag.x, drag.y - 2, { s: 16 }); }
    });
  };

  /* ---------------------------------------------------------------------
     10. p6_metal - drag metals and liquids into test tubes; bubbles in acid,
         none in water; evaporate the reacted liquid; acid on the powder.
     --------------------------------------------------------------------- */
  L.p6_metal = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag a metal into a test tube, then drag dilute hydrochloric acid or water onto it. Tap a tube to select it, then evaporate its liquid.", "اسحب فلزًا إلى أنبوبة اختبار، ثم اسحب حمض الهيدروكلوريك المخفف أو الماء إليها. اضغط على أنبوبة لتختارها، ثم بخّر السائل الذي بها."));
    var S = K.make(host, 0.64, 400), ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = btnRow([["p6evap", "🔥 " + t("Evaporate the selected tube", "بخّر الأنبوبة المختارة"), "primary"], ["p6acid", "💧 " + t("Add acid to the powder", "أضف الحمض إلى المسحوق"), ""], ["p6mt", "↺ " + t("Empty all tubes", "أفرغ كل الأنابيب"), "ghost"]]);
    var tick = L._goals(host, [t("Make aluminium react with dilute hydrochloric acid.", "اجعل الألومنيوم يتفاعل مع حمض الهيدروكلوريك المخفف."), t("Make iron (steel wool) react with dilute hydrochloric acid.", "اجعل الحديد (سلك المواعين) يتفاعل مع حمض الهيدروكلوريك المخفف."),
      t("Show that a metal in water makes no bubbles.", "أثبت أن الفلز في الماء لا يُكوّن فقاعات."), t("Evaporate the liquid where aluminium reacted: a white, non-shiny solid.", "بخّر السائل الذي تفاعل فيه الألومنيوم: مادة صلبة بيضاء غير لامعة."), t("Add acid to the powder: no bubbles.", "أضف الحمض إلى المسحوق: لا فقاعات.")], done);
    var MET = { Al: ["#d4d4d8", t("aluminium", "الألومنيوم")], Fe: ["#57534e", t("iron", "الحديد")], Au: ["#facc15", t("gold", "الذهب")] };
    var LIQ = { hcl: ["rgba(254,240,138,.55)", t("dilute HCl", "حمض HCl")], water: ["rgba(147,197,253,.5)", t("water", "الماء")] };
    var items = [["m", "Al"], ["m", "Fe"], ["m", "Au"], ["l", "hcl"], ["l", "water"]], tubes = [0, 1, 2, 3].map(function () { return { m: null, amt: 1, l: null, lvl: 0, bub: [], obs: 0, rT: 0 }; });
    var drag = null, sel = -1, dishS = null, dishT = 0, acidT = 0, said = {};
    function ipos(i) { var W = S.W, H = S.H; return i < 3 ? { x: W * 0.08, y: H * (0.22 + i * 0.25) } : { x: W * 0.92, y: H * (0.22 + (i - 3) * 0.28) }; }
    function tpos(i) { var W = S.W, H = S.H; return { x: W * (0.22 + i * 0.12), top: H * 0.14, bot: H * 0.7, w: Math.min(34, W * 0.06) }; }
    function ihit(p) { for (var i = 0; i < items.length; i++) { var q = ipos(i); if (Math.abs(p.x - q.x) < 26 && Math.abs(p.y - q.y) < 26) return i; } return -1; }
    function thit(p) { for (var i = 0; i < 4; i++) { var q = tpos(i); if (Math.abs(p.x - q.x) < q.w && p.y > q.top - 10 && p.y < q.bot + 10) return i; } return -1; }
    function desc(tb) { if (!tb.m && !tb.l) return t("empty", "فارغة"); return (tb.m ? MET[tb.m][1] : "—") + " + " + (tb.l ? LIQ[tb.l][1] : "—"); }
    ctl.querySelector("#p6mt").onclick = function () { tubes.forEach(function (tb) { tb.m = null; tb.amt = 1; tb.l = null; tb.lvl = 0; tb.bub = []; tb.obs = 0; tb.rT = 0; }); sel = -1; };
    ctl.querySelector("#p6evap").onclick = function () {
      if (sel < 0 || !tubes[sel].l) { E.toast(t("Tap a tube with liquid in it first.", "اضغط أولًا على أنبوبة بها سائل.")); return; }
      var tb = tubes[sel], reacted = tb.l === "hcl" && (tb.m === "Al" || tb.m === "Fe") && tb.amt < 0.7;
      dishS = reacted ? tb.m : "none"; dishT = 2.2; acidT = 0;
      E.speak(t("Heating gently...", "تسخين هادئ..."));
    };
    ctl.querySelector("#p6acid").onclick = function () {
      if (!dishS || dishT > 0 || dishS === "none") { E.toast(t("First evaporate a liquid where a metal reacted.", "بخّر أولًا سائلًا تفاعل فيه فلز.")); return; }
      acidT = 2.5; E.speak(t("No bubbles: the powder is a new substance, not the metal.", "لا فقاعات: المسحوق مادة جديدة وليس الفلز.")); tick(4);
    };
    S.drag({
      down: function (p) { var i = ihit(p); if (i >= 0) { drag = { i: i, x: p.x, y: p.y }; return true; } var tI = thit(p); if (tI >= 0) { sel = tI; E.speak(desc(tubes[tI])); } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function (p) {
        if (!drag) return; var tI = thit(p), it = items[drag.i];
        if (tI >= 0) {
          var tb = tubes[tI]; sel = tI;
          if (it[0] === "m") { if (tb.m) E.toast(t("This tube already has a metal. Use another tube.", "هذه الأنبوبة بها فلز بالفعل، استخدم أنبوبة أخرى.")); else { tb.m = it[1]; tb.amt = 1; tb.obs = 0; } }
          else { if (tb.l) E.toast(t("This tube already has a liquid.", "هذه الأنبوبة بها سائل بالفعل.")); else { tb.l = it[1]; tb.obs = 0; } }
        }
        drag = null;
      },
      hover: function (p) { return ihit(p) >= 0 || thit(p) >= 0; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      tubes.forEach(function (tb, i) {
        if (tb.l) tb.lvl = Math.min(0.55, tb.lvl + dt * 0.8);
        var q = tpos(i), react = tb.l === "hcl" && (tb.m === "Al" || tb.m === "Fe") && tb.amt > 0.05 && tb.lvl > 0.3;
        if (react) {
          tb.rT += dt; var rate = tb.m === "Al" ? (tb.rT > 0.8 ? 0.07 : 0.01) : 0.05;
          tb.amt = Math.max(0, tb.amt - rate * dt);
          if (Math.random() < rate * 120 * dt) tb.bub.push({ x: q.x + K.rnd(-q.w * 0.3, q.w * 0.3), y: q.bot - 10, r: K.rnd(2, 4) });
          if (tb.rT > 1.2) { tick(tb.m === "Al" ? 0 : 1); if (!said[tb.m]) { said[tb.m] = 1; E.speak(t("Bubbles! The metal reacts with the acid. The bubbles are hydrogen gas.", "فقاعات! الفلز يتفاعل مع الحمض، والفقاعات غاز الهيدروجين.")); } }
        } else if (tb.m && tb.l && tb.lvl > 0.3) {
          tb.obs += dt;
          if (tb.l === "water" && tb.m !== "Au" && tb.obs > 3) { tick(2); if (!said.w) { said.w = 1; E.speak(t("No bubbles in water: water does not react with the metal like the acid.", "لا فقاعات في الماء: الماء لا يتفاعل مع الفلز مثل الحمض.")); } }
          if (tb.m === "Au" && tb.l === "hcl" && tb.obs > 2 && !said.au) { said.au = 1; E.speak(t("Gold does not react with hydrochloric acid. That is why the golden mask still shines.", "الذهب لا يتفاعل مع حمض الهيدروكلوريك، ولهذا ما زال القناع الذهبي لامعًا.")); }
        }
        tb.bub.forEach(function (b) { b.y -= 50 * dt; b.x += K.rnd(-6, 6) * dt; });
        var surf = q.bot - (q.bot - q.top) * tb.lvl; tb.bub = tb.bub.filter(function (b) { return b.y > surf; });
      });
      if (dishT > 0) { dishT -= dt; if (dishT <= 0) { if (dishS === "Al") { tick(3); E.speak(t("A white solid is left. It is not shiny: a new substance.", "تتبقى مادة صلبة بيضاء غير لامعة: مادة جديدة.")); } else if (dishS === "Fe") E.speak(t("A yellowish solid is left. It is not shiny either. Try aluminium, as in the book.", "تتبقى مادة صلبة مائلة للصفرة وغير لامعة أيضًا. جرّب الألومنيوم كما في الكتاب.")); else E.speak(t("Nothing is left in the dish.", "لا يتبقى شيء في الجفنة.")); } }
      if (acidT > 0) acidT -= dt;
      c.clearRect(0, 0, W, H);
      // rack
      c.fillStyle = "#a16207"; c.globalAlpha = 0.5; c.fillRect(W * 0.16, H * 0.62, W * 0.48, 10); c.globalAlpha = 1;
      tubes.forEach(function (tb, i) {
        var q = tpos(i), surf = q.bot - (q.bot - q.top) * tb.lvl;
        if (tb.l) { c.fillStyle = tb.l === "hcl" && tb.m === "Fe" && tb.amt < 0.9 ? "rgba(187,247,208," + (0.5 + (1 - tb.amt) * 0.4) + ")" : LIQ[tb.l][0]; c.fillRect(q.x - q.w / 2 + 2, surf, q.w - 4, q.bot - surf); }
        if (tb.m && tb.amt > 0.02) { var ms = 6 + 8 * tb.amt; c.fillStyle = MET[tb.m][0]; if (tb.m === "Fe") { c.strokeStyle = MET.Fe[0]; c.lineWidth = 1.5; for (var k = 0; k < 6; k++) { c.beginPath(); c.arc(q.x + Math.cos(k) * ms * 0.3, q.bot - ms, ms * 0.6, k, k + 3); c.stroke(); } } else { K.rr(c, q.x - ms / 2, q.bot - ms - 4, ms, ms, 2); c.fill(); } }
        tb.bub.forEach(function (b) { c.beginPath(); c.arc(b.x, b.y, b.r, 0, 7); c.strokeStyle = "rgba(100,116,139,.9)"; c.lineWidth = 1.2; c.stroke(); });
        c.strokeStyle = sel === i ? "#f97316" : C.muted; c.lineWidth = sel === i ? 3 : 2;
        c.beginPath(); c.moveTo(q.x - q.w / 2, q.top); c.lineTo(q.x - q.w / 2, q.bot); c.arc(q.x, q.bot, q.w / 2, Math.PI, 0, true); c.lineTo(q.x + q.w / 2, q.top); c.stroke();
        K.txt(c, n(i + 1), q.x, q.top - 10, { c: C.ink, s: 12 });
      });
      // shelf items
      items.forEach(function (it, i) {
        if (drag && drag.i === i) return; var q = ipos(i);
        if (it[0] === "m") { K.dot(c, q.x, q.y, 18, MET[it[1]][0], C.muted); K.txt(c, it[1], q.x, q.y, { c: it[1] === "Fe" ? "#fff" : "#334155", s: 12 }); K.txt(c, MET[it[1]][1], q.x, q.y + 30, { c: C.ink, s: 10 }); }
        else { c.fillStyle = LIQ[it[1]][0]; K.rr(c, q.x - 14, q.y - 20, 28, 40, 7); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 1.5; c.stroke(); K.txt(c, LIQ[it[1]][1], q.x, q.y + 32, { c: C.ink, s: 10 }); }
      });
      if (drag) { var it = items[drag.i]; if (it[0] === "m") K.dot(c, drag.x, drag.y, 16, MET[it[1]][0], C.muted); else { c.fillStyle = LIQ[it[1]][0]; K.rr(c, drag.x - 14, drag.y - 20, 28, 40, 7); c.fill(); } }
      // evaporating dish
      var dx = W * 0.76, dy = H * 0.84, dw = Math.min(W * 0.14, 90);
      c.fillStyle = "#e2e8f0"; c.beginPath(); c.ellipse(dx, dy, dw, dw * 0.3, 0, 0, Math.PI); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.ellipse(dx, dy, dw, dw * 0.3, 0, 0, Math.PI); c.stroke(); c.beginPath(); c.ellipse(dx, dy, dw, dw * 0.08, 0, 0, 7); c.stroke();
      K.txt(c, t("evaporating dish", "جفنة التبخير"), dx, dy - dw * 0.3 - 8, { c: C.muted, s: 11 });
      if (dishT > 0) { for (var f = 0; f < 5; f++) K.dot(c, dx + K.rnd(-10, 10), dy + dw * 0.35 + K.rnd(0, 8), 3.5, "rgba(59,130,246,.6)"); c.fillStyle = "rgba(254,240,138," + clamp(dishT / 2.2, 0, 1) * 0.7 + ")"; c.beginPath(); c.ellipse(dx, dy + 4, dw * 0.7, dw * 0.12, 0, 0, 7); c.fill(); }
      else if (dishS && dishS !== "none") { for (var k2 = 0; k2 < 24; k2++) K.dot(c, dx + Math.cos(k2 * 2.4) * dw * 0.5 * ((k2 * 0.37) % 1), dy + 6 + Math.sin(k2 * 2.4) * dw * 0.08 * ((k2 * 0.37) % 1), 2.6, dishS === "Al" ? "#ffffff" : "#fde68a", "#cbd5e1"); K.txt(c, dishS === "Al" ? t("white solid · not shiny", "مادة بيضاء · غير لامعة") : t("yellowish solid · not shiny", "مادة مائلة للصفرة · غير لامعة"), dx, dy + dw * 0.3 + 14, { c: C.ink, s: 11 }); }
      if (acidT > 0) { K.dot(c, dx, dy - dw * 0.5 + (2.5 - acidT) * 20 % 30, 3.5, "rgba(250,204,21,.9)"); K.txt(c, t("no bubbles", "لا فقاعات"), dx, dy - dw * 0.55, { c: "#16a34a", s: 12 }); }
      // readout
      K.txt(c, sel >= 0 ? t("Tube ", "الأنبوبة ") + n(sel + 1) + ": " + desc(tubes[sel]) + (tubes[sel].bub.length ? t(" · bubbles!", " · فقاعات!") : "") : t("Tap a tube to select it.", "اضغط على أنبوبة لتختارها."), W * 0.4, H * 0.94, { c: C.ink, s: 13 });
    });
  };

  /* ---------- part names ---------- */
  L.names = L.names || {};
  L.names.p6_candle = ["Candle in a jar simulation", "محاكاة الشمعة في البرطمان"];
  L.names.p6_breath = ["Breathing and gas exchange simulation", "محاكاة التنفس وتبادل الغازات"];
  L.names.p6_digest = ["Journey of food simulation", "محاكاة رحلة الطعام"];
  L.names.p6_heart = ["Heart, pulse and kidneys simulation", "محاكاة القلب والنبض والكليتين"];
  L.names.p6_photo = ["Leaf, light and starch simulation", "محاكاة الورقة والضوء والنشا"];
  L.names.p6_water = ["Water path and transpiration simulation", "محاكاة مسار الماء والنتح"];
  L.names.p6_chain = ["Food chain builder", "بناء السلسلة الغذائية"];
  L.names.p6_egypt = ["Nile and desert energy arrows", "أسهم الطاقة في النيل والصحراء"];
  L.names.p6_litmus = ["Litmus and evaporation simulation", "محاكاة عباد الشمس والتبخير"];
  L.names.p6_metal = ["Metals and acid simulation", "محاكاة الفلزات والحمض"];
})();
