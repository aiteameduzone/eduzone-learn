/* EduZone Learn v3 - Science, Egyptian Primary 4, Term 1 (2026-2027).
   Follows the Ministry Primary 4 Science book (English edition): 8 chapters, one lesson per chapter,
   grouped into 4 themed units. Same lesson shape as Prep 3 (sci3-data-a.js). Ids are prefixed p4...
   Also registers: objectives (EZ3.SCI3_OBJ), extra quiz items (EZ3.SCI3_EXTRA), diagrams (EZ3.sciDiagrams)
   and the Primary 4 PhET-style simulations (EZ3.sciLabs.p4_*). Original designs. */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCIG = E.SCIG || {};

  /* =========================================================
     DATA
     ========================================================= */
  E.SCIG.p4 = { book: { en: "Science, Primary 4, Term 1", ar: "العلوم، الصف الرابع الابتدائي، الفصل الدراسي الأول" }, units: [
  /* ---------------- Unit 1: Living things ---------------- */
  {
    id: "p4u1", num: 1, icon: "🌿", color: "green",
    title: { en: "Living Things Around Us", ar: "الكائنات الحية من حولنا" },
    lessons: [
      {
        id: "p4u1l1", icon: "🦎", page: 6,
        title: { en: "Nature in Our Surroundings", ar: "الطبيعة من حولنا" },
        idea: {
          official: {
            en: ["Living organisms, like humans, animals and plants, eat, breathe and grow. Rocks, water and air are non-living things.",
              "Living organisms are found near grass or trees, where there is food or places to hide, and under stones, where it is damp and cool.",
              "To observe, look at shape, colour and size. Use a magnifying glass, but never look at the Sun through it.",
              "We classify living organisms by finding what is the same and what is different, then putting similar ones in groups.",
              "The place where a living organism lives is its habitat. Changing body parts or behaviours to survive there is called adaptation.",
              "Desert animals are adapted: the fennec fox has big ears to lose heat, the jerboa has long back legs, and many animals are active at night."],
            ar: ["الكائنات الحية مثل الإنسان والحيوان والنبات تتغذى وتتنفس وتنمو، أما الصخور والماء والهواء فهي أشياء غير حية.",
              "نجد الكائنات الحية قرب الحشائش والأشجار حيث الغذاء وأماكن الاختباء، وتحت الحجارة حيث الرطوبة والبرودة.",
              "عند الملاحظة ننتبه إلى الشكل واللون والحجم، ونستخدم العدسة المكبرة، ولا ننظر إلى الشمس من خلالها أبدًا.",
              "نصنّف الكائنات الحية بالبحث عن أوجه التشابه وأوجه الاختلاف، ثم نضع الكائنات المتشابهة في مجموعات.",
              "المكان الذي يعيش فيه الكائن الحي يسمى موطنه، وتغيّر أجزاء الجسم أو السلوك للبقاء فيه يسمى التكيّف.",
              "حيوانات الصحراء متكيفة: للثعلب الفنك أذنان كبيرتان للتخلص من الحرارة، وللجربوع رجلان خلفيتان طويلتان، وكثير منها ينشط ليلًا."]
          },
          story: {
            en: ["Omar goes out into his school yard in Giza with a magnifying glass and a record card.",
              "He lifts a big stone. Underneath it is damp and cool, and ants are hurrying about.",
              "In the grass a green grasshopper jumps away. He writes the place, shape, colour and size on his card.",
              "On a trip to the Fayoum desert he sees tiny jerboa footprints, but no animals in the hot afternoon.",
              "At night, with his torch, a fennec fox with huge ears appears. Omar smiles: desert animals wait for the cool night!"],
            ar: ["يخرج عمر إلى فناء مدرسته في الجيزة ومعه عدسة مكبرة وبطاقة تسجيل.",
              "يرفع حجرًا كبيرًا فيجد المكان تحته رطبًا وباردًا، والنمل يتحرك بسرعة.",
              "وفي الحشائش يقفز جرادٌ أخضر بعيدًا، فيكتب عمر المكان والشكل واللون والحجم في بطاقته.",
              "وفي رحلة إلى صحراء الفيوم يرى آثار أقدام الجربوع الصغيرة، لكنه لا يرى حيوانات في الظهيرة الحارة.",
              "وفي الليل، ومعه مصباحه، يظهر ثعلب فنك بأذنين ضخمتين، فيبتسم عمر: حيوانات الصحراء تنتظر برودة الليل!"]
          }
        },
        words: [
          ["Living organism", "الكائن الحي", "Something that eats, breathes and grows, like an animal or a plant.", "شيء يتغذى ويتنفس وينمو مثل الحيوان والنبات."],
          ["Habitat", "الموطن", "The place where a living organism lives.", "المكان الذي يعيش فيه الكائن الحي."],
          ["Adaptation", "التكيّف", "Changing body parts or behaviours to survive in a place.", "تغيّر أجزاء الجسم أو السلوك من أجل البقاء في مكان ما."],
          ["Magnifying glass", "العدسة المكبرة", "A tool that makes small things look bigger. Never look at the Sun through it.", "أداة تُظهر الأشياء الصغيرة أكبر، ولا ننظر بها إلى الشمس أبدًا."],
          ["Record card", "بطاقة التسجيل", "A card where you write the topic, date, name, a sketch and what you found.", "بطاقة نكتب فيها الموضوع والتاريخ والاسم ورسمًا وما اكتشفناه."],
          ["Classification", "التصنيف", "Putting living organisms with similar features into groups.", "وضع الكائنات الحية ذات الصفات المتشابهة في مجموعات."]
        ],
        lab: { parts: [{ type: "p4_habitat" }, {
          type: "sort",
          prompt: ["Tap a living organism, then tap where it lives.", "اضغط على كائن حي، ثم اضغط على المكان الذي يعيش فيه."],
          bins: [["nile", "🌊", "Along the Nile River", "على ضفاف نهر النيل"], ["desert", "🏜️", "In the desert", "في الصحراء"]],
          items: [
            [["🪷 Lotus", "🪷 اللوتس"], "nile"], [["🐸 Frog", "🐸 الضفدع"], "nile"], [["🌿 Papyrus", "🌿 البردي"], "nile"], [["🦢 Egyptian goose", "🦢 الإوز المصري"], "nile"],
            [["🌳 Acacia", "🌳 السنط"], "desert"], [["🦊 Fennec fox", "🦊 الثعلب الفنك"], "desert"], [["🐭 Jerboa", "🐭 الجربوع"], "desert"], [["🍈 Colocynth", "🍈 الحنظل"], "desert"]
          ]
        }] },
        quiz: [
          { q: ["Where are ants often found?", "أين نجد النمل غالبًا؟"],
            c: [["Under stones, in damp places", "تحت الحجارة في الأماكن الرطبة"], ["On hot sand in the sun", "على الرمال الساخنة في الشمس"], ["High in the sky", "عاليًا في السماء"], ["Inside the water tap", "داخل صنبور الماء"]],
            off: ["Under stones it is damp and cool, away from the sun's rays, so many small animals live there.", "المكان تحت الحجارة رطب وبارد بعيد عن أشعة الشمس، لذلك تعيش فيه حيوانات صغيرة كثيرة."],
            sto: ["When Omar lifted the stone, the damp, cool place was full of busy ants.", "عندما رفع عمر الحجر، وجد المكان الرطب البارد مليئًا بالنمل النشيط."] },
          { q: ["What do we call the place where a living organism lives?", "ماذا نسمي المكان الذي يعيش فيه الكائن الحي؟"],
            c: [["Its habitat", "موطنه"], ["Its record card", "بطاقة تسجيله"], ["Its adaptation", "تكيّفه"], ["Its shadow", "ظله"]],
            off: ["The place where a living organism lives is called its habitat.", "المكان الذي يعيش فيه الكائن الحي يسمى موطنه."],
            sto: ["The frog's home is the Nile. The fennec fox's home is the desert. Each home is a habitat.", "بيت الضفدع هو النيل، وبيت الفنك هو الصحراء، وكل بيت منهما موطن."] },
          { q: ["Why are the fennec fox's ears so big?", "لماذا أذنا الثعلب الفنك كبيرتان؟"],
            c: [["To let heat escape and keep the body cool", "لتخرج الحرارة ويبقى الجسم باردًا"], ["To fly like wings", "ليطير بهما مثل الأجنحة"], ["To carry food", "ليحمل بهما الطعام"], ["To dig holes", "ليحفر بهما الجحور"]],
            off: ["Big ears help the fennec fox release extra body heat in the hot desert.", "الأذنان الكبيرتان تساعدان الفنك على التخلص من حرارة الجسم الزائدة في الصحراء الحارة."],
            sto: ["The fennec's ears work like two fans that blow the heat away.", "أذنا الفنك تعملان مثل مروحتين تطردان الحرارة."] },
          { q: ["How do desert plants like the acacia keep water?", "كيف تحتفظ نباتات الصحراء مثل السنط بالماء؟"],
            c: [["Small leaves and deep roots", "أوراق صغيرة وجذور عميقة"], ["Very big leaves", "أوراق كبيرة جدًا"], ["Roots near the surface only", "جذور قريبة من السطح فقط"], ["No roots at all", "بلا جذور على الإطلاق"]],
            off: ["Small leaves lose less water, and deep roots reach water far underground.", "الأوراق الصغيرة تفقد ماء أقل، والجذور العميقة تصل إلى الماء في باطن الأرض."],
            sto: ["The acacia keeps its leaves small like a careful saver, and sends its roots deep to find hidden water.", "السنط يجعل أوراقه صغيرة مثل شخص يدّخر، ويرسل جذوره عميقًا ليجد الماء المخبأ."] },
          { q: ["What is the right way to use a magnifying glass on a tree you cannot move?", "ما الطريقة الصحيحة لاستخدام العدسة المكبرة مع شجرة لا يمكن تحريكها؟"],
            c: [["Hold it near your eye and move your face back and forth", "أمسكها قرب عينك وحرّك وجهك للأمام والخلف"], ["Hold it far away and stretch your arms", "أمسكها بعيدًا ومُدّ ذراعيك"], ["Look at the Sun through it first", "انظر بها إلى الشمس أولًا"], ["Put it on the ground", "ضعها على الأرض"]],
            off: ["When the object cannot move, hold the glass close to your eye and move your face with it until the image is clear.", "إذا لم يتحرك الشيء، أمسك العدسة قرب عينك وحرّك وجهك معها حتى تتضح الصورة."],
            sto: ["Omar could not move the tree, so he moved his face with the glass, slowly, until the leaf veins were sharp.", "لم يستطع عمر تحريك الشجرة، فحرّك وجهه مع العدسة ببطء حتى ظهرت عروق الورقة واضحة."] },
          { q: ["Why are many desert animals active at night?", "لماذا تنشط حيوانات صحراوية كثيرة ليلًا؟"],
            c: [["The temperature goes down at night", "تنخفض درجة الحرارة ليلًا"], ["They are afraid of the Moon", "لأنها تخاف من القمر"], ["There is more water at night", "لأن الماء يزيد ليلًا"], ["They cannot see in the day", "لأنها لا ترى نهارًا"]],
            off: ["In the day it is very hot, so they rest in cool holes under the ground and come out when it is cooler.", "في النهار يكون الجو حارًا جدًا، فتستريح في جحور باردة تحت الأرض وتخرج عندما يبرد الجو."],
            sto: ["The jerboa sleeps in its cool burrow all afternoon, then hops out under the stars.", "ينام الجربوع في جحره البارد طوال الظهيرة، ثم يقفز خارجًا تحت النجوم."] },
          { q: ["Which is the correct way to sketch for science?", "ما الطريقة الصحيحة للرسم العلمي؟"],
            c: [["Draw exactly what you see with thin, clear lines", "ارسم ما تراه تمامًا بخطوط رفيعة واضحة"], ["Add shadows to make it pretty", "أضف ظلالًا ليصبح جميلًا"], ["Imagine the parts you cannot see", "تخيّل الأجزاء التي لا تراها"], ["Colour all of it dark", "لوّنه كله بلون داكن"]],
            off: ["A science sketch uses thin, clear lines, with no shading, showing only what you really see.", "الرسم العلمي بخطوط رفيعة واضحة بلا تظليل، ويُظهر فقط ما تراه فعلًا."],
            sto: ["Omar drew the beetle like a careful map: true lines, nothing made up.", "رسم عمر الخنفساء مثل خريطة دقيقة: خطوط حقيقية ولا شيء من الخيال."] }
        ]
      },
      {
        id: "p4u1l2", icon: "🦋", page: 26,
        title: { en: "How Insects Grow", ar: "كيف تنمو الحشرات" },
        idea: {
          official: {
            en: ["Many insects begin life as eggs. Butterflies often lay their eggs on the underside of the leaves their larvae eat.",
              "The baby that comes out of the egg is a larva. It eats a lot and grows quickly.",
              "As the larva grows, it takes off its skin many times. This is called molting.",
              "A butterfly grows in this order: egg, larva, pupa, adult insect. Dung beetles and bees grow this way too.",
              "The pupa does not move, but inside it the body is changing into an adult.",
              "An adult insect has 3 body parts: head, thorax and abdomen, with 6 legs on the thorax and 2 antennae on the head."],
            ar: ["تبدأ حشرات كثيرة حياتها من البيض، وتضع الفراشات بيضها غالبًا على السطح السفلي لأوراق النبات الذي تأكله يرقاتها.",
              "الصغير الذي يخرج من البيضة يسمى يرقة، وهي تأكل كثيرًا وتنمو بسرعة.",
              "عندما تكبر اليرقة تخلع جلدها مرات كثيرة، ويسمى ذلك الانسلاخ.",
              "تنمو الفراشة بهذا الترتيب: بيضة ثم يرقة ثم عذراء ثم حشرة كاملة، وكذلك الجعران والنحل.",
              "العذراء لا تتحرك، لكن جسمها في الداخل يتحول إلى حشرة كاملة.",
              "جسم الحشرة الكاملة ثلاثة أجزاء: الرأس والصدر والبطن، ولها ٦ أرجل على الصدر وقرنا استشعار على الرأس."]
          },
          story: {
            en: ["Malak finds tiny eggs under a milkweed leaf on her balcony in Alexandria.",
              "Soon a small larva hatches and eats holes in the leaves. Every day it is bigger.",
              "One morning she sees an old skin lying beside it. The larva has molted!",
              "Then it hangs still as a green pupa. Malak waits quietly for many days.",
              "The back splits, and a plain tiger butterfly climbs out with wrinkled wings. When they dry, Malak lets it fly free."],
            ar: ["تجد ملك بيضًا صغيرًا تحت ورقة نبات الصقلاب في شرفتها بالإسكندرية.",
              "وبعد قليل تفقس يرقة صغيرة وتأكل ثقوبًا في الأوراق، وتكبر كل يوم.",
              "وفي صباح ما ترى جلدًا قديمًا بجوارها؛ لقد انسلخت اليرقة!",
              "ثم تتعلق ساكنة على هيئة عذراء خضراء، وتنتظر ملك بهدوء أيامًا كثيرة.",
              "ينشق الظهر وتخرج فراشة النمر السادة بأجنحة مجعّدة، وعندما تجف تطلقها ملك حرة."]
          }
        },
        words: [
          ["Egg", "البيضة", "The first stage. Many insects start life as eggs.", "المرحلة الأولى؛ تبدأ حشرات كثيرة حياتها من البيض."],
          ["Larva", "اليرقة", "The baby insect that comes out of the egg. It eats a lot and grows fast.", "صغير الحشرة الذي يخرج من البيضة، ويأكل كثيرًا وينمو بسرعة."],
          ["Molting", "الانسلاخ", "When a larva takes off its skin so it can grow bigger.", "خلع اليرقة جلدها لكي تكبر."],
          ["Pupa", "العذراء", "A stage that does not move while the body changes into an adult inside.", "مرحلة لا تتحرك بينما يتحول الجسم في داخلها إلى حشرة كاملة."],
          ["Adult insect", "الحشرة الكاملة", "The fully grown form. It lays eggs for new life.", "الطور المكتمل النمو، ويضع البيض لبدء حياة جديدة."],
          ["Thorax", "الصدر", "The middle body part of an insect. The 6 legs and the wings are on it.", "الجزء الأوسط من جسم الحشرة، وعليه الأرجل الست والأجنحة."],
          ["Antennae", "قرنا الاستشعار", "One pair of long, rod-like parts on an insect's head.", "زوج من الأجزاء الطويلة الرفيعة على رأس الحشرة."]
        ],
        lab: { parts: [{ type: "p4_lifecycle" }, {
          type: "sort",
          prompt: ["Count the legs and body parts. Tap an animal, then its group.", "عُدّ الأرجل وأجزاء الجسم، واضغط على الحيوان ثم على مجموعته."],
          bins: [["ins", "🐞", "Insect (3 parts, 6 legs)", "حشرة (٣ أجزاء، ٦ أرجل)"], ["not", "🚫", "Not an insect", "ليس حشرة"]],
          items: [
            [["🦋 Butterfly", "🦋 الفراشة"], "ins"], [["🦗 Grasshopper", "🦗 الجرادة"], "ins"], [["🪲 Dung beetle", "🪲 الجعران"], "ins"], [["🐝 Bee", "🐝 النحلة"], "ins"], [["🐜 Ant", "🐜 النملة"], "ins"],
            [["🕷️ Spider (8 legs)", "🕷️ العنكبوت (٨ أرجل)"], "not"], [["🦎 Lizard", "🦎 السحلية"], "not"], [["🐸 Frog", "🐸 الضفدع"], "not"]
          ]
        }] },
        quiz: [
          { q: ["What is the correct order of a butterfly's growth?", "ما الترتيب الصحيح لنمو الفراشة؟"],
            c: [["Egg, larva, pupa, adult", "بيضة، يرقة، عذراء، حشرة كاملة"], ["Egg, pupa, larva, adult", "بيضة، عذراء، يرقة، حشرة كاملة"], ["Larva, egg, adult, pupa", "يرقة، بيضة، حشرة كاملة، عذراء"], ["Adult, larva, egg, pupa", "حشرة كاملة، يرقة، بيضة، عذراء"]],
            off: ["Butterflies grow egg, then larva, then pupa, then adult insect.", "تنمو الفراشة: بيضة ثم يرقة ثم عذراء ثم حشرة كاملة."],
            sto: ["Malak saw it all: tiny egg, hungry larva, still pupa, and at last the flying butterfly.", "رأت ملك كل شيء: بيضة صغيرة، ويرقة جائعة، وعذراء ساكنة، وأخيرًا فراشة طائرة."] },
          { q: ["What do we call it when a larva takes off its skin?", "ماذا نسمي خلع اليرقة جلدها؟"],
            c: [["Molting", "الانسلاخ"], ["Hatching", "الفقس"], ["Sowing", "البذر"], ["Reflection", "الانعكاس"]],
            off: ["Taking off the skin to grow larger is called molting. A larva does it many times.", "خلع الجلد للنمو يسمى الانسلاخ، وتفعله اليرقة مرات كثيرة."],
            sto: ["The larva's skin became too tight, like a small T-shirt, so it stepped out of it.", "أصبح جلد اليرقة ضيقًا مثل قميص صغير، فخرجت منه."] },
          { q: ["Where do butterflies lay their eggs most often?", "أين تضع الفراشات بيضها غالبًا؟"],
            c: [["On the underside of leaves their larvae eat", "على السطح السفلي لأوراق النبات الذي تأكله يرقاتها"], ["On dry sand", "على الرمال الجافة"], ["On a high, windy branch tip", "على طرف غصن عالٍ في الرياح"], ["In the water", "في الماء"]],
            off: ["Butterflies know which plants their babies eat, and many lay eggs under those leaves.", "تعرف الفراشات النبات الذي يأكله صغارها، فتضع بيضها تحت أوراقه."],
            sto: ["The mother butterfly chose the milkweed so the larva would wake up next to its food.", "اختارت الفراشة الأم نبات الصقلاب لتستيقظ اليرقة بجوار طعامها."] },
          { q: ["What happens inside the pupa?", "ماذا يحدث داخل العذراء؟"],
            c: [["The body changes into an adult insect", "يتحول الجسم إلى حشرة كاملة"], ["It eats more leaves", "تأكل أوراقًا أكثر"], ["It lays eggs", "تضع البيض"], ["Nothing at all", "لا يحدث شيء"]],
            off: ["The pupa does not move, but inside its body is changing from a young insect into an adult.", "العذراء لا تتحرك، لكن جسمها في الداخل يتحول من صغير إلى حشرة كاملة."],
            sto: ["The pupa looks asleep, but inside it is a busy workshop building wings.", "تبدو العذراء نائمة، لكنها في الداخل ورشة مشغولة تصنع الأجنحة."] },
          { q: ["How many legs does an insect have, and where are they?", "كم رجلًا للحشرة، وأين توجد؟"],
            c: [["6 legs, all on the thorax", "٦ أرجل كلها على الصدر"], ["8 legs on the abdomen", "٨ أرجل على البطن"], ["4 legs on the head", "٤ أرجل على الرأس"], ["6 legs on the abdomen", "٦ أرجل على البطن"]],
            off: ["An insect has 6 legs, and they are all attached to the thorax.", "للحشرة ٦ أرجل، وكلها متصلة بالصدر."],
            sto: ["Malak counted with her magnifier: one, two, three on each side, all on the middle part.", "عدّت ملك بعدستها: ثلاثة على كل جانب، وكلها على الجزء الأوسط."] },
          { q: ["What are the 3 body parts of an insect?", "ما أجزاء جسم الحشرة الثلاثة؟"],
            c: [["Head, thorax and abdomen", "الرأس والصدر والبطن"], ["Head, legs and wings", "الرأس والأرجل والأجنحة"], ["Roots, stem and leaves", "الجذر والساق والأوراق"], ["Eyes, mouth and antennae", "العينان والفم وقرنا الاستشعار"]],
            off: ["Every insect's body is made of a head, a thorax and an abdomen.", "جسم كل حشرة مكوّن من رأس وصدر وبطن."],
            sto: ["Think of a train with 3 carriages: head in front, thorax in the middle, abdomen at the back.", "تخيّل قطارًا بثلاث عربات: الرأس في المقدمة، والصدر في الوسط، والبطن في الخلف."] },
          { q: ["Why is a spider NOT an insect?", "لماذا لا يعتبر العنكبوت حشرة؟"],
            c: [["It has 8 legs", "لأن له ٨ أرجل"], ["It is too small", "لأنه صغير جدًا"], ["It lives in houses", "لأنه يعيش في البيوت"], ["It has wings", "لأن له أجنحة"]],
            off: ["Insects have 6 legs. A spider has 8 legs, so it is not built like an insect.", "للحشرات ٦ أرجل، أما العنكبوت فله ٨ أرجل، فتركيبه مختلف عن الحشرة."],
            sto: ["Malak counted the spider's legs and needed two more fingers than for the ant!", "عدّت ملك أرجل العنكبوت فاحتاجت إصبعين أكثر مما احتاجت للنملة!"] }
        ]
      },
      {
        id: "p4u1l3", icon: "🌻", page: 36,
        title: { en: "How Plants Grow", ar: "كيف تنمو النباتات" },
        idea: {
          official: {
            en: ["Most plants start growing from seeds. Seeds have different shapes, colours and sizes.",
              "To sow, make a hole about 1 cm deep, put the seed in, cover it gently with soil and give plenty of water.",
              "The first leaves after the sprout are the seed leaves (cotyledons). The leaves that come after are the true leaves.",
              "Plant height is measured from the ground to the base of the top leaf.",
              "Plants make buds and flowers. After the flower withers, its base swells and becomes a fruit with new seeds inside.",
              "A plant body has 3 main parts: roots hold the plant and suck up water, the stem supports it and carries water, and leaves catch sunlight."],
            ar: ["تبدأ معظم النباتات نموها من البذور، وللبذور أشكال وألوان وأحجام مختلفة.",
              "لزراعة البذرة نصنع حفرة عمقها نحو ١ سم، ونضع البذرة، ونغطيها بالتربة برفق، ثم نرويها بماء وفير.",
              "أول أوراق تظهر بعد الإنبات هي الأوراق الفلقية، والأوراق التي تظهر بعدها هي الأوراق الحقيقية.",
              "يُقاس طول النبات من سطح الأرض إلى قاعدة أعلى ورقة.",
              "يكوّن النبات براعم وأزهارًا، وبعد ذبول الزهرة تنتفخ قاعدتها وتصبح ثمرة بداخلها بذور جديدة.",
              "جسم النبات ثلاثة أجزاء رئيسية: الجذر يثبّت النبات ويمتص الماء، والساق تدعمه وتنقل الماء، والأوراق تلتقط ضوء الشمس."]
          },
          story: {
            en: ["Youssef helps his grandfather in a field in Minya. They sow sunflower seeds in March.",
              "He pokes a hole 1 cm deep with his finger, drops in a striped seed, covers it and waters it.",
              "A week later, two round seed leaves open, then jagged true leaves follow.",
              "Every week he measures the height with a paper tape, from the ground to the base of the top leaf.",
              "In summer a giant yellow flower blooms. When it withers, Youssef counts hundreds of new seeds!"],
            ar: ["يساعد يوسف جده في حقل بالمنيا، ويزرعان بذور عباد الشمس في شهر مارس.",
              "يصنع حفرة عمقها ١ سم بإصبعه، ويضع بذرة مخططة، ويغطيها ويرويها.",
              "وبعد أسبوع تتفتح ورقتان فلقيتان مستديرتان، ثم تتبعهما أوراق حقيقية مسننة الحواف.",
              "وكل أسبوع يقيس الطول بشريط ورقي من سطح الأرض إلى قاعدة أعلى ورقة.",
              "وفي الصيف تتفتح زهرة صفراء عملاقة، وعندما تذبل يعدّ يوسف مئات البذور الجديدة!"]
          }
        },
        words: [
          ["Seed", "البذرة", "Most plants start growing from a seed.", "تبدأ معظم النباتات نموها من البذرة."],
          ["Seed leaves", "الأوراق الفلقية", "The first leaves you see after the sprout comes out.", "أول أوراق تظهر بعد خروج النبتة."],
          ["True leaves", "الأوراق الحقيقية", "Leaves that come after the seed leaves, often a different shape.", "أوراق تظهر بعد الأوراق الفلقية، وشكلها غالبًا مختلف."],
          ["Plant height", "طول النبات", "From the ground to the base of the top leaf.", "من سطح الأرض إلى قاعدة أعلى ورقة."],
          ["Fruit", "الثمرة", "The swollen base of a withered flower, with new seeds inside.", "قاعدة الزهرة الذابلة بعد انتفاخها، وبداخلها بذور جديدة."],
          ["Roots", "الجذور", "Spread underground, hold the plant firmly and suck up water.", "تنتشر تحت الأرض وتثبّت النبات وتمتص الماء."],
          ["Stem", "الساق", "Supports the plant and is a pathway for water to the leaves and flowers.", "تدعم النبات وهي ممر للماء إلى الأوراق والأزهار."]
        ],
        lab: { parts: [{ type: "p4_plant" }, {
          type: "sort",
          prompt: ["Tap a job, then tap the plant part that does it.", "اضغط على الوظيفة، ثم اضغط على الجزء الذي يقوم بها."],
          bins: [["root", "🟤", "Roots", "الجذور"], ["stem", "🟩", "Stem", "الساق"], ["leaf", "🍃", "Leaves", "الأوراق"]],
          items: [
            [["Holds the plant firmly in the soil", "يثبّت النبات في التربة"], "root"], [["Sucks up water from the soil", "يمتص الماء من التربة"], "root"],
            [["Supports the plant's body", "يدعم جسم النبات"], "stem"], [["A pathway for water to the leaves", "ممر للماء إلى الأوراق"], "stem"],
            [["Wide and flat to catch sunlight", "عريضة ومسطحة لتلتقط ضوء الشمس"], "leaf"], [["Spread out to catch lots of light", "تنتشر لتلتقط ضوءًا كثيرًا"], "leaf"]
          ]
        }] },
        quiz: [
          { q: ["How deep should you make the hole to sow a seed?", "ما عمق الحفرة المناسبة لزراعة البذرة؟"],
            c: [["About 1 cm", "نحو ١ سم"], ["About 1 metre", "نحو ١ متر"], ["No hole, pile soil high on top", "بلا حفرة، ونكوّم التربة عاليًا فوقها"], ["About 50 cm", "نحو ٥٠ سم"]],
            off: ["Make a hole about 1 cm deep with your finger, put the seed in, cover it gently and water it well.", "نصنع بالإصبع حفرة عمقها نحو ١ سم، ونضع البذرة، ونغطيها برفق، ونرويها جيدًا."],
            sto: ["Youssef's finger was the perfect tool: one small poke, about 1 cm.", "كان إصبع يوسف الأداة المثالية: نقرة صغيرة بعمق ١ سم تقريبًا."] },
          { q: ["What is the first important thing to do after covering the seed with soil?", "ما أول شيء مهم بعد تغطية البذرة بالتربة؟"],
            c: [["Give it plenty of water", "نرويها بماء وفير"], ["Dig it up to check", "نحفر لنتأكد منها"], ["Put it in the dark fridge", "نضعها في الثلاجة المظلمة"], ["Step on the soil hard", "ندوس التربة بقوة"]],
            off: ["After sowing, give the seed plenty of water so it can sprout.", "بعد البذر نروي البذرة بماء وفير لكي تنبت."],
            sto: ["Youssef's grandfather said: a seed without water is like a sleeper without an alarm.", "قال جد يوسف: البذرة بلا ماء مثل نائم بلا منبّه."] },
          { q: ["What are the first leaves after a sunflower sprouts called?", "ماذا تسمى أول أوراق تظهر بعد إنبات عباد الشمس؟"],
            c: [["Seed leaves (cotyledons)", "الأوراق الفلقية"], ["True leaves", "الأوراق الحقيقية"], ["Roots", "الجذور"], ["Fruits", "الثمار"]],
            off: ["The first leaves are the seed leaves. Sunflowers have two of them. True leaves come later.", "أول الأوراق هي الأوراق الفلقية، ولعباد الشمس ورقتان منها، والأوراق الحقيقية تأتي بعدها."],
            sto: ["The two round seed leaves popped up first like two little hands saying hello.", "ظهرت الورقتان الفلقيتان المستديرتان أولًا مثل يدين صغيرتين تلوّحان بالتحية."] },
          { q: ["How do you measure plant height?", "كيف نقيس طول النبات؟"],
            c: [["From the ground to the base of the top leaf", "من سطح الأرض إلى قاعدة أعلى ورقة"], ["The width of one leaf", "عرض ورقة واحدة"], ["From the root tip to the seed", "من طرف الجذر إلى البذرة"], ["Around the pot", "حول الأصيص"]],
            off: ["Plant height is from the ground to the base of the top leaf. Use a ruler or paper tape.", "طول النبات من سطح الأرض إلى قاعدة أعلى ورقة، ونستخدم مسطرة أو شريطًا ورقيًا."],
            sto: ["Youssef holds the paper tape at the soil and stretches it up to where the top leaf starts.", "يضع يوسف الشريط الورقي عند التربة ويمده إلى بداية أعلى ورقة."] },
          { q: ["What happens after a flower withers?", "ماذا يحدث بعد أن تذبل الزهرة؟"],
            c: [["Its base swells and becomes a fruit", "تنتفخ قاعدتها وتصبح ثمرة"], ["Nothing remains", "لا يبقى شيء"], ["It turns into a root", "تتحول إلى جذر"], ["It becomes a seed leaf", "تصبح ورقة فلقية"]],
            off: ["After the flower withers, the base swells into a fruit, and new seeds form inside it.", "بعد ذبول الزهرة تنتفخ قاعدتها لتصبح ثمرة، وتتكوّن بداخلها بذور جديدة."],
            sto: ["The flower was a factory door: when it closed, the fruit grew behind it full of seeds.", "الزهرة كانت باب مصنع؛ عندما أُغلق كبرت خلفه الثمرة مليئة بالبذور."] },
          { q: ["Which part sucks up water from the soil?", "أي جزء يمتص الماء من التربة؟"],
            c: [["The roots", "الجذور"], ["The leaves", "الأوراق"], ["The flower", "الزهرة"], ["The fruit", "الثمرة"]],
            off: ["Roots spread underground, hold the plant firmly and suck up water.", "تنتشر الجذور تحت الأرض وتثبّت النبات وتمتص الماء."],
            sto: ["The roots are like straws in the ground, drinking for the whole plant.", "الجذور مثل الماصات في الأرض، تشرب للنبات كله."] },
          { q: ["Why do many leaves have a wide, flat shape?", "لماذا شكل أوراق كثيرة عريض ومسطح؟"],
            c: [["To catch lots of sunlight", "لتلتقط ضوء شمس كثيرًا"], ["To hold the plant in the soil", "لتثبّت النبات في التربة"], ["To carry water down", "لتنقل الماء إلى أسفل"], ["To make the plant heavy", "لتجعل النبات ثقيلًا"]],
            off: ["Wide, flat leaves catch lots of sunlight.", "الأوراق العريضة المسطحة تلتقط ضوء الشمس بكثرة."],
            sto: ["Each leaf opens like a solar panel facing the sky.", "كل ورقة تنفتح مثل لوح شمسي يواجه السماء."] }
        ]
      }
    ]
  },
  /* ---------------- Unit 2: Light and sound ---------------- */
  {
    id: "p4u2", num: 2, icon: "💡", color: "orange",
    title: { en: "Light and Sound", ar: "الضوء والصوت" },
    lessons: [
      {
        id: "p4u2l1", icon: "🪞", page: 50,
        title: { en: "Properties of Light", ar: "خصائص الضوء" },
        idea: {
          official: {
            en: ["Objects that give out their own light, like the Sun and lamps, are light sources. Light travels in straight lines.",
              "Reflection is when light hits an object, like a mirror, and bounces back. Reflected light also travels in straight lines.",
              "A magnifying glass gathers sunlight into one point. The smaller the point, the brighter and hotter it becomes.",
              "A shadow forms on the opposite side of the light source, because the object blocks the light. Sun, object and shadow line up.",
              "The Sun rises in the East and sets in the West, so shadows move. At noon the Sun is high and the shadow is short. A sundial uses this to tell the time.",
              "Sunny ground is warmer than shady ground, because sunlight warms it. Shady ground is cooler and often damp."],
            ar: ["الأجسام التي تبعث ضوءها بنفسها مثل الشمس والمصابيح تسمى مصادر الضوء، والضوء ينتقل في خطوط مستقيمة.",
              "الانعكاس هو ارتداد الضوء عندما يسقط على جسم مثل المرآة، والضوء المنعكس ينتقل أيضًا في خطوط مستقيمة.",
              "العدسة المكبرة تجمع ضوء الشمس في نقطة واحدة، وكلما صغرت النقطة زادت إضاءتها وحرارتها.",
              "يتكوّن الظل في الجهة المقابلة لمصدر الضوء لأن الجسم يحجب الضوء، والشمس والجسم والظل على خط مستقيم.",
              "تشرق الشمس من الشرق وتغرب في الغرب فيتحرك الظل؛ وعند الظهر تكون الشمس عالية والظل قصيرًا، والمزولة تستخدم ذلك لمعرفة الوقت.",
              "الأرض المشمسة أدفأ من الأرض المظللة لأن ضوء الشمس يدفئها، والأرض المظللة أبرد وغالبًا رطبة."]
          },
          story: {
            en: ["Nour is in her school yard in Cairo with a small mirror. She bounces sunlight onto a dark corner under the stairs.",
              "Her friend sprays water mist, and they see the straight path of the light. A second mirror sends it even further.",
              "With a magnifying glass and her teacher, she makes the bright spot tiny on black paper. Smoke rises!",
              "At 9 o'clock her shadow is long and points West. At noon it is short, under her feet.",
              "She touches the ground: hot in the sun, cool and a little damp in the shade of the wall."],
            ar: ["نور في فناء مدرستها بالقاهرة ومعها مرآة صغيرة، فتعكس ضوء الشمس إلى ركن مظلم تحت السلم.",
              "ترش صديقتها رذاذ الماء فتريان مسار الضوء المستقيم، ومرآة ثانية ترسله أبعد.",
              "وبعدسة مكبرة ومع معلمتها تجعل البقعة المضيئة صغيرة جدًا على ورقة سوداء، فيتصاعد الدخان!",
              "في الساعة التاسعة يكون ظلها طويلًا متجهًا إلى الغرب، وعند الظهر يصبح قصيرًا تحت قدميها.",
              "تلمس الأرض: ساخنة في الشمس، وباردة رطبة قليلًا في ظل الجدار."]
          }
        },
        words: [
          ["Light source", "مصدر الضوء", "An object that gives out its own light, like the Sun or a lamp.", "جسم يبعث ضوءه بنفسه مثل الشمس أو المصباح."],
          ["Reflection", "الانعكاس", "When light hits an object like a mirror and bounces back.", "ارتداد الضوء عندما يسقط على جسم مثل المرآة."],
          ["Straight line", "خط مستقيم", "Light always travels in straight lines while nothing blocks it.", "ينتقل الضوء دائمًا في خطوط مستقيمة ما لم يعترضه شيء."],
          ["Shadow", "الظل", "A dark place behind an object where light cannot reach.", "مكان مظلم خلف الجسم لا يصل إليه الضوء."],
          ["Sundial", "المزولة", "A tool that tells the time from the position of a shadow.", "أداة نعرف بها الوقت من موضع الظل."],
          ["Thermometer", "الترمومتر", "A tool to measure temperature. Shade its bulb from direct sunlight.", "أداة لقياس درجة الحرارة، ونظلل مستودعها من أشعة الشمس المباشرة."]
        ],
        lab: { parts: [{ type: "p4_light" }, {
          type: "sort",
          prompt: ["Tap a surface, then how it reflects light.", "اضغط على السطح، ثم على طريقة عكسه للضوء."],
          bins: [["reg", "🪞", "Regular: one direction", "منتظم: في اتجاه واحد"], ["irr", "🧱", "Irregular: many directions", "غير منتظم: في اتجاهات كثيرة"]],
          items: [
            [["Mirror", "المرآة"], "reg"], [["Still, smooth water", "ماء ساكن أملس"], "reg"], [["Shiny aluminium foil", "رقائق ألومنيوم لامعة"], "reg"],
            [["Classroom wall", "جدار الفصل"], "irr"], [["Rough stone", "حجر خشن"], "irr"], [["Paper", "الورق"], "irr"]
          ]
        }] },
        quiz: [
          { q: ["What is reflection?", "ما الانعكاس؟"],
            c: [["Light hitting an object and bouncing back", "ارتداد الضوء عندما يسقط على جسم"], ["Light being made by the Sun", "إنتاج الشمس للضوء"], ["Light being blocked to make a shadow", "حجب الضوء لتكوين ظل"], ["Light turning into sound", "تحول الضوء إلى صوت"]],
            off: ["When light hits an object like a mirror and bounces back, it is called reflection.", "ارتداد الضوء عندما يسقط على جسم مثل المرآة يسمى الانعكاس."],
            sto: ["Light is like a ball: throw it at the mirror and it bounces back.", "الضوء مثل الكرة: ارمها على المرآة فترتد إليك."] },
          { q: ["How does light reflected by a mirror travel?", "كيف ينتقل الضوء المنعكس عن المرآة؟"],
            c: [["In a straight line", "في خط مستقيم"], ["In a curved path", "في مسار منحنٍ"], ["In circles", "في دوائر"], ["It stops after the mirror", "يتوقف بعد المرآة"]],
            off: ["Sunlight and reflected light both travel in straight lines.", "ضوء الشمس والضوء المنعكس كلاهما ينتقل في خطوط مستقيمة."],
            sto: ["In the water mist, Nour saw the light path like a straight laser line.", "في رذاذ الماء رأت نور مسار الضوء مثل خط ليزر مستقيم."] },
          { q: ["How do you make paper burn fastest with a magnifying glass?", "كيف تحرق الورقة أسرع باستخدام العدسة المكبرة؟"],
            c: [["Make the point of light as small as possible", "اجعل نقطة الضوء أصغر ما يمكن"], ["Spread the light over a wide area", "انشر الضوء على مساحة واسعة"], ["Look at the Sun through it", "انظر إلى الشمس من خلالها"], ["Use white paper", "استخدم ورقة بيضاء"]],
            off: ["The smaller the gathered point, the brighter and hotter it becomes. Black paper absorbs sunlight better.", "كلما صغرت نقطة الضوء المجمّع زادت إضاءتها وحرارتها، والورق الأسود يمتص ضوء الشمس أفضل."],
            sto: ["All the sunlight squeezed into one tiny dot, like a crowd pushing through one small door.", "ضوء الشمس كله انضغط في نقطة صغيرة، مثل زحام يمر من باب صغير."] },
          { q: ["The Sun is on your right. Where is your shadow?", "الشمس على يمينك. أين ظلك؟"],
            c: [["On your left", "على يسارك"], ["On your right", "على يمينك"], ["In front of the Sun", "أمام الشمس"], ["There is no shadow", "لا يوجد ظل"]],
            off: ["Shadows form on the opposite side of the light source. Sun, object and shadow are in a straight line.", "يتكوّن الظل في الجهة المقابلة لمصدر الضوء، والشمس والجسم والظل على خط مستقيم."],
            sto: ["Your shadow always hides from the Sun behind you.", "ظلك يختبئ دائمًا من الشمس خلفك."] },
          { q: ["When is a stick's shadow shortest?", "متى يكون ظل العصا أقصر ما يمكن؟"],
            c: [["Around noon, when the Sun is highest", "عند الظهر عندما تكون الشمس في أعلى موضع"], ["Early in the morning", "في الصباح الباكر"], ["In the evening", "في المساء"], ["At night", "في الليل"]],
            off: ["When the Sun is high the shadow is short. When it is low, in the morning or evening, the shadow is long.", "عندما تكون الشمس عالية يكون الظل قصيرًا، وعندما تكون منخفضة صباحًا أو مساءً يكون الظل طويلًا."],
            sto: ["At noon Nour's shadow shrank under her feet like a shy cat.", "عند الظهر انكمش ظل نور تحت قدميها مثل قطة خجولة."] },
          { q: ["The Sun moves from East to South. How does the shadow move?", "تتحرك الشمس من الشرق إلى الجنوب. كيف يتحرك الظل؟"],
            c: [["From West to North", "من الغرب إلى الشمال"], ["From East to South", "من الشرق إلى الجنوب"], ["It does not move", "لا يتحرك"], ["From South to East", "من الجنوب إلى الشرق"]],
            off: ["The shadow is always opposite the Sun, so when the Sun moves East to South, the shadow moves West to North.", "الظل دائمًا في الجهة المقابلة للشمس، فإذا تحركت الشمس من الشرق إلى الجنوب تحرك الظل من الغرب إلى الشمال."],
            sto: ["The Sun and the shadow are on a seesaw: when one side goes one way, the other goes the opposite way.", "الشمس والظل على أرجوحة: إذا اتجه طرف في اتجاه، اتجه الآخر عكسه."] },
          { q: ["Why is sunny ground warmer than shady ground?", "لماذا تكون الأرض المشمسة أدفأ من الأرض المظللة؟"],
            c: [["Direct sunlight hits it and warms it", "لأن أشعة الشمس المباشرة تسقط عليها وتدفئها"], ["The shade absorbs more sunlight", "لأن الظل يمتص ضوءًا أكثر"], ["There is no wind in the sun", "لأنه لا توجد رياح في الشمس"], ["Sunny ground is always wet", "لأن الأرض المشمسة دائمًا مبتلة"]],
            off: ["Sunlight warms the ground it hits, and its temperature rises as time passes. Shady ground is cooler and often damp.", "ضوء الشمس يدفئ الأرض التي يسقط عليها فترتفع حرارتها مع الوقت، والأرض المظللة أبرد وغالبًا رطبة."],
            sto: ["The sunny ground sat under a warm blanket of light; the shady ground had no blanket.", "الأرض المشمسة كانت تحت بطانية دافئة من الضوء، والأرض المظللة بلا بطانية."] },
          { q: ["Which is the WRONG way to measure ground temperature?", "ما الطريقة الخطأ لقياس حرارة الأرض؟"],
            c: [["Hold the bulb tightly with your fingers", "إمساك المستودع بقوة بالأصابع"], ["Touch the bulb to the ground", "ملامسة المستودع للأرض"], ["Shade the bulb from direct sunlight", "تظليل المستودع من أشعة الشمس المباشرة"], ["Read straight across at the liquid", "القراءة بالنظر أفقيًا إلى السائل"]],
            off: ["Do not hold the bulb, or your body heat changes the reading. Touch it to the ground and shade it.", "لا نمسك المستودع حتى لا تغيّر حرارة أجسامنا القراءة، بل نلمسه بالأرض ونظلله."],
            sto: ["Your warm fingers would trick the thermometer into thinking the ground is hot.", "أصابعك الدافئة ستخدع الترمومتر فيظن أن الأرض ساخنة."] }
        ]
      },
      {
        id: "p4u2l2", icon: "🔊", page: 68,
        title: { en: "Properties of Sound", ar: "خصائص الصوت" },
        idea: {
          official: {
            en: ["When an object makes a sound, it is shaking. This shaking is called vibration. When the vibration stops, the sound stops.",
              "The vibrating object makes the air around it shake. When this shaking reaches our ears, we hear the sound.",
              "When an object vibrates a lot, the sound is loud. When it vibrates a little, the sound is soft.",
              "Sound travels not only through air but also through solid objects like string.",
              "In a string telephone the vibration goes from one paper cup, along the string, to the other cup. A tight string carries it well.",
              "If you pinch the string, the vibration becomes weak or stops, so the sound hardly travels."],
            ar: ["عندما يُصدر جسم صوتًا يكون مهتزًا، ويسمى هذا الاهتزاز ذبذبة، وعندما يتوقف الاهتزاز يتوقف الصوت.",
              "الجسم المهتز يجعل الهواء حوله يهتز، وعندما يصل هذا الاهتزاز إلى آذاننا نسمع الصوت.",
              "عندما يهتز الجسم كثيرًا يكون الصوت عاليًا، وعندما يهتز قليلًا يكون الصوت منخفضًا.",
              "ينتقل الصوت ليس في الهواء فقط، بل أيضًا في الأجسام الصلبة مثل الخيط.",
              "في تليفون الخيط ينتقل الاهتزاز من الكوب الورقي عبر الخيط إلى الكوب الآخر، والخيط المشدود ينقله جيدًا.",
              "إذا ضغطنا على الخيط بأصابعنا يضعف الاهتزاز أو يتوقف، فلا يكاد الصوت ينتقل."]
          },
          story: {
            en: ["Adam puts his hand on his throat while he sings in Mansoura. He feels it buzzing!",
              "He flicks a ruler on the desk edge. It shakes and hums, then stops, and the sound stops too.",
              "He flicks a rubber band softly, then hard. The hard flick swings wider and sounds louder.",
              "His sister Salma makes a string telephone with two paper cups. With the string tight, Adam hears her whisper.",
              "Then Adam pinches the string in the middle, and Salma's voice disappears. The vibration could not pass!"],
            ar: ["يضع آدم يده على حنجرته وهو يغني في المنصورة، فيشعر بها تهتز!",
              "ينقر مسطرة على حافة المكتب فتهتز وتطن، ثم تتوقف فيتوقف الصوت أيضًا.",
              "ينقر شريطًا مطاطيًا برفق ثم بقوة، فالنقرة القوية تجعله يتأرجح أكثر ويعلو صوته.",
              "تصنع أخته سلمى تليفون خيط من كوبين ورقيين، ومع شد الخيط يسمع آدم همسها.",
              "ثم يضغط آدم على منتصف الخيط فيختفي صوت سلمى؛ لم يستطع الاهتزاز أن يمر!"]
          }
        },
        words: [
          ["Vibration", "الاهتزاز", "The shaking of an object when it makes a sound.", "حركة الجسم الاهتزازية عندما يُصدر صوتًا."],
          ["Loud sound", "صوت عالٍ", "Made when an object vibrates a lot.", "يحدث عندما يهتز الجسم كثيرًا."],
          ["Soft sound", "صوت منخفض", "Made when an object vibrates a little.", "يحدث عندما يهتز الجسم قليلًا."],
          ["String telephone", "تليفون الخيط", "Two paper cups joined by a string that carries the vibration of your voice.", "كوبان ورقيان يصل بينهما خيط ينقل اهتزاز الصوت."],
          ["Monochord", "المونوكورد", "An instrument with one string you can flick to see it vibrate.", "آلة بوتر واحد ننقره لنرى اهتزازه."],
          ["Echo", "الصدى", "Sound bouncing back from hard surfaces like the stones of the pyramids.", "ارتداد الصوت عن الأسطح الصلبة مثل أحجار الأهرامات."]
        ],
        lab: { parts: [{ type: "p4_sound" }, {
          type: "sort",
          prompt: ["Is it vibrating right now? Tap a sentence, then its group.", "هل يهتز الآن؟ اضغط على الجملة، ثم على مجموعتها."],
          bins: [["yes", "〰️", "Vibrating: we hear a sound", "يهتز: نسمع صوتًا"], ["no", "🤫", "Not vibrating: no sound", "لا يهتز: لا صوت"]],
          items: [
            [["A guitar string making a sound", "وتر جيتار يُصدر صوتًا"], "yes"], [["Your throat while you talk", "حنجرتك وأنت تتكلم"], "yes"], [["A tight string telephone while a friend talks", "خيط تليفون مشدود وصديقك يتكلم"], "yes"],
            [["A drum skin pressed still by your hand", "جلد طبلة تضغط عليه بيدك فيسكن"], "no"], [["A whistle lying on the desk", "صفارة موضوعة على المكتب"], "no"], [["A triangle held tightly after you hit it", "مثلث موسيقي تمسكه بقوة بعد طرقه"], "no"]
          ]
        }] },
        quiz: [
          { q: ["What is happening to an object when it makes a sound?", "ماذا يحدث للجسم عندما يُصدر صوتًا؟"],
            c: [["It is vibrating", "يهتز"], ["It is melting", "ينصهر"], ["It is giving out light", "يبعث ضوءًا"], ["It is getting heavier", "يزداد وزنه"]],
            off: ["Every object that makes a sound is shaking. This shaking is called vibration.", "كل جسم يُصدر صوتًا يكون مهتزًا، ويسمى ذلك الاهتزاز."],
            sto: ["Adam's fingers felt his throat buzzing like a phone on silent mode.", "شعرت أصابع آدم بحنجرته تهتز مثل هاتف في الوضع الصامت."] },
          { q: ["You hit a triangle, then hold it tightly. What happens to the sound?", "طرقت مثلثًا موسيقيًا ثم أمسكته بقوة. ماذا يحدث للصوت؟"],
            c: [["It stops right away", "يتوقف فورًا"], ["It continues for a long time", "يستمر وقتًا طويلًا"], ["It becomes louder", "يصبح أعلى"], ["It turns into light", "يتحول إلى ضوء"]],
            off: ["Holding it stops the vibration, and when the vibration stops, the sound stops.", "الإمساك به يوقف الاهتزاز، وعندما يتوقف الاهتزاز يتوقف الصوت."],
            sto: ["No shaking, no sound: Adam's hand put the triangle to sleep.", "لا اهتزاز، لا صوت: يد آدم جعلت المثلث ينام."] },
          { q: ["You flick a rubber band strongly. Compared with a weak flick, its vibration is…", "نقرت شريطًا مطاطيًا بقوة. مقارنة بالنقرة الضعيفة يكون اهتزازه…"],
            c: [["bigger", "أكبر"], ["smaller", "أصغر"], ["the same", "كما هو"], ["zero", "صفرًا"]],
            off: ["A strong flick makes a bigger vibration, so the sound is louder.", "النقرة القوية تُحدث اهتزازًا أكبر، فيصبح الصوت أعلى."],
            sto: ["The hard flick made the band swing wide, like a big wave on the sea.", "النقرة القوية جعلت الشريط يتأرجح بعيدًا مثل موجة كبيرة في البحر."] },
          { q: ["How do we hear a sound?", "كيف نسمع الصوت؟"],
            c: [["The vibrating object shakes the air, and the shaking reaches our ears", "الجسم المهتز يهز الهواء فيصل الاهتزاز إلى آذاننا"], ["Light carries it to our eyes", "الضوء يحمله إلى أعيننا"], ["The object flies to our ears", "الجسم يطير إلى آذاننا"], ["Sound needs no shaking", "الصوت لا يحتاج إلى اهتزاز"]],
            off: ["When an object shakes, the air around it shakes too. When this reaches our ears, we hear the sound.", "عندما يهتز الجسم يهتز الهواء حوله، وعندما يصل ذلك إلى آذاننا نسمع الصوت."],
            sto: ["The shaking passes along the air like a baton in a relay race, all the way to your ear.", "ينتقل الاهتزاز في الهواء مثل عصا سباق التتابع حتى يصل إلى أذنك."] },
          { q: ["How can you hear your friend clearly on a string telephone?", "كيف تسمع صديقك بوضوح في تليفون الخيط؟"],
            c: [["Pull the string tight", "اشدد الخيط"], ["Leave the string loose", "اترك الخيط مرتخيًا"], ["Pinch the string in the middle", "اضغط على منتصف الخيط"], ["Cut the string", "اقطع الخيط"]],
            off: ["When the string is pulled tight, the vibration travels well, so the sound travels easily.", "عندما يكون الخيط مشدودًا ينتقل الاهتزاز جيدًا، فينتقل الصوت بسهولة."],
            sto: ["A tight string is a clear road for the vibration; a loose string is a road full of holes.", "الخيط المشدود طريق ممهد للاهتزاز، والخيط المرتخي طريق مليء بالحفر."] },
          { q: ["What happens if you pinch the string of a string telephone?", "ماذا يحدث إذا ضغطت على خيط تليفون الخيط؟"],
            c: [["The vibration stops, so you hardly hear the sound", "يتوقف الاهتزاز فلا تكاد تسمع الصوت"], ["The sound becomes louder", "يصبح الصوت أعلى"], ["Nothing changes", "لا يتغير شيء"], ["The cup lights up", "يضيء الكوب"]],
            off: ["Pinching makes the vibration weak or stops it there, so the sound hardly travels or does not travel.", "الضغط يُضعف الاهتزاز أو يوقفه عنده، فلا يكاد الصوت ينتقل أو لا ينتقل."],
            sto: ["Adam's fingers were a closed gate: the vibration could not get through to the other side.", "كانت أصابع آدم بوابة مغلقة، فلم يستطع الاهتزاز العبور إلى الجهة الأخرى."] },
          { q: ["You use a wire instead of a string. Can you still hear?", "استخدمت سلكًا بدل الخيط. هل ما زلت تسمع؟"],
            c: [["Yes, if the vibration travels along it", "نعم، إذا انتقل الاهتزاز خلاله"], ["No, sound never travels in wire", "لا، الصوت لا ينتقل في السلك أبدًا"], ["Only at night", "في الليل فقط"], ["Only if it is loose", "فقط إذا كان مرتخيًا"]],
            off: ["Sound travels through solid things like string or wire, as long as the vibration can pass.", "ينتقل الصوت في الأجسام الصلبة مثل الخيط أو السلك ما دام الاهتزاز يستطيع المرور."],
            sto: ["String or wire, the vibration does not mind, as long as the road is tight and clear.", "خيط أو سلك، لا يهم الاهتزاز ما دام الطريق مشدودًا وخاليًا."] }
        ]
      }
    ]
  },
  /* ---------------- Unit 3: Forces ---------------- */
  {
    id: "p4u3", num: 3, icon: "💨", color: "blue",
    title: { en: "Forces That Move Things", ar: "قوى تحرك الأشياء" },
    lessons: [
      {
        id: "p4u3l1", icon: "⛵", page: 78,
        title: { en: "The Force of Wind", ar: "قوة الرياح" },
        idea: {
          official: {
            en: ["A force is a push or pull. It can make a still object move, stop a moving object, or change its direction.",
              "The greater the force, the greater its effect on the object.",
              "Wind has the power to move things. A weak wind pushes a wind-powered car only a short distance.",
              "A strong wind pushes the car harder, so it travels a longer distance.",
              "With the same wind, a larger sail catches more wind and gets more power, so the car travels farther.",
              "In a fair test we change only one thing, like the sail size, and keep everything else the same."],
            ar: ["القوة دفع أو شد، ويمكنها أن تحرك جسمًا ساكنًا، أو توقف جسمًا متحركًا، أو تغيّر اتجاه حركته.",
              "كلما زادت القوة زاد تأثيرها في الجسم.",
              "للرياح قدرة على تحريك الأشياء، والرياح الضعيفة تدفع السيارة الهوائية مسافة قصيرة.",
              "والرياح القوية تدفع السيارة بقوة أكبر فتقطع مسافة أطول.",
              "ومع ثبات قوة الرياح، الشراع الأكبر يلتقط رياحًا أكثر ويحصل على قوة أكبر فتذهب السيارة أبعد.",
              "في التجربة العادلة نغيّر شيئًا واحدًا فقط مثل حجم الشراع، ونثبّت كل الأشياء الأخرى."]
          },
          story: {
            en: ["Karim watches a felucca on the Nile in Aswan. Its big white sail fills with wind and the boat glides.",
              "At school he builds a car from a food tray, bottle caps and a paper sail.",
              "With the fan on weak, the car rolls a little. On strong, it shoots far across the floor!",
              "Then he keeps the fan the same and swaps the small sail for a large one. The car goes even farther.",
              "Karim laughs: the bigger the sail, the more wind it catches, just like the felucca."],
            ar: ["يشاهد كريم فلوكة على النيل في أسوان، يمتلئ شراعها الأبيض الكبير بالرياح فتنساب.",
              "وفي المدرسة يصنع سيارة من صينية طعام وأغطية زجاجات وشراع من الورق.",
              "عندما تكون المروحة ضعيفة تتحرك السيارة قليلًا، وعندما تكون قوية تنطلق بعيدًا على الأرض!",
              "ثم يثبّت المروحة ويغيّر الشراع الصغير بشراع كبير، فتذهب السيارة أبعد.",
              "يضحك كريم: كلما كبر الشراع التقط رياحًا أكثر، تمامًا مثل الفلوكة."]
          }
        },
        words: [
          ["Force", "القوة", "A push or pull that can start, stop or change the direction of motion.", "دفع أو شد يمكنه أن يبدأ الحركة أو يوقفها أو يغيّر اتجاهها."],
          ["Wind", "الرياح", "Moving air. It has the power to move things.", "هواء متحرك، وله قدرة على تحريك الأشياء."],
          ["Sail", "الشراع", "The part that catches the wind. A larger sail catches more.", "الجزء الذي يلتقط الرياح، والشراع الأكبر يلتقط أكثر."],
          ["Distance", "المسافة", "How far the car travels from the start line to where it stops.", "مقدار ما تقطعه السيارة من خط البداية إلى مكان توقفها."],
          ["Fair test", "التجربة العادلة", "Change only one thing and keep all the others the same.", "نغيّر شيئًا واحدًا فقط ونثبّت كل الأشياء الأخرى."],
          ["Felucca", "الفلوكة", "A traditional Nile sailboat moved by the wind's power.", "مركب شراعي تقليدي في النيل تحركه قوة الرياح."]
        ],
        lab: { parts: [{ type: "p4_wind" }] },
        quiz: [
          { q: ["What is a force?", "ما القوة؟"],
            c: [["A push or a pull", "دفع أو شد"], ["A kind of light", "نوع من الضوء"], ["A sound", "صوت"], ["A kind of soil", "نوع من التربة"]],
            off: ["A force is a push or pull that can start, stop or change the direction of motion.", "القوة دفع أو شد يمكنه أن يبدأ الحركة أو يوقفها أو يغيّر اتجاهها."],
            sto: ["Opening a door is a pull, kicking a ball is a push. Both are forces.", "فتح الباب شد، وركل الكرة دفع، وكلاهما قوة."] },
          { q: ["A car is hit by a strong wind instead of a weak wind. Its distance becomes…", "سيارة تدفعها رياح قوية بدل رياح ضعيفة. تصبح مسافتها…"],
            c: [["longer", "أطول"], ["shorter", "أقصر"], ["the same", "كما هي"], ["zero", "صفرًا"]],
            off: ["A strong wind has bigger power, so it pushes the car harder and it travels farther.", "الرياح القوية لها قدرة أكبر، فتدفع السيارة بقوة أكبر فتقطع مسافة أطول."],
            sto: ["On the strong setting, Karim's car shot off like a rocket.", "على الوضع القوي انطلقت سيارة كريم مثل الصاروخ."] },
          { q: ["The wind is the same. Which car travels the farthest?", "الرياح ثابتة. أي سيارة تقطع أبعد مسافة؟"],
            c: [["A car with a large sail", "سيارة بشراع كبير"], ["A car with a small sail", "سيارة بشراع صغير"], ["A car with no sail", "سيارة بلا شراع"], ["They all go the same", "كلها متساوية"]],
            off: ["A larger sail has more area to catch the wind, so it gets more power and goes farther.", "الشراع الأكبر له مساحة أكبر لالتقاط الرياح، فيحصل على قوة أكبر ويذهب أبعد."],
            sto: ["A big sail is like a big net that catches lots of wind.", "الشراع الكبير مثل شبكة كبيرة تصطاد رياحًا كثيرة."] },
          { q: ["To test sail size fairly, what must stay the same?", "لاختبار حجم الشراع بعدل، ما الذي يجب أن يبقى ثابتًا؟"],
            c: [["The wind strength and the start place", "قوة الرياح ومكان البداية"], ["The sail size", "حجم الشراع"], ["Nothing", "لا شيء"], ["Only the colour of the car", "لون السيارة فقط"]],
            off: ["In a fair test you change only the sail size and keep the wind strength and start line the same.", "في التجربة العادلة نغيّر حجم الشراع فقط ونثبّت قوة الرياح وخط البداية."],
            sto: ["If Karim changed the fan too, he would not know which change made the difference.", "لو غيّر كريم المروحة أيضًا، لما عرف أي تغيير صنع الفرق."] },
          { q: ["Which of these is true about wind?", "أي العبارات صحيحة عن الرياح؟"],
            c: [["We cannot see it, but it can push things", "لا نراها لكنها تستطيع دفع الأشياء"], ["It can never move anything", "لا تستطيع تحريك أي شيء"], ["The distance is always the same", "المسافة دائمًا ثابتة"], ["It only works at night", "تعمل في الليل فقط"]],
            off: ["Wind is invisible moving air, but it makes a force when it hits things.", "الرياح هواء متحرك لا نراه، لكنها تُحدث قوة عندما تصطدم بالأشياء."],
            sto: ["You cannot see the wind, but you see the felucca's sail fill up and the boat move.", "لا ترى الرياح، لكنك ترى شراع الفلوكة يمتلئ والمركب يتحرك."] },
          { q: ["Why does the felucca change the direction of its sail?", "لماذا يغيّر بحّار الفلوكة اتجاه الشراع؟"],
            c: [["To control which way the wind pushes the boat", "ليتحكم في اتجاه دفع الرياح للمركب"], ["To make the wind stop", "ليوقف الرياح"], ["To make the boat heavier", "ليجعل المركب أثقل"], ["To catch fish", "ليصطاد السمك"]],
            off: ["By changing the sail's direction, sailors adjust which way the wind pushes, so the boat goes where they want.", "بتغيير اتجاه الشراع يضبط البحارة اتجاه دفع الرياح، فيذهب المركب حيث يريدون."],
            sto: ["The sailor turns the sail like a steering wheel made of cloth.", "يدير البحار الشراع مثل عجلة قيادة من القماش."] }
        ]
      },
      {
        id: "p4u3l2", icon: "🚗", page: 84,
        title: { en: "The Force of Rubber", ar: "قوة المطاط" },
        idea: {
          official: {
            en: ["A stretched rubber band tries to return to its original shape. This power can make things fly or make cars run.",
              "The longer you stretch the rubber band, the stronger its power to return, and the bigger its power to move things.",
              "In the book's test, the band is stretched 5 cm, 10 cm and 15 cm, and the distance is measured each time.",
              "When you use more rubber bands, their powers combine, and the power to move the car becomes even stronger.",
              "When the band is loose and back to its original shape, it no longer pushes the car.",
              "The ancient Egyptian bow and arrow used this same power to snap back."],
            ar: ["الشريط المطاطي المشدود يحاول العودة إلى شكله الأصلي، وهذه القوة تستطيع أن تُطلق الأشياء أو تُسيّر السيارات.",
              "كلما زاد شد الشريط المطاطي زادت قوته للعودة، وزادت قدرته على تحريك الأشياء.",
              "في تجربة الكتاب يُشد الشريط ٥ سم ثم ١٠ سم ثم ١٥ سم، وتُقاس المسافة في كل مرة.",
              "وعند استخدام عدد أكبر من الأشرطة المطاطية تتجمع قواها، فتصبح قوة تحريك السيارة أكبر.",
              "وعندما يرتخي الشريط ويعود إلى شكله الأصلي لا يدفع السيارة بعد ذلك.",
              "واستخدم المصريون القدماء القوس والسهم معتمدين على قوة الارتداد نفسها."]
          },
          story: {
            en: ["Hana in Ismailia takes the sail off her wind car and tapes a hook underneath.",
              "She hooks a rubber band on the launching pad and pulls the car back 5 cm. It rolls a short way.",
              "At 10 cm it goes farther, and at 15 cm it zooms across the classroom!",
              "Then she bundles 2 rubber bands and pulls them the same 10 cm. The car goes much farther than with 1.",
              "Her grandfather tells her the archers of ancient Egypt pulled their bows far back for the same reason."],
            ar: ["في الإسماعيلية تنزع هنا الشراع عن سيارتها الهوائية وتثبّت خطافًا أسفلها.",
              "تعلّق الشريط المطاطي في منصة الإطلاق وتسحب السيارة ٥ سم إلى الخلف، فتتحرك مسافة قصيرة.",
              "وعند ١٠ سم تذهب أبعد، وعند ١٥ سم تنطلق عبر الفصل كله!",
              "ثم تجمع شريطين معًا وتشدهما ١٠ سم نفسها، فتذهب السيارة أبعد كثيرًا من شريط واحد.",
              "ويخبرها جدها أن رماة مصر القديمة كانوا يشدون أقواسهم بعيدًا للسبب نفسه."]
          }
        },
        words: [
          ["Rubber band", "الشريط المطاطي", "A band that tries to return to its original shape when stretched.", "شريط يحاول العودة إلى شكله الأصلي عندما يُشد."],
          ["Stretch", "الشد", "Pulling the rubber band longer. More stretch, more power.", "سحب الشريط ليطول؛ شد أكثر يعني قوة أكبر."],
          ["Original shape", "الشكل الأصلي", "The shape the rubber band has before it is stretched.", "شكل الشريط المطاطي قبل شدّه."],
          ["Combined power", "القوى المجتمعة", "Using more rubber bands adds their powers together.", "استخدام أشرطة أكثر يجمع قواها معًا."],
          ["Launching pad", "منصة الإطلاق", "The board where the rubber band is hooked; its start is 0 cm.", "اللوح الذي يُعلّق فيه الشريط، وبدايته عند ٠ سم."],
          ["Bow and arrow", "القوس والسهم", "An ancient Egyptian tool that used the power to snap back.", "أداة مصرية قديمة استخدمت قوة الارتداد."]
        ],
        lab: { parts: [{ type: "p4_rubber" }] },
        quiz: [
          { q: ["When does a rubber band have power to move a car?", "متى يكون للشريط المطاطي قوة لتحريك السيارة؟"],
            c: [["When it is stretched and trying to return", "عندما يكون مشدودًا ويحاول العودة"], ["When it is loose and relaxed", "عندما يكون مرتخيًا"], ["When it is cut", "عندما يُقطع"], ["When it is wet", "عندما يكون مبتلًا"]],
            off: ["A stretched rubber band tries to return to its original shape, and that power moves the car.", "الشريط المشدود يحاول العودة إلى شكله الأصلي، وهذه القوة تحرك السيارة."],
            sto: ["A stretched band is like a spring waiting to jump; a loose band is asleep.", "الشريط المشدود مثل نابض ينتظر القفز، والمرتخي نائم."] },
          { q: ["You stretch the band longer. What happens to the distance?", "شددت الشريط أكثر. ماذا يحدث للمسافة؟"],
            c: [["It becomes longer", "تصبح أطول"], ["It becomes shorter", "تصبح أقصر"], ["It stays the same", "تبقى كما هي"], ["The car goes backwards", "تعود السيارة للخلف"]],
            off: ["The longer the stretch, the stronger the power to move the car, so it travels farther.", "كلما زاد الشد زادت قوة تحريك السيارة فتقطع مسافة أطول."],
            sto: ["Hana's car at 15 cm zoomed farther than at 5 cm.", "سيارة هنا عند ١٥ سم انطلقت أبعد منها عند ٥ سم."] },
          { q: ["How can you make the rubber band power stronger without stretching longer?", "كيف تزيد قوة المطاط دون أن تشده أكثر؟"],
            c: [["Use more rubber bands", "استخدم أشرطة مطاطية أكثر"], ["Use fewer rubber bands", "استخدم أشرطة أقل"], ["Paint the car", "لوّن السيارة"], ["Remove the hook", "انزع الخطاف"]],
            off: ["With more rubber bands, the powers of each band combine, so the power becomes stronger.", "مع أشرطة أكثر تتجمع قوة كل شريط فتصبح القوة أكبر."],
            sto: ["Two bands pulling together are like two friends pushing a swing.", "شريطان يشدان معًا مثل صديقين يدفعان أرجوحة."] },
          { q: ["All stretched 15 cm. Which has the WEAKEST power?", "كلها مشدودة ١٥ سم. أيها له أضعف قوة؟"],
            c: [["1 rubber band", "شريط واحد"], ["2 rubber bands", "شريطان"], ["3 rubber bands", "٣ أشرطة"], ["They are all equal", "كلها متساوية"]],
            off: ["At the same stretch, fewer bands give less combined power, so 1 band is the weakest.", "عند الشد نفسه، الأشرطة الأقل تعطي قوة مجتمعة أقل، فالشريط الواحد هو الأضعف."],
            sto: ["One band alone is one person pulling a rope; three bands are a whole team.", "الشريط الواحد شخص يشد حبلًا، والثلاثة فريق كامل."] },
          { q: ["A car carries a heavy load. How can you make the rubber power stronger?", "سيارة تحمل حملًا ثقيلًا. كيف تزيد قوة المطاط؟"],
            c: [["Use more bands and stretch them longer", "استخدم أشرطة أكثر واشددها أكثر"], ["Use fewer bands and stretch less", "استخدم أشرطة أقل واشددها أقل"], ["Stretch them shorter only", "اشددها أقل فقط"], ["Take the bands off", "انزع الأشرطة"]],
            off: ["Both more bands and a longer stretch increase the power to move the car.", "زيادة عدد الأشرطة وزيادة الشد كلاهما يزيد قوة تحريك السيارة."],
            sto: ["Hana used a team of bands and a big pull to move her loaded car.", "استخدمت هنا فريقًا من الأشرطة وشدًا كبيرًا لتحرك سيارتها المحمّلة."] },
          { q: ["What did both the wind car and the rubber car teach us?", "ماذا علّمتنا سيارة الرياح وسيارة المطاط معًا؟"],
            c: [["A stronger force moves the car farther", "القوة الأكبر تحرك السيارة أبعد"], ["Force does not matter", "القوة لا تهم"], ["A weaker force moves it farther", "القوة الأضعف تحركها أبعد"], ["Cars only move downhill", "السيارات تتحرك في المنحدرات فقط"]],
            off: ["Making the power of the wind or rubber bands stronger lets us move the car farther.", "جعل قوة الرياح أو المطاط أكبر يجعلنا نحرك السيارة أبعد."],
            sto: ["Bigger push, longer trip: that is the rule for wind and rubber alike.", "دفعة أكبر، رحلة أطول: هذه قاعدة الرياح والمطاط معًا."] }
        ]
      }
    ]
  },
  /* ---------------- Unit 4: Soil, water and life in Egypt ---------------- */
  {
    id: "p4u4", num: 4, icon: "🏺", color: "teal",
    title: { en: "Soil, Water, and Life in Egypt", ar: "التربة والماء والحياة في مصر" },
    lessons: [
      {
        id: "p4u4l1", icon: "🏜️", page: 92,
        title: { en: "Soil, Water, and Life in Egypt", ar: "التربة والماء والحياة في مصر" },
        idea: {
          official: {
            en: ["How fast water soaks into the ground depends on the size of the particles that make up the soil.",
              "Sandy soil, like desert sand, has large particles with large spaces between them, so water passes through quickly.",
              "Clay soil, like Nile River mud, has small, fine particles with narrow spaces, so water passes through slowly.",
              "Nile mud holds water and nutrients for a long time, so it is good for farming. Desert farming needs ideas to stop water escaping.",
              "Ancient Egyptians moved giant stone statues by combining forces: many people pulled ropes in the same direction.",
              "They sprinkled water on the sand in front of the sled to make it slippery, so less force was needed."],
            ar: ["تعتمد سرعة تسرّب الماء في الأرض على حجم الحبيبات التي تتكون منها التربة.",
              "التربة الرملية مثل رمال الصحراء حبيباتها كبيرة والمسافات بينها واسعة، فيمر الماء خلالها بسرعة.",
              "التربة الطينية مثل طمي النيل حبيباتها صغيرة ناعمة والمسافات بينها ضيقة، فيمر الماء خلالها ببطء.",
              "يحتفظ طمي النيل بالماء والمواد الغذائية وقتًا طويلًا فهو جيد للزراعة، أما الزراعة في الصحراء فتحتاج أفكارًا لمنع تسرّب الماء.",
              "نقل المصريون القدماء التماثيل الحجرية الضخمة بتجميع القوى: كثير من الناس يشدون الحبال في الاتجاه نفسه.",
              "ورشّوا الماء على الرمال أمام الزلاجة لتصبح زلقة، فاحتاجوا إلى قوة أقل."]
          },
          story: {
            en: ["Ali lives in Luxor. His uncle farms Nile mud near the river, and his cousin farms sand in the Kharga oasis.",
              "In class they fill two cut bottles with gauze: desert sand in one, farm mud in the other.",
              "They pour the same water into both. Drops fall from the sand bottle almost at once!",
              "The mud bottle drips slowly, and water still sits on top. That is why the Nile fields stay wet.",
              "On a temple wall, Ali sees a painting: many men pulling a statue on a sled, and one man pouring water on the sand."],
            ar: ["يعيش علي في الأقصر؛ عمه يزرع طمي النيل قرب النهر، وابن عمه يزرع الرمال في واحة الخارجة.",
              "في الفصل يملؤون زجاجتين مقطوعتين عليهما شاش: رمال الصحراء في واحدة، وطمي الحقل في الأخرى.",
              "يصبّون الماء نفسه في الاثنتين، فتسقط القطرات من زجاجة الرمل فورًا تقريبًا!",
              "أما زجاجة الطمي فتقطر ببطء، ويبقى الماء فوقها؛ لهذا تبقى حقول النيل رطبة.",
              "وعلى جدار معبد يرى علي رسمًا: رجال كثيرون يشدون تمثالًا على زلاجة، ورجل يصب الماء على الرمال."]
          }
        },
        words: [
          ["Soil particles", "حبيبات التربة", "The tiny grains that make up soil. Their size controls how fast water passes.", "الحبيبات الصغيرة التي تتكون منها التربة، وحجمها يحدد سرعة مرور الماء."],
          ["Sandy soil", "التربة الرملية", "Large particles and wide spaces; water passes through quickly.", "حبيبات كبيرة ومسافات واسعة، يمر الماء خلالها بسرعة."],
          ["Clay soil (Nile mud)", "التربة الطينية (طمي النيل)", "Small, fine particles and narrow spaces; water passes slowly.", "حبيبات صغيرة ناعمة ومسافات ضيقة، يمر الماء خلالها ببطء."],
          ["Nutrients", "المواد الغذائية", "Plant food held in the soil. Nile mud keeps them for a long time.", "غذاء النبات الموجود في التربة، ويحتفظ به طمي النيل طويلًا."],
          ["Combining forces", "تجميع القوى", "Many people pulling the same way add small forces into a large force.", "شد أشخاص كثيرين في الاتجاه نفسه يجمع القوى الصغيرة في قوة كبيرة."],
          ["Slippery", "زلق", "A wet, smooth surface that needs less force to slide things on.", "سطح مبتل أملس يحتاج إلى قوة أقل لسحب الأشياء عليه."]
        ],
        lab: { parts: [{ type: "p4_soil" }, { type: "p4_statue" }] },
        quiz: [
          { q: ["Water passes through desert sand quickly because…", "يمر الماء خلال رمال الصحراء بسرعة لأن…"],
            c: [["its particles are large with wide spaces", "حبيباتها كبيرة والمسافات بينها واسعة"], ["its particles are tiny with narrow spaces", "حبيباتها صغيرة جدًا والمسافات ضيقة"], ["it is always wet", "لأنها دائمًا مبتلة"], ["it is black", "لأنها سوداء"]],
            off: ["Large particles leave large spaces, so water leaks through quickly.", "الحبيبات الكبيرة تترك مسافات واسعة، فيتسرب الماء بسرعة."],
            sto: ["Sand is like a basket of big oranges: water finds big gaps and runs straight through.", "الرمل مثل سلة برتقال كبير: يجد الماء فراغات واسعة فيمر مباشرة."] },
          { q: ["What is true about fine Nile mud?", "ما الصحيح عن طمي النيل الناعم؟"],
            c: [["Small particles, water passes slowly", "حبيبات صغيرة، يمر الماء ببطء"], ["Large particles, water passes quickly", "حبيبات كبيرة، يمر الماء بسرعة"], ["Small particles, water passes quickly", "حبيبات صغيرة، يمر الماء بسرعة"], ["It has no particles", "ليس له حبيبات"]],
            off: ["Nile mud has small, fine particles with narrow spaces, so water passes through slowly.", "طمي النيل حبيباته صغيرة ناعمة والمسافات بينها ضيقة، فيمر الماء ببطء."],
            sto: ["Mud is like a jar of flour: water has to squeeze through tiny gaps.", "الطمي مثل برطمان دقيق: يضطر الماء أن يتسلل من فراغات صغيرة جدًا."] },
          { q: ["Why is Nile mud good for farming?", "لماذا يعد طمي النيل جيدًا للزراعة؟"],
            c: [["It holds water and nutrients for a long time", "يحتفظ بالماء والمواد الغذائية وقتًا طويلًا"], ["Water leaves it at once", "يتركه الماء فورًا"], ["It is very hot", "لأنه ساخن جدًا"], ["Nothing can grow in it", "لا ينمو فيه شيء"]],
            off: ["Nile mud keeps water and nutrients for a long time, so plants have what they need.", "طمي النيل يحفظ الماء والمواد الغذائية وقتًا طويلًا، فيجد النبات ما يحتاجه."],
            sto: ["Ali's uncle says the Nile mud is a full water bottle for the roots.", "يقول عم علي إن طمي النيل زجاجة ماء ممتلئة للجذور."] },
          { q: ["After heavy rain in the desert, the ground dries quickly because…", "بعد مطر غزير في الصحراء تجف الأرض بسرعة لأن…"],
            c: [["water drains through the large spaces between big particles", "الماء يتسرب من المسافات الواسعة بين الحبيبات الكبيرة"], ["the particles are very small", "الحبيبات صغيرة جدًا"], ["the rain is not real water", "المطر ليس ماءً حقيقيًا"], ["the sand pushes water up", "الرمل يدفع الماء لأعلى"]],
            off: ["Desert sand has large particles and large spaces, so rainwater soaks away fast.", "رمل الصحراء حبيباته كبيرة ومسافاته واسعة، فيتسرب ماء المطر بسرعة."],
            sto: ["In the sand bottle, the water vanished like a magic trick.", "في زجاجة الرمل اختفى الماء كأنه خدعة سحرية."] },
          { q: ["Why did many people pull the rope to move a stone statue?", "لماذا كان أشخاص كثيرون يشدون الحبل لتحريك التمثال الحجري؟"],
            c: [["To make a larger force than one person", "ليصنعوا قوة أكبر من قوة شخص واحد"], ["So it would go the wrong way", "ليتحرك في الاتجاه الخطأ"], ["Because pulling makes you hungry", "لأن الشد يجعلك جائعًا"], ["To make the statue lighter", "ليجعلوا التمثال أخف"]],
            off: ["By pulling in the same direction, they added up small forces into one large force.", "بالشد في الاتجاه نفسه جمعوا القوى الصغيرة في قوة واحدة كبيرة."],
            sto: ["One person is one drop; many people pulling together are a river.", "الشخص الواحد قطرة، وكثيرون يشدون معًا نهر."] },
          { q: ["If you make the ground slippery, the force needed to move a heavy object…", "إذا جعلت الأرض زلقة، فإن القوة اللازمة لتحريك جسم ثقيل…"],
            c: [["becomes less", "تصبح أقل"], ["becomes larger", "تصبح أكبر"], ["does not change", "لا تتغير"], ["becomes zero always", "تصبح صفرًا دائمًا"]],
            off: ["Sprinkling water made the sand slippery, which reduced the force needed to move the sled.", "رشّ الماء جعل الرمل زلقًا، فقلّت القوة اللازمة لتحريك الزلاجة."],
            sto: ["Like sliding on a wet floor, the wet sand helped the sled glide.", "مثل الانزلاق على أرض مبتلة، ساعد الرمل المبتل الزلاجة على الانسياب."] },
          { q: ["In the soil test, what must be the same in both bottles?", "في تجربة التربة، ما الذي يجب أن يكون متساويًا في الزجاجتين؟"],
            c: [["The amount of soil and the amount of water", "كمية التربة وكمية الماء"], ["The type of soil", "نوع التربة"], ["Nothing", "لا شيء"], ["Only the bottle colour", "لون الزجاجة فقط"]],
            off: ["For a fair test, use the same amount of soil and pour the same amount of water at the same time.", "لتكون التجربة عادلة نستخدم الكمية نفسها من التربة ونصب الكمية نفسها من الماء في الوقت نفسه."],
            sto: ["Ali changed only one thing, the type of soil, so the race was fair.", "غيّر علي شيئًا واحدًا فقط هو نوع التربة، فكان السباق عادلًا."] }
        ]
      }
    ]
  }
  ] };

  /* =========================================================
     OBJECTIVES ("In this lesson")
     ========================================================= */
  var OBJ = E.SCI3_OBJ = E.SCI3_OBJ || {};
  OBJ.p4u1l1 = { en: ["Find where living organisms live", "Observe with a magnifying glass and a record card", "Group living organisms by colour, shape and size", "Habitats and adaptation in the desert"],
    ar: ["أين تعيش الكائنات الحية", "الملاحظة بالعدسة المكبرة وبطاقة التسجيل", "تصنيف الكائنات الحية حسب اللون والشكل والحجم", "المواطن والتكيّف في الصحراء"] };
  OBJ.p4u1l2 = { en: ["Eggs and larvae", "Molting as a larva grows", "Pupa and adult insect", "The 3 body parts and 6 legs of an insect"],
    ar: ["البيض واليرقات", "الانسلاخ أثناء نمو اليرقة", "العذراء والحشرة الكاملة", "أجزاء جسم الحشرة الثلاثة وأرجلها الست"] };
  OBJ.p4u1l3 = { en: ["Sowing seeds", "Seed leaves, true leaves and plant height", "From flower to fruit to new seeds", "Roots, stem and leaves and their jobs"],
    ar: ["زراعة البذور", "الأوراق الفلقية والحقيقية وطول النبات", "من الزهرة إلى الثمرة إلى البذور الجديدة", "الجذر والساق والأوراق ووظائفها"] };
  OBJ.p4u2l1 = { en: ["Light travels in straight lines and reflects", "Gathering light with a magnifying glass", "Shadows and the movement of the Sun", "Ground temperature in sun and shade"],
    ar: ["الضوء ينتقل في خطوط مستقيمة وينعكس", "تجميع الضوء بالعدسة المكبرة", "الظل وحركة الشمس الظاهرية", "حرارة الأرض في الشمس والظل"] };
  OBJ.p4u2l2 = { en: ["Sound is made by vibration", "Loud and soft sounds", "Sound travels through string", "Making and testing a string telephone"],
    ar: ["الصوت ينتج عن الاهتزاز", "الصوت العالي والصوت المنخفض", "انتقال الصوت خلال الخيط", "صنع تليفون الخيط واختباره"] };
  OBJ.p4u3l1 = { en: ["What a force is", "Wind strength and distance", "Sail size and distance", "Doing a fair test"],
    ar: ["ما القوة", "قوة الرياح والمسافة", "حجم الشراع والمسافة", "إجراء تجربة عادلة"] };
  OBJ.p4u3l2 = { en: ["The power of a stretched rubber band", "Stretch length and distance", "Combining rubber bands", "Stored power in Egyptian history"],
    ar: ["قوة الشريط المطاطي المشدود", "مقدار الشد والمسافة", "تجميع الأشرطة المطاطية", "القوة المخزنة في تاريخ مصر"] };
  OBJ.p4u4l1 = { en: ["Particle size and how water soaks in", "Desert sand and Nile mud", "Why Nile mud is good for farming", "Combining forces and making it slippery"],
    ar: ["حجم الحبيبات وتسرّب الماء", "رمال الصحراء وطمي النيل", "لماذا يصلح طمي النيل للزراعة", "تجميع القوى وجعل الأرض زلقة"] };

  /* =========================================================
     EXTRA QUIZ ITEMS (order / match / tf)
     ========================================================= */
  var EX = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  EX.p4u1l1 = [
    { k: "match", q: ["Match each living organism to its habitat.", "صِل كل كائن حي بموطنه."],
      pairs: [[["Grasshopper", "الجرادة"], ["Grass", "الحشائش"]], [["Ant", "النملة"], ["Under stones (damp)", "تحت الحجارة (رطوبة)"]], [["Lizard", "السحلية"], ["Sunny rocks", "الصخور المشمسة"]], [["Lotus", "اللوتس"], ["Nile wetlands", "مستنقعات النيل"]]],
      off: ["Each living organism lives in a habitat that fits it, so the kinds you find depend on the place.", "كل كائن حي يعيش في موطن يناسبه، لذلك تختلف الكائنات التي نجدها باختلاف المكان."],
      sto: ["Omar found each animal at its own address: grass, stone, rock and river.", "وجد عمر كل حيوان في عنوانه: الحشائش، والحجر، والصخرة، والنهر."] },
    { k: "tf", q: ["True or false: it is safe to look at the Sun through a magnifying glass.", "صواب أم خطأ: من الآمن النظر إلى الشمس من خلال العدسة المكبرة."], a: false,
      off: ["False. Never look directly at the Sun with a magnifying glass. It will hurt your eyes.", "خطأ؛ لا ننظر إلى الشمس بالعدسة المكبرة أبدًا لأنها تؤذي العينين."],
      sto: ["Omar's glass points at leaves and beetles, never at the Sun.", "عدسة عمر تتجه إلى الأوراق والخنافس، ولا تتجه إلى الشمس أبدًا."] }
  ];
  EX.p4u1l2 = [
    { k: "order", q: ["Put a butterfly's life in order.", "رتّب مراحل حياة الفراشة."],
      items: [["Egg", "بيضة"], ["Larva", "يرقة"], ["Pupa", "عذراء"], ["Adult insect", "حشرة كاملة"]],
      off: ["Butterflies grow egg, larva, pupa, then adult insect, which lays eggs again.", "تنمو الفراشة: بيضة، يرقة، عذراء، ثم حشرة كاملة تضع البيض من جديد."],
      sto: ["Malak's diary: tiny egg, hungry larva, quiet pupa, flying butterfly.", "مذكرات ملك: بيضة صغيرة، يرقة جائعة، عذراء هادئة، فراشة طائرة."] },
    { k: "tf", q: ["True or false: a larva grows bigger even if it does not eat.", "صواب أم خطأ: تكبر اليرقة حتى لو لم تأكل."], a: false,
      off: ["False. A larva eats a lot of food and grows by shedding its skin many times.", "خطأ؛ اليرقة تأكل غذاءً كثيرًا وتكبر بانسلاخ جلدها مرات كثيرة."],
      sto: ["No fresh leaves, no growing: Malak always kept the leaves fresh.", "بلا أوراق طازجة لا نمو؛ لذلك كانت ملك تحافظ على الأوراق طازجة."] }
  ];
  EX.p4u1l3 = [
    { k: "order", q: ["Put a plant's growth in order.", "رتّب مراحل نمو النبات."],
      items: [["Sow the seed", "زراعة البذرة"], ["Sprout with seed leaves", "إنبات وظهور الأوراق الفلقية"], ["True leaves and taller stem", "أوراق حقيقية وساق أطول"], ["Bud and flower", "برعم وزهرة"], ["Fruit with new seeds", "ثمرة بها بذور جديدة"]],
      off: ["Sow, sprout, stems and leaves grow, buds form, the flower blooms, then a fruit with new seeds is made.", "بذر، ثم إنبات، ثم نمو الساق والأوراق، ثم البراعم، ثم تتفتح الزهرة، ثم تتكون ثمرة بها بذور جديدة."],
      sto: ["Youssef's sunflower went from one striped seed to hundreds of new ones.", "تحوّل عباد شمس يوسف من بذرة مخططة واحدة إلى مئات البذور الجديدة."] },
    { k: "tf", q: ["True or false: seed leaves and true leaves of a sunflower have exactly the same shape.", "صواب أم خطأ: الأوراق الفلقية والحقيقية لعباد الشمس لهما الشكل نفسه تمامًا."], a: false,
      off: ["False. Sunflower seed leaves are round, but the true leaves have jagged edges.", "خطأ؛ الأوراق الفلقية لعباد الشمس مستديرة، أما الأوراق الحقيقية فحوافها مسننة."],
      sto: ["The first two leaves were round coins; the later ones had saw-tooth edges.", "الورقتان الأوليان كانتا مثل عملتين مستديرتين، والتاليتان لهما حواف مثل المنشار."] }
  ];
  EX.p4u2l1 = [
    { k: "match", q: ["Match the time of day to the shadow.", "صِل الوقت بالظل."],
      pairs: [[["Morning (Sun in the East)", "الصباح (الشمس في الشرق)"], ["Long shadow to the West", "ظل طويل نحو الغرب"]], [["Noon (Sun high)", "الظهر (الشمس عالية)"], ["Short shadow", "ظل قصير"]], [["Evening (Sun in the West)", "المساء (الشمس في الغرب)"], ["Long shadow to the East", "ظل طويل نحو الشرق"]]],
      off: ["The shadow is opposite the Sun and is long when the Sun is low, short when the Sun is high.", "الظل في الجهة المقابلة للشمس، ويكون طويلًا عندما تكون الشمس منخفضة وقصيرًا عندما تكون عالية."],
      sto: ["Nour's shadow stretched West in the morning, hid at noon, and stretched East at home time.", "امتد ظل نور نحو الغرب صباحًا، واختبأ ظهرًا، وامتد نحو الشرق وقت العودة."] },
    { k: "tf", q: ["True or false: a sundial can tell the time at night.", "صواب أم خطأ: المزولة تستطيع معرفة الوقت ليلًا."], a: false,
      off: ["False. A sundial needs the Sun to make a shadow, so it does not work at night or when it is cloudy.", "خطأ؛ المزولة تحتاج إلى الشمس لتكوين الظل، فلا تعمل ليلًا أو عندما تكون السماء غائمة."],
      sto: ["No Sun, no shadow, no time: the sundial sleeps at night.", "لا شمس، لا ظل، لا وقت: المزولة تنام ليلًا."] }
  ];
  EX.p4u2l2 = [
    { k: "order", q: ["Put the path of a voice in a string telephone in order.", "رتّب مسار الصوت في تليفون الخيط."],
      items: [["You talk into the cup", "تتكلم في الكوب"], ["The bottom of the cup vibrates", "يهتز قاع الكوب"], ["The vibration travels along the tight string", "ينتقل الاهتزاز خلال الخيط المشدود"], ["The other cup vibrates", "يهتز الكوب الآخر"], ["Your friend hears you", "يسمعك صديقك"]],
      off: ["The vibration goes from the cup, along the string, to the other cup, then to the ear.", "ينتقل الاهتزاز من الكوب عبر الخيط إلى الكوب الآخر ثم إلى الأذن."],
      sto: ["Salma's whisper ran along the string like a baton in a relay race.", "جرى همس سلمى على الخيط مثل عصا سباق التتابع."] },
    { k: "tf", q: ["True or false: objects can make a sound without vibrating.", "صواب أم خطأ: يمكن للأجسام أن تُصدر صوتًا دون أن تهتز."], a: false,
      off: ["False. Every object that makes a sound vibrates, even if the shaking is too small to see.", "خطأ؛ كل جسم يُصدر صوتًا يهتز، حتى لو كان الاهتزاز صغيرًا جدًا لا نراه."],
      sto: ["Even a tiny whisper makes the air dance a little.", "حتى الهمس الصغير يجعل الهواء يرقص قليلًا."] }
  ];
  EX.p4u3l1 = [
    { k: "match", q: ["Match the change to the result (same everything else).", "صِل التغيير بالنتيجة (مع تثبيت الباقي)."],
      pairs: [[["Weak wind", "رياح ضعيفة"], ["Short distance", "مسافة قصيرة"]], [["Strong wind", "رياح قوية"], ["Long distance", "مسافة طويلة"]], [["Small sail", "شراع صغير"], ["Less power from the wind", "قوة أقل من الرياح"]], [["Large sail", "شراع كبير"], ["More power from the wind", "قوة أكبر من الرياح"]]],
      off: ["A stronger wind or a bigger sail gives a bigger force, so the car travels farther.", "الرياح الأقوى أو الشراع الأكبر يعطي قوة أكبر، فتقطع السيارة مسافة أطول."],
      sto: ["Karim's table showed it: more wind or more sail, more metres.", "أظهر جدول كريم ذلك: رياح أكثر أو شراع أكبر، أمتار أكثر."] },
    { k: "tf", q: ["True or false: a force can stop a moving object.", "صواب أم خطأ: القوة تستطيع إيقاف جسم متحرك."], a: true,
      off: ["True. A force can start motion, stop it, or change its direction.", "صواب؛ القوة تستطيع أن تبدأ الحركة أو توقفها أو تغيّر اتجاهها."],
      sto: ["A goalkeeper's hands stop the ball with a force.", "يدا حارس المرمى توقفان الكرة بقوة."] }
  ];
  EX.p4u3l2 = [
    { k: "order", q: ["Order from shortest to longest distance (1 band).", "رتّب من أقصر مسافة إلى أطولها (شريط واحد)."],
      items: [["Stretched 5 cm", "شد ٥ سم"], ["Stretched 10 cm", "شد ١٠ سم"], ["Stretched 15 cm", "شد ١٥ سم"]],
      off: ["The longer the stretch, the stronger the power and the longer the distance.", "كلما زاد الشد زادت القوة وطالت المسافة."],
      sto: ["Hana's three runs climbed like stairs: 5, 10, then 15 cm.", "صعدت محاولات هنا الثلاث مثل درجات السلم: ٥ ثم ١٠ ثم ١٥ سم."] },
    { k: "tf", q: ["True or false: 2 rubber bands stretched 10 cm push the car harder than 1 band stretched 10 cm.", "صواب أم خطأ: شريطان مشدودان ١٠ سم يدفعان السيارة أقوى من شريط واحد مشدود ١٠ سم."], a: true,
      off: ["True. The powers of the two bands combine, so the car moves farther.", "صواب؛ تتجمع قوتا الشريطين، فتذهب السيارة أبعد."],
      sto: ["Two bands are a team; a team pushes harder than one player.", "الشريطان فريق، والفريق يدفع أقوى من لاعب واحد."] }
  ];
  EX.p4u4l1 = [
    { k: "match", q: ["Match each soil to its property.", "صِل كل تربة بخاصيتها."],
      pairs: [[["Desert sand", "رمال الصحراء"], ["Large particles, water passes fast", "حبيبات كبيرة، يمر الماء بسرعة"]], [["Nile mud", "طمي النيل"], ["Fine particles, water passes slowly", "حبيبات ناعمة، يمر الماء ببطء"]], [["Wet sand under a sled", "رمل مبتل تحت الزلاجة"], ["Slippery, needs less force", "زلق، يحتاج قوة أقل"]]],
      off: ["Particle size controls water flow, and wetting the sand made the sled easier to pull.", "حجم الحبيبات يتحكم في مرور الماء، وتبليل الرمل جعل سحب الزلاجة أسهل."],
      sto: ["Big gaps let water race; tiny gaps make it wait; wet sand lets the sled slide.", "الفراغات الكبيرة تجعل الماء يسرع، والصغيرة تجعله ينتظر، والرمل المبتل يجعل الزلاجة تنزلق."] },
    { k: "tf", q: ["True or false: it is difficult for water to pass into soil with large particles.", "صواب أم خطأ: يصعب على الماء أن يمر في التربة ذات الحبيبات الكبيرة."], a: false,
      off: ["False. Large particles leave large spaces, so water passes through easily and quickly.", "خطأ؛ الحبيبات الكبيرة تترك مسافات واسعة، فيمر الماء بسهولة وسرعة."],
      sto: ["In Ali's test the sand bottle dripped first, not last.", "في تجربة علي قطرت زجاجة الرمل أولًا وليس أخيرًا."] }
  ];

  /* =========================================================
     DIAGRAMS (viewBox 0 0 400 240)
     ========================================================= */
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var dInk = 'style="fill:var(--ink)"', dMut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || dInk) + ' font-size="' + (size || 13) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function emo(x, y, s, size) { return '<text x="' + x + '" y="' + y + '" font-size="' + (size || 22) + '" text-anchor="middle" dominant-baseline="middle">' + s + "</text>"; }

  D.p4u1l1 = {
    title: ["Habitats: the Nile and the desert", "المواطن: النيل والصحراء"],
    svg: function () {
      return '<rect x="0" y="0" width="200" height="240" fill="var(--green-soft)"/><rect x="200" y="0" width="200" height="240" fill="var(--orange-soft)"/>' +
        '<path d="M0 170 C60 150 120 190 200 165 L200 240 L0 240z" fill="#60a5fa" opacity=".55"/>' +
        '<path d="M30 160 l6 -40 M40 160 l-2 -46 M50 162 l8 -36" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>' +
        emo(60, 185, "🪷", 20) + emo(130, 150, "🐸", 22) + emo(150, 60, "🐝", 18) +
        '<ellipse cx="95" cy="120" rx="30" ry="14" fill="#94a3b8"/>' + emo(95, 136, "🐜", 14) +
        '<path d="M240 150 Q262 70 300 150z" fill="#a16207" opacity=".7"/>' + emo(262, 112, "🦎", 20) +
        '<path d="M330 150 l0 -55 M330 100 q-25 -10 -30 -25 M330 100 q25 -10 30 -25" stroke="#65a30d" stroke-width="5" fill="none"/>' +
        '<ellipse cx="360" cy="190" rx="22" ry="9" fill="#78350f" opacity=".6"/>' + emo(360, 180, "🐭", 18) + emo(320, 200, "🦊", 22) +
        '<circle cx="370" cy="30" r="16" fill="#facc15"/>' +
        '<g direction="ltr">' + tx(100, 20, t("Along the Nile", "على ضفاف النيل")) + tx(300, 20, t("Desert", "الصحراء")) + "</g>";
    },
    spots: [
      [130, 150, ["Plenty of water", "ماء وفير"], ["Along the Nile there is plenty of water and moist soil. Frogs, bees, water birds, lotus and luffa live here.", "على ضفاف النيل ماء وفير وتربة رطبة، ويعيش هناك الضفدع والنحل وطيور الماء واللوتس واللوف."]],
      [95, 122, ["Under a stone", "تحت الحجر"], ["Damp, cool places away from the sun's rays. Ants and other small animals hide here.", "أماكن رطبة باردة بعيدة عن أشعة الشمس، يختبئ فيها النمل وحيوانات صغيرة أخرى."]],
      [42, 140, ["Grass", "الحشائش"], ["Near grass and trees there is food and places to hide, so grasshoppers live here.", "قرب الحشائش والأشجار يوجد الغذاء وأماكن الاختباء، فيعيش الجراد هناك."]],
      [330, 100, ["Acacia", "السنط"], ["Small leaves lose less water and deep roots reach water underground: adaptation to the desert.", "أوراقه الصغيرة تفقد ماء أقل وجذوره العميقة تصل إلى الماء: تكيّف مع الصحراء."]],
      [320, 200, ["Fennec fox", "الثعلب الفنك"], ["Big ears release heat; thick fur on its feet protects them from hot sand.", "أذناه الكبيرتان تطردان الحرارة، والفراء الكثيف على قدميه يحميهما من الرمال الساخنة."]],
      [360, 186, ["Burrow", "الجحر"], ["Many desert animals, like the jerboa, rest in cool holes by day and come out at night.", "كثير من حيوانات الصحراء مثل الجربوع تستريح في جحور باردة نهارًا وتخرج ليلًا."]]
    ]
  };

  D.p4u1l2 = {
    title: ["The body of an adult insect", "جسم الحشرة الكاملة"],
    svg: function () {
      var s = '<ellipse cx="120" cy="120" rx="20" ry="18" fill="#fb923c"/><ellipse cx="185" cy="120" rx="34" ry="22" fill="#f97316"/><ellipse cx="275" cy="122" rx="58" ry="20" fill="#ea580c"/>' +
        '<circle cx="110" cy="112" r="5" fill="#111827"/><path d="M104 104 Q80 60 70 50 M112 102 Q100 58 96 44" stroke="var(--ink)" stroke-width="3" fill="none"/>' +
        '<path d="M160 104 Q150 40 205 50 Q215 90 190 104z" fill="#fde68a" stroke="#d97706" stroke-width="2" opacity=".9"/>';
      [170, 185, 200].forEach(function (x) { s += '<path d="M' + x + ' 138 l-14 34 M' + x + ' 138 l14 34" stroke="var(--ink)" stroke-width="3"/>'; });
      return s + '<g direction="ltr">' + tx(120, 90, t("head", "الرأس"), dMut, 12) + tx(185, 200, t("thorax", "الصدر"), dMut, 12) + tx(275, 165, t("abdomen", "البطن"), dMut, 12) + "</g>";
    },
    spots: [
      [120, 120, ["Head", "الرأس"], ["The head has the eyes, the mouth and 1 pair of antennae.", "على الرأس العينان والفم وزوج من قرني الاستشعار."]],
      [84, 58, ["Antennae", "قرنا الاستشعار"], ["Two long, rod-like parts on the head.", "جزءان طويلان رفيعان على الرأس."]],
      [185, 120, ["Thorax", "الصدر"], ["The middle part. All 6 legs and the wings are attached here.", "الجزء الأوسط، وعليه الأرجل الست والأجنحة."]],
      [185, 168, ["6 legs", "٦ أرجل"], ["Insects have 6 legs, 3 on each side, all on the thorax. A spider has 8, so it is not an insect.", "للحشرة ٦ أرجل، ٣ على كل جانب، وكلها على الصدر؛ وللعنكبوت ٨ فهو ليس حشرة."]],
      [275, 122, ["Abdomen", "البطن"], ["The back part of the insect's body.", "الجزء الخلفي من جسم الحشرة."]],
      [185, 70, ["Wings", "الأجنحة"], ["Adult butterflies have wings; larvae do not. The wings are on the thorax.", "للفراشة الكاملة أجنحة وليس لليرقة أجنحة، والأجنحة على الصدر."]]
    ]
  };

  D.p4u1l3 = {
    title: ["The parts of a plant", "أجزاء النبات"],
    svg: function () {
      return '<rect x="0" y="150" width="400" height="90" fill="#a16207" opacity=".35"/>' +
        '<path d="M200 150 L200 50" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/>' +
        '<path d="M200 110 Q150 90 140 112 Q170 125 200 110z M200 90 Q250 70 262 92 Q232 106 200 90z" fill="#22c55e"/>' +
        '<circle cx="200" cy="42" r="16" fill="#facc15"/><circle cx="200" cy="42" r="7" fill="#78350f"/>' +
        '<path d="M200 150 L200 200 M200 165 L170 205 M200 170 L235 210 M200 185 L185 225 M200 180 L222 228" stroke="#78350f" stroke-width="3" fill="none"/>' +
        '<ellipse cx="320" cy="200" rx="12" ry="7" fill="#d6d3d1" stroke="#57534e"/><path d="M316 200 l8 0" stroke="#57534e" stroke-width="2"/>' +
        '<g direction="ltr">' + tx(320, 225, t("seed", "بذرة"), dMut, 12) + tx(60, 170, t("ground", "سطح الأرض"), dMut, 12) + "</g>";
    },
    spots: [
      [205, 205, ["Roots", "الجذور"], ["Spread under the ground, hold the plant firmly and suck up water.", "تنتشر تحت الأرض، وتثبّت النبات، وتمتص الماء."]],
      [200, 128, ["Stem", "الساق"], ["Supports the plant and is a pathway for water to the leaves and flowers.", "تدعم النبات وهي ممر للماء إلى الأوراق والأزهار."]],
      [150, 108, ["Leaves", "الأوراق"], ["Wide and flat to catch lots of sunlight.", "عريضة ومسطحة لتلتقط ضوء الشمس بكثرة."]],
      [200, 40, ["Flower", "الزهرة"], ["After it withers, its base swells into a fruit with new seeds.", "بعد أن تذبل تنتفخ قاعدتها وتصبح ثمرة بها بذور جديدة."]],
      [320, 200, ["Seed", "البذرة"], ["Sow it about 1 cm deep, cover gently and give plenty of water.", "نزرعها على عمق ١ سم تقريبًا، ونغطيها برفق، ونرويها بماء وفير."]]
    ]
  };

  D.p4u2l1 = {
    title: ["Sun, object and shadow", "الشمس والجسم والظل"],
    svg: function () {
      return '<rect x="0" y="180" width="400" height="60" fill="var(--orange-soft)"/>' +
        '<circle cx="50" cy="45" r="24" fill="#facc15"/><path d="M70 58 L330 196" stroke="#f59e0b" stroke-width="3" stroke-dasharray="7 5"/>' +
        '<rect x="176" y="110" width="8" height="70" rx="3" fill="#78350f"/>' +
        '<path d="M184 180 L330 196 L184 186z" fill="#334155" opacity=".55"/>' +
        '<rect x="300" y="40" width="70" height="44" rx="4" fill="#cbd5e1" stroke="var(--muted)"/><path d="M95 30 L300 60" stroke="#facc15" stroke-width="3"/><path d="M300 62 L250 140" stroke="#facc15" stroke-width="3"/>' +
        '<g direction="ltr">' + tx(50, 90, t("Sun", "الشمس"), dMut, 12) + tx(180, 100, t("stick", "عصا"), dMut, 12) + tx(270, 214, t("shadow", "الظل"), dMut, 12) + tx(335, 100, t("mirror", "مرآة"), dMut, 12) + "</g>";
    },
    spots: [
      [50, 45, ["Light source", "مصدر الضوء"], ["The Sun gives out its own light. It rises in the East and sets in the West.", "الشمس تبعث ضوءها بنفسها، وتشرق من الشرق وتغرب في الغرب."]],
      [130, 90, ["Straight line", "خط مستقيم"], ["Light travels in straight lines while nothing blocks it.", "ينتقل الضوء في خطوط مستقيمة ما لم يعترضه شيء."]],
      [180, 140, ["Blocking object", "الجسم الحاجب"], ["The stick blocks the light, making a place behind it where light cannot reach.", "العصا تحجب الضوء فيتكون خلفها مكان لا يصل إليه الضوء."]],
      [270, 192, ["Shadow", "الظل"], ["Opposite the Sun. Short when the Sun is high at noon, long in the morning and evening.", "في الجهة المقابلة للشمس، قصير عند الظهر وطويل صباحًا ومساءً."]],
      [300, 62, ["Reflection", "الانعكاس"], ["The mirror bounces the light back, and the reflected light still goes straight.", "المرآة تعكس الضوء، والضوء المنعكس يظل مستقيمًا."]]
    ]
  };

  D.p4u2l2 = {
    title: ["Vibration and the string telephone", "الاهتزاز وتليفون الخيط"],
    svg: function () {
      var w = "";
      for (var i = 0; i < 3; i++) w += '<path d="M' + (120 + i * 18) + ' 50 q10 20 0 40" stroke="var(--muted)" stroke-width="2.5" fill="none"/>';
      return '<rect x="20" y="62" width="80" height="16" rx="4" fill="#a16207"/><path d="M28 70 Q60 52 92 70 Q60 88 28 70" stroke="#f97316" stroke-width="2" fill="none"/>' + w +
        '<path d="M60 180 l30 -14 l0 40 z" fill="#e5e7eb" stroke="var(--muted)" stroke-width="2"/><path d="M340 180 l-30 -14 l0 40 z" fill="#e5e7eb" stroke="var(--muted)" stroke-width="2"/>' +
        '<path d="M90 186 L310 186" stroke="var(--ink)" stroke-width="2"/>' +
        '<circle cx="150" cy="186" r="4" fill="#f97316"/><circle cx="200" cy="186" r="4" fill="#f97316"/><circle cx="250" cy="186" r="4" fill="#f97316"/>' +
        emo(30, 186, "🗣️", 22) + emo(370, 186, "👂", 22) +
        '<g direction="ltr">' + tx(60, 104, t("string", "وتر"), dMut, 12) + tx(200, 214, t("tight string", "خيط مشدود"), dMut, 12) + "</g>";
    },
    spots: [
      [60, 70, ["Vibration", "الاهتزاز"], ["A flicked string shakes. This shaking is vibration, and it makes the sound.", "الوتر المنقور يهتز، وهذا الاهتزاز هو ما يُحدث الصوت."]],
      [140, 70, ["Shaking air", "الهواء المهتز"], ["The vibration shakes the air. When it reaches our ears, we hear.", "الاهتزاز يهز الهواء، وعندما يصل إلى آذاننا نسمع."]],
      [75, 186, ["Paper cup", "الكوب الورقي"], ["Your voice makes the bottom of the cup vibrate.", "صوتك يجعل قاع الكوب يهتز."]],
      [200, 186, ["Tight string", "الخيط المشدود"], ["The vibration travels along a tight string. If you pinch it, the sound stops.", "ينتقل الاهتزاز في الخيط المشدود، وإذا ضغطت عليه يتوقف الصوت."]],
      [360, 186, ["Ear", "الأذن"], ["The other cup vibrates and your friend hears your voice.", "يهتز الكوب الآخر فيسمع صديقك صوتك."]]
    ]
  };

  D.p4u3l1 = {
    title: ["A wind-powered car", "السيارة الهوائية"],
    svg: function () {
      return '<rect x="0" y="200" width="400" height="40" fill="var(--bg-2)"/>' +
        '<circle cx="50" cy="150" r="34" fill="none" stroke="var(--muted)" stroke-width="4"/><path d="M50 150 l0 -26 M50 150 l22 14 M50 150 l-22 14" stroke="#60a5fa" stroke-width="8" stroke-linecap="round"/><rect x="44" y="184" width="12" height="18" fill="var(--muted)"/>' +
        '<path d="M100 130 l50 0 M100 150 l60 0 M100 170 l50 0" stroke="#93c5fd" stroke-width="3" stroke-dasharray="8 6"/>' +
        '<rect x="200" y="178" width="110" height="14" rx="4" fill="#f59e0b"/><circle cx="220" cy="196" r="9" fill="#334155"/><circle cx="292" cy="196" r="9" fill="#334155"/>' +
        '<path d="M245 178 L245 100" stroke="var(--ink)" stroke-width="3"/><rect x="215" y="105" width="30" height="66" fill="#fde68a" stroke="#d97706" stroke-width="2"/>' +
        '<path d="M320 160 l50 0" stroke="#22c55e" stroke-width="5"/><path d="M370 160 l-10 -7 l0 14z" fill="#22c55e"/>' +
        '<g direction="ltr">' + tx(50, 222, t("fan", "مروحة"), dMut, 12) + tx(345, 145, t("distance", "المسافة"), dMut, 12) + "</g>";
    },
    spots: [
      [50, 150, ["Fan: wind strength", "المروحة: قوة الرياح"], ["Weak wind gives a small push and a short distance. Strong wind gives a long distance.", "الرياح الضعيفة تعطي دفعة صغيرة ومسافة قصيرة، والقوية تعطي مسافة طويلة."]],
      [125, 150, ["Wind is a force", "الرياح قوة"], ["A force is a push or pull. It can start, stop or turn a moving object.", "القوة دفع أو شد، ويمكنها أن تبدأ حركة جسم أو توقفها أو تغيّر اتجاهها."]],
      [230, 138, ["Sail", "الشراع"], ["With the same wind, a larger sail catches more wind and gets more power.", "مع الرياح نفسها، الشراع الأكبر يلتقط رياحًا أكثر ويحصل على قوة أكبر."]],
      [256, 196, ["Wheels and axle", "العجلات والمحور"], ["Bottle-cap wheels on an axle let the car roll easily.", "عجلات من أغطية الزجاجات على محور تجعل السيارة تتدحرج بسهولة."]],
      [345, 160, ["Measure the distance", "قِس المسافة"], ["Measure from the start line to where the car stops, 3 trials each. Change one thing only.", "قِس من خط البداية إلى مكان التوقف، ٣ محاولات لكل حالة، وغيّر شيئًا واحدًا فقط."]]
    ]
  };

  D.p4u3l2 = {
    title: ["A rubber band-powered car", "سيارة المطاط"],
    svg: function () {
      return '<rect x="0" y="200" width="400" height="40" fill="var(--bg-2)"/><rect x="20" y="186" width="190" height="10" rx="3" fill="#cbd5e1"/>' +
        '<rect x="30" y="160" width="8" height="30" fill="var(--muted)"/><rect x="80" y="160" width="8" height="30" fill="var(--muted)"/>' +
        '<path d="M34 166 L150 178 L84 166" stroke="#ef4444" stroke-width="4" fill="none"/>' +
        '<rect x="150" y="160" width="90" height="18" rx="4" fill="#f59e0b"/><circle cx="165" cy="184" r="9" fill="#334155"/><circle cx="226" cy="184" r="9" fill="#334155"/>' +
        '<path d="M88 140 L150 140" stroke="var(--ink)" stroke-width="2"/><path d="M88 135 l0 10 M150 135 l0 10" stroke="var(--ink)" stroke-width="2"/>' +
        '<path d="M250 168 l90 0" stroke="#22c55e" stroke-width="5"/><path d="M340 168 l-10 -7 l0 14z" fill="#22c55e"/>' +
        '<path d="M330 40 Q300 90 330 140" stroke="#a16207" stroke-width="5" fill="none"/><path d="M330 40 L330 140" stroke="var(--muted)" stroke-width="1.5"/>' +
        '<g direction="ltr">' + tx(119, 128, t("stretch (cm)", "الشد (سم)"), dMut, 12) + tx(300, 156, t("distance", "المسافة"), dMut, 12) + tx(355, 92, t("bow", "قوس"), dMut, 12) + "</g>";
    },
    spots: [
      [120, 172, ["Stretched rubber band", "الشريط المطاطي المشدود"], ["It tries to return to its original shape, and that power pushes the car.", "يحاول العودة إلى شكله الأصلي، وهذه القوة تدفع السيارة."]],
      [119, 140, ["Stretch length", "مقدار الشد"], ["5 cm, 10 cm, 15 cm: the longer the stretch, the farther the car goes.", "٥ سم، ١٠ سم، ١٥ سم: كلما زاد الشد ذهبت السيارة أبعد."]],
      [34, 175, ["0 cm mark", "علامة صفر سم"], ["The point where the band starts to stretch is set as 0 cm on the launching pad.", "النقطة التي يبدأ عندها الشريط في الشد تُعتبر صفر سم على منصة الإطلاق."]],
      [195, 168, ["Hook under the car", "الخطاف أسفل السيارة"], ["The band is hooked here. Bundle 2 or 3 bands to combine their power.", "يُعلّق الشريط هنا، ويمكن تجميع شريطين أو ثلاثة لتتجمع قواها."]],
      [330, 90, ["Bow and arrow", "القوس والسهم"], ["Ancient Egyptians used the same power to snap back to shoot arrows.", "استخدم المصريون القدماء قوة الارتداد نفسها لإطلاق السهام."]]
    ]
  };

  D.p4u4l1 = {
    title: ["Desert sand and Nile mud", "رمال الصحراء وطمي النيل"],
    svg: function () {
      var s = '<rect x="30" y="40" width="140" height="120" rx="8" fill="var(--orange-soft)" stroke="var(--muted)"/><rect x="230" y="40" width="140" height="120" rx="8" fill="var(--bg-2)" stroke="var(--muted)"/>';
      for (var r = 0; r < 4; r++) for (var c = 0; c < 5; c++) s += '<circle cx="' + (48 + c * 26 + (r % 2) * 10) + '" cy="' + (58 + r * 28) + '" r="11" fill="#fbbf24" stroke="#b45309"/>';
      for (r = 0; r < 12; r++) for (c = 0; c < 14; c++) s += '<circle cx="' + (240 + c * 9.5 + (r % 2) * 4) + '" cy="' + (48 + r * 9.5) + '" r="4" fill="#78350f"/>';
      s += '<path d="M100 172 l0 30" stroke="#3b82f6" stroke-width="10" stroke-linecap="round"/><path d="M300 172 l0 8" stroke="#3b82f6" stroke-width="5" stroke-linecap="round"/>';
      return s + '<g direction="ltr">' + tx(100, 30, t("Desert sand", "رمال الصحراء")) + tx(300, 30, t("Nile mud", "طمي النيل")) + tx(100, 225, t("fast", "سريع"), dMut, 12) + tx(300, 225, t("slow", "بطيء"), dMut, 12) + "</g>";
    },
    spots: [
      [100, 100, ["Large particles", "حبيبات كبيرة"], ["Desert sand has large particles, so the spaces between them are wide.", "رمال الصحراء حبيباتها كبيرة، فالمسافات بينها واسعة."]],
      [100, 190, ["Fast draining", "تسرّب سريع"], ["Water passes through sand quickly, so the desert ground dries fast.", "يمر الماء خلال الرمل بسرعة، فتجف أرض الصحراء بسرعة."]],
      [300, 100, ["Fine particles", "حبيبات ناعمة"], ["Nile mud has small, fine particles with narrow spaces.", "طمي النيل حبيباته صغيرة ناعمة والمسافات بينها ضيقة."]],
      [300, 180, ["Slow draining", "تسرّب بطيء"], ["Water passes slowly and stays longer, holding water and nutrients for farming.", "يمر الماء ببطء ويبقى مدة أطول، فيحفظ الماء والمواد الغذائية للزراعة."]],
      [200, 120, ["Fair test", "تجربة عادلة"], ["Same amount of soil, same amount of water, poured at the same time.", "الكمية نفسها من التربة والماء، تُصب في الوقت نفسه."]]
    ]
  };

  /* =========================================================
     SIMULATIONS (PhET-style, original designs)
     ========================================================= */
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function emoji(c, s, x, y, size, alpha) {
    c.save(); c.globalAlpha = alpha == null ? 1 : alpha; c.font = Math.round(size) + "px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif";
    c.textAlign = "center"; c.textBaseline = "middle"; c.fillStyle = "#000"; c.fillText(s, x, y); c.restore();
  }
  function f1(x) { return n(Math.round(x * 10) / 10); }
  function f2(x) { return n(Math.round(x * 100) / 100); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function arrow(c, x1, y1, x2, y2, col, w) {
    var a = Math.atan2(y2 - y1, x2 - x1), h = Math.max(7, w * 2.4);
    c.strokeStyle = col; c.fillStyle = col; c.lineWidth = w; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2 - Math.cos(a) * h * 0.8, y2 - Math.sin(a) * h * 0.8); c.stroke();
    c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - Math.cos(a - 0.45) * h, y2 - Math.sin(a - 0.45) * h); c.lineTo(x2 - Math.cos(a + 0.45) * h, y2 - Math.sin(a + 0.45) * h); c.closePath(); c.fill();
  }

  /* ---------------------------------------------------------
     1. p4_habitat - explore the Nile side and the desert side
     --------------------------------------------------------- */
  L.p4_habitat = function (host, cfg, done) {
    host.innerHTML = hint(t("Explore by the Nile and in the desert. Drag stones away, tap the grass and the reeds, switch to night, and drag the magnifying glass onto what you find.",
      "استكشف ضفاف النيل والصحراء: اسحب الحجارة بعيدًا، واضغط على الحشائش والبردي، وانتقل إلى الليل، واسحب العدسة المكبرة فوق ما تجده."));
    var S = K.make(host, 0.62, 400), night = false, found = {}, dragS = null, dragM = false, lastObs = "";
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm tg" id="hn">🌙 ' + t("Night", "الليل") + '</button></div><div class="meter hb-out"></div>';
    var out = ctl.querySelector(".hb-out");
    var tick = L._goals(host, [t("Drag a stone away and find who lives in the damp, cool place.", "اسحب حجرًا بعيدًا واكتشف من يعيش في المكان الرطب البارد."),
      t("Tap the grass to find an animal that hides there.", "اضغط على الحشائش لتجد حيوانًا يختبئ فيها."),
      t("Find 3 living organisms by the Nile and 3 in the desert.", "اعثر على ٣ كائنات حية عند النيل و٣ في الصحراء."),
      t("Switch to night and find a desert animal that comes out when it is cool.", "انتقل إلى الليل واعثر على حيوان صحراوي يخرج عندما يبرد الجو."),
      t("Drag the magnifying glass onto a living organism you found.", "اسحب العدسة المكبرة فوق كائن حي وجدته.")], done);
    var stones = [{ x: 0.2, y: 0.6, dx: 0, dy: 0 }, { x: 0.63, y: 0.62, dx: 0, dy: 0 }];
    var grass = { x: 0.34, y: 0.42, open: 0 }, reeds = { x: 0.08, y: 0.78, open: 0 }, burrow = { x: 0.88, y: 0.76 }, mag = { x: 0.52, y: 0.4 };
    var ORG = [
      { id: "ant", e: "🐜", side: "nile", x: 0.2, y: 0.6, hide: 0, nm: ["Ants", "النمل"], info: ["Small and black with 6 legs. Ants live under stones, where it is damp and cool, away from the sun's rays.", "صغير وأسود وله ٦ أرجل، ويعيش تحت الحجارة حيث الرطوبة والبرودة بعيدًا عن أشعة الشمس."] },
      { id: "hopper", e: "🦗", side: "nile", x: 0.34, y: 0.42, hide: "grass", nm: ["Grasshopper", "الجرادة"], info: ["Green with long back legs. It hides in the grass, where there is food and it is easy to hide.", "خضراء ولها رجلان خلفيتان طويلتان، وتختبئ في الحشائش حيث الغذاء وسهولة الاختباء."] },
      { id: "frog", e: "🐸", side: "nile", x: 0.08, y: 0.78, hide: "reeds", nm: ["Frog", "الضفدع"], info: ["It lives along the Nile, where there is plenty of water. In the dry desert it could not survive.", "يعيش على ضفاف النيل حيث الماء الوفير، ولا يستطيع البقاء في الصحراء الجافة."] },
      { id: "bee", e: "🐝", side: "nile", x: 0.42, y: 0.2, nm: ["Bee", "النحلة"], info: ["An insect that visits flowers along the Nile.", "حشرة تزور الأزهار على ضفاف النيل."] },
      { id: "lotus", e: "🪷", side: "nile", x: 0.27, y: 0.88, nm: ["Lotus", "اللوتس"], info: ["A plant of the wetlands and swamps of the Nile.", "نبات يعيش في الأراضي الرطبة ومستنقعات النيل."] },
      { id: "beetle", e: "🪲", side: "desert", x: 0.63, y: 0.62, hide: 1, nm: ["Dung beetle", "الجعران"], info: ["It rests in the shade of stones. It buries dung balls in the soil, which makes the soil fertile.", "يستريح في ظل الحجارة، ويدفن كرات الروث في التربة فيجعلها خصبة."] },
      { id: "lizard", e: "🦎", side: "desert", x: 0.78, y: 0.3, day: true, nm: ["Lizard", "السحلية"], info: ["Lizards are often seen on sunny rocks in the day.", "نرى السحالي غالبًا على الصخور المشمسة نهارًا."] },
      { id: "acacia", e: "🌳", side: "desert", x: 0.93, y: 0.22, nm: ["Acacia", "السنط"], info: ["Small leaves to lose less water, and deep roots to reach water underground.", "أوراق صغيرة لتفقد ماء أقل، وجذور عميقة لتصل إلى الماء في باطن الأرض."] },
      { id: "jerboa", e: "🐭", side: "desert", x: 0.8, y: 0.8, night: true, nm: ["Jerboa", "الجربوع"], info: ["Long back legs: it jumps like a kangaroo so its feet touch the hot ground for a short time. It rests in a cool burrow by day.", "رجلان خلفيتان طويلتان يقفز بهما مثل الكنغر فلا تلمس قدماه الأرض الساخنة إلا قليلًا، ويستريح في جحر بارد نهارًا."] },
      { id: "fennec", e: "🦊", side: "desert", x: 0.7, y: 0.86, night: true, nm: ["Fennec fox", "الثعلب الفنك"], info: ["Big ears release heat; thick fur on its feet protects them from hot sand. It is active at night.", "أذناه الكبيرتان تطردان الحرارة، والفراء الكثيف على قدميه يحميهما من الرمال الساخنة، وينشط ليلًا."] }
    ];
    function sz() { return Math.max(22, Math.min(S.W, S.H) * 0.075); }
    function pos(o) {
      var x = o.x * S.W, y = o.y * S.H, tt = performance.now() / 1000;
      if (o.id === "jerboa") { x += Math.sin(tt * 1.3) * sz() * 1.2; y -= Math.abs(Math.sin(tt * 4)) * sz() * 0.5; }
      if (o.id === "bee") { x += Math.sin(tt * 3) * 6; y += Math.cos(tt * 4) * 4; }
      return { x: x, y: y };
    }
    function stoneR() { return sz() * 1.15; }
    function sp(s) { return { x: s.x * S.W + s.dx, y: s.y * S.H + s.dy }; }
    function visible(o) {
      if (o.night && !night) return false;
      if (o.day && night) return false;
      if (typeof o.hide === "number") { var s = sp(stones[o.hide]); if (Math.hypot(s.x - o.x * S.W, s.y - o.y * S.H) < stoneR() * 0.95) return false; }
      if (o.hide === "grass" && grass.open <= 0) return false;
      if (o.hide === "reeds" && reeds.open <= 0) return false;
      return true;
    }
    function count(side) { return ORG.filter(function (o) { return o.side === side && found[o.id]; }).length; }
    function report(o) {
      out.innerHTML = '<span>🌊 ' + t("Nile", "النيل") + ": <b>" + n(count("nile")) + " / " + n(5) + "</b></span><span>🏜️ " + t("Desert", "الصحراء") + ": <b>" + n(count("desert")) + " / " + n(5) + "</b></span>" +
        (o ? '<span class="sub">' + o.e + " <b>" + esc(T(o.nm)) + "</b>: " + esc(T(o.info)) + "</span>" : '<span class="sub">' + t("Tap a living organism when you see it.", "اضغط على الكائن الحي عندما تراه.") + "</span>");
    }
    function find(o) {
      var first = !found[o.id]; found[o.id] = 1; report(o);
      E.speak(T(o.nm) + ". " + T(o.info));
      if (!first) return;
      if (typeof o.hide === "number") tick(0);
      if (o.id === "hopper") tick(1);
      if (count("nile") >= 3 && count("desert") >= 3) tick(2);
      if (o.night) tick(3);
    }
    ctl.querySelector("#hn").onclick = function () {
      night = !night; this.classList.toggle("on", night); this.innerHTML = night ? "☀️ " + t("Day", "النهار") : "🌙 " + t("Night", "الليل");
      E.speak(night ? t("Night. The desert is cool now.", "الليل؛ الصحراء باردة الآن.") : t("Day. The desert is hot.", "النهار؛ الصحراء حارة."));
    };
    S.drag({
      down: function (p) {
        var R = sz() * 1.3;
        if (Math.hypot(p.x - mag.x * S.W, p.y - mag.y * S.H) < R + 8) { dragM = true; mag.ox = p.x - mag.x * S.W; mag.oy = p.y - mag.y * S.H; return true; }
        for (var i = stones.length - 1; i >= 0; i--) { var s = sp(stones[i]); if (Math.abs(p.x - s.x) < stoneR() * 1.1 && Math.abs(p.y - s.y) < stoneR() * 0.75) { dragS = stones[i]; dragS.ox = p.x - s.x; dragS.oy = p.y - s.y; return true; } }
        var hit = null;
        ORG.forEach(function (o) { var q = pos(o); if (visible(o) && Math.hypot(p.x - q.x, p.y - q.y) < sz() * 0.8) hit = o; });
        if (hit) { find(hit); return true; }
        if (Math.hypot(p.x - grass.x * S.W, p.y - grass.y * S.H) < sz() * 1.4) { grass.open = 5; E.speak(t("Rustle!", "خشخشة!")); return true; }
        if (Math.hypot(p.x - reeds.x * S.W, p.y - reeds.y * S.H) < sz() * 1.4) { reeds.open = 5; E.speak(t("Rustle!", "خشخشة!")); return true; }
        if (!night && Math.hypot(p.x - burrow.x * S.W, p.y - burrow.y * S.H) < sz()) { E.toast(t("Something is resting in this cool hole. Come back at night!", "شيء ما يستريح في هذا الجحر البارد. عد في الليل!")); return true; }
        return false;
      },
      move: function (p) {
        if (dragM) { mag.x = clamp((p.x - mag.ox) / S.W, 0.04, 0.96); mag.y = clamp((p.y - mag.oy) / S.H, 0.06, 0.94); }
        if (dragS) { dragS.dx = clamp(p.x - dragS.ox, 10, S.W - 10) - dragS.x * S.W; dragS.dy = clamp(p.y - dragS.oy, 10, S.H - 10) - dragS.y * S.H; }
      },
      up: function () { dragM = false; dragS = null; },
      hover: function (p) { return Math.hypot(p.x - mag.x * S.W, p.y - mag.y * S.H) < sz() * 1.4 || stones.some(function (s0) { var s = sp(s0); return Math.abs(p.x - s.x) < stoneR() && Math.abs(p.y - s.y) < stoneR() * 0.7; }); }
    });
    var stars = []; for (var i = 0; i < 40; i++) stars.push([Math.random(), Math.random() * 0.9, Math.random()]);
    report(null);
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, z = sz(), tt = performance.now() / 1000;
      grass.open -= dt; reeds.open -= dt;
      c.clearRect(0, 0, W, H);
      c.fillStyle = "rgba(34,197,94,.22)"; c.fillRect(0, 0, W / 2, H);
      c.fillStyle = "rgba(251,191,36,.30)"; c.fillRect(W / 2, 0, W / 2, H);
      c.fillStyle = "rgba(59,130,246,.45)"; c.beginPath(); c.moveTo(0, H * 0.8); c.bezierCurveTo(W * 0.15, H * 0.74, W * 0.3, H * 0.92, W * 0.5, H * 0.84); c.lineTo(W * 0.5, H); c.lineTo(0, H); c.closePath(); c.fill();
      K.txt(c, "🌊 " + t("Along the Nile", "على ضفاف النيل"), W * 0.25, 14, { c: C.ink, s: 13 });
      K.txt(c, "🏜️ " + t("Desert", "الصحراء"), W * 0.75, 14, { c: C.ink, s: 13 });
      // flowers near the bee
      [[0.38, 0.27], [0.45, 0.28], [0.41, 0.31]].forEach(function (f) { K.dot(c, f[0] * W, f[1] * H, 5, "#f472b6"); K.dot(c, f[0] * W, f[1] * H, 2, "#fde047"); });
      // grass tuft
      var gx = grass.x * W, gy = grass.y * H, sp2 = grass.open > 0 ? 1 : 0;
      c.strokeStyle = "#16a34a"; c.lineWidth = 3; c.lineCap = "round";
      for (var g = -4; g <= 4; g++) { var lean = g * 0.12 * (1 + sp2 * 2.2) + Math.sin(tt * 2 + g) * 0.05; c.beginPath(); c.moveTo(gx + g * z * 0.12, gy + z * 0.55); c.lineTo(gx + g * z * 0.12 + Math.sin(lean) * z * 1.1, gy + z * 0.55 - Math.cos(lean) * z * 1.1); c.stroke(); }
      // reeds (papyrus)
      var rx = reeds.x * W, ry = reeds.y * H;
      c.strokeStyle = "#15803d"; c.lineWidth = 3;
      for (g = -3; g <= 3; g++) { var l2 = g * 0.1 * (1 + (reeds.open > 0 ? 2.5 : 0)); c.beginPath(); c.moveTo(rx + g * z * 0.14, ry + z * 0.5); c.lineTo(rx + g * z * 0.14 + Math.sin(l2) * z * 1.4, ry + z * 0.5 - Math.cos(l2) * z * 1.4); c.stroke(); K.dot(c, rx + g * z * 0.14 + Math.sin(l2) * z * 1.4, ry + z * 0.5 - Math.cos(l2) * z * 1.4, 3.5, "#65a30d"); }
      // sunny rock and burrow in the desert
      c.fillStyle = "#b45309"; c.globalAlpha = 0.65; c.beginPath(); c.moveTo(W * 0.71, H * 0.36); c.quadraticCurveTo(W * 0.78, H * 0.18, W * 0.85, H * 0.36); c.closePath(); c.fill(); c.globalAlpha = 1;
      c.fillStyle = "rgba(68,40,10,.75)"; c.beginPath(); c.ellipse(burrow.x * W, burrow.y * H, z * 0.7, z * 0.32, 0, 0, 7); c.fill();
      if (night) {
        c.fillStyle = "rgba(2,6,23,.55)"; c.fillRect(0, 0, W, H);
        stars.forEach(function (s) { K.dot(c, s[0] * W, s[1] * H * 0.5, 1 + s[2], "rgba(255,255,255," + (0.5 + 0.5 * Math.sin(tt * 2 + s[2] * 9)) + ")"); });
      } else K.dot(c, W * 0.97, H * 0.06, 12, "#facc15");
      // living organisms
      ORG.forEach(function (o) {
        if (!visible(o)) return;
        var q = pos(o), x = q.x, y = q.y;
        emoji(c, o.e, x, y, z, night && !o.night ? 0.45 : 1);
        if (found[o.id]) { K.dot(c, x + z * 0.45, y - z * 0.45, 7, "#22c55e"); K.txt(c, "✓", x + z * 0.45, y - z * 0.45, { c: "#fff", s: 10 }); }
      });
      // stones (on top, so they hide what is under them)
      stones.forEach(function (s0) { var s = sp(s0), r = stoneR(); c.fillStyle = "#94a3b8"; c.beginPath(); c.ellipse(s.x, s.y, r, r * 0.62, 0, 0, 7); c.fill(); c.fillStyle = "rgba(255,255,255,.25)"; c.beginPath(); c.ellipse(s.x - r * 0.3, s.y - r * 0.2, r * 0.35, r * 0.15, -0.3, 0, 7); c.fill(); });
      // magnifying glass
      var mx = mag.x * W, my = mag.y * H, R = z * 1.3, under = null;
      ORG.forEach(function (o) { var q = pos(o); if (found[o.id] && visible(o) && Math.hypot(mx - q.x, my - q.y) < R * 0.9) under = o; });
      c.save(); c.beginPath(); c.arc(mx, my, R, 0, 7); c.clip();
      c.fillStyle = "rgba(255,255,255,.55)"; c.fillRect(mx - R, my - R, R * 2, R * 2);
      if (under) emoji(c, under.e, mx, my, z * 2.3);
      c.restore();
      c.strokeStyle = "#475569"; c.lineWidth = 5; c.beginPath(); c.arc(mx, my, R, 0, 7); c.stroke();
      c.lineWidth = 7; c.lineCap = "round"; c.beginPath(); c.moveTo(mx + R * 0.72, my + R * 0.72); c.lineTo(mx + R * 1.35, my + R * 1.35); c.stroke();
      if (under) {
        K.txt(c, T(under.nm), mx, my - R - 10, { c: C.ink, s: 12 });
        if (lastObs !== under.id) { lastObs = under.id; report(under); E.speak(T(under.nm) + ". " + T(under.info)); tick(4); }
      } else lastObs = "";
    });
  };

  /* ---------------------------------------------------------
     2. p4_lifecycle - from egg to butterfly with a time slider
     --------------------------------------------------------- */
  L.p4_lifecycle = function (host, cfg, done) {
    host.innerHTML = hint(t("Slide the days (or press Play) and watch a plain tiger butterfly grow on a milkweed leaf. When the adult appears, tap its body parts.",
      "حرّك شريط الأيام (أو اضغط تشغيل) وشاهد فراشة النمر السادة تنمو على ورقة الصقلاب، وعندما تظهر الحشرة الكاملة اضغط على أجزاء جسمها."));
    var S = K.make(host, 0.8, 400), day = 0, play = false, parts = {}, MOLT = [7, 10, 13, 16];
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Day", "اليوم"), 0, 30, 0.5, 0) + '<div class="btn-row"><button type="button" class="btn sm primary" id="lp">▶ ' + t("Play", "تشغيل") + '</button></div><div class="meter lc-out"></div>';
    var sl = ctl.querySelector("input"), out = ctl.querySelector(".lc-out");
    var tick = L._goals(host, [t("Watch the egg hatch into a larva.", "شاهد البيضة تفقس وتخرج منها يرقة."), t("See the larva molt (take off its skin) 3 times.", "شاهد اليرقة تنسلخ (تخلع جلدها) ٣ مرات."),
      t("Find the pupa stage: it does not move.", "اعثر على طور العذراء: إنها لا تتحرك."), t("Watch the adult come out and its wings stretch.", "شاهد الحشرة الكاملة تخرج وأجنحتها تنفرد."),
      t("Tap the adult's head, thorax and abdomen.", "اضغط على رأس الحشرة الكاملة وصدرها وبطنها.")], done);
    var NAMES = { egg: ["Egg", "بيضة"], larva: ["Larva", "يرقة"], pupa: ["Pupa", "عذراء"], adult: ["Adult insect", "حشرة كاملة"] };
    var spoken = "";
    function stage() { return day < 4 ? "egg" : day < 18 ? "larva" : day < 26 ? "pupa" : "adult"; }
    function molts() { return MOLT.filter(function (m) { return day >= m; }).length; }
    function len() { return day < 4 ? 1 : day < 18 ? 2 + (day - 4) * 2.6 : 38; }
    function upd() {
      var st = stage();
      ctl.querySelector(".slv").textContent = n(day);
      out.innerHTML = "<span>" + t("Stage: ", "الطور: ") + "<b>" + esc(T(NAMES[st])) + "</b></span>" + (st === "larva" ? "<span>" + t("Length: ", "الطول: ") + "<b>" + n(Math.round(len())) + " " + t("mm", "مم") + "</b></span><span>" + t("Molts: ", "مرات الانسلاخ: ") + "<b>" + n(molts()) + "</b></span>" : "") +
        '<span class="sub">' + (st === "egg" ? t("Eggs are laid on the underside of the leaf the larva will eat.", "يوضع البيض على السطح السفلي للورقة التي ستأكلها اليرقة.") : st === "larva" ? t("The larva eats a lot and grows fast. It molts to grow bigger.", "اليرقة تأكل كثيرًا وتنمو بسرعة، وتنسلخ لتكبر.") : st === "pupa" ? t("It does not move, but inside, the body is changing into an adult.", "لا تتحرك، لكن جسمها في الداخل يتحول إلى حشرة كاملة.") : t("The back split open. The wrinkled wings stretch out.", "انشق الظهر، وتنفرد الأجنحة المجعدة.")) + "</span>";
      if (st !== spoken) { spoken = st; E.speak(T(NAMES[st])); }
      if (day >= 4) tick(0); if (molts() >= 3) tick(1); if (st === "pupa") tick(2); if (day >= 28) tick(3);
    }
    sl.oninput = function () { day = Number(sl.value); upd(); };
    ctl.querySelector("#lp").onclick = function () { play = !play; if (play && day >= 30) day = 0; this.innerHTML = play ? "⏸ " + t("Pause", "إيقاف") : "▶ " + t("Play", "تشغيل"); };
    function g() { var W = S.W, H = S.H; return { lx: W * 0.08, ly: H * 0.12, lw: W * 0.6, lh: H * 0.16, bx: W * 0.5, by: H * 0.64, u: Math.min(W * 0.85, H) / 300 }; }
    function bodyParts() { var o = g(), u = o.u * 1.2; return { head: [o.bx, o.by - 46 * u, 11 * u], thorax: [o.bx, o.by - 18 * u, 15 * u], abdomen: [o.bx, o.by + 22 * u, 12 * u] }; }
    S.drag({
      down: function (p) {
        if (stage() !== "adult") return false;
        var bp = bodyParts(), hit = null;
        Object.keys(bp).forEach(function (k) { var b = bp[k]; if (Math.hypot(p.x - b[0], p.y - b[1]) < b[2] * 1.5) hit = k; });
        if (!hit) return false;
        parts[hit] = 1;
        var info = { head: [t("Head", "الرأس"), t("Eyes, mouth and 1 pair of antennae.", "العينان والفم وزوج من قرني الاستشعار.")], thorax: [t("Thorax", "الصدر"), t("All 6 legs and the wings are here.", "عليه الأرجل الست والأجنحة.")], abdomen: [t("Abdomen", "البطن"), t("The back part of the body.", "الجزء الخلفي من الجسم.")] }[hit];
        out.innerHTML = "<span><b>" + info[0] + "</b>: " + info[1] + "</span><span>" + n(Object.keys(parts).length) + " / " + n(3) + "</span>";
        E.speak(info[0] + ". " + info[1]);
        if (Object.keys(parts).length === 3) tick(4);
        return true;
      },
      hover: function () { return stage() === "adult"; }
    });
    upd();
    var holes = [];
    for (var i = 0; i < 14; i++) holes.push([Math.random(), Math.random(), 0.5 + Math.random()]);
    S.loop(function (dt) {
      if (play) { day = Math.min(30, day + dt * 2.2); sl.value = day; upd(); if (day >= 30) { play = false; ctl.querySelector("#lp").innerHTML = "▶ " + t("Play", "تشغيل"); } }
      var c = S.ctx, W = S.W, H = S.H, C = S.C, o = g(), st = stage(), tt = performance.now() / 1000;
      c.clearRect(0, 0, W, H);
      // milkweed leaf (seen from below)
      c.fillStyle = "#22c55e"; c.beginPath(); c.ellipse(o.lx + o.lw / 2, o.ly + o.lh / 2, o.lw / 2, o.lh / 2, 0, 0, 7); c.fill();
      c.strokeStyle = "#15803d"; c.lineWidth = 2; c.beginPath(); c.moveTo(o.lx, o.ly + o.lh / 2); c.lineTo(o.lx + o.lw, o.ly + o.lh / 2); c.stroke();
      var eaten = day < 4 ? 0 : Math.min(holes.length, Math.floor((Math.min(day, 18) - 4) * 1.1));
      for (var h = 0; h < eaten; h++) { var hp = holes[h]; K.dot(c, o.lx + o.lw * (0.15 + hp[0] * 0.7), o.ly + o.lh * (0.2 + hp[1] * 0.6), 2 + hp[2] * 3, C.card); }
      K.txt(c, t("underside of a milkweed leaf", "السطح السفلي لورقة الصقلاب"), o.lx + o.lw / 2, o.ly - 10, { c: C.muted, s: 11 });
      if (st === "egg") {
        for (var e = 0; e < 3; e++) { var ex = o.lx + o.lw * (0.42 + e * 0.06), ey = o.ly + o.lh * 0.7; K.dot(c, ex, ey, 5, "#fef3c7", "#a16207"); if (day > 3) K.dot(c, ex, ey, 2, "#334155"); }
      }
      if (st === "larva") {
        var L2 = len(), segs = 6 + Math.floor(L2 / 6), sr = 2.5 + L2 / 7, crawl = (day - 4) / 14, hx = o.lx + o.lw * (0.25 + crawl * 0.55), hy = o.ly + o.lh + 6 + sr;
        for (var s = segs - 1; s >= 0; s--) {
          var sx = hx - s * sr * 1.3, sy = hy + Math.sin(tt * 5 - s * 0.8) * 1.5;
          K.dot(c, sx, sy, sr, s % 3 === 0 ? "#111827" : s % 3 === 1 ? "#f8fafc" : "#facc15", "rgba(0,0,0,.3)");
        }
        c.strokeStyle = "#111827"; c.lineWidth = 2; c.beginPath(); c.moveTo(hx, hy - sr); c.lineTo(hx + 4, hy - sr - 8); c.stroke();
        // shed skins
        MOLT.forEach(function (m, k) { if (day >= m) { var kx = o.lx + o.lw * (0.25 + (m - 4) / 14 * 0.55) - 24, ky = o.ly + o.lh + 30 + k * 2; c.strokeStyle = "#a8a29e"; c.lineWidth = 3; c.beginPath(); c.arc(kx, ky, 6, 0.3, 4.6); c.stroke(); } });
        if (MOLT.some(function (m) { return day >= m && day < m + 0.8; })) K.txt(c, t("Molting!", "انسلاخ!"), hx, hy + sr + 14, { c: "#f97316", s: 13 });
      }
      if (st === "pupa") {
        var px = o.lx + o.lw * 0.8, py = o.ly + o.lh + 4;
        c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.moveTo(px, o.ly + o.lh * 0.8); c.lineTo(px, py); c.stroke();
        c.fillStyle = "#4ade80"; c.beginPath(); c.ellipse(px, py + 22, 12, 22, 0, 0, 7); c.fill();
        [0.3, 0.5, 0.7].forEach(function (k) { K.dot(c, px - 6 + k * 12, py + 8, 1.8, "#facc15"); });
        K.txt(c, t("pupa: changing inside", "عذراء: تتحول من الداخل"), px, py + 58, { c: C.muted, s: 11 });
      }
      if (st === "adult") {
        var u = o.u * 1.2, w = Math.min(1, 0.35 + (day - 26) / 2 * 0.65), bp = bodyParts(), flap = day >= 28 ? Math.sin(tt * 3) * 0.08 : 0;
        c.strokeStyle = C.ink; c.lineWidth = 2;
        [-1, 1].forEach(function (sd) { [-8, 0, 8].forEach(function (k) { c.beginPath(); c.moveTo(bp.thorax[0], bp.thorax[1] + k * u); c.lineTo(bp.thorax[0] + sd * 22 * u, bp.thorax[1] + k * u * 2 + 10 * u); c.stroke(); }); });
        [-1, 1].forEach(function (sd) {
          c.save(); c.translate(o.bx, o.by - 18 * u); c.scale(sd * w * (1 - flap), w);
          c.fillStyle = "#f97316"; c.strokeStyle = "#111827"; c.lineWidth = 3 / w;
          c.beginPath(); c.moveTo(0, -8 * u); c.bezierCurveTo(40 * u, -60 * u, 95 * u, -40 * u, 80 * u, 2 * u); c.lineTo(0, 4 * u); c.fill(); c.stroke();
          c.beginPath(); c.moveTo(0, 6 * u); c.bezierCurveTo(60 * u, 10 * u, 70 * u, 55 * u, 25 * u, 55 * u); c.lineTo(0, 16 * u); c.fill(); c.stroke();
          K.dot(c, 70 * u, -18 * u, 3 * u, "#fff"); K.dot(c, 60 * u, -32 * u, 3 * u, "#fff");
          c.restore();
        });
        c.strokeStyle = C.ink; c.lineWidth = 2;
        c.beginPath(); c.moveTo(bp.head[0] - 4 * u, bp.head[1] - 8 * u); c.quadraticCurveTo(bp.head[0] - 16 * u, bp.head[1] - 30 * u, bp.head[0] - 22 * u, bp.head[1] - 38 * u); c.moveTo(bp.head[0] + 4 * u, bp.head[1] - 8 * u); c.quadraticCurveTo(bp.head[0] + 16 * u, bp.head[1] - 30 * u, bp.head[0] + 22 * u, bp.head[1] - 38 * u); c.stroke();
        K.dot(c, bp.head[0], bp.head[1], bp.head[2], "#1f2937"); c.fillStyle = "#1f2937"; c.beginPath(); c.ellipse(bp.thorax[0], bp.thorax[1], bp.thorax[2] * 0.7, bp.thorax[2], 0, 0, 7); c.fill();
        c.beginPath(); c.ellipse(bp.abdomen[0], bp.abdomen[1], bp.abdomen[2] * 0.55, bp.abdomen[2] * 1.6, 0, 0, 7); c.fill();
        var lab = { head: t("head", "الرأس"), thorax: t("thorax", "الصدر"), abdomen: t("abdomen", "البطن") };
        Object.keys(bp).forEach(function (k) { var b = bp[k]; if (parts[k]) K.txt(c, lab[k], b[0] + 70 * u, b[1], { c: C.ink, s: 12, a: "left" }); else K.dot(c, b[0], b[1], 4 + Math.sin(tt * 4) * 1.5, "rgba(250,204,21,.9)"); });
      }
      // timeline
      var ty = H - 22, tw = W - 40, keys = ["egg", "larva", "pupa", "adult"], spans = [[0, 4], [4, 18], [18, 26], [26, 30]];
      spans.forEach(function (sp, k) {
        var x1 = 20 + tw * sp[0] / 30, x2 = 20 + tw * sp[1] / 30;
        c.fillStyle = keys[k] === st ? "#f97316" : C.line; K.rr(c, x1 + 1, ty - 7, x2 - x1 - 2, 14, 6); c.fill();
        K.txt(c, T(NAMES[keys[k]]), (x1 + x2) / 2, ty - 18, { c: keys[k] === st ? C.ink : C.muted, s: 11 });
      });
      K.dot(c, 20 + tw * day / 30, ty, 6, C.ink);
    });
  };

  /* ---------------------------------------------------------
     3. p4_plant - grow a sunflower with water and sunlight
     --------------------------------------------------------- */
  L.p4_plant = function (host, cfg, done) {
    host.innerHTML = hint(t("A sunflower seed is sown 1 cm deep. Set the water and the sunlight, press Grow, and watch. Tap the roots, the stem and the leaves.",
      "زُرعت بذرة عباد الشمس على عمق ١ سم. اضبط الماء وضوء الشمس واضغط «انمُ» وراقب، ثم اضغط على الجذور والساق والأوراق."));
    var S = K.make(host, 0.66, 420), water = 0, sun = 70, play = false, day = 0, sprout = 0, gr = 0, seeds = 0, tapped = {};
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider("💧 " + t("Water", "الماء"), 0, 100, 10, 0, "%") + L._slider("☀️ " + t("Sunlight", "ضوء الشمس"), 0, 100, 10, 70, "%") +
      '<div class="btn-row"><button type="button" class="btn sm primary" id="pg">▶ ' + t("Grow", "انمُ") + '</button><button type="button" class="btn sm" id="pr">↺ ' + t("Sow again", "ازرع من جديد") + '</button></div><div class="meter pl-out"></div>';
    var ins = ctl.querySelectorAll("input"), out = ctl.querySelector(".pl-out");
    var tick = L._goals(host, [t("Give water so the seed sprouts.", "اروِ البذرة لكي تنبت."), t("See the 2 seed leaves, then the first true leaves.", "شاهد الورقتين الفلقيتين ثم أول الأوراق الحقيقية."),
      t("Grow the plant taller than 60 cm.", "اجعل طول النبات أكثر من ٦٠ سم."), t("Grow a flower, then a fruit full of new seeds.", "كوّن زهرة، ثم ثمرة مليئة بالبذور الجديدة."),
      t("Tap the roots, the stem and the leaves to learn their jobs.", "اضغط على الجذور والساق والأوراق لتعرف وظائفها.")], done);
    function upd() { var s = ctl.querySelectorAll(".slv"); s[0].textContent = n(water) + "%"; s[1].textContent = n(sun) + "%"; }
    ins[0].oninput = function () { water = Number(ins[0].value); upd(); };
    ins[1].oninput = function () { sun = Number(ins[1].value); upd(); };
    ctl.querySelector("#pg").onclick = function () { play = !play; this.innerHTML = play ? "⏸ " + t("Pause", "إيقاف") : "▶ " + t("Grow", "انمُ"); };
    ctl.querySelector("#pr").onclick = function () { day = 0; sprout = 0; gr = 0; seeds = 0; };
    upd();
    function height() { return gr * 150; }
    function stageTxt() {
      if (sprout < 1) return water < 20 ? t("Dry soil: the seed cannot sprout. Give it water!", "التربة جافة: البذرة لا تستطيع أن تنبت. اروِها!") : t("The seed is taking in water…", "البذرة تمتص الماء…");
      if (gr < 0.1) return t("Sprout! The 2 round seed leaves open.", "إنبات! تتفتح الورقتان الفلقيتان المستديرتان.");
      if (gr < 0.6) return t("True leaves grow, with jagged edges. The stem gets taller.", "تنمو الأوراق الحقيقية مسننة الحواف، وتطول الساق.");
      if (gr < 0.7) return t("A bud forms at the top.", "يتكوّن برعم في القمة.");
      if (gr < 0.85) return t("The flower blooms!", "تتفتح الزهرة!");
      if (gr < 1) return t("The flower withers and its base swells into a fruit.", "تذبل الزهرة وتنتفخ قاعدتها لتصبح ثمرة.");
      return t("The fruit is ripe, full of new seeds for the next generation.", "نضجت الثمرة وامتلأت ببذور جديدة للجيل التالي.");
    }
    var lastTxt = "";
    function report() {
      var s = stageTxt();
      out.innerHTML = "<span>" + t("Day ", "اليوم ") + "<b>" + n(Math.floor(day)) + "</b></span><span>" + t("Height: ", "الطول: ") + "<b>" + n(Math.round(height())) + " " + t("cm", "سم") + "</b></span>" + (gr >= 1 ? "<span>" + t("New seeds: ", "بذور جديدة: ") + "<b>" + n(seeds) + "</b></span>" : "") + '<span class="sub">' + s + "</span>" +
        (sprout >= 1 && sun < 10 ? '<span class="chip orange">' + t("No sunlight: the leaves cannot catch light, so the plant stops growing.", "لا يوجد ضوء: لا تلتقط الأوراق الضوء فيتوقف نمو النبات.") + "</span>" : "") +
        (sprout >= 1 && water < 10 ? '<span class="chip orange">' + t("No water: the roots have nothing to suck up, so the plant droops.", "لا يوجد ماء: لا تجد الجذور ما تمتصه فيذبل النبات.") + "</span>" : "");
      if (s !== lastTxt) { lastTxt = s; E.speak(s); }
    }
    function g() { var W = S.W, H = S.H; return { cx: W * 0.45, gy: H * 0.74, top: 26, rulerX: W * 0.75 }; }
    function pxH() { var o = g(); return gr * (o.gy - o.top - 30) + (sprout >= 1 ? 14 : 0); }
    S.drag({
      down: function (p) {
        if (sprout < 1) return false;
        var o = g(), h = pxH(), part = null;
        if (p.y > o.gy + 4 && p.y < o.gy + 30 + gr * 70 && Math.abs(p.x - o.cx) < 50) part = "root";
        else if (Math.abs(p.x - o.cx) < 9 && p.y < o.gy && p.y > o.gy - h) part = "stem";
        else if (Math.abs(p.x - o.cx) < 70 && p.y < o.gy && p.y > o.gy - h - 10) part = "leaf";
        if (!part) return false;
        tapped[part] = 1;
        var info = { root: t("Roots: they hold the plant firmly in the soil and suck up water.", "الجذور: تثبّت النبات في التربة وتمتص الماء."), stem: t("Stem: it supports the plant and carries water up to the leaves and flowers.", "الساق: تدعم النبات وتنقل الماء إلى الأوراق والأزهار."), leaf: t("Leaves: wide and flat to catch lots of sunlight.", "الأوراق: عريضة ومسطحة لتلتقط ضوء الشمس بكثرة.") }[part];
        E.toast(info); E.speak(info);
        if (tapped.root && tapped.stem && tapped.leaf) tick(4);
        return true;
      },
      hover: function () { return sprout >= 1; }
    });
    report();
    var drops = [];
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, o = g(), tt = performance.now() / 1000;
      if (play) {
        day += dt * 4;
        if (sprout < 1) { if (water >= 20) sprout = Math.min(1, sprout + dt * water / 100 * 1.1); if (sprout >= 1) { tick(0); E.toast("🌱 " + t("It sprouted!", "لقد نبتت!")); } }
        else if (gr < 1) {
          var rate = (water < 10 ? 0 : Math.min(1, 0.3 + water / 70)) * (sun / 100);
          gr = Math.min(1, gr + dt * 0.085 * rate);
          if (gr >= 1 && !seeds) seeds = 380 + Math.floor(Math.random() * 300);
        }
        if (gr >= 0.12) tick(1); if (height() > 60) tick(2); if (gr >= 1) tick(3);
        report();
      }
      c.clearRect(0, 0, W, H);
      // sun with brightness
      var sa = sun / 100;
      K.dot(c, W * 0.1, 34, 18, "rgba(250,204,21," + (0.15 + sa * 0.85) + ")");
      for (var r = 0; r < 8; r++) { var a = r * Math.PI / 4 + tt * 0.2; c.strokeStyle = "rgba(250,204,21," + sa + ")"; c.lineWidth = 3; c.beginPath(); c.moveTo(W * 0.1 + Math.cos(a) * 24, 34 + Math.sin(a) * 24); c.lineTo(W * 0.1 + Math.cos(a) * 32, 34 + Math.sin(a) * 32); c.stroke(); }
      // water can drops
      if (play && water > 0 && Math.random() < water / 100) drops.push({ x: o.cx + K.rnd(-40, 40), y: o.gy - 70 });
      drops.forEach(function (d) { d.y += 160 * dt; }); drops = drops.filter(function (d) { return d.y < o.gy; });
      drops.forEach(function (d) { K.dot(c, d.x, d.y, 2.5, "#3b82f6"); });
      // soil
      var wet = water / 100;
      c.fillStyle = "rgb(" + Math.round(161 - 60 * wet) + "," + Math.round(98 - 40 * wet) + "," + Math.round(7 + 10 * wet) + ")"; c.globalAlpha = 0.75; c.fillRect(0, o.gy, W, H - o.gy); c.globalAlpha = 1;
      K.txt(c, t("ground", "سطح الأرض"), 34, o.gy - 8, { c: C.muted, s: 11 });
      // seed
      c.fillStyle = "#e7e5e4"; c.strokeStyle = "#57534e"; c.lineWidth = 1.5; c.beginPath(); c.ellipse(o.cx, o.gy + 12, 7, 4.5, 0, 0, 7); c.fill(); c.stroke();
      c.strokeStyle = "#57534e"; c.beginPath(); c.moveTo(o.cx - 5, o.gy + 12); c.lineTo(o.cx + 5, o.gy + 12); c.stroke();
      if (sprout < 1) { K.txt(c, "1 " + t("cm deep", "سم عمق"), o.cx + 46, o.gy + 12, { c: C.muted, s: 11 }); }
      var droop = water < 10 && sprout >= 1 ? 0.5 : 0, pale = sun < 10 ? 0.55 : 0;
      if (sprout > 0) {
        // roots
        c.strokeStyle = "#78350f"; c.lineWidth = 2;
        var rl = 10 + sprout * 10 + gr * 70;
        [[-0.6, 1], [0.5, 0.9], [-0.2, 1.2], [0.25, 1.1], [-0.9, 0.7], [0.9, 0.7]].forEach(function (rt, k) { if (k < 2 + gr * 6) { c.beginPath(); c.moveTo(o.cx, o.gy + 12); c.quadraticCurveTo(o.cx + rt[0] * rl * 0.4, o.gy + 12 + rl * 0.5 * rt[1], o.cx + rt[0] * rl * 0.7, o.gy + 12 + rl * rt[1]); c.stroke(); } });
      }
      if (sprout >= 1) {
        var h = pxH(), topY = o.gy - h, green = pale ? "#a3a33a" : "#16a34a";
        c.strokeStyle = green; c.lineWidth = 3 + gr * 6; c.lineCap = "round"; c.beginPath(); c.moveTo(o.cx, o.gy + 8); c.quadraticCurveTo(o.cx + droop * 30, o.gy - h * 0.5, o.cx + droop * 50, topY + droop * 20); c.stroke();
        // seed leaves (round)
        var sly = o.gy - Math.min(h, 14 + gr * 40);
        c.fillStyle = pale ? "#bef264" : "#4ade80";
        [-1, 1].forEach(function (sd) { c.beginPath(); c.ellipse(o.cx + sd * 13, sly, 12, 7, sd * (0.3 + droop), 0, 7); c.fill(); });
        // true leaves (jagged)
        var nl = Math.floor(gr * 12);
        for (var k = 0; k < nl; k++) {
          var ly = o.gy - h * (0.25 + 0.7 * k / Math.max(nl, 1)), sd = k % 2 ? 1 : -1, ls = 14 + gr * 22;
          c.fillStyle = pale ? "#a3a33a" : "#22c55e"; c.beginPath(); c.moveTo(o.cx + droop * 30 * (1 - ly / o.gy), ly);
          for (var j = 0; j <= 6; j++) { var fx = j / 6, rr2 = Math.sin(fx * Math.PI) * ls * 0.42 * (j % 2 ? 1 : 0.8); c.lineTo(o.cx + sd * fx * ls * 2, ly - rr2 - droop * fx * 20); }
          for (j = 6; j >= 0; j--) { var fx2 = j / 6; c.lineTo(o.cx + sd * fx2 * ls * 2, ly + Math.sin(fx2 * Math.PI) * ls * 0.3); }
          c.closePath(); c.fill();
        }
        // bud, flower, fruit
        var fx0 = o.cx + droop * 50, fy0 = topY + droop * 20;
        if (gr >= 0.6 && gr < 0.7) K.dot(c, fx0, fy0, 8, "#65a30d");
        if (gr >= 0.7 && gr < 0.85) { for (var pz = 0; pz < 14; pz++) { var pa = pz / 14 * Math.PI * 2; c.fillStyle = "#facc15"; c.beginPath(); c.ellipse(fx0 + Math.cos(pa) * 22, fy0 + Math.sin(pa) * 22, 11, 5, pa, 0, 7); c.fill(); } K.dot(c, fx0, fy0, 15, "#78350f"); }
        if (gr >= 0.85) { var sw = gr >= 1 ? 19 : 14; K.dot(c, fx0, fy0, sw, "#57534e"); for (pz = 0; pz < 22; pz++) { var a2 = pz * 2.4, rr = Math.sqrt(pz / 22) * (sw - 3); K.dot(c, fx0 + Math.cos(a2) * rr, fy0 + Math.sin(a2) * rr, 1.6, gr >= 1 ? "#f5f5f4" : "#a8a29e"); } }
        // ruler: height to the base of the top leaf
        var rx = o.rulerX; c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.moveTo(rx, o.gy); c.lineTo(rx, o.top); c.stroke();
        for (var cm = 0; cm <= 150; cm += 30) { var yy = o.gy - cm / 150 * (o.gy - o.top - 30); c.beginPath(); c.moveTo(rx, yy); c.lineTo(rx + 8, yy); c.stroke(); K.txt(c, n(cm), rx + 22, yy, { c: C.muted, s: 10 }); }
        c.setLineDash([5, 4]); c.strokeStyle = "#f97316"; c.beginPath(); c.moveTo(o.cx, topY + 6); c.lineTo(rx, topY + 6); c.stroke(); c.setLineDash([]);
        K.txt(c, n(Math.round(height())) + " " + t("cm", "سم"), rx, topY - 6, { c: "#f97316", s: 12 });
      }
    });
  };

  /* ---------------------------------------------------------
     4. p4_light - mirror, magnifying glass, shadows and the Sun
     --------------------------------------------------------- */
  L.p4_light = function (host, cfg, done) {
    host.innerHTML = hint(t("Three light experiments. Mirror: drag around the mirror to turn it. Magnifier: drag up and down to move the lens. Shadows: slide the time of day.",
      "ثلاث تجارب للضوء. المرآة: اسحب حول المرآة لتديرها. العدسة: اسحب لأعلى ولأسفل لتحرك العدسة. الظل: حرّك وقت النهار.")) + '<div class="seg" id="lm"></div>';
    var S = K.make(host, 0.6, 380), mode = "mirror", mAng = -0.6, mist = true, lensH = 25, paper = "black", temp = 30, burnt = 0, hour = 9, marks = [];
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="lm-mir"><div class="btn-row"><button type="button" class="btn sm tg on" id="mist">💧 ' + t("Water mist (see the path)", "رذاذ الماء (لرؤية المسار)") + "</button></div></div>" +
      '<div class="lm-len" hidden><div class="seg" id="pap"></div></div>' +
      '<div class="lm-sha" hidden>' + L._slider("🕘 " + t("Time of day", "وقت النهار"), 6, 18, 0.25, 9) + '<div class="btn-row"><button type="button" class="btn sm" id="mk">📍 ' + t("Mark the shadow tip", "ضع علامة عند طرف الظل") + "</button></div></div>" +
      '<div class="meter li-out"></div>';
    var out = ctl.querySelector(".li-out"), hIn = ctl.querySelector(".lm-sha input");
    var tick = L._goals(host, [t("Mirror: bounce sunlight onto the target in the dark shade.", "المرآة: اعكس ضوء الشمس على الهدف في الظل المظلم."),
      t("Magnifier: make the point of light tiny and burn the black paper.", "العدسة: اجعل نقطة الضوء صغيرة جدًا واحرق الورقة السوداء."),
      t("Shadows: make the stick's shadow as short as it gets (noon).", "الظل: اجعل ظل العصا أقصر ما يمكن (الظهر)."),
      t("Shadows: make the shadow point to the East (evening).", "الظل: اجعل الظل يتجه إلى الشرق (المساء)."),
      t("Find a time when the sunny ground is 10 °C warmer than the shade.", "اعثر على وقت تكون فيه الأرض المشمسة أدفأ من الظل بـ ١٠ درجات.")], done);
    K.seg(host, "#lm", [["mirror", "🪞 " + t("Mirror", "المرآة")], ["lens", "🔍 " + t("Magnifier", "العدسة")], ["shadow", "🌗 " + t("Shadows", "الظل")]], mode, function (v) {
      mode = v; ctl.querySelector(".lm-mir").hidden = v !== "mirror"; ctl.querySelector(".lm-len").hidden = v !== "lens"; ctl.querySelector(".lm-sha").hidden = v !== "shadow";
    });
    K.seg(ctl, "#pap", [["black", "⬛ " + t("Black paper", "ورقة سوداء")], ["white", "⬜ " + t("White paper", "ورقة بيضاء")]], paper, function (v) { paper = v; temp = 30; burnt = 0; });
    ctl.querySelector("#mist").onclick = function () { mist = !mist; this.classList.toggle("on", mist); };
    function hUpd() { ctl.querySelector(".lm-sha .slv").textContent = clock(hour); }
    function clock(hh) { var h = Math.floor(hh), m = Math.round((hh - h) * 60); return n(h) + ":" + (m < 10 ? n(0) : "") + n(m); }
    hIn.oninput = function () { hour = Number(hIn.value); hUpd(); };
    ctl.querySelector("#mk").onclick = function () { marks.push(hour); if (marks.length > 8) marks.shift(); };
    hUpd();
    // geometry helpers
    function mg() { var W = S.W, H = S.H; return { sx: W * 0.1, sy: H * 0.13, mx: W * 0.42, my: H * 0.8, tx: W * 0.86, ty: H * 0.68, shadeX: W * 0.72 }; }
    function sunAlt(hh) { return Math.max(0.02, Math.sin(Math.PI * (hh - 6) / 12)) * 62 * Math.PI / 180; }
    function groundT(hh) { var s = Math.max(0, Math.sin(Math.PI * (hh - 6.5) / 13)); return { sun: 22 + 24 * s, shade: 21 + 8 * s }; }
    var spoken = {};
    function sayOnce(k, s) { if (!spoken[k]) { spoken[k] = 1; E.speak(s); } }
    S.drag({
      down: function (p) { if (mode === "mirror") { var o = mg(); mAng = Math.atan2(p.y - o.my, p.x - o.mx); return true; } if (mode === "lens") { lensMove(p); return true; } return false; },
      move: function (p) { if (mode === "mirror") { var o = mg(); mAng = Math.atan2(p.y - o.my, p.x - o.mx); } if (mode === "lens") lensMove(p); },
      hover: function () { return mode !== "shadow"; }
    });
    function lensMove(p) { var H = S.H, top = H * 0.12, bot = H * 0.78; lensH = clamp(Math.round((bot - p.y) / (bot - top) * 30), 2, 30); }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, tt = performance.now() / 1000;
      c.clearRect(0, 0, W, H);
      if (mode === "mirror") {
        var o = mg();
        // shade region (under the stairs)
        c.fillStyle = "rgba(15,23,42,.45)"; c.fillRect(o.shadeX, H * 0.36, W - o.shadeX, H * 0.64);
        c.fillStyle = "#94a3b8"; c.fillRect(o.shadeX - 6, H * 0.3, W - o.shadeX + 6, 12);
        K.txt(c, t("dark shade", "ظل مظلم"), (o.shadeX + W) / 2, H * 0.43, { c: "#e2e8f0", s: 12 });
        // target
        c.strokeStyle = "#ef4444"; c.lineWidth = 3; [16, 9].forEach(function (r) { c.beginPath(); c.arc(o.tx, o.ty, r, 0, 7); c.stroke(); });
        // ground
        c.fillStyle = C.line; c.fillRect(0, H * 0.86, W, 4);
        // sun
        K.dot(c, o.sx, o.sy, 20, "#facc15");
        // incoming ray
        var dx = o.mx - o.sx, dy = o.my - o.sy, dl = Math.hypot(dx, dy); dx /= dl; dy /= dl;
        var nx = -Math.sin(mAng), ny = Math.cos(mAng), dot = dx * nx + dy * ny;
        var rx = dx - 2 * dot * nx, ry = dy - 2 * dot * ny;
        c.strokeStyle = "rgba(250,204,21,.95)"; c.lineWidth = 4; c.beginPath(); c.moveTo(o.sx, o.sy); c.lineTo(o.mx, o.my); c.stroke();
        // reflected ray to the edge of the scene
        var len = 0, ex = o.mx, ey = o.my, hit = false, facing = true;
        if (facing) {
          for (len = 0; len < W * 2; len += 3) { ex = o.mx + rx * len; ey = o.my + ry * len; if (ex < 0 || ex > W || ey < 0 || ey > H * 0.86) break; if (Math.hypot(ex - o.tx, ey - o.ty) < 15) { hit = true; break; } }
          c.strokeStyle = "rgba(250,204,21,.95)"; c.beginPath(); c.moveTo(o.mx, o.my); c.lineTo(ex, ey); c.stroke();
          K.dot(c, ex, ey, 10, "rgba(254,240,138,.9)");
          if (mist) for (var q = 0; q < 26; q++) { var f = (q / 26 + tt * 0.15) % 1, px = o.sx + (o.mx - o.sx) * f, py = o.sy + (o.my - o.sy) * f; K.dot(c, px + K.rnd(-3, 3), py + K.rnd(-3, 3), 1.5, "rgba(255,255,255,.8)"); var px2 = o.mx + (ex - o.mx) * f, py2 = o.my + (ey - o.my) * f; K.dot(c, px2 + K.rnd(-3, 3), py2 + K.rnd(-3, 3), 1.5, "rgba(255,255,255,.8)"); }
        }
        // mirror
        var ml = 34; c.strokeStyle = "#e2e8f0"; c.lineWidth = 7; c.beginPath(); c.moveTo(o.mx - Math.cos(mAng) * ml, o.my - Math.sin(mAng) * ml); c.lineTo(o.mx + Math.cos(mAng) * ml, o.my + Math.sin(mAng) * ml); c.stroke();
        c.strokeStyle = "#475569"; c.lineWidth = 2; c.stroke();
        K.txt(c, t("mirror", "مرآة"), o.mx, o.my + 30, { c: C.muted, s: 11 });
        if (hit) { K.txt(c, "🎯 " + t("Hit! The light reached the shade.", "إصابة! وصل الضوء إلى الظل."), W * 0.5, 18, { c: "#16a34a", s: 14 }); tick(0); sayOnce("m", t("Hit! Reflected light travels in a straight line.", "إصابة! الضوء المنعكس ينتقل في خط مستقيم.")); }
        out.innerHTML = '<span class="sub">' + (facing ? t("Light travels in straight lines. The mirror reflects it in one direction.", "الضوء ينتقل في خطوط مستقيمة، والمرآة تعكسه في اتجاه واحد.") : t("The back of the mirror faces the Sun. Turn it around.", "ظهر المرآة يواجه الشمس، أدرها.")) + "</span>";
      }
      if (mode === "lens") {
        var cx = W * 0.4, top = H * 0.12, bot = H * 0.78, ly = bot - lensH / 30 * (bot - top), lw = Math.min(W * 0.26, 130), f = 12;
        var spot = Math.max(0.25, 8 * Math.abs(lensH - f) / f), spotPx = spot / 8 * lw;
        var bright = Math.min(80, Math.pow(8 / spot, 2)), absorb = paper === "black" ? 1 : 0.4, target = 30 + 3.5 * bright * absorb;
        temp += (target - temp) * Math.min(1, dt * 0.7);
        if (temp > 230 && paper === "black") burnt = Math.min(1, burnt + dt * 0.5);
        // sun rays above the lens
        for (var k = -3; k <= 3; k++) { var x0 = cx + k * lw / 7; c.strokeStyle = "rgba(250,204,21,.8)"; c.lineWidth = 2; c.beginPath(); c.moveTo(x0, 6); c.lineTo(x0, ly); c.lineTo(cx + k * spotPx / 7, bot); c.stroke(); }
        // lens
        c.fillStyle = "rgba(147,197,253,.55)"; c.beginPath(); c.ellipse(cx, ly, lw / 2, 9, 0, 0, 7); c.fill(); c.strokeStyle = "#475569"; c.lineWidth = 3; c.stroke();
        c.lineWidth = 6; c.beginPath(); c.moveTo(cx + lw / 2, ly); c.lineTo(cx + lw / 2 + 40, ly + 10); c.stroke();
        // paper
        c.fillStyle = paper === "black" ? "#111827" : "#f8fafc"; c.fillRect(cx - lw, bot, lw * 2, 10); c.strokeStyle = C.muted; c.lineWidth = 1; c.strokeRect(cx - lw, bot, lw * 2, 10);
        K.dot(c, cx, bot + 2, Math.max(2, spotPx / 2), "rgba(254,249,195," + Math.min(1, 0.25 + bright / 40) + ")");
        if (temp > 150 && paper === "black") for (var sm = 0; sm < 3; sm++) K.dot(c, cx + Math.sin(tt * 3 + sm) * 6, bot - 10 - ((tt * 30 + sm * 15) % 45), 4 + sm, "rgba(148,163,184,.55)");
        if (burnt > 0) { K.dot(c, cx, bot + 4, 4 + burnt * 8, "#f97316"); K.dot(c, cx, bot + 4, 2 + burnt * 4, "#fde047"); }
        // height scale + thermometer
        c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.moveTo(cx - lw - 18, bot); c.lineTo(cx - lw - 18, top); c.stroke();
        K.txt(c, n(lensH) + " " + t("cm", "سم"), cx - lw - 18, ly - 12, { c: C.ink, s: 12 });
        var thx = W * 0.85, thy0 = H * 0.15, thy1 = H * 0.8, fr = clamp((temp - 20) / 300, 0, 1);
        c.strokeStyle = C.muted; c.lineWidth = 2; K.rr(c, thx - 7, thy0, 14, thy1 - thy0, 7); c.stroke();
        c.fillStyle = "#ef4444"; K.rr(c, thx - 4, thy1 - (thy1 - thy0) * fr, 8, (thy1 - thy0) * fr, 4); c.fill(); K.dot(c, thx, thy1 + 6, 10, "#ef4444");
        K.txt(c, n(Math.round(temp)) + " °C", thx, thy0 - 12, { c: C.ink, s: 13 });
        out.innerHTML = "<span>" + t("Light spot: ", "بقعة الضوء: ") + "<b>" + f1(spot) + " " + t("cm", "سم") + "</b></span><span>" + t("Brightness: ", "الإضاءة: ") + "<b>×" + n(Math.round(bright)) + "</b></span>" +
          '<span class="sub">' + (burnt > 0.3 ? t("The paper is burning! The smaller the point, the brighter and hotter. Put burnt paper in water.", "الورقة تحترق! كلما صغرت النقطة زادت الإضاءة والحرارة. ضع الورقة في الماء بعد التجربة.") : paper === "white" && spot < 1 ? t("White paper reflects much of the light, so it warms slowly. Black paper absorbs it better.", "الورقة البيضاء تعكس كثيرًا من الضوء فتسخن ببطء، والسوداء تمتصه أفضل.") : t("Never look at the Sun through the lens, or at the bright point for long.", "لا تنظر إلى الشمس من خلال العدسة، ولا إلى النقطة المضيئة طويلًا.")) + "</span>";
        if (burnt > 0.3) { tick(1); sayOnce("b", t("Smoke! The tiny point of light is very hot.", "دخان! نقطة الضوء الصغيرة ساخنة جدًا.")); }
      }
      if (mode === "shadow") {
        var gy = H * 0.72, sxs = W * 0.35, stickH = Math.min(H * 0.28, 90), alt = sunAlt(hour);
        // the Sun's path seen from the stick (East on the left, West on the right)
        var topY = gy - stickH, arcR = Math.max(40, Math.min(W * 0.32, topY - 22));
        var sunAt = function (hh) { var a = sunAlt(hh), sd = hh < 12 ? 1 : hh > 12 ? -1 : 0; return sd === 0 ? { x: sxs, y: topY - arcR } : { x: sxs - sd * Math.cos(a) * arcR, y: topY - Math.sin(a) * arcR }; };
        c.strokeStyle = C.line; c.setLineDash([4, 5]); c.lineWidth = 2; c.beginPath();
        for (var hh = 6; hh <= 18.01; hh += 0.25) { var pp = sunAt(hh); if (hh === 6) c.moveTo(pp.x, pp.y); else c.lineTo(pp.x, pp.y); }
        c.stroke(); c.setLineDash([]);
        var sunP = sunAt(hour), sunX = sunP.x, sunY = sunP.y;
        K.dot(c, sunX, sunY, 16, "#facc15");
        // shade shed on the right
        var shX = W * 0.72;
        c.fillStyle = "rgba(15,23,42,.35)"; c.fillRect(shX, gy - 70, W - shX - 8, 70);
        c.fillStyle = "#64748b"; c.fillRect(shX - 6, gy - 76, W - shX + 2, 8); c.fillRect(shX - 6, gy - 76, 6, 76);
        // ground
        c.fillStyle = "rgba(251,191,36,.35)"; c.fillRect(0, gy, W, H - gy); c.fillStyle = C.line; c.fillRect(0, gy, W, 3);
        K.txt(c, t("East", "الشرق"), 26, gy + 16, { c: C.ink, s: 12 }); K.txt(c, t("West", "الغرب"), W - 30, gy + 16, { c: C.ink, s: 12 });
        // shadow: opposite the Sun, length = height / tan(altitude)
        var L3 = stickH / Math.tan(alt), dir = hour < 12 ? 1 : -1;
        if (Math.abs(hour - 12) < 0.01) dir = 0;
        var tipX = sxs + dir * Math.min(L3, W), shLen = Math.abs(tipX - sxs);
        c.fillStyle = "rgba(30,41,59,.55)"; c.beginPath(); c.moveTo(sxs, gy); c.lineTo(tipX, gy); c.lineTo(sxs, gy + 5); c.closePath(); c.fill();
        c.fillStyle = "rgba(30,41,59,.55)"; c.fillRect(Math.min(sxs, tipX), gy - 2, Math.max(4, shLen), 5);
        c.strokeStyle = "rgba(250,204,21,.6)"; c.lineWidth = 1.5; c.setLineDash([5, 4]); c.beginPath(); c.moveTo(tipX, gy); c.lineTo(sxs, topY); c.lineTo(sunX, sunY); c.stroke(); c.setLineDash([]);
        c.fillStyle = "#78350f"; c.fillRect(sxs - 3, gy - stickH, 6, stickH);
        marks.forEach(function (m) { var a2 = sunAlt(m), l2 = stickH / Math.tan(a2), d2 = m < 12 ? 1 : -1, mx = sxs + d2 * Math.min(l2, W); if (mx > 0 && mx < W) { K.dot(c, mx, gy + 1, 4, "#ef4444"); K.txt(c, clock(m), mx, gy + 30, { c: C.muted, s: 10 }); } });
        // thermometers
        var gt = groundT(hour);
        [[W * 0.58, gt.sun, t("sun", "شمس")], [W * 0.86, gt.shade, t("shade", "ظل")]].forEach(function (th) { K.rr(c, th[0] - 26, gy + 34, 52, 22, 6); c.fillStyle = C.card; c.fill(); c.strokeStyle = C.muted; c.lineWidth = 1; c.stroke(); K.txt(c, n(Math.round(th[1])) + " °C", th[0], gy + 45, { c: C.ink, s: 12 }); K.txt(c, th[2], th[0], gy + 66, { c: C.muted, s: 10 }); });
        var lenCm = L3 / stickH * 100;
        out.innerHTML = "<span>" + t("Time: ", "الوقت: ") + "<b>" + clock(hour) + "</b></span><span>" + t("Shadow of a 1 m stick: ", "ظل عصا طولها ١ م: ") + "<b>" + (lenCm > 999 ? "∞" : f2(lenCm / 100) + " " + t("m", "م")) + "</b></span><span>" + t("Points to: ", "يتجه إلى: ") + "<b>" + (dir > 0 ? t("West", "الغرب") : dir < 0 ? t("East", "الشرق") : t("North (under the stick)", "الشمال (تحت العصا)")) + "</b></span>" +
          '<span class="sub">' + t("Sun, stick and shadow are always in a straight line.", "الشمس والعصا والظل دائمًا على خط مستقيم.") + "</span>";
        if (hour >= 11.75 && hour <= 12.25) { tick(2); sayOnce("n", t("Noon: the Sun is highest, so the shadow is shortest.", "الظهر: الشمس في أعلى موضع فيكون الظل أقصر ما يمكن.")); }
        if (hour >= 15) { tick(3); sayOnce("e", t("The Sun is in the West, so the shadow points East.", "الشمس في الغرب فيتجه الظل إلى الشرق.")); }
        if (gt.sun - gt.shade >= 10) tick(4);
      }
    });
  };

  /* ---------------------------------------------------------
     5. p4_sound - pluck a string, then try a string telephone
     --------------------------------------------------------- */
  L.p4_sound = function (host, cfg, done) {
    host.innerHTML = hint(t("Monochord: drag the string down and let go. Pull far for a loud sound, a little for a soft one. Tap the shaking string to stop it. Then try the string telephone.",
      "المونوكورد: اسحب الوتر لأسفل ثم اتركه؛ اسحبه كثيرًا لصوت عالٍ وقليلًا لصوت منخفض، واضغط على الوتر المهتز لتوقفه. ثم جرّب تليفون الخيط.")) + '<div class="seg" id="sm"></div>';
    var S = K.make(host, 0.6, 380), mode = "mono", AMAX = 50, amp = 0, pull = 0, grab = false, ph = 0, rings = [], ringT = 0, hist = [], tight = true, pinch = false, talk = false, tpTime = 0, wph = 0, lastLvl = "";
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="sd-tel" hidden><div class="seg" id="ten"></div> <div class="btn-row"><button type="button" class="btn sm tg" id="pin">🤏 ' + t("Pinch the middle", "اضغط على المنتصف") + '</button><button type="button" class="btn sm primary" id="tlk">🗣️ ' + t("Salma talks", "سلمى تتكلم") + "</button></div></div>" +
      '<div class="meter so-out"></div>';
    var out = ctl.querySelector(".so-out");
    var tick = L._goals(host, [t("Pull the string far: make a LOUD sound.", "اسحب الوتر كثيرًا: أصدِر صوتًا عاليًا."), t("Pull it just a little: make a SOFT sound.", "اسحبه قليلًا فقط: أصدِر صوتًا منخفضًا."),
      t("Tap the shaking string to stop the vibration.", "اضغط على الوتر المهتز لتوقف الاهتزاز."), t("String telephone: let Adam hear Salma clearly.", "تليفون الخيط: اجعل آدم يسمع سلمى بوضوح."),
      t("Pinch the tight string while Salma talks.", "اضغط على الخيط المشدود بينما تتكلم سلمى.")], done);
    K.seg(host, "#sm", [["mono", "🎸 " + t("Monochord", "المونوكورد")], ["tel", "🥤 " + t("String telephone", "تليفون الخيط")]], mode, function (v) { mode = v; ctl.querySelector(".sd-tel").hidden = v !== "tel"; amp = 0; rings = []; });
    K.seg(ctl, "#ten", [["tight", t("Tight string", "خيط مشدود")], ["loose", t("Loose string", "خيط مرتخٍ")]], "tight", function (v) { tight = v === "tight"; });
    ctl.querySelector("#pin").onclick = function () { pinch = !pinch; this.classList.toggle("on", pinch); };
    ctl.querySelector("#tlk").onclick = function () { talk = !talk; tpTime = 0; this.innerHTML = talk ? "🤫 " + t("Stop talking", "توقف عن الكلام") : "🗣️ " + t("Salma talks", "سلمى تتكلم"); };
    function mg() { var W = S.W, H = S.H; return { x0: W * 0.08, x1: W * 0.56, sy: H * 0.56, ear: W * 0.86 }; }
    S.drag({
      down: function (p) {
        if (mode !== "mono") return false;
        var o = mg();
        if (p.x < o.x0 || p.x > o.x1 || Math.abs(p.y - o.sy) > 40) return false;
        if (amp > 6) { tick(2); E.speak(t("You stopped the vibration, so the sound stopped.", "أوقفت الاهتزاز فتوقف الصوت.")); }
        amp = 0; grab = true; pull = clamp(p.y - o.sy, -AMAX, AMAX); return true;
      },
      move: function (p) { if (grab) pull = clamp(p.y - mg().sy, -AMAX, AMAX); },
      up: function () {
        if (!grab) return; grab = false;
        var a = Math.abs(pull); pull = 0;
        if (a < 3) return;
        amp = a; ph = 0;
        if (a >= AMAX * 0.75) { tick(0); E.speak(t("Big vibration, loud sound!", "اهتزاز كبير، صوت عالٍ!")); }
        else if (a <= AMAX * 0.3) { tick(1); E.speak(t("Small vibration, soft sound.", "اهتزاز صغير، صوت منخفض.")); }
      },
      hover: function (p) { var o = mg(); return mode === "mono" && p.x > o.x0 && p.x < o.x1 && Math.abs(p.y - o.sy) < 40; }
    });
    function level(v) { return v > 0.6 ? t("loud", "عالٍ") : v > 0.08 ? t("soft", "منخفض") : t("silent", "لا صوت"); }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      c.clearRect(0, 0, W, H);
      if (mode === "mono") {
        var o = mg();
        amp *= Math.exp(-0.45 * dt); if (amp < 0.4) amp = 0;
        ph += dt * 2 * Math.PI * 5;
        var disp = grab ? pull : amp * Math.cos(ph), lv = grab ? 0 : amp / AMAX;
        hist.push(disp); if (hist.length > 200) hist.shift();
        // vibration graph
        var gx = W * 0.06, gw = W * 0.5, gy = H * 0.17, gh = H * 0.12;
        c.strokeStyle = C.line; c.lineWidth = 1; c.beginPath(); c.moveTo(gx, gy); c.lineTo(gx + gw, gy); c.stroke();
        c.strokeStyle = "#f97316"; c.lineWidth = 2; c.beginPath();
        hist.forEach(function (v, i) { var x = gx + gw * i / 200, y = gy - v / AMAX * gh; if (i) c.lineTo(x, y); else c.moveTo(x, y); }); c.stroke();
        K.txt(c, t("vibration (slow motion)", "الاهتزاز (حركة بطيئة)"), gx, gy - gh - 10, { c: C.muted, s: 11, a: "left" });
        // sound box and bridges
        c.fillStyle = "#b45309"; K.rr(c, o.x0 - 14, o.sy + 6, o.x1 - o.x0 + 28, 34, 8); c.fill();
        K.dot(c, (o.x0 + o.x1) / 2, o.sy + 23, 8, "#451a03");
        c.fillStyle = "#e5e7eb"; c.fillRect(o.x0 - 4, o.sy - 6, 8, 14); c.fillRect(o.x1 - 4, o.sy - 6, 8, 14);
        // ghost envelope when vibrating
        if (!grab && amp > 1) { c.strokeStyle = "rgba(249,115,22,.25)"; c.lineWidth = 2; [-1, 1].forEach(function (sd) { c.beginPath(); for (var i = 0; i <= 30; i++) { var u = i / 30, x = o.x0 + (o.x1 - o.x0) * u, y = o.sy + sd * amp * Math.sin(Math.PI * u); if (i) c.lineTo(x, y); else c.moveTo(x, y); } c.stroke(); }); }
        // string
        c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath();
        for (var i = 0; i <= 40; i++) { var u = i / 40, x = o.x0 + (o.x1 - o.x0) * u, y = o.sy + (grab ? pull * (1 - Math.abs(u - 0.5) * 2) : disp * Math.sin(Math.PI * u)); if (i) c.lineTo(x, y); else c.moveTo(x, y); }
        c.stroke();
        // sound rings to the ear
        ringT += dt; if (ringT > 0.12 && lv > 0.02) { ringT = 0; rings.push({ r: 0, a: lv }); }
        rings.forEach(function (r) { r.r += 170 * dt; }); rings = rings.filter(function (r) { return r.r < o.ear - o.x1 + 40; });
        rings.forEach(function (r) { c.strokeStyle = "rgba(59,130,246," + (r.a * (1 - r.r / (o.ear - o.x1 + 40))) + ")"; c.lineWidth = 2 + r.a * 3; c.beginPath(); c.arc(o.x1, o.sy, r.r + 10, -0.6, 0.6); c.stroke(); });
        emoji(c, "👂", o.ear, o.sy, 34);
        // loudness meter
        var mx = W - 26, my0 = H * 0.2, my1 = H * 0.85, mh = (my1 - my0) * lv;
        c.strokeStyle = C.muted; c.lineWidth = 1.5; K.rr(c, mx - 9, my0, 18, my1 - my0, 6); c.stroke();
        c.fillStyle = lv > 0.6 ? "#ef4444" : lv > 0.08 ? "#f59e0b" : "#22c55e"; K.rr(c, mx - 6, my1 - mh, 12, mh, 4); c.fill();
        K.txt(c, level(lv), mx - 12, my0 - 12, { c: C.ink, s: 12, a: "right" });
        out.innerHTML = "<span>" + t("Vibration size: ", "مقدار الاهتزاز: ") + "<b>" + n(Math.round((grab ? Math.abs(pull) : amp) / AMAX * 100)) + "%</b></span><span>" + t("Sound: ", "الصوت: ") + "<b>" + level(lv) + "</b></span>" +
          '<span class="sub">' + (grab ? t("Let go to pluck the string.", "اترك الوتر لتنقره.") : amp > 0 ? t("The string vibrates and shakes the air. The bigger the vibration, the louder the sound.", "الوتر يهتز ويهز الهواء، وكلما كبر الاهتزاز علا الصوت.") : t("No vibration, no sound.", "لا اهتزاز، لا صوت.")) + "</span>";
      } else {
        var cy = H * 0.5, lx = W * 0.2, rx = W * 0.8, mid = (lx + rx) / 2, sag = tight ? 0 : 46, rec;
        wph += dt * 9;
        if (talk) tpTime += dt;
        rec = !talk ? 0 : pinch ? 0 : tight ? 1 : 0.12;
        var sy = function (u) { return cy + sag * 4 * u * (1 - u); };
        emoji(c, "👧", W * 0.07, cy - 8, 38); emoji(c, "👦", W * 0.93, cy - 8, 38);
        c.fillStyle = "#e5e7eb"; c.strokeStyle = C.muted; c.lineWidth = 2;
        c.beginPath(); c.moveTo(lx - 30, cy - 16); c.lineTo(lx, cy - 7); c.lineTo(lx, cy + 7); c.lineTo(lx - 30, cy + 16); c.closePath(); c.fill(); c.stroke();
        c.beginPath(); c.moveTo(rx + 30, cy - 16); c.lineTo(rx, cy - 7); c.lineTo(rx, cy + 7); c.lineTo(rx + 30, cy + 16); c.closePath(); c.fill(); c.stroke();
        // the string, with the vibration travelling along it
        c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath();
        for (var k = 0; k <= 80; k++) {
          var u2 = k / 80, x2 = lx + (rx - lx) * u2, a = 0;
          if (talk) { a = 6 * (tight ? 1 : Math.exp(-3.2 * u2)); if (pinch && u2 > 0.5) a = 0; if (pinch && u2 > 0.45) a *= (0.5 - u2) / 0.05; a = Math.max(0, a); }
          var y2 = sy(u2) + a * Math.sin(u2 * 40 - wph);
          if (k) c.lineTo(x2, y2); else c.moveTo(x2, y2);
        }
        c.stroke();
        if (pinch) emoji(c, "🤏", mid, sy(0.5) - 18, 30);
        if (talk) { for (var q = 0; q < 3; q++) { c.strokeStyle = "rgba(59,130,246," + (0.6 - q * 0.18) + ")"; c.lineWidth = 2; c.beginPath(); c.arc(W * 0.07 + 18, cy - 10, 10 + q * 7 + (wph % 6), -0.7, 0.7); c.stroke(); } }
        // ear meter
        var bx = W * 0.86, bh = H * 0.36, by0 = H * 0.12;
        c.strokeStyle = C.muted; c.lineWidth = 1.5; K.rr(c, bx - 9, by0, 18, bh, 6); c.stroke();
        c.fillStyle = rec > 0.6 ? "#22c55e" : rec > 0 ? "#f59e0b" : C.line; K.rr(c, bx - 6, by0 + bh * (1 - rec), 12, bh * rec, 4); c.fill();
        K.txt(c, t("Adam hears", "آدم يسمع"), bx, by0 - 10, { c: C.muted, s: 11 });
        var msg = !talk ? t("Press 'Salma talks'.", "اضغط «سلمى تتكلم».") : pinch ? t("The fingers stop the vibration, so Adam hears nothing.", "الأصابع توقف الاهتزاز، فلا يسمع آدم شيئًا.") : tight ? t("Clear! The vibration travels along the tight string.", "واضح! ينتقل الاهتزاز خلال الخيط المشدود.") : t("Very faint. A loose string does not carry the vibration well.", "خافت جدًا؛ الخيط المرتخي لا ينقل الاهتزاز جيدًا.");
        out.innerHTML = "<span>" + t("Adam hears: ", "يسمع آدم: ") + "<b>" + n(Math.round(rec * 100)) + "%</b></span>" + '<span class="sub">' + msg + "</span>";
        if (msg !== lastLvl) { lastLvl = msg; if (talk) E.speak(msg); }
        if (talk && tight && !pinch && tpTime > 0.8) tick(3);
        if (talk && tight && pinch) tick(4);
      }
    });
  };

  /* ---------------------------------------------------------
     6. p4_wind - wind-powered car: wind strength and sail size
     --------------------------------------------------------- */
  L.p4_wind = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose the fan strength and the sail, then press Run. The distance is measured from the start line. Change only one thing at a time!",
      "اختر قوة المروحة والشراع ثم اضغط «انطلق». تُقاس المسافة من خط البداية. غيّر شيئًا واحدًا فقط في كل مرة!"));
    var S = K.make(host, 0.5, 340), wind = "weak", sail = "small", run = null, s = 0, trials = [], parts = [], blade = 0;
    var WV = { weak: 1, medium: 1.7, strong: 2.6 }, AV = { none: 0.12, small: 1, large: 1.9 }, TRACK = 3;
    var WN = { weak: t("weak", "ضعيفة"), medium: t("medium", "متوسطة"), strong: t("strong", "قوية") }, SN = { none: t("no sail", "بلا شراع"), small: t("small sail", "شراع صغير"), large: t("large sail", "شراع كبير") };
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><span class="sw-lbl">💨</span><div class="seg" id="wv"></div></div><div class="btn-row"><span class="sw-lbl">⛵</span><div class="seg" id="sv"></div></div>' +
      '<div class="btn-row"><button type="button" class="btn sm primary" id="go">▶ ' + t("Run", "انطلق") + '</button></div><div class="meter wd-out"></div>';
    var out = ctl.querySelector(".wd-out");
    var tick = L._goals(host, [t("Same sail: run with a weak wind, then a strong wind.", "الشراع نفسه: جرّب برياح ضعيفة ثم برياح قوية."), t("Same wind: compare a small sail and a large sail.", "الرياح نفسها: قارن بين شراع صغير وشراع كبير."),
      t("Make the car travel more than 2.5 m.", "اجعل السيارة تقطع أكثر من ٢٫٥ م."), t("Run with no sail. Does the wind still push hard?", "جرّب بلا شراع. هل تدفعها الرياح بقوة؟"), t("Repeat the same test 3 times (3 trials).", "كرّر التجربة نفسها ٣ مرات (٣ محاولات).")], done);
    K.seg(ctl, "#wv", [["weak", WN.weak], ["medium", WN.medium], ["strong", WN.strong]], wind, function (v) { wind = v; });
    K.seg(ctl, "#sv", [["none", SN.none], ["small", SN.small], ["large", SN.large]], sail, function (v) { sail = v; });
    function table() {
      out.innerHTML = trials.length ? trials.slice(-6).map(function (r, i) { return '<span class="chip' + (r.d > 2.5 ? " green" : "") + '">' + n(trials.length - Math.min(6, trials.length) + i + 1) + ". " + WN[r.w] + " · " + SN[r.s] + " → <b>" + f2(r.d) + " " + t("m", "م") + "</b></span>"; }).join("") : '<span class="sub">' + t("No trials yet. Press Run.", "لا توجد محاولات بعد. اضغط «انطلق».") + "</span>";
    }
    function check() {
      var has = function (f) { return trials.some(f); };
      ["none", "small", "large"].forEach(function (sl) { if (has(function (r) { return r.s === sl && r.w === "weak"; }) && has(function (r) { return r.s === sl && r.w === "strong"; })) tick(0); });
      ["weak", "medium", "strong"].forEach(function (w) { if (has(function (r) { return r.w === w && r.s === "small"; }) && has(function (r) { return r.w === w && r.s === "large"; })) tick(1); });
      if (has(function (r) { return r.d > 2.5; })) tick(2);
      if (has(function (r) { return r.s === "none"; })) tick(3);
      var cnt = {}; trials.forEach(function (r) { var k = r.w + r.s; cnt[k] = (cnt[k] || 0) + 1; if (cnt[k] >= 3) tick(4); });
    }
    ctl.querySelector("#go").onclick = function () {
      if (run) return;
      var D = Math.min(TRACK - 0.1, 0.55 * WV[wind] * AV[sail] * (1 + K.rnd(-0.04, 0.04)));
      run = { D: D, T: 1 + D * 0.7, t: 0, w: wind, s: sail }; s = 0;
    };
    table();
    function x0() { return S.W * 0.16; } function x1() { return S.W - 24; }
    function px(m) { return x0() + (x1() - x0()) * m / TRACK; }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, gy = H * 0.74, wv = WV[wind];
      if (run) {
        run.t += dt; var u = Math.min(1, run.t / run.T); s = run.D * (1 - Math.pow(1 - u, 2));
        if (u >= 1) { trials.push({ w: run.w, s: run.s, d: run.D }); E.speak(f2(run.D) + t(" metres", " متر")); run = null; table(); check(); }
      }
      blade += dt * wv * 9;
      c.clearRect(0, 0, W, H);
      // floor + tape measure
      c.fillStyle = C.line; c.fillRect(0, gy + 14, W, 3);
      for (var m = 0; m <= TRACK; m += 0.5) { var mx = px(m); c.fillStyle = C.muted; c.fillRect(mx, gy + 17, 2, m % 1 === 0 ? 12 : 6); if (m % 1 === 0) K.txt(c, n(m) + " " + t("m", "م"), mx, gy + 38, { c: C.muted, s: 11 }); }
      c.strokeStyle = "#22c55e"; c.lineWidth = 2; c.setLineDash([5, 4]); c.beginPath(); c.moveTo(x0(), gy - 70); c.lineTo(x0(), gy + 14); c.stroke(); c.setLineDash([]);
      K.txt(c, t("start", "البداية"), x0(), gy - 78, { c: "#16a34a", s: 11 });
      trials.slice(-6).forEach(function (r) { K.dot(c, px(r.d), gy + 15, 4, "#f97316"); });
      // fan
      var fx = W * 0.06, fy = gy - 30, fr = Math.min(28, H * 0.1);
      c.strokeStyle = C.muted; c.lineWidth = 3; c.beginPath(); c.arc(fx, fy, fr, 0, 7); c.stroke(); c.fillStyle = C.muted; c.fillRect(fx - 4, fy + fr, 8, gy + 14 - fy - fr);
      for (var b = 0; b < 3; b++) { var a = blade + b * 2.094; c.strokeStyle = "#60a5fa"; c.lineWidth = 7; c.lineCap = "round"; c.beginPath(); c.moveTo(fx, fy); c.lineTo(fx + Math.cos(a) * fr * 0.8, fy + Math.sin(a) * fr * 0.8 * 0.35); c.stroke(); }
      // wind particles
      if (Math.random() < wv * 0.6) parts.push({ x: fx + fr * 0.4, y: fy + K.rnd(-fr, fr), v: 150 * wv });
      parts.forEach(function (p) { p.x += p.v * dt; p.v *= Math.exp(-0.9 * dt); });
      parts = parts.filter(function (p) { return p.x < W && p.v > 25; });
      parts.forEach(function (p) { c.strokeStyle = "rgba(96,165,250," + Math.min(0.8, p.v / 300) + ")"; c.lineWidth = 2; c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(p.x - 10, p.y); c.stroke(); });
      // car
      var carX = px(s), cw = Math.min(70, W * 0.12), sh = sail === "none" ? 0 : sail === "small" ? 28 : 50, sw = sail === "none" ? 0 : sail === "small" ? 18 : 30;
      var cs = run ? run.s : sail; sh = cs === "none" ? 0 : cs === "small" ? 28 : 50; sw = cs === "none" ? 0 : cs === "small" ? 18 : 30;
      c.fillStyle = "#f59e0b"; K.rr(c, carX - cw * 0.15, gy - 8, cw, 12, 4); c.fill();
      K.dot(c, carX, gy + 6, 7, "#334155"); K.dot(c, carX + cw * 0.7, gy + 6, 7, "#334155");
      if (sh) { var mastX = carX + cw * 0.35, bulge = run ? 6 : 2; c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(mastX, gy - 8); c.lineTo(mastX, gy - 14 - sh); c.stroke(); c.fillStyle = "#fde68a"; c.strokeStyle = "#d97706"; c.beginPath(); c.moveTo(mastX, gy - 12 - sh); c.quadraticCurveTo(mastX - sw - bulge, gy - 12 - sh / 2, mastX, gy - 12); c.lineTo(mastX - 2, gy - 12 - sh); c.closePath(); c.fill(); c.stroke(); }
      // force arrow on the car while the wind pushes
      var F = WV[run ? run.w : wind] * AV[cs];
      arrow(c, carX + cw * 0.9, gy - 34, carX + cw * 0.9 + 14 + F * 18, gy - 34, "#22c55e", 4);
      K.txt(c, t("push", "دفع"), carX + cw * 0.9 + 10, gy - 48, { c: "#16a34a", s: 11, a: "left" });
      K.txt(c, f2(s) + " " + t("m", "م"), carX + cw * 0.35, gy - 22 - Math.max(sh, 10), { c: C.ink, s: 13 });
    });
  };

  /* ---------------------------------------------------------
     7. p4_rubber - rubber band-powered car
     --------------------------------------------------------- */
  L.p4_rubber = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the car back to stretch the rubber band (0 to 15 cm) and let go. Choose 1, 2 or 3 rubber bands.",
      "اسحب السيارة إلى الخلف لتشد الشريط المطاطي (من ٠ إلى ١٥ سم) ثم اتركها، واختر شريطًا أو اثنين أو ثلاثة."));
    var S = K.make(host, 0.5, 340), bands = 1, stretch = 0, grab = false, run = null, s = 0, trials = [], TRACK = 2.5;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><span class="sw-lbl">🔴</span><div class="seg" id="bn"></div></div><div class="meter rb-out"></div>';
    var out = ctl.querySelector(".rb-out");
    var tick = L._goals(host, [t("Launch at 5 cm, then at 10 cm, and compare.", "أطلق السيارة عند ٥ سم ثم عند ١٠ سم وقارن."), t("Stretch it to 15 cm and launch.", "اشدد الشريط إلى ١٥ سم وأطلق السيارة."),
      t("At 10 cm, compare 1 rubber band with 2 rubber bands.", "عند ١٠ سم، قارن بين شريط واحد وشريطين."), t("Make the car travel more than 2 m.", "اجعل السيارة تقطع أكثر من ٢ م.")], done);
    K.seg(ctl, "#bn", [["1", t("1 band", "شريط واحد")], ["2", t("2 bands", "شريطان")], ["3", t("3 bands", "٣ أشرطة")]], "1", function (v) { bands = Number(v); });
    function bn(b) { return b === 1 ? t("1 band", "شريط واحد") : b === 2 ? t("2 bands", "شريطان") : t("3 bands", "٣ أشرطة"); }
    function table() {
      out.innerHTML = (grab ? "<span>" + t("Stretch: ", "الشد: ") + "<b>" + n(stretch) + " " + t("cm", "سم") + "</b></span>" : "") +
        (trials.length ? trials.slice(-6).map(function (r) { return '<span class="chip' + (r.d > 2 ? " green" : "") + '">' + bn(r.b) + " · " + n(r.st) + " " + t("cm", "سم") + " → <b>" + f2(r.d) + " " + t("m", "م") + "</b></span>"; }).join("") : '<span class="sub">' + t("A stretched rubber band tries to return to its original shape.", "الشريط المطاطي المشدود يحاول العودة إلى شكله الأصلي.") + "</span>");
    }
    function check() {
      var has = function (f) { return trials.some(f); };
      [1, 2, 3].forEach(function (b) { if (has(function (r) { return r.b === b && r.st === 5; }) && has(function (r) { return r.b === b && r.st === 10; })) tick(0); });
      if (has(function (r) { return r.st === 15; })) tick(1);
      if (has(function (r) { return r.st === 10 && r.b === 1; }) && has(function (r) { return r.st === 10 && r.b === 2; })) tick(2);
      if (has(function (r) { return r.d > 2; })) tick(3);
    }
    function g() { var W = S.W, H = S.H, post = W * 0.05, zero = W * 0.24; return { gy: H * 0.7, post: post, zero: zero, cm: (zero - post - 14) / 15, end: W - 24 }; }
    function carFront() { var o = g(); if (run) return o.zero + (o.end - o.zero) * s / TRACK; return o.zero - stretch * o.cm; }
    S.drag({
      down: function (p) { if (run) return false; var o = g(), cx = carFront(); if (p.x > cx - 20 && p.x < cx + 90 && Math.abs(p.y - o.gy) < 50) { grab = true; return true; } return false; },
      move: function (p) { if (!grab) return; var o = g(); stretch = clamp(Math.round((o.zero - p.x + 20) / o.cm), 0, 15); table(); },
      up: function () {
        if (!grab) return; grab = false;
        if (stretch < 1) { stretch = 0; table(); return; }
        var D = Math.min(TRACK - 0.05, 0.06 * stretch * Math.pow(bands, 0.85) * (1 + K.rnd(-0.03, 0.03)));
        run = { D: D, T: 0.8 + D * 0.8, t: 0, b: bands, st: stretch }; s = 0; stretch = 0;
      },
      hover: function (p) { var o = g(), cx = carFront(); return !run && p.x > cx - 20 && p.x < cx + 90 && Math.abs(p.y - o.gy) < 50; }
    });
    table();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, o = g();
      if (run) {
        run.t += dt; var u = Math.min(1, run.t / run.T); s = run.D * (1 - Math.pow(1 - u, 2.2));
        if (u >= 1) { trials.push({ b: run.b, st: run.st, d: run.D }); E.speak(f2(run.D) + t(" metres", " متر")); run = null; s = 0; table(); check(); }
      }
      c.clearRect(0, 0, W, H);
      // launching pad, posts and ruler
      c.fillStyle = "#cbd5e1"; c.fillRect(o.post - 10, o.gy + 10, o.zero - o.post + 60, 6);
      c.fillStyle = C.muted; c.fillRect(o.post - 4, o.gy - 26, 8, 36);
      for (var k = 0; k <= 15; k++) { var rx = o.zero - k * o.cm; c.fillStyle = C.muted; c.fillRect(rx, o.gy + 18, 1.5, k % 5 === 0 ? 10 : 5); if (k % 5 === 0) K.txt(c, n(k), rx, o.gy + 36, { c: C.muted, s: 10 }); }
      K.txt(c, t("cm", "سم"), o.post + 4, o.gy + 36, { c: C.muted, s: 10 });
      // floor and distance scale
      c.fillStyle = C.line; c.fillRect(o.zero, o.gy + 12, W - o.zero, 3);
      for (var m = 0.5; m <= TRACK; m += 0.5) { var mx = o.zero + (o.end - o.zero) * m / TRACK; c.fillStyle = C.line; c.fillRect(mx, o.gy + 15, 2, m % 1 === 0 ? 10 : 5); if (m % 1 === 0) K.txt(c, n(m) + " " + t("m", "م"), mx, o.gy + 36, { c: C.muted, s: 10 }); }
      trials.slice(-6).forEach(function (r) { K.dot(c, o.zero + (o.end - o.zero) * r.d / TRACK, o.gy + 13, 4, "#f97316"); });
      // car
      var cx = carFront(), cw = Math.min(70, W * 0.12);
      c.fillStyle = "#3b82f6"; K.rr(c, cx, o.gy - 10, cw, 14, 4); c.fill();
      K.dot(c, cx + 10, o.gy + 6, 7, "#334155"); K.dot(c, cx + cw - 10, o.gy + 6, 7, "#334155");
      // rubber bands
      if (!run || s < 0.02) {
        for (var bi = 0; bi < bands; bi++) { c.strokeStyle = "#ef4444"; c.lineWidth = 2.5; c.beginPath(); c.moveTo(o.post, o.gy - 20 + bi * 4); c.lineTo(cx + 4, o.gy - 3 + bi * 2); c.stroke(); }
      } else { for (bi = 0; bi < bands; bi++) { c.strokeStyle = "#ef4444"; c.lineWidth = 2.5; c.beginPath(); c.moveTo(o.post, o.gy - 20 + bi * 4); c.quadraticCurveTo(o.post + 30, o.gy - 4, o.post + 6, o.gy + 4); c.stroke(); } }
      // return-force arrow while stretched
      if (stretch > 0) {
        var F = stretch * bands; arrow(c, cx + cw / 2, o.gy - 30, cx + cw / 2 + 10 + F * 2.4, o.gy - 30, "#22c55e", 4);
        K.txt(c, t("power to return", "قوة الارتداد"), cx + cw / 2, o.gy - 46, { c: "#16a34a", s: 11, a: "left" });
        K.txt(c, n(stretch) + " " + t("cm", "سم"), cx + cw / 2, o.gy - 62, { c: C.ink, s: 13, a: "left" });
      }
      if (run) K.txt(c, f2(s) + " " + t("m", "م"), cx + cw / 2, o.gy - 26, { c: C.ink, s: 13 });
    });
  };

  /* ---------------------------------------------------------
     8. p4_soil - which soil lets water through faster?
     --------------------------------------------------------- */
  L.p4_soil = function (host, cfg, done) {
    host.innerHTML = hint(t("Three cut bottles with gauze: desert sand, Nile mud and your own soil. Press Pour to add the same water to each and watch the stopwatch.",
      "ثلاث زجاجات مقطوعة عليها شاش: رمال الصحراء وطمي النيل وتربتك أنت. اضغط «صُبّ» لتضيف الماء نفسه إلى كل زجاجة وراقب ساعة الإيقاف."));
    var S = K.make(host, 0.62, 400), my = 3, time = -1, B = [], drops = [], firstSaid = false, emptyAt = {};
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider("🧪 " + t("Your soil: particle size", "تربتك: حجم الحبيبات"), 1, 10, 1, 3) + '<div class="btn-row"><button type="button" class="btn sm primary" id="pour">💧 ' + t("Pour 200 mL into each", "صُبّ ٢٠٠ مل في كل زجاجة") + '</button></div><div class="meter so-out"></div>';
    var sl = ctl.querySelector("input"), out = ctl.querySelector(".so-out");
    var tick = L._goals(host, [t("Pour the same amount of water into all the bottles.", "صُبّ الكمية نفسها من الماء في كل الزجاجات."), t("Find which soil drips first.", "اكتشف أي تربة يقطر منها الماء أولًا."),
      t("See water still on top of the Nile mud when the sand bottle is empty.", "لاحظ بقاء الماء فوق طمي النيل عندما تفرغ زجاجة الرمل."), t("Make your soil drain faster than desert sand.", "اجعل الماء يمر في تربتك أسرع من رمال الصحراء."),
      t("Make your soil keep water on top, like Nile mud.", "اجعل تربتك تحتفظ بالماء فوقها مثل طمي النيل.")], done);
    function sizeName(v) { return v <= 2 ? t("tiny, like mud", "صغيرة جدًا مثل الطمي") : v <= 4 ? t("small", "صغيرة") : v <= 7 ? t("medium, like sand", "متوسطة مثل الرمل") : t("large, like gravel", "كبيرة مثل الحصى"); }
    function slUpd() { ctl.querySelector(".slv").textContent = n(my) + " · " + sizeName(my); }
    sl.oninput = function () { my = Number(sl.value); slUpd(); if (B.length) B[2].s = my; };
    slUpd();
    function make(s, nm) { return { s: s, nm: nm, w: 0, cup: 0, first: null }; }
    B = [make(6, t("Desert sand", "رمال الصحراء")), make(1, t("Nile mud", "طمي النيل")), make(my, t("Your soil", "تربتك"))];
    function delay(s) { return 3 / Math.pow(s, 1.2); }
    function rate(s) { return 1.4 * s * s; }
    ctl.querySelector("#pour").onclick = function () {
      time = 0; firstSaid = false; emptyAt = {}; drops = [];
      B.forEach(function (b) { b.w = 200; b.cup = 0; b.first = null; }); B[2].s = my; B[2].pourS = my;
      tick(0); E.speak(t("Same water, same time. Go!", "الماء نفسه في الوقت نفسه. ابدأ!"));
    };
    function report() {
      out.innerHTML = "<span>⏱ <b>" + (time < 0 ? n(0) : f1(time)) + " " + t("s", "ث") + "</b></span>" + B.map(function (b) { return "<span>" + b.nm + ": " + (b.first == null ? "…" : t("first drop ", "أول قطرة ") + "<b>" + f1(b.first) + " " + t("s", "ث") + "</b>") + "</span>"; }).join("");
    }
    report();
    var rep = 0;
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      if (time >= 0) {
        time += dt;
        B.forEach(function (b, i) {
          if (b.w > 0 && time > delay(b.s)) {
            if (b.first == null) { b.first = time; if (i === 0 && !firstSaid) { firstSaid = true; tick(1); E.speak(t("The desert sand drips first!", "رمال الصحراء يقطر منها الماء أولًا!")); } }
            var f = Math.min(b.w, rate(b.s) * dt); b.w -= f; b.cup += f * 0.92;
            if (b.w <= 0 && emptyAt[i] == null) emptyAt[i] = time;
          }
        });
        if (B[0].w <= 0 && B[1].w > 0) tick(2);
        if (B[2].pourS > 6 && emptyAt[2] != null && (emptyAt[0] == null || emptyAt[2] < emptyAt[0])) tick(3);
        if (B[2].pourS <= 2 && time > 4 && B[2].w > 100) tick(4);
        rep += dt; if (rep > 0.2) { rep = 0; report(); }
      }
      c.clearRect(0, 0, W, H);
      var bw = Math.min(W * 0.22, 120), top = H * 0.1, soilT = H * 0.24, soilB = H * 0.52, neck = H * 0.6, cupT = H * 0.68, cupB = H * 0.94;
      B.forEach(function (b, i) {
        var cx = W * (0.18 + i * 0.32), x0 = cx - bw / 2, wet = time < 0 ? 0 : clamp(time / delay(b.s), 0, 1), r = 1.4 + b.s * 1.1, gap = 1 + b.s * 0.55;
        // bottle outline (upside down)
        c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.moveTo(x0, top); c.lineTo(x0, soilB + 6); c.lineTo(cx - 10, neck); c.lineTo(cx + 10, neck); c.lineTo(x0 + bw, soilB + 6); c.lineTo(x0 + bw, top); c.stroke();
        // soil particles
        c.save(); c.beginPath(); c.rect(x0 + 2, soilT, bw - 4, soilB - soilT); c.clip();
        if (wet > 0) { c.fillStyle = "rgba(59,130,246,.28)"; c.fillRect(x0, soilT, bw, (soilB - soilT) * wet); }
        var col = i === 0 ? "#fbbf24" : i === 1 ? "#78350f" : "#a16207", step = 2 * r + gap, row = 0;
        for (var y = soilT + r; y < soilB + r; y += step * 0.88, row++) for (var x = x0 + r + (row % 2) * step / 2; x < x0 + bw; x += step) K.dot(c, x, y, r, col);
        c.restore();
        // gauze
        c.strokeStyle = "#e5e7eb"; c.lineWidth = 3; c.setLineDash([3, 2]); c.beginPath(); c.moveTo(x0, soilB + 4); c.lineTo(x0 + bw, soilB + 4); c.stroke(); c.setLineDash([]);
        // water sitting on top
        var wh = b.w / 200 * (soilT - top - 4);
        if (wh > 0.5) { c.fillStyle = "rgba(59,130,246,.55)"; c.fillRect(x0 + 2, soilT - wh, bw - 4, wh); }
        // drips
        if (time >= 0 && b.w > 0 && time > delay(b.s) && Math.random() < Math.min(1, rate(b.s) / 25)) drops.push({ x: cx + K.rnd(-3, 3), y: neck, v: 0 });
        // cup
        c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.moveTo(cx - bw * 0.35, cupT); c.lineTo(cx - bw * 0.3, cupB); c.lineTo(cx + bw * 0.3, cupB); c.lineTo(cx + bw * 0.35, cupT); c.stroke();
        var ch = b.cup / 200 * (cupB - cupT - 4); c.fillStyle = "rgba(59,130,246,.5)"; c.fillRect(cx - bw * 0.3 + 1, cupB - ch, bw * 0.6 - 2, ch);
        K.txt(c, b.nm, cx, top - 12, { c: C.ink, s: 12 });
        K.txt(c, n(Math.round(b.cup)) + " " + t("mL", "مل"), cx, cupB + 12, { c: C.muted, s: 11 });
        if (time > 0 && b.w > 0 && i === 1 && B[0].w <= 0) K.txt(c, t("water stays on top", "الماء يبقى فوقها"), cx, soilT - wh - 10, { c: "#2563eb", s: 11 });
      });
      drops.forEach(function (d) { d.v += 600 * dt; d.y += d.v * dt; }); drops = drops.filter(function (d) { return d.y < cupB - 4; });
      drops.forEach(function (d) { K.dot(c, d.x, d.y, 2.5, "#3b82f6"); });
    });
  };

  /* ---------------------------------------------------------
     9. p4_statue - moving a giant stone statue
     --------------------------------------------------------- */
  L.p4_statue = function (host, cfg, done) {
    host.innerHTML = hint(t("Ancient Egyptians moved giant statues on a sled. Choose how many people pull, decide whether to sprinkle water on the sand, then press Pull.",
      "نقل المصريون القدماء التماثيل الضخمة على زلاجة. اختر عدد من يشدون، وقرّر هل ترش الماء على الرمال، ثم اضغط «اشدّوا»."));
    var S = K.make(host, 0.5, 340), ppl = 5, wet = false, act = null, sx = 0, shake = 0, msg = "";
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider("👥 " + t("People pulling", "عدد من يشدون"), 1, 40, 1, 5) + '<div class="btn-row"><button type="button" class="btn sm tg" id="wt">💧 ' + t("Sprinkle water on the sand", "رش الماء على الرمال") + '</button><button type="button" class="btn sm primary" id="pl">💪 ' + t("Pull!", "اشدّوا!") + '</button></div><div class="meter st-out"></div>';
    var sl = ctl.querySelector("input"), out = ctl.querySelector(".st-out");
    var tick = L._goals(host, [t("Try to pull the statue with only a few people.", "حاول شد التمثال بعدد قليل من الناس."), t("Combine forces: move the statue on dry sand.", "اجمع القوى: حرّك التمثال على الرمال الجافة."),
      t("Make the sand slippery and move it with 15 people or fewer.", "اجعل الرمال زلقة وحرّكه بـ ١٥ شخصًا أو أقل.")], done);
    function need() { return wet ? 15 : 30; }
    function upd() {
      ctl.querySelector(".slv").textContent = n(ppl);
      out.innerHTML = "<span>" + t("Combined force: ", "القوة المجتمعة: ") + "<b>" + n(ppl) + "</b></span><span>" + t("Force needed: ", "القوة اللازمة: ") + "<b>" + n(need()) + "</b></span><span class=\"sub\">" + (msg || (wet ? t("Wet sand is slippery, so less force is needed.", "الرمال المبتلة زلقة، فنحتاج قوة أقل.") : t("Each person adds a small force in the same direction.", "كل شخص يضيف قوة صغيرة في الاتجاه نفسه."))) + "</span>";
    }
    sl.oninput = function () { ppl = Number(sl.value); msg = ""; upd(); };
    ctl.querySelector("#wt").onclick = function () { wet = !wet; this.classList.toggle("on", wet); msg = ""; upd(); };
    ctl.querySelector("#pl").onclick = function () {
      if (act) return;
      if (sx > 0.3) sx = 0;
      if (ppl >= need()) { act = { t: 0, ok: true, from: sx }; msg = t("It moves! Many small forces added up to one big force.", "إنه يتحرك! القوى الصغيرة الكثيرة اجتمعت في قوة كبيرة."); E.speak(msg); if (!wet) tick(1); else if (ppl <= 15) tick(2); }
      else { act = { t: 0, ok: false }; shake = 0.8; msg = t("Not enough force: ", "القوة غير كافية: ") + n(ppl) + " / " + n(need()); E.speak(t("It does not move. We need more force.", "لا يتحرك. نحتاج قوة أكبر.")); tick(0); }
      upd();
    };
    upd();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, gy = H * 0.74, tt = performance.now() / 1000;
      if (act) { act.t += dt; if (act.ok) sx = act.from + Math.min(1, act.t / 2) * 0.12; if (act.t > (act.ok ? 2 : 0.8)) act = null; }
      shake = Math.max(0, shake - dt);
      c.clearRect(0, 0, W, H);
      c.fillStyle = "rgba(251,191,36,.35)"; c.fillRect(0, gy, W, H - gy);
      var sledX = W * (0.06 + sx * 0.8) + (shake > 0 ? Math.sin(tt * 60) * 2 : 0), sw = Math.min(90, W * 0.16);
      if (wet) { c.fillStyle = "rgba(120,53,15,.35)"; c.fillRect(sledX + sw, gy, W * 0.3, 8); }
      // sled and statue
      c.fillStyle = "#92400e"; K.rr(c, sledX, gy - 10, sw, 10, 3); c.fill();
      c.fillStyle = "#d6d3d1"; K.rr(c, sledX + sw * 0.15, gy - 10 - sw * 1.1, sw * 0.7, sw * 1.1, 6); c.fill();
      c.fillStyle = "#a8a29e"; K.rr(c, sledX + sw * 0.28, gy - 10 - sw * 1.35, sw * 0.44, sw * 0.32, 8); c.fill();
      c.fillStyle = "#facc15"; c.fillRect(sledX + sw * 0.24, gy - 10 - sw * 1.1, sw * 0.52, 5);
      // water carrier
      if (wet) { emoji(c, "🧑", sledX + sw + 16, gy - 18, 24); for (var d = 0; d < 4; d++) K.dot(c, sledX + sw + 26 + d * 4, gy - 8 + ((tt * 80 + d * 9) % 14), 2, "#3b82f6"); }
      // people pulling in rows of 10
      var px0 = sledX + sw + 50, spacing = Math.max(9, Math.min(16, (W - px0 - 20) / 10)), rows = Math.ceil(ppl / 10);
      c.strokeStyle = "#a16207"; c.lineWidth = 2;
      for (var r = 0; r < rows; r++) { var ry = gy - 6 - r * 15; c.beginPath(); c.moveTo(sledX + sw, gy - 6); c.lineTo(px0 + 9 * spacing, ry); c.stroke(); }
      for (var i = 0; i < ppl; i++) {
        var col = i % 10, row = Math.floor(i / 10), x = px0 + col * spacing, y = gy - 6 - row * 15, lean = act ? 0.35 : 0.15, step = act && act.ok ? Math.sin(tt * 10 + i) * 3 : 0;
        c.strokeStyle = C.ink; c.lineWidth = 1.6; c.beginPath(); c.moveTo(x, y + 4); c.lineTo(x + lean * 10, y - 8); c.moveTo(x, y + 4); c.lineTo(x - 3 + step, y + 10); c.moveTo(x, y + 4); c.lineTo(x + 3 - step, y + 10); c.stroke();
        K.dot(c, x + lean * 13, y - 11, 2.6, C.ink);
      }
      // combined force arrow vs needed force
      var scale = Math.min(6, (W * 0.5) / 40), ay = H * 0.16;
      arrow(c, W * 0.1, ay, W * 0.1 + 10 + ppl * scale, ay, ppl >= need() ? "#22c55e" : "#f59e0b", 6);
      K.txt(c, t("combined force", "القوة المجتمعة") + " " + n(ppl), W * 0.1, ay - 16, { c: C.ink, s: 12, a: "left" });
      c.strokeStyle = "#ef4444"; c.lineWidth = 2; c.setLineDash([5, 4]); c.beginPath(); c.moveTo(W * 0.1 + 10 + need() * scale, ay - 14); c.lineTo(W * 0.1 + 10 + need() * scale, ay + 14); c.stroke(); c.setLineDash([]);
      K.txt(c, t("needed", "اللازم") + " " + n(need()), W * 0.1 + 10 + need() * scale, ay + 26, { c: "#ef4444", s: 11 });
    });
  };

  /* ---------- part names ---------- */
  var NM = { p4_habitat: ["Habitat explorer", "مستكشف المواطن"], p4_lifecycle: ["Butterfly life cycle simulation", "محاكاة دورة حياة الفراشة"], p4_plant: ["Plant growth simulation", "محاكاة نمو النبات"],
    p4_light: ["Mirror, lens and shadow simulation", "محاكاة المرآة والعدسة والظل"], p4_sound: ["Vibration and string telephone simulation", "محاكاة الاهتزاز وتليفون الخيط"],
    p4_wind: ["Wind-powered car simulation", "محاكاة السيارة الهوائية"], p4_rubber: ["Rubber band car simulation", "محاكاة سيارة المطاط"],
    p4_soil: ["Soil and water test", "اختبار التربة والماء"], p4_statue: ["Moving a giant statue", "نقل تمثال ضخم"] };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();
