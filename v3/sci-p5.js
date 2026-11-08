/* EduZone Learn v3 - Science, Egyptian Primary 5, Term 1 (Ministry book 2026-2027).
   Book chapters (one chapter = one lesson): 1 Bones and Muscles (p6), 2 Changes in the Seasons (p20),
   3 Conditions for Germination (p28), 4 Conditions for Growth (p44), 5 From Flower to Fruit (p52),
   6 Human Growth and Reproduction (p64), 7 Animal Growth and Reproduction (p72),
   8 Changes in Weather (p80), 9 Water Cycle (p92). Grouped into 4 themed units (p5u1..p5u4).
   Registers: EZ3.SCIG.p5 (lessons), EZ3.SCI3_OBJ, EZ3.SCI3_EXTRA, EZ3.sciDiagrams and the live
   simulations EZ3.sciLabs.p5_* (original designs, canvas + pointer events via EZ3.simKit). */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  E.SCIG = E.SCIG || {};

  /* ======================= LESSON DATA ======================= */
  var U1 = {
    id: "p5u1", num: 1, icon: "🦴", color: "red",
    title: { en: "Our Bodies and the Seasons", ar: "أجسامنا وتغيرات الفصول" },
    lessons: [
      {
        id: "p5u1l1", icon: "💪", page: 6,
        title: { en: "Bones and Muscles", ar: "العظام والعضلات" },
        idea: {
          official: {
            en: ["The human body has hard, strong bones and soft, flexible muscles. Muscles pull our bones to help us move.",
              "Muscles move the body by contracting and relaxing. When a muscle contracts, it gets short, thick and hard.",
              "When you bend your arm, the inner muscle contracts and the outer muscle relaxes. When you stretch your arm, the outer muscle contracts and the inner muscle relaxes.",
              "A joint is the part where bones connect. Joints have cartilage, a cushion that stops the bones rubbing directly against each other and wearing out.",
              "The skeleton is about 206 connected bones. The skull protects the brain, the ribs protect the heart and lungs, and the backbone supports the body and lets it bend.",
              "Dogs, cats and rabbits also have backbones and joints, and move when their muscles contract and pull their bones."],
            ar: ["يتكوّن جسم الإنسان من عظام صلبة قوية وعضلات لينة مرنة، والعضلات تشد العظام لتساعدنا على الحركة.",
              "تحرّك العضلات الجسم بالانقباض والانبساط، وعندما تنقبض العضلة تقصر وتغلظ وتصبح صلبة.",
              "عند ثني الذراع تنقبض العضلة الداخلية وتنبسط العضلة الخارجية، وعند فرد الذراع تنقبض العضلة الخارجية وتنبسط العضلة الداخلية.",
              "المفصل هو مكان اتصال العظام، وفي المفاصل غضاريف تعمل كوسادة تمنع احتكاك أطراف العظام ببعضها مباشرة وتحميها من التآكل.",
              "الهيكل العظمي نحو ٢٠٦ عظمات متصلة: الجمجمة تحمي المخ، والضلوع تحمي القلب والرئتين، والعمود الفقري يدعم الجسم ويسمح له بالانحناء.",
              "الكلاب والقطط والأرانب لها أيضًا عمود فقري ومفاصل، وتتحرك عندما تنقبض عضلاتها وتشد عظامها."]
          },
          story: {
            en: ["Youssef carries a big watermelon home from the market in Shubra.",
              "He feels the front of his arm: the biceps is hard and bulging. It contracted to pull his forearm up.",
              "When he puts the watermelon down and straightens his arm, the back muscle takes its turn and the front one relaxes.",
              "His elbow is a joint. Cartilage inside works like a soft cushion, so his bones never grind together.",
              "At home, his cat Mishmish jumps onto the wall: the same team of bones, joints and muscles, in a different shape."],
            ar: ["يحمل يوسف بطيخة كبيرة من السوق إلى البيت في شبرا.",
              "يتحسس مقدمة ذراعه فيجد العضلة ذات الرأسين صلبة منتفخة؛ لقد انقبضت لتشد ساعده إلى أعلى.",
              "وعندما يضع البطيخة ويفرد ذراعه، تنقبض العضلة الخلفية في دورها وتنبسط العضلة الأمامية.",
              "مرفقه مفصل، وبداخله غضروف يعمل كوسادة لينة فلا تحتك عظامه ببعضها.",
              "وفي البيت تقفز قطته مشمش فوق السور؛ إنه نفس فريق العظام والمفاصل والعضلات لكن بشكل مختلف."]
          }
        },
        words: [
          ["Muscle", "العضلة", "A soft part inside the body that pulls bones by contracting and relaxing.", "جزء لين داخل الجسم يشد العظام بالانقباض والانبساط."],
          ["Contract", "تنقبض", "A muscle contracts when it gets short, thick and hard.", "تنقبض العضلة عندما تقصر وتغلظ وتصبح صلبة."],
          ["Joint", "المفصل", "The part where bones connect and the body can bend.", "مكان اتصال العظام الذي يسمح للجسم بالانثناء."],
          ["Cartilage", "الغضروف", "A cushion in a joint so bones do not rub and wear out.", "وسادة في المفصل تمنع احتكاك العظام وتآكلها."],
          ["Skeleton", "الهيكل العظمي", "The structure of about 206 bones that gives the body its shape.", "تركيب من نحو ٢٠٦ عظمات يعطي الجسم شكله."],
          ["Skull", "الجمجمة", "The bone that protects the soft brain like a helmet.", "العظام التي تحمي المخ اللين مثل الخوذة."],
          ["Backbone", "العمود الفقري", "Many small connected bones that support the body and let it bend.", "عظام صغيرة كثيرة متصلة تدعم الجسم وتسمح له بالانحناء."]
        ],
        lab: { parts: [{ type: "p5_arm" }, {
          type: "sort",
          prompt: ["Tap a sentence, then tap: bone or muscle?", "اضغط على جملة، ثم اختر: عظمة أم عضلة؟"],
          bins: [["bone", "🦴", "Bone", "العظام"], ["mus", "💪", "Muscle", "العضلات"]],
          items: [[["Very hard and strong", "صلبة وقوية جدًا"], "bone"], [["Protects the brain and heart", "تحمي المخ والقلب"], "bone"], [["Supports the body", "تدعم الجسم"], "bone"],
            [["Soft and flexible", "لينة ومرنة"], "mus"], [["Contracts and relaxes", "تنقبض وتنبسط"], "mus"], [["Pulls to move the body", "تشد لتحريك الجسم"], "mus"]]
        }] },
        quiz: [
          Q(["When you bend your arm, what happens to the inner muscle (the biceps)?", "عند ثني الذراع، ماذا يحدث للعضلة الداخلية (ذات الرأسين)؟"],
            [["It contracts and becomes thick and hard", "تنقبض وتصبح غليظة وصلبة"], ["It relaxes and becomes thin", "تنبسط وتصبح رفيعة"], ["It turns into bone", "تتحول إلى عظم"], ["Nothing happens", "لا يحدث شيء"]],
            ["Bending the arm: the inner muscle contracts and the outer muscle relaxes.", "عند ثني الذراع تنقبض العضلة الداخلية وتنبسط الخارجية."],
            ["Youssef's biceps bulged hard as it lifted the watermelon.", "انتفخت عضلة يوسف وصلبت وهي ترفع البطيخة."]),
          Q(["How do muscles move the body?", "كيف تحرّك العضلات الجسم؟"],
            [["By pulling the bones", "بشد العظام"], ["By pushing the bones", "بدفع العظام"], ["By making bones longer", "بإطالة العظام"], ["By bending the bones themselves", "بثني العظام نفسها"]],
            ["Muscles can only pull. They contract and pull the bones they are attached to.", "العضلات تشد فقط؛ تنقبض فتشد العظام المتصلة بها."],
            ["Muscles are like ropes: you can pull with a rope, but you cannot push with it.", "العضلات مثل الحبال: تشد بها لكن لا تدفع بها."]),
          Q(["When you stretch your arm straight, which is correct?", "عند فرد الذراع، أي العبارات صحيحة؟"],
            [["The outer muscle contracts and the inner muscle relaxes", "تنقبض العضلة الخارجية وتنبسط الداخلية"], ["The inner muscle contracts and the outer muscle relaxes", "تنقبض العضلة الداخلية وتنبسط الخارجية"], ["Both muscles relax", "تنبسط العضلتان"], ["Both muscles contract", "تنقبض العضلتان"]],
            ["The two arm muscles work in turns. Stretching uses the outer muscle.", "عضلتا الذراع تعملان بالتناوب، والفرد يكون بالعضلة الخارجية."],
            ["Putting the watermelon down, the back muscle took its turn.", "عند وضع البطيخة جاء دور العضلة الخلفية."]),
          Q(["What do we call the place where two bones meet and allow movement?", "ماذا نسمي مكان التقاء عظمتين الذي يسمح بالحركة؟"],
            [["A joint", "المفصل"], ["A muscle", "العضلة"], ["The skull", "الجمجمة"], ["A rib", "الضلع"]],
            ["A joint is the part where bones connect, like the elbow, knee and shoulder.", "المفصل مكان اتصال العظام، مثل المرفق والركبة والكتف."],
            ["The elbow is the hinge of Youssef's arm.", "المرفق هو مفصّلة ذراع يوسف."]),
          Q(["What is the job of cartilage in a joint?", "ما وظيفة الغضروف في المفصل؟"],
            [["A cushion so bones do not rub and wear out", "وسادة تمنع احتكاك العظام وتآكلها"], ["It pulls the bones", "يشد العظام"], ["It protects the brain", "يحمي المخ"], ["It makes the bones grow", "يجعل العظام تنمو"]],
            ["Cartilage sits between the ends of the bones so they do not rub directly against each other.", "يوجد الغضروف بين أطراف العظام حتى لا تحتك ببعضها مباشرة."],
            ["Like a soft pillow between two stones.", "مثل وسادة لينة بين حجرين."]),
          Q(["Which is NOT a role of bones?", "أي مما يلي ليس من وظائف العظام؟"],
            [["Contracting and moving by themselves", "الانقباض والحركة بنفسها"], ["Supporting the body", "دعم الجسم"], ["Protecting the brain and heart", "حماية المخ والقلب"], ["Giving the body its shape", "إعطاء الجسم شكله"]],
            ["Bones support and protect. Only muscles contract and pull.", "العظام تدعم وتحمي، والعضلات وحدها تنقبض وتشد."],
            ["Bones are the frame of the tent; muscles are the people pulling the ropes.", "العظام هيكل الخيمة، والعضلات هم من يشدون الحبال."]),
          Q(["The ribs protect which organs in a cage-like shape?", "تحمي الضلوع أي أعضاء على شكل قفص؟"],
            [["The heart and lungs", "القلب والرئتين"], ["The brain and eyes", "المخ والعينين"], ["The stomach and teeth", "المعدة والأسنان"], ["The hands and feet", "اليدين والقدمين"]],
            ["The ribs form a cage around the heart and lungs. The skull protects the brain.", "الضلوع تكوّن قفصًا حول القلب والرئتين، والجمجمة تحمي المخ."],
            ["Take a deep breath and feel the thin bones of your chest cage.", "خذ نفسًا عميقًا وتحسس العظام الرفيعة لقفصك الصدري."]),
          Q(["Why are the leg bones of a rabbit and a dog different from ours?", "لماذا تختلف عظام أرجل الأرنب والكلب عن عظامنا؟"],
            [["Because of how each animal lives and moves", "بسبب طريقة معيشة كل حيوان وحركته"], ["Because of their body colour", "بسبب لون جسمها"], ["Because they have no joints", "لأنها بلا مفاصل"], ["Because their muscles push", "لأن عضلاتها تدفع"]],
            ["Bone length and muscle attachment depend on how the animal lives, like running or jumping. The mechanism is the same.", "طول العظام وطريقة اتصال العضلات تعتمد على معيشة الحيوان كالجري أو القفز، لكن آلية الحركة واحدة."],
            ["The rabbit has long back-leg bones because it is a jumping champion.", "للأرنب عظام أرجل خلفية طويلة لأنه بطل في القفز."])
        ]
      },
      {
        id: "p5u1l2", icon: "🍂", page: 20,
        title: { en: "Changes in the Seasons", ar: "التغيرات في الفصول" },
        idea: {
          official: {
            en: ["Plants grow and change their appearance a lot through the year, depending on the seasonal temperature.",
              "When the temperature is high, seeds sprout, stems grow tall, leaves spread wide and flowers bloom.",
              "When the temperature is low, plants start to wither, but they leave seeds for the next generation. The yearly order is: seeds sprout, flowers bloom, fruit grows.",
              "Lizards, snakes and frogs are active and move quickly when it is warm, and become slow when it is cold.",
              "In cold winters they stay still in the soil or in rock crevices to save energy. This is called hibernation.",
              "Some birds, like flamingos and ducks, come to warm Egypt to spend the winter."],
            ar: ["تنمو النباتات ويتغير شكلها كثيرًا على مدار العام تبعًا لدرجة حرارة الفصل.",
              "عندما ترتفع درجة الحرارة تنبت البذور وتطول السيقان وتتسع الأوراق وتتفتح الأزهار.",
              "وعندما تنخفض درجة الحرارة تبدأ النباتات في الذبول، لكنها تترك بذورًا للجيل التالي. والترتيب خلال العام: إنبات البذور ثم تفتح الأزهار ثم نمو الثمار.",
              "السحالي والثعابين والضفادع تنشط وتتحرك بسرعة عندما يكون الجو دافئًا، وتصبح بطيئة عندما يكون باردًا.",
              "وفي الشتاء البارد تسكن في التربة أو في شقوق الصخور لتوفّر طاقتها، ويسمى ذلك البيات الشتوي.",
              "وبعض الطيور مثل البشاروش (الفلامنجو) والبط تأتي إلى مصر الدافئة لتقضي فصل الشتاء."]
          },
          story: {
            en: ["In spring, Salma plants luffa seeds in a pot on her grandmother's roof in Mansoura.",
              "By summer the vine climbs the railings with wide leaves, yellow flowers, then long green fruits.",
              "When winter comes the plant withers and one fruit turns brown. Inside, Salma finds lots of seeds for next year.",
              "On a hot afternoon she sees a lizard basking on a warm stone, then darting away very fast.",
              "In January the lizard has gone: it is hibernating in a crack in the wall, waiting for warm days."],
            ar: ["في الربيع تزرع سلمى بذور اللوف في أصيص على سطح بيت جدتها في المنصورة.",
              "وبحلول الصيف يتسلق النبات السور بأوراق عريضة وأزهار صفراء ثم ثمار خضراء طويلة.",
              "ومع قدوم الشتاء يذبل النبات وتصبح إحدى الثمار بنية، فتجد سلمى بداخلها بذورًا كثيرة للعام القادم.",
              "وفي ظهيرة حارة ترى سحلية تتشمس على حجر دافئ ثم تجري بسرعة كبيرة.",
              "وفي يناير تختفي السحلية؛ إنها في بيات شتوي داخل شق في الجدار تنتظر الأيام الدافئة."]
          }
        },
        words: [
          ["Season", "الفصل", "A part of the year with its own temperature, like summer and winter.", "جزء من العام له درجة حرارة مميزة مثل الصيف والشتاء."],
          ["Temperature", "درجة الحرارة", "How hot or cold it is. It changes plants and animals through the year.", "مقدار السخونة أو البرودة، وهي تغيّر النباتات والحيوانات خلال العام."],
          ["Wither", "يذبل", "When a plant dries and dies back in the cold season.", "عندما يجف النبات ويضعف في الفصل البارد."],
          ["Seed", "البذرة", "What a plant leaves for the next generation; it sprouts when it is warm.", "ما يتركه النبات للجيل التالي، وتنبت عندما يدفأ الجو."],
          ["Hibernation", "البيات الشتوي", "Staying still in soil or rock crevices in winter to save energy.", "السكون في التربة أو شقوق الصخور في الشتاء لتوفير الطاقة."],
          ["Yearly cycle", "الدورة السنوية", "Seeds sprout, flowers bloom, fruit grows, then seeds wait for next year.", "تنبت البذور ثم تتفتح الأزهار ثم تنمو الثمار ثم تنتظر البذور العام القادم."]
        ],
        lab: { parts: [{ type: "p5_seasons" }, {
          type: "sort",
          prompt: ["Tap a scene, then tap the season it belongs to.", "اضغط على مشهد، ثم اختر الفصل المناسب."],
          bins: [["hot", "☀️", "High temperature", "درجة حرارة مرتفعة"], ["cold", "❄️", "Low temperature", "درجة حرارة منخفضة"]],
          items: [[["Luffa flowers bloom", "تتفتح أزهار اللوف"], "hot"], [["A lizard basks and runs fast", "سحلية تتشمس وتجري بسرعة"], "hot"], [["Stems grow tall, leaves spread wide", "تطول السيقان وتتسع الأوراق"], "hot"],
            [["The plant withers and leaves seeds", "يذبل النبات ويترك البذور"], "cold"], [["A lizard hibernates in a rock crevice", "سحلية في بيات شتوي داخل شق صخري"], "cold"], [["Flamingos arrive in Egypt", "يصل الفلامنجو إلى مصر"], "cold"]]
        }] },
        quiz: [
          Q(["When does a luffa plant sprout and start growing fast?", "متى ينبت نبات اللوف ويبدأ في النمو السريع؟"],
            [["When the temperature gets higher", "عندما ترتفع درجة الحرارة"], ["When the temperature gets lower", "عندما تنخفض درجة الحرارة"], ["Only at night", "في الليل فقط"], ["Only when it rains", "عند سقوط المطر فقط"]],
            ["Plants sprout, grow and flower in the warm season.", "تنبت النباتات وتنمو وتزهر في الفصل الدافئ."],
            ["Salma's luffa raced up the railings in summer.", "تسلق لوف سلمى السور بسرعة في الصيف."]),
          Q(["What does a luffa leave behind when it withers in winter?", "ماذا يترك نبات اللوف عندما يذبل في الشتاء؟"],
            [["Seeds for the next generation", "بذورًا للجيل التالي"], ["Nothing at all", "لا شيء"], ["New flowers", "أزهارًا جديدة"], ["Green leaves", "أوراقًا خضراء"]],
            ["Plants do not just wither and die: they produce seeds that sprout next year.", "النباتات لا تذبل وتموت فقط، بل تنتج بذورًا تنبت في العام القادم."],
            ["The brown fruit was a box full of next year's plants.", "الثمرة البنية كانت صندوقًا مليئًا بنباتات العام القادم."]),
          Q(["Which is the correct order of a plant's yearly cycle?", "ما الترتيب الصحيح للدورة السنوية للنبات؟"],
            [["Seeds sprout → flowers bloom → fruit grows", "تنبت البذور ← تتفتح الأزهار ← تنمو الثمار"], ["Fruit grows → flowers bloom → seeds sprout", "تنمو الثمار ← تتفتح الأزهار ← تنبت البذور"], ["Seeds sprout → fruit grows → flowers bloom", "تنبت البذور ← تنمو الثمار ← تتفتح الأزهار"], ["Flowers bloom → seeds sprout → fruit grows", "تتفتح الأزهار ← تنبت البذور ← تنمو الثمار"]],
            ["A seed sprouts, the plant flowers, then the fruit grows with new seeds inside.", "تنبت البذرة ثم يزهر النبات ثم تنمو الثمرة وبداخلها بذور جديدة."],
            ["Sprout, flower, fruit: like a story with a beginning, middle and end.", "إنبات ثم زهرة ثم ثمرة: مثل قصة لها بداية ووسط ونهاية."]),
          Q(["When are lizards most active?", "متى تكون السحالي أكثر نشاطًا؟"],
            [["When the temperature is high", "عندما تكون درجة الحرارة مرتفعة"], ["When the temperature is low", "عندما تكون درجة الحرارة منخفضة"], ["On cold winter nights", "في ليالي الشتاء الباردة"], ["When it snows", "عندما يتساقط الثلج"]],
            ["Lizards move quickly to find food or escape danger when it is warm.", "تتحرك السحالي بسرعة لتبحث عن الغذاء أو تهرب من الخطر عندما يكون الجو دافئًا."],
            ["Salma's lizard darted away fast from the hot stone.", "جرت سحلية سلمى بسرعة من فوق الحجر الساخن."]),
          Q(["What is it called when animals stay still in winter to save energy?", "ماذا نسمي سكون الحيوانات في الشتاء لتوفير الطاقة؟"],
            [["Hibernation", "البيات الشتوي"], ["Germination", "الإنبات"], ["Pollination", "التلقيح"], ["Evaporation", "التبخر"]],
            ["In cold winters lizards stay still in soil or rock crevices. This is hibernation.", "في الشتاء البارد تسكن السحالي في التربة أو شقوق الصخور، وهذا هو البيات الشتوي."],
            ["The lizard took a long winter nap in a crack in the wall.", "أخذت السحلية غفوة شتوية طويلة في شق بالجدار."]),
          Q(["Why does a lizard bask on a sunny rock?", "لماذا تتشمس السحلية فوق صخرة مشمسة؟"],
            [["To warm up so it can move quickly", "لتدفأ فتستطيع الحركة بسرعة"], ["To sleep for the winter", "لتنام طوال الشتاء"], ["To lay seeds", "لتضع بذورًا"], ["To cool down", "لتبرد"]],
            ["Lizard activity depends on temperature: warmth makes them active.", "نشاط السحلية يعتمد على درجة الحرارة، والدفء يجعلها نشيطة."],
            ["The warm rock is the lizard's charger.", "الصخرة الدافئة هي شاحن السحلية."]),
          Q(["Which birds come to warm Egypt to spend the winter?", "أي الطيور تأتي إلى مصر الدافئة لتقضي الشتاء؟"],
            [["Flamingos and ducks", "الفلامنجو والبط"], ["Lizards and snakes", "السحالي والثعابين"], ["Cats and dogs", "القطط والكلاب"], ["Frogs and fish", "الضفادع والأسماك"]],
            ["The book says birds like flamingos and ducks come to Egypt for the winter.", "يذكر الكتاب أن طيورًا مثل الفلامنجو والبط تأتي إلى مصر في الشتاء."],
            ["Egypt is their warm winter holiday home.", "مصر هي بيت عطلتهم الشتوية الدافئ."])
        ]
      }
    ]
  };

  var U2 = {
    id: "p5u2", num: 2, icon: "🌱", color: "green",
    title: { en: "How Plants Grow", ar: "كيف تنمو النباتات" },
    lessons: [
      {
        id: "p5u2l1", icon: "🫘", page: 28,
        title: { en: "Conditions for Germination", ar: "شروط الإنبات" },
        idea: {
          official: {
            en: ["When a plant seed sprouts, it is called germination.",
              "Inside a kidney bean seed is a part that will become leaves, stems and roots, and two cotyledons packed with starch, the nutrient for germination.",
              "Iodine solution turns starch blue-black. A cotyledon from a seed that has grown for a few days shows much less colour, because the starch was used.",
              "In a fair test, change only the condition you want to investigate and keep all the other conditions the same. If you change two, you will not know which one is needed.",
              "Experiments show three conditions for germination: water, air and an appropriate temperature. If even one is missing, the seed will not germinate.",
              "Sunlight and fertilizer are needed for growth after germination, but not for germination itself."],
            ar: ["عندما تنبت بذرة النبات نسمي ذلك الإنبات.",
              "داخل بذرة الفاصوليا جزء سيصبح أوراقًا وسيقانًا وجذورًا، وفلقتان مملوءتان بالنشا الذي يغذي البذرة أثناء الإنبات.",
              "محلول اليود يحوّل لون النشا إلى الأزرق الداكن، وفلقة البذرة التي نمت عدة أيام يقل فيها هذا اللون لأن النشا استُهلك.",
              "في التجربة العادلة نغيّر الشرط الذي ندرسه فقط ونثبّت باقي الشروط، فإذا غيّرنا شرطين لن نعرف أيهما هو الضروري.",
              "تُظهر التجارب أن للإنبات ثلاثة شروط: الماء والهواء ودرجة الحرارة المناسبة، وإذا غاب شرط واحد لا تنبت البذرة.",
              "ضوء الشمس والسماد ضروريان للنمو بعد الإنبات، لكنهما ليسا ضروريين للإنبات نفسه."]
          },
          story: {
            en: ["Omar puts kidney beans on cotton in four cups on the kitchen windowsill in Assiut.",
              "Cup A gets wet cotton and cup B stays dry. Only A sprouts, so water is needed.",
              "In cup C the beans are completely under water. They cannot get air, so they do not sprout.",
              "Cup D, with wet cotton, goes into the refrigerator. It is too cold, so nothing sprouts.",
              "Omar changed just one thing each time, so every test was fair: seeds need water, air and warmth."],
            ar: ["يضع عمر بذور فاصوليا على قطن في أربعة أكواب على شباك المطبخ في أسيوط.",
              "الكوب أ قطنه مبلل والكوب ب جاف، فينبت أ وحده؛ إذن الماء ضروري.",
              "وفي الكوب ج البذور مغمورة تمامًا بالماء فلا يصلها الهواء، فلا تنبت.",
              "والكوب د قطنه مبلل لكنه في الثلاجة؛ الجو بارد جدًا فلا شيء ينبت.",
              "غيّر عمر شرطًا واحدًا في كل مرة، فكانت كل تجربة عادلة: البذور تحتاج إلى الماء والهواء والدفء."]
          }
        },
        words: [
          ["Germination", "الإنبات", "When a plant seed sprouts.", "خروج النبات الصغير من البذرة."],
          ["Cotyledon", "الفلقة", "The part that makes up most of a bean seed. It stores starch.", "الجزء الذي يكوّن معظم بذرة الفاصوليا ويخزن النشا."],
          ["Embryo", "الجنين (الرشيم)", "The tiny part of the seed that becomes leaves, stem and roots.", "الجزء الصغير في البذرة الذي يصبح أوراقًا وساقًا وجذورًا."],
          ["Starch", "النشا", "Stored food in the seed, used for germination.", "غذاء مخزن في البذرة يُستخدم أثناء الإنبات."],
          ["Iodine solution", "محلول اليود", "Turns starch blue-black, so it shows if starch is there.", "يحوّل النشا إلى اللون الأزرق الداكن فيكشف وجوده."],
          ["Fair test", "التجربة العادلة", "Change only one condition and keep all the others the same.", "تغيير شرط واحد فقط وتثبيت باقي الشروط."],
          ["Appropriate temperature", "درجة الحرارة المناسبة", "Warmth that seeds need; a refrigerator is too cold.", "الدفء الذي تحتاجه البذور؛ والثلاجة باردة جدًا."]
        ],
        lab: { parts: [{ type: "p5_germ" }, { type: "p5_seed" }, {
          type: "sort",
          prompt: ["Tap a condition: is it needed for germination?", "اضغط على شرط: هل هو ضروري للإنبات؟"],
          bins: [["yes", "✅", "Needed to germinate", "ضروري للإنبات"], ["no", "⛔", "Not needed to germinate", "غير ضروري للإنبات"]],
          items: [[["Water", "الماء"], "yes"], [["Air", "الهواء"], "yes"], [["Appropriate temperature", "درجة الحرارة المناسبة"], "yes"],
            [["Sunlight", "ضوء الشمس"], "no"], [["Fertilizer", "السماد"], "no"]]
        }] },
        quiz: [
          Q(["What is it called when a plant seed sprouts?", "ماذا نسمي خروج النبات من البذرة؟"],
            [["Germination", "الإنبات"], ["Pollination", "التلقيح"], ["Hibernation", "البيات الشتوي"], ["Condensation", "التكثف"]],
            ["When a seed sprouts, it is called germination.", "عندما تنبت البذرة نسمي ذلك الإنبات."],
            ["The bean woke up and pushed out its first root.", "استيقظت الفاصوليا وأخرجت أول جذر لها."]),
          Q(["Which part of a kidney bean seed stores the starch?", "أي جزء في بذرة الفاصوليا يخزن النشا؟"],
            [["The cotyledons", "الفلقتان"], ["The roots", "الجذور"], ["The flower", "الزهرة"], ["The pollen", "حبوب اللقاح"]],
            ["The cotyledons make up most of the seed and are packed with starch.", "الفلقتان تكوّنان معظم البذرة وهما مملوءتان بالنشا."],
            ["The cotyledons are the seed's lunch box.", "الفلقتان هما علبة غداء البذرة."]),
          Q(["What colour does starch turn when iodine solution is added?", "ما لون النشا عند إضافة محلول اليود؟"],
            [["Blue-black", "أزرق داكن"], ["Red", "أحمر"], ["Green", "أخضر"], ["Yellow", "أصفر"]],
            ["Iodine solution turns starch blue-black. This is the test for starch.", "محلول اليود يحوّل النشا إلى الأزرق الداكن، وهذا هو الكشف عن النشا."],
            ["Iodine is a detective that paints starch dark blue.", "اليود محقق يلوّن النشا بالأزرق الداكن."]),
          Q(["In the water experiment, what is the condition to change between the two cups?", "في تجربة الماء، ما الشرط الذي نغيّره بين الكوبين؟"],
            [["Water or no water", "وجود الماء أو عدم وجوده"], ["Air or no air", "وجود الهواء أو عدم وجوده"], ["Warm or cold", "دافئ أو بارد"], ["Big or small seeds", "بذور كبيرة أو صغيرة"]],
            ["To test water, change only the water. Keep temperature, air and brightness the same.", "لدراسة الماء نغيّر الماء فقط ونثبّت درجة الحرارة والهواء والإضاءة."],
            ["Omar watered cup A and left cup B dry, and changed nothing else.", "سقى عمر الكوب أ وترك ب جافًا ولم يغيّر شيئًا آخر."]),
          Q(["Why did the seeds completely under water not germinate?", "لماذا لم تنبت البذور المغمورة تمامًا بالماء؟"],
            [["They were not exposed to air", "لأن الهواء لم يصل إليها"], ["The water was too warm", "لأن الماء كان دافئًا جدًا"], ["They had too much light", "لأن الضوء كان كثيرًا"], ["They had no fertilizer", "لأنها بلا سماد"]],
            ["Seeds are alive and need air to germinate. Water covering them blocks the air.", "البذور حية وتحتاج إلى الهواء لتنبت، والماء الذي يغمرها يمنع الهواء."],
            ["The beans under water could not breathe.", "بذور الفاصوليا تحت الماء لم تستطع التنفس."]),
          Q(["Seeds on wet cotton were put in the refrigerator. Will they germinate?", "وُضعت بذور على قطن مبلل في الثلاجة. هل تنبت؟"],
            [["No, the temperature is too low", "لا، لأن درجة الحرارة منخفضة جدًا"], ["Yes, they have water", "نعم، لأن معها ماء"], ["Yes, it is dark", "نعم، لأن المكان مظلم"], ["No, there is no fertilizer", "لا، لأنه لا يوجد سماد"]],
            ["Seeds need an appropriate temperature. The refrigerator is too cold.", "تحتاج البذور إلى درجة حرارة مناسبة، والثلاجة باردة جدًا."],
            ["Cup D shivered in the fridge and stayed asleep.", "ارتعش الكوب د في الثلاجة وبقيت بذوره نائمة."]),
          Q(["In the temperature test, why was the warm cup covered with a box?", "في تجربة الحرارة، لماذا غُطّي الكوب الدافئ بصندوق؟"],
            [["To keep light the same as inside the dark refrigerator", "لتثبيت الإضاءة مثل داخل الثلاجة المظلمة"], ["To make it hotter", "لزيادة حرارته"], ["To stop air reaching it", "لمنع الهواء عنه"], ["To keep insects away", "لإبعاد الحشرات"]],
            ["The fridge is dark, so the warm cup is darkened too. Then only temperature is different. Blocks under the box let air in.", "الثلاجة مظلمة فنُظلم الكوب الدافئ أيضًا، فيصبح الاختلاف في الحرارة فقط، والقطع الخشبية تحت الصندوق تسمح بدخول الهواء."],
            ["A fair race: both cups start in the dark, only one is cold.", "سباق عادل: الكوبان في الظلام، وواحد فقط بارد."]),
          Q(["Which is NOT needed for germination itself?", "أي مما يلي ليس ضروريًا للإنبات نفسه؟"],
            [["Sunlight", "ضوء الشمس"], ["Water", "الماء"], ["Air", "الهواء"], ["Appropriate temperature", "درجة الحرارة المناسبة"]],
            ["Seeds germinate even in a dark box if they have water, air and warmth. Sunlight is needed later, for growth.", "تنبت البذور حتى في صندوق مظلم إذا توفر الماء والهواء والدفء، والضوء يلزم لاحقًا للنمو."],
            ["The seed carries its own food, so it can start in the dark.", "البذرة تحمل غذاءها معها، فتستطيع أن تبدأ في الظلام."])
        ]
      },
      {
        id: "p5u2l2", icon: "🪴", page: 44,
        title: { en: "Conditions for Growth", ar: "شروط النمو" },
        idea: {
          official: {
            en: ["After they germinate, plants need sunlight to grow healthy.",
              "With sunlight, plants make their own food. They have dark green leaves and thick, strong stems.",
              "Without sunlight, a seedling's leaves become yellowish and its stem grows thin and long.",
              "Plants also need fertilizer in the soil to grow bigger and stronger: they absorb its nutrients along with water.",
              "To test sunlight, change only the sunlight and keep water, air, temperature, fertilizer, soil and type of plant the same. To test fertilizer, change only the fertilizer.",
              "Long ago, the Nile floods brought silt, a natural fertilizer, which made Egypt's farmland very rich."],
            ar: ["بعد الإنبات تحتاج النباتات إلى ضوء الشمس لتنمو نموًا سليمًا.",
              "بضوء الشمس يصنع النبات غذاءه بنفسه، فتكون أوراقه خضراء داكنة وساقه سميكة قوية.",
              "وبدون ضوء الشمس تصبح أوراق الشتلة مصفرة وتنمو ساقها رفيعة وطويلة.",
              "وتحتاج النباتات أيضًا إلى السماد في التربة لتنمو أكبر وأقوى، فهي تمتص منه العناصر الغذائية مع الماء.",
              "لدراسة الضوء نغيّر الضوء فقط ونثبّت الماء والهواء ودرجة الحرارة والسماد ونوع التربة ونوع النبات، ولدراسة السماد نغيّر السماد فقط.",
              "قديمًا كان فيضان النيل يحمل الطمي، وهو سماد طبيعي، فجعل أرض مصر الزراعية غنية جدًا."]
          },
          story: {
            en: ["Mariam has two kidney bean seedlings of the same size on her family farm in Fayoum.",
              "She puts pot A in the sun and covers pot B with a cardboard box. Both get the same water.",
              "After a week, A has dark green leaves and a thick stem. B is pale yellow, thin and long.",
              "Next she keeps both in the sun, but gives pot B water mixed with a little fertilizer.",
              "Every few days she measures them. The fertilized plant grows taller: like a vitamin for plants."],
            ar: ["عند مريم شتلتا فاصوليا متساويتان في الحجم في مزرعة عائلتها بالفيوم.",
              "تضع الأصيص أ في الشمس وتغطي الأصيص ب بصندوق من الكرتون، وتسقيهما بنفس كمية الماء.",
              "بعد أسبوع تصبح أوراق أ خضراء داكنة وساقها سميكة، أما ب فصفراء باهتة وساقها رفيعة وطويلة.",
              "ثم تضع الأصيصين في الشمس، لكنها تسقي الأصيص ب بماء مخلوط بقليل من السماد.",
              "وتقيس طولهما كل بضعة أيام، فيصبح النبات المسمَّد أطول؛ السماد مثل الفيتامين للنبات."]
          }
        },
        words: [
          ["Seedling", "الشتلة", "A young plant after germination.", "نبات صغير بعد الإنبات."],
          ["Sunlight", "ضوء الشمس", "Plants use it to make their own food and grow healthy.", "يستخدمه النبات ليصنع غذاءه وينمو نموًا سليمًا."],
          ["Fertilizer", "السماد", "Gives plants nutrients so they grow bigger and stronger.", "يمد النبات بالعناصر الغذائية فينمو أكبر وأقوى."],
          ["Nutrients", "العناصر الغذائية", "What plants absorb from fertilizer with water.", "ما يمتصه النبات من السماد مع الماء."],
          ["Condition to keep the same", "الشرط الثابت", "Everything except the one condition you are testing.", "كل الشروط ما عدا الشرط الذي ندرسه."],
          ["Silt", "الطمي", "Fine, nutrient-rich soil the Nile floods brought: a natural fertilizer.", "تربة ناعمة غنية بالعناصر الغذائية حملها فيضان النيل، وهي سماد طبيعي."]
        ],
        lab: { parts: [{ type: "p5_growth" }, {
          type: "sort",
          prompt: ["Tap a description, then tap the plant it describes.", "اضغط على وصف، ثم اختر النبات الذي يصفه."],
          bins: [["sun", "☀️", "Grown in sunlight", "نما في ضوء الشمس"], ["dark", "📦", "Grown without sunlight", "نما بدون ضوء الشمس"]],
          items: [[["Dark green leaves", "أوراق خضراء داكنة"], "sun"], [["Thick, strong stem", "ساق سميكة قوية"], "sun"], [["Makes its own food", "يصنع غذاءه بنفسه"], "sun"],
            [["Yellowish leaves", "أوراق مصفرة"], "dark"], [["Thin, long stem", "ساق رفيعة وطويلة"], "dark"]]
        }] },
        quiz: [
          Q(["Which describes a seedling grown WITHOUT sunlight?", "أي مما يلي يصف شتلة نمت بدون ضوء الشمس؟"],
            [["Yellowish leaves and a thin, long stem", "أوراق مصفرة وساق رفيعة طويلة"], ["Big leaves and a thick stem", "أوراق كبيرة وساق سميكة"], ["Dark green leaves", "أوراق خضراء داكنة"], ["Many flowers", "أزهار كثيرة"]],
            ["Without sunlight the plant cannot make its food, so its leaves turn yellowish and the stem is thin and long.", "بدون الضوء لا يصنع النبات غذاءه، فتصفر أوراقه وتصبح ساقه رفيعة طويلة."],
            ["Mariam's boxed plant was pale and skinny.", "نبات مريم المغطى كان باهتًا ونحيفًا."]),
          Q(["Plants grown with lots of sunlight have…", "النباتات التي تنمو في ضوء شمس وفير لها…"],
            [["dark green leaves and thick, strong stems", "أوراق خضراء داكنة وسيقان سميكة قوية"], ["whitish leaves and thin stems", "أوراق بيضاء وسيقان رفيعة"], ["yellowish leaves and weak stems", "أوراق مصفرة وسيقان ضعيفة"], ["no leaves at all", "لا أوراق على الإطلاق"]],
            ["Sunlight lets plants make their own food, so they grow healthy.", "الضوء يجعل النبات يصنع غذاءه فينمو نموًا سليمًا."],
            ["Pot A in the sun was green and strong.", "الأصيص أ في الشمس كان أخضر وقويًا."]),
          Q(["In the sunlight experiment, what is the condition to change?", "في تجربة الضوء، ما الشرط الذي نغيّره؟"],
            [["Sunlight or no sunlight", "وجود ضوء الشمس أو عدمه"], ["Amount of water", "كمية الماء"], ["Type of plant", "نوع النبات"], ["Amount of fertilizer", "كمية السماد"]],
            ["Change only sunlight; keep water, air, temperature, fertilizer, soil and plant type the same.", "نغيّر الضوء فقط ونثبّت الماء والهواء والحرارة والسماد والتربة ونوع النبات."],
            ["One pot in the sun, one under a box, everything else twins.", "أصيص في الشمس وآخر تحت صندوق، وكل شيء آخر متطابق."]),
          Q(["Seedlings grown with fertilizer…", "الشتلات التي تنمو بالسماد…"],
            [["grow bigger than seedlings without it", "تنمو أكبر من الشتلات بدونه"], ["grow smaller", "تنمو أصغر"], ["die quickly", "تموت سريعًا"], ["stop growing", "تتوقف عن النمو"]],
            ["Plants absorb nutrients from fertilizer, so leaves and stems grow bigger.", "يمتص النبات العناصر الغذائية من السماد فتكبر أوراقه وساقه."],
            ["Fertilizer is like a vitamin for plants.", "السماد مثل الفيتامين للنبات."]),
          Q(["In the fertilizer experiment, which must be kept the same?", "في تجربة السماد، أي مما يلي يجب تثبيته؟"],
            [["Sunlight and amount of water", "ضوء الشمس وكمية الماء"], ["Amount of fertilizer", "كمية السماد"], ["Nothing at all", "لا شيء"], ["Only the pot colour", "لون الأصيص فقط"]],
            ["Only fertilizer changes. Sunlight, water, air, temperature, soil and plant type stay the same.", "السماد وحده يتغير، ويبقى الضوء والماء والهواء والحرارة والتربة ونوع النبات ثابتة."],
            ["Both pots sat side by side in the same sunny spot.", "وُضع الأصيصان جنبًا إلى جنب في نفس المكان المشمس."]),
          Q(["Which is NOT an effect of fertilizer on a plant?", "أي مما يلي ليس من تأثيرات السماد على النبات؟"],
            [["The number of leaves decreases", "يقل عدد الأوراق"], ["Stems grow taller", "تطول السيقان"], ["The whole plant grows bigger", "يكبر النبات كله"], ["The plant grows stronger", "يصبح النبات أقوى"]],
            ["Fertilizer helps plants grow bigger and stronger; it does not reduce leaves.", "السماد يساعد النبات على أن يكبر ويقوى، ولا يقلل أوراقه."],
            ["A vitamin makes you stronger, not weaker.", "الفيتامين يجعلك أقوى لا أضعف."]),
          Q(["Why was the Nile valley such rich farmland in ancient times?", "لماذا كان وادي النيل أرضًا زراعية غنية قديمًا؟"],
            [["Floods brought silt, a natural fertilizer", "الفيضان كان يحمل الطمي وهو سماد طبيعي"], ["It never got sunlight", "لأنه لم يكن يصله الضوء"], ["It was very cold", "لأنه كان باردًا جدًا"], ["There was no water", "لأنه لم يكن به ماء"]],
            ["Every year the floods brought fine, nutrient-packed silt from the mountains of Ethiopia.", "كل عام كان الفيضان يحمل طميًا ناعمًا غنيًا بالعناصر الغذائية من جبال الحبشة."],
            ["The Nile delivered free plant vitamins every summer.", "كان النيل يوصل فيتامينات النبات مجانًا كل صيف."])
        ]
      },
      {
        id: "p5u2l3", icon: "🌼", page: 52,
        title: { en: "From Flower to Fruit", ar: "من الزهرة إلى الثمرة" },
        idea: {
          official: {
            en: ["Luffa and pumpkin plants have two types of flowers on one plant.",
              "The male flower has a stamen in the centre that makes yellow pollen. The female flower has a pistil and a swelling at its base that will become a fruit.",
              "Pollination is when pollen from a male flower attaches to the tip of the pistil of a female flower. Bugs like bees carry the pollen.",
              "After pollination, the base of the pistil becomes a fruit with seeds inside. A female flower that is not pollinated turns yellow and falls off without a fruit.",
              "A microscope makes tiny things like pollen look bigger. Magnification = eyepiece lens × objective lens, for example 10 × 40 = 400.",
              "Start with low magnification (wide, bright view), then change to high (narrow, darker view). The image is upside down and left-right reversed."],
            ar: ["لنبات اللوف والقرع العسلي نوعان من الأزهار على النبات نفسه.",
              "الزهرة المذكرة في وسطها أسدية تكوّن حبوب لقاح صفراء، والزهرة المؤنثة في وسطها متاع وعند قاعدتها انتفاخ سيصبح ثمرة.",
              "التلقيح هو انتقال حبوب اللقاح من الزهرة المذكرة إلى قمة متاع الزهرة المؤنثة، والحشرات مثل النحل تنقل حبوب اللقاح.",
              "بعد التلقيح تصبح قاعدة المتاع ثمرة بداخلها بذور، والزهرة المؤنثة التي لا تُلقَّح تصفر وتسقط دون أن تكوّن ثمرة.",
              "المجهر يكبّر الأشياء الدقيقة مثل حبوب اللقاح، وقوة التكبير = قوة العدسة العينية × قوة العدسة الشيئية، مثل ١٠ × ٤٠ = ٤٠٠.",
              "نبدأ بالتكبير الصغير (مجال رؤية واسع ومضيء) ثم ننتقل إلى التكبير الكبير (مجال ضيق وأقل إضاءة)، والصورة تظهر مقلوبة ومعكوسة."]
          },
          story: {
            en: ["Karim visits his uncle's luffa field in Beheira and sees that the flowers are not all the same.",
              "Some have yellow powder on a stamen: male flowers. Others have a pistil and a tiny fruit-like swelling: female flowers.",
              "A bee lands on a male flower, gets dusted with pollen, then visits a female flower and leaves pollen on its pistil.",
              "A week later that swelling is a long green luffa full of seeds. A bagged flower that got no pollen turned yellow and fell.",
              "At school, Karim sees the pollen under a microscope: 10 × 40 makes it look 400 times bigger!"],
            ar: ["يزور كريم حقل اللوف عند خاله في البحيرة ويلاحظ أن الأزهار ليست كلها متشابهة.",
              "بعضها بها مسحوق أصفر على الأسدية: أزهار مذكرة، وبعضها بها متاع وانتفاخ صغير يشبه الثمرة: أزهار مؤنثة.",
              "تحط نحلة على زهرة مذكرة فتتغطى بحبوب اللقاح، ثم تزور زهرة مؤنثة وتترك حبوب اللقاح على متاعها.",
              "بعد أسبوع يصبح الانتفاخ ثمرة لوف خضراء طويلة مليئة بالبذور، أما الزهرة المغطاة بكيس فلم يصلها لقاح فاصفرت وسقطت.",
              "وفي المدرسة يرى كريم حبوب اللقاح بالمجهر: ١٠ × ٤٠ تجعلها تبدو أكبر ٤٠٠ مرة!"]
          }
        },
        words: [
          ["Male flower", "الزهرة المذكرة", "Has a stamen in the centre that makes yellow pollen.", "في وسطها أسدية تكوّن حبوب لقاح صفراء."],
          ["Female flower", "الزهرة المؤنثة", "Has a pistil and a swelling at the base that becomes a fruit.", "في وسطها متاع وعند قاعدتها انتفاخ يصبح ثمرة."],
          ["Stamen", "الأسدية", "The part of the male flower that makes pollen.", "جزء الزهرة المذكرة الذي يكوّن حبوب اللقاح."],
          ["Pollen", "حبوب اللقاح", "The yellow powder made by the stamen.", "المسحوق الأصفر الذي تكوّنه الأسدية."],
          ["Pistil", "المتاع", "The centre of the female flower; pollen attaches to its tip.", "وسط الزهرة المؤنثة، وتلتصق حبوب اللقاح بقمته."],
          ["Pollination", "التلقيح", "Pollen from a male flower attaches to the tip of a pistil.", "التصاق حبوب لقاح الزهرة المذكرة بقمة المتاع."],
          ["Magnification", "قوة التكبير", "Eyepiece lens × objective lens, e.g. 10 × 40 = 400.", "العدسة العينية × العدسة الشيئية، مثل ١٠ × ٤٠ = ٤٠٠."]
        ],
        lab: { parts: [{ type: "p5_pollen" }, { type: "p5_scope" }] },
        quiz: [
          Q(["Which luffa flower has a swelling at its base that becomes a fruit?", "أي زهرة لوف عند قاعدتها انتفاخ يصبح ثمرة؟"],
            [["The female flower", "الزهرة المؤنثة"], ["The male flower", "الزهرة المذكرة"], ["Both flowers", "الزهرتان"], ["Neither flower", "لا واحدة منهما"]],
            ["The female flower has a pistil and a swelling at the base that will become a fruit.", "الزهرة المؤنثة لها متاع وعند قاعدتها انتفاخ سيصبح ثمرة."],
            ["Karim spotted a tiny baby luffa under the female flower.", "لاحظ كريم ثمرة لوف صغيرة جدًا أسفل الزهرة المؤنثة."]),
          Q(["What is the yellow powder made by the stamen called?", "ماذا يسمى المسحوق الأصفر الذي تكوّنه الأسدية؟"],
            [["Pollen", "حبوب اللقاح"], ["Starch", "النشا"], ["Seeds", "البذور"], ["Silt", "الطمي"]],
            ["The stamen of the male flower makes yellow pollen.", "أسدية الزهرة المذكرة تكوّن حبوب اللقاح الصفراء."],
            ["The bee came out dusted yellow like a sugar doughnut.", "خرجت النحلة مغطاة بالأصفر مثل كعكة بالسكر."]),
          Q(["What is pollination?", "ما التلقيح؟"],
            [["Pollen from a male flower attaching to the tip of a pistil", "التصاق حبوب لقاح الزهرة المذكرة بقمة المتاع"], ["A seed sprouting", "خروج النبات من البذرة"], ["A flower withering", "ذبول الزهرة"], ["Water turning into vapour", "تحول الماء إلى بخار"]],
            ["When pollen from a male flower attaches to the tip of a female flower's pistil, it is called pollination.", "عندما تلتصق حبوب لقاح الزهرة المذكرة بقمة متاع الزهرة المؤنثة نسمي ذلك التلقيح."],
            ["The bee is the postman delivering pollen letters.", "النحلة ساعي بريد يوصّل رسائل حبوب اللقاح."]),
          Q(["What happens to a female flower that is NOT pollinated?", "ماذا يحدث للزهرة المؤنثة التي لا تُلقَّح؟"],
            [["It turns yellow and falls off without a fruit", "تصفر وتسقط دون أن تكوّن ثمرة"], ["The fruit grows bigger", "تكبر الثمرة"], ["It becomes a seed as it is", "تصبح بذرة كما هي"], ["It becomes a male flower", "تصبح زهرة مذكرة"]],
            ["Pollination is necessary for a fruit to form.", "التلقيح ضروري لتكوين الثمرة."],
            ["The bagged flower got no visit from the bee, so no luffa.", "الزهرة المغطاة بكيس لم تزرها النحلة، فلم تكوّن ثمرة لوف."]),
          Q(["Which is the correct order after pollination?", "ما الترتيب الصحيح بعد التلقيح؟"],
            [["Pollination → the swelling grows → seeds form inside the fruit", "التلقيح ← يكبر الانتفاخ ← تتكوّن البذور داخل الثمرة"], ["Seeds form → pollination → swelling grows", "تتكوّن البذور ← التلقيح ← يكبر الانتفاخ"], ["The swelling grows → pollination → seeds form", "يكبر الانتفاخ ← التلقيح ← تتكوّن البذور"], ["Seeds sprout → pollination → fruit", "تنبت البذور ← التلقيح ← الثمرة"]],
            ["After pollination the base of the pistil grows into a fruit and seeds are made inside.", "بعد التلقيح تكبر قاعدة المتاع لتصبح ثمرة وتتكوّن البذور بداخلها."],
            ["First the pollen arrives, then the baby fruit grows, then seeds fill it.", "أولًا تصل حبوب اللقاح، ثم تكبر الثمرة الصغيرة، ثم تمتلئ بالبذور."]),
          Q(["The eyepiece lens is 10× and the objective lens is 40×. What is the magnification?", "العدسة العينية ١٠× والعدسة الشيئية ٤٠×. ما قوة التكبير؟"],
            [["400×", "٤٠٠×"], ["50×", "٥٠×"], ["30×", "٣٠×"], ["4×", "٤×"]],
            ["Magnification = eyepiece × objective = " + eq("10 × 40 = 400") + ".", "قوة التكبير = العينية × الشيئية = " + eq("10 × 40 = 400") + "."],
            ["Multiply, do not add: 10 groups of 40.", "اضرب ولا تجمع: ١٠ مجموعات من ٤٠."]),
          Q(["When observing with a microscope, which magnification do you start with?", "عند الفحص بالمجهر، بأي تكبير نبدأ؟"],
            [["Low, because the field of view is wider", "الصغير، لأن مجال الرؤية أوسع"], ["High, because it is brighter", "الكبير، لأنه أكثر إضاءة"], ["The highest only", "الأكبر فقط"], ["It does not matter", "لا يهم"]],
            ["Low magnification has a wide, bright field of view, so it is easier to find what you want to see.", "التكبير الصغير مجاله واسع ومضيء، فيسهل العثور على ما نريد رؤيته."],
            ["Find the city on the map first, then zoom in on the street.", "ابحث عن المدينة في الخريطة أولًا، ثم كبّر على الشارع."]),
          Q(["While looking through the eyepiece, which way do you turn the adjustment knob to focus?", "أثناء النظر في العدسة العينية، في أي اتجاه نحرك الضابط لضبط الصورة؟"],
            [["To move the objective lens away from the slide", "لإبعاد العدسة الشيئية عن الشريحة"], ["To bring the objective lens closer to the slide", "لتقريب العدسة الشيئية من الشريحة"], ["Any direction quickly", "أي اتجاه بسرعة"], ["We do not turn it", "لا نحركه"]],
            ["First bring the lens close while looking from the side, then focus while moving it away, so the lens does not hit and break the slide.", "نقرّب العدسة أولًا ونحن ننظر من الجانب، ثم نضبط ونحن نبعدها، حتى لا تصطدم العدسة بالشريحة وتكسرها."],
            ["Close in carefully with your eyes on it, then back away slowly to focus.", "اقترب بحذر وعينك عليها، ثم ابتعد ببطء لتضبط الصورة."])
        ]
      }
    ]
  };

  var U3 = {
    id: "p5u3", num: 3, icon: "🐣", color: "orange",
    title: { en: "Growth and Reproduction", ar: "النمو والتكاثر" },
    lessons: [
      {
        id: "p5u3l1", icon: "👶", page: 64,
        title: { en: "Human Growth and Reproduction", ar: "نمو الإنسان وتكاثره" },
        idea: {
          official: {
            en: ["Reproduction is one of the ways for life to continue and for the species to be preserved. Through it, life continues across generations.",
              "Growth is a change in living things: as time passes, the body becomes bigger, stronger and more complex, through clearly defined stages.",
              "Infancy starts at birth, after about 9 months inside the mother's body. Infants are very small and depend completely on their mothers for food, care and protection.",
              "Childhood is when we start walking, talking and going to school, and bones and muscles get stronger. Growth continues through youth, adulthood and old age.",
              "Every human life begins from a father and a mother. Parents take care of and protect their children, and children look like their parents because they inherit features from them.",
              "Three conditions for healthy growth: a healthy diet, enough sleep and proper exercise."],
            ar: ["التكاثر من وسائل استمرار الحياة والحفاظ على النوع، وبه تستمر الحياة عبر الأجيال.",
              "النمو تغير يحدث للكائنات الحية: فمع مرور الوقت يصبح الجسم أكبر وأقوى وأكثر تعقيدًا، ويمر بمراحل محددة واضحة.",
              "تبدأ مرحلة الرضاعة عند الولادة بعد نحو ٩ أشهر داخل جسم الأم، ويكون الرضيع صغيرًا جدًا ويعتمد تمامًا على أمه في الغذاء والرعاية والحماية.",
              "مرحلة الطفولة هي التي نبدأ فيها المشي والكلام والذهاب إلى المدرسة، وتقوى العظام والعضلات، ثم يستمر النمو في مراحل الشباب والنضج والشيخوخة.",
              "تبدأ حياة كل إنسان من أب وأم، ويرعى الوالدان أبناءهما ويحميانهم، ويشبه الأبناء آباءهم لأنهم يرثون صفاتهم منهم.",
              "شروط النمو السليم ثلاثة: الغذاء الصحي، والنوم الكافي، والرياضة المناسبة."]
          },
          story: {
            en: ["Nour opens the family photo album with her grandfather in Alexandria.",
              "Here she is as a tiny baby drinking milk: infancy, when her mother did everything for her.",
              "Next is her first day at school with a big bag: childhood, when she could walk, talk and learn.",
              "Grandpa smiles: you have your father's eyes and your mother's smile. Those are features she inherited.",
              "To keep growing strong, Nour drinks milk, eats washed fruit, sleeps early and plays football at break."],
            ar: ["تفتح نور ألبوم صور العائلة مع جدها في الإسكندرية.",
              "هذه هي رضيعة صغيرة تشرب اللبن: مرحلة الرضاعة، حين كانت أمها تفعل كل شيء من أجلها.",
              "وهذه صورة أول يوم لها في المدرسة بحقيبة كبيرة: مرحلة الطفولة، حين صارت تمشي وتتكلم وتتعلم.",
              "يبتسم جدها: لك عينا أبيك وابتسامة أمك؛ إنها صفات ورثتها منهما.",
              "ولكي تظل تنمو قوية تشرب نور اللبن وتأكل الفاكهة المغسولة وتنام مبكرًا وتلعب الكرة في الفسحة."]
          }
        },
        words: [
          ["Growth", "النمو", "As time passes, the body becomes bigger, stronger and more complex.", "مع مرور الوقت يصبح الجسم أكبر وأقوى وأكثر تعقيدًا."],
          ["Reproduction", "التكاثر", "How life continues and the species is preserved across generations.", "وسيلة استمرار الحياة والحفاظ على النوع عبر الأجيال."],
          ["Infancy", "مرحلة الرضاعة", "The stage from birth when a baby depends completely on the mother.", "المرحلة من الولادة حين يعتمد الرضيع تمامًا على أمه."],
          ["Childhood", "مرحلة الطفولة", "Walking, talking and going to school; bones and muscles get stronger.", "المشي والكلام والذهاب إلى المدرسة، وتقوى العظام والعضلات."],
          ["Inherit", "يرث", "To get features from your father and mother.", "أن تأخذ صفات من أبيك وأمك."],
          ["Healthy growth", "النمو السليم", "Needs a healthy diet, enough sleep and proper exercise.", "يحتاج إلى غذاء صحي ونوم كافٍ ورياضة مناسبة."]
        ],
        lab: { parts: [{ type: "p5_life" }, {
          type: "sort",
          prompt: ["Tap an action, then tap the condition for healthy growth it belongs to.", "اضغط على عادة، ثم اختر شرط النمو السليم المناسب."],
          bins: [["diet", "🥛", "Healthy diet", "الغذاء الصحي"], ["sleep", "😴", "Enough sleep", "النوم الكافي"], ["ex", "⚽", "Proper exercise", "الرياضة المناسبة"]],
          items: [[["Drinking milk", "شرب اللبن"], "diet"], [["Eating washed vegetables and fruit", "أكل الخضراوات والفاكهة بعد غسلها"], "diet"],
            [["Going to bed early", "النوم مبكرًا"], "sleep"], [["Resting the brain at night", "إراحة المخ ليلًا"], "sleep"],
            [["Playing football at break", "لعب الكرة في الفسحة"], "ex"], [["Moving to make the heart and muscles stronger", "الحركة لتقوية القلب والعضلات"], "ex"]]
        }] },
        quiz: [
          Q(["Which is the correct order of the stages of human growth?", "ما الترتيب الصحيح لمراحل نمو الإنسان؟"],
            [["Infancy → childhood → youth → adulthood → old age", "الرضاعة ← الطفولة ← الشباب ← النضج ← الشيخوخة"], ["Childhood → youth → infancy → adulthood → old age", "الطفولة ← الشباب ← الرضاعة ← النضج ← الشيخوخة"], ["Infancy → youth → childhood → adulthood → old age", "الرضاعة ← الشباب ← الطفولة ← النضج ← الشيخوخة"], ["Youth → infancy → childhood → old age → adulthood", "الشباب ← الرضاعة ← الطفولة ← الشيخوخة ← النضج"]],
            ["The human body grows through clearly defined stages, starting with infancy.", "يمر جسم الإنسان بمراحل محددة واضحة تبدأ بمرحلة الرضاعة."],
            ["Nour's album goes page by page: baby, schoolgirl, and one day grown-up and grandma.", "ألبوم نور يسير صفحة صفحة: رضيعة، ثم تلميذة، ويومًا ما شابة ثم جدة."]),
          Q(["In which stage does a baby depend completely on the mother's milk and care?", "في أي مرحلة يعتمد الطفل تمامًا على لبن أمه ورعايتها؟"],
            [["Infancy", "الرضاعة"], ["Childhood", "الطفولة"], ["Youth", "الشباب"], ["Old age", "الشيخوخة"]],
            ["Infancy starts at birth; infants depend completely on their mothers for food, care and protection.", "تبدأ الرضاعة عند الولادة، ويعتمد الرضيع تمامًا على أمه في الغذاء والرعاية والحماية."],
            ["Baby Nour could not do anything alone; her mother did it all.", "الرضيعة نور لم تكن تستطيع فعل شيء وحدها، وأمها كانت تفعل كل شيء."]),
          Q(["Which is a feature of childhood?", "أي مما يلي من سمات مرحلة الطفولة؟"],
            [["Walking, talking and going to school", "المشي والكلام والذهاب إلى المدرسة"], ["Depending completely on the mother", "الاعتماد التام على الأم"], ["Being the smallest and unable to move", "أن يكون أصغر حجمًا ولا يستطيع الحركة"], ["Living inside the mother's body", "العيش داخل جسم الأم"]],
            ["In childhood we start walking, talking and going to school, and bones and muscles get stronger.", "في الطفولة نبدأ المشي والكلام والذهاب إلى المدرسة، وتقوى العظام والعضلات."],
            ["Nour's first school bag was nearly as big as she was.", "كانت حقيبة نور المدرسية الأولى تقريبًا بحجمها."]),
          Q(["How long does a baby spend inside the mother's body before birth?", "كم يقضي الجنين داخل جسم الأم قبل الولادة؟"],
            [["About 9 months", "نحو ٩ أشهر"], ["About 9 days", "نحو ٩ أيام"], ["About 9 years", "نحو ٩ سنوات"], ["About 9 weeks", "نحو ٩ أسابيع"]],
            ["The book says infancy starts at birth, after about 9 months inside the mother's body.", "يذكر الكتاب أن الرضاعة تبدأ عند الولادة بعد نحو ٩ أشهر داخل جسم الأم."],
            ["Nine months is about one school year.", "تسعة أشهر تقارب عامًا دراسيًا واحدًا."]),
          Q(["Why do children look like their parents?", "لماذا يشبه الأبناء آباءهم؟"],
            [["They inherit features from their father and mother", "لأنهم يرثون صفات من الأب والأم"], ["They always live together", "لأنهم يعيشون معًا دائمًا"], ["They eat the same food", "لأنهم يأكلون نفس الطعام"], ["They wear the same clothes", "لأنهم يرتدون نفس الملابس"]],
            ["Children inherit features from their father and mother.", "يرث الأبناء الصفات من الأب والأم."],
            ["Father's eyes and mother's smile, all in Nour.", "عينا الأب وابتسامة الأم، كلها في نور."]),
          Q(["What is the role of sleep in healthy growth?", "ما دور النوم في النمو السليم؟"],
            [["The brain rests and the body is built", "يرتاح المخ ويُبنى الجسم"], ["It makes the heart and muscles stronger by moving", "يقوي القلب والعضلات بالحركة"], ["It fills the stomach", "يملأ المعدة"], ["It is not needed", "غير ضروري"]],
            ["While you sleep, your brain rests and your body is built.", "أثناء النوم يرتاح المخ ويُبنى الجسم."],
            ["At night the body's builders work while you dream.", "في الليل يعمل بناة الجسم وأنت تحلم."]),
          Q(["Which are the three conditions for healthy growth?", "ما شروط النمو السليم الثلاثة؟"],
            [["Healthy diet, enough sleep, proper exercise", "غذاء صحي ونوم كافٍ ورياضة مناسبة"], ["Snacks, late nights, TV all day", "حلويات وسهر وتلفاز طوال اليوم"], ["Sleep only", "النوم فقط"], ["Exercise only", "الرياضة فقط"]],
            ["To grow strong and healthy we need a healthy diet, enough sleep and proper exercise.", "لننمو أقوياء أصحاء نحتاج إلى غذاء صحي ونوم كافٍ ورياضة مناسبة."],
            ["Milk and fruit, early bed, football at break: Nour's three secrets.", "اللبن والفاكهة، والنوم المبكر، والكرة في الفسحة: أسرار نور الثلاثة."])
        ]
      },
      {
        id: "p5u3l2", icon: "🐱", page: 72,
        title: { en: "Animal Growth and Reproduction", ar: "نمو الحيوان وتكاثره" },
        idea: {
          official: {
            en: ["The way new life is born differs between animals: some are born as babies, and some hatch from eggs.",
              "Cats give birth to babies. The mother carries them inside her body, then cleans them and feeds them her milk until they are strong. Kittens look like their parents.",
              "Fish like tilapia lay eggs. The mother releases many eggs into the water, and after some time babies come out of them. This is called hatching.",
              "Fish release a huge number of eggs to make sure that many small fish survive in the open water. Cats have only a few babies at a time.",
              "Reproduction is the ability of living things to create new individuals of the same kind, ensuring their survival on Earth.",
              "Countries set up nature reserves, like Ras Mohammed National Park and the White Desert National Park in Egypt, so animals can safely pass on life."],
            ar: ["تختلف طريقة ولادة الحياة الجديدة بين الحيوانات: فبعضها يولد صغارًا، وبعضها يفقس من البيض.",
              "القطط تلد صغارًا؛ تحملها الأم داخل جسمها ثم تنظفها وترضعها من لبنها حتى تقوى، والقطط الصغيرة تشبه آباءها.",
              "الأسماك مثل البلطي تبيض؛ تضع الأم بيضًا كثيرًا في الماء، وبعد فترة تخرج منه الصغار، ويسمى ذلك الفقس.",
              "تضع الأسماك عددًا ضخمًا من البيض لضمان بقاء كثير من الأسماك الصغيرة في المياه المفتوحة، أما القطط فتلد صغارًا قليلة في المرة الواحدة.",
              "التكاثر هو قدرة الكائنات الحية على إنتاج أفراد جديدة من نفس نوعها، مما يضمن بقاءها واستمرارها على الأرض.",
              "تنشئ الدول المحميات الطبيعية، مثل محمية رأس محمد ومحمية الصحراء البيضاء في مصر، لتتكاثر الحيوانات في أمان."]
          },
          story: {
            en: ["Hana's cat Lula in Giza disappears into a box in the cupboard one morning.",
              "That evening there are four tiny kittens. Lula licks them clean and they drink her milk.",
              "On a trip to a fish farm in Kafr El Sheikh, Hana sees a tilapia's eggs, so many she cannot count them.",
              "Tiny fish hatch and swim off. Many get eaten, which is why the mother lays so many eggs.",
              "Hana's teacher shows photos of Ras Mohammed, a nature reserve where sea animals can safely pass on life."],
            ar: ["تختفي لولا، قطة هنا في الجيزة، داخل صندوق في الدولاب ذات صباح.",
              "وفي المساء تظهر أربع قطط صغيرة جدًا، فتلعقها لولا لتنظفها وترضعها من لبنها.",
              "وفي رحلة إلى مزرعة سمكية في كفر الشيخ ترى هنا بيض سمكة البلطي، كثيرًا لدرجة أنها لا تستطيع عدّه.",
              "تفقس أسماك صغيرة وتسبح بعيدًا، ويُؤكل كثير منها، ولهذا تضع الأم بيضًا كثيرًا.",
              "وتعرض المعلمة صورًا لمحمية رأس محمد، حيث تتكاثر الكائنات البحرية في أمان."]
          }
        },
        words: [
          ["Give birth", "تلد", "To have babies that grew inside the mother's body, like cats.", "أن تضع صغارًا نمت داخل جسم الأم، مثل القطط."],
          ["Lay eggs", "تبيض", "To release eggs that babies hatch from, like fish.", "أن تضع بيضًا تفقس منه الصغار، مثل الأسماك."],
          ["Hatching", "الفقس", "When babies come out of eggs.", "خروج الصغار من البيض."],
          ["Mother's milk", "لبن الأم", "What newborn kittens drink to grow strong.", "ما ترضعه القطط حديثة الولادة لتقوى."],
          ["Reproduction", "التكاثر", "Making new individuals of the same kind to continue life.", "إنتاج أفراد جديدة من نفس النوع لاستمرار الحياة."],
          ["Nature reserve", "المحمية الطبيعية", "A protected place where animals can safely pass on life.", "مكان محمي تتكاثر فيه الحيوانات في أمان."]
        ],
        lab: { parts: [{ type: "p5_animals" }, {
          type: "sort",
          prompt: ["Tap an animal: does it give birth to babies or lay eggs?", "اضغط على حيوان: هل يلد أم يبيض؟"],
          bins: [["birth", "🍼", "Gives birth to babies", "يلد"], ["eggs", "🥚", "Lays eggs", "يبيض"]],
          items: [[["🐱 Cat", "🐱 القطة"], "birth"], [["🐶 Dog", "🐶 الكلب"], "birth"], [["🐪 Camel", "🐪 الجمل"], "birth"],
            [["🐔 Chicken", "🐔 الدجاجة"], "eggs"], [["🦆 Duck", "🦆 البطة"], "eggs"], [["🐟 Tilapia", "🐟 سمكة البلطي"], "eggs"], [["🐍 Snake", "🐍 الثعبان"], "eggs"], [["🐸 Frog", "🐸 الضفدع"], "eggs"]]
        }] },
        quiz: [
          Q(["How do cats have their babies?", "كيف تتكاثر القطط؟"],
            [["They give birth to babies", "تلد صغارًا"], ["They lay eggs", "تبيض"], ["They grow from seeds", "تنمو من بذور"], ["They divide in two", "تنقسم إلى اثنين"]],
            ["Cats belong to the animals that give birth to babies and feed them milk.", "القطط من الحيوانات التي تلد صغارها وترضعها اللبن."],
            ["Lula had four kittens in the cupboard box.", "ولدت لولا أربع قطط صغيرة في صندوق الدولاب."]),
          Q(["What do newborn kittens drink to grow?", "ماذا تشرب القطط حديثة الولادة لتنمو؟"],
            [["Their mother's milk", "لبن أمها"], ["Water only", "الماء فقط"], ["Juice", "العصير"], ["Nothing", "لا شيء"]],
            ["The mother cat raises her kittens by giving them her milk until their bodies are strong.", "ترعى القطة الأم صغارها بإرضاعهم لبنها حتى تقوى أجسامهم."],
            ["Four tiny mouths, one mother's milk.", "أربعة أفواه صغيرة ولبن أم واحدة."]),
          Q(["How do fish like tilapia reproduce?", "كيف تتكاثر الأسماك مثل البلطي؟"],
            [["They lay eggs", "تبيض"], ["They give birth to babies", "تلد صغارًا"], ["They divide in two", "تنقسم إلى اثنين"], ["They grow from seeds", "تنمو من بذور"]],
            ["A mother fish releases many eggs into the water.", "تضع السمكة الأم بيضًا كثيرًا في الماء."],
            ["Hana could not count the tilapia eggs.", "لم تستطع هنا عدّ بيض البلطي."]),
          Q(["What do we call it when baby fish come out of eggs?", "ماذا نسمي خروج صغار السمك من البيض؟"],
            [["Hatching", "الفقس"], ["Germination", "الإنبات"], ["Pollination", "التلقيح"], ["Hibernation", "البيات الشتوي"]],
            ["Babies hatch from the eggs released in the water. This is called hatching.", "تخرج الصغار من البيض الموضوع في الماء، ويسمى ذلك الفقس."],
            ["Pop! A tiny fish swims out of its egg.", "طق! سمكة صغيرة تسبح خارجة من بيضتها."]),
          Q(["Why do fish lay a huge number of eggs?", "لماذا تضع الأسماك عددًا ضخمًا من البيض؟"],
            [["So that many small fish can survive in the open water", "حتى يبقى كثير من الأسماك الصغيرة في المياه المفتوحة"], ["Because the water is very safe", "لأن الماء آمن جدًا"], ["To give them to other fish as presents", "لتهديها إلى أسماك أخرى"], ["Because they cannot swim", "لأنها لا تستطيع السباحة"]],
            ["Many small fish are lost in the open water, so laying many eggs makes sure some survive.", "يضيع كثير من الأسماك الصغيرة في المياه المفتوحة، فوضع بيض كثير يضمن بقاء بعضها."],
            ["Many tickets in the draw means at least some winners.", "تذاكر كثيرة في السحب تعني فائزين على الأقل."]),
          Q(["Where does a mother cat protect her babies before they are born?", "أين تحمي القطة الأم صغارها قبل ولادتهم؟"],
            [["Inside her own body", "داخل جسمها"], ["In the water", "في الماء"], ["In the soil", "في التربة"], ["In a nest of eggs", "في عش من البيض"]],
            ["The mother cat carries her babies inside her body and gives birth when they are ready.", "تحمل القطة الأم صغارها داخل جسمها وتلدهم عندما يكونون جاهزين."],
            ["Lula kept her kittens safe inside her until they were ready.", "حفظت لولا صغارها بداخلها حتى أصبحوا جاهزين."]),
          Q(["What are places protected by countries so animals can safely pass on life called?", "ماذا نسمي الأماكن التي تحميها الدول لتتكاثر الحيوانات في أمان؟"],
            [["Nature reserves", "المحميات الطبيعية"], ["Amusement parks", "مدن الملاهي"], ["Museums", "المتاحف"], ["Markets", "الأسواق"]],
            ["Countries set up nature reserves, like Ras Mohammed and the White Desert in Egypt.", "تنشئ الدول المحميات الطبيعية، مثل رأس محمد والصحراء البيضاء في مصر."],
            ["A safe home where animals can raise their young in peace.", "بيت آمن تربي فيه الحيوانات صغارها في هدوء."]),
          Q(["Which animal lays eggs?", "أي حيوان مما يلي يبيض؟"],
            [["Snake", "الثعبان"], ["Camel", "الجمل"], ["Cat", "القطة"], ["Dog", "الكلب"]],
            ["Snakes and frogs lay eggs; camels, cats and dogs give birth to babies.", "الثعابين والضفادع تبيض، والجمال والقطط والكلاب تلد."],
            ["The snake's babies wriggle out of eggs.", "صغار الثعبان تتلوى خارجة من البيض."])
        ]
      }
    ]
  };

  var U4 = {
    id: "p5u4", num: 4, icon: "🌦️", color: "blue",
    title: { en: "Weather and Water", ar: "الطقس والماء" },
    lessons: [
      {
        id: "p5u4l1", icon: "⛅", page: 80,
        title: { en: "Changes in Weather", ar: "التغيرات في الطقس" },
        idea: {
          official: {
            en: ["We use cloud cover to decide the weather. Think of the whole sky as 8 and count how much is covered by clouds, from 0 to 8.",
              "Cloud cover 0 to 6 means sunny. Cloud cover 7 to 8 means cloudy. If it is raining or snowing, the weather is rainy or snowy, whatever the cloud cover.",
              "Clouds move with the wind. In places like Egypt and Japan they generally move from west to east, so the weather also changes from west to east.",
              "To see clouds move, use something that does not move, like a building or a tree, as a reference point.",
              "Weather satellites take pictures from space; the white parts are clouds. If clouds in the west come closer, the weather will get worse.",
              "The satellite Meteosat watches Europe and Africa from about 35,800 km above the equator, and weather radar shows where it is raining right now."],
            ar: ["نستخدم كمية السحب لتحديد حالة الطقس؛ نعتبر السماء كلها ٨ أجزاء ونعدّ الأجزاء المغطاة بالسحب من ٠ إلى ٨.",
              "كمية السحب من ٠ إلى ٦ تعني طقسًا مشمسًا، ومن ٧ إلى ٨ تعني طقسًا غائمًا، وإذا كان المطر أو الثلج يتساقط فالطقس ممطر أو مثلج مهما كانت كمية السحب.",
              "تتحرك السحب مع الرياح، وفي أماكن مثل مصر واليابان تتحرك عادة من الغرب إلى الشرق، فيتغير الطقس أيضًا من الغرب إلى الشرق.",
              "لملاحظة حركة السحب نستخدم شيئًا ثابتًا مثل مبنى أو شجرة كنقطة مرجعية.",
              "تلتقط أقمار الطقس الصناعية صورًا من الفضاء، والأجزاء البيضاء فيها هي السحب، وإذا اقتربت السحب من الغرب فسيسوء الطقس.",
              "القمر الصناعي ميتيوسات يراقب أوروبا وأفريقيا من ارتفاع نحو ٣٥٨٠٠ كم فوق خط الاستواء، ورادار الطقس يبيّن أين يسقط المطر الآن."]
          },
          story: {
            en: ["On a school trip to Ismailia, Ali looks up and imagines the sky cut into 8 slices like a pizza.",
              "Five slices have clouds. Five is less than 7, so he writes Sunny in his notebook.",
              "He picks the mosque minaret as his reference point and watches every 15 minutes: the clouds drift from west to east.",
              "That evening, the weather forecast shows a big white cloud mass on the west side of the satellite map.",
              "Ali predicts: those clouds will reach us tomorrow, so take an umbrella. He was right!"],
            ar: ["في رحلة مدرسية إلى الإسماعيلية ينظر علي إلى السماء ويتخيلها مقسمة إلى ٨ قطع مثل البيتزا.",
              "خمس قطع بها سحب، والخمسة أقل من ٧، فيكتب في كراسته: مشمس.",
              "ويختار مئذنة المسجد نقطة مرجعية ويراقب كل ١٥ دقيقة، فيجد السحب تتحرك من الغرب إلى الشرق.",
              "وفي المساء تعرض النشرة الجوية كتلة سحب بيضاء كبيرة في غرب صورة القمر الصناعي.",
              "فيتوقع علي: ستصلنا هذه السحب غدًا، فلنأخذ مظلة. وقد كان محقًا!"]
          }
        },
        words: [
          ["Cloud cover", "كمية السحب", "How much of the sky (out of 8) is covered by clouds.", "مقدار ما تغطيه السحب من السماء (من ٨)."],
          ["Sunny", "مشمس", "Weather with cloud cover 0 to 6.", "طقس كمية السحب فيه من ٠ إلى ٦."],
          ["Cloudy", "غائم", "Weather with cloud cover 7 to 8.", "طقس كمية السحب فيه من ٧ إلى ٨."],
          ["Reference point", "النقطة المرجعية", "Something that does not move, used to see clouds moving.", "شيء ثابت نستخدمه لملاحظة حركة السحب."],
          ["Weather satellite", "القمر الصناعي للطقس", "Takes pictures of clouds from space; white parts are clouds.", "يصور السحب من الفضاء، والأجزاء البيضاء هي السحب."],
          ["Weather forecast", "التنبؤ بالطقس", "Telling future weather from cloud movement and wind.", "معرفة الطقس المتوقع من حركة السحب والرياح."],
          ["Khamsin", "رياح الخماسين", "A hot, dry sandstorm in Egypt between winter and summer.", "عاصفة رملية حارة جافة في مصر بين الشتاء والصيف."]
        ],
        lab: { parts: [{ type: "p5_weather" }] },
        quiz: [
          Q(["The cloud cover is 5. What is the weather?", "كمية السحب ٥. ما حالة الطقس؟"],
            [["Sunny", "مشمس"], ["Cloudy", "غائم"], ["Rainy", "ممطر"], ["Snowy", "مثلج"]],
            ["Cloud cover 0 to 6 is sunny.", "كمية السحب من ٠ إلى ٦ تعني مشمسًا."],
            ["Ali counted 5 slices out of 8: still sunny.", "عدّ علي ٥ قطع من ٨: ما زال مشمسًا."]),
          Q(["What is the minimum cloud cover for cloudy weather?", "ما أقل كمية سحب ليكون الطقس غائمًا؟"],
            [["7", "٧"], ["6", "٦"], ["1", "١"], ["4", "٤"]],
            ["Cloud cover 7 to 8 is cloudy.", "كمية السحب من ٧ إلى ٨ تعني غائمًا."],
            ["Seven or eight slices covered, and the pizza is cloudy.", "سبع أو ثماني قطع مغطاة، فالبيتزا غائمة."]),
          Q(["The cloud cover is 3, but it is raining. What is the weather?", "كمية السحب ٣ لكن المطر يتساقط. ما حالة الطقس؟"],
            [["Rainy", "ممطر"], ["Sunny", "مشمس"], ["Cloudy", "غائم"], ["Snowy", "مثلج"]],
            ["No matter the cloud cover, if it is raining the weather is rainy.", "مهما كانت كمية السحب، إذا كان المطر يتساقط فالطقس ممطر."],
            ["Rain wins over counting slices.", "المطر يتغلب على عدّ القطع."]),
          Q(["In Egypt, clouds generally move…", "في مصر تتحرك السحب عادة…"],
            [["from west to east", "من الغرب إلى الشرق"], ["from east to west", "من الشرق إلى الغرب"], ["from north to south", "من الشمال إلى الجنوب"], ["from south to north", "من الجنوب إلى الشمال"]],
            ["In places like Egypt and Japan, clouds generally move from west to east.", "في أماكن مثل مصر واليابان تتحرك السحب عادة من الغرب إلى الشرق."],
            ["Ali's clouds drifted past the minaret towards the east.", "مرت سحب علي بجوار المئذنة متجهة إلى الشرق."]),
          Q(["What should you use to observe cloud movement?", "ماذا نستخدم لملاحظة حركة السحب؟"],
            [["A reference point that does not move, like a building", "نقطة مرجعية ثابتة مثل مبنى"], ["A moving car", "سيارة متحركة"], ["A flying bird", "طائر يطير"], ["Another cloud", "سحابة أخرى"]],
            ["Use things that do not move, like buildings or trees, as reference points.", "نستخدم أشياء ثابتة مثل المباني والأشجار كنقاط مرجعية."],
            ["The minaret stood still while the clouds moved.", "ظلت المئذنة ثابتة بينما تحركت السحب."]),
          Q(["What do the white parts in weather satellite pictures show?", "ماذا تمثل الأجزاء البيضاء في صور أقمار الطقس الصناعية؟"],
            [["Clouds", "السحب"], ["Snow on the sea", "الثلج على البحر"], ["Deserts", "الصحاري"], ["Cities", "المدن"]],
            ["The white parts in satellite images are clouds.", "الأجزاء البيضاء في صور الأقمار الصناعية هي السحب."],
            ["From space, clouds look like cotton on the map.", "من الفضاء تبدو السحب مثل القطن على الخريطة."]),
          Q(["A big mass of clouds is coming from the west. What do you predict for tomorrow?", "كتلة سحب كبيرة قادمة من الغرب. ماذا تتوقع غدًا؟"],
            [["The weather will get worse (cloudy or rainy)", "سيسوء الطقس (غائم أو ممطر)"], ["Clear, sunny weather will continue", "سيستمر الطقس صحوًا مشمسًا"], ["It will snow in summer", "سيتساقط الثلج صيفًا"], ["We cannot predict anything", "لا يمكننا توقع شيء"]],
            ["Clouds move from west to east, so clouds in the west will come here and the weather will get worse.", "السحب تتحرك من الغرب إلى الشرق، فسحب الغرب ستصل إلينا ويسوء الطقس."],
            ["Ali took an umbrella, and he needed it.", "أخذ علي مظلة، واحتاج إليها فعلًا."])
        ]
      },
      {
        id: "p5u4l2", icon: "💧", page: 92,
        title: { en: "Water Cycle", ar: "دورة الماء" },
        idea: {
          official: {
            en: ["Evaporation is when water changes from its surface into invisible water vapour and goes into the air. This is why puddles and wet laundry dry.",
              "Evaporation happens faster when the temperature is high, when it is sunny and when there is wind.",
              "Condensation is when invisible water vapour in the air cools and changes back into liquid water, like the drops on a glass of ice water.",
              "The sun warms the sea and rivers; water evaporates and goes up, cools high in the sky and becomes clouds, then falls as rain, becomes a river and returns to the sea.",
              "This journey, sea → sky → land → sea, is called the water cycle. Water is always travelling while changing its state."],
            ar: ["التبخر هو تحول الماء من سطحه إلى بخار ماء غير مرئي ينتشر في الهواء، ولهذا تجف البرك والملابس المبللة.",
              "يحدث التبخر أسرع عندما ترتفع درجة الحرارة وعندما يكون الجو مشمسًا وعندما توجد رياح.",
              "التكثف هو تحول بخار الماء غير المرئي في الهواء عندما يبرد إلى ماء سائل، مثل القطرات على كوب ماء مثلج.",
              "تسخّن الشمس مياه البحار والأنهار فيتبخر الماء ويصعد، ويبرد في طبقات الجو العليا فيكوّن السحب، ثم يسقط مطرًا ويصبح نهرًا ويعود إلى البحر.",
              "هذه الرحلة: بحر ← سماء ← يابسة ← بحر تسمى دورة الماء في الطبيعة، فالماء يسافر دائمًا وهو يغيّر حالته."]
          },
          story: {
            en: ["In Luxor, Mohamed's mother hangs wet laundry on the balcony in the morning sun.",
              "By noon the shirts are dry. The water did not vanish: it evaporated into invisible water vapour.",
              "Mohamed takes a glass of iced karkade from the fridge, and drops appear on the outside. The vapour in the air cooled and condensed.",
              "On the Nile, he imagines the sun lifting water vapour high up, where it cools into clouds.",
              "Rain on the mountains of Ethiopia flows back down the river, past Luxor to the sea. Round and round!"],
            ar: ["في الأقصر تنشر أم محمد الغسيل المبلل في البلكونة تحت شمس الصباح.",
              "وعند الظهر تجف القمصان؛ فالماء لم يختفِ، بل تبخر إلى بخار ماء غير مرئي.",
              "ويخرج محمد كوب كركديه مثلج من الثلاجة فتظهر قطرات على سطحه الخارجي؛ لقد برد بخار الماء في الهواء فتكثف.",
              "وعلى ضفة النيل يتخيل الشمس ترفع بخار الماء عاليًا حيث يبرد ويصبح سحبًا.",
              "والمطر على جبال الحبشة يجري في النهر عائدًا مرورًا بالأقصر حتى البحر. وتستمر الدورة!"]
          }
        },
        words: [
          ["Evaporation", "التبخر", "Water changing from its surface into invisible water vapour.", "تحول الماء من سطحه إلى بخار ماء غير مرئي."],
          ["Water vapour", "بخار الماء", "Water as an invisible gas in the air.", "الماء في صورة غاز غير مرئي في الهواء."],
          ["Condensation", "التكثف", "Water vapour cooling and changing back into liquid water.", "تحول بخار الماء عندما يبرد إلى ماء سائل."],
          ["Cloud", "السحابة", "Water vapour that cooled high in the sky.", "بخار ماء برد في طبقات الجو العليا."],
          ["Rain", "المطر", "Water falling from clouds to the ground.", "الماء الساقط من السحب إلى الأرض."],
          ["Water cycle", "دورة الماء", "The journey of water: sea → sky → land → sea.", "رحلة الماء: بحر ← سماء ← يابسة ← بحر."]
        ],
        lab: { parts: [{ type: "p5_water" }, {
          type: "sort",
          prompt: ["Tap an example, then tap: evaporation or condensation?", "اضغط على مثال، ثم اختر: تبخر أم تكثف؟"],
          bins: [["ev", "♨️", "Evaporation", "التبخر"], ["co", "💧", "Condensation", "التكثف"]],
          items: [[["Wet laundry dries in the sun", "يجف الغسيل المبلل في الشمس"], "ev"], [["A puddle disappears after rain", "تختفي بركة بعد المطر"], "ev"], [["The Nile's water level slowly drops in summer", "ينخفض منسوب النيل ببطء صيفًا"], "ev"],
            [["Drops form on a glass of ice water", "تتكون قطرات على كوب ماء مثلج"], "co"], [["A window gets foggy on a cold morning", "يتغبش زجاج النافذة في صباح بارد"], "co"], [["Drops form on desert plants at night", "تتكون قطرات على نباتات الصحراء ليلًا"], "co"]]
        }] },
        quiz: [
          Q(["What is it called when water changes from its surface into invisible water vapour?", "ماذا نسمي تحول الماء من سطحه إلى بخار ماء غير مرئي؟"],
            [["Evaporation", "التبخر"], ["Condensation", "التكثف"], ["Germination", "الإنبات"], ["Pollination", "التلقيح"]],
            ["Evaporation: water changes into invisible water vapour and goes into the air.", "التبخر: يتحول الماء إلى بخار غير مرئي وينتشر في الهواء."],
            ["The water in the laundry flew off into the air, invisible.", "طار ماء الغسيل إلى الهواء دون أن نراه."]),
          Q(["On which day does laundry dry quickly?", "في أي يوم يجف الغسيل بسرعة؟"],
            [["A hot, sunny day", "يوم حار مشمس"], ["A cold, very cloudy day", "يوم بارد كثير السحب"], ["A rainy day", "يوم ممطر"], ["A still, cold night", "ليلة باردة ساكنة"]],
            ["Evaporation is faster when the temperature is high, when it is sunny and when it is windy.", "يكون التبخر أسرع عند ارتفاع الحرارة وسطوع الشمس ووجود الرياح."],
            ["Luxor sunshine dried the shirts by noon.", "جففت شمس الأقصر القمصان قبل الظهر."]),
          Q(["What is condensation?", "ما التكثف؟"],
            [["Water vapour cooling and changing into liquid water", "تحول بخار الماء عندما يبرد إلى ماء سائل"], ["Water changing into vapour", "تحول الماء إلى بخار"], ["Water turning into ice", "تحول الماء إلى ثلج"], ["Water soaking into soil", "تسرب الماء إلى التربة"]],
            ["Invisible water vapour in the air cools and changes into liquid water.", "بخار الماء غير المرئي في الهواء يبرد ويتحول إلى ماء سائل."],
            ["The vapour touched the cold glass and turned back into drops.", "لمس البخار الكوب البارد فعاد قطرات."]),
          Q(["Drops form on the outside of a glass of ice water. What was cooled?", "تتكون قطرات على السطح الخارجي لكوب ماء مثلج. ما الذي برد؟"],
            [["The water vapour in the air around the glass", "بخار الماء في الهواء حول الكوب"], ["The water inside the glass", "الماء داخل الكوب"], ["The glass leaked water", "الكوب سرّب الماء"], ["The table", "المنضدة"]],
            ["The water does not pass through the glass. Vapour in the surrounding air cools and condenses.", "الماء لا يمر عبر الزجاج، بل يبرد بخار الماء في الهواء المحيط ويتكثف."],
            ["Mohamed's karkade stayed inside; the drops came from the air.", "بقي كركديه محمد بالداخل، والقطرات جاءت من الهواء."]),
          Q(["Which is an example of condensation?", "أي مما يلي مثال على التكثف؟"],
            [["A window becomes foggy with drops on a cold morning", "يتغبش زجاج النافذة وتتكون قطرات في صباح بارد"], ["Water turns into ice in a freezer", "يتحول الماء إلى ثلج في الفريزر"], ["Hot water boils in a pot", "يغلي الماء في الإناء"], ["A puddle dries", "تجف بركة ماء"]],
            ["Vapour in the room cools on the cold glass and becomes drops.", "يبرد بخار الماء في الغرفة على الزجاج البارد ويصبح قطرات."],
            ["The cold window catches the room's invisible vapour.", "النافذة الباردة تلتقط بخار الغرفة غير المرئي."]),
          Q(["Which is the correct order of the water cycle?", "ما الترتيب الصحيح لدورة الماء؟"],
            [["Evaporates from the sea → becomes clouds → rains → returns to the sea", "يتبخر من البحر ← يكوّن السحب ← يسقط مطرًا ← يعود إلى البحر"], ["Rains → evaporates → returns to the sea → becomes clouds", "يسقط مطرًا ← يتبخر ← يعود إلى البحر ← يكوّن السحب"], ["Evaporates → flows into a river → rains → clouds", "يتبخر ← يجري في نهر ← يسقط مطرًا ← سحب"], ["Clouds → sea → evaporates → river", "سحب ← بحر ← يتبخر ← نهر"]],
            ["Sea → sky → land → sea: evaporation, clouds, rain, river, sea.", "بحر ← سماء ← يابسة ← بحر: تبخر ثم سحب ثم مطر ثم نهر ثم بحر."],
            ["Water's round trip ticket always comes home to the sea.", "تذكرة الماء ذهابًا وعودة تعيده دائمًا إلى البحر."]),
          Q(["What is needed for water from the sea to evaporate and go up into the sky?", "ما الذي يلزم ليتبخر ماء البحر ويصعد إلى السماء؟"],
            [["Heat from the sun", "حرارة الشمس"], ["The cold of a dark night", "برودة الليل المظلم"], ["Light from the stars", "ضوء النجوم"], ["Fertilizer", "السماد"]],
            ["Water in the sea and rivers is warmed by the sun and evaporates.", "تسخّن الشمس مياه البحار والأنهار فتتبخر."],
            ["The sun is the engine of the water cycle.", "الشمس هي محرك دورة الماء."])
        ]
      }
    ]
  };

  E.SCIG.p5 = { units: [U1, U2, U3, U4], book: { en: "Science, Primary 5, Term 1 (Ministry of Education, 2026-2027)", ar: "العلوم، الصف الخامس الابتدائي، الفصل الدراسي الأول (وزارة التربية والتعليم ٢٠٢٦-٢٠٢٧)" } };

  /* ======================= OBJECTIVES ======================= */
  var OBJ = E.SCI3_OBJ = E.SCI3_OBJ || {};
  OBJ.p5u1l1 = { en: ["How muscles contract and relax to move bones", "Inner and outer arm muscles working in turns", "Joints and the cartilage cushion", "The skeleton: skull, ribs and backbone", "Bones and muscles in animals"],
    ar: ["كيف تنقبض العضلات وتنبسط لتحريك العظام", "عمل عضلتي الذراع الداخلية والخارجية بالتناوب", "المفاصل ووسادة الغضروف", "الهيكل العظمي: الجمجمة والضلوع والعمود الفقري", "العظام والعضلات في الحيوانات"] };
  OBJ.p5u1l2 = { en: ["A plant's yearly cycle and temperature", "Seeds left for the next generation", "Temperature and animal activity", "Hibernation and winter visitors"],
    ar: ["الدورة السنوية للنبات ودرجة الحرارة", "البذور التي تبقى للجيل التالي", "درجة الحرارة ونشاط الحيوانات", "البيات الشتوي وزوار الشتاء"] };
  OBJ.p5u2l1 = { en: ["Inside a seed: embryo and cotyledons", "The iodine test for starch", "Planning a fair test", "Water, air and warmth for germination"],
    ar: ["داخل البذرة: الجنين والفلقتان", "الكشف عن النشا بمحلول اليود", "تخطيط تجربة عادلة", "الماء والهواء والدفء شروط الإنبات"] };
  OBJ.p5u2l2 = { en: ["Sunlight and healthy growth", "Fertilizer and bigger plants", "Conditions to change and to keep the same", "Recording growth over time"],
    ar: ["ضوء الشمس والنمو السليم", "السماد ونمو النبات", "الشرط المتغير والشروط الثابتة", "تسجيل النمو مع مرور الوقت"] };
  OBJ.p5u2l3 = { en: ["Male and female luffa flowers", "Pollen and pollination by bees", "From swelling to fruit with seeds", "Using a microscope and magnification"],
    ar: ["الزهرة المذكرة والمؤنثة في اللوف", "حبوب اللقاح والتلقيح بالنحل", "من الانتفاخ إلى ثمرة بها بذور", "استخدام المجهر وقوة التكبير"] };
  OBJ.p5u3l1 = { en: ["Growth and reproduction", "Stages from infancy to old age", "Why children look like their parents", "Diet, sleep and exercise for healthy growth"],
    ar: ["النمو والتكاثر", "المراحل من الرضاعة إلى الشيخوخة", "لماذا يشبه الأبناء آباءهم", "الغذاء والنوم والرياضة للنمو السليم"] };
  OBJ.p5u3l2 = { en: ["Animals that give birth: cats", "Animals that lay eggs: fish and hatching", "Why fish lay so many eggs", "Nature reserves preserve species"],
    ar: ["حيوانات تلد: القطط", "حيوانات تبيض: الأسماك والفقس", "لماذا تضع الأسماك بيضًا كثيرًا", "المحميات الطبيعية تحافظ على الأنواع"] };
  OBJ.p5u4l1 = { en: ["Cloud cover from 0 to 8", "Sunny, cloudy or rainy", "Clouds move from west to east", "Satellite images and forecasts"],
    ar: ["كمية السحب من ٠ إلى ٨", "مشمس أو غائم أو ممطر", "السحب تتحرك من الغرب إلى الشرق", "صور الأقمار الصناعية والتنبؤ بالطقس"] };
  OBJ.p5u4l2 = { en: ["Evaporation and what speeds it up", "Condensation of water vapour", "The water cycle: sea, sky, land, sea", "The sun as the cycle's engine"],
    ar: ["التبخر وما يسرّعه", "تكثف بخار الماء", "دورة الماء: بحر وسماء ويابسة وبحر", "الشمس محرك الدورة"] };

  /* ======================= EXTRA QUIZ ITEMS ======================= */
  var EX = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  EX.p5u1l1 = [
    { k: "match", q: ["Match each bone to its job.", "صِل كل عظمة بوظيفتها."],
      pairs: [[["Skull", "الجمجمة"], ["Protects the brain like a helmet", "تحمي المخ مثل الخوذة"]], [["Ribs", "الضلوع"], ["Protect the heart and lungs", "تحمي القلب والرئتين"]],
        [["Backbone", "العمود الفقري"], ["Supports the body and lets it bend", "يدعم الجسم ويسمح بالانحناء"]], [["Cartilage", "الغضروف"], ["Cushion between bones in a joint", "وسادة بين العظام في المفصل"]]],
      off: ["The skull protects the brain, the ribs the heart and lungs, the backbone supports and bends, and cartilage cushions joints.", "الجمجمة تحمي المخ، والضلوع تحمي القلب والرئتين، والعمود الفقري يدعم وينحني، والغضروف وسادة المفاصل."],
      sto: ["A helmet, a cage, a pillar and a pillow: the body's four helpers.", "خوذة وقفص وعمود ووسادة: أربعة مساعدين للجسم."] },
    { k: "tf", q: ["True or false: muscles move the body by pushing the bones.", "صواب أم خطأ: العضلات تحرك الجسم بدفع العظام."], a: false,
      off: ["False. Muscles contract and pull the bones.", "خطأ؛ العضلات تنقبض وتشد العظام."],
      sto: ["A rope can pull, but it cannot push.", "الحبل يشد لكنه لا يدفع."] }
  ];
  EX.p5u1l2 = [
    { k: "order", q: ["Put a luffa's yearly cycle in order.", "رتّب الدورة السنوية لنبات اللوف."],
      items: [["Seeds sprout in the warm season", "تنبت البذور في الفصل الدافئ"], ["Stems grow tall and leaves spread", "تطول السيقان وتتسع الأوراق"], ["Flowers bloom", "تتفتح الأزهار"], ["Fruit grows", "تنمو الثمار"], ["The plant withers and leaves seeds", "يذبل النبات ويترك البذور"]],
      off: ["Seeds sprout, the plant grows, flowers bloom, fruit grows, then it withers and leaves seeds.", "تنبت البذور وينمو النبات وتتفتح الأزهار وتنمو الثمار ثم يذبل ويترك البذور."],
      sto: ["Salma's roof luffa from spring to winter.", "لوف سطح سلمى من الربيع إلى الشتاء."] },
    { k: "tf", q: ["True or false: lizards become slow when the temperature is low.", "صواب أم خطأ: تصبح السحالي بطيئة عندما تنخفض درجة الحرارة."], a: true,
      off: ["True. Lizards move slowly when it is cold and hibernate in winter.", "صواب؛ تتحرك السحالي ببطء في البرد وتدخل في بيات شتوي."],
      sto: ["A cold lizard is a phone with a flat battery.", "السحلية الباردة مثل هاتف بطاريته فارغة."] }
  ];
  EX.p5u2l1 = [
    { k: "match", q: ["Match each cup to the reason it did not sprout.", "صِل كل كوب بسبب عدم إنباته."],
      pairs: [[["Dry cotton", "قطن جاف"], ["No water", "لا يوجد ماء"]], [["Seeds under water", "بذور مغمورة بالماء"], ["No air", "لا يوجد هواء"]],
        [["In the refrigerator", "في الثلاجة"], ["Temperature too low", "درجة الحرارة منخفضة جدًا"]]],
      off: ["Each missing condition stops germination: water, air or an appropriate temperature.", "غياب أي شرط يمنع الإنبات: الماء أو الهواء أو درجة الحرارة المناسبة."],
      sto: ["Omar's three failed cups each lacked one thing.", "كل كوب فشل عند عمر كان ينقصه شيء واحد."] },
    { k: "tf", q: ["True or false: seeds on wet cotton in a dark, warm box will germinate.", "صواب أم خطأ: البذور على قطن مبلل في صندوق مظلم دافئ تنبت."], a: true,
      off: ["True. They have water, air and warmth; light is not needed for germination.", "صواب؛ فلديها الماء والهواء والدفء، والضوء غير ضروري للإنبات."],
      sto: ["The seed packs its own lunch, so it can start in the dark.", "البذرة تحمل غداءها، فتبدأ حتى في الظلام."] }
  ];
  EX.p5u2l2 = [
    { k: "tf", q: ["True or false: to test fertilizer, put one pot in the sun and the other in the dark.", "صواب أم خطأ: لدراسة السماد نضع أصيصًا في الشمس والآخر في الظلام."], a: false,
      off: ["False. That changes sunlight too. Change only the fertilizer; keep sunlight the same.", "خطأ؛ هكذا نغيّر الضوء أيضًا. نغيّر السماد فقط ونثبّت الضوء."],
      sto: ["Change two things and you cannot tell which one worked.", "إذا غيّرت شيئين فلن تعرف أيهما السبب."] },
    { k: "order", q: ["Put the steps of the sunlight experiment in order.", "رتّب خطوات تجربة ضوء الشمس."],
      items: [["Choose 2 seedlings of the same size", "اختر شتلتين متساويتين في الحجم"], ["Put pot A in the sun and cover pot B with a box", "ضع الأصيص أ في الشمس وغطِّ الأصيص ب بصندوق"], ["Give both the same water for a week", "اسقِ الاثنين بنفس الماء لمدة أسبوع"], ["Compare leaf colour and stem thickness", "قارن لون الأوراق وسُمك الساق"]],
      off: ["Same seedlings, change only the light, keep the rest the same, then compare.", "شتلتان متماثلتان، نغيّر الضوء فقط ونثبّت الباقي، ثم نقارن."],
      sto: ["Mariam's two pots in Fayoum.", "أصيصا مريم في الفيوم."] }
  ];
  EX.p5u2l3 = [
    { k: "order", q: ["Put the microscope steps in order.", "رتّب خطوات استخدام المجهر."],
      items: [["Adjust the reflector to make the view bright", "اضبط المرآة العاكسة لتصبح الرؤية مضيئة"], ["Put the prepared slide on the stage", "ضع الشريحة على المنضدة"], ["Looking from the side, bring the slide and objective lens close", "وأنت تنظر من الجانب قرّب الشريحة من العدسة الشيئية"], ["Focus while moving the objective lens away", "اضبط الصورة وأنت تبعد العدسة الشيئية"]],
      off: ["Bright view, slide on the stage, close in from the side, then focus while moving away. This order is from the book's exercise.", "رؤية مضيئة، ثم الشريحة على المنضدة، ثم التقريب من الجانب، ثم الضبط أثناء الإبعاد، وهذا ترتيب تدريب الكتاب."],
      sto: ["Light on, slide in, close in carefully, back off to focus.", "أضئ، ضع الشريحة، اقترب بحذر، ابتعد لتضبط."] },
    { k: "tf", q: ["True or false: in a microscope the image looks upside down and left-right reversed.", "صواب أم خطأ: في المجهر تظهر الصورة مقلوبة ومعكوسة."], a: true,
      off: ["True. So you move the slide in the opposite direction to where you want the image to go.", "صواب؛ لذلك نحرك الشريحة في عكس الاتجاه الذي نريد أن تتحرك فيه الصورة."],
      sto: ["The microscope is a mirror that also stands on its head.", "المجهر مرآة تقف على رأسها أيضًا."] }
  ];
  EX.p5u3l1 = [
    { k: "order", q: ["Put the stages of human growth in order.", "رتّب مراحل نمو الإنسان."],
      items: [["Infancy", "الرضاعة"], ["Childhood", "الطفولة"], ["Youth", "الشباب"], ["Adulthood", "النضج"], ["Old age", "الشيخوخة"]],
      off: ["Infancy, childhood, youth, adulthood, old age.", "الرضاعة ثم الطفولة ثم الشباب ثم النضج ثم الشيخوخة."],
      sto: ["Nour's album, page by page.", "ألبوم نور صفحة صفحة."] },
    { k: "tf", q: ["True or false: parents take care of and protect their children until they grow up.", "صواب أم خطأ: يرعى الوالدان أبناءهما ويحميانهم حتى يكبروا."], a: true,
      off: ["True. This is the parents' role in passing on human life.", "صواب؛ وهذا هو دور الوالدين في استمرار الحياة."],
      sto: ["Like Nour's mother, who did everything for baby Nour.", "مثل أم نور التي كانت تفعل كل شيء لنور الرضيعة."] }
  ];
  EX.p5u3l2 = [
    { k: "match", q: ["Match each animal to how its babies are born.", "صِل كل حيوان بطريقة ولادة صغاره."],
      pairs: [[["Cat", "القطة"], ["Gives birth and feeds milk", "تلد وترضع"]], [["Tilapia", "البلطي"], ["Lays many eggs in water", "تضع بيضًا كثيرًا في الماء"]],
        [["Chicken", "الدجاجة"], ["Lays eggs on land", "تبيض على اليابسة"]], [["Camel", "الجمل"], ["Gives birth on land", "يلد على اليابسة"]]],
      off: ["Cats and camels give birth; tilapia and chickens lay eggs.", "القطط والجمال تلد، والبلطي والدجاج يبيض."],
      sto: ["Hana's cat had kittens; the fish farm was full of eggs.", "قطة هنا ولدت صغارًا، والمزرعة السمكية كانت مليئة بالبيض."] },
    { k: "tf", q: ["True or false: a cat gives birth to many more babies at a time than a fish lays eggs.", "صواب أم خطأ: تلد القطة صغارًا في المرة الواحدة أكثر مما تضع السمكة من بيض."], a: false,
      off: ["False. Cats have only a few babies; fish lay countless eggs.", "خطأ؛ القطة تلد صغارًا قليلة، والسمكة تضع بيضًا لا يُعد."],
      sto: ["Four kittens versus thousands of eggs.", "أربع قطط صغيرة مقابل آلاف البيض."] }
  ];
  EX.p5u4l1 = [
    { k: "match", q: ["Match each sky to its weather.", "صِل كل سماء بحالة الطقس."],
      pairs: [[["Cloud cover 2", "كمية السحب ٢"], ["Sunny", "مشمس"]], [["Cloud cover 8", "كمية السحب ٨"], ["Cloudy", "غائم"]], [["Cloud cover 4 and raining", "كمية السحب ٤ والمطر يتساقط"], ["Rainy", "ممطر"]]],
      off: ["0 to 6 sunny, 7 to 8 cloudy, and rain makes it rainy whatever the cover.", "من ٠ إلى ٦ مشمس، و٧ إلى ٨ غائم، والمطر يجعله ممطرًا مهما كانت كمية السحب."],
      sto: ["Count the pizza slices, but rain beats the count.", "عدّ قطع البيتزا، لكن المطر يغلب العدّ."] },
    { k: "tf", q: ["True or false: rain clouds seen in the west will soon come here.", "صواب أم خطأ: سحب المطر التي نراها في الغرب ستصل إلينا قريبًا."], a: true,
      off: ["True. Clouds generally move from west to east.", "صواب؛ فالسحب تتحرك عادة من الغرب إلى الشرق."],
      sto: ["Ali saw the west clouds on TV and took his umbrella.", "رأى علي سحب الغرب في التلفاز فأخذ مظلته."] }
  ];
  EX.p5u4l2 = [
    { k: "order", q: ["Put the water cycle in order, starting at the sea.", "رتّب دورة الماء بدءًا من البحر."],
      items: [["The sun warms the sea", "تسخّن الشمس البحر"], ["Water evaporates into water vapour", "يتبخر الماء إلى بخار"], ["Vapour cools and becomes clouds", "يبرد البخار ويكوّن السحب"], ["Rain falls on the land", "يسقط المطر على اليابسة"], ["Rivers carry the water back to the sea", "تحمل الأنهار الماء عائدًا إلى البحر"]],
      off: ["Sea → sky → land → sea: the water cycle.", "بحر ← سماء ← يابسة ← بحر: دورة الماء."],
      sto: ["Water's journey from the Mediterranean to Ethiopia's mountains and back down the Nile.", "رحلة الماء من البحر المتوسط إلى جبال الحبشة ثم عودته في النيل."] },
    { k: "tf", q: ["True or false: water still evaporates from a container covered with plastic wrap as fast as from an open one.", "صواب أم خطأ: يتبخر الماء من إناء مغطى بالبلاستيك بنفس سرعة تبخره من إناء مكشوف."], a: false,
      off: ["False. In the book's experiment, the uncovered beaker loses more water; the cover keeps the vapour in.", "خطأ؛ في تجربة الكتاب يفقد الكأس المكشوف ماءً أكثر، فالغطاء يحبس البخار."],
      sto: ["The lid is a closed door the vapour cannot leave through.", "الغطاء باب مغلق لا يخرج منه البخار."] }
  ];

  /* ======================= DIAGRAMS (viewBox 0 0 400 240) ======================= */
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 12) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function G(s) { return '<g direction="ltr">' + s + "</g>"; }

  D.p5u1l1 = {
    title: ["The skeleton and the arm muscles", "الهيكل العظمي وعضلات الذراع"],
    svg: function () {
      var s = '<circle cx="110" cy="40" r="24" fill="var(--bg-2)" stroke="var(--muted)" stroke-width="4"/><circle cx="101" cy="38" r="5" fill="var(--muted)"/><circle cx="119" cy="38" r="5" fill="var(--muted)"/>';
      for (var i = 0; i < 9; i++) s += '<rect x="104" y="' + (70 + i * 14) + '" width="12" height="10" rx="3" fill="var(--muted)"/>';
      for (i = 0; i < 5; i++) s += '<path d="M106 ' + (82 + i * 12) + ' Q80 ' + (88 + i * 12) + ' 84 ' + (104 + i * 12) + ' M114 ' + (82 + i * 12) + ' Q140 ' + (88 + i * 12) + ' 136 ' + (104 + i * 12) + '" stroke="var(--muted)" stroke-width="3" fill="none"/>';
      s += '<path d="M110 196 L92 232 M110 196 L128 232" stroke="var(--muted)" stroke-width="6" stroke-linecap="round"/>';
      // arm
      s += '<line x1="230" y1="60" x2="230" y2="150" stroke="var(--muted)" stroke-opacity=".55" stroke-width="12" stroke-linecap="round"/><line x1="230" y1="150" x2="330" y2="96" stroke="var(--muted)" stroke-opacity=".55" stroke-width="10" stroke-linecap="round"/><circle cx="336" cy="93" r="10" fill="#fdba74"/>';
      s += '<ellipse cx="243" cy="105" rx="13" ry="34" fill="#f87171" stroke="#b91c1c" stroke-width="2"/><ellipse cx="217" cy="105" rx="7" ry="36" fill="#fca5a5" stroke="#b91c1c" stroke-width="1.5"/>';
      s += '<circle cx="230" cy="150" r="10" fill="var(--blue-soft)" stroke="#2563eb" stroke-width="3"/>';
      s += tx(110, 14, t("skull", "الجمجمة"), mut) + tx(300, 175, t("bent arm", "ذراع مثنية"), mut) + tx(262, 60, t("biceps", "ذات الرأسين"), mut, 11) + tx(186, 60, t("triceps", "ذات الثلاث رؤوس"), mut, 11);
      return G(s);
    },
    spots: [
      [110, 40, ["Skull", "الجمجمة"], ["Wraps and protects the soft brain like a helmet.", "تغلّف المخ اللين وتحميه مثل الخوذة."]],
      [110, 100, ["Ribs", "الضلوع"], ["Protect the heart and lungs in a cage-like shape.", "تحمي القلب والرئتين على شكل قفص."]],
      [110, 175, ["Backbone", "العمود الفقري"], ["Many small connected bones: the pillar of the body that lets you bend.", "عظام صغيرة كثيرة متصلة: عمود الجسم الذي يسمح بالانحناء."]],
      [243, 105, ["Inner muscle (biceps)", "العضلة الداخلية (ذات الرأسين)"], ["Contracts, gets thick and hard, when you bend your arm.", "تنقبض وتغلظ وتصلب عند ثني الذراع."]],
      [217, 125, ["Outer muscle (triceps)", "العضلة الخارجية (ذات الثلاث رؤوس)"], ["Relaxes when you bend; contracts when you stretch your arm.", "تنبسط عند الثني وتنقبض عند فرد الذراع."]],
      [230, 150, ["Elbow joint", "مفصل المرفق"], ["Where bones connect. Cartilage cushions the bone ends. The elbow bends in one direction only.", "مكان اتصال العظام، والغضروف يحمي أطرافها، والمرفق ينثني في اتجاه واحد فقط."]]
    ]
  };

  D.p5u1l2 = {
    title: ["A year of changes", "تغيرات على مدار العام"],
    svg: function () {
      var s = '<rect x="10" y="20" width="185" height="200" rx="16" fill="var(--orange-soft)"/><rect x="205" y="20" width="185" height="200" rx="16" fill="var(--blue-soft)"/>';
      s += tx(102, 40, t("High temperature", "حرارة مرتفعة")) + tx(297, 40, t("Low temperature", "حرارة منخفضة"));
      s += '<circle cx="170" cy="62" r="13" fill="#facc15"/>';
      s += '<path d="M60 200 Q55 140 75 90" stroke="#16a34a" stroke-width="5" fill="none"/><ellipse cx="50" cy="140" rx="18" ry="10" fill="#22c55e"/><ellipse cx="88" cy="120" rx="18" ry="10" fill="#22c55e"/><circle cx="78" cy="88" r="9" fill="#facc15"/><rect x="92" y="150" width="10" height="34" rx="5" fill="#65a30d"/>';
      s += '<ellipse cx="145" cy="190" rx="34" ry="8" fill="#a8a29e"/><path d="M125 182 q12 -10 26 -4 q8 3 18 -2" stroke="#15803d" stroke-width="7" fill="none" stroke-linecap="round"/>';
      s += '<path d="M255 200 Q250 160 262 130" stroke="#a16207" stroke-width="4" fill="none"/><rect x="266" y="140" width="11" height="34" rx="5" fill="#92400e"/><circle cx="276" cy="190" r="3" fill="#1f2937"/><circle cx="284" cy="194" r="3" fill="#1f2937"/>';
      s += '<path d="M310 200 L330 160 L350 200 Z" fill="#a8a29e"/><path d="M326 196 l6 -24" stroke="var(--bg-2)" stroke-width="4"/><path d="M322 192 q6 -4 12 0" stroke="#15803d" stroke-width="4" fill="none"/>';
      s += '<path d="M350 90 q8 -18 4 -36 M354 54 q10 -4 14 4" stroke="#f472b6" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M350 90 l-4 30 M350 90 l6 30" stroke="#f472b6" stroke-width="2"/>';
      return G(s);
    },
    spots: [
      [78, 100, ["Flowers bloom", "تتفتح الأزهار"], ["In the warm season stems grow tall, leaves spread wide and flowers bloom.", "في الفصل الدافئ تطول السيقان وتتسع الأوراق وتتفتح الأزهار."]],
      [97, 165, ["Fruit grows", "تنمو الثمار"], ["After the flowers, the luffa fruit grows. The order: sprout, flower, fruit.", "بعد الأزهار تنمو ثمرة اللوف، والترتيب: إنبات ثم زهرة ثم ثمرة."]],
      [145, 182, ["Lizard basking", "سحلية تتشمس"], ["When it is warm, lizards are active and move quickly.", "عندما يدفأ الجو تنشط السحالي وتتحرك بسرعة."]],
      [272, 170, ["Withered plant with seeds", "نبات ذابل وبذور"], ["In the cold the plant withers but leaves seeds that sprout next year.", "في البرد يذبل النبات لكنه يترك بذورًا تنبت في العام القادم."]],
      [330, 188, ["Hibernation", "البيات الشتوي"], ["In cold winters lizards stay still in rock crevices or soil to save energy.", "في الشتاء البارد تسكن السحالي في شقوق الصخور أو التربة لتوفير الطاقة."]],
      [355, 75, ["Winter visitors", "زوار الشتاء"], ["Flamingos and ducks come to warm Egypt to spend the winter.", "يأتي الفلامنجو والبط إلى مصر الدافئة ليقضي الشتاء."]]
    ]
  };

  D.p5u2l1 = {
    title: ["Inside a kidney bean seed", "داخل بذرة الفاصوليا"],
    svg: function () {
      var s = '<ellipse cx="110" cy="120" rx="90" ry="62" fill="#fde68a" stroke="#a16207" stroke-width="5"/><path d="M110 60 L110 180" stroke="#a16207" stroke-width="2" stroke-dasharray="5 4"/>';
      s += '<path d="M150 92 q20 4 18 24 q-4 10 -14 6" fill="#86efac" stroke="#15803d" stroke-width="2"/>';
      s += '<ellipse cx="290" cy="90" rx="52" ry="34" fill="#1e3a8a" stroke="#0f172a" stroke-width="3"/>' + tx(290, 140, t("iodine on starch", "اليود على النشا"), mut);
      s += '<rect x="215" y="170" width="50" height="50" rx="8" fill="var(--blue-soft)"/><rect x="275" y="170" width="50" height="50" rx="8" fill="var(--blue-soft)"/><rect x="335" y="170" width="50" height="50" rx="8" fill="var(--orange-soft)"/>';
      s += tx(240, 200, "💧", "", 20) + tx(300, 200, "💨", "", 20) + tx(360, 200, "🌡️", "", 20);
      return G(s);
    },
    spots: [
      [70, 120, ["Cotyledon", "الفلقة"], ["Makes up most of the seed and is packed with starch, the food for germination.", "تكوّن معظم البذرة ومملوءة بالنشا غذاء الإنبات."]],
      [158, 108, ["Embryo", "الجنين"], ["The part that will become leaves, stems and roots.", "الجزء الذي سيصبح أوراقًا وساقًا وجذورًا."]],
      [110, 62, ["Seed coat", "القصرة"], ["Soak the bean overnight, peel the coat and split it into its two cotyledons.", "انقع البذرة ليلة ثم انزع القصرة وافصلها إلى فلقتيها."]],
      [290, 90, ["Iodine test", "الكشف باليود"], ["Iodine solution turns starch blue-black.", "محلول اليود يحوّل النشا إلى الأزرق الداكن."]],
      [300, 195, ["Three conditions", "الشروط الثلاثة"], ["Water, air and an appropriate temperature are all needed for germination.", "الماء والهواء ودرجة الحرارة المناسبة كلها ضرورية للإنبات."]]
    ]
  };

  D.p5u2l2 = {
    title: ["A fair test for sunlight", "تجربة عادلة لضوء الشمس"],
    svg: function () {
      var s = '<circle cx="40" cy="40" r="20" fill="#facc15"/>';
      s += '<path d="M60 205 L70 235 L130 235 L140 205 Z" fill="#b45309"/><path d="M100 205 L100 110" stroke="#15803d" stroke-width="8"/><ellipse cx="78" cy="130" rx="24" ry="12" fill="#15803d"/><ellipse cx="122" cy="115" rx="24" ry="12" fill="#15803d"/><ellipse cx="80" cy="165" rx="22" ry="11" fill="#16a34a"/>';
      s += '<path d="M250 205 L260 235 L320 235 L330 205 Z" fill="#b45309"/><path d="M290 205 Q286 120 292 70" stroke="#d9f99d" stroke-width="3" fill="none"/><ellipse cx="278" cy="74" rx="12" ry="6" fill="#fde047"/><ellipse cx="304" cy="70" rx="12" ry="6" fill="#fde047"/>';
      s += '<rect x="235" y="40" width="110" height="200" rx="6" fill="none" stroke="var(--muted)" stroke-width="3" stroke-dasharray="8 5"/>';
      s += tx(100, 30, t("A: sunlight", "أ: ضوء الشمس")) + tx(290, 30, t("B: dark box", "ب: صندوق مظلم")) + tx(195, 140, "≠", mut, 28);
      return G(s);
    },
    spots: [
      [40, 40, ["Sunlight", "ضوء الشمس"], ["With sunlight, plants make their own food for growth.", "بضوء الشمس يصنع النبات غذاءه اللازم للنمو."]],
      [100, 140, ["Healthy plant", "نبات سليم"], ["Dark green leaves and a thick, strong stem.", "أوراق خضراء داكنة وساق سميكة قوية."]],
      [291, 72, ["Plant without light", "نبات بدون ضوء"], ["Yellowish leaves and a thin, long stem.", "أوراق مصفرة وساق رفيعة طويلة."]],
      [195, 140, ["Condition to change", "الشرط المتغير"], ["Only the sunlight is different between A and B.", "الضوء وحده هو المختلف بين أ و ب."]],
      [100, 222, ["Conditions kept the same", "الشروط الثابتة"], ["Water, air, temperature, fertilizer, type of soil and type of plant.", "الماء والهواء ودرجة الحرارة والسماد ونوع التربة ونوع النبات."]]
    ]
  };

  D.p5u2l3 = {
    title: ["Male and female luffa flowers", "الزهرة المذكرة والمؤنثة في اللوف"],
    svg: function () {
      function flower(cx, cy) { var s = ""; for (var i = 0; i < 5; i++) { var a = i * 72 * Math.PI / 180; s += '<ellipse cx="' + (cx + Math.cos(a) * 30).toFixed(1) + '" cy="' + (cy + Math.sin(a) * 30).toFixed(1) + '" rx="24" ry="17" fill="#fde047" stroke="#ca8a04" stroke-width="2" transform="rotate(' + (i * 72) + " " + (cx + Math.cos(a) * 30).toFixed(1) + " " + (cy + Math.sin(a) * 30).toFixed(1) + ')"/>'; } return s; }
      var s = '<path d="M100 150 L100 225" stroke="#15803d" stroke-width="5"/><path d="M300 175 L300 225" stroke="#15803d" stroke-width="5"/>';
      s += '<path d="M88 150 l-10 14 M112 150 l10 14" stroke="#15803d" stroke-width="5"/>' + flower(100, 100) + '<rect x="94" y="84" width="12" height="28" rx="5" fill="#f59e0b"/>';
      for (var i = 0; i < 9; i++) s += '<circle cx="' + (92 + (i % 3) * 8) + '" cy="' + (80 + Math.floor(i / 3) * 4) + '" r="2.5" fill="#facc15" stroke="#a16207" stroke-width=".5"/>';
      s += '<ellipse cx="300" cy="160" rx="13" ry="20" fill="#4ade80" stroke="#15803d" stroke-width="2"/>' + flower(300, 100) + '<path d="M300 112 L300 92 M300 92 l-7 -7 M300 92 l7 -7" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>';
      s += tx(100, 22, t("Male flower", "زهرة مذكرة")) + tx(300, 22, t("Female flower", "زهرة مؤنثة"));
      return G(s);
    },
    spots: [
      [100, 98, ["Stamen", "الأسدية"], ["In the centre of the male flower; it makes yellow pollen.", "في وسط الزهرة المذكرة، وتكوّن حبوب اللقاح الصفراء."]],
      [100, 80, ["Pollen", "حبوب اللقاح"], ["Yellow powder. Bees carry it to female flowers.", "مسحوق أصفر ينقله النحل إلى الأزهار المؤنثة."]],
      [300, 90, ["Pistil", "المتاع"], ["In the centre of the female flower, with a split tip. Pollen attaches to its tip: pollination.", "في وسط الزهرة المؤنثة وقمته مشقوقة، وتلتصق بها حبوب اللقاح: التلقيح."]],
      [300, 162, ["Swelling", "الانتفاخ"], ["At the base of the female flower. After pollination it grows into a fruit with seeds.", "عند قاعدة الزهرة المؤنثة، وبعد التلقيح يصبح ثمرة بها بذور."]],
      [130, 115, ["Petal", "البتلة"], ["The yellow parts around the centre. From outside in: sepal, petal, then stamen or pistil.", "الأجزاء الصفراء حول الوسط، ومن الخارج للداخل: سبلة ثم بتلة ثم أسدية أو متاع."]],
      [112, 160, ["Sepal", "السبلة"], ["The small green outer parts at the base of the flower.", "الأجزاء الخضراء الخارجية الصغيرة عند قاعدة الزهرة."]]
    ]
  };

  D.p5u3l1 = {
    title: ["Stages of human growth", "مراحل نمو الإنسان"],
    svg: function () {
      var H = [34, 74, 112, 120, 112], X = [40, 120, 200, 280, 360], s = '<line x1="10" y1="210" x2="390" y2="210" stroke="var(--muted)" stroke-width="3"/>';
      H.forEach(function (h, i) {
        var x = X[i], top = 210 - h, r = Math.max(7, h * 0.11);
        s += '<circle cx="' + x + '" cy="' + (top + r) + '" r="' + r + '" fill="#fdba74"/>' + '<rect x="' + (x - r * 0.9) + '" y="' + (top + 2 * r) + '" width="' + (r * 1.8) + '" height="' + (h * 0.42) + '" rx="' + (r * 0.6) + '" fill="' + ["#93c5fd", "#86efac", "#fcd34d", "#c4b5fd", "#cbd5e1"][i] + '"/>' +
          '<line x1="' + (x - r * 0.5) + '" y1="' + (top + 2 * r + h * 0.42) + '" x2="' + (x - r * 0.5) + '" y2="210" stroke="#64748b" stroke-width="' + Math.max(3, r * 0.5) + '"/><line x1="' + (x + r * 0.5) + '" y1="' + (top + 2 * r + h * 0.42) + '" x2="' + (x + r * 0.5) + '" y2="210" stroke="#64748b" stroke-width="' + Math.max(3, r * 0.5) + '"/>';
      });
      s += '<path d="M372 150 l10 60" stroke="#92400e" stroke-width="4"/>';
      s += tx(40, 230, t("infancy", "الرضاعة"), mut, 11) + tx(120, 230, t("childhood", "الطفولة"), mut, 11) + tx(200, 230, t("youth", "الشباب"), mut, 11) + tx(280, 230, t("adulthood", "النضج"), mut, 11) + tx(360, 230, t("old age", "الشيخوخة"), mut, 11);
      return G(s);
    },
    spots: [
      [40, 185, ["Infancy", "الرضاعة"], ["Starts at birth after about 9 months inside the mother's body. The baby depends completely on the mother.", "تبدأ عند الولادة بعد نحو ٩ أشهر داخل جسم الأم، ويعتمد الرضيع تمامًا على أمه."]],
      [120, 160, ["Childhood", "الطفولة"], ["Walking, talking and going to school; bones and muscles get stronger.", "المشي والكلام والذهاب إلى المدرسة، وتقوى العظام والعضلات."]],
      [200, 130, ["Youth", "الشباب"], ["Growth continues: the body becomes bigger, stronger and more complex.", "يستمر النمو: يصبح الجسم أكبر وأقوى وأكثر تعقيدًا."]],
      [280, 120, ["Adulthood", "النضج"], ["Parents take care of and protect their children; children inherit their features.", "يرعى الوالدان أبناءهما ويحميانهم، ويرث الأبناء صفاتهما."]],
      [360, 130, ["Old age", "الشيخوخة"], ["The last stage. Life continues across generations through reproduction.", "المرحلة الأخيرة، والحياة تستمر عبر الأجيال بالتكاثر."]]
    ]
  };

  D.p5u3l2 = {
    title: ["Born as babies or hatched from eggs", "تلد أم تبيض"],
    svg: function () {
      var s = '<rect x="10" y="20" width="185" height="200" rx="16" fill="var(--orange-soft)"/><rect x="205" y="20" width="185" height="200" rx="16" fill="var(--blue-soft)"/>';
      s += '<ellipse cx="90" cy="150" rx="48" ry="26" fill="#f59e0b"/><circle cx="135" cy="125" r="20" fill="#f59e0b"/><path d="M122 110 l4 -14 l8 10 M140 106 l8 -10 l2 14" fill="#f59e0b"/><circle cx="141" cy="122" r="3" fill="#1f2937"/>';
      [55, 80, 105].forEach(function (x) { s += '<ellipse cx="' + x + '" cy="186" rx="13" ry="8" fill="#fcd34d"/><circle cx="' + (x + 11) + '" cy="182" r="6" fill="#fcd34d"/>'; });
      s += '<ellipse cx="300" cy="80" rx="40" ry="18" fill="#60a5fa"/><path d="M340 80 l18 -14 l0 28 Z" fill="#60a5fa"/><circle cx="278" cy="76" r="3" fill="#1f2937"/>';
      for (var i = 0; i < 28; i++) s += '<circle cx="' + (240 + (i % 7) * 18) + '" cy="' + (130 + Math.floor(i / 7) * 14) + '" r="5" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>';
      s += '<path d="M330 200 q8 -6 16 0 l6 -5 l0 10 l-6 -5" fill="#93c5fd"/>';
      s += tx(102, 40, t("Gives birth", "تلد")) + tx(297, 40, t("Lays eggs", "تبيض"));
      return G(s);
    },
    spots: [
      [100, 150, ["Mother cat", "القطة الأم"], ["Carries her babies inside her body and gives birth when they are ready.", "تحمل صغارها داخل جسمها وتلدهم عندما يكونون جاهزين."]],
      [80, 186, ["Kittens drink milk", "القطط الصغيرة ترضع"], ["The mother cleans them and feeds them her milk. Kittens look like their parents.", "تنظفهم الأم وترضعهم لبنها، والصغار يشبهون آباءهم."]],
      [300, 80, ["Tilapia", "سمكة البلطي"], ["A mother fish releases many eggs into the water.", "تضع السمكة الأم بيضًا كثيرًا في الماء."]],
      [294, 150, ["Many eggs", "بيض كثير"], ["So that many small fish survive in the open water.", "حتى يبقى كثير من الأسماك الصغيرة في المياه المفتوحة."]],
      [340, 200, ["Hatching", "الفقس"], ["Babies come out of the eggs and start swimming.", "تخرج الصغار من البيض وتبدأ السباحة."]]
    ]
  };

  D.p5u4l1 = {
    title: ["Reading the sky", "قراءة السماء"],
    svg: function () {
      var s = "", cx = 110, cy = 130, r = 90;
      for (var i = 0; i < 8; i++) {
        var a0 = i * Math.PI / 4, a1 = a0 + Math.PI / 4, cov = i < 5;
        s += '<path d="M' + cx + " " + cy + " L" + (cx + r * Math.cos(a0)).toFixed(1) + " " + (cy + r * Math.sin(a0)).toFixed(1) + " A" + r + " " + r + " 0 0 1 " + (cx + r * Math.cos(a1)).toFixed(1) + " " + (cy + r * Math.sin(a1)).toFixed(1) + ' Z" fill="' + (cov ? "#cbd5e1" : "#bae6fd") + '" stroke="var(--card)" stroke-width="3"/>';
      }
      s += tx(cx, 30, t("cloud cover 5 of 8", "كمية السحب ٥ من ٨"));
      s += '<rect x="225" y="60" width="165" height="110" rx="10" fill="#0f172a"/><ellipse cx="260" cy="110" rx="28" ry="18" fill="#f8fafc"/><ellipse cx="285" cy="100" rx="20" ry="14" fill="#f8fafc"/><circle cx="350" cy="120" r="5" fill="#f87171"/>';
      s += '<path d="M240 200 L370 200" stroke="var(--muted)" stroke-width="4" marker-end="url(#p5ar)"/><defs><marker id="p5ar" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--muted)"/></marker></defs>';
      s += tx(235, 222, t("W", "غ"), mut) + tx(380, 222, t("E", "ش"), mut) + tx(307, 50, t("satellite image", "صورة القمر الصناعي"), mut, 11);
      return G(s);
    },
    spots: [
      [110, 130, ["Cloud cover", "كمية السحب"], ["Think of the sky as 8 parts. Count the parts covered by clouds: 0 to 8.", "اعتبر السماء ٨ أجزاء، وعدّ الأجزاء المغطاة بالسحب من ٠ إلى ٨."]],
      [80, 70, ["Sunny or cloudy?", "مشمس أم غائم؟"], ["0 to 6 is sunny; 7 to 8 is cloudy. Rain or snow makes it rainy or snowy whatever the cover.", "من ٠ إلى ٦ مشمس، ومن ٧ إلى ٨ غائم، والمطر أو الثلج يجعله ممطرًا أو مثلجًا مهما كانت الكمية."]],
      [270, 105, ["White parts", "الأجزاء البيضاء"], ["In satellite images, the white parts are clouds.", "في صور الأقمار الصناعية الأجزاء البيضاء هي السحب."]],
      [350, 120, ["Your town", "مدينتك"], ["If clouds in the west come closer, the weather will get worse.", "إذا اقتربت السحب من الغرب فسيسوء الطقس."]],
      [305, 200, ["West to east", "من الغرب إلى الشرق"], ["In Egypt clouds generally move with the wind from west to east.", "في مصر تتحرك السحب عادة مع الرياح من الغرب إلى الشرق."]]
    ]
  };

  D.p5u4l2 = {
    title: ["The water cycle", "دورة الماء"],
    svg: function () {
      var s = '<circle cx="50" cy="40" r="22" fill="#facc15"/><path d="M10 240 L10 190 Q80 180 170 196 L170 240 Z" fill="#3b82f6"/>';
      s += '<path d="M170 240 L170 196 L300 110 L390 150 L390 240 Z" fill="#a3a3a3"/><path d="M300 118 Q250 170 200 200 Q185 210 170 212" stroke="#60a5fa" stroke-width="7" fill="none"/>';
      s += '<ellipse cx="250" cy="50" rx="40" ry="18" fill="#e2e8f0"/><ellipse cx="282" cy="44" rx="28" ry="15" fill="#e2e8f0"/>';
      for (var i = 0; i < 6; i++) s += '<line x1="' + (240 + i * 10) + '" y1="' + (74 + (i % 2) * 6) + '" x2="' + (236 + i * 10) + '" y2="' + (88 + (i % 2) * 6) + '" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>';
      s += '<path d="M90 180 Q110 120 200 60" stroke="var(--muted)" stroke-width="3" stroke-dasharray="6 5" fill="none" marker-end="url(#p5ar2)"/><defs><marker id="p5ar2" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--muted)"/></marker></defs>';
      s += tx(70, 225, t("sea", "البحر"), 'style="fill:#fff"');
      return G(s);
    },
    spots: [
      [50, 40, ["The sun", "الشمس"], ["Warms the water in the sea and rivers.", "تسخّن مياه البحار والأنهار."]],
      [115, 140, ["Evaporation", "التبخر"], ["Water changes into invisible water vapour and goes up into the air.", "يتحول الماء إلى بخار غير مرئي ويصعد إلى الهواء."]],
      [262, 48, ["Clouds (condensation)", "السحب (التكثف)"], ["High in the sky the vapour cools and becomes clouds of tiny drops.", "في الأعلى يبرد البخار ويصبح سحبًا من قطرات صغيرة."]],
      [260, 84, ["Rain", "المطر"], ["Water falls from the clouds onto the land.", "يسقط الماء من السحب على اليابسة."]],
      [230, 178, ["River", "النهر"], ["The rain becomes a river and returns to the sea: sea → sky → land → sea.", "يصبح المطر نهرًا ويعود إلى البحر: بحر ← سماء ← يابسة ← بحر."]]
    ]
  };

  /* ======================= LIVE SIMULATIONS ======================= */
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, k) { return a + (b - a) * k; }
  /* wire slider i inside ctl: updates its value label and calls on(v) */
  function bindSl(ctl, i, fmt, on) {
    var inp = ctl.querySelectorAll('input[type="range"]')[i], lab = ctl.querySelectorAll(".slv")[i];
    function f() { var v = Number(inp.value); if (lab) lab.textContent = fmt(v); on(v); }
    inp.addEventListener("input", f); f();
    return { set: function (v) { inp.value = v; f(); }, el: inp };
  }
  function segHTML(id) { return '<div class="seg" id="' + id + '"></div>'; }
  /* fair-test check between two settings objects over the listed keys */
  function diffKeys(a, b, keys) { return keys.filter(function (k) { return a[k] !== b[k]; }); }
  function fairHTML(d, names) {
    if (!d.length) return '<span class="chip">' + t("Both are the same: nothing is being tested.", "الاثنان متماثلان: لا يوجد شرط ندرسه.") + "</span>";
    if (d.length === 1) return '<span class="chip green">✔ ' + t("Fair test: only ", "تجربة عادلة: المتغير فقط ") + esc(T(names[d[0]])) + "</span>";
    return '<span class="chip orange">⚠ ' + t(d.length + " conditions are different: not a fair test.", "يختلف " + n(d.length) + " شروط: ليست تجربة عادلة.") + "</span>";
  }
  function bean(c, x, y, s, col, rot) {
    c.save(); c.translate(x, y); c.rotate(rot || 0); c.fillStyle = col || "#f5deb3"; c.strokeStyle = "#a16207"; c.lineWidth = 1;
    c.beginPath(); c.ellipse(0, 0, s, s * 0.62, 0, 0, Math.PI * 2); c.fill(); c.stroke(); c.restore();
  }

  /* -------- 1. p5_arm: drag the hand to bend / stretch the arm -------- */
  L.p5_arm = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the hand to bend and stretch the arm. Watch which muscle contracts. Tap the elbow to look inside the joint.", "اسحب اليد لثني الذراع وفردها، وراقب أي عضلة تنقبض، واضغط على المرفق لترى ما بداخل المفصل."));
    var S = K.make(host, 0.62, 400), ang = 140, drag = false, joint = false, bag = false, pulse = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm tg" id="bag">🛍️ ' + t("Hold a heavy bag", "احمل حقيبة ثقيلة") + '</button><button type="button" class="btn sm tg" id="jt">🔍 ' + t("Look inside the joint", "انظر داخل المفصل") + '</button></div><div class="meter arm-out"></div>';
    var out = ctl.querySelector(".arm-out");
    var tick = L._goals(host, [t("Bend the arm: make the inner muscle (biceps) contract.", "اثنِ الذراع: اجعل العضلة الداخلية (ذات الرأسين) تنقبض."),
      t("Stretch the arm straight: make the outer muscle contract.", "افرد الذراع: اجعل العضلة الخارجية تنقبض."),
      t("Look inside the elbow joint and find the cartilage cushion.", "انظر داخل مفصل المرفق واكتشف وسادة الغضروف."),
      t("Hold the heavy bag and lift it: bend to 90° or less.", "احمل الحقيبة الثقيلة وارفعها: اثنِ الذراع إلى ٩٠° أو أقل.")], done);
    var bent = false;
    ctl.querySelector("#bag").onclick = function () { bag = !bag; this.classList.toggle("on", bag); };
    ctl.querySelector("#jt").onclick = function () { joint = !joint; this.classList.toggle("on", joint); if (joint) { tick(2); E.speak(t("Cartilage is a cushion between the bone ends.", "الغضروف وسادة بين أطراف العظام.")); } };
    function geo() { var W = S.W, H = S.H, ua = Math.min(H * 0.36, W * 0.24), fa = ua * 0.95; var sx = W * 0.34, sy = H * 0.14; return { sx: sx, sy: sy, ex: sx, ey: sy + ua, ua: ua, fa: fa }; }
    function hand(g) { var a = (ang - 90) * Math.PI / 180; return { x: g.ex + Math.cos(a) * g.fa, y: g.ey + Math.sin(a) * g.fa, a: a }; }
    S.drag({
      down: function (p) {
        var g = geo(), h = hand(g);
        if (Math.hypot(p.x - h.x, p.y - h.y) < 44) { drag = true; return true; }
        if (Math.hypot(p.x - g.ex, p.y - g.ey) < 28) { joint = !joint; ctl.querySelector("#jt").classList.toggle("on", joint); if (joint) tick(2); }
        return false;
      },
      move: function (p) { var g = geo(); var a = Math.atan2(p.y - g.ey, p.x - g.ex) * 180 / Math.PI; ang = clamp(90 + a, 35, 180); if (a < -90) ang = 35; },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(), h = hand(g); return Math.hypot(p.x - h.x, p.y - h.y) < 44 || Math.hypot(p.x - g.ex, p.y - g.ey) < 28; }
    });
    function musc(c, x1, y1, x2, y2, w, col, edge) {
      var mx = (x1 + x2) / 2, my = (y1 + y2) / 2, len = Math.hypot(x2 - x1, y2 - y1), a = Math.atan2(y2 - y1, x2 - x1);
      c.save(); c.translate(mx, my); c.rotate(a); c.beginPath(); c.ellipse(0, 0, len / 2, w, 0, 0, Math.PI * 2); c.fillStyle = col; c.fill(); c.strokeStyle = edge; c.lineWidth = 2; c.stroke();
      c.strokeStyle = "rgba(127,29,29,.35)"; c.lineWidth = 1; for (var i = -2; i <= 2; i++) { c.beginPath(); c.moveTo(-len / 2 + 8, i * w / 3); c.lineTo(len / 2 - 8, i * w / 3); c.stroke(); }
      c.restore();
    }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), h = hand(g), k = clamp((180 - ang) / 145, 0, 1);
      pulse += dt; c.clearRect(0, 0, W, H);
      var bic = k > 0.5, load = bag ? 1.35 : 1;
      if (ang < 80) { tick(0); bent = true; }
      if (ang > 172 && bent) tick(1);
      if (bag && ang <= 90) tick(3);
      // skin
      c.lineCap = "round"; c.strokeStyle = "rgba(251,191,140,.45)"; c.lineWidth = g.ua * 0.42;
      c.beginPath(); c.moveTo(g.sx, g.sy); c.lineTo(g.ex, g.ey); c.lineTo(h.x, h.y); c.stroke();
      // bones
      c.strokeStyle = "#f1f5f9"; c.lineWidth = 11; c.beginPath(); c.moveTo(g.sx, g.sy); c.lineTo(g.ex, g.ey - 6); c.stroke();
      c.lineWidth = 8; c.beginPath(); c.moveTo(g.ex, g.ey); c.lineTo(h.x, h.y); c.stroke();
      c.strokeStyle = "#94a3b8"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(g.sx - 5, g.sy); c.lineTo(g.ex - 5, g.ey - 6); c.moveTo(g.sx + 5, g.sy); c.lineTo(g.ex + 5, g.ey - 6); c.stroke();
      // muscles: biceps in front (right), triceps behind (left)
      var top = g.sy + g.ua * 0.12, bLen = g.ua * (0.78 - 0.18 * k), bw = (7 + 13 * k) * (bic ? load : 1), tw = (6 + 9 * (1 - k));
      var bx = g.ex + 9 + bw * 0.6, ins = { x: g.ex + Math.cos(h.a) * g.fa * 0.2, y: g.ey + Math.sin(h.a) * g.fa * 0.2 };
      var bCol = bic ? "rgba(239,68,68,.95)" : "rgba(252,165,165,.85)", tCol = !bic ? "rgba(239,68,68,.95)" : "rgba(252,165,165,.85)";
      musc(c, bx, top, bx, top + bLen, bw, bCol, "#b91c1c");
      musc(c, g.ex - 9 - tw * 0.6, top - 4, g.ex - 9 - tw * 0.6, g.ey - 10, tw, tCol, "#b91c1c");
      c.strokeStyle = "#e2e8f0"; c.lineWidth = 3; c.beginPath(); c.moveTo(bx, top + bLen); c.lineTo(ins.x, ins.y); c.stroke();
      c.beginPath(); c.moveTo(g.ex - 9 - tw * 0.6, g.ey - 10); c.lineTo(g.ex - 6, g.ey + 6); c.stroke();
      // joint + hand
      K.dot(c, g.ex, g.ey, 10, "rgba(59,130,246,.35)", "#2563eb");
      K.dot(c, g.sx, g.sy, 12, "rgba(59,130,246,.25)", "#2563eb");
      K.dot(c, h.x, h.y, 16, "#fdba74", "#c2410c");
      if (!drag) { c.strokeStyle = "rgba(37,99,235," + (0.4 + 0.3 * Math.sin(pulse * 4)) + ")"; c.lineWidth = 3; c.beginPath(); c.arc(h.x, h.y, 24, 0, Math.PI * 2); c.stroke(); }
      if (bag) { c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.moveTo(h.x, h.y + 10); c.lineTo(h.x, h.y + 30); c.stroke(); c.fillStyle = "#7c3aed"; K.rr(c, h.x - 20, h.y + 30, 40, 36, 7); c.fill(); K.txt(c, "5 kg", h.x, h.y + 48, { c: "#fff", s: 11 }); }
      // labels
      K.txt(c, (bic ? "▲ " : "") + t("biceps", "ذات الرأسين"), bx + bw + 8, top + bLen / 2, { a: "left", c: bic ? "#dc2626" : C.muted, s: 12 });
      K.txt(c, t("triceps", "ذات الثلاث رؤوس") + (!bic ? " ▲" : ""), g.ex - 22 - tw * 1.2, top + g.ua * 0.4, { a: "right", c: !bic ? "#dc2626" : C.muted, s: 12 });
      K.txt(c, t("elbow joint", "مفصل المرفق"), g.ex - 18, g.ey + 20, { a: "right", c: C.muted, s: 11 });
      // angle arc
      c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.arc(g.ex, g.ey, 26, -Math.PI / 2, h.a, false); c.stroke();
      // joint zoom
      if (joint) {
        var zx = W * 0.8, zy = H * 0.3, zr = Math.min(W * 0.16, H * 0.24);
        c.fillStyle = C.card; c.beginPath(); c.arc(zx, zy, zr, 0, Math.PI * 2); c.fill(); c.strokeStyle = "#2563eb"; c.lineWidth = 3; c.stroke();
        c.strokeStyle = "rgba(37,99,235,.4)"; c.setLineDash([5, 4]); c.beginPath(); c.moveTo(g.ex + 12, g.ey); c.lineTo(zx - zr, zy); c.stroke(); c.setLineDash([]);
        c.fillStyle = "#e5e7eb"; K.rr(c, zx - zr * 0.25, zy - zr * 0.95, zr * 0.5, zr * 0.8, 10); c.fill(); K.rr(c, zx - zr * 0.25, zy + zr * 0.15, zr * 0.5, zr * 0.8, 10); c.fill();
        var sq = 0.08 + 0.06 * k; c.fillStyle = "#7dd3fc"; K.rr(c, zx - zr * 0.3, zy - zr * sq, zr * 0.6, zr * sq * 2, 6); c.fill();
        K.txt(c, t("cartilage", "الغضروف"), zx, zy, { c: "#0c4a6e", s: 11 });
        K.txt(c, t("bone", "عظم"), zx, zy - zr * 0.55, { c: "#334155", s: 11 }); K.txt(c, t("bone", "عظم"), zx, zy + zr * 0.55, { c: "#334155", s: 11 });
      }
      out.innerHTML = '<span class="chip">' + t("Elbow angle", "زاوية المرفق") + ' <b dir="ltr">' + n(Math.round(ang)) + "°</b></span>" +
        '<span class="chip ' + (bic ? "orange" : "") + '">' + t("Inner muscle: ", "العضلة الداخلية: ") + (bic ? t("contracted, thick and hard", "منقبضة، غليظة وصلبة") : t("relaxed", "منبسطة")) + "</span>" +
        '<span class="chip ' + (!bic ? "orange" : "") + '">' + t("Outer muscle: ", "العضلة الخارجية: ") + (!bic ? t("contracted", "منقبضة") : t("relaxed", "منبسطة")) + "</span>";
    });
  };

  /* -------- 2. p5_seasons: drag through the year -------- */
  L.p5_seasons = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the marker along the year (or press Play). Watch the temperature, the luffa plant and the lizard.", "اسحب المؤشر على شريط العام (أو اضغط تشغيل) وراقب درجة الحرارة ونبات اللوف والسحلية."));
    var S = K.make(host, 0.6, 400), m = 2.2, play = false, drag = false, lx = 0, ldir = 1, ph = 0;
    var TEMP = [14, 15, 18, 21, 25, 27, 28, 28, 26, 24, 19, 15];
    var MON = [["Jan", "يناير"], ["Feb", "فبراير"], ["Mar", "مارس"], ["Apr", "أبريل"], ["May", "مايو"], ["Jun", "يونيو"], ["Jul", "يوليو"], ["Aug", "أغسطس"], ["Sep", "سبتمبر"], ["Oct", "أكتوبر"], ["Nov", "نوفمبر"], ["Dec", "ديسمبر"]];
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm primary" id="pl">▶ ' + t("Play the year", "شغّل العام") + '</button></div><div class="meter ss-out"></div>';
    var out = ctl.querySelector(".ss-out"), pb = ctl.querySelector("#pl");
    pb.onclick = function () { play = !play; pb.innerHTML = play ? "⏸ " + t("Pause", "إيقاف") : "▶ " + t("Play the year", "شغّل العام"); };
    var tick = L._goals(host, [t("Find the season when the luffa flowers bloom.", "اكتشف الفصل الذي تتفتح فيه أزهار اللوف."), t("Find the seeds the withered plant leaves for next year.", "اكتشف البذور التي يتركها النبات الذابل للعام القادم."),
      t("Make the lizard hibernate.", "اجعل السحلية تدخل في البيات الشتوي."), t("Make the lizard run fast: 27 °C or more.", "اجعل السحلية تجري بسرعة: ٢٧ درجة أو أكثر.")], done);
    function temp(mm) { var i = Math.floor(mm) % 12, f = mm - Math.floor(mm), j = (i + 1) % 12; return lerp(TEMP[i], TEMP[j], f); }
    function stage(mm) { return mm < 2 ? 6 : mm < 3.2 ? 1 : mm < 5 ? 2 : mm < 6.8 ? 3 : mm < 8.8 ? 4 : mm < 10.3 ? 5 : 6; }
    var SN = [null, ["Seeds sprout", "تنبت البذور"], ["Stem grows tall, leaves spread", "تطول الساق وتتسع الأوراق"], ["Flowers bloom", "تتفتح الأزهار"], ["Fruits grow", "تنمو الثمار"], ["Fruit turns brown, leaves fade", "تصبح الثمرة بنية وتذبل الأوراق"], ["Plant withered: seeds wait for spring", "نبات ذابل: البذور تنتظر الربيع"]];
    function bar() { return { x0: 40, x1: S.W - 40, y: S.H - 26 }; }
    function setM(p) { var b = bar(); m = clamp((p.x - b.x0) / (b.x1 - b.x0), 0, 0.9999) * 12; }
    S.drag({
      down: function (p) { var b = bar(); if (p.y > b.y - 24) { drag = true; play = false; pb.innerHTML = "▶ " + t("Play the year", "شغّل العام"); setM(p); return true; } return false; },
      move: setM,
      up: function () { drag = false; },
      hover: function (p) { return p.y > bar().y - 24; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, b = bar();
      if (play) m = (m + dt * 0.9) % 12;
      var T0 = temp(m), st = stage(m), act = clamp((T0 - 16) / 12, 0, 1), hib = T0 < 17;
      ph += dt;
      if (st === 3) tick(0); if (st === 6 && m > 10) tick(1); if (hib) tick(2); if (T0 >= 27) tick(3);
      c.clearRect(0, 0, W, H);
      var warm = clamp((T0 - 14) / 14, 0, 1);
      c.fillStyle = "rgba(" + Math.round(lerp(147, 253, warm)) + "," + Math.round(lerp(197, 230, warm)) + "," + Math.round(lerp(253, 138, warm)) + ",.35)"; c.fillRect(0, 0, W, H - 50);
      var gy = H - 60; c.fillStyle = "#a8a29e"; c.fillRect(0, gy, W, 10);
      // sun
      K.dot(c, W * 0.08 + 20, 34, 12 + 10 * warm, "rgba(250,204,21," + (0.5 + 0.5 * warm) + ")");
      // luffa on trellis
      var px = W * 0.22, top = gy - (H * 0.62);
      c.strokeStyle = "#a16207"; c.lineWidth = 3; c.beginPath(); c.moveTo(px - 40, gy); c.lineTo(px - 40, top); c.moveTo(px + 40, gy); c.lineTo(px + 40, top); c.lineTo(px - 40, top); c.stroke();
      var gro = st === 1 ? clamp((m - 2) / 1.2, 0.1, 1) * 0.25 : st === 6 ? 0 : st === 2 ? 0.25 + 0.75 * clamp((m - 3.2) / 1.8, 0, 1) : 1;
      var stemC = st >= 5 ? "#a16207" : "#16a34a", leafC = st === 5 ? "#ca8a04" : "#22c55e";
      if (st !== 6) {
        var hgt = (gy - top) * gro;
        c.strokeStyle = stemC; c.lineWidth = 4; c.beginPath(); c.moveTo(px, gy); for (var yy = 0; yy <= hgt; yy += 6) c.lineTo(px + Math.sin(yy / 18) * 12, gy - yy); c.stroke();
        var nL = Math.floor(hgt / 34);
        for (var i = 0; i < nL; i++) { var ly = gy - 20 - i * 34, lxx = px + Math.sin((20 + i * 34) / 18) * 12; c.fillStyle = leafC; c.beginPath(); c.ellipse(lxx + (i % 2 ? 16 : -16), ly, 15, 9, i % 2 ? 0.4 : -0.4, 0, Math.PI * 2); c.fill(); }
        if (st === 3) for (i = 0; i < 3; i++) { var fy = gy - hgt * (0.45 + i * 0.2); K.dot(c, px + (i % 2 ? 24 : -24), fy, 8, "#facc15", "#ca8a04"); }
        if (st >= 4) for (i = 0; i < 2; i++) { var fy2 = gy - hgt * (0.4 + i * 0.25), grow = st === 4 ? clamp((m - 6.8) / 2, 0.3, 1) : 1; c.fillStyle = st === 5 ? "#92400e" : "#65a30d"; K.rr(c, px + (i ? 18 : -30), fy2, 12, 46 * grow, 6); c.fill(); }
      } else {
        c.strokeStyle = "#a16207"; c.lineWidth = 2; c.beginPath(); c.moveTo(px - 30, gy); c.lineTo(px - 10, gy - 14); c.lineTo(px + 6, gy - 4); c.stroke();
        c.fillStyle = "#78350f"; K.rr(c, px + 10, gy - 16, 34, 12, 6); c.fill();
        for (i = 0; i < 7; i++) K.dot(c, px - 26 + i * 9, gy + 4, 3, "#111827");
        K.txt(c, t("seeds", "بذور"), px, gy + 18, { c: C.ink, s: 11 });
      }
      if (st === 1) for (i = 0; i < 1; i++) K.dot(c, px, gy + 3, 3, "#111827");
      // rock + lizard
      var rx = W * 0.66, ry = gy;
      c.fillStyle = "#a8a29e"; c.beginPath(); c.moveTo(rx - 90, ry); c.quadraticCurveTo(rx - 60, ry - 70, rx, ry - 76); c.quadraticCurveTo(rx + 70, ry - 70, rx + 95, ry); c.closePath(); c.fill();
      c.fillStyle = "#57534e"; c.beginPath(); c.moveTo(rx + 20, ry); c.lineTo(rx + 30, ry - 34); c.lineTo(rx + 40, ry); c.closePath(); c.fill();
      if (hib) {
        c.save(); c.translate(rx + 30, ry - 8); c.rotate(-1.2); c.fillStyle = "#4d7c0f"; K.rr(c, -12, -4, 24, 8, 4); c.fill(); c.restore();
        K.txt(c, "z z z", rx + 56, ry - 46 - Math.sin(ph * 2) * 4, { c: C.muted, s: 13 });
      } else {
        var sp = 10 + 110 * act; lx += ldir * sp * dt; if (lx > 55) { lx = 55; ldir = -1; } if (lx < -55) { lx = -55; ldir = 1; }
        var lyy = ry - 70 + Math.abs(lx) * 0.5;
        if (T0 >= 26 && Math.sin(ph * 0.7) > 0.3) { lx *= 0.96; }
        c.save(); c.translate(rx + lx, lyy); c.scale(ldir, 1);
        c.fillStyle = "#65a30d"; K.rr(c, -16, -5, 32, 10, 5); c.fill(); K.dot(c, 18, -1, 6, "#65a30d");
        c.strokeStyle = "#65a30d"; c.lineWidth = 3; c.beginPath(); c.moveTo(-16, 0); c.lineTo(-34, 4); c.stroke();
        var lg = Math.sin(ph * sp * 0.15) * 5; c.lineWidth = 2; c.beginPath(); c.moveTo(-8, 4); c.lineTo(-12 + lg, 10); c.moveTo(8, 4); c.lineTo(12 - lg, 10); c.stroke();
        c.restore();
      }
      // flamingos in cold months
      if (T0 < 17.5) for (i = 0; i < 3; i++) {
        var fx = W * 0.4 + i * 34 + ((ph * 12) % 60), fyy = H * 0.14 + (i % 2) * 14, fl = Math.sin(ph * 6 + i) * 6;
        c.strokeStyle = "#f472b6"; c.lineWidth = 2; c.beginPath(); c.moveTo(fx - 8, fyy); c.lineTo(fx - 26, fyy + 2); c.stroke();
        c.lineWidth = 3; c.beginPath(); c.moveTo(fx + 8, fyy); c.lineTo(fx + 22, fyy - 2); c.stroke();
        c.fillStyle = "#f472b6"; c.beginPath(); c.ellipse(fx, fyy, 9, 5, 0, 0, Math.PI * 2); c.fill();
        c.beginPath(); c.moveTo(fx - 4, fyy); c.lineTo(fx, fyy - 10 - fl); c.lineTo(fx + 5, fyy); c.closePath(); c.fill();
      }
      // thermometer
      var tx0 = W - 34, ty0 = 20, th = H * 0.45;
      c.fillStyle = C.card; K.rr(c, tx0 - 8, ty0, 16, th, 8); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 1.5; c.stroke();
      var lvl = clamp((T0 - 10) / 22, 0, 1); c.fillStyle = "#ef4444"; K.rr(c, tx0 - 4, ty0 + th * (1 - lvl), 8, th * lvl, 4); c.fill(); K.dot(c, tx0, ty0 + th + 6, 9, "#ef4444");
      K.txt(c, n(Math.round(T0)) + " °C", tx0 - 14, ty0 + th * (1 - lvl), { a: "right", c: C.ink, s: 14 });
      // year bar
      c.fillStyle = C.card; K.rr(c, b.x0, b.y - 8, b.x1 - b.x0, 16, 8); c.fill();
      for (i = 0; i < 12; i++) { var bx = b.x0 + (b.x1 - b.x0) * (i + 0.5) / 12, tt = TEMP[i]; c.fillStyle = "rgba(239,68,68," + clamp((tt - 13) / 16, 0.1, 1) + ")"; c.fillRect(b.x0 + (b.x1 - b.x0) * i / 12 + 1, b.y - 6, (b.x1 - b.x0) / 12 - 2, 12); if (W > 420 || i % 2 === 0) K.txt(c, T(MON[i]), bx, b.y + 18, { c: C.muted, s: 10 }); }
      var mx = b.x0 + (b.x1 - b.x0) * m / 12; K.dot(c, mx, b.y, 11, "#2563eb", "#fff");
      out.innerHTML = '<span class="chip blue">' + esc(T(MON[Math.floor(m)])) + " · " + n(Math.round(T0)) + " °C</span>" + '<span class="chip green">🌿 ' + esc(T(SN[st])) + "</span>" +
        '<span class="chip ' + (hib ? "" : "orange") + '">🦎 ' + (hib ? t("Hibernating in a rock crevice", "في بيات شتوي داخل شق صخري") : act > 0.8 ? t("Very active: basking and running fast", "نشيطة جدًا: تتشمس وتجري بسرعة") : act > 0.35 ? t("Active", "نشيطة") : t("Slow", "بطيئة")) + "</span>" +
        (T0 < 17.5 ? '<span class="chip">🦩 ' + t("Flamingos spend the winter in Egypt", "الفلامنجو يقضي الشتاء في مصر") + "</span>" : "");
    });
  };

  /* -------- 3. p5_germ: two cups, fair tests for germination -------- */
  L.p5_germ = function (host, cfg, done) {
    var NM = { water: ["water", "الماء"], place: ["temperature", "درجة الحرارة"], light: ["light", "الضوء"] };
    host.innerHTML = hint(t("Set up cup A and cup B, then drag the days slider. Change ONE condition to make a fair test.", "جهّز الكوب أ والكوب ب ثم اسحب شريط الأيام، وغيّر شرطًا واحدًا فقط لتكون التجربة عادلة."));
    var S = K.make(host, 0.5, 340), day = 0;
    var cup = [{ water: "wet", place: "warm", light: "light" }, { water: "dry", place: "warm", light: "light" }];
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    function row(i) { return '<div class="gm-row" style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0"><b>' + (i ? t("Cup B", "الكوب ب") : t("Cup A", "الكوب أ")) + "</b> " + segHTML("gw" + i) + " " + segHTML("gp" + i) + " " + segHTML("gl" + i) + "</div>"; }
    ctl.innerHTML = row(0) + row(1) + L._slider(t("Days", "الأيام"), 0, 7, 0.1, 0) + '<div class="btn-row"><button type="button" class="btn sm primary" id="gpl">▶ ' + t("Grow for 7 days", "انتظر ٧ أيام") + '</button></div><div class="meter gm-out"></div>';
    var out = ctl.querySelector(".gm-out"), playing = false;
    var tick = L._goals(host, [t("Make seeds germinate in a cup.", "اجعل البذور تنبت في كوب."), t("Fair test for water: dry cotton vs wet cotton.", "تجربة عادلة للماء: قطن جاف مقابل قطن مبلل."),
      t("Fair test for air: wet cotton vs seeds under water.", "تجربة عادلة للهواء: قطن مبلل مقابل بذور مغمورة بالماء."), t("Fair test for temperature: warm room vs refrigerator.", "تجربة عادلة لدرجة الحرارة: غرفة دافئة مقابل الثلاجة."),
      t("Show light is not needed: seeds sprout in a dark box.", "أثبت أن الضوء غير ضروري: البذور تنبت في صندوق مظلم.")], done);
    var ds = bindSl(ctl, 0, function (v) { return n(Math.round(v)); }, function (v) { day = v; check(); });
    [0, 1].forEach(function (i) {
      K.seg(ctl, "#gw" + i, [["dry", "🏜️ " + t("dry", "جاف")], ["wet", "💧 " + t("wet cotton", "قطن مبلل")], ["sub", "🌊 " + t("under water", "مغمور")]], cup[i].water, function (v) { cup[i].water = v; ds.set(0); });
      K.seg(ctl, "#gp" + i, [["warm", "🌡️ " + t("warm room", "غرفة دافئة")], ["fridge", "❄️ " + t("refrigerator", "الثلاجة")]], cup[i].place, function (v) { cup[i].place = v; ds.set(0); });
      K.seg(ctl, "#gl" + i, [["light", "☀️ " + t("light", "ضوء")], ["dark", "📦 " + t("dark box", "صندوق مظلم")]], cup[i].light, function (v) { cup[i].light = v; ds.set(0); });
    });
    ctl.querySelector("#gpl").onclick = function () { ds.set(0); playing = true; };
    function ok(cp) { return cp.water === "wet" && cp.place === "warm"; }
    function why(cp) { return cp.water === "dry" ? t("no water", "لا يوجد ماء") : cp.water === "sub" ? t("no air", "لا يوجد هواء") : cp.place === "fridge" ? t("too cold", "بارد جدًا") : ""; }
    function check() {
      var d = diffKeys(cup[0], cup[1], ["water", "place", "light"]), grown = day >= 5;
      if (grown) {
        if (ok(cup[0]) || ok(cup[1])) tick(0);
        if (d.length === 1 && d[0] === "water") { var w = [cup[0].water, cup[1].water].sort().join(); if (w === "dry,wet") tick(1); if (w === "sub,wet") tick(2); }
        if (d.length === 1 && d[0] === "place" && cup[0].water === "wet") tick(3);
        if ((ok(cup[0]) && cup[0].light === "dark") || (ok(cup[1]) && cup[1].light === "dark")) tick(4);
      }
      out.innerHTML = fairHTML(d, NM) + [0, 1].map(function (i) {
        var cp = cup[i], g = ok(cp) && day >= 1.5;
        return '<span class="chip ' + (g ? "green" : "") + '">' + (i ? t("B", "ب") : t("A", "أ")) + ": " + (day < 1.5 ? t("waiting…", "انتظار…") : g ? t("germinated ✔", "نبتت ✔") : t("no sprout", "لم تنبت") + " (" + why(cp) + ")") + "</span>";
      }).join("");
    }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      if (playing) { var nd = Math.min(7, day + dt * 1.6); ds.set(nd); if (nd >= 7) playing = false; }
      c.clearRect(0, 0, W, H);
      K.txt(c, t("Day ", "اليوم ") + n(Math.floor(day)), W / 2, 16, { c: C.ink, s: 14 });
      [0, 1].forEach(function (i) {
        var cp = cup[i], cx = W * (i ? 0.72 : 0.28), base = H * 0.86, cw = Math.min(110, W * 0.2), ch = H * 0.5, fr = cp.place === "fridge";
        if (fr) { c.fillStyle = "rgba(186,230,253,.55)"; K.rr(c, cx - cw * 0.9, base - ch - 46, cw * 1.8, ch + 60, 10); c.fill(); c.strokeStyle = "#0284c7"; c.lineWidth = 2; c.stroke(); K.txt(c, "❄️ " + t("refrigerator", "الثلاجة") + " · " + n(4) + " °C", cx, base - ch - 32, { c: "#0c4a6e", s: 11 }); }
        else K.txt(c, "🌡️ " + t("room", "الغرفة") + " · " + n(25) + " °C", cx, base - ch - 32, { c: C.muted, s: 11 });
        // cup
        c.fillStyle = "rgba(226,232,240,.35)"; c.beginPath(); c.moveTo(cx - cw / 2, base - ch); c.lineTo(cx - cw * 0.38, base); c.lineTo(cx + cw * 0.38, base); c.lineTo(cx + cw / 2, base - ch); c.closePath(); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 2; c.stroke();
        var cot = base - ch * 0.28;
        if (cp.water === "sub") { c.fillStyle = "rgba(59,130,246,.35)"; c.fillRect(cx - cw * 0.45, base - ch * 0.88, cw * 0.9, ch * 0.88 - 2); }
        c.fillStyle = cp.water === "dry" ? "#f8fafc" : "#e0f2fe"; K.rr(c, cx - cw * 0.4, cot, cw * 0.8, ch * 0.24, 6); c.fill();
        if (cp.water === "wet") for (var d = 0; d < 4; d++) K.dot(c, cx - cw * 0.3 + d * cw * 0.2, cot + ch * 0.12, 2.5, "#38bdf8");
        var g = ok(cp) ? clamp((day - 1.5) / 4.5, 0, 1) : 0;
        for (var s = 0; s < 3; s++) {
          var sx = cx - cw * 0.24 + s * cw * 0.24, sy = cot - 4;
          if (g > 0) {
            c.strokeStyle = "#fef3c7"; c.lineWidth = 2; c.beginPath(); c.moveTo(sx, sy); c.lineTo(sx + 2, sy + 4 + 18 * g); c.stroke();
            c.strokeStyle = "#16a34a"; c.lineWidth = 3; c.beginPath(); c.moveTo(sx, sy); c.quadraticCurveTo(sx - 4, sy - 20 * g, sx, sy - 34 * g); c.stroke();
            if (g > 0.5) { var lc = cp.light === "dark" ? "#bef264" : "#22c55e"; c.fillStyle = lc; c.beginPath(); c.ellipse(sx - 7, sy - 34 * g, 7, 4, -0.5, 0, Math.PI * 2); c.ellipse(sx + 7, sy - 34 * g, 7, 4, 0.5, 0, Math.PI * 2); c.fill(); }
          }
          bean(c, sx, sy, 9, g > 0 ? "#fde68a" : "#f5deb3", 0.3);
        }
        if (cp.light === "dark") {
          c.fillStyle = "rgba(146,64,14,.55)"; K.rr(c, cx - cw * 0.7, base - ch - 18, cw * 1.4, ch + 14, 6); c.fill();
          c.fillStyle = "#78350f"; c.fillRect(cx - cw * 0.7, base - 4, 14, 8); c.fillRect(cx + cw * 0.7 - 14, base - 4, 14, 8);
          K.txt(c, "📦 " + t("dark", "مظلم"), cx, base - ch - 6, { c: "#fff", s: 11 });
        }
        K.txt(c, i ? t("B", "ب") : t("A", "أ"), cx, base + 12, { c: C.ink, s: 14 });
      });
    });
    check();
  };

  /* -------- 3b. p5_seed: split a bean and test it with iodine -------- */
  L.p5_seed = function (host, cfg, done) {
    host.innerHTML = hint(t("Tap the soaked bean to split it. Find the embryo. Drag the iodine dropper onto a cotyledon.", "اضغط على البذرة المنقوعة لتفصلها، واكتشف الجنين، واسحب قطارة اليود إلى فلقة.")) + '<div class="seg" id="sdk"></div>';
    var S = K.make(host, 0.5, 320), kind = "fresh", split = false, emb = false, drop = { x: 0, y: 0, d: false }, spots = [], tested = {};
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Split the seed into its two halves.", "افصل البذرة إلى نصفيها."), t("Tap the embryo: the part that becomes the new plant.", "اضغط على الجنين: الجزء الذي يصبح النبات الجديد."),
      t("Iodine on a fresh cotyledon: starch turns blue-black.", "اليود على فلقة بذرة جافة: يتحول النشا إلى الأزرق الداكن."), t("Now test a seed that germinated a few days ago. Compare!", "اختبر الآن بذرة نبتت منذ أيام، وقارن!")], done);
    K.seg(host, "#sdk", [["fresh", "🫘 " + t("Soaked seed", "بذرة منقوعة")], ["grown", "🌱 " + t("Germinated 5 days", "نبتت منذ ٥ أيام")]], kind, function (v) { kind = v; spots = []; split = v === "grown"; });
    function geo() { var W = S.W, H = S.H, r = Math.min(W * 0.16, H * 0.3); return { cx: W * 0.42, cy: H * 0.55, r: r }; }
    function home() { drop.x = S.W * 0.86; drop.y = S.H * 0.3; }
    home(); S.onSize = function () { if (!drop.d) home(); };
    function halves(g) { var k = kind === "grown" ? 0.72 : 1; return [{ x: g.cx - g.r * 0.62, y: g.cy, rx: g.r * 0.55 * k, ry: g.r * 0.8 * k }, { x: g.cx + g.r * 0.62, y: g.cy, rx: g.r * 0.55 * k, ry: g.r * 0.8 * k }]; }
    S.drag({
      down: function (p) {
        var g = geo();
        if (Math.hypot(p.x - drop.x, p.y - drop.y) < 30) { drop.d = true; return true; }
        if (!split && Math.hypot(p.x - g.cx, p.y - g.cy) < g.r) { split = true; tick(0); E.speak(t("Two cotyledons.", "فلقتان.")); return false; }
        if (split) { var h = halves(g)[1]; if (Math.hypot(p.x - (h.x - h.rx * 0.55), p.y - (h.y - h.ry * 0.45)) < 18) { emb = true; tick(1); E.speak(t("The embryo will become leaves, stem and roots.", "الجنين سيصبح أوراقًا وساقًا وجذورًا.")); } }
        return false;
      },
      move: function (p) { drop.x = p.x; drop.y = p.y; },
      up: function () {
        drop.d = false; var g = geo();
        if (split) halves(g).forEach(function (h, hi) {
          if (Math.abs(drop.x - h.x) < h.rx && Math.abs(drop.y + 22 - h.y) < h.ry) {
            spots.push({ x: drop.x - h.x, y: drop.y + 22 - h.y, r: 2, h: hi });
            tested[kind] = 1; if (kind === "fresh") tick(2); else if (tested.fresh) tick(3);
            E.speak(kind === "fresh" ? t("Blue-black: starch!", "أزرق داكن: يوجد نشا!") : t("Only a little colour: the starch was used to grow.", "لون خفيف: النشا استُهلك في النمو."));
          }
        });
        home();
      },
      hover: function (p) { return Math.hypot(p.x - drop.x, p.y - drop.y) < 30; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo();
      c.clearRect(0, 0, W, H);
      if (!split) { bean(c, g.cx, g.cy, g.r, "#fde68a", 0); K.txt(c, t("tap to split", "اضغط للفصل"), g.cx, g.cy + g.r + 18, { c: C.muted, s: 12 }); }
      else halves(g).forEach(function (h, i) {
        c.fillStyle = kind === "grown" ? "#fcd9a0" : "#fde68a"; c.strokeStyle = "#a16207"; c.lineWidth = 2; c.beginPath(); c.ellipse(h.x, h.y, h.rx, h.ry, 0, 0, Math.PI * 2); c.fill(); c.stroke();
        spots.filter(function (s) { return s.h === i; }).forEach(function (s) {
          s.r = Math.min(s.r + dt * 26, h.rx * 0.8);
          c.save(); c.beginPath(); c.ellipse(h.x, h.y, h.rx, h.ry, 0, 0, Math.PI * 2); c.clip();
          K.dot(c, h.x + s.x, h.y + s.y, s.r, kind === "fresh" ? "rgba(30,27,75,.88)" : "rgba(146,64,14,.35)"); c.restore();
        });
        if (i === 1) { var ex = h.x - h.rx * 0.55, ey = h.y - h.ry * 0.45; c.fillStyle = "#86efac"; c.beginPath(); c.ellipse(ex, ey, 8, 13, 0.5, 0, Math.PI * 2); c.fill(); c.strokeStyle = "#15803d"; c.stroke(); if (emb) K.txt(c, t("embryo", "الجنين"), ex, ey - 22, { c: C.ink, s: 12 }); }
        K.txt(c, t("cotyledon", "فلقة"), h.x, h.y + h.ry + 14, { c: C.muted, s: 11 });
      });
      if (kind === "grown") { var hh = halves(g)[1], ex2 = hh.x - hh.rx * 0.55, ey2 = hh.y - hh.ry * 0.45; c.strokeStyle = "#16a34a"; c.lineWidth = 4; c.beginPath(); c.moveTo(ex2, ey2 - 8); c.quadraticCurveTo(ex2 - 14, ey2 - 30, ex2 - 6, ey2 - 52); c.stroke(); c.fillStyle = "#22c55e"; c.beginPath(); c.ellipse(ex2 - 14, ey2 - 54, 9, 5, -0.5, 0, Math.PI * 2); c.ellipse(ex2 + 2, ey2 - 56, 9, 5, 0.5, 0, Math.PI * 2); c.fill(); c.strokeStyle = "#fef3c7"; c.lineWidth = 3; c.beginPath(); c.moveTo(ex2, ey2 + 6); c.lineTo(ex2 + 6, ey2 + 40); c.stroke(); }
      // dropper
      c.fillStyle = "#7c2d12"; K.rr(c, drop.x - 8, drop.y - 40, 16, 22, 6); c.fill(); c.fillStyle = "rgba(226,232,240,.8)"; K.rr(c, drop.x - 5, drop.y - 20, 10, 46, 4); c.fill();
      c.fillStyle = "#b45309"; c.fillRect(drop.x - 3, drop.y, 6, 22); K.txt(c, t("iodine", "اليود"), drop.x, drop.y - 50, { c: C.ink, s: 12 });
      var cnt = spots.length;
      out.innerHTML = cnt ? (kind === "fresh" ? '<span class="chip blue">' + t("Blue-black = lots of starch (stored food)", "أزرق داكن = نشا كثير (غذاء مخزن)") + "</span>" : '<span class="chip orange">' + t("Little colour = the starch was used for germination", "لون خفيف = النشا استُهلك في الإنبات") + "</span>") : '<span class="chip">' + t("Starch test: drop iodine on a cotyledon", "الكشف عن النشا: ضع اليود على فلقة") + "</span>";
    });
  };

  /* -------- 4. p5_growth: two pots, sunlight and fertilizer -------- */
  L.p5_growth = function (host, cfg, done) {
    var NM = { light: ["sunlight", "ضوء الشمس"], fert: ["fertilizer", "السماد"] };
    host.innerHTML = hint(t("Set pot A and pot B, then drag the days slider. The graph records the height of each plant.", "جهّز الأصيص أ والأصيص ب ثم اسحب شريط الأيام، والرسم البياني يسجل طول كل نبات."));
    var S = K.make(host, 0.56, 380), day = 0, pot = [{ light: "sun", fert: "no" }, { light: "dark", fert: "no" }];
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    function row(i) { return '<div class="gm-row" style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0"><b>' + (i ? t("Pot B", "الأصيص ب") : t("Pot A", "الأصيص أ")) + "</b> " + segHTML("pl" + i) + " " + segHTML("pf" + i) + "</div>"; }
    ctl.innerHTML = row(0) + row(1) + L._slider(t("Days", "الأيام"), 0, 35, 1, 0) + '<div class="btn-row"><button type="button" class="btn sm primary" id="gp">▶ ' + t("Grow 5 weeks", "انتظر ٥ أسابيع") + '</button></div><div class="meter gr-out"></div>';
    var out = ctl.querySelector(".gr-out"), playing = false;
    var tick = L._goals(host, [t("Fair test for sunlight (only light differs): grow 2 weeks or more.", "تجربة عادلة للضوء (الضوء وحده مختلف): انتظر أسبوعين أو أكثر."),
      t("Fair test for fertilizer: both in the sun, only fertilizer differs, grow 3 weeks.", "تجربة عادلة للسماد: الاثنان في الشمس والسماد وحده مختلف، انتظر ٣ أسابيع."),
      t("Grow a plant to 30 cm or more.", "اجعل نباتًا يصل طوله إلى ٣٠ سم أو أكثر.")], done);
    var ds = bindSl(ctl, 0, function (v) { return n(v); }, function (v) { day = v; check(); });
    [0, 1].forEach(function (i) {
      K.seg(ctl, "#pl" + i, [["sun", "☀️ " + t("sunlight", "ضوء الشمس")], ["dark", "📦 " + t("dark box", "صندوق مظلم")]], pot[i].light, function (v) { pot[i].light = v; ds.set(0); });
      K.seg(ctl, "#pf" + i, [["no", "💧 " + t("water only", "ماء فقط")], ["yes", "🧪 " + t("water + fertilizer", "ماء + سماد")]], pot[i].fert, function (v) { pot[i].fert = v; ds.set(0); });
    });
    ctl.querySelector("#gp").onclick = function () { ds.set(0); playing = true; };
    function hgt(p, d) { var k = d / 35; return p.light === "dark" ? 5 + 21 * k : p.fert === "yes" ? 5 + 27 * k : 5 + 18 * k; }
    function check() {
      var d = diffKeys(pot[0], pot[1], ["light", "fert"]);
      if (d.length === 1 && d[0] === "light" && day >= 14) tick(0);
      if (d.length === 1 && d[0] === "fert" && pot[0].light === "sun" && day >= 21) tick(1);
      if (hgt(pot[0], day) >= 30 || hgt(pot[1], day) >= 30) tick(2);
      out.innerHTML = fairHTML(d, NM) + [0, 1].map(function (i) {
        var p = pot[i], dk = p.light === "dark";
        return '<span class="chip ' + (dk ? "orange" : "green") + '">' + (i ? t("B", "ب") : t("A", "أ")) + ": " + n(Math.round(hgt(p, day) * 10) / 10) + " cm · " + (day < 5 ? t("young seedling", "شتلة صغيرة") : dk ? t("yellowish leaves, thin long stem", "أوراق مصفرة وساق رفيعة طويلة") : t("dark green leaves, thick stem", "أوراق خضراء داكنة وساق سميكة")) + "</span>";
      }).join("");
    }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      if (playing) { var nd = Math.min(35, day + dt * 7); ds.set(Math.round(nd * 10) / 10); if (nd >= 35) playing = false; }
      c.clearRect(0, 0, W, H);
      var pw = W * 0.5, base = H * 0.9, scale = (H * 0.68) / 34;
      [0, 1].forEach(function (i) {
        var p = pot[i], cx = pw * (i ? 0.73 : 0.27), h = hgt(p, day) * scale, dk = p.light === "dark", y = clamp(day / 14, 0, 1);
        if (!dk) K.dot(c, cx - 34, 22, 11, "#facc15");
        c.fillStyle = "#b45309"; c.beginPath(); c.moveTo(cx - 26, base - 26); c.lineTo(cx - 20, base); c.lineTo(cx + 20, base); c.lineTo(cx + 26, base - 26); c.closePath(); c.fill();
        if (p.fert === "yes") K.txt(c, "🧪", cx + 30, base - 12, { s: 13 });
        var sw = dk ? 2.5 : p.fert === "yes" ? 6.5 : 5, lean = dk ? Math.sin(day / 6) * 6 : 0;
        c.strokeStyle = dk ? "rgb(" + Math.round(lerp(34, 190, y)) + "," + Math.round(lerp(197, 200, y)) + ",90)" : "#15803d"; c.lineWidth = sw; c.lineCap = "round";
        c.beginPath(); c.moveTo(cx, base - 26); c.quadraticCurveTo(cx + lean, base - 26 - h / 2, cx + lean * 1.6, base - 26 - h); c.stroke();
        var nl = dk ? 2 + Math.floor(day / 12) : 2 + Math.floor(day / 5) + (p.fert === "yes" ? Math.floor(day / 8) : 0), ls = dk ? 6 : p.fert === "yes" ? 14 : 12;
        var lc = dk ? "rgb(" + Math.round(lerp(34, 234, y)) + "," + Math.round(lerp(197, 214, y)) + "," + Math.round(lerp(94, 80, y)) + ")" : "#166534";
        for (var j = 0; j < nl; j++) { var fy = base - 26 - h * (0.3 + 0.7 * (j + 1) / (nl + 0.5)), side = j % 2 ? 1 : -1; c.fillStyle = lc; c.beginPath(); c.ellipse(cx + lean + side * ls, fy, ls, ls * 0.5, side * 0.4, 0, Math.PI * 2); c.fill(); }
        if (dk) { c.strokeStyle = "rgba(120,53,15,.8)"; c.lineWidth = 2; c.setLineDash([6, 4]); c.strokeRect(cx - 44, base - 26 - 34 * scale - 6, 88, 34 * scale + 32); c.setLineDash([]); K.txt(c, "📦 " + t("dark box", "صندوق مظلم"), cx, base - 26 - 34 * scale + 6, { c: C.muted, s: 11 }); }
        K.txt(c, i ? t("B", "ب") : t("A", "أ"), cx, base + 10, { c: C.ink, s: 13 });
      });
      // graph
      var gx = W * 0.56, gy = 18, gw = W * 0.4, gh = H * 0.72;
      c.fillStyle = C.card; K.rr(c, gx - 6, gy - 8, gw + 18, gh + 34, 10); c.fill();
      c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.moveTo(gx + 22, gy); c.lineTo(gx + 22, gy + gh); c.lineTo(gx + gw, gy + gh); c.stroke();
      for (var v = 0; v <= 30; v += 10) { var yy = gy + gh - v / 34 * gh; K.txt(c, n(v), gx + 16, yy, { a: "right", c: C.muted, s: 10 }); c.strokeStyle = "rgba(148,163,184,.25)"; c.beginPath(); c.moveTo(gx + 22, yy); c.lineTo(gx + gw, yy); c.stroke(); }
      for (var wk = 0; wk <= 5; wk++) K.txt(c, n(wk), gx + 22 + (gw - 22) * wk / 5, gy + gh + 10, { c: C.muted, s: 10 });
      K.txt(c, t("weeks", "أسابيع"), gx + gw - 14, gy + gh + 22, { c: C.muted, s: 10 }); K.txt(c, "cm", gx + 10, gy - 2, { c: C.muted, s: 10 });
      ["#2563eb", "#f97316"].forEach(function (col, i) {
        c.strokeStyle = col; c.lineWidth = 3; c.beginPath();
        for (var d2 = 0; d2 <= day; d2 += 0.5) { var X = gx + 22 + (gw - 22) * d2 / 35, Y = gy + gh - hgt(pot[i], d2) / 34 * gh; if (d2 === 0) c.moveTo(X, Y); else c.lineTo(X, Y); }
        c.stroke(); K.txt(c, i ? t("B", "ب") : t("A", "أ"), gx + 34 + i * 18, gy + 8, { c: col, s: 12 });
      });
    });
    check();
  };

  /* -------- 5. p5_pollen: be the bee -------- */
  L.p5_pollen = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the bee to a male flower, then to a female flower. Tap a female flower to put on or take off its paper bag. Then skip a few days.", "اسحب النحلة إلى زهرة مذكرة ثم إلى زهرة مؤنثة، واضغط على زهرة مؤنثة لتضع الكيس الورقي أو تنزعه، ثم تقدّم بضعة أيام."));
    var S = K.make(host, 0.6, 400), day = 0, bee = { x: 0, y: 0, d: false, pol: 0 }, fl, ph = 0, lastToast = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm primary" id="fwd">⏩ ' + t("3 days later", "بعد ٣ أيام") + '</button><button type="button" class="btn sm ghost" id="rs">↺ ' + t("Start again", "ابدأ من جديد") + '</button></div><div class="meter po-out"></div>';
    var out = ctl.querySelector(".po-out");
    var tick = L._goals(host, [t("Load the bee with pollen from a male flower.", "حمّل النحلة بحبوب اللقاح من زهرة مذكرة."), t("Pollinate a female flower: pollen on the tip of the pistil.", "لقّح زهرة مؤنثة: حبوب اللقاح على قمة المتاع."),
      t("Skip ahead until a fruit grows, then tap it to see the seeds.", "تقدّم حتى تنمو ثمرة، ثم اضغط عليها لترى البذور."), t("Keep a female flower bagged (no pollen) and see what happens to it.", "اترك زهرة مؤنثة مغطاة بالكيس (بلا لقاح) وشاهد ما يحدث لها.")], done);
    function reset() { day = 0; bee.pol = 0; fl = [{ m: 1, fx: 0.13, fy: 0.5 }, { m: 1, fx: 0.32, fy: 0.46 }, { m: 0, fx: 0.6, fy: 0.5, bag: false, pol: false, pd: 0, cut: false }, { m: 0, fx: 0.83, fy: 0.46, bag: true, pol: false, pd: 0, cut: false }]; beeHome(); }
    function beeHome() { bee.x = S.W * 0.46; bee.y = S.H * 0.8; }
    function P(f) { return { x: f.fx * S.W, y: f.fy * S.H, r: Math.max(18, Math.min(S.W, S.H) * 0.075) }; }
    function age(f) { return f.pol ? day - f.pd : day; }
    function fruitLen(f, r) { return r * (0.5 + 2.2 * clamp(age(f) / 6, 0, 1)); }
    reset(); S.onSize = function () { if (!bee.d) beeHome(); };
    ctl.querySelector("#fwd").onclick = function () { if (day >= 9) { E.toast(t("Press Start again to replay.", "اضغط «ابدأ من جديد» لتعيد.")); return; } day += 3; if (fl.some(function (f) { return !f.m && !f.pol && day >= 6; })) tick(3); };
    ctl.querySelector("#rs").onclick = reset;
    S.drag({
      down: function (p) {
        if (Math.hypot(p.x - bee.x, p.y - bee.y) < 34) { bee.d = true; return true; }
        fl.forEach(function (f) {
          if (f.m) return; var q = P(f);
          if (f.pol && age(f) >= 6) { var fl2 = fruitLen(f, q.r); if (Math.abs(p.x - q.x) < q.r * 0.6 && p.y > q.y + q.r * 0.4 && p.y < q.y + q.r * 0.5 + fl2) { f.cut = true; tick(2); E.speak(t("Seeds inside the fruit!", "بذور داخل الثمرة!")); } return; }
          if (Math.hypot(p.x - q.x, p.y - q.y) < q.r * 1.1 && day < 3) { f.bag = !f.bag; }
        });
        return false;
      },
      move: function (p) {
        bee.x = p.x; bee.y = p.y;
        fl.forEach(function (f) {
          var q = P(f); if (Math.hypot(p.x - q.x, p.y - q.y) > q.r * 0.7) return;
          if (f.m) { if (day < 6 && bee.pol < 12) { bee.pol = 12; tick(0); E.speak(t("The bee is dusted with pollen.", "النحلة مغطاة بحبوب اللقاح.")); } }
          else if (f.bag) { if (ph - lastToast > 2) { lastToast = ph; E.toast(t("The paper bag stops the bee.", "الكيس الورقي يمنع النحلة.")); } }
          else if (!f.pol && day < 3 && bee.pol > 0) { f.pol = true; f.pd = day; bee.pol -= 6; tick(1); E.speak(t("Pollination! Pollen is on the pistil.", "تم التلقيح! حبوب اللقاح على المتاع.")); }
        });
      },
      up: function () { bee.d = false; },
      hover: function (p) { return Math.hypot(p.x - bee.x, p.y - bee.y) < 34; }
    });
    function petals(c, x, y, r, col) { for (var i = 0; i < 5; i++) { var a = i * 1.2566 - 1.57; c.fillStyle = col; c.beginPath(); c.ellipse(x + Math.cos(a) * r * 0.55, y + Math.sin(a) * r * 0.55, r * 0.5, r * 0.34, a, 0, Math.PI * 2); c.fill(); } }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, i; ph += dt;
      c.clearRect(0, 0, W, H);
      var vy = H * 0.2, gy = H * 0.94;
      c.fillStyle = "#a8a29e"; c.fillRect(0, gy, W, H - gy);
      c.strokeStyle = "#15803d"; c.lineWidth = 5; c.beginPath(); c.moveTo(0, vy); for (var x = 0; x <= W; x += 10) c.lineTo(x, vy + Math.sin(x / 40) * 6); c.stroke();
      for (x = 30; x < W; x += 90) { c.fillStyle = "#22c55e"; c.beginPath(); c.ellipse(x, vy - 14, 20, 12, -0.3, 0, Math.PI * 2); c.fill(); }
      fl.forEach(function (f) {
        var q = P(f), a = age(f);
        c.strokeStyle = "#15803d"; c.lineWidth = 3; c.beginPath(); c.moveTo(q.x, vy); c.lineTo(q.x, q.y - q.r * 0.3); c.stroke();
        if (f.m) {
          K.dot(c, q.x, q.y + q.r * 0.55, q.r * 0.25, "#4ade80");
          petals(c, q.x, q.y, q.r, "#fde047"); c.fillStyle = "#f59e0b"; K.rr(c, q.x - 5, q.y - 10, 10, 20, 4); c.fill();
          for (var i = 0; i < 6; i++) K.dot(c, q.x - 6 + (i % 3) * 6, q.y - 12 + Math.floor(i / 3) * 4, 2.2, "#facc15");
          K.txt(c, t("male", "مذكرة"), q.x, q.y + q.r * 1.15, { c: C.ink, s: 11 });
          return;
        }
        var fell = !f.pol && day >= 6, withered = !f.pol && day >= 3;
        if (fell) { c.fillStyle = "#ca8a04"; c.beginPath(); c.ellipse(q.x + 10, gy - 6, q.r * 0.5, q.r * 0.2, 0.2, 0, Math.PI * 2); c.fill(); K.txt(c, t("fell off", "سقطت"), q.x + 10, gy - 22, { c: C.ink, s: 11 }); return; }
        if (f.pol) {
          var L2 = fruitLen(f, q.r);
          if (f.cut) { c.fillStyle = "#bbf7d0"; c.strokeStyle = "#15803d"; c.lineWidth = 2; c.beginPath(); c.ellipse(q.x, q.y + q.r * 0.4 + L2 / 2, q.r * 0.38, L2 / 2, 0, 0, Math.PI * 2); c.fill(); c.stroke(); for (i = 0; i < 8; i++) K.dot(c, q.x + (i % 2 ? 5 : -5), q.y + q.r * 0.4 + L2 * (0.15 + i * 0.09), 3.5, "#1f2937"); K.txt(c, t("seeds", "بذور"), q.x + q.r * 0.6, q.y + q.r * 0.4 + L2 / 2, { a: "left", c: C.ink, s: 11 }); }
          else { c.fillStyle = "#65a30d"; K.rr(c, q.x - q.r * 0.3, q.y + q.r * 0.3, q.r * 0.6, L2, q.r * 0.3); c.fill(); for (i = 1; i < 4; i++) { c.strokeStyle = "rgba(20,83,45,.5)"; c.lineWidth = 1; c.beginPath(); c.moveTo(q.x - q.r * 0.3 + i * q.r * 0.15, q.y + q.r * 0.4); c.lineTo(q.x - q.r * 0.3 + i * q.r * 0.15, q.y + q.r * 0.2 + L2); c.stroke(); } if (a >= 6) K.txt(c, "✂ " + t("tap", "اضغط"), q.x + q.r * 0.5, q.y + q.r * 0.5 + L2 / 2, { a: "left", c: C.ink, s: 11 }); }
          if (a < 3) { petals(c, q.x, q.y, q.r, "#fde047"); } else petals(c, q.x, q.y, q.r * 0.5, "#a16207");
        } else {
          K.dot(c, q.x, q.y + q.r * 0.6, q.r * 0.3, withered ? "#ca8a04" : "#4ade80", "#15803d");
          petals(c, q.x, q.y, withered ? q.r * 0.6 : q.r, withered ? "#d6a24a" : "#fde047");
        }
        if (!f.pol || a < 3) { c.strokeStyle = "#16a34a"; c.lineWidth = 4; c.lineCap = "round"; c.beginPath(); c.moveTo(q.x, q.y + 8); c.lineTo(q.x, q.y - 6); c.moveTo(q.x, q.y - 6); c.lineTo(q.x - 5, q.y - 12); c.moveTo(q.x, q.y - 6); c.lineTo(q.x + 5, q.y - 12); c.stroke(); if (f.pol) for (i = 0; i < 4; i++) K.dot(c, q.x - 6 + i * 4, q.y - 13, 2, "#facc15"); }
        if (f.bag && !f.pol) { c.fillStyle = "rgba(214,188,140,.82)"; K.rr(c, q.x - q.r * 1.05, q.y - q.r * 1.0, q.r * 2.1, q.r * 2.1, 8); c.fill(); c.strokeStyle = "#92400e"; c.lineWidth = 1.5; c.stroke(); K.txt(c, t("paper bag", "كيس ورقي"), q.x, q.y, { c: "#422006", s: 11 }); }
        K.txt(c, t("female", "مؤنثة"), q.x, q.y - q.r * 1.2, { c: C.ink, s: 11 });
      });
      // bee
      var wing = Math.sin(ph * 40) * 4;
      c.fillStyle = "rgba(255,255,255,.75)"; c.beginPath(); c.ellipse(bee.x - 4, bee.y - 12 - wing, 9, 6, -0.5, 0, Math.PI * 2); c.ellipse(bee.x + 6, bee.y - 12 + wing, 9, 6, 0.5, 0, Math.PI * 2); c.fill();
      c.fillStyle = "#facc15"; c.beginPath(); c.ellipse(bee.x, bee.y, 16, 11, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = "#1f2937"; c.fillRect(bee.x - 6, bee.y - 10, 4, 20); c.fillRect(bee.x + 3, bee.y - 10, 4, 20); K.dot(c, bee.x + 15, bee.y - 2, 5, "#1f2937");
      for (i = 0; i < bee.pol; i++) K.dot(c, bee.x - 12 + (i % 6) * 5, bee.y + 12 + Math.floor(i / 6) * 4, 2, "#fbbf24");
      if (!bee.d && !bee.pol && day === 0) { c.strokeStyle = "rgba(37,99,235," + (0.4 + 0.3 * Math.sin(ph * 4)) + ")"; c.lineWidth = 3; c.beginPath(); c.arc(bee.x, bee.y, 26, 0, Math.PI * 2); c.stroke(); }
      K.txt(c, t("Day ", "اليوم ") + n(day), W - 12, H - 14, { a: "right", c: "#1f2937", s: 13 });
      out.innerHTML = '<span class="chip">🐝 ' + (bee.pol ? t("carrying pollen", "تحمل حبوب لقاح") : t("no pollen yet", "بلا حبوب لقاح")) + "</span>" + fl.filter(function (f) { return !f.m; }).map(function (f, i) {
        var s = f.pol ? (age(f) >= 6 ? t("pollinated: a fruit with seeds", "ملقحة: ثمرة بها بذور") : t("pollinated: swelling growing", "ملقحة: الانتفاخ يكبر")) : day >= 6 ? t("not pollinated: fell off", "غير ملقحة: سقطت") : day >= 3 ? t("not pollinated: turning yellow", "غير ملقحة: تصفر") : f.bag ? t("bagged", "مغطاة بكيس") : t("open", "متفتحة");
        return '<span class="chip ' + (f.pol ? "green" : "") + '">' + t("Female ", "مؤنثة ") + n(i + 1) + ": " + s + "</span>";
      }).join("");
    });
  };

  /* -------- 5b. p5_scope: use the microscope -------- */
  L.p5_scope = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose the lenses, tilt the reflector, turn the focus knob, and drag inside the circle to move the slide.", "اختر العدسات، وأمِل المرآة العاكسة، وأدر الضابط، واسحب داخل الدائرة لتحريك الشريحة."));
    var S = K.make(host, 0.56, 380), eye = 10, obj = 4, foc = 20, refl = 15, sx = 70, sy = -40, grains = [], last = null, ph = 0;
    for (var i = 0; i < 16; i++) grains.push({ x: K.rnd(-260, 260), y: K.rnd(-200, 200), r: K.rnd(11, 15), s: K.rnd(0, 6) });
    grains[0].x = 0; grains[0].y = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><b>' + t("Eyepiece", "العدسة العينية") + "</b> " + segHTML("se") + " <b>" + t("Objective", "العدسة الشيئية") + "</b> " + segHTML("so") + "</div>" +
      L._slider(t("Reflector (mirror) angle", "زاوية المرآة العاكسة"), 0, 100, 1, refl) + L._slider(t("Adjustment knob (focus)", "الضابط (ضبط الصورة)"), 0, 100, 1, foc) + '<div class="meter sc-out"></div>';
    var out = ctl.querySelector(".sc-out");
    var tick = L._goals(host, [t("Tilt the reflector to make the view bright.", "أمِل المرآة العاكسة لتصبح الرؤية مضيئة."), t("Turn the focus knob until the pollen is sharp.", "أدر الضابط حتى تظهر حبوب اللقاح واضحة."),
      t("At 100× or more, move a pollen grain to the centre. Which way does it move?", "عند ١٠٠× أو أكثر حرّك حبة لقاح إلى المركز. في أي اتجاه تتحرك؟"), t("Set the magnification to 400×.", "اضبط قوة التكبير على ٤٠٠×.")], done);
    K.seg(ctl, "#se", [["10", "10×"], ["15", "15×"]], "10", function (v) { eye = Number(v); });
    K.seg(ctl, "#so", [["4", "4×"], ["10", "10×"], ["40", "40×"]], "4", function (v) { obj = Number(v); });
    bindSl(ctl, 0, function (v) { return n(v); }, function (v) { refl = v; });
    bindSl(ctl, 1, function (v) { return n(v); }, function (v) { foc = v; });
    function view() { var R = Math.min(S.W * 0.27, S.H * 0.4); return { cx: S.W * 0.69, cy: S.H * 0.46, R: R }; }
    function ppu() { return view().R / (9000 / (eye * obj)); }
    S.drag({
      down: function (p) { var v = view(); if (Math.hypot(p.x - v.cx, p.y - v.cy) < v.R) { last = p; return true; } return false; },
      move: function (p) { var k = ppu(); sx += (p.x - last.x) / k; sy += (p.y - last.y) / k; sx = clamp(sx, -320, 320); sy = clamp(sy, -260, 260); last = p; },
      up: function () { last = null; },
      hover: function (p) { var v = view(); return Math.hypot(p.x - v.cx, p.y - v.cy) < view().R; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, v = view(), mag = eye * obj, k = ppu(); ph += dt;
      var rf = clamp(1 - Math.abs(refl - 70) / 55, 0, 1), dim = 1 - 0.42 * Math.log(mag / 40) / Math.log(15), br = rf * dim;
      var err = Math.abs(foc - 50), tol = mag >= 400 ? 4 : 6, blur = err <= tol ? 0 : (err - tol) * (0.35 + mag / 400);
      if (rf > 0.85) tick(0); if (err <= tol && rf > 0.4) tick(1); if (mag === 400) tick(3);
      c.clearRect(0, 0, W, H);
      // microscope drawing
      var mx = W * 0.2, base = H * 0.92, tube = H * 0.12 + (100 - foc) * 0.25;
      c.fillStyle = "#475569"; K.rr(c, mx - 50, base - 14, 100, 14, 5); c.fill();
      c.strokeStyle = "#475569"; c.lineWidth = 12; c.lineCap = "round"; c.beginPath(); c.moveTo(mx + 34, base - 14); c.quadraticCurveTo(mx + 60, H * 0.45, mx + 22, tube + 30); c.stroke();
      c.fillStyle = "#334155"; K.rr(c, mx - 40, H * 0.62, 80, 8, 3); c.fill(); c.fillStyle = "rgba(186,230,253,.9)"; c.fillRect(mx - 24, H * 0.62 - 3, 48, 4);
      c.fillStyle = "#64748b"; K.rr(c, mx - 9, tube, 18, H * 0.2, 4); c.fill(); c.fillStyle = "#1e293b"; K.rr(c, mx - 7, tube - 18, 14, 20, 3); c.fill();
      var ol = obj === 4 ? 14 : obj === 10 ? 22 : 32; c.fillStyle = "#94a3b8"; K.rr(c, mx - 5, tube + H * 0.2, 10, ol, 3); c.fill();
      c.save(); c.translate(mx, H * 0.78); c.rotate((refl - 50) / 100); c.fillStyle = "#cbd5e1"; c.fillRect(-16, -3, 32, 6); c.restore();
      K.dot(c, mx + 46, H * 0.5, 9, "#334155");
      K.txt(c, t("eyepiece", "العينية"), mx - 14, tube - 10, { a: "right", c: C.muted, s: 10 }); K.txt(c, t("objective", "الشيئية"), mx - 10, tube + H * 0.2 + ol / 2, { a: "right", c: C.muted, s: 10 });
      K.txt(c, t("stage", "المنضدة"), mx - 44, H * 0.62 + 4, { a: "right", c: C.muted, s: 10 }); K.txt(c, t("reflector", "المرآة"), mx - 20, H * 0.78, { a: "right", c: C.muted, s: 10 }); K.txt(c, t("knob", "الضابط"), mx + 58, H * 0.5, { a: "left", c: C.muted, s: 10 });
      // view
      c.save(); c.beginPath(); c.arc(v.cx, v.cy, v.R, 0, Math.PI * 2); c.clip();
      var l = Math.round(25 + 225 * br); c.fillStyle = "rgb(" + l + "," + l + "," + Math.round(l * 0.95) + ")"; c.fillRect(v.cx - v.R, v.cy - v.R, v.R * 2, v.R * 2);
      var near = 1e9;
      grains.forEach(function (g) {
        var ix = v.cx - (g.x + sx) * k, iy = v.cy - (g.y + sy) * k, r = g.r * k;
        if (ix < v.cx - v.R - r || ix > v.cx + v.R + r || iy < v.cy - v.R - r || iy > v.cy + v.R + r) return;
        near = Math.min(near, Math.hypot(ix - v.cx, iy - v.cy));
        var reps = blur > 0.5 ? 4 : 1;
        for (var j = 0; j < reps; j++) {
          var ox = reps > 1 ? Math.cos(j * 1.57) * blur : 0, oy = reps > 1 ? Math.sin(j * 1.57) * blur : 0;
          c.globalAlpha = (reps > 1 ? 0.3 : 1) * (0.3 + 0.7 * br);
          c.fillStyle = "#eab308"; c.beginPath(); c.arc(ix + ox, iy + oy, r, 0, Math.PI * 2); c.fill();
          if (r > 6) { c.strokeStyle = "#a16207"; c.lineWidth = Math.max(1, r * 0.06); for (var sp = 0; sp < 14; sp++) { var a = sp / 14 * Math.PI * 2 + g.s; c.beginPath(); c.moveTo(ix + ox + Math.cos(a) * r, iy + oy + Math.sin(a) * r); c.lineTo(ix + ox + Math.cos(a) * r * 1.18, iy + oy + Math.sin(a) * r * 1.18); c.stroke(); } }
        }
        c.globalAlpha = 1;
      });
      c.restore();
      c.strokeStyle = C.ink; c.lineWidth = 4; c.beginPath(); c.arc(v.cx, v.cy, v.R, 0, Math.PI * 2); c.stroke();
      c.strokeStyle = "rgba(239,68,68,.6)"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(v.cx - 8, v.cy); c.lineTo(v.cx + 8, v.cy); c.moveTo(v.cx, v.cy - 8); c.lineTo(v.cx, v.cy + 8); c.stroke();
      if (mag >= 100 && near < v.R * 0.15) tick(2);
      K.txt(c, t("Drag to move the slide", "اسحب لتحريك الشريحة"), v.cx, v.cy + v.R + 14, { c: C.muted, s: 11 });
      out.innerHTML = '<span class="chip blue">' + t("Magnification", "قوة التكبير") + " " + eq(eye + " × " + obj + " = " + mag + "×") + "</span>" +
        '<span class="chip">' + (mag <= 60 ? t("Low: wide and bright view", "تكبير صغير: مجال واسع ومضيء") : t("High: narrow and darker view", "تكبير كبير: مجال ضيق وأقل إضاءة")) + "</span>" +
        '<span class="chip ' + (blur ? "orange" : "green") + '">' + (blur ? t("Blurry: turn the knob", "غير واضحة: أدر الضابط") : t("In focus ✔", "واضحة ✔")) + "</span>" +
        '<span class="chip">' + t("Image is upside down and reversed", "الصورة مقلوبة ومعكوسة") + "</span>";
    });
  };

  /* -------- 6. p5_life: growth stages and healthy growth -------- */
  L.p5_life = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the age slider to watch a person grow. Then switch to Healthy growth and set food, sleep and exercise.", "اسحب شريط العمر لتشاهد الإنسان ينمو، ثم انتقل إلى «النمو السليم» واضبط الغذاء والنوم والرياضة.")) + '<div class="seg" id="lfm"></div>';
    var S = K.make(host, 0.6, 400), mode = "st", age = 30, food = 2, sleep = 7, ex = 20, ph = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="lf-st">' + L._slider(t("Age (years)", "العمر (بالسنوات)"), 0, 80, 1, age) + '</div><div class="lf-hg" hidden>' +
      L._slider(t("Healthy food today (milk, washed fruit and vegetables)", "طعام صحي اليوم (لبن، فاكهة وخضراوات مغسولة)"), 0, 5, 1, food, "") + L._slider(t("Sleep (hours)", "النوم (ساعات)"), 5, 12, 0.5, sleep, "h") + L._slider(t("Exercise (minutes)", "الرياضة (دقائق)"), 0, 90, 5, ex, "min") + "</div>" + '<div class="meter lf-out"></div>';
    var out = ctl.querySelector(".lf-out");
    var tick = L._goals(host, [t("Slide to infancy: who does the baby depend on?", "انتقل إلى مرحلة الرضاعة: على من يعتمد الرضيع؟"), t("Slide to childhood: walking, talking and school.", "انتقل إلى الطفولة: المشي والكلام والمدرسة."),
      t("Visit old age.", "زُر مرحلة الشيخوخة."), t("Healthy growth: turn all three conditions green.", "النمو السليم: اجعل الشروط الثلاثة خضراء.")], done);
    K.seg(host, "#lfm", [["st", "👶 " + t("Growth stages", "مراحل النمو")], ["hg", "💪 " + t("Healthy growth", "النمو السليم")]], mode, function (v) { mode = v; ctl.querySelector(".lf-st").hidden = v !== "st"; ctl.querySelector(".lf-hg").hidden = v !== "hg"; });
    var HT = [[0, 50], [1, 75], [2, 87], [6, 115], [10, 138], [12, 150], [16, 165], [20, 170], [60, 170], [80, 163]];
    function hcm(a) { for (var i = 1; i < HT.length; i++) if (a <= HT[i][0]) return lerp(HT[i - 1][1], HT[i][1], (a - HT[i - 1][0]) / (HT[i][0] - HT[i - 1][0])); return 163; }
    var STG = [["Infancy", "الرضاعة"], ["Childhood", "الطفولة"], ["Youth", "الشباب"], ["Adulthood", "النضج"], ["Old age", "الشيخوخة"]];
    var STX = [["Depends completely on the mother for food, care and protection.", "يعتمد تمامًا على أمه في الغذاء والرعاية والحماية."], ["Walks, talks and goes to school. Bones and muscles get stronger.", "يمشي ويتكلم ويذهب إلى المدرسة، وتقوى العظام والعضلات."], ["Still growing: bigger, stronger, more complex.", "ما زال ينمو: أكبر وأقوى وأكثر تعقيدًا."], ["Fully grown. Parents care for and protect their children.", "اكتمل النمو، ويرعى الوالدان أبناءهما ويحميانهم."], ["The last stage of life.", "المرحلة الأخيرة من الحياة."]];
    function stg(a) { return a < 2 ? 0 : a < 12 ? 1 : a < 20 ? 2 : a < 60 ? 3 : 4; }
    bindSl(ctl, 0, function (v) { return n(v); }, function (v) { age = v; var s = stg(v); if (s === 0) tick(0); if (s === 1) tick(1); if (s === 4) tick(2); });
    bindSl(ctl, 1, function (v) { return n(v); }, function (v) { food = v; });
    bindSl(ctl, 2, function (v) { return n(v) + " " + t("h", "س"); }, function (v) { sleep = v; });
    bindSl(ctl, 3, function (v) { return n(v) + " " + t("min", "د"); }, function (v) { ex = v; });
    function person(c, x, foot, hpx, o) {
      var head = hpx * (o.baby ? 0.26 : o.kid ? 0.17 : 0.13), body = hpx * 0.36, leg = hpx - head * 2 - body;
      c.strokeStyle = o.skin || "#fdba74"; c.lineCap = "round";
      c.lineWidth = Math.max(4, hpx * 0.07); c.strokeStyle = "#475569"; c.beginPath(); c.moveTo(x - hpx * 0.05, foot); c.lineTo(x - hpx * 0.04, foot - leg); c.moveTo(x + hpx * 0.05, foot); c.lineTo(x + hpx * 0.04, foot - leg); c.stroke();
      c.fillStyle = o.shirt || "#60a5fa"; K.rr(c, x - hpx * 0.11, foot - leg - body, hpx * 0.22, body, hpx * 0.05); c.fill();
      c.strokeStyle = "#fdba74"; c.lineWidth = Math.max(3, hpx * 0.05); c.beginPath(); c.moveTo(x - hpx * 0.11, foot - leg - body * 0.9); c.lineTo(x - hpx * 0.17, foot - leg - body * 0.2); c.moveTo(x + hpx * 0.11, foot - leg - body * 0.9); c.lineTo(x + hpx * 0.17, foot - leg - body * 0.2); c.stroke();
      K.dot(c, x, foot - leg - body - head, head, "#fdba74");
      c.fillStyle = o.hair || "#1f2937"; c.beginPath(); c.arc(x, foot - leg - body - head, head, Math.PI, 0); c.fill();
    }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; ph += dt;
      c.clearRect(0, 0, W, H);
      var foot = H * 0.88, sc = (H * 0.74) / 180;
      c.fillStyle = "#a8a29e"; c.fillRect(0, foot, W, 6);
      if (mode === "st") {
        var s = stg(age), h = hcm(age);
        // ruler
        c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.moveTo(40, foot); c.lineTo(40, foot - 180 * sc); c.stroke();
        for (var v = 0; v <= 180; v += 30) { var yy = foot - v * sc; c.beginPath(); c.moveTo(34, yy); c.lineTo(46, yy); c.stroke(); K.txt(c, n(v), 30, yy, { a: "right", c: C.muted, s: 10 }); }
        c.strokeStyle = "rgba(239,68,68,.6)"; c.setLineDash([4, 4]); c.beginPath(); c.moveTo(40, foot - h * sc); c.lineTo(W * 0.55, foot - h * sc); c.stroke(); c.setLineDash([]);
        K.txt(c, n(Math.round(h)) + " cm", 50, foot - h * sc - 10, { a: "left", c: "#dc2626", s: 12 });
        var px = W * 0.38;
        if (s === 0) {
          person(c, px - 46, foot, 165 * sc, { shirt: "#f472b6", hair: "#1f2937" });
          c.fillStyle = "#fde68a"; K.rr(c, px - 30, foot - 100 * sc, h * sc * 0.9, 24 * sc + 6, 10); c.fill(); K.dot(c, px - 26 + h * sc * 0.9, foot - 100 * sc + 10, 10, "#fdba74");
          K.txt(c, "🍼", px + h * sc * 0.6, foot - 130 * sc, { s: 20 });
          K.txt(c, t("mother", "الأم"), px - 46, foot + 16, { c: C.ink, s: 11 });
        } else {
          person(c, px, foot, h * sc, { shirt: ["", "#86efac", "#fcd34d", "#c4b5fd", "#cbd5e1"][s], hair: s === 4 ? "#e5e7eb" : "#1f2937", kid: s === 1 });
          if (s === 1) { c.fillStyle = "#2563eb"; K.rr(c, px + h * sc * 0.1, foot - h * sc * 0.62, h * sc * 0.16, h * sc * 0.22, 4); c.fill(); }
          if (s === 4) { c.strokeStyle = "#92400e"; c.lineWidth = 4; c.beginPath(); c.moveTo(px + h * sc * 0.2, foot - h * sc * 0.5); c.lineTo(px + h * sc * 0.26, foot); c.stroke(); }
        }
        // stage strip
        var sx0 = W * 0.6, sw = W * 0.38;
        STG.forEach(function (g, i) { var yy = 24 + i * Math.min(44, H * 0.13); c.fillStyle = i === s ? "rgba(37,99,235,.18)" : C.card; K.rr(c, sx0, yy - 15, sw, 30, 10); c.fill(); if (i === s) { c.strokeStyle = "#2563eb"; c.lineWidth = 2; c.stroke(); } K.txt(c, n(i + 1) + ". " + T(g), sx0 + 12, yy, { a: "left", c: C.ink, s: 13, w: i === s ? 900 : 700 }); });
        K.txt(c, t("Age ", "العمر ") + n(age), W * 0.32, 16, { c: C.ink, s: 13 });
        out.innerHTML = '<span class="chip blue">' + esc(T(STG[s])) + "</span><span class=\"chip\">" + esc(T(STX[s])) + "</span>" + (age === 0 ? '<span class="chip">' + t("Just born, after about 9 months inside the mother's body", "وُلد للتو بعد نحو ٩ أشهر داخل جسم الأم") + "</span>" : "");
      } else {
        var okF = food >= 4, okS = sleep >= 9, okE = ex >= 60, all = okF && okS && okE, score = (food / 5 + clamp((sleep - 5) / 4, 0, 1) + ex / 60) / 3;
        if (all) tick(3);
        var hp = H * 0.62 * (0.85 + 0.15 * clamp(score, 0, 1));
        person(c, W * 0.3, foot, hp, { shirt: all ? "#22c55e" : "#94a3b8", kid: true });
        var beat = 1 + 0.12 * Math.max(0, Math.sin(ph * (3 + ex / 20)));
        K.txt(c, "❤️", W * 0.3, foot - hp * 0.55, { s: 18 * beat });
        [["🥛", t("Healthy diet", "الغذاء الصحي"), okF, food / 5], ["😴", t("Enough sleep", "النوم الكافي"), okS, clamp((sleep - 5) / 5, 0, 1)], ["⚽", t("Proper exercise", "الرياضة المناسبة"), okE, ex / 90]].forEach(function (b, i) {
          var yy = H * 0.18 + i * H * 0.2, bx = W * 0.52, bw = W * 0.42;
          K.txt(c, b[0] + " " + b[1], bx, yy - 14, { a: "left", c: C.ink, s: 13 });
          c.fillStyle = C.card; K.rr(c, bx, yy - 4, bw, 14, 7); c.fill(); c.fillStyle = b[2] ? "#22c55e" : "#f97316"; K.rr(c, bx, yy - 4, Math.max(14, bw * b[3]), 14, 7); c.fill();
          K.txt(c, b[2] ? "✔" : "…", bx + bw + 12, yy + 3, { c: b[2] ? "#16a34a" : C.muted, s: 14 });
        });
        out.innerHTML = all ? '<span class="chip green">' + t("All three conditions: the body grows strong and healthy!", "الشروط الثلاثة متوفرة: الجسم ينمو قويًا سليمًا!") + "</span>" :
          '<span class="chip">' + t("While you sleep the brain rests and the body is built; exercise makes the heart and muscles stronger.", "أثناء النوم يرتاح المخ ويُبنى الجسم، والرياضة تقوي القلب والعضلات.") + "</span>";
      }
    });
  };

  /* -------- 7. p5_animals: kittens vs fish eggs -------- */
  L.p5_animals = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the time slider (or press Play). Compare the cat and the fish. Change how many eggs the fish lays and run again.", "اسحب شريط الزمن (أو اضغط تشغيل) وقارن القطة بالسمكة، وغيّر عدد البيض الذي تضعه السمكة وأعد التجربة."));
    var S = K.make(host, 0.66, 440), tm = 0, eggs = 100, fry = [], playing = false, ph = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Time", "الزمن"), 0, 100, 1, 0) + L._slider(t("Eggs the fish lays", "عدد البيض الذي تضعه السمكة"), 10, 400, 10, eggs) +
      '<div class="btn-row"><button type="button" class="btn sm primary" id="apl">▶ ' + t("Play", "تشغيل") + '</button></div><div class="meter an-out"></div>';
    var out = ctl.querySelector(".an-out");
    var tick = L._goals(host, [t("Watch the kittens being born and drinking milk.", "شاهد ولادة القطط الصغيرة ورضاعتها اللبن."), t("Watch the fish eggs hatch.", "شاهد فقس بيض السمك."),
      t("Few eggs: lay 20 or fewer and play to the end. How many survive?", "بيض قليل: ضع ٢٠ بيضة أو أقل وشغّل حتى النهاية. كم سمكة تبقى؟"), t("Many eggs: lay 300 or more and keep 10 or more young fish alive at the end.", "بيض كثير: ضع ٣٠٠ بيضة أو أكثر واحتفظ بـ ١٠ أسماك صغيرة أو أكثر حية في النهاية.")], done);
    function make() {
      fry = []; var keep = Math.round(eggs * 0.05);
      for (var i = 0; i < eggs; i++) fry.push({ ex: K.rnd(0.08, 0.6), ey: K.rnd(0.82, 0.95), x: 0, y: 0, vx: K.rnd(-30, 30), vy: K.rnd(-15, 15), die: 1e9 });
      var idx = E.shuffle(fry.map(function (f, i) { return i; }));
      idx.forEach(function (j, r) { fry[j].die = r < keep ? 1e9 : K.rnd(38, 99); });
      fry.forEach(function (f) { f.x = f.ex; f.y = f.ey; });
    }
    var ts = bindSl(ctl, 0, function (v) { return n(v); }, function (v) { tm = v; status(); });
    bindSl(ctl, 1, function (v) { return n(v); }, function (v) { eggs = v; make(); ts.set(0); });
    ctl.querySelector("#apl").onclick = function () { if (tm >= 100) ts.set(0); playing = !playing; this.innerHTML = playing ? "⏸ " + t("Pause", "إيقاف") : "▶ " + t("Play", "تشغيل"); };
    function alive() { return tm < 35 ? 0 : fry.filter(function (f) { return f.die > tm; }).length; }
    function status() {
      var a = alive();
      if (tm >= 32) tick(0); if (tm >= 37) tick(1);
      if (tm >= 99 && eggs <= 20) tick(2); if (tm >= 99 && eggs >= 300 && a >= 10) tick(3);
      var cat = tm < 30 ? t("Kittens growing inside the mother's body", "القطط الصغيرة تنمو داخل جسم الأم") : tm < 60 ? t("4 kittens born: drinking mother's milk", "وُلدت ٤ قطط: ترضع لبن الأم") : t("Kittens growing: they look like their parents", "القطط الصغيرة تكبر وتشبه آباءها");
      var fish = tm < 10 ? t("Laying eggs in the water…", "تضع البيض في الماء…") : tm < 35 ? n(eggs) + t(" eggs in the water", " بيضة في الماء") : t("Hatched! Young fish alive: ", "فقست! الأسماك الصغيرة الحية: ") + n(a) + " / " + n(eggs);
      out.innerHTML = '<span class="chip orange">🐱 ' + cat + '</span><span class="chip blue">🐟 ' + fish + "</span>";
    }
    make();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; ph += dt;
      if (playing) { var nt = Math.min(100, tm + dt * 9); ts.set(Math.round(nt * 10) / 10); if (nt >= 100) { playing = false; ctl.querySelector("#apl").innerHTML = "▶ " + t("Play", "تشغيل"); } }
      c.clearRect(0, 0, W, H);
      var mid = H * 0.46;
      c.fillStyle = "rgba(251,146,60,.14)"; c.fillRect(0, 0, W, mid); c.fillStyle = "rgba(59,130,246,.22)"; c.fillRect(0, mid, W, H - mid);
      // cat scene
      var cx = W * 0.3, cy = mid * 0.62, s = Math.min(W, H) * 0.0024;
      c.save(); c.translate(cx, cy); c.scale(s * 40, s * 40);
      c.fillStyle = "#f59e0b"; c.beginPath(); c.ellipse(0, 0, 1.3, tm < 30 ? 0.62 + 0.25 * tm / 30 : 0.6, 0, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(1.3, -0.45, 0.5, 0, Math.PI * 2); c.fill(); c.beginPath(); c.moveTo(1.0, -0.8); c.lineTo(1.1, -1.2); c.lineTo(1.35, -0.9); c.moveTo(1.4, -0.9); c.lineTo(1.65, -1.2); c.lineTo(1.7, -0.75); c.fill();
      c.strokeStyle = "#f59e0b"; c.lineWidth = 0.18; c.beginPath(); c.moveTo(-1.3, 0); c.quadraticCurveTo(-2, -0.3, -1.9, -0.9); c.stroke();
      c.fillStyle = "#b45309"; for (var st = -0.8; st < 0.9; st += 0.5) c.fillRect(st, -0.6, 0.15, 0.4);
      K.dot(c, 1.45, -0.5, 0.07, "#1f2937");
      if (tm < 30) { c.fillStyle = "rgba(255,255,255,.55)"; c.beginPath(); c.ellipse(0, 0.15, 0.6, 0.3, 0, 0, Math.PI * 2); c.fill(); for (var k2 = 0; k2 < 4; k2++) K.dot(c, -0.35 + k2 * 0.23, 0.15, 0.08, "#fcd34d"); }
      c.restore();
      if (tm >= 30) for (var k = 0; k < 4; k++) {
        var gk = tm < 60 ? 0.32 : 0.32 + 0.3 * (tm - 60) / 40, nurse = tm < 60;
        var u = s * 40, kx = nurse ? cx + (k - 1.5) * 0.55 * u : cx + (k - 1.5) * W * 0.07 + Math.sin(ph * 2 + k) * 8, ky = nurse ? cy + 0.75 * u : cy + 0.95 * u;
        c.save(); c.translate(kx, ky); c.scale(s * 40 * gk, s * 40 * gk);
        c.fillStyle = "#f59e0b"; c.beginPath(); c.ellipse(0, 0, 1.2, 0.6, 0, 0, Math.PI * 2); c.fill(); c.beginPath(); c.arc(nurse ? 0 : 1.2, nurse ? -0.8 : -0.4, 0.5, 0, Math.PI * 2); c.fill();
        c.fillStyle = "#b45309"; c.fillRect(-0.4, -0.55, 0.15, 0.35); c.fillRect(0.1, -0.55, 0.15, 0.35); c.restore();
        if (nurse && Math.sin(ph * 3 + k) > 0.6) K.dot(c, kx, ky - 0.35 * u, 2.5, "#fff");
      }
      K.txt(c, tm < 30 ? t("babies grow inside the mother", "الصغار تنمو داخل الأم") : tm < 60 ? t("mother's milk", "لبن الأم") : t("kittens look like their parents", "الصغار تشبه آباءها"), W * 0.72, mid * 0.5, { c: C.ink, s: 13 });
      K.txt(c, "🐱 " + t("Cat: gives birth", "القطة: تلد"), 10, 16, { a: "left", c: C.ink, s: 13 });
      // fish scene
      K.txt(c, "🐟 " + t("Tilapia: lays eggs", "البلطي: يبيض"), 10, mid + 16, { a: "left", c: C.ink, s: 13 });
      var mfx = W * (0.75 + 0.1 * Math.sin(ph * 0.6)), mfy = mid + (H - mid) * 0.35;
      c.fillStyle = "#64748b"; c.beginPath(); c.ellipse(mfx, mfy, 34, 15, 0, 0, Math.PI * 2); c.fill(); c.beginPath(); c.moveTo(mfx + 30, mfy); c.lineTo(mfx + 50, mfy - 13); c.lineTo(mfx + 50, mfy + 13); c.fill(); K.dot(c, mfx - 20, mfy - 3, 3, "#fff");
      var shown = tm < 10 ? Math.floor(eggs * tm / 10) : eggs;
      fry.forEach(function (f, i) {
        var X, Y;
        if (tm < 35) { if (i >= shown) return; X = f.ex * W; Y = mid + (H - mid) * f.ey; K.dot(c, X, Y, 2.6, "#fef3c7", "#d97706"); if (tm > 20) K.dot(c, X + 0.6, Y, 0.9, "#1f2937"); return; }
        if (f.die <= tm) return;
        f.x += f.vx * dt / W; f.y += f.vy * dt / (H - mid);
        if (f.x < 0.03 || f.x > 0.97) f.vx *= -1; if (f.y < 0.15 || f.y > 0.96) f.vy *= -1;
        if (Math.random() < 0.02) { f.vx = K.rnd(-30, 30); f.vy = K.rnd(-15, 15); }
        X = f.x * W; Y = mid + (H - mid) * f.y; c.fillStyle = "#93c5fd"; c.beginPath(); c.ellipse(X, Y, 4 + 3 * (tm - 35) / 65, 2, 0, 0, Math.PI * 2); c.fill();
      });
      if (tm > 38) { var px = W * (((tm - 38) * 2.3) % 140 / 100 - 0.2), py = mid + (H - mid) * 0.7; c.fillStyle = "#334155"; c.beginPath(); c.ellipse(px, py, 46, 18, 0, 0, Math.PI * 2); c.fill(); c.beginPath(); c.moveTo(px - 42, py); c.lineTo(px - 66, py - 15); c.lineTo(px - 66, py + 15); c.fill(); K.dot(c, px + 30, py - 5, 3, "#fff"); K.txt(c, t("hungry fish", "سمكة جائعة"), px, py - 26, { c: "#0f172a", s: 11 }); }
      if (tm >= 35 && tm < 42) K.txt(c, t("Hatching!", "الفقس!"), W * 0.34, mid + (H - mid) * 0.7, { c: "#0f172a", s: 15 });
    });
    status();
  };

  /* -------- 8. p5_weather: cloud cover and satellite forecast -------- */
  L.p5_weather = function (host, cfg, done) {
    host.innerHTML = hint(t("Tap the 8 parts of the sky to add or remove clouds. Switch the rain on or off. Then drag the time slider and watch the satellite image.", "اضغط على أجزاء السماء الثمانية لتضيف السحب أو تزيلها، وشغّل المطر أو أوقفه، ثم اسحب شريط الزمن وراقب صورة القمر الصناعي."));
    var S = K.make(host, 0.56, 380), sec = [1, 1, 0, 0, 0, 0, 0, 0], rain = false, hr = 0, drops = [], ph = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm tg" id="rn">🌧️ ' + t("Rain", "المطر") + "</button></div>" + L._slider(t("Satellite: hours from now", "القمر الصناعي: ساعات من الآن"), 0, 24, 1, 0) + '<div class="meter wx-out"></div>';
    var out = ctl.querySelector(".wx-out");
    var tick = L._goals(host, [t("Make the cloud cover 6. Is it still sunny?", "اجعل كمية السحب ٦. هل ما زال مشمسًا؟"), t("Make the weather cloudy (cloud cover 7 or 8).", "اجعل الطقس غائمًا (كمية السحب ٧ أو ٨)."),
      t("Rain with a low cloud cover: what is the weather now?", "مطر مع كمية سحب قليلة: ما حالة الطقس الآن؟"), t("Satellite: move time until the clouds from the west reach your town.", "القمر الصناعي: حرّك الزمن حتى تصل سحب الغرب إلى مدينتك.")], done);
    ctl.querySelector("#rn").onclick = function () { rain = !rain; this.classList.toggle("on", rain); };
    bindSl(ctl, 0, function (v) { return n(v) + " " + t("h", "س"); }, function (v) { hr = v; });
    function dome() { return { cx: S.W * 0.25, cy: S.H * 0.48, R: Math.min(S.W * 0.21, S.H * 0.36) }; }
    S.drag({
      down: function (p) {
        var d = dome(), dx = p.x - d.cx, dy = p.y - d.cy;
        if (Math.hypot(dx, dy) > d.R) return false;
        var a = Math.atan2(dy, dx); if (a < 0) a += Math.PI * 2; var i = Math.floor(a / (Math.PI / 4)) % 8; sec[i] = sec[i] ? 0 : 1; return false;
      },
      hover: function (p) { var d = dome(); return Math.hypot(p.x - d.cx, p.y - d.cy) < d.R; }
    });
    function cloud(c, x, y, r, col) { c.fillStyle = col; c.beginPath(); c.arc(x - r * 0.6, y, r * 0.6, 0, Math.PI * 2); c.arc(x, y - r * 0.3, r * 0.75, 0, Math.PI * 2); c.arc(x + r * 0.65, y, r * 0.55, 0, Math.PI * 2); c.fill(); }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, d = dome(); ph += dt;
      var cov = sec.reduce(function (a, b) { return a + b; }, 0), wx = rain ? "rain" : cov >= 7 ? "cloudy" : "sunny";
      if (cov === 6 && !rain) tick(0); if (cov >= 7) tick(1); if (rain && cov <= 6) tick(2);
      c.clearRect(0, 0, W, H);
      for (var i = 0; i < 8; i++) {
        var a0 = i * Math.PI / 4, a1 = a0 + Math.PI / 4;
        c.beginPath(); c.moveTo(d.cx, d.cy); c.arc(d.cx, d.cy, d.R, a0, a1); c.closePath(); c.fillStyle = sec[i] ? (rain ? "#94a3b8" : "#cbd5e1") : "#7dd3fc"; c.fill(); c.strokeStyle = C.card; c.lineWidth = 2; c.stroke();
        if (sec[i]) { var am = (a0 + a1) / 2; cloud(c, d.cx + Math.cos(am) * d.R * 0.6, d.cy + Math.sin(am) * d.R * 0.6, d.R * 0.17, rain ? "#64748b" : "#f8fafc"); }
      }
      if (!rain && cov < 7) K.dot(c, d.cx, d.cy, d.R * 0.12, "#facc15");
      if (rain) { for (var r = 0; r < 4; r++) drops.push({ x: d.cx + K.rnd(-d.R, d.R), y: d.cy - d.R }); }
      drops.forEach(function (q) { q.y += 300 * dt; }); drops = drops.filter(function (q) { return q.y < d.cy + d.R; });
      c.save(); c.beginPath(); c.arc(d.cx, d.cy, d.R, 0, Math.PI * 2); c.clip(); c.strokeStyle = "#1d4ed8"; c.lineWidth = 2; drops.forEach(function (q) { c.beginPath(); c.moveTo(q.x, q.y); c.lineTo(q.x - 2, q.y + 8); c.stroke(); }); c.restore();
      K.txt(c, t("Cloud cover ", "كمية السحب ") + n(cov) + t(" of 8", " من ٨"), d.cx, d.cy - d.R - 14, { c: C.ink, s: 13 });
      K.txt(c, wx === "rain" ? "🌧️ " + t("Rainy", "ممطر") : wx === "cloudy" ? "☁️ " + t("Cloudy", "غائم") : "☀️ " + t("Sunny", "مشمس"), d.cx, d.cy + d.R + 18, { c: C.ink, s: 16, w: 900 });
      // satellite map
      var mx = W * 0.52, my = H * 0.08, mw = W * 0.45, mh = H * 0.62;
      c.fillStyle = "#0f172a"; K.rr(c, mx, my, mw, mh, 10); c.fill();
      c.fillStyle = "#d6b97b"; c.fillRect(mx + 6, my + mh * 0.3, mw - 12, mh * 0.66); c.fillStyle = "#1e40af"; c.fillRect(mx + 6, my + 6, mw - 12, mh * 0.24);
      c.strokeStyle = "#2563eb"; c.lineWidth = 3; c.beginPath(); c.moveTo(mx + mw * 0.6, my + mh * 0.96); c.quadraticCurveTo(mx + mw * 0.62, my + mh * 0.5, mx + mw * 0.6, my + mh * 0.32); c.stroke();
      var town = { x: mx + mw * 0.62, y: my + mh * 0.48 }, cxm = 0.06 + 0.032 * hr, cxx = mx + mw * cxm;
      c.save(); c.beginPath(); c.rect(mx, my, mw, mh); c.clip();
      for (i = 0; i < 6; i++) { c.fillStyle = "rgba(248,250,252,.9)"; c.beginPath(); c.arc(cxx + Math.cos(i * 1.1) * mw * 0.06, my + mh * 0.48 + Math.sin(i * 1.7) * mh * 0.12, mw * 0.06, 0, Math.PI * 2); c.fill(); }
      c.restore();
      K.dot(c, town.x, town.y, 6, "#ef4444", "#fff"); K.txt(c, t("your town", "مدينتك"), town.x, town.y + 16, { c: "#fff", s: 11 });
      K.txt(c, t("W", "غ"), mx + 14, my + mh - 12, { c: "#fff", s: 12 }); K.txt(c, t("E", "ش"), mx + mw - 14, my + mh - 12, { c: "#fff", s: 12 });
      c.strokeStyle = C.muted; c.lineWidth = 3; c.beginPath(); c.moveTo(mx + mw * 0.25, my + mh + 16); c.lineTo(mx + mw * 0.75, my + mh + 16); c.lineTo(mx + mw * 0.7, my + mh + 10); c.moveTo(mx + mw * 0.75, my + mh + 16); c.lineTo(mx + mw * 0.7, my + mh + 22); c.stroke();
      K.txt(c, t("wind: west → east", "الرياح: من الغرب إلى الشرق"), mx + mw / 2, my + mh + 32, { c: C.muted, s: 11 });
      var over = Math.abs(cxx - town.x) < mw * 0.09;
      if (over) tick(3);
      var fc = over ? t("Clouds are over your town now: cloudy or rainy.", "السحب فوق مدينتك الآن: غائم أو ممطر.") : cxx < town.x ? t("Clouds in the west are coming: the weather will get worse.", "سحب الغرب قادمة: سيسوء الطقس.") : t("The clouds moved east: sunny weather returns.", "تحركت السحب شرقًا: يعود الطقس المشمس.");
      out.innerHTML = '<span class="chip blue">' + (wx === "rain" ? t("Rain makes it rainy, whatever the cloud cover.", "المطر يجعل الطقس ممطرًا مهما كانت كمية السحب.") : cov >= 7 ? t("7 to 8 = cloudy", "من ٧ إلى ٨ = غائم") : t("0 to 6 = sunny", "من ٠ إلى ٦ = مشمس")) + '</span><span class="chip ' + (over ? "orange" : "") + '">🛰️ ' + fc + "</span>";
    });
  };

  /* -------- 9. p5_water: the water cycle -------- */
  L.p5_water = function (host, cfg, done) {
    host.innerHTML = hint(t("Turn up the sun's heat and watch the sea water evaporate, make a cloud, rain and flow back. Try the wind and the ice glass too.", "ارفع حرارة الشمس وراقب ماء البحر يتبخر ويكوّن سحابة ويمطر ثم يعود، وجرّب الرياح وكوب الثلج أيضًا."));
    var S = K.make(host, 0.6, 420), heat = 30, wind = false, ice = false, vap = [], rainD = [], run = [], cloudW = 0, raining = false, made = 0, back = 0, wet = 1, cond = [], ph = 0, acc = 0, racc = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Sun's heat", "حرارة الشمس"), 0, 100, 5, heat, "%") + '<div class="btn-row"><button type="button" class="btn sm tg" id="wd">🌬️ ' + t("Wind", "الرياح") + '</button><button type="button" class="btn sm tg" id="ic">🧊 ' + t("Ice in the glass", "ثلج في الكوب") + '</button></div><div class="meter wa-out"></div>';
    var out = ctl.querySelector(".wa-out");
    var tick = L._goals(host, [t("Heat the sea: make water vapour rise (evaporation).", "سخّن البحر: اجعل بخار الماء يصعد (التبخر)."), t("Build the cloud until it rains.", "كوّن السحابة حتى تمطر."),
      t("Follow the rain back to the sea along the river.", "تابع المطر وهو يعود إلى البحر عبر النهر."), t("Put ice in the glass and see condensation drops.", "ضع ثلجًا في الكوب وشاهد قطرات التكثف."), t("Dry the wet shirt completely.", "جفّف القميص المبلل تمامًا.")], done);
    bindSl(ctl, 0, function (v) { return n(v) + "%"; }, function (v) { heat = v; });
    ctl.querySelector("#wd").onclick = function () { wind = !wind; this.classList.toggle("on", wind); };
    ctl.querySelector("#ic").onclick = function () { ice = !ice; this.classList.toggle("on", ice); };
    function g() { var W = S.W, H = S.H; return { sea: H * 0.74, seaR: W * 0.42, peak: { x: W * 0.8, y: H * 0.3 }, cl: { x: W * 0.68, y: H * 0.19 }, river: [[W * 0.78, H * 0.36], [W * 0.7, H * 0.5], [W * 0.6, H * 0.6], [W * 0.5, H * 0.7], [W * 0.4, H * 0.77]] }; }
    function groundY(x) { var q = g(), W = S.W, H = S.H; if (x < q.seaR) return q.sea; if (x < q.peak.x) return lerp(H * 0.78, q.peak.y, (x - q.seaR) / (q.peak.x - q.seaR)); return lerp(q.peak.y, H * 0.5, (x - q.peak.x) / (W - q.peak.x)); }
    function along(pts, s) { var segs = pts.length - 1, f = clamp(s, 0, 0.9999) * segs, i = Math.floor(f), k = f - i; return { x: lerp(pts[i][0], pts[i + 1][0], k), y: lerp(pts[i][1], pts[i + 1][1], k) }; }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, q = g(); ph += dt;
      var rate = heat / 100 * 16 * (wind ? 1.6 : 1);
      acc += rate * dt; while (acc >= 1 && vap.length < 260) { acc -= 1; vap.push({ x: K.rnd(10, q.seaR - 10), y: q.sea - 2, vy: -K.rnd(40, 65) }); made++; }
      if (acc > 1) acc = 1;
      vap.forEach(function (p) { p.y += p.vy * dt; p.x += ((q.cl.x - p.x) * 0.35 + (wind ? 25 : 0)) * dt; });
      vap = vap.filter(function (p) { if (p.y < q.cl.y + 12) { cloudW += 1; return false; } return true; });
      if (made >= 20) tick(0);
      if (cloudW >= 40) raining = true; if (cloudW < 10) raining = false;
      var cr = Math.min(18 + Math.min(cloudW, 60) * 0.7, H * 0.13);
      if (raining) { tick(1); racc += 22 * dt; while (racc >= 1) { racc -= 1; rainD.push({ x: q.cl.x + K.rnd(-cr, cr), y: q.cl.y + 10 }); cloudW -= 0.5; } }
      rainD.forEach(function (d) { d.y += 260 * dt; });
      rainD = rainD.filter(function (d) { var gy = groundY(d.x); if (d.y >= gy) { if (d.x >= q.seaR) run.push({ s: d.x > q.peak.x ? 0 : clamp(1 - (d.x - q.seaR) / (q.peak.x - q.seaR), 0, 0.95), sx: d.x, sy: gy, t: 0 }); return false; } return true; });
      run.forEach(function (r) { r.t += dt; if (r.t > 0.4) r.s += dt * 0.32; });
      run = run.filter(function (r) { if (r.s >= 1) { back++; return false; } return true; });
      if (back >= 15) tick(2);
      wet = Math.max(0, wet - heat / 100 * (wind ? 2 : 1) * 0.075 * dt); if (wet <= 0) tick(4);
      if (ice) { if (cond.length < 34 && Math.random() < dt * 5) cond.push({ a: K.rnd(0, 1), b: K.rnd(0.15, 0.95) }); } else if (cond.length && Math.random() < dt * 3) cond.pop();
      if (cond.length >= 12) tick(3);
      // draw
      c.clearRect(0, 0, W, H);
      var hk = heat / 100;
      c.fillStyle = "rgba(125,211,252," + (0.25 + 0.15 * hk) + ")"; c.fillRect(0, 0, W, H);
      K.dot(c, 44, 40, 16 + 14 * hk, "rgba(250,204,21," + (0.45 + 0.55 * hk) + ")");
      c.fillStyle = "#3b82f6"; c.fillRect(0, q.sea, q.seaR + 4, H - q.sea);
      c.fillStyle = "#a3a3a3"; c.beginPath(); c.moveTo(q.seaR, H); c.lineTo(q.seaR, H * 0.78); c.lineTo(q.peak.x, q.peak.y); c.lineTo(W, H * 0.5); c.lineTo(W, H); c.closePath(); c.fill();
      c.fillStyle = "#86efac"; c.beginPath(); c.moveTo(q.seaR, H); c.lineTo(q.seaR, H * 0.8); c.lineTo(W * 0.62, H * 0.66); c.lineTo(W * 0.62, H); c.closePath(); c.fill();
      c.strokeStyle = "#60a5fa"; c.lineWidth = 6; c.lineCap = "round"; c.beginPath(); q.river.forEach(function (p, i) { if (i) c.lineTo(p[0], p[1]); else c.moveTo(p[0], p[1]); }); c.stroke();
      c.fillStyle = "rgba(255,255,255,.55)"; vap.forEach(function (p) { c.beginPath(); c.arc(p.x, p.y, 1.8, 0, Math.PI * 2); c.fill(); });
      var shade = clamp(cloudW / 50, 0, 1), cc = "rgb(" + Math.round(lerp(248, 120, shade)) + "," + Math.round(lerp(250, 130, shade)) + "," + Math.round(lerp(252, 150, shade)) + ")";
      c.fillStyle = cc; c.beginPath(); c.arc(q.cl.x - cr * 0.6, q.cl.y, cr * 0.6, 0, Math.PI * 2); c.arc(q.cl.x, q.cl.y - cr * 0.3, cr * 0.75, 0, Math.PI * 2); c.arc(q.cl.x + cr * 0.65, q.cl.y, cr * 0.55, 0, Math.PI * 2); c.fill();
      c.strokeStyle = "#1d4ed8"; c.lineWidth = 2; rainD.forEach(function (d) { c.beginPath(); c.moveTo(d.x, d.y); c.lineTo(d.x - 1, d.y + 7); c.stroke(); });
      run.forEach(function (r) { var p = r.t <= 0.4 ? { x: lerp(r.sx, along(q.river, r.s).x, r.t / 0.4), y: lerp(r.sy, along(q.river, r.s).y, r.t / 0.4) } : along(q.river, r.s); K.dot(c, p.x, p.y, 2.6, "#1d4ed8"); });
      K.txt(c, t("sea", "البحر"), q.seaR * 0.5, H - 14, { c: "#fff", s: 13 });
      K.txt(c, raining ? t("rain", "مطر") : t("cloud", "سحابة"), q.cl.x, q.cl.y - cr - 8, { c: "#0f172a", s: 12 });
      if (vap.length > 5) { K.txt(c, t("water vapour", "بخار الماء"), 8, q.sea - 46, { a: "left", c: "#0f172a", s: 12 }); K.txt(c, t("(invisible, shown as dots)", "(غير مرئي، مرسوم كنقاط)"), 8, q.sea - 30, { a: "left", c: "#0f172a", s: 10 }); }
      if (wind) for (var w = 0; w < 3; w++) { var wy = H * (0.25 + w * 0.12), wx2 = ((ph * 120 + w * 90) % (W + 80)) - 40; c.strokeStyle = "rgba(255,255,255,.8)"; c.lineWidth = 2; c.beginPath(); c.moveTo(wx2, wy); c.quadraticCurveTo(wx2 + 20, wy - 8, wx2 + 40, wy); c.stroke(); }
      // laundry line
      var lx = W * 0.86, ly = H * 0.64;
      c.strokeStyle = "#78350f"; c.lineWidth = 3; c.beginPath(); c.moveTo(lx - 34, H * 0.9); c.lineTo(lx - 34, ly - 10); c.moveTo(lx + 34, H * 0.9); c.lineTo(lx + 34, ly - 10); c.moveTo(lx - 34, ly - 6); c.lineTo(lx + 34, ly - 6); c.stroke();
      var sw = Math.sin(ph * (wind ? 6 : 1.5)) * (wind ? 5 : 1);
      c.fillStyle = "rgb(" + Math.round(lerp(239, 30, wet)) + "," + Math.round(lerp(68, 64, wet)) + "," + Math.round(lerp(68, 175, wet)) + ")"; c.beginPath(); c.moveTo(lx - 20, ly - 6); c.lineTo(lx + 20, ly - 6); c.lineTo(lx + 22 + sw, ly + 30); c.lineTo(lx - 18 + sw, ly + 30); c.closePath(); c.fill();
      if (wet > 0.05 && Math.sin(ph * 5) > 0.3) K.dot(c, lx + sw, ly + 36 + (ph * 40 % 20), 2, "#1d4ed8");
      K.txt(c, t("shirt ", "قميص ") + n(Math.round(wet * 100)) + "%", lx, ly + 46, { c: "#0f172a", s: 11 });
      // glass
      var gx = W * 0.56, gyb = H * 0.95, gh = H * 0.14, gw = Math.max(26, W * 0.045);
      c.fillStyle = "rgba(255,255,255,.45)"; c.fillRect(gx - gw / 2, gyb - gh, gw, gh); c.strokeStyle = "#475569"; c.lineWidth = 2; c.strokeRect(gx - gw / 2, gyb - gh, gw, gh);
      c.fillStyle = "rgba(220,38,38,.55)"; c.fillRect(gx - gw / 2 + 2, gyb - gh * 0.75, gw - 4, gh * 0.75 - 2);
      if (ice) { c.fillStyle = "rgba(224,242,254,.95)"; c.fillRect(gx - gw * 0.3, gyb - gh * 0.72, gw * 0.28, gw * 0.28); c.fillRect(gx + 2, gyb - gh * 0.55, gw * 0.28, gw * 0.28); }
      cond.forEach(function (d) { K.dot(c, gx - gw / 2 + d.a * gw, gyb - gh * d.b, 2.2, "rgba(29,78,216,.85)"); });
      K.txt(c, ice ? t("cold glass", "كوب بارد") : t("glass", "كوب"), gx, gyb - gh - 10, { c: "#0f172a", s: 11 });
      out.innerHTML = '<span class="chip">♨️ ' + t("Evaporation: ", "التبخر: ") + (heat === 0 ? t("none", "لا يوجد") : rate > 18 ? t("very fast", "سريع جدًا") : rate > 8 ? t("fast", "سريع") : t("slow", "بطيء")) + "</span>" +
        '<span class="chip blue">☁️ ' + (raining ? t("Raining!", "تمطر!") : t("Cloud filling: ", "السحابة تمتلئ: ") + n(Math.min(100, Math.round(cloudW / 40 * 100))) + "%") + "</span>" +
        '<span class="chip green">🌊 ' + t("Back to the sea: ", "عاد إلى البحر: ") + n(back) + "</span>" +
        (cond.length ? '<span class="chip">💧 ' + t("Condensation: vapour in the air cooled on the glass", "التكثف: بخار الهواء برد على الكوب") + "</span>" : "");
    });
  };

  /* ---------- part names ---------- */
  var NMS = {
    p5_arm: ["Arm muscles simulation", "محاكاة عضلات الذراع"], p5_seasons: ["A year of seasons", "عام من الفصول"], p5_germ: ["Germination fair tests", "تجارب الإنبات العادلة"],
    p5_seed: ["Inside the seed: iodine test", "داخل البذرة: الكشف باليود"], p5_growth: ["Plant growth experiment", "تجربة نمو النبات"], p5_pollen: ["Be the bee!", "كن النحلة!"],
    p5_scope: ["Microscope simulation", "محاكاة المجهر"], p5_life: ["Human growth simulation", "محاكاة نمو الإنسان"], p5_animals: ["Kittens and fish eggs", "القطط الصغيرة وبيض السمك"],
    p5_weather: ["Cloud cover and satellite", "كمية السحب والقمر الصناعي"], p5_water: ["Water cycle simulation", "محاكاة دورة الماء"]
  };
  L.names = L.names || {};
  Object.keys(NMS).forEach(function (k) { L.names[k] = NMS[k]; });
})();
