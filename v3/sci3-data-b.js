/* EduZone Learn v3 - Science, Egyptian Prep 3, Term 1 - Units 3 and 4.
   Unit 3 Variation of Traits in Living Organisms, Unit 4 Dating Planet Earth.
   Same lesson shape as sci3-data-a.js. */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCI3 = E.SCI3 || { units: [] };

  E.SCI3.units.push({
    id: "u3", num: 3, icon: "🧬", color: "green",
    title: { en: "Variation of Traits in Living Organisms", ar: "تنوع الصفات في الكائنات الحية" },
    lessons: [
      {
        id: "u3l1", icon: "🫛", page: 65,
        title: { en: "Heredity and Variation of Traits", ar: "الوراثة وتنوع الصفات" },
        idea: {
          official: {
            en: ["Traits pass from parents to offspring through genes, which are segments of DNA on the chromosomes.",
              "Each trait has two alleles, one from each parent. A dominant allele hides a recessive allele.",
              "The genotype is the pair of alleles, such as Yy. The phenotype is the trait we see, such as yellow seeds.",
              "Mendel's first law: pure yellow × pure green gives all yellow in the first generation, and crossing those gives 3 yellow : 1 green.",
              "Mendel's second law: two traits are inherited independently, giving 9 : 3 : 3 : 1. Recessive diseases such as thalassemia are more likely in marriages between relatives, so premarital tests help."],
            ar: ["تنتقل الصفات من الآباء إلى الأبناء عن طريق الجينات، وهي أجزاء من الحمض النووي DNA على الكروموسومات.",
              "لكل صفة أليلان، واحد من كل أب، والأليل السائد يخفي الأليل المتنحي.",
              "النمط الجيني هو زوج الأليلات مثل Yy، والنمط الظاهري هو الصفة التي نراها مثل البذور الصفراء.",
              "قانون مندل الأول: تلقيح أصفر نقي × أخضر نقي يعطي الجيل الأول كله أصفر، وتلقيح أفراده معًا يعطي ٣ أصفر : ١ أخضر.",
              "قانون مندل الثاني: الصفتان تورثان مستقلتين فتظهر النسبة ٩ : ٣ : ٣ : ١، والأمراض المتنحية مثل الثلاسيميا تزيد في زواج الأقارب، لذلك يفيد فحص ما قبل الزواج."]
          },
          story: {
            en: ["For every trait, a child gets one recipe card from mum and one from dad.",
              "If one card shouts 'yellow', the dominant allele, and the other whispers 'green', we hear yellow.",
              "Green shows only when both cards whisper green: yy.",
              "Mendel planted thousands of peas in his monastery garden and counted about three yellow for every green.",
              "Two healthy cousins can each carry a hidden whisper for the same disease. A premarital test hears it before it reaches the children."],
            ar: ["لكل صفة يحصل الطفل على بطاقة وصفة من الأم وبطاقة من الأب.",
              "إذا صاحت بطاقة «أصفر» وهو الأليل السائد، وهمست الأخرى «أخضر»، فإننا نسمع الأصفر.",
              "لا يظهر الأخضر إلا إذا همست البطاقتان بالأخضر: yy.",
              "زرع مندل آلاف نباتات البازلاء في حديقته وعدّها، فوجد نحو ثلاث صفراء مقابل كل خضراء.",
              "قد يحمل ابنا عم سليمان همسًا خفيًا للمرض نفسه، وفحص ما قبل الزواج يسمعه قبل أن يصل إلى الأبناء."]
          }
        },
        words: [
          ["Gene", "الجين", "A segment of DNA that carries the information for a trait.", "جزء من الحمض النووي يحمل معلومات صفة."],
          ["Allele", "الأليل", "One version of a gene. We have two for each trait.", "صورة من صور الجين، ولكل صفة أليلان."],
          ["Dominant / Recessive", "سائد / متنحي", "The dominant allele hides the recessive one; recessive shows only with two copies.", "الأليل السائد يخفي المتنحي، والمتنحي لا يظهر إلا إذا وُجد منه اثنان."],
          ["Genotype", "النمط الجيني", "The pair of alleles, e.g. YY, Yy or yy.", "زوج الأليلات مثل YY أو Yy أو yy."],
          ["Phenotype", "النمط الظاهري", "The trait you can see, e.g. yellow or green seeds.", "الصفة التي تظهر مثل البذور الصفراء أو الخضراء."],
          ["Carrier", "الحامل للمرض", "Looks healthy but has one disease allele.", "سليم ظاهريًا لكنه يحمل أليلًا واحدًا للمرض."]
        ],
        lab: { type: "peas" },
        quiz: [
          { q: [eq("Yy × Yy") + ". What fraction of the offspring is green (yy)?", eq("Yy × Yy") + ". ما نسبة الأبناء الخضراء (yy)؟"],
            c: [["¼", "¼"], ["½", "½"], ["¾", "¾"], ["0", "٠"]],
            off: ["The Punnett square gives YY, Yy, Yy, yy. Only one box of four is yy, so ¼ are green.", "مربع بانيت يعطي YY و Yy و Yy و yy، ومربع واحد فقط من أربعة هو yy، إذن ¼ خضراء."],
            sto: ["Out of four children, only one gets the whisper-green card from both parents.", "من بين أربعة أبناء، واحد فقط يأخذ بطاقة الأخضر الهامسة من الأبوين معًا."] },
          { q: [eq("YY × yy") + " gives a first generation that is…", eq("YY × yy") + " يعطي جيلًا أول…"],
            c: [["all Yy, yellow", "كله Yy أصفر"], ["all yy, green", "كله yy أخضر"], ["half yellow, half green", "نصفه أصفر ونصفه أخضر"], ["all YY", "كله YY"]],
            off: ["Every child gets Y from one parent and y from the other, so all are Yy and show the dominant yellow.", "كل ابن يأخذ Y من أب و y من الآخر، فالجميع Yy ويظهر الأصفر السائد."],
            sto: ["Every child gets one shouting card and one whispering card, so every child shouts yellow.", "كل طفل يأخذ بطاقة تصيح وبطاقة تهمس، فيصيح الجميع بالأصفر."] },
          { q: ["The trait we can see is called the…", "الصفة التي نراها تسمى…"],
            c: [["phenotype", "النمط الظاهري"], ["genotype", "النمط الجيني"], ["allele", "الأليل"], ["gamete", "الجاميت"]],
            off: ["The phenotype is the visible trait. The genotype is the pair of alleles behind it.", "النمط الظاهري هو الصفة الظاهرة، والنمط الجيني هو زوج الأليلات المسؤول عنها."],
            sto: ["You see the yellow pea (phenotype), but the recipe cards inside (genotype) are hidden.", "أنت ترى البازلاء الصفراء وهي النمط الظاهري، أما بطاقات الوصفة بداخلها فمخفية وهي النمط الجيني."] },
          { q: ["Two carriers " + eq("Rr × Rr") + ". What is the chance a child has the disease (rr)?", "حاملان للمرض " + eq("Rr × Rr") + ". ما احتمال إصابة الطفل (rr)؟"],
            c: [["25%", "٢٥٪"], ["50%", "٥٠٪"], ["75%", "٧٥٪"], ["0%", "٠٪"]],
            off: ["The square gives RR, Rr, Rr, rr: 25% normal, 50% carriers and 25% affected.", "المربع يعطي RR و Rr و Rr و rr: ٢٥٪ سليم، و٥٠٪ حامل، و٢٥٪ مصاب."],
            sto: ["Both parents carry a hidden whisper; one child in four may get both whispers.", "كل من الأبوين يحمل همسًا خفيًا، وقد يأخذ طفل من كل أربعة الهمسين معًا."] },
          { q: ["In the second generation of a two-trait cross, the phenotype ratio is…", "في الجيل الثاني لتلقيح بصفتين تكون نسبة الأنماط الظاهرية…"],
            c: [["9 : 3 : 3 : 1", "٩ : ٣ : ٣ : ١"], ["3 : 1", "٣ : ١"], ["1 : 2 : 1", "١ : ٢ : ١"], ["1 : 1", "١ : ١"]],
            off: ["Mendel's second law: two traits are inherited independently, giving 16 combinations and the ratio 9 : 3 : 3 : 1.", "قانون مندل الثاني: تورث الصفتان مستقلتين فتظهر ١٦ تركيبة بنسبة ٩ : ٣ : ٣ : ١."],
            sto: ["Two separate card games happen at once, so the results mix into 16 boxes.", "تحدث لعبتا بطاقات منفصلتان في الوقت نفسه، فتختلط النتائج في ١٦ مربعًا."] },
          { q: ["How many alleles of one gene does a gamete carry?", "كم أليلًا لجين واحد يحمل الجاميت؟"],
            c: [["One", "واحد"], ["Two", "اثنان"], ["Four", "أربعة"], ["None", "لا شيء"]],
            off: ["Gametes are made by meiosis and carry one allele of each gene. Fertilisation brings the number back to two.", "الجاميتات تتكون بالانقسام الميوزي وتحمل أليلًا واحدًا لكل جين، والإخصاب يعيد العدد إلى اثنين."],
            sto: ["Each parent sends just one card in the envelope; the child ends up with a pair.", "كل أب يرسل بطاقة واحدة فقط في الظرف، فيحصل الطفل على زوج."] }
        ]
      },
      {
        id: "u3l2", icon: "🦋", page: 75,
        title: { en: "Natural Selection and Artificial Selection", ar: "الانتخاب الطبيعي والانتخاب الصناعي" },
        idea: {
          official: {
            en: ["In good conditions a population grows quickly, then slows down and settles at the carrying capacity of the environment.",
              "Environmental resistance, such as limited food, competition, disease and predators, stops endless growth.",
              "Natural selection: individuals whose traits suit the environment survive and reproduce more, so those traits become common over generations.",
              "The environment does not create new traits; it selects among traits that already exist, as with light and dark peppered moths.",
              "Artificial selection: humans choose parents with useful traits, such as cows that give a lot of milk. It is faster but can reduce genetic variation."],
            ar: ["في الظروف المناسبة يزداد عدد الجماعة بسرعة، ثم يتباطأ ويستقر عند السعة التحملية للبيئة.",
              "المقاومة البيئية مثل قلة الغذاء والتنافس والأمراض والمفترسات تمنع الزيادة بلا حدود.",
              "الانتخاب الطبيعي: الأفراد ذوو الصفات المناسبة للبيئة يعيشون ويتكاثرون أكثر، فتنتشر صفاتهم عبر الأجيال.",
              "البيئة لا تخلق صفات جديدة، بل تختار من الصفات الموجودة، كما في فراشات العثة الفاتحة والداكنة.",
              "الانتخاب الصناعي: الإنسان يختار آباء بصفات مفيدة مثل الأبقار غزيرة اللبن، وهو أسرع لكنه قد يقلل التنوع الوراثي."]
          },
          story: {
            en: ["In England, peppered moths rest on tree trunks while birds hunt them.",
              "Before factories, the trunks were pale with lichen, so light moths were hidden and dark moths were eaten.",
              "Then factory soot darkened the trunks. Now the dark moths were hidden, survived and had more babies.",
              "After many generations most moths were dark. Nature chose them; nobody painted them.",
              "A farmer in Egypt keeps calves only from his best milk cows. That choice is artificial selection."],
            ar: ["في إنجلترا تقف فراشات العثة على جذوع الأشجار بينما تصطادها الطيور.",
              "قبل المصانع كانت الجذوع فاتحة بالأشنات، فاختبأت الفراشات الفاتحة وأُكلت الداكنة.",
              "ثم سوّد سناج المصانع الجذوع، فصارت الداكنة مختبئة، فعاشت وأنجبت أكثر.",
              "بعد أجيال كثيرة أصبحت معظم الفراشات داكنة؛ الطبيعة اختارتها ولم يلوّنها أحد.",
              "مزارع في مصر يحتفظ بالعجول من أفضل أبقاره في إنتاج اللبن فقط، وهذا الاختيار انتخاب صناعي."]
          }
        },
        words: [
          ["Carrying capacity", "السعة التحملية", "The largest population an environment can support.", "أكبر عدد من الأفراد تستطيع البيئة إعالته."],
          ["Environmental resistance", "المقاومة البيئية", "Factors such as food shortage, competition, disease and predators.", "عوامل مثل نقص الغذاء والتنافس والأمراض والمفترسات."],
          ["Natural selection", "الانتخاب الطبيعي", "Individuals suited to the environment survive and reproduce more.", "الأفراد الملائمون للبيئة يعيشون ويتكاثرون أكثر."],
          ["Artificial selection", "الانتخاب الصناعي", "Humans breed living things for traits they want.", "الإنسان يربّي الكائنات للحصول على صفات يريدها."],
          ["Gene bank", "بنك الجينات", "A modern store of seeds, cells and gametes to preserve traits.", "مخزن حديث للبذور والخلايا والجاميتات للحفاظ على الصفات."]
        ],
        lab: { type: "selection" },
        quiz: [
          { q: ["After factory soot darkened the trees, dark moths increased because…", "بعد أن سوّد سناج المصانع الأشجار زادت الفراشات الداكنة لأنها…"],
            c: [["they were hidden from birds, survived and reproduced", "اختبأت من الطيور فعاشت وتكاثرت"], ["the soot painted the moths", "السناج لوّن الفراشات"], ["light moths turned dark", "الفراشات الفاتحة تحولت إلى داكنة"], ["birds preferred dark moths", "الطيور فضّلت الداكنة"]],
            off: ["Natural selection: on dark trunks dark moths were camouflaged, so more of them survived to pass on the dark trait.", "الانتخاب الطبيعي: على الجذوع الداكنة كانت الفراشات الداكنة مموّهة، فعاش منها عدد أكبر ونقلت الصفة الداكنة."],
            sto: ["The birds simply could not see the dark moths any more, so those moths had the most babies.", "الطيور لم تعد ترى الفراشات الداكنة، فكانت هي الأكثر إنجابًا."] },
          { q: ["Breeding hens that lay many eggs is an example of…", "تربية دجاج يضع بيضًا كثيرًا مثال على…"],
            c: [["artificial selection", "الانتخاب الصناعي"], ["natural selection", "الانتخاب الطبيعي"], ["mass extinction", "الانقراض الجماعي"], ["fossilisation", "التحجر"]],
            off: ["Humans chose the parents for a trait they want, so it is artificial selection.", "الإنسان اختار الآباء لصفة يريدها، فهو انتخاب صناعي."],
            sto: ["The farmer, not nature, decides which hens have chicks.", "المزارع وليس الطبيعة هو من يقرر أي دجاجة تُنجب."] },
          { q: ["The largest population an environment can support is the…", "أكبر عدد من الأفراد تستطيع البيئة إعالته هو…"],
            c: [["carrying capacity", "السعة التحملية"], ["lag phase", "مرحلة التمهيد"], ["mutation", "الطفرة"], ["gene bank", "بنك الجينات"]],
            off: ["Growth slows and levels off at the carrying capacity; if the population goes above it, it falls back.", "يتباطأ النمو ويستقر عند السعة التحملية، وإذا تجاوزتها الجماعة يقل عددها."],
            sto: ["A classroom has only so many seats; once they are full, no more pupils fit.", "الفصل فيه عدد محدد من المقاعد، وإذا امتلأت لا يتسع لتلاميذ آخرين."] },
          { q: ["Which is an example of environmental resistance?", "أي مما يلي مثال على المقاومة البيئية؟"],
            c: [["A shortage of food", "نقص الغذاء"], ["Plenty of space", "وفرة المكان"], ["No predators", "عدم وجود مفترسات"], ["An ideal temperature", "درجة حرارة مثالية"]],
            off: ["Food shortage, competition, disease and predators all limit population growth.", "نقص الغذاء والتنافس والأمراض والمفترسات كلها تحد من زيادة الجماعة."],
            sto: ["When the lunch runs out, the party cannot keep getting bigger.", "عندما ينفد الطعام لا يمكن أن تستمر الحفلة في الكبر."] },
          { q: ["Which statement is correct?", "أي عبارة صحيحة؟"],
            c: [["The environment selects traits that already exist", "البيئة تختار صفات موجودة بالفعل"], ["The environment creates new traits when needed", "البيئة تخلق صفات جديدة عند الحاجة"], ["Natural selection is faster than artificial selection", "الانتخاب الطبيعي أسرع من الصناعي"], ["Artificial selection always increases variation", "الانتخاب الصناعي يزيد التنوع دائمًا"]],
            off: ["Natural selection acts on variation that is already there; it does not create new traits.", "الانتخاب الطبيعي يعمل على التنوع الموجود ولا يخلق صفات جديدة."],
            sto: ["Dark moths were already there before the soot; the soot just helped them win.", "الفراشات الداكنة كانت موجودة قبل السناج، والسناج ساعدها فقط على الفوز."] },
          { q: ["A modern way to preserve the traits of plants and animals is…", "من الطرق الحديثة للحفاظ على صفات النباتات والحيوانات…"],
            c: [["gene banks", "بنوك الجينات"], ["burning rice straw", "حرق قش الأرز"], ["catalytic converters", "المحولات الحفزية"], ["cigarette filters", "فلاتر السجائر"]],
            off: ["Modern methods include gene banks, storing gametes and tissue culture.", "من الطرق الحديثة بنوك الجينات وتخزين الجاميتات وزراعة الأنسجة."],
            sto: ["A gene bank is a freezer library where seeds wait safely for the future.", "بنك الجينات مكتبة مجمدة تنتظر فيها البذور بأمان للمستقبل."] }
        ]
      }
    ]
  });

  E.SCI3.units.push({
    id: "u4", num: 4, icon: "🦴", color: "orange",
    title: { en: "Dating Planet Earth", ar: "تأريخ كوكب الأرض" },
    lessons: [
      {
        id: "u4l1", icon: "🐚", page: 85,
        title: { en: "The Fossil Record", ar: "السجل الحفري" },
        idea: {
          official: {
            en: ["Fossils are remains or traces of past living things, preserved in sedimentary rock, ice, amber or natural asphalt.",
              "The fossil record is all the fossils found so far. The rock record is all the rock layers of the Earth's crust.",
              "There are four types: body fossils, trace fossils, molds and casts, and petrified fossils.",
              "Transitional fossils, like Archaeopteryx, share traits of two groups. Index fossils, like trilobites and ammonites, lived for a short time over a wide area.",
              "Comparative anatomy: homologous structures have the same basic plan but different jobs, like a human arm, a bat wing and a whale flipper. Mass extinction is when many species die out in a short time."],
            ar: ["الحفريات بقايا أو آثار كائنات عاشت في الماضي، حُفظت في الصخور الرسوبية أو الجليد أو الكهرمان أو القار الطبيعي.",
              "السجل الحفري هو كل الحفريات المكتشفة حتى الآن، والسجل الصخري هو كل طبقات صخور القشرة الأرضية.",
              "للحفريات أربعة أنواع: حفريات الجسم، وحفريات الآثار، والقوالب والنسخ، والحفريات المتحجرة.",
              "الحفريات الانتقالية مثل الأركيوبتركس تجمع صفات مجموعتين، والحفريات المرشدة مثل التريلوبيت والأمونيت عاشت فترة قصيرة وانتشرت في مساحة واسعة.",
              "التشريح المقارن: التراكيب المتماثلة لها البناء الأساسي نفسه ووظائف مختلفة، مثل ذراع الإنسان وجناح الخفاش وزعنفة الحوت، والانقراض الجماعي هو موت أنواع كثيرة في وقت قصير."]
          },
          story: {
            en: ["Imagine the Earth keeping a diary in stone. Every fossil is one page.",
              "A dinosaur footprint in mud is a trace page. It shows how the animal walked, not its body.",
              "A shell pressed into mud leaves a mold. When minerals fill the gap, you get a cast, like jelly in a mould.",
              "In Cairo's Petrified Forest, minerals slowly replaced the wood until the trees turned to stone.",
              "Archaeopteryx is a page halfway between two chapters: teeth and a bony tail like a reptile, but feathers and wings like a bird."],
            ar: ["تخيّل أن الأرض تكتب مذكراتها على الحجر، وكل حفرية صفحة منها.",
              "أثر قدم ديناصور في الطين صفحة آثار؛ تخبرنا كيف كان يمشي لا شكل جسمه.",
              "صدفة انضغطت في الطين تترك قالبًا، وعندما تملأ المعادن الفراغ نحصل على نسخة، مثل الجيلي في القالب.",
              "في الغابة المتحجرة بالقاهرة حلّت المعادن ببطء محل الخشب حتى تحولت الأشجار إلى حجر.",
              "الأركيوبتركس صفحة في منتصف فصلين: أسنان وذيل عظمي مثل الزواحف، وريش وأجنحة مثل الطيور."]
          }
        },
        words: [
          ["Fossil", "الحفرية", "Remains or traces of a living thing from the past.", "بقايا أو آثار كائن حي عاش في الماضي."],
          ["Fossil record", "السجل الحفري", "All the fossils discovered so far.", "كل الحفريات المكتشفة حتى الآن."],
          ["Index fossil", "الحفرية المرشدة", "From a species that lived a short time over a wide area; used to match rock layers.", "لكائن عاش فترة قصيرة وانتشر في مساحة واسعة، وتستخدم لمطابقة الطبقات."],
          ["Transitional fossil", "الحفرية الانتقالية", "Shows traits of two groups, e.g. Archaeopteryx.", "تجمع صفات مجموعتين مثل الأركيوبتركس."],
          ["Homologous structures", "التراكيب المتماثلة", "Same basic structure, different function: arm, bat wing, whale flipper.", "بناء أساسي واحد ووظائف مختلفة: الذراع وجناح الخفاش وزعنفة الحوت."],
          ["Mass extinction", "الانقراض الجماعي", "Many species dying out in a relatively short time.", "موت أنواع كثيرة في وقت قصير نسبيًا."]
        ],
        lab: { parts: [{ type: "dig" }, {
          type: "sort",
          prompt: ["Sort each find into its fossil type. Tap a find, then tap the type.", "صنّف كل اكتشاف حسب نوع الحفرية: اضغط على الاكتشاف ثم على النوع."],
          bins: [["body", "🦴", "Body fossil", "حفرية جسم"], ["trace", "👣", "Trace fossil", "حفرية آثار"], ["mold", "🐚", "Mold or cast", "قالب أو نسخة"], ["pet", "🪵", "Petrified fossil", "حفرية متحجرة"]],
          items: [
            [["Mammoth frozen in ice", "ماموث متجمد في الجليد"], "body"], [["Insect trapped in amber", "حشرة محبوسة في الكهرمان"], "body"], [["Dinosaur teeth and bones", "أسنان وعظام ديناصور"], "body"],
            [["Dinosaur footprints", "آثار أقدام ديناصور"], "trace"], [["An animal's burrow", "جحر حيوان"], "trace"], [["Fossilised dung", "روث متحجر"], "trace"],
            [["Shell shape pressed in rock", "شكل صدفة منطبع في الصخر"], "mold"], [["Ammonite shape filled with minerals", "شكل أمونيت ممتلئ بالمعادن"], "mold"],
            [["Trees of the Petrified Forest, Cairo", "أشجار الغابة المتحجرة بالقاهرة"], "pet"]
          ]
        }] },
        quiz: [
          { q: ["Dinosaur footprints are an example of…", "آثار أقدام الديناصورات مثال على…"],
            c: [["trace fossils", "حفريات الآثار"], ["body fossils", "حفريات الجسم"], ["petrified fossils", "الحفريات المتحجرة"], ["casts", "النسخ"]],
            off: ["Trace fossils record activity such as footprints, burrows and dung, not the body itself.", "حفريات الآثار تسجل نشاط الكائن مثل آثار الأقدام والجحور والروث، لا جسمه نفسه."],
            sto: ["The dinosaur walked away long ago, but its footsteps stayed in the stone diary.", "رحل الديناصور منذ زمن بعيد، لكن خطواته بقيت في مذكرات الحجر."] },
          { q: ["The Petrified Forest in Cairo formed when…", "تكوّنت الغابة المتحجرة بالقاهرة عندما…"],
            c: [["minerals replaced the wood", "حلّت المعادن محل الخشب"], ["trees froze in ice", "تجمدت الأشجار في الجليد"], ["trees were trapped in amber", "حُبست الأشجار في الكهرمان"], ["animals left footprints", "تركت الحيوانات آثار أقدامها"]],
            off: ["In petrified fossils, minerals such as silica slowly replace the organic matter, keeping the shape.", "في الحفريات المتحجرة تحل معادن مثل السيليكا ببطء محل المادة العضوية وتحتفظ بالشكل."],
            sto: ["Drop by drop, mineral water swapped the wood for stone, like building a statue grain by grain.", "قطرة بعد قطرة استبدلت المياه المعدنية الخشب بالحجر، كأنها تبني تمثالًا حبة حبة."] },
          { q: ["Archaeopteryx is…", "الأركيوبتركس…"],
            c: [["a transitional fossil between reptiles and birds", "حفرية انتقالية بين الزواحف والطيور"], ["an index fossil", "حفرية مرشدة"], ["a trace fossil", "حفرية آثار"], ["a modern bird", "طائر حديث"]],
            off: ["It had reptile teeth and a bony tail, but feathered wings like a bird, so it is a transitional fossil.", "كان له أسنان وذيل عظمي مثل الزواحف، وأجنحة بريش مثل الطيور، فهو حفرية انتقالية."],
            sto: ["It is the page between the reptile chapter and the bird chapter.", "إنه الصفحة بين فصل الزواحف وفصل الطيور."] },
          { q: ["Index fossils are useful because those organisms…", "تفيد الحفريات المرشدة لأن كائناتها…"],
            c: [["lived for a short time over a wide area", "عاشت فترة قصيرة وانتشرت في مساحة واسعة"], ["lived everywhere for billions of years", "عاشت في كل مكان مليارات السنين"], ["are still alive today", "ما زالت حية"], ["were found in one place only", "وُجدت في مكان واحد فقط"]],
            off: ["Because they lived briefly but widely, finding the same index fossil shows that two far-apart layers are the same age.", "لأنها عاشت فترة قصيرة وانتشرت كثيرًا، فوجود الحفرية نفسها في طبقتين متباعدتين يدل على أنهما من العمر نفسه."],
            sto: ["They are like a stamp used for one year only: see it, and you know the year.", "مثل طابع بريد استُخدم سنة واحدة فقط: إذا رأيته عرفت السنة."] },
          { q: ["A human arm, a bat wing and a whale flipper are…", "ذراع الإنسان وجناح الخفاش وزعنفة الحوت…"],
            c: [["homologous structures", "تراكيب متماثلة"], ["analogous structures", "تراكيب متناظرة"], ["trace fossils", "حفريات آثار"], ["index fossils", "حفريات مرشدة"]],
            off: ["They have the same basic bone plan but do different jobs, so they are homologous structures.", "لها البناء العظمي الأساسي نفسه لكن وظائفها مختلفة، فهي تراكيب متماثلة."],
            sto: ["Same toolbox, different jobs: one grabs, one flies, one swims.", "صندوق العدة نفسه بوظائف مختلفة: واحد يمسك، وواحد يطير، وواحد يسبح."] },
          { q: ["The death of many species in a short time is called…", "موت أنواع كثيرة في وقت قصير يسمى…"],
            c: [["mass extinction", "الانقراض الجماعي"], ["natural selection", "الانتخاب الطبيعي"], ["fossilisation", "التحجر"], ["adaptation", "التكيف"]],
            off: ["About 66 million years ago a mass extinction wiped out most dinosaurs and about 75% of species.", "منذ نحو ٦٦ مليون سنة حدث انقراض جماعي قضى على معظم الديناصورات ونحو ٧٥٪ من الأنواع."],
            sto: ["Many pages of the diary suddenly stop at the same line: whole chapters of life ended together.", "صفحات كثيرة في المذكرات تتوقف فجأة عند السطر نفسه: فصول كاملة من الحياة انتهت معًا."] }
        ]
      },
      {
        id: "u4l2", icon: "⏳", page: 95,
        title: { en: "Geologic Time", ar: "الزمن الجيولوجي" },
        idea: {
          official: {
            en: ["The Earth is about 4.6 billion years old. The geologic time scale divides this history into eons, eras, periods and epochs.",
              "The Phanerozoic eon has three eras: the Paleozoic (ancient life), the Mesozoic (middle life) and the Cenozoic (modern life).",
              "Relative age says which rock is older, without years. By the law of superposition, lower undisturbed layers are older, and index fossils match layers far apart.",
              "Absolute age gives the age in years, using radioactive elements such as uranium-238 and carbon-14.",
              "Half-life is the time for half of a radioactive element to decay. After one half-life 50% remains; after two, 25%."],
            ar: ["عمر الأرض نحو ٤٫٦ مليار سنة، ويقسّم المقياس الزمني الجيولوجي هذا التاريخ إلى دهور وأحقاب وعصور وأزمنة.",
              "دهر الحياة الظاهرة به ثلاثة أحقاب: الحياة القديمة، والحياة الوسطى، والحياة الحديثة.",
              "العمر النسبي يحدد أي الصخور أقدم دون عدد سنوات؛ فحسب قانون التعاقب الطبقي تكون الطبقات السفلى غير المضطربة أقدم، والحفريات المرشدة تطابق الطبقات المتباعدة.",
              "العمر المطلق يعطي العمر بالسنين باستخدام العناصر المشعة مثل اليورانيوم ٢٣٨ والكربون ١٤.",
              "عمر النصف هو الزمن اللازم لتحلل نصف كمية العنصر المشع، فبعد عمر نصف واحد يتبقى ٥٠٪، وبعد اثنين ٢٥٪."]
          },
          story: {
            en: ["Think of a pile of newspapers on a table. The one at the bottom was put there first.",
              "Rock layers work the same way: if nothing disturbed them, the bottom layer is the oldest page of Earth's story.",
              "That tells us which is older, but not how many years. That is relative age.",
              "Radioactive elements are like a melting ice clock: every half-life, half of what is left disappears.",
              "Count how many halvings happened and you know the age in years. That is absolute age."],
            ar: ["فكّر في كومة جرائد على المنضدة: الجريدة السفلى وُضعت أولًا.",
              "طبقات الصخور كذلك؛ إذا لم يحركها شيء فالطبقة السفلى هي أقدم صفحة في قصة الأرض.",
              "هذا يخبرنا أيها أقدم دون عدد السنين، وهذا هو العمر النسبي.",
              "العناصر المشعة مثل ساعة من الثلج تذوب: كل عمر نصف يختفي نصف ما تبقى.",
              "عُدّ مرات التنصيف فتعرف العمر بالسنين، وهذا هو العمر المطلق."]
          }
        },
        words: [
          ["Eon → Era → Period → Epoch", "الدهر ← الحقب ← العصر ← الزمن", "Units of geologic time, from largest to smallest.", "وحدات الزمن الجيولوجي من الأكبر إلى الأصغر."],
          ["Law of superposition", "قانون التعاقب الطبقي", "In undisturbed layers, the lower layer is older.", "في الطبقات غير المضطربة تكون الطبقة السفلى أقدم."],
          ["Relative age", "العمر النسبي", "Older or younger than another rock, with no number of years.", "أقدم أو أحدث من صخر آخر دون عدد سنوات."],
          ["Absolute age", "العمر المطلق", "The age in years, found from radioactive decay.", "العمر بالسنين، ويُعرف من التحلل الإشعاعي."],
          ["Half-life", "عمر النصف", "The time for half of a radioactive element to decay.", "الزمن اللازم لتحلل نصف كمية العنصر المشع."]
        ],
        lab: { parts: [{ type: "decay" }, { type: "layers" }] },
        quiz: [
          { q: ["In undisturbed rock layers, the oldest layer is…", "في طبقات الصخور غير المضطربة تكون الطبقة الأقدم…"],
            c: [["the bottom layer", "الطبقة السفلى"], ["the top layer", "الطبقة العليا"], ["the middle layer", "الطبقة الوسطى"], ["the thinnest layer", "الطبقة الأرق"]],
            off: ["The law of superposition: layers are laid down one on top of another, so the lowest is the oldest.", "قانون التعاقب الطبقي: تترسب الطبقات واحدة فوق الأخرى، فتكون السفلى هي الأقدم."],
            sto: ["The newspaper at the bottom of the pile was put there first.", "الجريدة في أسفل الكومة وُضعت أولًا."] },
          { q: ["After two half-lives, what percentage of a radioactive element remains?", "بعد مرور عمرَي نصف، ما النسبة المتبقية من العنصر المشع؟"],
            c: [["25%", "٢٥٪"], ["50%", "٥٠٪"], ["12.5%", "١٢٫٥٪"], ["0%", "٠٪"]],
            off: ["100% → 50% after one half-life → 25% after two.", "١٠٠٪ ← ٥٠٪ بعد عمر نصف واحد ← ٢٥٪ بعد عمرين."],
            sto: ["The ice clock halves, then halves again: a whole block becomes a quarter.", "ساعة الثلج تنتصف ثم تنتصف مرة أخرى، فيصبح اللوح ربعًا."] },
          { q: ["Which method gives the age of a rock in years?", "أي طريقة تعطي عمر الصخر بالسنين؟"],
            c: [["Radioactive dating (absolute age)", "التأريخ بالعناصر المشعة (العمر المطلق)"], ["The law of superposition", "قانون التعاقب الطبقي"], ["Comparing layer colours", "مقارنة ألوان الطبقات"], ["Index fossils", "الحفريات المرشدة"]],
            off: ["Radioactive elements decay at a constant rate, so measuring what is left gives the absolute age in years.", "العناصر المشعة تتحلل بمعدل ثابت، فقياس الكمية المتبقية يعطي العمر المطلق بالسنين."],
            sto: ["Superposition says who came first; the radioactive clock tells you the exact birthday.", "التعاقب يقول من جاء أولًا، والساعة المشعة تخبرك بتاريخ الميلاد."] },
          { q: ["Which era's name means 'middle life'?", "أي حقب يعني اسمه «الحياة الوسطى»؟"],
            c: [["Mesozoic", "حقب الحياة الوسطى (الميزوزوي)"], ["Paleozoic", "حقب الحياة القديمة (الباليوزوي)"], ["Cenozoic", "حقب الحياة الحديثة (السينوزوي)"], ["Phanerozoic", "دهر الحياة الظاهرة"]],
            off: ["Paleozoic = ancient life, Mesozoic = middle life, Cenozoic = modern life. Phanerozoic is the eon that contains them.", "الباليوزوي الحياة القديمة، والميزوزوي الحياة الوسطى، والسينوزوي الحياة الحديثة، والفانيروزوي هو الدهر الذي يضمها."],
            sto: ["Think of a three-chapter book: old life, middle life, and modern life. The dinosaurs star in the middle chapter.", "فكّر في كتاب من ثلاثة فصول: حياة قديمة ووسطى وحديثة، والديناصورات أبطال الفصل الأوسط."] },
          { q: ["Which order goes from the largest unit of geologic time to the smallest?", "أي ترتيب يبدأ من أكبر وحدة زمن جيولوجي إلى أصغرها؟"],
            c: [["Eon → Era → Period → Epoch", "دهر ← حقب ← عصر ← زمن"], ["Era → Eon → Epoch → Period", "حقب ← دهر ← زمن ← عصر"], ["Period → Era → Eon → Epoch", "عصر ← حقب ← دهر ← زمن"], ["Epoch → Period → Era → Eon", "زمن ← عصر ← حقب ← دهر"]],
            off: ["The scale goes eon, era, period, epoch, from largest to smallest.", "المقياس من الأكبر إلى الأصغر: الدهر ثم الحقب ثم العصر ثم الزمن."],
            sto: ["Like a book, its chapters, their pages, and the lines on each page.", "مثل كتاب، ثم فصوله، ثم صفحاته، ثم الأسطر في كل صفحة."] },
          { q: ["Sea fossils found high in the Himalayas show that…", "وجود حفريات بحرية في قمم جبال الهيمالايا يدل على أن…"],
            c: [["the rocks were once sea floor that was pushed up", "الصخور كانت قاع بحر ثم ارتفعت"], ["fish lived on mountains", "الأسماك عاشت على الجبال"], ["the sea is covering the mountains now", "البحر يغطي الجبال الآن"], ["birds carried the shells there", "الطيور حملت الأصداف إلى هناك"]],
            off: ["Marine fossils mean the rock formed under the sea; plate collision later lifted it into mountains.", "الحفريات البحرية تعني أن الصخر تكوّن تحت البحر، ثم رفعه تصادم الألواح إلى قمم الجبال."],
            sto: ["The mountain top was once the sea's floor, then the Earth pushed it up like a rising cake.", "قمة الجبل كانت يومًا قاع البحر، ثم دفعتها الأرض لأعلى مثل كعكة ترتفع."] }
        ]
      }
    ]
  });
})();
