/* EduZone Learn v3 - Science, Egyptian Secondary 3 Biology (General Secondary Certificate), 2026-2027.
   Follows the Ministry book "Biology, General Secondary Certificate" (full-year book, not split by term):
   Unit One Structure & Function in Living Organisms - Ch.1 Support and movement, Ch.2 Hormonal co-ordination,
   Ch.3 Reproduction, Ch.4 Immunity; Unit Two - Ch.1 Nucleic acid DNA, Ch.2 Nucleic acids and protein synthesis;
   Ch.7 Earth science. Registers EZ3.SCIG.sec3bio = {units, book} (ids sec3biou1l1 ...), plus objectives
   (EZ3.SCI3_OBJ), extra quiz items (EZ3.SCI3_EXTRA), diagrams (EZ3.sciDiagrams) and live simulations
   (EZ3.sciLabs.sec3bio_*). Same lesson shape as sci-prep2.js. */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCIG = E.SCIG || {};
  var G = E.SCIG.sec3bio = { book: { en: "Biology, General Secondary Certificate (Third Secondary)", ar: "الأحياء، شهادة إتمام الدراسة الثانوية العامة (الصف الثالث الثانوي)" }, units: [] };

  /* ================= UNIT 1: SUPPORT AND MOVEMENT ================= */
  G.units.push({
    id: "sec3biou1", num: 1, icon: "🦴", color: "orange",
    title: { en: "Support and Movement in Living Organisms", ar: "الدعامة والحركة في الكائنات الحية" },
    lessons: [
      {
        id: "sec3biou1l1", icon: "🦴", page: 6,
        title: { en: "Support in Plants and the Human Skeletal System", ar: "الدعامة في النبات والجهاز الهيكلي في الإنسان" },
        idea: {
          official: {
            en: ["Plants support themselves by depositing substances on their cell walls: cutin on the epidermis, suberin in cork, cellulose in collenchyma and lignin in sclerenchyma and xylem.",
              "The human skeletal system consists of the skeleton, cartilages, joints, ligaments and tendons. The skeleton has 206 bones, divided into axial and appendicular skeletons.",
              "The vertebral column has 33 vertebrae: " + eq("7 cervical + 12 thoracic + 5 lumbar + 5 sacral + 4 coccygeal = 33") + ". The skull has 8 cerebral bones and 14 facial bones.",
              "The thoracic cage is the sternum plus 12 pairs of ribs; the first 10 pairs reach the sternum and the last 2 pairs are floating ribs. It protects the heart and lungs.",
              "Joints are fibrous (no movement, skull), cartilaginous (very limited, between vertebrae) or synovial (most joints, with synovial fluid): elbow and knee move in one direction, shoulder and hip in many.",
              "Ligaments link bone to bone at a joint; tendons link muscle to bone, like the Achilles tendon joining the gastrocnemius muscle to the heel bone."],
            ar: ["يدعم النبات نفسه بترسيب مواد على جدر خلاياه: الكيوتين على البشرة، والسوبرين في الفلين، والسليلوز في الخلايا الكولنشيمية، واللجنين في الخلايا الإسكلرنشيمية والخشب.",
              "يتكون الجهاز الهيكلي في الإنسان من الهيكل العظمي والغضاريف والمفاصل والأربطة والأوتار، ويتكون الهيكل العظمي من ٢٠٦ عظمة ويقسم إلى هيكل محوري وهيكل طرفي.",
              "يتكون العمود الفقري من ٣٣ فقرة: " + eq("7 + 12 + 5 + 5 + 4 = 33") + " (عنقية وصدرية وقطنية وعجزية وعصعصية)، وتتكون الجمجمة من ٨ عظام للجزء المخي و١٤ عظمة للجزء الوجهي.",
              "يتكون القفص الصدري من عظمة القص و١٢ زوجًا من الضلوع؛ تتصل الأزواج العشرة الأولى بالقص، والزوجان الأخيران ضلوع سائبة، ويحمي القلب والرئتين.",
              "المفاصل ليفية (لا تسمح بالحركة كمفاصل الجمجمة)، وغضروفية (حركة محدودة جدًا بين الفقرات)، وزلالية (معظم المفاصل وبها سائل زلالي): الكوع والركبة محدودة الحركة، والكتف والفخذ واسعة الحركة.",
              "الأربطة تربط العظام ببعضها عند المفاصل، والأوتار تربط العضلات بالعظام مثل وتر أكيليس الذي يربط عضلة السمانة بعظمة العقب."]
          },
          story: {
            en: ["Omar plays midfield for his school team in Alexandria. After a sharp turn, his knee twists and the doctor mentions the cruciate ligament.",
              "The doctor explains: the knee is a synovial joint that moves in one direction only, and ligaments hold the femur and tibia together.",
              "Omar's coach adds that the Achilles tendon above his heel pulls the heel bone when the calf muscle contracts, so he can jump for headers.",
              "Back home, Omar counts his grandfather's spine on an X-ray: 7 neck vertebrae, 12 chest ones, 5 lower back ones. The rest are fused.",
              "Even the molokhia stems in the market stand upright thanks to lignin and cellulose in their cell walls: plants need support too."],
            ar: ["عمر يلعب في خط الوسط لفريق مدرسته في الإسكندرية، وبعد دوران حاد التوت ركبته فتحدث الطبيب عن الرباط الصليبي.",
              "شرح الطبيب أن الركبة مفصل زلالي يتحرك في اتجاه واحد فقط، وأن الأربطة تربط عظمتي الفخذ والقصبة معًا.",
              "وأضاف المدرب أن وتر أكيليس فوق عقبه يشد عظمة العقب عندما تنقبض عضلة السمانة، فيستطيع القفز لضرب الكرة برأسه.",
              "وفي البيت عدّ عمر فقرات جده في صورة الأشعة: ٧ فقرات في الرقبة، و١٢ في الصدر، و٥ في أسفل الظهر، والباقي ملتحم.",
              "حتى سيقان الملوخية في السوق تقف منتصبة بفضل اللجنين والسليلوز في جدر خلاياها، فالنبات أيضًا يحتاج إلى دعامة."]
          }
        },
        words: [
          ["Axial skeleton", "الهيكل المحوري", "The skull and the vertebral column (with the thoracic cage).", "الجمجمة والعمود الفقري (مع القفص الصدري)."],
          ["Appendicular skeleton", "الهيكل الطرفي", "The pectoral girdle, upper limbs, pelvic girdle and lower limbs.", "الحزام الصدري والطرفان العلويان والحزام الحوضي والطرفان السفليان."],
          ["Synovial joint", "المفصل الزلالي", "A movable joint whose bone ends are covered with cartilage and bathed in synovial fluid.", "مفصل متحرك أطراف عظامه مغطاة بغضروف ويحتوي على سائل زلالي."],
          ["Ligament", "الرباط", "Bundle of fibrous connective tissue linking two bones at a joint.", "حزمة من نسيج ضام ليفي تربط عظمتين عند المفصل."],
          ["Tendon", "الوتر", "Strong connective tissue linking a muscle to a bone, e.g. the Achilles tendon.", "نسيج ضام قوي يربط العضلة بالعظم، مثل وتر أكيليس."],
          ["Cartilage", "الغضروف", "Connective tissue at bone tips and between vertebrae; has no blood vessels.", "نسيج ضام عند أطراف العظام وبين الفقرات، ولا يحتوي على أوعية دموية."],
          ["Floating ribs", "الضلوع السائبة", "The last two pairs of ribs, which do not reach the sternum.", "الزوجان الأخيران من الضلوع، لا يتصلان بعظمة القص."]
        ],
        lab: { parts: [{ type: "sec3bio_joints" }, {
          type: "sort",
          prompt: ["Tap a bone, then tap the part of the skeleton it belongs to.", "اضغط على عظمة، ثم اضغط على جزء الهيكل الذي تنتمي إليه."],
          bins: [["a", "🧠", "Axial skeleton", "الهيكل المحوري"], ["p", "🦵", "Appendicular skeleton", "الهيكل الطرفي"]],
          items: [[["Sternum", "عظمة القص"], "a"], [["Lumbar vertebra", "فقرة قطنية"], "a"], [["Ribs", "الضلوع"], "a"], [["Skull", "الجمجمة"], "a"],
            [["Scapula", "لوح الكتف"], "p"], [["Femur", "عظمة الفخذ"], "p"], [["Radius", "الكعبرة"], "p"], [["Ilium", "الحرقفة"], "p"], [["Patella", "الرضفة"], "p"]]
        }] },
        quiz: [
          { q: ["How many vertebrae make up the human vertebral column?", "كم عدد فقرات العمود الفقري في الإنسان؟"],
            c: [["33", "٣٣"], ["24", "٢٤"], ["26", "٢٦"], ["31", "٣١"]],
            off: ["7 cervical + 12 thoracic + 5 lumbar + 5 sacral + 4 coccygeal = 33 vertebrae.", "٧ عنقية + ١٢ صدرية + ٥ قطنية + ٥ عجزية + ٤ عصعصية = ٣٣ فقرة."],
            sto: ["Omar counted 24 movable ones on the X-ray, then added 5 fused sacral and 4 coccygeal: 33.", "عدّ عمر ٢٤ فقرة متحركة في الأشعة ثم أضاف ٥ عجزية و٤ عصعصية ملتحمة فصارت ٣٣."] },
          { q: ["The skull contains how many bones in total (cerebral + facial)?", "كم عدد عظام الجمجمة كلها (المخية + الوجهية)؟"],
            c: [["22", "٢٢"], ["14", "١٤"], ["8", "٨"], ["206", "٢٠٦"]],
            off: ["The cerebral part has 8 serrated bones and the facial part has 14 bones: 8 + 14 = 22.", "الجزء المخي ٨ عظام مسننة والجزء الوجهي ١٤ عظمة: ٨ + ١٤ = ٢٢."],
            sto: ["8 bones guard the brain and 14 shape the face Omar sees in the mirror.", "٨ عظام تحرس المخ و١٤ عظمة تشكل الوجه الذي يراه عمر في المرآة."] },
          { q: ["Which joint allows movement of bones in many directions?", "أي المفاصل يسمح بحركة العظام في اتجاهات متعددة؟"],
            c: [["The shoulder joint", "مفصل الكتف"], ["The elbow joint", "مفصل الكوع"], ["The knee joint", "مفصل الركبة"], ["The joints between skull bones", "مفاصل عظام الجمجمة"]],
            off: ["Shoulder and hip are wide-movement synovial joints; elbow and knee move in one direction; skull joints are fibrous and immovable.", "الكتف والفخذ مفاصل زلالية واسعة الحركة، والكوع والركبة تتحرك في اتجاه واحد، ومفاصل الجمجمة ليفية لا تتحرك."],
            sto: ["Omar swings his arm in a full circle at the throw-in: that is the shoulder at work.", "يدير عمر ذراعه في دائرة كاملة عند رمية التماس؛ هذا مفصل الكتف."] },
          { q: ["Cartilages get their food and oxygen by diffusion from bone cells because...", "تحصل الغضاريف على الغذاء والأكسجين بالانتشار من خلايا العظم لأن..."],
            c: [["they contain no blood vessels", "لا تحتوي على أوعية دموية"], ["they are dead tissue", "نسيج ميت"], ["they contain synovial fluid", "تحتوي على سائل زلالي"], ["they are made of bone", "مكونة من عظم"]],
            off: ["The book states that cartilages do not contain blood vessels, so nutrients reach them from bone cells by diffusion.", "يذكر الكتاب أن الغضاريف لا تحتوي على أوعية دموية، فيصلها الغذاء من خلايا العظم بالانتشار."],
            sto: ["Like a flat with no water pipe, the neighbours must pass it water by hand.", "مثل شقة بلا مواسير مياه، يناولها الجيران الماء باليد."] },
          { q: ["Which structure links the gastrocnemius muscle to the heel bone?", "أي تركيب يربط عضلة السمانة بعظمة العقب؟"],
            c: [["The Achilles tendon", "وتر أكيليس"], ["The cruciate ligament", "الرباط الصليبي"], ["The patella", "الرضفة"], ["The pubic symphysis", "الارتفاق العاني"]],
            off: ["Tendons link muscles to bones; the Achilles tendon connects the gastrocnemius to the heel bone.", "الأوتار تربط العضلات بالعظام، ووتر أكيليس يربط عضلة السمانة بعظمة العقب."],
            sto: ["Every sprint Omar makes pulls on this tendon above his heel.", "كل انطلاقة سريعة لعمر تشد هذا الوتر فوق عقبه."] },
          { q: ["The epidermal cell walls of plants become thick and impermeable due to the deposition of...", "تصبح جدر خلايا البشرة في النبات سميكة وغير منفذة نتيجة ترسيب..."],
            c: [["cutin", "الكيوتين"], ["lignin", "اللجنين"], ["suberin only in xylem", "السوبرين في الخشب فقط"], ["chitin", "الكيتين"]],
            off: ["Cutin covers the epidermis; suberin is in cork; lignin thickens sclerenchyma and xylem.", "الكيوتين يغطي البشرة، والسوبرين في الفلين، واللجنين يغلظ الإسكلرنشيمية والخشب."],
            sto: ["The waxy shine on a guava leaf is cutin keeping the water inside.", "اللمعة الشمعية على ورقة الجوافة هي الكيوتين الذي يحفظ الماء بالداخل."] },
          { q: ["How many pairs of ribs are connected directly to the sternum?", "كم زوجًا من الضلوع يتصل بعظمة القص؟"],
            c: [["10 pairs", "١٠ أزواج"], ["12 pairs", "١٢ زوجًا"], ["7 pairs", "٧ أزواج"], ["2 pairs", "زوجان"]],
            off: ["Of the 12 pairs, the first 10 connect to the sternum and the last 2 pairs are floating: 12 - 2 = 10.", "من ١٢ زوجًا تتصل الأزواج العشرة الأولى بالقص والزوجان الأخيران سائبان: ١٢ - ٢ = ١٠."],
            sto: ["Two pairs are 'floating' like substitutes who never step on the pitch.", "زوجان سائبان مثل لاعبي احتياط لا ينزلون الملعب."] }
        ]
      },
      {
        id: "sec3biou1l2", icon: "🌿", page: 12,
        title: { en: "Movement in Plants", ar: "الحركة في النبات" },
        idea: {
          official: {
            en: ["Movement is a phenomenon that distinguishes living organisms: cytoplasmic streaming inside cells, positional movement of organs, and total movement from place to place.",
              "Mimosa leaflets collapse when touched (movement by touch), and some leguminous leaves close in darkness and open in light (sleeping movement).",
              "Haptotropism (pulling movement): a pea tendril twines around a support because growth is slow on the side touching the support and faster on the far side.",
              "The tendril's length decreases, pulling the stem toward the support; then it thickens with mechanical tissue. A tendril that meets no support wilts and dies.",
              "Pulling roots of corms and bulbs contract and pull the storage stem down to a suitable depth in the soil, securing aerial parts against the wind.",
              "Cytoplasmic streaming: in Elodea leaf cells the cytoplasm rotates in one direction around the cell, shown by the moving chloroplasts."],
            ar: ["الحركة ظاهرة تميز الكائنات الحية: انسياب السيتوبلازم داخل الخلايا، وحركة موضعية لبعض الأعضاء، وحركة كلية للانتقال من مكان لآخر.",
              "تنطوي وريقات نبات المستحية عند لمسها (حركة اللمس)، وتنطبق أوراق بعض النباتات البقولية في الظلام وتنبسط في الضوء (حركة النوم).",
              "الحركة الالتفافية (الشد): يلتف محلاق البسلة حول الدعامة لأن النمو يكون بطيئًا في الجانب الملامس للدعامة وسريعًا في الجانب البعيد عنها.",
              "يقل طول المحلاق فيقترب الساق من الدعامة، ثم يغلظ المحلاق ويكوّن أنسجة ميكانيكية، والمحلاق الذي لا يجد دعامة يذبل ويموت.",
              "تنقبض الجذور الشادة للكورمات والأبصال فتشد الساق المخزنة إلى عمق مناسب في التربة وتؤمّن الأجزاء الهوائية ضد الرياح.",
              "انسياب السيتوبلازم: في خلايا ورقة الإيلوديا يدور السيتوبلازم في اتجاه واحد حول الخلية، ويُستدل عليه بحركة البلاستيدات الخضراء."]
          },
          story: {
            en: ["Nour helps her aunt with the pea plants on their roof in Mansoura. She notices thin green tendrils hunting for something to hold.",
              "She ties a string near one tendril. By evening the tendril has wrapped around it in a tight spiral, and the stem has moved closer to the string.",
              "Her aunt explains: the side touching the string grows slowly while the outer side grows faster, so the tendril curls.",
              "A forgotten tendril on the corner never found a support. A week later it had wilted.",
              "Under the school microscope, Nour sees chloroplasts in an Elodea leaf sailing round the cell like cars on a roundabout: cytoplasmic streaming."],
            ar: ["نور تساعد خالتها في زراعة البسلة على سطح البيت في المنصورة، ولاحظت محاليق خضراء رفيعة تبحث عن شيء تتعلق به.",
              "ربطت خيطًا قرب أحد المحاليق، وفي المساء كان المحلاق قد التف حوله في حلزون محكم واقترب الساق من الخيط.",
              "شرحت خالتها أن الجانب الملامس للخيط ينمو ببطء بينما ينمو الجانب الخارجي أسرع، فيلتف المحلاق.",
              "أما محلاق منسي في الركن فلم يجد دعامة، وبعد أسبوع كان قد ذبل.",
              "وتحت مجهر المدرسة رأت نور البلاستيدات الخضراء في ورقة الإيلوديا تدور حول الخلية كالسيارات في دوران؛ هذا انسياب السيتوبلازم."]
          }
        },
        words: [
          ["Haptotropism", "الانتحاء اللمسي (حركة الشد)", "Twining of tendrils around a support due to unequal growth on their two sides.", "التفاف المحاليق حول الدعامة نتيجة اختلاف معدل النمو على جانبيها."],
          ["Tendril", "المحلاق", "A thin organ (e.g. in pea) that twines around a support to raise the plant.", "عضو رفيع (كما في البسلة) يلتف حول الدعامة ليرفع النبات."],
          ["Sleeping movement", "حركة النوم", "Leaves partially close in darkness and reopen in light.", "انطباق الأوراق جزئيًا في الظلام وانبساطها في الضوء."],
          ["Movement by touch", "حركة اللمس", "Collapse of Mimosa leaflets when they are touched.", "انطواء وريقات المستحية عند لمسها."],
          ["Pulling roots", "الجذور الشادة", "Roots below corms and bulbs that contract to pull them to a suitable depth.", "جذور أسفل الكورمات والأبصال تنقبض لتشدها إلى عمق مناسب."],
          ["Cytoplasmic streaming", "انسياب السيتوبلازم", "Continuous rotation of the cytoplasm inside the cell, seen in Elodea.", "دوران مستمر للسيتوبلازم داخل الخلية كما في الإيلوديا."]
        ],
        lab: { parts: [{ type: "sec3bio_tendril" }] },
        quiz: [
          { q: ["A pea tendril twines around a support because...", "يلتف محلاق البسلة حول الدعامة لأن..."],
            c: [["growth is slower on the side touching the support", "النمو أبطأ في الجانب الملامس للدعامة"], ["growth is faster on the side touching the support", "النمو أسرع في الجانب الملامس للدعامة"], ["the tendril contains muscles", "المحلاق به عضلات"], ["light falls on one side only", "الضوء يسقط على جانب واحد فقط"]],
            off: ["Slow growth on the contact side and accelerated growth on the far side elongate the far side, so the tendril coils.", "بطء النمو في جانب التلامس وسرعته في الجانب البعيد يطيل الجانب البعيد فيلتف المحلاق."],
            sto: ["Like a runner on the outer lane of a curve, the outer side must cover more distance.", "مثل عدّاء في الحارة الخارجية للمنحنى، يقطع الجانب الخارجي مسافة أكبر."] },
          { q: ["What happens to a tendril that does not meet a support?", "ماذا يحدث للمحلاق الذي لا يجد دعامة؟"],
            c: [["It wilts and dies", "يذبل ويموت"], ["It becomes a root", "يتحول إلى جذر"], ["It thickens with lignin", "يغلظ باللجنين"], ["It forms a flower", "يكوّن زهرة"]],
            off: ["The book: if the tendril does not meet a support during its twining movement, it wilts and dies.", "يذكر الكتاب أن المحلاق إذا لم يجد دعامة أثناء حركته الالتفافية يذبل ويموت."],
            sto: ["Nour's forgotten corner tendril dried up within a week.", "محلاق نور المنسي في الركن جف خلال أسبوع."] },
          { q: ["The function of the pulling roots of corms and bulbs is to...", "وظيفة الجذور الشادة للكورمات والأبصال هي..."],
            c: [["pull the storage stem to a suitable depth in the soil", "شد الساق المخزنة إلى عمق مناسب في التربة"], ["absorb light", "امتصاص الضوء"], ["twine around supports", "الالتفاف حول الدعامات"], ["carry out photosynthesis", "القيام بالبناء الضوئي"]],
            off: ["By contracting, pulling roots pull the corm or bulb downward and secure the aerial parts against wind.", "بانقباضها تشد الجذور الشادة الكورمة أو البصلة لأسفل وتؤمّن الأجزاء الهوائية ضد الرياح."],
            sto: ["The onion in the field stays snug at the right depth thanks to these roots.", "البصلة في الحقل تبقى في العمق المناسب بفضل هذه الجذور."] },
          { q: ["Leaves of some leguminous plants close in darkness and open in light. This is called...", "تنطبق أوراق بعض النباتات البقولية في الظلام وتنبسط في الضوء، وتسمى هذه..."],
            c: [["sleeping movement", "حركة النوم"], ["movement by touch", "حركة اللمس"], ["haptotropism", "الحركة الالتفافية"], ["cytoplasmic streaming", "انسياب السيتوبلازم"]],
            off: ["The succession of light and dark causes movement similar to sleeping and waking.", "تعاقب الضوء والظلام يُحدث حركة تشبه النوم والاستيقاظ."],
            sto: ["The plant 'sleeps' at sunset like Nour after a long school day.", "النبات ينام عند الغروب مثل نور بعد يوم دراسي طويل."] },
          { q: ["In Elodea cells, cytoplasmic streaming is indicated by the movement of...", "في خلايا الإيلوديا يُستدل على انسياب السيتوبلازم بحركة..."],
            c: [["chloroplasts", "البلاستيدات الخضراء"], ["the nucleus out of the cell", "النواة خارج الخلية"], ["the cell wall", "الجدار الخلوي"], ["the vacuole only", "الفجوة فقط"]],
            off: ["The cytoplasm lines the wall and streams in one direction carrying the embedded chloroplasts.", "يبطن السيتوبلازم الجدار وينساب في اتجاه واحد حاملًا البلاستيدات المغمورة فيه."],
            sto: ["The green dots are passengers on the cytoplasm's ring road.", "النقاط الخضراء ركاب على الطريق الدائري للسيتوبلازم."] },
          { q: ["After twining, the tendril becomes thicker and stronger because it...", "بعد الالتفاف يصبح المحلاق أغلظ وأقوى لأنه..."],
            c: [["lays down mechanical (supporting) tissue", "يكوّن نسيجًا ميكانيكيًا (دعاميًا)"], ["loses all its water", "يفقد كل مائه"], ["turns into a bulb", "يتحول إلى بصلة"], ["stores starch only", "يخزن النشا فقط"]],
            off: ["The tendril thickens and lays down a considerable amount of mechanical tissue, becoming stronger.", "يغلظ المحلاق ويكوّن قدرًا كبيرًا من الأنسجة الميكانيكية فيصبح أقوى."],
            sto: ["Like a rope that gets thicker once it starts carrying weight.", "مثل حبل يزداد سمكًا عندما يبدأ في حمل الوزن."] }
        ]
      },
      {
        id: "sec3biou1l3", icon: "💪", page: 15,
        title: { en: "Muscles and the Mechanism of Muscle Contraction", ar: "العضلات وآلية الانقباض العضلي" },
        idea: {
          official: {
            en: ["Movement in man depends on three systems: skeletal, muscular and nervous. Man has about 620 muscles; a skeletal muscle is made of muscle fibres, each with 1000-2000 myofibrils and many nuclei.",
              "Each myofibril has light I-bands (thin actin, bisected by the Z-line) and dark A-bands (thick myosin, with the lighter H-zone). The distance between two Z-lines is a sarcomere.",
              "Nerve impulse: Ca²⁺ enters the nerve ending, vesicles release acetylcholine, the muscle membrane depolarizes (Na⁺ enters) and the fibre contracts. Cholinesterase breaks acetylcholine down, so the membrane repolarizes.",
              "Huxley's sliding filament theory: cross-bridges (transverse links) of myosin attach to actin using Ca²⁺ and ATP and pull the actin filaments inward, so the Z-lines come closer and the sarcomere shortens.",
              "Both attachment and detachment of cross-bridges need ATP. A shortage of ATP prevents detachment, so the muscle stays contracted: a painful spasm.",
              "Repeated rapid contraction makes glycogen break down anaerobically; lactic acid accumulates and causes muscle fatigue."],
            ar: ["تعتمد الحركة في الإنسان على ثلاثة أجهزة: الهيكلي والعضلي والعصبي، وفي الإنسان نحو ٦٢٠ عضلة، والعضلة الهيكلية تتكون من ألياف عضلية في كل منها ١٠٠٠-٢٠٠٠ لييفة عضلية وأنوية عديدة.",
              "تحتوي كل لييفة على أقراص فاتحة I (خيوط أكتين رفيعة يقطعها الخط Z) وأقراص داكنة A (خيوط ميوسين سميكة بها المنطقة H الأفتح)، والمسافة بين خطي Z متتاليين هي القطعة العضلية (الساركومير).",
              "السيال العصبي: تدخل أيونات الكالسيوم نهاية العصب فتنفجر الحويصلات وتفرز الأستيل كولين، فتزول استقطاب غشاء العضلة (تدخل أيونات الصوديوم) وتنقبض الليفة، ثم يحلل إنزيم الكولين استيريز الأستيل كولين فيعود الاستقطاب.",
              "نظرية الانزلاق لهكسلي: ترتبط الروابط المستعرضة للميوسين بالأكتين بمساعدة أيونات الكالسيوم وATP وتسحب خيوط الأكتين للداخل، فيقترب خطا Z وتقصر القطعة العضلية.",
              "يحتاج ارتباط الروابط المستعرضة وانفصالها إلى طاقة ATP، ونقص ATP يمنع الانفصال فتظل العضلة منقبضة مسببة تقلصًا مؤلمًا.",
              "الانقباض المتكرر السريع يجعل الجليكوجين يتأكسد لاهوائيًا فيتراكم حمض اللاكتيك ويسبب الإجهاد العضلي."]
          },
          story: {
            en: ["Karim trains for the 400 m race at the Gezira Club. The first 200 m feel easy: his muscles have oxygen and plenty of ATP.",
              "Inside every fibre, myosin heads grab actin and pull, sarcomere by sarcomere, millions of times a second.",
              "In the last 100 m his blood cannot bring oxygen fast enough. His muscles switch to anaerobic respiration and lactic acid builds up: his legs burn with fatigue.",
              "That night his calf suddenly locks in a cramp. His coach says the fibres lacked ATP to release the cross-bridges.",
              "After rest and a good meal, aerobic respiration refills ATP and his muscles relax and contract normally again."],
            ar: ["كريم يتدرب على سباق ٤٠٠ متر في نادي الجزيرة، وأول ٢٠٠ متر سهلة لأن عضلاته لديها أكسجين وATP كافٍ.",
              "داخل كل ليفة تمسك رؤوس الميوسين بالأكتين وتسحبه، قطعة عضلية بعد أخرى، ملايين المرات.",
              "في آخر ١٠٠ متر لا يستطيع دمه توصيل الأكسجين بسرعة كافية، فتتحول عضلاته إلى التنفس اللاهوائي ويتراكم حمض اللاكتيك فتحترق ساقاه من الإجهاد.",
              "وفي الليل تشنجت سمانته فجأة، فقال المدرب إن الألياف افتقرت إلى ATP لفك الروابط المستعرضة.",
              "وبعد الراحة ووجبة جيدة يعيد التنفس الهوائي ملء مخزون ATP فتنبسط عضلاته وتنقبض بشكل طبيعي."]
          }
        },
        words: [
          ["Sarcomere", "القطعة العضلية (الساركومير)", "The part of a myofibril between two successive Z-lines.", "الجزء من اللييفة العضلية بين خطي Z متتاليين."],
          ["Actin", "الأكتين", "Thin protein filaments forming the light I-band.", "خيوط بروتينية رفيعة تكوّن القرص الفاتح I."],
          ["Myosin", "الميوسين", "Thick protein filaments forming the dark A-band; carry the cross-bridges.", "خيوط بروتينية سميكة تكوّن القرص الداكن A وتحمل الروابط المستعرضة."],
          ["Acetylcholine", "الأستيل كولين", "Neurochemical transmitter released at the neuromuscular junction.", "ناقل كيميائي عصبي يُفرز عند الموصل العصبي العضلي."],
          ["Cholinesterase", "الكولين استيريز", "Enzyme that breaks acetylcholine into choline and acetic acid.", "إنزيم يحلل الأستيل كولين إلى كولين وحمض أسيتيك."],
          ["Sliding filament theory", "نظرية الانزلاق", "Huxley's theory: actin slides over myosin pulled by cross-bridges using ATP.", "نظرية هكسلي: ينزلق الأكتين على الميوسين بسحب الروابط المستعرضة باستخدام ATP."],
          ["Muscle fatigue", "الإجهاد العضلي", "Caused by lactic acid accumulation from anaerobic respiration.", "ينتج عن تراكم حمض اللاكتيك من التنفس اللاهوائي."]
        ],
        lab: { parts: [{ type: "sec3bio_sarcomere" }] },
        quiz: [
          { q: ["During muscle contraction, which band keeps the same length?", "أثناء انقباض العضلة، أي الأقراص يظل طوله ثابتًا؟"],
            c: [["The A-band (dark band)", "القرص الداكن A"], ["The I-band (light band)", "القرص الفاتح I"], ["The H-zone", "المنطقة H"], ["The sarcomere", "القطعة العضلية"]],
            off: ["The A-band is the length of the myosin filaments, which do not shorten; actin slides inward so the I-band and H-zone shrink.", "طول القرص A هو طول خيوط الميوسين التي لا تقصر، والأكتين ينزلق للداخل فيقصر القرص I والمنطقة H."],
            sto: ["The myosin 'rope pullers' stand still; only the actin rope moves toward them.", "شادّو الحبل من الميوسين ثابتون، والحبل (الأكتين) وحده يتحرك نحوهم."] },
          { q: ["The direct source of energy for muscle contraction is...", "المصدر المباشر للطاقة اللازمة لانقباض العضلة هو..."],
            c: [["ATP", "ATP"], ["glycogen", "الجليكوجين"], ["lactic acid", "حمض اللاكتيك"], ["acetylcholine", "الأستيل كولين"]],
            off: ["Cross-bridges use the energy stored in ATP to attach to actin and to detach from it.", "تستخدم الروابط المستعرضة الطاقة المختزنة في ATP للارتباط بالأكتين والانفصال عنه."],
            sto: ["ATP is the cash in Karim's pocket; glycogen is money in the bank.", "ATP هو النقود في جيب كريم، والجليكوجين نقود في البنك."] },
          { q: ["A sarcomere is 2.4 µm long at rest. Each actin filament slides 0.3 µm inward from each side. What is its contracted length?", "طول قطعة عضلية ٢٫٤ ميكرومتر في الراحة، وانزلق كل خيط أكتين ٠٫٣ ميكرومتر للداخل من كل جانب. ما طولها بعد الانقباض؟"],
            c: [["1.8 µm", "١٫٨ ميكرومتر"], ["2.1 µm", "٢٫١ ميكرومتر"], ["2.7 µm", "٢٫٧ ميكرومتر"], ["1.5 µm", "١٫٥ ميكرومتر"]],
            off: [eq("2.4 - 2 × 0.3 = 1.8 µm") + ": both Z-lines move inward, so subtract the slide twice.", eq("2.4 - 2 × 0.3 = 1.8 µm") + "؛ خطا Z يتحركان للداخل فنطرح الانزلاق مرتين."],
            sto: ["Two teams pull from both ends, so the rope shortens twice as much.", "فريقان يسحبان من الطرفين فيقصر الحبل ضعف المسافة."] },
          { q: ["What is the role of cholinesterase at the neuromuscular junction?", "ما دور إنزيم الكولين استيريز عند الموصل العصبي العضلي؟"],
            c: [["It breaks down acetylcholine so the membrane repolarizes", "يحلل الأستيل كولين فيعود الاستقطاب للغشاء"], ["It releases calcium ions", "يطلق أيونات الكالسيوم"], ["It makes ATP", "يصنع ATP"], ["It joins actin to myosin", "يربط الأكتين بالميوسين"]],
            off: ["It hydrolyses acetylcholine into choline and acetic acid, stopping its action so the fibre can respond again.", "يحلل الأستيل كولين إلى كولين وحمض أسيتيك فيوقف تأثيره لتستجيب الليفة مرة أخرى."],
            sto: ["It is the referee who blows the whistle to end each move.", "إنه الحكم الذي يطلق الصافرة لإنهاء كل حركة."] },
          { q: ["A shortage of ATP in a muscle leads to...", "نقص ATP في العضلة يؤدي إلى..."],
            c: [["a painful spasm because cross-bridges cannot detach", "تقلص مؤلم لعدم انفصال الروابط المستعرضة"], ["immediate relaxation", "انبساط فوري"], ["growth of new muscle fibres", "نمو ألياف جديدة"], ["faster contraction", "انقباض أسرع"]],
            off: ["Detachment of cross-bridges from actin needs ATP; without it the muscle stays contracted.", "انفصال الروابط المستعرضة عن الأكتين يحتاج ATP، وبدونه تظل العضلة منقبضة."],
            sto: ["Karim's night cramp: hands locked on the rope with no energy to let go.", "تشنج كريم الليلي: أيدٍ قابضة على الحبل بلا طاقة لتفلته."] },
          { q: ["Muscle fatigue after intense exercise is due to the accumulation of...", "يرجع الإجهاد العضلي بعد التمرين الشديد إلى تراكم..."],
            c: [["lactic acid", "حمض اللاكتيك"], ["glucose", "الجلوكوز"], ["carbon dioxide only", "ثاني أكسيد الكربون فقط"], ["acetylcholine", "الأستيل كولين"]],
            off: ["Without enough oxygen, glucose from glycogen is oxidized anaerobically, producing lactic acid.", "عند نقص الأكسجين يتأكسد الجلوكوز الناتج من الجليكوجين لاهوائيًا منتجًا حمض اللاكتيك."],
            sto: ["The burning in Karim's legs in the last 100 m.", "الحرقان في ساقي كريم في آخر ١٠٠ متر."] },
          { q: ["Muscle fibres are described as multinucleated. Each muscle fibre contains how many myofibrils?", "توصف الألياف العضلية بأنها عديدة الأنوية. كم لييفة عضلية تحتوي كل ليفة؟"],
            c: [["1000 to 2000", "من ١٠٠٠ إلى ٢٠٠٠"], ["10 to 20", "من ١٠ إلى ٢٠"], ["620", "٦٢٠"], ["206", "٢٠٦"]],
            off: ["The book: each muscle fibre consists of 1000 to 2000 myofibrils arranged parallel to the muscle axis.", "يذكر الكتاب أن كل ليفة عضلية تتكون من ١٠٠٠ إلى ٢٠٠٠ لييفة مرتبة موازية لمحور العضلة."],
            sto: ["620 is the number of muscles, 206 the number of bones: don't mix the teams.", "٦٢٠ عدد العضلات و٢٠٦ عدد العظام، فلا تخلط بين الفرق."] }
        ]
      }
    ]
  });

  /* ================= UNIT 2: HORMONAL CO-ORDINATION ================= */
  G.units.push({
    id: "sec3biou2", num: 2, icon: "🧪", color: "purple",
    title: { en: "Hormonal Co-ordination in Living Organisms", ar: "التنسيق الهرموني في الكائنات الحية" },
    lessons: [
      {
        id: "sec3biou2l1", icon: "🧠", page: 24,
        title: { en: "Hormones and the Pituitary Gland", ar: "الهرمونات والغدة النخامية" },
        idea: {
          official: {
            en: ["A hormone is a chemical substance secreted by an endocrine (ductless) gland and carried by the blood to another organ, where it affects its function and growth.",
              "Starling (1905) found that the duodenal lining secretes chemicals that stimulate the pancreas even after its nerves were cut; he named them hormones. Jensen (1913) explained phototropism by auxins such as indole acetic acid.",
              "Hormones are organic (proteins, amino acids or steroids), secreted in micrograms, and keep homeostasis, control metabolism, growth and behaviour.",
              "The pituitary is the master gland under the hypothalamus. The anterior lobe secretes growth hormone (GH), TSH, ACTH, FSH, LH and prolactin.",
              "Low GH in childhood causes dwarfism, high GH in childhood causes gigantism, and high GH in adults causes acromegaly (enlarged hands, feet and face bones).",
              "The posterior lobe stores hormones made in the hypothalamus: ADH (vasopressin) reduces urine volume and raises blood pressure; oxytocin increases uterine contractions in labour and releases milk."],
            ar: ["الهرمون مادة كيميائية تفرزها غدة صماء (لاقنوية) وينقلها الدم إلى عضو آخر فتؤثر في وظيفته ونموه.",
              "وجد ستارلنج (١٩٠٥) أن الغشاء المبطن للاثني عشر يفرز مواد تنبه البنكرياس حتى بعد قطع أعصابه وسماها الهرمونات، وفسر جنسن (١٩١٣) الانتحاء الضوئي بالأوكسينات مثل إندول حمض الأسيتيك.",
              "الهرمونات مواد عضوية (بروتينات أو أحماض أمينية أو ستيرويدات)، تُفرز بكميات ضئيلة جدًا (ميكروجرامات)، وتحافظ على الاتزان الداخلي وتنظم الأيض والنمو والسلوك.",
              "الغدة النخامية هي الغدة الرئيسية وتقع أسفل المخ متصلة بتحت المهاد، ويفرز الفص الأمامي هرمون النمو والهرمون المنبه للدرقية والهرمون المنبه لقشرة الأدرينالية وFSH وLH والبرولاكتين.",
              "نقص هرمون النمو في الطفولة يسبب القزامة، وزيادته في الطفولة تسبب العملقة، وزيادته في البالغين تسبب الأكروميجالي (تضخم اليدين والقدمين وعظام الوجه).",
              "يخزن الفص الخلفي هرمونات تنتجها خلايا تحت المهاد: الهرمون المانع لإدرار البول (الفازوبرسين) يقلل حجم البول ويرفع ضغط الدم، والأوكسيتوسين يزيد انقباضات الرحم عند الولادة ويطلق اللبن."]
          },
          story: {
            en: ["Hana's little cousin Ziad is shorter than everyone in his class in Assiut. The paediatrician orders a growth hormone test.",
              "The doctor explains that the anterior pituitary, a pea-sized gland under the brain, controls physical growth by controlling protein synthesis.",
              "Too little GH in childhood means dwarfism; too much means gigantism. In adults, extra GH can no longer lengthen bones, so hands, feet and jaw enlarge instead.",
              "On the way home Hana drinks lots of water and notices she needs the bathroom often. Her mother explains that ADH was barely being released, so her kidneys returned less water.",
              "One tiny gland, many messages: the pituitary really is the master gland."],
            ar: ["زياد ابن خالة هنا أقصر طفل في فصله في أسيوط، فطلبت طبيبة الأطفال تحليل هرمون النمو.",
              "شرحت الطبيبة أن الفص الأمامي للغدة النخامية، وهي غدة في حجم حبة البسلة أسفل المخ، يتحكم في النمو الجسمي بالتحكم في بناء البروتين.",
              "نقص هرمون النمو في الطفولة يعني القزامة، وزيادته تعني العملقة، وفي البالغين لا تستطيع الزيادة إطالة العظام فتتضخم اليدان والقدمان والفك.",
              "وفي طريق العودة شربت هنا كثيرًا من الماء ولاحظت حاجتها المتكررة إلى دورة المياه، فشرحت أمها أن إفراز الهرمون المانع لإدرار البول قلّ فأعادت الكليتان ماءً أقل.",
              "غدة صغيرة ورسائل كثيرة؛ النخامية فعلًا هي الغدة الرئيسية."]
          }
        },
        words: [
          ["Hormone", "الهرمون", "Chemical secreted by an endocrine gland and carried by blood to affect another organ.", "مادة كيميائية تفرزها غدة صماء وينقلها الدم لتؤثر في عضو آخر."],
          ["Endocrine gland", "الغدة الصماء", "A ductless gland that secretes hormones directly into the blood.", "غدة لاقنوية تفرز هرموناتها مباشرة في الدم."],
          ["Master gland", "الغدة الرئيسية", "The pituitary, which controls most other endocrine glands.", "الغدة النخامية التي تتحكم في معظم الغدد الصماء الأخرى."],
          ["Growth hormone", "هرمون النمو", "Anterior pituitary hormone controlling protein synthesis and physical growth.", "هرمون من الفص الأمامي للنخامية ينظم بناء البروتين والنمو الجسمي."],
          ["Acromegaly", "الأكروميجالي (تضخم الأطراف)", "Enlarged hands, feet and face bones from excess GH in adults.", "تضخم اليدين والقدمين وعظام الوجه لزيادة هرمون النمو في البالغين."],
          ["ADH (vasopressin)", "الهرمون المانع لإدرار البول", "Posterior lobe hormone that increases water reabsorption in the nephrons.", "هرمون من الفص الخلفي يزيد إعادة امتصاص الماء في النفرونات."],
          ["Oxytocin", "الأوكسيتوسين", "Increases uterine contractions in labour and releases milk.", "يزيد انقباضات الرحم عند الولادة ويطلق اللبن."]
        ],
        lab: { parts: [{ type: "sec3bio_pituitary" }] },
        quiz: [
          { q: ["Hypersecretion of growth hormone in an adult causes...", "زيادة إفراز هرمون النمو في الشخص البالغ تسبب..."],
            c: [["acromegaly", "الأكروميجالي"], ["gigantism", "العملقة"], ["dwarfism", "القزامة"], ["cretinism", "القماءة"]],
            off: ["In adults extra GH enlarges bones of the extremities and face: acromegaly. Gigantism happens only in childhood.", "في البالغين تؤدي الزيادة إلى تضخم عظام الأطراف والوجه (الأكروميجالي)، أما العملقة فتحدث في الطفولة فقط."],
            sto: ["Grown-up bones can't get longer, so they get wider at the ends.", "عظام البالغ لا تطول فتتضخم أطرافها."] },
          { q: ["Which scientist first named hormones after finding the pancreas still secretes juice when its nerves are cut?", "أي العلماء سمّى الهرمونات بعد أن وجد أن البنكرياس يفرز عصارته رغم قطع أعصابه؟"],
            c: [["Starling", "ستارلنج"], ["Jensen", "جنسن"], ["Huxley", "هكسلي"], ["Griffith", "جريفيث"]],
            off: ["Starling (1905) concluded there is non-nervous stimulation by chemicals from the duodenal lining and called them hormones.", "استنتج ستارلنج (١٩٠٥) وجود تنبيه غير عصبي بمواد من بطانة الاثني عشر وسماها الهرمونات."],
            sto: ["Jensen worked on plant auxins; Starling cut the 'phone lines' and the message still arrived.", "جنسن درس الأوكسينات، أما ستارلنج فقطع خطوط الهاتف ووصلت الرسالة رغم ذلك."] },
          { q: ["Hormones are secreted in very small amounts measured in micrograms. One microgram equals...", "تُفرز الهرمونات بكميات ضئيلة تقاس بالميكروجرام. الميكروجرام يساوي..."],
            c: [["1/1000 milligram", "١ / ١٠٠٠ مللي جرام"], ["1/100 gram", "١ / ١٠٠ جرام"], ["1000 milligrams", "١٠٠٠ مللي جرام"], ["1/10 milligram", "١ / ١٠ مللي جرام"]],
            off: ["The book defines a microgram as 1/1000 milligram (" + eq("10⁻³ mg = 10⁻⁶ g") + ").", "يعرّف الكتاب الميكروجرام بأنه ١ / ١٠٠٠ مللي جرام (" + eq("10⁻³ mg = 10⁻⁶ g") + ")."],
            sto: ["A pinch of a pinch of a pinch, yet enough to change a body.", "قليل جدًا جدًا، ومع ذلك يكفي لتغيير الجسم."] },
          { q: ["Which hormone decreases urine volume by increasing water reabsorption in the nephron tubules?", "أي هرمون يقلل حجم البول بزيادة إعادة امتصاص الماء في أنابيب النفرونات؟"],
            c: [["ADH (vasopressin)", "الهرمون المانع لإدرار البول (الفازوبرسين)"], ["Oxytocin", "الأوكسيتوسين"], ["Prolactin", "البرولاكتين"], ["TSH", "الهرمون المنبه للدرقية"]],
            off: ["ADH from the posterior lobe increases water reabsorption and also raises blood pressure.", "الهرمون المانع لإدرار البول من الفص الخلفي يزيد إعادة امتصاص الماء ويرفع ضغط الدم."],
            sto: ["When Hana is thirsty, ADH tells the kidneys: save every drop.", "عندما تعطش هنا يقول الهرمون للكليتين: وفّرا كل نقطة."] },
          { q: ["FSH in males stimulates...", "الهرمون المنبه للحوصلة (FSH) في الذكور ينبه..."],
            c: [["formation of seminiferous tubules and sperms", "تكوين الأنابيب المنوية والحيوانات المنوية"], ["secretion of interstitial cells", "إفراز الخلايا البينية"], ["milk production", "إفراز اللبن"], ["the corpus luteum", "الجسم الأصفر"]],
            off: ["FSH: Graafian follicles in females, seminiferous tubules and sperms in males. LH: corpus luteum in females, interstitial cells in males.", "FSH: حويصلات جراف في الإناث والأنابيب المنوية والحيوانات المنوية في الذكور، وLH: الجسم الأصفر في الإناث والخلايا البينية في الذكور."],
            sto: ["Same hormone, two buildings: ovary in girls, testis in boys.", "هرمون واحد ومبنيان: المبيض في الإناث والخصية في الذكور."] },
          { q: ["Why is the pituitary gland called the master gland?", "لماذا تسمى الغدة النخامية بالغدة الرئيسية؟"],
            c: [["It controls the function and secretion of most endocrine glands", "لأنها تتحكم في وظائف وإفرازات معظم الغدد الصماء"], ["It is the largest gland", "لأنها أكبر غدة"], ["It secretes digestive juices", "لأنها تفرز عصارات هاضمة"], ["It has ducts", "لأن لها قنوات"]],
            off: ["Its tropic hormones (TSH, ACTH, FSH, LH) direct the thyroid, adrenal cortex and gonads.", "هرموناتها المنبهة (TSH وACTH وFSH وLH) توجه الدرقية وقشرة الأدرينالية والمناسل."],
            sto: ["The school headmaster doesn't teach every class, but directs all the teachers.", "ناظر المدرسة لا يدرّس كل فصل، لكنه يوجه كل المدرسين."] },
          { q: ["Gynaecologists sometimes use which hormone to accelerate childbirth?", "يستخدم أطباء النساء أحيانًا أي هرمون لتسريع الولادة؟"],
            c: [["Oxytocin", "الأوكسيتوسين"], ["Relaxin", "الريلاكسين"], ["Progesterone", "البروجسترون"], ["ADH", "الهرمون المانع لإدرار البول"]],
            off: ["Oxytocin stimulates strong contractions of the uterine muscles during labour.", "الأوكسيتوسين ينبه انقباضات قوية لعضلات الرحم أثناء الولادة."],
            sto: ["It is the 'push' signal in the delivery room.", "إنه إشارة الدفع في غرفة الولادة."] }
        ]
      },
      {
        id: "sec3biou2l2", icon: "🦋", page: 29,
        title: { en: "Thyroid, Parathyroid and Adrenal Glands", ar: "الغدة الدرقية والجارات الدرقية والغدتان الكظريتان" },
        idea: {
          official: {
            en: ["The thyroid lies in the neck in front of the trachea, two lobes joined by an isthmus. It secretes thyroxine (needs iodine), which stimulates growth and the basal metabolic rate, and calcitonin, which lowers blood calcium.",
              "Iodine deficiency causes simple goitre. Severe hyposecretion in childhood causes cretinism; in adults it causes myxoedema (dry skin, weight gain, slow heart, cold intolerance).",
              "Hypersecretion causes exophthalmic goitre: enlarged neck, protruding eyes, high metabolic rate, weight loss and fast heartbeat.",
              "The four parathyroid lobes secrete parathormone when blood calcium falls. Parathormone and calcitonin keep blood calcium normal. Excess parathormone makes bones fragile; too little causes painful muscle spasms.",
              "The adrenal cortex secretes glucocorticoids (cortisone: carbohydrate metabolism), mineralocorticoids (aldosterone: reabsorbs Na⁺, excretes K⁺) and sex hormones.",
              "The adrenal medulla secretes adrenaline and noradrenaline for emergencies: they raise blood glucose (glycogen breakdown), heart rate and blood pressure."],
            ar: ["تقع الغدة الدرقية في الرقبة أمام القصبة الهوائية، وتتكون من فصين يصل بينهما برزخ، وتفرز الثيروكسين (يلزم لتكوينه اليود) الذي ينبه النمو ومعدل الأيض الأساسي، والكالسيتونين الذي يخفض كالسيوم الدم.",
              "نقص اليود يسبب الجويتر البسيط، والنقص الشديد للإفراز في الطفولة يسبب القماءة، وفي البالغين يسبب الميكسيديما (جفاف الجلد وزيادة الوزن وبطء ضربات القلب وعدم تحمل البرد).",
              "زيادة الإفراز تسبب الجويتر الجحوظي: تضخم الرقبة وجحوظ العينين وارتفاع معدل الأيض ونقص الوزن وسرعة ضربات القلب.",
              "تفرز الجارات الدرقية الأربعة هرمون الباراثورمون عند انخفاض كالسيوم الدم، ويحافظ الباراثورمون والكالسيتونين على المستوى الطبيعي للكالسيوم، وزيادة الباراثورمون تجعل العظام هشة ونقصه يسبب تشنجات عضلية مؤلمة.",
              "تفرز قشرة الغدة الكظرية (الأدرينالية) هرمونات السكر (الكورتيزون: أيض الكربوهيدرات) وهرمونات الأملاح (الألدوستيرون: إعادة امتصاص الصوديوم وإخراج البوتاسيوم) وهرمونات الجنس.",
              "ويفرز نخاع الغدة الأدرينالين والنورأدرينالين في حالات الطوارئ، فيرفعان جلوكوز الدم (بتحليل الجليكوجين) وسرعة القلب وضغط الدم."]
          },
          story: {
            en: ["Mostafa's grandmother in Siwa always buys iodized salt. She remembers neighbours with swollen necks years ago: simple goitre from too little iodine.",
              "Mostafa's teacher, in contrast, has protruding eyes and loses weight easily: an overactive thyroid, exophthalmic goitre.",
              "During the school football final, a stray dog runs onto the pitch. Mostafa's heart races and he sprints away faster than ever: adrenaline from his adrenal medulla raised his glucose and heart rate.",
              "At night his aunt mentions that her parathyroid was overactive; her bones became fragile because calcium was pulled out of them.",
              "Small glands in the neck and above the kidneys keep calcium, sugar and energy balanced every day."],
            ar: ["جدة مصطفى في سيوة تشتري دائمًا الملح المعالج باليود، وتتذكر جيرانًا منذ سنوات أصيبوا بتضخم الرقبة: الجويتر البسيط لنقص اليود.",
              "أما معلمه فعيناه جاحظتان ويفقد وزنه بسهولة: نشاط زائد للدرقية، أي الجويتر الجحوظي.",
              "وفي نهائي كرة القدم المدرسي دخل كلب ضال الملعب، فتسارع قلب مصطفى وجرى أسرع من أي وقت؛ الأدرينالين من نخاع غدته الكظرية رفع الجلوكوز وسرعة القلب.",
              "وفي المساء ذكرت عمته أن جاراتها الدرقية كانت نشطة زيادة، فصارت عظامها هشة لأن الكالسيوم سُحب منها.",
              "غدد صغيرة في الرقبة وفوق الكليتين تحفظ توازن الكالسيوم والسكر والطاقة كل يوم."]
          }
        },
        words: [
          ["Thyroxine", "الثيروكسين", "Thyroid hormone that needs iodine; controls growth and basal metabolic rate.", "هرمون الدرقية يلزم لتكوينه اليود، وينظم النمو ومعدل الأيض الأساسي."],
          ["Calcitonin", "الكالسيتونين", "Thyroid hormone that lowers blood calcium and prevents its withdrawal from bones.", "هرمون درقي يخفض كالسيوم الدم ويمنع سحبه من العظام."],
          ["Parathormone", "الباراثورمون", "Parathyroid hormone released when blood calcium is low.", "هرمون الجارات الدرقية ويُفرز عند انخفاض كالسيوم الدم."],
          ["Simple goitre", "الجويتر البسيط", "Thyroid enlargement from iodine deficiency.", "تضخم الغدة الدرقية لنقص اليود."],
          ["Exophthalmic goitre", "الجويتر الجحوظي", "Thyroid enlargement with protruding eyes from excess thyroxine.", "تضخم الدرقية مع جحوظ العينين لزيادة الثيروكسين."],
          ["Aldosterone", "الألدوستيرون", "Adrenal cortex hormone: increases Na⁺ reabsorption and K⁺ excretion.", "هرمون من قشرة الكظرية يزيد إعادة امتصاص الصوديوم وإخراج البوتاسيوم."],
          ["Adrenaline", "الأدرينالين", "Adrenal medulla hormone for emergencies: raises glucose, heart rate and blood pressure.", "هرمون نخاع الكظرية للطوارئ يرفع الجلوكوز وسرعة القلب وضغط الدم."]
        ],
        lab: { parts: [{ type: "sec3bio_calcium" }] },
        quiz: [
          { q: ["Which two hormones keep the blood calcium level normal?", "أي هرمونين يحافظان على المستوى الطبيعي للكالسيوم في الدم؟"],
            c: [["Parathormone and calcitonin", "الباراثورمون والكالسيتونين"], ["Insulin and glucagon", "الأنسولين والجلوكاجون"], ["Thyroxine and adrenaline", "الثيروكسين والأدرينالين"], ["ADH and oxytocin", "المانع لإدرار البول والأوكسيتوسين"]],
            off: ["Parathormone raises blood calcium (from bones); calcitonin lowers it and prevents its withdrawal from bones.", "الباراثورمون يرفع كالسيوم الدم (من العظام)، والكالسيتونين يخفضه ويمنع سحبه من العظام."],
            sto: ["One opens the calcium bank, the other closes it.", "أحدهما يفتح بنك الكالسيوم والآخر يغلقه."] },
          { q: ["Simple goitre is caused by...", "يحدث الجويتر البسيط بسبب..."],
            c: [["iodine deficiency in food, water and air", "نقص اليود في الغذاء والماء والهواء"], ["excess thyroxine", "زيادة الثيروكسين"], ["excess parathormone", "زيادة الباراثورمون"], ["lack of insulin", "نقص الأنسولين"]],
            off: ["Less iodine means less thyroxine, and the gland enlarges; treatment is iodine supplement in salt.", "نقص اليود يعني نقص الثيروكسين فتتضخم الغدة، والعلاج بإضافة اليود إلى الملح."],
            sto: ["That is why Mostafa's grandmother buys iodized salt.", "لهذا تشتري جدة مصطفى الملح المعالج باليود."] },
          { q: ["A child with retarded physical and mental growth, large head and short stature most likely has...", "طفل متأخر النمو الجسمي والعقلي بحجم رأس كبير وقصر قامة غالبًا مصاب بـ..."],
            c: [["cretinism (thyroxine deficiency in childhood)", "القماءة (نقص الثيروكسين في الطفولة)"], ["gigantism", "العملقة"], ["myxoedema in adults", "الميكسيديما في البالغين"], ["exophthalmic goitre", "الجويتر الجحوظي"]],
            off: ["Acute decrease of thyroid secretion in childhood causes cretinism with permanent mental retardation if untreated.", "النقص الحاد في إفراز الدرقية في الطفولة يسبب القماءة مع تأخر عقلي دائم إذا لم يُعالج."],
            sto: ["Thyroxine is the growth engine's fuel during childhood.", "الثيروكسين وقود محرك النمو في الطفولة."] },
          { q: ["Hyposecretion of parathormone leads to...", "نقص إفراز الباراثورمون يؤدي إلى..."],
            c: [["painful muscle spasms from low blood calcium", "تشنجات عضلية مؤلمة لانخفاض كالسيوم الدم"], ["fragile bones liable to fracture", "عظام هشة قابلة للكسر"], ["protruding eyes", "جحوظ العينين"], ["high blood glucose", "ارتفاع جلوكوز الدم"]],
            off: ["Low parathormone means low blood calcium: convulsions, spasms and nervous excitability. Fragile bones come from hypersecretion.", "نقص الباراثورمون يعني انخفاض الكالسيوم: تشنجات واستثارة عصبية، أما هشاشة العظام فمن زيادة الإفراز."],
            sto: ["Without the calcium 'calm-down', nerves and muscles fire too easily.", "بدون الكالسيوم المهدئ تُستثار الأعصاب والعضلات بسهولة."] },
          { q: ["Which hormone increases sodium reabsorption and potassium excretion by the kidney?", "أي هرمون يزيد إعادة امتصاص الصوديوم وإخراج البوتاسيوم بالكلية؟"],
            c: [["Aldosterone", "الألدوستيرون"], ["Cortisone", "الكورتيزون"], ["Adrenaline", "الأدرينالين"], ["Calcitonin", "الكالسيتونين"]],
            off: ["Aldosterone is a mineralocorticoid from the adrenal cortex controlling mineral balance.", "الألدوستيرون من هرمونات الأملاح التي تفرزها قشرة الكظرية وينظم توازن الأملاح."],
            sto: ["It is the salt accountant of the body.", "إنه محاسب الأملاح في الجسم."] },
          { q: ["During fear and fight, adrenaline raises blood glucose by...", "أثناء الخوف والقتال يرفع الأدرينالين جلوكوز الدم عن طريق..."],
            c: [["breaking down liver glycogen into glucose", "تحليل جليكوجين الكبد إلى جلوكوز"], ["converting glucose into fat", "تحويل الجلوكوز إلى دهون"], ["stopping digestion of starch", "إيقاف هضم النشا"], ["increasing insulin secretion", "زيادة إفراز الأنسولين"]],
            off: ["Adrenaline and noradrenaline break down liver glycogen, increase heart rate and force and raise blood pressure.", "الأدرينالين والنورأدرينالين يحللان جليكوجين الكبد ويزيدان سرعة وقوة القلب ويرفعان الضغط."],
            sto: ["The dog on the pitch: Mostafa's liver opened its sugar store instantly.", "الكلب في الملعب: كبد مصطفى فتح مخزن السكر فورًا."] }
        ]
      },
      {
        id: "sec3biou2l3", icon: "🍬", page: 33,
        title: { en: "The Pancreas, Sex Glands and Gut Hormones", ar: "البنكرياس والغدد الجنسية وهرمونات القناة الهضمية" },
        idea: {
          official: {
            en: ["The pancreas is a mixed gland: its acini secrete pancreatic juice through a duct, and its islets of Langerhans secrete hormones into the blood.",
              "Alpha cells (few) secrete glucagon; beta cells (the majority) secrete insulin. Together they keep blood glucose between " + eq("80 - 120 mg / 100 cm³") + ".",
              "Insulin lowers blood glucose: it lets monosaccharides (except fructose) enter cells to be oxidized and converts glucose to glycogen or fat. Glucagon raises glucose by converting liver glycogen to glucose.",
              "Low insulin causes diabetes mellitus: high blood glucose, glucose in urine, a large urine volume, continuous thirst and frequent urination.",
              "Gonads secrete sex hormones (steroids): testosterone from interstitial cells of the testes; oestrogen from the Graafian follicle, corpus luteum and placenta; progesterone from the corpus luteum and placenta; relaxin from the placenta and uterus.",
              "Gut hormones: gastrin activates gastric juice secretion; secretin and cholecystokinin stimulate the pancreas, and cholecystokinin contracts the gall bladder."],
            ar: ["البنكرياس غدة مشتركة: تفرز حويصلاته العصارة البنكرياسية عبر قناة، وتفرز جزر لانجرهانز هرموناتها في الدم مباشرة.",
              "خلايا ألفا (قليلة العدد) تفرز الجلوكاجون، وخلايا بيتا (الأغلبية) تفرز الأنسولين، ويحافظان معًا على جلوكوز الدم بين " + eq("80 - 120 mg / 100 cm³") + ".",
              "الأنسولين يخفض جلوكوز الدم؛ يسمح بدخول السكريات الأحادية (عدا الفركتوز) إلى الخلايا لتتأكسد ويحول الجلوكوز إلى جليكوجين أو دهون، والجلوكاجون يرفع الجلوكوز بتحويل جليكوجين الكبد إلى جلوكوز.",
              "نقص الأنسولين يسبب البول السكري: ارتفاع جلوكوز الدم وظهوره في البول وزيادة حجم البول والإحساس المستمر بالعطش وكثرة التبول.",
              "تفرز المناسل هرمونات جنسية ستيرويدية: التستوستيرون من الخلايا البينية للخصية، والإستروجين من حويصلة جراف والجسم الأصفر والمشيمة، والبروجسترون من الجسم الأصفر والمشيمة، والريلاكسين من المشيمة والرحم.",
              "هرمونات القناة الهضمية: الجاسترين ينشط إفراز العصارة المعدية، والسكرتين والكوليسيستوكينين ينبهان البنكرياس، والكوليسيستوكينين يقبض الحويصلة المرارية."]
          },
          story: {
            en: ["Salma's father has diabetes. Before Iftar in Ramadan he checks his blood glucose: 75 mg per 100 cm³, slightly low after fasting.",
              "During the fast, his alpha cells release glucagon so the liver turns glycogen into glucose and keeps him going.",
              "After Iftar with dates and konafa, his glucose shoots up. His beta cells cannot make enough insulin, so he injects it.",
              "Salma remembers that before treatment he was always thirsty and woke at night to urinate: glucose was escaping in his urine, dragging water with it.",
              "His doctor says the goal is simple: keep glucose between 80 and 120 mg per 100 cm³."],
            ar: ["والد سلمى مريض بالسكر، وقبل الإفطار في رمضان يقيس جلوكوز دمه: ٧٥ مجم لكل ١٠٠ سم³، منخفض قليلًا بعد الصيام.",
              "أثناء الصيام تفرز خلايا ألفا الجلوكاجون فيحول الكبد الجليكوجين إلى جلوكوز ويبقيه نشيطًا.",
              "وبعد الإفطار بالبلح والكنافة يرتفع الجلوكوز بشدة، وخلايا بيتا لا تصنع أنسولينًا كافيًا فيحقنه.",
              "تتذكر سلمى أنه قبل العلاج كان عطشانًا دائمًا ويستيقظ ليلًا للتبول؛ فالجلوكوز كان يخرج في البول ساحبًا معه الماء.",
              "ويقول طبيبه إن الهدف بسيط: إبقاء الجلوكوز بين ٨٠ و١٢٠ مجم لكل ١٠٠ سم³."]
          }
        },
        words: [
          ["Islets of Langerhans", "جزر لانجرهانز", "Endocrine cell groups in the pancreas (alpha and beta cells).", "مجموعات خلايا صماء في البنكرياس (خلايا ألفا وبيتا)."],
          ["Insulin", "الأنسولين", "Beta-cell hormone that lowers blood glucose.", "هرمون خلايا بيتا الذي يخفض جلوكوز الدم."],
          ["Glucagon", "الجلوكاجون", "Alpha-cell hormone that converts liver glycogen to glucose.", "هرمون خلايا ألفا الذي يحول جليكوجين الكبد إلى جلوكوز."],
          ["Diabetes mellitus", "البول السكري", "Disease from low insulin: high blood glucose, glucose in urine, thirst.", "مرض ينتج عن نقص الأنسولين: ارتفاع الجلوكوز وظهوره في البول والعطش."],
          ["Mixed gland", "الغدة المشتركة", "A gland with both exocrine (duct) and endocrine secretions, e.g. the pancreas.", "غدة لها إفراز خارجي (بقناة) وإفراز داخلي، مثل البنكرياس."],
          ["Progesterone", "البروجسترون", "Hormone of the corpus luteum and placenta that prepares the uterus for the embryo.", "هرمون الجسم الأصفر والمشيمة الذي يهيئ الرحم لاستقبال الجنين."],
          ["Secretin", "السكرتين", "Intestinal hormone that stimulates the pancreas to secrete its juice.", "هرمون معوي ينبه البنكرياس لإفراز عصارته."]
        ],
        lab: { parts: [{ type: "sec3bio_glucose" }] },
        quiz: [
          { q: ["What is the normal range of blood glucose according to the book?", "ما المعدل الطبيعي لجلوكوز الدم كما في الكتاب؟"],
            c: [["80 - 120 mg / 100 cm³", "٨٠ - ١٢٠ مجم / ١٠٠ سم³"], ["8 - 12 mg / 100 cm³", "٨ - ١٢ مجم / ١٠٠ سم³"], ["180 - 220 mg / 100 cm³", "١٨٠ - ٢٢٠ مجم / ١٠٠ سم³"], ["800 - 1200 mg / 100 cm³", "٨٠٠ - ١٢٠٠ مجم / ١٠٠ سم³"]],
            off: ["Insulin and glucagon keep glucose constant at 80 - 120 mg per 100 cm³ of blood.", "يحافظ الأنسولين والجلوكاجون على الجلوكوز ثابتًا بين ٨٠ و١٢٠ مجم لكل ١٠٠ سم³ دم."],
            sto: ["Salma's father's target zone on his glucose meter.", "المنطقة المستهدفة على جهاز قياس السكر لوالد سلمى."] },
          { q: ["A blood sample has 1.5 g of glucose in 1 litre. What is this in mg / 100 cm³, and is it normal?", "عينة دم بها ١٫٥ جم جلوكوز في لتر واحد. كم تساوي بالمجم / ١٠٠ سم³، وهل هي طبيعية؟"],
            c: [["150 mg / 100 cm³, above normal", "١٥٠ مجم / ١٠٠ سم³، أعلى من الطبيعي"], ["15 mg / 100 cm³, below normal", "١٥ مجم / ١٠٠ سم³، أقل من الطبيعي"], ["1500 mg / 100 cm³, normal", "١٥٠٠ مجم / ١٠٠ سم³، طبيعي"], ["100 mg / 100 cm³, normal", "١٠٠ مجم / ١٠٠ سم³، طبيعي"]],
            off: [eq("1.5 g = 1500 mg in 1000 cm³ → 1500 ÷ 10 = 150 mg / 100 cm³") + ", above 120.", eq("1.5 g = 1500 mg / 1000 cm³ → 1500 ÷ 10 = 150 mg / 100 cm³") + "، أي أعلى من ١٢٠."],
            sto: ["After the konafa, the meter would read 150: time for insulin.", "بعد الكنافة سيقرأ الجهاز ١٥٠؛ حان وقت الأنسولين."] },
          { q: ["Glucagon raises blood glucose by converting glycogen to glucose in...", "يرفع الجلوكاجون جلوكوز الدم بتحويل الجليكوجين إلى جلوكوز في..."],
            c: [["the liver only", "الكبد فقط"], ["muscles only", "العضلات فقط"], ["the pancreas", "البنكرياس"], ["all body cells", "جميع خلايا الجسم"]],
            off: ["The book stresses that glucagon converts glycogen to glucose only in the liver.", "يؤكد الكتاب أن الجلوكاجون يحول الجليكوجين إلى جلوكوز في الكبد فقط."],
            sto: ["The liver is the city's sugar warehouse; glucagon holds the key.", "الكبد مخزن سكر المدينة، والجلوكاجون يحمل المفتاح."] },
          { q: ["Diabetic patients feel continuous thirst because...", "يشعر مريض السكر بالعطش المستمر لأن..."],
            c: [["glucose is excreted in urine with a large volume of water", "الجلوكوز يُخرج في البول مع كمية كبيرة من الماء"], ["insulin is excessive", "الأنسولين زائد"], ["the thyroid is overactive", "الدرقية نشطة زيادة"], ["ADH is excessive", "الهرمون المانع لإدرار البول زائد"]],
            off: ["High blood glucose appears in urine, carrying much water with it: excessive micturition and thirst.", "ارتفاع الجلوكوز يجعله يظهر في البول حاملًا كثيرًا من الماء، فيكثر التبول والعطش."],
            sto: ["Every glucose molecule leaving takes water with it, so the body cries for more.", "كل جزيء جلوكوز يخرج يأخذ معه ماءً، فيطلب الجسم المزيد."] },
          { q: ["The pancreas is described as a mixed gland because it...", "يوصف البنكرياس بأنه غدة مشتركة لأنه..."],
            c: [["has exocrine (pancreatic juice) and endocrine (hormones) secretions", "له إفراز خارجي (العصارة البنكرياسية) وإفراز داخلي (هرمونات)"], ["secretes two hormones only", "يفرز هرمونين فقط"], ["is made of muscle and bone", "مكون من عضلات وعظام"], ["lies in two body cavities", "يقع في تجويفين"]],
            off: ["Acini secrete juice through a duct into the duodenum; islets of Langerhans secrete insulin and glucagon into blood.", "الحويصلات تفرز العصارة عبر قناة إلى الاثني عشر، وجزر لانجرهانز تفرز الأنسولين والجلوكاجون في الدم."],
            sto: ["One factory, two delivery routes: a pipe and the bloodstream.", "مصنع واحد وطريقا توزيع: ماسورة ومجرى الدم."] },
          { q: ["Which hormone relaxes the pubic symphysis at the end of pregnancy?", "أي هرمون يرخي الارتفاق العاني في نهاية الحمل؟"],
            c: [["Relaxin", "الريلاكسين"], ["Oxytocin", "الأوكسيتوسين"], ["Prolactin", "البرولاكتين"], ["Testosterone", "التستوستيرون"]],
            off: ["Relaxin from the placenta and uterus relaxes the pubic symphysis to facilitate delivery.", "الريلاكسين من المشيمة والرحم يرخي الارتفاق العاني لتسهيل الولادة."],
            sto: ["Its name says it: it relaxes the pelvis before birth.", "اسمه يشرحه: يرخي الحوض قبل الولادة."] },
          { q: ["Which hormone stimulates the gall bladder to contract and release bile?", "أي هرمون ينبه الحويصلة المرارية للانقباض وإفراز العصارة الصفراوية؟"],
            c: [["Cholecystokinin", "الكوليسيستوكينين"], ["Gastrin", "الجاسترين"], ["Insulin", "الأنسولين"], ["Calcitonin", "الكالسيتونين"]],
            off: ["Cholecystokinin from the intestinal lining stimulates the pancreas and contracts the gall bladder.", "الكوليسيستوكينين من بطانة الأمعاء ينبه البنكرياس ويقبض الحويصلة المرارية."],
            sto: ["After the fatty fiteer, this hormone orders the bile out.", "بعد الفطير المشلتت يأمر هذا الهرمون بخروج الصفراء."] }
        ]
      }
    ]
  });
})();

/* ---------- Sec 3 Biology: Unit 3 Reproduction, Unit 4 Immunity ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var G = E.SCIG.sec3bio;

  /* ================= UNIT 3: REPRODUCTION ================= */
  G.units.push({
    id: "sec3biou3", num: 3, icon: "🌱", color: "green",
    title: { en: "Reproduction in Living Organisms", ar: "التكاثر في الكائنات الحية" },
    lessons: [
      {
        id: "sec3biou3l1", icon: "🦠", page: 40,
        title: { en: "Asexual Reproduction", ar: "التكاثر اللاجنسي" },
        idea: {
          official: {
            en: ["Reproduction is less vital for the individual than other functions, but it assures the continuity of the species. Aquatic organisms, parasites and short-lived organisms produce more offspring.",
              "Asexual reproduction needs one parent and depends on mitosis, so each offspring receives a complete copy (2N) of the chromosomes and resembles the parent exactly.",
              "Binary fission: a unicellular organism (Amoeba, Paramecium, bacteria) divides into two. Under bad conditions Amoeba forms a cyst and divides inside it repeatedly. After n divisions one cell gives " + eq("2ⁿ") + " cells.",
              "Budding (yeast, Hydra, sponges), regeneration (Planaria, Hydra, sea star; limited to wound healing in higher vertebrates) and sporogony (bread mould, mushroom, ferns).",
              "Parthenogenesis: an egg develops without fertilization. In honey bees unfertilized eggs give haploid (N) drones; fertilized eggs give diploid (2N) queens and workers.",
              "Tissue culture: carrot pieces in coconut milk grew into whole plants, proving every somatic plant cell carries all the genetic information."],
            ar: ["التكاثر أقل أهمية لحياة الفرد من الوظائف الأخرى، لكنه يضمن استمرار النوع، وتنتج الكائنات المائية والطفيليات والكائنات قصيرة العمر نسلًا أكثر.",
              "يحتاج التكاثر اللاجنسي إلى فرد واحد ويعتمد على الانقسام الميتوزي، فيحصل كل فرد ناتج على نسخة كاملة (2N) من الكروموسومات ويشبه الأب تمامًا.",
              "الانشطار الثنائي: ينقسم الكائن وحيد الخلية (الأميبا والبراميسيوم والبكتيريا) إلى خليتين، وفي الظروف غير المناسبة تكوّن الأميبا حوصلة وتنقسم داخلها عدة مرات، وبعد n انقسام تعطي الخلية " + eq("2ⁿ") + " خلية.",
              "التبرعم (الخميرة والهيدرا والإسفنج)، والتجدد (البلاناريا والهيدرا ونجم البحر، ويقتصر على التئام الجروح في الفقاريات الراقية)، والتكاثر بالجراثيم (عفن الخبز وعيش الغراب والسراخس).",
              "التكاثر البكري: تنمو البويضة دون إخصاب، ففي نحل العسل تعطي البيض غير المخصب ذكورًا أحادية المجموعة (N)، والمخصب يعطي ملكات وشغالات ثنائية المجموعة (2N).",
              "زراعة الأنسجة: نمت قطع الجزر في لبن جوز الهند إلى نباتات كاملة، مما أثبت أن كل خلية جسدية نباتية تحمل كل المعلومات الوراثية."]
          },
          story: {
            en: ["Youssef forgets a loaf of baladi bread in a bag for a week. It is covered with black dots: bread mould spreading by spores.",
              "His biology teacher brings a drop of Nile water under the microscope. An Amoeba stretches and splits into two identical daughters: binary fission.",
              "Youssef calculates: if each Amoeba divides once an hour, one cell becomes 2⁵ = 32 cells in five hours.",
              "At his uncle's apiary in Fayoum, he learns that drones come from unfertilized eggs and are haploid, while queens and workers are diploid.",
              "His cousin at the agriculture faculty grows banana plantlets from tiny tissue pieces: tissue culture makes thousands of identical plants."],
            ar: ["نسي يوسف رغيف عيش بلدي في كيس لمدة أسبوع فغطته نقاط سوداء: عفن الخبز ينتشر بالجراثيم.",
              "وأحضر معلم الأحياء نقطة من ماء النيل تحت المجهر، فاستطالت أميبا وانقسمت إلى خليتين متطابقتين: انشطار ثنائي.",
              "حسب يوسف: إذا انقسمت كل أميبا مرة كل ساعة تصبح الخلية الواحدة ٢⁵ = ٣٢ خلية في خمس ساعات.",
              "وفي منحل عمه بالفيوم عرف أن الذكور تنتج من بيض غير مخصب وهي أحادية المجموعة، بينما الملكات والشغالات ثنائية المجموعة.",
              "وابن عمه في كلية الزراعة يزرع نبتات موز من قطع أنسجة صغيرة؛ فزراعة الأنسجة تنتج آلاف النباتات المتطابقة."]
          }
        },
        words: [
          ["Asexual reproduction", "التكاثر اللاجنسي", "Reproduction from one parent by mitosis; offspring identical to the parent.", "تكاثر من فرد واحد بالانقسام الميتوزي، والأفراد الناتجة مطابقة للأب."],
          ["Binary fission", "الانشطار الثنائي", "A unicellular organism divides into two new individuals.", "انقسام الكائن وحيد الخلية إلى فردين جديدين."],
          ["Budding", "التبرعم", "A bud grows from the parent and develops into a new individual (yeast, Hydra).", "ينمو برعم من الأب ويكوّن فردًا جديدًا (الخميرة والهيدرا)."],
          ["Regeneration", "التجدد", "Growth of lost parts or of a whole organism from a piece (Planaria).", "تعويض الأجزاء المفقودة أو نمو كائن كامل من جزء منه (البلاناريا)."],
          ["Sporogony", "التكاثر بالجراثيم", "Reproduction by spores with thick coats (bread mould, mushroom).", "التكاثر بجراثيم ذات أغلفة سميكة (عفن الخبز وعيش الغراب)."],
          ["Parthenogenesis", "التكاثر البكري", "Development of an egg into a new individual without fertilization.", "نمو البويضة إلى فرد جديد دون إخصاب."],
          ["Tissue culture", "زراعة الأنسجة", "Growing plant tissues in a nutrient medium with hormones into whole plants.", "تنمية الأنسجة النباتية في وسط غذائي به هرمونات حتى تصبح نباتات كاملة."]
        ],
        lab: { parts: [{ type: "sec3bio_fission" }, {
          type: "sort",
          prompt: ["Tap an organism, then tap its method of asexual reproduction.", "اضغط على كائن، ثم اضغط على طريقة تكاثره اللاجنسي."],
          bins: [["f", "➗", "Binary fission", "الانشطار الثنائي"], ["b", "🫧", "Budding", "التبرعم"], ["r", "✂️", "Regeneration", "التجدد"], ["s", "🍄", "Spores", "الجراثيم"]],
          items: [[["Amoeba", "الأميبا"], "f"], [["Bacteria", "البكتيريا"], "f"], [["Yeast", "الخميرة"], "b"], [["Planaria", "البلاناريا"], "r"], [["Sea star", "نجم البحر"], "r"], [["Bread mould", "عفن الخبز"], "s"], [["Mushroom", "عيش الغراب"], "s"]]
        }] },
        quiz: [
          { q: ["One Amoeba divides by binary fission every hour. How many Amoebae are there after 6 hours?", "أميبا واحدة تنقسم بالانشطار الثنائي كل ساعة. كم أميبا بعد ٦ ساعات؟"],
            c: [["64", "٦٤"], ["12", "١٢"], ["32", "٣٢"], ["36", "٣٦"]],
            off: [eq("2⁶ = 64") + ": the number doubles each division.", eq("2⁶ = 64") + "؛ العدد يتضاعف مع كل انقسام."],
            sto: ["1, 2, 4, 8, 16, 32, 64: Youssef's culture doubles every hour.", "١، ٢، ٤، ٨، ١٦، ٣٢، ٦٤؛ مزرعة يوسف تتضاعف كل ساعة."] },
          { q: ["Asexual reproduction depends on which type of cell division?", "يعتمد التكاثر اللاجنسي على أي نوع من الانقسام؟"],
            c: [["Mitosis, giving 2N cells", "الميتوزي، فتنتج خلايا 2N"], ["Meiosis, giving N cells", "الميوزي، فتنتج خلايا N"], ["Fertilization", "الإخصاب"], ["Conjugation only", "الاقتران فقط"]],
            off: ["Cells from mitosis receive a complete copy (2N) of the original chromosomes.", "الخلايا الناتجة من الميتوزي تحصل على نسخة كاملة (2N) من الكروموسومات الأصلية."],
            sto: ["A photocopy, not a mix: every daughter is the parent again.", "نسخة طبق الأصل لا خليط؛ كل ابنة هي الأم من جديد."] },
          { q: ["Drones of the honey bee are haploid (N) because they develop from...", "ذكور نحل العسل أحادية المجموعة (N) لأنها تنمو من..."],
            c: [["unfertilized eggs (parthenogenesis)", "بيض غير مخصب (تكاثر بكري)"], ["fertilized eggs", "بيض مخصب"], ["buds", "براعم"], ["spores", "جراثيم"]],
            off: ["Eggs that develop without fertilization give drones (N); fertilized eggs give queens and workers (2N).", "البيض غير المخصب يعطي الذكور (N)، والمخصب يعطي الملكات والشغالات (2N)."],
            sto: ["The drones at Youssef's uncle's apiary have only their mother's chromosomes.", "ذكور منحل عم يوسف تحمل كروموسومات الأم فقط."] },
          { q: ["In Hydra with 2N = 30 chromosomes, a bud cell contains...", "في الهيدرا حيث 2N = ٣٠ كروموسومًا، تحتوي خلية البرعم على..."],
            c: [["30 chromosomes", "٣٠ كروموسومًا"], ["15 chromosomes", "١٥ كروموسومًا"], ["60 chromosomes", "٦٠ كروموسومًا"], ["45 chromosomes", "٤٥ كروموسومًا"]],
            off: ["Budding uses mitosis, so the bud keeps the full diploid number: 30.", "التبرعم يعتمد على الميتوزي فيحتفظ البرعم بالعدد الثنائي الكامل: ٣٠."],
            sto: ["Halving happens only in meiosis; a bud is a full copy.", "التنصيف يحدث فقط في الميوزي، والبرعم نسخة كاملة."] },
          { q: ["The carrot tissue-culture experiment proved that...", "أثبتت تجربة زراعة أنسجة الجزر أن..."],
            c: [["any somatic plant cell contains all the genetic information of the plant", "أي خلية جسدية نباتية تحتوي على كل المعلومات الوراثية للنبات"], ["only seeds can give new plants", "البذور وحدها تعطي نباتات جديدة"], ["coconut milk contains DNA", "لبن جوز الهند يحتوي على DNA"], ["carrot cells cannot divide", "خلايا الجزر لا تنقسم"]],
            off: ["Isolated cells grown in a medium with plant hormones (coconut milk) developed into whole carrot plants.", "الخلايا المعزولة التي نمت في وسط به هرمونات نباتية (لبن جوز الهند) تطورت إلى نباتات جزر كاملة."],
            sto: ["Every cell holds the full recipe book, not just one page.", "كل خلية تحمل كتاب الوصفات كاملًا لا صفحة واحدة."] },
          { q: ["Which is an advantage of reproduction by spores?", "أي مما يلي من مميزات التكاثر بالجراثيم؟"],
            c: [["Quick propagation, tolerance to hard conditions and wide distribution", "سرعة الانتشار وتحمل الظروف القاسية والانتشار لمسافات بعيدة"], ["Genetic variation in every spore", "تنوع وراثي في كل جرثومة"], ["It needs two parents", "يحتاج إلى أبوين"], ["Spores need fertilization", "الجراثيم تحتاج إلى إخصاب"]],
            off: ["Spores have a thick coat and little water, are carried by air and grow by mitosis on a suitable medium.", "للجراثيم غلاف سميك وقليل من الماء، وتنقلها الرياح وتنمو بالميتوزي على الوسط المناسب."],
            sto: ["Bread mould spores travel through the kitchen air to every forgotten loaf.", "جراثيم عفن الخبز تسافر في هواء المطبخ إلى كل رغيف منسي."] }
        ]
      },
      {
        id: "sec3biou3l2", icon: "🔄", page: 46,
        title: { en: "Sexual Reproduction and Alternation of Generations", ar: "التكاثر الجنسي وتبادل الأجيال" },
        idea: {
          official: {
            en: ["Sexual reproduction needs male and female gametes that fuse at fertilization. Gametes form by meiosis (N), and fertilization restores the diploid number: " + eq("N + N → 2N") + ".",
              "It costs more time and energy than asexual reproduction, but it gives continuous genetic innovation that helps species survive environmental change.",
              "Conjugation in Spirogyra (haploid filaments): scalariform between two filaments or lateral between adjacent cells; the zygote becomes a zygospore that divides by meiosis into 4 nuclei, 3 degenerate.",
              "Male gametes are small and motile (4 from each original cell); female gametes are large, stationary and rich in food. Fertilization may be external (bony fish, frogs) or internal.",
              "Plasmodium (malaria): sporozoites from the female Anopheles reproduce asexually by schizogony in the liver and red blood cells; gametocytes form gametes in the mosquito, then sporogony gives new sporozoites.",
              "Fern (Polypodium): the sporophyte (2N) makes spores (N) by meiosis; a spore grows into a heart-shaped gametophyte (N) with antheridia and archegonia; fertilization gives a zygote (2N) and a new sporophyte."],
            ar: ["يحتاج التكاثر الجنسي إلى أمشاج مذكرة ومؤنثة تندمج عند الإخصاب، وتتكون الأمشاج بالانقسام الميوزي (N)، ويعيد الإخصاب العدد الثنائي: " + eq("N + N → 2N") + ".",
              "يستهلك وقتًا وطاقة أكثر من التكاثر اللاجنسي، لكنه يمنح تجديدًا وراثيًا مستمرًا يساعد الأنواع على البقاء أمام تغيرات البيئة.",
              "الاقتران في الإسبيروجيرا (خيوط أحادية المجموعة): سلمي بين خيطين أو جانبي بين خليتين متجاورتين، وتصبح اللاقحة جرثومة لاقحية تنقسم ميوزيًا إلى ٤ أنوية يضمحل منها ٣.",
              "الأمشاج المذكرة صغيرة ومتحركة (٤ من كل خلية أصلية)، والمؤنثة كبيرة ساكنة غنية بالغذاء، والإخصاب قد يكون خارجيًا (الأسماك العظمية والضفادع) أو داخليًا.",
              "البلازموديوم (الملاريا): تتكاثر الأسبوروزويتات من أنثى الأنوفيليس لاجنسيًا بالتكاثر الانقسامي في الكبد وكرات الدم الحمراء، وتكوّن الخلايا الجاميتية أمشاجًا في البعوضة، ثم يعطي التكاثر الجرثومي أسبوروزويتات جديدة.",
              "السرخس (البوليبوديوم): الطور الجرثومي (2N) يكوّن جراثيم (N) بالميوزي، والجرثومة تنمو إلى طور مشيجي قلبي (N) يحمل الأنثريدات والأرشيجونات، والإخصاب يعطي لاقحة (2N) وطورًا جرثوميًا جديدًا."]
          },
          story: {
            en: ["Laila's grandfather caught malaria decades ago in Upper Egypt: fever, chills and sweating every two days.",
              "Her teacher explains why: merozoites burst out of red blood cells together about every 48 hours, releasing toxins.",
              "In the mosquito's stomach the parasite reproduces sexually; in the human body it reproduces asexually. Two hosts, two methods: alternation of generations.",
              "At a plant nursery in Giza, Laila turns over a fern leaf and sees brown dots, the sori, full of spores.",
              "The nursery owner shows her a tiny green heart-shaped plant on wet soil: the gametophyte, the forgotten half of the fern's life."],
            ar: ["أصيب جد ليلى بالملاريا منذ عقود في الصعيد: حمى ورعشة وعرق كل يومين.",
              "شرحت المعلمة السبب: تنطلق الميروزويتات من كرات الدم الحمراء معًا كل ٤٨ ساعة تقريبًا مطلقة مواد سامة.",
              "في معدة البعوضة يتكاثر الطفيل جنسيًا، وفي جسم الإنسان يتكاثر لاجنسيًا؛ عائلان وطريقتان: تبادل الأجيال.",
              "وفي مشتل بالجيزة قلبت ليلى ورقة سرخس فرأت نقاطًا بنية هي البثرات المملوءة بالجراثيم.",
              "وأراها صاحب المشتل نباتًا أخضر صغيرًا قلبي الشكل على تربة رطبة: الطور المشيجي، النصف المنسي من حياة السرخس."]
          }
        },
        words: [
          ["Fertilization", "الإخصاب", "Fusion of the male gamete nucleus with the female gamete nucleus to form a 2N zygote.", "اندماج نواة المشيج المذكر مع نواة المشيج المؤنث لتكوين لاقحة 2N."],
          ["Conjugation", "الاقتران", "Sexual reproduction in Spirogyra by fusion of the contents of two cells.", "تكاثر جنسي في الإسبيروجيرا باندماج محتويات خليتين."],
          ["Zygospore", "الجرثومة اللاقحية", "Thick-walled zygote of Spirogyra that resists bad conditions.", "لاقحة الإسبيروجيرا ذات الجدار السميك التي تقاوم الظروف غير المناسبة."],
          ["Alternation of generations", "تبادل الأجيال", "A life cycle alternating sexual and asexual generations.", "دورة حياة يتبادل فيها جيل جنسي وجيل لاجنسي."],
          ["Sporophyte", "الطور الجرثومي", "The diploid (2N) generation that produces spores by meiosis.", "الجيل ثنائي المجموعة (2N) الذي ينتج الجراثيم بالميوزي."],
          ["Gametophyte", "الطور المشيجي", "The haploid (N) generation that produces gametes.", "الجيل أحادي المجموعة (N) الذي ينتج الأمشاج."],
          ["Schizogony", "التكاثر الانقسامي", "Asexual multiplication of Plasmodium in the liver and red blood cells.", "التكاثر اللاجنسي للبلازموديوم في الكبد وكرات الدم الحمراء."]
        ],
        lab: { parts: [{ type: "sec3bio_cycle" }] },
        quiz: [
          { q: ["In the fern life cycle, which generation is haploid (N)?", "في دورة حياة السرخس، أي الأطوار أحادي المجموعة (N)؟"],
            c: [["The gametophyte", "الطور المشيجي"], ["The sporophyte", "الطور الجرثومي"], ["The zygote", "اللاقحة"], ["The spore mother cell", "الخلية الجرثومية الأم"]],
            off: ["Spores (N) grow into the heart-shaped gametophyte (N); the zygote and sporophyte are 2N.", "الجراثيم (N) تنمو إلى الطور المشيجي القلبي (N)، واللاقحة والطور الجرثومي 2N."],
            sto: ["The small green heart on the nursery soil carries one set of chromosomes.", "القلب الأخضر الصغير على تربة المشتل يحمل مجموعة كروموسومات واحدة."] },
          { q: ["Malaria symptoms recur about every 2 days because...", "تتكرر أعراض الملاريا كل يومين تقريبًا لأن..."],
            c: [["merozoites are released together with destruction of infected red blood cells", "الميروزويتات تنطلق معًا مع تحطم كرات الدم الحمراء المصابة"], ["the mosquito bites every 2 days", "البعوضة تلدغ كل يومين"], ["sporozoites reach the salivary glands", "الأسبوروزويتات تصل إلى الغدد اللعابية"], ["gametes fuse in the liver", "الأمشاج تندمج في الكبد"]],
            off: ["Schizogony cycles in red cells end with mass release of merozoites and toxins every 2 days.", "دورات التكاثر الانقسامي في كرات الدم تنتهي بانطلاق جماعي للميروزويتات والسموم كل يومين."],
            sto: ["Grandfather's fever had a timetable set by the parasite.", "حمى الجد كان لها جدول يضبطه الطفيل."] },
          { q: ["Where does sexual reproduction (gamete fusion) of Plasmodium occur?", "أين يحدث التكاثر الجنسي (اندماج الأمشاج) للبلازموديوم؟"],
            c: [["In the stomach of the female Anopheles mosquito", "في معدة أنثى بعوضة الأنوفيليس"], ["In the human liver", "في كبد الإنسان"], ["In human red blood cells", "في كرات الدم الحمراء للإنسان"], ["In the mosquito's salivary glands", "في الغدد اللعابية للبعوضة"]],
            off: ["Gametocytes taken with blood develop into gametes in the mosquito's stomach and fuse into a zygote (ookinete).", "الخلايا الجاميتية التي تنتقل مع الدم تتطور إلى أمشاج في معدة البعوضة وتندمج إلى لاقحة متحركة."],
            sto: ["The parasite's 'wedding hall' is inside the mosquito.", "قاعة زفاف الطفيل داخل البعوضة."] },
          { q: ["After conjugation in Spirogyra, the zygospore divides by meiosis into 4 nuclei. How many survive?", "بعد الاقتران في الإسبيروجيرا تنقسم الجرثومة اللاقحية ميوزيًا إلى ٤ أنوية. كم منها يبقى؟"],
            c: [["1", "١"], ["2", "٢"], ["3", "٣"], ["4", "٤"]],
            off: ["Three nuclei degenerate and the fourth divides by mitosis to form a new filament: 4 - 3 = 1.", "تضمحل ثلاث أنوية وتنقسم الرابعة ميتوزيًا لتكوين خيط جديد: ٤ - ٣ = ١."],
            sto: ["Four candidates, one winner.", "أربعة مرشحين وفائز واحد."] },
          { q: ["Why is sexual reproduction important despite needing more time and energy?", "لماذا يعد التكاثر الجنسي مهمًا رغم أنه يحتاج إلى وقت وطاقة أكبر؟"],
            c: [["It gives offspring continuous genetic innovation to face environmental change", "يمنح النسل تجديدًا وراثيًا مستمرًا لمواجهة تغيرات البيئة"], ["It produces more offspring than asexual reproduction", "ينتج نسلًا أكثر من اللاجنسي"], ["Offspring are identical to the parent", "النسل مطابق للأب"], ["It needs one parent only", "يحتاج إلى فرد واحد فقط"]],
            off: ["Offspring blend nuclear material from both parents, giving genetic variety.", "يجمع النسل مادة نووية من الأبوين فيحدث تنوع وراثي."],
            sto: ["Mixing two family recipes can make a dish that survives any taste.", "خلط وصفتين عائليتين قد ينتج طبقًا يناسب كل الأذواق."] },
          { q: ["In a fern with 2N = 24, how many chromosomes does a spore have?", "في سرخس عدد كروموسوماته 2N = ٢٤، كم كروموسومًا في الجرثومة؟"],
            c: [["12", "١٢"], ["24", "٢٤"], ["48", "٤٨"], ["36", "٣٦"]],
            off: ["Spore mother cells (2N) divide by meiosis into spores (N): " + eq("24 ÷ 2 = 12") + ".", "الخلايا الجرثومية الأم (2N) تنقسم ميوزيًا إلى جراثيم (N): " + eq("24 ÷ 2 = 12") + "."],
            sto: ["Meiosis cuts the chromosome set in half.", "الميوزي يقسم مجموعة الكروموسومات إلى النصف."] }
        ]
      },
      {
        id: "sec3biou3l3", icon: "🌸", page: 52,
        title: { en: "Reproduction in Flowering Plants", ar: "التكاثر في النباتات الزهرية" },
        idea: {
          official: {
            en: ["A complete flower has 4 whorls: calyx (sepals), corolla (petals), androecium (stamens: filament + anther with 4 pollen sacs) and gynoecium (carpels: ovary, style, stigma).",
              "Pollen: each spore mother cell (2N) in the anther divides by meiosis into 4 microspores (N); each becomes a pollen grain with a tube nucleus and a generative nucleus.",
              "Ovule: the spore mother cell divides by meiosis into 4 cells, 3 degenerate; the fourth forms the embryo sac, whose nucleus divides 3 times by mitosis: " + eq("2³ = 8 nuclei") + " (egg, 2 synergids, 3 antipodals, 2 polar nuclei).",
              "Pollination may be self or cross. The pollen tube grows to the micropyle; the generative nucleus gives 2 male nuclei.",
              "Double fertilization: " + eq("male (N) + egg (N) → zygote (2N)") + " and " + eq("male (N) + 2 polar nuclei (2N) → endosperm (3N)") + " (triple fusion).",
              "The ovary becomes the fruit (pericarp) and the ovule the seed. Seeds are endospermic (wheat, maize, castor) or exendospermic (bean, pea). Parthenocarpy forms seedless fruits (banana) or can be induced with auxins."],
            ar: ["للزهرة الكاملة ٤ محيطات: الكأس (السبلات)، والتويج (البتلات)، والطلع (الأسدية: خيط ومتك به ٤ أكياس لقاح)، والمتاع (الكرابل: مبيض وقلم وميسم).",
              "حبوب اللقاح: تنقسم كل خلية جرثومية أم (2N) في المتك ميوزيًا إلى ٤ جراثيم صغيرة (N)، وتصبح كل منها حبة لقاح بنواة أنبوبية ونواة تناسلية.",
              "البويضة: تنقسم الخلية الجرثومية الأم ميوزيًا إلى ٤ خلايا يضمحل منها ٣، والرابعة تكوّن الكيس الجنيني الذي تنقسم نواته ٣ مرات ميتوزيًا: " + eq("2³ = 8 nuclei") + " (بويضة ومساعدتان و٣ سمتية ونواتان قطبيتان).",
              "التلقيح ذاتي أو خلطي، وينمو أنبوب اللقاح حتى النقير، وتنقسم النواة التناسلية إلى نواتين ذكريتين.",
              "الإخصاب المزدوج: " + eq("male (N) + egg (N) → zygote (2N)") + " و" + eq("male (N) + 2 polar nuclei (2N) → endosperm (3N)") + " (الاندماج الثلاثي).",
              "يتحول المبيض إلى ثمرة (الغلاف الثمري) والبويضة إلى بذرة، والبذور إندوسبرمية (القمح والذرة والخروع) أو غير إندوسبرمية (الفول والبسلة)، والإثمار العذري يكوّن ثمارًا بلا بذور (الموز) أو يُستحث بالأوكسينات."]
          },
          story: {
            en: ["Mariam visits her uncle's orchard near Ismailia in spring. Bees hop from mango flower to mango flower, carrying pollen: cross-pollination.",
              "She dissects a lily in the school lab: six stamens with dusty anthers and one carpel with a sticky stigma.",
              "Her teacher draws the pollen tube racing down the style. One male nucleus fertilizes the egg; the other joins the two polar nuclei to make the endosperm.",
              "At lunch Mariam eats a banana and notices no seeds: parthenocarpy, a fruit formed without fertilization.",
              "The pomegranate in her bag still wears its crown of calyx and stamens on top."],
            ar: ["زارت مريم بستان عمها قرب الإسماعيلية في الربيع، والنحل يتنقل بين أزهار المانجو حاملًا حبوب اللقاح: تلقيح خلطي.",
              "وشرحت زهرة زنبق في معمل المدرسة: ستة أسدية بمتوك مغبرة وكربلة واحدة بميسم لزج.",
              "رسمت المعلمة أنبوب اللقاح يندفع في القلم، فنواة ذكرية تخصب البويضة والأخرى تندمج مع النواتين القطبيتين لتكوين الإندوسبرم.",
              "وفي الغداء أكلت مريم موزة ولاحظت أنها بلا بذور: إثمار عذري، ثمرة تكونت دون إخصاب.",
              "أما الرمانة في حقيبتها فما زالت تحمل تاج الكأس والأسدية في قمتها."]
          }
        },
        words: [
          ["Double fertilization", "الإخصاب المزدوج", "One male nucleus fertilizes the egg and the other fuses with the two polar nuclei.", "نواة ذكرية تخصب البويضة والأخرى تندمج مع النواتين القطبيتين."],
          ["Endosperm", "الإندوسبرم", "Triploid (3N) food tissue that nourishes the embryo.", "نسيج غذائي ثلاثي المجموعة (3N) يغذي الجنين."],
          ["Embryo sac", "الكيس الجنيني", "Structure in the ovule containing the egg, synergids, antipodals and polar nuclei.", "تركيب في البويضة يحتوي على البويضة والمساعدتين والسمتية والنواتين القطبيتين."],
          ["Micropyle", "النقير", "A minute hole in the ovule integuments through which the pollen tube enters.", "ثقب دقيق في أغلفة البويضة يدخل منه أنبوب اللقاح."],
          ["Cross-pollination", "التلقيح الخلطي", "Transfer of pollen to the stigma of another plant of the same species.", "انتقال حبوب اللقاح إلى ميسم نبات آخر من النوع نفسه."],
          ["Parthenocarpy", "الإثمار العذري", "Development of a seedless fruit without fertilization.", "تكوين ثمرة بلا بذور دون إخصاب."],
          ["False fruit", "الثمرة الكاذبة", "A fruit in which a flower part other than the ovary stores food (apple).", "ثمرة يخزن فيها جزء من الزهرة غير المبيض الغذاء (التفاح)."]
        ],
        lab: { parts: [{ type: "sec3bio_pollen" }] },
        quiz: [
          { q: ["In a plant with 2N = 14, how many chromosomes are in the endosperm nucleus?", "في نبات عدد كروموسوماته 2N = ١٤، كم كروموسومًا في نواة الإندوسبرم؟"],
            c: [["21", "٢١"], ["14", "١٤"], ["7", "٧"], ["28", "٢٨"]],
            off: ["Endosperm is 3N: N = 7, so " + eq("3 × 7 = 21") + ".", "الإندوسبرم 3N، وN = ٧، إذن " + eq("3 × 7 = 21") + "."],
            sto: ["One male nucleus (7) + two polar nuclei (7 + 7) = 21.", "نواة ذكرية (٧) + نواتان قطبيتان (٧ + ٧) = ٢١."] },
          { q: ["How many nuclei are formed in the embryo sac after its nucleus divides mitotically three times?", "كم نواة تتكون في الكيس الجنيني بعد انقسام نواته ميتوزيًا ثلاث مرات؟"],
            c: [["8", "٨"], ["3", "٣"], ["6", "٦"], ["4", "٤"]],
            off: [eq("2³ = 8") + " nuclei: egg, 2 synergids, 3 antipodals and 2 polar nuclei.", eq("2³ = 8") + " أنوية: بويضة ومساعدتان و٣ سمتية ونواتان قطبيتان."],
            sto: ["1 → 2 → 4 → 8: three doublings.", "١ ← ٢ ← ٤ ← ٨: ثلاث مضاعفات."] },
          { q: ["One anther contains 200 spore mother cells. How many pollen grains can they produce?", "متك به ٢٠٠ خلية جرثومية أم. كم حبة لقاح يمكن أن تنتج؟"],
            c: [["800", "٨٠٠"], ["200", "٢٠٠"], ["400", "٤٠٠"], ["1600", "١٦٠٠"]],
            off: ["Each spore mother cell gives 4 microspores by meiosis, each becoming a pollen grain: " + eq("200 × 4 = 800") + ".", "كل خلية جرثومية أم تعطي ٤ جراثيم صغيرة بالميوزي، تصبح كل منها حبة لقاح: " + eq("200 × 4 = 800") + "."],
            sto: ["Four pollen grains from every mother cell.", "أربع حبات لقاح من كل خلية أم."] },
          { q: ["Which of these seeds is exendospermic (food stored in the cotyledons)?", "أي البذور الآتية غير إندوسبرمية (الغذاء مخزن في الفلقتين)؟"],
            c: [["Bean", "الفول"], ["Wheat", "القمح"], ["Maize", "الذرة"], ["Castor", "الخروع"]],
            off: ["In bean and pea the embryo consumes all the endosperm, so the cotyledons store food. Wheat, maize and castor are endospermic.", "في الفول والبسلة يستهلك الجنين الإندوسبرم كله فتخزن الفلقتان الغذاء، أما القمح والذرة والخروع فبذور إندوسبرمية."],
            sto: ["The two halves of a ful medames bean are its fat lunch boxes.", "نصفا حبة الفول المدمس هما علبتا الغداء الممتلئتان."] },
          { q: ["Seedless fruits can be produced artificially by spraying stigmas with...", "يمكن إنتاج ثمار بلا بذور صناعيًا برش المياسم بـ..."],
            c: [["pollen extract or indole / naphthol acetic acid", "مستخلص حبوب اللقاح أو إندول / نفثالين حمض الأسيتيك"], ["salt solution", "محلول ملحي"], ["glucose solution", "محلول جلوكوز"], ["colchicine only", "الكولشيسين فقط"]],
            off: ["Auxins stimulate the ovary to form a fruit even without fertilization: parthenocarpy.", "الأوكسينات تنبه المبيض لتكوين الثمرة حتى دون إخصاب: الإثمار العذري."],
            sto: ["Like the banana Mariam ate: fruit with no seeds inside.", "مثل الموزة التي أكلتها مريم: ثمرة بلا بذور."] },
          { q: ["The apple is a false fruit because...", "التفاح ثمرة كاذبة لأن..."],
            c: [["the receptacle shares in fruit formation and stores food", "التخت يشترك في تكوين الثمرة ويخزن الغذاء"], ["it has no seeds", "ليس بها بذور"], ["the calyx remains on it", "الكأس يبقى عليها"], ["it forms without pollination", "تتكون دون تلقيح"]],
            off: ["A false fruit is one in which a flower part other than the ovary enlarges to store food.", "الثمرة الكاذبة هي التي يتضخم فيها جزء غير المبيض ليخزن الغذاء."],
            sto: ["The crunchy part of the apple is mostly receptacle, not ovary.", "الجزء المقرمش من التفاحة معظمه تخت لا مبيض."] },
          { q: ["After fertilization, the ovary wall becomes the...", "بعد الإخصاب يتحول جدار المبيض إلى..."],
            c: [["pericarp", "الغلاف الثمري"], ["testa", "القصرة"], ["endosperm", "الإندوسبرم"], ["embryo", "الجنين"]],
            off: ["Ovary → fruit, ovary wall → pericarp, ovule → seed, integuments → testa (seed coat).", "المبيض ← الثمرة، وجدار المبيض ← الغلاف الثمري، والبويضة ← البذرة، والأغلفة ← القصرة."],
            sto: ["The orange peel was once the wall of the ovary.", "قشر البرتقال كان يومًا جدار المبيض."] }
        ]
      },
      {
        id: "sec3biou3l4", icon: "👶", page: 59,
        title: { en: "Reproduction in Man", ar: "التكاثر في الإنسان" },
        idea: {
          official: {
            en: ["Male system: two testes in the scrotum (cooler, needed for spermatogenesis), epididymis, vas deferens, seminal vesicles, prostate and Cowper's glands. Interstitial cells secrete testosterone; Sertoli cells nourish sperms.",
              "Spermatogenesis: multiplication (mitosis, spermatogonia 2N), growth (primary spermatocytes 2N), maturation (meiosis I and II → spermatids N) and metamorphosis into sperms. One primary spermatocyte gives 4 sperms.",
              "Oogenesis: one primary oocyte (2N) gives one ovum (N) and polar bodies (3 in total); meiosis II completes when the sperm enters. A sperm head has 23 chromosomes.",
              "Menstrual cycle (28 days): FSH grows the Graafian follicle (oestrogen thickens the endometrium); LH on day 14 causes ovulation and the corpus luteum (oestrogen + progesterone); without fertilization the corpus luteum degenerates and menstruation lasts 3-5 days.",
              "Fertilization occurs in the anterior third of the Fallopian tube: zygote → morula → blastocyst, implanted at the end of the first week. The amnion protects, the chorion forms the placenta, which takes over progesterone secretion in the 4th month.",
              "Twins: fraternal (2 ova, 2 sperms, 2 placentas) or identical (1 ovum, 1 sperm, cells separate). Test tube babies: fertilization outside, blastocyst returned to the uterus."],
            ar: ["الجهاز التناسلي الذكري: خصيتان في كيس الصفن (أبرد، وهو لازم لتكوين الحيوانات المنوية)، والبربخ والوعاء الناقل والحويصلتان المنويتان والبروستاتا وغدتا كوبر، وتفرز الخلايا البينية التستوستيرون وتغذي خلايا سرتولي الحيوانات المنوية.",
              "تكوين الحيوانات المنوية: التضاعف (ميتوزي، أمهات المني 2N)، والنمو (الخلايا المنوية الأولية 2N)، والنضج (ميوزي أول وثانٍ ← طلائع منوية N)، والتشكل إلى حيوانات منوية، والخلية المنوية الأولية تعطي ٤ حيوانات منوية.",
              "تكوين البويضات: الخلية البيضية الأولية (2N) تعطي بويضة واحدة (N) وأجسامًا قطبية (٣ في المجموع)، ويكتمل الانقسام الميوزي الثاني عند دخول الحيوان المنوي، ورأس الحيوان المنوي به ٢٣ كروموسومًا.",
              "الدورة الشهرية (٢٨ يومًا): FSH ينمّي حويصلة جراف (والإستروجين يزيد سمك بطانة الرحم)، وLH في اليوم ١٤ يسبب التبويض وتكوين الجسم الأصفر (إستروجين وبروجسترون)، ودون إخصاب يضمحل الجسم الأصفر ويحدث الطمث لمدة ٣-٥ أيام.",
              "يحدث الإخصاب في الثلث الأمامي لقناة فالوب: لاقحة ← توتية ← بلاستوسيست تنغرس في نهاية الأسبوع الأول، والرهل (الأمنيون) يحمي، والكوريون يكوّن المشيمة التي تتولى إفراز البروجسترون في الشهر الرابع.",
              "التوائم: غير متماثلة (بويضتان وحيوانان منويان ومشيمتان) أو متماثلة (بويضة وحيوان منوي واحد وتنفصل الخلايا)، وأطفال الأنابيب: إخصاب خارجي ثم إعادة البلاستوسيست إلى الرحم."]
          },
          story: {
            en: ["Dina's aunt is a gynaecologist at Kasr El Aini. Dina shadows her for a school project on the menstrual cycle.",
              "On a chart her aunt shows FSH rising first, then an LH surge on day 14 that releases the ovum.",
              "A pregnant patient in her third month asks why she must take care: the corpus luteum is still making progesterone until the placenta takes over in the fourth month.",
              "In the next room, an ultrasound shows twins sharing one placenta: identical twins from one ovum and one sperm.",
              "Dina's aunt adds that in IVF the ovum is fertilized in the lab and returned to the uterus at the blastocyst stage."],
            ar: ["خالة دينا طبيبة نساء في قصر العيني، وتتابعها دينا لمشروع مدرسي عن الدورة الشهرية.",
              "أرتها خالتها على رسم بياني ارتفاع FSH أولًا، ثم اندفاع LH في اليوم ١٤ الذي يطلق البويضة.",
              "وسألت مريضة حامل في شهرها الثالث لماذا يجب أن تحذر، فالجسم الأصفر ما زال يفرز البروجسترون حتى تتولى المشيمة المهمة في الشهر الرابع.",
              "وفي الغرفة المجاورة أظهر السونار توأمين يشتركان في مشيمة واحدة: توأمان متماثلان من بويضة واحدة وحيوان منوي واحد.",
              "وأضافت الخالة أنه في أطفال الأنابيب تُخصب البويضة في المعمل وتعاد إلى الرحم في طور البلاستوسيست."]
          }
        },
        words: [
          ["Spermatogenesis", "تكوين الحيوانات المنوية", "Formation of sperms in seminiferous tubules in four phases.", "تكوين الحيوانات المنوية في الأنابيب المنوية على أربع مراحل."],
          ["Oogenesis", "تكوين البويضات", "Formation of the ovum: multiplication, growth and maturation phases.", "تكوين البويضة: مراحل التضاعف والنمو والنضج."],
          ["Graafian follicle", "حويصلة جراف", "Mature ovarian follicle containing the ovum; secretes oestrogen.", "حويصلة مبيضية ناضجة تحتوي على البويضة وتفرز الإستروجين."],
          ["Corpus luteum", "الجسم الأصفر", "Formed from the follicle after ovulation; secretes progesterone and oestrogen.", "يتكون من الحويصلة بعد التبويض ويفرز البروجسترون والإستروجين."],
          ["Placenta", "المشيمة", "Organ formed by chorion villi and endometrium; exchanges materials and secretes progesterone.", "عضو تكوّنه خملات الكوريون وبطانة الرحم، يتبادل المواد ويفرز البروجسترون."],
          ["Blastocyst", "البلاستوسيست", "Hollow ball of cells that implants in the endometrium at the end of week 1.", "كرة مجوفة من الخلايا تنغرس في بطانة الرحم في نهاية الأسبوع الأول."],
          ["Identical twins", "التوائم المتماثلة", "Twins from one ovum and one sperm; genetically identical.", "توائم من بويضة واحدة وحيوان منوي واحد، متطابقة وراثيًا."]
        ],
        lab: { parts: [{ type: "sec3bio_menstrual" }] },
        quiz: [
          { q: ["100 primary spermatocytes complete spermatogenesis. How many sperms are produced?", "أكملت ١٠٠ خلية منوية أولية تكوين الحيوانات المنوية. كم حيوانًا منويًا ينتج؟"],
            c: [["400", "٤٠٠"], ["100", "١٠٠"], ["200", "٢٠٠"], ["800", "٨٠٠"]],
            off: ["Each primary spermatocyte undergoes meiosis I and II giving 4 spermatids → 4 sperms: " + eq("100 × 4 = 400") + ".", "كل خلية منوية أولية تمر بالانقسام الميوزي الأول والثاني فتعطي ٤ طلائع ← ٤ حيوانات منوية: " + eq("100 × 4 = 400") + "."],
            sto: ["Four from each, like four players from every academy.", "أربعة من كل خلية، مثل أربعة لاعبين من كل أكاديمية."] },
          { q: ["100 primary oocytes complete oogenesis. How many ova are produced?", "أكملت ١٠٠ خلية بيضية أولية تكوين البويضات. كم بويضة تنتج؟"],
            c: [["100", "١٠٠"], ["400", "٤٠٠"], ["300", "٣٠٠"], ["50", "٥٠"]],
            off: ["Each primary oocyte gives only 1 ovum and 3 polar bodies: " + eq("100 × 1 = 100") + ".", "كل خلية بيضية أولية تعطي بويضة واحدة و٣ أجسام قطبية: " + eq("100 × 1 = 100") + "."],
            sto: ["The ovum keeps all the food; the polar bodies are left with almost nothing.", "البويضة تحتفظ بكل الغذاء والأجسام القطبية لا تكاد تأخذ شيئًا."] },
          { q: ["In a 28-day menstrual cycle, ovulation happens on about day...", "في دورة شهرية مدتها ٢٨ يومًا يحدث التبويض في اليوم..."],
            c: [["14, triggered by LH", "١٤ بتأثير LH"], ["1, triggered by FSH", "١ بتأثير FSH"], ["28, triggered by progesterone", "٢٨ بتأثير البروجسترون"], ["5, at the end of menstruation", "٥ في نهاية الطمث"]],
            off: ["The anterior pituitary secretes LH on day 14, releasing the ovum from the Graafian follicle.", "يفرز الفص الأمامي للنخامية LH في اليوم ١٤ فتنطلق البويضة من حويصلة جراف."],
            sto: ["Day 14 is the LH peak on Dina's aunt's chart.", "اليوم ١٤ هو قمة LH على رسم خالة دينا."] },
          { q: ["If the corpus luteum is removed before the 4th month of pregnancy...", "إذا استُؤصل الجسم الأصفر قبل الشهر الرابع من الحمل..."],
            c: [["miscarriage occurs", "يحدث إجهاض"], ["twins are formed", "يتكون توأمان"], ["ovulation stops permanently", "يتوقف التبويض نهائيًا"], ["nothing happens", "لا يحدث شيء"]],
            off: ["Until the placenta takes over in month 4, the corpus luteum's progesterone preserves the endometrium.", "حتى تتولى المشيمة في الشهر الرابع يحافظ بروجسترون الجسم الأصفر على بطانة الرحم."],
            sto: ["Removing the only guard before the replacement arrives leaves the gate open.", "إزالة الحارس الوحيد قبل وصول البديل تترك البوابة مفتوحة."] },
          { q: ["Where does fertilization of the human ovum take place?", "أين يحدث إخصاب البويضة في الإنسان؟"],
            c: [["The anterior third of the Fallopian tube", "الثلث الأمامي لقناة فالوب"], ["The uterus", "الرحم"], ["The ovary", "المبيض"], ["The cervix", "عنق الرحم"]],
            off: ["The ovum is ready for 1-2 days after release; fertilization occurs in the upper (anterior) third of the oviduct.", "تكون البويضة جاهزة ١-٢ يوم بعد خروجها، ويحدث الإخصاب في الثلث العلوي (الأمامي) لقناة المبيض."],
            sto: ["The meeting point is halfway, not at home.", "نقطة اللقاء في منتصف الطريق لا في البيت."] },
          { q: ["Twins with separate placentas who differ genetically are...", "التوأمان اللذان لكل منهما مشيمة مستقلة ويختلفان وراثيًا هما..."],
            c: [["fraternal twins from two ova and two sperms", "توأمان غير متماثلين من بويضتين وحيوانين منويين"], ["identical twins", "توأمان متماثلان"], ["Siamese twins", "توأمان ملتصقان"], ["clones", "نسخ مستنسخة"]],
            off: ["Two ova fertilized by two sperms develop independently with separate sacs and placentas.", "تُخصب بويضتان بحيوانين منويين فينمو كل جنين مستقلًا بكيس ومشيمة."],
            sto: ["Just brothers who happen to share a birthday.", "مجرد إخوة يتصادف أنهم يتشاركون عيد الميلاد."] },
          { q: ["Why do the testes lie outside the body in the scrotum?", "لماذا تقع الخصيتان خارج الجسم في كيس الصفن؟"],
            c: [["A temperature lower than body temperature suits spermatogenesis", "لأن درجة حرارة أقل من حرارة الجسم تناسب تكوين الحيوانات المنوية"], ["To secrete milk", "لإفراز اللبن"], ["To make urine", "لتكوين البول"], ["To be near the placenta", "لتكون قرب المشيمة"]],
            off: ["If a testis fails to descend, spermatogenesis does not occur, causing infertility.", "إذا لم تنزل الخصية لا يحدث تكوين للحيوانات المنوية فيحدث العقم."],
            sto: ["Sperm factories need air-conditioning.", "مصانع الحيوانات المنوية تحتاج إلى تكييف."] }
        ]
      }
    ]
  });

  /* ================= UNIT 4: IMMUNITY ================= */
  G.units.push({
    id: "sec3biou4", num: 4, icon: "🛡️", color: "red",
    title: { en: "Immunity in Living Organisms", ar: "المناعة في الكائنات الحية" },
    lessons: [
      {
        id: "sec3biou4l1", icon: "🧫", page: 84,
        title: { en: "Immunity in Plants and the Human Immune System", ar: "المناعة في النبات والجهاز المناعي في الإنسان" },
        idea: {
          official: {
            en: ["Immunity is the body's ability, through the immune system, to resist pathogens by preventing their entry or by attacking and destroying them.",
              "Plants have structural immunity (cutin, cell walls with lignin, cork with suberin, tyloses blocking xylem, gum, hypersensitive response) and biochemical immunity (phenols, glycosides, non-protein amino acids, detoxifying enzymes).",
              "Primary lymphoid organs are the bone marrow and thymus (thymosin matures T-cells); secondary organs are the spleen, tonsils, Peyer's patches, appendix and lymph nodes.",
              "B-cells (10-15%) produce antibodies; T-cells (about 80%) mature in the thymus: helper (TH), cytotoxic (TC) and suppressor (TS); natural killer cells (5-10%) secrete perforin. Monocytes become macrophages.",
              "Antibodies (immunoglobulins IgG, IgM, IgD, IgE, IgA) are Y-shaped: 2 heavy + 2 light chains joined by disulphide bonds, with 2 identical antigen-binding (variable) sites that fit their antigen like a lock and key.",
              "Antibodies act by neutralization, agglutination (e.g. IgM), precipitation, activating complements and neutralizing toxins. Helper chemicals: chemokines, interleukins, complements and interferons."],
            ar: ["المناعة هي قدرة الجسم من خلال الجهاز المناعي على مقاومة مسببات الأمراض بمنع دخولها أو بمهاجمتها وتدميرها.",
              "للنبات مناعة تركيبية (الكيوتين، وجدر الخلايا باللجنين، والفلين بالسوبرين، والتيلوزات التي تسد الخشب، والصمغ، والاستجابة الحساسة) ومناعة كيميائية حيوية (الفينولات والجليكوسيدات والأحماض الأمينية غير البروتينية والإنزيمات المزيلة للسمية).",
              "الأعضاء الليمفاوية الأولية هي نخاع العظم والغدة التيموسية (يفرز الثيموسين لإنضاج الخلايا التائية)، والثانوية هي الطحال واللوزتان وبقع باير والزائدة الدودية والعقد الليمفاوية.",
              "الخلايا البائية (١٠-١٥٪) تنتج الأجسام المضادة، والتائية (نحو ٨٠٪) تنضج في التيموسية: مساعدة (TH) وسامة (TC) ومثبطة (TS)، والخلايا القاتلة الطبيعية (٥-١٠٪) تفرز البرفورين، والخلايا وحيدة النواة تتحول إلى خلايا أكولة كبيرة.",
              "الأجسام المضادة (الجلوبيولينات المناعية IgG وIgM وIgD وIgE وIgA) على شكل حرف Y: سلسلتان ثقيلتان وسلسلتان خفيفتان تربطها روابط ثنائية الكبريتيد، ولها موقعان متماثلان لارتباط الأنتيجين (المنطقة المتغيرة) يتطابقان معه كالقفل والمفتاح.",
              "تعمل الأجسام المضادة بالتعادل والتلازن (مثل IgM) والترسيب وتنشيط المتممات وإبطال السموم، ومن المواد المساعدة: الكيموكينات والإنترلوكينات والمتممات والإنترفيرونات."]
          },
          story: {
            en: ["Ahmed gets a sore throat before his mid-year exams in Tanta. The doctor checks his neck: the lymph nodes are swollen.",
              "She explains that the nodes are filtering the lymph, packed with B-cells, T-cells and macrophages fighting the bacteria.",
              "Each B-cell's antibody fits only one antigen, like the key of his flat fits only his door.",
              "On the way home, Ahmed sees a cut mango tree oozing gum in a neighbour's garden: the tree is sealing its wound against microbes.",
              "Plants have no white blood cells, yet they defend themselves with walls, cork, gum and toxic chemicals."],
            ar: ["أصيب أحمد بالتهاب في الحلق قبل امتحانات نصف العام في طنطا، وفحصت الطبيبة رقبته فوجدت العقد الليمفاوية متضخمة.",
              "شرحت أن العقد ترشح الليمف وهي ممتلئة بالخلايا البائية والتائية والأكولة الكبيرة التي تحارب البكتيريا.",
              "الجسم المضاد لكل خلية بائية يناسب أنتيجينًا واحدًا فقط، كما يفتح مفتاح شقته بابه وحده.",
              "وفي طريق العودة رأى أحمد شجرة مانجو مقطوعة يسيل منها الصمغ في حديقة الجيران؛ الشجرة تغلق جرحها أمام الميكروبات.",
              "النبات ليس له خلايا دم بيضاء، لكنه يدافع عن نفسه بالجدر والفلين والصمغ والمواد الكيميائية السامة."]
          }
        },
        words: [
          ["Immunity", "المناعة", "The body's ability to resist pathogens through the immune system.", "قدرة الجسم على مقاومة مسببات الأمراض من خلال الجهاز المناعي."],
          ["Tyloses", "التيلوزات", "Outgrowths of parenchyma cells that block xylem vessels after injury or infection.", "زوائد من خلايا برنشيمية تسد أوعية الخشب بعد الجرح أو العدوى."],
          ["Antigen", "الأنتيجين (مولد الضد)", "Protein or glycoprotein on a pathogen's surface that distinguishes it.", "بروتين أو بروتين سكري على سطح الممرض يميزه."],
          ["Antibody", "الجسم المضاد", "Y-shaped immunoglobulin that binds a specific antigen.", "جلوبيولين مناعي على شكل Y يرتبط بأنتيجين محدد."],
          ["Helper T-cell", "الخلية التائية المساعدة", "Activates other T-cells and stimulates B-cells to produce antibodies.", "تنشط الخلايا التائية الأخرى وتنبه الخلايا البائية لإنتاج الأجسام المضادة."],
          ["Interferon", "الإنترفيرون", "Proteins from virus-infected cells that protect neighbouring cells.", "بروتينات تفرزها الخلايا المصابة بالفيروس لحماية الخلايا المجاورة."],
          ["Thymus", "الغدة التيموسية", "Primary lymphoid organ secreting thymosin to mature T-cells.", "عضو ليمفاوي أولي يفرز الثيموسين لإنضاج الخلايا التائية."]
        ],
        lab: { parts: [{ type: "sec3bio_antibody" }] },
        quiz: [
          { q: ["How many antigen-binding sites does a typical Y-shaped antibody (e.g. IgG) have?", "كم موقعًا لارتباط الأنتيجين في الجسم المضاد النموذجي على شكل Y (مثل IgG)؟"],
            c: [["2 identical sites", "موقعان متماثلان"], ["1 site", "موقع واحد"], ["4 different sites", "٤ مواقع مختلفة"], ["10 sites", "١٠ مواقع"]],
            off: ["Each antibody has two identical antigen-binding sites at the tips of the Y (variable regions).", "لكل جسم مضاد موقعان متماثلان لارتباط الأنتيجين عند طرفي حرف Y (المناطق المتغيرة)."],
            sto: ["Two hands, both holding the same type of key.", "يدان تمسكان النوع نفسه من المفاتيح."] },
          { q: ["An antibody is made of how many polypeptide chains?", "يتكون الجسم المضاد من كم سلسلة عديدة الببتيد؟"],
            c: [["4 (2 heavy + 2 light)", "٤ (٢ ثقيلة + ٢ خفيفة)"], ["2 (1 heavy + 1 light)", "٢ (١ ثقيلة + ١ خفيفة)"], ["3", "٣"], ["8", "٨"]],
            off: [eq("2 heavy + 2 light = 4 chains") + ", joined by disulphide bonds.", eq("2 heavy + 2 light = 4 chains") + "، تربطها روابط ثنائية الكبريتيد."],
            sto: ["Two long arms and two short arms make the Y.", "ذراعان طويلتان وذراعان قصيرتان تكوّن حرف Y."] },
          { q: ["Which lymphoid organs are primary (where lymphocytes are produced and mature)?", "أي الأعضاء الليمفاوية أولية (تُنتج فيها الخلايا الليمفاوية وتنضج)؟"],
            c: [["Bone marrow and thymus", "نخاع العظم والغدة التيموسية"], ["Spleen and tonsils", "الطحال واللوزتان"], ["Lymph nodes and appendix", "العقد الليمفاوية والزائدة"], ["Peyer's patches and spleen", "بقع باير والطحال"]],
            off: ["Bone marrow produces all WBCs (except T-cell maturation); the thymus matures T-cells by thymosin.", "نخاع العظم ينتج كل خلايا الدم البيضاء (عدا إنضاج التائية)، والتيموسية تنضج الخلايا التائية بالثيموسين."],
            sto: ["The marrow is the nursery, the thymus the military academy for T-cells.", "النخاع هو الحضانة والتيموسية هي الكلية الحربية للخلايا التائية."] },
          { q: ["Which plant defence is biochemical rather than structural?", "أي وسائل الدفاع النباتية كيميائية حيوية لا تركيبية؟"],
            c: [["Formation of phenols", "تكوين الفينولات"], ["Gum deposition", "ترسيب الصمغ"], ["Tyloses formation", "تكوين التيلوزات"], ["Cork formation", "تكوين الفلين"]],
            off: ["Phenols and glycosides are toxic chemical compounds; gum, tyloses and cork are structural barriers.", "الفينولات والجليكوسيدات مركبات كيميائية سامة، أما الصمغ والتيلوزات والفلين فحواجز تركيبية."],
            sto: ["Walls and gates are structure; poison darts are chemistry.", "الأسوار والبوابات تركيب، والسهام المسمومة كيمياء."] },
          { q: ["Which cells secrete perforin to create pores in virus-infected and cancer cells?", "أي الخلايا تفرز البرفورين لعمل ثقوب في الخلايا المصابة بالفيروس والسرطانية؟"],
            c: [["Natural killer cells", "الخلايا القاتلة الطبيعية"], ["Helper T-cells", "الخلايا التائية المساعدة"], ["B-cells", "الخلايا البائية"], ["Red blood cells", "كرات الدم الحمراء"]],
            off: ["NK cells (5-10% of lymphocytes) secrete perforin; cytotoxic T-cells can also use it.", "الخلايا القاتلة الطبيعية (٥-١٠٪ من الليمفاوية) تفرز البرفورين، ويمكن للخلايا التائية السامة استخدامه أيضًا."],
            sto: ["They punch holes in the enemy's walls.", "إنها تثقب أسوار العدو."] },
          { q: ["IgM can bind several microbes at once, causing them to clump. This mechanism is...", "يستطيع IgM الارتباط بعدة ميكروبات معًا فتتجمع، وتسمى هذه الآلية..."],
            c: [["agglutination", "التلازن"], ["neutralization", "التعادل"], ["precipitation", "الترسيب"], ["phagocytosis by antibodies", "البلعمة بالأجسام المضادة"]],
            off: ["IgM has many antigen-binding sites, so microbes clump and become easy for phagocytes to engulf.", "لـ IgM مواقع ارتباط كثيرة فتتجمع الميكروبات ويسهل على البلعميات ابتلاعها."],
            sto: ["Tying many thieves to one rope makes them easy to arrest.", "ربط لصوص كثيرين بحبل واحد يسهل القبض عليهم."] },
          { q: ["T-cells form about what percentage of lymphocytes?", "تمثل الخلايا التائية نحو أي نسبة من الخلايا الليمفاوية؟"],
            c: [["80%", "٨٠٪"], ["10-15%", "١٠-١٥٪"], ["5-10%", "٥-١٠٪"], ["50%", "٥٠٪"]],
            off: ["B-cells 10-15%, T-cells about 80%, natural killer cells 5-10%.", "البائية ١٠-١٥٪، والتائية نحو ٨٠٪، والقاتلة الطبيعية ٥-١٠٪."],
            sto: ["The T-cells are the biggest army division.", "الخلايا التائية أكبر فرقة في الجيش."] }
        ]
      },
      {
        id: "sec3biou4l2", icon: "🛡️", page: 99,
        title: { en: "How the Body Defends Itself: Natural and Acquired Immunity", ar: "كيف يدافع الجسم عن نفسه: المناعة الطبيعية والمكتسبة" },
        idea: {
          official: {
            en: ["Natural (innate, non-specific) immunity is rapid and acts against any microbe. The first line of defence: skin, cerumen, tears, mucus with cilia, saliva and stomach HCl.",
              "The second line: the inflammatory response. Mast cells and basophils release histamine, blood vessels dilate and leak plasma, and neutrophils, macrophages and NK cells attack the microbes.",
              "Acquired (specific) immunity is the third line, by lymphocytes. Humoral immunity: macrophages present antigen on MHC, TH cells bind and release interleukins, and B-cells divide into plasma cells (antibodies) and memory cells.",
              "Cell-mediated immunity: activated TH cells secrete cytokines; cytotoxic T-cells destroy infected cells, cancer cells and transplants with perforin; suppressor T-cells then stop the response with lymphokines.",
              "Primary immune response: first contact, slow (5-10 days to peak), so symptoms appear. Secondary response: memory cells (living tens of years) respond faster and stronger, often before symptoms appear."],
            ar: ["المناعة الطبيعية (الفطرية غير المتخصصة) سريعة وتعمل ضد أي ميكروب، وخط الدفاع الأول: الجلد والصملاخ والدموع والمخاط مع الأهداب واللعاب وحمض HCl في المعدة.",
              "خط الدفاع الثاني: الاستجابة الالتهابية، فتفرز الخلايا الصارية والقاعدية الهستامين فتتسع الأوعية الدموية ويتسرب البلازما، وتهاجم الخلايا المتعادلة والأكولة الكبيرة والقاتلة الطبيعية الميكروبات.",
              "المناعة المكتسبة (المتخصصة) هي الخط الثالث بالخلايا الليمفاوية، والمناعة الخلطية: تعرض الخلايا الأكولة الأنتيجين على بروتين MHC، فترتبط به الخلايا التائية المساعدة وتفرز الإنترلوكينات، وتنقسم الخلايا البائية إلى خلايا بلازمية (أجسام مضادة) وخلايا ذاكرة.",
              "المناعة الخلوية: تفرز الخلايا التائية المساعدة المنشطة السيتوكينات، وتدمر الخلايا التائية السامة الخلايا المصابة والسرطانية والمزروعة بالبرفورين، ثم توقف الخلايا التائية المثبطة الاستجابة بالليمفوكينات.",
              "الاستجابة المناعية الأولية: أول مواجهة وبطيئة (٥-١٠ أيام لتصل للذروة) فتظهر الأعراض، والاستجابة الثانوية: تستجيب خلايا الذاكرة (تعيش عشرات السنين) أسرع وأقوى وغالبًا قبل ظهور الأعراض."]
          },
          story: {
            en: ["Mona had measles at age six. Now in Sec 3, her younger brother catches it, yet she stays healthy.",
              "Her mother asks the doctor why. He explains that Mona's memory B and T cells, made during her first infection, still patrol her blood.",
              "When the virus returned, they divided at once into plasma cells and active T-cells, wiping it out before any rash appeared.",
              "Her brother, meeting the virus for the first time, needs 5 to 10 days to build his response: that is why he has fever and spots.",
              "Vaccines do the same trick safely: they create memory cells without the illness."],
            ar: ["أصيبت منى بالحصبة في السادسة، والآن في الصف الثالث الثانوي أصيب أخوها الصغير بها بينما ظلت هي سليمة.",
              "سألت أمها الطبيب عن السبب، فشرح أن خلايا الذاكرة البائية والتائية التي تكونت في إصابتها الأولى ما زالت تجوب دمها.",
              "عندما عاد الفيروس انقسمت فورًا إلى خلايا بلازمية وخلايا تائية نشطة وقضت عليه قبل ظهور أي طفح.",
              "أما أخوها فيقابل الفيروس لأول مرة ويحتاج من ٥ إلى ١٠ أيام لبناء استجابته؛ لذلك أصيب بالحمى والبقع.",
              "واللقاحات تفعل الحيلة نفسها بأمان: تكوّن خلايا ذاكرة دون مرض."]
          }
        },
        words: [
          ["Natural immunity", "المناعة الطبيعية", "Rapid non-specific defences: first and second lines.", "وسائل دفاع سريعة غير متخصصة: خطا الدفاع الأول والثاني."],
          ["Inflammatory response", "الاستجابة الالتهابية", "Non-specific reaction at injury: histamine, dilated leaky vessels, phagocytes.", "رد فعل غير متخصص عند الإصابة: هستامين وأوعية متسعة منفذة وبلعميات."],
          ["Humoral immunity", "المناعة الخلطية", "Antibody-mediated defence against antigens in body fluids.", "دفاع بواسطة الأجسام المضادة ضد الأنتيجينات في سوائل الجسم."],
          ["Cell-mediated immunity", "المناعة الخلوية", "Defence by T-cells against infected cells, cancer cells and transplants.", "دفاع بالخلايا التائية ضد الخلايا المصابة والسرطانية والمزروعة."],
          ["MHC", "معقد التوافق النسيجي الرئيسي", "Protein that presents antigen fragments on the cell surface.", "بروتين يعرض أجزاء الأنتيجين على سطح الخلية."],
          ["Memory cells", "خلايا الذاكرة", "Long-lived B and T cells that cause a fast secondary response.", "خلايا بائية وتائية طويلة العمر تسبب استجابة ثانوية سريعة."],
          ["Histamine", "الهستامين", "Inflammation substance from mast cells and basophils that dilates vessels.", "مادة التهابية من الخلايا الصارية والقاعدية توسع الأوعية."]
        ],
        lab: { parts: [{ type: "sec3bio_response" }] },
        quiz: [
          { q: ["The secondary immune response is faster than the primary because of...", "الاستجابة المناعية الثانوية أسرع من الأولية بسبب..."],
            c: [["memory B and T cells produced in the primary response", "خلايا الذاكرة البائية والتائية الناتجة في الاستجابة الأولية"], ["more skin cells", "زيادة خلايا الجلد"], ["histamine release", "إفراز الهستامين"], ["stomach acid", "حمض المعدة"]],
            off: ["Memory cells are far more numerous than the original B and T cells and divide quickly on re-infection.", "خلايا الذاكرة أكثر عددًا بكثير من الخلايا الأصلية وتنقسم بسرعة عند تكرار العدوى."],
            sto: ["Mona's memory cells recognized measles at once.", "خلايا ذاكرة منى تعرفت على الحصبة فورًا."] },
          { q: ["Which of these is part of the first line of defence?", "أي مما يلي من خط الدفاع الأول؟"],
            c: [["Hydrochloric acid of the stomach", "حمض الهيدروكلوريك في المعدة"], ["Inflammatory response", "الاستجابة الالتهابية"], ["Plasma cells", "الخلايا البلازمية"], ["Cytotoxic T-cells", "الخلايا التائية السامة"]],
            off: ["First line: physical barriers (skin, cerumen, tears, mucus, saliva, gastric HCl) that prevent entry.", "خط الدفاع الأول: حواجز طبيعية (الجلد والصملاخ والدموع والمخاط واللعاب وحمض المعدة) تمنع الدخول."],
            sto: ["The castle walls and moat, before any soldier fights.", "أسوار القلعة والخندق قبل أن يقاتل أي جندي."] },
          { q: ["In humoral immunity, helper T-cells activate B-cells by releasing...", "في المناعة الخلطية تنشط الخلايا التائية المساعدة الخلايا البائية بإفراز..."],
            c: [["interleukins", "الإنترلوكينات"], ["perforin", "البرفورين"], ["histamine", "الهستامين"], ["lymphokines that stop the response", "الليمفوكينات التي توقف الاستجابة"]],
            off: ["TH binds the antigen-MHC complex on a macrophage and releases interleukins that activate the matching B-cells.", "ترتبط TH بمعقد الأنتيجين وMHC على الخلية الأكولة وتفرز الإنترلوكينات التي تنشط الخلايا البائية المناسبة."],
            sto: ["Interleukins are the radio messages between immune units.", "الإنترلوكينات رسائل لاسلكية بين وحدات المناعة."] },
          { q: ["Antibodies alone cannot destroy viruses inside cells because...", "لا تستطيع الأجسام المضادة وحدها تدمير الفيروسات داخل الخلايا لأن..."],
            c: [["antibodies are large molecules that cannot reach inside the cell", "الأجسام المضادة جزيئات كبيرة لا تصل إلى داخل الخلية"], ["viruses have no antigens", "الفيروسات ليس لها أنتيجينات"], ["antibodies are made of DNA", "الأجسام المضادة مكونة من DNA"], ["viruses kill all B-cells", "الفيروسات تقتل كل الخلايا البائية"]],
            off: ["So infected cells are combated by cytotoxic T-cells in cell-mediated immunity.", "لذلك تُكافح الخلايا المصابة بالخلايا التائية السامة في المناعة الخلوية."],
            sto: ["Police outside can't arrest a thief hiding in a locked flat; a special unit must break in.", "الشرطة بالخارج لا تقبض على لص مختبئ في شقة مغلقة؛ لا بد من وحدة خاصة تقتحم."] },
          { q: ["Which cells stop the immune response after the antigen is destroyed?", "أي الخلايا توقف الاستجابة المناعية بعد القضاء على الأنتيجين؟"],
            c: [["Suppressor T-cells", "الخلايا التائية المثبطة"], ["Helper T-cells", "الخلايا التائية المساعدة"], ["Plasma cells", "الخلايا البلازمية"], ["Macrophages", "الخلايا الأكولة الكبيرة"]],
            off: ["TS cells bind plasma, TH and TC cells and secrete lymphokines that inhibit the response.", "ترتبط الخلايا TS بالبلازمية وTH وTC وتفرز الليمفوكينات التي تثبط الاستجابة."],
            sto: ["The referee who ends the match once the enemy is defeated.", "الحكم الذي ينهي المباراة بعد هزيمة العدو."] },
          { q: ["Memory cells can survive in the blood for about...", "تستطيع خلايا الذاكرة البقاء في الدم نحو..."],
            c: [["20-30 years (tens of years)", "٢٠-٣٠ سنة (عشرات السنين)"], ["a few hours", "بضع ساعات"], ["5-10 days", "٥-١٠ أيام"], ["one month", "شهر واحد"]],
            off: ["The book: memory cells remain for long periods (20-30 years) and may survive till death.", "يذكر الكتاب أن خلايا الذاكرة تبقى لفترات طويلة (٢٠-٣٠ سنة) وقد تبقى حتى الوفاة."],
            sto: ["Mona's measles memory, made at six, still works at seventeen.", "ذاكرة الحصبة عند منى من سن السادسة ما زالت تعمل في السابعة عشرة."] },
          { q: ["During inflammation, tissue swelling occurs because histamine...", "أثناء الالتهاب يحدث تورم الأنسجة لأن الهستامين..."],
            c: [["increases capillary permeability so plasma leaks out", "يزيد نفاذية الشعيرات فيتسرب البلازما"], ["constricts all blood vessels", "يضيق جميع الأوعية الدموية"], ["kills red blood cells", "يقتل كرات الدم الحمراء"], ["produces antibodies", "ينتج أجسامًا مضادة"]],
            off: ["Dilated, more permeable vessels leak plasma and let neutrophils, monocytes and macrophages reach the injury.", "الأوعية المتسعة الأكثر نفاذية يتسرب منها البلازما وتسمح بوصول الخلايا المتعادلة ووحيدة النواة والأكولة إلى الإصابة."],
            sto: ["The red, swollen cut on Ahmed's knee is the second line at work.", "الجرح الأحمر المتورم في ركبة أحمد هو خط الدفاع الثاني يعمل."] }
        ]
      }
    ]
  });
})();

/* ---------- Sec 3 Biology: Unit 5 DNA, Unit 6 Protein synthesis, Unit 7 Earth science ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var G = E.SCIG.sec3bio;

  /* ================= UNIT 5: NUCLEIC ACID DNA ================= */
  G.units.push({
    id: "sec3biou5", num: 5, icon: "🧬", color: "blue",
    title: { en: "The Nucleic Acid DNA", ar: "الحمض النووي DNA" },
    lessons: [
      {
        id: "sec3biou5l1", icon: "🧬", page: 112,
        title: { en: "DNA: the Genetic Material and its Structure", ar: "DNA: المادة الوراثية وتركيبها" },
        idea: {
          official: {
            en: ["Griffith (1928): heat-killed virulent S bacteria mixed with live non-virulent R bacteria killed mice, and live S bacteria were found: bacterial transformation. Avery showed the transforming material is DNA (deoxyribonuclease stopped it).",
              "Hershey and Chase labelled phage protein with radioactive sulphur and DNA with radioactive phosphorus: only the DNA entered the bacteria. Gametes contain half the DNA of somatic cells, and DNA is stable.",
              "A nucleotide = deoxyribose sugar + phosphate (on carbon 5') + a nitrogenous base (on carbon 1'): purines adenine (A), guanine (G); pyrimidines thymine (T), cytosine (C).",
              "In any DNA, " + eq("A = T and G = C") + ". Franklin's X-ray diffraction (1952) showed a helix with the bases inside. Watson and Crick built the double helix model.",
              "The two strands are antiparallel ladders: A pairs with T by 2 hydrogen bonds, G with C by 3. One purine + one pyrimidine keeps the width constant, with 10 base pairs per turn.",
              "Example: if one strand runs " + eq("5' A-A-T-C-C 3'") + ", its partner runs " + eq("3' T-T-A-G-G 5'") + "."],
            ar: ["جريفيث (١٩٢٨): خليط من بكتيريا S الضارية المقتولة بالحرارة وبكتيريا R غير الضارية الحية قتل الفئران ووُجدت بكتيريا S حية: التحول البكتيري، وأثبت أفري أن مادة التحول هي DNA (فقد أوقفها إنزيم ديؤكسي ريبونيوكليز).",
              "رقّم هيرشي وتشيس بروتين الفاج بالكبريت المشع وDNA بالفوسفور المشع، فدخل DNA وحده البكتيريا، كما أن الأمشاج تحتوي على نصف DNA الخلايا الجسدية، وDNA ثابت.",
              "النيوكليوتيدة = سكر ديؤكسي ريبوز + مجموعة فوسفات (على ذرة الكربون '5) + قاعدة نيتروجينية (على ذرة الكربون '1): بيورينات الأدينين (A) والجوانين (G)، وبيريميدينات الثايمين (T) والسيتوزين (C).",
              "في أي DNA يكون " + eq("A = T, G = C") + "، وأظهرت صور فرانكلين بحيود الأشعة السينية (١٩٥٢) حلزونًا قواعده للداخل، وبنى واطسون وكريك نموذج الحلزون المزدوج.",
              "الشريطان متعاكسان كالسلم: A يرتبط مع T برابطتين هيدروجينيتين، وG مع C بثلاث، وكل زوج بيورين + بيريميدين فيظل العرض ثابتًا، وفي كل لفة ١٠ أزواج من النيوكليوتيدات.",
              "مثال: إذا كان أحد الشريطين " + eq("5' A-A-T-C-C 3'") + " فإن الشريط المكمل " + eq("3' T-T-A-G-G 5'") + "."]
          },
          story: {
            en: ["Sara watches a TV report about a criminal caught by DNA evidence in Cairo. She wonders: why DNA, not protein?",
              "Her teacher tells the story of Griffith's mice and Hershey and Chase's radioactive viruses: DNA, not protein, carried the instructions.",
              "Sara builds a model from coloured straws: A always with T, G always with C, the sugar-phosphate rails outside.",
              "She counts: her model has 10 base pairs per full twist, just like Franklin's X-ray photo suggested.",
              "Because the strands match, one strand alone is enough to rebuild the other: the secret of copying life."],
            ar: ["شاهدت سارة تقريرًا تلفزيونيًا عن مجرم قُبض عليه بدليل DNA في القاهرة، وتساءلت: لماذا DNA وليس البروتين؟",
              "حكت لها المعلمة قصة فئران جريفيث وفيروسات هيرشي وتشيس المشعة: DNA لا البروتين هو حامل التعليمات.",
              "صنعت سارة نموذجًا من شفاطات ملونة: A دائمًا مع T، وG دائمًا مع C، وقضبان السكر والفوسفات للخارج.",
              "وعدّت: في نموذجها ١٠ أزواج قواعد في كل لفة كاملة، كما أشارت صورة فرانكلين بالأشعة السينية.",
              "ولأن الشريطين متكاملان يكفي شريط واحد لإعادة بناء الآخر: سر نسخ الحياة."]
          }
        },
        words: [
          ["Bacterial transformation", "التحول البكتيري", "A bacterial strain gains traits of another by taking up its DNA.", "اكتساب سلالة بكتيرية صفات سلالة أخرى بامتصاص DNA الخاص بها."],
          ["Bacteriophage", "البكتريوفاج (آكل البكتيريا)", "A virus of DNA inside a protein coat that infects bacteria.", "فيروس من DNA داخل غلاف بروتيني يصيب البكتيريا."],
          ["Nucleotide", "النيوكليوتيدة", "Sugar + phosphate + nitrogenous base: the unit of nucleic acids.", "سكر + فوسفات + قاعدة نيتروجينية: وحدة بناء الأحماض النووية."],
          ["Purines", "البيورينات", "Double-ring bases: adenine and guanine.", "قواعد ثنائية الحلقة: الأدينين والجوانين."],
          ["Pyrimidines", "البيريميدينات", "Single-ring bases: thymine and cytosine (and uracil in RNA).", "قواعد أحادية الحلقة: الثايمين والسيتوزين (واليوراسيل في RNA)."],
          ["Double helix", "الحلزون المزدوج", "Watson and Crick's model: two antiparallel strands twisted around each other.", "نموذج واطسون وكريك: شريطان متعاكسان ملتفان حول بعضهما."],
          ["Hydrogen bonds", "الروابط الهيدروجينية", "Weak bonds holding base pairs: 2 for A-T, 3 for G-C.", "روابط ضعيفة تربط أزواج القواعد: ٢ بين A وT و٣ بين G وC."]
        ],
        lab: { parts: [{ type: "sec3bio_dnabuild" }] },
        quiz: [
          { q: ["In a DNA molecule, adenine is 30% of the bases. What is the percentage of guanine?", "في جزيء DNA يمثل الأدينين ٣٠٪ من القواعد. ما نسبة الجوانين؟"],
            c: [["20%", "٢٠٪"], ["30%", "٣٠٪"], ["40%", "٤٠٪"], ["70%", "٧٠٪"]],
            off: ["A = T = 30%, so A + T = 60%; G + C = 40% and " + eq("G = 40 ÷ 2 = 20%") + ".", "A = T = ٣٠٪ فيكون A + T = ٦٠٪، وG + C = ٤٠٪ و" + eq("G = 40 ÷ 2 = 20%") + "."],
            sto: ["Pairs always come together: whatever is left is split equally between G and C.", "الأزواج تأتي معًا، والباقي يُقسم بالتساوي بين G وC."] },
          { q: ["A DNA segment has 4 A-T pairs and 6 G-C pairs. How many hydrogen bonds hold its two strands?", "قطعة DNA بها ٤ أزواج A-T و٦ أزواج G-C. كم رابطة هيدروجينية تربط شريطيها؟"],
            c: [["26", "٢٦"], ["20", "٢٠"], ["30", "٣٠"], ["10", "١٠"]],
            off: [eq("4 × 2 + 6 × 3 = 8 + 18 = 26") + " hydrogen bonds.", eq("4 × 2 + 6 × 3 = 8 + 18 = 26") + " رابطة هيدروجينية."],
            sto: ["A-T shake with two hands, G-C with three.", "A وT يتصافحان بيدين، وG وC بثلاث."] },
          { q: ["A DNA molecule has 150 base pairs. How many complete turns does its helix make?", "جزيء DNA به ١٥٠ زوجًا من القواعد. كم لفة كاملة يكوّن حلزونه؟"],
            c: [["15", "١٥"], ["10", "١٠"], ["150", "١٥٠"], ["30", "٣٠"]],
            off: ["There are 10 nucleotide pairs per turn: " + eq("150 ÷ 10 = 15 turns") + ".", "في كل لفة ١٠ أزواج: " + eq("150 ÷ 10 = 15") + " لفة."],
            sto: ["Like a spiral staircase with 10 steps per full turn.", "مثل سلم حلزوني فيه ١٠ درجات في كل لفة."] },
          { q: ["In the Hershey and Chase experiment, which label was found inside the bacteria?", "في تجربة هيرشي وتشيس، أي مادة مشعة وُجدت داخل البكتيريا؟"],
            c: [["Radioactive phosphorus (in DNA)", "الفوسفور المشع (في DNA)"], ["Radioactive sulphur (in protein)", "الكبريت المشع (في البروتين)"], ["Both equally", "كلاهما بالتساوي"], ["Neither", "لا شيء منهما"]],
            off: ["DNA contains phosphorus but not sulphur; proteins contain sulphur. Only viral DNA entered the bacteria.", "DNA يحتوي على الفوسفور لا الكبريت، والبروتين يحتوي على الكبريت، ودخل DNA الفيروس وحده البكتيريا."],
            sto: ["The coat stayed outside like an empty jacket on the door.", "بقي الغلاف بالخارج مثل سترة فارغة على الباب."] },
          { q: ["Which strand is complementary to 5' A-T-G-C-C-A 3'?", "أي شريط يكمل الشريط '5 A-T-G-C-C-A '3؟"],
            c: [["3' T-A-C-G-G-T 5'", "'3 T-A-C-G-G-T '5"], ["5' T-A-C-G-G-T 3'", "'5 T-A-C-G-G-T '3"], ["3' U-A-C-G-G-U 5'", "'3 U-A-C-G-G-U '5"], ["3' A-T-G-C-C-A 5'", "'3 A-T-G-C-C-A '5"]],
            off: ["Pair A-T and G-C, and run the partner in the opposite (3' → 5') direction. U is only in RNA.", "زاوج A مع T وG مع C واجعل الشريط المكمل في الاتجاه المعاكس ('3 ← '5)، واليوراسيل في RNA فقط."],
            sto: ["Mirror partners walking in opposite directions on the same street.", "شريكان متقابلان يسيران في اتجاهين متعاكسين في الشارع نفسه."] },
          { q: ["Avery confirmed DNA is the transforming material because...", "أكد أفري أن DNA هو مادة التحول لأن..."],
            c: [["treating it with deoxyribonuclease stopped transformation", "معالجتها بإنزيم ديؤكسي ريبونيوكليز أوقفت التحول"], ["protein-digesting enzymes stopped it", "إنزيمات هضم البروتين أوقفته"], ["RNA caused it", "RNA هو المسبب"], ["heat increased it", "الحرارة زادته"]],
            off: ["Deoxyribonuclease hydrolyses DNA only, not proteins or RNA; transformation did not occur after it.", "إنزيم ديؤكسي ريبونيوكليز يحلل DNA فقط لا البروتين ولا RNA، ولم يحدث التحول بعده."],
            sto: ["Remove the suspect and the crime stops: the suspect is guilty.", "أبعد المتهم فيتوقف الجرم؛ إذن هو المذنب."] },
          { q: ["All rungs of the DNA ladder have the same width because...", "كل درجات سلم DNA لها العرض نفسه لأن..."],
            c: [["each pair has one purine (double ring) and one pyrimidine (single ring)", "كل زوج به بيورين (حلقتان) وبيريميدين (حلقة واحدة)"], ["all bases are purines", "كل القواعد بيورينات"], ["sugar and phosphate are inside", "السكر والفوسفات بالداخل"], ["there are 3 hydrogen bonds in every pair", "في كل زوج ٣ روابط هيدروجينية"]],
            off: ["A (purine) with T (pyrimidine), G (purine) with C (pyrimidine): always one double + one single ring.", "A (بيورين) مع T (بيريميدين) وG (بيورين) مع C (بيريميدين): دائمًا حلقتان + حلقة."],
            sto: ["A tall player always paired with a short one keeps the line straight.", "لاعب طويل مع قصير دائمًا يحافظ على استقامة الصف."] }
        ]
      },
      {
        id: "sec3biou5l2", icon: "🧷", page: 120,
        title: { en: "DNA Replication, Packing and Mutations", ar: "تضاعف DNA وتعبئته والطفرات" },
        idea: {
          official: {
            en: ["Replication: the helix unwinds; DNA helicase breaks hydrogen bonds forming a replication fork; primase makes RNA primers; DNA polymerase adds nucleotides only to the 3' end, so new strands grow " + eq("5' → 3'") + ".",
              "The leading strand is made continuously; the lagging strand is made in Okazaki fragments that DNA ligase joins. Primers are later replaced with DNA.",
              "About 5000 purines are lost daily from each human cell's DNA, yet repair enzymes use the undamaged strand as a template, so only 2-3 stable changes accumulate per year.",
              "Prokaryotic DNA is one circular helix (E. coli: 1.4 mm long in a 2 µm cell), plus plasmids. Eukaryotic DNA (2 m in 46 human chromosomes) winds around histones into nucleosomes, then chromatin and chromosomes.",
              "Mutation: a sudden heritable change in a hereditary factor. Gene mutations (substitution, deletion or addition of nucleotides) and chromosomal mutations: number (Klinefelter 44+XXY, Turner 44+XO, polyploidy 3N-16N) or structure (inversion, translocation, deletion, duplication).",
              "Mutations may be gametic or somatic, spontaneous (UV, cosmic rays) or induced by gamma rays, UV, mustard gas, colchicine or nitrous acid."],
            ar: ["التضاعف: ينفك الحلزون ويكسر إنزيم الهليكيز الروابط الهيدروجينية مكونًا شوكة التضاعف، ويصنع إنزيم البريميز بادئات RNA، ويضيف إنزيم البلمرة النيوكليوتيدات إلى الطرف '3 فقط، فتنمو الأشرطة الجديدة " + eq("5' → 3'") + ".",
              "يُبنى الشريط الرائد (الأساسي) بشكل متصل، ويُبنى الشريط المتأخر في قطع أوكازاكي يربطها إنزيم الربط (الليجيز)، ثم تُستبدل البادئات بـ DNA.",
              "تفقد كل خلية بشرية نحو ٥٠٠٠ قاعدة بيورين يوميًا من DNA، لكن إنزيمات الإصلاح تستخدم الشريط السليم قالبًا، فلا يتراكم إلا ٢-٣ تغيرات ثابتة في السنة.",
              "DNA بدائيات النواة حلزون واحد دائري (في E. coli طوله ١٫٤ مم في خلية طولها ٢ ميكرون) إضافة إلى البلازميدات، وDNA حقيقيات النواة (٢ متر في ٤٦ كروموسومًا بشريًا) يلتف حول الهستونات مكونًا النيوكليوسومات ثم الكروماتين والكروموسومات.",
              "الطفرة تغير مفاجئ وراثي في العامل الوراثي: طفرات جينية (استبدال أو حذف أو إضافة نيوكليوتيدات) وطفرات كروموسومية في العدد (كلاينفلتر 44+XXY وتيرنر 44+XO وتعدد المجموعات 3N-16N) أو في التركيب (انقلاب وتبادل وحذف وإضافة).",
              "الطفرات مشيجية أو جسدية، وتلقائية (الأشعة فوق البنفسجية والكونية) أو مستحدثة بأشعة جاما والأشعة فوق البنفسجية وغاز الخردل والكولشيسين وحمض النيتروز."]
          },
          story: {
            en: ["Adam's mother is a lab technician at a hospital in Mansoura. She shows him a karyotype with 47 chromosomes: 44 + XXY, Klinefelter syndrome.",
              "At home Adam unzips his jacket and imagines helicase opening the DNA zipper, while polymerase builds new teeth behind it.",
              "One side of the zip closes smoothly (leading strand); the other side needs short pieces glued by ligase (lagging strand).",
              "His father, an agronomist, mentions strawberries and wheat with 4N chromosomes: polyploid plants are bigger, a useful mutation.",
              "Two metres of DNA folded into every tiny nucleus: Adam thinks of folding a long garden hose into a small bag."],
            ar: ["والدة آدم فنية معمل في مستشفى بالمنصورة، وأرته صورة كروموسومات بها ٤٧ كروموسومًا: 44 + XXY، متلازمة كلاينفلتر.",
              "في البيت فتح آدم سوستة سترته وتخيل الهليكيز يفتح سوستة DNA بينما يبني إنزيم البلمرة أسنانًا جديدة خلفه.",
              "جانب من السوستة يُغلق بسلاسة (الشريط الرائد)، والجانب الآخر يحتاج قطعًا قصيرة يلصقها إنزيم الربط (الشريط المتأخر).",
              "وذكر والده المهندس الزراعي الفراولة والقمح بكروموسومات 4N؛ فالنباتات متعددة المجموعات أكبر حجمًا، وهي طفرة مفيدة.",
              "مترين من DNA مطويين في كل نواة صغيرة؛ تخيل آدم طي خرطوم حديقة طويل في كيس صغير."]
          }
        },
        words: [
          ["DNA helicase", "إنزيم الهليكيز", "Enzyme that separates the two strands by breaking hydrogen bonds.", "إنزيم يفصل الشريطين بكسر الروابط الهيدروجينية."],
          ["DNA polymerase", "إنزيم البلمرة", "Enzyme that adds nucleotides to the 3' end of the new strand.", "إنزيم يضيف النيوكليوتيدات إلى الطرف '3 للشريط الجديد."],
          ["Okazaki fragments", "قطع أوكازاكي", "Short DNA pieces of the lagging strand joined by ligase.", "قطع DNA قصيرة للشريط المتأخر يربطها إنزيم الربط."],
          ["DNA ligase", "إنزيم الربط (الليجيز)", "Joins DNA fragments and helps repair damaged DNA.", "يربط قطع DNA ويساعد في إصلاح DNA التالف."],
          ["Nucleosome", "النيوكليوسوم", "DNA wound around a cluster of histone proteins.", "DNA ملتف حول مجموعة من بروتينات الهستون."],
          ["Mutation", "الطفرة", "A sudden heritable change in the hereditary factors.", "تغير مفاجئ في العوامل الوراثية ينتقل عبر الأجيال."],
          ["Polyploidy", "تعدد المجموعات الكروموسومية", "Cells with more than two sets of chromosomes (3N, 4N...).", "خلايا بها أكثر من مجموعتين من الكروموسومات (3N أو 4N...)."]
        ],
        lab: { parts: [{ type: "sec3bio_replication" }] },
        quiz: [
          { q: ["Which enzyme joins the Okazaki fragments of the lagging strand?", "أي إنزيم يربط قطع أوكازاكي في الشريط المتأخر؟"],
            c: [["DNA ligase", "إنزيم الربط (الليجيز)"], ["DNA helicase", "الهليكيز"], ["Primase", "البريميز"], ["RNA polymerase", "إنزيم بلمرة RNA"]],
            off: ["Polymerase makes the fragments 5' → 3', and ligase joins them into the lagging strand.", "يبني إنزيم البلمرة القطع في الاتجاه '5 ← '3، ويربطها إنزيم الربط في الشريط المتأخر."],
            sto: ["The glue that turns short pieces into one long zipper side.", "الغراء الذي يحول القطع القصيرة إلى جانب سوستة طويل."] },
          { q: ["A person with Turner syndrome has how many chromosomes in each somatic cell?", "كم كروموسومًا في كل خلية جسدية لمصاب بمتلازمة تيرنر؟"],
            c: [["45", "٤٥"], ["46", "٤٦"], ["47", "٤٧"], ["44", "٤٤"]],
            off: ["Turner is 44 + XO: " + eq("44 + 1 = 45") + ". Klinefelter is 44 + XXY = 47.", "تيرنر 44 + XO: " + eq("44 + 1 = 45") + "، وكلاينفلتر 44 + XXY = ٤٧."],
            sto: ["One sex chromosome is missing: 45 instead of 46.", "ينقص كروموسوم جنسي واحد: ٤٥ بدلًا من ٤٦."] },
          { q: ["E. coli DNA is about 1.4 mm long while the cell is about 2 µm. How many times longer is the DNA than the cell?", "طول DNA في E. coli نحو ١٫٤ مم وطول الخلية نحو ٢ ميكرون. كم مرة يزيد طول DNA على طول الخلية؟"],
            c: [["700 times", "٧٠٠ مرة"], ["70 times", "٧٠ مرة"], ["7000 times", "٧٠٠٠ مرة"], ["2.8 times", "٢٫٨ مرة"]],
            off: [eq("1.4 mm = 1400 µm; 1400 ÷ 2 = 700") + ".", eq("1.4 mm = 1400 µm; 1400 ÷ 2 = 700") + "."],
            sto: ["Like stuffing a 700 m rope into a 1 m box: it must fold many times.", "مثل حشر حبل طوله ٧٠٠ متر في صندوق طوله متر؛ لا بد من طيه مرات كثيرة."] },
          { q: ["DNA polymerase adds new nucleotides only to the...", "يضيف إنزيم البلمرة النيوكليوتيدات الجديدة فقط إلى..."],
            c: [["3' end of the new strand (growth 5' → 3')", "الطرف '3 للشريط الجديد (النمو '5 ← '3)"], ["5' end of the new strand", "الطرف '5 للشريط الجديد"], ["middle of the strand", "منتصف الشريط"], ["histone proteins", "بروتينات الهستون"]],
            off: ["That is why the lagging strand must be made in short fragments.", "لهذا يجب بناء الشريط المتأخر في قطع قصيرة."],
            sto: ["The builder can only add bricks at one end of the wall.", "البنّاء يضيف الطوب من طرف واحد فقط للجدار."] },
          { q: ["Polyploidy is more common in plants than animals because in animals...", "تعدد المجموعات الكروموسومية أكثر شيوعًا في النبات منه في الحيوان لأن الحيوانات..."],
            c: [["sex determination needs a delicate balance of autosomes and sex chromosomes", "يحتاج تحديد الجنس فيها إلى توازن دقيق بين الكروموسومات الجسدية والجنسية"], ["they have no chromosomes", "ليس بها كروموسومات"], ["they reproduce asexually only", "تتكاثر لاجنسيًا فقط"], ["colchicine has no effect", "الكولشيسين ليس له تأثير"]],
            off: ["So polyploidy in animals is limited to some hermaphrodite snails and worms; triploidy in man is lethal.", "لذلك يقتصر في الحيوان على بعض القواقع والديدان الخنثى، والتثلث في الإنسان مميت."],
            sto: ["Adding a whole extra set upsets the animal's sex-balance scale.", "إضافة مجموعة كاملة تخل بميزان الجنس عند الحيوان."] },
          { q: ["Human DNA is about 2 m long. If nucleosomes shorten it about tenfold, its length becomes about...", "طول DNA البشري نحو ٢ متر. إذا قصرته النيوكليوسومات نحو عشر مرات يصبح طوله نحو..."],
            c: [["0.2 m (20 cm)", "٠٫٢ متر (٢٠ سم)"], ["20 m", "٢٠ مترًا"], ["2 cm", "٢ سم"], ["0.02 m", "٠٫٠٢ متر"]],
            off: [eq("2 ÷ 10 = 0.2 m") + "; it must still be packed far more tightly (about 100,000 times) to fit the nucleus.", eq("2 ÷ 10 = 0.2 m") + "، ولا يزال يجب تعبئته بإحكام أكبر بكثير (نحو ١٠٠ ألف مرة) ليناسب النواة."],
            sto: ["Winding a hose round spools shortens it, but it still needs folding into the bag.", "لف الخرطوم حول بكرات يقصره، لكنه ما زال يحتاج للطي في الكيس."] },
          { q: ["Which is a chemical used to induce mutations?", "أي مما يلي مادة كيميائية تستخدم لاستحداث الطفرات؟"],
            c: [["Colchicine", "الكولشيسين"], ["Glucose", "الجلوكوز"], ["Thymosin", "الثيموسين"], ["Insulin", "الأنسولين"]],
            off: ["Induced mutagens: gamma rays, UV, mustard gas, colchicine, nitrous acid.", "مسببات الطفرات المستحدثة: أشعة جاما والأشعة فوق البنفسجية وغاز الخردل والكولشيسين وحمض النيتروز."],
            sto: ["Colchicine doubles chromosomes, giving the giant strawberries Adam's father grows.", "الكولشيسين يضاعف الكروموسومات فيعطي الفراولة الكبيرة التي يزرعها والد آدم."] }
        ]
      }
    ]
  });

  /* ================= UNIT 6: PROTEIN SYNTHESIS ================= */
  G.units.push({
    id: "sec3biou6", num: 6, icon: "⚙️", color: "teal",
    title: { en: "Nucleic Acids and Protein Synthesis", ar: "الأحماض النووية وتخليق البروتين" },
    lessons: [
      {
        id: "sec3biou6l1", icon: "📜", page: 132,
        title: { en: "RNA, Transcription and the Genetic Code", ar: "RNA والنسخ والشفرة الوراثية" },
        idea: {
          official: {
            en: ["Proteins are structural (actin, myosin, collagen, keratin) or regulatory (enzymes, antibodies, hormones). They are chains of 20 amino acids joined by peptide bonds.",
              "RNA differs from DNA: ribose sugar instead of deoxyribose, usually single-stranded, and uracil (U) instead of thymine. Three types: mRNA, rRNA and tRNA.",
              "Transcription: RNA polymerase binds the promoter, separates the strands and builds RNA complementary to one template strand, working 3' → 5' on the template and assembling RNA " + eq("5' → 3'") + ".",
              "mRNA starts with the start codon AUG and ends with a stop codon (UAA, UAG or UGA), followed by a poly-A tail of up to 200 adenines that protects it. tRNA carries amino acids (CCA end) and has an anticodon.",
              "Code words: with 4 bases, " + eq("4¹ = 4") + " and " + eq("4² = 16") + " are too few for 20 amino acids, but " + eq("4³ = 64") + " codons are enough. The code is degenerate and universal."],
            ar: ["البروتينات بنائية (الأكتين والميوسين والكولاجين والكيراتين) أو تنظيمية (الإنزيمات والأجسام المضادة والهرمونات)، وهي سلاسل من ٢٠ حمضًا أمينيًا ترتبط بروابط ببتيدية.",
              "يختلف RNA عن DNA: سكر ريبوز بدلًا من ديؤكسي ريبوز، وشريط مفرد غالبًا، واليوراسيل (U) بدلًا من الثايمين، وله ثلاثة أنواع: الرسول mRNA والريبوسومي rRNA والناقل tRNA.",
              "النسخ: يرتبط إنزيم بلمرة RNA بالمحفز (البروموتر) ويفصل الشريطين ويبني RNA مكملًا لشريط قالب واحد، فيعمل '3 ← '5 على القالب ويبني RNA في الاتجاه " + eq("5' → 3'") + ".",
              "يبدأ mRNA بكودون البدء AUG وينتهي بكودون إيقاف (UAA أو UAG أو UGA) يليه ذيل عديد الأدينين حتى ٢٠٠ أدينين يحميه، وينقل tRNA الأحماض الأمينية (الطرف CCA) وله كودون مضاد.",
              "الشفرات: مع ٤ قواعد يكون " + eq("4¹ = 4") + " و" + eq("4² = 16") + " أقل من ٢٠ حمضًا أمينيًا، أما " + eq("4³ = 64") + " كودونًا فتكفي، والشفرة متعددة (مكررة) وعالمية."]
          },
          story: {
            en: ["Youssef's father keeps the original deed of their land in Sohag locked in a safe. When the lawyer needs it, he gets a photocopy, not the original.",
              "DNA is the original deed locked in the nucleus; mRNA is the photocopy that leaves for the ribosomes.",
              "The copy uses a slightly different alphabet: wherever DNA has A, the RNA copy gets U.",
              "Youssef counts: 4 letters taken 3 at a time make 4 × 4 × 4 = 64 words, more than enough for 20 amino acids.",
              "He is amazed that the same codons mean the same amino acids in bacteria, date palms and people."],
            ar: ["يحتفظ والد يوسف بعقد أرضهم الأصلي في سوهاج داخل خزنة، وعندما يحتاجه المحامي يأخذ صورة منه لا الأصل.",
              "DNA هو العقد الأصلي المحفوظ في النواة، وmRNA هو الصورة التي تخرج إلى الريبوسومات.",
              "الصورة تستخدم أبجدية مختلفة قليلًا: حيث يوجد A في DNA تحصل نسخة RNA على U.",
              "حسب يوسف: ٤ حروف تؤخذ ٣ في كل مرة تعطي ٤ × ٤ × ٤ = ٦٤ كلمة، أكثر من كافية لعشرين حمضًا أمينيًا.",
              "واندهش أن الكودونات نفسها تعني الأحماض الأمينية نفسها في البكتيريا والنخيل والإنسان."]
          }
        },
        words: [
          ["Transcription", "النسخ", "Making RNA complementary to a DNA template by RNA polymerase.", "بناء RNA مكمل لقالب DNA بواسطة إنزيم بلمرة RNA."],
          ["Messenger RNA (mRNA)", "الحمض النووي الرسول", "Carries the genetic code from DNA to the ribosomes.", "ينقل الشفرة الوراثية من DNA إلى الريبوسومات."],
          ["Transfer RNA (tRNA)", "الحمض النووي الناقل", "Carries a specific amino acid and has an anticodon.", "ينقل حمضًا أمينيًا محددًا وله كودون مضاد."],
          ["Codon", "الكودون", "Three consecutive nucleotides on mRNA coding for one amino acid.", "ثلاث نيوكليوتيدات متتالية على mRNA تشفر لحمض أميني واحد."],
          ["Promoter", "المحفز (البروموتر)", "DNA sequence at the start of a gene where RNA polymerase binds.", "تتابع DNA في بداية الجين يرتبط به إنزيم بلمرة RNA."],
          ["Uracil", "اليوراسيل", "RNA base that replaces thymine and pairs with adenine.", "قاعدة في RNA تحل محل الثايمين وترتبط بالأدينين."],
          ["Start codon", "كودون البدء", "AUG, coding for methionine; begins translation.", "AUG ويشفر للميثيونين، ويبدأ الترجمة."]
        ],
        lab: { parts: [{ type: "sec3bio_transcribe" }] },
        quiz: [
          { q: ["The DNA template strand is 3' T-A-C-G-G-A 5'. What is the mRNA transcribed from it?", "شريط القالب في DNA هو '3 T-A-C-G-G-A '5. ما mRNA المنسوخ منه؟"],
            c: [["5' A-U-G-C-C-U 3'", "'5 A-U-G-C-C-U '3"], ["5' A-T-G-C-C-T 3'", "'5 A-T-G-C-C-T '3"], ["5' T-A-C-G-G-A 3'", "'5 T-A-C-G-G-A '3"], ["5' U-A-C-G-G-A 3'", "'5 U-A-C-G-G-A '3"]],
            off: ["Pair T→A, A→U, C→G, G→C: AUG CCU. The first codon AUG is the start codon.", "زاوج T←A وA←U وC←G وG←C: AUG CCU، والكودون الأول AUG هو كودون البدء."],
            sto: ["In the photocopy every T-partner becomes U.", "في الصورة يصبح شريك كل A حرف U."] },
          { q: ["Why can't the code words be two nucleotides long?", "لماذا لا يمكن أن تكون الشفرة مكونة من نيوكليوتيدتين؟"],
            c: [["4² = 16 words, fewer than 20 amino acids", "4² = ١٦ كلمة، أقل من ٢٠ حمضًا أمينيًا"], ["4² = 64 words, too many", "4² = ٦٤ كلمة، أكثر من اللازم"], ["RNA has only 2 bases", "RNA به قاعدتان فقط"], ["Two-letter words are unstable", "الكلمات ذات الحرفين غير ثابتة"]],
            off: [eq("4 × 4 = 16 < 20") + "; triplets give " + eq("4³ = 64") + ", enough for every amino acid.", eq("4 × 4 = 16 < 20") + "، أما الثلاثيات فتعطي " + eq("4³ = 64") + " وهي كافية لكل حمض أميني."],
            sto: ["16 jerseys can't dress a squad of 20 players.", "١٦ قميصًا لا تكفي فريقًا من ٢٠ لاعبًا."] },
          { q: ["A gene of 150 base pairs is fully transcribed. How many codons does its mRNA contain?", "جين من ١٥٠ زوجًا من القواعد نُسخ كاملًا. كم كودونًا في mRNA الناتج؟"],
            c: [["50", "٥٠"], ["150", "١٥٠"], ["300", "٣٠٠"], ["75", "٧٥"]],
            off: ["Only one strand is transcribed, giving 150 nucleotides: " + eq("150 ÷ 3 = 50 codons") + ".", "يُنسخ شريط واحد فقط فينتج ١٥٠ نيوكليوتيدة: " + eq("150 ÷ 3 = 50") + " كودونًا."],
            sto: ["150 letters, read three at a time: 50 words.", "١٥٠ حرفًا تُقرأ ثلاثة ثلاثة: ٥٠ كلمة."] },
          { q: ["Which is NOT a difference between RNA and DNA?", "أي مما يلي ليس فرقًا بين RNA وDNA؟"],
            c: [["RNA contains phosphate groups while DNA does not", "RNA يحتوي على فوسفات وDNA لا يحتوي"], ["RNA has ribose; DNA has deoxyribose", "RNA به ريبوز وDNA به ديؤكسي ريبوز"], ["RNA has uracil instead of thymine", "RNA به يوراسيل بدلًا من الثايمين"], ["RNA is usually single-stranded", "RNA غالبًا شريط مفرد"]],
            off: ["Both have sugar-phosphate backbones. The real differences: sugar, number of strands and U instead of T.", "كلاهما له هيكل من السكر والفوسفات، والفروق الحقيقية: السكر وعدد الأشرطة وU بدلًا من T."],
            sto: ["Same rails, different letters and one track instead of two.", "القضبان نفسها، لكن حروف مختلفة وخط واحد بدل اثنين."] },
          { q: ["What is the function of the poly-A tail of mRNA?", "ما وظيفة ذيل عديد الأدينين في mRNA؟"],
            c: [["It protects mRNA from breakdown by enzymes in the cytoplasm", "يحمي mRNA من التحلل بالإنزيمات في السيتوبلازم"], ["It codes for many amino acids", "يشفر لأحماض أمينية كثيرة"], ["It binds the amino acid", "يرتبط بالحمض الأميني"], ["It is the start codon", "هو كودون البدء"]],
            off: ["The tail of up to 200 adenines is not translated; it protects the mRNA.", "الذيل المكون من حتى ٢٠٠ أدينين لا يُترجم، بل يحمي mRNA."],
            sto: ["A plastic cover on the photocopy so it lasts longer.", "غلاف بلاستيكي على الصورة لتعيش أطول."] },
          { q: ["The genetic code is universal. This is evidence that...", "الشفرة الوراثية عالمية، وهذا دليل على أن..."],
            c: [["all living organisms originated from common ancestors", "كل الكائنات الحية نشأت من أسلاف مشتركة"], ["each species has its own code", "لكل نوع شفرته الخاصة"], ["proteins carry genes", "البروتينات تحمل الجينات"], ["viruses are not living", "الفيروسات ليست حية"]],
            off: ["The same codons code for the same amino acids in viruses, bacteria, plants, animals and fungi.", "الكودونات نفسها تشفر للأحماض الأمينية نفسها في الفيروسات والبكتيريا والنباتات والحيوانات والفطريات."],
            sto: ["One language spoken from bacteria to date palms.", "لغة واحدة من البكتيريا إلى النخيل."] }
        ]
      },
      {
        id: "sec3biou6l2", icon: "🔬", page: 138,
        title: { en: "Translation and Genetic Engineering", ar: "الترجمة والهندسة الوراثية" },
        idea: {
          official: {
            en: ["Initiation: mRNA binds the small ribosomal subunit; the start codon AUG pairs with the anticodon of the tRNA carrying methionine; then the large subunit joins. AUG sits at the P-site.",
              "Elongation, a cycle of 3 steps: a tRNA binds the codon at the A-site; peptidyl transferase forms a peptide bond; the ribosome moves one codon along the mRNA.",
              "Termination: at a stop codon a releasing factor frees the mRNA and the subunits separate. Many ribosomes on one mRNA form a polyribosome. A protein of n amino acids has " + eq("n - 1") + " peptide bonds.",
              "Genetic engineering tools: restriction endonucleases cut DNA at specific recognition sites (4-7 nucleotides) leaving sticky ends; DNA ligase joins them; plasmids carry genes into bacteria; reverse transcriptase makes DNA from mRNA; PCR uses Taq polymerase.",
              "Applications: human insulin from bacteria (licensed 1982), interferon, disease-resistant crops and recombinant vaccines. The Human Genome Project (1990-2003) found about 25,000 genes on 23 pairs of chromosomes."],
            ar: ["البدء: يرتبط mRNA بالوحدة الصغرى للريبوسوم، ويرتبط كودون البدء AUG بالكودون المضاد لـ tRNA الحامل للميثيونين، ثم تنضم الوحدة الكبرى ويقع AUG في الموقع P.",
              "الاستطالة دورة من ٣ خطوات: يرتبط tRNA بالكودون في الموقع A، ويكوّن إنزيم الببتيديل ترانسفيريز رابطة ببتيدية، ويتحرك الريبوسوم كودونًا واحدًا على mRNA.",
              "الإنهاء: عند كودون الإيقاف يرتبط عامل الانطلاق فيحرر mRNA وتنفصل الوحدتان، وعدة ريبوسومات على mRNA واحد تكوّن البولي ريبوسوم، والبروتين المكون من n حمضًا أمينيًا به " + eq("n - 1") + " رابطة ببتيدية.",
              "أدوات الهندسة الوراثية: إنزيمات القصر (القطع) تقطع DNA عند مواقع تعرّف محددة (٤-٧ نيوكليوتيدات) تاركة نهايات لاصقة، وإنزيم الربط يصلها، والبلازميدات تنقل الجينات إلى البكتيريا، وإنزيم النسخ العكسي يصنع DNA من mRNA، وتفاعل البلمرة المتسلسل PCR يستخدم إنزيم Taq.",
              "التطبيقات: الأنسولين البشري من البكتيريا (رُخص ١٩٨٢)، والإنترفيرون، ومحاصيل مقاومة للأمراض، ولقاحات مأمونة، وتوصل مشروع الجينوم البشري (١٩٩٠-٢٠٠٣) إلى نحو ٢٥ ألف جين على ٢٣ زوجًا من الكروموسومات."]
          },
          story: {
            en: ["Salma's father, the diabetic patient, injects human insulin made by bacteria. Salma wants to know how bacteria can make a human hormone.",
              "Her chemistry teacher compares restriction enzymes to scissors that cut only at one word, leaving sticky ends like velcro.",
              "The human insulin gene is cut and glued into a plasmid with ligase, then put into bacteria. Each time the bacteria divide, they copy the gene.",
              "Inside the bacteria, ribosomes read the mRNA codon by codon, tRNAs bring amino acids, and peptide bonds link them into insulin.",
              "Before 1982, insulin came from cattle and pig pancreases; now millions get exact human insulin."],
            ar: ["والد سلمى مريض السكر يحقن أنسولينًا بشريًا تصنعه البكتيريا، وتريد سلمى أن تعرف كيف تصنع البكتيريا هرمونًا بشريًا.",
              "شبهت معلمة الكيمياء إنزيمات القصر بمقصات لا تقطع إلا عند كلمة واحدة تاركة نهايات لاصقة مثل الفيلكرو.",
              "يُقطع جين الأنسولين البشري ويُلصق في بلازميد بإنزيم الربط ثم يوضع في البكتيريا، وكلما انقسمت البكتيريا نسخت الجين.",
              "وداخل البكتيريا تقرأ الريبوسومات mRNA كودونًا كودونًا، وتحضر جزيئات tRNA الأحماض الأمينية، وتربطها روابط ببتيدية لتكوّن الأنسولين.",
              "قبل ١٩٨٢ كان الأنسولين يُستخرج من بنكرياس الأبقار والخنازير، والآن يحصل الملايين على أنسولين بشري تمامًا."]
          }
        },
        words: [
          ["Translation", "الترجمة", "Building a polypeptide on the ribosome according to the mRNA codons.", "بناء سلسلة عديدة الببتيد على الريبوسوم حسب كودونات mRNA."],
          ["Anticodon", "الكودون المضاد", "Three bases on tRNA complementary to an mRNA codon.", "ثلاث قواعد على tRNA مكملة لكودون على mRNA."],
          ["Releasing factor", "عامل الانطلاق", "Protein that binds the stop codon and frees the mRNA.", "بروتين يرتبط بكودون الإيقاف ويحرر mRNA."],
          ["Polyribosome", "البولي ريبوسوم", "One mRNA with many ribosomes translating it.", "جزيء mRNA واحد ترتبط به ريبوسومات كثيرة تترجمه."],
          ["Restriction enzymes", "إنزيمات القصر (القطع)", "Bacterial enzymes that cut DNA at specific recognition sites.", "إنزيمات بكتيرية تقطع DNA عند مواقع تعرّف محددة."],
          ["Sticky ends", "النهايات اللاصقة", "Single-stranded ends from a staggered cut that pair with matching ends.", "أطراف مفردة من قطع متعرج ترتبط بالأطراف المكملة."],
          ["Reverse transcriptase", "إنزيم النسخ العكسي", "Enzyme from RNA viruses that makes DNA on an mRNA template.", "إنزيم من فيروسات RNA يصنع DNA على قالب mRNA."]
        ],
        lab: { parts: [{ type: "sec3bio_translate" }, {
          type: "sort",
          prompt: ["Tap each tool, then tap what it does in genetic engineering.", "اضغط على كل أداة، ثم اضغط على وظيفتها في الهندسة الوراثية."],
          bins: [["c", "✂️", "Cuts DNA", "يقطع DNA"], ["j", "🔗", "Joins DNA", "يربط DNA"], ["v", "🚚", "Carries the gene", "ينقل الجين"], ["m", "📠", "Makes DNA copies", "يصنع نسخ DNA"]],
          items: [[["Restriction endonuclease", "إنزيم القصر"], "c"], [["DNA ligase", "إنزيم الربط"], "j"], [["Plasmid", "البلازميد"], "v"], [["Bacteriophage carrier", "الفاج الناقل"], "v"], [["PCR (Taq polymerase)", "PCR (إنزيم Taq)"], "m"], [["Reverse transcriptase", "إنزيم النسخ العكسي"], "m"]]
        }] },
        quiz: [
          { q: ["A polypeptide contains 21 amino acids. How many peptide bonds join them?", "سلسلة عديدة الببتيد بها ٢١ حمضًا أمينيًا. كم رابطة ببتيدية تربطها؟"],
            c: [["20", "٢٠"], ["21", "٢١"], ["22", "٢٢"], ["63", "٦٣"]],
            off: ["n amino acids need n - 1 bonds: " + eq("21 - 1 = 20") + ".", "n حمضًا أمينيًا تحتاج n - 1 رابطة: " + eq("21 - 1 = 20") + "."],
            sto: ["21 people holding hands in a line use 20 handshakes.", "٢١ شخصًا يمسكون أيدي بعض في صف يستخدمون ٢٠ مصافحة."] },
          { q: ["A polypeptide contains 21 amino acids. What is the least number of mRNA nucleotides coding them (excluding the stop codon)?", "سلسلة بها ٢١ حمضًا أمينيًا. ما أقل عدد من نيوكليوتيدات mRNA يشفر لها (دون كودون الإيقاف)؟"],
            c: [["63", "٦٣"], ["21", "٢١"], ["66", "٦٦"], ["42", "٤٢"]],
            off: ["Each amino acid needs one codon of 3 nucleotides: " + eq("21 × 3 = 63") + " (66 with the stop codon).", "كل حمض أميني يحتاج كودونًا من ٣ نيوكليوتيدات: " + eq("21 × 3 = 63") + " (٦٦ مع كودون الإيقاف)."],
            sto: ["Three letters per word, 21 words.", "ثلاثة حروف لكل كلمة، ٢١ كلمة."] },
          { q: ["An mRNA codon is 5' G-C-U 3'. What is the anticodon of the tRNA that pairs with it?", "كودون على mRNA هو '5 G-C-U '3. ما الكودون المضاد لـ tRNA الذي يرتبط به؟"],
            c: [["3' C-G-A 5'", "'3 C-G-A '5"], ["3' C-G-T 5'", "'3 C-G-T '5"], ["3' G-C-U 5'", "'3 G-C-U '5"], ["3' A-G-C 5'", "'3 A-G-C '5"]],
            off: ["G pairs with C, C with G, U with A; RNA has no T.", "G يرتبط مع C، وC مع G، وU مع A، ولا يوجد T في RNA."],
            sto: ["The tRNA's three-letter key fits the codon's three-letter lock.", "مفتاح tRNA ذو الحروف الثلاثة يناسب قفل الكودون الثلاثي."] },
          { q: ["What happens when the ribosome reaches a stop codon?", "ماذا يحدث عندما يصل الريبوسوم إلى كودون الإيقاف؟"],
            c: [["A releasing factor binds and the mRNA and subunits separate", "يرتبط عامل الانطلاق وينفصل mRNA والوحدتان"], ["Methionine is added", "يُضاف الميثيونين"], ["A new tRNA binds it", "يرتبط به tRNA جديد"], ["The ribosome moves backwards", "يتحرك الريبوسوم للخلف"]],
            off: ["Stop codons (UAA, UAG, UGA) have no tRNA; a releasing factor ends synthesis.", "كودونات الإيقاف (UAA وUAG وUGA) ليس لها tRNA، وعامل الانطلاق ينهي البناء."],
            sto: ["The full stop at the end of the sentence.", "النقطة في نهاية الجملة."] },
          { q: ["Why don't restriction enzymes destroy the bacterium's own DNA?", "لماذا لا تدمر إنزيمات القصر DNA البكتيريا نفسها؟"],
            c: [["Modification enzymes add methyl groups to the bacterium's recognition sites", "إنزيمات التعديل تضيف مجموعات ميثيل إلى مواقع التعرف في DNA البكتيريا"], ["Bacteria have no DNA", "البكتيريا ليس بها DNA"], ["The enzymes work only outside the cell", "الإنزيمات تعمل خارج الخلية فقط"], ["Bacterial DNA is RNA", "DNA البكتيريا هو RNA"]],
            off: ["Methyl (-CH₃) groups make the bacterial DNA resistant to its own restriction enzymes.", "مجموعات الميثيل (-CH₃) تجعل DNA البكتيريا مقاومًا لإنزيمات القصر الخاصة بها."],
            sto: ["The guards wear a badge, so the bacterium's scissors skip them.", "الحراس يرتدون شارة، فيتجاوزهم مقص البكتيريا."] },
          { q: ["Which enzyme makes DNA from an mRNA template?", "أي إنزيم يصنع DNA على قالب mRNA؟"],
            c: [["Reverse transcriptase", "إنزيم النسخ العكسي"], ["RNA polymerase", "إنزيم بلمرة RNA"], ["Restriction endonuclease", "إنزيم القصر"], ["Peptidyl transferase", "الببتيديل ترانسفيريز"]],
            off: ["Produced by viruses with RNA genomes; used to make complementary DNA from insulin mRNA.", "تنتجه الفيروسات ذات الجينوم RNA، ويُستخدم لصنع DNA مكمل من mRNA الأنسولين."],
            sto: ["It writes the original from the photocopy: backwards from normal.", "يكتب الأصل من الصورة؛ عكس المعتاد."] },
          { q: ["How many genes did the Human Genome Project find, approximately?", "كم جينًا توصل إليه مشروع الجينوم البشري تقريبًا؟"],
            c: [["About 25,000 genes", "نحو ٢٥ ألف جين"], ["About 46 genes", "نحو ٤٦ جينًا"], ["About 2.5 million genes", "نحو ٢٫٥ مليون جين"], ["About 2,500 genes", "نحو ٢٥٠٠ جين"]],
            off: ["The project (1990-2003) found about 25,000 genes on the 23 pairs of chromosomes.", "توصل المشروع (١٩٩٠-٢٠٠٣) إلى نحو ٢٥ ألف جين على ٢٣ زوجًا من الكروموسومات."],
            sto: ["46 is the chromosome count, not the gene count.", "٤٦ عدد الكروموسومات لا عدد الجينات."] }
        ]
      }
    ]
  });

  /* ================= UNIT 7: EARTH SCIENCE ================= */
  G.units.push({
    id: "sec3biou7", num: 7, icon: "🪨", color: "orange",
    title: { en: "Earth Science", ar: "علم الأرض (الجيولوجيا)" },
    lessons: [
      {
        id: "sec3biou7l1", icon: "⛰️", page: 155,
        title: { en: "Geology, Earth's Structure and Geological Structures", ar: "الجيولوجيا وتركيب الأرض والتراكيب الجيولوجية" },
        idea: {
          official: {
            en: ["Geology is the science of the Earth. Branches include physical geology, mineralogy, hydrogeology, structural geology, stratigraphy, paleontology, geochemistry, engineering and petroleum geology and geophysics.",
              "Earth has a crust (sial on continents), a mantle (84% of Earth's rock volume, to about 2900 km: rigid upper part forming the 100 km lithosphere, then the 350 km asthenosphere) and a core (radius 3486 km, a third of Earth's mass: molten outer core, solid inner core).",
              "Primary structures form without tectonic forces (cross bedding, ripple marks, graded bedding, mud cracks); tectonic structures (folds, faults, joints) form by forces from Earth's interior.",
              "Folds bend layers under compression: anticline (oldest layers at the centre) and syncline (youngest at the centre). Folds can trap oil, gas and groundwater.",
              "Faults are fractures with displacement: normal (tension, hanging wall moves down), reverse (compression, hanging wall moves up), thrust (low-angle reverse), strike-slip (horizontal), horsts and grabens. Joints are fractures with no movement.",
              "Unconformity surfaces mark gaps in deposition: nonconformity, angular unconformity and disconformity."],
            ar: ["الجيولوجيا هي علم الأرض، ومن فروعها الجيولوجيا الطبيعية وعلم المعادن والمياه الجوفية والجيولوجيا التركيبية وعلم الطبقات والحفريات والجيوكيمياء والجيولوجيا الهندسية والبترولية والجيوفيزياء.",
              "للأرض قشرة (السيال في القارات)، ووشاح (٨٤٪ من حجم صخور الأرض حتى عمق نحو ٢٩٠٠ كم: جزء علوي صلب يكوّن الغلاف الصخري بسمك ١٠٠ كم ثم الغلاف اللدن بسمك ٣٥٠ كم)، ولب (نصف قطره ٣٤٨٦ كم وكتلته ثلث كتلة الأرض: لب خارجي منصهر ولب داخلي صلب).",
              "التراكيب الأولية تتكون دون قوى تكتونية (التطبق المتقاطع وعلامات النيم والتطبق المتدرج وتشققات الطين)، والتراكيب التكتونية (الطيات والصدوع والفواصل) تتكون بقوى من باطن الأرض.",
              "الطيات انثناء الطبقات تحت الضغط: محدبة (أقدم الطبقات في المركز) ومقعرة (أحدث الطبقات في المركز)، ويمكن أن تكون مصائد للبترول والغاز والمياه الجوفية.",
              "الصدوع كسور يصاحبها إزاحة: عادية (شد، الحائط العلوي يتحرك لأسفل)، ومعكوسة (ضغط، الحائط العلوي يتحرك لأعلى)، والدسر (معكوس منخفض الزاوية)، والمضربية (أفقية)، والأغوار والهورستات، والفواصل كسور بلا حركة.",
              "أسطح عدم التوافق تدل على فترات توقف الترسيب: عدم التوافق اللاتطابقي، والزاوي، والانقطاع (عدم التوافق المتوازي)."]
          },
          story: {
            en: ["On a school trip to Ain Sokhna, Hossam sees hot springs bubbling near the Gulf of Suez. The guide says the hot water rises along a fault plane.",
              "On the road cut, the rock layers are bent into an arch: an anticline. The guide explains that compression from deep inside the Earth folded them.",
              "Further on, a block of layers has slipped down along a crack: a normal fault caused by tension as the Gulf opened.",
              "At Aswan, Hossam remembers that the ancient Egyptians used natural joints in granite to cut obelisks more easily.",
              "Geology is not just rocks: it finds oil, water and safe places for cities and dams."],
            ar: ["في رحلة مدرسية إلى العين السخنة رأى حسام عيونًا حارة تفور قرب خليج السويس، وقال المرشد إن الماء الساخن يصعد على امتداد مستوى صدع.",
              "وفي قطع الطريق كانت طبقات الصخر منثنية على شكل قوس: طية محدبة، وشرح المرشد أن ضغطًا من باطن الأرض ثناها.",
              "وبعدها انزلقت كتلة من الطبقات لأسفل على امتداد شق: صدع عادي سببه الشد عند انفتاح الخليج.",
              "وفي أسوان تذكر حسام أن قدماء المصريين استفادوا من الفواصل الطبيعية في الجرانيت لقطع المسلات بسهولة.",
              "الجيولوجيا ليست مجرد صخور؛ إنها تجد البترول والمياه والأماكن الآمنة للمدن والسدود."]
          }
        },
        words: [
          ["Fold", "الطية", "Bending or wrinkling of crustal rock layers, usually by compression.", "انثناء أو تجعد طبقات صخور القشرة، غالبًا بالضغط."],
          ["Anticline", "الطية المحدبة", "Fold with the oldest layers at its centre.", "طية تكون أقدم طبقاتها في المركز."],
          ["Syncline", "الطية المقعرة", "Fold with the youngest layers at its centre.", "طية تكون أحدث طبقاتها في المركز."],
          ["Fault", "الصدع", "Fracture of rock masses with relative displacement along the fault plane.", "كسر في الكتل الصخرية تصاحبه إزاحة نسبية على مستوى الصدع."],
          ["Hanging wall", "الحائط العلوي", "Rock mass above the fault plane.", "الكتلة الصخرية فوق مستوى الصدع."],
          ["Joint", "الفاصل", "Fracture in rocks with no evidence of movement.", "كسر في الصخور دون دليل على حركة."],
          ["Unconformity", "سطح عدم التوافق", "Erosion or non-deposition surface separating two rock groups.", "سطح تعرية أو انقطاع ترسيب يفصل مجموعتين من الصخور."]
        ],
        lab: { parts: [{ type: "sec3bio_faults" }] },
        quiz: [
          { q: ["In a normal fault, the hanging wall moves...", "في الصدع العادي يتحرك الحائط العلوي..."],
            c: [["downward, due to tension", "لأسفل بسبب الشد"], ["upward, due to compression", "لأعلى بسبب الضغط"], ["horizontally only", "أفقيًا فقط"], ["not at all", "لا يتحرك"]],
            off: ["Normal fault: tension, hanging wall down. Reverse fault: compression, hanging wall up.", "الصدع العادي: شد والحائط العلوي لأسفل، والمعكوس: ضغط والحائط العلوي لأعلى."],
            sto: ["Pull the table apart and the top block slides down into the gap.", "اسحب الطاولة للخارج فتنزلق الكتلة العلوية في الفجوة."] },
          { q: ["The mantle extends to about 2900 km and the core radius is about 3486 km. What is Earth's approximate radius?", "يمتد الوشاح حتى عمق نحو ٢٩٠٠ كم ونصف قطر اللب نحو ٣٤٨٦ كم. ما نصف قطر الأرض تقريبًا؟"],
            c: [["About 6386 km", "نحو ٦٣٨٦ كم"], ["About 586 km", "نحو ٥٨٦ كم"], ["About 2900 km", "نحو ٢٩٠٠ كم"], ["About 12,772 km", "نحو ١٢٧٧٢ كم"]],
            off: ["The core starts where the mantle ends (2900 km deep): " + eq("2900 + 3486 = 6386 km") + " (crust thickness included in the 2900 km depth).", "يبدأ اللب حيث ينتهي الوشاح (عمق ٢٩٠٠ كم): " + eq("2900 + 3486 = 6386 km") + " (وسمك القشرة ضمن عمق ٢٩٠٠ كم)."],
            sto: ["Depth to the core plus the core's own radius gives the distance to the centre.", "العمق حتى اللب مع نصف قطر اللب يعطي المسافة إلى المركز."] },
          { q: ["An anticline fold is characterized by...", "تتميز الطية المحدبة بأن..."],
            c: [["its oldest layers being at the centre", "أقدم طبقاتها في المركز"], ["its youngest layers being at the centre", "أحدث طبقاتها في المركز"], ["no bending of layers", "لا انثناء للطبقات"], ["horizontal displacement", "الإزاحة أفقية"]],
            off: ["The book: anticline layers are concave upward (arched) with the oldest layers in the centre.", "يذكر الكتاب أن طبقات المحدبة مقوسة للأعلى وأقدم طبقاتها في المركز."],
            sto: ["The arch on the Sokhna road shows the oldest rock in its core.", "القوس على طريق السخنة يظهر أقدم الصخور في قلبه."] },
          { q: ["Joints differ from faults in that joints...", "تختلف الفواصل عن الصدوع في أن الفواصل..."],
            c: [["show no evidence of movement", "لا يوجد بها دليل على حركة"], ["always contain oil", "تحتوي دائمًا على بترول"], ["form only in sedimentary rocks", "تتكون في الصخور الرسوبية فقط"], ["are caused by tension only", "تسببها قوى الشد فقط"]],
            off: ["Joints are fractures in igneous, sedimentary and metamorphic rocks without displacement.", "الفواصل كسور في الصخور النارية والرسوبية والمتحولة دون إزاحة."],
            sto: ["A cracked tile that hasn't moved is a joint; a tile that slipped is a fault.", "البلاطة المشروخة التي لم تتحرك فاصل، والتي انزلقت صدع."] },
          { q: ["Hot springs at Helwan and Ain Sokhna are related to...", "ترتبط العيون الحارة في حلوان والعين السخنة بـ..."],
            c: [["rising of hot water along fault planes", "صعود الماء الساخن على امتداد مستويات الصدوع"], ["anticline folds only", "الطيات المحدبة فقط"], ["mud cracks", "تشققات الطين"], ["ripple marks", "علامات النيم"]],
            off: ["Fault planes are paths for hot water, springs and the deposition of ores.", "مستويات الصدوع مسارات للمياه الساخنة والعيون وترسيب الخامات."],
            sto: ["The fault is a natural pipe from the deep, hot crust.", "الصدع ماسورة طبيعية من أعماق القشرة الساخنة."] },
          { q: ["Which is a primary (non-tectonic) geological structure?", "أي مما يلي تركيب جيولوجي أولي (غير تكتوني)؟"],
            c: [["Ripple marks", "علامات النيم"], ["Reverse fault", "الصدع المعكوس"], ["Syncline", "الطية المقعرة"], ["Thrust fault", "صدع الدسر"]],
            off: ["Primary structures (cross bedding, ripple marks, graded bedding, mud cracks) form by climate and environment.", "التراكيب الأولية (التطبق المتقاطع وعلامات النيم والتطبق المتدرج وتشققات الطين) تتكون بفعل المناخ والبيئة."],
            sto: ["The ripples water leaves on the sand at Marsa Matrouh can turn into rock.", "تموجات الماء على رمال مرسى مطروح قد تتحول إلى صخر."] }
        ]
      },
      {
        id: "sec3biou7l2", icon: "💎", page: 165,
        title: { en: "Minerals and Rocks", ar: "المعادن والصخور" },
        idea: {
          official: {
            en: ["A mineral is a solid, inorganic, naturally occurring substance with a definite chemical composition and a crystal structure. Eight elements form over 98.5% of the crust.",
              "Crystals are classified into systems by their axes (cubic: 3 equal perpendicular axes, e.g. halite NaCl). Physical properties: luster, colour, streak (powder colour, e.g. hematite red-brown, pyrite black), hardness (Mohs scale), cleavage, fracture, malleability and specific gravity (galena 7.5, gold 19.3).",
              "Igneous rocks form by cooling of magma or lava. Bowen's series: olivine crystallizes first; silica rises in the last stages. By silica: ultrabasic (< 45%), basic (45-55%), intermediate (55-66%), acidic (> 65%).",
              "By place: plutonic (slow cooling, coarse: granite, diorite, gabbro), intruded (porphyritic: microgranite, dolerite) and volcanic (fast cooling, fine or glassy: rhyolite, basalt, andesite, obsidian, pumice).",
              "Sedimentary rocks (stratified, often porous, with fossils) are clastic, chemical (limestone, gypsum, halite) or biogenic (fossiliferous limestone, phosphate, coal). Metamorphic rocks: marble from limestone, quartzite from sandstone, slate, schist and gneiss.",
              "Hutton (1785) linked the three rock types in the rock cycle: weathering, transportation, deposition, lithification, metamorphism and melting."],
            ar: ["المعدن مادة صلبة غير عضوية توجد في الطبيعة ولها تركيب كيميائي محدد وبناء بلوري، وثمانية عناصر تكوّن أكثر من ٩٨٫٥٪ من القشرة.",
              "تصنف البلورات إلى فصائل حسب محاورها (المكعبي: ٣ محاور متساوية ومتعامدة مثل الهاليت NaCl)، والخواص الطبيعية: البريق واللون والمخدش (لون مسحوق المعدن، كالهيماتيت أحمر بني والبيريت أسود) والصلادة (مقياس موس) والانفصام والمكسر والقابلية للطرق والكثافة النوعية (الجالينا ٧٫٥ والذهب ١٩٫٣).",
              "تتكون الصخور النارية بتبريد الصهارة أو اللافا، وفي سلسلة باون يتبلور الأوليفين أولًا وتزداد السيليكا في المراحل الأخيرة، وحسب السيليكا: فوق قاعدية (أقل من ٤٥٪) وقاعدية (٤٥-٥٥٪) ومتوسطة (٥٥-٦٦٪) وحامضية (أكثر من ٦٥٪).",
              "وحسب مكان التبلور: جوفية (تبريد بطيء وحبيبات خشنة: الجرانيت والديوريت والجابرو)، ومتداخلة (نسيج بورفيري: الميكروجرانيت والدولريت)، وبركانية (تبريد سريع وحبيبات دقيقة أو زجاجية: الريوليت والبازلت والأنديزيت والأوبسيديان والخفاف).",
              "الصخور الرسوبية (طبقية ومسامية غالبًا وبها حفريات) فتاتية أو كيميائية (الحجر الجيري والجبس والهاليت) أو عضوية (الحجر الجيري الحفري والفوسفات والفحم)، والمتحولة: الرخام من الحجر الجيري والكوارتزيت من الحجر الرملي والأردواز والشيست والنيس.",
              "ربط هاتون (١٧٨٥) بين أنواع الصخور الثلاثة في دورة الصخور: التجوية والنقل والترسيب والتصخر والتحول والانصهار."]
          },
          story: {
            en: ["Nadine's family is renovating their kitchen in New Cairo. The granite worktop sparkles with big pink, white and black crystals.",
              "Her geology teacher explains: big crystals mean slow cooling deep underground, so granite is a plutonic acidic rock rich in quartz and feldspar.",
              "The black basalt cobbles outside cooled fast from lava, so their crystals are too small to see.",
              "Her mother's marble floor was once limestone made from sea shells, transformed by heat and pressure.",
              "Nadine scratches a mystery stone on an unglazed tile and gets a red-brown streak: hematite, even though the stone looks dark grey."],
            ar: ["عائلة نادين تجدد مطبخها في القاهرة الجديدة، ورخامة الجرانيت تلمع ببلورات كبيرة وردية وبيضاء وسوداء.",
              "شرحت معلمة الجيولوجيا أن البلورات الكبيرة تعني تبريدًا بطيئًا في أعماق الأرض، فالجرانيت صخر ناري جوفي حامضي غني بالكوارتز والفلسبار.",
              "أما أحجار البازلت السوداء في الشارع فقد بردت بسرعة من اللافا فبلوراتها أصغر من أن تُرى.",
              "وأرضية الرخام في بيت أمها كانت يومًا حجرًا جيريًا من أصداف بحرية تحول بالحرارة والضغط.",
              "وحكّت نادين حجرًا مجهولًا على بلاطة غير مصقولة فظهر مخدش أحمر بني: إنه الهيماتيت رغم أن لونه يبدو رماديًا داكنًا."]
          }
        },
        words: [
          ["Mineral", "المعدن", "Solid, inorganic, natural substance with definite composition and crystal structure.", "مادة صلبة غير عضوية طبيعية لها تركيب محدد وبناء بلوري."],
          ["Streak", "المخدش", "Colour of the mineral's powder on unglazed porcelain.", "لون مسحوق المعدن على لوح خزف غير مصقول."],
          ["Hardness", "الصلادة", "A mineral's resistance to scratching.", "مقاومة المعدن للخدش."],
          ["Cleavage", "الانفصام", "Splitting of a mineral along smooth planes of weakness.", "انفصال المعدن على مستويات ملساء ضعيفة."],
          ["Igneous rocks", "الصخور النارية", "Rocks formed by cooling and crystallization of magma or lava.", "صخور تكونت بتبريد وتبلور الصهارة أو اللافا."],
          ["Porphyritic texture", "النسيج البورفيري", "Large crystals surrounded by small ones (intruded rocks).", "بلورات كبيرة تحيط بها بلورات صغيرة (الصخور المتداخلة)."],
          ["Rock cycle", "دورة الصخور", "Hutton's cycle linking igneous, sedimentary and metamorphic rocks.", "دورة هاتون التي تربط الصخور النارية والرسوبية والمتحولة."]
        ],
        lab: { parts: [{ type: "sec3bio_rocks" }, {
          type: "sort",
          prompt: ["Tap a rock, then tap its type.", "اضغط على صخر، ثم اضغط على نوعه."],
          bins: [["i", "🌋", "Igneous", "نارية"], ["s", "🏜️", "Sedimentary", "رسوبية"], ["m", "🔥", "Metamorphic", "متحولة"]],
          items: [[["Granite", "الجرانيت"], "i"], [["Basalt", "البازلت"], "i"], [["Obsidian", "الأوبسيديان"], "i"], [["Limestone", "الحجر الجيري"], "s"], [["Sandstone", "الحجر الرملي"], "s"], [["Coal", "الفحم"], "s"], [["Marble", "الرخام"], "m"], [["Slate", "الأردواز"], "m"], [["Gneiss", "النيس"], "m"]]
        }] },
        quiz: [
          { q: ["Granite, microgranite and rhyolite have the same composition but differ in...", "للجرانيت والميكروجرانيت والريوليت التركيب نفسه لكنها تختلف في..."],
            c: [["place of formation, texture and grain size", "مكان التكوين والنسيج وحجم الحبيبات"], ["silica percentage", "نسبة السيليكا"], ["being igneous or not", "كونها نارية أم لا"], ["colour of streak", "لون المخدش"]],
            off: ["Granite: plutonic, coarse; microgranite: intruded, porphyritic; rhyolite: volcanic, fine.", "الجرانيت جوفي خشن، والميكروجرانيت متداخل بورفيري، والريوليت بركاني دقيق."],
            sto: ["Same dough, different oven times: different bread.", "العجينة نفسها بأزمنة خبز مختلفة تعطي خبزًا مختلفًا."] },
          { q: ["A rock has 50% silica and fine crystals from fast cooling of lava. It is...", "صخر نسبة السيليكا فيه ٥٠٪ وبلوراته دقيقة من تبريد سريع للافا. إنه..."],
            c: [["basalt (basic, volcanic)", "البازلت (قاعدي بركاني)"], ["granite (acidic, plutonic)", "الجرانيت (حامضي جوفي)"], ["gabbro (basic, plutonic)", "الجابرو (قاعدي جوفي)"], ["andesite (intermediate)", "الأنديزيت (متوسط)"]],
            off: ["45-55% silica = basic; fast surface cooling = volcanic fine texture: basalt.", "سيليكا ٤٥-٥٥٪ = قاعدي، وتبريد سطحي سريع = نسيج بركاني دقيق: البازلت."],
            sto: ["The black road cobbles: basic lava that froze quickly.", "أحجار الشارع السوداء: لافا قاعدية تجمدت بسرعة."] },
          { q: ["Which mineral crystallizes first from cooling magma according to Bowen's series?", "أي معدن يتبلور أولًا من الصهارة حسب سلسلة باون؟"],
            c: [["Olivine", "الأوليفين"], ["Quartz", "الكوارتز"], ["Mica", "الميكا"], ["Potash feldspar", "الفلسبار البوتاسي"]],
            off: ["Fe-, Mg- and Ca-rich minerals crystallize first (olivine); the magma becomes richer in Na, K and silica later (quartz last).", "تتبلور المعادن الغنية بالحديد والماغنسيوم والكالسيوم أولًا (الأوليفين)، وتصبح الصهارة أغنى بالصوديوم والبوتاسيوم والسيليكا لاحقًا (الكوارتز أخيرًا)."],
            sto: ["The first to leave the party is olivine; quartz stays till the end.", "أول من يغادر الحفل الأوليفين، والكوارتز يبقى حتى النهاية."] },
          { q: ["Hematite appears dark grey or red, but its streak is always...", "يظهر الهيماتيت رماديًا داكنًا أو أحمر، لكن مخدشه دائمًا..."],
            c: [["red (reddish brown)", "أحمر (بني محمر)"], ["black", "أسود"], ["white", "أبيض"], ["golden", "ذهبي"]],
            off: ["Streak is constant even when colour varies; pyrite (golden) has a black streak, quartz a white streak.", "المخدش ثابت حتى لو تغير اللون، والبيريت (الذهبي) مخدشه أسود، والكوارتز مخدشه أبيض."],
            sto: ["Nadine's mystery stone confessed its name on the tile.", "حجر نادين المجهول اعترف باسمه على البلاطة."] },
          { q: ["Marble is a metamorphic rock formed from...", "الرخام صخر متحول يتكون من..."],
            c: [["limestone exposed to intense heat", "الحجر الجيري المعرض لحرارة شديدة"], ["sandstone under pressure", "الحجر الرملي تحت الضغط"], ["granite under pressure", "الجرانيت تحت الضغط"], ["shale at low temperature", "الطفل عند درجة حرارة منخفضة"]],
            off: ["Contact (thermal) metamorphism recrystallizes calcite in limestone into marble; sandstone gives quartzite; granite gives gneiss; shale gives slate.", "التحول الحراري يعيد تبلور الكالسيت في الحجر الجيري إلى رخام، والحجر الرملي يعطي الكوارتزيت، والجرانيت يعطي النيس، والطفل يعطي الأردواز."],
            sto: ["Sea shells → limestone → the marble floor in Nadine's grandmother's flat.", "أصداف بحرية ← حجر جيري ← أرضية الرخام في شقة جدة نادين."] },
          { q: ["An object has a mass of 38.6 g and a volume of 2 cm³. Using the book's values, it is probably...", "جسم كتلته ٣٨٫٦ جم وحجمه ٢ سم³. باستخدام قيم الكتاب فهو على الأرجح..."],
            c: [["gold (specific gravity 19.3)", "ذهب (كثافته النوعية ١٩٫٣)"], ["galena (7.5)", "جالينا (٧٫٥)"], ["quartz", "كوارتز"], ["halite", "هاليت"]],
            off: [eq("38.6 ÷ 2 = 19.3 g/cm³") + ", the specific gravity of gold.", eq("38.6 ÷ 2 = 19.3 g/cm³") + "، وهي الكثافة النوعية للذهب."],
            sto: ["Heavy for its size: the sign of real gold in Khan El Khalili.", "ثقيل بالنسبة لحجمه؛ علامة الذهب الحقيقي في خان الخليلي."] },
          { q: ["Obsidian has a glassy texture because...", "للأوبسيديان نسيج زجاجي لأن..."],
            c: [["lava cooled very fast with no chance to crystallize", "اللافا بردت بسرعة كبيرة دون فرصة للتبلور"], ["it cooled slowly deep underground", "برد ببطء في الأعماق"], ["it contains fossils", "يحتوي على حفريات"], ["it was metamorphosed", "تعرض للتحول"]],
            off: ["Extruded lava cooling very quickly forms non-crystalline glass (obsidian) or frothy pumice.", "اللافا المنبثقة التي تبرد بسرعة كبيرة تكوّن زجاجًا غير متبلور (الأوبسيديان) أو خفافًا رغويًا."],
            sto: ["Like sugar syrup poured on cold marble: it sets as glass.", "مثل شربات السكر على رخامة باردة: يتجمد كالزجاج."] }
        ]
      }
    ]
  });
})();

/* ---------- Sec 3 Biology: objectives, extra quiz items, tappable diagrams ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t;
  var O = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var X = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var P = "sec3bio";

  /* ----- "In this lesson" objectives (from the book's chapter objectives) ----- */
  O[P + "u1l1"] = { en: ["Explain how plants support themselves by substances on cell walls", "Describe the axial and appendicular skeleton", "Count the vertebrae, skull bones and ribs", "Compare fibrous, cartilaginous and synovial joints", "Distinguish ligaments from tendons"],
    ar: ["تفسير دعامة النبات بالمواد المترسبة على جدر الخلايا", "وصف الهيكل المحوري والهيكل الطرفي", "عدّ الفقرات وعظام الجمجمة والضلوع", "المقارنة بين المفاصل الليفية والغضروفية والزلالية", "التمييز بين الأربطة والأوتار"] };
  O[P + "u1l2"] = { en: ["Recognize the concept of movement in living organisms", "Explain why tendrils twine around a support", "Differentiate tendril pulling from the pulling roots of corms and bulbs", "Describe sleeping movement, touch movement and cytoplasmic streaming"],
    ar: ["التعرف على مفهوم الحركة في الكائنات الحية", "تفسير التفاف المحاليق حول الدعامة", "التمييز بين الشد بالمحاليق والجذور الشادة للكورمات والأبصال", "وصف حركة النوم وحركة اللمس وانسياب السيتوبلازم"] };
  O[P + "u1l3"] = { en: ["Describe the structure of a skeletal muscle down to the sarcomere", "Explain how the nerve impulse reaches the muscle", "Explain Huxley's sliding filament theory", "Explain muscle fatigue and spasm"],
    ar: ["وصف تركيب العضلة الهيكلية حتى القطعة العضلية", "تفسير انتقال السيال العصبي إلى العضلة", "شرح نظرية الانزلاق لهكسلي", "تفسير الإجهاد العضلي والتقلص المؤلم"] };
  O[P + "u2l1"] = { en: ["Define the hormone and its characteristics", "Describe Starling's and Jensen's discoveries", "Compare exocrine and endocrine glands", "Explain why the pituitary is the master gland", "State the effects of hypo- and hypersecretion of GH"],
    ar: ["تعريف الهرمون وخصائصه", "وصف اكتشافات ستارلنج وجنسن", "المقارنة بين الغدد القنوية والصماء", "تفسير لماذا النخامية هي الغدة الرئيسية", "ذكر آثار نقص وزيادة إفراز هرمون النمو"] };
  O[P + "u2l2"] = { en: ["Describe the thyroid and its hormones", "Relate goitre, cretinism and myxoedema to thyroxine levels", "Explain calcium regulation by parathormone and calcitonin", "State the hormones of the adrenal cortex and medulla"],
    ar: ["وصف الغدة الدرقية وهرموناتها", "ربط الجويتر والقماءة والميكسيديما بمستوى الثيروكسين", "تفسير تنظيم الكالسيوم بالباراثورمون والكالسيتونين", "ذكر هرمونات قشرة ونخاع الغدة الكظرية"] };
  O[P + "u2l3"] = { en: ["Explain why the pancreas is a mixed gland", "Compare insulin and glucagon", "Explain the symptoms of diabetes mellitus", "Name the sex hormones and gut hormones and their roles"],
    ar: ["تفسير لماذا البنكرياس غدة مشتركة", "المقارنة بين الأنسولين والجلوكاجون", "تفسير أعراض البول السكري", "ذكر الهرمونات الجنسية وهرمونات القناة الهضمية وأدوارها"] };
  O[P + "u3l1"] = { en: ["Recognize the importance of reproduction", "Explain asexual reproduction by mitosis", "Describe binary fission, budding, regeneration and spores", "Explain parthenogenesis and tissue culture"],
    ar: ["التعرف على أهمية التكاثر", "تفسير التكاثر اللاجنسي بالانقسام الميتوزي", "وصف الانشطار الثنائي والتبرعم والتجدد والجراثيم", "شرح التكاثر البكري وزراعة الأنسجة"] };
  O[P + "u3l2"] = { en: ["Compare asexual and sexual reproduction", "Describe conjugation in Spirogyra", "Trace the life cycle of Plasmodium", "Explain alternation of generations in ferns"],
    ar: ["المقارنة بين التكاثر اللاجنسي والجنسي", "وصف الاقتران في الإسبيروجيرا", "تتبع دورة حياة البلازموديوم", "شرح تبادل الأجيال في السراخس"] };
  O[P + "u3l3"] = { en: ["Identify the four whorls of a flower", "Describe formation of pollen grains and the embryo sac", "Explain pollination and double fertilization", "Explain how fruits and seeds form, and parthenocarpy"],
    ar: ["التعرف على محيطات الزهرة الأربعة", "وصف تكوين حبوب اللقاح والكيس الجنيني", "شرح التلقيح والإخصاب المزدوج", "تفسير تكوين الثمار والبذور والإثمار العذري"] };
  O[P + "u3l4"] = { en: ["Describe the male and female genital systems", "Compare spermatogenesis and oogenesis", "Explain the menstrual cycle and its hormones", "Trace fertilization, implantation and embryo development", "Compare identical and fraternal twins"],
    ar: ["وصف الجهازين التناسليين الذكري والأنثوي", "المقارنة بين تكوين الحيوانات المنوية والبويضات", "شرح الدورة الشهرية وهرموناتها", "تتبع الإخصاب والانغراس ونمو الجنين", "المقارنة بين التوائم المتماثلة وغير المتماثلة"] };
  O[P + "u4l1"] = { en: ["Define immunity", "Explain structural and biochemical immunity in plants", "Identify the organs of the human immune system", "Determine the types of lymphocytes", "Describe antibody structure and action"],
    ar: ["تعريف المناعة", "شرح المناعة التركيبية والكيميائية الحيوية في النبات", "تحديد أعضاء الجهاز المناعي في الإنسان", "تحديد أنواع الخلايا الليمفاوية", "وصف تركيب الأجسام المضادة وطرق عملها"] };
  O[P + "u4l2"] = { en: ["Compare natural and acquired immunity", "Describe the first and second lines of defence", "Explain humoral and cell-mediated immunity", "Compare primary and secondary immune responses"],
    ar: ["المقارنة بين المناعة الطبيعية والمكتسبة", "وصف خطي الدفاع الأول والثاني", "شرح المناعة الخلطية والمناعة الخلوية", "المقارنة بين الاستجابة المناعية الأولية والثانوية"] };
  O[P + "u5l1"] = { en: ["Recognize the scientists' role in proving DNA is the genetic material", "Describe the structure of a nucleotide", "Apply A = T and G = C", "Describe the Watson-Crick double helix"],
    ar: ["التعرف على دور العلماء في إثبات أن DNA هو المادة الوراثية", "وصف تركيب النيوكليوتيدة", "تطبيق قاعدة A = T وG = C", "وصف نموذج الحلزون المزدوج لواطسون وكريك"] };
  O[P + "u5l2"] = { en: ["Explain DNA replication and the enzymes involved", "Compare leading and lagging strands", "Compare DNA in prokaryotes and eukaryotes", "Classify mutations and their causes"],
    ar: ["شرح تضاعف DNA والإنزيمات المشاركة", "المقارنة بين الشريط الرائد والمتأخر", "المقارنة بين DNA بدائيات وحقيقيات النواة", "تصنيف الطفرات وأسبابها"] };
  O[P + "u6l1"] = { en: ["Compare structural and regulatory proteins", "Compare RNA and DNA", "Explain transcription", "Explain why the genetic code is a triplet code"],
    ar: ["المقارنة بين البروتينات البنائية والتنظيمية", "المقارنة بين RNA وDNA", "شرح عملية النسخ", "تفسير لماذا الشفرة الوراثية ثلاثية"] };
  O[P + "u6l2"] = { en: ["Describe initiation, elongation and termination of translation", "Explain the tools of genetic engineering", "State applications of recombinant DNA", "Explain the importance of the human genome"],
    ar: ["وصف بدء الترجمة واستطالتها وإنهائها", "شرح أدوات الهندسة الوراثية", "ذكر تطبيقات DNA المعاد تركيبه", "تفسير أهمية الجينوم البشري"] };
  O[P + "u7l1"] = { en: ["Explain the importance of geology", "Compare the Earth's crust, mantle and core", "Compare primary and tectonic structures", "Classify folds, faults and joints", "Identify types of unconformity"],
    ar: ["تفسير أهمية علم الجيولوجيا", "المقارنة بين القشرة والوشاح واللب", "المقارنة بين التراكيب الأولية والتكتونية", "تصنيف الطيات والصدوع والفواصل", "التعرف على أنواع أسطح عدم التوافق"] };
  O[P + "u7l2"] = { en: ["Define a mineral and its crystal systems", "Identify minerals by luster, streak, hardness and cleavage", "Classify igneous rocks by silica and place of crystallization", "Compare sedimentary and metamorphic rocks", "Describe the rock cycle"],
    ar: ["تعريف المعدن وفصائله البلورية", "التعرف على المعادن بالبريق والمخدش والصلادة والانفصام", "تصنيف الصخور النارية حسب السيليكا ومكان التبلور", "المقارنة بين الصخور الرسوبية والمتحولة", "وصف دورة الصخور"] };

  /* ----- extra quiz items: one order/match + one true/false per lesson ----- */
  X[P + "u1l1"] = [
    { k: "order", q: ["Order the vertebral regions from the head downward.", "رتب مناطق العمود الفقري من الرأس إلى أسفل."],
      items: [["Cervical (7)", "عنقية (٧)"], ["Thoracic (12)", "صدرية (١٢)"], ["Lumbar (5)", "قطنية (٥)"], ["Sacral (5)", "عجزية (٥)"], ["Coccygeal (4)", "عصعصية (٤)"]],
      off: ["Neck, chest, lower back, sacrum, tail bone: 7 + 12 + 5 + 5 + 4 = 33.", "الرقبة ثم الصدر ثم أسفل الظهر ثم العجز ثم العصعص: ٧ + ١٢ + ٥ + ٥ + ٤ = ٣٣."],
      sto: ["Omar reads his grandfather's X-ray from top to bottom.", "عمر يقرأ أشعة جده من أعلى إلى أسفل."] },
    { k: "tf", a: false, q: ["True or false: the elbow joint is a wide-movement joint like the shoulder.", "صواب أم خطأ: مفصل الكوع واسع الحركة مثل الكتف."],
      off: ["False. The elbow and knee allow movement in one direction only.", "خطأ؛ الكوع والركبة يسمحان بالحركة في اتجاه واحد فقط."],
      sto: ["Try swinging your forearm in a circle: it won't go.", "حاول تحريك ساعدك في دائرة؛ لن يتحرك."] }
  ];
  X[P + "u1l2"] = [
    { k: "match", q: ["Match each plant movement to its example.", "صِل كل حركة نباتية بمثالها."],
      pairs: [[["Movement by touch", "حركة اللمس"], ["Mimosa leaflets collapse", "انطواء وريقات المستحية"]], [["Sleeping movement", "حركة النوم"], ["Legume leaves close at night", "انطباق أوراق البقوليات ليلًا"]],
        [["Haptotropism", "الحركة الالتفافية"], ["Pea tendril twines", "التفاف محلاق البسلة"]], [["Cytoplasmic streaming", "انسياب السيتوبلازم"], ["Chloroplasts circulate in Elodea", "دوران البلاستيدات في الإيلوديا"]]],
      off: ["Each movement is a response of the plant or its cells to a stimulus or internal activity.", "كل حركة استجابة من النبات أو خلاياه لمؤثر أو نشاط داخلي."],
      sto: ["Nour saw all four on the roof and under the microscope.", "رأت نور الأربعة على السطح وتحت المجهر."] },
    { k: "tf", a: true, q: ["True or false: the side of the tendril away from the support grows faster.", "صواب أم خطأ: الجانب البعيد عن الدعامة في المحلاق ينمو أسرع."],
      off: ["True. Faster growth on the far side elongates it, so the tendril coils round the support.", "صواب؛ سرعة النمو في الجانب البعيد تطيله فيلتف المحلاق حول الدعامة."],
      sto: ["The outer lane runs farther.", "الحارة الخارجية تجري مسافة أطول."] }
  ];
  X[P + "u1l3"] = [
    { k: "order", q: ["Order the events from nerve impulse to contraction.", "رتب الأحداث من السيال العصبي حتى الانقباض."],
      items: [["Impulse reaches the nerve ending", "يصل السيال إلى نهاية العصب"], ["Ca²⁺ enters and vesicles release acetylcholine", "يدخل الكالسيوم وتطلق الحويصلات الأستيل كولين"], ["Na⁺ enters: the muscle membrane depolarizes", "يدخل الصوديوم فيزول استقطاب غشاء العضلة"], ["Cross-bridges pull actin using ATP", "تسحب الروابط المستعرضة الأكتين باستخدام ATP"], ["Cholinesterase breaks acetylcholine: repolarization", "يحلل الكولين استيريز الأستيل كولين فيعود الاستقطاب"]],
      off: ["This is the neuromuscular sequence described in the book.", "هذا تسلسل الموصل العصبي العضلي كما في الكتاب."],
      sto: ["Message, messenger, door opens, rowers pull, referee resets.", "رسالة ثم رسول ثم يفتح الباب ثم يجدف المجدفون ثم يعيد الحكم الضبط."] },
    { k: "tf", a: false, q: ["True or false: during contraction the myosin filaments shorten.", "صواب أم خطأ: أثناء الانقباض تقصر خيوط الميوسين."],
      off: ["False. The filaments keep their length; actin slides over myosin and the Z-lines come closer.", "خطأ؛ تحتفظ الخيوط بطولها، وينزلق الأكتين على الميوسين فيقترب خطا Z."],
      sto: ["The ropes don't shrink; the pullers just gather them in.", "الحبال لا تنكمش؛ الشادّون يجمعونها فقط."] }
  ];
  X[P + "u2l1"] = [
    { k: "match", q: ["Match each pituitary hormone to its effect.", "صِل كل هرمون نخامي بتأثيره."],
      pairs: [[["GH", "هرمون النمو"], ["Controls physical growth", "يتحكم في النمو الجسمي"]], [["Prolactin", "البرولاكتين"], ["Milk production", "إفراز اللبن"]], [["ADH", "المانع لإدرار البول"], ["Reduces urine volume", "يقلل حجم البول"]], [["Oxytocin", "الأوكسيتوسين"], ["Uterine contractions in labour", "انقباضات الرحم أثناء الولادة"]]],
      off: ["GH and prolactin come from the anterior lobe; ADH and oxytocin are released from the posterior lobe.", "هرمون النمو والبرولاكتين من الفص الأمامي، والمانع لإدرار البول والأوكسيتوسين يُطلقان من الفص الخلفي."],
      sto: ["One gland, a full delivery service.", "غدة واحدة وخدمة توصيل كاملة."] },
    { k: "tf", a: true, q: ["True or false: the hormones of the posterior pituitary are made in the hypothalamus.", "صواب أم خطأ: هرمونات الفص الخلفي للنخامية تُصنع في تحت المهاد."],
      off: ["True. Nerve-secreting cells of the hypothalamus make them; they are stored in the posterior lobe.", "صواب؛ تصنعها خلايا عصبية إفرازية في تحت المهاد وتُخزن في الفص الخلفي."],
      sto: ["Made in the factory upstairs, stored in the shop downstairs.", "تُصنع في المصنع بالأعلى وتُخزن في المحل بالأسفل."] }
  ];
  X[P + "u2l2"] = [
    { k: "match", q: ["Match each condition to its cause.", "صِل كل حالة بسببها."],
      pairs: [[["Simple goitre", "الجويتر البسيط"], ["Iodine deficiency", "نقص اليود"]], [["Exophthalmic goitre", "الجويتر الجحوظي"], ["Excess thyroxine", "زيادة الثيروكسين"]], [["Fragile bones", "هشاشة العظام"], ["Excess parathormone", "زيادة الباراثورمون"]], [["Muscle spasms", "التشنجات العضلية"], ["Low parathormone", "نقص الباراثورمون"]]],
      off: ["Thyroid conditions follow thyroxine levels; calcium problems follow parathormone.", "حالات الدرقية تتبع مستوى الثيروكسين، ومشكلات الكالسيوم تتبع الباراثورمون."],
      sto: ["Each symptom points back to one gland.", "كل عرض يشير إلى غدة واحدة."] },
    { k: "tf", a: false, q: ["True or false: calcitonin raises blood calcium by pulling it from bones.", "صواب أم خطأ: الكالسيتونين يرفع كالسيوم الدم بسحبه من العظام."],
      off: ["False. Calcitonin lowers blood calcium and prevents its withdrawal from bones; parathormone raises it.", "خطأ؛ الكالسيتونين يخفض كالسيوم الدم ويمنع سحبه من العظام، والباراثورمون يرفعه."],
      sto: ["Calcitonin locks the calcium bank; parathormone opens it.", "الكالسيتونين يغلق بنك الكالسيوم والباراثورمون يفتحه."] }
  ];
  X[P + "u2l3"] = [
    { k: "match", q: ["Match each hormone to its source.", "صِل كل هرمون بمصدره."],
      pairs: [[["Insulin", "الأنسولين"], ["Beta cells", "خلايا بيتا"]], [["Glucagon", "الجلوكاجون"], ["Alpha cells", "خلايا ألفا"]], [["Testosterone", "التستوستيرون"], ["Interstitial cells of testis", "الخلايا البينية للخصية"]], [["Gastrin", "الجاسترين"], ["Stomach wall", "جدار المعدة"]]],
      off: ["Islets of Langerhans: alpha (glucagon), beta (insulin); testes: testosterone; stomach: gastrin.", "جزر لانجرهانز: ألفا (جلوكاجون) وبيتا (أنسولين)، والخصية: تستوستيرون، والمعدة: جاسترين."],
      sto: ["Know the factory behind every product.", "اعرف المصنع وراء كل منتج."] },
    { k: "tf", a: true, q: ["True or false: insulin allows all monosaccharides except fructose to enter cells.", "صواب أم خطأ: يسمح الأنسولين بدخول كل السكريات الأحادية عدا الفركتوز إلى الخلايا."],
      off: ["True. That is how insulin lowers blood glucose: cells take it in and use or store it.", "صواب؛ هكذا يخفض الأنسولين الجلوكوز، فتأخذه الخلايا وتستخدمه أو تخزنه."],
      sto: ["Insulin is the doorman letting sugar into the cells.", "الأنسولين البواب الذي يُدخل السكر إلى الخلايا."] }
  ];
  X[P + "u3l1"] = [
    { k: "match", q: ["Match each organism to how it reproduces asexually.", "صِل كل كائن بطريقة تكاثره اللاجنسي."],
      pairs: [[["Amoeba", "الأميبا"], ["Binary fission", "الانشطار الثنائي"]], [["Yeast", "الخميرة"], ["Budding", "التبرعم"]], [["Planaria", "البلاناريا"], ["Regeneration", "التجدد"]], [["Bread mould", "عفن الخبز"], ["Spores", "الجراثيم"]]],
      off: ["Each method depends on mitosis and gives identical offspring.", "كل طريقة تعتمد على الميتوزي وتعطي نسلًا متطابقًا."],
      sto: ["Four copy machines, four ways to print the same page.", "أربع آلات نسخ وأربع طرق لطباعة الصفحة نفسها."] },
    { k: "tf", a: false, q: ["True or false: offspring of asexual reproduction survive any environmental change easily.", "صواب أم خطأ: نسل التكاثر اللاجنسي ينجو بسهولة من أي تغير بيئي."],
      off: ["False. Identical offspring are exposed to destruction unless the parents were adapted to the change.", "خطأ؛ النسل المتطابق معرض للهلاك ما لم يكن الأبوان متكيفين مع التغير."],
      sto: ["If one copy fails the test, all the copies fail.", "إذا رسبت نسخة رسبت كل النسخ."] }
  ];
  X[P + "u3l2"] = [
    { k: "order", q: ["Order the stages of the fern life cycle starting from the sporophyte.", "رتب مراحل دورة حياة السرخس بدءًا من الطور الجرثومي."],
      items: [["Sporophyte (2N) with sori", "الطور الجرثومي (2N) بالبثرات"], ["Spores (N) by meiosis", "جراثيم (N) بالميوزي"], ["Gametophyte (N)", "الطور المشيجي (N)"], ["Sperm swims to archegonium", "الحيوان المنوي يسبح إلى الأرشيجونة"], ["Zygote (2N)", "اللاقحة (2N)"]],
      off: ["2N → N by meiosis, then N + N → 2N by fertilization.", "2N ← N بالميوزي، ثم N + N ← 2N بالإخصاب."],
      sto: ["Laila's fern turns from big leaf to tiny heart and back.", "سرخس ليلى يتحول من ورقة كبيرة إلى قلب صغير ثم يعود."] },
    { k: "tf", a: true, q: ["True or false: in Plasmodium, schizogony occurs in man and sporogony in the mosquito.", "صواب أم خطأ: في البلازموديوم يحدث التكاثر الانقسامي في الإنسان والتكاثر الجرثومي في البعوضة."],
      off: ["True. Asexual schizogony in the liver and RBCs; sexual gametes then sporogony in the mosquito.", "صواب؛ تكاثر انقسامي لاجنسي في الكبد وكرات الدم، وأمشاج ثم تكاثر جرثومي في البعوضة."],
      sto: ["Two hosts, two workshops.", "عائلان وورشتان."] }
  ];
  X[P + "u3l3"] = [
    { k: "order", q: ["Order the events from pollination to seed.", "رتب الأحداث من التلقيح حتى البذرة."],
      items: [["Pollen lands on the stigma", "تسقط حبة اللقاح على الميسم"], ["Pollen tube grows down the style", "ينمو أنبوب اللقاح في القلم"], ["Generative nucleus gives 2 male nuclei", "تعطي النواة التناسلية نواتين ذكريتين"], ["Double fertilization in the embryo sac", "الإخصاب المزدوج في الكيس الجنيني"], ["Ovule becomes the seed", "تتحول البويضة إلى بذرة"]],
      off: ["Pollination, germination, mitosis of the generative nucleus, double fertilization, seed and fruit.", "تلقيح ثم إنبات ثم انقسام النواة التناسلية ثم إخصاب مزدوج ثم بذرة وثمرة."],
      sto: ["The journey of a mango pollen grain in Mariam's orchard.", "رحلة حبة لقاح المانجو في بستان مريم."] },
    { k: "tf", a: true, q: ["True or false: pollination can stimulate fruit formation even without fertilization.", "صواب أم خطأ: يمكن أن ينبه التلقيح تكوين الثمرة حتى دون إخصاب."],
      off: ["True. Pollination stimulates auxins that develop the ovary into a fruit even if fertilization does not happen.", "صواب؛ التلقيح ينبه الأوكسينات التي تحول المبيض إلى ثمرة حتى لو لم يحدث إخصاب."],
      sto: ["That is how seedless fruits can form.", "هكذا تتكون الثمار عديمة البذور."] }
  ];
  X[P + "u3l4"] = [
    { k: "order", q: ["Order the phases of spermatogenesis.", "رتب مراحل تكوين الحيوانات المنوية."],
      items: [["Multiplication: spermatogonia (2N)", "التضاعف: أمهات المني (2N)"], ["Growth: primary spermatocytes (2N)", "النمو: خلايا منوية أولية (2N)"], ["Maturation: meiosis → spermatids (N)", "النضج: ميوزي ← طلائع منوية (N)"], ["Metamorphosis: sperms", "التشكل: حيوانات منوية"]],
      off: ["Mitosis, growth, meiosis I and II, then metamorphosis.", "ميتوزي ثم نمو ثم ميوزي أول وثانٍ ثم تشكل."],
      sto: ["Recruit, train, split the team, put on the kit.", "تجنيد ثم تدريب ثم تقسيم الفريق ثم ارتداء الزي."] },
    { k: "tf", a: false, q: ["True or false: the placenta secretes progesterone from the first week of pregnancy.", "صواب أم خطأ: تفرز المشيمة البروجسترون من الأسبوع الأول للحمل."],
      off: ["False. The corpus luteum secretes it until the placenta takes over at the beginning of the 4th month.", "خطأ؛ يفرزه الجسم الأصفر حتى تتولى المشيمة في بداية الشهر الرابع."],
      sto: ["The handover happens in month four.", "التسليم يحدث في الشهر الرابع."] }
  ];
  X[P + "u4l1"] = [
    { k: "match", q: ["Match each immune cell to its job.", "صِل كل خلية مناعية بوظيفتها."],
      pairs: [[["B-cell", "الخلية البائية"], ["Produces antibodies", "تنتج الأجسام المضادة"]], [["Helper T-cell", "التائية المساعدة"], ["Activates B and T cells", "تنشط الخلايا البائية والتائية"]], [["Cytotoxic T-cell", "التائية السامة"], ["Kills infected and cancer cells", "تقتل الخلايا المصابة والسرطانية"]], [["Macrophage", "الخلية الأكولة الكبيرة"], ["Engulfs pathogens and presents antigens", "تبتلع الممرضات وتعرض الأنتيجينات"]]],
      off: ["Each lymphocyte type has a defined role; macrophages come from monocytes.", "لكل نوع من الخلايا الليمفاوية دور محدد، والأكولة الكبيرة تنشأ من وحيدة النواة."],
      sto: ["Factory, commander, special forces and cleaners.", "مصنع وقائد وقوات خاصة وعمال نظافة."] },
    { k: "tf", a: true, q: ["True or false: interferons are not specific to a certain virus.", "صواب أم خطأ: الإنترفيرونات غير متخصصة لفيروس معين."],
      off: ["True. They make neighbouring healthy cells produce enzymes that block viral replication.", "صواب؛ تجعل الخلايا السليمة المجاورة تنتج إنزيمات تمنع تضاعف الفيروس."],
      sto: ["A general alarm, not a wanted poster.", "إنذار عام لا ملصق مطلوب للعدالة."] }
  ];
  X[P + "u4l2"] = [
    { k: "order", q: ["Order the steps of humoral immunity.", "رتب خطوات المناعة الخلطية."],
      items: [["Macrophage engulfs the pathogen", "تبتلع الخلية الأكولة الممرض"], ["Antigen-MHC is presented on its surface", "يُعرض معقد الأنتيجين وMHC على سطحها"], ["Helper T-cell binds and releases interleukins", "ترتبط التائية المساعدة وتفرز الإنترلوكينات"], ["B-cell divides into plasma and memory cells", "تنقسم الخلية البائية إلى خلايا بلازمية وذاكرة"], ["Antibodies bind the antigens", "ترتبط الأجسام المضادة بالأنتيجينات"]],
      off: ["Presentation, activation, multiplication and the antibody attack.", "عرض ثم تنشيط ثم تكاثر ثم هجوم الأجسام المضادة."],
      sto: ["Spot the thief, show the photo, sound the alarm, train the police, arrest.", "اكتشف اللص، اعرض الصورة، أطلق الإنذار، درّب الشرطة، اقبض."] },
    { k: "tf", a: false, q: ["True or false: natural immunity is specific to one type of microbe.", "صواب أم خطأ: المناعة الطبيعية متخصصة لنوع واحد من الميكروبات."],
      off: ["False. Natural immunity is non-specific; acquired immunity is specific.", "خطأ؛ المناعة الطبيعية غير متخصصة، والمكتسبة متخصصة."],
      sto: ["The skin blocks every intruder, whoever it is.", "الجلد يمنع أي متسلل مهما كان."] }
  ];
  X[P + "u5l1"] = [
    { k: "match", q: ["Match each scientist to the contribution.", "صِل كل عالم بإسهامه."],
      pairs: [[["Griffith", "جريفيث"], ["Bacterial transformation in mice", "التحول البكتيري في الفئران"]], [["Hershey and Chase", "هيرشي وتشيس"], ["Radioactive phage experiment", "تجربة الفاج المشع"]], [["Franklin", "فرانكلين"], ["X-ray diffraction of DNA", "حيود الأشعة السينية لـ DNA"]], [["Watson and Crick", "واطسون وكريك"], ["Double helix model", "نموذج الحلزون المزدوج"]]],
      off: ["Together these works proved DNA is the genetic material and revealed its shape.", "أثبتت هذه الأعمال معًا أن DNA هو المادة الوراثية وكشفت شكله."],
      sto: ["Four teams, one solved mystery.", "أربعة فرق ولغز واحد محلول."] },
    { k: "tf", a: false, q: ["True or false: a G-C pair is held by 2 hydrogen bonds.", "صواب أم خطأ: يرتبط الزوج G-C برابطتين هيدروجينيتين."],
      off: ["False. G-C has 3 hydrogen bonds; A-T has 2.", "خطأ؛ G-C بثلاث روابط هيدروجينية وA-T برابطتين."],
      sto: ["G and C shake with three hands.", "G وC يتصافحان بثلاث أيدٍ."] }
  ];
  X[P + "u5l2"] = [
    { k: "order", q: ["Order the steps of DNA replication.", "رتب خطوات تضاعف DNA."],
      items: [["The double helix unwinds", "ينفك الحلزون المزدوج"], ["Helicase breaks hydrogen bonds (fork)", "يكسر الهليكيز الروابط الهيدروجينية (الشوكة)"], ["Primase lays RNA primers", "يضع البريميز بادئات RNA"], ["Polymerase adds nucleotides 5' → 3'", "يضيف إنزيم البلمرة النيوكليوتيدات '5 ← '3"], ["Ligase joins Okazaki fragments", "يربط إنزيم الربط قطع أوكازاكي"]],
      off: ["Unwind, separate, prime, extend, join.", "فك ثم فصل ثم بدء ثم إطالة ثم ربط."],
      sto: ["Open the zip, mark the start, add teeth, glue the gaps.", "افتح السوستة، ضع العلامة، أضف الأسنان، الصق الفجوات."] },
    { k: "tf", a: true, q: ["True or false: polyploid plants usually have bigger flowers and fruits.", "صواب أم خطأ: النباتات متعددة المجموعات غالبًا أزهارها وثمارها أكبر."],
      off: ["True. Each gene has more copies, so its effect is more pronounced.", "صواب؛ لكل جين نسخ أكثر فيصبح تأثيره أوضح."],
      sto: ["4N strawberries are the big ones at the market.", "فراولة 4N هي الكبيرة في السوق."] }
  ];
  X[P + "u6l1"] = [
    { k: "match", q: ["Match each RNA type to its role.", "صِل كل نوع من RNA بدوره."],
      pairs: [[["mRNA", "الرسول mRNA"], ["Carries the code to ribosomes", "ينقل الشفرة إلى الريبوسومات"]], [["tRNA", "الناقل tRNA"], ["Carries amino acids, has the anticodon", "ينقل الأحماض الأمينية وله كودون مضاد"]], [["rRNA", "الريبوسومي rRNA"], ["Builds ribosomes with proteins", "يبني الريبوسومات مع البروتينات"]]],
      off: ["Three RNAs, one job: protein synthesis.", "ثلاثة أنواع من RNA ومهمة واحدة: تخليق البروتين."],
      sto: ["Message, delivery van, factory.", "الرسالة وعربة التوصيل والمصنع."] },
    { k: "tf", a: false, q: ["True or false: during transcription both DNA strands of a gene are copied into RNA.", "صواب أم خطأ: أثناء النسخ يُنسخ شريطا الجين كلاهما إلى RNA."],
      off: ["False. Only one strand of any DNA segment is transcribed; the promoter's orientation chooses it.", "خطأ؛ يُنسخ شريط واحد فقط من أي قطعة DNA، واتجاه المحفز يحدده."],
      sto: ["The lawyer copies only the page he needs.", "المحامي يصور الصفحة التي يحتاجها فقط."] }
  ];
  X[P + "u6l2"] = [
    { k: "order", q: ["Order the stages of producing human insulin in bacteria.", "رتب مراحل إنتاج الأنسولين البشري في البكتيريا."],
      items: [["Cut gene and plasmid with the same restriction enzyme", "قطع الجين والبلازميد بإنزيم القصر نفسه"], ["Sticky ends pair, ligase joins them", "تتزاوج النهايات اللاصقة ويربطها إنزيم الربط"], ["Recombinant plasmid enters bacteria", "يدخل البلازميد المعاد تركيبه البكتيريا"], ["Bacteria divide and copy the gene", "تنقسم البكتيريا وتنسخ الجين"], ["Bacteria translate it into insulin", "تترجمه البكتيريا إلى أنسولين"]],
      off: ["Cut, paste, insert, clone, express.", "قطع ثم لصق ثم إدخال ثم استنساخ ثم تعبير."],
      sto: ["The recipe pasted into the bacterium's cookbook.", "وصفة ملصقة في كتاب طبخ البكتيريا."] },
    { k: "tf", a: true, q: ["True or false: one mRNA can be translated by many ribosomes at the same time.", "صواب أم خطأ: يمكن أن يترجم جزيء mRNA واحد بعدة ريبوسومات في الوقت نفسه."],
      off: ["True. This cluster is the polyribosome (polysome), with several to over 100 ribosomes.", "صواب؛ هذا التجمع هو البولي ريبوسوم، من عدة إلى أكثر من ١٠٠ ريبوسوم."],
      sto: ["Many readers reading the same tape, one after another.", "قراء كثيرون يقرؤون الشريط نفسه واحدًا بعد الآخر."] }
  ];
  X[P + "u7l1"] = [
    { k: "match", q: ["Match each structure to its description.", "صِل كل تركيب بوصفه."],
      pairs: [[["Normal fault", "صدع عادي"], ["Tension, hanging wall down", "شد، الحائط العلوي لأسفل"]], [["Reverse fault", "صدع معكوس"], ["Compression, hanging wall up", "ضغط، الحائط العلوي لأعلى"]], [["Strike-slip fault", "صدع مضربي"], ["Horizontal movement", "حركة أفقية"]], [["Joint", "فاصل"], ["Fracture without movement", "كسر بلا حركة"]]],
      off: ["Faults are classified by the hanging wall's movement relative to the foot wall.", "تُصنف الصدوع حسب حركة الحائط العلوي بالنسبة للحائط السفلي."],
      sto: ["Hossam's road cut at Sokhna has more than one of these.", "قطع الطريق عند السخنة فيه أكثر من واحد منها."] },
    { k: "tf", a: true, q: ["True or false: the youngest layers are found at the centre of a syncline.", "صواب أم خطأ: توجد أحدث الطبقات في مركز الطية المقعرة."],
      off: ["True. Syncline: youngest at the centre; anticline: oldest at the centre.", "صواب؛ المقعرة: الأحدث في المركز، والمحدبة: الأقدم في المركز."],
      sto: ["A sagging sandwich keeps its top slice in the middle.", "الساندوتش المنثني لأسفل يبقي شريحته العليا في المنتصف."] }
  ];
  X[P + "u7l2"] = [
    { k: "order", q: ["Order igneous rocks from LOWEST to highest silica.", "رتب الصخور النارية من الأقل إلى الأعلى في نسبة السيليكا."],
      items: [["Peridotite (ultrabasic < 45%)", "البريدوتيت (فوق قاعدي < ٤٥٪)"], ["Gabbro (basic 45-55%)", "الجابرو (قاعدي ٤٥-٥٥٪)"], ["Diorite (intermediate 55-66%)", "الديوريت (متوسط ٥٥-٦٦٪)"], ["Granite (acidic > 65%)", "الجرانيت (حامضي > ٦٥٪)"]],
      off: ["Silica rises from ultrabasic to acidic; colour gets lighter.", "تزداد السيليكا من فوق القاعدي إلى الحامضي ويصبح اللون أفتح."],
      sto: ["From black to pink, like Nadine's kitchen worktops.", "من الأسود إلى الوردي، مثل رخامات مطبخ نادين."] },
    { k: "tf", a: false, q: ["True or false: colour is the most reliable property for identifying minerals.", "صواب أم خطأ: اللون أكثر الخواص اعتمادًا في التعرف على المعادن."],
      off: ["False. Colour changes with impurities; streak is constant and more reliable.", "خطأ؛ اللون يتغير بالشوائب، والمخدش ثابت وأكثر اعتمادًا."],
      sto: ["Quartz comes in rose, violet and milky, but its streak is always white.", "الكوارتز وردي وبنفسجي ولبني، لكن مخدشه أبيض دائمًا."] }
  ];

  /* ----- tappable diagrams (viewBox 0 0 400 240) ----- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 12) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function arrowDef(id, c) { return '<defs><marker id="' + id + '" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="' + c + '"/></marker></defs>'; }
  function box(x, y, w, h, c, r) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r || 8) + '" fill="' + c + '"/>'; }
  function ln(x1, y1, x2, y2, c, w, m) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || "var(--muted)") + '" stroke-width="' + (w || 2) + '"' + (m ? ' marker-end="url(#' + m + ')"' : "") + "/>"; }
  function g(s) { return '<g direction="ltr">' + s + "</g>"; }

  D[P + "u1l1"] = {
    title: ["The vertebral column and a vertebra", "العمود الفقري وفقرة"],
    svg: function () {
      var s = "", y = 18, regs = [[7, "#60a5fa", t("Cervical 7", "عنقية ٧")], [12, "#f97316", t("Thoracic 12", "صدرية ١٢")], [5, "#22c55e", t("Lumbar 5", "قطنية ٥")], [5, "#a855f7", t("Sacral 5", "عجزية ٥")], [4, "#ef4444", t("Coccygeal 4", "عصعصية ٤")]];
      regs.forEach(function (r) { for (var i = 0; i < r[0]; i++) { s += box(70 - i * 0.3, y, 34, 5, r[1], 2); y += 6; } s += tx(150, y - r[0] * 3, r[2], mut, 11); });
      s += '<circle cx="290" cy="110" r="34" fill="#fde68a" stroke="#b45309" stroke-width="2"/>' + tx(290, 114, t("Centrum", "الجسم"), "", 11);
      s += '<path d="M262,140 Q290,190 318,140" fill="none" stroke="#b45309" stroke-width="8"/>' + '<circle cx="290" cy="158" r="11" fill="var(--bg-2)" stroke="#b45309" stroke-width="2"/>';
      s += ln(290, 176, 290, 222, "#b45309", 7) + ln(250, 112, 210, 104, "#b45309", 7) + ln(330, 112, 370, 104, "#b45309", 7);
      s += tx(290, 236, t("Neural spine", "الشوكة العصبية"), mut, 10);
      return g(s);
    },
    spots: [[88, 40, ["Cervical (7)", "العنقية (٧)"], ["Moderate size, in the neck; they help move the head.", "متوسطة الحجم في الرقبة وتساعد على حركة الرأس."]],
      [88, 100, ["Thoracic (12)", "الصدرية (١٢)"], ["Larger than cervical; ribs attach to their centra and transverse processes.", "أكبر من العنقية وتتصل بها الضلوع عند الجسم والزوائد المستعرضة."]],
      [88, 158, ["Lumbar (5)", "القطنية (٥)"], ["The largest vertebrae, facing the abdominal region.", "أكبر الفقرات وتقابل منطقة البطن."]],
      [88, 205, ["Sacral 5 + Coccygeal 4", "العجزية ٥ + العصعصية ٤"], ["Fused together: broad flat sacral and small coccygeal vertebrae. Total 7+12+5+5+4 = 33.", "ملتحمة: عجزية عريضة مفلطحة وعصعصية صغيرة، والمجموع ٧+١٢+٥+٥+٤ = ٣٣."]],
      [290, 110, ["Centrum", "الجسم (المركز)"], ["The thick anterior part of the vertebra with two transverse processes.", "الجزء الأمامي السميك من الفقرة وله زائدتان مستعرضتان."]],
      [290, 158, ["Neural canal", "القناة العصبية"], ["Surrounded by the neural arch; the spinal cord passes through it, protected.", "يحيط بها القوس العصبي ويمر فيها الحبل الشوكي محميًا."]]]
  };
  D[P + "u1l2"] = {
    title: ["A tendril twining around a support", "محلاق يلتف حول دعامة"],
    svg: function () {
      var s = box(220, 20, 10, 200, "#a16207", 3), i, d = "M60,220 Q70,150 120,120 Q170,95 205,95";
      for (i = 0; i < 4; i++) d += " C" + (235) + "," + (95 - i * 22) + " " + (235) + "," + (75 - i * 22) + " " + (215) + "," + (80 - i * 22);
      s += '<path d="' + d + '" fill="none" stroke="#16a34a" stroke-width="4"/>';
      s += '<path d="M60,220 L60,140" stroke="#15803d" stroke-width="6"/>' + '<ellipse cx="48" cy="150" rx="14" ry="7" fill="#22c55e"/>';
      s += tx(300, 70, t("slow growth (touching side)", "نمو بطيء (جانب التلامس)"), "", 11) + tx(300, 150, t("fast growth (far side)", "نمو سريع (الجانب البعيد)"), "", 11);
      s += tx(225, 234, t("support", "الدعامة"), mut, 11) + tx(110, 236, t("pea stem", "ساق البسلة"), mut, 11);
      return g(s);
    },
    spots: [[225, 60, ["Coils", "اللفات"], ["The tendril twines several turns in a spiral form around the support.", "يلتف المحلاق عدة لفات حلزونية حول الدعامة."]],
      [300, 70, ["Contact side", "جانب التلامس"], ["Growth slows on the side touching the support.", "يبطؤ النمو في الجانب الملامس للدعامة."]],
      [300, 150, ["Far side", "الجانب البعيد"], ["Growth accelerates on the far side, which elongates and curls the tendril.", "يسرع النمو في الجانب البعيد فيستطيل ويلتف المحلاق."]],
      [130, 115, ["Pulling the stem", "شد الساق"], ["The tendril shortens and pulls the stem toward the support, then thickens with mechanical tissue.", "يقصر المحلاق ويشد الساق نحو الدعامة ثم يغلظ بأنسجة ميكانيكية."]],
      [60, 180, ["No support?", "بلا دعامة؟"], ["A tendril that meets no support wilts and dies.", "المحلاق الذي لا يجد دعامة يذبل ويموت."]]]
  };
  D[P + "u1l3"] = {
    title: ["A sarcomere: actin and myosin", "القطعة العضلية: الأكتين والميوسين"],
    svg: function () {
      var s = "", i;
      s += ln(40, 50, 40, 190, "var(--ink)", 4) + ln(360, 50, 360, 190, "var(--ink)", 4);
      for (i = 0; i < 4; i++) { var y = 70 + i * 34; s += ln(40, y, 175, y, "#60a5fa", 3) + ln(225, y, 360, y, "#60a5fa", 3); }
      for (i = 0; i < 3; i++) { var yy = 87 + i * 34; s += box(110, yy - 5, 180, 10, "#ef4444", 4); var k; for (k = 0; k < 6; k++) { s += ln(122 + k * 12, yy - 5, 116 + k * 12, yy - 14, "#b91c1c", 2) + ln(278 - k * 12, yy - 5, 284 - k * 12, yy - 14, "#b91c1c", 2); } }
      s += tx(40, 40, "Z", "", 14) + tx(360, 40, "Z", "", 14);
      s += '<rect x="110" y="200" width="180" height="8" fill="#ef4444" opacity=".5"/>' + tx(200, 222, t("A-band (myosin)", "القرص A (الميوسين)"), "", 11);
      s += tx(75, 222, t("I-band", "القرص I"), mut, 11) + tx(325, 222, t("I-band", "القرص I"), mut, 11) + tx(200, 40, t("H-zone", "المنطقة H"), mut, 11);
      return g(s);
    },
    spots: [[40, 120, ["Z-line", "الخط Z"], ["Bisects the I-band; two successive Z-lines bound one sarcomere.", "يقطع القرص I، والمسافة بين خطين متتاليين هي القطعة العضلية."]],
      [75, 70, ["Actin (thin)", "الأكتين (رفيع)"], ["Thin filaments forming the light I-band; they slide toward the centre.", "خيوط رفيعة تكوّن القرص الفاتح I وتنزلق نحو المركز."]],
      [200, 120, ["Myosin (thick)", "الميوسين (سميك)"], ["Thick filaments of the dark A-band; its length does not change.", "خيوط سميكة في القرص الداكن A ولا يتغير طولها."]],
      [140, 75, ["Cross-bridges", "الروابط المستعرضة"], ["Hooks of myosin that attach to actin with Ca²⁺ and ATP and pull it.", "خطاطيف الميوسين التي ترتبط بالأكتين بمساعدة الكالسيوم وATP وتسحبه."]],
      [200, 50, ["H-zone", "المنطقة H"], ["The semi-light middle of the A-band; it narrows during contraction.", "منتصف القرص A الأقل دكنة، ويضيق أثناء الانقباض."]]]
  };
  D[P + "u2l1"] = {
    title: ["The pituitary gland and its hormones", "الغدة النخامية وهرموناتها"],
    svg: function () {
      var s = '<path d="M120,30 Q200,0 280,30 L280,70 L120,70 Z" fill="#fbcfe8"/>' + tx(200, 50, t("Hypothalamus", "تحت المهاد"), "", 12);
      s += box(195, 70, 10, 35, "#f472b6", 3) + '<ellipse cx="170" cy="130" rx="45" ry="30" fill="#a855f7"/>' + '<ellipse cx="240" cy="130" rx="32" ry="26" fill="#c084fc"/>';
      s += tx(170, 134, t("Anterior", "أمامي"), 'style="fill:#fff"', 11) + tx(240, 134, t("Posterior", "خلفي"), 'style="fill:#fff"', 11);
      s += tx(90, 190, "GH · TSH · ACTH", "", 11) + tx(90, 206, "FSH · LH · " + t("Prolactin", "برولاكتين"), "", 11) + tx(310, 196, "ADH · " + t("Oxytocin", "أوكسيتوسين"), "", 11);
      s += ln(160, 160, 110, 178, "var(--muted)", 2) + ln(245, 156, 300, 182, "var(--muted)", 2);
      return g(s);
    },
    spots: [[200, 40, ["Hypothalamus", "تحت المهاد"], ["Makes ADH and oxytocin in nerve-secreting cells.", "تصنع خلاياه العصبية الإفرازية المانع لإدرار البول والأوكسيتوسين."]],
      [200, 88, ["Infundibulum", "الساق (القمع)"], ["Stalk connecting the gland to the brain; hormones travel down it.", "ساق تصل الغدة بالمخ وتنتقل خلالها الهرمونات."]],
      [170, 130, ["Adenohypophysis", "الغدة النخامية الغدية"], ["Anterior and middle lobes: GH, TSH, ACTH, FSH, LH and prolactin.", "الفصان الأمامي والأوسط: هرمون النمو وTSH وACTH وFSH وLH والبرولاكتين."]],
      [240, 130, ["Neurohypophysis", "الغدة النخامية العصبية"], ["Posterior lobe: stores and releases ADH and oxytocin.", "الفص الخلفي: يخزن ويطلق المانع لإدرار البول والأوكسيتوسين."]],
      [90, 198, ["Growth hormone", "هرمون النمو"], ["Low in childhood: dwarfism; high in childhood: gigantism; high in adults: acromegaly.", "نقصه في الطفولة قزامة، وزيادته في الطفولة عملقة، وزيادته في البالغين أكروميجالي."]]]
  };
  D[P + "u2l2"] = {
    title: ["Thyroid, parathyroids and adrenal gland", "الدرقية والجارات الدرقية والكظرية"],
    svg: function () {
      var s = box(80, 20, 22, 200, "#cbd5e1", 8) + tx(91, 232, t("trachea", "القصبة"), mut, 10);
      s += '<ellipse cx="62" cy="90" rx="22" ry="40" fill="#ef4444"/><ellipse cx="120" cy="90" rx="22" ry="40" fill="#ef4444"/>' + box(70, 98, 42, 12, "#dc2626", 5);
      [[52, 70], [52, 112], [130, 70], [130, 112]].forEach(function (p) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="6" fill="#facc15"/>'; });
      s += '<path d="M240,150 Q300,120 360,150 Q370,210 300,220 Q230,210 240,150 Z" fill="#a16207"/>' + tx(300, 195, t("kidney", "الكلية"), 'style="fill:#fff"', 11);
      s += '<path d="M255,140 Q300,60 345,140 Z" fill="#fb923c"/>' + '<path d="M278,135 Q300,95 322,135 Z" fill="#c2410c"/>';
      s += tx(300, 50, t("adrenal gland", "الغدة الكظرية"), "", 12);
      return g(s);
    },
    spots: [[62, 90, ["Thyroid lobes", "فصا الدرقية"], ["Secrete thyroxine (needs iodine) and calcitonin (lowers blood calcium).", "تفرز الثيروكسين (يحتاج اليود) والكالسيتونين (يخفض كالسيوم الدم)."]],
      [91, 104, ["Isthmus", "البرزخ"], ["Connects the two lobes in front of the trachea.", "يصل بين الفصين أمام القصبة الهوائية."]],
      [130, 70, ["Parathyroids (4)", "الجارات الدرقية (٤)"], ["Secrete parathormone when blood calcium is below normal.", "تفرز الباراثورمون عندما ينخفض كالسيوم الدم عن الطبيعي."]],
      [270, 128, ["Adrenal cortex", "قشرة الكظرية"], ["Cortisone (sugars), aldosterone (Na⁺/K⁺) and sex hormones.", "الكورتيزون (السكريات) والألدوستيرون (الصوديوم والبوتاسيوم) وهرمونات الجنس."]],
      [300, 120, ["Adrenal medulla", "نخاع الكظرية"], ["Adrenaline and noradrenaline for emergencies.", "الأدرينالين والنورأدرينالين لحالات الطوارئ."]]]
  };
  D[P + "u2l3"] = {
    title: ["Blood glucose control by the pancreas", "تنظيم جلوكوز الدم بالبنكرياس"],
    svg: function () {
      var s = arrowDef("sbg", "var(--muted)");
      s += box(150, 95, 100, 50, "#fde68a", 25) + tx(200, 116, t("Blood glucose", "جلوكوز الدم"), "", 11) + tx(200, 132, "80-120", "", 11);
      s += box(20, 20, 110, 40, "#60a5fa") + tx(75, 45, t("Beta: insulin", "بيتا: أنسولين"), 'style="fill:#fff"', 11);
      s += box(270, 20, 110, 40, "#f97316") + tx(325, 45, t("Alpha: glucagon", "ألفا: جلوكاجون"), 'style="fill:#fff"', 11);
      s += box(20, 180, 110, 40, "#22c55e") + tx(75, 205, t("Glycogen / fat", "جليكوجين / دهون"), 'style="fill:#fff"', 11);
      s += box(270, 180, 110, 40, "#a855f7") + tx(325, 205, t("Liver glycogen", "جليكوجين الكبد"), 'style="fill:#fff"', 11);
      s += ln(160, 140, 115, 178, "var(--muted)", 2, "sbg") + ln(290, 178, 245, 140, "var(--muted)", 2, "sbg");
      s += tx(200, 80, t("high ↑ insulin · low ↑ glucagon", "مرتفع ← أنسولين · منخفض ← جلوكاجون"), mut, 10);
      return g(s);
    },
    spots: [[200, 120, ["Normal level", "المستوى الطبيعي"], ["80 - 120 mg glucose per 100 cm³ of blood.", "٨٠ - ١٢٠ مجم جلوكوز لكل ١٠٠ سم³ دم."]],
      [75, 40, ["Beta cells", "خلايا بيتا"], ["The majority of islet cells; secrete insulin, which lowers blood glucose.", "أغلبية خلايا الجزر، تفرز الأنسولين الذي يخفض الجلوكوز."]],
      [325, 40, ["Alpha cells", "خلايا ألفا"], ["Few in number; secrete glucagon, which raises blood glucose.", "قليلة العدد، تفرز الجلوكاجون الذي يرفع الجلوكوز."]],
      [75, 200, ["Storage", "التخزين"], ["Insulin converts glucose to glycogen or fat in liver and muscles.", "يحول الأنسولين الجلوكوز إلى جليكوجين أو دهون في الكبد والعضلات."]],
      [325, 200, ["Release", "الإطلاق"], ["Glucagon converts glycogen to glucose, in the liver only.", "يحول الجلوكاجون الجليكوجين إلى جلوكوز في الكبد فقط."]]]
  };
  D[P + "u3l1"] = {
    title: ["Binary fission and budding", "الانشطار الثنائي والتبرعم"],
    svg: function () {
      var s = arrowDef("sfa", "var(--muted)");
      s += '<ellipse cx="60" cy="80" rx="38" ry="30" fill="#93c5fd"/><circle cx="60" cy="80" r="9" fill="#1d4ed8"/>';
      s += '<path d="M120,80 Q160,55 200,80 Q160,105 120,80 Z" fill="#93c5fd"/>' + '<circle cx="145" cy="80" r="7" fill="#1d4ed8"/><circle cx="175" cy="80" r="7" fill="#1d4ed8"/>';
      s += '<ellipse cx="260" cy="70" rx="24" ry="20" fill="#93c5fd"/><ellipse cx="320" cy="90" rx="24" ry="20" fill="#93c5fd"/>' + '<circle cx="260" cy="70" r="6" fill="#1d4ed8"/><circle cx="320" cy="90" r="6" fill="#1d4ed8"/>';
      s += ln(100, 80, 115, 80, "var(--muted)", 2, "sfa") + ln(205, 80, 230, 78, "var(--muted)", 2, "sfa");
      s += '<ellipse cx="120" cy="180" rx="32" ry="26" fill="#fcd34d"/><ellipse cx="160" cy="160" rx="14" ry="12" fill="#fcd34d"/><circle cx="118" cy="182" r="6" fill="#b45309"/><circle cx="162" cy="160" r="4" fill="#b45309"/>';
      s += tx(200, 26, t("Binary fission (Amoeba)", "الانشطار الثنائي (الأميبا)"), "", 12) + tx(140, 228, t("Budding (yeast)", "التبرعم (الخميرة)"), "", 12);
      s += tx(300, 190, "1 → 2 → 4 → 2ⁿ", "", 13);
      return g(s);
    },
    spots: [[60, 80, ["Parent cell (2N)", "الخلية الأم (2N)"], ["Its nucleus divides by mitosis first.", "تنقسم نواتها ميتوزيًا أولًا."]],
      [160, 80, ["Dividing", "الانقسام"], ["The cytoplasm splits into two cells, each a new individual.", "ينقسم السيتوبلازم إلى خليتين كل منهما فرد جديد."]],
      [290, 80, ["Two identical daughters", "ابنتان متطابقتان"], ["Each receives a complete copy (2N) of the chromosomes.", "تحصل كل منهما على نسخة كاملة (2N) من الكروموسومات."]],
      [160, 160, ["Bud", "البرعم"], ["A lateral projection that receives one of the two nuclei from mitosis.", "بروز جانبي يتلقى إحدى النواتين الناتجتين من الميتوزي."]],
      [300, 190, ["Doubling", "التضاعف"], ["After n divisions one cell gives 2ⁿ cells.", "بعد n انقسام تعطي الخلية الواحدة 2ⁿ خلية."]]]
  };
  D[P + "u3l2"] = {
    title: ["Alternation of generations in a fern", "تبادل الأجيال في السرخس"],
    svg: function () {
      var s = arrowDef("sca", "var(--muted)"), cx = 200, cy = 125, R = 85;
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="var(--line)" stroke-width="10"/>';
      s += '<path d="M' + (cx - R) + "," + cy + " A" + R + "," + R + " 0 0,1 " + (cx + R) + "," + cy + '" fill="none" stroke="#22c55e" stroke-width="10"/>';
      s += '<path d="M' + (cx + R) + "," + cy + " A" + R + "," + R + " 0 0,1 " + (cx - R) + "," + cy + '" fill="none" stroke="#a855f7" stroke-width="10"/>';
      s += tx(200, 26, t("Sporophyte (2N)", "الطور الجرثومي (2N)"), "", 12) + tx(200, 232, t("Gametophyte (N)", "الطور المشيجي (N)"), "", 12);
      s += tx(340, 125, t("meiosis → spores", "ميوزي ← جراثيم"), "", 11) + tx(62, 125, t("fertilization", "إخصاب"), "", 11);
      s += tx(200, 120, "2N ⇄ N", "", 16);
      return g(s);
    },
    spots: [[200, 40, ["Sporophyte (2N)", "الطور الجرثومي (2N)"], ["The fern plant with sori; reproduces asexually by spores.", "نبات السرخس ذو البثرات، يتكاثر لاجنسيًا بالجراثيم."]],
      [340, 125, ["Meiosis", "الانقسام الميوزي"], ["Spore mother cells (2N) divide into haploid spores (N).", "الخلايا الجرثومية الأم (2N) تنقسم إلى جراثيم أحادية (N)."]],
      [200, 215, ["Gametophyte (N)", "الطور المشيجي (N)"], ["Flat heart-shaped body with rhizoids, antheridia and archegonia.", "جسم قلبي مفلطح به أشباه جذور وأنثريدات وأرشيجونات."]],
      [62, 125, ["Fertilization", "الإخصاب"], ["Ciliated sperms swim in soil water to the egg: zygote (2N).", "تسبح الحيوانات المنوية الهدبية في ماء التربة إلى البويضة: لاقحة (2N)."]],
      [200, 120, ["Why alternate?", "لماذا التبادل؟"], ["Combines rapid asexual production with the genetic diversity of sexual reproduction.", "يجمع بين سرعة الإنتاج اللاجنسي والتنوع الوراثي للتكاثر الجنسي."]]]
  };
  D[P + "u3l3"] = {
    title: ["Double fertilization in the ovule", "الإخصاب المزدوج في البويضة"],
    svg: function () {
      var s = '<ellipse cx="200" cy="150" rx="120" ry="75" fill="#bbf7d0"/>' + '<ellipse cx="200" cy="150" rx="80" ry="45" fill="#fef9c3" stroke="#65a30d" stroke-width="2"/>';
      s += '<path d="M200,20 Q190,70 200,105" fill="none" stroke="#f59e0b" stroke-width="5"/>' + '<circle cx="200" cy="18" r="10" fill="#fbbf24"/>';
      s += '<circle cx="200" cy="120" r="8" fill="#ec4899"/><circle cx="182" cy="116" r="5" fill="#f9a8d4"/><circle cx="218" cy="116" r="5" fill="#f9a8d4"/>';
      s += '<circle cx="194" cy="155" r="6" fill="#8b5cf6"/><circle cx="208" cy="155" r="6" fill="#8b5cf6"/>';
      [[185, 182], [200, 186], [215, 182]].forEach(function (p) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#64748b"/>'; });
      s += tx(330, 60, t("pollen tube", "أنبوب اللقاح"), "", 11) + tx(200, 236, t("embryo sac", "الكيس الجنيني"), mut, 11);
      return g(s);
    },
    spots: [[200, 40, ["Pollen tube", "أنبوب اللقاح"], ["Grows through the style to the micropyle carrying 2 male nuclei (N).", "ينمو في القلم حتى النقير حاملًا نواتين ذكريتين (N)."]],
      [200, 120, ["Egg (N)", "البويضة (N)"], ["Male nucleus + egg → zygote (2N) → embryo.", "نواة ذكرية + بويضة ← لاقحة (2N) ← جنين."]],
      [182, 112, ["Synergids", "الخليتان المساعدتان"], ["The two cells beside the egg near the micropyle; they disappear later.", "الخليتان بجوار البويضة قرب النقير، وتختفيان لاحقًا."]],
      [201, 155, ["Polar nuclei (2 × N)", "النواتان القطبيتان (٢ × N)"], ["Male nucleus + 2 polar nuclei → endosperm nucleus (3N): triple fusion.", "نواة ذكرية + نواتان قطبيتان ← نواة الإندوسبرم (3N): اندماج ثلاثي."]],
      [200, 184, ["Antipodal cells", "الخلايا السمتية"], ["Three cells far from the micropyle.", "ثلاث خلايا بعيدة عن النقير."]]]
  };
  D[P + "u3l4"] = {
    title: ["Hormones of the menstrual cycle", "هرمونات الدورة الشهرية"],
    svg: function () {
      var s = ln(30, 200, 380, 200, "var(--muted)", 2) + ln(30, 30, 30, 200, "var(--muted)", 2), i, X0 = 30, W = 350;
      function px(d) { return X0 + d / 28 * W; }
      var fsh = "", lh = "", est = "", pro = "";
      for (i = 0; i <= 28; i++) {
        var f = 60 + 40 * Math.exp(-Math.pow((i - 12) / 3, 2)) + (i < 7 ? 20 : 0), l = 20 + 140 * Math.exp(-Math.pow((i - 14) / 1.2, 2)), e = 30 + 90 * Math.exp(-Math.pow((i - 12.5) / 2.5, 2)) + 45 * Math.exp(-Math.pow((i - 21) / 3.5, 2)), p = 15 + 110 * Math.exp(-Math.pow((i - 21) / 3.5, 2));
        fsh += (i ? "L" : "M") + px(i).toFixed(1) + "," + (200 - f * 0.9).toFixed(1); lh += (i ? "L" : "M") + px(i).toFixed(1) + "," + (200 - l).toFixed(1);
        est += (i ? "L" : "M") + px(i).toFixed(1) + "," + (200 - e).toFixed(1); pro += (i ? "L" : "M") + px(i).toFixed(1) + "," + (200 - p).toFixed(1);
      }
      s += '<path d="' + fsh + '" fill="none" stroke="#3b82f6" stroke-width="2.5"/><path d="' + lh + '" fill="none" stroke="#ef4444" stroke-width="2.5"/><path d="' + est + '" fill="none" stroke="#ec4899" stroke-width="2.5"/><path d="' + pro + '" fill="none" stroke="#f59e0b" stroke-width="2.5"/>';
      s += box(px(0), 202, px(5) - px(0), 10, "#ef4444", 2) + tx(px(14), 226, t("day 14", "اليوم ١٤"), "", 11) + tx(px(2.5), 236, "1-5", mut, 10) + tx(px(27), 226, "28", mut, 10);
      s += tx(70, 24, "FSH", 'style="fill:#3b82f6"', 11) + tx(200, 24, "LH", 'style="fill:#ef4444"', 11) + tx(260, 24, t("oestrogen", "إستروجين"), 'style="fill:#ec4899"', 11) + tx(340, 24, t("progesterone", "بروجسترون"), 'style="fill:#f59e0b"', 11);
      return g(s);
    },
    spots: [[px0(2.5), 205, ["Menstruation (days 1-5)", "الطمث (الأيام ١-٥)"], ["Without fertilization the corpus luteum degenerates; the endometrium breaks down for 3-5 days.", "دون إخصاب يضمحل الجسم الأصفر وتتهدم بطانة الرحم لمدة ٣-٥ أيام."]],
      [px0(9), 130, ["Proliferation (FSH)", "مرحلة التكاثر (FSH)"], ["FSH grows the Graafian follicle, which secretes oestrogen to thicken the endometrium.", "ينمّي FSH حويصلة جراف التي تفرز الإستروجين لزيادة سمك بطانة الرحم."]],
      [px0(14), 50, ["LH surge: ovulation", "قمة LH: التبويض"], ["On day 14 LH releases the ovum and turns the follicle into the corpus luteum.", "في اليوم ١٤ يطلق LH البويضة ويحول الحويصلة إلى جسم أصفر."]],
      [px0(21), 80, ["Corpus luteum", "الجسم الأصفر"], ["Secretes progesterone and oestrogen, increasing the endometrium's thickness and blood supply.", "يفرز البروجسترون والإستروجين فيزيد سمك بطانة الرحم وإمدادها بالدم."]],
      [px0(26), 180, ["If fertilized", "عند الإخصاب"], ["The corpus luteum stays, ovulation is inhibited and the cycle stops until after birth.", "يبقى الجسم الأصفر ويتوقف التبويض وتتوقف الدورة حتى بعد الولادة."]]]
  };
  function px0(d) { return Math.round(30 + d / 28 * 350); }
  D[P + "u4l1"] = {
    title: ["Structure of an antibody", "تركيب الجسم المضاد"],
    svg: function () {
      var s = "";
      s += '<path d="M190,220 L190,130 L120,50" stroke="#3b82f6" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M210,220 L210,130 L280,50" stroke="#3b82f6" stroke-width="16" fill="none" stroke-linecap="round"/>';
      s += '<path d="M168,128 L105,62" stroke="#93c5fd" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M232,128 L295,62" stroke="#93c5fd" stroke-width="12" fill="none" stroke-linecap="round"/>';
      s += ln(190, 150, 210, 150, "#facc15", 4) + ln(178, 120, 168, 128, "#facc15", 3) + ln(222, 120, 232, 128, "#facc15", 3);
      s += '<rect x="95" y="28" width="40" height="22" rx="4" fill="#ef4444" opacity=".85"/><rect x="265" y="28" width="40" height="22" rx="4" fill="#ef4444" opacity=".85"/>';
      s += tx(330, 150, t("heavy chain", "سلسلة ثقيلة"), "", 11) + tx(70, 110, t("light chain", "سلسلة خفيفة"), "", 11) + tx(200, 236, t("constant region (C)", "المنطقة الثابتة (C)"), mut, 11);
      return g(s);
    },
    spots: [[115, 38, ["Antigen-binding site", "موقع ارتباط الأنتيجين"], ["Two identical sites at the tips (variable regions) fit the antigen like a lock and key.", "موقعان متماثلان عند الطرفين (المنطقة المتغيرة) يتطابقان مع الأنتيجين كالقفل والمفتاح."]],
      [210, 190, ["Heavy chains", "السلاسل الثقيلة"], ["Two long polypeptide chains forming the stem and inner arms of the Y.", "سلسلتان طويلتان عديدتا الببتيد تكوّنان ساق حرف Y وذراعيه الداخليين."]],
      [100, 70, ["Light chains", "السلاسل الخفيفة"], ["Two short chains on the outside of the arms.", "سلسلتان قصيرتان على الجانب الخارجي للذراعين."]],
      [200, 150, ["Disulphide bonds", "الروابط ثنائية الكبريتيد"], ["Join the four chains together.", "تربط السلاسل الأربع معًا."]],
      [200, 225, ["Constant region", "المنطقة الثابتة"], ["Same shape in all antibodies; specificity comes from the variable region's amino acids.", "شكلها ثابت في كل الأجسام المضادة، والتخصص يأتي من أحماض المنطقة المتغيرة."]]]
  };
  D[P + "u4l2"] = {
    title: ["Primary and secondary immune responses", "الاستجابة المناعية الأولية والثانوية"],
    svg: function () {
      var s = ln(40, 200, 380, 200, "var(--muted)", 2) + ln(40, 30, 40, 200, "var(--muted)", 2), i, d1 = "", d2 = "";
      for (i = 0; i <= 60; i++) {
        var a = i < 4 ? 0 : 50 * Math.exp(-Math.pow((i - 11) / 4, 2)), b = i < 32 ? 0 : 150 * Math.exp(-Math.pow((i - 36) / 3.2, 2)) + (i > 36 ? 30 : 0) * Math.exp(-(i - 36) / 12);
        d1 += (i ? "L" : "M") + (40 + i * 5.6).toFixed(1) + "," + (200 - a).toFixed(1); d2 += (i ? "L" : "M") + (40 + i * 5.6).toFixed(1) + "," + (200 - b).toFixed(1);
      }
      s += '<path d="' + d1 + '" fill="none" stroke="#f97316" stroke-width="3"/><path d="' + d2 + '" fill="none" stroke="#ef4444" stroke-width="3"/>';
      s += tx(60, 216, "↑1", "", 12) + tx(219, 216, "↑2", "", 12) + tx(210, 234, t("days", "أيام"), mut, 11) + tx(26, 110, "Ab", mut, 11);
      return g(s);
    },
    spots: [[60, 205, ["First exposure", "التعرض الأول"], ["A new pathogen enters: B and T cells must multiply first.", "يدخل ممرض جديد، فيجب أن تتكاثر الخلايا البائية والتائية أولًا."]],
      [102, 150, ["Primary response", "الاستجابة الأولية"], ["Slow and small: 5-10 days to peak, so symptoms appear.", "بطيئة وصغيرة: ٥-١٠ أيام للوصول للذروة، فتظهر الأعراض."]],
      [219, 205, ["Second exposure", "التعرض الثاني"], ["The same antigen returns months or years later.", "يعود الأنتيجين نفسه بعد شهور أو سنين."]],
      [242, 55, ["Secondary response", "الاستجابة الثانوية"], ["Memory cells respond faster and produce far more antibodies, often before symptoms.", "تستجيب خلايا الذاكرة أسرع وتنتج أجسامًا مضادة أكثر بكثير، غالبًا قبل الأعراض."]],
      [320, 175, ["Memory cells", "خلايا الذاكرة"], ["They live for tens of years and may survive till death.", "تعيش عشرات السنين وقد تبقى حتى الوفاة."]]]
  };
  D[P + "u5l1"] = {
    title: ["The DNA double helix ladder", "سلم الحلزون المزدوج لـ DNA"],
    svg: function () {
      var s = "", pairs = [["A", "T"], ["G", "C"], ["T", "A"], ["C", "G"], ["A", "T"], ["G", "C"]], col = { A: "#ef4444", T: "#f59e0b", G: "#22c55e", C: "#3b82f6" };
      s += box(70, 20, 16, 200, "#64748b", 6) + box(314, 20, 16, 200, "#64748b", 6);
      pairs.forEach(function (p, i) { var y = 38 + i * 32, pu = p[0] === "A" || p[0] === "G"; s += box(86, y - 8, pu ? 130 : 90, 16, col[p[0]], 4) + box(pu ? 216 : 176, y - 8, pu ? 98 : 138, 16, col[p[1]], 4) + tx(120, y + 4, p[0], 'style="fill:#fff"', 12) + tx(280, y + 4, p[1], 'style="fill:#fff"', 12) + tx(200, y + 4, (p[0] === "A" || p[0] === "T") ? "··" : "···", 'style="fill:#fff"', 13); });
      s += tx(78, 14, "5'", "", 11) + tx(78, 234, "3'", "", 11) + tx(322, 14, "3'", "", 11) + tx(322, 234, "5'", "", 11);
      return g(s);
    },
    spots: [[78, 120, ["Sugar-phosphate backbone", "هيكل السكر والفوسفات"], ["Deoxyribose alternating with phosphate; the sides of the ladder, on the outside.", "ديؤكسي ريبوز يتبادل مع الفوسفات؛ جانبا السلم من الخارج."]],
      [150, 38, ["A = T", "A = T"], ["Adenine (purine) pairs with thymine (pyrimidine) by 2 hydrogen bonds.", "الأدينين (بيورين) يرتبط بالثايمين (بيريميدين) برابطتين هيدروجينيتين."]],
      [150, 70, ["G ≡ C", "G ≡ C"], ["Guanine pairs with cytosine by 3 hydrogen bonds.", "الجوانين يرتبط بالسيتوزين بثلاث روابط هيدروجينية."]],
      [322, 120, ["Antiparallel", "متعاكسان"], ["One strand runs 5' → 3', its partner 3' → 5'.", "أحد الشريطين '5 ← '3 والآخر '3 ← '5."]],
      [200, 200, ["Constant width", "عرض ثابت"], ["Every rung = one double-ring purine + one single-ring pyrimidine; 10 pairs per turn.", "كل درجة = بيورين ثنائي الحلقة + بيريميدين أحادي الحلقة، و١٠ أزواج في كل لفة."]]]
  };
  D[P + "u5l2"] = {
    title: ["The replication fork", "شوكة التضاعف"],
    svg: function () {
      var s = arrowDef("srf", "#16a34a");
      s += ln(20, 112, 150, 112, "#64748b", 5) + ln(20, 128, 150, 128, "#94a3b8", 5);
      s += ln(150, 112, 380, 40, "#64748b", 5) + ln(150, 128, 380, 200, "#94a3b8", 5);
      s += ln(180, 116, 370, 56, "#16a34a", 4, "srf");
      [[350, 200, 300, 184], [290, 180, 240, 164], [230, 161, 185, 146]].forEach(function (p) { s += ln(p[0], p[1] - 14, p[2], p[3] - 14, "#22c55e", 4, "srf"); });
      s += '<circle cx="152" cy="120" r="14" fill="#f97316"/>' + tx(152, 124, "H", 'style="fill:#fff"', 12);
      s += tx(300, 32, t("leading strand", "الشريط الرائد"), "", 11) + tx(300, 225, t("lagging strand (Okazaki)", "الشريط المتأخر (أوكازاكي)"), "", 11);
      return g(s);
    },
    spots: [[152, 120, ["Helicase", "الهليكيز"], ["Breaks the hydrogen bonds and opens the replication fork.", "يكسر الروابط الهيدروجينية ويفتح شوكة التضاعف."]],
      [280, 82, ["Leading strand", "الشريط الرائد"], ["Built continuously 5' → 3' by DNA polymerase following the helicase.", "يُبنى متصلًا '5 ← '3 بإنزيم البلمرة خلف الهليكيز."]],
      [265, 158, ["Okazaki fragments", "قطع أوكازاكي"], ["Short pieces of the lagging strand, each started by an RNA primer.", "قطع قصيرة من الشريط المتأخر يبدأ كل منها ببادئ RNA."]],
      [208, 150, ["Ligase", "إنزيم الربط"], ["Joins the fragments into one continuous strand.", "يربط القطع في شريط واحد متصل."]],
      [60, 120, ["Parent DNA", "DNA الأصلي"], ["Each old strand acts as a template for a new complementary strand.", "يعمل كل شريط قديم قالبًا لشريط جديد مكمل."]]]
  };
  D[P + "u6l1"] = {
    title: ["Transcription: DNA to mRNA", "النسخ: من DNA إلى mRNA"],
    svg: function () {
      var s = "", tpl = "TACGGAATT", rna = "AUGCCUUAA", i, cmap = { A: "#ef4444", T: "#f59e0b", U: "#a855f7", G: "#22c55e", C: "#3b82f6" };
      s += box(20, 60, 360, 6, "#94a3b8", 3) + box(20, 170, 360, 6, "#64748b", 3);
      for (i = 0; i < 9; i++) { var x = 40 + i * 38; s += box(x - 13, 140, 26, 28, cmap[tpl[i]], 4) + tx(x, 159, tpl[i], 'style="fill:#fff"', 12); if (i < 7) s += box(x - 13, 100, 26, 28, cmap[rna[i]], 4) + tx(x, 119, rna[i], 'style="fill:#fff"', 12); }
      s += '<ellipse cx="300" cy="128" rx="40" ry="34" fill="#14b8a6" opacity=".35"/>' + tx(300, 90, t("RNA polymerase", "إنزيم بلمرة RNA"), "", 11);
      s += tx(200, 200, t("template strand 3' → 5'", "شريط القالب '3 ← '5"), mut, 11) + tx(200, 50, t("coding strand", "الشريط المقابل"), mut, 11) + tx(60, 92, "mRNA 5'", "", 11);
      return g(s);
    },
    spots: [[300, 128, ["RNA polymerase", "إنزيم بلمرة RNA"], ["Binds the promoter, separates the strands and joins RNA nucleotides one by one.", "يرتبط بالمحفز ويفصل الشريطين ويربط نيوكليوتيدات RNA واحدة تلو الأخرى."]],
      [78, 154, ["Template strand", "شريط القالب"], ["Only one strand is transcribed; it is read 3' → 5'.", "يُنسخ شريط واحد فقط ويُقرأ '3 ← '5."]],
      [78, 114, ["Start codon AUG", "كودون البدء AUG"], ["Complementary to TAC on the template; codes for methionine.", "مكمل لـ TAC في القالب ويشفر للميثيونين."]],
      [154, 114, ["Uracil", "اليوراسيل"], ["U replaces T in RNA and pairs with A.", "U يحل محل T في RNA ويرتبط بـ A."]],
      [200, 60, ["Triplet code", "الشفرة الثلاثية"], ["Each 3 bases = 1 codon; 4³ = 64 possible codons.", "كل ٣ قواعد = كودون واحد، و4³ = ٦٤ كودونًا ممكنًا."]]]
  };
  D[P + "u6l2"] = {
    title: ["Translation on the ribosome", "الترجمة على الريبوسوم"],
    svg: function () {
      var s = box(20, 150, 360, 22, "#a855f7", 4), i, cod = ["AUG", "GCU", "UUC", "GGA", "UAA"];
      for (i = 0; i < 5; i++) s += tx(60 + i * 70, 166, cod[i], 'style="fill:#fff"', 12);
      s += '<ellipse cx="165" cy="190" rx="110" ry="26" fill="#14b8a6" opacity=".5"/><ellipse cx="165" cy="118" rx="120" ry="48" fill="#14b8a6" opacity=".35"/>';
      s += box(105, 100, 40, 46, "#f59e0b", 6) + tx(125, 140, "UAC", "", 10) + box(175, 100, 40, 46, "#f59e0b", 6) + tx(195, 140, "CGA", "", 10);
      s += '<circle cx="125" cy="88" r="12" fill="#ef4444"/><circle cx="195" cy="88" r="12" fill="#22c55e"/>' + tx(125, 92, "Met", 'style="fill:#fff"', 9) + tx(195, 92, "Ala", 'style="fill:#fff"', 9);
      s += ln(137, 88, 183, 88, "var(--ink)", 3) + tx(125, 58, "P", "", 13) + tx(195, 58, "A", "", 13) + tx(340, 140, "stop", mut, 11);
      return g(s);
    },
    spots: [[125, 120, ["P-site", "الموقع P"], ["Holds the tRNA with the growing chain; the start codon AUG begins here.", "يحمل tRNA مع السلسلة النامية، ويبدأ عنده كودون البدء AUG."]],
      [195, 120, ["A-site", "الموقع A"], ["The next tRNA binds here when its anticodon matches the codon.", "يرتبط هنا tRNA التالي عندما يتطابق كودونه المضاد مع الكودون."]],
      [160, 88, ["Peptide bond", "الرابطة الببتيدية"], ["Formed by peptidyl transferase in the large subunit.", "يكوّنها إنزيم الببتيديل ترانسفيريز في الوحدة الكبرى."]],
      [340, 160, ["Stop codon", "كودون الإيقاف"], ["UAA, UAG or UGA: a releasing factor ends translation.", "UAA أو UAG أو UGA: عامل الانطلاق ينهي الترجمة."]],
      [165, 195, ["Small subunit", "الوحدة الصغرى"], ["Binds the mRNA first; the large subunit joins after.", "ترتبط بـ mRNA أولًا ثم تنضم الوحدة الكبرى."]]]
  };
  D[P + "u7l1"] = {
    title: ["Normal and reverse faults", "الصدع العادي والمعكوس"],
    svg: function () {
      var s = "", cols = ["#fde68a", "#fdba74", "#fca5a5", "#d6d3d1"], i;
      for (i = 0; i < 4; i++) { s += '<polygon points="10,' + (60 + i * 30) + " 110," + (60 + i * 30) + " " + (90) + "," + (90 + i * 30) + " 10," + (90 + i * 30) + '" fill="' + cols[i] + '"/>'; s += '<polygon points="110,' + (80 + i * 30) + " 190," + (80 + i * 30) + " 190," + (110 + i * 30) + " 90," + (110 + i * 30) + '" fill="' + cols[i] + '"/>'; }
      s += ln(120, 50, 70, 200, "var(--ink)", 3);
      for (i = 0; i < 4; i++) { s += '<polygon points="210,' + (60 + i * 30) + " 310," + (60 + i * 30) + " " + (290) + "," + (90 + i * 30) + " 210," + (90 + i * 30) + '" fill="' + cols[i] + '"/>'; s += '<polygon points="310,' + (40 + i * 30) + " 390," + (40 + i * 30) + " 390," + (70 + i * 30) + " 290," + (70 + i * 30) + '" fill="' + cols[i] + '"/>'; }
      s += ln(320, 30, 270, 190, "var(--ink)", 3);
      s += tx(100, 22, t("Normal: tension ←→", "عادي: شد ←→"), "", 11) + tx(300, 22, t("Reverse: compression →←", "معكوس: ضغط →←"), "", 11) + tx(150, 228, t("hanging wall ↓", "الحائط العلوي ↓"), mut, 10) + tx(350, 228, t("hanging wall ↑", "الحائط العلوي ↑"), mut, 10);
      return g(s);
    },
    spots: [[95, 125, ["Fault plane", "مستوى الصدع"], ["The fracture surface along which the rock masses move relative to each other.", "سطح الكسر الذي تتحرك عليه الكتل الصخرية بالنسبة لبعضها."]],
      [150, 140, ["Hanging wall (normal)", "الحائط العلوي (عادي)"], ["The block above the fault plane moves down under tension.", "الكتلة فوق مستوى الصدع تتحرك لأسفل تحت الشد."]],
      [40, 140, ["Foot wall", "الحائط السفلي"], ["The rock mass under the fault plane.", "الكتلة الصخرية أسفل مستوى الصدع."]],
      [350, 100, ["Hanging wall (reverse)", "الحائط العلوي (معكوس)"], ["Moves up under compression; a low-angle reverse fault is a thrust.", "يتحرك لأعلى تحت الضغط، والمعكوس منخفض الزاوية يسمى دسرًا."]],
      [300, 22, ["Why it matters", "الأهمية"], ["Faults guide hot springs (Helwan, Ain Sokhna) and ore deposition.", "الصدوع مسارات للعيون الحارة (حلوان والعين السخنة) وترسيب الخامات."]]]
  };
  D[P + "u7l2"] = {
    title: ["The rock cycle", "دورة الصخور"],
    svg: function () {
      var s = arrowDef("src", "var(--muted)");
      s += box(140, 14, 120, 40, "#ef4444") + tx(200, 39, t("Igneous", "نارية"), 'style="fill:#fff"', 13);
      s += box(270, 170, 120, 40, "#f59e0b") + tx(330, 195, t("Sedimentary", "رسوبية"), 'style="fill:#fff"', 13);
      s += box(10, 170, 120, 40, "#8b5cf6") + tx(70, 195, t("Metamorphic", "متحولة"), 'style="fill:#fff"', 13);
      s += box(160, 110, 80, 30, "#fb923c", 15) + tx(200, 130, t("Magma", "صهارة"), 'style="fill:#fff"', 11);
      s += ln(250, 56, 310, 166, "var(--muted)", 2, "src") + ln(266, 196, 136, 196, "var(--muted)", 2, "src") + ln(90, 166, 170, 142, "var(--muted)", 2, "src") + ln(200, 108, 200, 58, "var(--muted)", 2, "src");
      s += tx(330, 110, t("weathering, deposition", "تجوية وترسيب"), mut, 10) + tx(200, 226, t("heat + pressure", "حرارة + ضغط"), mut, 10) + tx(95, 130, t("melting", "انصهار"), mut, 10);
      return g(s);
    },
    spots: [[200, 34, ["Igneous rocks", "الصخور النارية"], ["'Mother of rocks': formed by cooling of magma or lava; massive, crystalline, non-porous.", "أم الصخور: تكونت بتبريد الصهارة أو اللافا، كتلية متبلورة غير مسامية."]],
      [330, 190, ["Sedimentary rocks", "الصخور الرسوبية"], ["Weathering, transport, deposition and lithification; stratified, often porous, with fossils.", "تجوية ونقل وترسيب وتصخر، طبقية مسامية غالبًا وبها حفريات."]],
      [70, 190, ["Metamorphic rocks", "الصخور المتحولة"], ["Heat and pressure recrystallize rocks: limestone → marble, shale → slate, granite → gneiss.", "الحرارة والضغط يعيدان تبلور الصخور: جيري ← رخام، طفل ← أردواز، جرانيت ← نيس."]],
      [200, 125, ["Magma", "الصهارة"], ["Viscous melt with silicate ions and gases (water vapour) in the asthenosphere.", "مصهور لزج به أيونات سيليكاتية وغازات (بخار الماء) في الغلاف اللدن."]],
      [330, 110, ["Hutton (1785)", "هاتون (١٧٨٥)"], ["First to link the three rock types in one cycle.", "أول من ربط بين أنواع الصخور الثلاثة في دورة واحدة."]]]
  };
})();

/* ---------- Sec 3 Biology live simulations (part 1): joints, tendril, sarcomere, pituitary,
   calcium/thyroid/adrenal, glucose, fission, life cycles, pollination. Original designs on EZ3.simKit. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var txt = K.txt;
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function box(host, html) { var c = E.el("div", "sim-ctl"); c.innerHTML = html; host.appendChild(c); return c; }
  function sl(b, i, fmt, on) {
    var inp = b.querySelectorAll('input[type="range"]')[i], lab = b.querySelectorAll(".slv")[i];
    function u() { var v = Number(inp.value); lab.textContent = fmt(v); on(v); }
    inp.addEventListener("input", u); u(); return inp;
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function r1(v) { return Math.round(v * 10) / 10; }
  function btn(id, label, cls) { return '<button type="button" class="btn sm ' + (cls || "") + '" id="' + id + '">' + label + "</button>"; }
  function row(h) { return '<div class="btn-row">' + h + "</div>"; }
  function meter(host) { var m = E.el("div", "meter"); host.appendChild(m); return m; }
  E.s3bkit = { hint: hint, box: box, sl: sl, clamp: clamp, r1: r1, btn: btn, row: row, meter: meter };
  var A = E.isAr;

  /* =========================================================
     1. sec3bio_joints - drag a bone around four kinds of joint
     ========================================================= */
  L.sec3bio_joints = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a joint, then drag the round end of the moving bone. Each joint type allows a different range of movement.",
      "اختر مفصلًا ثم اسحب الطرف المستدير للعظمة المتحركة. كل نوع من المفاصل يسمح بمدى حركة مختلف.")) + '<div class="seg" id="sjt"></div>';
    var S = K.make(host, 0.6, 360), out = meter(host);
    var tick = L._goals(host, [t("Elbow (hinge): bend it to 90°.", "الكوع: اثنه إلى ٩٠°."), t("Skull (fibrous): try to move it.", "الجمجمة (ليفي): حاول تحريكه."),
      t("Vertebrae (cartilaginous): reach its small limit.", "الفقرات (غضروفي): صل إلى حده الصغير."), t("Shoulder (ball and socket): swing the arm in a full circle.", "الكتف (كرة وتجويف): حرّك الذراع في دائرة كاملة.")], done);
    var J = { hinge: [0, 145, t("Elbow - synovial, one direction", "الكوع - زلالي، اتجاه واحد")], fib: [0, 0, t("Skull bones - fibrous, no movement", "عظام الجمجمة - ليفي، لا حركة")],
      cart: [-8, 8, t("Between vertebrae - cartilaginous, very limited", "بين الفقرات - غضروفي، محدود جدًا")], ball: [-180, 180, t("Shoulder - synovial, many directions", "الكتف - زلالي، اتجاهات متعددة")] };
    var mode = "hinge", ang = 0, drag = false, sect = {}, tried = 0;
    K.seg(host, "#sjt", [["hinge", t("Elbow", "الكوع")], ["fib", t("Skull", "الجمجمة")], ["cart", t("Vertebrae", "الفقرات")], ["ball", t("Shoulder", "الكتف")]], mode, function (v) { mode = v; ang = 0; sect = {}; });
    function geo() { return { jx: S.W * 0.42, jy: S.H * 0.55, len: Math.min(S.W * 0.36, S.H * 0.42) }; }
    function tip() { var g = geo(), a = ang * Math.PI / 180; return { x: g.jx + Math.cos(a) * g.len, y: g.jy - Math.sin(a) * g.len }; }
    S.drag({
      down: function (p) { var q = tip(); if (Math.hypot(p.x - q.x, p.y - q.y) < 30) { drag = true; return true; } return false; },
      move: function (p) {
        if (!drag) return;
        var g = geo(), a = Math.atan2(g.jy - p.y, p.x - g.jx) * 180 / Math.PI, j = J[mode];
        if (mode === "fib") { tried += 1; if (tried > 8) { tick(1); if (tried === 9) E.toast(t("Fibrous joints: bones fused by fibrous tissue - no movement.", "المفاصل الليفية: عظام ملتحمة بنسيج ليفي - لا حركة.")); } return; }
        if (mode === "hinge" && a < -20) a = 0;
        ang = clamp(a, j[0], j[1]);
        if (mode === "hinge" && Math.abs(ang - 90) < 5) tick(0);
        if (mode === "cart" && Math.abs(ang) >= 7.5) tick(2);
        if (mode === "ball") { sect[Math.floor((ang + 180) / 45) % 8] = 1; if (Object.keys(sect).length >= 8) tick(3); }
      },
      up: function () { drag = false; tried = 0; },
      hover: function (p) { var q = tip(); return Math.hypot(p.x - q.x, p.y - q.y) < 30; }
    });
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), q = tip(), j = J[mode];
      c.clearRect(0, 0, W, H);
      // allowed range arc
      if (mode !== "fib") { c.fillStyle = "rgba(34,197,94,.15)"; c.beginPath(); c.moveTo(g.jx, g.jy); c.arc(g.jx, g.jy, g.len * 1.05, -j[1] * Math.PI / 180, -j[0] * Math.PI / 180); c.closePath(); c.fill(); }
      // fixed bone
      c.strokeStyle = "#e7e5e4"; c.lineCap = "round"; c.lineWidth = 22; c.beginPath(); c.moveTo(g.jx - g.len, g.jy); c.lineTo(g.jx, g.jy); c.stroke();
      c.strokeStyle = "#a8a29e"; c.lineWidth = 2; c.stroke();
      // moving bone
      c.strokeStyle = "#fde68a"; c.lineWidth = 20; c.beginPath(); c.moveTo(g.jx, g.jy); c.lineTo(q.x, q.y); c.stroke();
      // joint capsule
      var jc = mode === "fib" ? "#78716c" : mode === "cart" ? "#93c5fd" : "#60a5fa";
      K.dot(c, g.jx, g.jy, 16, jc, "rgba(0,0,0,.3)");
      if (mode === "hinge" || mode === "ball") { c.fillStyle = "rgba(59,130,246,.25)"; c.beginPath(); c.arc(g.jx, g.jy, 24, 0, 7); c.fill(); }
      K.dot(c, q.x, q.y, 13, "#f97316", "rgba(0,0,0,.3)");
      txt(c, j[2], W / 2, 18, { c: C.ink, s: 14 });
      txt(c, t("Angle: ", "الزاوية: ") + n(Math.round(ang)) + "°", W / 2, H - 16, { c: C.ink, s: 15 });
      txt(c, mode === "fib" ? t("range: 0°", "المدى: ٠°") : t("range: ", "المدى: ") + n(j[0]) + "° → " + n(j[1]) + "°", W / 2, H - 38, { c: C.muted, s: 12 });
      out.innerHTML = "<span>" + esc(mode === "fib" ? t("Serrated skull bones are joined by fibrous tissue that turns to bone with age.", "عظام الجمجمة المسننة يربطها نسيج ليفي يتحول إلى عظم مع التقدم في العمر.") :
        mode === "cart" ? t("Cartilage between the centra allows a very limited movement.", "الغضاريف بين أجسام الفقرات تسمح بحركة محدودة جدًا.") :
        t("Smooth cartilage and synovial fluid let the bones slide with little friction.", "الغضروف الأملس والسائل الزلالي يسمحان بانزلاق العظام بأقل احتكاك.")) + "</span>";
    });
  };

  /* =========================================================
     2. sec3bio_tendril - tendril meets (or misses) a support; Mimosa touch and sleep
     ========================================================= */
  L.sec3bio_tendril = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the brown stick so the growing tendril can reach it. Tap the Mimosa leaflets on the right, and switch day and night.",
      "اسحب العصا البنية ليصل إليها المحلاق النامي، واضغط على وريقات المستحية يمينًا، وبدّل بين النهار والليل."));
    var S = K.make(host, 0.6, 380);
    var c0 = box(host, row(btn("strn", "🌱 " + t("Grow a new tendril", "أنبت محلاقًا جديدًا"), "ghost") + btn("strd", "🌙 " + t("Night", "ليل"), "tg")));
    var out = meter(host);
    var tick = L._goals(host, [t("Leave a tendril with no support until it wilts.", "اترك محلاقًا بلا دعامة حتى يذبل."), t("Move the support so the tendril coils 3 turns around it.", "حرّك الدعامة ليلتف المحلاق ٣ لفات حولها."),
      t("Touch the Mimosa so its leaflets collapse.", "المس المستحية لتنطوي وريقاتها."), t("Switch to night: see the sleeping movement.", "حوّل إلى الليل: شاهد حركة النوم.")], done);
    var T = { len: 0, ph: 0, coils: 0, att: false, wilt: 0, dead: false }, rod = 0.66, dragR = false, night = false, fold = [0, 0, 0, 0, 0, 0], ftime = [0, 0, 0, 0, 0, 0];
    c0.querySelector("#strn").onclick = function () { T = { len: 0, ph: 0, coils: 0, att: false, wilt: 0, dead: false }; };
    c0.querySelector("#strd").onclick = function () { night = !night; this.classList.toggle("on", night); this.innerHTML = night ? "☀️ " + t("Day", "نهار") : "🌙 " + t("Night", "ليل"); if (night) tick(3); };
    function base() { return { x: S.W * 0.1, y: S.H * 0.62 }; }
    function tipPos() { var b = base(); return { x: b.x + T.len * S.W * 0.42, y: b.y - T.len * S.H * 0.3 + Math.sin(T.ph) * 18 * T.len }; }
    function leaf(i) { var x0 = S.W * 0.8, y = S.H * 0.18 + i * S.H * 0.12; return { x: x0, y: y }; }
    S.drag({
      down: function (p) {
        if (Math.abs(p.x - rod * S.W) < 18 && p.x < S.W * 0.7) { dragR = true; return true; }
        for (var i = 0; i < 6; i++) { var q = leaf(i); if (Math.abs(p.y - q.y) < S.H * 0.06 && Math.abs(p.x - q.x) < S.W * 0.12) { fold[i] = 1; ftime[i] = 4; tick(2); } }
        return false;
      },
      move: function (p) { if (dragR && !T.att) rod = clamp(p.x / S.W, 0.2, 0.66); },
      up: function () { dragR = false; },
      hover: function (p) { return Math.abs(p.x - rod * S.W) < 18 && p.x < S.W * 0.7; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, b = base(), i;
      c.clearRect(0, 0, W, H);
      c.fillStyle = night ? "rgba(30,41,59,.35)" : "rgba(250,204,21,.08)"; c.fillRect(0, 0, W, H);
      c.fillStyle = "#a16207"; c.fillRect(0, H * 0.9, W * 0.7, H * 0.1);
      // growth
      if (!T.dead) {
        if (!T.att) { T.len = Math.min(1, T.len + dt * 0.11); T.ph += dt * 2.2; }
        var tp = tipPos();
        if (!T.att && Math.abs(tp.x - rod * W) < 9) { T.att = true; E.speak(t("Contact! The tendril starts twining.", "تلامس! يبدأ المحلاق في الالتفاف.")); }
        if (T.att) { T.coils = Math.min(4, T.coils + dt * 0.7); if (T.coils >= 3) tick(1); }
        if (!T.att && T.len >= 1) { T.wilt += dt; if (T.wilt > 3) { T.dead = true; tick(0); E.speak(t("No support: the tendril wilts.", "لا دعامة: ذبل المحلاق.")); } }
      }
      // rod
      c.fillStyle = "#92400e"; K.rr(c, rod * W - 6, H * 0.1, 12, H * 0.8, 4); c.fill();
      // stem (leans toward rod as coils grow)
      var lean = T.att ? T.coils / 4 * (rod * W - b.x) * 0.35 : 0;
      c.strokeStyle = "#15803d"; c.lineWidth = 7; c.beginPath(); c.moveTo(b.x, H * 0.9); c.quadraticCurveTo(b.x, b.y + 40, b.x + lean, b.y); c.stroke();
      [[-18, 20], [16, 50]].forEach(function (lf) { c.fillStyle = "#22c55e"; c.beginPath(); c.ellipse(b.x + lf[0] + lean * 0.5, b.y + lf[1], 14, 7, 0.3, 0, 7); c.fill(); });
      // tendril
      var tp2 = tipPos(), col = T.dead ? "#a16207" : "#16a34a";
      c.strokeStyle = col; c.lineWidth = 3.5; c.beginPath(); c.moveTo(b.x + lean, b.y);
      if (T.att) {
        var rx = rod * W, ry = tp2.y; c.quadraticCurveTo((b.x + lean + rx) / 2, ry - 30, rx - 8, ry); c.stroke();
        var nC = T.coils, steps = Math.floor(nC * 24); c.beginPath();
        for (i = 0; i <= steps; i++) { var a = i / 24 * Math.PI * 2, x = rx + Math.cos(a) * 10, y = ry - i / 24 * 14; if (i) c.lineTo(x, y); else c.moveTo(x, y); }
        c.lineWidth = 3.5; c.stroke();
      } else if (T.dead) { c.quadraticCurveTo(b.x + lean + 40, b.y - 10, tp2.x - 20, tp2.y + 50); c.stroke(); }
      else { c.quadraticCurveTo((b.x + tp2.x) / 2, tp2.y - 25, tp2.x, tp2.y); c.stroke(); K.dot(c, tp2.x, tp2.y, 3, "#16a34a"); }
      // mimosa
      c.strokeStyle = "#65a30d"; c.lineWidth = 4; c.beginPath(); c.moveTo(W * 0.8, H * 0.92); c.lineTo(W * 0.8, H * 0.12); c.stroke();
      for (i = 0; i < 6; i++) {
        if (ftime[i] > 0) { ftime[i] -= dt; if (ftime[i] <= 0) fold[i] = 0; }
        var want = night ? 1 : fold[i]; fold[i + 6] = fold[i + 6] == null ? 0 : fold[i + 6];
        var f = fold[i + 6] = fold[i + 6] + (want - fold[i + 6]) * Math.min(1, dt * 5), q = leaf(i);
        for (var k = 0; k < 5; k++) {
          var lx = 12 + k * (W * 0.022);
          [-1, 1].forEach(function (s) {
            var ang = s > 0 ? -0.5 + f * 1.9 : Math.PI + 0.5 - f * 1.9;
            c.fillStyle = "#4ade80"; c.beginPath(); c.ellipse(q.x + s * lx, q.y, 9 - f * 4, 4, s > 0 ? ang - 0.5 : ang + 0.5, 0, 7); c.fill();
          });
        }
      }
      txt(c, t("Pea tendril", "محلاق البسلة"), W * 0.33, 16, { c: C.ink, s: 13 }); txt(c, t("Mimosa", "المستحية"), W * 0.8, 14, { c: C.ink, s: 13 });
      var msg = T.dead ? t("Wilted: a tendril that finds no support dies.", "ذبل: المحلاق الذي لا يجد دعامة يموت.") : T.att ? t("Coils: ", "اللفات: ") + n(Math.floor(T.coils)) + " - " + t("slow growth on the touching side, fast on the far side.", "نمو بطيء في جانب التلامس وسريع في الجانب البعيد.") : t("Growing and searching...", "ينمو ويبحث...");
      out.innerHTML = "<span>" + esc(msg) + "</span>";
    });
  };

  /* =========================================================
     3. sec3bio_sarcomere - sliding filaments with ATP, impulse and fatigue
     ========================================================= */
  L.sec3bio_sarcomere = function (host, cfg, done) {
    host.innerHTML = hint(t("Hold 'Nerve impulse' to contract, release it to relax. Lower the ATP slider or start sprinting to see spasm and fatigue.",
      "اضغط باستمرار على 'سيال عصبي' للانقباض واتركه للانبساط، وخفّض منزلق ATP أو ابدأ العدو لترى التقلص والإجهاد."));
    var S = K.make(host, 0.5, 340);
    var c0 = box(host, L._slider("ATP", 0, 100, 5, 100, "%") + row(btn("ssim", "⚡ " + t("Nerve impulse (hold)", "سيال عصبي (اضغط باستمرار)"), "primary") + btn("sssp", "🏃 " + t("Sprint (repeated)", "عدو (متكرر)"), "tg") + btn("ssrs", "😌 " + t("Rest", "راحة"), "ghost")));
    var out = meter(host);
    var tick = L._goals(host, [t("Contract the sarcomere to 1.9 µm or less.", "اقبض القطعة العضلية إلى ١٫٩ ميكرومتر أو أقل."), t("Relax it back to 2.4 µm.", "أعدها منبسطة إلى ٢٫٤ ميكرومتر."),
      t("Cause a spasm: contract, then lower ATP below 10% and let go.", "سبّب تقلصًا: اقبض ثم خفّض ATP تحت ١٠٪ واترك."), t("Sprint until lactic acid reaches 80%.", "اعدُ حتى يصل حمض اللاكتيك إلى ٨٠٪.")], done);
    var atp = 100, hold = false, sprint = false, Lm = 2.4, lac = 0, ph = 0, contracted = false, spT = 0;
    sl(c0, 0, function (v) { return n(v) + "%"; }, function (v) { atp = v; });
    var bi = c0.querySelector("#ssim");
    function on(e) { hold = true; e.preventDefault(); } function off() { hold = false; }
    bi.addEventListener("pointerdown", on); bi.addEventListener("pointerup", off); bi.addEventListener("pointerleave", off);
    c0.querySelector("#sssp").onclick = function () { sprint = !sprint; this.classList.toggle("on", sprint); };
    c0.querySelector("#ssrs").onclick = function () { sprint = false; c0.querySelector("#sssp").classList.remove("on"); lac = 0; atp = 100; var r = c0.querySelector("input"); r.value = 100; r.dispatchEvent(new Event("input")); };
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, i;
      ph += dt;
      var stim = hold || (sprint && Math.sin(ph * 9) > 0);
      if (sprint) lac = Math.min(100, lac + dt * 14); else lac = Math.max(0, lac - dt * 4);
      var minL = 1.8 + (lac > 80 ? (lac - 80) / 20 * 0.4 : 0), target;
      if (stim && atp > 10) target = minL; else if (!stim && atp > 10) target = 2.4; else target = Lm; // no ATP: cross-bridges cannot detach
      Lm += (target - Lm) * Math.min(1, dt * 6);
      if (Lm <= 1.9) { tick(0); contracted = true; }
      if (contracted && Lm >= 2.38) tick(1);
      if (!stim && atp <= 10 && Lm < 2.2) { spT += dt; if (spT > 1) tick(2); } else spT = 0;
      if (lac >= 80) tick(3);
      // drawing
      c.clearRect(0, 0, W, H);
      var sc = Math.min(W * 0.36, 170), cx = W / 2, cy = H * 0.45, half = Lm / 2 * sc, zL = cx - half, zR = cx + half, my = 0.8 * sc;
      c.fillStyle = "rgba(239,68,68,.08)"; c.fillRect(cx - my, cy - 70, 2 * my, 140);
      for (i = 0; i < 5; i++) {
        var y = cy - 60 + i * 30;
        if (i % 2 === 0) { // actin rows
          c.strokeStyle = "#60a5fa"; c.lineWidth = 4; c.beginPath(); c.moveTo(zL, y); c.lineTo(zL + 1.0 * sc, y); c.moveTo(zR, y); c.lineTo(zR - 1.0 * sc, y); c.stroke();
        } else { // myosin with heads
          c.fillStyle = "#ef4444"; K.rr(c, cx - my, y - 5, 2 * my, 10, 5); c.fill();
          c.strokeStyle = "#b91c1c"; c.lineWidth = 2;
          for (var k = 0; k < 7; k++) {
            var hx = cx - my + 8 + k * (my - 16) / 6, bend = stim && atp > 10 ? Math.sin(ph * 14 + k) * 4 : 0;
            [-1, 1].forEach(function (s) { c.beginPath(); c.moveTo(hx, y + s * 5); c.lineTo(hx - 5 + bend, y + s * 13); c.stroke(); c.beginPath(); c.moveTo(2 * cx - hx, y + s * 5); c.lineTo(2 * cx - hx + 5 - bend, y + s * 13); c.stroke(); });
          }
        }
      }
      c.strokeStyle = C.ink; c.lineWidth = 4; c.beginPath(); c.moveTo(zL, cy - 75); c.lineTo(zL, cy + 75); c.moveTo(zR, cy - 75); c.lineTo(zR, cy + 75); c.stroke();
      txt(c, "Z", zL, cy - 86, { c: C.ink, s: 14 }); txt(c, "Z", zR, cy + 0 - 86, { c: C.ink, s: 14 });
      if (stim && atp > 10) for (i = 0; i < 10; i++) K.dot(c, zL + K.rnd(0, 2 * half), cy + K.rnd(-70, 70), 2.2, "#facc15");
      var I = Lm - 1.6, Hz = Math.max(0, Lm - 2.0), fs = Math.max(11, Math.min(14, W / 42));
      txt(c, t("Sarcomere ", "القطعة العضلية ") + n(r1(Lm).toFixed(1)) + " µm", cx, H - 52, { c: C.ink, s: fs + 2 });
      txt(c, "A " + n("1.6") + " µm · I " + n(r1(I).toFixed(1)) + " µm · H " + n(r1(Hz).toFixed(1)) + " µm", cx, H - 30, { c: C.muted, s: fs });
      // lactic bar
      c.fillStyle = C.line; K.rr(c, 12, H - 16, W - 24, 8, 4); c.fill(); c.fillStyle = lac > 80 ? "#ef4444" : "#f59e0b"; K.rr(c, 12, H - 16, Math.max(6, (W - 24) * lac / 100), 8, 4); c.fill();
      txt(c, t("Lactic acid ", "حمض اللاكتيك ") + n(Math.round(lac)) + "%", 14, H - 26, { c: C.muted, s: 11, a: "left" });
      var msg = atp <= 10 && Lm < 2.2 && !stim ? t("Spasm! No ATP to detach the cross-bridges, so the muscle cannot relax.", "تقلص! لا يوجد ATP لفك الروابط المستعرضة، فلا تنبسط العضلة.") :
        lac >= 80 ? t("Fatigue: anaerobic respiration piled up lactic acid; contraction weakens.", "إجهاد: تراكم حمض اللاكتيك من التنفس اللاهوائي فضعف الانقباض.") :
        stim ? t("ACh released, Ca²⁺ in: myosin heads pull actin inward - the A-band stays 1.6 µm.", "أُطلق الأستيل كولين ودخل الكالسيوم: رؤوس الميوسين تسحب الأكتين للداخل - القرص A يبقى ١٫٦ ميكرومتر.") :
        t("Relaxed: cross-bridges detached using ATP.", "منبسطة: انفصلت الروابط المستعرضة باستخدام ATP.");
      out.innerHTML = "<span>" + esc(msg) + "</span>";
    });
  };

  /* =========================================================
     4. sec3bio_pituitary - growth hormone and ADH dials
     ========================================================= */
  L.sec3bio_pituitary = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose child or adult, then set the growth hormone level. Use the ADH slider to control the daily urine volume.",
      "اختر طفلًا أو بالغًا ثم اضبط مستوى هرمون النمو، واستخدم منزلق الهرمون المانع لإدرار البول للتحكم في حجم البول اليومي.")) + '<div class="seg" id="spag"></div>';
    var S = K.make(host, 0.55, 360);
    var c0 = box(host, L._slider(t("Growth hormone", "هرمون النمو"), 0, 200, 10, 100, "%") + L._slider(t("ADH", "المانع لإدرار البول"), 0, 100, 5, 50, "%"));
    var out = meter(host);
    var tick = L._goals(host, [t("Child: produce dwarfism.", "طفل: أحدث القزامة."), t("Child: produce gigantism.", "طفل: أحدث العملقة."), t("Adult: produce acromegaly.", "بالغ: أحدث الأكروميجالي."), t("Raise ADH until urine is 1.5 L/day or less.", "ارفع المانع لإدرار البول حتى يصبح البول ١٫٥ لتر/يوم أو أقل.")], done);
    var age = "child", gh = 100, adh = 50, hShow = 170, ext = 0;
    K.seg(host, "#spag", [["child", "🧒 " + t("Child (growing)", "طفل (في مرحلة النمو)")], ["adult", "🧑 " + t("Adult", "بالغ")]], age, function (v) { age = v; check(); });
    function cond() {
      if (age === "child") return gh < 50 ? "dw" : gh > 150 ? "gi" : "no";
      return gh > 150 ? "ac" : "no";
    }
    function check() { var k = cond(); if (k === "dw") tick(0); if (k === "gi") tick(1); if (k === "ac") tick(2); }
    sl(c0, 0, function (v) { return n(v) + "%"; }, function (v) { gh = v; check(); });
    sl(c0, 1, function (v) { return n(v) + "%"; }, function (v) { adh = v; if (6 - 5 * v / 100 <= 1.5) tick(3); });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, k = cond();
      var targH = age === "child" ? (k === "dw" ? 125 : k === "gi" ? 225 : 170) : 172, targE = k === "ac" ? 1 : 0;
      hShow += (targH - hShow) * Math.min(1, dt * 3); ext += (targE - ext) * Math.min(1, dt * 3);
      c.clearRect(0, 0, W, H);
      var gy = H * 0.9, sc = (H * 0.78) / 230, px = W * 0.3;
      // ruler
      c.strokeStyle = C.muted; c.lineWidth = 1; c.fillStyle = C.muted;
      for (var cm = 0; cm <= 225; cm += 25) { var yy = gy - cm * sc; c.beginPath(); c.moveTo(W * 0.08, yy); c.lineTo(W * 0.11, yy); c.stroke(); txt(c, n(cm), W * 0.05, yy, { c: C.muted, s: 10 }); }
      c.beginPath(); c.moveTo(W * 0.11, gy); c.lineTo(W * 0.11, gy - 225 * sc); c.stroke();
      // person
      var hh = hShow * sc, head = hh * 0.13, top = gy - hh, bw = hh * 0.17;
      c.fillStyle = "#f5c6a5"; c.beginPath(); c.ellipse(px, top + head / 2, head * 0.42, head / 2 * (1 + ext * 0.15), 0, 0, 7); c.fill();
      if (ext > 0.05) { c.fillStyle = "#e7a77f"; c.beginPath(); c.ellipse(px, top + head * 0.85, head * 0.42 * (0.7 + ext * 0.4), head * 0.2, 0, 0, 7); c.fill(); }
      c.fillStyle = "#3b82f6"; K.rr(c, px - bw / 2, top + head, bw, hh * 0.38, 6); c.fill();
      c.fillStyle = "#1e3a8a"; c.fillRect(px - bw / 2, top + head + hh * 0.38, bw * 0.45, hh * 0.47); c.fillRect(px + bw * 0.05, top + head + hh * 0.38, bw * 0.45, hh * 0.47);
      c.strokeStyle = "#f5c6a5"; c.lineWidth = bw * 0.22; c.lineCap = "round"; c.beginPath(); c.moveTo(px - bw / 2, top + head + 6); c.lineTo(px - bw * 0.85, top + head + hh * 0.36); c.moveTo(px + bw / 2, top + head + 6); c.lineTo(px + bw * 0.85, top + head + hh * 0.36); c.stroke();
      var hand = bw * (0.16 + ext * 0.14); K.dot(c, px - bw * 0.85, top + head + hh * 0.38, hand, "#f5c6a5"); K.dot(c, px + bw * 0.85, top + head + hh * 0.38, hand, "#f5c6a5");
      c.fillStyle = "#334155"; var foot = bw * (0.5 + ext * 0.4); K.rr(c, px - bw / 2 - foot * 0.3, gy - 6, foot, 6, 3); c.fill(); K.rr(c, px + bw * 0.05, gy - 6, foot, 6, 3); c.fill();
      txt(c, n(Math.round(hShow)) + " cm", px, top - 12, { c: C.ink, s: 13 });
      // kidney + urine
      var urine = 6 - 5 * adh / 100, bx = W * 0.62, bw2 = W * 0.16, bh = H * 0.6, by = H * 0.25;
      c.strokeStyle = C.muted; c.lineWidth = 2; c.strokeRect(bx, by, bw2, bh);
      c.fillStyle = "#fde047"; var fh = bh * urine / 6; c.fillRect(bx + 2, by + bh - fh, bw2 - 4, fh - 2);
      txt(c, t("Urine ", "البول ") + n(r1(urine).toFixed(1)) + t(" L/day", " لتر/يوم"), bx + bw2 / 2, by - 14, { c: C.ink, s: 13 });
      var lab = k === "dw" ? t("Dwarfism", "القزامة") : k === "gi" ? t("Gigantism", "العملقة") : k === "ac" ? t("Acromegaly", "الأكروميجالي") : t("Normal growth", "نمو طبيعي");
      txt(c, lab, px, 16, { c: k === "no" ? "#16a34a" : "#ef4444", s: 15 });
      out.innerHTML = "<span>" + esc(k === "dw" ? t("Too little GH in childhood: dwarfism.", "نقص هرمون النمو في الطفولة: قزامة.") : k === "gi" ? t("Too much GH in childhood: gigantism.", "زيادة هرمون النمو في الطفولة: عملقة.") :
        k === "ac" ? t("Too much GH in an adult: bones of hands, feet and face enlarge - acromegaly.", "زيادة هرمون النمو في البالغ: تتضخم عظام اليدين والقدمين والوجه - أكروميجالي.") :
        age === "adult" && gh < 50 ? t("In adults the long bones have stopped growing, so height does not change.", "في البالغين توقفت العظام الطويلة عن النمو فلا يتغير الطول.") : t("GH controls protein synthesis and physical growth.", "هرمون النمو ينظم بناء البروتين والنمو الجسمي.")) +
        " · " + esc(t("More ADH → more water reabsorbed in the nephrons → less urine.", "زيادة المانع لإدرار البول ← إعادة امتصاص ماء أكثر في النفرونات ← بول أقل.")) + "</span>";
    });
  };

  /* =========================================================
     5. sec3bio_calcium - calcium balance, iodine/thyroxine and adrenaline
     ========================================================= */
  L.sec3bio_calcium = function (host, cfg, done) {
    host.innerHTML = hint(t("Upset the blood calcium with the event buttons, then fix it with parathormone or calcitonin. Lower the iodine supply, and try a sudden fright.",
      "اختل كالسيوم الدم بأزرار الأحداث ثم أصلحه بالباراثورمون أو الكالسيتونين، وقلل اليود، وجرب موقفًا مخيفًا."));
    var S = K.make(host, 0.55, 360);
    var c0 = box(host, row(btn("scl", "📉 " + t("Calcium falls", "انخفاض الكالسيوم"), "ghost") + btn("sch", "📈 " + t("Calcium-rich meal", "وجبة غنية بالكالسيوم"), "ghost")) +
      row(btn("scp", "🟡 " + t("Release parathormone", "أفرز الباراثورمون"), "primary") + btn("scc", "🔴 " + t("Release calcitonin", "أفرز الكالسيتونين"), "primary") + btn("sca", "🐕 " + t("Sudden fright", "موقف مخيف"), "tg")) +
      L._slider(t("Iodine in food", "اليود في الغذاء"), 0, 100, 5, 80, "%"));
    var out = meter(host);
    var tick = L._goals(host, [t("After calcium falls, bring it back to normal with parathormone.", "بعد انخفاض الكالسيوم أعده للطبيعي بالباراثورمون."), t("After a calcium-rich meal, bring it back with calcitonin.", "بعد وجبة غنية بالكالسيوم أعده بالكالسيتونين."),
      t("Lower iodine until a simple goitre forms.", "قلل اليود حتى يتكون الجويتر البسيط."), t("Trigger adrenaline: heart rate above 120 beats/min.", "أطلق الأدرينالين: نبض أعلى من ١٢٠ نبضة/دقيقة.")], done);
    var ca = 50, bone = 70, wasLow = false, wasHigh = false, iod = 80, thy = 1, adr = 0, beat = 0, dots = [];
    for (var i = 0; i < 40; i++) dots.push({ x: Math.random(), y: Math.random(), v: K.rnd(0.05, 0.15) });
    c0.querySelector("#scl").onclick = function () { ca = 22; wasLow = true; wasHigh = false; };
    c0.querySelector("#sch").onclick = function () { ca = 80; wasHigh = true; wasLow = false; };
    c0.querySelector("#scp").onclick = function () { ca = Math.min(100, ca + 7); bone = Math.max(10, bone - 4); if (wasLow && ca >= 40 && ca <= 60) { tick(0); wasLow = false; } };
    c0.querySelector("#scc").onclick = function () { ca = Math.max(0, ca - 7); bone = Math.min(100, bone + 3); if (wasHigh && ca >= 40 && ca <= 60) { tick(1); wasHigh = false; } };
    c0.querySelector("#sca").onclick = function () { adr = 1; E.speak(t("Adrenaline!", "أدرينالين!")); };
    sl(c0, 0, function (v) { return n(v) + "%"; }, function (v) { iod = v; });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      thy += ((iod / 80 > 1 ? 1 : iod / 80) - thy) * Math.min(1, dt * 1.5);
      adr = Math.max(0, adr - dt * 0.08);
      var hr = 72 + adr * 70, glu = 100 + adr * 60, goitre = thy < 0.4;
      if (goitre) tick(2); if (hr > 120) tick(3);
      beat += dt * hr / 60;
      c.clearRect(0, 0, W, H);
      // blood vessel with Ca dots
      var vx = W * 0.04, vy = H * 0.1, vw = W * 0.5, vh = H * 0.3;
      c.fillStyle = "rgba(239,68,68,.18)"; K.rr(c, vx, vy, vw, vh, vh / 2); c.fill();
      var nd = Math.round(ca / 100 * 40);
      dots.forEach(function (d, k) { d.x = (d.x + d.v * dt) % 1; if (k < nd) { K.dot(c, vx + 14 + d.x * (vw - 28), vy + 10 + d.y * (vh - 20), 4, "#facc15", "rgba(0,0,0,.25)"); } });
      txt(c, "Ca²⁺ " + t("in blood", "في الدم"), vx + vw / 2, vy - 8, { c: C.ink, s: 12 });
      // gauge
      var gx = vx, gy = vy + vh + 22, gw = vw;
      c.fillStyle = C.line; K.rr(c, gx, gy, gw, 12, 6); c.fill(); c.fillStyle = "rgba(34,197,94,.5)"; c.fillRect(gx + gw * 0.4, gy, gw * 0.2, 12);
      K.dot(c, gx + gw * ca / 100, gy + 6, 8, ca < 40 ? "#3b82f6" : ca > 60 ? "#ef4444" : "#16a34a", "#fff");
      txt(c, t("low", "منخفض"), gx + 14, gy + 26, { c: C.muted, s: 11 }); txt(c, t("normal", "طبيعي"), gx + gw / 2, gy + 26, { c: "#16a34a", s: 11 }); txt(c, t("high", "مرتفع"), gx + gw - 14, gy + 26, { c: C.muted, s: 11 });
      // bone bar
      var by = gy + 46; txt(c, t("Bone calcium store", "مخزون كالسيوم العظام"), gx, by, { c: C.ink, s: 12, a: "left" });
      c.fillStyle = C.line; K.rr(c, gx, by + 10, gw, 10, 5); c.fill(); c.fillStyle = bone < 40 ? "#ef4444" : "#e7e5e4"; K.rr(c, gx, by + 10, gw * bone / 100, 10, 5); c.fill();
      if (ca < 35) { var sh = Math.sin(beat * 30) * 3; txt(c, "⚡ " + t("muscle spasms", "تشنجات عضلية"), gx + gw / 2 + sh, by + 40, { c: "#3b82f6", s: 13 }); }
      if (bone < 40) txt(c, "🦴 " + t("fragile bones", "عظام هشة"), gx + gw / 2, by + 58, { c: "#ef4444", s: 13 });
      // thyroid
      var tx0 = W * 0.72, ty0 = H * 0.25, sz = 18 + (goitre ? (1 - thy) * 40 : 0);
      c.fillStyle = "#cbd5e1"; c.fillRect(tx0 - 7, ty0 - 40, 14, 90);
      c.fillStyle = "#ef4444"; c.beginPath(); c.ellipse(tx0 - sz * 0.8, ty0, sz * 0.7, sz, 0, 0, 7); c.ellipse(tx0 + sz * 0.8, ty0, sz * 0.7, sz, 0, 0, 7); c.fill();
      txt(c, goitre ? t("Simple goitre!", "جويتر بسيط!") : t("Thyroid", "الدرقية"), tx0, ty0 + sz + 22, { c: goitre ? "#ef4444" : C.ink, s: 13 });
      txt(c, t("Thyroxine ", "الثيروكسين ") + n(Math.round(thy * 100)) + "%", tx0, ty0 + sz + 40, { c: C.muted, s: 11 });
      // heart
      var hx = W * 0.72, hy = H * 0.8, pulse = 1 + 0.12 * Math.max(0, Math.sin(beat * Math.PI * 2));
      txt(c, "❤", hx, hy, { c: "#ef4444", s: 34 * pulse });
      txt(c, n(Math.round(hr)) + t(" beats/min · glucose ", " نبضة/د · جلوكوز ") + n(Math.round(glu)), hx, hy + 30, { c: C.ink, s: 12 });
      out.innerHTML = "<span>" + esc(ca < 40 ? t("Calcium below normal: the parathyroids should release parathormone (takes calcium from bones).", "الكالسيوم أقل من الطبيعي: يجب أن تفرز الجارات الدرقية الباراثورمون (يسحب الكالسيوم من العظام).") :
        ca > 60 ? t("Calcium above normal: calcitonin lowers it and stops its withdrawal from bones.", "الكالسيوم أعلى من الطبيعي: الكالسيتونين يخفضه ويمنع سحبه من العظام.") : t("Calcium is normal.", "الكالسيوم طبيعي.")) +
        (adr > 0.3 ? " · " + esc(t("Adrenal medulla: adrenaline raises heart rate and blood glucose.", "نخاع الكظرية: الأدرينالين يرفع النبض وجلوكوز الدم.")) : "") + "</span>";
    });
  };

  /* =========================================================
     6. sec3bio_glucose - blood glucose with insulin / glucagon
     ========================================================= */
  L.sec3bio_glucose = function (host, cfg, done) {
    host.innerHTML = hint(t("Eat a meal or exercise and watch the islets of Langerhans respond. Switch to 'Diabetic' (no insulin) and inject insulin yourself.",
      "تناول وجبة أو مارس الرياضة وراقب استجابة جزر لانجرهانز، ثم حوّل إلى 'مريض سكر' (لا أنسولين) واحقن الأنسولين بنفسك.")) + '<div class="seg" id="sgm"></div>';
    var S = K.make(host, 0.5, 340);
    var c0 = box(host, row(btn("sge", "🍽️ " + t("Eat a meal", "تناول وجبة"), "primary") + btn("sgx", "🏃 " + t("Fast / exercise", "صيام / رياضة"), "tg") + btn("sgi", "💉 " + t("Inject insulin", "احقن أنسولين"), "ghost")));
    var out = meter(host);
    var tick = L._goals(host, [t("Healthy: eat, then let insulin bring glucose back to 80-120.", "سليم: تناول وجبة ثم دع الأنسولين يعيد الجلوكوز إلى ٨٠-١٢٠."), t("Healthy: fast until glucagon is released.", "سليم: صُم حتى يُفرز الجلوكاجون."),
      t("Diabetic: eat until glucose appears in the urine.", "مريض سكر: تناول وجبة حتى يظهر الجلوكوز في البول."), t("Diabetic: inject insulin to return to 80-120.", "مريض سكر: احقن الأنسولين للعودة إلى ٨٠-١٢٠.")], done);
    var mode = "h", G = 100, meal = 0, ex = false, pool = 0, hist = [], acc = 0, ins = 0, glc = 0, wasHigh = false, dHigh = false, urine = false;
    K.seg(host, "#sgm", [["h", "💚 " + t("Healthy", "سليم")], ["d", "🩸 " + t("Diabetic", "مريض سكر")]], mode, function (v) { mode = v; wasHigh = false; dHigh = false; });
    c0.querySelector("#sge").onclick = function () { meal += 2.5; };
    c0.querySelector("#sgx").onclick = function () { ex = !ex; this.classList.toggle("on", ex); };
    c0.querySelector("#sgi").onclick = function () { if (mode === "h") { E.toast(t("A healthy pancreas makes its own insulin.", "البنكرياس السليم يصنع الأنسولين بنفسه.")); return; } pool += 3; };
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      var inflow = meal > 0 ? 40 : 0; meal = Math.max(0, meal - dt);
      var use = ex ? 6 : 1;
      ins = (mode === "h" ? Math.max(0, G - 105) * 0.06 : 0) + pool; pool = Math.max(0, pool - pool * 0.5 * dt);
      glc = Math.max(0, 90 - G) * 0.08;
      G += (inflow - use - ins * 8 + glc * 8) * dt;
      urine = G > 180; if (urine) G -= (G - 180) * 0.05 * dt;
      G = clamp(G, 30, 400);
      if (mode === "h") { if (G > 130) wasHigh = true; if (wasHigh && G <= 120 && G >= 80 && meal <= 0) tick(0); if (glc > 0.2) tick(1); }
      else { if (urine) { tick(2); dHigh = true; } if (dHigh && pool > 0.05 && G <= 120 && G >= 80) tick(3); }
      acc += dt; if (acc > 0.1) { acc = 0; hist.push(G); if (hist.length > 220) hist.shift(); }
      c.clearRect(0, 0, W, H);
      var gx = 44, gy = 14, gw = W * 0.62, gh = H - 44;
      function Y(v) { return gy + gh - (v - 40) / (260 - 40) * gh; }
      c.fillStyle = "rgba(34,197,94,.15)"; c.fillRect(gx, Y(120), gw, Y(80) - Y(120));
      c.strokeStyle = "rgba(239,68,68,.5)"; c.setLineDash([5, 4]); c.beginPath(); c.moveTo(gx, Y(180)); c.lineTo(gx + gw, Y(180)); c.stroke(); c.setLineDash([]);
      c.strokeStyle = C.muted; c.lineWidth = 1; c.strokeRect(gx, gy, gw, gh);
      [80, 120, 180, 240].forEach(function (v) { txt(c, n(v), gx - 18, Y(v), { c: C.muted, s: 10 }); });
      c.strokeStyle = "#f59e0b"; c.lineWidth = 2.5; c.beginPath();
      hist.forEach(function (v, i) { var x = gx + i / 220 * gw, y = Y(clamp(v, 40, 260)); if (i) c.lineTo(x, y); else c.moveTo(x, y); }); c.stroke();
      txt(c, "mg / 100 cm³", gx + gw / 2, H - 14, { c: C.muted, s: 11 });
      // islet panel
      var px = gx + gw + 20, pw = W - px - 10;
      txt(c, n(Math.round(G)), px + pw / 2, 30, { c: G > 180 ? "#ef4444" : G < 80 ? "#3b82f6" : "#16a34a", s: 26 });
      txt(c, "mg / 100 cm³", px + pw / 2, 52, { c: C.muted, s: 10 });
      [[t("Insulin (β)", "أنسولين (β)"), Math.min(1, ins / 3), "#3b82f6"], [t("Glucagon (α)", "جلوكاجون (α)"), Math.min(1, glc / 2), "#f97316"]].forEach(function (b, j) {
        var y = 74 + j * 40; txt(c, b[0], px, y, { c: C.ink, s: 12, a: "left" }); c.fillStyle = C.line; K.rr(c, px, y + 10, pw, 10, 5); c.fill(); c.fillStyle = b[2]; K.rr(c, px, y + 10, Math.max(4, pw * b[1]), 10, 5); c.fill();
      });
      txt(c, urine ? "🚽 " + t("glucose in urine!", "جلوكوز في البول!") : "🚽 " + t("no glucose in urine", "لا جلوكوز في البول"), px + pw / 2, 172, { c: urine ? "#ef4444" : C.muted, s: 12 });
      if (urine) txt(c, "💧 " + t("thirst, frequent urination", "عطش وكثرة تبول"), px + pw / 2, 192, { c: "#ef4444", s: 11 });
      out.innerHTML = "<span>" + esc(G > 120 ? t("High: beta cells release insulin - glucose enters cells and is stored as glycogen.", "مرتفع: تفرز خلايا بيتا الأنسولين - يدخل الجلوكوز الخلايا ويُخزن جليكوجينًا.") :
        G < 80 ? t("Low: alpha cells release glucagon - liver glycogen becomes glucose.", "منخفض: تفرز خلايا ألفا الجلوكاجون - يتحول جليكوجين الكبد إلى جلوكوز.") : t("Normal: 80-120 mg / 100 cm³.", "طبيعي: ٨٠-١٢٠ مجم / ١٠٠ سم³.")) + (mode === "d" ? " · " + esc(t("Diabetic: beta cells make no insulin.", "مريض سكر: خلايا بيتا لا تفرز أنسولين.")) : "") + "</span>";
    });
  };

  /* =========================================================
     7. sec3bio_fission - Amoeba culture: binary fission and cysts
     ========================================================= */
  L.sec3bio_fission = function (host, cfg, done) {
    host.innerHTML = hint(t("Start the culture and watch every Amoeba divide into two. Make conditions bad to see cysts, then restore them.",
      "ابدأ المزرعة وراقب كل أميبا تنقسم إلى اثنتين، واجعل الظروف سيئة لترى الحوصلات ثم أعدها جيدة."));
    var S = K.make(host, 0.6, 360);
    var c0 = box(host, row(btn("sfg", "▶ " + t("Divide", "انقسم"), "primary tg") + btn("sfb", "☀️ " + t("Bad conditions (drought)", "ظروف سيئة (جفاف)"), "tg") + btn("sfr", "↺ " + t("One cell", "خلية واحدة"), "ghost")) + L._slider(t("Time between divisions", "الزمن بين الانقسامات"), 1, 4, 0.5, 1.5, " s"));
    var out = meter(host);
    var tick = L._goals(host, [t("Reach 32 Amoebae.", "صل إلى ٣٢ أميبا."), t("Make conditions bad so the Amoebae form cysts.", "اجعل الظروف سيئة لتكوّن الأميبا حوصلات."), t("Restore good conditions so young Amoebae come out.", "أعد الظروف الجيدة لتخرج أميبات صغيرة.")], done);
    var cells, gen, run = false, bad = false, gt = 1.5, timer = 0, hadCyst = false;
    function reset() { cells = [{ x: 0.5, y: 0.5, vx: 0, vy: 0, r: 1, sp: 0 }]; gen = 0; timer = 0; }
    reset();
    c0.querySelector("#sfg").onclick = function () { run = !run; this.classList.toggle("on", run); };
    c0.querySelector("#sfb").onclick = function () {
      bad = !bad; this.classList.toggle("on", bad);
      if (bad) { tick(1); hadCyst = true; }
      else if (hadCyst) { var nw = []; cells.forEach(function (q) { for (var k = 0; k < 4 && nw.length < 64; k++) nw.push({ x: q.x + K.rnd(-0.03, 0.03), y: q.y + K.rnd(-0.03, 0.03), vx: K.rnd(-0.05, 0.05), vy: K.rnd(-0.05, 0.05), r: 0.7, sp: 0 }); }); cells = nw; tick(2); hadCyst = false; E.speak(t("The cysts open: young Amoebae are released.", "تنفتح الحوصلات: تخرج أميبات صغيرة.")); }
    };
    c0.querySelector("#sfr").onclick = reset;
    sl(c0, 0, function (v) { return n(v) + t(" s", " ث"); }, function (v) { gt = v; });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, R = Math.min(W, H) * 0.44, cx = W * 0.4, cy = H / 2;
      if (run && !bad && cells.length < 64) { timer += dt; if (timer >= gt) { timer = 0; gen++; var nw = []; cells.forEach(function (q) { var a = Math.random() * 6.28; nw.push({ x: q.x + Math.cos(a) * 0.02, y: q.y + Math.sin(a) * 0.02, vx: Math.cos(a) * 0.08, vy: Math.sin(a) * 0.08, r: q.r, sp: 1 }); nw.push({ x: q.x - Math.cos(a) * 0.02, y: q.y - Math.sin(a) * 0.02, vx: -Math.cos(a) * 0.08, vy: -Math.sin(a) * 0.08, r: q.r, sp: 1 }); }); cells = nw.slice(0, 64); } }
      if (cells.length >= 32) tick(0);
      c.clearRect(0, 0, W, H);
      c.fillStyle = bad ? "rgba(217,119,6,.15)" : "rgba(14,165,233,.12)"; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 2; c.stroke();
      var rad = Math.max(5, R * 0.11 / Math.sqrt(Math.max(1, cells.length) / 2));
      cells.forEach(function (q, k) {
        if (!bad) { q.vx += K.rnd(-0.1, 0.1) * dt; q.vy += K.rnd(-0.1, 0.1) * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.vx *= 0.98; q.vy *= 0.98; }
        q.r = Math.min(1, q.r + dt * 0.3); q.sp = Math.max(0, q.sp - dt * 2);
        var dx = q.x - 0.5, dy = q.y - 0.5, d = Math.hypot(dx, dy); if (d > 0.42) { q.x = 0.5 + dx / d * 0.42; q.y = 0.5 + dy / d * 0.42; q.vx *= -1; q.vy *= -1; }
        var x = cx + (q.x - 0.5) * 2 * R, y = cy + (q.y - 0.5) * 2 * R, r = rad * q.r;
        if (bad) { K.dot(c, x, y, r * 1.1, "#d6d3d1", "#78350f"); c.lineWidth = 3; c.strokeStyle = "#92400e"; c.beginPath(); c.arc(x, y, r * 1.1, 0, 7); c.stroke(); K.dot(c, x, y, r * 0.35, "#1d4ed8"); }
        else { c.fillStyle = "rgba(147,197,253,.85)"; c.beginPath(); for (var a = 0; a <= 12; a++) { var an = a / 12 * 6.283, rr = r * (1 + 0.18 * Math.sin(an * 3 + k + performance.now() / 400)); if (a) c.lineTo(x + Math.cos(an) * rr, y + Math.sin(an) * rr); else c.moveTo(x + Math.cos(an) * rr, y + Math.sin(an) * rr); } c.fill(); K.dot(c, x, y, r * 0.3, "#1d4ed8"); }
      });
      var px = W * 0.8;
      txt(c, n(cells.length), px, H * 0.3, { c: C.ink, s: 30 }); txt(c, t("Amoebae", "أميبا"), px, H * 0.3 + 26, { c: C.muted, s: 12 });
      txt(c, t("divisions n = ", "الانقسامات n = ") + n(gen), px, H * 0.55, { c: C.ink, s: 13 });
      txt(c, "2ⁿ = " + n(Math.pow(2, gen)), px, H * 0.55 + 22, { c: "#2563eb", s: 14 });
      txt(c, "2N → 2N", px, H * 0.8, { c: C.muted, s: 12 }); txt(c, t("(mitosis)", "(ميتوزي)"), px, H * 0.8 + 16, { c: C.muted, s: 11 });
      out.innerHTML = "<span>" + esc(bad ? t("Bad conditions: each Amoeba secretes a protective cyst and divides inside it.", "ظروف سيئة: تفرز كل أميبا حوصلة واقية وتنقسم داخلها.") : t("Binary fission: the nucleus divides by mitosis, then the cell splits into two identical individuals.", "الانشطار الثنائي: تنقسم النواة ميتوزيًا ثم تنقسم الخلية إلى فردين متطابقين.")) + "</span>";
    });
  };

  /* =========================================================
     8. sec3bio_cycle - drag the marker round a life-cycle wheel
     ========================================================= */
  L.sec3bio_cycle = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the orange marker round the wheel to follow the life cycle. Then stop on the asked stage and press 'Mark it'.",
      "اسحب العلامة البرتقالية حول العجلة لتتبع دورة الحياة، ثم توقف عند المرحلة المطلوبة واضغط 'حدّدها'.")) + '<div class="seg" id="scym"></div>';
    var S = K.make(host, 0.62, 400);
    var c0 = box(host, row(btn("scyk", "✔ " + t("Mark it", "حدّدها"), "primary")));
    var out = meter(host);
    var tick = L._goals(host, [t("Fern: go through all six stages.", "السرخس: مر بالمراحل الست."), t("Fern: mark where meiosis happens.", "السرخس: حدد أين يحدث الانقسام الميوزي."),
      t("Plasmodium: go through all six stages.", "البلازموديوم: مر بالمراحل الست."), t("Plasmodium: mark where gametes fuse (sexual reproduction).", "البلازموديوم: حدد أين تندمج الأمشاج (التكاثر الجنسي).")], done);
    var F = [[t("Sporophyte (2N)", "الطور الجرثومي (2N)"), t("Fern plant; sori under the leaves hold sporangia.", "نبات السرخس؛ البثرات أسفل الأوراق تحمل الحوافظ الجرثومية."), "2N", "🌿"],
      [t("Spores (N)", "الجراثيم (N)"), t("Spore mother cells (2N) divide by MEIOSIS into spores (N).", "الخلايا الجرثومية الأم (2N) تنقسم ميوزيًا إلى جراثيم (N)."), "N", "✨", "mei"],
      [t("Germination", "الإنبات"), t("A spore lands on wet soil and grows by mitosis.", "تسقط الجرثومة على تربة رطبة وتنمو بالميتوزي."), "N", "🌱"],
      [t("Gametophyte (N)", "الطور المشيجي (N)"), t("Heart-shaped; rhizoids, antheridia and archegonia.", "قلبي الشكل؛ أشباه جذور وأنثريدات وأرشيجونات."), "N", "💚"],
      [t("Fertilization", "الإخصاب"), t("Ciliated sperms swim in soil water to the egg.", "تسبح الحيوانات المنوية الهدبية في ماء التربة إلى البويضة."), "N + N", "💧"],
      [t("Zygote → young sporophyte (2N)", "لاقحة ← طور جرثومي صغير (2N)"), t("Grows on the gametophyte until it has roots, stem and leaves.", "ينمو على الطور المشيجي حتى تتكون جذوره وساقه وأوراقه."), "2N", "🌾"]];
    var Pm = [[t("Mosquito bite", "لدغة البعوضة"), t("Female Anopheles pours sporozoites into human blood.", "تصب أنثى الأنوفيليس الأسبوروزويتات في دم الإنسان."), t("man", "الإنسان"), "🦟"],
      [t("Liver: schizogony", "الكبد: تكاثر انقسامي"), t("Sporozoites reproduce asexually into merozoites.", "تتكاثر الأسبوروزويتات لاجنسيًا إلى ميروزويتات."), t("man", "الإنسان"), "🟤"],
      [t("Red cells: schizogony", "كرات الدم: تكاثر انقسامي"), t("Merozoites burst out every 2 days: fever, chills, sweating.", "تنطلق الميروزويتات كل يومين: حمى ورعشة وعرق."), t("man", "الإنسان"), "🔴"],
      [t("Gametocytes", "الخلايا الجاميتية"), t("Form from merozoites and pass to the mosquito with blood.", "تتكون من الميروزويتات وتنتقل إلى البعوضة مع الدم."), t("man → mosquito", "الإنسان ← البعوضة"), "🩸"],
      [t("Stomach: gametes fuse", "المعدة: اندماج الأمشاج"), t("Gametes fuse into a zygote (ookinete): SEXUAL reproduction.", "تندمج الأمشاج في لاقحة متحركة: تكاثر جنسي."), t("mosquito", "البعوضة"), "💞", "sex"],
      [t("Oocyst: sporogony", "الحوصلة: تكاثر جرثومي"), t("Many sporozoites move to the salivary glands.", "تتكون أسبوروزويتات كثيرة تتحرك إلى الغدد اللعابية."), t("mosquito", "البعوضة"), "🫧"]];
    var mode = "f", ang = -Math.PI / 2, drag = false, vis = { f: {}, p: {} };
    K.seg(host, "#scym", [["f", "🌿 " + t("Fern (Polypodium)", "السرخس (البوليبوديوم)")], ["p", "🦟 " + t("Plasmodium (malaria)", "البلازموديوم (الملاريا)")]], mode, function (v) { mode = v; });
    function st() { return mode === "f" ? F : Pm; }
    function idx() { var a = (ang + Math.PI / 2 + Math.PI * 4) % (Math.PI * 2); return Math.floor(a / (Math.PI * 2) * 6) % 6; }
    c0.querySelector("#scyk").onclick = function () {
      var s = st()[idx()];
      if (mode === "f") { if (s[4] === "mei") { tick(1); E.toast(t("Correct: meiosis makes the spores.", "صحيح: الميوزي يكوّن الجراثيم.")); } else E.toast(t("Not here. Where do spores (N) come from?", "ليس هنا. من أين تأتي الجراثيم (N)؟")); }
      else { if (s[4] === "sex") { tick(3); E.toast(t("Correct: gametes fuse in the mosquito's stomach.", "صحيح: تندمج الأمشاج في معدة البعوضة.")); } else E.toast(t("Not here. Look inside the mosquito.", "ليس هنا. ابحث داخل البعوضة.")); }
    };
    function geo() { return { cx: S.W * 0.32, cy: S.H * 0.5, R: Math.min(S.W * 0.26, S.H * 0.4) }; }
    S.drag({
      down: function (p) { var g = geo(), mx = g.cx + Math.cos(ang) * g.R, my = g.cy + Math.sin(ang) * g.R; if (Math.hypot(p.x - mx, p.y - my) < 28 || Math.abs(Math.hypot(p.x - g.cx, p.y - g.cy) - g.R) < 30) { drag = true; ang = Math.atan2(p.y - g.cy, p.x - g.cx); return true; } return false; },
      move: function (p) { if (drag) { var g = geo(); ang = Math.atan2(p.y - g.cy, p.x - g.cx); } },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return Math.abs(Math.hypot(p.x - g.cx, p.y - g.cy) - g.R) < 30; }
    });
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), list = st(), k = idx(), i;
      vis[mode][k] = 1; if (Object.keys(vis.f).length === 6) tick(0); if (Object.keys(vis.p).length === 6) tick(2);
      c.clearRect(0, 0, W, H);
      for (i = 0; i < 6; i++) {
        var a0 = -Math.PI / 2 + i / 6 * Math.PI * 2, a1 = a0 + Math.PI / 3;
        var col = mode === "f" ? (list[i][2].indexOf("2N") === 0 ? "#22c55e" : list[i][2] === "N" ? "#a855f7" : "#0ea5e9") : (i >= 4 ? "#f97316" : "#ef4444");
        c.strokeStyle = col; c.globalAlpha = i === k ? 1 : 0.45; c.lineWidth = 22; c.beginPath(); c.arc(g.cx, g.cy, g.R, a0 + 0.04, a1 - 0.04); c.stroke(); c.globalAlpha = 1;
        var am = (a0 + a1) / 2; txt(c, list[i][3], g.cx + Math.cos(am) * g.R, g.cy + Math.sin(am) * g.R, { s: 15 });
        txt(c, n(i + 1), g.cx + Math.cos(am) * (g.R - 30), g.cy + Math.sin(am) * (g.R - 30), { c: C.muted, s: 12 });
      }
      K.dot(c, g.cx + Math.cos(ang) * g.R, g.cy + Math.sin(ang) * g.R, 14, "#f97316", "#fff");
      txt(c, mode === "f" ? t("Fern", "السرخس") : "Plasmodium", g.cx, g.cy - 8, { c: C.ink, s: 15 });
      txt(c, n(Object.keys(vis[mode]).length) + " / " + n(6), g.cx, g.cy + 14, { c: C.muted, s: 12 });
      var s = list[k], px = W * 0.64, pw = W * 0.34;
      txt(c, s[0], px + pw / 2, H * 0.22, { c: C.ink, s: 15 });
      txt(c, (mode === "f" ? t("Chromosomes: ", "الكروموسومات: ") : t("Host: ", "العائل: ")) + s[2], px + pw / 2, H * 0.34, { c: "#2563eb", s: 14 });
      txt(c, mode === "f" ? t("Ask: where does meiosis happen?", "سؤال: أين يحدث الميوزي؟") : t("Ask: where do gametes fuse?", "سؤال: أين تندمج الأمشاج؟"), px + pw / 2, H * 0.85, { c: C.muted, s: 12 });
      out.innerHTML = "<b>" + esc(s[0]) + "</b> <span>" + esc(s[1]) + "</span>";
    });
  };

  /* =========================================================
     9. sec3bio_pollen - pollinate, grow the tube, double fertilization, auxin
     ========================================================= */
  L.sec3bio_pollen = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag a pollen grain from an anther onto the sticky stigma: the near anther (same flower) or the flower of another plant. Or spray auxin without pollinating.",
      "اسحب حبة لقاح من متك إلى الميسم اللزج: المتك القريب (الزهرة نفسها) أو زهرة نبات آخر، أو رش الأوكسين دون تلقيح."));
    var S = K.make(host, 0.62, 400);
    var c0 = box(host, row(btn("spa", "🧴 " + t("Spray auxin (no pollination)", "رش أوكسين (دون تلقيح)"), "ghost") + btn("spr", "↺ " + t("New flower", "زهرة جديدة"), "ghost")));
    var out = meter(host);
    var tick = L._goals(host, [t("Self-pollinate (pollen from the same flower).", "لقّح ذاتيًا (لقاح من الزهرة نفسها)."), t("Cross-pollinate (pollen from another plant).", "لقّح خلطيًا (لقاح من نبات آخر)."),
      t("Complete double fertilization: zygote 2N and endosperm 3N.", "أكمل الإخصاب المزدوج: لاقحة 2N وإندوسبرم 3N."), t("Make a seedless fruit with auxin.", "كوّن ثمرة بلا بذور بالأوكسين.")], done);
    var st, grain = null, dragG = false;
    function reset() { st = { phase: 0, tube: 0, fert: 0, fruit: 0, auxin: false, src: "" }; grain = null; }
    reset();
    c0.querySelector("#spr").onclick = reset;
    c0.querySelector("#spa").onclick = function () { if (st.phase) { E.toast(t("Start with a new flower.", "ابدأ بزهرة جديدة.")); return; } st.auxin = true; st.phase = 4; E.speak(t("Auxin makes the ovary grow into a fruit without fertilization.", "الأوكسين يجعل المبيض ينمو إلى ثمرة دون إخصاب.")); };
    function geo() { var W = S.W, H = S.H; return { sx: W * 0.36, sy: H * 0.2, ox: W * 0.36, oy: H * 0.78, a1: { x: W * 0.2, y: H * 0.3 }, a2: { x: W * 0.86, y: H * 0.25 } }; }
    S.drag({
      down: function (p) {
        if (st.phase) return false; var g = geo();
        if (Math.hypot(p.x - g.a1.x, p.y - g.a1.y) < 26) { grain = { x: p.x, y: p.y, src: "self" }; dragG = true; return true; }
        if (Math.hypot(p.x - g.a2.x, p.y - g.a2.y) < 26) { grain = { x: p.x, y: p.y, src: "cross" }; dragG = true; return true; }
        return false;
      },
      move: function (p) { if (dragG && grain) { grain.x = p.x; grain.y = p.y; } },
      up: function () {
        if (!dragG) return; dragG = false; var g = geo();
        if (grain && Math.hypot(grain.x - g.sx, grain.y - g.sy) < 30) { st.phase = 1; st.src = grain.src; tick(grain.src === "self" ? 0 : 1); E.speak(grain.src === "self" ? t("Self-pollination.", "تلقيح ذاتي.") : t("Cross-pollination.", "تلقيح خلطي.")); }
        else grain = null;
      },
      hover: function (p) { var g = geo(); return !st.phase && (Math.hypot(p.x - g.a1.x, p.y - g.a1.y) < 26 || Math.hypot(p.x - g.a2.x, p.y - g.a2.y) < 26); }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo();
      if (st.phase === 1) { st.tube = Math.min(1, st.tube + dt * 0.4); if (st.tube >= 1) st.phase = 2; }
      if (st.phase === 2) { st.fert = Math.min(1, st.fert + dt * 0.5); if (st.fert >= 1) { st.phase = 3; tick(2); E.speak(t("Double fertilization complete.", "اكتمل الإخصاب المزدوج.")); } }
      if (st.phase >= 3) st.fruit = Math.min(1, st.fruit + dt * 0.4);
      if (st.phase === 4 && st.fruit >= 0.99) tick(3);
      c.clearRect(0, 0, W, H);
      // petals
      var wil = st.fruit;
      c.globalAlpha = 1 - wil * 0.8;
      [-1, 1].forEach(function (s) { c.fillStyle = "#f9a8d4"; c.beginPath(); c.ellipse(g.ox + s * W * 0.13, g.oy - H * 0.22, W * 0.07, H * 0.22, s * 0.5, 0, 7); c.fill(); });
      c.strokeStyle = "#65a30d"; c.lineWidth = 3; c.beginPath(); c.moveTo(g.ox - 30, g.oy - 10); c.lineTo(g.a1.x, g.a1.y + 10); c.stroke();
      c.fillStyle = "#facc15"; c.beginPath(); c.ellipse(g.a1.x, g.a1.y, 14, 22, 0.2, 0, 7); c.fill();
      c.globalAlpha = 1;
      // style + stigma
      c.fillStyle = "#86efac"; c.fillRect(g.sx - 6, g.sy, 12, g.oy - g.sy - 30);
      c.fillStyle = "#16a34a"; c.beginPath(); c.ellipse(g.sx, g.sy, 22, 10, 0, 0, 7); c.fill();
      // ovary / fruit
      var orx = W * 0.09 * (1 + st.fruit * 0.8), ory = H * 0.1 * (1 + st.fruit * 0.8);
      c.fillStyle = st.fruit > 0.3 ? "#fb923c" : "#bbf7d0"; c.beginPath(); c.ellipse(g.ox, g.oy, orx, ory, 0, 0, 7); c.fill(); c.strokeStyle = "#15803d"; c.lineWidth = 2; c.stroke();
      // ovule
      var vx = g.ox, vy = g.oy;
      if (!st.auxin) {
        c.fillStyle = "#fef9c3"; c.beginPath(); c.ellipse(vx, vy, orx * 0.5, ory * 0.55, 0, 0, 7); c.fill();
        var egg = { x: vx, y: vy - ory * 0.3 }, pol = { x: vx, y: vy + ory * 0.05 };
        K.dot(c, egg.x, egg.y, 6, st.phase >= 3 ? "#be185d" : "#ec4899"); K.dot(c, pol.x - 6, pol.y, 4.5, st.phase >= 3 ? "#6d28d9" : "#8b5cf6"); K.dot(c, pol.x + 6, pol.y, 4.5, st.phase >= 3 ? "#6d28d9" : "#8b5cf6");
        if (st.phase >= 3) { txt(c, t("zygote 2N", "لاقحة 2N"), egg.x + orx * 0.9, egg.y, { c: "#be185d", s: 12 }); txt(c, t("endosperm 3N", "إندوسبرم 3N"), pol.x + orx * 0.95, pol.y + 14, { c: "#6d28d9", s: 12 }); }
        if (st.phase === 2) { var f = st.fert, top = { x: vx, y: vy - ory * 0.55 }; K.dot(c, top.x + (egg.x - top.x) * f + 4, top.y + (egg.y - top.y) * f, 3.5, "#0ea5e9"); K.dot(c, top.x + (pol.x - top.x) * f - 4, top.y + (pol.y - top.y) * f, 3.5, "#0ea5e9"); }
      } else if (st.fruit > 0.5) txt(c, t("no seeds", "بلا بذور"), vx, vy, { c: "#fff", s: 13 });
      // pollen tube
      if (st.phase >= 1 && !st.auxin) {
        var yEnd = g.sy + (vy - ory * 0.55 - g.sy) * st.tube; c.strokeStyle = "#f59e0b"; c.lineWidth = 3; c.beginPath(); c.moveTo(g.sx, g.sy); c.lineTo(g.sx + Math.sin(yEnd / 15) * 3, yEnd); c.stroke();
        K.dot(c, g.sx, g.sy - 6, 7, "#fbbf24", "#b45309");
      }
      // other plant flower
      c.fillStyle = "#c4b5fd"; c.beginPath(); c.arc(g.a2.x, g.a2.y + 30, 30, 0, 7); c.fill();
      c.fillStyle = "#facc15"; c.beginPath(); c.ellipse(g.a2.x, g.a2.y, 14, 22, -0.2, 0, 7); c.fill();
      txt(c, t("another plant", "نبات آخر"), g.a2.x, g.a2.y + 76, { c: C.muted, s: 11 }); txt(c, t("anther", "المتك"), g.a1.x - 30, g.a1.y - 28, { c: C.muted, s: 11 }); txt(c, t("stigma", "الميسم"), g.sx + 46, g.sy, { c: C.muted, s: 11 });
      if (grain && dragG) K.dot(c, grain.x, grain.y, 7, "#fbbf24", "#b45309");
      var msg = st.phase === 0 ? t("Waiting for pollination.", "في انتظار التلقيح.") : st.phase === 1 ? t("The tube nucleus forms the pollen tube down the style to the micropyle.", "تكوّن النواة الأنبوبية أنبوب اللقاح في القلم حتى النقير.") :
        st.phase === 2 ? t("The generative nucleus gave 2 male nuclei: one to the egg, one to the 2 polar nuclei.", "أعطت النواة التناسلية نواتين ذكريتين: واحدة للبويضة وأخرى للنواتين القطبيتين.") :
        st.phase === 3 ? t("Ovary → fruit, ovule → seed. If 2N = 14: zygote 14, endosperm 21.", "المبيض ← ثمرة، والبويضة ← بذرة. إذا كان 2N = ١٤: اللاقحة ١٤ والإندوسبرم ٢١.") : t("Parthenocarpy: auxin develops the ovary into a seedless fruit.", "إثمار عذري: الأوكسين يحول المبيض إلى ثمرة بلا بذور.");
      out.innerHTML = "<span>" + esc(msg) + "</span>";
    });
  };
})();

/* ---------- Sec 3 Biology live simulations (part 2): menstrual cycle, antibodies, immune response,
   DNA builder, replication fork, transcription, translation, faults and folds, igneous rocks. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit, P = E.s3bkit;
  var txt = K.txt, hint = P.hint, box = P.box, sl = P.sl, clamp = P.clamp, r1 = P.r1, btn = P.btn, row = P.row, meter = P.meter;

  /* =========================================================
     10. sec3bio_menstrual - 28-day cycle: hormones, ovary, endometrium
     ========================================================= */
  function hFSH(d) { return 0.35 + 0.35 * Math.exp(-Math.pow((d - 12) / 3, 2)) + (d < 7 ? 0.15 : 0); }
  function hLH(d) { return 0.12 + 0.85 * Math.exp(-Math.pow((d - 14) / 1.2, 2)); }
  function hEst(d) { return 0.2 + 0.55 * Math.exp(-Math.pow((d - 12.5) / 2.5, 2)) + 0.3 * Math.exp(-Math.pow((d - 21) / 3.5, 2)); }
  function hPro(d) { return 0.08 + 0.75 * Math.exp(-Math.pow((d - 21) / 3.5, 2)); }
  L.sec3bio_menstrual = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the day slider (or press Play) through the 28-day cycle. Watch the hormones, the ovary and the uterine lining. Try it with fertilization on.",
      "اسحب منزلق اليوم (أو اضغط تشغيل) خلال الدورة ذات ٢٨ يومًا، وراقب الهرمونات والمبيض وبطانة الرحم، ثم جرب مع حدوث الإخصاب."));
    var S = K.make(host, 0.6, 400);
    var c0 = box(host, L._slider(t("Day", "اليوم"), 1, 28, 1, 1, "") + row(btn("smp", "▶ " + t("Play", "تشغيل"), "tg") + btn("smf", "💞 " + t("Fertilization", "إخصاب"), "tg")));
    var out = meter(host);
    var tick = L._goals(host, [t("Find a day of menstruation.", "اعثر على يوم من أيام الطمث."), t("Find the day of ovulation (LH peak).", "اعثر على يوم التبويض (قمة LH)."),
      t("Find the day the corpus luteum makes most progesterone.", "اعثر على يوم إفراز الجسم الأصفر أكبر قدر من البروجسترون."), t("Turn on fertilization and reach day 28: no menstruation.", "شغّل الإخصاب وصل إلى اليوم ٢٨: لا طمث.")], done);
    var day = 1, play = false, fert = false, acc = 0, inp;
    inp = sl(c0, 0, function (v) { return n(v); }, function (v) { day = v; check(); });
    c0.querySelector("#smp").onclick = function () { play = !play; this.classList.toggle("on", play); };
    c0.querySelector("#smf").onclick = function () { fert = !fert; this.classList.toggle("on", fert); check(); };
    function pro(d) { return fert && d > 14 ? Math.max(hPro(d), 0.83) : hPro(d); }
    function check() {
      if (day <= 5 && !(fert && day > 14)) tick(0);
      if (day === 14) tick(1);
      if (!fert && day >= 20 && day <= 22) tick(2);
      if (fert && day === 28) tick(3);
    }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, d;
      if (play) { acc += dt; if (acc > 0.45) { acc = 0; day = day >= 28 ? 1 : day + 1; inp.value = day; c0.querySelector(".slv").textContent = n(day); check(); } }
      c.clearRect(0, 0, W, H);
      var gx = 36, gy = 12, gw = W - 52, gh = H * 0.48;
      function X(dd) { return gx + (dd - 1) / 27 * gw; } function Y(v) { return gy + gh - v * gh; }
      c.strokeStyle = C.muted; c.lineWidth = 1; c.strokeRect(gx, gy, gw, gh);
      [["FSH", hFSH, "#3b82f6"], ["LH", hLH, "#ef4444"], [t("oestrogen", "إستروجين"), function (x) { return fert && x > 14 ? Math.max(hEst(x), 0.5) : hEst(x); }, "#ec4899"], [t("progesterone", "بروجسترون"), pro, "#f59e0b"]].forEach(function (h, j) {
        c.strokeStyle = h[2]; c.lineWidth = 2.5; c.beginPath(); for (d = 1; d <= 28; d += 0.25) { var x = X(d), y = Y(h[1](d)); if (d > 1) c.lineTo(x, y); else c.moveTo(x, y); } c.stroke();
        txt(c, h[0], gx + 8 + j * (gw / 4), gy + 10, { c: h[2], s: 11, a: "left" });
      });
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(X(day), gy); c.lineTo(X(day), gy + gh); c.stroke();
      // ovary
      var oy = gy + gh + 22, ox = W * 0.22, rr = Math.min(W * 0.14, H * 0.18);
      c.fillStyle = "#fbcfe8"; c.beginPath(); c.ellipse(ox, oy + rr, rr * 1.2, rr, 0, 0, 7); c.fill();
      var lab;
      if (day < 14) { var fr = rr * (0.25 + 0.5 * day / 14); c.fillStyle = "#fde68a"; c.beginPath(); c.arc(ox + 6, oy + rr, fr, 0, 7); c.fill(); K.dot(c, ox + 6, oy + rr, fr * 0.3, "#ec4899"); lab = t("Graafian follicle growing", "حويصلة جراف تنمو"); }
      else if (day === 14) { c.fillStyle = "#fde68a"; c.beginPath(); c.arc(ox + 6, oy + rr, rr * 0.75, 0, 7); c.fill(); K.dot(c, ox + rr * 1.5, oy + rr * 0.4, 7, "#ec4899"); lab = t("Ovulation! ovum released", "تبويض! خرجت البويضة"); }
      else { var cl = fert ? 1 : Math.max(0.2, 1 - Math.max(0, day - 22) / 6); c.fillStyle = "#facc15"; c.beginPath(); c.arc(ox + 6, oy + rr, rr * 0.6 * cl, 0, 7); c.fill(); lab = fert ? t("Corpus luteum stays (pregnancy)", "الجسم الأصفر يبقى (حمل)") : day > 24 ? t("Corpus luteum degenerating", "الجسم الأصفر يضمحل") : t("Corpus luteum", "الجسم الأصفر"); }
      txt(c, t("Ovary", "المبيض"), ox, oy - 4, { c: C.ink, s: 12 }); txt(c, lab, ox, oy + rr * 2 + 14, { c: C.muted, s: 11 });
      // endometrium
      var ex = W * 0.5, ew = W * 0.44, ey = oy + 6, eh = H - ey - 30;
      var th = fert && day > 14 ? 1 : day <= 5 ? 0.15 : day <= 14 ? 0.15 + (day - 5) / 9 * 0.45 : day <= 24 ? 0.6 + (day - 14) / 10 * 0.4 : 1 - (day - 24) / 4 * 0.3;
      c.fillStyle = "#fecaca"; c.fillRect(ex, ey + eh * (1 - th), ew, eh * th); c.strokeStyle = C.muted; c.strokeRect(ex, ey, ew, eh);
      if (day <= 5 && !(fert && day > 14)) { for (var k = 0; k < 8; k++) K.dot(c, ex + 10 + k * ew / 8, ey + eh - 6 - (k % 3) * 6, 3, "#dc2626"); }
      txt(c, t("Uterine lining (endometrium)", "بطانة الرحم"), ex + ew / 2, ey - 6, { c: C.ink, s: 12 });
      txt(c, t("Day ", "اليوم ") + n(day), W / 2, H - 12, { c: C.ink, s: 14 });
      var ph = fert && day > 14 ? t("Pregnancy: corpus luteum keeps secreting oestrogen and progesterone; ovulation and menstruation stop.", "حمل: يستمر الجسم الأصفر في إفراز الإستروجين والبروجسترون؛ يتوقف التبويض والطمث.") :
        day <= 5 ? t("Menstruation (3-5 days): no fertilization, the corpus luteum degenerated and the lining breaks down.", "الطمث (٣-٥ أيام): لم يحدث إخصاب فاضمحل الجسم الأصفر وتهدمت البطانة.") :
        day < 14 ? t("Proliferation: FSH grows the follicle; oestrogen thickens the lining.", "التكاثر: FSH ينمّي الحويصلة والإستروجين يزيد سمك البطانة.") :
        day === 14 ? t("Ovulation: the LH surge releases the ovum on day 14.", "التبويض: قمة LH تطلق البويضة في اليوم ١٤.") : t("Luteal: the corpus luteum secretes progesterone and oestrogen; the lining thickens and gets more blood.", "الطور الأصفر: يفرز الجسم الأصفر البروجسترون والإستروجين فتزداد البطانة سمكًا وإمدادًا بالدم.");
      out.innerHTML = "<span>" + esc(ph) + "</span>";
    });
  };

  /* =========================================================
     11. sec3bio_antibody - lock-and-key binding, IgM agglutination
     ========================================================= */
  L.sec3bio_antibody = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag an antibody from the tray onto a microbe. Only an antibody whose tips match the microbe's antigen shape can bind. IgM can grab several microbes at once.",
      "اسحب جسمًا مضادًا من الصينية إلى ميكروب. لا يرتبط إلا الجسم المضاد الذي يتطابق طرفاه مع شكل أنتيجين الميكروب، ويستطيع IgM الإمساك بعدة ميكروبات معًا."));
    var S = K.make(host, 0.62, 400);
    var c0 = box(host, row(btn("sabr", "↺ " + t("New infection", "عدوى جديدة"), "ghost")));
    var out = meter(host);
    var tick = L._goals(host, [t("Bind an antibody to a matching antigen.", "اربط جسمًا مضادًا بأنتيجين مطابق."), t("Try a wrong antibody (lock and key).", "جرب جسمًا مضادًا غير مطابق (القفل والمفتاح)."),
      t("Use IgM to clump 2 or more microbes (agglutination).", "استخدم IgM لتجميع ميكروبين أو أكثر (تلازن)."), t("Neutralize every microbe.", "عطّل كل الميكروبات.")], done);
    var COL = { tri: "#ef4444", sq: "#3b82f6", ci: "#22c55e" }, mic, tray, drag = null, msg = "";
    function reset() {
      mic = []; ["tri", "tri", "tri", "sq", "sq", "ci", "ci"].forEach(function (s) { mic.push({ s: s, x: K.rnd(0.1, 0.9), y: K.rnd(0.12, 0.6), vx: K.rnd(-0.03, 0.03), vy: K.rnd(-0.03, 0.03), b: false, cl: null }); });
      msg = "";
    }
    reset();
    c0.querySelector("#sabr").onclick = reset;
    tray = [["tri", "IgG"], ["sq", "IgG"], ["ci", "IgG"], ["tri", "IgM"]];
    function trayPos(i) { return { x: S.W * (0.14 + i * 0.24), y: S.H * 0.86 }; }
    function shape(c, s, x, y, r, col) {
      c.fillStyle = col; c.beginPath();
      if (s === "tri") { c.moveTo(x, y - r); c.lineTo(x + r, y + r * 0.8); c.lineTo(x - r, y + r * 0.8); }
      else if (s === "sq") c.rect(x - r * 0.8, y - r * 0.8, r * 1.6, r * 1.6); else c.arc(x, y, r * 0.9, 0, 7);
      c.closePath(); c.fill();
    }
    function drawY(c, x, y, s, sc, ig) {
      var arms = ig === "IgM" ? 5 : 1;
      for (var k = 0; k < arms; k++) {
        c.save(); c.translate(x, y); c.rotate(ig === "IgM" ? k / 5 * Math.PI * 2 : 0);
        c.strokeStyle = "#a855f7"; c.lineWidth = 4 * sc; c.lineCap = "round"; c.beginPath(); c.moveTo(0, ig === "IgM" ? -6 * sc : 14 * sc); c.lineTo(0, -6 * sc - (ig === "IgM" ? 8 * sc : 0)); c.lineTo(-9 * sc, -18 * sc - (ig === "IgM" ? 8 * sc : 0)); c.moveTo(0, -6 * sc - (ig === "IgM" ? 8 * sc : 0)); c.lineTo(9 * sc, -18 * sc - (ig === "IgM" ? 8 * sc : 0)); c.stroke();
        var off = ig === "IgM" ? 8 * sc : 0; shape(c, s, -9 * sc, -22 * sc - off, 3.5 * sc, COL[s]); shape(c, s, 9 * sc, -22 * sc - off, 3.5 * sc, COL[s]);
        c.restore();
      }
    }
    S.drag({
      down: function (p) { for (var i = 0; i < tray.length; i++) { var q = trayPos(i); if (Math.hypot(p.x - q.x, p.y - q.y) < 30) { drag = { s: tray[i][0], ig: tray[i][1], x: p.x, y: p.y }; return true; } } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () {
        if (!drag) return; var W = S.W, H = S.H, hit = null, best = 40;
        mic.forEach(function (m) { if (m.b) return; var d = Math.hypot(m.x * W - drag.x, m.y * H - drag.y); if (d < best) { best = d; hit = m; } });
        if (hit) {
          if (hit.s !== drag.s) { tick(1); msg = t("No fit: the antibody's binding sites do not match this antigen's shape.", "لا تطابق: موقعا ارتباط الجسم المضاد لا يناسبان شكل هذا الأنتيجين."); E.toast(msg); }
          else if (drag.ig === "IgM") {
            var grp = mic.filter(function (m) { return !m.b && m.s === drag.s && Math.hypot(m.x * W - drag.x, m.y * H - drag.y) < Math.min(W, H) * 0.35; });
            grp.forEach(function (m) { m.b = true; m.cl = { x: drag.x / W, y: drag.y / H }; });
            if (grp.length >= 2) { tick(2); msg = t("Agglutination: IgM clumped ", "تلازن: جمّع IgM ") + n(grp.length) + t(" microbes - easy for phagocytes.", " ميكروبات - يسهل على البلعميات ابتلاعها."); } else msg = t("IgM bound one microbe. Drop it among several of the same kind.", "ارتبط IgM بميكروب واحد. أسقطه وسط عدة ميكروبات من النوع نفسه.");
            tick(0);
          } else { hit.b = true; hit.cl = null; tick(0); msg = t("Bound! Lock and key: the antigen is neutralized.", "ارتبط! القفل والمفتاح: تعطّل الأنتيجين."); }
          if (mic.every(function (m) { return m.b; })) tick(3);
        }
        drag = null;
      },
      hover: function (p) { for (var i = 0; i < tray.length; i++) { var q = trayPos(i); if (Math.hypot(p.x - q.x, p.y - q.y) < 30) return true; } return false; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, r = Math.max(14, Math.min(W, H) * 0.045);
      c.clearRect(0, 0, W, H);
      c.fillStyle = "rgba(239,68,68,.06)"; c.fillRect(0, 0, W, H * 0.72);
      mic.forEach(function (m) {
        if (!m.b) { m.x += m.vx * dt; m.y += m.vy * dt; if (m.x < 0.06 || m.x > 0.94) m.vx *= -1; if (m.y < 0.08 || m.y > 0.64) m.vy *= -1; }
        else if (m.cl) { m.x += (m.cl.x - m.x) * dt * 2; m.y += (m.cl.y - m.y) * dt * 2; }
        var x = m.x * W, y = m.y * H;
        c.fillStyle = m.b ? "rgba(148,163,184,.6)" : "#fde68a"; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); c.strokeStyle = "#a16207"; c.lineWidth = 1.5; c.stroke();
        for (var k = 0; k < 5; k++) { var a = k / 5 * 6.283; shape(c, m.s, x + Math.cos(a) * r, y + Math.sin(a) * r, 5, COL[m.s]); }
        if (m.b && !m.cl) drawY(c, x, y - r - 2, m.s, 0.8, "IgG");
      });
      c.fillStyle = C.card; K.rr(c, 6, H * 0.74, W - 12, H * 0.24, 10); c.fill();
      tray.forEach(function (tr, i) { var q = trayPos(i); drawY(c, q.x, q.y + 8, tr[0], 1.2, tr[1]); txt(c, tr[1], q.x, H * 0.96, { c: C.muted, s: 11 }); });
      if (drag) drawY(c, drag.x, drag.y, drag.s, 1.2, drag.ig);
      var left = mic.filter(function (m) { return !m.b; }).length;
      txt(c, t("Free microbes: ", "ميكروبات حرة: ") + n(left), W - 12, 14, { c: C.ink, s: 13, a: "right" });
      out.innerHTML = "<span>" + esc(msg || t("Each antibody has 2 identical antigen-binding sites (variable regions).", "لكل جسم مضاد موقعان متماثلان لارتباط الأنتيجين (المنطقة المتغيرة).")) + "</span>";
    });
  };

  /* =========================================================
     12. sec3bio_response - primary and secondary immune responses
     ========================================================= */
  L.sec3bio_response = function (host, cfg, done) {
    host.innerHTML = hint(t("Press 'Infect' to let a pathogen in and watch the days pass. After recovery, infect again with the same pathogen and compare.",
      "اضغط 'عدوى' ليدخل الممرض وراقب الأيام تمر، وبعد الشفاء أعد العدوى بالممرض نفسه وقارن."));
    var S = K.make(host, 0.55, 360);
    var c0 = box(host, row(btn("srin", "🦠 " + t("Infect (measles virus)", "عدوى (فيروس الحصبة)"), "primary") + btn("srrs", "↺ " + t("New person", "شخص جديد"), "ghost")));
    var out = meter(host);
    var tick = L._goals(host, [t("First infection: symptoms appear.", "العدوى الأولى: تظهر الأعراض."), t("Recover: memory cells are formed.", "اشفَ: تتكون خلايا الذاكرة."),
      t("Second infection: no symptoms.", "العدوى الثانية: لا أعراض."), t("Secondary antibody peak is 3 times the primary or more.", "قمة الأجسام المضادة الثانوية ٣ أضعاف الأولية أو أكثر.")], done);
    var day, P, ex, hist, sym, peak1, peak2, mem;
    function reset() { day = 0; P = 0; ex = []; hist = []; sym = false; peak1 = 0; peak2 = 0; mem = false; }
    reset();
    function Ab(d) { var s = 0; ex.forEach(function (e) { var tau = d - e.t; if (tau < 0) return; var c = e.sec ? 5 : 10, w = e.sec ? 2.5 : 4, pk = e.sec ? 100 : 30, g = Math.exp(-Math.pow((tau - c) / w, 2)); s += tau < c ? pk * g : pk * (0.25 * Math.exp(-(tau - c) / 40) + 0.75 * g); }); return s; }
    c0.querySelector("#srin").onclick = function () {
      if (day > 56) { E.toast(t("Out of time on the chart: start a new person.", "انتهى الوقت على الرسم: ابدأ بشخص جديد.")); return; }
      if (P > 1) { E.toast(t("Wait until the body has recovered.", "انتظر حتى يشفى الجسم.")); return; }
      ex.push({ t: day, sec: mem }); P = 1;
    };
    c0.querySelector("#srrs").onclick = reset;
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      if (ex.length && day < 60) {
        var step = dt * 4; day += step; var A = Ab(day);
        if (P > 0) { P += (0.55 * P - 0.06 * A * P) * step; if (P < 0.02) P = 0; P = Math.min(P, 300); }
        var last = ex[ex.length - 1];
        if (P > 6) { sym = true; if (!last.sec) tick(0); }
        if (!last.sec) peak1 = Math.max(peak1, A); else peak2 = Math.max(peak2, A - (Ab(last.t)));
        if (!last.sec && P === 0 && day - last.t > 8) { if (!mem) { mem = true; tick(1); E.speak(t("Recovered. Memory cells remain.", "شُفي. تبقى خلايا الذاكرة.")); } }
        if (last.sec && day - last.t > 10) { if (!last.sym) tick(2); if (peak1 > 0 && peak2 >= 3 * peak1) tick(3); }
        if (last.sec && P > 6) last.sym = true;
        hist.push([day, A, P]);
      }
      c.clearRect(0, 0, W, H);
      var gx = 40, gy = 16, gw = W - 60, gh = H - 56;
      function X(d) { return gx + d / 60 * gw; }
      c.strokeStyle = C.muted; c.lineWidth = 1; c.strokeRect(gx, gy, gw, gh);
      for (var d = 0; d <= 60; d += 10) txt(c, n(d), X(d), gy + gh + 12, { c: C.muted, s: 10 });
      txt(c, t("days", "أيام"), gx + gw / 2, H - 10, { c: C.muted, s: 11 });
      c.fillStyle = "rgba(239,68,68,.08)"; c.fillRect(gx, gy, gw, gh * 0.5);
      c.lineWidth = 2.5; c.strokeStyle = "#a855f7"; c.beginPath(); hist.forEach(function (h, i) { var x = X(h[0]), y = gy + gh - Math.min(1, h[1] / 120) * gh; if (i) c.lineTo(x, y); else c.moveTo(x, y); }); c.stroke();
      c.strokeStyle = "#ef4444"; c.setLineDash([4, 3]); c.beginPath(); hist.forEach(function (h, i) { var x = X(h[0]), y = gy + gh - Math.min(1, h[2] / 12) * gh; if (i) c.lineTo(x, y); else c.moveTo(x, y); }); c.stroke(); c.setLineDash([]);
      c.strokeStyle = "rgba(239,68,68,.5)"; c.beginPath(); c.moveTo(gx, gy + gh - 6 / 12 * gh); c.lineTo(gx + gw, gy + gh - 6 / 12 * gh); c.stroke();
      ex.forEach(function (e) { txt(c, "🦠", X(e.t), gy + gh - 8, { s: 14 }); });
      txt(c, t("antibodies", "الأجسام المضادة"), gx + 8, gy + 10, { c: "#a855f7", s: 11, a: "left" }); txt(c, t("pathogen (dashed) · symptoms above red line", "الممرض (متقطع) · الأعراض فوق الخط الأحمر"), gx + 8, gy + 26, { c: "#ef4444", s: 11, a: "left" });
      txt(c, t("Day ", "اليوم ") + n(Math.floor(day)) + (mem ? " · 🧠 " + t("memory cells", "خلايا ذاكرة") : ""), gx + gw - 6, gy + 10, { c: C.ink, s: 12, a: "right" });
      var last2 = ex[ex.length - 1];
      out.innerHTML = "<span>" + esc(!ex.length ? t("Healthy: no pathogen yet.", "سليم: لا ممرض بعد.") : P > 6 ? t("Symptoms! The pathogen multiplies while B and T cells are still multiplying (primary response: 5-10 days).", "أعراض! الممرض يتكاثر بينما الخلايا البائية والتائية ما زالت تتكاثر (الاستجابة الأولية: ٥-١٠ أيام).") :
        last2 && last2.sec ? t("Secondary response: memory cells make plasma cells fast - more antibodies, sooner, no symptoms.", "الاستجابة الثانوية: خلايا الذاكرة تكوّن خلايا بلازمية بسرعة - أجسام مضادة أكثر وأسرع ولا أعراض.") :
        t("Primary response building up: macrophages, helper T-cells, then plasma cells.", "الاستجابة الأولية تتكون: خلايا أكولة ثم تائية مساعدة ثم خلايا بلازمية.")) +
        (peak1 ? " · " + esc(t("peak 1 ≈ ", "القمة ١ ≈ ") + n(Math.round(peak1))) : "") + (peak2 ? " · " + esc(t("peak 2 ≈ ", "القمة ٢ ≈ ") + n(Math.round(peak2))) : "") + "</span>";
    });
  };

  /* =========================================================
     13. sec3bio_dnabuild - build the complementary strand
     ========================================================= */
  L.sec3bio_dnabuild = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag base tiles from the bottom onto the next empty place under the template strand. Then tap the correct end label of your new strand.",
      "اسحب بطاقات القواعد من الأسفل إلى المكان الفارغ التالي تحت الشريط القالب، ثم اضغط على اسم الطرف الصحيح لشريطك الجديد."));
    var S = K.make(host, 0.58, 380);
    var c0 = box(host, row(btn("sdn", "↺ " + t("New template", "قالب جديد"), "ghost")));
    var out = meter(host);
    var tick = L._goals(host, [t("Pair the first base correctly.", "زاوج القاعدة الأولى بشكل صحيح."), t("Try a wrong pairing.", "جرب تزاوجًا خاطئًا."), t("Complete the whole complementary strand.", "أكمل الشريط المكمل كله."), t("Tap the left end of the new strand to name it (3' or 5').", "اضغط الطرف الأيسر للشريط الجديد لتسميه ('3 أو '5).")], done);
    var CM = { A: "T", T: "A", G: "C", C: "G" }, COL = { A: "#ef4444", T: "#f59e0b", G: "#22c55e", C: "#3b82f6" }, tpl, got, drag = null, endAns = 0, Nb = 10;
    function reset() { tpl = []; for (var i = 0; i < Nb; i++) tpl.push("ATGC"[Math.floor(Math.random() * 4)]); got = []; endAns = 0; }
    reset();
    c0.querySelector("#sdn").onclick = reset;
    function slot(i) { var w = (S.W - 60) / Nb; return { x: 30 + w * (i + 0.5), w: w }; }
    function tile(k) { return { x: S.W * (0.2 + k * 0.2), y: S.H * 0.86 }; }
    var ends = { l: null };
    S.drag({
      down: function (p) {
        for (var k = 0; k < 4; k++) { var q = tile(k); if (Math.hypot(p.x - q.x, p.y - q.y) < 28) { drag = { b: "ATGC"[k], x: p.x, y: p.y }; return true; } }
        if (got.length === Nb && ends.l && Math.hypot(p.x - ends.l.x, p.y - ends.l.y) < 26) { endAns = endAns ? 0 : 1; }
        return false;
      },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () {
        if (!drag) return; var i = got.length; if (i >= Nb) { drag = null; return; }
        var s = slot(i), y = S.H * 0.5;
        if (Math.abs(drag.x - s.x) < s.w * 0.7 && Math.abs(drag.y - y) < 40) {
          if (CM[tpl[i]] === drag.b) { got.push(drag.b); if (i === 0) tick(0); if (got.length === Nb) tick(2); }
          else { tick(1); E.toast(tpl[i] + " " + t("pairs only with", "يرتبط فقط مع") + " " + CM[tpl[i]] + (tpl[i] === "A" || tpl[i] === "T" ? t(" (2 hydrogen bonds)", " (رابطتان هيدروجينيتان)") : t(" (3 hydrogen bonds)", " (٣ روابط هيدروجينية)"))); }
        }
        drag = null;
      },
      hover: function (p) { for (var k = 0; k < 4; k++) { var q = tile(k); if (Math.hypot(p.x - q.x, p.y - q.y) < 28) return true; } return false; }
    });
    var answered = false;
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, i, y1 = H * 0.22, y2 = H * 0.5, bh = Math.min(34, H * 0.12);
      c.clearRect(0, 0, W, H);
      c.fillStyle = "#64748b"; c.fillRect(24, y1 - bh / 2 - 8, W - 48, 6);
      if (got.length) { c.fillRect(24, y2 + bh / 2 + 2, slot(got.length - 1).x + slot(0).w / 2 - 24, 6); }
      var hb = 0;
      for (i = 0; i < Nb; i++) {
        var s = slot(i), b = tpl[i];
        c.fillStyle = COL[b]; K.rr(c, s.x - s.w * 0.4, y1 - bh / 2, s.w * 0.8, bh, 5); c.fill(); txt(c, b, s.x, y1, { c: "#fff", s: 15 });
        if (i < got.length) { var g = got[i]; c.fillStyle = COL[g]; K.rr(c, s.x - s.w * 0.4, y2 - bh / 2, s.w * 0.8, bh, 5); c.fill(); txt(c, g, s.x, y2, { c: "#fff", s: 15 }); var nb = (b === "A" || b === "T") ? 2 : 3; hb += nb; for (var k = 0; k < nb; k++) { c.strokeStyle = C.muted; c.setLineDash([3, 3]); c.beginPath(); c.moveTo(s.x - 6 + k * 6, y1 + bh / 2); c.lineTo(s.x - 6 + k * 6, y2 - bh / 2); c.stroke(); c.setLineDash([]); } }
        else if (i === got.length) { c.strokeStyle = "#f97316"; c.lineWidth = 2; c.setLineDash([4, 3]); K.rr(c, s.x - s.w * 0.4, y2 - bh / 2, s.w * 0.8, bh, 5); c.stroke(); c.setLineDash([]); }
      }
      txt(c, "5'", 14, y1, { c: C.ink, s: 13 }); txt(c, "3'", W - 14, y1, { c: C.ink, s: 13 });
      if (got.length === Nb) {
        ends.l = { x: 14, y: y2 }; var lab = endAns ? "3'" : "?";
        K.dot(c, 14, y2, 13, endAns ? "#16a34a" : "#f97316"); txt(c, lab, 14, y2, { c: "#fff", s: 12 }); txt(c, endAns ? "5'" : "", W - 14, y2, { c: C.ink, s: 13 });
        if (endAns && !answered) { answered = true; tick(3); E.toast(t("Right: the strands are antiparallel, so under 5' comes 3'.", "صحيح: الشريطان متعاكسان، فأسفل '5 يأتي '3.")); }
      }
      for (var q = 0; q < 4; q++) { var tp = tile(q), bb = "ATGC"[q]; c.fillStyle = COL[bb]; K.rr(c, tp.x - 22, tp.y - 18, 44, 36, 8); c.fill(); txt(c, bb, tp.x, tp.y, { c: "#fff", s: 17 }); }
      if (drag) { c.fillStyle = COL[drag.b]; K.rr(c, drag.x - 20, drag.y - 16, 40, 32, 8); c.fill(); txt(c, drag.b, drag.x, drag.y, { c: "#fff", s: 16 }); }
      var all = tpl.concat(got), cnt = { A: 0, T: 0, G: 0, C: 0 }; all.forEach(function (b) { cnt[b]++; });
      out.innerHTML = "<span>" + esc(t("Hydrogen bonds: ", "الروابط الهيدروجينية: ") + n(hb)) + " · <span dir=\"ltr\">A " + n(cnt.A) + " · T " + n(cnt.T) + " · G " + n(cnt.G) + " · C " + n(cnt.C) + "</span>" +
        (got.length === Nb ? " · " + esc(t("A = T and G = C in the double strand.", "في الشريط المزدوج A = T وG = C.")) : "") + "</span>";
    });
  };

  /* =========================================================
     14. sec3bio_replication - helicase, leading/lagging, ligase, repair
     ========================================================= */
  L.sec3bio_replication = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the orange helicase to the right to open the DNA. Polymerase follows. Tap the gaps between Okazaki fragments to seal them with ligase. Then try UV damage and repair.",
      "اسحب الهليكيز البرتقالي يمينًا لفتح DNA ويتبعه إنزيم البلمرة، واضغط على الفجوات بين قطع أوكازاكي لتلحمها بإنزيم الربط، ثم جرب تلف الأشعة فوق البنفسجية والإصلاح."));
    var S = K.make(host, 0.6, 380);
    var c0 = box(host, row(btn("sruv", "☀️ " + t("UV damage", "تلف بالأشعة فوق البنفسجية"), "ghost") + btn("srrp", "🛠️ " + t("Repair enzymes", "إنزيمات الإصلاح"), "ghost") + btn("srre", "↺ " + t("Reset", "إعادة"), "ghost")));
    var out = meter(host);
    var tick = L._goals(host, [t("Open the fork halfway.", "افتح الشوكة حتى المنتصف."), t("Unzip the whole molecule: leading strand complete.", "افتح الجزيء كله: يكتمل الشريط الرائد."),
      t("Seal every gap in the lagging strand with ligase.", "الحم كل فجوات الشريط المتأخر بإنزيم الربط."), t("Damage a base with UV, then repair it.", "أتلف قاعدة بالأشعة فوق البنفسجية ثم أصلحها.")], done);
    var NB = 16, hx, gaps, dmg, drag = false, fixed = false;
    function reset() { hx = 0; gaps = [false, false, false]; dmg = -1; fixed = false; }
    reset();
    c0.querySelector("#srre").onclick = reset;
    c0.querySelector("#sruv").onclick = function () { if (hx < 1) { E.toast(t("Finish replication first.", "أكمل التضاعف أولًا.")); return; } dmg = 3 + Math.floor(Math.random() * 10); fixed = false; };
    c0.querySelector("#srrp").onclick = function () { if (dmg < 0) { E.toast(t("No damage to repair.", "لا يوجد تلف لإصلاحه.")); return; } dmg = -1; fixed = true; tick(3); E.speak(t("Repaired using the undamaged strand as a template.", "أُصلح باستخدام الشريط السليم قالبًا.")); };
    function geo() { var W = S.W, H = S.H; return { x0: 30, x1: W - 30, cy: H * 0.45, sp: H * 0.3 }; }
    function gx(i) { var g = geo(); return g.x0 + (i + 0.5) / NB * (g.x1 - g.x0); }
    S.drag({
      down: function (p) { var g = geo(), x = g.x0 + hx * (g.x1 - g.x0); if (Math.hypot(p.x - x, p.y - g.cy) < 28) { drag = true; return true; }
        if (hx >= 1) for (var k = 0; k < 3; k++) { var gxp = gx(4 * (k + 1)) - (g.x1 - g.x0) / NB / 2; if (Math.abs(p.x - gxp) < 18 && Math.abs(p.y - (g.cy + g.sp * 0.5)) < 26) { gaps[k] = true; if (gaps.every(Boolean)) tick(2); } }
        return false; },
      move: function (p) { if (drag) { var g = geo(); hx = Math.max(hx, clamp((p.x - g.x0) / (g.x1 - g.x0), 0, 1)); if (hx >= 0.5) tick(0); if (hx >= 0.99) { hx = 1; tick(1); } } },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(), x = g.x0 + hx * (g.x1 - g.x0); return Math.hypot(p.x - x, p.y - g.cy) < 28; }
    });
    var seq = "ATGCGTACCATGGCTA";
    var CM = { A: "T", T: "A", G: "C", C: "G" };
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), i, cw = (g.x1 - g.x0) / NB, open = Math.floor(hx * NB + 0.001);
      c.clearRect(0, 0, W, H);
      for (i = 0; i < NB; i++) {
        var x = gx(i), o = i < open, top = o ? g.cy - g.sp * 0.5 : g.cy - 10, bot = o ? g.cy + g.sp * 0.5 : g.cy + 10;
        c.fillStyle = "#64748b"; c.fillRect(x - cw / 2, top - 14, cw, 4); c.fillStyle = "#94a3b8"; c.fillRect(x - cw / 2, bot + 10, cw, 4);
        txt(c, seq[i], x, top - 2, { c: C.ink, s: 11 }); txt(c, CM[seq[i]], x, bot + 2, { c: C.ink, s: 11 });
        if (o) {
          // leading (new strand under the top template) - continuous
          var nb = CM[seq[i]], dm = dmg === i;
          c.fillStyle = dm ? "#f43f5e" : "#16a34a"; c.fillRect(x - cw / 2, top + 14, cw, 4); txt(c, dm ? "✕" : nb, x, top + 26, { c: dm ? "#f43f5e" : "#16a34a", s: 11 });
          // lagging: fragments complete in blocks of 4
          var blk = Math.floor(i / 4), blkDone = open >= (blk + 1) * 4 || hx >= 1;
          if (blkDone) { c.fillStyle = "#22c55e"; var gapL = i % 4 === 0 && blk > 0 && !gaps[blk - 1]; c.fillRect(x - cw / 2 + (gapL ? 4 : 0), bot - 18, cw - (gapL ? 4 : 0), 4); txt(c, seq[i], x, bot - 28, { c: "#22c55e", s: 11 }); }
        } else { c.strokeStyle = C.muted; c.lineWidth = 1; c.beginPath(); c.moveTo(x, top - 10); c.lineTo(x, bot + 10); c.stroke(); }
      }
      for (var k = 0; k < 3; k++) if (hx >= 1 && !gaps[k]) { var gp = gx(4 * (k + 1)) - cw / 2; K.dot(c, gp, g.cy + g.sp * 0.5 - 16, 7, "#f97316"); txt(c, "!", gp, g.cy + g.sp * 0.5 - 16, { c: "#fff", s: 10 }); }
      var hxp = g.x0 + hx * (g.x1 - g.x0); K.dot(c, hxp, g.cy, 16, "#f97316", "#fff"); txt(c, "H", hxp, g.cy, { c: "#fff", s: 13 });
      txt(c, t("leading strand 5' → 3' (continuous)", "الشريط الرائد '5 ← '3 (متصل)"), W / 2, 14, { c: "#16a34a", s: 12 });
      txt(c, t("lagging strand: Okazaki fragments", "الشريط المتأخر: قطع أوكازاكي"), W / 2, H - 12, { c: "#22c55e", s: 12 });
      out.innerHTML = "<span>" + esc(dmg >= 0 ? t("UV damaged a base on one strand. Repair enzymes can rebuild it from the partner strand.", "أتلفت الأشعة قاعدة في أحد الشريطين، ويمكن لإنزيمات الإصلاح إعادة بنائها من الشريط المقابل.") :
        hx >= 1 && !gaps.every(Boolean) ? t("Replication done, but the lagging strand still has gaps between fragments: tap them (ligase).", "انتهى التضاعف لكن ما زالت هناك فجوات بين القطع في الشريط المتأخر: اضغط عليها (إنزيم الربط).") :
        hx >= 1 ? (fixed ? t("Two identical DNA molecules - and the damage was repaired.", "جزيئان متطابقان من DNA - وأُصلح التلف.") : t("Two identical DNA molecules, each with one old and one new strand.", "جزيئان متطابقان من DNA، في كل منهما شريط قديم وآخر جديد.")) :
        t("Helicase breaks hydrogen bonds; DNA polymerase adds nucleotides only to the 3' end.", "الهليكيز يكسر الروابط الهيدروجينية، وإنزيم البلمرة يضيف النيوكليوتيدات إلى الطرف '3 فقط.")) + "</span>";
    });
  };

  /* =========================================================
     15. sec3bio_transcribe - drag RNA polymerase along the gene
     ========================================================= */
  L.sec3bio_transcribe = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag RNA polymerase onto the promoter (grey), then along the gene to build mRNA. Tap the start codon and a stop codon on the finished mRNA.",
      "اسحب إنزيم بلمرة RNA إلى المحفز (الرمادي) ثم على طول الجين لبناء mRNA، واضغط على كودون البدء وكودون الإيقاف في mRNA الناتج."));
    var S = K.make(host, 0.55, 360);
    var out = meter(host);
    var tick = L._goals(host, [t("Bind RNA polymerase to the promoter.", "اربط إنزيم بلمرة RNA بالمحفز."), t("Transcribe the whole gene.", "انسخ الجين كله."), t("Tap the start codon.", "اضغط على كودون البدء."), t("Tap the stop codon.", "اضغط على كودون الإيقاف.")], done);
    var TPL = "TACCGAAAGCCTATT", MR = { T: "A", A: "U", C: "G", G: "C" }, PR = 4, NB = 15, px = -1, bound = false, drag = false, prog = 0, sel = {}, py0 = 0;
    var AA = { AUG: t("Met (start)", "ميثيونين (بدء)"), GCU: t("Ala", "ألانين"), UUC: t("Phe", "فينيل ألانين"), GGA: t("Gly", "جلايسين"), UAA: t("stop", "إيقاف") };
    function cw() { return (S.W - 40) / (NB + PR); } function bx(i) { return 20 + (i + PR + 0.5) * cw(); }
    function pos() { return px < 0 ? { x: S.W * 0.12, y: S.H * 0.82 } : { x: px, y: S.H * 0.42 }; }
    S.drag({
      down: function (p) {
        var q = pos(); if (Math.hypot(p.x - q.x, p.y - q.y) < 32) { drag = true; return true; }
        if (prog >= NB) { for (var k = 0; k < 5; k++) { var x0 = bx(k * 3) - cw() / 2, x1 = bx(k * 3 + 2) + cw() / 2; if (p.x > x0 && p.x < x1 && Math.abs(p.y - S.H * 0.62) < 24) { sel[k] = 1; if (k === 0) tick(2); if (k === 4) tick(3); } } }
        return false;
      },
      move: function (p) {
        if (!drag) return;
        if (!bound) { px = p.x; if (p.x > 20 && p.x < 20 + PR * cw() && Math.abs(p.y - S.H * 0.42) < 40) { bound = true; px = 20 + PR * cw() * 0.5; tick(0); E.speak(t("RNA polymerase bound to the promoter.", "ارتبط إنزيم بلمرة RNA بالمحفز.")); } else py0 = p.y; }
        else { px = clamp(Math.max(px, p.x), 20, bx(NB - 1) + cw() / 2); prog = Math.max(prog, clamp(Math.floor((px - 20) / cw()) - PR + 1, 0, NB)); if (prog >= NB) tick(1); }
      },
      up: function () { drag = false; if (!bound) px = -1; },
      hover: function (p) { var q = pos(); return Math.hypot(p.x - q.x, p.y - q.y) < 32; }
    });
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, w = cw(), i, yT = H * 0.3, yR = H * 0.62, bh = Math.min(28, w * 0.9);
      c.clearRect(0, 0, W, H);
      c.fillStyle = "rgba(148,163,184,.35)"; c.fillRect(20, yT - bh, PR * w, bh * 2); txt(c, t("promoter", "المحفز"), 20 + PR * w / 2, yT - bh - 10, { c: C.muted, s: 11 });
      for (i = 0; i < NB; i++) {
        var x = bx(i); c.fillStyle = "#64748b"; K.rr(c, x - w * 0.42, yT - bh / 2, w * 0.84, bh, 4); c.fill(); txt(c, TPL[i], x, yT, { c: "#fff", s: Math.min(14, w * 0.6) });
        if (i < prog) { var r = MR[TPL[i]]; c.fillStyle = r === "U" ? "#a855f7" : "#14b8a6"; K.rr(c, x - w * 0.42, yR - bh / 2, w * 0.84, bh, 4); c.fill(); txt(c, r, x, yR, { c: "#fff", s: Math.min(14, w * 0.6) }); }
      }
      txt(c, "3'", 10, yT, { c: C.ink, s: 12 }); txt(c, "5'", W - 10, yT, { c: C.ink, s: 12 }); if (prog) txt(c, "5'", bx(0) - w * 0.7, yR, { c: C.ink, s: 12 });
      if (prog >= NB) for (var k = 0; k < 5; k++) {
        var x0 = bx(k * 3) - w / 2, cod = MR[TPL[k * 3]] + MR[TPL[k * 3 + 1]] + MR[TPL[k * 3 + 2]];
        c.strokeStyle = sel[k] ? (k === 0 ? "#16a34a" : k === 4 ? "#ef4444" : "#f59e0b") : C.muted; c.lineWidth = sel[k] ? 3 : 1; c.strokeRect(x0 + 1, yR - bh / 2 - 4, 3 * w - 2, bh + 8);
        txt(c, AA[cod], x0 + 1.5 * w, yR + bh / 2 + 16, { c: C.ink, s: 10 });
      }
      var q = pos(); c.fillStyle = "rgba(20,184,166,.55)"; c.beginPath(); c.ellipse(q.x, q.y, 28, 34, 0, 0, 7); c.fill(); c.strokeStyle = "#0f766e"; c.lineWidth = 2; c.stroke(); txt(c, "RNA pol", q.x, q.y, { c: "#fff", s: 10 });
      out.innerHTML = "<span>" + esc(!bound ? t("RNA polymerase must first bind the promoter at the start of the gene.", "يجب أن يرتبط إنزيم بلمرة RNA أولًا بالمحفز في بداية الجين.") : prog < NB ? t("Template read 3' → 5'; mRNA grows 5' → 3'. A on DNA gives U on RNA.", "يُقرأ القالب '3 ← '5 وينمو mRNA '5 ← '3، وA في DNA تعطي U في RNA.") :
        t("mRNA: AUG GCU UUC GGA UAA = 5 codons → Met-Ala-Phe-Gly then stop. 4³ = 64 possible codons.", "mRNA: AUG GCU UUC GGA UAA = ٥ كودونات ← ميثيونين-ألانين-فينيل ألانين-جلايسين ثم إيقاف. 4³ = ٦٤ كودونًا ممكنًا.")) + "</span>";
    });
  };

  /* =========================================================
     16. sec3bio_translate - deliver the right tRNA to the ribosome
     ========================================================= */
  L.sec3bio_translate = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the tRNA whose anticodon matches the codon in the ribosome's site. At the stop codon, drag in the releasing factor.",
      "اسحب tRNA الذي يتطابق كودونه المضاد مع الكودون في موقع الريبوسوم، وعند كودون الإيقاف اسحب عامل الانطلاق."));
    var S = K.make(host, 0.6, 400);
    var c0 = box(host, row(btn("strr", "↺ " + t("Start again", "ابدأ من جديد"), "ghost")));
    var out = meter(host);
    var tick = L._goals(host, [t("Start with methionine (anticodon UAC).", "ابدأ بالميثيونين (كودون مضاد UAC)."), t("Try a wrong tRNA.", "جرب tRNA خاطئًا."), t("Build a chain of 4 amino acids.", "ابنِ سلسلة من ٤ أحماض أمينية."), t("Release the chain at the stop codon.", "حرر السلسلة عند كودون الإيقاف.")], done);
    var COD = ["AUG", "GCU", "UUC", "GGA", "UAA"], TR = [["UAC", "Met", "#ef4444"], ["CGA", "Ala", "#22c55e"], ["AAG", "Phe", "#3b82f6"], ["CCU", "Gly", "#a855f7"], ["GCA", "Arg", "#64748b"], ["RF", t("Release factor", "عامل الانطلاق"), "#f59e0b"]];
    var MAP = { AUG: "UAC", GCU: "CGA", UUC: "AAG", GGA: "CCU" }, pos, chain, drag = null, rel = false, slide = 0;
    function reset() { pos = 0; chain = []; rel = false; slide = 0; }
    reset();
    c0.querySelector("#strr").onclick = reset;
    function trayP(i) { return { x: S.W * (0.09 + i * 0.165), y: S.H * 0.88 }; }
    S.drag({
      down: function (p) { if (rel) return false; for (var i = 0; i < TR.length; i++) { var q = trayP(i); if (Math.hypot(p.x - q.x, p.y - q.y) < 28) { drag = { i: i, x: p.x, y: p.y }; return true; } } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () {
        if (!drag) return; var tr = TR[drag.i], rx = S.W * 0.42, ry = S.H * 0.4;
        if (Math.abs(drag.x - rx) < S.W * 0.2 && Math.abs(drag.y - ry) < S.H * 0.25) {
          var cod = COD[pos];
          if (cod === "UAA") { if (tr[0] === "RF") { rel = true; tick(3); E.speak(t("Stop codon: the releasing factor frees the protein.", "كودون إيقاف: عامل الانطلاق يحرر البروتين.")); } else { tick(1); E.toast(t("No tRNA matches a stop codon. Use the releasing factor.", "لا يوجد tRNA يطابق كودون الإيقاف. استخدم عامل الانطلاق.")); } }
          else if (MAP[cod] === tr[0]) { chain.push(tr); if (pos === 0) tick(0); pos++; slide = 1; if (chain.length >= 4) tick(2); }
          else { tick(1); E.toast(t("Anticodon ", "الكودون المضاد ") + tr[0] + t(" does not pair with ", " لا يزاوج ") + cod); }
        }
        drag = null;
      },
      hover: function (p) { for (var i = 0; i < TR.length; i++) { var q = trayP(i); if (Math.hypot(p.x - q.x, p.y - q.y) < 28) return true; } return false; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, cw = W * 0.16, rx = W * 0.42, my = H * 0.55, i;
      slide = Math.max(0, slide - dt * 3);
      c.clearRect(0, 0, W, H);
      var off = rx - (pos + 0.5) * cw + (pos > 0 ? -cw / 2 : 0) + slide * cw;
      // mRNA
      c.fillStyle = "#a855f7"; c.fillRect(off - 10, my, COD.length * cw + 20, 6);
      for (i = 0; i < COD.length; i++) txt(c, COD[i], off + (i + 0.5) * cw, my + 18, { c: C.ink, s: 13 });
      txt(c, "5'", off - 18, my + 3, { c: C.ink, s: 12 }); txt(c, "3'", off + COD.length * cw + 18, my + 3, { c: C.ink, s: 12 });
      // ribosome
      if (!rel) { c.fillStyle = "rgba(20,184,166,.35)"; c.beginPath(); c.ellipse(rx, my - H * 0.13, cw * 1.25, H * 0.15, 0, 0, 7); c.fill(); c.beginPath(); c.ellipse(rx, my + 22, cw * 1.15, H * 0.06, 0, 0, 7); c.fill();
        txt(c, "P", rx - cw / 2, my - H * 0.27, { c: C.ink, s: 13 }); txt(c, "A", rx + cw / 2, my - H * 0.27, { c: C.ink, s: 13 }); }
      // chain
      var cx = rx - cw / 2;
      chain.forEach(function (tr, k) { var x = (rel ? W * 0.18 : cx - (chain.length - 1 - k) * 26) + (rel ? k * 34 : 0), y = rel ? H * 0.14 : H * 0.14; K.dot(c, x, y, 13, tr[2], "#fff"); txt(c, tr[1], x, y, { c: "#fff", s: 9 }); if (k) { c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(x - (rel ? 21 : 13), y); c.lineTo(x - 13, y); c.stroke(); } });
      if (chain.length && !rel) { var last = chain[chain.length - 1]; c.fillStyle = last[2]; K.rr(c, cx - 18, my - 50, 36, 44, 6); c.fill(); txt(c, last[0], cx, my - 16, { c: "#fff", s: 11 }); }
      // tray
      TR.forEach(function (tr, k) { var q = trayP(k); c.fillStyle = tr[2]; K.rr(c, q.x - 24, q.y - 22, 48, 40, 7); c.fill(); txt(c, tr[0], q.x, q.y - 6, { c: "#fff", s: 12 }); txt(c, tr[0] === "RF" ? "RF" : tr[1], q.x, q.y + 9, { c: "#fff", s: 10 }); });
      if (drag) { var d = TR[drag.i]; c.fillStyle = d[2]; K.rr(c, drag.x - 24, drag.y - 22, 48, 40, 7); c.fill(); txt(c, d[0], drag.x, drag.y - 4, { c: "#fff", s: 12 }); }
      var bonds = Math.max(0, chain.length - 1);
      out.innerHTML = "<span>" + esc(rel ? t("Released polypeptide: ", "السلسلة المحررة: ") + chain.map(function (x) { return x[1]; }).join("-") + t(". Amino acids: ", ". الأحماض الأمينية: ") + n(chain.length) + t(", peptide bonds: ", "، الروابط الببتيدية: ") + n(bonds) + " (n - 1)." :
        t("Codon in the site: ", "الكودون في الموقع: ") + COD[pos] + " · " + t("amino acids: ", "الأحماض الأمينية: ") + n(chain.length) + " · " + t("peptide bonds: ", "الروابط الببتيدية: ") + n(bonds)) + "</span>";
    });
  };

  /* =========================================================
     17. sec3bio_faults - drag rock blocks into faults and folds
     ========================================================= */
  L.sec3bio_faults = function (host, cfg, done) {
    host.innerHTML = hint(t("Fault mode: drag the right block (hanging wall) up or down along the fault plane. Fold mode: drag the middle of the layers up or down.",
      "وضع الصدع: اسحب الكتلة اليمنى (الحائط العلوي) لأعلى أو لأسفل على مستوى الصدع. وضع الطية: اسحب منتصف الطبقات لأعلى أو لأسفل.")) + '<div class="seg" id="sfm"></div>';
    var S = K.make(host, 0.55, 360);
    var out = meter(host);
    var tick = L._goals(host, [t("Make a normal fault.", "كوّن صدعًا عاديًا."), t("Make a reverse fault.", "كوّن صدعًا معكوسًا."), t("Make an anticline.", "كوّن طية محدبة."), t("Make a syncline.", "كوّن طية مقعرة.")], done);
    var mode = "fault", disp = 0, bend = 0, drag = false, y0 = 0, v0 = 0;
    K.seg(host, "#sfm", [["fault", "⚡ " + t("Faults", "الصدوع")], ["fold", "〰️ " + t("Folds", "الطيات")]], mode, function (v) { mode = v; });
    var COLS = ["#fde68a", "#fdba74", "#fca5a5", "#d6d3d1", "#a8a29e"], NAMES = [t("youngest", "الأحدث"), "", "", "", t("oldest", "الأقدم")];
    S.drag({
      down: function (p) { drag = true; y0 = p.y; v0 = mode === "fault" ? disp : bend; return true; },
      move: function (p) { if (!drag) return; var d = (p.y - y0) / S.H; if (mode === "fault") { disp = clamp(v0 + d, -0.25, 0.25); if (disp > 0.12) tick(0); if (disp < -0.12) tick(1); } else { bend = clamp(v0 - d, -0.3, 0.3); if (bend > 0.15) tick(2); if (bend < -0.15) tick(3); } },
      up: function () { drag = false; },
      hover: function () { return true; }
    });
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, i, lh = H * 0.11, top = H * 0.24, bw = W * 0.86, bx = W * 0.07;
      c.clearRect(0, 0, W, H);
      if (mode === "fault") {
        var fx = bx + bw * 0.5, slope = H * 0.25, dy = disp * H;
        for (i = 0; i < 5; i++) {
          var y = top + i * lh;
          c.fillStyle = COLS[i]; c.beginPath(); c.moveTo(bx, y); c.lineTo(fx + (y - H / 2) / H * slope * 2, y); c.lineTo(fx + (y + lh - H / 2) / H * slope * 2, y + lh); c.lineTo(bx, y + lh); c.closePath(); c.fill();
          var y2 = y + dy; c.beginPath(); c.moveTo(fx + (y - H / 2) / H * slope * 2 + dy / H * slope * 2, y2); c.lineTo(bx + bw, y2); c.lineTo(bx + bw, y2 + lh); c.lineTo(fx + (y + lh - H / 2) / H * slope * 2 + dy / H * slope * 2, y2 + lh); c.closePath(); c.fill();
        }
        c.strokeStyle = C.ink; c.lineWidth = 3; c.beginPath(); c.moveTo(fx + (top - 30 - H / 2) / H * slope * 2, top - 30); c.lineTo(fx + (top + 5 * lh + 30 - H / 2) / H * slope * 2, top + 5 * lh + 30); c.stroke();
        var kind = disp > 0.12 ? "n" : disp < -0.12 ? "r" : "";
        if (kind) { var ar = kind === "n" ? "←   →" : "→   ←"; txt(c, ar, W / 2, top - 44, { c: "#ef4444", s: 20 }); txt(c, kind === "n" ? t("tension", "شد") : t("compression", "ضغط"), W / 2, top - 22, { c: "#ef4444", s: 12 }); }
        txt(c, t("foot wall", "الحائط السفلي"), bx + bw * 0.2, H - 14, { c: C.muted, s: 12 }); txt(c, t("hanging wall", "الحائط العلوي"), bx + bw * 0.8, H - 14, { c: C.muted, s: 12 });
        out.innerHTML = "<span>" + esc(kind === "n" ? t("Normal fault: tension pulled the crust apart and the hanging wall slid DOWN.", "صدع عادي: الشد باعد القشرة فانزلق الحائط العلوي لأسفل.") : kind === "r" ? t("Reverse fault: compression pushed the hanging wall UP (low angle = thrust).", "صدع معكوس: الضغط دفع الحائط العلوي لأعلى (منخفض الزاوية = دسر).") : t("A fracture with displacement is a fault; without movement it would be a joint.", "الكسر المصحوب بإزاحة صدع، وبدون حركة يكون فاصلًا.")) + "</span>";
      } else {
        for (i = 4; i >= 0; i--) {
          c.fillStyle = COLS[i]; c.beginPath();
          for (var s = 0; s <= 40; s++) { var x = bx + s / 40 * bw, b = -bend * H * Math.exp(-Math.pow((s / 40 - 0.5) / 0.22, 2)), y = top + i * lh + b; if (s) c.lineTo(x, y); else c.moveTo(x, y); }
          for (s = 40; s >= 0; s--) { var x2 = bx + s / 40 * bw, b2 = -bend * H * Math.exp(-Math.pow((s / 40 - 0.5) / 0.22, 2)), y3 = top + (i + 1) * lh + b2; c.lineTo(x2, y3); }
          c.closePath(); c.fill();
          if (NAMES[i]) txt(c, NAMES[i], bx + 30, top + i * lh + lh / 2, { c: "#44403c", s: 11 });
        }
        if (Math.abs(bend) > 0.05) { txt(c, "→", bx - 2, H / 2, { c: "#ef4444", s: 22 }); txt(c, "←", bx + bw + 2, H / 2, { c: "#ef4444", s: 22 }); }
        var k2 = bend > 0.15 ? "a" : bend < -0.15 ? "s" : "";
        c.strokeStyle = C.muted; c.setLineDash([5, 4]); c.beginPath(); c.moveTo(W / 2, 10); c.lineTo(W / 2, H - 10); c.stroke(); c.setLineDash([]);
        txt(c, t("axial plane", "المستوى المحوري"), W / 2 + 50, 16, { c: C.muted, s: 11 });
        out.innerHTML = "<span>" + esc(k2 === "a" ? t("Anticline: layers arch upward; the OLDEST layers are at the centre. A trap for oil and gas.", "طية محدبة: الطبقات مقوسة لأعلى وأقدمها في المركز، ومصيدة للبترول والغاز.") : k2 === "s" ? t("Syncline: layers sag downward; the YOUNGEST layers are at the centre.", "طية مقعرة: الطبقات منثنية لأسفل وأحدثها في المركز.") : t("Compression bends layers into folds.", "الضغط يثني الطبقات إلى طيات.")) + "</span>";
      }
    });
  };

  /* =========================================================
     18. sec3bio_rocks - cool magma: silica and cooling rate give the rock
     ========================================================= */
  L.sec3bio_rocks = function (host, cfg, done) {
    host.innerHTML = hint(t("Set the silica in the magma and where it cools. Watch the crystal size under the lens and read the rock's name.",
      "اضبط نسبة السيليكا في الصهارة ومكان تبريدها، وراقب حجم البلورات تحت العدسة واقرأ اسم الصخر.")) + '<div class="seg" id="srkc"></div>';
    var S = K.make(host, 0.55, 360);
    var c0 = box(host, L._slider(t("Silica", "السيليكا"), 40, 75, 1, 70, "%"));
    var out = meter(host);
    var tick = L._goals(host, [t("Make granite.", "كوّن الجرانيت."), t("Make basalt.", "كوّن البازلت."), t("Make obsidian (glassy).", "كوّن الأوبسيديان (زجاجي)."), t("Make dolerite (porphyritic).", "كوّن الدولريت (بورفيري).")], done);
    var si = 70, cool = "deep", seed = [];
    for (var i = 0; i < 400; i++) seed.push([Math.random(), Math.random(), Math.random()]);
    var NAMES = { ub: [t("Peridotite", "البريدوتيت"), t("Ultrabasic intrusion", "متداخل فوق قاعدي"), t("Komatiite", "الكوماتيت"), t("Komatiite (glassy)", "الكوماتيت (زجاجي)")],
      b: [t("Gabbro", "الجابرو"), t("Dolerite", "الدولريت"), t("Basalt", "البازلت"), t("Basalt (glassy)", "البازلت (زجاجي)")],
      im: [t("Diorite", "الديوريت"), t("Microdiorite", "الميكروديوريت"), t("Andesite", "الأنديزيت"), t("Andesite (glassy)", "الأنديزيت (زجاجي)")],
      ac: [t("Granite", "الجرانيت"), t("Microgranite", "الميكروجرانيت"), t("Rhyolite", "الريوليت"), t("Obsidian", "الأوبسيديان")] };
    var CI = { deep: 0, intr: 1, surf: 2, glass: 3 };
    K.seg(host, "#srkc", [["deep", t("Deep (slow)", "عميق (بطيء)")], ["intr", t("Intruded", "متداخل")], ["surf", t("Surface lava", "لافا سطحية")], ["glass", t("Very fast", "سريع جدًا")]], cool, function (v) { cool = v; check(); });
    function grp() { return si < 45 ? "ub" : si < 55 ? "b" : si <= 65 ? "im" : "ac"; }
    function check() { var g = grp(), k = CI[cool]; if (g === "ac" && k === 0) tick(0); if (g === "b" && k === 2) tick(1); if (g === "ac" && k === 3) tick(2); if (g === "b" && k === 1) tick(3); }
    sl(c0, 0, function (v) { return n(v) + "%"; }, function (v) { si = v; check(); });
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = grp(), k = CI[cool], cx = W * 0.27, cy = H * 0.5, R = Math.min(W * 0.22, H * 0.42);
      c.clearRect(0, 0, W, H);
      var light = (si - 40) / 35, base = [Math.round(40 + 190 * light), Math.round(40 + 150 * light), Math.round(45 + 150 * light)];
      c.save(); c.beginPath(); c.arc(cx, cy, R, 0, 7); c.clip();
      c.fillStyle = "rgb(" + base.join(",") + ")"; c.fillRect(cx - R, cy - R, 2 * R, 2 * R);
      if (k < 3) {
        var size = k === 0 ? R * 0.22 : k === 2 ? R * 0.035 : R * 0.04, nCr = k === 0 ? 60 : 400;
        for (var j = 0; j < nCr; j++) {
          var s = seed[j], x = cx - R + s[0] * 2 * R, y = cy - R + s[1] * 2 * R, sz = size * (0.6 + s[2] * 0.8);
          var pal = g === "ac" ? ["#fbcfe8", "#f5f5f4", "#1f2937", "#fda4af"] : g === "im" ? ["#d6d3d1", "#57534e", "#e7e5e4", "#292524"] : ["#1f2937", "#4b5563", "#a3e635", "#d1d5db"];
          c.fillStyle = pal[j % 4]; c.save(); c.translate(x, y); c.rotate(s[2] * 3); c.fillRect(-sz / 2, -sz / 3, sz, sz * 0.66); c.restore();
        }
        if (k === 1) for (var m = 0; m < 9; m++) { var s2 = seed[m + 100]; c.fillStyle = g === "ac" ? "#fbcfe8" : "#e5e7eb"; c.save(); c.translate(cx - R + s2[0] * 2 * R, cy - R + s2[1] * 2 * R); c.rotate(s2[2] * 3); c.fillRect(-R * 0.1, -R * 0.06, R * 0.2, R * 0.12); c.restore(); }
      } else { var gr = c.createLinearGradient(cx - R, cy - R, cx + R, cy + R); gr.addColorStop(0, "rgba(255,255,255,.35)"); gr.addColorStop(0.5, "rgba(255,255,255,0)"); gr.addColorStop(1, "rgba(255,255,255,.2)"); c.fillStyle = gr; c.fillRect(cx - R, cy - R, 2 * R, 2 * R); }
      c.restore(); c.strokeStyle = C.ink; c.lineWidth = 4; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.stroke();
      var name = NAMES[g][k], px = W * 0.56;
      txt(c, name, px + W * 0.2, H * 0.18, { c: C.ink, s: 18 });
      txt(c, (g === "ub" ? t("Ultrabasic", "فوق قاعدي") : g === "b" ? t("Basic", "قاعدي") : g === "im" ? t("Intermediate", "متوسط") : t("Acidic", "حامضي")) + " · " + n(si) + "% SiO₂", px + W * 0.2, H * 0.3, { c: C.muted, s: 12 });
      txt(c, [t("coarse: large crystals", "خشن: بلورات كبيرة"), t("porphyritic: large in fine", "بورفيري: كبيرة وسط دقيقة"), t("fine: tiny crystals", "دقيق: بلورات صغيرة جدًا"), t("glassy: no crystals", "زجاجي: بلا بلورات")][k], px + W * 0.2, H * 0.4, { c: C.ink, s: 13 });
      // crust section
      var sx = px, sw = W * 0.4, sy = H * 0.5, sh = H * 0.45;
      c.fillStyle = "#a8a29e"; c.fillRect(sx, sy, sw, sh); c.fillStyle = "#78716c"; c.beginPath(); c.moveTo(sx + sw * 0.4, sy); c.lineTo(sx + sw * 0.5, sy - 20); c.lineTo(sx + sw * 0.6, sy); c.fill();
      var my = [sy + sh * 0.8, sy + sh * 0.45, sy - 10, sy - 18][k];
      K.dot(c, sx + sw * 0.5, my, 9, "#f97316", "#fff");
      txt(c, t("where it cools", "مكان التبريد"), sx + sw / 2, sy + sh - 10, { c: "#fff", s: 11 });
      out.innerHTML = "<span>" + esc(t("Bowen: olivine crystallizes first, quartz last. Slow cooling deep = big crystals; fast cooling at the surface = small or no crystals.", "باون: يتبلور الأوليفين أولًا والكوارتز أخيرًا. التبريد البطيء في الأعماق = بلورات كبيرة، والسريع على السطح = بلورات صغيرة أو لا بلورات.")) + "</span>";
    });
  };

  /* ---------- part names ---------- */
  var NM = {
    sec3bio_joints: ["Joints explorer", "مستكشف المفاصل"], sec3bio_tendril: ["Tendril and Mimosa simulation", "محاكاة المحلاق والمستحية"],
    sec3bio_sarcomere: ["Sliding filaments simulation", "محاكاة انزلاق الخيوط"], sec3bio_pituitary: ["Pituitary hormones simulation", "محاكاة هرمونات النخامية"],
    sec3bio_calcium: ["Calcium, thyroid and adrenaline lab", "معمل الكالسيوم والدرقية والأدرينالين"], sec3bio_glucose: ["Blood glucose simulation", "محاكاة جلوكوز الدم"],
    sec3bio_fission: ["Amoeba culture simulation", "محاكاة مزرعة الأميبا"], sec3bio_cycle: ["Life cycle wheel", "عجلة دورة الحياة"],
    sec3bio_pollen: ["Pollination and fertilization simulation", "محاكاة التلقيح والإخصاب"], sec3bio_menstrual: ["Menstrual cycle simulation", "محاكاة الدورة الشهرية"],
    sec3bio_antibody: ["Antibody binding lab", "معمل ارتباط الأجسام المضادة"], sec3bio_response: ["Immune response graph", "رسم الاستجابة المناعية"],
    sec3bio_dnabuild: ["DNA strand builder", "بناء شريط DNA"], sec3bio_replication: ["DNA replication fork", "شوكة تضاعف DNA"],
    sec3bio_transcribe: ["Transcription simulation", "محاكاة النسخ"], sec3bio_translate: ["Translation simulation", "محاكاة الترجمة"],
    sec3bio_faults: ["Faults and folds simulation", "محاكاة الصدوع والطيات"], sec3bio_rocks: ["Igneous rock maker", "صانع الصخور النارية"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();
