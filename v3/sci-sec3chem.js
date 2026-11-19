/* EduZone Learn v3 - Chemistry, Egyptian Secondary 3 (Thanaweya Amma), 2026-2027.
   Follows the Ministry book "Chemistry for General Secondary Certificate" (full-year book, 5 chapters):
   Ch.1 Transition Elements, Ch.2 Chemical Analysis, Ch.3 Chemical Equilibrium,
   Ch.4 Electrochemistry, Ch.5 Organic Chemistry. Printed page numbers in `page`.
   Registers EZ3.SCIG.sec3chem = {units, book} (ids sec3chemu1l1 ...), plus objectives (EZ3.SCI3_OBJ),
   extra quiz items (EZ3.SCI3_EXTRA), diagrams (EZ3.sciDiagrams) and live simulations
   (EZ3.sciLabs.sec3chem_*). Same lesson shape as Prep 3 (sci3-data-a.js). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCIG = E.SCIG || {};
  var G = E.SCIG.sec3chem = { book: { en: "Chemistry for General Secondary Certificate (Third Secondary)", ar: "الكيمياء للصف الثالث الثانوي (شهادة إتمام الدراسة الثانوية العامة)" }, units: [] };

  /* ================= UNIT 1: TRANSITION ELEMENTS ================= */
  G.units.push({
    id: "sec3chemu1", num: 1, icon: "⚙️", color: "orange",
    title: { en: "Transition Elements", ar: "العناصر الانتقالية" },
    lessons: [
      {
        id: "sec3chemu1l1", icon: "🧲", page: 3,
        title: { en: "The First Transition Series: Configuration and Oxidation States", ar: "السلسلة الانتقالية الأولى: التوزيع الإلكتروني وحالات التأكسد" },
        idea: {
          official: {
            en: ["The main transition elements (d-block) lie between the s- and p-blocks. In them the d sublevel is filled in sequence; the first transition series fills 3d, from scandium " + eq("₂₁Sc [Ar] 4s² 3d¹") + " to zinc " + eq("₃₀Zn [Ar] 4s² 3d¹⁰") + ".",
              "Electrons enter the five 3d orbitals singly up to manganese " + eq("3d⁵") + ", then pair up to zinc (Hund's rule). Chromium and copper are anomalous: " + eq("₂₄Cr [Ar] 4s¹ 3d⁵") + " and " + eq("₂₉Cu [Ar] 4s¹ 3d¹⁰") + ", because half-filled and filled sublevels give extra stability.",
              "All the elements (except Sc) show the +2 state by losing the 4s electrons first; higher states lose 3d electrons in sequence. States rise from Sc to Mn (+7 in " + eq("KMnO₄") + ") then fall to +2 in zinc.",
              "Worked example: Fe²⁺ is easily oxidized to Fe³⁺ because " + eq("Fe²⁺: 3d⁶ → Fe³⁺: 3d⁵") + " gives a half-filled, more stable sublevel. But " + eq("Mn²⁺: 3d⁵") + " is already half-filled, so it is not easily oxidized to Mn³⁺.",
              "Definition: a transition element has d or f orbitals that contain electrons but are not complete, in the atomic state or in one of its oxidation states. So Cu, Ag, Au are transition elements (Cu²⁺ is " + eq("3d⁹") + "), but Zn, Cd, Hg are not (d¹⁰ in atom and ion).",
              "These elements form only about 7% of the earth's crust but have huge economic value: Sc in MiG jet alloys, Ti in implants and aircraft, V in car springs, Cr in plating, Co-60 gamma rays, Ni in batteries and as a catalyst, Cu in cables, Zn in galvanizing."],
            ar: ["تقع العناصر الانتقالية الرئيسية (عناصر الفئة d) بين الفئتين s و p، ويتتابع فيها امتلاء المستوى الفرعي d، وتملأ السلسلة الانتقالية الأولى المستوى 3d من السكانديوم " + eq("₂₁Sc [Ar] 4s² 3d¹") + " حتى الخارصين " + eq("₃₀Zn [Ar] 4s² 3d¹⁰") + ".",
              "تدخل الإلكترونات أوربيتالات 3d الخمسة فرادى حتى المنجنيز " + eq("3d⁵") + " ثم تبدأ في الازدواج حتى الخارصين (قاعدة هوند)، ويشذ الكروم والنحاس: " + eq("₂₄Cr [Ar] 4s¹ 3d⁵") + " و " + eq("₂₉Cu [Ar] 4s¹ 3d¹⁰") + " لأن المستوى نصف الممتلئ أو تام الامتلاء يعطي الذرة استقرارًا أكبر.",
              "تُظهر جميع العناصر (ما عدا السكانديوم) حالة التأكسد +2 بفقد إلكترونَي 4s أولًا، وفي حالات التأكسد الأعلى تُفقد إلكترونات 3d بالتتابع، وتزداد حالات التأكسد من Sc حتى Mn (+7 في " + eq("KMnO₄") + ") ثم تقل حتى +2 في الخارصين.",
              "مثال محلول: يسهل تأكسد أيون الحديد II إلى الحديد III لأن " + eq("Fe²⁺: 3d⁶ → Fe³⁺: 3d⁵") + " يعطي مستوى نصف ممتلئ أكثر استقرارًا، أما " + eq("Mn²⁺: 3d⁵") + " فهو نصف ممتلئ أصلًا فلا يسهل تأكسده إلى Mn³⁺.",
              "تعريف العنصر الانتقالي: هو العنصر الذي تكون فيه أوربيتالات d أو f مشغولة بالإلكترونات ولكنها غير تامة الامتلاء سواء في الحالة الذرية أو في إحدى حالات تأكسده؛ لذا تعد عناصر العملة انتقالية (Cu²⁺ هو " + eq("3d⁹") + ") بينما لا يعد Zn و Cd و Hg انتقالية.",
              "تكوّن هذه العناصر نحو 7% فقط من وزن القشرة الأرضية لكن أهميتها الاقتصادية كبيرة: السكانديوم في سبائك طائرات الميج، والتيتانيوم في زراعة الأسنان والطائرات، والفاناديوم في زنبركات السيارات، والكروم في الطلاء، والكوبلت 60 لأشعة جاما، والنيكل في البطاريات وكعامل حفاز، والنحاس في الكابلات، والخارصين في الجلفنة."]
          },
          story: {
            en: ["Omar is waiting for the metro at Attaba and imagines the 3d sublevel as a row of five empty seats on the train.",
              "Passengers board one by one and each takes an empty seat first: that is Hund's rule, single electrons until Mn has five passengers, one per seat.",
              "After that, new passengers must share seats, two per seat, until Zn's row is completely full with ten.",
              "Omar notices one passenger standing at the door (4s) quickly moves in to complete a half-full row: that is chromium, 4s¹ 3d⁵. Everyone feels more comfortable that way.",
              "When the train stops, the people near the door (4s) get off first, before anyone from the seats (3d). That is why the +2 state comes first: the 4s electrons leave before the 3d ones."],
            ar: ["عمر ينتظر المترو في محطة العتبة، ويتخيل المستوى الفرعي 3d صفًا من خمسة مقاعد فارغة في العربة.",
              "يصعد الركاب واحدًا تلو الآخر، وكل راكب يجلس في مقعد فارغ أولًا؛ هذه قاعدة هوند: إلكترونات فرادى حتى يصبح عند المنجنيز خمسة ركاب، راكب في كل مقعد.",
              "بعدها يضطر الركاب الجدد إلى المشاركة، اثنان في كل مقعد، حتى يمتلئ صف الخارصين تمامًا بعشرة ركاب.",
              "يلاحظ عمر أن راكبًا واقفًا عند الباب (4s) يسرع ليكمل صفًا نصف ممتلئ؛ هذا هو الكروم 4s¹ 3d⁵، والجميع يشعر براحة أكبر هكذا.",
              "عندما يتوقف القطار ينزل الواقفون عند الباب (4s) أولًا قبل الجالسين (3d)؛ لهذا تأتي حالة التأكسد +2 أولًا، إذ تُفقد إلكترونات 4s قبل إلكترونات 3d."]
          }
        },
        words: [
          ["Transition element", "العنصر الانتقالي", "An element whose d or f orbitals hold electrons but are incomplete in the atom or in one of its oxidation states.", "عنصر تكون أوربيتالات d أو f فيه مشغولة بالإلكترونات وغير تامة الامتلاء في الحالة الذرية أو في إحدى حالات تأكسده."],
          ["First transition series", "السلسلة الانتقالية الأولى", "The ten elements Sc to Zn in period 4 in which the 3d sublevel is filled in sequence.", "العناصر العشرة من Sc إلى Zn في الدورة الرابعة التي يتتابع فيها امتلاء المستوى الفرعي 3d."],
          ["Oxidation state", "حالة التأكسد", "The charge an atom carries after losing (or gaining) electrons in a compound, e.g. +7 for Mn in KMnO₄.", "الشحنة التي تحملها الذرة بعد فقد الإلكترونات أو اكتسابها في المركب، مثل +7 للمنجنيز في KMnO₄."],
          ["Hund's rule", "قاعدة هوند", "Electrons occupy the orbitals of a sublevel singly before they pair up.", "تشغل الإلكترونات أوربيتالات المستوى الفرعي فرادى أولًا قبل أن تزدوج."],
          ["Half-filled sublevel", "المستوى الفرعي نصف الممتلئ", "A d sublevel holding 5 electrons (d⁵); it gives extra stability, as in Cr, Mn²⁺ and Fe³⁺.", "مستوى d يحتوي على 5 إلكترونات (d⁵) ويعطي استقرارًا إضافيًا كما في Cr و Mn²⁺ و Fe³⁺."],
          ["Coinage metals", "عناصر العملة", "Cu, Ag and Au: d¹⁰ in the atom but d⁹ or d⁸ in their +2/+3 ions, so they are transition elements.", "النحاس والفضة والذهب: d¹⁰ في الذرة لكن d⁹ أو d⁸ في أيوناتها +2 و +3، لذا تعد عناصر انتقالية."]
        ],
        lab: { parts: [{ type: "sec3chem_dfill" }] },
        quiz: [
          { q: ["What is the electron configuration of chromium, ₂₄Cr?", "ما التوزيع الإلكتروني للكروم ₂₄Cr؟"],
            c: [[eq("[Ar] 4s¹ 3d⁵"), eq("[Ar] 4s¹ 3d⁵")], [eq("[Ar] 4s² 3d⁴"), eq("[Ar] 4s² 3d⁴")], [eq("[Ar] 4s² 3d⁵"), eq("[Ar] 4s² 3d⁵")], [eq("[Ar] 3d⁶"), eq("[Ar] 3d⁶")]],
            off: ["Cr is anomalous: one 4s electron moves to 3d so both 4s and 3d are half-filled, which lowers the energy of the atom.", "يشذ الكروم: ينتقل إلكترون من 4s إلى 3d فيصبح المستويان نصف ممتلئين، فتقل طاقة الذرة."],
            sto: ["The passenger at the door jumps in to complete a half-full row of seats.", "الراكب عند الباب يقفز ليكمل صفًا نصف ممتلئ من المقاعد."] },
          { q: ["Why is Fe²⁺ easily oxidized to Fe³⁺, while Mn²⁺ is not easily oxidized to Mn³⁺?", "لماذا يسهل تأكسد Fe²⁺ إلى Fe³⁺ بينما لا يسهل تأكسد Mn²⁺ إلى Mn³⁺؟"],
            c: [["Fe³⁺ (3d⁵) is half-filled and stable, while Mn²⁺ is already 3d⁵", "لأن Fe³⁺ (3d⁵) نصف ممتلئ ومستقر، بينما Mn²⁺ هو 3d⁵ أصلًا"], ["Fe is more reactive than Mn in every case", "لأن الحديد أنشط من المنجنيز في كل الأحوال"], ["Mn²⁺ has a full 3d sublevel", "لأن Mn²⁺ مستواه 3d تام الامتلاء"], ["Fe³⁺ has more unpaired electrons than any ion", "لأن Fe³⁺ به أكبر عدد من الإلكترونات المفردة من أي أيون"]],
            off: ["Fe²⁺ is 3d⁶; losing one electron gives 3d⁵ (half-filled, more stable). Mn²⁺ is 3d⁵ already; oxidizing it would break that stable arrangement (3d⁴).", "Fe²⁺ هو 3d⁶ وبفقد إلكترون يصبح 3d⁵ نصف ممتلئ أكثر استقرارًا، أما Mn²⁺ فهو 3d⁵ أصلًا وتأكسده يكسر هذا الترتيب المستقر إلى 3d⁴."],
            sto: ["Iron's row has one extra passenger who happily leaves; manganese's row is already perfect.", "صف الحديد به راكب زائد يغادر بسعادة، أما صف المنجنيز فهو مثالي أصلًا."] },
          { q: ["What is the highest oxidation state of manganese, and in which compound?", "ما أعلى حالة تأكسد للمنجنيز، وفي أي مركب؟"],
            c: [["+7, in KMnO₄", "+7 في KMnO₄"], ["+4, in MnO₂", "+4 في MnO₂"], ["+2, in MnSO₄", "+2 في MnSO₄"], ["+6, in K₂MnO₄", "+6 في K₂MnO₄"]],
            off: ["Mn is in group VIIB: it can lose its 2 (4s) + 5 (3d) electrons, so its maximum state is +7, as in potassium permanganate.", "المنجنيز في المجموعة VIIB ويمكنه فقد إلكترونَي 4s والخمسة في 3d، فأعلى حالة تأكسد له +7 كما في برمنجنات البوتاسيوم."],
            sto: ["Seven passengers can leave Mn's train: 2 from the door and 5 from the seats.", "سبعة ركاب يمكنهم مغادرة قطار المنجنيز: اثنان من الباب وخمسة من المقاعد."] },
          { q: ["Zinc (₃₀Zn) is NOT considered a transition element because...", "لا يعد الخارصين (₃₀Zn) عنصرًا انتقاليًا لأن..."],
            c: [["its 3d sublevel is full (d¹⁰) in the atom and in Zn²⁺", "مستواه 3d تام الامتلاء (d¹⁰) في الذرة وفي Zn²⁺"], ["it has no d electrons at all", "ليس به إلكترونات d إطلاقًا"], ["it shows the oxidation state +7", "يُظهر حالة التأكسد +7"], ["its 3d sublevel is half-filled", "مستواه 3d نصف ممتلئ"]],
            off: ["Zn: [Ar] 4s² 3d¹⁰ and Zn²⁺: 3d¹⁰. The d sublevel is complete in both the atom and its only ion, so it fails the definition.", "Zn: [Ar] 4s² 3d¹⁰ و Zn²⁺: 3d¹⁰، فالمستوى d تام في الذرة وفي أيونها الوحيد، فلا ينطبق عليه التعريف."],
            sto: ["Zinc's row is always completely full, whether the train is moving or stopped.", "صف الخارصين ممتلئ دائمًا سواء كان القطار يتحرك أو متوقفًا."] },
          { q: ["Copper (₂₉Cu, 4s¹ 3d¹⁰) is a transition element because...", "يعد النحاس (₂₉Cu, 4s¹ 3d¹⁰) عنصرًا انتقاليًا لأن..."],
            c: [["in Cu²⁺ the 3d sublevel is incomplete (3d⁹)", "في Cu²⁺ يكون المستوى 3d غير مكتمل (3d⁹)"], ["its 3d sublevel is complete in the atom", "مستواه 3d مكتمل في الذرة"], ["it is a good conductor of electricity", "لأنه جيد التوصيل للكهرباء"], ["it was the first metal discovered", "لأنه أول فلز اكتُشف"]],
            off: ["The definition allows the d sublevel to be incomplete in one oxidation state: Cu²⁺ = [Ar] 3d⁹.", "يكفي أن يكون المستوى d غير مكتمل في إحدى حالات التأكسد: Cu²⁺ = [Ar] 3d⁹."],
            sto: ["Copper's row looks full, but when it stops at +2 one seat is empty.", "صف النحاس يبدو ممتلئًا، لكن عند التوقف عند +2 يصبح مقعد فارغًا."] },
          { q: ["Which metal is used in dental implants and artificial joints because the body does not reject it?", "أي فلز يُستخدم في زراعة الأسنان والمفاصل الصناعية لأن الجسم لا يرفضه؟"],
            c: [["Titanium", "التيتانيوم"], ["Scandium", "السكانديوم"], ["Vanadium", "الفاناديوم"], ["Cobalt", "الكوبلت"]],
            off: ["Titanium is as rigid as steel but less dense, and it is inert, so it causes no poisoning and is not ejected by the body.", "التيتانيوم صلب كالصلب لكنه أقل كثافة، وهو خامل فلا يسبب تسممًا ولا يطرده الجسم."],
            sto: ["Omar's grandfather got a titanium implant at a dentist in Mohandessin.", "جد عمر ركّب زرعة تيتانيوم عند طبيب أسنان في المهندسين."] },
          { q: ["The electron configuration of Fe³⁺ (₂₆Fe) is...", "التوزيع الإلكتروني لأيون Fe³⁺ (₂₆Fe) هو..."],
            c: [[eq("[Ar] 3d⁵"), eq("[Ar] 3d⁵")], [eq("[Ar] 4s² 3d³"), eq("[Ar] 4s² 3d³")], [eq("[Ar] 3d⁶"), eq("[Ar] 3d⁶")], [eq("[Ar] 4s¹ 3d⁴"), eq("[Ar] 4s¹ 3d⁴")]],
            off: ["Fe: [Ar] 4s² 3d⁶. Lose the two 4s electrons first (Fe²⁺: 3d⁶), then one 3d electron: Fe³⁺ = [Ar] 3d⁵.", "Fe: [Ar] 4s² 3d⁶، تُفقد إلكترونات 4s أولًا (Fe²⁺: 3d⁶) ثم إلكترون من 3d: Fe³⁺ = [Ar] 3d⁵."],
            sto: ["Door passengers leave first, then one passenger from the seats.", "ينزل ركاب الباب أولًا ثم راكب واحد من المقاعد."] }
        ]
      },
      {
        id: "sec3chemu1l2", icon: "🔩", page: 12,
        title: { en: "General Properties of the First Transition Series", ar: "الخواص العامة لعناصر السلسلة الانتقالية الأولى" },
        idea: {
          official: {
            en: ["Atomic mass increases with atomic number (Ni, 58.7 u, is the exception: five stable isotopes). Atomic radius changes very little and is nearly constant from Cr to Cu, so these atoms replace each other easily in alloys.",
              "Two opposite factors keep the radius constant: increasing nuclear charge pulls electrons in, while increasing repulsion between 3d electrons pushes them out.",
              "Metallic properties: all are shiny solids, good conductors, with high melting and boiling points because both 4s and 3d electrons share in the strong metallic bond. Density rises with atomic number (mass grows, size stays nearly constant).",
              "Magnetism: a paramagnetic substance has unpaired electrons and is attracted to an external magnetic field; its magnetic moment rises with the number of unpaired electrons. A diamagnetic substance has all electrons paired and is repelled.",
              "Worked example: Zn (3d¹⁰) has 0 unpaired electrons, diamagnetic; Ni²⁺ (3d⁸) has 2, paramagnetic; Fe²⁺ (3d⁶) in FeCl₂ has 4. Order of magnetic moment: Zn < Ni²⁺ < Fe²⁺.",
              "Catalytic activity: 4s and 3d electrons form bonds with reacting molecules on the metal surface, raising their concentration there, weakening their bonds and lowering the activation energy: Fe in the Haber-Bosch process, Ni in hydrogenation of oils, " + eq("V₂O₅") + " in the contact process, " + eq("MnO₂") + " in decomposing " + eq("H₂O₂") + "."],
            ar: ["تزداد الكتلة الذرية بزيادة العدد الذري (ويشذ النيكل 58.7 u لأن له خمسة نظائر مستقرة)، ويتغير نصف القطر الذري تغيرًا طفيفًا ويكاد يثبت من Cr إلى Cu، لذا تحل ذراتها محل بعضها بسهولة في السبائك.",
              "يرجع ثبات نصف القطر إلى عاملين متضادين: زيادة شحنة النواة الفعالة تجذب الإلكترونات للداخل، وزيادة التنافر بين إلكترونات 3d تدفعها للخارج.",
              "الخاصية الفلزية: جميعها صلبة لامعة جيدة التوصيل، ودرجات انصهارها وغليانها مرتفعة لاشتراك إلكترونات 4s و 3d في تكوين الرابطة الفلزية القوية، وتزداد كثافتها بزيادة العدد الذري لأن الكتلة تزداد والحجم شبه ثابت.",
              "الخواص المغناطيسية: المادة البارامغناطيسية بها إلكترونات مفردة وتنجذب للمجال المغناطيسي الخارجي ويزداد عزمها المغناطيسي بزيادة عدد الإلكترونات المفردة، والمادة الديامغناطيسية كل إلكتروناتها مزدوجة فتتنافر مع المجال.",
              "مثال محلول: Zn (3d¹⁰) به صفر إلكترونات مفردة فهو ديامغناطيسي، و Ni²⁺ (3d⁸) به 2، و Fe²⁺ (3d⁶) في FeCl₂ به 4؛ فترتيب العزم المغناطيسي: Zn < Ni²⁺ < Fe²⁺.",
              "النشاط الحفزي: تكوّن إلكترونات 4s و 3d روابط مع جزيئات المتفاعلات على سطح الفلز فيزيد تركيزها عليه وتضعف روابطها وتقل طاقة التنشيط: الحديد في طريقة هابر-بوش، والنيكل في هدرجة الزيوت، و " + eq("V₂O₅") + " في طريقة التلامس، و " + eq("MnO₂") + " في تفكك " + eq("H₂O₂") + "."]
          },
          story: {
            en: ["Mariam visits a scrap-metal yard in Shubra el-Kheima with her father to buy magnets for her school project.",
              "The worker swings a big electromagnet: iron and nickel pieces jump up to it, but a copper pipe and a zinc sheet stay on the ground.",
              "Mariam thinks of electrons as dancers: when every dancer has a partner spinning the opposite way, their spins cancel and there is no magnetism (diamagnetic).",
              "Single dancers spin with nothing to cancel them, so each one is a tiny magnet. The more singles, the stronger the pull (paramagnetic).",
              "At home she drops a little MnO₂ into hydrogen peroxide from the pharmacy: it fizzes with oxygen and the black powder is still there at the end. That is a catalyst."],
            ar: ["مريم تزور ساحة خردة في شبرا الخيمة مع والدها لشراء مغناطيسات لمشروعها المدرسي.",
              "يحرك العامل مغناطيسًا كهربيًا كبيرًا فتقفز قطع الحديد والنيكل إليه، بينما تبقى ماسورة نحاس ولوح خارصين على الأرض.",
              "تتخيل مريم الإلكترونات راقصين: عندما يكون لكل راقص شريك يدور في الاتجاه المعاكس يلغي كل منهما أثر الآخر فلا مغناطيسية (ديامغناطيسية).",
              "أما الراقص المنفرد فيدور دون من يلغي أثره، فيصبح مغناطيسًا صغيرًا، وكلما زاد عدد المنفردين زادت قوة الجذب (بارامغناطيسية).",
              "في البيت تضع قليلًا من MnO₂ في ماء أكسجين من الصيدلية فيفور بالأكسجين، ويبقى المسحوق الأسود كما هو في النهاية؛ هذا هو العامل الحفاز."]
          }
        },
        words: [
          ["Paramagnetic substance", "المادة البارامغناطيسية", "A substance attracted to an external magnetic field because it has unpaired electrons.", "مادة تنجذب للمجال المغناطيسي الخارجي لوجود إلكترونات مفردة بها."],
          ["Diamagnetic substance", "المادة الديامغناطيسية", "A substance repelled by an external magnetic field because all its electrons are paired.", "مادة تتنافر مع المجال المغناطيسي الخارجي لأن جميع إلكتروناتها مزدوجة."],
          ["Magnetic moment", "العزم المغناطيسي", "A measure of magnetism; it increases with the number of unpaired electrons.", "مقياس للمغناطيسية يزداد بزيادة عدد الإلكترونات المفردة."],
          ["Catalyst", "العامل الحفاز", "A substance that changes the rate of a reaction by lowering activation energy, without being consumed.", "مادة تغير معدل التفاعل بخفض طاقة التنشيط دون أن تُستهلك."],
          ["Metallic bond", "الرابطة الفلزية", "The bond in metals; in transition metals both 4s and 3d electrons share in it, so it is strong.", "الرابطة في الفلزات، وفي العناصر الانتقالية تشترك فيها إلكترونات 4s و 3d فتكون قوية."],
          ["Atomic radius", "نصف القطر الذري", "Nearly constant from Cr to Cu because nuclear attraction and 3d repulsion balance.", "شبه ثابت من Cr إلى Cu لتعادل جذب النواة وتنافر إلكترونات 3d."]
        ],
        lab: { parts: [{ type: "sec3chem_magnet" }] },
        quiz: [
          { q: ["How many unpaired electrons does Fe³⁺ (3d⁵) have?", "كم عدد الإلكترونات المفردة في Fe³⁺ (3d⁵)؟"],
            c: [["5", "5"], ["3", "3"], ["4", "4"], ["0", "0"]],
            off: ["Five d electrons go one per orbital (Hund's rule): 5 unpaired. Fe³⁺ compounds such as FeCl₃ are strongly paramagnetic.", "تتوزع الإلكترونات الخمسة واحدًا في كل أوربيتال (قاعدة هوند): 5 إلكترونات مفردة، فمركبات Fe³⁺ مثل FeCl₃ بارامغناطيسية بقوة."],
            sto: ["Five dancers, five seats, nobody has a partner.", "خمسة راقصين وخمسة أماكن، لا أحد له شريك."] },
          { q: ["Which of these substances is diamagnetic?", "أي المواد الآتية ديامغناطيسية؟"],
            c: [["ZnSO₄", "ZnSO₄"], ["FeCl₂", "FeCl₂"], ["CoCl₂", "CoCl₂"], ["Fe₂(SO₄)₃", "Fe₂(SO₄)₃"]],
            off: ["Zn²⁺ is 3d¹⁰: all electrons paired, so ZnSO₄ is diamagnetic. Fe²⁺ (d⁶), Co²⁺ (d⁷) and Fe³⁺ (d⁵) all have unpaired electrons.", "Zn²⁺ هو 3d¹⁰ وكل إلكتروناته مزدوجة فـ ZnSO₄ ديامغناطيسي، أما Fe²⁺ (d⁶) و Co²⁺ (d⁷) و Fe³⁺ (d⁵) ففيها إلكترونات مفردة."],
            sto: ["Like Mariam's zinc sheet that stayed on the ground under the magnet.", "مثل لوح الخارصين الذي بقي على الأرض تحت المغناطيس."] },
          { q: ["Arrange in ascending order of magnetic moment: FeCl₃, Cr₂O₃, TiO₂.", "رتب تصاعديًا حسب العزم المغناطيسي: FeCl₃ و Cr₂O₃ و TiO₂."],
            c: [["TiO₂ < Cr₂O₃ < FeCl₃", "TiO₂ < Cr₂O₃ < FeCl₃"], ["FeCl₃ < Cr₂O₃ < TiO₂", "FeCl₃ < Cr₂O₃ < TiO₂"], ["Cr₂O₃ < TiO₂ < FeCl₃", "Cr₂O₃ < TiO₂ < FeCl₃"], ["TiO₂ < FeCl₃ < Cr₂O₃", "TiO₂ < FeCl₃ < Cr₂O₃"]],
            off: ["Ti⁴⁺ = 3d⁰ (0 unpaired), Cr³⁺ = 3d³ (3 unpaired), Fe³⁺ = 3d⁵ (5 unpaired). Moment grows with unpaired electrons: 0 < 3 < 5.", "Ti⁴⁺ = 3d⁰ (صفر)، و Cr³⁺ = 3d³ (3)، و Fe³⁺ = 3d⁵ (5)، والعزم يزداد بزيادة الإلكترونات المفردة: 0 < 3 < 5."],
            sto: ["Count the single dancers: none, three, five.", "عُدّ الراقصين المنفردين: لا أحد، ثلاثة، خمسة."] },
          { q: ["The atomic radius is nearly constant from Cr to Cu. This is why these elements are used in...", "نصف القطر الذري شبه ثابت من Cr إلى Cu، ولذلك تُستخدم هذه العناصر في..."],
            c: [["making alloys", "صناعة السبائك"], ["making acids", "صناعة الأحماض"], ["drying gases", "تجفيف الغازات"], ["making salt bridges", "صناعة القناطر الملحية"]],
            off: ["Atoms of nearly equal size can replace each other in a crystal lattice, which is the basis of substitutional alloys.", "الذرات المتقاربة في الحجم يمكن أن تحل محل بعضها في الشبكة البلورية، وهذا أساس السبائك الاستبدالية."],
            sto: ["Players of the same size can swap shirts without anyone noticing.", "اللاعبون المتساوون في الحجم يستطيعون تبادل القمصان دون أن يلاحظ أحد."] },
          { q: ["Transition elements have high melting and boiling points because...", "درجات انصهار وغليان العناصر الانتقالية مرتفعة لأن..."],
            c: [["both 4s and 3d electrons share in a strong metallic bond", "إلكترونات 4s و 3d تشترك في تكوين رابطة فلزية قوية"], ["they have small atomic masses", "كتلها الذرية صغيرة"], ["they form ionic bonds with themselves", "تكوّن روابط أيونية مع نفسها"], ["all their electrons are paired", "كل إلكتروناتها مزدوجة"]],
            off: ["More electrons in the 'sea' of the metallic bond (4s + 3d) make the bond stronger, so more energy is needed to melt or boil.", "زيادة عدد الإلكترونات المشتركة في الرابطة الفلزية (4s + 3d) تجعلها أقوى، فتحتاج طاقة أكبر للانصهار والغليان."],
            sto: ["More hands holding the rope make the tug-of-war team impossible to move.", "كلما زادت الأيدي الممسكة بالحبل صعب تحريك فريق شد الحبل."] },
          { q: ["Which catalyst is used in the contact process for making sulphuric acid?", "ما العامل الحفاز المستخدم في طريقة التلامس لتحضير حمض الكبريتيك؟"],
            c: [["V₂O₅", "V₂O₅"], ["Finely divided Ni", "النيكل المجزأ"], ["Finely divided Fe", "الحديد المجزأ"], ["MnO₂", "MnO₂"]],
            off: ["Vanadium pentoxide catalyses " + eq("2SO₂ + O₂ → 2SO₃") + " at 450 °C. Fe is for ammonia (Haber-Bosch), Ni for hydrogenation, MnO₂ for H₂O₂ decomposition.", "خامس أكسيد الفاناديوم يحفز " + eq("2SO₂ + O₂ → 2SO₃") + " عند 450 °س، والحديد لتحضير النشادر، والنيكل للهدرجة، و MnO₂ لتفكك H₂O₂."],
            sto: ["Each factory has its own helper: V₂O₅ works in the sulphuric acid plant.", "لكل مصنع مساعده الخاص: V₂O₅ يعمل في مصنع حمض الكبريتيك."] }
        ]
      },
      {
        id: "sec3chemu1l3", icon: "🏭", page: 16,
        title: { en: "Iron: Ores, Extraction, Alloys and Oxides", ar: "الحديد: خاماته واستخلاصه وسبائكه وأكاسيده" },
        idea: {
          official: {
            en: ["Iron " + eq("₂₆Fe [Ar] 4s² 3d⁶") + " is the fourth most abundant element in the crust (5%). Ores: hematite " + eq("Fe₂O₃") + " (blood red, Oases), limonite " + eq("2Fe₂O₃·3H₂O") + ", magnetite " + eq("Fe₃O₄") + " (black, magnetic, Eastern Desert) and siderite " + eq("FeCO₃") + ".",
              "Extraction: (1) ore dressing: crushing, sintering, concentration and roasting, which dries the ore and oxidizes S and P impurities, e.g. " + eq("2FeCO₃ → 2FeO + 2CO₂") + ". (2) Reduction by CO in the blast furnace, or by CO + H₂ (from natural gas) in the Midrex furnace: " + eq("Fe₂O₃ + 3CO → 2Fe + 3CO₂") + ". (3) Steel making in oxygen converters, open-hearth or electric furnaces.",
              "Alloys: interstitial (small atoms like C in the spaces of the iron lattice: steel, harder), substitutional (atoms of the same radius and lattice replace iron: ferrochrome in stainless steel, ferronickel) and intermetallic (a chemical compound that disobeys valency: cementite " + eq("Fe₃C") + ", duralumin).",
              "Properties: pure iron is soft, malleable, magnetic, melts at 1538 °C, density 7.87 g/cm³. " + eq("3Fe + 2O₂ → Fe₃O₄") + "; with dilute acids it gives iron(II) salts: " + eq("Fe + H₂SO₄ → FeSO₄ + H₂") + "; concentrated HNO₃ makes it passive (thin oxide layer).",
              "Oxides: FeO (black, from heating iron(II) oxalate without air), " + eq("Fe₂O₃") + " (red pigment, from heating Fe(OH)₃ above 200 °C) and " + eq("Fe₃O₄") + " (mixed oxide: with hot concentrated acid it gives both Fe²⁺ and Fe³⁺ salts).",
              "Worked example: % Fe in hematite = " + eq("112 ÷ 160 × 100 = 70%") + "; in siderite = " + eq("56 ÷ 116 × 100 ≈ 48.3%") + ", which is why siderite is roasted first."],
            ar: ["الحديد " + eq("₂₆Fe [Ar] 4s² 3d⁶") + " رابع العناصر انتشارًا في القشرة الأرضية (5%)، ومن خاماته: الهيماتيت " + eq("Fe₂O₃") + " (أحمر دموي، الواحات) والليمونيت " + eq("2Fe₂O₃·3H₂O") + " والماجنتيت " + eq("Fe₃O₄") + " (أسود مغناطيسي، الصحراء الشرقية) والسيدريت " + eq("FeCO₃") + ".",
              "الاستخلاص: (1) تجهيز الخام بالتكسير والتلبيد والتركيز والتحميص الذي يجفف الخام ويؤكسد شوائب الكبريت والفوسفور، مثل " + eq("2FeCO₃ → 2FeO + 2CO₂") + ". (2) الاختزال بغاز CO في الفرن العالي أو بخليط CO و H₂ (من الغاز الطبيعي) في فرن مدركس: " + eq("Fe₂O₃ + 3CO → 2Fe + 3CO₂") + ". (3) إنتاج الصلب في المحولات الأكسجينية أو الأفران المفتوحة أو الأفران الكهربية.",
              "السبائك: بينية (ذرات صغيرة كالكربون في الفراغات بين ذرات الحديد: الصلب، أكثر صلادة)، واستبدالية (ذرات لها نفس نصف القطر والشبكة تحل محل الحديد: الحديد-كروم في الصلب الذي لا يصدأ، والحديد-نيكل)، ومركبات بين فلزية (مركب كيميائي لا يخضع لقوانين التكافؤ: السمنتيت " + eq("Fe₃C") + " والديورالومين).",
              "الخواص: الحديد النقي لين قابل للطرق والسحب ومغناطيسي، ينصهر عند 1538 °س وكثافته 7.87 جم/سم³، و " + eq("3Fe + 2O₂ → Fe₃O₄") + "، ومع الأحماض المخففة يعطي أملاح حديد II: " + eq("Fe + H₂SO₄ → FeSO₄ + H₂") + "، وحمض النيتريك المركز يجعله خاملًا (طبقة أكسيد رقيقة).",
              "الأكاسيد: FeO (أسود، بتسخين أكسالات الحديد II بمعزل عن الهواء)، و " + eq("Fe₂O₃") + " (صبغة حمراء، بتسخين Fe(OH)₃ فوق 200 °س)، و " + eq("Fe₃O₄") + " (أكسيد مختلط يعطي مع الأحماض المركزة الساخنة ملحَي حديد II و III).",
              "مثال محلول: نسبة الحديد في الهيماتيت = " + eq("112 ÷ 160 × 100 = 70%") + " وفي السيدريت = " + eq("56 ÷ 116 × 100 ≈ 48.3%") + "؛ لذا يُحمّص السيدريت أولًا."]
          },
          story: {
            en: ["Youssef's school trip goes to the steel plant at Ain Sokhna, where natural gas from the Mediterranean fields feeds a tall Midrex furnace.",
              "The engineer explains: 'We do not use coke here. Natural gas becomes CO and hydrogen, and these steal the oxygen from the iron ore pellets.'",
              "At the rolling mill Youssef sees red-hot billets turning into reinforcing bars for new buildings in the New Administrative Capital.",
              "In the lab corner they show him a lattice model: tiny black carbon balls squeezed between big grey iron balls lock the layers so they cannot slide. That is steel, an interstitial alloy.",
              "His mum's kitchen sink at home is stainless steel: chromium atoms the same size as iron replace some iron atoms, a substitutional alloy that does not rust."],
            ar: ["رحلة يوسف المدرسية إلى مصنع الصلب في العين السخنة، حيث يغذي الغاز الطبيعي من حقول البحر المتوسط فرن مدركس عملاقًا.",
              "يشرح المهندس: 'لا نستخدم فحم الكوك هنا؛ يتحول الغاز الطبيعي إلى CO وهيدروجين، فيسرقان الأكسجين من كريات خام الحديد.'",
              "في مصنع الدرفلة يرى يوسف قضبانًا متوهجة تتحول إلى حديد تسليح للمباني الجديدة في العاصمة الإدارية.",
              "في ركن المعمل يرونه نموذجًا للشبكة: كرات كربون سوداء صغيرة محشورة بين كرات حديد رمادية كبيرة تمنع الطبقات من الانزلاق؛ هذا هو الصلب، سبيكة بينية.",
              "حوض مطبخ والدته من الصلب الذي لا يصدأ: ذرات كروم بحجم ذرات الحديد تحل محل بعضها، سبيكة استبدالية لا تصدأ."]
          }
        },
        words: [
          ["Hematite", "الهيماتيت", "Iron(III) oxide ore Fe₂O₃, blood red, 50-60% iron, easily reduced; found in the Oases area.", "خام أكسيد الحديد III Fe₂O₃، أحمر دموي، نسبة الحديد 50-60%، سهل الاختزال، يوجد في منطقة الواحات."],
          ["Roasting", "التحميص", "Strongly heating the ore in air to dry it and oxidize impurities such as S and P.", "تسخين الخام بشدة في الهواء لتجفيفه وأكسدة الشوائب مثل الكبريت والفوسفور."],
          ["Midrex furnace", "فرن مدركس", "A furnace that reduces iron ore with CO + H₂ (water gas) made from natural gas.", "فرن يُختزل فيه خام الحديد بخليط CO و H₂ (الغاز المائي) الناتج من الغاز الطبيعي."],
          ["Interstitial alloy", "السبيكة البينية", "Small atoms (e.g. C) sit in the spaces of the metal lattice, stopping layers sliding: harder, as in steel.", "ذرات صغيرة (مثل الكربون) تشغل الفراغات بين ذرات الفلز فتمنع انزلاق الطبقات وتزيد الصلادة كما في الصلب."],
          ["Substitutional alloy", "السبيكة الاستبدالية", "Atoms of another metal with the same radius and lattice replace some atoms of the main metal, e.g. ferrochrome.", "ذرات فلز آخر لها نفس نصف القطر والشبكة البلورية تحل محل بعض ذرات الفلز الأصلي مثل الحديد-كروم."],
          ["Intermetallic alloy", "السبيكة البينفلزية", "The metals combine chemically into a compound that disobeys valency, e.g. cementite Fe₃C.", "تتحد الفلزات كيميائيًا مكونة مركبًا لا يخضع لقوانين التكافؤ مثل السمنتيت Fe₃C."],
          ["Passivity", "الخمول", "Iron stops reacting with concentrated HNO₃ because a thin protective oxide layer forms.", "توقف الحديد عن التفاعل مع حمض النيتريك المركز لتكوّن طبقة أكسيد رقيقة واقية."]
        ],
        lab: { parts: [{ type: "sec3chem_furnace" }, {
          type: "sort",
          prompt: ["Tap an alloy, then tap its type.", "اضغط على سبيكة، ثم اضغط على نوعها."],
          bins: [["i", "⚫", "Interstitial", "بينية"], ["s", "🔁", "Substitutional", "استبدالية"], ["m", "🧪", "Intermetallic", "بين فلزية"]],
          items: [[["Steel (Fe + C)", "الصلب (Fe + C)"], "i"], [["Ferrochrome (stainless steel)", "الحديد-كروم (الصلب الذي لا يصدأ)"], "s"], [["Ferronickel", "الحديد-نيكل"], "s"], [["Copper-gold", "النحاس-ذهب"], "s"],
            [["Cementite Fe₃C", "السمنتيت Fe₃C"], "m"], [["Duralumin (Al-Cu)", "الديورالومين (Al-Cu)"], "m"], [["Au₂Pb", "Au₂Pb"], "m"]]
        }] },
        quiz: [
          { q: ["Calculate the percentage of iron in pure hematite Fe₂O₃ (Fe = 56, O = 16).", "احسب النسبة المئوية للحديد في الهيماتيت النقي Fe₂O₃ (Fe = 56، O = 16)."],
            c: [["70%", "70%"], ["35%", "35%"], ["72.4%", "72.4%"], ["56%", "56%"]],
            off: ["Molar mass = 2×56 + 3×16 = 160 g. % Fe = 112 ÷ 160 × 100 = 70%. (72.4% is magnetite Fe₃O₄.)", "الكتلة المولية = 2×56 + 3×16 = 160 جم، ونسبة الحديد = 112 ÷ 160 × 100 = 70% (أما 72.4% فهي للماجنتيت Fe₃O₄)."],
            sto: ["In every 160 kg of hematite at the plant, 112 kg is iron.", "في كل 160 كجم هيماتيت في المصنع يوجد 112 كجم حديد."] },
          { q: ["What is the reducing agent in the Midrex furnace?", "ما العامل المختزل في فرن مدركس؟"],
            c: [["A mixture of CO and H₂ from natural gas", "خليط من CO و H₂ ناتج من الغاز الطبيعي"], ["Coke only", "فحم الكوك فقط"], ["Oxygen gas", "غاز الأكسجين"], ["Limestone", "الحجر الجيري"]],
            off: [eq("2CH₄ + CO₂ + H₂O → 3CO + 5H₂") + ", then " + eq("2Fe₂O₃ + 3CO + 3H₂ → 4Fe + 3CO₂ + 3H₂O") + ".", eq("2CH₄ + CO₂ + H₂O → 3CO + 5H₂") + " ثم " + eq("2Fe₂O₃ + 3CO + 3H₂ → 4Fe + 3CO₂ + 3H₂O") + "."],
            sto: ["Natural gas from the Mediterranean feeds the Sokhna furnace.", "غاز البحر المتوسط يغذي فرن السخنة."] },
          { q: ["Iron dissolves in dilute HCl to give...", "يذوب الحديد في HCl المخفف معطيًا..."],
            c: [["iron(II) chloride and hydrogen", "كلوريد حديد II وهيدروجين"], ["iron(III) chloride and hydrogen", "كلوريد حديد III وهيدروجين"], ["iron(III) oxide and water", "أكسيد حديد III وماء"], ["no reaction (passivity)", "لا يحدث تفاعل (خمول)"]],
            off: [eq("Fe + 2HCl → FeCl₂ + H₂") + ". Iron(II) salts form, not iron(III), because the hydrogen produced reduces any Fe³⁺.", eq("Fe + 2HCl → FeCl₂ + H₂") + "؛ تتكون أملاح حديد II لا III لأن الهيدروجين الناتج يختزل أي Fe³⁺."],
            sto: ["The hydrogen bubbles keep pushing iron back to +2.", "فقاعات الهيدروجين تعيد الحديد دائمًا إلى +2."] },
          { q: ["Steel (iron + carbon) is an example of which type of alloy?", "الصلب (حديد + كربون) مثال لأي نوع من السبائك؟"],
            c: [["Interstitial", "بينية"], ["Substitutional", "استبدالية"], ["Intermetallic", "بين فلزية"], ["It is not an alloy", "ليس سبيكة"]],
            off: ["Small carbon atoms enter the spaces of the iron lattice and stop the layers slipping, so hardness increases.", "تدخل ذرات الكربون الصغيرة في الفراغات البينية لشبكة الحديد وتمنع انزلاق الطبقات فتزداد الصلادة."],
            sto: ["Small black balls jammed between big grey ones in Youssef's model.", "كرات سوداء صغيرة محشورة بين كرات رمادية كبيرة في نموذج يوسف."] },
          { q: ["Black iron oxide Fe₃O₄ reacts with hot concentrated H₂SO₄ to give...", "يتفاعل أكسيد الحديد الأسود Fe₃O₄ مع H₂SO₄ المركز الساخن معطيًا..."],
            c: [["iron(II) sulphate + iron(III) sulphate + water", "كبريتات حديد II + كبريتات حديد III + ماء"], ["iron(II) sulphate only", "كبريتات حديد II فقط"], ["iron(III) sulphate only", "كبريتات حديد III فقط"], ["iron metal and SO₃", "حديد وثالث أكسيد الكبريت"]],
            off: [eq("Fe₃O₄ + 4H₂SO₄ → FeSO₄ + Fe₂(SO₄)₃ + 4H₂O") + ": this proves it is a mixed oxide (FeO·Fe₂O₃).", eq("Fe₃O₄ + 4H₂SO₄ → FeSO₄ + Fe₂(SO₄)₃ + 4H₂O") + "؛ وهذا يثبت أنه أكسيد مختلط (FeO·Fe₂O₃)."],
            sto: ["One oxide, two families of salts: it was a mixture all along.", "أكسيد واحد يعطي عائلتين من الأملاح؛ لقد كان خليطًا من البداية."] },
          { q: ["What mass of iron can be obtained from 1 ton of ore containing 80% hematite? (Fe in Fe₂O₃ = 70%)", "ما كتلة الحديد التي يمكن الحصول عليها من 1 طن خام يحتوي على 80% هيماتيت؟ (نسبة الحديد في Fe₂O₃ = 70%)"],
            c: [["0.56 ton", "0.56 طن"], ["0.70 ton", "0.70 طن"], ["0.80 ton", "0.80 طن"], ["0.875 ton", "0.875 طن"]],
            off: ["Mass of Fe₂O₃ = 0.8 ton; mass of Fe = 0.8 × 0.70 = 0.56 ton.", "كتلة Fe₂O₃ = 0.8 طن، وكتلة الحديد = 0.8 × 0.70 = 0.56 طن."],
            sto: ["The truck carries 1 ton, but only 560 kg ends up as iron bars.", "الشاحنة تحمل طنًا لكن 560 كجم فقط تصبح قضبان حديد."] },
          { q: ["Heating iron(II) sulphate gives iron(III) oxide, sulphur dioxide and...", "تسخين كبريتات الحديد II يعطي أكسيد حديد III وثاني أكسيد الكبريت و..."],
            c: [["sulphur trioxide", "ثالث أكسيد الكبريت"], ["hydrogen", "هيدروجين"], ["water", "ماء"], ["hydrogen sulphide", "كبريتيد الهيدروجين"]],
            off: [eq("2FeSO₄ → Fe₂O₃ + SO₂ + SO₃") + " (on heating).", eq("2FeSO₄ → Fe₂O₃ + SO₂ + SO₃") + " (بالتسخين)."],
            sto: ["Two sulphur oxides leave the tube as white fumes.", "يخرج أكسيدان للكبريت من الأنبوبة كأبخرة بيضاء."] }
        ]
      }
    ]
  });

  /* ================= UNIT 2: CHEMICAL ANALYSIS ================= */
  G.units.push({
    id: "sec3chemu2", num: 2, icon: "🔬", color: "teal",
    title: { en: "Chemical Analysis", ar: "التحليل الكيميائي" },
    lessons: [
      {
        id: "sec3chemu2l1", icon: "🧪", page: 31,
        title: { en: "Qualitative Analysis: Detecting Anions (Acid Radicals)", ar: "التحليل الكيفي: الكشف عن الأنيونات (الشقوق الحامضية)" },
        idea: {
          official: {
            en: ["Qualitative analysis identifies the components of a substance; quantitative analysis finds the percentage of each. Anions are divided into three groups, each with its own reagent.",
              "Dilute HCl group: CO₃²⁻, HCO₃⁻, SO₃²⁻, S²⁻, S₂O₃²⁻, NO₂⁻. HCl is more stable than the acids of these anions, so it displaces them as gases: " + eq("Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑") + " (turns lime water milky). Carbonate gives a white ppt with MgSO₄ in the cold; bicarbonate only after heating.",
              "SO₂ (from sulphite) turns acidified K₂Cr₂O₇ paper green; H₂S (from sulphide) turns lead acetate paper black; thiosulphate gives SO₂ plus a yellow sulphur suspension; nitrite gives colourless NO that turns reddish-brown NO₂ at the mouth of the tube.",
              "Concentrated H₂SO₄ group: Cl⁻ (HCl gas, white fumes with NH₃; AgCl white ppt soluble in ammonia), Br⁻ (orange-red bromine fumes; AgBr pale yellow), I⁻ (violet iodine fumes; AgI yellow, insoluble in ammonia), NO₃⁻ (brown NO₂, increased by copper turnings; brown ring test with FeSO₄).",
              "Barium chloride group: PO₄³⁻ (white Ba₃(PO₄)₂ soluble in dilute HCl; yellow Ag₃PO₄) and SO₄²⁻ (white " + eq("BaSO₄") + " insoluble in dilute HCl; white PbSO₄ with lead acetate).",
              "Worked example: a salt gives no gas with dilute HCl, but with conc. H₂SO₄ gives violet vapour, and its solution gives a yellow ppt with AgNO₃ insoluble in ammonia: the anion is iodide."],
            ar: ["يهدف التحليل الكيفي إلى التعرف على مكونات المادة، والتحليل الكمي إلى تقدير نسبة كل مكون، وتنقسم الأنيونات إلى ثلاث مجموعات لكل منها كاشف خاص.",
              "مجموعة حمض الهيدروكلوريك المخفف: CO₃²⁻ و HCO₃⁻ و SO₃²⁻ و S²⁻ و S₂O₃²⁻ و NO₂⁻؛ فحمض HCl أكثر ثباتًا من أحماض هذه الأنيونات فيطردها في صورة غازات: " + eq("Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑") + " (يعكر ماء الجير)، والكربونات تعطي راسبًا أبيض مع MgSO₄ على البارد، والبيكربونات بعد التسخين فقط.",
              "غاز SO₂ (من الكبريتيت) يخضّر ورقة مبللة بثاني كرومات البوتاسيوم المحمضة، و H₂S (من الكبريتيد) يسوّد ورقة أسيتات الرصاص، والثيوكبريتات تعطي SO₂ وعالقًا أصفر من الكبريت، والنيتريت يعطي NO عديم اللون يتحول إلى NO₂ بني محمر عند فوهة الأنبوبة.",
              "مجموعة حمض الكبريتيك المركز: Cl⁻ (غاز HCl يكوّن سحبًا بيضاء مع النشادر، وراسب AgCl أبيض يذوب في النشادر)، و Br⁻ (أبخرة بروم برتقالية حمراء، AgBr أبيض مصفر)، و I⁻ (أبخرة يود بنفسجية، AgI أصفر لا يذوب في النشادر)، و NO₃⁻ (أبخرة NO₂ بنية تزداد بإضافة خراطة النحاس، واختبار الحلقة البنية مع FeSO₄).",
              "مجموعة كلوريد الباريوم: PO₄³⁻ (راسب Ba₃(PO₄)₂ أبيض يذوب في HCl المخفف، و Ag₃PO₄ أصفر) و SO₄²⁻ (راسب " + eq("BaSO₄") + " أبيض لا يذوب في HCl المخفف، و PbSO₄ أبيض مع أسيتات الرصاص).",
              "مثال محلول: ملح لا يتصاعد منه غاز مع HCl المخفف، ومع H₂SO₄ المركز تتصاعد أبخرة بنفسجية، ومحلوله يعطي راسبًا أصفر مع AgNO₃ لا يذوب في النشادر؛ إذن الأنيون يوديد."]
          },
          story: {
            en: ["Nour is a big fan of detective series. In the school lab in Alexandria her teacher hands her three unlabelled salts: 'You are the detective today.'",
              "First suspect: she adds dilute HCl and it fizzes. The gas turns lime water milky. A carbonate or bicarbonate! MgSO₄ gives a white ppt immediately in the cold: carbonate. Case closed.",
              "Second suspect: nothing with dilute HCl. Concentrated H₂SO₄ gives white fumes near the ammonia bottle; AgNO₃ gives a white ppt that dissolves in ammonia: chloride.",
              "Third suspect resists both acids. Barium chloride gives a white ppt that refuses to dissolve in HCl: sulphate.",
              "'Each group reagent is a first interview,' Nour says, 'and the confirmatory test is the fingerprint.'"],
            ar: ["نور من عشاق مسلسلات التحقيق، وفي معمل المدرسة بالإسكندرية يعطيها المعلم ثلاثة أملاح بلا أسماء: 'أنتِ المحققة اليوم.'",
              "المشتبه الأول: تضيف HCl المخفف فيحدث فوران، والغاز يعكر ماء الجير؛ كربونات أو بيكربونات! ومع MgSO₄ يتكون راسب أبيض فورًا على البارد: كربونات. أُغلقت القضية.",
              "المشتبه الثاني: لا شيء مع HCl المخفف، ومع H₂SO₄ المركز تتكون سحب بيضاء قرب زجاجة النشادر، ومع AgNO₃ راسب أبيض يذوب في النشادر: كلوريد.",
              "المشتبه الثالث يقاوم الحمضين، ومع كلوريد الباريوم يعطي راسبًا أبيض يرفض الذوبان في HCl: كبريتات.",
              "تقول نور: 'كاشف المجموعة هو الاستجواب الأول، والتجربة التأكيدية هي البصمة.'"]
          }
        },
        words: [
          ["Qualitative analysis", "التحليل الكيفي", "Identifying the components (ions, elements, groups) of a substance or mixture.", "التعرف على مكونات المادة أو المخلوط من أيونات أو عناصر أو مجموعات."],
          ["Acid radical (anion)", "الشق الحامضي (الأنيون)", "The negative ion of a salt, e.g. CO₃²⁻, Cl⁻, SO₄²⁻.", "الأيون السالب في الملح مثل CO₃²⁻ و Cl⁻ و SO₄²⁻."],
          ["Group reagent", "كاشف المجموعة", "The reagent that detects a whole group: dilute HCl, conc. H₂SO₄ or BaCl₂ solution.", "الكاشف الذي يكشف عن مجموعة كاملة: HCl المخفف أو H₂SO₄ المركز أو محلول BaCl₂."],
          ["Confirmatory test", "التجربة التأكيدية", "A second test on the salt solution that confirms one particular ion.", "اختبار ثانٍ على محلول الملح يؤكد وجود أيون معين."],
          ["Precipitate (ppt)", "الراسب", "An insoluble solid formed in a solution, e.g. white BaSO₄.", "مادة صلبة لا تذوب تتكون في المحلول مثل BaSO₄ الأبيض."],
          ["Brown ring test", "اختبار الحلقة البنية", "Nitrate + fresh FeSO₄ + conc. H₂SO₄ down the side: a brown ring (FeSO₄·NO) forms at the interface.", "نترات + FeSO₄ حديث التحضير + H₂SO₄ مركز على الجدار: تتكون حلقة بنية (FeSO₄·NO) عند السطح الفاصل."]
        ],
        lab: { parts: [{ type: "sec3chem_anions" }] },
        quiz: [
          { q: ["A salt fizzes with dilute HCl, and the gas turns lime water milky. Its solution gives a white ppt with MgSO₄ only after heating. The anion is...", "ملح يحدث فورانًا مع HCl المخفف والغاز يعكر ماء الجير، ومحلوله يعطي راسبًا أبيض مع MgSO₄ بعد التسخين فقط. الأنيون هو..."],
            c: [["bicarbonate HCO₃⁻", "البيكربونات HCO₃⁻"], ["carbonate CO₃²⁻", "الكربونات CO₃²⁻"], ["sulphite SO₃²⁻", "الكبريتيت SO₃²⁻"], ["nitrite NO₂⁻", "النيتريت NO₂⁻"]],
            off: ["Mg(HCO₃)₂ is soluble; heating decomposes it to white MgCO₃. A carbonate gives the white ppt in the cold.", "Mg(HCO₃)₂ يذوب في الماء، وبالتسخين يتحلل إلى MgCO₃ أبيض، أما الكربونات فتعطي الراسب على البارد."],
            sto: ["Nour waited for the burner before the white ppt appeared.", "انتظرت نور الموقد حتى ظهر الراسب الأبيض."] },
          { q: ["Which gas turns a paper wet with acidified potassium dichromate green?", "أي غاز يحول ورقة مبللة بثاني كرومات البوتاسيوم المحمضة إلى اللون الأخضر؟"],
            c: [["SO₂", "SO₂"], ["H₂S", "H₂S"], ["CO₂", "CO₂"], ["NO", "NO"]],
            off: ["SO₂ (from sulphite) reduces orange dichromate (Cr⁶⁺) to green chromium(III) sulphate.", "SO₂ (من الكبريتيت) يختزل ثاني الكرومات البرتقالية (Cr⁶⁺) إلى كبريتات كروم III خضراء."],
            sto: ["Orange to green: the sulphite's fingerprint.", "من البرتقالي إلى الأخضر: بصمة الكبريتيت."] },
          { q: ["Silver nitrate gives a yellow ppt insoluble in ammonia solution with...", "يعطي نترات الفضة راسبًا أصفر لا يذوب في محلول النشادر مع..."],
            c: [["iodide I⁻", "اليوديد I⁻"], ["chloride Cl⁻", "الكلوريد Cl⁻"], ["bromide Br⁻", "البروميد Br⁻"], ["sulphate SO₄²⁻", "الكبريتات SO₄²⁻"]],
            off: [eq("NaI + AgNO₃ → AgI↓ + NaNO₃") + ": AgI is yellow and insoluble in ammonia. AgCl (white) dissolves in ammonia; AgBr (pale yellow) dissolves slowly in conc. ammonia.", eq("NaI + AgNO₃ → AgI↓ + NaNO₃") + "؛ AgI أصفر لا يذوب في النشادر، أما AgCl الأبيض فيذوب، و AgBr الأبيض المصفر يذوب ببطء في النشادر المركز."],
            sto: ["The yellow stain that no ammonia can wash away.", "البقعة الصفراء التي لا يزيلها أي نشادر."] },
          { q: ["A white ppt with BaCl₂ that does NOT dissolve in dilute HCl indicates...", "راسب أبيض مع BaCl₂ لا يذوب في HCl المخفف يدل على..."],
            c: [["sulphate", "الكبريتات"], ["phosphate", "الفوسفات"], ["carbonate", "الكربونات"], ["nitrate", "النترات"]],
            off: [eq("Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl") + ". BaSO₄ is insoluble in dilute HCl, while barium phosphate dissolves.", eq("Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl") + "؛ BaSO₄ لا يذوب في HCl المخفف، بينما يذوب فوسفات الباريوم."],
            sto: ["The third suspect that refused to dissolve.", "المشتبه الثالث الذي رفض الذوبان."] },
          { q: ["In the brown ring test for nitrate, the brown ring is the compound...", "في اختبار الحلقة البنية للنترات تتكون الحلقة البنية من المركب..."],
            c: [["FeSO₄·NO", "FeSO₄·NO"], ["Fe₂(SO₄)₃", "Fe₂(SO₄)₃"], ["NO₂", "NO₂"], ["Cu(NO₃)₂", "Cu(NO₃)₂"]],
            off: ["Nitrate is reduced by Fe²⁺ to NO, which combines with more FeSO₄: " + eq("FeSO₄ + NO → FeSO₄·NO") + " (brown ring), which disappears on heating or shaking.", "تُختزل النترات بأيونات Fe²⁺ إلى NO الذي يتحد مع FeSO₄: " + eq("FeSO₄ + NO → FeSO₄·NO") + " (الحلقة البنية) وتختفي بالتسخين أو الرج."],
            sto: ["A brown ring that vanishes if you shake the tube: careful hands!", "حلقة بنية تختفي إذا رججت الأنبوبة؛ انتبه!"] },
          { q: ["Why do the anions of the first group react with dilute HCl?", "لماذا تتفاعل أنيونات المجموعة الأولى مع HCl المخفف؟"],
            c: [["HCl is more stable than the acids of these anions, so it displaces them as gases", "لأن HCl أكثر ثباتًا من أحماض هذه الأنيونات فيطردها في صورة غازات"], ["HCl is an oxidizing agent", "لأن HCl عامل مؤكسد"], ["These anions form insoluble chlorides", "لأن هذه الأنيونات تكوّن كلوريدات لا تذوب"], ["HCl is a weak acid", "لأن HCl حمض ضعيف"]],
            off: ["The more stable acid replaces the less stable acid, which is volatile or decomposes into a detectable gas.", "الحمض الأكثر ثباتًا يحل محل الحمض الأقل ثباتًا الذي يتطاير أو يتفكك إلى غاز يمكن الكشف عنه."],
            sto: ["The strong suspect pushes the weak one out of the room.", "المشتبه القوي يطرد الضعيف خارج الغرفة."] }
        ]
      },
      {
        id: "sec3chemu2l2", icon: "🎨", page: 39,
        title: { en: "Qualitative Analysis: Detecting Cations (Basic Radicals)", ar: "التحليل الكيفي: الكشف عن الكاتيونات (الشقوق القاعدية)" },
        idea: {
          official: {
            en: ["Cations are harder to detect: there are many, they interfere, and one metal may have more than one oxidation state. They are divided into six analytical groups by the solubility of their salts, each precipitated by a group reagent.",
              "Group 1 (Ag⁺, Hg⁺, Pb²⁺) precipitate as chlorides with dilute HCl. Group 2 precipitate as sulphides in acid medium (HCl + H₂S): " + eq("CuSO₄ + H₂S → CuS↓ + H₂SO₄") + ", black CuS soluble in hot HNO₃.",
              "Group 3 precipitate as hydroxides with NH₄OH: Al³⁺ gives white gelatinous Al(OH)₃, which dissolves in excess NaOH: " + eq("Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O") + " (sodium meta-aluminate).",
              "Fe²⁺ gives white Fe(OH)₂ that turns greenish in air; Fe³⁺ gives reddish-brown gelatinous " + eq("Fe(OH)₃") + ": " + eq("FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl") + ".",
              "Group 5 precipitate as carbonates with (NH₄)₂CO₃: Ca²⁺ gives white CaCO₃ soluble in dilute HCl and in water containing CO₂. Confirmatory: white CaSO₄ with dilute H₂SO₄, and a brick-red flame.",
              "Worked example: a solution gives a white gelatinous ppt with NaOH that dissolves when more NaOH is added: the cation is Al³⁺."],
            ar: ["الكشف عن الكاتيونات أصعب لكثرتها وتداخلها، وقد يكون للفلز أكثر من حالة تأكسد، وتنقسم إلى ست مجموعات تحليلية حسب ذوبانية أملاحها، ولكل مجموعة كاشف يرسبها.",
              "المجموعة الأولى (Ag⁺ و Hg⁺ و Pb²⁺) تترسب كلوريدات بإضافة HCl المخفف، والمجموعة الثانية تترسب كبريتيدات في وسط حمضي (HCl + H₂S): " + eq("CuSO₄ + H₂S → CuS↓ + H₂SO₄") + "، و CuS أسود يذوب في حمض النيتريك الساخن.",
              "المجموعة الثالثة تترسب هيدروكسيدات بإضافة NH₄OH: يعطي Al³⁺ راسبًا أبيض جيلاتينيًا من Al(OH)₃ يذوب في الزيادة من NaOH: " + eq("Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O") + " (ميتا ألومينات الصوديوم).",
              "يعطي Fe²⁺ راسبًا أبيض من Fe(OH)₂ يتحول إلى أبيض مخضر في الهواء، ويعطي Fe³⁺ راسبًا بنيًا محمرًا جيلاتينيًا من " + eq("Fe(OH)₃") + ": " + eq("FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl") + ".",
              "المجموعة الخامسة تترسب كربونات بإضافة (NH₄)₂CO₃: يعطي Ca²⁺ راسبًا أبيض من CaCO₃ يذوب في HCl المخفف وفي الماء المحتوي على CO₂، والتأكيد براسب CaSO₄ الأبيض مع H₂SO₄ المخفف وبلون اللهب الأحمر الطوبي.",
              "مثال محلول: محلول يعطي مع NaOH راسبًا أبيض جيلاتينيًا يذوب عند إضافة المزيد من NaOH؛ إذن الكاتيون هو Al³⁺."]
          },
          story: {
            en: ["Karim helps his uncle, a water-quality technician at a plant near Helwan, on a summer internship.",
              "A sample from an old iron pipe gives a reddish-brown ppt with sodium hydroxide: 'Fe³⁺, the pipe is rusting,' says his uncle.",
              "Another sample from a new aluminium tank gives a white jelly-like ppt. Karim keeps adding NaOH and the ppt disappears! 'Amphoteric aluminium,' his uncle smiles.",
              "Then they test hard water from a well in Fayoum: ammonium carbonate gives a white ppt, and a drop on a platinum wire paints the flame brick red: calcium.",
              "Karim writes in his notebook: 'Colour of the ppt + what dissolves it = the name of the cation.'"],
            ar: ["كريم يتدرب في الصيف مع عمه فني جودة المياه في محطة قرب حلوان.",
              "عينة من ماسورة حديد قديمة تعطي راسبًا بنيًا محمرًا مع هيدروكسيد الصوديوم، فيقول عمه: 'Fe³⁺، الماسورة تصدأ.'",
              "وعينة أخرى من خزان ألومنيوم جديد تعطي راسبًا أبيض كالجيلي، ويستمر كريم في إضافة NaOH فيختفي الراسب! يبتسم عمه: 'الألومنيوم المتردد.'",
              "ثم يختبران ماء عسرًا من بئر في الفيوم: كربونات الأمونيوم تعطي راسبًا أبيض، وقطرة على سلك بلاتين تلون اللهب بالأحمر الطوبي: كالسيوم.",
              "يكتب كريم في كراسته: 'لون الراسب + ما يذيبه = اسم الكاتيون.'"]
          }
        },
        words: [
          ["Basic radical (cation)", "الشق القاعدي (الكاتيون)", "The positive ion of a salt, e.g. Cu²⁺, Al³⁺, Fe³⁺, Ca²⁺.", "الأيون الموجب في الملح مثل Cu²⁺ و Al³⁺ و Fe³⁺ و Ca²⁺."],
          ["Analytical group", "المجموعة التحليلية", "One of six cation groups classified by the solubility of their salts and precipitated by one group reagent.", "إحدى المجموعات الست للكاتيونات المصنفة حسب ذوبانية أملاحها وترسب بكاشف مجموعة واحد."],
          ["Gelatinous precipitate", "الراسب الجيلاتيني", "A jelly-like ppt, e.g. white Al(OH)₃ or reddish-brown Fe(OH)₃.", "راسب يشبه الجيلي مثل Al(OH)₃ الأبيض أو Fe(OH)₃ البني المحمر."],
          ["Sodium meta-aluminate", "ميتا ألومينات الصوديوم", "NaAlO₂, the soluble product when Al(OH)₃ dissolves in excess NaOH.", "NaAlO₂ الناتج الذائب عند ذوبان Al(OH)₃ في زيادة من NaOH."],
          ["Flame test", "اختبار اللهب", "Volatile metal ions colour the Bunsen flame; calcium gives brick red.", "أيونات الفلزات المتطايرة تلون لهب بنزن، والكالسيوم يعطي اللون الأحمر الطوبي."],
          ["Group reagent (HCl + H₂S)", "كاشف المجموعة (HCl + H₂S)", "Precipitates group-2 cations such as Cu²⁺ as sulphides in acid medium.", "يرسب كاتيونات المجموعة الثانية مثل Cu²⁺ في صورة كبريتيدات في وسط حمضي."]
        ],
        lab: { parts: [{ type: "sec3chem_cations" }] },
        quiz: [
          { q: ["A salt solution gives a black ppt when H₂S is passed in acid medium. The cation is...", "محلول ملح يعطي راسبًا أسود عند إمرار H₂S في وسط حمضي. الكاتيون هو..."],
            c: [["Cu²⁺", "Cu²⁺"], ["Al³⁺", "Al³⁺"], ["Ca²⁺", "Ca²⁺"], ["Fe³⁺", "Fe³⁺"]],
            off: ["Cu²⁺ belongs to group 2: " + eq("CuSO₄ + H₂S → CuS↓ (black) + H₂SO₄") + "; CuS dissolves in hot HNO₃.", "Cu²⁺ من المجموعة الثانية: " + eq("CuSO₄ + H₂S → CuS↓ (أسود) + H₂SO₄") + " و CuS يذوب في حمض النيتريك الساخن."],
            sto: ["The blue solution turned black under the rotten-egg gas.", "المحلول الأزرق اسودّ تحت غاز البيض الفاسد."] },
          { q: ["Which hydroxide dissolves in excess sodium hydroxide?", "أي هيدروكسيد يذوب في الزيادة من هيدروكسيد الصوديوم؟"],
            c: [["Al(OH)₃", "Al(OH)₃"], ["Fe(OH)₃", "Fe(OH)₃"], ["Fe(OH)₂", "Fe(OH)₂"], ["Cu(OH)₂", "Cu(OH)₂"]],
            off: [eq("Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O") + ": aluminium hydroxide is amphoteric and forms soluble sodium meta-aluminate.", eq("Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O") + "؛ هيدروكسيد الألومنيوم متردد ويكوّن ميتا ألومينات الصوديوم الذائبة."],
            sto: ["Karim's white jelly vanished as he kept adding NaOH.", "اختفى جيلي كريم الأبيض كلما أضاف المزيد من NaOH."] },
          { q: ["Iron(III) chloride solution + ammonium hydroxide gives...", "محلول كلوريد الحديد III + هيدروكسيد الأمونيوم يعطي..."],
            c: [["a reddish-brown gelatinous ppt of Fe(OH)₃", "راسبًا بنيًا محمرًا جيلاتينيًا من Fe(OH)₃"], ["a white ppt that turns green in air", "راسبًا أبيض يخضر في الهواء"], ["a black ppt of FeS", "راسبًا أسود من FeS"], ["no change", "لا تغير"]],
            off: [eq("FeCl₃ + 3NH₄OH → Fe(OH)₃↓ + 3NH₄Cl") + ". Fe(OH)₃ is reddish-brown and soluble in acids.", eq("FeCl₃ + 3NH₄OH → Fe(OH)₃↓ + 3NH₄Cl") + "؛ و Fe(OH)₃ بني محمر يذوب في الأحماض."],
            sto: ["Rust-coloured ppt from the rusty pipe.", "راسب بلون الصدأ من الماسورة الصدئة."] },
          { q: ["A white ppt that turns white-green on exposure to air is...", "راسب أبيض يتحول إلى أبيض مخضر عند تعرضه للهواء هو..."],
            c: [["Fe(OH)₂", "Fe(OH)₂"], ["Al(OH)₃", "Al(OH)₃"], ["CaCO₃", "CaCO₃"], ["Fe(OH)₃", "Fe(OH)₃"]],
            off: ["Fe²⁺ + 2OH⁻ → Fe(OH)₂ (white), which is slowly oxidized by air, changing colour.", "Fe²⁺ + 2OH⁻ → Fe(OH)₂ (أبيض) يتأكسد ببطء بالهواء فيتغير لونه."],
            sto: ["Iron(II) cannot hide from the oxygen in the air.", "الحديد II لا يستطيع الاختباء من أكسجين الهواء."] },
          { q: ["Which cation gives a brick-red colour to the Bunsen flame?", "أي كاتيون يكسب لهب بنزن لونًا أحمر طوبيًا؟"],
            c: [["Ca²⁺", "Ca²⁺"], ["Cu²⁺", "Cu²⁺"], ["Al³⁺", "Al³⁺"], ["Fe²⁺", "Fe²⁺"]],
            off: ["Calcium (group 5) confirmatory test: brick-red flame; also white CaSO₄ with dilute H₂SO₄.", "تجربة تأكيدية للكالسيوم (المجموعة الخامسة): لهب أحمر طوبي، وراسب CaSO₄ أبيض مع H₂SO₄ المخفف."],
            sto: ["The Fayoum well water painted the flame brick red.", "ماء بئر الفيوم لوّن اللهب بالأحمر الطوبي."] },
          { q: ["The group reagent of the fifth analytical group (e.g. Ca²⁺) is...", "كاشف المجموعة التحليلية الخامسة (مثل Ca²⁺) هو..."],
            c: [["ammonium carbonate", "كربونات الأمونيوم"], ["dilute HCl", "HCl المخفف"], ["HCl + H₂S", "HCl + H₂S"], ["ammonium hydroxide", "هيدروكسيد الأمونيوم"]],
            off: [eq("CaCl₂ + (NH₄)₂CO₃ → CaCO₃↓ + 2NH₄Cl") + "; CaCO₃ dissolves in dilute HCl and in water containing CO₂.", eq("CaCl₂ + (NH₄)₂CO₃ → CaCO₃↓ + 2NH₄Cl") + "؛ و CaCO₃ يذوب في HCl المخفف وفي الماء المحتوي على CO₂."],
            sto: ["Carbonate catches calcium, like limescale in a Cairo kettle.", "الكربونات تصطاد الكالسيوم مثل الجير في غلاية القاهرة."] }
        ]
      },
      {
        id: "sec3chemu2l3", icon: "⚖️", page: 42,
        title: { en: "Quantitative Analysis: Titration and Gravimetric Analysis", ar: "التحليل الكمي: المعايرة والتحليل الوزني" },
        idea: {
          official: {
            en: ["Volumetric analysis measures the volume of a standard solution (known concentration) that reacts completely with the analyte. Neutralization (acid-base), redox and precipitation reactions are used. The end point is shown by an indicator.",
              "Indicators: methyl orange (red in acid, yellow in base, orange neutral), phenolphthalein (colourless in acid, red-pink in base), litmus (red / blue / purple), bromothymol blue (yellow / blue / pale green).",
              "Worked example: 25 mL NaOH needs 21 mL of 0.1 M HCl. " + eq("Ma·Va/na = Mb·Vb/nb") + " → " + eq("0.1 × 21 = Mb × 25") + " → Mb = 0.084 mol/L. For Ca(OH)₂ (2HCl : 1 base): " + eq("0.05 × 25 / 2 = Mb × 20") + " → Mb = 0.03125 mol/L.",
              "Gravimetric analysis finds the mass of the analyte. Volatilization: 2.6903 g BaCl₂·xH₂O heated to constant mass 2.2923 g → water = 0.398 g = 14.79%; " + eq("x = (208 × 0.398 ÷ 2.2923) ÷ 18 ≈ 2") + ", so BaCl₂·2H₂O.",
              "Precipitation: the analyte is precipitated as a pure, sparingly soluble compound, filtered on ashless paper, ignited and weighed. Example: 2 g BaSO₄ → mass of BaCl₂ = " + eq("208 × 2 ÷ 233 = 1.785 g") + ".",
              "Useful relations: moles = mass ÷ molar mass; molarity = moles ÷ volume (L); 1 mol of gas = 22.4 L at STP."],
            ar: ["يعتمد التحليل الحجمي على قياس حجم محلول قياسي (معلوم التركيز) يتفاعل تمامًا مع المادة المراد تقديرها، وتُستخدم تفاعلات التعادل والأكسدة والاختزال والترسيب، ويُحدَّد نهاية التفاعل بدليل.",
              "الأدلة: الميثيل البرتقالي (أحمر في الحمض، أصفر في القلوي، برتقالي في المتعادل)، والفينولفثالين (عديم اللون في الحمض، أحمر وردي في القلوي)، وعباد الشمس (أحمر/أزرق/بنفسجي)، والبروموثيمول الأزرق (أصفر/أزرق/أخضر باهت).",
              "مثال محلول: 25 مل من NaOH تحتاج 21 مل من HCl تركيزه 0.1 مولر: " + eq("Ma·Va/na = Mb·Vb/nb") + " ← " + eq("0.1 × 21 = Mb × 25") + " ← Mb = 0.084 مول/لتر، وفي حالة Ca(OH)₂ (2HCl لكل 1 قاعدة): " + eq("0.05 × 25 / 2 = Mb × 20") + " ← Mb = 0.03125 مول/لتر.",
              "يقدر التحليل الوزني كتلة المادة، ففي طريقة التطاير: سُخن 2.6903 جم من BaCl₂·xH₂O حتى ثبات الكتلة عند 2.2923 جم ← الماء = 0.398 جم = 14.79%، و " + eq("x = (208 × 0.398 ÷ 2.2923) ÷ 18 ≈ 2") + " إذن الصيغة BaCl₂·2H₂O.",
              "طريقة الترسيب: تُرسَّب المادة في صورة مركب نقي شحيح الذوبان، ويُرشَّح على ورق ترشيح عديم الرماد ثم يُحرق ويوزن، مثال: 2 جم BaSO₄ ← كتلة BaCl₂ = " + eq("208 × 2 ÷ 233 = 1.785 g") + ".",
              "علاقات مفيدة: عدد المولات = الكتلة ÷ الكتلة المولية، والتركيز المولاري = عدد المولات ÷ الحجم باللتر، والمول من الغاز يشغل 22.4 لتر في الظروف القياسية."]
          },
          story: {
            en: ["Salma works at her family's pharmacy in Mansoura after school and wonders how the factory knows the strength of the antacid syrup.",
              "Her chemist cousin shows her a burette full of 0.1 M HCl over a flask of the alkaline medicine with two drops of phenolphthalein. Pink!",
              "She opens the tap drop by drop. At 21 mL the pink suddenly vanishes: the end point. 'Now multiply: 0.1 × 21 ÷ 25.' The base is 0.084 M.",
              "Next she heats a crucible of hydrated barium chloride until the mass stops changing. The lost mass is the water of crystallization.",
              "'Titration counts with volumes; gravimetric analysis counts with a balance,' she writes on a sticky note by the cash register."],
            ar: ["سلمى تعمل بعد المدرسة في صيدلية عائلتها بالمنصورة، وتتساءل كيف يعرف المصنع تركيز شراب مضاد الحموضة.",
              "يريها ابن عمها الكيميائي سحاحة مملوءة بحمض HCl تركيزه 0.1 مولر فوق دورق به الدواء القلوي وقطرتان من الفينولفثالين: لون وردي!",
              "تفتح الصنبور قطرة قطرة، وعند 21 مل يختفي اللون الوردي فجأة: نقطة التعادل. 'اضربي: 0.1 × 21 ÷ 25.' تركيز القاعدة 0.084 مولر.",
              "بعدها تسخن بوتقة بها كلوريد باريوم متهدرت حتى تثبت الكتلة، والكتلة المفقودة هي ماء التبلر.",
              "تكتب على ورقة لاصقة بجوار الخزينة: 'المعايرة تحسب بالأحجام، والتحليل الوزني يحسب بالميزان.'"]
          }
        },
        words: [
          ["Standard solution", "المحلول القياسي", "A solution of accurately known concentration used in titration.", "محلول معلوم التركيز بدقة يُستخدم في المعايرة."],
          ["Titration", "المعايرة", "Adding a standard solution from a burette to a measured volume of analyte until the reaction is complete.", "إضافة محلول قياسي من السحاحة إلى حجم معلوم من المادة حتى يتم التفاعل."],
          ["End point", "نقطة نهاية التفاعل", "The point at which the reaction (e.g. neutralization) is complete, shown by the indicator colour change.", "النقطة التي يكتمل عندها التفاعل (مثل التعادل) ويدل عليها تغير لون الدليل."],
          ["Indicator", "الدليل", "A substance whose colour depends on the medium, e.g. phenolphthalein, methyl orange.", "مادة يتغير لونها حسب الوسط مثل الفينولفثالين والميثيل البرتقالي."],
          ["Gravimetric analysis", "التحليل الوزني", "Finding the amount of a substance by separating it and weighing it (volatilization or precipitation).", "تقدير كمية المادة بفصلها ووزنها (بالتطاير أو الترسيب)."],
          ["Water of crystallization", "ماء التبلر", "Water molecules bound inside a crystal, driven off by heating, e.g. in BaCl₂·2H₂O.", "جزيئات ماء مرتبطة داخل البلورة تُطرد بالتسخين كما في BaCl₂·2H₂O."],
          ["Ashless filter paper", "ورق الترشيح عديم الرماد", "Filter paper that leaves no ash when ignited, used in precipitation gravimetry.", "ورق ترشيح لا يترك رمادًا عند حرقه يُستخدم في التحليل الوزني بالترسيب."]
        ],
        lab: { parts: [{ type: "sec3chem_titrate" }] },
        quiz: [
          { q: ["25 mL of NaOH solution is neutralized by 21 mL of 0.1 M HCl. What is the concentration of the NaOH?", "تعادل 25 مل من محلول NaOH مع 21 مل من HCl تركيزه 0.1 مولر. ما تركيز NaOH؟"],
            c: [["0.084 mol/L", "0.084 مول/لتر"], ["0.119 mol/L", "0.119 مول/لتر"], ["0.21 mol/L", "0.21 مول/لتر"], ["0.042 mol/L", "0.042 مول/لتر"]],
            off: ["1 : 1 ratio. " + eq("Mb = 0.1 × 21 ÷ 25 = 0.084 mol/L") + ". (0.119 comes from inverting the volumes.)", "النسبة 1 : 1، و " + eq("Mb = 0.1 × 21 ÷ 25 = 0.084 mol/L") + " (أما 0.119 فتنتج من قلب الحجمين)."],
            sto: ["Salma's pink vanished at 21 mL.", "اختفى اللون الوردي عند سلمى عند 21 مل."] },
          { q: ["20 mL of Ca(OH)₂ is neutralized by 25 mL of 0.05 M HCl. The concentration of Ca(OH)₂ is...", "تعادل 20 مل من Ca(OH)₂ مع 25 مل من HCl تركيزه 0.05 مولر. تركيز Ca(OH)₂ هو..."],
            c: [["0.03125 mol/L", "0.03125 مول/لتر"], ["0.0625 mol/L", "0.0625 مول/لتر"], ["0.04 mol/L", "0.04 مول/لتر"], ["0.016 mol/L", "0.016 مول/لتر"]],
            off: [eq("2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O") + ". " + eq("0.05 × 25 / 2 = Mb × 20 / 1") + " → Mb = 0.03125 mol/L. Forgetting the 2 gives 0.0625.", eq("2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O") + "، و " + eq("0.05 × 25 / 2 = Mb × 20 / 1") + " ← Mb = 0.03125 مول/لتر، ونسيان الرقم 2 يعطي 0.0625."],
            sto: ["Each Ca(OH)₂ eats two HCl, so divide by 2.", "كل Ca(OH)₂ يلتهم جزيئين من HCl، فاقسم على 2."] },
          { q: ["0.1 g of a mixture of NaOH and NaCl needs 10 mL of 0.1 M HCl. The percentage of NaOH is... (Na = 23, O = 16, H = 1)", "0.1 جم من مخلوط NaOH و NaCl يحتاج 10 مل من HCl تركيزه 0.1 مولر. نسبة NaOH هي... (Na = 23، O = 16، H = 1)"],
            c: [["40%", "40%"], ["4%", "4%"], ["60%", "60%"], ["58.5%", "58.5%"]],
            off: ["Moles HCl = 0.01 L × 0.1 = 0.001 mol = moles NaOH. Mass = 0.001 × 40 = 0.04 g. % = 0.04 ÷ 0.1 × 100 = 40%.", "مولات HCl = 0.01 لتر × 0.1 = 0.001 مول = مولات NaOH، والكتلة = 0.001 × 40 = 0.04 جم، والنسبة = 0.04 ÷ 0.1 × 100 = 40%."],
            sto: ["Only the NaOH part of the powder reacts with the acid.", "الجزء الخاص بـ NaOH فقط في المسحوق يتفاعل مع الحمض."] },
          { q: ["What volume of 0.2 M NaOH neutralizes 10 mL of 0.1 M H₂SO₄?", "ما حجم NaOH تركيزه 0.2 مولر اللازم لتعادل 10 مل من H₂SO₄ تركيزه 0.1 مولر؟"],
            c: [["10 mL", "10 مل"], ["5 mL", "5 مل"], ["20 mL", "20 مل"], ["2.5 mL", "2.5 مل"]],
            off: [eq("H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O") + ". " + eq("0.1 × 10 / 1 = 0.2 × Vb / 2") + " → Vb = 10 mL.", eq("H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O") + "، و " + eq("0.1 × 10 / 1 = 0.2 × Vb / 2") + " ← Vb = 10 مل."],
            sto: ["The acid has two H⁺ to give, the base is twice as strong: they balance at equal volumes.", "الحمض يعطي H⁺ مرتين والقاعدة ضعف التركيز، فيتعادلان عند حجمين متساويين."] },
          { q: ["2.6903 g of BaCl₂·xH₂O loses mass to 2.2923 g on strong heating. The percentage of water of crystallization is...", "سُخن 2.6903 جم من BaCl₂·xH₂O بشدة فأصبحت الكتلة 2.2923 جم. النسبة المئوية لماء التبلر هي..."],
            c: [["14.79%", "14.79%"], ["17.36%", "17.36%"], ["85.21%", "85.21%"], ["0.398%", "0.398%"]],
            off: ["Water = 2.6903 − 2.2923 = 0.398 g. % = 0.398 ÷ 2.6903 × 100 = 14.79%. (17.36% divides by the anhydrous mass by mistake.)", "الماء = 2.6903 − 2.2923 = 0.398 جم، والنسبة = 0.398 ÷ 2.6903 × 100 = 14.79% (أما 17.36% فخطأ القسمة على كتلة الملح اللامائي)."],
            sto: ["The balance tells Salma how much steam escaped.", "الميزان يخبر سلمى كم من البخار هرب."] },
          { q: ["2 g of BaSO₄ is precipitated from a barium chloride solution. The mass of BaCl₂ was... (BaCl₂ = 208, BaSO₄ = 233)", "تم ترسيب 2 جم من BaSO₄ من محلول كلوريد الباريوم. كتلة BaCl₂ كانت... (BaCl₂ = 208، BaSO₄ = 233)"],
            c: [["1.785 g", "1.785 جم"], ["2.240 g", "2.240 جم"], ["0.893 g", "0.893 جم"], ["2.000 g", "2.000 جم"]],
            off: ["1 mol BaCl₂ → 1 mol BaSO₄. 208 g → 233 g, so x = 208 × 2 ÷ 233 = 1.785 g. (2.240 g inverts the ratio.)", "1 مول BaCl₂ ← 1 مول BaSO₄، و 208 جم ← 233 جم، إذن x = 208 × 2 ÷ 233 = 1.785 جم (و 2.240 جم ناتجة من قلب النسبة)."],
            sto: ["The white ppt on the ashless paper carries all the barium.", "الراسب الأبيض على الورق عديم الرماد يحمل كل الباريوم."] },
          { q: ["Which indicator is colourless in acid and red-pink in base?", "أي دليل يكون عديم اللون في الحمض وأحمر ورديًا في القلوي؟"],
            c: [["Phenolphthalein", "الفينولفثالين"], ["Methyl orange", "الميثيل البرتقالي"], ["Bromothymol blue", "البروموثيمول الأزرق"], ["Litmus", "عباد الشمس"]],
            off: ["Phenolphthalein: colourless in acidic and neutral media, red-pink in basic medium.", "الفينولفثالين عديم اللون في الوسط الحمضي والمتعادل، وأحمر وردي في الوسط القلوي."],
            sto: ["Salma's pink flask turned clear at the end point.", "دورق سلمى الوردي أصبح شفافًا عند نقطة النهاية."] }
        ]
      }
    ]
  });
})();

/* ---------- Sec 3 Chemistry: units 3 (equilibrium) and 4 (electrochemistry) ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var G = E.SCIG.sec3chem;

  /* ================= UNIT 3: CHEMICAL EQUILIBRIUM ================= */
  G.units.push({
    id: "sec3chemu3", num: 3, icon: "⚖️", color: "blue",
    title: { en: "Chemical Equilibrium", ar: "الاتزان الكيميائي" },
    lessons: [
      {
        id: "sec3chemu3l1", icon: "🔁", page: 55,
        title: { en: "Reversible Reactions, Reaction Rate and the Law of Mass Action", ar: "التفاعلات الانعكاسية ومعدل التفاعل وقانون فعل الكتلة" },
        idea: {
          official: {
            en: ["An equilibrium system looks stationary but is dynamic, like water evaporating and condensing at the same rate in a closed vessel. Complete reactions go one way because a gas escapes or a precipitate forms: " + eq("NaCl + AgNO₃ → NaNO₃ + AgCl↓") + ".",
              "Reversible reactions go both ways: " + eq("CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O") + ". The mixture stays acidic because some acetic acid always remains. Chemical equilibrium: the forward rate equals the backward rate and the concentrations stop changing.",
              "Rate of reaction = change in concentration of reactants per unit time (mol/L per s or min). It depends on the nature of reactants (ionic reactions are instantaneous, covalent ones slow; powder reacts faster than a block), concentration, temperature, pressure, catalysts and light.",
              "Law of mass action (Guldberg and Waage): at constant temperature, the rate of a reaction is proportional to the product of the molar concentrations of the reactants, each raised to the power of its number of moles in the balanced equation.",
              "At equilibrium " + eq("r₁ = r₂") + ", so " + eq("Kc = k₁/k₂ = [products]ⁿ / [reactants]ᵐ") + ". Worked example: " + eq("H₂ + I₂ ⇌ 2HI") + " with [H₂] = [I₂] = 0.221 and [HI] = 1.563 mol/L: " + eq("Kc = 1.563² ÷ (0.221 × 0.221) ≈ 50") + ".",
              "Kc < 1: the reaction does not go far to products (AgCl dissolving, Kc = 1.7×10⁻¹⁰). Kc > 1: it goes almost to completion (H₂ + Cl₂, Kc = 4.4×10³²). Pure water, solids and precipitates are left out of Kc, and Kc does not change with concentration at the same temperature."],
            ar: ["النظام المتزن ساكن في الظاهر لكنه ديناميكي في الحقيقة، مثل تبخر الماء وتكثفه بنفس المعدل في إناء مغلق، والتفاعلات التامة تسير في اتجاه واحد لخروج غاز أو تكوّن راسب: " + eq("NaCl + AgNO₃ → NaNO₃ + AgCl↓") + ".",
              "التفاعلات الانعكاسية تسير في الاتجاهين: " + eq("CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O") + "، ويظل المخلوط حمضيًا لوجود بعض حمض الأسيتيك دائمًا. الاتزان الكيميائي: يتساوى معدل التفاعل الطردي مع معدل التفاعل العكسي وتثبت تركيزات المواد.",
              "معدل التفاعل = التغير في تركيز المتفاعلات في وحدة الزمن (مول/لتر لكل ث أو د)، ويتوقف على طبيعة المتفاعلات (التفاعلات الأيونية لحظية والتساهمية بطيئة، والمسحوق أسرع من القطعة) والتركيز ودرجة الحرارة والضغط والعوامل الحفازة والضوء.",
              "قانون فعل الكتلة (جولدبرج وفاج): عند ثبوت درجة الحرارة يتناسب معدل التفاعل الكيميائي طرديًا مع حاصل ضرب التركيزات الجزيئية للمتفاعلات كل مرفوع لأس يساوي عدد المولات في المعادلة الموزونة.",
              "عند الاتزان " + eq("r₁ = r₂") + " إذن " + eq("Kc = k₁/k₂ = [products]ⁿ / [reactants]ᵐ") + "، مثال محلول: " + eq("H₂ + I₂ ⇌ 2HI") + " حيث [H₂] = [I₂] = 0.221 و [HI] = 1.563 مول/لتر: " + eq("Kc = 1.563² ÷ (0.221 × 0.221) ≈ 50") + ".",
              "إذا كانت Kc < 1 فالتفاعل لا يسير جيدًا نحو النواتج (ذوبان AgCl، Kc = 1.7×10⁻¹⁰)، وإذا كانت Kc > 1 فالتفاعل يكاد يكون تامًا (H₂ + Cl₂، Kc = 4.4×10³²)، ولا يظهر تركيز الماء النقي والمواد الصلبة والرواسب في Kc، ولا تتغير Kc بتغير التركيز عند نفس درجة الحرارة."]
          },
          story: {
            en: ["Ziad watches the escalator at Sadat metro station during rush hour: people go up on one side and come down on the other.",
              "When the number going up each minute equals the number coming down, the crowd on the platform stays the same, but people never stop moving. That is dynamic equilibrium.",
              "If a train suddenly drops more people downstairs (more reactant), more go up until a new balance is reached.",
              "His sister makes a lime drink: lemon powder dissolves faster than a whole lemon slice. More surface area, faster rate.",
              "Ziad writes the 'escalator constant': people upstairs ÷ people downstairs stays the same as long as the station rules (temperature) do not change. That is Kc."],
            ar: ["زياد يراقب السلم الكهربائي في محطة السادات وقت الذروة: أناس يصعدون من جهة ويهبطون من الجهة الأخرى.",
              "عندما يتساوى عدد الصاعدين في الدقيقة مع عدد الهابطين يبقى عدد الواقفين على الرصيف ثابتًا، لكن الحركة لا تتوقف أبدًا؛ هذا هو الاتزان الديناميكي.",
              "إذا أنزل قطار فجأة مزيدًا من الركاب في الأسفل (زيادة المتفاعلات) يصعد عدد أكبر حتى يتحقق اتزان جديد.",
              "أخته تحضّر عصير ليمون: مسحوق الليمون يذوب أسرع من شريحة الليمون الكاملة؛ مساحة سطح أكبر، معدل أسرع.",
              "يكتب زياد 'ثابت السلم': عدد من في الأعلى ÷ عدد من في الأسفل يظل ثابتًا ما دامت قواعد المحطة (درجة الحرارة) لا تتغير؛ هذا هو Kc."]
          }
        },
        words: [
          ["Reversible reaction", "التفاعل الانعكاسي", "A reaction that proceeds in both the forward and backward directions.", "تفاعل يسير في الاتجاهين الطردي والعكسي."],
          ["Chemical equilibrium", "الاتزان الكيميائي", "A dynamic state where forward rate = backward rate and concentrations stay constant.", "حالة ديناميكية يتساوى فيها معدل التفاعل الطردي مع العكسي وتثبت التركيزات."],
          ["Rate of reaction", "معدل التفاعل الكيميائي", "The change in concentration of reactants per unit time.", "التغير في تركيز المتفاعلات في وحدة الزمن."],
          ["Law of mass action", "قانون فعل الكتلة", "Rate ∝ product of reactant concentrations, each raised to its number of moles in the balanced equation.", "يتناسب معدل التفاعل طرديًا مع حاصل ضرب تركيزات المتفاعلات كل مرفوع لأس يساوي عدد مولاته في المعادلة الموزونة."],
          ["Equilibrium constant Kc", "ثابت الاتزان Kc", "Ratio of product concentrations to reactant concentrations at equilibrium, each raised to its coefficient.", "النسبة بين حاصل ضرب تركيزات النواتج وحاصل ضرب تركيزات المتفاعلات عند الاتزان كل مرفوع لأس معامله."],
          ["Complete reaction", "التفاعل التام", "A reaction that goes essentially one way because a gas escapes or a precipitate forms.", "تفاعل يسير في اتجاه واحد تقريبًا لخروج غاز أو تكوّن راسب."]
        ],
        lab: { parts: [{ type: "sec3chem_kc" }] },
        quiz: [
          { q: ["For H₂ + I₂ ⇌ 2HI at equilibrium, [H₂] = [I₂] = 0.221 M and [HI] = 1.563 M. Kc is about...", "في التفاعل H₂ + I₂ ⇌ 2HI عند الاتزان [H₂] = [I₂] = 0.221 مولر و [HI] = 1.563 مولر. قيمة Kc تقريبًا..."],
            c: [["50", "50"], ["32", "32"], ["7.1", "7.1"], ["0.02", "0.02"]],
            off: [eq("Kc = [HI]² / ([H₂][I₂]) = 1.563² ÷ (0.221 × 0.221) = 2.443 ÷ 0.0488 ≈ 50") + ". Forgetting the square gives 32.", eq("Kc = [HI]² / ([H₂][I₂]) = 1.563² ÷ (0.221 × 0.221) = 2.443 ÷ 0.0488 ≈ 50") + "، ونسيان التربيع يعطي 32."],
            sto: ["Two HI on the top step: square them.", "جزيئان من HI في أعلى السلم: ربّعهما."] },
          { q: ["Which expression is correct for N₂ + 3H₂ ⇌ 2NH₃?", "أي تعبير صحيح للتفاعل N₂ + 3H₂ ⇌ 2NH₃؟"],
            c: [[eq("Kc = [NH₃]² / ([N₂][H₂]³)"), eq("Kc = [NH₃]² / ([N₂][H₂]³)")], [eq("Kc = [N₂][H₂]³ / [NH₃]²"), eq("Kc = [N₂][H₂]³ / [NH₃]²")], [eq("Kc = 2[NH₃] / ([N₂]·3[H₂])"), eq("Kc = 2[NH₃] / ([N₂]·3[H₂])")], [eq("Kc = [NH₃] / ([N₂][H₂])"), eq("Kc = [NH₃] / ([N₂][H₂])")]],
            off: ["Products over reactants, each raised to the power of its coefficient: [NH₃]² over [N₂][H₂]³.", "النواتج على المتفاعلات، كل تركيز مرفوع لأس يساوي معامله: [NH₃]² على [N₂][H₂]³."],
            sto: ["Upstairs over downstairs, counted by coefficients.", "من في الأعلى على من في الأسفل، والعدّ بالمعاملات."] },
          { q: ["Equal masses of zinc react with the same HCl. Which reacts fastest?", "كتل متساوية من الخارصين تتفاعل مع نفس حمض HCl. أيها الأسرع؟"],
            c: [["Zinc powder", "مسحوق الخارصين"], ["One zinc block", "قطعة خارصين واحدة"], ["Both the same", "كلاهما بنفس المعدل"], ["Zinc block at lower temperature", "قطعة خارصين عند درجة حرارة أقل"]],
            off: ["Powder has a larger surface area exposed to the acid, so more collisions per second and a faster rate.", "المسحوق له مساحة سطح أكبر معرضة للحمض، فتزداد التصادمات في الثانية ويزداد المعدل."],
            sto: ["Lemon powder dissolves faster than a lemon slice.", "مسحوق الليمون يذوب أسرع من الشريحة."] },
          { q: ["The esterification mixture of acetic acid and ethanol stays acidic to litmus at equilibrium because...", "يظل مخلوط الأسترة من حمض الأسيتيك والإيثانول حمضيًا لعباد الشمس عند الاتزان لأن..."],
            c: [["the reaction is reversible, so some acetic acid always remains", "التفاعل انعكاسي فيتبقى دائمًا بعض حمض الأسيتيك"], ["the ester is acidic", "الإستر حمضي"], ["water is acidic", "الماء حمضي"], ["ethanol is a strong acid", "الإيثانول حمض قوي"]],
            off: ["Both ester and water are neutral; the acidity comes from unreacted acetic acid, because reactants and products coexist at equilibrium.", "الإستر والماء متعادلان، والحمضية من حمض الأسيتيك المتبقي لأن المتفاعلات والنواتج توجد معًا عند الاتزان."],
            sto: ["Some people never leave the bottom of the escalator.", "بعض الناس لا يغادرون أسفل السلم أبدًا."] },
          { q: ["A very small Kc (e.g. 1.7×10⁻¹⁰ for AgCl ⇌ Ag⁺ + Cl⁻) means...", "قيمة Kc صغيرة جدًا (مثل 1.7×10⁻¹⁰ للتفاعل AgCl ⇌ Ag⁺ + Cl⁻) تعني..."],
            c: [["the reaction hardly proceeds to products (AgCl is sparingly soluble)", "التفاعل لا يكاد يسير نحو النواتج (AgCl شحيح الذوبان)"], ["the reaction is almost complete", "التفاعل يكاد يكون تامًا"], ["the reaction is very fast", "التفاعل سريع جدًا"], ["the concentration of AgCl is very high", "تركيز AgCl كبير جدًا"]],
            off: ["Kc < 1: the denominator (reactants) is much bigger than the numerator; the backward reaction dominates.", "Kc < 1: المقام (المتفاعلات) أكبر كثيرًا من البسط، والتفاعل العكسي هو السائد."],
            sto: ["Almost nobody goes up the escalator.", "تقريبًا لا أحد يصعد السلم."] },
          { q: ["Which is NOT written in the Kc expression?", "أي مما يأتي لا يُكتب في تعبير Kc؟"],
            c: [["A solid precipitate", "راسب صلب"], ["A dissolved ion", "أيون ذائب"], ["A gas in the reaction", "غاز في التفاعل"], ["A dissolved product", "ناتج ذائب"]],
            off: ["Concentrations of solids, precipitates and pure water (as solvent) stay practically constant, so they are not included.", "تركيزات المواد الصلبة والرواسب والماء النقي كمذيب تكاد تكون ثابتة فلا تُكتب."],
            sto: ["The walls of the station never move, so they are not counted.", "جدران المحطة لا تتحرك، فلا تُحسب."] }
        ]
      },
      {
        id: "sec3chemu3l2", icon: "🌡️", page: 61,
        title: { en: "Temperature, Pressure, Le Chatelier's Principle and Catalysts", ar: "درجة الحرارة والضغط وقاعدة لوشاتيلييه والعوامل الحفازة" },
        idea: {
          official: {
            en: ["Collision theory: molecules must collide, and only activated molecules, with kinetic energy equal to or greater than the activation energy, react. Raising temperature increases the fraction of activated molecules; the rate of many reactions doubles for every 10 °C rise.",
              "Temperature and equilibrium: " + eq("2NO₂ (reddish brown) ⇌ N₂O₄ (colourless) + heat") + ". In a cooling mixture the colour fades (forward, exothermic); at room temperature it returns. Cooling an exothermic equilibrium shifts it forward to release heat.",
              "Pressure: in " + eq("N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ") + ", 4 moles of gas give 2. Raising pressure (and cooling) shifts the equilibrium toward the smaller volume, so more ammonia. For gases " + eq("Kp = (P_NH₃)² / (P_N₂ × (P_H₂)³)") + ".",
              "Worked example: " + eq("N₂ + 2O₂ ⇌ 2NO₂") + " with P(NO₂) = 2 atm, P(O₂) = 1 atm, P(N₂) = 0.2 atm: " + eq("Kp = 2² ÷ (0.2 × 1²) = 20") + ".",
              "Le Chatelier's principle: if a condition of a system at equilibrium (concentration, pressure or temperature) is changed, the system shifts in the direction that reduces or cancels the effect of the change.",
              "Catalysts lower the activation energy and speed up the forward and backward reactions equally, so they do not change the equilibrium position or Kc (90% of industrial processes, car catalytic converters, enzymes). Light also drives some reactions: photosynthesis, " + eq("Ag⁺ + e⁻ → Ag") + " in photographic film."],
            ar: ["نظرية التصادم: يجب أن تتصادم الجزيئات، ولا يتفاعل إلا الجزيئات المنشطة التي تمتلك طاقة حركة تساوي طاقة التنشيط أو تزيد عليها، ورفع درجة الحرارة يزيد نسبة الجزيئات المنشطة، ويتضاعف معدل كثير من التفاعلات برفع درجة الحرارة 10 °س.",
              "درجة الحرارة والاتزان: " + eq("2NO₂ (بني محمر) ⇌ N₂O₄ (عديم اللون) + حرارة") + "، في مخلوط مبرد يبهت اللون (التفاعل الطردي طارد للحرارة) وعند درجة حرارة الغرفة يعود اللون؛ فخفض درجة حرارة تفاعل طارد للحرارة يزيحه في الاتجاه الطردي لينطلق مزيد من الحرارة.",
              "الضغط: في " + eq("N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ") + " تعطي 4 مولات غاز مولين فقط، فزيادة الضغط (مع التبريد) تزيح الاتزان نحو الحجم الأقل فيزداد النشادر، وللغازات " + eq("Kp = (P_NH₃)² / (P_N₂ × (P_H₂)³)") + ".",
              "مثال محلول: " + eq("N₂ + 2O₂ ⇌ 2NO₂") + " حيث ضغط NO₂ = 2 ض.ج و O₂ = 1 ض.ج و N₂ = 0.2 ض.ج: " + eq("Kp = 2² ÷ (0.2 × 1²) = 20") + ".",
              "قاعدة لوشاتيلييه: إذا حدث تغير في أحد العوامل المؤثرة على نظام في حالة اتزان (التركيز أو الضغط أو درجة الحرارة) فإن النظام ينشط في الاتجاه الذي يقلل أو يلغي تأثير هذا التغير.",
              "العامل الحفاز يقلل طاقة التنشيط ويزيد معدل التفاعلين الطردي والعكسي بنفس القدر فلا يغير موضع الاتزان ولا Kc (يُستخدم في 90% من العمليات الصناعية، ومحولات السيارات الحفزية، والإنزيمات)، والضوء يؤثر في بعض التفاعلات: البناء الضوئي و " + eq("Ag⁺ + e⁻ → Ag") + " في أفلام التصوير."]
          },
          story: {
            en: ["Habiba is at a crowded wedding hall in Heliopolis. When the DJ plays a slow song, dancers pair up into couples (N₂O₄); when he plays fast music, everyone splits up and runs around alone (2NO₂).",
              "Heat is like the fast music: more energy breaks the pairs, so the 'brown' singles increase. Cooling the hall brings the couples back.",
              "When the hall manager closes half of the dance floor (more pressure), people pair up to take less space: the system moves to fewer particles.",
              "The bride's uncle opens a second door (a catalyst): people enter and leave faster, but the final number inside stays the same.",
              "Habiba laughs: 'Every crowd fights back against whatever you do to it. That's Le Chatelier.'"],
            ar: ["حبيبة في قاعة أفراح مزدحمة في مصر الجديدة؛ عندما يشغّل الدي جي أغنية هادئة يرقص الناس أزواجًا (N₂O₄)، وعندما يشغّل موسيقى سريعة يتفرق الجميع ويجري كل واحد بمفرده (2NO₂).",
              "الحرارة مثل الموسيقى السريعة: الطاقة الأكبر تفك الأزواج فيزداد الأفراد 'البنيون'، وتبريد القاعة يعيد الأزواج.",
              "عندما يغلق مدير القاعة نصف ساحة الرقص (زيادة الضغط) يتجمع الناس أزواجًا ليشغلوا مساحة أقل؛ ينتقل النظام نحو عدد جسيمات أقل.",
              "خال العروسة يفتح بابًا ثانيًا (عامل حفاز)، فيدخل الناس ويخرجون أسرع، لكن العدد النهائي داخل القاعة يبقى كما هو.",
              "تضحك حبيبة: 'كل زحام يقاوم ما تفعله به؛ هذه قاعدة لوشاتيلييه.'"]
          }
        },
        words: [
          ["Activation energy", "طاقة التنشيط", "The minimum energy a molecule must gain to react on collision.", "الحد الأدنى من الطاقة الذي يجب أن يكتسبه الجزيء ليتفاعل عند التصادم."],
          ["Activated molecules", "الجزيئات المنشطة", "Molecules whose kinetic energy equals or exceeds the activation energy.", "جزيئات طاقة حركتها تساوي طاقة التنشيط أو تزيد عليها."],
          ["Le Chatelier's principle", "قاعدة لوشاتيلييه", "A system at equilibrium shifts to reduce or cancel the effect of any change in its conditions.", "النظام المتزن ينشط في الاتجاه الذي يقلل أو يلغي تأثير أي تغير في ظروفه."],
          ["Kp", "Kp", "The equilibrium constant written with partial pressures of gases.", "ثابت الاتزان معبرًا عنه بالضغوط الجزئية للغازات."],
          ["Catalyst", "العامل الحفاز", "A substance that changes the rate of reaction without being changed and without shifting the equilibrium position.", "مادة تغير معدل التفاعل دون أن تتغير ودون أن تغير موضع الاتزان."],
          ["Exothermic reaction", "التفاعل الطارد للحرارة", "A reaction that releases heat (ΔH negative), e.g. 2NO₂ → N₂O₄.", "تفاعل ينطلق منه حرارة (ΔH سالبة) مثل 2NO₂ → N₂O₄."]
        ],
        lab: { parts: [{ type: "sec3chem_lechat" }] },
        quiz: [
          { q: ["A flask of NO₂ (2NO₂ ⇌ N₂O₄ + heat) is put in ice. What happens to the colour?", "وُضع دورق به NO₂ (2NO₂ ⇌ N₂O₄ + حرارة) في الثلج. ماذا يحدث للون؟"],
            c: [["It fades: equilibrium shifts forward to N₂O₄", "يبهت: ينزاح الاتزان طرديًا نحو N₂O₄"], ["It darkens: equilibrium shifts backward", "يغمق: ينزاح الاتزان عكسيًا"], ["No change: temperature does not affect equilibrium", "لا يتغير: الحرارة لا تؤثر في الاتزان"], ["It turns green", "يصبح أخضر"]],
            off: ["The forward reaction is exothermic. Cooling removes heat, so the system shifts forward to produce heat, forming colourless N₂O₄.", "التفاعل الطردي طارد للحرارة، والتبريد ينزع حرارة فينشط النظام طرديًا لإنتاج حرارة فيتكون N₂O₄ عديم اللون."],
            sto: ["Slow song: the dancers pair up.", "أغنية هادئة: الراقصون يتزاوجون."] },
          { q: ["For N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92 kJ), which conditions increase the yield of ammonia?", "في التفاعل N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92 kJ)، أي الظروف تزيد ناتج النشادر؟"],
            c: [["High pressure and cooling", "ضغط مرتفع وتبريد"], ["Low pressure and heating", "ضغط منخفض وتسخين"], ["Low pressure and cooling", "ضغط منخفض وتبريد"], ["Adding a catalyst only", "إضافة عامل حفاز فقط"]],
            off: ["4 mol gas → 2 mol: high pressure favours fewer moles. Exothermic forward reaction: cooling favours it. A catalyst only speeds the approach to equilibrium.", "4 مول غاز ← 2 مول: الضغط المرتفع يفضل المولات الأقل، والتفاعل الطردي طارد للحرارة فالتبريد يفضله، والعامل الحفاز يسرع الوصول للاتزان فقط."],
            sto: ["Squeeze the hall and cool it: couples form.", "ضيّق القاعة وبرّدها: تتكون الأزواج."] },
          { q: ["For N₂ + 2O₂ ⇌ 2NO₂, P(NO₂) = 2 atm, P(O₂) = 1 atm, P(N₂) = 0.2 atm. Kp =", "في التفاعل N₂ + 2O₂ ⇌ 2NO₂، ضغط NO₂ = 2 ض.ج و O₂ = 1 ض.ج و N₂ = 0.2 ض.ج. قيمة Kp ="],
            c: [["20", "20"], ["10", "10"], ["0.05", "0.05"], ["40", "40"]],
            off: [eq("Kp = (P_NO₂)² / (P_N₂ × (P_O₂)²) = 4 ÷ (0.2 × 1) = 20") + ". Not squaring gives 10; inverting gives 0.05.", eq("Kp = (P_NO₂)² / (P_N₂ × (P_O₂)²) = 4 ÷ (0.2 × 1) = 20") + "، وعدم التربيع يعطي 10، وقلب الكسر يعطي 0.05."],
            sto: ["Pressures replace concentrations; the rules stay the same.", "الضغوط تحل محل التركيزات، والقواعد كما هي."] },
          { q: ["What does a catalyst do to a reaction at equilibrium?", "ماذا يفعل العامل الحفاز في تفاعل متزن؟"],
            c: [["Speeds up forward and backward reactions equally; the position does not change", "يزيد معدل التفاعلين الطردي والعكسي بالتساوي ولا يتغير موضع الاتزان"], ["Shifts equilibrium toward products", "يزيح الاتزان نحو النواتج"], ["Increases Kc", "يزيد قيمة Kc"], ["Raises the activation energy", "يرفع طاقة التنشيط"]],
            off: ["It lowers the activation energy of both directions, so equilibrium is reached faster with the same composition.", "يقلل طاقة التنشيط في الاتجاهين، فيصل التفاعل للاتزان أسرع بنفس التركيب."],
            sto: ["A second door: faster in and out, same crowd inside.", "باب ثانٍ: دخول وخروج أسرع، ونفس العدد بالداخل."] },
          { q: ["Raising the temperature increases the rate of reaction mainly because...", "يزداد معدل التفاعل برفع درجة الحرارة أساسًا لأن..."],
            c: [["the fraction of activated molecules increases", "نسبة الجزيئات المنشطة تزداد"], ["the activation energy increases", "طاقة التنشيط تزداد"], ["the concentration of reactants increases", "تركيز المتفاعلات يزداد"], ["the equilibrium constant becomes zero", "ثابت الاتزان يصبح صفرًا"]],
            off: ["More molecules gain kinetic energy ≥ activation energy, so more collisions are effective; many rates double for each 10 °C.", "يكتسب عدد أكبر من الجزيئات طاقة حركة ≥ طاقة التنشيط فتزداد التصادمات الفعالة، ويتضاعف كثير من المعدلات لكل 10 °س."],
            sto: ["Fast music: more dancers have enough energy to break pairs.", "موسيقى سريعة: راقصون أكثر لديهم طاقة كافية لفك الأزواج."] },
          { q: ["Adding more FeCl₃ to FeCl₃ + 3NH₄SCN ⇌ Fe(SCN)₃ + 3NH₄Cl at equilibrium makes the solution...", "إضافة المزيد من FeCl₃ إلى FeCl₃ + 3NH₄SCN ⇌ Fe(SCN)₃ + 3NH₄Cl عند الاتزان تجعل المحلول..."],
            c: [["deeper blood red (more Fe(SCN)₃)", "أكثر احمرارًا (يزداد Fe(SCN)₃)"], ["colourless", "عديم اللون"], ["paler red", "أفتح احمرارًا"], ["unchanged", "دون تغير"]],
            off: ["Increasing a reactant shifts equilibrium forward (Le Chatelier), forming more red iron(III) thiocyanate.", "زيادة تركيز أحد المتفاعلات تزيح الاتزان طرديًا (لوشاتيلييه) فيتكون مزيد من ثيوسيانات الحديد III الحمراء."],
            sto: ["More people at the bottom, more go up.", "ناس أكثر في الأسفل، فيصعد عدد أكبر."] }
        ]
      },
      {
        id: "sec3chemu3l3", icon: "💧", page: 66,
        title: { en: "Ionic Equilibrium: Ostwald's Law, pH and Solubility Product", ar: "الاتزان الأيوني: قانون أوستفالد والأس الهيدروجيني وحاصل الإذابة" },
        idea: {
          official: {
            en: ["Strong electrolytes (HCl in water) ionize completely; weak electrolytes (acetic acid) ionize partially, and an ionic equilibrium is set up between unionized molecules and their ions. 0.1 M HCl lights the lamp brightly; 0.1 M acetic acid gives a faint light that grows on dilution.",
              "The proton is never free: " + eq("HCl + H₂O → H₃O⁺ + Cl⁻") + " (hydronium ion). Ostwald's dilution law for a weak acid: " + eq("Ka = α²C / (1 − α) ≈ α²C") + ", so α rises as the solution is diluted. Example: 0.1 M HCN, Ka = 7.2×10⁻¹⁰: " + eq("α = √(7.2×10⁻¹⁰ ÷ 0.1) = 8.5×10⁻⁵") + ".",
              "Hydronium ion of a weak acid: " + eq("[H₃O⁺] = √(Ka × Ca)") + ". For 0.1 M acetic acid (Ka = 1.8×10⁻⁵): [H₃O⁺] = 1.34×10⁻³ M. For a weak base: " + eq("[OH⁻] = √(Kb × Cb)") + " (ammonia, Kb = 1.8×10⁻⁵).",
              "Water ionizes very slightly: " + eq("Kw = [H⁺][OH⁻] = 10⁻¹⁴") + " at 25 °C; in pure water both are 10⁻⁷ M. " + eq("pH = −log[H₃O⁺]") + " and " + eq("pH + pOH = 14") + ": neutral pH 7, acidic < 7, basic > 7.",
              "Solubility product: in a saturated solution of a sparingly soluble salt, " + eq("PbBr₂ ⇌ Pb²⁺ + 2Br⁻, Ksp = [Pb²⁺][Br⁻]²") + ". Worked example: Ag₂SO₄ solubility 1.4×10⁻² M → [Ag⁺] = 2.8×10⁻², [SO₄²⁻] = 1.4×10⁻²: " + eq("Ksp = (2.8×10⁻²)² × 1.4×10⁻² = 1.0976×10⁻⁵") + ".",
              "Solubility varies widely: KNO₃ 31.6 g / 100 mL but AgCl only 0.0016 g / 100 mL at 20 °C."],
            ar: ["الإلكتروليتات القوية (HCl في الماء) تتأين تأينًا تامًا، والإلكتروليتات الضعيفة (حمض الأسيتيك) تتأين جزئيًا وينشأ اتزان أيوني بين الجزيئات غير المتأينة وأيوناتها؛ فمحلول HCl تركيزه 0.1 مولر يضيء المصباح بشدة، ومحلول حمض الأسيتيك 0.1 مولر يعطي ضوءًا خافتًا يزداد بالتخفيف.",
              "البروتون لا يوجد حرًا: " + eq("HCl + H₂O → H₃O⁺ + Cl⁻") + " (أيون الهيدرونيوم)، وقانون أوستفالد للتخفيف لحمض ضعيف: " + eq("Ka = α²C / (1 − α) ≈ α²C") + " فتزداد درجة التأين α بالتخفيف، مثال: HCN تركيزه 0.1 مولر و Ka = 7.2×10⁻¹⁰: " + eq("α = √(7.2×10⁻¹⁰ ÷ 0.1) = 8.5×10⁻⁵") + ".",
              "تركيز أيون الهيدرونيوم لحمض ضعيف: " + eq("[H₃O⁺] = √(Ka × Ca)") + "، ولحمض الأسيتيك 0.1 مولر (Ka = 1.8×10⁻⁵): [H₃O⁺] = 1.34×10⁻³ مولر، وللقاعدة الضعيفة: " + eq("[OH⁻] = √(Kb × Cb)") + " (النشادر Kb = 1.8×10⁻⁵).",
              "يتأين الماء تأينًا ضعيفًا جدًا: " + eq("Kw = [H⁺][OH⁻] = 10⁻¹⁴") + " عند 25 °س، وفي الماء النقي كل منهما 10⁻⁷ مولر، و " + eq("pH = −log[H₃O⁺]") + " و " + eq("pH + pOH = 14") + ": المتعادل pH = 7، والحمضي أقل من 7، والقاعدي أكبر من 7.",
              "حاصل الإذابة: في المحلول المشبع لملح شحيح الذوبان " + eq("PbBr₂ ⇌ Pb²⁺ + 2Br⁻, Ksp = [Pb²⁺][Br⁻]²") + "، مثال محلول: درجة ذوبان Ag₂SO₄ تساوي 1.4×10⁻² مولر ← [Ag⁺] = 2.8×10⁻² و [SO₄²⁻] = 1.4×10⁻²: " + eq("Ksp = (2.8×10⁻²)² × 1.4×10⁻² = 1.0976×10⁻⁵") + ".",
              "تختلف الذوبانية كثيرًا: KNO₃ يذوب منه 31.6 جم / 100 مل بينما AgCl يذوب منه 0.0016 جم / 100 مل فقط عند 20 °س."]
          },
          story: {
            en: ["Mostafa's mother keeps vinegar and a bottle of hydrochloric acid cleaner (maya' nar) under the kitchen sink in their Giza flat.",
              "At the same concentration, the cleaner is fierce and the vinegar is gentle. Mostafa imagines the HCl molecules all splitting into ions, while most acetic acid molecules stay holding hands.",
              "When his mum dilutes the vinegar in a big bowl of salad water, a larger fraction of the molecules let go: Ostwald's law, α rises with dilution.",
              "He dips pH strips from the pharmacy: lemon juice about 2, rain water a bit below 7, saliva near 7, washing soda well above 7.",
              "The white scale in the kettle barely dissolves at all: a tiny solubility product."],
            ar: ["والدة مصطفى تحتفظ بالخل وزجاجة منظف 'ماء النار' (حمض الهيدروكلوريك) تحت حوض المطبخ في شقتهم بالجيزة.",
              "عند نفس التركيز يكون المنظف شرسًا والخل لطيفًا؛ يتخيل مصطفى جزيئات HCl كلها تتفكك إلى أيونات، بينما تظل معظم جزيئات حمض الأسيتيك متماسكة الأيدي.",
              "عندما تخفف والدته الخل في وعاء كبير من ماء السلطة تترك نسبة أكبر من الجزيئات أيدي بعضها؛ قانون أوستفالد: تزداد α بالتخفيف.",
              "يغمس شرائط pH من الصيدلية: عصير الليمون نحو 2، وماء المطر أقل قليلًا من 7، واللعاب قرب 7، وصودا الغسيل أعلى كثيرًا من 7.",
              "الجير الأبيض في الغلاية لا يكاد يذوب إطلاقًا: حاصل إذابة صغير جدًا."]
          }
        },
        words: [
          ["Weak electrolyte", "الإلكتروليت الضعيف", "A substance that ionizes only partially in water, e.g. acetic acid, ammonia.", "مادة تتأين جزئيًا في الماء مثل حمض الأسيتيك والنشادر."],
          ["Ionic equilibrium", "الاتزان الأيوني", "The equilibrium between the molecules of a weak electrolyte and its ions.", "الاتزان بين جزيئات الإلكتروليت الضعيف والأيونات الناتجة منه."],
          ["Ostwald's dilution law", "قانون أوستفالد للتخفيف", "Ka = α²C for a weak electrolyte: the degree of ionization increases with dilution.", "Ka = α²C للإلكتروليت الضعيف: تزداد درجة التأين بالتخفيف."],
          ["Hydronium ion", "أيون الهيدرونيوم", "H₃O⁺: a proton joined to a water molecule by a coordinate bond.", "H₃O⁺: بروتون مرتبط بجزيء ماء برابطة تناسقية."],
          ["Ionic product of water Kw", "الحاصل الأيوني للماء Kw", "[H⁺][OH⁻] = 1×10⁻¹⁴ at 25 °C.", "[H⁺][OH⁻] = 1×10⁻¹⁴ عند 25 °س."],
          ["pH", "الأس الهيدروجيني pH", "The negative logarithm (base 10) of the hydrogen (hydronium) ion concentration.", "اللوغاريتم السالب للأساس 10 لتركيز أيون الهيدروجين (الهيدرونيوم)."],
          ["Solubility product Ksp", "حاصل الإذابة Ksp", "Product of the ion concentrations (mol/L), each raised to its number of ions, in a saturated solution of a sparingly soluble salt.", "حاصل ضرب تركيزات الأيونات (مول/لتر) كل مرفوع لأس عدده في المحلول المشبع لملح شحيح الذوبان."]
        ],
        lab: { parts: [{ type: "sec3chem_ostwald" }] },
        quiz: [
          { q: ["Calculate [H₃O⁺] in 0.1 M acetic acid (Ka = 1.8×10⁻⁵).", "احسب [H₃O⁺] في محلول حمض أسيتيك تركيزه 0.1 مولر (Ka = 1.8×10⁻⁵)."],
            c: [["1.34×10⁻³ M", "1.34×10⁻³ مولر"], ["1.8×10⁻⁶ M", "1.8×10⁻⁶ مولر"], ["0.1 M", "0.1 مولر"], ["4.2×10⁻³ M", "4.2×10⁻³ مولر"]],
            off: [eq("[H₃O⁺] = √(Ka × C) = √(1.8×10⁻⁵ × 0.1) = √(1.8×10⁻⁶) = 1.34×10⁻³ M") + ". Forgetting the square root gives 1.8×10⁻⁶.", eq("[H₃O⁺] = √(Ka × C) = √(1.8×10⁻⁵ × 0.1) = √(1.8×10⁻⁶) = 1.34×10⁻³ M") + "، ونسيان الجذر يعطي 1.8×10⁻⁶."],
            sto: ["Only a few vinegar molecules let go of their protons.", "قليل فقط من جزيئات الخل تترك بروتوناتها."] },
          { q: ["The degree of ionization of 0.1 M HCN (Ka = 7.2×10⁻¹⁰) is...", "درجة تأين HCN تركيزه 0.1 مولر (Ka = 7.2×10⁻¹⁰) تساوي..."],
            c: [["8.5×10⁻⁵", "8.5×10⁻⁵"], ["7.2×10⁻⁹", "7.2×10⁻⁹"], ["2.7×10⁻⁵", "2.7×10⁻⁵"], ["8.5×10⁻³", "8.5×10⁻³"]],
            off: ["Ostwald: " + eq("α = √(Ka/C) = √(7.2×10⁻⁹) = 8.5×10⁻⁵") + ".", "قانون أوستفالد: " + eq("α = √(Ka/C) = √(7.2×10⁻⁹) = 8.5×10⁻⁵") + "."],
            sto: ["Fewer than one molecule in ten thousand ionizes.", "أقل من جزيء واحد في كل عشرة آلاف يتأين."] },
          { q: ["What happens to the degree of ionization of acetic acid when the solution is diluted?", "ماذا يحدث لدرجة تأين حمض الأسيتيك عند تخفيف المحلول؟"],
            c: [["It increases, while Ka stays constant", "تزداد بينما تظل Ka ثابتة"], ["It decreases", "تقل"], ["It stays the same", "تظل ثابتة"], ["Ka increases with it", "تزداد Ka معها"]],
            off: [eq("Ka = α²C") + " is constant at constant temperature, so a smaller C means a larger α. HCl is unaffected because it is already 100% ionized.", eq("Ka = α²C") + " ثابتة عند ثبوت درجة الحرارة، فنقص C يعني زيادة α، ولا يتأثر HCl لأنه متأين 100% أصلًا."],
            sto: ["In the big salad bowl, more vinegar molecules let go.", "في وعاء السلطة الكبير تترك جزيئات خل أكثر أيدي بعضها."] },
          { q: ["A solution has [H₃O⁺] = 10⁻³ M at 25 °C. Its pOH and [OH⁻] are...", "محلول فيه [H₃O⁺] = 10⁻³ مولر عند 25 °س. قيمة pOH و [OH⁻] هي..."],
            c: [["pOH = 11, [OH⁻] = 10⁻¹¹ M", "pOH = 11 و [OH⁻] = 10⁻¹¹ مولر"], ["pOH = 3, [OH⁻] = 10⁻³ M", "pOH = 3 و [OH⁻] = 10⁻³ مولر"], ["pOH = 7, [OH⁻] = 10⁻⁷ M", "pOH = 7 و [OH⁻] = 10⁻⁷ مولر"], ["pOH = 11, [OH⁻] = 10⁻³ M", "pOH = 11 و [OH⁻] = 10⁻³ مولر"]],
            off: ["pH = 3, so pOH = 14 − 3 = 11, and [OH⁻] = Kw ÷ [H⁺] = 10⁻¹⁴ ÷ 10⁻³ = 10⁻¹¹ M.", "pH = 3، إذن pOH = 14 − 3 = 11، و [OH⁻] = Kw ÷ [H⁺] = 10⁻¹⁴ ÷ 10⁻³ = 10⁻¹¹ مولر."],
            sto: ["H⁺ and OH⁻ share the number 14 between them.", "أيونا H⁺ و OH⁻ يتقاسمان الرقم 14 بينهما."] },
          { q: ["The solubility of Ag₂SO₄ is 1.4×10⁻² mol/L. Its Ksp is...", "درجة ذوبان Ag₂SO₄ تساوي 1.4×10⁻² مول/لتر. قيمة Ksp هي..."],
            c: [["1.0976×10⁻⁵", "1.0976×10⁻⁵"], ["2.744×10⁻⁶", "2.744×10⁻⁶"], ["1.96×10⁻⁴", "1.96×10⁻⁴"], ["3.92×10⁻⁴", "3.92×10⁻⁴"]],
            off: [eq("Ag₂SO₄ ⇌ 2Ag⁺ + SO₄²⁻") + ". " + eq("Ksp = (2 × 1.4×10⁻²)² × 1.4×10⁻² = 7.84×10⁻⁴ × 1.4×10⁻² = 1.0976×10⁻⁵") + ". Forgetting to double [Ag⁺] gives 2.744×10⁻⁶.", eq("Ag₂SO₄ ⇌ 2Ag⁺ + SO₄²⁻") + "، و " + eq("Ksp = (2 × 1.4×10⁻²)² × 1.4×10⁻² = 7.84×10⁻⁴ × 1.4×10⁻² = 1.0976×10⁻⁵") + "، ونسيان مضاعفة [Ag⁺] يعطي 2.744×10⁻⁶."],
            sto: ["Each formula unit releases two silver ions: double, then square.", "كل وحدة صيغة تطلق أيوني فضة: ضاعف ثم ربّع."] },
          { q: ["The pH of 0.1 M ammonia solution (Kb = 1.8×10⁻⁵) at 25 °C is about...", "قيمة pH لمحلول نشادر تركيزه 0.1 مولر (Kb = 1.8×10⁻⁵) عند 25 °س تقريبًا..."],
            c: [["11.13", "11.13"], ["2.87", "2.87"], ["13", "13"], ["7", "7"]],
            off: [eq("[OH⁻] = √(1.8×10⁻⁵ × 0.1) = 1.34×10⁻³") + ", pOH = 2.87, so pH = 14 − 2.87 = 11.13. (2.87 is the pOH, not the pH.)", eq("[OH⁻] = √(1.8×10⁻⁵ × 0.1) = 1.34×10⁻³") + " و pOH = 2.87، إذن pH = 14 − 2.87 = 11.13 (و 2.87 هي pOH لا pH)."],
            sto: ["A weak base: basic, but far from the 13 of strong NaOH.", "قاعدة ضعيفة: قاعدية لكنها بعيدة عن 13 لهيدروكسيد الصوديوم القوي."] },
          { q: ["Why can the law of mass action NOT be applied to strong electrolytes like HCl in water?", "لماذا لا يمكن تطبيق قانون فعل الكتلة على الإلكتروليتات القوية مثل HCl في الماء؟"],
            c: [["They ionize completely, so there is no equilibrium with unionized molecules", "لأنها تامة التأين فلا يوجد اتزان مع جزيئات غير متأينة"], ["They do not conduct electricity", "لأنها لا توصل الكهرباء"], ["They are covalent in water", "لأنها تساهمية في الماء"], ["Their Ka is zero", "لأن Ka لها صفر"]],
            off: ["Mass action needs a reversible equilibrium; strong electrolytes are ~100% ionized, so practically no molecules remain.", "يحتاج قانون فعل الكتلة إلى اتزان انعكاسي، والإلكتروليتات القوية متأينة بنسبة 100% تقريبًا فلا يتبقى جزيئات."],
            sto: ["The cleaner's molecules have all let go: nothing to balance.", "جزيئات المنظف تركت أيدي بعضها كلها: لا شيء للموازنة."] }
        ]
      }
    ]
  });

  /* ================= UNIT 4: ELECTROCHEMISTRY ================= */
  G.units.push({
    id: "sec3chemu4", num: 4, icon: "🔋", color: "purple",
    title: { en: "Electrochemistry", ar: "الكيمياء الكهربية" },
    lessons: [
      {
        id: "sec3chemu4l1", icon: "⚡", page: 83,
        title: { en: "Galvanic Cells and the Electromotive Series", ar: "الخلايا الجلفانية والسلسلة الكهروكيميائية" },
        idea: {
          official: {
            en: ["Electrochemistry studies the conversion between chemical and electrical energy through redox reactions. A zinc sheet in blue CuSO₄ gets coated with red copper: " + eq("Zn + Cu²⁺ → Zn²⁺ + Cu") + " (oxidation: " + eq("Zn → Zn²⁺ + 2e⁻") + "; reduction: " + eq("Cu²⁺ + 2e⁻ → Cu") + ").",
              "A galvanic cell (e.g. the Daniell cell) gets electric current from a spontaneous redox reaction: Zn anode (negative pole, oxidation) and Cu cathode (positive pole, reduction), each in its own salt solution, joined by a wire and a salt bridge.",
              "The salt bridge (U-tube of a strong electrolyte such as Na₂SO₄ whose ions do not react) connects the two solutions indirectly and neutralizes the excess charges formed. Without it, the reaction and the current stop.",
              "Electrode potentials are measured against the standard hydrogen electrode (SHE): Pt covered with platinum black, H₂ at 1 atm, [H⁺] = 1 mol/L, potential = 0 V. The electromotive series lists elements by descending standard oxidation potential.",
              "Elements at the top are good reducing agents, act as anodes to those below them, displace the ions of those below, and those above H displace hydrogen from acids: " + eq("Fe + 2HCl → FeCl₂ + H₂") + ".",
              "Worked example (Daniell): E°(Cu²⁺/Cu) = +0.34 V, E°(Zn²⁺/Zn) = −0.76 V. " + eq("E_cell = E°red(cathode) − E°red(anode) = 0.34 − (−0.76) = 1.1 V") + "; a galvanic cell's emf is always positive."],
            ar: ["تهتم الكيمياء الكهربية بدراسة التحول المتبادل بين الطاقة الكيميائية والطاقة الكهربية من خلال تفاعلات الأكسدة والاختزال، فلوح الخارصين في محلول CuSO₄ الأزرق تترسب عليه طبقة نحاس حمراء: " + eq("Zn + Cu²⁺ → Zn²⁺ + Cu") + " (أكسدة: " + eq("Zn → Zn²⁺ + 2e⁻") + "، واختزال: " + eq("Cu²⁺ + 2e⁻ → Cu") + ").",
              "الخلية الجلفانية (مثل خلية دانيال) نحصل منها على تيار كهربي من تفاعل أكسدة واختزال تلقائي: أنود الخارصين (القطب السالب، أكسدة) وكاثود النحاس (القطب الموجب، اختزال)، كل منهما في محلول أحد أملاحه، ويتصلان بسلك وقنطرة ملحية.",
              "القنطرة الملحية (أنبوبة على شكل U بها إلكتروليت قوي مثل Na₂SO₄ لا تتفاعل أيوناته) تصل بين المحلولين بطريقة غير مباشرة وتعادل الشحنات الزائدة المتكونة، وفي غيابها يتوقف التفاعل ويتوقف التيار.",
              "تُقاس جهود الأقطاب بالنسبة لقطب الهيدروجين القياسي: صفيحة بلاتين مغطاة بالبلاتين الأسود يمر عليها H₂ تحت ضغط 1 ض.ج في محلول [H⁺] فيه 1 مول/لتر، وجهده = صفر فولت، والسلسلة الكهروكيميائية ترتيب العناصر تنازليًا حسب جهود تأكسدها القياسية.",
              "العناصر في مقدمة السلسلة عوامل مختزلة قوية وتعمل كأنود بالنسبة لما يليها، وتحل محل أيونات العناصر التي تليها، والعناصر التي تسبق الهيدروجين تحل محله في الأحماض: " + eq("Fe + 2HCl → FeCl₂ + H₂") + ".",
              "مثال محلول (خلية دانيال): جهد اختزال Cu²⁺/Cu = +0.34 فولت، و Zn²⁺/Zn = −0.76 فولت: " + eq("E_cell = E°red(cathode) − E°red(anode) = 0.34 − (−0.76) = 1.1 V") + "، والقوة الدافعة للخلية الجلفانية موجبة دائمًا."]
          },
          story: {
            en: ["Jana's science club at school in Tanta builds a 'lemon-free battery' with a zinc strip, a copper strip, two cups and a paper towel soaked in salt water as a bridge.",
              "She imagines zinc atoms as generous people at a market who give away two electrons each and walk into the solution as Zn²⁺.",
              "The electrons travel through the wire (like delivery bikes on the ring road) to copper, where Cu²⁺ customers catch them and settle as shiny copper.",
              "When her friend lifts the soaked paper towel, the LED dies instantly: no salt bridge, no balancing of charges, no current.",
              "With a magnesium ribbon instead of zinc the LED shines brighter: magnesium is higher in the electromotive series, so the voltage is bigger."],
            ar: ["نادي العلوم في مدرسة جنى بطنطا يصنع 'بطارية بلا ليمون' من شريحة خارصين وشريحة نحاس وكوبين ومنديل ورقي مبلل بماء مالح كقنطرة.",
              "تتخيل ذرات الخارصين أشخاصًا كرماء في السوق يعطي كل منهم إلكترونين ثم يدخل المحلول أيون Zn²⁺.",
              "تسافر الإلكترونات في السلك (مثل موتوسيكلات التوصيل على الطريق الدائري) إلى النحاس، حيث يلتقطها زبائن Cu²⁺ ويستقرون نحاسًا لامعًا.",
              "عندما ترفع صديقتها المنديل المبلل ينطفئ الثنائي الضوئي فورًا: لا قنطرة ملحية، لا تعادل للشحنات، لا تيار.",
              "وباستخدام شريط ماغنسيوم بدل الخارصين يضيء الثنائي أكثر: الماغنسيوم أعلى في السلسلة الكهروكيميائية فيكون الجهد أكبر."]
          }
        },
        words: [
          ["Galvanic cell", "الخلية الجلفانية", "A cell that produces electric current from a spontaneous redox reaction.", "خلية تنتج تيارًا كهربيًا من تفاعل أكسدة واختزال تلقائي."],
          ["Anode", "الأنود (المصعد)", "The electrode where oxidation occurs; the negative pole in a galvanic cell.", "القطب الذي تحدث عنده الأكسدة، وهو القطب السالب في الخلية الجلفانية."],
          ["Cathode", "الكاثود (المهبط)", "The electrode where reduction occurs; the positive pole in a galvanic cell.", "القطب الذي يحدث عنده الاختزال، وهو القطب الموجب في الخلية الجلفانية."],
          ["Salt bridge", "القنطرة الملحية", "A U-tube of strong electrolyte that links the half-cells indirectly and neutralizes excess ions.", "أنبوبة على شكل U بها إلكتروليت قوي تصل نصفي الخلية بطريقة غير مباشرة وتعادل الأيونات الزائدة."],
          ["Standard hydrogen electrode", "قطب الهيدروجين القياسي", "Platinum black, H₂ at 1 atm, [H⁺] = 1 M; potential taken as zero.", "بلاتين أسود و H₂ تحت ضغط 1 ض.ج و [H⁺] = 1 مولر، وجهده يساوي صفرًا."],
          ["Electromotive series", "السلسلة الكهروكيميائية", "Elements arranged in descending order of standard oxidation potential.", "ترتيب العناصر تنازليًا حسب جهود تأكسدها القياسية."],
          ["emf (E cell)", "القوة الدافعة الكهربية", "The cell potential: E°red(cathode) − E°red(anode); always positive for a galvanic cell.", "جهد الخلية = جهد اختزال الكاثود − جهد اختزال الأنود، وتكون موجبة دائمًا للخلية الجلفانية."]
        ],
        lab: { parts: [{ type: "sec3chem_daniell" }] },
        quiz: [
          { q: ["Calculate the emf of the Daniell cell. (E°red: Cu²⁺/Cu = +0.34 V, Zn²⁺/Zn = −0.76 V)", "احسب القوة الدافعة لخلية دانيال. (جهد الاختزال: Cu²⁺/Cu = +0.34 فولت، Zn²⁺/Zn = −0.76 فولت)"],
            c: [["1.10 V", "1.10 فولت"], ["0.42 V", "0.42 فولت"], ["−1.10 V", "−1.10 فولت"], ["0.26 V", "0.26 فولت"]],
            off: [eq("E = 0.34 − (−0.76) = 1.10 V") + ". Adding the reduction potentials directly gives the wrong 0.42 V.", eq("E = 0.34 − (−0.76) = 1.10 V") + "، وجمع جهدي الاختزال مباشرة يعطي 0.42 فولت الخاطئة."],
            sto: ["Jana's voltmeter showed 1.1 V with zinc and copper.", "أظهر فولتميتر جنى 1.1 فولت مع الخارصين والنحاس."] },
          { q: ["In the Daniell cell, the anode is ___ and it is the ___ pole.", "في خلية دانيال الأنود هو ___ وهو القطب ___."],
            c: [["zinc; negative", "الخارصين؛ السالب"], ["copper; positive", "النحاس؛ الموجب"], ["zinc; positive", "الخارصين؛ الموجب"], ["copper; negative", "النحاس؛ السالب"]],
            off: ["Oxidation (Zn → Zn²⁺ + 2e⁻) happens at the anode; electrons leave from it, so it is the negative pole.", "تحدث الأكسدة (Zn → Zn²⁺ + 2e⁻) عند الأنود وتخرج منه الإلكترونات فهو القطب السالب."],
            sto: ["The generous zinc atoms give away the electrons.", "ذرات الخارصين الكريمة هي من تعطي الإلكترونات."] },
          { q: ["What happens if the salt bridge is removed from a working galvanic cell?", "ماذا يحدث إذا نُزعت القنطرة الملحية من خلية جلفانية تعمل؟"],
            c: [["The current stops because charges are no longer neutralized", "يتوقف التيار لعدم معادلة الشحنات"], ["The voltage doubles", "يتضاعف الجهد"], ["Nothing: the wire is enough", "لا شيء: السلك يكفي"], ["The anode becomes the cathode", "يصبح الأنود كاثودًا"]],
            off: ["Excess Zn²⁺ builds up in one half-cell and excess SO₄²⁻ in the other; without the bridge the redox reaction stops and so does the current.", "تتراكم أيونات Zn²⁺ الزائدة في نصف خلية و SO₄²⁻ الزائدة في الآخر، وبدون القنطرة يتوقف التفاعل ويتوقف التيار."],
            sto: ["Jana's LED died when the soaked paper was lifted.", "انطفأ الثنائي عندما رُفع المنديل المبلل."] },
          { q: ["Which metal is the strongest reducing agent? (E°red: Mg −2.37, Zn −0.76, Cu +0.34, Ag +0.80 V)", "أي فلز هو أقوى عامل مختزل؟ (جهود الاختزال: Mg −2.37 و Zn −0.76 و Cu +0.34 و Ag +0.80 فولت)"],
            c: [["Mg", "Mg"], ["Zn", "Zn"], ["Cu", "Cu"], ["Ag", "Ag"]],
            off: ["The most negative reduction potential = the highest oxidation potential (+2.37 V): Mg loses electrons most easily.", "أكثر جهد اختزال سالبية = أعلى جهد تأكسد (+2.37 فولت)؛ فالماغنسيوم يفقد الإلكترونات بأكبر سهولة."],
            sto: ["Magnesium is the most generous giver at the market.", "الماغنسيوم أكرم المعطين في السوق."] },
          { q: ["The emf of a Mg / Cu galvanic cell is... (E°red: Mg −2.37 V, Cu +0.34 V)", "القوة الدافعة لخلية جلفانية Mg / Cu هي... (جهد الاختزال: Mg −2.37 فولت، Cu +0.34 فولت)"],
            c: [["2.71 V", "2.71 فولت"], ["2.03 V", "2.03 فولت"], ["−2.71 V", "−2.71 فولت"], ["1.10 V", "1.10 فولت"]],
            off: ["Mg is the anode. " + eq("E = 0.34 − (−2.37) = 2.71 V") + ".", "الماغنسيوم هو الأنود، و " + eq("E = 0.34 − (−2.37) = 2.71 V") + "."],
            sto: ["Swapping zinc for magnesium made Jana's LED brighter.", "استبدال الخارصين بالماغنسيوم جعل ثنائي جنى أكثر إضاءة."] },
          { q: ["The potential of the standard hydrogen electrode is taken as zero when...", "يُعتبر جهد قطب الهيدروجين القياسي صفرًا عندما..."],
            c: [["H₂ is at 1 atm and [H⁺] = 1 mol/L", "يكون ضغط H₂ = 1 ض.ج و [H⁺] = 1 مول/لتر"], ["H₂ is at 2 atm and [H⁺] = 0.5 mol/L", "يكون ضغط H₂ = 2 ض.ج و [H⁺] = 0.5 مول/لتر"], ["it is made of copper", "يكون مصنوعًا من النحاس"], ["no hydrogen gas is passed", "لا يمر غاز هيدروجين"]],
            off: ["Standard conditions: platinum black surface, H₂ at 1 atm, H⁺ at 1 mol/L. Changing either changes the potential.", "الظروف القياسية: سطح بلاتين أسود، و H₂ تحت ضغط 1 ض.ج، و H⁺ تركيزه 1 مول/لتر، وتغيير أي منهما يغير الجهد."],
            sto: ["Zero on the ruler only if the ruler is placed correctly.", "صفر المسطرة صحيح فقط إذا وُضعت المسطرة بشكل صحيح."] }
        ]
      },
      {
        id: "sec3chemu4l2", icon: "🔋", page: 91,
        title: { en: "Batteries, Fuel Cells and Corrosion", ar: "البطاريات وخلايا الوقود وتآكل الفلزات" },
        idea: {
          official: {
            en: ["Primary cells store chemical energy and give current through an irreversible reaction; they cannot be recharged. Mercury cell: Zn anode, HgO cathode, KOH electrolyte, " + eq("Zn + HgO → ZnO + Hg") + ", 1.35 V (watches, cameras; dispose of safely).",
              "Fuel cell: " + eq("2H₂ + O₂ → 2H₂O") + ", E = 1.23 V, KOH electrolyte between porous carbon electrodes. It is not consumed and does not store energy: it needs a continuous supply of fuel; the water can be drunk by astronauts.",
              "Secondary cells are rechargeable. Lead-acid (car) battery: 6 cells × 2 V = 12 V; anode Pb, cathode PbO₂, dilute H₂SO₄. Discharge: both plates become PbSO₄; " + eq("E = 0.36 + 1.69 = 2.05 V") + " per cell. Acid density 1.28-1.30 g/cm³ when charged; below 1.2 it needs recharging. On charging it works as an electrolytic cell.",
              "Lithium-ion battery: anode LiC₆ (lithium graphite), cathode LiCoO₂, electrolyte LiPF₆, about 3 V; light, small and stores much energy (phones, laptops, modern cars).",
              "Corrosion is the chemical destruction of metals by the environment through local galvanic cells: iron (anode) " + eq("2Fe → 2Fe²⁺ + 4e⁻") + ", oxygen at the cathode (carbon impurities) " + eq("O₂ + 2H₂O + 4e⁻ → 4OH⁻") + ", overall " + eq("2Fe + 3H₂O + 3/2 O₂ → 2Fe(OH)₃") + ". Salt water speeds it up.",
              "Protection: painting; cathodic cover by a less active metal (tin on cans: if scratched, iron rusts faster); anodic cover by a more active metal (zinc galvanizing; Mg sacrificial electrode on ships and buried pipes corrodes instead of iron)."],
            ar: ["الخلايا الأولية تخزن الطاقة في صورة كيميائية وتعطي تيارًا من تفاعل غير انعكاسي فلا يمكن إعادة شحنها، ومنها خلية الزئبق: أنود Zn وكاثود HgO وإلكتروليت KOH، و " + eq("Zn + HgO → ZnO + Hg") + "، وجهدها 1.35 فولت (الساعات والكاميرات، ويجب التخلص منها بطريقة آمنة).",
              "خلية الوقود: " + eq("2H₂ + O₂ → 2H₂O") + "، وجهدها 1.23 فولت، والإلكتروليت KOH بين قطبين من الكربون المسامي، ولا تُستهلك ولا تخزن الطاقة بل تحتاج إمدادًا مستمرًا بالوقود، ويُستفاد بالماء الناتج للشرب في سفن الفضاء.",
              "الخلايا الثانوية قابلة لإعادة الشحن، ومنها المركم الرصاصي (بطارية السيارة): 6 خلايا × 2 فولت = 12 فولت، والأنود Pb والكاثود PbO₂ في H₂SO₄ مخفف، وعند التفريغ يتحول اللوحان إلى PbSO₄، و " + eq("E = 0.36 + 1.69 = 2.05 V") + " لكل خلية، وكثافة الحمض 1.28-1.30 جم/سم³ عند الشحن الكامل، وإذا قلت عن 1.2 احتاجت البطارية للشحن، وعند الشحن تعمل كخلية إلكتروليتية.",
              "بطارية أيون الليثيوم: الأنود LiC₆ (ليثيوم جرافيت) والكاثود LiCoO₂ والإلكتروليت LiPF₆، وجهدها نحو 3 فولت، خفيفة صغيرة الحجم وتخزن طاقة كبيرة (المحمول والحاسب والسيارات الحديثة).",
              "التآكل هو التلف الكيميائي للفلزات بفعل البيئة من خلال خلايا جلفانية موضعية: الحديد (أنود) " + eq("2Fe → 2Fe²⁺ + 4e⁻") + "، والأكسجين عند الكاثود (شوائب الكربون) " + eq("O₂ + 2H₂O + 4e⁻ → 4OH⁻") + "، والمعادلة الكلية " + eq("2Fe + 3H₂O + 3/2 O₂ → 2Fe(OH)₃") + "، والماء المالح يسرّعه.",
              "الحماية: الطلاء بالدهانات، والتغطية الكاثودية بفلز أقل نشاطًا (القصدير على علب الطعام: إذا خُدش يصدأ الحديد أسرع)، والتغطية الأنودية بفلز أنشط (جلفنة الحديد بالخارصين، والماغنسيوم كقطب مضحٍّ في السفن والمواسير المدفونة يتآكل بدلًا من الحديد)."]
          },
          story: {
            en: ["Adham's father drives a microbus in Assiut. One winter morning it will not start, and the mechanic takes out a hydrometer.",
              "'The acid density is 1.15: your battery is flat. While you drive, the dynamo recharges it, turning PbSO₄ back into Pb and PbO₂.'",
              "On the way home Adham notices the rusty railings by the Nile corniche are worse near the boat docks, where salty spray and wet air never stop.",
              "His uncle, a ship welder in Port Said, says they bolt magnesium blocks to the hulls. 'The magnesium is sacrificed so the steel survives.'",
              "In the kitchen, a scratched tin can rusts fast at the scratch, but the zinc-coated water tank on the roof stays fine even with a dent."],
            ar: ["والد أدهم يقود ميكروباص في أسيوط، وفي صباح شتوي يرفض المحرك الدوران، فيُخرج الميكانيكي مقياس الكثافة (الهيدروميتر).",
              "'كثافة الحمض 1.15، البطارية فارغة؛ وأثناء القيادة يعيد الدينامو شحنها فيحوّل PbSO₄ مرة أخرى إلى Pb و PbO₂.'",
              "في طريق العودة يلاحظ أدهم أن الأسوار الحديدية على كورنيش النيل أكثر صدأً قرب مراسي المراكب حيث الرذاذ والهواء الرطب لا يتوقفان.",
              "عمه لحّام سفن في بورسعيد يقول إنهم يثبتون كتل ماغنسيوم على أجسام السفن: 'نضحّي بالماغنسيوم ليبقى الصلب.'",
              "في المطبخ تصدأ علبة الصفيح المخدوشة سريعًا عند الخدش، بينما يظل خزان المياه المجلفن على السطح سليمًا رغم وجود انبعاج فيه."]
          }
        },
        words: [
          ["Primary cell", "الخلية الأولية", "A non-rechargeable cell with an irreversible reaction, e.g. the mercury cell.", "خلية غير قابلة لإعادة الشحن تفاعلها غير انعكاسي مثل خلية الزئبق."],
          ["Secondary cell", "الخلية الثانوية", "A rechargeable cell with reversible reactions, e.g. lead-acid and lithium-ion batteries.", "خلية قابلة لإعادة الشحن تفاعلاتها انعكاسية مثل المركم الرصاصي وبطارية أيون الليثيوم."],
          ["Fuel cell", "خلية الوقود", "A cell that burns H₂ with O₂ under control to give 1.23 V; it needs a continuous fuel supply.", "خلية تحرق H₂ مع O₂ تحت ظروف محكومة لتعطي 1.23 فولت، وتحتاج إمدادًا مستمرًا بالوقود."],
          ["Lead-acid battery", "المركم الرصاصي", "Car battery: Pb anode, PbO₂ cathode in dilute H₂SO₄; 6 cells give 12 V.", "بطارية السيارة: أنود Pb وكاثود PbO₂ في H₂SO₄ مخفف، و6 خلايا تعطي 12 فولت."],
          ["Corrosion", "التآكل", "Chemical destruction of a metal by its surroundings through local galvanic cells.", "التلف الكيميائي للفلز بفعل البيئة المحيطة من خلال خلايا جلفانية موضعية."],
          ["Sacrificial electrode", "القطب المضحّي", "A more active metal (Mg) joined to iron that corrodes instead of it.", "فلز أنشط (الماغنسيوم) يتصل بالحديد ويتآكل بدلًا منه."],
          ["Galvanization", "الجلفنة", "Coating iron with zinc (anodic protection): zinc corrodes first even if scratched.", "تغطية الحديد بالخارصين (حماية أنودية)، فيتآكل الخارصين أولًا حتى لو خُدش."]
        ],
        lab: { parts: [{ type: "sec3chem_corrode" }] },
        quiz: [
          { q: ["Calculate the emf of one lead-acid cell. (E°ox at anode = +0.36 V, E°red at cathode = +1.69 V)", "احسب القوة الدافعة لخلية واحدة من المركم الرصاصي. (جهد تأكسد الأنود = +0.36 فولت، وجهد اختزال الكاثود = +1.69 فولت)"],
            c: [["2.05 V", "2.05 فولت"], ["1.33 V", "1.33 فولت"], ["12 V", "12 فولت"], ["1.69 V", "1.69 فولت"]],
            off: ["emf = oxidation potential of anode + reduction potential of cathode = 0.36 + 1.69 = 2.05 V (about 2 V). Six cells in series ≈ 12 V.", "القوة الدافعة = جهد تأكسد الأنود + جهد اختزال الكاثود = 0.36 + 1.69 = 2.05 فولت (نحو 2 فولت)، وست خلايا على التوالي ≈ 12 فولت."],
            sto: ["One cell is 2 V; the microbus needs six of them.", "الخلية الواحدة 2 فولت، والميكروباص يحتاج ستًا منها."] },
          { q: ["A car battery needs recharging when the density of its acid falls below...", "تحتاج بطارية السيارة لإعادة الشحن عندما تقل كثافة الحمض فيها عن..."],
            c: [["1.2 g/cm³", "1.2 جم/سم³"], ["1.30 g/cm³", "1.30 جم/سم³"], ["1.0 g/cm³", "1.0 جم/سم³"], ["2.0 g/cm³", "2.0 جم/سم³"]],
            off: ["Fully charged: 1.28-1.30 g/cm³. Discharge uses H₂SO₄ and makes water, so density drops; below 1.2 it must be recharged.", "عند الشحن الكامل: 1.28-1.30 جم/سم³، والتفريغ يستهلك H₂SO₄ وينتج ماء فتقل الكثافة، وإذا قلت عن 1.2 يجب الشحن."],
            sto: ["The mechanic's hydrometer read 1.15: flat battery.", "قرأ هيدروميتر الميكانيكي 1.15: بطارية فارغة."] },
          { q: ["Why does tin-plated iron rust faster than bare iron once it is scratched?", "لماذا يصدأ الحديد المطلي بالقصدير أسرع من الحديد غير المطلي عند خدشه؟"],
            c: [["Iron is more active than tin, so iron becomes the anode of a galvanic cell", "لأن الحديد أنشط من القصدير فيصبح الحديد أنودًا في خلية جلفانية"], ["Tin is more active, so tin corrodes", "لأن القصدير أنشط فيتآكل القصدير"], ["Tin absorbs water", "لأن القصدير يمتص الماء"], ["Tin is a catalyst for rusting", "لأن القصدير عامل حفاز للصدأ"]],
            off: ["Cathodic cover: tin is less active (cathode), iron is the anode and corrodes faster at the scratch.", "تغطية كاثودية: القصدير أقل نشاطًا (كاثود)، والحديد أنود فيتآكل أسرع عند الخدش."],
            sto: ["The scratched can in Adham's kitchen rusted right at the scratch.", "علبة الصفيح المخدوشة في مطبخ أدهم صدئت عند الخدش تمامًا."] },
          { q: ["A magnesium block bolted to a ship's steel hull protects it because...", "كتلة الماغنسيوم المثبتة على جسم السفينة الصلب تحميه لأن..."],
            c: [["Mg is more active, acts as the anode and corrodes instead of iron", "الماغنسيوم أنشط فيعمل كأنود ويتآكل بدلًا من الحديد"], ["Mg is less active and acts as cathode", "الماغنسيوم أقل نشاطًا ويعمل ككاثود"], ["Mg stops oxygen dissolving in sea water", "الماغنسيوم يمنع ذوبان الأكسجين في ماء البحر"], ["Mg turns iron into stainless steel", "الماغنسيوم يحول الحديد إلى صلب لا يصدأ"]],
            off: ["Anodic protection with a sacrificial electrode: Mg is above Fe in the electromotive series, so it is oxidized first.", "حماية أنودية بقطب مضحٍّ: الماغنسيوم يسبق الحديد في السلسلة الكهروكيميائية فيتأكسد أولًا."],
            sto: ["The Port Said welders sacrifice magnesium to save the steel.", "لحّامو بورسعيد يضحّون بالماغنسيوم لإنقاذ الصلب."] },
          { q: ["The overall reaction of the fuel cell and its emf are...", "التفاعل الكلي لخلية الوقود وقوتها الدافعة هما..."],
            c: [["2H₂ + O₂ → 2H₂O, 1.23 V", "2H₂ + O₂ → 2H₂O، 1.23 فولت"], ["Zn + HgO → ZnO + Hg, 1.35 V", "Zn + HgO → ZnO + Hg، 1.35 فولت"], ["Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O, 2 V", "Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O، 2 فولت"], ["2H₂O → 2H₂ + O₂, −1.23 V", "2H₂O → 2H₂ + O₂، −1.23 فولت"]],
            off: ["Anode: 2H₂ + 4OH⁻ → 4H₂O + 4e⁻ (0.83 V); cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻ (0.40 V); total 1.23 V.", "الأنود: 2H₂ + 4OH⁻ → 4H₂O + 4e⁻ (0.83 فولت)، والكاثود: O₂ + 2H₂O + 4e⁻ → 4OH⁻ (0.40 فولت)، والمجموع 1.23 فولت."],
            sto: ["Rocket fuel turned into electricity and drinking water.", "وقود الصواريخ يتحول إلى كهرباء وماء للشرب."] },
          { q: ["During discharge of a lead-acid battery, both electrodes change into...", "أثناء تفريغ المركم الرصاصي يتحول القطبان إلى..."],
            c: [["PbSO₄", "PbSO₄"], ["Pb", "Pb"], ["PbO₂", "PbO₂"], ["PbO", "PbO"]],
            off: ["Anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻; cathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O. Charging reverses this.", "الأنود: Pb + SO₄²⁻ → PbSO₄ + 2e⁻، والكاثود: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O، والشحن يعكس ذلك."],
            sto: ["Both plates turn white with lead sulphate as the battery dies.", "يبيضّ اللوحان بكبريتات الرصاص عندما تفرغ البطارية."] }
        ]
      },
      {
        id: "sec3chemu4l3", icon: "🔌", page: 101,
        title: { en: "Electrolytic Cells, Faraday's Laws and Applications", ar: "الخلايا الإلكتروليتية وقانونا فاراداي وتطبيقات التحليل الكهربي" },
        idea: {
          official: {
            en: ["An electrolytic cell turns electrical energy from an external source into chemical energy through a non-spontaneous redox reaction. The anode is joined to the positive pole (oxidation); the cathode to the negative pole (reduction).",
              "Electrolysis of CuCl₂: anode " + eq("2Cl⁻ → Cl₂ + 2e⁻") + " (−1.36 V), cathode " + eq("Cu²⁺ + 2e⁻ → Cu") + " (+0.34 V). Cell potential = −1.02 V: negative, so it needs an external source. Electrolysis is the chemical decomposition of a substance by passing current through its electrolyte.",
              "Faraday's first law: the mass formed or consumed at an electrode is proportional to the quantity of electricity. Second law: the same quantity of electricity deposits masses proportional to the equivalent masses (Al : Cu : Ag = 9 : 31.78 : 107.88). Equivalent mass = atomic mass ÷ ion charge.",
              eq("Q (C) = I (A) × t (s)") + ". 1 C deposits 1.118 mg of silver; 1 faraday = 96500 C deposits one gram-equivalent of any element. " + eq("m = I × t × eq. mass ÷ 96500") + ".",
              "Worked example: 10000 C through gold(III) chloride: eq. mass of Au = 196.98 ÷ 3 = 65.66 g, so " + eq("m(Au) = 10000 × 65.66 ÷ 96500 = 6.8 g") + " and m(Cl₂) = 10000 × 35.45 ÷ 96500 = 3.67 g.",
              "Applications: electroplating (the object is the cathode, the plating metal the anode, a solution of its ions the electrolyte); extracting Al from bauxite in molten cryolite (melting point lowered from 2045 to 950 °C); purifying copper to 99.95% (impure anode, pure cathode, Ag and Au fall as anode sludge)."],
            ar: ["الخلية الإلكتروليتية تحول الطاقة الكهربية من مصدر خارجي إلى طاقة كيميائية من خلال تفاعل أكسدة واختزال غير تلقائي، والأنود يتصل بالقطب الموجب (أكسدة) والكاثود بالقطب السالب (اختزال).",
              "التحليل الكهربي لمحلول CuCl₂: عند الأنود " + eq("2Cl⁻ → Cl₂ + 2e⁻") + " (−1.36 فولت)، وعند الكاثود " + eq("Cu²⁺ + 2e⁻ → Cu") + " (+0.34 فولت)، وجهد الخلية = −1.02 فولت سالب فيلزم مصدر خارجي، والتحليل الكهربي هو تفكك المادة كيميائيًا بمرور تيار كهربي في إلكتروليتها.",
              "قانون فاراداي الأول: كمية المادة المتكونة أو المستهلكة عند أي قطب تتناسب طرديًا مع كمية الكهرباء المارة، والثاني: كميات المواد المختلفة المتكونة بمرور نفس كمية الكهرباء تتناسب مع كتلها المكافئة (Al : Cu : Ag = 9 : 31.78 : 107.88)، والكتلة المكافئة = الكتلة الذرية ÷ عدد الشحنات.",
              eq("Q (C) = I (A) × t (s)") + "، والكولوم الواحد يرسب 1.118 مجم من الفضة، والفاراداي = 96500 كولوم يرسب الكتلة المكافئة الجرامية لأي عنصر، و " + eq("m = I × t × eq. mass ÷ 96500") + ".",
              "مثال محلول: مرور 10000 كولوم في محلول كلوريد الذهب III: الكتلة المكافئة للذهب = 196.98 ÷ 3 = 65.66 جم، إذن " + eq("m(Au) = 10000 × 65.66 ÷ 96500 = 6.8 g") + " وكتلة الكلور = 10000 × 35.45 ÷ 96500 = 3.67 جم.",
              "التطبيقات: الطلاء الكهربي (الجسم كاثود، وفلز الطلاء أنود، ومحلول أيوناته إلكتروليت)، واستخلاص الألومنيوم من البوكسيت المذاب في الكريوليت المنصهر (خفض درجة الانصهار من 2045 إلى 950 °س)، وتنقية النحاس حتى 99.95% (أنود غير نقي، وكاثود نقي، والفضة والذهب يسقطان أسفل الأنود)."]
          },
          story: {
            en: ["Malak visits a jewellery workshop in Khan el-Khalili, where a craftsman is gold-plating a silver pendant for a bride.",
              "He hangs the pendant on the negative wire, a gold strip on the positive wire, and dips both in a gold salt solution. 'The pendant must be the cathode.'",
              "He sets the current and checks the clock: 'More amperes or more minutes means a thicker layer. That is Faraday's first law.'",
              "Malak calculates: 2 A for 965 seconds is 1930 coulombs, 0.02 faraday. For silver that would be 2.16 g.",
              "Later, on a trip to Nag Hammadi, she sees the aluminium smelter: giant cells, molten cryolite and carbon anodes, all running on electricity from the High Dam."],
            ar: ["ملك تزور ورشة مجوهرات في خان الخليلي حيث يطلي صانع دلاية فضية بالذهب لعروسة.",
              "يعلّق الدلاية في السلك السالب وشريحة ذهب في السلك الموجب ويغمسهما في محلول ملح ذهب: 'الدلاية يجب أن تكون الكاثود.'",
              "يضبط التيار وينظر إلى الساعة: 'أمبيرات أكثر أو دقائق أكثر تعني طبقة أسمك؛ هذا قانون فاراداي الأول.'",
              "تحسب ملك: 2 أمبير لمدة 965 ثانية = 1930 كولوم = 0.02 فاراداي، ولو كانت فضة لترسب 2.16 جم.",
              "وفي رحلة إلى نجع حمادي ترى مصنع الألومنيوم: خلايا عملاقة وكريوليت منصهر وأنودات كربون، وكلها تعمل بكهرباء السد العالي."]
          }
        },
        words: [
          ["Electrolytic cell", "الخلية الإلكتروليتية", "A cell that uses external electrical energy to drive a non-spontaneous redox reaction.", "خلية تستخدم طاقة كهربية خارجية لإحداث تفاعل أكسدة واختزال غير تلقائي."],
          ["Electrolysis", "التحليل الكهربي", "Chemical decomposition of a substance by passing electric current through its electrolyte.", "تفكك المادة كيميائيًا بمرور تيار كهربي في إلكتروليتها."],
          ["Faraday's first law", "قانون فاراداي الأول", "Mass formed or consumed at an electrode ∝ quantity of electricity passed.", "كمية المادة المتكونة أو المستهلكة عند القطب تتناسب طرديًا مع كمية الكهرباء المارة."],
          ["Faraday's second law", "قانون فاراداي الثاني", "The same charge deposits masses proportional to the equivalent masses of the elements.", "نفس كمية الكهرباء ترسب كتلًا تتناسب مع الكتل المكافئة للعناصر."],
          ["Gram-equivalent mass", "الكتلة المكافئة الجرامية", "Atomic mass ÷ ion charge: the mass that gains or loses one mole of electrons.", "الكتلة الذرية ÷ عدد الشحنات: الكتلة التي تفقد أو تكتسب مولًا من الإلكترونات."],
          ["Faraday (F)", "الفاراداي", "96500 C: the charge that deposits one gram-equivalent of any element.", "96500 كولوم: كمية الكهرباء التي ترسب كتلة مكافئة جرامية من أي عنصر."],
          ["Electroplating", "الطلاء الكهربي", "Depositing a thin metal layer on an object made the cathode, for beauty or protection.", "ترسيب طبقة رقيقة من فلز على جسم يُجعل كاثودًا لإكسابه مظهرًا جميلًا أو لحمايته."]
        ],
        lab: { parts: [{ type: "sec3chem_faraday" }] },
        quiz: [
          { q: ["What mass of gold is deposited by 10000 C from gold(III) chloride solution? (Au = 196.98)", "ما كتلة الذهب المترسبة بمرور 10000 كولوم في محلول كلوريد الذهب III؟ (Au = 196.98)"],
            c: [["6.8 g", "6.8 جم"], ["20.4 g", "20.4 جم"], ["2.27 g", "2.27 جم"], ["65.66 g", "65.66 جم"]],
            off: ["Eq. mass = 196.98 ÷ 3 = 65.66 g. " + eq("m = 10000 × 65.66 ÷ 96500 = 6.8 g") + ". Using the atomic mass instead gives 20.4 g.", "الكتلة المكافئة = 196.98 ÷ 3 = 65.66 جم، و " + eq("m = 10000 × 65.66 ÷ 96500 = 6.8 g") + "، واستخدام الكتلة الذرية بدلها يعطي 20.4 جم."],
            sto: ["The Khan el-Khalili craftsman divides by three for Au³⁺.", "صانع خان الخليلي يقسم على ثلاثة لأيون Au³⁺."] },
          { q: ["How many coulombs are needed to deposit 5.6 g of iron from FeCl₃ solution? (Fe = 56)", "كم كولوم يلزم لترسيب 5.6 جم من الحديد من محلول FeCl₃؟ (Fe = 56)"],
            c: [["28950 C", "28950 كولوم"], ["9650 C", "9650 كولوم"], ["19300 C", "19300 كولوم"], ["96500 C", "96500 كولوم"]],
            off: ["5.6 g = 0.1 mol Fe; Fe³⁺ + 3e⁻ → Fe needs 3 F per mol: 0.3 × 96500 = 28950 C.", "5.6 جم = 0.1 مول حديد، و Fe³⁺ + 3e⁻ → Fe يحتاج 3 فاراداي لكل مول: 0.3 × 96500 = 28950 كولوم."],
            sto: ["Each iron ion needs three electrons to land on the cathode.", "كل أيون حديد يحتاج ثلاثة إلكترونات ليهبط على الكاثود."] },
          { q: ["A current of 2 A passes for 965 s through AgNO₃ solution. The mass of silver deposited is... (Ag = 107.88)", "يمر تيار شدته 2 أمبير لمدة 965 ثانية في محلول AgNO₃. كتلة الفضة المترسبة هي... (Ag = 107.88)"],
            c: [["2.16 g", "2.16 جم"], ["1.08 g", "1.08 جم"], ["4.32 g", "4.32 جم"], ["0.0216 g", "0.0216 جم"]],
            off: ["Q = 2 × 965 = 1930 C = 0.02 F. m = 0.02 × 107.88 = 2.16 g.", "Q = 2 × 965 = 1930 كولوم = 0.02 فاراداي، و m = 0.02 × 107.88 = 2.16 جم."],
            sto: ["Malak's quick calculation at the workshop.", "حساب ملك السريع في الورشة."] },
          { q: ["In electroplating a jug with silver, the jug is connected to...", "عند طلاء إبريق بالفضة يوصّل الإبريق بـ..."],
            c: [["the negative pole (it is the cathode)", "القطب السالب (يكون كاثودًا)"], ["the positive pole (it is the anode)", "القطب الموجب (يكون أنودًا)"], ["nothing: it just sits in the solution", "لا شيء: يوضع في المحلول فقط"], ["the salt bridge", "القنطرة الملحية"]],
            off: ["Ag⁺ ions are reduced on the cathode: Ag⁺ + e⁻ → Ag. The silver rod (anode) dissolves to replace them.", "تُختزل أيونات Ag⁺ على الكاثود: Ag⁺ + e⁻ → Ag، وعمود الفضة (الأنود) يذوب ليعوضها."],
            sto: ["The pendant hangs on the negative wire.", "الدلاية معلقة في السلك السالب."] },
          { q: ["Why is fluorspar/cryolite used in the extraction of aluminium?", "لماذا يُستخدم الكريوليت (مع الفلورسبار) في استخلاص الألومنيوم؟"],
            c: [["To lower the melting point of bauxite from 2045 °C to about 950 °C", "لخفض درجة انصهار البوكسيت من 2045 °س إلى نحو 950 °س"], ["To reduce Al³⁺ chemically", "لاختزال Al³⁺ كيميائيًا"], ["To act as the anode", "ليعمل كأنود"], ["To oxidize the carbon electrodes", "لأكسدة أقطاب الكربون"]],
            off: ["A lower melting point saves energy; Al³⁺ is reduced at the carbon-lined iron cathode: 2Al³⁺ + 6e⁻ → 2Al.", "خفض درجة الانصهار يوفر الطاقة، ويُختزل Al³⁺ عند الكاثود (حديد مبطن بالكربون): 2Al³⁺ + 6e⁻ → 2Al."],
            sto: ["The Nag Hammadi cells would melt the budget without cryolite.", "خلايا نجع حمادي كانت ستلتهم الميزانية بدون الكريوليت."] },
          { q: ["The same charge passes through Al³⁺, Cu²⁺ and Ag⁺ cells in series. The masses deposited are in the ratio...", "تمر نفس كمية الكهرباء في خلايا Al³⁺ و Cu²⁺ و Ag⁺ على التوالي. نسبة الكتل المترسبة هي..."],
            c: [["9 : 31.78 : 107.88", "9 : 31.78 : 107.88"], ["27 : 63.5 : 107.88", "27 : 63.5 : 107.88"], ["1 : 1 : 1", "1 : 1 : 1"], ["3 : 2 : 1", "3 : 2 : 1"]],
            off: ["Faraday's second law: masses ∝ equivalent masses: 27/3 = 9, 63.56/2 = 31.78, 107.88/1 = 107.88.", "قانون فاراداي الثاني: الكتل تتناسب مع الكتل المكافئة: 27/3 = 9 و 63.56/2 = 31.78 و 107.88/1 = 107.88."],
            sto: ["Each metal is paid per electron, not per atom.", "كل فلز يُحاسَب بالإلكترون لا بالذرة."] },
          { q: ["In the electrolytic purification of copper, where do the silver and gold impurities end up?", "في التنقية الكهربية للنحاس، أين تذهب شوائب الفضة والذهب؟"],
            c: [["They fall below the anode as sludge", "تتساقط أسفل الأنود"], ["They deposit on the cathode with copper", "تترسب على الكاثود مع النحاس"], ["They dissolve as ions in the solution", "تذوب كأيونات في المحلول"], ["They evaporate", "تتطاير"]],
            off: ["At the potential used, Ag and Au are not oxidized, so they drop under the anode; Fe and Zn dissolve but do not deposit (lower reduction potential).", "عند الجهد المستخدم لا تتأكسد الفضة والذهب فتسقط أسفل الأنود، أما الحديد والخارصين فيذوبان ولا يترسبان (جهد اختزالهما أقل)."],
            sto: ["Precious metals collected from the bottom of the tank: a bonus!", "فلزات ثمينة تُجمع من قاع الحوض: مكسب إضافي!"] }
        ]
      }
    ]
  });
})();

/* ---------- Sec 3 Chemistry: unit 5 (organic chemistry) ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var G = E.SCIG.sec3chem;

  G.units.push({
    id: "sec3chemu5", num: 5, icon: "🧬", color: "green",
    title: { en: "Organic Chemistry", ar: "الكيمياء العضوية" },
    lessons: [
      {
        id: "sec3chemu5l1", icon: "🔥", page: 117,
        title: { en: "Organic Compounds, Isomerism and Alkanes", ar: "المركبات العضوية والتشكل والألكانات" },
        idea: {
          official: {
            en: ["Berzelius (1806) thought organic compounds needed a 'vital force'. Wöhler (1828) destroyed this idea by making urea from inorganic substances: " + eq("NH₄Cl + AgCNO → NH₄CNO → NH₂CONH₂") + ". Organic chemistry is now the chemistry of carbon compounds (except carbon oxides, carbonates and cyanides).",
              "There are over 10 million organic compounds (about 20 : 1 against inorganic) because carbon bonds to itself and others by single, double and triple bonds in straight, branched and ring chains. Organic compounds are mostly covalent, insoluble in water, flammable, non-conducting, with low melting points and slow reactions.",
              "Isomerism: compounds with the same molecular formula but different structural formulas and properties. " + eq("C₂H₆O") + " is ethanol (C₂H₅OH) or dimethyl ether (CH₃OCH₃). Butane C₄H₁₀ has 2 chain isomers and pentane C₅H₁₂ has 3.",
              "Detecting C and H: heat the compound with CuO: lime water turns milky (CO₂ → carbon) and drops of water turn anhydrous CuSO₄ blue (hydrogen).",
              "Alkanes (paraffins): saturated, " + eq("CₙH₂ₙ₊₂") + ", a homologous series (same general formula and chemical properties, physical properties graded, each member differs by CH₂). IUPAC naming: longest chain, number from the end nearest the branch, e.g. 2-methylbutane.",
              "Methane (50-90% of natural gas) is made in the lab by heating sodium acetate with soda lime: " + eq("CH₃COONa + NaOH → CH₄ + Na₂CO₃") + ". Alkanes burn (" + eq("CH₄ + 2O₂ → CO₂ + 2H₂O") + ") and undergo substitution with chlorine in UV light: CH₃Cl → CH₂Cl₂ → CHCl₃ → CCl₄. Freons such as CF₂Cl₂ damage the ozone layer."],
            ar: ["اعتقد برزيليوس (1806) أن المركبات العضوية تحتاج إلى 'قوة حيوية'، وهدم فوهلر (1828) هذه الفكرة بتحضير اليوريا من مواد غير عضوية: " + eq("NH₄Cl + AgCNO → NH₄CNO → NH₂CONH₂") + "، وأصبحت الكيمياء العضوية هي كيمياء مركبات الكربون (ما عدا أكاسيد الكربون والكربونات والسيانيدات).",
              "يزيد عدد المركبات العضوية على 10 ملايين (نحو 20 : 1 مقارنة بغير العضوية) لقدرة ذرة الكربون على الارتباط بنفسها وبغيرها بروابط أحادية وثنائية وثلاثية في سلاسل مستقيمة ومتفرعة وحلقية، والمركبات العضوية غالبًا تساهمية لا تذوب في الماء، قابلة للاشتعال، لا توصل الكهرباء، منخفضة درجات الانصهار وتفاعلاتها بطيئة.",
              "التشكل (الأيزوميرية): مركبات لها نفس الصيغة الجزيئية وتختلف في الصيغة البنائية والخواص، فالصيغة " + eq("C₂H₆O") + " تمثل الإيثانول (C₂H₅OH) أو ثنائي ميثيل إيثر (CH₃OCH₃)، وللبيوتان C₄H₁₀ متشكلان، وللبنتان C₅H₁₂ ثلاثة متشكلات.",
              "الكشف عن الكربون والهيدروجين: يُسخَّن المركب مع أكسيد النحاس II فيتعكر ماء الجير (CO₂ ← كربون) وتتكون قطرات ماء تزرق كبريتات النحاس اللامائية (هيدروجين).",
              "الألكانات (البارافينات): مشبعة صيغتها " + eq("CₙH₂ₙ₊₂") + "، وهي سلسلة متجانسة (نفس الصيغة العامة والخواص الكيميائية، وتدرج في الخواص الفيزيائية، ويزيد كل مركب عما قبله بمجموعة CH₂)، والتسمية بنظام IUPAC: أطول سلسلة، والترقيم من الطرف الأقرب للتفرع، مثل 2-ميثيل بيوتان.",
              "الميثان (50-90% من الغاز الطبيعي) يُحضَّر في المعمل بتسخين أسيتات الصوديوم مع الجير الصودي: " + eq("CH₃COONa + NaOH → CH₄ + Na₂CO₃") + "، والألكانات تحترق (" + eq("CH₄ + 2O₂ → CO₂ + 2H₂O") + ") وتتفاعل بالاستبدال مع الكلور في ضوء الأشعة فوق البنفسجية: CH₃Cl ← CH₂Cl₂ ← CHCl₃ ← CCl₄، والفريونات مثل CF₂Cl₂ تتلف طبقة الأوزون."]
          },
          story: {
            en: ["Laila's family cooks with natural gas piped into their new flat in 6th of October City; at her grandma's village they still use butane cylinders.",
              "She notices the delivery man shouting 'Ambooba!' and wonders why butane is a liquid in the cylinder but a gas on the stove. Pressure keeps the small molecules close.",
              "In chemistry class she builds butane with a model kit: four carbons in a row. Then she moves one carbon to the middle: same C₄H₁₀, a different shape, isobutane. Isomers!",
              "With five carbons she finds three different skeletons. 'Same LEGO bricks, different buildings,' she tells her little brother.",
              "Her teacher reminds her: Wöhler made urea in a flask in 1828. No living cell was needed, and organic chemistry was born."],
            ar: ["تطبخ أسرة ليلى بالغاز الطبيعي الموصل إلى شقتهم الجديدة في مدينة 6 أكتوبر، أما في قرية جدتها فما زالوا يستخدمون أنابيب البوتاجاز.",
              "تسمع البائع ينادي 'أنبوبة!' وتتساءل لماذا يكون البيوتان سائلًا في الأنبوبة وغازًا في البوتاجاز؛ الضغط يُبقي الجزيئات الصغيرة متقاربة.",
              "في حصة الكيمياء تبني البيوتان بنموذج الذرات: أربع ذرات كربون في صف، ثم تنقل ذرة كربون إلى المنتصف: نفس C₄H₁₀ بشكل مختلف، الأيزوبيوتان؛ متشكلات!",
              "ومع خمس ذرات كربون تجد ثلاثة هياكل مختلفة، فتقول لأخيها الصغير: 'نفس قطع الليجو، ومبانٍ مختلفة.'",
              "يذكّرها المعلم: حضّر فوهلر اليوريا في دورق عام 1828 دون أي خلية حية، فوُلدت الكيمياء العضوية."]
          }
        },
        words: [
          ["Organic chemistry", "الكيمياء العضوية", "The chemistry of carbon compounds, except carbon oxides, carbonates and cyanides.", "كيمياء مركبات الكربون ما عدا أكاسيد الكربون والكربونات والسيانيدات."],
          ["Isomerism", "التشكل (الأيزوميرية)", "Same molecular formula, different structural formulas and properties.", "اتفاق المركبات في الصيغة الجزيئية واختلافها في الصيغة البنائية والخواص."],
          ["Structural formula", "الصيغة البنائية", "Shows how the atoms are arranged and bonded in the molecule.", "توضح طريقة ترتيب الذرات وارتباطها في الجزيء."],
          ["Homologous series", "السلسلة المتجانسة", "Compounds with the same general formula and chemical properties, graded physical properties, differing by CH₂.", "مركبات لها نفس الصيغة العامة والخواص الكيميائية وتتدرج خواصها الفيزيائية ويزيد كل منها عما قبله بـ CH₂."],
          ["Alkanes", "الألكانات", "Saturated open-chain hydrocarbons, CₙH₂ₙ₊₂, e.g. methane.", "هيدروكربونات مشبعة مفتوحة السلسلة صيغتها CₙH₂ₙ₊₂ مثل الميثان."],
          ["Substitution reaction", "تفاعل الاستبدال", "An atom (H) is replaced by another (Cl), as in alkanes + Cl₂ in UV light.", "استبدال ذرة (H) بذرة أخرى (Cl) كما في تفاعل الألكانات مع الكلور في الأشعة فوق البنفسجية."],
          ["Freons", "الفريونات", "Chlorofluoro derivatives of alkanes (e.g. CF₂Cl₂) once used in fridges; they damage the ozone layer.", "مشتقات كلوروفلورية للألكانات (مثل CF₂Cl₂) استُخدمت في الثلاجات وتتلف طبقة الأوزون."]
        ],
        lab: { parts: [{ type: "sec3chem_alkane" }] },
        quiz: [
          { q: ["How many chain isomers does pentane C₅H₁₂ have?", "كم عدد المتشكلات السلسلية للبنتان C₅H₁₂؟"],
            c: [["3", "3"], ["2", "2"], ["5", "5"], ["1", "1"]],
            off: ["n-pentane, 2-methylbutane (isopentane) and 2,2-dimethylpropane (neopentane).", "البنتان العادي، و 2-ميثيل بيوتان (أيزوبنتان)، و 2,2-ثنائي ميثيل بروبان (نيوبنتان)."],
            sto: ["Laila found three buildings with five carbon bricks.", "وجدت ليلى ثلاثة مبانٍ بخمس قطع كربون."] },
          { q: ["What is the molar mass of the alkane that has 4 carbon atoms? (C = 12, H = 1)", "ما الكتلة المولية للألكان الذي يحتوي على 4 ذرات كربون؟ (C = 12، H = 1)"],
            c: [["58 g/mol", "58 جم/مول"], ["56 g/mol", "56 جم/مول"], ["54 g/mol", "54 جم/مول"], ["72 g/mol", "72 جم/مول"]],
            off: ["CₙH₂ₙ₊₂ → C₄H₁₀: 4×12 + 10×1 = 58 g/mol. (56 is the alkene C₄H₈; 72 is pentane.)", "CₙH₂ₙ₊₂ ← C₄H₁₀: 4×12 + 10×1 = 58 جم/مول (و 56 للألكين C₄H₈، و 72 للبنتان)."],
            sto: ["The gas in grandma's butane cylinder.", "الغاز في أنبوبة جدتها."] },
          { q: ["Which pair are isomers?", "أي زوج مما يأتي متشكلان؟"],
            c: [["Ethanol and dimethyl ether", "الإيثانول وثنائي ميثيل إيثر"], ["Methane and ethane", "الميثان والإيثان"], ["Ethene and ethyne", "الإيثين والإيثاين"], ["Ethanol and ethanoic acid", "الإيثانول وحمض الإيثانويك"]],
            off: ["Both are C₂H₆O: CH₃CH₂OH and CH₃OCH₃. They differ in structure and properties (ethanol is a liquid that reacts with Na; the ether is a gas that does not).", "كلاهما C₂H₆O: CH₃CH₂OH و CH₃OCH₃، ويختلفان في البناء والخواص (الإيثانول سائل يتفاعل مع الصوديوم والإيثر غاز لا يتفاعل)."],
            sto: ["Same bricks, different buildings.", "نفس القطع، مبانٍ مختلفة."] },
          { q: ["Methane is prepared in the lab by heating...", "يُحضَّر الميثان في المعمل بتسخين..."],
            c: [["sodium acetate with soda lime", "أسيتات الصوديوم مع الجير الصودي"], ["ethanol with conc. H₂SO₄ at 180 °C", "الإيثانول مع H₂SO₄ المركز عند 180 °س"], ["calcium carbide with water", "كربيد الكالسيوم مع الماء"], ["sodium benzoate with soda lime", "بنزوات الصوديوم مع الجير الصودي"]],
            off: [eq("CH₃COONa + NaOH → CH₄ + Na₂CO₃") + " (CaO + heat). The others make ethene, ethyne and benzene.", eq("CH₃COONa + NaOH → CH₄ + Na₂CO₃") + " (CaO وتسخين)، والبقية تحضّر الإيثين والإيثاين والبنزين."],
            sto: ["Remove the CO₂ part of acetate and methane is left.", "انزع جزء CO₂ من الأسيتات يتبقى الميثان."] },
          { q: ["Heating an organic compound with CuO turns lime water milky and anhydrous CuSO₄ blue. This proves it contains...", "تسخين مركب عضوي مع CuO يعكر ماء الجير ويزرق كبريتات النحاس اللامائية؛ هذا يثبت احتواءه على..."],
            c: [["carbon and hydrogen", "الكربون والهيدروجين"], ["carbon and oxygen", "الكربون والأكسجين"], ["nitrogen and hydrogen", "النيتروجين والهيدروجين"], ["chlorine and carbon", "الكلور والكربون"]],
            off: ["CuO oxidizes C to CO₂ (milky lime water) and H to H₂O (blue copper sulphate).", "يؤكسد CuO الكربون إلى CO₂ (تعكير ماء الجير) والهيدروجين إلى H₂O (زرقة كبريتات النحاس)."],
            sto: ["Two tests, two fingerprints.", "اختباران وبصمتان."] },
          { q: ["The product of complete substitution of methane with chlorine in UV light is...", "ناتج الاستبدال التام للميثان بالكلور في ضوء الأشعة فوق البنفسجية هو..."],
            c: [["CCl₄ (carbon tetrachloride)", "CCl₄ (رابع كلوريد الكربون)"], ["CH₃Cl", "CH₃Cl"], ["CHCl₃ only", "CHCl₃ فقط"], ["C₂H₆", "C₂H₆"]],
            off: ["Each step replaces one H: CH₃Cl, CH₂Cl₂, CHCl₃ (chloroform) and finally CCl₄, with HCl formed each time.", "كل خطوة تستبدل ذرة هيدروجين: CH₃Cl ثم CH₂Cl₂ ثم CHCl₃ (الكلوروفورم) وأخيرًا CCl₄، مع تكون HCl في كل مرة."],
            sto: ["Four hydrogens leave one by one, four chlorines take their seats.", "أربع ذرات هيدروجين تغادر واحدة تلو الأخرى، وأربع ذرات كلور تأخذ أماكنها."] },
          { q: ["What is the IUPAC name of CH₃–CH(CH₃)–CH₂–CH₃?", "ما اسم المركب CH₃–CH(CH₃)–CH₂–CH₃ بنظام IUPAC؟"],
            c: [["2-methylbutane", "2-ميثيل بيوتان"], ["3-methylbutane", "3-ميثيل بيوتان"], ["2-ethylpropane", "2-إيثيل بروبان"], ["pentane", "بنتان"]],
            off: ["Longest chain = 4 C (butane); number from the end nearest the branch: methyl on C-2.", "أطول سلسلة = 4 ذرات (بيوتان)، والترقيم من الطرف الأقرب للتفرع: مجموعة الميثيل على ذرة الكربون 2."],
            sto: ["Count from the side closest to the branch, like counting stops from the nearest metro end.", "عُدّ من الجهة الأقرب للتفرع، كعدّ المحطات من أقرب نهاية للخط."] }
        ]
      },
      {
        id: "sec3chemu5l2", icon: "🧵", page: 132,
        title: { en: "Alkenes, Alkynes, Polymers and Aromatic Hydrocarbons", ar: "الألكينات والألكاينات والبوليمرات والهيدروكربونات الأروماتية" },
        idea: {
          official: {
            en: ["Alkenes " + eq("CₙH₂ₙ") + " have one double bond (σ + π). Ethene is prepared by dehydrating ethanol with conc. H₂SO₄ at 180 °C: " + eq("C₂H₅OH → C₂H₄ + H₂O") + ". The weak π bond breaks in addition reactions.",
              "Additions: H₂ (Ni, heat) → ethane; Br₂ in CCl₄ → 1,2-dibromoethane, the red bromine colour disappears (test for unsaturation); HX follows Markovnikov's rule: the H adds to the carbon that already has more H, so propene + HBr → 2-bromopropane; catalytic hydration (H₂SO₄) gives alcohols; cold dilute KMnO₄ (Baeyer) gives ethylene glycol (antifreeze).",
              "Addition polymerization: many monomers join through their double bonds: " + eq("n CH₂=CH₂ → (–CH₂–CH₂–)ₙ") + " polyethylene. Others: PVC from vinyl chloride, Teflon from tetrafluoroethene, polystyrene, polypropylene. Condensation polymers join with loss of a small molecule (water).",
              "Alkynes " + eq("CₙH₂ₙ₋₂") + " have a triple bond. Ethyne (acetylene) is made from calcium carbide: " + eq("CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂") + ". It adds Br₂ in two steps to 1,1,2,2-tetrabromoethane and is hydrated (H₂SO₄ 40%, HgSO₄) to acetaldehyde.",
              "Aromatic hydrocarbons: benzene C₆H₆, a ring of 6 carbons with 6 delocalized π electrons. It is made from sodium benzoate + soda lime or by reducing phenol vapour over hot zinc. Disubstituted benzenes have ortho, meta and para isomers.",
              "Benzene prefers substitution: halogenation (FeCl₃), Friedel-Crafts alkylation (CH₃Cl, AlCl₃) to toluene, nitration (conc. HNO₃ + H₂SO₄) to nitrobenzene, sulphonation to benzenesulphonic acid (detergents)."],
            ar: ["الألكينات " + eq("CₙH₂ₙ") + " بها رابطة ثنائية واحدة (سيجما + باي)، ويُحضَّر الإيثين بنزع الماء من الإيثانول بحمض الكبريتيك المركز عند 180 °س: " + eq("C₂H₅OH → C₂H₄ + H₂O") + "، وتنكسر رابطة باي الضعيفة في تفاعلات الإضافة.",
              "تفاعلات الإضافة: H₂ (نيكل وتسخين) ← إيثان، و Br₂ في CCl₄ ← 1,2-ثنائي بروموإيثان ويختفي اللون الأحمر للبروم (كشف عدم التشبع)، و HX حسب قاعدة ماركونيكوف: يضاف الهيدروجين إلى ذرة الكربون الأغنى بالهيدروجين فيعطي البروبين مع HBr ← 2-برومو بروبان، والهيدرة الحفزية (H₂SO₄) تعطي كحولات، و KMnO₄ المخفف البارد (باير) يعطي الإيثيلين جليكول (مانع التجمد).",
              "البلمرة بالإضافة: ترتبط جزيئات المونومر الكثيرة عن طريق روابطها الثنائية: " + eq("n CH₂=CH₂ → (–CH₂–CH₂–)ₙ") + " بولي إيثيلين، ومن أمثلتها PVC من كلوريد الفينيل، والتفلون من رباعي فلورو إيثين، والبوليسترين، والبولي بروبيلين، أما البلمرة بالتكاثف فترتبط فيها المونومرات بخروج جزيء صغير (ماء).",
              "الألكاينات " + eq("CₙH₂ₙ₋₂") + " بها رابطة ثلاثية، ويُحضَّر الإيثاين (الأسيتيلين) من كربيد الكالسيوم: " + eq("CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂") + "، ويضيف البروم على خطوتين حتى 1,1,2,2-رباعي برومو إيثان، وبالهيدرة الحفزية (H₂SO₄ 40% و HgSO₄) يعطي الأسيتالدهيد.",
              "الهيدروكربونات الأروماتية: البنزين C₆H₆ حلقة من 6 ذرات كربون بها 6 إلكترونات باي غير متمركزة، ويُحضَّر من بنزوات الصوديوم مع الجير الصودي أو باختزال بخار الفينول على مسحوق الخارصين الساخن، وللبنزين ثنائي الاستبدال ثلاثة متشكلات: أورثو وميتا وبارا.",
              "يفضل البنزين تفاعلات الاستبدال: الهلجنة (FeCl₃)، وألكلة فريدل-كرافتس (CH₃Cl و AlCl₃) إلى التولوين، والنيترة (HNO₃ و H₂SO₄ مركزين) إلى النيتروبنزين، والسلفنة إلى حمض بنزين السلفونيك (المنظفات)."]
          },
          story: {
            en: ["Ahmed works on Fridays at his uncle's plastics shop in Moski, surrounded by buckets, pipes and food bags.",
              "His uncle hands him three items: a PE shopping bag, a white PVC water pipe and a Teflon pan. 'All of them started as small gas molecules with a double bond.'",
              "Ahmed imagines people at a crowded train door, each with a free hand (the π bond). When everyone grabs the next person's hand, one endless chain forms: polymerization.",
              "Back at school he bubbles ethene through red bromine water and the colour disappears; ethane does nothing. The double bond is the hungry part.",
              "In his notebook: 'Alkenes add, benzene substitutes, polymers are just very long trains.'"],
            ar: ["أحمد يعمل أيام الجمعة في محل بلاستيك عمه في الموسكي، بين الجرادل والمواسير وأكياس الطعام.",
              "يعطيه عمه ثلاث قطع: كيس تسوق بولي إيثيلين، وماسورة مياه بيضاء PVC، وطاسة تفلون: 'كلها بدأت جزيئات غاز صغيرة بها رابطة ثنائية.'",
              "يتخيل أحمد ركابًا عند باب قطار مزدحم، لكل واحد يد حرة (رابطة باي)، وعندما يمسك كل واحد يد التالي تتكون سلسلة لا نهاية لها: البلمرة.",
              "في المدرسة يمرر الإيثين في ماء البروم الأحمر فيختفي اللون، بينما لا يفعل الإيثان شيئًا؛ الرابطة الثنائية هي الجزء الجائع.",
              "يكتب في كراسته: 'الألكينات تضيف، والبنزين يستبدل، والبوليمرات قطارات طويلة جدًا.'"]
          }
        },
        words: [
          ["Alkenes", "الألكينات", "Unsaturated hydrocarbons with one C=C double bond, CₙH₂ₙ, e.g. ethene.", "هيدروكربونات غير مشبعة بها رابطة ثنائية واحدة صيغتها CₙH₂ₙ مثل الإيثين."],
          ["Addition reaction", "تفاعل الإضافة", "Atoms add across a double or triple bond as the π bond breaks.", "إضافة ذرات على الرابطة الثنائية أو الثلاثية مع انكسار رابطة باي."],
          ["Markovnikov's rule", "قاعدة ماركونيكوف", "In adding HX to an unsymmetrical alkene, H goes to the carbon with more hydrogens and X to the other.", "عند إضافة HX إلى ألكين غير متماثل يضاف الهيدروجين إلى ذرة الكربون الأغنى بالهيدروجين و X إلى الأخرى."],
          ["Addition polymerization", "البلمرة بالإضافة", "Many monomer molecules with double bonds join into one giant polymer, e.g. polyethylene.", "ارتباط عدد كبير من جزيئات مونومر بها روابط ثنائية لتكوين جزيء بوليمر عملاق مثل البولي إيثيلين."],
          ["Alkynes", "الألكاينات", "Hydrocarbons with a C≡C triple bond, CₙH₂ₙ₋₂, e.g. ethyne (acetylene).", "هيدروكربونات بها رابطة ثلاثية صيغتها CₙH₂ₙ₋₂ مثل الإيثاين (الأسيتيلين)."],
          ["Aromatic hydrocarbons", "الهيدروكربونات الأروماتية", "Ring compounds like benzene C₆H₆ with delocalized π electrons; they prefer substitution.", "مركبات حلقية مثل البنزين C₆H₆ بها إلكترونات باي غير متمركزة وتفضل تفاعلات الاستبدال."],
          ["Monomer", "المونومر", "The small repeating unit molecule that forms a polymer.", "الجزيء الصغير الذي يتكرر لتكوين البوليمر."]
        ],
        lab: { parts: [{ type: "sec3chem_addition" }] },
        quiz: [
          { q: ["Propene reacts with HBr. According to Markovnikov's rule the main product is...", "يتفاعل البروبين مع HBr، وحسب قاعدة ماركونيكوف يكون الناتج الرئيسي..."],
            c: [["2-bromopropane", "2-برومو بروبان"], ["1-bromopropane", "1-برومو بروبان"], ["1,2-dibromopropane", "1,2-ثنائي برومو بروبان"], ["propane", "البروبان"]],
            off: ["CH₃–CH=CH₂ + HBr: H goes to the terminal CH₂ (more H), Br to the middle carbon → CH₃–CHBr–CH₃.", "CH₃–CH=CH₂ + HBr: يذهب الهيدروجين إلى CH₂ الطرفية (الأغنى بالهيدروجين) والبروم إلى ذرة الكربون الوسطى ← CH₃–CHBr–CH₃."],
            sto: ["The rich get richer: the carbon with more H gets the new H.", "الغني يزداد غنى: ذرة الكربون صاحبة الهيدروجين الأكثر تأخذ الهيدروجين الجديد."] },
          { q: ["Which gas decolorizes red bromine water?", "أي غاز يزيل لون ماء البروم الأحمر؟"],
            c: [["Ethene", "الإيثين"], ["Methane", "الميثان"], ["Ethane", "الإيثان"], ["Carbon dioxide", "ثاني أكسيد الكربون"]],
            off: ["Ethene is unsaturated: " + eq("C₂H₄ + Br₂ → C₂H₄Br₂") + " (addition). Saturated alkanes do not react with bromine water.", "الإيثين غير مشبع: " + eq("C₂H₄ + Br₂ → C₂H₄Br₂") + " (إضافة)، والألكانات المشبعة لا تتفاعل مع ماء البروم."],
            sto: ["Ahmed's red bromine faded only with ethene.", "بهت بروم أحمد الأحمر مع الإيثين فقط."] },
          { q: ["A sample of polyethylene has a molar mass of 28000 g/mol. How many ethene units does it contain? (C₂H₄ = 28)", "عينة بولي إيثيلين كتلتها المولية 28000 جم/مول. كم وحدة إيثين تحتوي؟ (C₂H₄ = 28)"],
            c: [["1000", "1000"], ["100", "100"], ["10000", "10000"], ["2000", "2000"]],
            off: ["n = 28000 ÷ 28 = 1000 units. Addition polymerization adds no extra atoms, so the polymer mass = n × monomer mass.", "n = 28000 ÷ 28 = 1000 وحدة، فالبلمرة بالإضافة لا تضيف ذرات، فكتلة البوليمر = n × كتلة المونومر."],
            sto: ["A train of a thousand identical carriages.", "قطار من ألف عربة متماثلة."] },
          { q: ["What volume of acetylene (at STP) is obtained from 64 g of CaC₂? (Ca = 40, C = 12)", "ما حجم الأسيتيلين (في الظروف القياسية) الناتج من 64 جم من CaC₂؟ (Ca = 40، C = 12)"],
            c: [["22.4 L", "22.4 لتر"], ["11.2 L", "11.2 لتر"], ["44.8 L", "44.8 لتر"], ["2.24 L", "2.24 لتر"]],
            off: ["CaC₂ = 40 + 24 = 64 g = 1 mol → 1 mol C₂H₂ = 22.4 L at STP.", "CaC₂ = 40 + 24 = 64 جم = 1 مول ← 1 مول C₂H₂ = 22.4 لتر في الظروف القياسية."],
            sto: ["The carbide lamp of the old street vendors makes exactly one mole.", "مصباح الكربيد عند الباعة القدامى يعطي مولًا واحدًا بالضبط."] },
          { q: ["The general formula of alkynes is...", "الصيغة العامة للألكاينات هي..."],
            c: [[eq("CₙH₂ₙ₋₂"), eq("CₙH₂ₙ₋₂")], [eq("CₙH₂ₙ"), eq("CₙH₂ₙ")], [eq("CₙH₂ₙ₊₂"), eq("CₙH₂ₙ₊₂")], [eq("CₙH₂ₙ₊₁OH"), eq("CₙH₂ₙ₊₁OH")]],
            off: ["One triple bond removes 4 H from the alkane: ethyne C₂H₂, propyne C₃H₄.", "الرابطة الثلاثية تنقص 4 ذرات هيدروجين عن الألكان: الإيثاين C₂H₂ والبروباين C₃H₄."],
            sto: ["Each extra bond costs two hydrogens.", "كل رابطة إضافية تكلف ذرتي هيدروجين."] },
          { q: ["Benzene reacts with CH₃Cl in the presence of anhydrous AlCl₃ to give...", "يتفاعل البنزين مع CH₃Cl في وجود AlCl₃ اللامائي ليعطي..."],
            c: [["toluene (methylbenzene) + HCl", "التولوين (ميثيل بنزين) + HCl"], ["chlorobenzene + CH₄", "كلوروبنزين + CH₄"], ["cyclohexane", "الهكسان الحلقي"], ["nitrobenzene", "النيتروبنزين"]],
            off: ["Friedel-Crafts alkylation, a substitution: " + eq("C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl") + ".", "ألكلة فريدل-كرافتس، وهو تفاعل استبدال: " + eq("C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl") + "."],
            sto: ["Benzene swaps one hydrogen for a methyl and keeps its ring intact.", "البنزين يبدل ذرة هيدروجين بمجموعة ميثيل ويحافظ على حلقته سليمة."] },
          { q: ["Ethylene glycol, used as antifreeze in car radiators, is made from ethene by...", "يُحضَّر الإيثيلين جليكول المستخدم كمانع للتجمد في مبردات السيارات من الإيثين بـ..."],
            c: [["oxidation with cold dilute alkaline KMnO₄ (Baeyer)", "الأكسدة ببرمنجنات البوتاسيوم المخففة القلوية الباردة (باير)"], ["addition of HBr", "إضافة HBr"], ["hydrogenation with Ni", "الهدرجة بالنيكل"], ["polymerization", "البلمرة"]],
            off: [eq("CH₂=CH₂ + [O] + H₂O → HOCH₂–CH₂OH") + "; the violet colour of KMnO₄ disappears. Its OH groups form hydrogen bonds with water and stop it freezing.", eq("CH₂=CH₂ + [O] + H₂O → HOCH₂–CH₂OH") + "، ويختفي اللون البنفسجي للبرمنجنات، ومجموعتا OH تكوّنان روابط هيدروجينية مع الماء فتمنعان تجمده."],
            sto: ["Two OH hands that hold on to water in winter.", "يدا OH تمسكان بالماء في الشتاء."] }
        ]
      },
      {
        id: "sec3chemu5l3", icon: "🍷", page: 159,
        title: { en: "Alcohols and Phenols", ar: "الكحولات والفينولات" },
        idea: {
          official: {
            en: ["Alcohols and phenols contain the hydroxyl group –OH: attached to an alkyl group it is an alcohol (R–OH), attached directly to a benzene ring it is a phenol. Monohydric alcohols: " + eq("CₙH₂ₙ₊₁OH") + "; dihydric (ethylene glycol), trihydric (glycerol).",
              "By the carbinol carbon (the C bearing OH): primary (attached to 1 C, e.g. ethanol), secondary (2 C, e.g. 2-propanol) and tertiary (3 C, e.g. 2-methyl-2-propanol).",
              "Ethanol: by fermentation of sugars, or by catalytic hydration of ethene (" + eq("C₂H₄ + H₂O → C₂H₅OH") + "); the general method is hydrolysis of alkyl halides with aqueous KOH. Alcohols have high boiling points due to hydrogen bonds; lower members mix with water.",
              "Reactions: with Na: " + eq("2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂") + "; with HX to alkyl halides; with acids to esters; dehydration with conc. H₂SO₄ (180 °C → ethene, 140 °C → diethyl ether). Oxidation (acidified KMnO₄ or K₂Cr₂O₇): primary → aldehyde → carboxylic acid; secondary → ketone; tertiary resists oxidation.",
              "Phenols: phenol C₆H₅OH is more acidic than alcohols (the benzene ring increases the polarity of O–H), so it reacts with NaOH to form sodium phenoxide; ethanol does not. Its OH cannot be replaced by halogen acids. Nitration gives picric acid (2,4,6-trinitrophenol); with formaldehyde it gives Bakelite (thermosetting).",
              "Tests for phenol: violet colour with FeCl₃ solution; white ppt with bromine water. Uses of ethanol: solvent, fuel, antiseptic, methylated spirit (85% ethanol + 5% methanol + additives)."],
            ar: ["تحتوي الكحولات والفينولات على مجموعة الهيدروكسيل –OH؛ فإذا ارتبطت بمجموعة ألكيل كان المركب كحولًا (R–OH)، وإذا ارتبطت مباشرة بحلقة البنزين كان فينولًا، والكحولات أحادية الهيدروكسيل صيغتها " + eq("CₙH₂ₙ₊₁OH") + "، ومنها ثنائية الهيدروكسيل (الإيثيلين جليكول) وثلاثية الهيدروكسيل (الجلسرول).",
              "حسب ذرة الكربون الكربينولية (الحاملة لـ OH): كحولات أولية (مرتبطة بذرة كربون واحدة مثل الإيثانول)، وثانوية (بذرتين مثل 2-بروبانول)، وثالثية (بثلاث ذرات مثل 2-ميثيل-2-بروبانول).",
              "الإيثانول: يُحضَّر بتخمر السكريات أو بالهيدرة الحفزية للإيثين (" + eq("C₂H₄ + H₂O → C₂H₅OH") + ")، والطريقة العامة هي التحلل المائي لهاليدات الألكيل بمحلول KOH المائي، ودرجات غليان الكحولات مرتفعة لوجود الروابط الهيدروجينية، والأعضاء الأولى تمتزج بالماء.",
              "التفاعلات: مع الصوديوم: " + eq("2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂") + "، ومع HX تعطي هاليدات ألكيل، ومع الأحماض تعطي إسترات، ونزع الماء بحمض الكبريتيك المركز (180 °س ← إيثين، 140 °س ← ثنائي إيثيل إيثر)، والأكسدة (KMnO₄ أو K₂Cr₂O₇ المحمض): الأولي ← ألدهيد ← حمض كربوكسيلي، والثانوي ← كيتون، والثالثي يقاوم الأكسدة.",
              "الفينولات: الفينول C₆H₅OH أكثر حمضية من الكحولات (حلقة البنزين تزيد قطبية الرابطة O–H) فيتفاعل مع NaOH مكونًا فينوكسيد الصوديوم بينما لا يتفاعل الإيثانول، ولا يمكن استبدال مجموعة OH فيه بالهاليد، ونيترته تعطي حمض البكريك (2,4,6-ثلاثي نيتروفينول)، ومع الفورمالدهيد يعطي الباكليت (لدائن تتصلد بالحرارة).",
              "الكشف عن الفينول: لون بنفسجي مع محلول FeCl₃، وراسب أبيض مع ماء البروم، ومن استخدامات الإيثانول: مذيب ووقود ومطهر، والكحول المحوَّل (85% إيثانول + 5% ميثانول + إضافات)."]
          },
          story: {
            en: ["Farida's mother is a nurse at a hospital in Zagazig. She wipes Farida's arm with ethanol before a vaccine, and the spot feels cold as it evaporates.",
              "Farida imagines the carbinol carbon as a girl in the class photo: holding hands with one friend (primary), two friends (secondary) or three (tertiary).",
              "The oxidizing teacher can easily pull hydrogens away from a girl with few friends around her, so primary alcohols oxidize all the way to acids; but the tertiary girl is surrounded and protected.",
              "At home her grandma's old pharmacy bottle of 'phenol' disinfectant turns violet when Farida adds a drop of FeCl₃ in the school lab.",
              "And her brother's old Bakelite light switch? Phenol plus formaldehyde, a plastic that never melts."],
            ar: ["والدة فريدة ممرضة في مستشفى بالزقازيق، تمسح ذراع فريدة بالإيثانول قبل التطعيم فتشعر ببرودة المكان وهو يتبخر.",
              "تتخيل فريدة ذرة الكربون الكربينولية فتاة في صورة الفصل: تمسك يد صديقة واحدة (أولي)، أو صديقتين (ثانوي)، أو ثلاث (ثالثي).",
              "المعلمة المؤكسدة تستطيع بسهولة أن تنتزع ذرات الهيدروجين من الفتاة قليلة الصديقات، فتتأكسد الكحولات الأولية حتى الحمض، أما الفتاة الثالثية فمحاطة ومحمية.",
              "زجاجة مطهر 'الفينول' القديمة من صيدلية جدتها تتلون بالبنفسجي عندما تضيف فريدة قطرة FeCl₃ في معمل المدرسة.",
              "ومفتاح النور القديم المصنوع من الباكليت في غرفة أخيها؟ فينول وفورمالدهيد، لدائن لا تنصهر أبدًا."]
          }
        },
        words: [
          ["Alcohol", "الكحول", "A compound with –OH attached to an alkyl group, e.g. ethanol C₂H₅OH.", "مركب به مجموعة –OH مرتبطة بمجموعة ألكيل مثل الإيثانول C₂H₅OH."],
          ["Phenol", "الفينول", "A compound with –OH attached directly to a benzene ring, e.g. C₆H₅OH.", "مركب به مجموعة –OH مرتبطة مباشرة بحلقة البنزين مثل C₆H₅OH."],
          ["Carbinol group", "مجموعة الكربينول", "The carbon atom attached to the hydroxyl group; it decides primary, secondary or tertiary.", "ذرة الكربون المرتبطة بمجموعة الهيدروكسيل، وتحدد نوع الكحول أوليًا أو ثانويًا أو ثالثيًا."],
          ["Fermentation", "التخمر", "Breakdown of sugars by yeast enzymes to ethanol and CO₂.", "تحلل السكريات بإنزيمات الخميرة إلى إيثانول و CO₂."],
          ["Dehydration", "نزع الماء", "Removing water from an alcohol with conc. H₂SO₄: ethene at 180 °C, ether at 140 °C.", "نزع الماء من الكحول بحمض الكبريتيك المركز: إيثين عند 180 °س وإيثر عند 140 °س."],
          ["Hydrogen bond", "الرابطة الهيدروجينية", "Attraction between H of one –OH and O of another; it raises boiling points of alcohols.", "تجاذب بين هيدروجين مجموعة –OH وأكسجين مجموعة أخرى، ويرفع درجات غليان الكحولات."],
          ["Bakelite", "الباكليت", "A thermosetting network polymer made by condensation of phenol and formaldehyde.", "بوليمر شبكي يتصلد بالحرارة يُحضَّر بتكاثف الفينول والفورمالدهيد."]
        ],
        lab: { parts: [{ type: "sec3chem_alcohol" }] },
        quiz: [
          { q: ["Oxidation of a primary alcohol with acidified K₂Cr₂O₇ gives first ___ then ___.", "أكسدة كحول أولي بثاني كرومات البوتاسيوم المحمضة تعطي أولًا ___ ثم ___."],
            c: [["an aldehyde, then a carboxylic acid", "ألدهيدًا ثم حمضًا كربوكسيليًا"], ["a ketone, then an acid", "كيتونًا ثم حمضًا"], ["an ether, then an ester", "إيثرًا ثم إسترًا"], ["no product: primary alcohols resist oxidation", "لا ناتج: الكحولات الأولية تقاوم الأكسدة"]],
            off: [eq("CH₃CH₂OH → CH₃CHO → CH₃COOH") + ". Secondary alcohols give ketones; tertiary resist oxidation.", eq("CH₃CH₂OH → CH₃CHO → CH₃COOH") + "، والكحولات الثانوية تعطي كيتونات، والثالثية تقاوم الأكسدة."],
            sto: ["The girl with one friend loses her hydrogens easily.", "الفتاة ذات الصديقة الواحدة تفقد هيدروجيناتها بسهولة."] },
          { q: ["2-methyl-2-propanol (CH₃)₃C–OH is classified as a...", "يُصنف 2-ميثيل-2-بروبانول (CH₃)₃C–OH على أنه كحول..."],
            c: [["tertiary alcohol", "ثالثي"], ["primary alcohol", "أولي"], ["secondary alcohol", "ثانوي"], ["phenol", "فينول"]],
            off: ["The carbinol carbon is bonded to 3 carbon atoms (three CH₃ groups), so it is tertiary and resists oxidation.", "ذرة الكربون الكربينولية مرتبطة بثلاث ذرات كربون (ثلاث مجموعات CH₃) فهو ثالثي ويقاوم الأكسدة."],
            sto: ["Three friends around her: the protected girl.", "ثلاث صديقات حولها: الفتاة المحمية."] },
          { q: ["Which reacts with sodium hydroxide solution?", "أيهما يتفاعل مع محلول هيدروكسيد الصوديوم؟"],
            c: [["Phenol", "الفينول"], ["Ethanol", "الإيثانول"], ["Methanol", "الميثانول"], ["Glycerol", "الجلسرول"]],
            off: ["Phenol is weakly acidic: " + eq("C₆H₅OH + NaOH → C₆H₅ONa + H₂O") + ". Alcohols react with Na metal but not with NaOH.", "الفينول حمضي ضعيف: " + eq("C₆H₅OH + NaOH → C₆H₅ONa + H₂O") + "، والكحولات تتفاعل مع فلز الصوديوم لا مع NaOH."],
            sto: ["The benzene ring makes phenol's proton easier to let go.", "حلقة البنزين تجعل بروتون الفينول أسهل في الانفصال."] },
          { q: ["What volume of hydrogen (STP) is released when 9.2 g of ethanol reacts completely with sodium? (C₂H₅OH = 46)", "ما حجم الهيدروجين (في الظروف القياسية) الناتج من تفاعل 9.2 جم إيثانول تفاعلًا تامًا مع الصوديوم؟ (C₂H₅OH = 46)"],
            c: [["2.24 L", "2.24 لتر"], ["4.48 L", "4.48 لتر"], ["1.12 L", "1.12 لتر"], ["22.4 L", "22.4 لتر"]],
            off: ["9.2 ÷ 46 = 0.2 mol ethanol; " + eq("2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂") + " → 0.1 mol H₂ = 2.24 L.", "9.2 ÷ 46 = 0.2 مول إيثانول، و " + eq("2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂") + " ← 0.1 مول H₂ = 2.24 لتر."],
            sto: ["Two ethanol molecules share one hydrogen molecule.", "كل جزيئين إيثانول يتقاسمان جزيء هيدروجين واحدًا."] },
          { q: ["Which test distinguishes phenol from ethanol?", "أي اختبار يميز الفينول عن الإيثانول؟"],
            c: [["FeCl₃ solution: violet colour with phenol", "محلول FeCl₃: لون بنفسجي مع الفينول"], ["Sodium metal: H₂ with both", "فلز الصوديوم: H₂ مع كليهما"], ["Burning: both burn", "الاشتعال: كلاهما يشتعل"], ["Litmus: both are strongly acidic", "عباد الشمس: كلاهما حمضي قوي"]],
            off: ["Phenol gives a violet colour with iron(III) chloride and a white ppt with bromine water; ethanol gives neither.", "يعطي الفينول لونًا بنفسجيًا مع كلوريد الحديد III وراسبًا أبيض مع ماء البروم، ولا يعطي الإيثانول أيًا منهما."],
            sto: ["Grandma's disinfectant turned violet.", "مطهر جدتها تلون بالبنفسجي."] },
          { q: ["Ethanol heated with excess conc. H₂SO₄ at 180 °C gives...", "تسخين الإيثانول مع زيادة من H₂SO₄ المركز عند 180 °س يعطي..."],
            c: [["ethene", "الإيثين"], ["diethyl ether", "ثنائي إيثيل إيثر"], ["acetic acid", "حمض الأسيتيك"], ["ethyl hydrogen sulphate only", "كبريتات الإيثيل الهيدروجينية فقط"]],
            off: ["Dehydration (intramolecular) at 180 °C: " + eq("C₂H₅OH → C₂H₄ + H₂O") + ". At 140 °C, with excess ethanol, diethyl ether forms.", "نزع الماء (داخل الجزيء) عند 180 °س: " + eq("C₂H₅OH → C₂H₄ + H₂O") + "، وعند 140 °س مع زيادة الإيثانول يتكون ثنائي إيثيل إيثر."],
            sto: ["Hotter: one molecule loses water; cooler: two molecules share the loss.", "الأسخن: جزيء واحد يفقد الماء، والأبرد: جزيئان يتقاسمان الفقد."] },
          { q: ["Alcohols have higher boiling points than alkanes of similar molar mass because of...", "درجات غليان الكحولات أعلى من الألكانات المقاربة لها في الكتلة المولية بسبب..."],
            c: [["hydrogen bonds between their molecules", "الروابط الهيدروجينية بين جزيئاتها"], ["ionic bonds", "الروابط الأيونية"], ["their larger number of carbon atoms", "عدد ذرات الكربون الأكبر"], ["metallic bonds", "الروابط الفلزية"]],
            off: ["The polar –OH groups form hydrogen bonds; extra energy is needed to separate the molecules.", "مجموعات –OH القطبية تكوّن روابط هيدروجينية، فتحتاج طاقة إضافية لفصل الجزيئات."],
            sto: ["Molecules holding hands are harder to scatter.", "الجزيئات المتشابكة الأيدي أصعب في التفريق."] }
        ]
      },
      {
        id: "sec3chemu5l4", icon: "🍎", page: 180,
        title: { en: "Carboxylic Acids and Esters", ar: "الأحماض الكربوكسيلية والإسترات" },
        idea: {
          official: {
            en: ["Carboxylic acids contain the carboxyl group –COOH. Monocarboxylic aliphatic acids: " + eq("CₙH₂ₙ₊₁COOH") + " (formic HCOOH, acetic CH₃COOH). They also include aromatic (benzoic), dicarboxylic (oxalic) and hydroxy acids (lactic, citric, salicylic). Common names come from their sources; IUPAC adds '-oic acid'.",
              "Acetic acid (vinegar) is made in Egypt by oxidizing dilute alcoholic solutions with bacteria, or from acetylene. Pure (glacial) acetic acid freezes like ice at 16.6 °C. Boiling points are higher than alcohols of similar mass because acids form two hydrogen bonds (dimers).",
              "Tests: acidity test: " + eq("2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑") + " (effervescence); ester test: with ethanol and a few drops of conc. H₂SO₄, a pleasant fruity smell of ethyl acetate.",
              "Esterification: " + eq("CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O") + " (conc. H₂SO₄ removes water). It is reversible: acid hydrolysis goes back to acid + alcohol; alkaline hydrolysis with NaOH (saponification) is complete: " + eq("CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH") + ".",
              "Fats and oils are triglycerides: esters of glycerol with three fatty acids. Their saponification makes soap + glycerol. Polyesters such as Dacron (condensation of terephthalic acid and ethylene glycol) are inert and used for artificial arteries and fabrics.",
              "Esters in medicine: aspirin (acetylsalicylic acid) relieves pain and is hydrolysed in the body to salicylic and acetic acids; oil of wintergreen (methyl salicylate) relieves muscle pain. Esters give the flavours and smells of fruits; sodium benzoate (0.1%) preserves food."],
            ar: ["تحتوي الأحماض الكربوكسيلية على مجموعة الكربوكسيل –COOH، والأحماض الأليفاتية أحادية الكربوكسيل صيغتها " + eq("CₙH₂ₙ₊₁COOH") + " (الفورميك HCOOH والأسيتيك CH₃COOH)، ومنها أحماض أروماتية (البنزويك) وثنائية الكربوكسيل (الأكساليك) وهيدروكسيلية (اللاكتيك والستريك والسلسليك)، والأسماء الشائعة مشتقة من مصادرها، وفي IUPAC يضاف المقطع 'ويك'.",
              "يُحضَّر حمض الأسيتيك (الخل) في مصر بأكسدة المحاليل الكحولية المخففة بالبكتيريا، أو من الأسيتيلين، وحمض الأسيتيك النقي (الثلجي) يتجمد كالثلج عند 16.6 °س، ودرجات غليان الأحماض أعلى من الكحولات المقاربة لها لأنها تكوّن رابطتين هيدروجينيتين (ديمرات).",
              "الكشف: اختبار الحمضية: " + eq("2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑") + " (فوران)، واختبار تكوين الإستر: مع الإيثانول وقطرات من H₂SO₄ المركز تظهر رائحة فاكهة مميزة لأسيتات الإيثيل.",
              "الأسترة: " + eq("CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O") + " (حمض الكبريتيك المركز ينزع الماء)، وهو تفاعل انعكاسي: التحلل المائي الحمضي يعيد الحمض والكحول، أما التحلل المائي القلوي بـ NaOH (التصبن) فتفاعل تام: " + eq("CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH") + ".",
              "الدهون والزيوت جليسريدات ثلاثية: إسترات الجلسرول مع ثلاثة أحماض دهنية، وتصبنها يعطي الصابون والجلسرول، والبولي إسترات مثل الداكرون (تكاثف حمض التريفثاليك مع الإيثيلين جليكول) خاملة وتُستخدم بديلًا للشرايين التالفة وفي الأقمشة.",
              "الإسترات في الطب: الأسبرين (حمض الأسيتيل سلسليك) مسكن للآلام ويتحلل في الجسم إلى حمضي السلسليك والأسيتيك، وزيت المروخ (سلسيلات الميثيل) يخفف آلام العضلات، والإسترات تعطي الفاكهة نكهتها ورائحتها، وبنزوات الصوديوم (0.1%) مادة حافظة للأغذية."]
          },
          story: {
            en: ["Hassan helps his grandmother make soap the old way in their village near Damietta, boiling olive oil with caustic soda in a big copper pot.",
              "'This is saponification,' his chemistry teacher told him: the fat, an ester of glycerol, splits into soap and glycerol, and it does not go back.",
              "At the juice shop on the corner, the banana and apple smells are esters: an acid and an alcohol joined by losing a water molecule.",
              "In the school lab he warms vinegar, ethanol and a drop of concentrated sulphuric acid. A sweet nail-polish smell fills the room: ethyl acetate.",
              "His teacher explains why the reaction stops at about two-thirds: water from the product pushes it back. Adding excess alcohol or removing water pushes it forward."],
            ar: ["حسن يساعد جدته في صناعة الصابون بالطريقة القديمة في قريتهم قرب دمياط، بغلي زيت الزيتون مع الصودا الكاوية في وعاء نحاسي كبير.",
              "قال له معلم الكيمياء: 'هذا هو التصبن'؛ الدهن، وهو إستر للجلسرول، ينقسم إلى صابون وجلسرول ولا يعود.",
              "في محل العصير على الناصية، روائح الموز والتفاح إسترات: حمض وكحول ارتبطا بفقد جزيء ماء.",
              "في معمل المدرسة يدفّئ الخل والإيثانول وقطرة من حمض الكبريتيك المركز فتملأ الغرفة رائحة حلوة كمزيل طلاء الأظافر: أسيتات الإيثيل.",
              "ويشرح المعلم لماذا يتوقف التفاعل عند نحو الثلثين: الماء الناتج يدفعه للخلف، وإضافة زيادة من الكحول أو نزع الماء يدفعه للأمام."]
          }
        },
        words: [
          ["Carboxyl group", "مجموعة الكربوكسيل", "The functional group –COOH of carboxylic acids.", "المجموعة الوظيفية –COOH للأحماض الكربوكسيلية."],
          ["Esterification", "الأسترة", "Reaction of a carboxylic acid with an alcohol to form an ester and water (reversible).", "تفاعل حمض كربوكسيلي مع كحول لتكوين إستر وماء (تفاعل انعكاسي)."],
          ["Ester", "الإستر", "Compound RCOOR' formed from an acid and an alcohol, e.g. ethyl acetate.", "مركب صيغته RCOOR' يتكون من حمض وكحول مثل أسيتات الإيثيل."],
          ["Saponification", "التصبن", "Alkaline hydrolysis of an ester (fat) with NaOH: soap + glycerol; a complete reaction.", "التحلل المائي القلوي للإستر (الدهن) بـ NaOH ليعطي صابونًا وجلسرولًا، وهو تفاعل تام."],
          ["Triglyceride", "الجليسريد الثلاثي", "An ester of glycerol with three fatty acid molecules: fats and oils.", "إستر الجلسرول مع ثلاثة جزيئات أحماض دهنية: الدهون والزيوت."],
          ["Polyester (Dacron)", "البولي إستر (الداكرون)", "A condensation polymer of terephthalic acid and ethylene glycol; inert, used for artificial arteries.", "بوليمر تكاثفي من حمض التريفثاليك والإيثيلين جليكول، خامل ويُستخدم بديلًا للشرايين."],
          ["Aspirin", "الأسبرين", "Acetylsalicylic acid, a pain reliever hydrolysed in the body to salicylic and acetic acids.", "حمض الأسيتيل سلسليك، مسكن يتحلل في الجسم إلى حمضي السلسليك والأسيتيك."]
        ],
        lab: { parts: [{ type: "sec3chem_ester" }] },
        quiz: [
          { q: ["Which product is formed when acetic acid reacts with ethanol (conc. H₂SO₄)?", "ما الناتج عند تفاعل حمض الأسيتيك مع الإيثانول (H₂SO₄ مركز)؟"],
            c: [["Ethyl acetate + water", "أسيتات الإيثيل + ماء"], ["Diethyl ether + water", "ثنائي إيثيل إيثر + ماء"], ["Sodium acetate + ethanol", "أسيتات الصوديوم + إيثانول"], ["Acetaldehyde", "الأسيتالدهيد"]],
            off: [eq("CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O") + "; conc. H₂SO₄ absorbs the water and shifts the equilibrium forward.", eq("CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O") + "، وحمض الكبريتيك المركز يمتص الماء فيزيح الاتزان طرديًا."],
            sto: ["The nail-polish smell in Hassan's lab.", "رائحة مزيل الطلاء في معمل حسن."] },
          { q: ["What mass of NaOH neutralizes 6 g of acetic acid? (CH₃COOH = 60, NaOH = 40)", "ما كتلة NaOH اللازمة لتعادل 6 جم من حمض الأسيتيك؟ (CH₃COOH = 60، NaOH = 40)"],
            c: [["4 g", "4 جم"], ["6 g", "6 جم"], ["8 g", "8 جم"], ["2.4 g", "2.4 جم"]],
            off: ["6 ÷ 60 = 0.1 mol acid; 1 : 1 with NaOH → 0.1 × 40 = 4 g.", "6 ÷ 60 = 0.1 مول حمض، والنسبة 1 : 1 مع NaOH ← 0.1 × 40 = 4 جم."],
            sto: ["One sodium for each acidic hydrogen.", "صوديوم واحد لكل هيدروجين حمضي."] },
          { q: ["Why is alkaline hydrolysis of esters called saponification?", "لماذا يسمى التحلل المائي القلوي للإسترات بالتصبن؟"],
            c: [["Because soap is the sodium salt of higher fatty acids formed by it", "لأن الصابون هو ملح الصوديوم للأحماض الدهنية العليا الناتج منه"], ["Because it is reversible", "لأنه انعكاسي"], ["Because it produces esters", "لأنه ينتج إسترات"], ["Because it needs light", "لأنه يحتاج إلى ضوء"]],
            off: ["Fat (triglyceride) + 3NaOH → glycerol + 3 sodium salts of fatty acids (soap). The reaction is complete, not reversible.", "الدهن (جليسريد ثلاثي) + 3NaOH ← جلسرول + 3 أملاح صوديوم للأحماض الدهنية (صابون)، والتفاعل تام وليس انعكاسيًا."],
            sto: ["Grandma's olive oil and caustic soda become soap.", "زيت زيتون الجدة والصودا الكاوية يصبحان صابونًا."] },
          { q: ["Acetic acid reacts with sodium carbonate. The observation is...", "يتفاعل حمض الأسيتيك مع كربونات الصوديوم، والمشاهدة هي..."],
            c: [["effervescence of CO₂ that turns lime water milky", "فوران وتصاعد CO₂ يعكر ماء الجير"], ["a violet colour", "لون بنفسجي"], ["a fruity smell", "رائحة فاكهة"], ["a white ppt", "راسب أبيض"]],
            off: [eq("2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑") + ": the acidity test.", eq("2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑") + ": اختبار الحمضية."],
            sto: ["Vinegar and baking soda: the classic volcano.", "الخل والصودا: البركان الشهير."] },
          { q: ["Aspirin is hydrolysed in the body to...", "يتحلل الأسبرين في الجسم إلى..."],
            c: [["salicylic acid and acetic acid", "حمض السلسليك وحمض الأسيتيك"], ["phenol and ethanol", "الفينول والإيثانول"], ["benzoic acid and methanol", "حمض البنزويك والميثانول"], ["glycerol and fatty acids", "الجلسرول والأحماض الدهنية"]],
            off: ["Aspirin is acetylsalicylic acid, an ester of salicylic acid with acetic acid; hydrolysis splits that ester bond.", "الأسبرين هو حمض الأسيتيل سلسليك، وهو إستر لحمض السلسليك مع حمض الأسيتيك، والتحلل المائي يكسر رابطة الإستر."],
            sto: ["The headache pill splits into two acids inside you.", "قرص الصداع ينقسم إلى حمضين داخلك."] },
          { q: ["The boiling point of acetic acid (60 g/mol) is higher than that of 1-propanol (60 g/mol) because...", "درجة غليان حمض الأسيتيك (60 جم/مول) أعلى من 1-بروبانول (60 جم/مول) لأن..."],
            c: [["each acid molecule forms two hydrogen bonds (dimers)", "كل جزيء حمض يكوّن رابطتين هيدروجينيتين (ديمر)"], ["acetic acid is ionic", "حمض الأسيتيك أيوني"], ["propanol has no OH group", "البروبانول ليس به مجموعة OH"], ["acetic acid has more carbon atoms", "حمض الأسيتيك به ذرات كربون أكثر"]],
            off: ["The –COOH group has both C=O and O–H, so two molecules pair through two hydrogen bonds; more energy is needed to boil.", "مجموعة –COOH بها C=O و O–H فيرتبط جزيئان برابطتين هيدروجينيتين، فتلزم طاقة أكبر للغليان."],
            sto: ["Acid molecules travel in pairs holding both hands.", "جزيئات الحمض تسير أزواجًا ممسكة بيديها الاثنتين."] },
          { q: ["Dacron is formed from terephthalic acid and ethylene glycol by...", "يتكون الداكرون من حمض التريفثاليك والإيثيلين جليكول بـ..."],
            c: [["condensation polymerization (water is lost)", "البلمرة بالتكاثف (يخرج ماء)"], ["addition polymerization", "البلمرة بالإضافة"], ["saponification", "التصبن"], ["fermentation", "التخمر"]],
            off: ["Each acid group reacts with an alcohol group to form an ester link, releasing H₂O: a polyester.", "كل مجموعة حمض تتفاعل مع مجموعة كحول مكونة رابطة إستر مع خروج H₂O: بولي إستر."],
            sto: ["Every handshake leaves a drop of water behind.", "كل مصافحة تترك قطرة ماء خلفها."] }
        ]
      }
    ]
  });
})();

/* ---------- Sec 3 Chemistry: objectives, extra quiz items, tappable diagrams ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var O = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var X = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};

  /* ----- objectives (from the book's chapter objectives) ----- */
  O.sec3chemu1l1 = { en: ["Recognize the first transition series and its economic importance", "Write the electron configurations Sc to Zn, incl. Cr and Cu", "Explain why Fe²⁺ oxidizes easily but Mn²⁺ does not", "Determine oxidation states and define the transition element"],
    ar: ["التعرف على السلسلة الانتقالية الأولى وأهميتها الاقتصادية", "كتابة التوزيع الإلكتروني من Sc إلى Zn ومنها Cr و Cu", "تفسير سهولة تأكسد Fe²⁺ وصعوبة تأكسد Mn²⁺", "تحديد حالات التأكسد وتعريف العنصر الانتقالي"] };
  O.sec3chemu1l2 = { en: ["Explain the trends in atomic mass, radius and density", "Explain the metallic properties of transition elements", "Distinguish paramagnetic and diamagnetic substances", "Explain why transition elements are good catalysts"],
    ar: ["تفسير التدرج في الكتلة الذرية ونصف القطر والكثافة", "تفسير الخواص الفلزية للعناصر الانتقالية", "التمييز بين المواد البارامغناطيسية والديامغناطيسية", "تفسير استخدام العناصر الانتقالية كعوامل حفازة"] };
  O.sec3chemu1l3 = { en: ["Recognize the iron ores and their iron percentages", "Describe ore dressing, reduction and steel making", "Classify alloys: interstitial, substitutional, intermetallic", "Describe the properties of iron and its three oxides"],
    ar: ["التعرف على خامات الحديد ونسبة الحديد فيها", "وصف تجهيز الخام والاختزال وإنتاج الصلب", "تصنيف السبائك: بينية واستبدالية وبين فلزية", "وصف خواص الحديد وأكاسيده الثلاثة"] };
  O.sec3chemu2l1 = { en: ["Distinguish qualitative and quantitative analysis", "Detect the anions of the dilute HCl group", "Detect the anions of the conc. H₂SO₄ group", "Detect phosphate and sulphate with BaCl₂"],
    ar: ["التمييز بين التحليل الكيفي والكمي", "الكشف عن أنيونات مجموعة HCl المخفف", "الكشف عن أنيونات مجموعة H₂SO₄ المركز", "الكشف عن الفوسفات والكبريتات بكلوريد الباريوم"] };
  O.sec3chemu2l2 = { en: ["Explain why cations are divided into analytical groups", "Detect Cu²⁺ with HCl + H₂S", "Detect Al³⁺, Fe²⁺ and Fe³⁺ as hydroxides", "Detect Ca²⁺ with ammonium carbonate and the flame test"],
    ar: ["تفسير تقسيم الكاتيونات إلى مجموعات تحليلية", "الكشف عن Cu²⁺ بـ HCl + H₂S", "الكشف عن Al³⁺ و Fe²⁺ و Fe³⁺ كهيدروكسيدات", "الكشف عن Ca²⁺ بكربونات الأمونيوم واختبار اللهب"] };
  O.sec3chemu2l3 = { en: ["Carry out an acid-base titration with an indicator", "Use Ma·Va/na = Mb·Vb/nb", "Calculate water of crystallization by volatilization", "Calculate masses by the precipitation method"],
    ar: ["إجراء معايرة حمض بقاعدة باستخدام دليل", "استخدام العلاقة Ma·Va/na = Mb·Vb/nb", "حساب ماء التبلر بطريقة التطاير", "حساب الكتل بطريقة الترسيب"] };
  O.sec3chemu3l1 = { en: ["Distinguish complete and reversible reactions", "Describe chemical equilibrium as dynamic", "List the factors affecting reaction rate", "Apply the law of mass action to calculate Kc"],
    ar: ["التمييز بين التفاعلات التامة والانعكاسية", "وصف الاتزان الكيميائي بأنه ديناميكي", "ذكر العوامل المؤثرة في معدل التفاعل", "تطبيق قانون فعل الكتلة لحساب Kc"] };
  O.sec3chemu3l2 = { en: ["Explain temperature effects with collision theory", "Predict shifts with Le Chatelier's principle", "Calculate Kp from partial pressures", "Explain the role of catalysts and light"],
    ar: ["تفسير أثر درجة الحرارة بنظرية التصادم", "توقع اتجاه الإزاحة بقاعدة لوشاتيلييه", "حساب Kp من الضغوط الجزئية", "تفسير دور العوامل الحفازة والضوء"] };
  O.sec3chemu3l3 = { en: ["Compare strong and weak electrolytes", "Apply Ostwald's dilution law", "Calculate [H₃O⁺], [OH⁻], pH and pOH", "Calculate the solubility product Ksp"],
    ar: ["المقارنة بين الإلكتروليتات القوية والضعيفة", "تطبيق قانون أوستفالد للتخفيف", "حساب [H₃O⁺] و [OH⁻] و pH و pOH", "حساب حاصل الإذابة Ksp"] };
  O.sec3chemu4l1 = { en: ["Identify oxidation and reduction half-reactions", "Describe the Daniell cell and the salt bridge", "Describe the standard hydrogen electrode", "Use the electromotive series to calculate emf"],
    ar: ["تحديد نصفي تفاعل الأكسدة والاختزال", "وصف خلية دانيال والقنطرة الملحية", "وصف قطب الهيدروجين القياسي", "استخدام السلسلة الكهروكيميائية لحساب القوة الدافعة"] };
  O.sec3chemu4l2 = { en: ["Compare primary and secondary cells", "Describe the mercury cell, fuel cell, lead-acid and Li-ion batteries", "Explain the mechanism of iron corrosion", "Compare cathodic and anodic protection"],
    ar: ["المقارنة بين الخلايا الأولية والثانوية", "وصف خلية الزئبق وخلية الوقود والمركم الرصاصي وبطارية أيون الليثيوم", "تفسير ميكانيكية صدأ الحديد", "المقارنة بين الحماية الكاثودية والأنودية"] };
  O.sec3chemu4l3 = { en: ["Describe an electrolytic cell", "State Faraday's two laws", "Calculate mass, charge and time with Q = I·t and 96500 C", "Describe electroplating, Al extraction and Cu purification"],
    ar: ["وصف الخلية الإلكتروليتية", "ذكر قانوني فاراداي", "حساب الكتلة والشحنة والزمن بالعلاقة Q = I·t و 96500 كولوم", "وصف الطلاء الكهربي واستخلاص الألومنيوم وتنقية النحاس"] };
  O.sec3chemu5l1 = { en: ["Compare organic and inorganic compounds", "Draw isomers for a molecular formula", "Detect carbon and hydrogen in an organic compound", "Name alkanes by IUPAC and describe their reactions"],
    ar: ["المقارنة بين المركبات العضوية وغير العضوية", "رسم المتشكلات لصيغة جزيئية", "الكشف عن الكربون والهيدروجين في المركب العضوي", "تسمية الألكانات بنظام IUPAC ووصف تفاعلاتها"] };
  O.sec3chemu5l2 = { en: ["Prepare ethene and ethyne and write equations", "Apply Markovnikov's rule to additions", "Describe addition polymerization and its products", "Describe substitution reactions of benzene"],
    ar: ["تحضير الإيثين والإيثاين وكتابة المعادلات", "تطبيق قاعدة ماركونيكوف على تفاعلات الإضافة", "وصف البلمرة بالإضافة ونواتجها", "وصف تفاعلات الاستبدال في البنزين"] };
  O.sec3chemu5l3 = { en: ["Distinguish alcohols and phenols", "Classify alcohols as primary, secondary, tertiary", "Describe the preparation and reactions of ethanol", "Compare the acidity of phenol and alcohols; detect phenol"],
    ar: ["التمييز بين الكحولات والفينولات", "تصنيف الكحولات إلى أولية وثانوية وثالثية", "وصف تحضير الإيثانول وتفاعلاته", "مقارنة حمضية الفينول والكحولات والكشف عن الفينول"] };
  O.sec3chemu5l4 = { en: ["Recognize the carboxyl group and name acids", "Describe the tests for acetic acid", "Explain esterification and hydrolysis", "Recognize the uses of acids and esters (soap, Dacron, aspirin)"],
    ar: ["التعرف على مجموعة الكربوكسيل وتسمية الأحماض", "وصف الكشف عن حمض الأسيتيك", "تفسير الأسترة والتحلل المائي", "التعرف على استخدامات الأحماض والإسترات (الصابون والداكرون والأسبرين)"] };

  /* ----- extra quiz items ----- */
  function P(a, b) { return [a, b]; }
  X.sec3chemu1l1 = [
    { k: "order", q: P("Order these by the number of unpaired 3d electrons in the atom, from FEWEST to most.", "رتب حسب عدد إلكترونات 3d المفردة في الذرة من الأقل إلى الأكثر."),
      items: [P("Zn (3d¹⁰)", "Zn (3d¹⁰)"), P("Sc (3d¹)", "Sc (3d¹)"), P("V (3d³)", "V (3d³)"), P("Cr (3d⁵)", "Cr (3d⁵)")],
      off: P("Zn 0, Sc 1, V 3, Cr 5 (plus one 4s electron).", "Zn صفر، و Sc واحد، و V ثلاثة، و Cr خمسة (بالإضافة إلى إلكترون 4s)."), sto: P("Count the passengers sitting alone.", "عُدّ الركاب الجالسين وحدهم.") },
    { k: "tf", a: false, q: P("True or false: zinc is a transition element because it has 3d electrons.", "صواب أم خطأ: الخارصين عنصر انتقالي لأن به إلكترونات 3d."),
      off: P("False. Its 3d sublevel is complete in the atom and in Zn²⁺.", "خطأ؛ مستواه 3d مكتمل في الذرة وفي Zn²⁺."), sto: P("A full row stays full.", "الصف الممتلئ يظل ممتلئًا.") }
  ];
  X.sec3chemu1l2 = [
    { k: "match", q: P("Match each catalyst to its process.", "صِل كل عامل حفاز بعمليته."),
      pairs: [[P("Fe", "Fe"), P("Haber-Bosch ammonia", "النشادر بطريقة هابر-بوش")], [P("Ni", "Ni"), P("Hydrogenation of oils", "هدرجة الزيوت")], [P("V₂O₅", "V₂O₅"), P("Contact process (H₂SO₄)", "طريقة التلامس (H₂SO₄)")], [P("MnO₂", "MnO₂"), P("Decomposing H₂O₂", "تفكك H₂O₂")]],
      off: P("Each transition metal or oxide lowers the activation energy of its reaction.", "كل فلز انتقالي أو أكسيده يخفض طاقة تنشيط تفاعله."), sto: P("Each factory has its helper.", "لكل مصنع مساعده.") },
    { k: "tf", a: true, q: P("True or false: the magnetic moment increases with the number of unpaired electrons.", "صواب أم خطأ: يزداد العزم المغناطيسي بزيادة عدد الإلكترونات المفردة."),
      off: P("True: Fe³⁺ (5 unpaired) is more paramagnetic than Cr³⁺ (3).", "صواب: Fe³⁺ (5 مفردة) أكثر بارامغناطيسية من Cr³⁺ (3)."), sto: P("More single dancers, stronger pull.", "راقصون منفردون أكثر، جذب أقوى.") }
  ];
  X.sec3chemu1l3 = [
    { k: "order", q: P("Order the steps of producing steel from iron ore.", "رتب خطوات إنتاج الصلب من خام الحديد."),
      items: [P("Crushing and sintering", "التكسير والتلبيد"), P("Roasting", "التحميص"), P("Reduction (blast or Midrex furnace)", "الاختزال (الفرن العالي أو مدركس)"), P("Steel making (converter)", "إنتاج الصلب (المحول)")],
      off: P("Ore dressing (physical then chemical), reduction, then iron production.", "تجهيز الخام (فيزيائيًا ثم كيميائيًا) ثم الاختزال ثم إنتاج الحديد."), sto: P("From rock to reinforcing bar.", "من الصخر إلى حديد التسليح.") },
    { k: "tf", a: false, q: P("True or false: iron dissolves in dilute H₂SO₄ to give iron(III) sulphate.", "صواب أم خطأ: يذوب الحديد في H₂SO₄ المخفف معطيًا كبريتات حديد III."),
      off: P("False. It gives FeSO₄ (iron(II)) and H₂.", "خطأ؛ يعطي FeSO₄ (حديد II) و H₂."), sto: P("Hydrogen keeps iron at +2.", "الهيدروجين يبقي الحديد عند +2.") }
  ];
  X.sec3chemu2l1 = [
    { k: "match", q: P("Match each anion to its observation.", "صِل كل أنيون بمشاهدته."),
      pairs: [[P("Sulphide S²⁻", "الكبريتيد S²⁻"), P("Gas blackens lead acetate paper", "غاز يسوّد ورقة أسيتات الرصاص")], [P("Nitrite NO₂⁻", "النيتريت NO₂⁻"), P("Brown fumes at the mouth of the tube", "أبخرة بنية عند فوهة الأنبوبة")], [P("Iodide I⁻", "اليوديد I⁻"), P("Violet vapour with conc. H₂SO₄", "أبخرة بنفسجية مع H₂SO₄ المركز")], [P("Sulphate SO₄²⁻", "الكبريتات SO₄²⁻"), P("White BaSO₄ insoluble in HCl", "BaSO₄ أبيض لا يذوب في HCl")]],
      off: P("H₂S + lead acetate → black PbS; NO → NO₂ in air; I₂ vapour is violet; BaSO₄ resists HCl.", "H₂S + أسيتات الرصاص ← PbS أسود، و NO ← NO₂ في الهواء، وبخار اليود بنفسجي، و BaSO₄ لا يذوب في HCl."), sto: P("Four suspects, four fingerprints.", "أربعة مشتبهين وأربع بصمات.") },
    { k: "tf", a: true, q: P("True or false: silver chloride dissolves in ammonia solution.", "صواب أم خطأ: يذوب كلوريد الفضة في محلول النشادر."),
      off: P("True; silver iodide does not.", "صواب؛ أما يوديد الفضة فلا يذوب."), sto: P("White ppt washed away by ammonia.", "الراسب الأبيض يزيله النشادر.") }
  ];
  X.sec3chemu2l2 = [
    { k: "match", q: P("Match each cation to the colour of its hydroxide.", "صِل كل كاتيون بلون هيدروكسيده."),
      pairs: [[P("Al³⁺", "Al³⁺"), P("White gelatinous, dissolves in excess NaOH", "أبيض جيلاتيني يذوب في زيادة NaOH")], [P("Fe²⁺", "Fe²⁺"), P("White, turns greenish in air", "أبيض يخضر في الهواء")], [P("Fe³⁺", "Fe³⁺"), P("Reddish brown", "بني محمر")]],
      off: P("Al(OH)₃ is amphoteric; Fe(OH)₂ oxidizes in air; Fe(OH)₃ is rust coloured.", "Al(OH)₃ متردد، و Fe(OH)₂ يتأكسد في الهواء، و Fe(OH)₃ بلون الصدأ."), sto: P("Karim's three samples.", "عينات كريم الثلاث.") },
    { k: "tf", a: false, q: P("True or false: the group reagent of group 3 is dilute HCl.", "صواب أم خطأ: كاشف المجموعة الثالثة هو HCl المخفف."),
      off: P("False. It is ammonium hydroxide; dilute HCl is group 1's reagent.", "خطأ؛ هو هيدروكسيد الأمونيوم، و HCl المخفف كاشف المجموعة الأولى."), sto: P("Each group has its own key.", "لكل مجموعة مفتاحها.") }
  ];
  X.sec3chemu2l3 = [
    { k: "order", q: P("Order the titration steps.", "رتب خطوات المعايرة."),
      items: [P("Pipette 25 mL of base into a conical flask", "انقل 25 مل من القاعدة بالماصة إلى دورق مخروطي"), P("Add two drops of indicator", "أضف قطرتين من الدليل"), P("Add acid from the burette until the colour changes", "أضف الحمض من السحاحة حتى يتغير اللون"), P("Calculate with Ma·Va = Mb·Vb", "احسب باستخدام Ma·Va = Mb·Vb")],
      off: P("Measure, indicate, titrate to the end point, calculate.", "قِس، أضف الدليل، عاير حتى نقطة النهاية، احسب."), sto: P("Salma's pharmacy routine.", "روتين سلمى في الصيدلية.") },
    { k: "tf", a: true, q: P("True or false: in gravimetric precipitation the ppt is filtered on ashless filter paper.", "صواب أم خطأ: في التحليل الوزني بالترسيب يُرشَّح الراسب على ورق ترشيح عديم الرماد."),
      off: P("True, so the ignited paper leaves no mass behind.", "صواب، حتى لا يترك الورق المحروق أي كتلة."), sto: P("Only the ppt stays on the balance.", "الراسب وحده يبقى على الميزان.") }
  ];
  X.sec3chemu3l1 = [
    { k: "match", q: P("Match each reaction to its type.", "صِل كل تفاعل بنوعه."),
      pairs: [[P("NaCl + AgNO₃ → AgCl↓ + NaNO₃", "NaCl + AgNO₃ → AgCl↓ + NaNO₃"), P("Complete (precipitate)", "تام (راسب)")], [P("Mg + 2HCl → MgCl₂ + H₂↑", "Mg + 2HCl → MgCl₂ + H₂↑"), P("Complete (gas escapes)", "تام (غاز يتصاعد)")], [P("Acid + alcohol ⇌ ester + water", "حمض + كحول ⇌ إستر + ماء"), P("Reversible", "انعكاسي")]],
      off: P("A ppt or escaping gas cannot recombine; esterification goes both ways.", "الراسب أو الغاز المتصاعد لا يتحد ثانية، والأسترة تسير في الاتجاهين."), sto: P("One-way streets and two-way streets.", "شوارع اتجاه واحد وشوارع اتجاهين.") },
    { k: "tf", a: false, q: P("True or false: at equilibrium both the forward and backward reactions stop.", "صواب أم خطأ: عند الاتزان يتوقف التفاعلان الطردي والعكسي."),
      off: P("False. Both continue at equal rates: dynamic equilibrium.", "خطأ؛ يستمران بمعدلين متساويين: اتزان ديناميكي."), sto: P("The escalator never stops.", "السلم لا يتوقف أبدًا.") }
  ];
  X.sec3chemu3l2 = [
    { k: "match", q: P("For N₂ + 3H₂ ⇌ 2NH₃ + heat, match the change to the shift.", "للتفاعل N₂ + 3H₂ ⇌ 2NH₃ + حرارة، صِل التغير بالإزاحة."),
      pairs: [[P("Raise pressure", "رفع الضغط"), P("Forward (fewer moles)", "طردي (مولات أقل)")], [P("Raise temperature", "رفع درجة الحرارة"), P("Backward", "عكسي")], [P("Add a catalyst", "إضافة عامل حفاز"), P("No shift", "لا إزاحة")], [P("Remove NH₃", "سحب NH₃"), P("Forward", "طردي")]],
      off: P("Le Chatelier: the system opposes each change; a catalyst changes only the speed.", "لوشاتيلييه: يقاوم النظام كل تغير، والعامل الحفاز يغير السرعة فقط."), sto: P("The crowd fights back.", "الزحام يقاوم.") },
    { k: "tf", a: true, q: P("True or false: the rate of many reactions doubles for every 10 °C rise.", "صواب أم خطأ: يتضاعف معدل كثير من التفاعلات برفع درجة الحرارة 10 °س."),
      off: P("True, because the fraction of activated molecules increases.", "صواب، لزيادة نسبة الجزيئات المنشطة."), sto: P("Faster music, more energetic dancers.", "موسيقى أسرع، راقصون أنشط.") }
  ];
  X.sec3chemu3l3 = [
    { k: "order", q: P("Order these from MOST acidic to most basic.", "رتب من الأكثر حمضية إلى الأكثر قاعدية."),
      items: [P("0.1 M HCl (pH 1)", "HCl 0.1 مولر (pH 1)"), P("0.1 M acetic acid (pH 2.87)", "حمض أسيتيك 0.1 مولر (pH 2.87)"), P("Pure water (pH 7)", "ماء نقي (pH 7)"), P("0.1 M ammonia (pH 11.13)", "نشادر 0.1 مولر (pH 11.13)")],
      off: P("Lower pH = more acidic.", "كلما قل pH زادت الحمضية."), sto: P("Mostafa's pH strips in a row.", "شرائط pH عند مصطفى في صف.") },
    { k: "tf", a: false, q: P("True or false: diluting HCl increases its degree of ionization.", "صواب أم خطأ: تخفيف HCl يزيد درجة تأينه."),
      off: P("False. HCl is already completely ionized; only weak electrolytes obey Ostwald's law.", "خطأ؛ HCl تام التأين أصلًا، والإلكتروليتات الضعيفة فقط تخضع لقانون أوستفالد."), sto: P("Everyone already let go.", "الجميع ترك الأيدي أصلًا.") }
  ];
  X.sec3chemu4l1 = [
    { k: "order", q: P("Order these metals from the strongest reducing agent to the weakest.", "رتب هذه الفلزات من أقوى عامل مختزل إلى أضعفه."),
      items: [P("Mg (−2.37 V)", "Mg (−2.37 فولت)"), P("Zn (−0.76 V)", "Zn (−0.76 فولت)"), P("Cu (+0.34 V)", "Cu (+0.34 فولت)"), P("Ag (+0.80 V)", "Ag (+0.80 فولت)")],
      off: P("The more negative the reduction potential, the stronger the reducing agent.", "كلما كان جهد الاختزال أكثر سالبية كان العامل المختزل أقوى."), sto: P("Most generous giver first.", "الأكرم أولًا.") },
    { k: "tf", a: true, q: P("True or false: oxidation always occurs at the anode in every electric cell.", "صواب أم خطأ: تحدث الأكسدة دائمًا عند الأنود في جميع الخلايا الكهربية."),
      off: P("True, in both galvanic and electrolytic cells.", "صواب، في الخلايا الجلفانية والإلكتروليتية."), sto: P("The anode always gives electrons away.", "الأنود يعطي الإلكترونات دائمًا.") }
  ];
  X.sec3chemu4l2 = [
    { k: "match", q: P("Match each cell to its emf.", "صِل كل خلية بقوتها الدافعة."),
      pairs: [[P("Mercury cell", "خلية الزئبق"), P("1.35 V", "1.35 فولت")], [P("Fuel cell", "خلية الوقود"), P("1.23 V", "1.23 فولت")], [P("One lead-acid cell", "خلية مركم رصاصي واحدة"), P("≈ 2 V", "≈ 2 فولت")], [P("Lithium-ion battery", "بطارية أيون الليثيوم"), P("3 V", "3 فولت")]],
      off: P("Values from the book.", "قيم من الكتاب."), sto: P("Every device chooses its battery.", "كل جهاز يختار بطاريته.") },
    { k: "tf", a: false, q: P("True or false: the fuel cell stores energy like other batteries.", "صواب أم خطأ: خلية الوقود تخزن الطاقة مثل البطاريات الأخرى."),
      off: P("False. It needs a continuous supply of fuel and removal of products.", "خطأ؛ تحتاج إمدادًا مستمرًا بالوقود وإزالة مستمرة للنواتج."), sto: P("No fuel, no current.", "لا وقود، لا تيار.") }
  ];
  X.sec3chemu4l3 = [
    { k: "order", q: P("Order these by the mass deposited by 1 faraday, from smallest to largest.", "رتب حسب الكتلة المترسبة بمرور 1 فاراداي من الأصغر إلى الأكبر."),
      items: [P("Al (9 g)", "Al (9 جم)"), P("Cu (31.78 g)", "Cu (31.78 جم)"), P("Au (65.66 g)", "Au (65.66 جم)"), P("Ag (107.88 g)", "Ag (107.88 جم)")],
      off: P("1 F deposits one gram-equivalent = atomic mass ÷ charge.", "1 فاراداي يرسب كتلة مكافئة جرامية = الكتلة الذرية ÷ الشحنة."), sto: P("Paid per electron.", "الأجر بالإلكترون.") },
    { k: "tf", a: true, q: P("True or false: in copper purification the impure copper is the anode.", "صواب أم خطأ: في تنقية النحاس يكون النحاس غير النقي هو الأنود."),
      off: P("True; it dissolves and pure copper deposits on the cathode.", "صواب؛ يذوب ويترسب نحاس نقي على الكاثود."), sto: P("The dirty bar feeds the clean one.", "القضيب المتسخ يغذي النظيف.") }
  ];
  X.sec3chemu5l1 = [
    { k: "order", q: P("Order these alkanes by boiling point, lowest first.", "رتب هذه الألكانات حسب درجة الغليان من الأقل."),
      items: [P("Methane CH₄", "الميثان CH₄"), P("Ethane C₂H₆", "الإيثان C₂H₆"), P("Butane C₄H₁₀", "البيوتان C₄H₁₀"), P("Octane C₈H₁₈", "الأوكتان C₈H₁₈")],
      off: P("Boiling point rises with molar mass in a homologous series.", "ترتفع درجة الغليان بزيادة الكتلة المولية في السلسلة المتجانسة."), sto: P("Heavier molecules hold on longer.", "الجزيئات الأثقل تتماسك أكثر.") },
    { k: "tf", a: true, q: P("True or false: Wöhler's preparation of urea destroyed the vital force theory.", "صواب أم خطأ: تحضير فوهلر لليوريا هدم نظرية القوة الحيوية."),
      off: P("True: urea was made from inorganic substances in 1828.", "صواب: حُضرت اليوريا من مواد غير عضوية عام 1828."), sto: P("No living cell needed.", "لا حاجة لخلية حية.") }
  ];
  X.sec3chemu5l2 = [
    { k: "match", q: P("Match each monomer to its polymer.", "صِل كل مونومر ببوليمره."),
      pairs: [[P("Ethene", "الإيثين"), P("Polyethylene", "البولي إيثيلين")], [P("Vinyl chloride", "كلوريد الفينيل"), P("PVC", "PVC")], [P("Tetrafluoroethene", "رباعي فلورو إيثين"), P("Teflon", "التفلون")], [P("Styrene", "الستيرين"), P("Polystyrene", "البوليسترين")]],
      off: P("All are addition polymers formed by opening the C=C bond.", "جميعها بوليمرات إضافة تتكون بفتح الرابطة C=C."), sto: P("Ahmed's plastic shop.", "محل البلاستيك عند أحمد.") },
    { k: "tf", a: false, q: P("True or false: benzene mainly undergoes addition reactions like ethene.", "صواب أم خطأ: يتفاعل البنزين غالبًا بالإضافة مثل الإيثين."),
      off: P("False. Its delocalized ring prefers substitution (halogenation, nitration, alkylation, sulphonation).", "خطأ؛ حلقته ذات الإلكترونات غير المتمركزة تفضل الاستبدال (الهلجنة والنيترة والألكلة والسلفنة)."), sto: P("Benzene keeps its ring and swaps hydrogens.", "البنزين يحتفظ بحلقته ويبدل الهيدروجين.") }
  ];
  X.sec3chemu5l3 = [
    { k: "match", q: P("Match each alcohol to its oxidation product.", "صِل كل كحول بناتج أكسدته."),
      pairs: [[P("Ethanol (primary)", "الإيثانول (أولي)"), P("Acetaldehyde, then acetic acid", "أسيتالدهيد ثم حمض أسيتيك")], [P("2-propanol (secondary)", "2-بروبانول (ثانوي)"), P("Acetone (ketone)", "الأسيتون (كيتون)")], [P("2-methyl-2-propanol (tertiary)", "2-ميثيل-2-بروبانول (ثالثي)"), P("No oxidation", "لا يتأكسد")]],
      off: P("Oxidation needs hydrogen on the carbinol carbon: 2 H, 1 H, 0 H.", "الأكسدة تحتاج هيدروجين على ذرة الكربون الكربينولية: 2 ثم 1 ثم صفر."), sto: P("Fewer friends, easier to oxidize.", "صديقات أقل، أكسدة أسهل.") },
    { k: "tf", a: true, q: P("True or false: phenol gives a violet colour with iron(III) chloride.", "صواب أم خطأ: يعطي الفينول لونًا بنفسجيًا مع كلوريد الحديد III."),
      off: P("True; it is the standard test for phenol.", "صواب؛ وهو الكشف المميز للفينول."), sto: P("Grandma's disinfectant.", "مطهر الجدة.") }
  ];
  X.sec3chemu5l4 = [
    { k: "order", q: P("Order the steps of making ethyl acetate in the lab.", "رتب خطوات تحضير أسيتات الإيثيل في المعمل."),
      items: [P("Mix acetic acid and ethanol", "اخلط حمض الأسيتيك والإيثانول"), P("Add drops of conc. H₂SO₄", "أضف قطرات من H₂SO₄ المركز"), P("Warm gently", "سخّن بلطف"), P("Notice the fruity smell", "لاحظ رائحة الفاكهة")],
      off: P("The acid catalyses and removes water; warming speeds the reaction.", "الحمض يحفز التفاعل وينزع الماء، والتسخين يسرّعه."), sto: P("Hassan's lab smell.", "رائحة معمل حسن.") },
    { k: "tf", a: false, q: P("True or false: saponification of a fat is a reversible reaction.", "صواب أم خطأ: تصبن الدهن تفاعل انعكاسي."),
      off: P("False. Alkaline hydrolysis is complete; acid hydrolysis is the reversible one.", "خطأ؛ التحلل القلوي تام، والتحلل الحمضي هو الانعكاسي."), sto: P("Soap never turns back into oil.", "الصابون لا يعود زيتًا أبدًا.") }
  ];

  /* ----- tappable diagrams (viewBox 0 0 400 240) ----- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 12) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function rect(x, y, w, h, f, s) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="6" fill="' + (f || "var(--bg-2)") + '" stroke="' + (s || "var(--muted)") + '" stroke-width="2"/>'; }
  function line(x1, y1, x2, y2, c, w, extra) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || "var(--muted)") + '" stroke-width="' + (w || 2) + '" ' + (extra || "") + "/>"; }
  function circ(x, y, r, f, s) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"' + (s ? ' stroke="' + s + '" stroke-width="2"' : "") + "/>"; }
  function arrowDef(id, c) { return '<defs><marker id="' + id + '" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="' + c + '"/></marker></defs>'; }
  function g(s) { return '<g direction="ltr">' + s + "</g>"; }
  function boxes(x, y, n, filled) { var s = ""; for (var i = 0; i < 5; i++) { s += rect(x + i * 26, y, 24, 24, "var(--card)"); var e = filled[i] || 0; if (e >= 1) s += tx(x + i * 26 + 8, y + 17, "↑", 'style="fill:#2563eb"', 14); if (e >= 2) s += tx(x + i * 26 + 16, y + 17, "↓", 'style="fill:#ef4444"', 14); } return s; }

  D.sec3chemu1l1 = {
    title: ["3d orbital boxes: Cr, Mn²⁺ and Fe³⁺", "صناديق أوربيتالات 3d: Cr و Mn²⁺ و Fe³⁺"],
    svg: function () {
      var s = "";
      s += tx(40, 40, "Cr") + rect(70, 22, 24, 24, "var(--card)") + tx(78, 39, "↑", 'style="fill:#2563eb"', 14) + tx(82, 62, "4s", mut, 10) + boxes(110, 22, 5, [1, 1, 1, 1, 1]) + tx(175, 62, "3d⁵", mut, 10);
      s += tx(40, 110, "Mn²⁺") + boxes(110, 92, 5, [1, 1, 1, 1, 1]) + tx(175, 132, "3d⁵", mut, 10);
      s += tx(40, 180, "Fe²⁺") + boxes(110, 162, 5, [2, 1, 1, 1, 1]) + tx(175, 202, "3d⁶", mut, 10);
      s += tx(320, 40, t("half-filled 4s and 3d", "4s و 3d نصف ممتلئين"), mut, 11) + tx(320, 110, t("stable, hard to oxidize", "مستقر، صعب التأكسد"), mut, 11) + tx(320, 180, t("loses 1 e⁻ → 3d⁵", "يفقد 1 e⁻ ← 3d⁵"), mut, 11);
      s += tx(200, 228, t("+2 state = the two 4s electrons leave first", "حالة +2 = خروج إلكترونَي 4s أولًا"), mut, 11);
      return g(s);
    },
    spots: [[82, 34, ["4s¹ in chromium", "4s¹ في الكروم"], ["One 4s electron moves into 3d so both sublevels are half-filled: extra stability.", "ينتقل إلكترون من 4s إلى 3d فيصبح المستويان نصف ممتلئين: استقرار إضافي."]],
      [175, 34, ["Hund's rule", "قاعدة هوند"], ["Electrons fill the five 3d orbitals singly before pairing.", "تشغل الإلكترونات أوربيتالات 3d الخمسة فرادى قبل الازدواج."]],
      [175, 104, ["Mn²⁺ = 3d⁵", "Mn²⁺ = 3d⁵"], ["Already half-filled, so Mn²⁺ is not easily oxidized to Mn³⁺.", "نصف ممتلئ أصلًا فلا يسهل تأكسده إلى Mn³⁺."]],
      [123, 174, ["The paired electron", "الإلكترون المزدوج"], ["Fe²⁺ (3d⁶) loses this extra electron to become Fe³⁺ (3d⁵), more stable.", "يفقد Fe²⁺ (3d⁶) هذا الإلكترون الزائد ليصبح Fe³⁺ (3d⁵) الأكثر استقرارًا."]],
      [200, 224, ["4s leaves first", "4s يخرج أولًا"], ["All the series show +2 by losing 4s electrons, except scandium.", "تُظهر عناصر السلسلة حالة +2 بفقد إلكترونات 4s ما عدا السكانديوم."]]]
  };
  D.sec3chemu1l2 = {
    title: ["Paramagnetic and diamagnetic samples", "عينات بارامغناطيسية وديامغناطيسية"],
    svg: function () {
      var s = arrowDef("s3a1", "var(--muted)");
      s += '<path d="M150 70 h40 v100 h-40 v-30 h20 v-40 h-20 z" fill="#ef4444"/>' + '<path d="M250 70 h-40 v100 h40 v-30 h-20 v-40 h20 z" fill="#3b82f6"/>';
      s += tx(170, 190, "N") + tx(230, 190, "S");
      s += line(80, 20, 80, 95) + circ(80, 108, 14, "#a16207") + tx(80, 112, "Fe³⁺", 'style="fill:#fff"', 10) + line(100, 108, 140, 108, "var(--muted)", 2, 'marker-end="url(#s3a1)"');
      s += line(330, 20, 330, 95) + circ(330, 108, 14, "#94a3b8") + tx(330, 112, "Zn²⁺", 'style="fill:#fff"', 10) + line(310, 108, 355, 108, "var(--muted)", 2, 'marker-end="url(#s3a1)"');
      s += tx(80, 150, t("pulled in", "ينجذب"), mut) + tx(330, 150, t("pushed out", "يتنافر"), mut);
      s += tx(200, 225, t("V₂O₅, Fe, Ni, MnO₂: catalysts", "V₂O₅ و Fe و Ni و MnO₂: عوامل حفازة"), mut, 11);
      return g(s);
    },
    spots: [[80, 108, ["Paramagnetic", "بارامغناطيسي"], ["Unpaired electrons (Fe³⁺ has 5): attracted to the magnet.", "إلكترونات مفردة (Fe³⁺ به 5): ينجذب للمغناطيس."]],
      [330, 108, ["Diamagnetic", "ديامغناطيسي"], ["All electrons paired (Zn²⁺, 3d¹⁰): repelled weakly.", "كل الإلكترونات مزدوجة (Zn²⁺, 3d¹⁰): يتنافر بضعف."]],
      [200, 120, ["Magnetic field", "المجال المغناطيسي"], ["The pull grows with the number of unpaired electrons (magnetic moment).", "يزداد الجذب بزيادة عدد الإلكترونات المفردة (العزم المغناطيسي)."]],
      [200, 222, ["Catalytic activity", "النشاط الحفزي"], ["4s and 3d electrons bond reactants to the surface and lower activation energy.", "إلكترونات 4s و 3d تربط المتفاعلات بالسطح وتخفض طاقة التنشيط."]]]
  };
  D.sec3chemu1l3 = {
    title: ["Steps of iron production and alloy lattices", "مراحل إنتاج الحديد وشبكات السبائك"],
    svg: function () {
      var s = arrowDef("s3a2", "var(--muted)"), i, j;
      [[10, t("Ore dressing", "تجهيز الخام")], [140, t("Reduction", "الاختزال")], [270, t("Steel", "الصلب")]].forEach(function (b) { s += rect(b[0], 20, 120, 40, "var(--card)") + tx(b[0] + 60, 45, b[1], ink, 12); });
      s += line(130, 40, 138, 40, "var(--muted)", 2, 'marker-end="url(#s3a2)"') + line(260, 40, 268, 40, "var(--muted)", 2, 'marker-end="url(#s3a2)"');
      for (i = 0; i < 4; i++) for (j = 0; j < 3; j++) { s += circ(40 + i * 22, 110 + j * 22, 10, "#94a3b8"); s += circ(310 + i * 22, 110 + j * 22, 10, (i + j) % 3 === 0 ? "#22c55e" : "#94a3b8"); }
      for (i = 0; i < 3; i++) for (j = 0; j < 2; j++) s += circ(51 + i * 22, 121 + j * 22, 4, "#111827");
      s += tx(73, 190, t("interstitial (steel)", "بينية (الصلب)"), mut, 11) + tx(343, 190, t("substitutional (Fe-Cr)", "استبدالية (Fe-Cr)"), mut, 11);
      s += tx(200, 130, "Fe₂O₃ + 3CO → 2Fe + 3CO₂", ink, 11) + tx(200, 225, "% Fe in Fe₂O₃ = 112/160 = 70%", mut, 11);
      return g(s);
    },
    spots: [[70, 40, ["Ore dressing", "تجهيز الخام"], ["Crushing, sintering, concentration, then roasting to dry the ore and oxidize S and P.", "التكسير والتلبيد والتركيز ثم التحميص لتجفيف الخام وأكسدة الكبريت والفوسفور."]],
      [200, 40, ["Reduction", "الاختزال"], ["CO in the blast furnace, or CO + H₂ from natural gas in the Midrex furnace.", "بغاز CO في الفرن العالي أو CO + H₂ من الغاز الطبيعي في فرن مدركس."]],
      [330, 40, ["Steel making", "إنتاج الصلب"], ["Oxygen converter, open-hearth or electric furnace: remove impurities, add elements.", "المحول الأكسجيني أو الفرن المفتوح أو الكهربي: إزالة الشوائب وإضافة العناصر."]],
      [73, 135, ["Interstitial alloy", "السبيكة البينية"], ["Small C atoms in the spaces stop layers sliding: steel is harder than iron.", "ذرات الكربون الصغيرة في الفراغات تمنع الانزلاق: الصلب أصلد من الحديد."]],
      [343, 135, ["Substitutional alloy", "السبيكة الاستبدالية"], ["Cr atoms (same radius) replace some Fe atoms: stainless steel.", "ذرات الكروم (نفس نصف القطر) تحل محل بعض ذرات الحديد: الصلب الذي لا يصدأ."]],
      [200, 222, ["Iron percentage", "نسبة الحديد"], ["Magnetite 72.4%, hematite 70%, limonite ≈ 60%, siderite ≈ 48%.", "الماجنتيت 72.4%، والهيماتيت 70%، والليمونيت ≈ 60%، والسيدريت ≈ 48%."]]]
  };
  function tube(x, liq, extra) { return '<path d="M' + x + ' 40 v130 a16 16 0 0 0 32 0 v-130" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><path d="M' + (x + 2) + ' 120 v50 a14 14 0 0 0 28 0 v-50 z" fill="' + liq + '"/>' + (extra || ""); }
  D.sec3chemu2l1 = {
    title: ["The three anion groups", "مجموعات الأنيونات الثلاث"],
    svg: function () {
      var s = tube(50, "#e0f2fe", '<circle cx="62" cy="110" r="4" fill="#fff" stroke="#94a3b8"/><circle cx="70" cy="95" r="3" fill="#fff" stroke="#94a3b8"/>') + tube(185, "#fde68a", '<path d="M190 30 q10 -15 20 0 q10 -15 20 0" stroke="#a855f7" stroke-width="3" fill="none"/>') + tube(320, "#f1f5f9", '<rect x="324" y="160" width="24" height="14" fill="#fff" stroke="#94a3b8"/>');
      s += tx(66, 210, t("dil. HCl", "HCl مخفف")) + tx(201, 210, t("conc. H₂SO₄", "H₂SO₄ مركز")) + tx(336, 210, "BaCl₂");
      s += tx(66, 228, "CO₃²⁻ HCO₃⁻ SO₃²⁻ S²⁻ S₂O₃²⁻ NO₂⁻", mut, 8) + tx(201, 228, "Cl⁻ Br⁻ I⁻ NO₃⁻", mut, 10) + tx(336, 228, "PO₄³⁻ SO₄²⁻", mut, 10);
      return g(s);
    },
    spots: [[66, 100, ["Gas evolved", "تصاعد غاز"], ["HCl displaces less stable acids that decompose to gases: CO₂, SO₂, H₂S, NO.", "يطرد HCl الأحماض الأقل ثباتًا فتتفكك إلى غازات: CO₂ و SO₂ و H₂S و NO."]],
      [201, 25, ["Coloured fumes", "أبخرة ملونة"], ["Conc. H₂SO₄: HCl (white fumes with NH₃), orange Br₂, violet I₂, brown NO₂.", "مع H₂SO₄ المركز: HCl (سحب بيضاء مع النشادر)، Br₂ برتقالي، I₂ بنفسجي، NO₂ بني."]],
      [336, 165, ["White ppt", "راسب أبيض"], ["BaSO₄ does not dissolve in dilute HCl; Ba₃(PO₄)₂ does.", "BaSO₄ لا يذوب في HCl المخفف، و Ba₃(PO₄)₂ يذوب."]],
      [66, 150, ["Lime water test", "اختبار ماء الجير"], ["CO₂ from carbonate/bicarbonate turns lime water milky; MgSO₄ separates them.", "CO₂ من الكربونات أو البيكربونات يعكر ماء الجير، و MgSO₄ يميز بينهما."]],
      [201, 150, ["Silver nitrate", "نترات الفضة"], ["AgCl white (soluble in NH₃), AgBr pale yellow, AgI yellow (insoluble).", "AgCl أبيض (يذوب في النشادر)، و AgBr أبيض مصفر، و AgI أصفر (لا يذوب)."]]]
  };
  D.sec3chemu2l2 = {
    title: ["Hydroxide precipitates and the flame test", "رواسب الهيدروكسيدات واختبار اللهب"],
    svg: function () {
      var s = tube(30, "#f8fafc", '<rect x="34" y="150" width="24" height="22" fill="#fff" stroke="#cbd5e1"/>') + tube(120, "#ecfccb", '<rect x="124" y="150" width="24" height="22" fill="#d9f99d"/>') + tube(210, "#fef3c7", '<rect x="214" y="150" width="24" height="22" fill="#9a3412"/>') + tube(300, "#dbeafe", '<rect x="304" y="150" width="24" height="22" fill="#111827"/>');
      s += tx(46, 210, "Al³⁺") + tx(136, 210, "Fe²⁺") + tx(226, 210, "Fe³⁺") + tx(316, 210, "Cu²⁺");
      s += '<path d="M375 120 q-12 -30 0 -60 q12 30 0 60z" fill="#dc2626"/>' + tx(375, 140, "Ca²⁺", ink, 11);
      return g(s);
    },
    spots: [[46, 160, ["Al(OH)₃", "Al(OH)₃"], ["White gelatinous; dissolves in excess NaOH to sodium meta-aluminate.", "أبيض جيلاتيني يذوب في زيادة NaOH مكونًا ميتا ألومينات الصوديوم."]],
      [136, 160, ["Fe(OH)₂", "Fe(OH)₂"], ["White, turning greenish in air as it oxidizes.", "أبيض يتحول إلى مخضر في الهواء بالتأكسد."]],
      [226, 160, ["Fe(OH)₃", "Fe(OH)₃"], ["Reddish-brown gelatinous ppt, soluble in acids.", "راسب بني محمر جيلاتيني يذوب في الأحماض."]],
      [316, 160, ["CuS", "CuS"], ["Group 2: black sulphide with HCl + H₂S, soluble in hot HNO₃.", "المجموعة الثانية: كبريتيد أسود مع HCl + H₂S يذوب في حمض النيتريك الساخن."]],
      [375, 90, ["Brick-red flame", "لهب أحمر طوبي"], ["Calcium (group 5, precipitated by (NH₄)₂CO₃).", "الكالسيوم (المجموعة الخامسة، يُرسَّب بكربونات الأمونيوم)."]]]
  };
  D.sec3chemu2l3 = {
    title: ["Titration set-up", "جهاز المعايرة"],
    svg: function () {
      var s = rect(185, 10, 20, 130, "var(--card)") + '<rect x="188" y="40" width="14" height="98" fill="#bfdbfe"/>' + line(195, 140, 195, 158, "var(--muted)", 3) + rect(175, 120, 40, 8, "#64748b", "#64748b");
      s += '<path d="M160 230 L180 165 h30 L230 230 z" fill="#fbcfe8" stroke="var(--muted)" stroke-width="2"/>';
      s += tx(300, 40, "Ma·Va/na = Mb·Vb/nb", ink, 12) + tx(300, 70, "0.1 × 21 = Mb × 25", mut, 11) + tx(300, 95, "Mb = 0.084 M", 'style="fill:#16a34a"', 12);
      s += tx(80, 60, t("burette: 0.1 M HCl", "سحاحة: HCl 0.1 مولر"), mut, 11) + tx(80, 210, t("25 mL NaOH + indicator", "25 مل NaOH + دليل"), mut, 11);
      return g(s);
    },
    spots: [[195, 60, ["Burette", "السحاحة"], ["Holds the standard solution; read the volume used at the end point.", "تحتوي على المحلول القياسي، ويُقرأ الحجم المستهلك عند نقطة النهاية."]],
      [195, 124, ["Tap", "الصنبور"], ["Add acid drop by drop near the end point.", "أضف الحمض قطرة قطرة قرب نقطة النهاية."]],
      [195, 205, ["Conical flask", "الدورق المخروطي"], ["25 mL of base by pipette + 2 drops of phenolphthalein (pink).", "25 مل قاعدة بالماصة + قطرتان فينولفثالين (وردي)."]],
      [300, 40, ["Titration law", "قانون المعايرة"], ["Divide each side by the number of moles in the balanced equation.", "اقسم كل طرف على عدد المولات في المعادلة الموزونة."]],
      [300, 95, ["Result", "النتيجة"], ["21 mL of 0.1 M HCl neutralizes 25 mL of 0.084 M NaOH.", "21 مل من HCl 0.1 مولر تعادل 25 مل من NaOH 0.084 مولر."]]]
  };
  D.sec3chemu3l1 = {
    title: ["Concentration against time for a reversible reaction", "التركيز مع الزمن في تفاعل انعكاسي"],
    svg: function () {
      var s = line(50, 210, 380, 210) + line(50, 210, 50, 20);
      s += '<path d="M50 40 C110 140, 170 160, 380 165" stroke="#ef4444" stroke-width="4" fill="none"/><path d="M50 205 C110 110, 170 95, 380 92" stroke="#2563eb" stroke-width="4" fill="none"/>';
      s += line(210, 20, 210, 210, "var(--line)", 2, 'stroke-dasharray="4 4"');
      s += tx(330, 85, t("products", "النواتج"), 'style="fill:#2563eb"', 11) + tx(330, 182, t("reactants", "المتفاعلات"), 'style="fill:#ef4444"', 11) + tx(360, 228, t("time", "الزمن"), mut) + tx(290, 40, t("equilibrium", "الاتزان"), mut);
      s += tx(120, 30, "Kc = [HI]²/[H₂][I₂]", ink, 11);
      return g(s);
    },
    spots: [[90, 90, ["Forward rate high", "المعدل الطردي كبير"], ["At the start only reactants exist, so the forward reaction dominates.", "في البداية توجد المتفاعلات فقط فيسود التفاعل الطردي."]],
      [210, 120, ["Equilibrium reached", "الوصول للاتزان"], ["Forward rate = backward rate; concentrations stop changing.", "المعدل الطردي = المعدل العكسي، وتثبت التركيزات."]],
      [330, 92, ["Products stay", "النواتج تبقى"], ["Both reactants and products remain: the system is dynamic.", "المتفاعلات والنواتج موجودة معًا: النظام ديناميكي."]],
      [120, 30, ["Law of mass action", "قانون فعل الكتلة"], ["Kc = 1.563² ÷ (0.221 × 0.221) ≈ 50 for H₂ + I₂ ⇌ 2HI.", "Kc = 1.563² ÷ (0.221 × 0.221) ≈ 50 للتفاعل H₂ + I₂ ⇌ 2HI."]]]
  };
  D.sec3chemu3l2 = {
    title: ["2NO₂ ⇌ N₂O₄ + heat in three flasks", "2NO₂ ⇌ N₂O₄ + حرارة في ثلاثة دوارق"],
    svg: function () {
      var s = "";
      [[70, "#fef3c7", t("ice", "ثلج")], [200, "#d97706", t("25 °C", "25 °س")], [330, "#7c2d12", t("hot", "ساخن")]].forEach(function (b) { s += circ(b[0], 120, 50, b[1], "var(--muted)") + rect(b[0] - 10, 50, 20, 25, "var(--card)") + tx(b[0], 195, b[2]); });
      s += tx(200, 228, t("Raising pressure → fewer moles → paler", "زيادة الضغط ← مولات أقل ← لون أفتح"), mut, 11) + tx(200, 25, t("Catalyst: faster, same colour", "العامل الحفاز: أسرع، نفس اللون"), mut, 11);
      return g(s);
    },
    spots: [[70, 120, ["Cooled", "مبرد"], ["Shift forward (exothermic direction): colourless N₂O₄.", "إزاحة طردية (الاتجاه الطارد للحرارة): N₂O₄ عديم اللون."]],
      [200, 120, ["Room temperature", "درجة حرارة الغرفة"], ["A brown mixture of NO₂ and N₂O₄ at equilibrium.", "مخلوط بني من NO₂ و N₂O₄ عند الاتزان."]],
      [330, 120, ["Heated", "مسخن"], ["Shift backward to absorb heat: dark brown NO₂.", "إزاحة عكسية لامتصاص الحرارة: NO₂ بني غامق."]],
      [200, 225, ["Pressure", "الضغط"], ["2 mol gas → 1 mol: higher pressure favours N₂O₄.", "2 مول غاز ← 1 مول: الضغط المرتفع يفضل N₂O₄."]],
      [200, 25, ["Catalyst", "العامل الحفاز"], ["Lowers activation energy both ways; equilibrium position unchanged.", "يخفض طاقة التنشيط في الاتجاهين، وموضع الاتزان لا يتغير."]]]
  };
  D.sec3chemu3l3 = {
    title: ["The pH scale", "مقياس الأس الهيدروجيني"],
    svg: function () {
      var s = "", cols = ["#dc2626", "#ea580c", "#f59e0b", "#facc15", "#a3e635", "#4ade80", "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#7e22ce"];
      for (var i = 0; i <= 14; i++) s += '<rect x="' + (20 + i * 24) + '" y="90" width="24" height="40" fill="' + cols[i] + '"/>' + tx(32 + i * 24, 148, String(i), ink, 11);
      s += tx(44, 70, "HCl 0.1 M", mut, 10) + tx(92, 50, t("vinegar", "الخل"), mut, 10) + tx(200, 70, t("pure water", "ماء نقي"), mut, 10) + tx(296, 50, "NH₃ 0.1 M", mut, 10) + tx(356, 70, "NaOH 0.1 M", mut, 10);
      s += tx(200, 185, "pH = −log[H₃O⁺]   pH + pOH = 14", ink, 12) + tx(200, 215, "Kw = [H⁺][OH⁻] = 10⁻¹⁴", mut, 12);
      return g(s);
    },
    spots: [[44, 110, ["Strong acid", "حمض قوي"], ["0.1 M HCl is fully ionized: [H⁺] = 0.1, pH = 1.", "HCl 0.1 مولر تام التأين: [H⁺] = 0.1 و pH = 1."]],
      [92, 110, ["Weak acid", "حمض ضعيف"], ["0.1 M acetic acid: [H₃O⁺] = √(Ka·C) = 1.34×10⁻³, pH 2.87.", "حمض الأسيتيك 0.1 مولر: [H₃O⁺] = √(Ka·C) = 1.34×10⁻³ و pH = 2.87."]],
      [188, 110, ["Neutral", "متعادل"], ["[H⁺] = [OH⁻] = 10⁻⁷ M at 25 °C.", "[H⁺] = [OH⁻] = 10⁻⁷ مولر عند 25 °س."]],
      [284, 110, ["Weak base", "قاعدة ضعيفة"], ["0.1 M ammonia: [OH⁻] = 1.34×10⁻³, pH 11.13.", "النشادر 0.1 مولر: [OH⁻] = 1.34×10⁻³ و pH = 11.13."]],
      [200, 212, ["Ionic product of water", "الحاصل الأيوني للماء"], ["If one ion rises, the other falls so their product stays 10⁻¹⁴.", "إذا زاد أحد الأيونين قل الآخر ليظل حاصل ضربهما 10⁻¹⁴."]]]
  };
  D.sec3chemu4l1 = {
    title: ["The Daniell cell", "خلية دانيال"],
    svg: function () {
      var s = arrowDef("s3a3", "#f59e0b");
      s += rect(30, 110, 120, 100, "#e2e8f0") + rect(250, 110, 120, 100, "#bfdbfe");
      s += '<rect x="80" y="80" width="14" height="110" fill="#94a3b8"/><rect x="306" y="80" width="14" height="110" fill="#c2410c"/>';
      s += '<path d="M120 130 v-40 h160 v40" stroke="var(--muted)" stroke-width="10" fill="none" opacity=".5"/>';
      s += line(87, 80, 87, 30) + line(87, 30, 313, 30) + line(313, 30, 313, 80) + circ(200, 30, 18, "var(--card)", "var(--muted)") + tx(200, 35, "1.1V", ink, 10);
      s += line(120, 20, 170, 20, "#f59e0b", 2, 'marker-end="url(#s3a3)"') + tx(140, 14, "e⁻", 'style="fill:#f59e0b"', 11);
      s += tx(87, 228, "Zn (−) " + t("anode", "أنود")) + tx(313, 228, "Cu (+) " + t("cathode", "كاثود")) + tx(200, 105, t("salt bridge", "قنطرة ملحية"), mut, 11);
      return g(s);
    },
    spots: [[87, 150, ["Zinc anode", "أنود الخارصين"], ["Zn → Zn²⁺ + 2e⁻ (oxidation); negative pole; the plate dissolves.", "Zn → Zn²⁺ + 2e⁻ (أكسدة)، القطب السالب، واللوح يذوب."]],
      [313, 150, ["Copper cathode", "كاثود النحاس"], ["Cu²⁺ + 2e⁻ → Cu (reduction); positive pole; copper deposits.", "Cu²⁺ + 2e⁻ → Cu (اختزال)، القطب الموجب، ويترسب النحاس."]],
      [200, 92, ["Salt bridge", "القنطرة الملحية"], ["Na₂SO₄ in a U-tube neutralizes excess ions; remove it and current stops.", "Na₂SO₄ في أنبوبة U يعادل الأيونات الزائدة، ونزعها يوقف التيار."]],
      [200, 30, ["Voltmeter", "الفولتميتر"], ["E = 0.34 − (−0.76) = 1.1 V.", "E = 0.34 − (−0.76) = 1.1 فولت."]],
      [145, 20, ["Electron flow", "سريان الإلكترونات"], ["Electrons flow in the wire from zinc to copper.", "تسري الإلكترونات في السلك من الخارصين إلى النحاس."]]]
  };
  D.sec3chemu4l2 = {
    title: ["Rusting at a scratch and its protection", "الصدأ عند الخدش والحماية منه"],
    svg: function () {
      var s = '<rect x="20" y="150" width="360" height="40" fill="#bae6fd" opacity=".6"/>' + rect(30, 120, 160, 30, "#94a3b8") + rect(210, 120, 160, 30, "#94a3b8");
      s += '<rect x="30" y="112" width="160" height="8" fill="#e5e7eb"/><rect x="210" y="112" width="160" height="8" fill="#a1a1aa"/>';
      s += '<rect x="100" y="112" width="18" height="16" fill="#b45309"/><rect x="280" y="112" width="18" height="8" fill="#bae6fd"/>';
      s += tx(110, 95, t("tin (scratched)", "قصدير (مخدوش)")) + tx(290, 95, t("zinc (scratched)", "خارصين (مخدوش)"));
      s += tx(110, 215, t("iron rusts faster", "الحديد يصدأ أسرع"), 'style="fill:#b45309"', 11) + tx(290, 215, t("zinc corrodes first", "الخارصين يتآكل أولًا"), 'style="fill:#16a34a"', 11);
      s += tx(200, 30, "2Fe + 3H₂O + 3/2 O₂ → 2Fe(OH)₃", ink, 11);
      return g(s);
    },
    spots: [[110, 120, ["Cathodic cover", "التغطية الكاثودية"], ["Tin is less active; at a scratch iron becomes the anode and rusts faster.", "القصدير أقل نشاطًا، وعند الخدش يصبح الحديد أنودًا ويصدأ أسرع."]],
      [290, 116, ["Anodic cover", "التغطية الأنودية"], ["Zinc is more active, so it is the anode and corrodes instead of iron (galvanizing).", "الخارصين أنشط فيكون أنودًا ويتآكل بدل الحديد (الجلفنة)."]],
      [200, 170, ["Electrolyte", "الإلكتروليت"], ["Water with dissolved ions; salt water speeds corrosion.", "ماء به أيونات ذائبة، والماء المالح يسرع التآكل."]],
      [200, 30, ["Overall rusting", "المعادلة الكلية للصدأ"], ["Fe → Fe²⁺ at the anode; O₂ + 2H₂O + 4e⁻ → 4OH⁻ at the cathode.", "Fe → Fe²⁺ عند الأنود، و O₂ + 2H₂O + 4e⁻ → 4OH⁻ عند الكاثود."]]]
  };
  D.sec3chemu4l3 = {
    title: ["Silver electroplating cell", "خلية الطلاء الكهربي بالفضة"],
    svg: function () {
      var s = rect(60, 100, 280, 120, "#e0f2fe") + '<rect x="100" y="70" width="20" height="120" fill="#e5e7eb" stroke="#94a3b8"/>' + '<ellipse cx="290" cy="150" rx="30" ry="40" fill="#c2410c"/><ellipse cx="290" cy="150" rx="34" ry="44" fill="none" stroke="#cbd5e1" stroke-width="4"/>';
      s += line(110, 70, 110, 30) + line(110, 30, 170, 30) + line(230, 30, 290, 30) + line(290, 30, 290, 106) + rect(170, 18, 60, 24, "var(--card)") + tx(200, 35, "+  −", ink, 13);
      s += tx(110, 232, t("Ag anode (+)", "أنود فضة (+)"), ink, 11) + tx(290, 232, t("jug = cathode (−)", "الإبريق = كاثود (−)"), ink, 11) + tx(200, 120, "AgNO₃", mut, 12);
      s += tx(200, 75, "m = I·t·E / 96500", mut, 11);
      return g(s);
    },
    spots: [[110, 130, ["Silver anode", "أنود الفضة"], ["Ag → Ag⁺ + e⁻: the rod dissolves, replacing ions in solution.", "Ag → Ag⁺ + e⁻: العمود يذوب ويعوض الأيونات في المحلول."]],
      [290, 150, ["Object as cathode", "الجسم كاثود"], ["Ag⁺ + e⁻ → Ag deposits a thin silver layer.", "Ag⁺ + e⁻ → Ag فتترسب طبقة فضة رقيقة."]],
      [200, 120, ["Electrolyte", "الإلكتروليت"], ["A solution containing the plating metal's ions.", "محلول يحتوي على أيونات فلز الطلاء."]],
      [200, 30, ["DC source", "مصدر التيار المستمر"], ["Q = I × t; 96500 C deposits 107.88 g of silver.", "Q = I × t، و 96500 كولوم ترسب 107.88 جم فضة."]],
      [200, 75, ["Faraday's law", "قانون فاراداي"], ["Mass ∝ charge and ∝ equivalent mass.", "الكتلة تتناسب مع الشحنة ومع الكتلة المكافئة."]]]
  };
  function sk(pts, col) { var s = ""; for (var i = 0; i < pts.length; i++) { if (pts[i][2] != null) s += line(pts[pts[i][2]][0], pts[pts[i][2]][1], pts[i][0], pts[i][1], "var(--muted)", 3); } pts.forEach(function (p) { s += circ(p[0], p[1], 9, col || "#334155"); }); return s; }
  D.sec3chemu5l1 = {
    title: ["The three isomers of pentane C₅H₁₂", "المتشكلات الثلاثة للبنتان C₅H₁₂"],
    svg: function () {
      var s = sk([[20, 80], [45, 60, 0], [70, 80, 1], [95, 60, 2], [120, 80, 3]]) + sk([[160, 80], [185, 60, 0], [210, 80, 1], [235, 60, 2], [185, 30, 1]]) + sk([[300, 60], [325, 60, 0], [350, 60, 1], [325, 35, 1], [325, 85, 1]]);
      s += tx(70, 120, "n-pentane") + tx(70, 136, "b.p. 36 °C", mut, 10) + tx(200, 120, "2-methylbutane") + tx(200, 136, "b.p. 28 °C", mut, 10) + tx(325, 120, "2,2-dimethylpropane") + tx(325, 136, "b.p. 9.5 °C", mut, 10);
      s += tx(200, 185, "CₙH₂ₙ₊₂  ·  C₅H₁₂ = 72 g/mol", ink, 12) + tx(200, 215, t("same formula, different structures", "نفس الصيغة، بناء مختلف"), mut, 11);
      return g(s);
    },
    spots: [[70, 70, ["Straight chain", "سلسلة مستقيمة"], ["n-pentane: the longest, most contact between molecules, highest boiling point.", "البنتان العادي: الأطول وأكبر تلامس بين الجزيئات وأعلى درجة غليان."]],
      [200, 60, ["One branch", "تفرع واحد"], ["Longest chain 4 C, methyl on C-2: 2-methylbutane.", "أطول سلسلة 4 ذرات والميثيل على الكربون 2: 2-ميثيل بيوتان."]],
      [325, 60, ["Two branches", "تفرعان"], ["Compact sphere-like molecule: lowest boiling point.", "جزيء مضغوط شبه كروي: أقل درجة غليان."]],
      [200, 182, ["Homologous series", "السلسلة المتجانسة"], ["Each alkane differs from the next by CH₂ (14 g/mol).", "كل ألكان يزيد عما قبله بـ CH₂ (14 جم/مول)."]]]
  };
  D.sec3chemu5l2 = {
    title: ["Addition across C=C and polymerization", "الإضافة على C=C والبلمرة"],
    svg: function () {
      var s = arrowDef("s3a4", "var(--muted)");
      s += circ(50, 60, 12, "#334155") + circ(100, 60, 12, "#334155") + line(62, 55, 88, 55, "var(--ink)", 3) + line(62, 65, 88, 65, "var(--ink)", 3);
      s += tx(140, 64, "+ Br₂", ink, 12) + line(170, 60, 200, 60, "var(--muted)", 2, 'marker-end="url(#s3a4)"');
      s += circ(230, 60, 12, "#334155") + circ(280, 60, 12, "#334155") + line(242, 60, 268, 60, "var(--ink)", 3) + circ(230, 30, 9, "#b45309") + circ(280, 30, 9, "#b45309") + line(230, 39, 230, 48) + line(280, 39, 280, 48);
      s += tx(330, 64, t("colourless", "عديم اللون"), mut, 11);
      for (var i = 0; i < 8; i++) s += circ(40 + i * 40, 150, 10, "#16a34a") + (i < 7 ? line(50 + i * 40, 150, 70 + i * 40, 150, "var(--ink)", 3) : "");
      s += tx(200, 185, "n CH₂=CH₂ → (–CH₂–CH₂–)ₙ", ink, 12) + tx(200, 215, "CH₃CH=CH₂ + HBr → CH₃CHBrCH₃", mut, 11);
      return g(s);
    },
    spots: [[75, 60, ["Double bond", "الرابطة الثنائية"], ["One σ and one weak π bond; the π bond breaks in addition.", "رابطة سيجما ورابطة باي ضعيفة، وتنكسر رابطة باي في الإضافة."]],
      [255, 35, ["1,2-dibromoethane", "1,2-ثنائي بروموإيثان"], ["Br₂ adds across the bond; red bromine colour disappears.", "يضاف البروم على الرابطة فيختفي اللون الأحمر."]],
      [200, 150, ["Polymer chain", "سلسلة البوليمر"], ["Thousands of ethene units join: polyethylene.", "آلاف من وحدات الإيثين ترتبط: البولي إيثيلين."]],
      [200, 212, ["Markovnikov", "ماركونيكوف"], ["H adds to the CH₂ end, Br to the middle carbon.", "يضاف H إلى الطرف CH₂ و Br إلى ذرة الكربون الوسطى."]]]
  };
  D.sec3chemu5l3 = {
    title: ["Primary, secondary and tertiary alcohols", "الكحولات الأولية والثانوية والثالثية"],
    svg: function () {
      var s = sk([[30, 90], [60, 90, 0]]) + sk([[150, 100], [180, 90, 0], [210, 100, 1]]) + sk([[300, 100], [330, 90, 0], [360, 100, 1], [330, 60, 1]]);
      s += circ(60, 60, 9, "#ef4444") + line(60, 69, 60, 81, "var(--muted)", 3) + circ(180, 60, 9, "#ef4444") + line(180, 69, 180, 81, "var(--muted)", 3) + circ(345, 125, 9, "#ef4444") + line(333, 99, 342, 116, "var(--muted)", 3);
      s += tx(55, 140, t("primary", "أولي")) + tx(180, 140, t("secondary", "ثانوي")) + tx(330, 150, t("tertiary", "ثالثي"));
      s += tx(55, 160, "→ CHO → COOH", mut, 10) + tx(180, 160, "→ ketone", mut, 10) + tx(330, 170, t("resists", "يقاوم"), mut, 10);
      s += tx(200, 215, t("red = OH on the carbinol carbon", "الأحمر = OH على ذرة الكربون الكربينولية"), mut, 11);
      return g(s);
    },
    spots: [[60, 80, ["Primary", "أولي"], ["Carbinol C bonded to 1 C (ethanol): oxidized to aldehyde then acid.", "ذرة الكربينول مرتبطة بذرة كربون واحدة (الإيثانول): تتأكسد إلى ألدهيد ثم حمض."]],
      [180, 80, ["Secondary", "ثانوي"], ["Bonded to 2 C (2-propanol): oxidized to a ketone (acetone).", "مرتبطة بذرتين (2-بروبانول): تتأكسد إلى كيتون (الأسيتون)."]],
      [330, 85, ["Tertiary", "ثالثي"], ["Bonded to 3 C: no H on the carbinol carbon, so it resists oxidation.", "مرتبطة بثلاث ذرات: لا هيدروجين على ذرة الكربينول فتقاوم الأكسدة."]],
      [200, 212, ["Hydroxyl group", "مجموعة الهيدروكسيل"], ["Forms hydrogen bonds: high boiling points, mixes with water.", "تكوّن روابط هيدروجينية: درجات غليان مرتفعة وامتزاج بالماء."]]]
  };
  D.sec3chemu5l4 = {
    title: ["Esterification and saponification", "الأسترة والتصبن"],
    svg: function () {
      var s = rect(20, 30, 110, 50, "#fef3c7") + rect(270, 30, 110, 50, "#dcfce7");
      s += tx(75, 50, "CH₃COOH", ink, 11) + tx(75, 68, "+ C₂H₅OH", ink, 11) + tx(325, 50, "CH₃COOC₂H₅", ink, 11) + tx(325, 68, "+ H₂O", ink, 11) + tx(200, 50, "⇌", ink, 28) + tx(200, 80, t("conc. H₂SO₄", "H₂SO₄ مركز"), mut, 10);
      s += rect(20, 140, 110, 50, "#fde68a") + rect(270, 140, 110, 50, "#e0f2fe") + tx(75, 162, t("fat + 3NaOH", "دهن + 3NaOH"), ink, 11) + tx(325, 162, t("soap + glycerol", "صابون + جلسرول"), ink, 11) + tx(200, 168, "→", ink, 28);
      s += tx(200, 220, t("Kc ≈ 4: 1:1 mixture → about 2/3 ester", "Kc ≈ 4: مخلوط 1:1 ← نحو ثلثي الإستر"), mut, 11);
      return g(s);
    },
    spots: [[75, 55, ["Acid + alcohol", "حمض + كحول"], ["The –COOH and –OH join, losing one water molecule.", "تتحد مجموعتا –COOH و –OH بفقد جزيء ماء."]],
      [200, 50, ["Reversible", "انعكاسي"], ["Ester and water hydrolyse back: an equilibrium.", "يتحلل الإستر والماء عكسيًا: اتزان."]],
      [325, 55, ["Ester", "الإستر"], ["Ethyl acetate: fruity smell; esters flavour fruits.", "أسيتات الإيثيل: رائحة فاكهة، والإسترات تعطي الفاكهة نكهتها."]],
      [200, 165, ["Saponification", "التصبن"], ["Alkaline hydrolysis is complete: soap and glycerol.", "التحلل القلوي تام: صابون وجلسرول."]],
      [200, 218, ["Shifting the yield", "زيادة الناتج"], ["Excess alcohol or removing water pushes the ester yield up (Le Chatelier).", "زيادة الكحول أو نزع الماء يرفع ناتج الإستر (لوشاتيلييه)."]]]
  };

  /* ----- Arabic-Indic digits in Arabic prose (outside eq spans, tags and formulas) ----- */
  var EAST = "٠١٢٣٤٥٦٧٨٩";
  function arD(s) {
    if (typeof s !== "string") return s;
    return s.split(/(<span class="eq"[^>]*>[\s\S]*?<\/span>|<[^>]+>)/).map(function (part, i) {
      if (i % 2) return part;
      return part.replace(/[0-9]+(?:[.,][0-9]+)*/g, function (m, off, all) {
        var pre = all.charAt(off - 1), post = all.charAt(off + m.length);
        if (/[A-Za-z₀-₉⁰-⁹⁺⁻×\[\(]/.test(pre) || /[A-Za-z₀-₉⁰-⁹⁺⁻×]/.test(post)) return m;
        return m.replace(/[0-9]/g, function (c) { return EAST[c]; }).replace(/\./g, "٫").replace(/,/g, "٬");
      });
    }).join("");
  }
  function pair(p) { if (Array.isArray(p) && p.length >= 2 && typeof p[1] === "string") p[1] = arD(p[1]); }
  function arr(a) { if (a) for (var i = 0; i < a.length; i++) a[i] = arD(a[i]); }
  E.SCIG.sec3chem.units.forEach(function (u) {
    u.title.ar = arD(u.title.ar);
    u.lessons.forEach(function (l) {
      l.title.ar = arD(l.title.ar);
      arr(l.idea.official.ar); arr(l.idea.story.ar);
      l.words.forEach(function (w) { w[1] = arD(w[1]); w[3] = arD(w[3]); });
      l.quiz.forEach(function (q) { pair(q.q); q.c.forEach(pair); pair(q.off); pair(q.sto); });
      if (O[l.id]) arr(O[l.id].ar);
      (X[l.id] || []).forEach(function (x) { pair(x.q); pair(x.off); pair(x.sto); (x.items || []).forEach(pair); (x.pairs || []).forEach(function (pp) { pair(pp[0]); pair(pp[1]); }); });
      if (D[l.id]) { pair(D[l.id].title); D[l.id].spots.forEach(function (sp) { pair(sp[2]); pair(sp[3]); }); }
      l.lab.parts.forEach(function (pt) { if (pt.prompt) pair(pt.prompt); (pt.items || []).forEach(function (it) { pair(it[0]); }); });
    });
  });
})();

/* ---------- Sec 3 Chemistry live simulations (part 1): d-orbitals, magnetism, iron furnace,
   test-tube bench (anions, cations, alcohols), titration. Original designs on EZ3.simKit. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var txt = K.txt;
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function box(host, html) { var c = E.el("div", "sim-ctl"); c.innerHTML = html; host.appendChild(c); return c; }
  function sl(b, i, fmt, on) {
    var inp = b.querySelectorAll('input[type="range"]')[i], lab = b.querySelectorAll(".slv")[i];
    function u() { var v = Number(inp.value); lab.textContent = fmt(v); on(v); }
    inp.addEventListener("input", u); u(); return inp;
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function r2(v) { return Math.round(v * 100) / 100; }
  var SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
  function sci(v, d) {
    if (v === 0) return "0";
    var e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
    if (e >= -2 && e <= 3) return String(+v.toPrecision(d || 3));
    return (+m.toFixed((d || 3) - 1)) + "×10" + String(e).split("").map(function (c) { return SUP[c]; }).join("");
  }
  E.s3kit = { hint: hint, box: box, sl: sl, clamp: clamp, r2: r2, sci: sci };

  /* =========================================================
     1. sec3chem_dfill - fill the 4s / 3d boxes, Sc..Zn and their ions
     ========================================================= */
  var ELS = ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"], MAXOX = [3, 4, 5, 6, 7, 6, 4, 4, 2, 2];
  function dconf(Z, q) {
    var k = Z - 21, s = 2, d = k + 1;
    if (Z === 24 || Z === 29) { s = 1; d = k + 2; }
    var take = Math.min(q, s); s -= take; q -= take; d = Math.max(0, d - q);
    return { s: s, d: d };
  }
  function unp(d) { return d <= 5 ? d : 10 - d; }
  function orbFill(d) { var o = [0, 0, 0, 0, 0]; for (var i = 0; i < d; i++) o[i % 5]++; return o; }
  L.sec3chem_dfill = function (host, cfg, done) {
    host.innerHTML = hint(t("Slide the atomic number to pick an element from Sc to Zn, then slide the charge to remove electrons. Watch which electrons leave first.",
      "حرّك العدد الذري لاختيار عنصر من Sc إلى Zn، ثم حرّك الشحنة لنزع الإلكترونات، ولاحظ أي الإلكترونات يخرج أولًا."));
    var S = K.make(host, 0.55, 360);
    var c = box(host, L._slider(t("Atomic number Z", "العدد الذري Z"), 21, 30, 1, 21, "") + L._slider(t("Charge (oxidation state)", "الشحنة (حالة التأكسد)"), 0, 7, 1, 0, ""));
    var tick = L._goals(host, [t("Find the anomalous configuration of chromium (Z = 24).", "اكتشف التوزيع الشاذ للكروم (Z = 24)."),
      t("Make Fe³⁺ and see the half-filled 3d⁵.", "كوّن Fe³⁺ وشاهد 3d⁵ نصف الممتلئ."),
      t("Reach the highest oxidation state in the series (Mn, +7).", "صل إلى أعلى حالة تأكسد في السلسلة (Mn، +7)."),
      t("Make Cu²⁺: an incomplete 3d⁹ makes copper a transition element.", "كوّن Cu²⁺: المستوى 3d⁹ غير المكتمل يجعل النحاس عنصرًا انتقاليًا.")], done);
    var Z = 21, q = 0, qIn;
    function check() {
      var mx = MAXOX[Z - 21]; if (q > mx) { q = mx; qIn.value = mx; c.querySelectorAll(".slv")[1].textContent = "+" + n(mx); E.toast(t("Maximum for " + ELS[Z - 21] + " is +" + mx, "أقصى حالة تأكسد لـ " + ELS[Z - 21] + " هي +" + mx)); }
      if (Z === 24 && q === 0) tick(0);
      if (Z === 26 && q === 3) tick(1);
      if (Z === 25 && q === 7) tick(2);
      if (Z === 29 && q === 2) tick(3);
    }
    sl(c, 0, function (v) { return n(v) + " (" + ELS[v - 21] + ")"; }, function (v) { Z = v; if (qIn) check(); });
    qIn = sl(c, 1, function (v) { return (v ? "+" : "") + n(v); }, function (v) { q = v; check(); });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, cf = dconf(Z, q), bw = Math.min(54, W / 9), x0 = W * 0.08, y = H * 0.36;
      ctx.clearRect(0, 0, W, H);
      var sym = ELS[Z - 21] + (q ? (q > 1 ? q : "") + "⁺" : "");
      txt(ctx, sym, x0 + bw, H * 0.13, { c: C.ink, s: 26 });
      var cfgS = "[Ar] " + (cf.s ? "4s" + "⁰¹²"[cf.s] + " " : "") + "3d" + (cf.d === 10 ? "¹⁰" : "⁰¹²³⁴⁵⁶⁷⁸⁹"[cf.d]);
      txt(ctx, cfgS, x0 + bw * 3.3, H * 0.13, { c: C.ink, s: 18, a: "left" });
      function boxAt(x, e) {
        ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.fillStyle = C.card; ctx.fillRect(x, y, bw, bw); ctx.strokeRect(x, y, bw, bw);
        if (e >= 1) txt(ctx, "↑", x + bw * 0.33, y + bw / 2, { c: "#2563eb", s: bw * 0.6 });
        if (e >= 2) txt(ctx, "↓", x + bw * 0.67, y + bw / 2, { c: "#ef4444", s: bw * 0.6 });
      }
      boxAt(x0, cf.s); txt(ctx, "4s", x0 + bw / 2, y + bw + 16, { c: C.muted, s: 13 });
      var o = orbFill(cf.d);
      for (var i = 0; i < 5; i++) boxAt(x0 + bw * 1.5 + i * bw, o[i]);
      txt(ctx, "3d", x0 + bw * 4, y + bw + 16, { c: C.muted, s: 13 });
      var u = unp(cf.d) + (cf.s === 1 ? 1 : 0), yy = y + bw + 44, fs = Math.max(12, Math.min(15, W / 40));
      txt(ctx, t("Unpaired electrons: ", "الإلكترونات المفردة: ") + n(u), x0, yy, { c: C.ink, s: fs, a: "left" });
      var note = cf.d === 5 ? t("3d⁵ half-filled: extra stability", "3d⁵ نصف ممتلئ: استقرار إضافي") : cf.d === 10 ? t("3d¹⁰ filled", "3d¹⁰ تام الامتلاء") : cf.d === 0 ? t("3d⁰: no d electrons", "3d⁰: لا إلكترونات d") : t("3d incomplete", "3d غير مكتمل");
      txt(ctx, note, x0, yy + 24, { c: cf.d === 5 ? "#16a34a" : C.muted, s: fs, a: "left" });
      var tr = Z === 30 ? t("Zn: d¹⁰ in atom and ion → NOT a transition element", "Zn: d¹⁰ في الذرة والأيون ← ليس عنصرًا انتقاليًا") : t("Transition element (d incomplete in atom or an ion)", "عنصر انتقالي (d غير مكتمل في الذرة أو أحد الأيونات)");
      txt(ctx, tr, x0, yy + 48, { c: Z === 30 ? "#ef4444" : C.ink, s: fs - 1, a: "left" });
      txt(ctx, t("Max state: +", "أقصى حالة: +") + n(MAXOX[Z - 21]), W - 10, H * 0.13, { c: C.muted, s: 13, a: "right" });
    });
  };

  /* =========================================================
     2. sec3chem_magnet - drag a magnet toward hanging ion samples
     ========================================================= */
  var IONS = [["Sc³⁺", 0], ["Ti³⁺", 1], ["Cr³⁺", 3], ["Mn²⁺", 5], ["Fe²⁺", 6], ["Fe³⁺", 5], ["Co²⁺", 7], ["Ni²⁺", 8], ["Cu²⁺", 9], ["Zn²⁺", 10]];
  L.sec3chem_magnet = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick an ion, then drag the red-blue magnet toward the hanging sample. Unpaired electrons pull it in; fully paired samples are pushed away.",
      "اختر أيونًا ثم اسحب المغناطيس نحو العينة المعلقة؛ الإلكترونات المفردة تجذبها، والعينات تامة الازدواج تتنافر.")) + '<div class="seg" id="s3mg"></div>';
    var S = K.make(host, 0.55, 360);
    var tick = L._goals(host, [t("Pull a paramagnetic sample toward the magnet.", "اجذب عينة بارامغناطيسية نحو المغناطيس."),
      t("Find a diamagnetic sample that is pushed away.", "اكتشف عينة ديامغناطيسية تتنافر."),
      t("Find the strongest pull (5 unpaired electrons).", "اكتشف أقوى جذب (5 إلكترونات مفردة).")], done);
    var ion = 5, mx = 0.9, drag = false, ang = 0;
    K.seg(host, "#s3mg", IONS.map(function (x, i) { return [String(i), x[0]]; }), "5", function (v) { ion = +v; });
    function geo() { return { px: S.W * 0.35, py: S.H * 0.08, len: S.H * 0.55, my: S.H * 0.63 }; }
    S.drag({
      down: function (p) { var g = geo(), x = mx * S.W; if (Math.abs(p.x - x) < 50 && Math.abs(p.y - g.my) < 40) { drag = true; return true; } return false; },
      move: function (p) { if (drag) mx = clamp(p.x / S.W, 0.45, 0.92); },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return Math.abs(p.x - mx * S.W) < 50 && Math.abs(p.y - g.my) < 40; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), d = IONS[ion][1], u = unp(d);
      ctx.clearRect(0, 0, W, H);
      var bx = g.px + Math.sin(ang) * g.len, by = g.py + Math.cos(ang) * g.len, dist = Math.max(20, mx * W - 40 - bx), prox = clamp(1 - dist / (W * 0.5), 0, 1);
      var target = u ? Math.min(0.4, 0.07 * u * prox) : -0.06 * prox;
      ang += (target - ang) * Math.min(1, dt * 4);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(g.px - 40, g.py); ctx.lineTo(g.px + 40, g.py); ctx.stroke();
      ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(g.px, g.py); ctx.lineTo(bx, by); ctx.stroke();
      K.dot(ctx, bx, by + 14, 16, u ? "#a16207" : "#94a3b8", "rgba(0,0,0,.3)");
      txt(ctx, IONS[ion][0], bx, by + 14, { c: "#fff", s: 11 });
      var m = mx * W;
      ctx.fillStyle = "#ef4444"; K.rr(ctx, m - 40, g.my - 22, 40, 44, 6); ctx.fill(); ctx.fillStyle = "#3b82f6"; K.rr(ctx, m, g.my - 22, 40, 44, 6); ctx.fill();
      txt(ctx, "N", m - 20, g.my, { c: "#fff", s: 16 }); txt(ctx, "S", m + 20, g.my, { c: "#fff", s: 16 });
      txt(ctx, t("drag ↔", "اسحب ↔"), m, g.my + 34, { c: C.muted, s: 11 });
      var x0 = 12, fs = Math.max(12, Math.min(14, W / 42));
      txt(ctx, "3d" + (d === 10 ? "¹⁰" : "⁰¹²³⁴⁵⁶⁷⁸⁹"[d]), x0, H * 0.82, { c: C.ink, s: fs + 2, a: "left" });
      for (var i = 0, o = orbFill(d); i < 5; i++) { var xx = x0 + 60 + i * 24; ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.strokeRect(xx, H * 0.82 - 10, 22, 20); if (o[i] >= 1) txt(ctx, "↑", xx + 7, H * 0.82, { c: "#2563eb", s: 13 }); if (o[i] >= 2) txt(ctx, "↓", xx + 15, H * 0.82, { c: "#ef4444", s: 13 }); }
      txt(ctx, t("Unpaired: ", "مفردة: ") + n(u) + " · " + (u ? t("paramagnetic", "بارامغناطيسي") : t("diamagnetic", "ديامغناطيسي")), x0, H * 0.93, { c: u ? "#a16207" : C.muted, s: fs, a: "left" });
      var pull = Math.round(Math.abs(ang) / 0.3 * 100);
      txt(ctx, (ang >= 0 ? t("Pull: ", "جذب: ") : t("Push: ", "تنافر: ")) + n(Math.min(100, pull)) + "%", W - 10, H * 0.93, { c: C.ink, s: fs, a: "right" });
      if (u && ang > 0.08) tick(0);
      if (!u && ang < -0.02) tick(1);
      if (u === 5 && ang > 0.22) tick(2);
    });
  };

  /* =========================================================
     3. sec3chem_furnace - roast, reduce, then build alloys on a lattice
     ========================================================= */
  var ORES = { hem: ["Fe₂O₃", ["Hematite", "الهيماتيت"], 112 / 160, "#991b1b"], lim: ["2Fe₂O₃·3H₂O", ["Limonite", "الليمونيت"], 224 / 374, "#ca8a04"], mag: ["Fe₃O₄", ["Magnetite", "الماجنتيت"], 168 / 232, "#1f2937"], sid: ["FeCO₃", ["Siderite", "السيدريت"], 56 / 116, "#a8a29e"] };
  L.sec3chem_furnace = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose an ore and set the furnace temperature. Roast it, then reduce it to iron. Finally tap the lattice to add carbon (gaps) or chromium (replace iron).",
      "اختر خامًا واضبط حرارة الفرن، حمّصه ثم اختزله إلى حديد، وأخيرًا اضغط على الشبكة لإضافة كربون (في الفراغات) أو كروم (بدل الحديد).")) + '<div class="seg" id="s3or"></div>';
    var S = K.make(host, 0.58, 380);
    var c = box(host, L._slider(t("Furnace temperature", "حرارة الفرن"), 25, 1600, 25, 25, "°C") +
      '<div class="btn-row"><button type="button" class="btn sm" id="s3ro">🔥 ' + t("Roast in air", "حمّص في الهواء") + '</button><button type="button" class="btn sm" id="s3bf">🏭 ' + t("Reduce: blast furnace (CO)", "اختزل: الفرن العالي (CO)") + '</button><button type="button" class="btn sm" id="s3mx">⛽ ' + t("Reduce: Midrex (CO + H₂)", "اختزل: مدركس (CO + H₂)") + "</button></div>" +
      '<div class="btn-row"><div class="seg" id="s3al"></div><button type="button" class="btn sm ghost" id="s3rs">↺ ' + t("New ore", "خام جديد") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Roast siderite to raise its iron percentage.", "حمّص السيدريت لترفع نسبة الحديد فيه."), t("Reduce an ore to iron (hot enough!).", "اختزل خامًا إلى حديد (بحرارة كافية!)."),
      t("Make steel: put 3 carbon atoms in the gaps.", "اصنع الصلب: ضع 3 ذرات كربون في الفراغات."), t("Make stainless steel: replace 3 iron atoms with chromium.", "اصنع الصلب الذي لا يصدأ: استبدل 3 ذرات حديد بالكروم.")], done);
    var ore = "sid", stage = "ore", temp = 25, mode = "C", carb = {}, cr = {}, msg = "";
    K.seg(host, "#s3or", Object.keys(ORES).map(function (k) { return [k, T(ORES[k][1])]; }), ore, function (v) { ore = v; reset(); });
    K.seg(c, "#s3al", [["C", "⚫ " + t("Add carbon", "أضف كربون")], ["Cr", "🟢 " + t("Add chromium", "أضف كروم")]], "C", function (v) { mode = v; });
    function reset() { stage = "ore"; carb = {}; cr = {}; msg = t("Raw ore loaded.", "تم تحميل الخام."); show(); }
    function feP() { return stage === "ore" ? ORES[ore][2] : stage === "roast" ? (ore === "mag" ? 168 / 232 : 0.7) : 1; }
    function show() { out.innerHTML = "<span>" + esc(t("Iron in the material: ", "نسبة الحديد في المادة: ")) + "<b>" + n(Math.round(feP() * 1000) / 10) + "%</b></span><span>" + esc(msg) + "</span>"; }
    sl(c, 0, function (v) { return n(v) + " °C"; }, function (v) { temp = v; });
    c.querySelector("#s3ro").onclick = function () {
      if (stage !== "ore") { E.toast(t("Already roasted or reduced.", "تم التحميص أو الاختزال بالفعل.")); return; }
      if (temp < 400) { E.toast(t("Too cold: roasting needs strong heating (≥ 400 °C).", "الحرارة غير كافية: التحميص يحتاج تسخينًا شديدًا (≥ 400 °س).")); return; }
      stage = "roast";
      msg = ore === "sid" ? "2FeCO₃ → 2FeO + 2CO₂, 4FeO + O₂ → 2Fe₂O₃" : ore === "lim" ? "2Fe₂O₃·3H₂O → 2Fe₂O₃ + 3H₂O" : t("Dried; S and P impurities oxidized.", "تم التجفيف وأكسدة شوائب الكبريت والفوسفور.");
      if (ore === "sid") tick(0); show();
    };
    function reduce(mid) {
      if (stage === "iron") { E.toast(t("It is already iron.", "أصبح حديدًا بالفعل.")); return; }
      if (temp < 800) { E.toast(t("Too cold to reduce the ore: raise above 800 °C.", "الحرارة غير كافية للاختزال: ارفعها فوق 800 °س.")); return; }
      stage = "iron"; msg = mid ? "2Fe₂O₃ + 3CO + 3H₂ → 4Fe + 3CO₂ + 3H₂O" : "Fe₂O₃ + 3CO → 2Fe + 3CO₂"; tick(1); show();
    }
    c.querySelector("#s3bf").onclick = function () { reduce(false); };
    c.querySelector("#s3mx").onclick = function () { reduce(true); };
    c.querySelector("#s3rs").onclick = reset;
    function lat() { var W = S.W, H = S.H, x0 = W * 0.55, w = W * 0.42, cols = 5, rows = 4, sp = Math.min(w / cols, H * 0.6 / rows); return { x0: x0 + (w - sp * cols) / 2 + sp / 2, y0: H * 0.22 + sp / 2, sp: sp, cols: cols, rows: rows }; }
    S.drag({
      down: function (p) {
        var g = lat(); if (stage !== "iron") { if (p.x > S.W * 0.55) E.toast(t("Make iron first, then build the alloy.", "اصنع الحديد أولًا ثم كوّن السبيكة.")); return false; }
        var i, j;
        if (mode === "C") { for (i = 0; i < g.cols - 1; i++) for (j = 0; j < g.rows - 1; j++) { var gx = g.x0 + (i + 0.5) * g.sp, gy = g.y0 + (j + 0.5) * g.sp; if (Math.hypot(p.x - gx, p.y - gy) < g.sp * 0.35) { carb[i + "," + j] = !carb[i + "," + j]; after(); return true; } } }
        else { for (i = 0; i < g.cols; i++) for (j = 0; j < g.rows; j++) { if (Math.hypot(p.x - (g.x0 + i * g.sp), p.y - (g.y0 + j * g.sp)) < g.sp * 0.4) { cr[i + "," + j] = !cr[i + "," + j]; after(); return true; } } }
        return false;
      }
    });
    function cnt(o) { return Object.keys(o).filter(function (k) { return o[k]; }).length; }
    function after() { if (cnt(carb) >= 3) tick(2); if (cnt(cr) >= 3) tick(3); msg = cnt(carb) ? t("Interstitial: C in the gaps stops layers sliding.", "بينية: الكربون في الفراغات يمنع انزلاق الطبقات.") : cnt(cr) ? t("Substitutional: Cr has the same radius as Fe.", "استبدالية: للكروم نفس نصف قطر الحديد.") : msg; show(); }
    reset();
    var fl = 0;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, fx = W * 0.06, fw = W * 0.36, fy = H * 0.12, fh = H * 0.78;
      ctx.clearRect(0, 0, W, H); fl += dt;
      ctx.fillStyle = "#57534e"; K.rr(ctx, fx, fy, fw, fh, 10); ctx.fill();
      ctx.fillStyle = C.card; K.rr(ctx, fx + 10, fy + 10, fw - 20, fh - 50, 8); ctx.fill();
      var heat = clamp((temp - 25) / 1575, 0, 1);
      for (var k = 0; k < 7; k++) { var x = fx + 18 + k * (fw - 36) / 6, hgt = (12 + 30 * heat) * (0.7 + 0.3 * Math.sin(fl * 9 + k)); if (heat > 0.02) { ctx.fillStyle = heat > 0.5 ? "#f97316" : "#facc15"; ctx.beginPath(); ctx.moveTo(x - 7, fy + fh - 40); ctx.quadraticCurveTo(x, fy + fh - 40 - hgt * 2, x + 7, fy + fh - 40); ctx.fill(); } }
      var col = stage === "iron" ? "#9ca3af" : stage === "roast" ? "#991b1b" : ORES[ore][3];
      for (var i2 = 0; i2 < 18; i2++) K.dot(ctx, fx + 26 + (i2 % 6) * (fw - 52) / 5, fy + fh * 0.45 + Math.floor(i2 / 6) * 18, 8, col, "rgba(0,0,0,.3)");
      txt(ctx, stage === "iron" ? t("Iron", "حديد") : stage === "roast" ? t("Roasted ore", "خام محمّص") : T(ORES[ore][1]) + " " + ORES[ore][0], fx + fw / 2, fy + 30, { c: C.ink, s: 14 });
      txt(ctx, n(temp) + " °C", fx + fw / 2, fy + fh - 18, { c: "#fff", s: 14 });
      var g = lat(), ii, jj;
      txt(ctx, stage === "iron" ? t("Iron lattice: tap to build an alloy", "شبكة الحديد: اضغط لتكوين سبيكة") : t("Lattice unlocks after reduction", "تُفتح الشبكة بعد الاختزال"), W * 0.76, H * 0.1, { c: C.muted, s: 12 });
      for (ii = 0; ii < g.cols; ii++) for (jj = 0; jj < g.rows; jj++) K.dot(ctx, g.x0 + ii * g.sp, g.y0 + jj * g.sp, g.sp * 0.42, cr[ii + "," + jj] ? "#22c55e" : stage === "iron" ? "#94a3b8" : C.line, "rgba(0,0,0,.25)");
      for (ii = 0; ii < g.cols - 1; ii++) for (jj = 0; jj < g.rows - 1; jj++) { var cx = g.x0 + (ii + 0.5) * g.sp, cy = g.y0 + (jj + 0.5) * g.sp; if (carb[ii + "," + jj]) K.dot(ctx, cx, cy, g.sp * 0.16, "#111827"); else if (stage === "iron" && mode === "C") { ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(cx, cy, g.sp * 0.12, 0, 7); ctx.stroke(); } }
      var hard = 1 + cnt(carb) * 0.6 + cnt(cr) * 0.25;
      txt(ctx, t("Hardness ×", "الصلادة ×") + n(r2(hard)) + (cnt(cr) >= 3 ? t(" · resists rust", " · يقاوم الصدأ") : ""), W * 0.76, H * 0.93, { c: C.ink, s: 13 });
    });
  };

  /* =========================================================
     4. Test-tube bench engine: drag reagent bottles onto the tube
     ========================================================= */
  function tubes(host, cfg, done) {
    host.innerHTML = hint(T(cfg.hint)) + '<div class="seg" id="s3ts"></div>';
    var S = K.make(host, 0.6, 380);
    var out = E.el("div", "meter"); host.appendChild(out);
    var idb = E.el("div", "btn-row"); host.appendChild(idb);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm ghost" id="s3tr">🚿 ' + t("Rinse the tube", "اغسل الأنبوبة") + "</button></div>");
    var tick = L._goals(host, cfg.goals.map(function (g) { return T(g[0]); }), done);
    var sub = cfg.subs[0][0], unk = null, counts = {}, last = null, res = null, drag = null, bub = [], nid = 0, rot = 0, prevU = null;
    function subOf(id) { return cfg.subs.filter(function (s) { return s[0] === id; })[0]; }
    function pick() {
      var groups = []; cfg.subs.forEach(function (s) { if (groups.indexOf(s[3]) < 0) groups.push(s[3]); });
      var gr = groups[rot++ % groups.length], pool = cfg.subs.filter(function (s) { return s[3] === gr && s[0] !== prevU; });
      if (!pool.length) pool = cfg.subs;
      prevU = E.pick(pool)[0]; return prevU;
    }
    K.seg(host, "#s3ts", cfg.subs.map(function (s) { return [s[0], T(s[1])]; }).concat([["?", "❓ " + t("Unknown", "مجهول")]]), sub, function (v) { sub = v; unk = v === "?" ? pick() : null; rinse(); ids(); });
    function cur() { return sub === "?" ? unk : sub; }
    function rinse() { counts = {}; last = null; res = null; bub = []; out.innerHTML = "<span>" + esc(t("Clean tube. Drag a reagent bottle onto it (or tap a bottle).", "أنبوبة نظيفة؛ اسحب زجاجة كاشف إليها (أو اضغط على الزجاجة).")) + "</span>"; }
    function ids() {
      if (sub !== "?") { idb.innerHTML = ""; return; }
      idb.innerHTML = "<b>" + esc(t("It is:", "إنه:")) + "</b> " + cfg.subs.map(function (s) { return '<button type="button" class="btn sm ghost" data-id="' + s[0] + '">' + esc(T(s[1])) + "</button>"; }).join("");
      idb.querySelectorAll("button").forEach(function (b) {
        b.onclick = function () {
          if (b.dataset.id === unk) {
            nid++; E.toast("✅ " + t("Correct: ", "صحيح: ") + T(subOf(unk)[1])); ev({ ident: unk });
            unk = pick(); rinse();
          } else { b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); E.toast(t("Not yet: test more.", "ليس بعد: اختبر أكثر.")); }
        };
      });
    }
    function ev(o) { o.sub = cur(); o.rg = last; o.cnt = last ? counts[last] : 0; o.unknown = sub === "?"; o.nid = nid; cfg.goals.forEach(function (g, i) { if (g[1](o)) tick(i); }); }
    function add(rid) {
      counts[rid] = (counts[rid] || 0) + 1; last = rid; res = cfg.res(cur(), rid, counts[rid]) || {};
      var rg = cfg.reag.filter(function (r) { return r[0] === rid; })[0];
      out.innerHTML = "<span><b>" + esc(T(rg[1])) + (counts[rid] > 1 ? " ×" + n(counts[rid]) : "") + ":</b> " + T(res.o || ["No visible change.", "لا يحدث تغير ملحوظ."]) + "</span>";
      E.speak(T(res.o || ["No visible change.", "لا يحدث تغير ملحوظ."]).replace(/<[^>]+>/g, ""));
      ev({});
    }
    c.querySelector("#s3tr").onclick = rinse;
    function geo() {
      var W = S.W, H = S.H, tw = Math.min(64, W * 0.11), tx0 = W * 0.2 - tw / 2, ty = H * 0.2, th = H * 0.62;
      var bw = Math.min(70, W * 0.13), cols = Math.max(2, Math.floor((W * 0.5) / (bw + 10))), list = cfg.reag.map(function (r, i) { return { r: r, x: W * 0.45 + (i % cols) * (bw + 10), y: H * 0.18 + Math.floor(i / cols) * (bw * 1.05 + 14), w: bw, h: bw * 1.05 }; });
      return { tw: tw, tx: tx0, ty: ty, th: th, b: list };
    }
    function hit(p) { var g = geo(); for (var i = 0; i < g.b.length; i++) { var b = g.b[i]; if (p.x > b.x && p.x < b.x + b.w && p.y > b.y && p.y < b.y + b.h) return b; } return null; }
    S.drag({
      down: function (p) { var b = hit(p); if (!b) return false; drag = { b: b, x: p.x, y: p.y, moved: false }; return true; },
      move: function (p) { if (!drag) return; if (Math.hypot(p.x - drag.b.x, p.y - drag.b.y) > 6) drag.moved = true; drag.x = p.x; drag.y = p.y; },
      up: function (p) {
        if (!drag) return; var g = geo(), over = p.x > g.tx - 40 && p.x < g.tx + g.tw + 40 && p.y < g.ty + g.th * 0.6;
        if (over || !drag.moved) add(drag.b.r[0]); drag = null;
      },
      hover: function (p) { return !!hit(p); }
    });
    rinse();
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), s = subOf(cur()), r = res || {};
      ctx.clearRect(0, 0, W, H);
      var level = 0.35 + Math.min(0.4, Object.keys(counts).reduce(function (a, k) { return a + counts[k]; }, 0) * 0.06), ly = g.ty + g.th * (1 - level);
      ctx.fillStyle = r.liq || s[2]; ctx.fillRect(g.tx + 3, ly, g.tw - 6, g.ty + g.th - ly);
      ctx.beginPath(); ctx.arc(g.tx + g.tw / 2, g.ty + g.th, g.tw / 2 - 3, 0, Math.PI); ctx.fill();
      if (r.ppt) { ctx.fillStyle = r.ppt; ctx.beginPath(); ctx.arc(g.tx + g.tw / 2, g.ty + g.th, g.tw / 2 - 3, 0, Math.PI); ctx.fill(); ctx.fillRect(g.tx + 3, g.ty + g.th - 18, g.tw - 6, 18); for (var q = 0; q < 6; q++) K.dot(ctx, g.tx + 8 + Math.random() * (g.tw - 16), ly + 8 + Math.random() * (g.ty + g.th - ly - 30), 1.6, r.ppt); }
      if (r.gas) { if (Math.random() < dt * 14) bub.push({ x: g.tx + 8 + Math.random() * (g.tw - 16), y: g.ty + g.th }); }
      bub = bub.filter(function (b) { b.y -= dt * 70; if (b.y > ly) { ctx.strokeStyle = "rgba(100,116,139,.8)"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(b.x, b.y, 3, 0, 7); ctx.stroke(); return true; } return false; });
      if (r.fumes) { ctx.fillStyle = r.fumes; ctx.globalAlpha = 0.55; for (var f = 0; f < 5; f++) { ctx.beginPath(); ctx.arc(g.tx + g.tw / 2 + Math.sin(performance.now() / 400 + f) * 12, g.ty - 10 - f * 12, 10 + f * 2, 0, 7); ctx.fill(); } ctx.globalAlpha = 1; }
      if (r.flame) { var fx = g.tx + g.tw + 26, fy = g.ty + g.th * 0.3; ctx.fillStyle = r.flame; ctx.beginPath(); ctx.moveTo(fx - 10, fy + 40); ctx.quadraticCurveTo(fx, fy - 30 + Math.sin(performance.now() / 120) * 4, fx + 10, fy + 40); ctx.fill(); }
      ctx.strokeStyle = C.muted; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(g.tx, g.ty); ctx.lineTo(g.tx, g.ty + g.th); ctx.arc(g.tx + g.tw / 2, g.ty + g.th, g.tw / 2, Math.PI, 0, true); ctx.lineTo(g.tx + g.tw, g.ty); ctx.stroke();
      txt(ctx, sub === "?" ? "❓" : T(s[1]), g.tx + g.tw / 2, g.ty - (r.fumes ? 74 : 16), { c: C.ink, s: 13 });
      if (r.gas) txt(ctx, r.gas, g.tx + g.tw / 2, g.ty + g.th + g.tw / 2 + 14, { c: C.muted, s: 12 });
      g.b.forEach(function (b) {
        var bx = b.x, by = b.y; if (drag && drag.b.r[0] === b.r[0]) { bx = drag.x - b.w / 2; by = drag.y - b.h / 2; }
        ctx.fillStyle = C.card; K.rr(ctx, bx, by, b.w, b.h, 8); ctx.fill(); ctx.strokeStyle = C.line; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.fillStyle = b.r[2]; K.rr(ctx, bx + b.w * 0.25, by + b.h * 0.42, b.w * 0.5, b.h * 0.42, 5); ctx.fill();
        ctx.fillStyle = "#64748b"; ctx.fillRect(bx + b.w * 0.38, by + b.h * 0.3, b.w * 0.24, b.h * 0.12);
        txt(ctx, b.r[3], bx + b.w / 2, by + b.h * 0.16, { c: C.ink, s: Math.max(9, Math.min(12, b.w / 6)) });
      });
    });
  }

  /* ----- 4a. anions ----- */
  var HCL = { CO3: [["Effervescence: CO₂ turns lime water milky.", "فوران: يتصاعد CO₂ يعكر ماء الجير."], "CO₂"], HCO3: [["Effervescence: CO₂ turns lime water milky.", "فوران: يتصاعد CO₂ يعكر ماء الجير."], "CO₂"],
    SO3: [["SO₂ with an irritating smell; it turns acidified K₂Cr₂O₇ paper green.", "يتصاعد SO₂ ذو رائحة نفاذة يخضّر ورقة ثاني كرومات البوتاسيوم المحمضة."], "SO₂"], S: [["H₂S, smell of rotten eggs; it turns lead acetate paper black.", "يتصاعد H₂S ذو رائحة البيض الفاسد يسوّد ورقة أسيتات الرصاص."], "H₂S"],
    S2O3: [["SO₂ evolves and a yellow suspension of sulphur appears.", "يتصاعد SO₂ ويظهر عالق أصفر من الكبريت."], "SO₂"], NO2: [["Colourless NO turns reddish brown (NO₂) at the mouth of the tube.", "يتصاعد NO عديم اللون يتحول إلى NO₂ بني محمر عند فوهة الأنبوبة."], "NO"] };
  L.sec3chem_anions = function (host, cfg, done) {
    tubes(host, {
      hint: ["Pick a salt (or the Unknown). Drag reagent bottles onto the test tube and read the observation. For the Unknown, choose its name when you are sure.", "اختر ملحًا (أو المجهول)، واسحب زجاجات الكواشف إلى أنبوبة الاختبار واقرأ المشاهدة، وفي حالة المجهول اختر اسمه عندما تتأكد."],
      subs: [["CO3", ["Carbonate", "كربونات"], "#f8fafc", "h"], ["HCO3", ["Bicarbonate", "بيكربونات"], "#f8fafc", "h"], ["SO3", ["Sulphite", "كبريتيت"], "#f8fafc", "h"], ["S", ["Sulphide", "كبريتيد"], "#f8fafc", "h"], ["S2O3", ["Thiosulphate", "ثيوكبريتات"], "#f8fafc", "h"], ["NO2", ["Nitrite", "نيتريت"], "#f8fafc", "h"],
        ["Cl", ["Chloride", "كلوريد"], "#f8fafc", "s"], ["Br", ["Bromide", "بروميد"], "#f8fafc", "s"], ["I", ["Iodide", "يوديد"], "#f8fafc", "s"], ["NO3", ["Nitrate", "نترات"], "#f8fafc", "s"], ["PO4", ["Phosphate", "فوسفات"], "#f8fafc", "b"], ["SO4", ["Sulphate", "كبريتات"], "#f8fafc", "b"]],
      reag: [["hcl", ["Dilute HCl", "HCl مخفف"], "#e0f2fe", "dil HCl"], ["h2so4", ["Conc. H₂SO₄ (warm)", "H₂SO₄ مركز (دافئ)"], "#fef9c3", "H₂SO₄"], ["bacl2", ["BaCl₂ solution", "محلول BaCl₂"], "#f1f5f9", "BaCl₂"],
        ["agno3", ["AgNO₃ solution (+ NH₃)", "محلول AgNO₃ (+ النشادر)"], "#f1f5f9", "AgNO₃"], ["mgso4", ["MgSO₄ (2nd drop = heat)", "MgSO₄ (القطرة الثانية = تسخين)"], "#f1f5f9", "MgSO₄"], ["ring", ["Fresh FeSO₄ + conc. H₂SO₄", "FeSO₄ حديث + H₂SO₄ مركز"], "#dcfce7", "FeSO₄"]],
      res: function (s, r, k) {
        if (r === "hcl") return HCL[s] ? { o: HCL[s][0], gas: HCL[s][1], fumes: s === "NO2" ? "#b45309" : null, ppt: s === "S2O3" ? "#fde047" : null } : null;
        if (r === "h2so4") {
          if (HCL[s]) return { o: HCL[s][0], gas: HCL[s][1] };
          if (s === "Cl") return { o: ["Colourless HCl gas: white fumes with a rod wet with ammonia.", "يتصاعد غاز HCl عديم اللون يكوّن سحبًا بيضاء مع ساق مبللة بالنشادر."], gas: "HCl", fumes: "#e5e7eb" };
          if (s === "Br") return { o: ["HBr plus orange-red bromine fumes; starch paper turns yellow.", "يتصاعد HBr وأبخرة بروم برتقالية حمراء تصفّر ورقة النشا."], gas: "HBr", fumes: "#ea580c" };
          if (s === "I") return { o: ["HI plus violet iodine vapour; starch paper turns blue.", "يتصاعد HI وأبخرة يود بنفسجية تزرق ورقة النشا."], gas: "HI", fumes: "#7e22ce" };
          if (s === "NO3") return { o: ["Brown NO₂ fumes, thicker when copper turnings are added.", "أبخرة NO₂ بنية تزداد كثافتها بإضافة خراطة النحاس."], gas: "NO₂", fumes: "#92400e" };
          return null;
        }
        if (r === "bacl2") {
          if (s === "SO4") return { o: ["White ppt of BaSO₄, insoluble in dilute HCl.", "راسب أبيض من BaSO₄ لا يذوب في HCl المخفف."], ppt: "#ffffff" };
          if (s === "PO4") return { o: ["White ppt of Ba₃(PO₄)₂, soluble in dilute HCl.", "راسب أبيض من Ba₃(PO₄)₂ يذوب في HCl المخفف."], ppt: "#ffffff" };
          if (s === "CO3" || s === "SO3") return { o: ["White ppt that dissolves in dilute HCl with gas (not a BaCl₂-group anion).", "راسب أبيض يذوب في HCl المخفف مع تصاعد غاز (ليس من مجموعة BaCl₂)."], ppt: "#f8fafc" };
          return null;
        }
        if (r === "agno3") {
          if (s === "Cl") return { o: ["White ppt of AgCl, turns violet in sunlight, soluble in ammonia.", "راسب أبيض من AgCl يتحول للبنفسجي في الضوء ويذوب في النشادر."], ppt: "#ffffff" };
          if (s === "Br") return { o: ["Pale yellow ppt of AgBr, dissolves slowly in conc. ammonia.", "راسب أبيض مصفر من AgBr يذوب ببطء في النشادر المركز."], ppt: "#fef9c3" };
          if (s === "I") return { o: ["Yellow ppt of AgI, insoluble in ammonia.", "راسب أصفر من AgI لا يذوب في النشادر."], ppt: "#fde047" };
          if (s === "PO4") return { o: ["Yellow ppt of Ag₃PO₄, soluble in ammonia and nitric acid.", "راسب أصفر من Ag₃PO₄ يذوب في النشادر وحمض النيتريك."], ppt: "#facc15" };
          if (s === "SO3") return { o: ["White ppt of Ag₂SO₃ that turns black on heating.", "راسب أبيض من Ag₂SO₃ يسودّ بالتسخين."], ppt: "#e5e7eb" };
          if (s === "S") return { o: ["Black ppt of silver sulphide Ag₂S.", "راسب أسود من كبريتيد الفضة Ag₂S."], ppt: "#111827" };
          return null;
        }
        if (r === "mgso4") {
          if (s === "CO3") return { o: ["White ppt of MgCO₃ at once, in the cold.", "راسب أبيض من MgCO₃ فورًا على البارد."], ppt: "#ffffff" };
          if (s === "HCO3") return k >= 2 ? { o: ["After heating: white ppt (Mg(HCO₃)₂ → MgCO₃ + CO₂ + H₂O).", "بعد التسخين: راسب أبيض (Mg(HCO₃)₂ → MgCO₃ + CO₂ + H₂O)."], ppt: "#ffffff", gas: "CO₂" } : { o: ["No ppt in the cold (Mg(HCO₃)₂ is soluble). Add again to heat.", "لا راسب على البارد (Mg(HCO₃)₂ يذوب)، أضف مرة أخرى للتسخين."] };
          return null;
        }
        if (r === "ring") {
          if (s === "NO3") return { o: ["A brown ring (FeSO₄·NO) forms where the acid meets the solution.", "تتكون حلقة بنية (FeSO₄·NO) عند السطح الفاصل بين الحمض والمحلول."], ppt: null, liq: "#a16207" };
          if (s === "NO2") return { o: ["A brown colour (nitrite reacts too); test with dilute HCl first.", "لون بني (النيتريت يتفاعل أيضًا)؛ اختبر بـ HCl المخفف أولًا."], liq: "#a16207" };
          return null;
        }
        return null;
      },
      goals: [[["Identify an unknown from the dilute HCl group.", "تعرّف على مجهول من مجموعة HCl المخفف."], function (e) { return e.ident && /^(CO3|HCO3|SO3|S|S2O3|NO2)$/.test(e.ident); }],
        [["Identify an unknown from the conc. H₂SO₄ group.", "تعرّف على مجهول من مجموعة H₂SO₄ المركز."], function (e) { return e.ident && /^(Cl|Br|I|NO3)$/.test(e.ident); }],
        [["Identify an unknown from the BaCl₂ group.", "تعرّف على مجهول من مجموعة BaCl₂."], function (e) { return e.ident && /^(PO4|SO4)$/.test(e.ident); }]]
    }, done);
  };

  /* ----- 4b. cations ----- */
  L.sec3chem_cations = function (host, cfg, done) {
    tubes(host, {
      hint: ["Pick a cation solution (or the Unknown). Drag reagents onto the tube; drag NaOH several times to add an excess.", "اختر محلول كاتيون (أو المجهول)، واسحب الكواشف إلى الأنبوبة، واسحب NaOH عدة مرات لإضافة زيادة منه."],
      subs: [["Cu", ["Cu²⁺", "Cu²⁺"], "#93c5fd", "a"], ["Al", ["Al³⁺", "Al³⁺"], "#f8fafc", "a"], ["Fe2", ["Fe²⁺", "Fe²⁺"], "#d9f99d", "a"], ["Fe3", ["Fe³⁺", "Fe³⁺"], "#fde68a", "a"], ["Ca", ["Ca²⁺", "Ca²⁺"], "#f8fafc", "a"]],
      reag: [["h2s", ["HCl + H₂S (group 2)", "HCl + H₂S (المجموعة 2)"], "#fef9c3", "H₂S"], ["nh4oh", ["NH₄OH (group 3)", "NH₄OH (المجموعة 3)"], "#e0f2fe", "NH₄OH"], ["naoh", ["NaOH", "NaOH"], "#f1f5f9", "NaOH"],
        ["co3", ["(NH₄)₂CO₃ (group 5)", "(NH₄)₂CO₃ (المجموعة 5)"], "#f1f5f9", "(NH₄)₂CO₃"], ["h2so4", ["Dilute H₂SO₄", "H₂SO₄ مخفف"], "#fef9c3", "dil H₂SO₄"], ["flame", ["Flame test (Pt wire)", "اختبار اللهب (سلك بلاتين)"], "#fca5a5", "🔥"]],
      res: function (s, r, k) {
        if (r === "h2s") return s === "Cu" ? { o: ["Black ppt of CuS (soluble in hot HNO₃): group 2.", "راسب أسود من CuS (يذوب في HNO₃ الساخن): المجموعة 2."], ppt: "#111827" } : { o: ["No ppt in acid medium.", "لا يتكون راسب في الوسط الحمضي."] };
        if (r === "nh4oh" || r === "naoh") {
          if (s === "Al") return r === "naoh" && k >= 3 ? { o: ["The ppt dissolves in excess NaOH: Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O.", "يذوب الراسب في زيادة NaOH: Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O."] } : { o: ["White gelatinous ppt of Al(OH)₃." + (r === "naoh" ? " Keep adding NaOH..." : ""), "راسب أبيض جيلاتيني من Al(OH)₃." + (r === "naoh" ? " استمر في إضافة NaOH..." : "")], ppt: "#f8fafc" };
          if (s === "Fe2") return { o: ["White ppt of Fe(OH)₂ that turns greenish in air.", "راسب أبيض من Fe(OH)₂ يتحول إلى مخضر في الهواء."], ppt: "#bef264" };
          if (s === "Fe3") return { o: ["Reddish-brown gelatinous ppt of Fe(OH)₃.", "راسب بني محمر جيلاتيني من Fe(OH)₃."], ppt: "#9a3412" };
          if (s === "Cu") return { o: ["Blue ppt of Cu(OH)₂ (copper is detected in group 2).", "راسب أزرق من Cu(OH)₂ (يُكشف النحاس في المجموعة 2)."], ppt: "#3b82f6" };
          return { o: ["No ppt.", "لا يتكون راسب."] };
        }
        if (r === "co3") return s === "Ca" ? { o: ["White ppt of CaCO₃, soluble in dilute HCl: group 5.", "راسب أبيض من CaCO₃ يذوب في HCl المخفف: المجموعة 5."], ppt: "#ffffff" } : { o: ["No characteristic result for this group reagent.", "لا نتيجة مميزة لكاشف هذه المجموعة."] };
        if (r === "h2so4") return s === "Ca" ? { o: ["White ppt of CaSO₄ (confirms Ca²⁺).", "راسب أبيض من CaSO₄ (يؤكد Ca²⁺)."], ppt: "#ffffff" } : null;
        if (r === "flame") return s === "Ca" ? { o: ["Brick-red flame: calcium.", "لهب أحمر طوبي: كالسيوم."], flame: "#dc2626" } : s === "Cu" ? { o: ["Blue-green flame.", "لهب أزرق مخضر."], flame: "#10b981" } : { o: ["No characteristic flame colour.", "لا لون مميز للهب."], flame: "#fb923c" };
        return null;
      },
      goals: [[["Dissolve Al(OH)₃ in excess NaOH.", "أذب Al(OH)₃ في زيادة من NaOH."], function (e) { return e.sub === "Al" && e.rg === "naoh" && e.cnt >= 3; }],
        [["Colour the flame brick red.", "لوّن اللهب بالأحمر الطوبي."], function (e) { return e.sub === "Ca" && e.rg === "flame"; }],
        [["Identify two unknown cations.", "تعرّف على كاتيونين مجهولين."], function (e) { return e.nid >= 2; }]]
    }, done);
  };

  /* ----- 4c. alcohols and phenol ----- */
  L.sec3chem_alcohol = function (host, cfg, done) {
    tubes(host, {
      hint: ["Pick an alcohol or phenol (or the Unknown). Drag reagents onto the tube; drag the dichromate twice to keep oxidizing.", "اختر كحولًا أو الفينول (أو المجهول)، واسحب الكواشف إلى الأنبوبة، واسحب ثاني الكرومات مرتين لمواصلة الأكسدة."],
      subs: [["p", ["Ethanol (1°)", "الإيثانول (أولي)"], "#f8fafc", "a"], ["s", ["2-Propanol (2°)", "2-بروبانول (ثانوي)"], "#f8fafc", "a"], ["t", ["2-Methyl-2-propanol (3°)", "2-ميثيل-2-بروبانول (ثالثي)"], "#f8fafc", "a"], ["ph", ["Phenol", "الفينول"], "#fdf2f8", "a"]],
      reag: [["cr", ["Acidified K₂Cr₂O₇", "K₂Cr₂O₇ محمض"], "#f97316", "K₂Cr₂O₇"], ["na", ["Sodium metal", "فلز الصوديوم"], "#e5e7eb", "Na"], ["naoh", ["NaOH solution", "محلول NaOH"], "#f1f5f9", "NaOH"], ["fe", ["FeCl₃ solution", "محلول FeCl₃"], "#fbbf24", "FeCl₃"], ["br", ["Bromine water", "ماء البروم"], "#ea580c", "Br₂"]],
      res: function (s, r, k) {
        if (r === "cr") {
          if (s === "p") return k >= 2 ? { o: ["More oxidant: the aldehyde is oxidized to ethanoic acid (vinegar smell). Orange → green.", "مزيد من المؤكسد: يتأكسد الألدهيد إلى حمض الإيثانويك (رائحة الخل)، برتقالي ← أخضر."], liq: "#16a34a" } : { o: ["Orange → green: ethanal (an aldehyde) forms. Add again...", "برتقالي ← أخضر: يتكون الإيثانال (ألدهيد)، أضف مرة أخرى..."], liq: "#65a30d" };
          if (s === "s") return { o: ["Orange → green: acetone (a ketone) forms, no further oxidation.", "برتقالي ← أخضر: يتكون الأسيتون (كيتون) ولا يتأكسد أكثر."], liq: "#65a30d" };
          if (s === "t") return { o: ["Stays orange: a tertiary alcohol resists oxidation (no H on the carbinol carbon).", "يظل برتقاليًا: الكحول الثالثي يقاوم الأكسدة (لا هيدروجين على ذرة الكربينول)."], liq: "#f97316" };
          return { o: ["Phenol darkens; no simple aldehyde or acid forms.", "يغمق الفينول ولا يتكون ألدهيد أو حمض بسيط."], liq: "#78350f" };
        }
        if (r === "na") return { o: ["Bubbles of H₂: 2R–OH + 2Na → 2R–ONa + H₂.", "فقاعات H₂: 2R–OH + 2Na → 2R–ONa + H₂."], gas: "H₂" };
        if (r === "naoh") return s === "ph" ? { o: ["Phenol dissolves: C₆H₅OH + NaOH → C₆H₅ONa + H₂O (phenol is acidic).", "يذوب الفينول: C₆H₅OH + NaOH → C₆H₅ONa + H₂O (الفينول حمضي)."] } : { o: ["No reaction: alcohols are not acidic enough to react with NaOH.", "لا تفاعل: الكحولات ليست حمضية بالقدر الكافي للتفاعل مع NaOH."] };
        if (r === "fe") return s === "ph" ? { o: ["Violet colour: phenol detected.", "لون بنفسجي: تم الكشف عن الفينول."], liq: "#7e22ce" } : { o: ["Stays yellow: no phenol.", "يظل أصفر: لا يوجد فينول."], liq: "#fde68a" };
        if (r === "br") return s === "ph" ? { o: ["Bromine colour disappears and a white ppt (2,4,6-tribromophenol) forms.", "يختفي لون البروم ويتكون راسب أبيض (2,4,6-ثلاثي برومو فينول)."], ppt: "#ffffff" } : { o: ["Stays orange: no reaction.", "يظل برتقاليًا: لا تفاعل."], liq: "#fdba74" };
        return null;
      },
      goals: [[["Oxidize a primary alcohol all the way to an acid.", "أكسد كحولًا أوليًا حتى الحمض."], function (e) { return e.sub === "p" && e.rg === "cr" && e.cnt >= 2; }],
        [["Show that a tertiary alcohol resists oxidation.", "أثبت أن الكحول الثالثي يقاوم الأكسدة."], function (e) { return e.sub === "t" && e.rg === "cr"; }],
        [["Detect phenol with iron(III) chloride.", "اكشف عن الفينول بكلوريد الحديد III."], function (e) { return e.sub === "ph" && e.rg === "fe"; }],
        [["Identify an unknown.", "تعرّف على مجهول."], function (e) { return e.nid >= 1; }]]
    }, done);
  };

  /* =========================================================
     5. sec3chem_titrate - burette with a draggable tap and live pH curve
     ========================================================= */
  L.sec3chem_titrate = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the burette tap to the right to open it (further = faster), back to the left to close it. Add single drops near the colour change. Stop exactly at the end point.",
      "اسحب صنبور السحاحة يمينًا لفتحه (أبعد = أسرع) ثم يسارًا لغلقه، وأضف قطرات مفردة قرب تغير اللون، وتوقف عند نقطة النهاية تمامًا.")) +
      '<div class="seg" id="s3tsm"></div><div class="seg" id="s3tin" style="margin-top:6px"></div>';
    var S = K.make(host, 0.62, 400);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm" id="s3dr">💧 ' + t("One drop (0.05 mL)", "قطرة (0.05 مل)") + '</button><button type="button" class="btn sm ghost" id="s3tr2">↺ ' + t("Refill and restart", "أعد الملء والبدء") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Titrate 25 mL NaOH with 0.1 M HCl and close the tap at the end point.", "عاير 25 مل NaOH بـ HCl 0.1 مولر وأغلق الصنبور عند نقطة النهاية."),
      t("Titrate 20 mL Ca(OH)₂ with 0.05 M HCl and stop at the end point.", "عاير 20 مل Ca(OH)₂ بـ HCl 0.05 مولر وتوقف عند نقطة النهاية."),
      t("Reach an end point using methyl orange.", "صل إلى نقطة النهاية باستخدام الميثيل البرتقالي.")], done);
    var SM = { naoh: { vb: 25, mb: 0.084, nb: 1, ma: 0.1, nm: "NaOH" }, caoh: { vb: 20, mb: 0.03125, nb: 2, ma: 0.05, nm: "Ca(OH)₂" } };
    var smp = "naoh", ind = "php", V = 0, tap = 0, drag = false, pts = [], ended = false;
    K.seg(host, "#s3tsm", [["naoh", "25 mL NaOH + 0.1 M HCl"], ["caoh", "20 mL Ca(OH)₂ + 0.05 M HCl"]], smp, function (v) { smp = v; restart(); });
    K.seg(host, "#s3tin", [["php", t("Phenolphthalein", "الفينولفثالين")], ["mo", t("Methyl orange", "الميثيل البرتقالي")]], ind, function (v) { ind = v; restart(); });
    function veq() { var s = SM[smp]; return s.mb * s.vb * s.nb / s.ma; }
    function pH(v) { var s = SM[smp], oh = s.mb * s.vb * s.nb / 1000, h = s.ma * v / 1000, tot = (s.vb + v) / 1000; if (Math.abs(oh - h) < 1e-9) return 7; return oh > h ? 14 + Math.log10((oh - h) / tot) : -Math.log10((h - oh) / tot); }
    function colour(p) { if (ind === "php") return p > 8.6 ? "rgba(236,72,153," + clamp((p - 8.2) / 2, 0.15, 0.85) + ")" : "rgba(226,232,240,.5)"; return p < 3.6 ? "#ef4444" : p < 4.6 ? "#f97316" : "#facc15"; }
    function restart() { V = 0; tap = 0; pts = [[0, pH(0)]]; ended = false; show(); }
    function show() {
      var s = SM[smp], p = pH(V);
      out.innerHTML = "<span>" + esc(t("Acid added: ", "الحمض المضاف: ")) + "<b>" + n(r2(V)) + " mL</b></span><span>pH = <b>" + n(r2(p)) + "</b></span>" +
        (ended ? "<span>" + esc(t("End point! ", "نقطة النهاية! ")) + '<span class="eq" dir="ltr">Mb = ' + s.ma + " × " + r2(V) + " × " + 1 + " / (" + s.nb + " × " + s.vb + ") = " + (+(s.ma * V / (s.nb * s.vb)).toPrecision(3)) + " M</span></span>" : "");
    }
    function addV(dv) {
      if (V >= 50) { tap = 0; E.toast(t("The burette is empty: restart.", "السحاحة فارغة: أعد البدء.")); return; }
      V = Math.min(50, V + dv); var last = pts[pts.length - 1]; if (V - last[0] > 0.05) pts.push([V, pH(V)]);
    }
    function changed() { var p = pH(V); return ind === "php" ? p <= 8.6 : p <= 4.6; }
    function judge() {
      var d = V - veq();
      if (changed() && d <= 0.3 && !ended) { ended = true; tap = 0; if (smp === "naoh") tick(0); else tick(1); if (ind === "mo") tick(2); E.speak(t("End point reached.", "تم الوصول إلى نقطة النهاية.")); }
      else if (d > 0.3 && !ended) { E.toast(t("Overshot the end point! Refill and try again.", "تجاوزت نقطة النهاية! أعد الملء وحاول مرة أخرى.")); ended = true; }
      show();
    }
    c.querySelector("#s3dr").onclick = function () { if (ended) { E.toast(t("Restart to titrate again.", "أعد البدء لمعايرة جديدة.")); return; } addV(0.05); if (changed() || V - veq() > 0.3) judge(); else show(); };
    c.querySelector("#s3tr2").onclick = restart;
    function geo() { return { bx: S.W * 0.16, by: S.H * 0.04, bh: S.H * 0.5, tapY: S.H * 0.58 }; }
    S.drag({
      down: function (p) { var g = geo(); if (Math.abs(p.y - g.tapY) < 22 && Math.abs(p.x - g.bx - 20 * tap) < 40) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = geo(); tap = clamp((p.x - g.bx) / 50, 0, 1); },
      up: function () { drag = false; if (tap < 0.1) { tap = 0; if (V > 0 && !ended && changed()) judge(); else show(); } },
      hover: function (p) { var g = geo(); return Math.abs(p.y - g.tapY) < 22 && Math.abs(p.x - g.bx) < 70; }
    });
    restart();
    var drops = [];
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo();
      if (tap > 0 && !ended) { addV(tap * 2 * dt); if (Math.random() < tap * dt * 20) drops.push(g.tapY + 10); if (changed() || V - veq() > 0.3) { if (V - veq() > 0.3) tap = 0; judge(); } else show(); }
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = C.card; ctx.fillRect(g.bx - 9, g.by, 18, g.bh); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(g.bx - 9, g.by, 18, g.bh);
      var lvl = g.by + g.bh * (0.04 + 0.94 * V / 50); ctx.fillStyle = "#bfdbfe"; ctx.fillRect(g.bx - 7, lvl, 14, g.by + g.bh - lvl);
      for (var m = 0; m <= 50; m += 10) { var yy = g.by + g.bh * (0.04 + 0.94 * m / 50); ctx.fillStyle = C.muted; ctx.fillRect(g.bx + 9, yy, 6, 1.5); txt(ctx, String(m), g.bx + 26, yy, { c: C.muted, s: 9 }); }
      ctx.fillStyle = C.muted; ctx.fillRect(g.bx - 2, g.by + g.bh, 4, g.tapY - g.by - g.bh + 14);
      ctx.fillStyle = tap > 0 ? "#16a34a" : "#64748b"; K.rr(ctx, g.bx - 22 + tap * 20, g.tapY - 7, 44, 14, 6); ctx.fill();
      txt(ctx, tap > 0 ? t("open", "مفتوح") : t("closed", "مغلق"), g.bx + 50, g.tapY, { c: C.muted, s: 11, a: "left" });
      var fy = H * 0.7, fw = Math.min(110, W * 0.2);
      drops = drops.filter(function (d, i) { drops[i] = d + dt * 160; K.dot(ctx, g.bx, drops[i], 2.5, "#60a5fa"); return drops[i] < fy + 10; });
      ctx.fillStyle = colour(pH(V)); ctx.beginPath(); ctx.moveTo(g.bx - 12, fy); ctx.lineTo(g.bx + 12, fy); ctx.lineTo(g.bx + fw / 2, H * 0.97); ctx.lineTo(g.bx - fw / 2, H * 0.97); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.stroke();
      txt(ctx, SM[smp].nm, g.bx, H * 0.9, { c: C.ink, s: 11 });
      var gx = W * 0.42, gw = W * 0.54, gy = H * 0.08, gh = H * 0.78, vmax = Math.max(30, veq() * 1.6);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh); ctx.stroke();
      [0, 7, 14].forEach(function (p) { var yy = gy + gh * (1 - p / 14); txt(ctx, String(p), gx - 10, yy, { c: C.muted, s: 10 }); });
      ctx.setLineDash([4, 4]); ctx.strokeStyle = C.line; ctx.beginPath(); ctx.moveTo(gx, gy + gh / 2); ctx.lineTo(gx + gw, gy + gh / 2); ctx.stroke(); ctx.setLineDash([]);
      ctx.strokeStyle = "#7c3aed"; ctx.lineWidth = 2.5; ctx.beginPath();
      pts.concat([[V, pH(V)]]).forEach(function (q, i) { var x = gx + gw * Math.min(1, q[0] / vmax), y = gy + gh * (1 - clamp(q[1], 0, 14) / 14); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke();
      txt(ctx, "pH", gx + 14, gy + 6, { c: C.muted, s: 11 }); txt(ctx, t("mL of acid", "مل حمض"), gx + gw - 30, gy + gh + 14, { c: C.muted, s: 11 });
    });
  };

  var NM = {
    sec3chem_dfill: ["3d orbital filler", "محاكاة ملء أوربيتالات 3d"], sec3chem_magnet: ["Magnetic balance", "الميزان المغناطيسي"], sec3chem_furnace: ["Iron furnace and alloys", "فرن الحديد والسبائك"],
    sec3chem_anions: ["Anion detective bench", "منضدة الكشف عن الأنيونات"], sec3chem_cations: ["Cation detective bench", "منضدة الكشف عن الكاتيونات"], sec3chem_alcohol: ["Alcohols and phenol bench", "منضدة الكحولات والفينول"],
    sec3chem_titrate: ["Titration with pH curve", "المعايرة ومنحنى pH"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();

/* ---------- Sec 3 Chemistry live simulations (part 2): equilibrium, Le Chatelier, Ostwald,
   galvanic cell, corrosion, Faraday, alkanes, alkene additions, esterification. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit, P = E.s3kit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var txt = K.txt, hint = P.hint, box = P.box, sl = P.sl, clamp = P.clamp, r2 = P.r2, sci = P.sci;
  function graph(ctx, C, x, y, w, h, series, ymax, tmax) {
    ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + h); ctx.lineTo(x + w, y + h); ctx.stroke();
    series.forEach(function (s) {
      ctx.strokeStyle = s.c; ctx.lineWidth = 2.5; ctx.beginPath();
      s.d.forEach(function (p, i) { var px = x + w * clamp(p[0] / tmax, 0, 1), py = y + h * (1 - clamp(p[1] / ymax, 0, 1)); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); });
      ctx.stroke();
    });
  }
  function bar(ctx, C, x, y, w, frac, col, label) {
    ctx.fillStyle = C.line; K.rr(ctx, x, y, w, 9, 4); ctx.fill(); ctx.fillStyle = col; K.rr(ctx, x, y, Math.max(4, w * clamp(frac, 0, 1)), 9, 4); ctx.fill();
    txt(ctx, label, x, y - 8, { c: C.muted, s: 11, a: "left" });
  }

  /* =========================================================
     6. sec3chem_kc - H2 + I2 <=> 2HI, rates and Kc live
     ========================================================= */
  L.sec3chem_kc = function (host, cfg, done) {
    host.innerHTML = hint(t("Watch the forward and backward rates. When they become equal the concentrations stop changing. Add more H₂, or start again from pure HI, and compare Kc.",
      "راقب معدلي التفاعل الطردي والعكسي؛ عندما يتساويان تثبت التركيزات. أضف مزيدًا من H₂ أو ابدأ من HI النقي وقارن Kc."));
    var S = K.make(host, 0.6, 380);
    var c = box(host, L._slider(t("Rate constant k₁ (speeds both ways)", "ثابت المعدل k₁ (يسرّع الاتجاهين)"), 0.2, 3, 0.1, 1, "") +
      '<div class="btn-row"><button type="button" class="btn sm" id="s3k1">➕ H₂ (+0.5 M)</button><button type="button" class="btn sm" id="s3k2">↺ ' + t("Start: 1 M H₂ + 1 M I₂", "ابدأ: 1 مولر H₂ + 1 مولر I₂") + '</button><button type="button" class="btn sm" id="s3k3">↺ ' + t("Start: 2 M HI only", "ابدأ: 2 مولر HI فقط") + "</button></div>");
    var tick = L._goals(host, [t("Let 1 M H₂ + 1 M I₂ reach equilibrium (rates equal).", "اترك 1 مولر H₂ + 1 مولر I₂ حتى الاتزان (تساوي المعدلين)."),
      t("Add H₂ and let a new equilibrium form: same Kc?", "أضف H₂ واترك اتزانًا جديدًا يتكون: هل Kc نفسها؟"),
      t("Start from pure HI and reach the same Kc from the other side.", "ابدأ من HI النقي وصل إلى نفس Kc من الجهة الأخرى.")], done);
    var h = 1, i2 = 1, hi = 0, k1 = 1, tm = 0, ev = "R", since = 0, hist = [];
    sl(c, 0, function (v) { return n(v); }, function (v) { k1 = v; });
    function start(a, b, cc, e) { h = a; i2 = b; hi = cc; ev = e; since = 0; tm = 0; hist = []; }
    c.querySelector("#s3k1").onclick = function () { h += 0.5; ev = "A"; since = 0; };
    c.querySelector("#s3k2").onclick = function () { start(1, 1, 0, "R"); };
    c.querySelector("#s3k3").onclick = function () { start(0, 0, 2, "B"); };
    var pos = []; for (var q = 0; q < 60; q++) pos.push([Math.random(), Math.random(), Math.random() * 6.28]);
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, sub = 10, kf = 2 * k1, kb = kf / 50;
      for (var s = 0; s < sub; s++) { var rf = kf * h * i2, rb = kb * hi * hi, d = (rf - rb) * dt / sub; h -= d; i2 -= d; hi += 2 * d; }
      h = Math.max(0, h); i2 = Math.max(0, i2); hi = Math.max(0, hi);
      tm += dt; since += dt; if (!hist.length || tm - hist[hist.length - 1][0] > 0.1) { hist.push([tm, h, i2, hi]); if (hist.length > 300) hist.shift(); }
      var RF = kf * h * i2, RB = kb * hi * hi, Q = h * i2 > 1e-6 ? hi * hi / (h * i2) : Infinity, eqd = Math.abs(RF - RB) < 0.03 * Math.max(RF, RB) && since > 1;
      if (eqd && ev === "R") tick(0); if (eqd && ev === "A") tick(1); if (eqd && ev === "B") tick(2);
      ctx.clearRect(0, 0, W, H);
      var bx = 10, bw = W * 0.32, by = H * 0.08, bh = H * 0.62;
      ctx.fillStyle = C.card; ctx.fillRect(bx, by, bw, bh); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(bx, by, bw, bh);
      var nH = Math.round(h * 10), nI = Math.round(i2 * 10), nHI = Math.round(hi * 10), k = 0;
      function mol(c1, c2) { var p = pos[k++ % 60]; p[2] += dt * 2; var x = bx + 12 + (p[0] * (bw - 24) + Math.sin(p[2]) * 6), y = by + 12 + (p[1] * (bh - 24) + Math.cos(p[2]) * 6); K.dot(ctx, x - 4, y, 5, c1, "rgba(0,0,0,.3)"); K.dot(ctx, x + 4, y, c2 === "#7c3aed" ? 7 : 5, c2, "rgba(0,0,0,.3)"); }
      var j; for (j = 0; j < nH; j++) mol("#e2e8f0", "#e2e8f0"); for (j = 0; j < nI; j++) mol("#7c3aed", "#7c3aed"); for (j = 0; j < nHI; j++) mol("#e2e8f0", "#7c3aed");
      txt(ctx, "H₂ + I₂ ⇌ 2HI", bx + bw / 2, by + bh + 16, { c: C.ink, s: 13 });
      var gx = W * 0.42, gw = W * 0.54, gy = H * 0.06, gh = H * 0.5, t0 = hist.length ? hist[0][0] : 0;
      graph(ctx, C, gx, gy, gw, gh, [{ c: "#64748b", d: hist.map(function (p) { return [p[0] - t0, p[1]]; }) }, { c: "#7c3aed", d: hist.map(function (p) { return [p[0] - t0, p[2]]; }) }, { c: "#f97316", d: hist.map(function (p) { return [p[0] - t0, p[3]]; }) }], 2.6, 30);
      txt(ctx, "[H₂]", gx + 8, gy + 4, { c: "#64748b", s: 11, a: "left" }); txt(ctx, "[I₂]", gx + 50, gy + 4, { c: "#7c3aed", s: 11, a: "left" }); txt(ctx, "[HI]", gx + 92, gy + 4, { c: "#f97316", s: 11, a: "left" });
      var mr = Math.max(RF, RB, 0.05);
      bar(ctx, C, gx, gy + gh + 28, gw * 0.6, RF / mr, "#22c55e", t("forward rate r₁ = ", "المعدل الطردي r₁ = ") + n(r2(RF)));
      bar(ctx, C, gx, gy + gh + 58, gw * 0.6, RB / mr, "#ef4444", t("backward rate r₂ = ", "المعدل العكسي r₂ = ") + n(r2(RB)));
      txt(ctx, "Q = [HI]²/[H₂][I₂] = " + (isFinite(Q) ? r2(Q) : "∞"), gx, H * 0.95, { c: eqd ? "#16a34a" : C.ink, s: 13, a: "left" });
      txt(ctx, eqd ? t("Equilibrium: Kc ≈ 50", "اتزان: Kc ≈ 50") : t("not yet at equilibrium", "لم يصل للاتزان بعد"), W - 10, H * 0.95, { c: eqd ? "#16a34a" : C.muted, s: 12, a: "right" });
    });
  };

  /* =========================================================
     7. sec3chem_lechat - 2NO2 <=> N2O4 + heat with a piston and a thermostat
     ========================================================= */
  L.sec3chem_lechat = function (host, cfg, done) {
    host.innerHTML = hint(t("Change the temperature, drag the piston down to raise the pressure, and switch the catalyst on. Watch the brown colour of NO₂ and the system fighting back.",
      "غيّر درجة الحرارة، واسحب المكبس لأسفل لزيادة الضغط، وشغّل العامل الحفاز، وراقب لون NO₂ البني والنظام وهو يقاوم التغيير."));
    var S = K.make(host, 0.6, 380);
    var c = box(host, L._slider(t("Temperature", "درجة الحرارة"), 250, 400, 1, 298, "K") + '<div class="btn-row"><button type="button" class="btn sm tg" id="s3cat">⚗️ ' + t("Catalyst", "عامل حفاز") + "</button></div>");
    var tick = L._goals(host, [t("Cool it until less than 20% of the nitrogen is brown NO₂.", "برّده حتى يصبح أقل من 20% من النيتروجين في صورة NO₂ البني."),
      t("Heat it until more than 80% is NO₂.", "سخّنه حتى يصبح أكثر من 80% في صورة NO₂."),
      t("Halve the volume and watch the shift to fewer moles.", "اجعل الحجم النصف وراقب الإزاحة نحو مولات أقل."),
      t("With the catalyst on, change a condition: faster, same final colour.", "مع تشغيل العامل الحفاز غيّر أحد الظروف: أسرع ونفس اللون النهائي.")], done);
    var Tk = 298, V = 1, x = 0.3, cat = false, drag = false, changed = false;
    function Kc(Tv) { return 2 * Math.exp(57000 / 8.314 * (1 / Tv - 1 / 298)); }
    function xeq(Tv, Vv) { var k = Kc(Tv), b = 4 * k + Vv; return (b - Math.sqrt(b * b - 16 * k * k)) / (8 * k); }
    x = xeq(298, 1);
    sl(c, 0, function (v) { return n(v) + " K (" + n(v - 273) + " °C)"; }, function (v) { Tk = v; changed = true; });
    c.querySelector("#s3cat").onclick = function () { cat = !cat; this.classList.toggle("on", cat); };
    function geo() { var W = S.W, H = S.H; return { bx: W * 0.06, bw: W * 0.4, by: H * 0.1, bh: H * 0.82 }; }
    S.drag({
      down: function (p) { var g = geo(), py = g.by + (1 - V) * g.bh; if (p.x > g.bx && p.x < g.bx + g.bw && Math.abs(p.y - py) < 26) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = geo(); V = clamp(1 - (p.y - g.by) / g.bh, 0.35, 1); changed = true; },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(), py = g.by + (1 - V) * g.bh; return p.x > g.bx && p.x < g.bx + g.bw && Math.abs(p.y - py) < 26; }
    });
    var pts = []; for (var q = 0; q < 40; q++) pts.push([Math.random(), Math.random(), Math.random() * 6]);
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), xe = xeq(Tk, V);
      x += (xe - x) * Math.min(1, dt * (cat ? 4 : 0.9));
      var near = Math.abs(x - xe) < 0.004, fN = 1 - 2 * x, conc = fN / V;
      if (fN < 0.2 && near) tick(0); if (fN > 0.8 && near) tick(1); if (V <= 0.5 && near) tick(2); if (cat && changed && near) tick(3);
      if (near) changed = false;
      ctx.clearRect(0, 0, W, H);
      var top = g.by + (1 - V) * g.bh;
      ctx.fillStyle = C.card; ctx.fillRect(g.bx, g.by, g.bw, g.bh);
      ctx.fillStyle = "rgba(146,64,14," + clamp(conc * 0.55, 0, 0.85) + ")"; ctx.fillRect(g.bx, top, g.bw, g.by + g.bh - top);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.strokeRect(g.bx, g.by, g.bw, g.bh);
      var nNO2 = Math.round(30 * fN), nN2O4 = Math.round(30 * x), k = 0;
      for (var j = 0; j < nNO2 + nN2O4; j++) {
        var p = pts[k++ % 40]; p[2] += dt * (1 + Tk / 300); var px = g.bx + 10 + (p[0] * (g.bw - 20) + Math.sin(p[2]) * 5), py = top + 10 + (p[1] * (g.by + g.bh - top - 20) + Math.cos(p[2]) * 5);
        if (j < nNO2) K.dot(ctx, px, py, 5, "#b45309", "rgba(0,0,0,.3)"); else { K.dot(ctx, px - 4, py, 4.5, "#fde68a", "rgba(0,0,0,.3)"); K.dot(ctx, px + 4, py, 4.5, "#fde68a", "rgba(0,0,0,.3)"); }
      }
      ctx.fillStyle = "#94a3b8"; ctx.fillRect(g.bx + 2, top - 8, g.bw - 4, 10); ctx.fillStyle = "#64748b"; ctx.fillRect(g.bx + g.bw / 2 - 5, Math.max(0, top - 50), 10, Math.min(42, top));
      var x0 = W * 0.52, fs = Math.max(12, Math.min(14, W / 40));
      txt(ctx, "2NO₂ ⇌ N₂O₄ + " + t("heat", "حرارة"), x0, H * 0.1, { c: C.ink, s: fs + 2, a: "left" });
      txt(ctx, t("brown", "بني"), x0 + 10, H * 0.17, { c: "#b45309", s: 11, a: "left" }); txt(ctx, t("colourless", "عديم اللون"), x0 + 110, H * 0.17, { c: C.muted, s: 11, a: "left" });
      bar(ctx, C, x0, H * 0.32, W * 0.42, fN, "#b45309", t("Nitrogen as NO₂: ", "النيتروجين في صورة NO₂: ") + n(Math.round(fN * 100)) + "%");
      bar(ctx, C, x0, H * 0.46, W * 0.42, V, "#3b82f6", t("Volume: ", "الحجم: ") + n(Math.round(V * 100)) + "%");
      txt(ctx, "Kc = " + sci(Kc(Tk), 3), x0, H * 0.6, { c: C.ink, s: fs, a: "left" });
      txt(ctx, near ? t("At equilibrium", "في حالة اتزان") : (xe > x ? t("Shifting forward →", "إزاحة طردية ←") : t("← Shifting backward", "→ إزاحة عكسية")), x0, H * 0.7, { c: near ? "#16a34a" : "#f97316", s: fs, a: "left" });
      txt(ctx, cat ? t("Catalyst: faster approach, same position", "العامل الحفاز: وصول أسرع ونفس الموضع") : t("Drag the grey piston", "اسحب المكبس الرمادي"), x0, H * 0.8, { c: C.muted, s: fs - 1, a: "left" });
    });
  };

  /* =========================================================
     8. sec3chem_ostwald - strong vs weak electrolytes, dilution, pH
     ========================================================= */
  var ACIDS = { hcl: ["HCl", 0, "a"], ac: ["CH₃COOH", 1.8e-5, "a"], hcn: ["HCN", 7.2e-10, "a"], nh3: ["NH₃", 1.8e-5, "b"] };
  L.sec3chem_ostwald = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a solute and slide the concentration (dilute = left). Watch the lamp, the fraction of ionized molecules and the pH.",
      "اختر مذابًا وحرّك التركيز (التخفيف = يسار)، وراقب المصباح ونسبة الجزيئات المتأينة وقيمة pH.")) + '<div class="seg" id="s3oa"></div>';
    var S = K.make(host, 0.58, 380);
    var c = box(host, L._slider(t("Concentration (log scale)", "التركيز (مقياس لوغاريتمي)"), -4, 0, 0.1, -1, ""));
    var tick = L._goals(host, [t("Find the pH of 0.1 M acetic acid.", "أوجد pH لحمض الأسيتيك 0.1 مولر."), t("Dilute acetic acid until α is at least 10%.", "خفف حمض الأسيتيك حتى تصبح α على الأقل 10%."),
      t("Show that diluting HCl does not change α (100%).", "أثبت أن تخفيف HCl لا يغير α (100%)."), t("Find the pH of 0.1 M ammonia.", "أوجد pH للنشادر 0.1 مولر.")], done);
    var sol = "ac", lg = -1, hclStart = null, touched = false;
    K.seg(host, "#s3oa", Object.keys(ACIDS).map(function (k) { return [k, ACIDS[k][0]]; }), sol, function (v) { sol = v; touched = true; hclStart = sol === "hcl" ? lg : null; upd(); });
    function alpha(Ka, C0) { if (!Ka) return 1; return (-Ka + Math.sqrt(Ka * Ka + 4 * Ka * C0)) / (2 * C0); }
    var st = {};
    function upd() {
      var A = ACIDS[sol], C0 = Math.pow(10, lg), a = alpha(A[1], C0), ion = a * C0, pH = A[2] === "a" ? -Math.log10(ion) : 14 + Math.log10(ion);
      st = { C0: C0, a: a, ion: ion, pH: pH };
      if (!touched) return;
      if (sol === "ac" && Math.abs(lg + 1) < 0.05) tick(0);
      if (sol === "ac" && a >= 0.1) tick(1);
      if (sol === "hcl" && hclStart !== null && Math.abs(lg - hclStart) >= 1) tick(2);
      if (sol === "nh3" && Math.abs(lg + 1) < 0.05) tick(3);
    }
    sl(c, 0, function (v) { return sci(Math.pow(10, v), 2) + " M"; }, function (v) { if (Math.abs(v - lg) > 1e-9) touched = true; lg = v; if (sol === "hcl" && hclStart === null) hclStart = v; upd(); });
    var pos = []; for (var q = 0; q < 30; q++) pos.push([Math.random(), Math.random(), Math.random() * 6]);
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, A = ACIDS[sol];
      ctx.clearRect(0, 0, W, H);
      var bx = 10, bw = W * 0.42, by = H * 0.12, bh = H * 0.7;
      ctx.fillStyle = "rgba(147,197,253,.25)"; ctx.fillRect(bx, by, bw, bh); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(bx, by, bw, bh);
      var nIon = A[1] ? Math.round(30 * Math.min(1, st.a)) : 30;
      if (A[1] && st.a > 0 && nIon === 0) nIon = st.a > 0.01 ? 1 : 0;
      for (var j = 0; j < 30; j++) {
        var p = pos[j]; p[2] += dt; var x = bx + 14 + p[0] * (bw - 28) + Math.sin(p[2]) * 4, y = by + 14 + p[1] * (bh - 28) + Math.cos(p[2]) * 4;
        if (j < nIon) { K.dot(ctx, x - 7, y, 5, A[2] === "a" ? "#ef4444" : "#3b82f6"); txt(ctx, "+", x - 7, y, { c: "#fff", s: 9 }); K.dot(ctx, x + 7, y, 5, A[2] === "a" ? "#3b82f6" : "#ef4444"); txt(ctx, "−", x + 7, y, { c: "#fff", s: 9 }); }
        else { K.dot(ctx, x - 3, y, 5, "#94a3b8"); K.dot(ctx, x + 3, y, 5, "#64748b"); }
      }
      txt(ctx, t("molecules shown: 30 (red/blue = ions)", "الجزيئات المعروضة: 30 (أحمر/أزرق = أيونات)"), bx + bw / 2, by + bh + 14, { c: C.muted, s: 10 });
      var lx = W * 0.62, ly = H * 0.2, glow = clamp((Math.log10(st.ion) + 5) / 5, 0.05, 1);
      ctx.fillStyle = "rgba(250,204,21," + glow + ")"; ctx.beginPath(); ctx.arc(lx, ly, 26 + 14 * glow, 0, 7); ctx.fill(); K.dot(ctx, lx, ly, 18, "#fde68a", C.muted);
      txt(ctx, t("conductivity lamp", "مصباح التوصيل"), lx, ly + 48, { c: C.muted, s: 11 });
      var x0 = W * 0.5, fs = Math.max(12, Math.min(14, W / 40));
      txt(ctx, A[0] + (A[1] ? "  K = " + sci(A[1], 2) : t("  strong: 100% ionized", "  قوي: متأين 100%")), x0, H * 0.5, { c: C.ink, s: fs, a: "left" });
      txt(ctx, "α = " + (st.a >= 0.9995 ? "100%" : sci(st.a * 100, 3) + "%"), x0, H * 0.6, { c: C.ink, s: fs, a: "left" });
      txt(ctx, (A[2] === "a" ? "[H₃O⁺] = " : "[OH⁻] = ") + sci(st.ion, 3) + " M", x0, H * 0.7, { c: C.ink, s: fs, a: "left" });
      txt(ctx, "pH = " + r2(st.pH) + "   pOH = " + r2(14 - st.pH), x0, H * 0.8, { c: st.pH < 7 ? "#dc2626" : "#2563eb", s: fs + 1, a: "left" });
      txt(ctx, A[1] ? (A[2] === "a" ? "Ka = α²C" : "Kb = α²C") : t("Ostwald's law does not apply", "قانون أوستفالد لا ينطبق"), x0, H * 0.9, { c: C.muted, s: fs - 1, a: "left" });
    });
    upd();
  };

  /* =========================================================
     9. sec3chem_daniell - build galvanic cells, salt bridge on/off
     ========================================================= */
  var MET = { Mg: [-2.37, "#d4d4d8", "#f5f5f4"], Zn: [-0.76, "#a1a1aa", "#f8fafc"], Fe: [-0.44, "#6b7280", "#d9f99d"], Pb: [-0.13, "#475569", "#f1f5f9"], Cu: [0.34, "#c2410c", "#93c5fd"], Ag: [0.80, "#e5e7eb", "#f8fafc"] };
  L.sec3chem_daniell = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose the metal in each half-cell. Tap or drag the salt bridge to lift it out or put it back. The voltmeter reads E = E°red(right) − E°red(left).",
      "اختر الفلز في كل نصف خلية، واضغط على القنطرة الملحية أو اسحبها لرفعها أو إعادتها، والفولتميتر يقرأ E = جهد اختزال اليمين − جهد اختزال اليسار.")) +
      '<div class="btn-row"><b>' + t("Left", "اليسار") + '</b><div class="seg" id="s3dl"></div></div><div class="btn-row" style="margin-top:6px"><b>' + t("Right", "اليمين") + '</b><div class="seg" id="s3dr2"></div></div>';
    var S = K.make(host, 0.58, 380);
    var tick = L._goals(host, [t("Build the Daniell cell (Zn left, Cu right): 1.10 V.", "كوّن خلية دانيال (Zn يسار و Cu يمين): 1.10 فولت."), t("Build a cell of more than 2.5 V.", "كوّن خلية جهدها أكبر من 2.5 فولت."),
      t("Lift out the salt bridge and stop the current.", "ارفع القنطرة الملحية وأوقف التيار."), t("Build a cell in which copper is the anode.", "كوّن خلية يكون فيها النحاس أنودًا.")], done);
    var A = "Fe", B = "Cu", bridge = true, by = 0, drag = false, el = [], grow = 0;
    K.seg(host, "#s3dl", Object.keys(MET).map(function (k) { return [k, k]; }), A, function (v) { A = v; grow = 0; });
    K.seg(host, "#s3dr2", Object.keys(MET).map(function (k) { return [k, k]; }), B, function (v) { B = v; grow = 0; });
    function geo() { var W = S.W, H = S.H; return { lx: W * 0.08, rx: W * 0.58, bw: W * 0.34, top: H * 0.45, bh: H * 0.48, wy: H * 0.1 }; }
    S.drag({
      down: function (p) { var g = geo(); if (p.x > g.lx + g.bw * 0.6 && p.x < g.rx + g.bw * 0.4 && p.y > g.top - 50 + by && p.y < g.top + 30 + by) { drag = { y: p.y, moved: false }; return true; } return false; },
      move: function (p) { if (drag && Math.abs(p.y - drag.y) > 8) { drag.moved = true; bridge = p.y > drag.y ? true : false; } },
      up: function () { if (drag && !drag.moved) bridge = !bridge; drag = null; },
      hover: function (p) { var g = geo(); return p.x > g.lx + g.bw * 0.6 && p.x < g.rx + g.bw * 0.4 && p.y > g.top - 50 + by && p.y < g.top + 30 + by; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), Ecell = MET[B][0] - MET[A][0], flowing = bridge && Math.abs(Ecell) > 0.001;
      by += ((bridge ? 0 : -H * 0.18) - by) * Math.min(1, dt * 8);
      if (A === "Zn" && B === "Cu" && bridge) tick(0);
      if (Ecell > 2.5 && bridge) tick(1);
      if (!bridge && Ecell > 0) tick(2);
      if (A === "Cu" && Ecell > 0 && bridge) tick(3);
      if (flowing) grow = Math.min(1, grow + dt * 0.05);
      ctx.clearRect(0, 0, W, H);
      [[g.lx, A], [g.rx, B]].forEach(function (b, i) {
        ctx.fillStyle = MET[b[1]][2]; ctx.globalAlpha = 0.7; ctx.fillRect(b[0], g.top, g.bw, g.bh); ctx.globalAlpha = 1;
        ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(b[0], g.top - 20, g.bw, g.bh + 20);
        var anode = (Ecell > 0) === (i === 0), wv = 22 * (anode ? 1 - grow * 0.4 : 1 + grow * 0.3);
        ctx.fillStyle = MET[b[1]][1]; ctx.fillRect(b[0] + g.bw * 0.3 - wv / 2, g.wy + 30, wv, g.top + g.bh * 0.8 - g.wy - 30);
        txt(ctx, b[1] + (b[1] === "Ag" ? "⁺" : "²⁺") + t(" solution", " محلول"), b[0] + g.bw * 0.62, g.top + g.bh * 0.85, { c: "#334155", s: 11 });
        if (Math.abs(Ecell) > 0.001) txt(ctx, anode ? t("anode (−) oxidation", "أنود (−) أكسدة") : t("cathode (+) reduction", "كاثود (+) اختزال"), b[0] + g.bw / 2, g.top + g.bh + 14, { c: anode ? "#dc2626" : "#16a34a", s: 11 });
        txt(ctx, "E° = " + MET[b[1]][0] + " V", b[0] + g.bw * 0.62, g.top + 14, { c: "#334155", s: 11 });
      });
      var bx1 = g.lx + g.bw * 0.75, bx2 = g.rx + g.bw * 0.25, byy = g.top - 30 + by;
      ctx.strokeStyle = "rgba(148,163,184,.85)"; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(bx1, byy + 60); ctx.lineTo(bx1, byy); ctx.lineTo(bx2, byy); ctx.lineTo(bx2, byy + 60); ctx.stroke();
      txt(ctx, t("salt bridge (Na₂SO₄)", "قنطرة ملحية (Na₂SO₄)"), (bx1 + bx2) / 2, byy - 16, { c: C.muted, s: 11 });
      var x1 = g.lx + g.bw * 0.3, x2 = g.rx + g.bw * 0.3, mid = (x1 + x2) / 2;
      ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x1, g.wy + 30); ctx.lineTo(x1, g.wy); ctx.lineTo(x2, g.wy); ctx.lineTo(x2, g.wy + 30); ctx.stroke();
      ctx.fillStyle = C.card; K.rr(ctx, mid - 50, g.wy - 18, 100, 36, 8); ctx.fill(); ctx.strokeStyle = C.muted; ctx.stroke();
      var reading = flowing ? Ecell : 0;
      txt(ctx, (reading >= 0 ? "" : "−") + Math.abs(reading).toFixed(2) + " V", mid, g.wy, { c: flowing ? "#16a34a" : C.muted, s: 16 });
      if (flowing) { if (Math.random() < dt * 8) el.push(0); }
      el = el.filter(function (p, i) { el[i] = p + dt * 0.4; var f = el[i]; if (f > 1) return false; var fromX = Ecell > 0 ? x1 : x2, toX = Ecell > 0 ? x2 : x1, pos = fromX + (toX - fromX) * f; K.dot(ctx, pos, g.wy, 3.5, "#f59e0b"); return true; });
      if (!bridge) txt(ctx, t("No salt bridge: current stops!", "لا قنطرة ملحية: يتوقف التيار!"), W / 2, H * 0.36, { c: "#dc2626", s: 13 });
    });
  };

  /* =========================================================
     10. sec3chem_corrode - scratch coatings, change the medium, watch rust
     ========================================================= */
  L.sec3chem_corrode = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a protection and a medium. Drag across the nail to scratch its coating. Time runs on its own: watch the rust and the coating.",
      "اختر طريقة حماية ووسطًا، واسحب على المسمار لخدش طبقته، والزمن يجري تلقائيًا: راقب الصدأ والطبقة الواقية.")) +
      '<div class="seg" id="s3cc"></div><div class="seg" id="s3cm" style="margin-top:6px"></div>';
    var S = K.make(host, 0.5, 340);
    var tick = L._goals(host, [t("Show bare iron rusting fast in salt water (30% rust).", "أظهر صدأ الحديد العاري بسرعة في الماء المالح (30% صدأ)."),
      t("Scratch tin-plated iron in water and watch the iron rust.", "اخدش الحديد المطلي بالقصدير في الماء وراقب صدأ الحديد."),
      t("Scratch galvanized iron: zinc corrodes, iron stays clean.", "اخدش الحديد المجلفن: يتآكل الخارصين ويبقى الحديد سليمًا."),
      t("Protect a buried pipe with a magnesium sacrificial block.", "احمِ ماسورة مدفونة بقطب ماغنسيوم مضحٍّ.")], done);
    var coat = "bare", med = "water", rust = 0, closs = 0, scr = {}, drag = false, spots = [];
    for (var q = 0; q < 40; q++) spots.push([Math.random(), Math.random(), 0.4 + Math.random() * 0.6]);
    function reset() { rust = 0; closs = 0; scr = {}; }
    K.seg(host, "#s3cc", [["bare", t("Bare iron", "حديد عارٍ")], ["tin", t("Tin plated", "مطلي بالقصدير")], ["zinc", t("Galvanized (zinc)", "مجلفن (خارصين)")], ["mg", t("Mg block", "قطب ماغنسيوم")]], coat, function (v) { coat = v; reset(); });
    K.seg(host, "#s3cm", [["dry", t("Dry air", "هواء جاف")], ["water", t("Water", "ماء")], ["salt", t("Salt water", "ماء مالح")]], med, function (v) { med = v; reset(); });
    function geo() { var W = S.W, H = S.H; return { x: W * 0.08, w: W * 0.6, y: H * 0.42, h: H * 0.16 }; }
    function scratchAt(p) { var g = geo(); if (p.x > g.x && p.x < g.x + g.w && Math.abs(p.y - (g.y + g.h / 2)) < g.h) { scr[Math.floor((p.x - g.x) / g.w * 20)] = 1; return true; } return false; }
    S.drag({ down: function (p) { if (coat === "bare" || coat === "mg") return false; drag = scratchAt(p); return drag; }, move: function (p) { if (drag) scratchAt(p); }, up: function () { drag = false; } });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), m = med === "dry" ? 0 : med === "water" ? 1 : 3, ns = Object.keys(scr).length;
      if (coat === "bare") rust += 2 * m * dt;
      else if (coat === "tin") { if (ns) rust += (3 + ns * 0.3) * m * dt; }
      else if (coat === "zinc") { closs += (ns ? 4 : 0.6) * m * dt; if (closs >= 100) rust += 2 * m * dt; }
      else { closs += 3 * m * dt; if (closs >= 100) rust += 2 * m * dt; }
      rust = Math.min(100, rust); closs = Math.min(100, closs);
      if (coat === "bare" && med === "salt" && rust >= 30) tick(0);
      if (coat === "tin" && ns && m && rust >= 20) tick(1);
      if (coat === "zinc" && ns && closs >= 20 && rust < 1) tick(2);
      if (coat === "mg" && closs >= 20 && rust < 1) tick(3);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = med === "dry" ? "rgba(254,243,199,.4)" : med === "water" ? "rgba(147,197,253,.35)" : "rgba(103,232,249,.45)"; ctx.fillRect(0, H * 0.22, W * 0.74, H * 0.7);
      ctx.fillStyle = "#94a3b8"; K.rr(ctx, g.x, g.y, g.w, g.h, 6); ctx.fill();
      if (coat === "tin" || coat === "zinc") {
        for (var s = 0; s < 20; s++) { var sx = g.x + s * g.w / 20; if (scr[s]) continue; ctx.fillStyle = coat === "tin" ? "#f1f5f9" : "#a1a1aa"; ctx.globalAlpha = coat === "zinc" ? 1 - closs / 120 : 1; ctx.fillRect(sx, g.y - 6, g.w / 20 + 0.5, 6); ctx.fillRect(sx, g.y + g.h, g.w / 20 + 0.5, 6); ctx.globalAlpha = 1; }
      }
      if (coat === "mg") { var mw = 40 * (1 - closs / 110); ctx.fillStyle = "#e7e5e4"; K.rr(ctx, g.x + g.w + 20, g.y - 10, mw, g.h + 20, 6); ctx.fill(); ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(g.x + g.w, g.y + g.h / 2); ctx.lineTo(g.x + g.w + 20, g.y + g.h / 2); ctx.stroke(); txt(ctx, "Mg", g.x + g.w + 20 + Math.max(10, mw / 2), g.y - 20, { c: C.ink, s: 12 }); }
      var nr = Math.round(spots.length * rust / 100);
      for (var r = 0; r < nr; r++) { var sp = spots[r], px = g.x + sp[0] * g.w; if (coat === "tin" && ns) { var keys = Object.keys(scr); px = g.x + (+keys[r % keys.length] + sp[0]) * g.w / 20; } K.dot(ctx, px, g.y + sp[1] * g.h, 3 + sp[2] * 5, "#b45309"); }
      var x0 = W * 0.76, fs = Math.max(11, Math.min(13, W / 46));
      bar(ctx, C, x0, H * 0.3, W * 0.21, rust / 100, "#b45309", t("Iron rusted: ", "صدأ الحديد: ") + n(Math.round(rust)) + "%");
      if (coat !== "bare") bar(ctx, C, x0, H * 0.48, W * 0.21, closs / 100, "#64748b", (coat === "tin" ? t("Tin lost: ", "فقد القصدير: ") : coat === "zinc" ? t("Zinc corroded: ", "تآكل الخارصين: ") : t("Mg corroded: ", "تآكل الماغنسيوم: ")) + n(Math.round(closs)) + "%");
      var why = coat === "bare" ? t("Fe is the anode", "Fe هو الأنود") : coat === "tin" ? (ns ? t("Scratch: Fe anode, Sn cathode", "خدش: Fe أنود و Sn كاثود") : t("Tin cover intact", "طبقة القصدير سليمة")) : coat === "zinc" ? t("Zn is the anode (anodic cover)", "Zn هو الأنود (تغطية أنودية)") : t("Mg is sacrificed", "الماغنسيوم يُضحّى به");
      txt(ctx, why, x0, H * 0.66, { c: C.ink, s: fs, a: "left" });
      if (m === 0) txt(ctx, t("Dry air: no electrolyte, no rust", "هواء جاف: لا إلكتروليت، لا صدأ"), x0, H * 0.76, { c: C.muted, s: fs - 1, a: "left" });
      if ((coat === "tin" || coat === "zinc") && !ns) txt(ctx, t("Drag across the nail to scratch", "اسحب على المسمار للخدش"), g.x + g.w / 2, g.y + g.h + 30, { c: C.muted, s: 12 });
    });
  };

  /* =========================================================
     11. sec3chem_faraday - current x time, masses deposited, series cells
     ========================================================= */
  var ELC = { Ag: ["AgNO₃", 107.88, 1, "#e5e7eb", "O₂"], Cu: ["CuSO₄", 31.78, 2, "#c2410c", "O₂"], Au: ["AuCl₃", 65.66, 3, "#eab308", "Cl₂"], Al: ["Al₂O₃ / cryolite", 9.0, 3, "#cbd5e1", "O₂"] };
  L.sec3chem_faraday = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose the electrolyte, then set the current and the time. Q = I × t. Switch on series mode to send the same charge through three cells.",
      "اختر الإلكتروليت ثم اضبط شدة التيار والزمن: Q = I × t، وشغّل وضع التوالي لتمرير نفس الشحنة في ثلاث خلايا.")) + '<div class="seg" id="s3fe"></div>';
    var S = K.make(host, 0.55, 360);
    var c = box(host, L._slider(t("Current I", "شدة التيار I"), 0.5, 10, 0.5, 2, "A") + L._slider(t("Time t", "الزمن t"), 0, 20000, 50, 965, "s") + '<div class="btn-row"><button type="button" class="btn sm tg" id="s3fs">🔗 ' + t("Series: Al³⁺ | Cu²⁺ | Ag⁺", "توالي: Al³⁺ | Cu²⁺ | Ag⁺") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Pass 10000 C through gold(III) chloride: 6.8 g of gold.", "مرّر 10000 كولوم في كلوريد الذهب III: 6.8 جم ذهب."),
      t("Deposit one gram-equivalent of copper (31.78 g): pass 1 faraday.", "رسّب الكتلة المكافئة الجرامية للنحاس (31.78 جم): مرّر 1 فاراداي."),
      t("In series mode pass 1 faraday and compare Al : Cu : Ag.", "في وضع التوالي مرّر 1 فاراداي وقارن Al : Cu : Ag.")], done);
    var el = "Ag", I = 2, ts = 965, ser = false;
    K.seg(host, "#s3fe", Object.keys(ELC).map(function (k) { return [k, ELC[k][0]]; }), el, function (v) { el = v; upd(); });
    function upd() {
      var Q = I * ts, F = Q / 96500, m = F * ELC[el][1];
      out.innerHTML = '<span class="eq" dir="ltr">Q = ' + I + " × " + ts + " = " + Math.round(Q) + " C = " + (+F.toPrecision(4)) + " F</span>" +
        (ser ? '<span class="eq" dir="ltr">Al ' + (+(F * 9).toFixed(3)) + " g · Cu " + (+(F * 31.78).toFixed(3)) + " g · Ag " + (+(F * 107.88).toFixed(3)) + " g</span>" : '<span class="eq" dir="ltr">m = ' + Math.round(Q) + " × " + ELC[el][1] + " / 96500 = " + (+m.toFixed(3)) + " g</span>");
      if (!ser && el === "Au" && Q >= 9900 && Q <= 10100) tick(0);
      if (!ser && el === "Cu" && Math.abs(Q - 96500) <= 965) tick(1);
      if (ser && Math.abs(Q - 96500) <= 965) tick(2);
    }
    sl(c, 0, function (v) { return n(v) + " A"; }, function (v) { I = v; upd(); });
    sl(c, 1, function (v) { return n(v) + " s"; }, function (v) { ts = v; upd(); });
    c.querySelector("#s3fs").onclick = function () { ser = !ser; this.classList.toggle("on", ser); upd(); };
    var ions = []; for (var q = 0; q < 24; q++) ions.push([Math.random(), Math.random()]);
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, F = I * ts / 96500, list = ser ? ["Al", "Cu", "Ag"] : [el], cw = W / list.length;
      ctx.clearRect(0, 0, W, H);
      list.forEach(function (k, i) {
        var x = i * cw + cw * 0.1, w = cw * 0.8, y = H * 0.25, h = H * 0.6, m = F * ELC[k][1];
        ctx.fillStyle = "rgba(147,197,253,.3)"; ctx.fillRect(x, y, w, h); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(x, y, w, h);
        var ax = x + w * 0.2, kx = x + w * 0.8, th = 8 + Math.min(30, m / 4);
        ctx.fillStyle = "#475569"; ctx.fillRect(ax - 5, y - 20, 10, h * 0.8);
        ctx.fillStyle = "#94a3b8"; ctx.fillRect(kx - 5, y - 20, 10, h * 0.8); ctx.fillStyle = ELC[k][3]; ctx.fillRect(kx - th / 2, y + 10, th, h * 0.8 - 30);
        txt(ctx, "+", ax, y - 30, { c: "#dc2626", s: 14 }); txt(ctx, "−", kx, y - 30, { c: "#2563eb", s: 16 });
        ions.forEach(function (p, j) { if (j % list.length !== i) return; p[0] += dt * 0.05 * I; if (p[0] > 1) p[0] = 0; K.dot(ctx, ax + (kx - ax) * p[0], y + 20 + p[1] * (h - 40), 3.5, ELC[k][3], "rgba(0,0,0,.35)"); });
        txt(ctx, ELC[k][0], x + w / 2, y + h + 14, { c: C.ink, s: 12 });
        txt(ctx, (+m.toFixed(2)) + " g " + k, x + w / 2, y + h * 0.5, { c: C.ink, s: 14 });
        txt(ctx, t("anode gas: ", "غاز الأنود: ") + ELC[k][4], x + w / 2, y + h + 30, { c: C.muted, s: 10 });
      });
      txt(ctx, "1 F = 96500 C", W - 8, 14, { c: C.muted, s: 11, a: "right" });
    });
    upd();
  };

  /* =========================================================
     12. sec3chem_alkane - homologous series explorer with isomers
     ========================================================= */
  var BP = [-162, -89, -42, -0.5, 36, 69, 98, 126, 151, 174], ISO = [1, 1, 1, 2, 3, 5, 9, 18, 35, 75], NAMES = ["methane", "ethane", "propane", "butane", "pentane", "hexane", "heptane", "octane", "nonane", "decane"];
  var NAMES_AR = ["الميثان", "الإيثان", "البروبان", "البيوتان", "البنتان", "الهكسان", "الهبتان", "الأوكتان", "النونان", "الديكان"];
  var ISOS = { 4: [["butane", "البيوتان", -0.5], ["2-methylpropane", "2-ميثيل بروبان", -12]], 5: [["pentane", "البنتان", 36], ["2-methylbutane", "2-ميثيل بيوتان", 28], ["2,2-dimethylpropane", "2,2-ثنائي ميثيل بروبان", 9.5]] };
  L.sec3chem_alkane = function (host, cfg, done) {
    host.innerHTML = hint(t("Slide or tap the bars to choose the number of carbons. Tap the molecule to see its other isomers (C₄ and C₅).",
      "حرّك المنزلق أو اضغط على الأعمدة لاختيار عدد ذرات الكربون، واضغط على الجزيء لرؤية متشكلاته الأخرى (C₄ و C₅)."));
    var S = K.make(host, 0.62, 400);
    var c = box(host, L._slider(t("Carbon atoms n", "عدد ذرات الكربون n"), 1, 10, 1, 1, ""));
    var tick = L._goals(host, [t("Find the first straight-chain alkane that is a liquid at 25 °C.", "اكتشف أول ألكان مستقيم السلسلة يكون سائلًا عند 25 °س."), t("Find the alkane with M = 58 and draw its second isomer.", "اكتشف الألكان الذي كتلته المولية 58 وارسم متشكله الثاني."),
      t("Find the C₅ isomer with the lowest boiling point.", "اكتشف متشكل C₅ ذا أقل درجة غليان."), t("Find octane: M = 114 g/mol.", "اكتشف الأوكتان: الكتلة المولية 114 جم/مول.")], done);
    var N = 1, iso = 0, inp;
    function setN(v) { N = v; iso = 0; if (inp) { inp.value = v; c.querySelector(".slv").textContent = n(v); } check(); }
    function check() { if (N === 5 && iso === 0) tick(0); if (N === 4 && iso === 1) tick(1); if (N === 5 && iso === 2) tick(2); if (N === 8) tick(3); }
    inp = sl(c, 0, function (v) { return n(v); }, function (v) { N = v; iso = 0; check(); });
    function chartGeo() { var W = S.W, H = S.H; return { x: W * 0.06, w: W * 0.88, y: H * 0.62, h: H * 0.3 }; }
    S.drag({
      down: function (p) {
        var g = chartGeo(), H = S.H;
        if (p.y > g.y - 10) { var k = Math.floor((p.x - g.x) / (g.w / 10)); if (k >= 0 && k < 10) { setN(k + 1); return true; } return false; }
        if (p.y < H * 0.55 && ISOS[N]) { iso = (iso + 1) % ISOS[N].length; check(); return true; }
        return false;
      },
      hover: function (p) { return p.y > chartGeo().y - 10 || (p.y < S.H * 0.55 && !!ISOS[N]); }
    });
    function skel() {
      var pts = [], i;
      if (N === 4 && iso === 1) return [[0, 0], [1, -0.6, 0], [2, 0, 1], [1, -1.6, 1]];
      if (N === 5 && iso === 1) return [[0, 0], [1, -0.6, 0], [2, 0, 1], [3, -0.6, 2], [1, -1.6, 1]];
      if (N === 5 && iso === 2) return [[0, -0.6], [1, -0.6, 0], [2, -0.6, 1], [1, -1.6, 1], [1, 0.4, 1]];
      for (i = 0; i < N; i++) pts.push([i, i % 2 ? -0.6 : 0, i ? i - 1 : null]);
      return pts;
    }
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, pts = skel(), sc = Math.min(W * 0.55 / Math.max(3, N), 46), ox = W * 0.08, oy = H * 0.32;
      ctx.clearRect(0, 0, W, H);
      pts.forEach(function (p) { if (p[2] != null) { var q = pts[p[2]]; ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(ox + q[0] * sc, oy + q[1] * sc); ctx.lineTo(ox + p[0] * sc, oy + p[1] * sc); ctx.stroke(); } });
      pts.forEach(function (p, i) { var deg = pts.filter(function (q) { return q[2] === i; }).length + (p[2] != null ? 1 : 0), hN = 4 - deg; K.dot(ctx, ox + p[0] * sc, oy + p[1] * sc, Math.min(14, sc * 0.32), "#334155"); txt(ctx, hN ? "CH" + (hN > 1 ? "₀₁₂₃₄"[hN] : "") : "C", ox + p[0] * sc, oy + p[1] * sc, { c: "#fff", s: Math.min(10, sc * 0.22) }); });
      var M = 12 * N + 2 * N + 2, bp = ISOS[N] ? ISOS[N][iso][2] : BP[N - 1], nm = ISOS[N] ? (E.isAr() ? ISOS[N][iso][1] : ISOS[N][iso][0]) : (E.isAr() ? NAMES_AR[N - 1] : NAMES[N - 1]);
      var x0 = W * 0.64, fs = Math.max(12, Math.min(15, W / 38));
      txt(ctx, nm, x0, H * 0.08, { c: C.ink, s: fs + 2, a: "left" });
      txt(ctx, "C" + (N > 1 ? N : "") + "H" + (2 * N + 2) + "   M = " + M + " g/mol", x0, H * 0.18, { c: C.ink, s: fs, a: "left" });
      txt(ctx, t("b.p. ", "درجة الغليان ") + n(bp) + " °C → " + (bp < 25 ? t("gas", "غاز") : t("liquid", "سائل")) + t(" at 25 °C", " عند 25 °س"), x0, H * 0.28, { c: bp < 25 ? "#2563eb" : "#16a34a", s: fs - 1, a: "left" });
      txt(ctx, t("Chain isomers: ", "المتشكلات السلسلية: ") + n(ISO[N - 1]), x0, H * 0.38, { c: C.ink, s: fs - 1, a: "left" });
      if (ISOS[N]) txt(ctx, t("Tap the molecule: isomer ", "اضغط على الجزيء: المتشكل ") + n(iso + 1) + "/" + n(ISOS[N].length), x0, H * 0.47, { c: C.muted, s: fs - 2, a: "left" });
      var g = chartGeo(), bw = g.w / 10, z = g.y + g.h * 0.55;
      ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(g.x, z); ctx.lineTo(g.x + g.w, z); ctx.stroke();
      txt(ctx, "0 °C", g.x - 2, z, { c: C.muted, s: 9, a: "right" });
      for (var i = 0; i < 10; i++) { var v = BP[i], hh = v / 180 * g.h * 0.55, x = g.x + i * bw + bw * 0.15; ctx.fillStyle = i === N - 1 ? "#f97316" : (v < 25 ? "#93c5fd" : "#86efac"); ctx.fillRect(x, hh >= 0 ? z - hh : z, bw * 0.7, Math.abs(hh)); txt(ctx, "C" + (i + 1), x + bw * 0.35, g.y + g.h + 8, { c: C.muted, s: 10 }); }
    });
  };

  /* =========================================================
     13. sec3chem_addition - bubble alkenes through reagents; build a polymer
     ========================================================= */
  var PROD = {
    ethene: { br: "CH₂Br–CH₂Br (1,2-dibromoethane)", h2: "CH₃–CH₃ (ethane)", hbr: "CH₃–CH₂Br (bromoethane)", h2o: "CH₃–CH₂OH (ethanol)", kmn: "HOCH₂–CH₂OH (ethylene glycol)" },
    propene: { br: "CH₃–CHBr–CH₂Br (1,2-dibromopropane)", h2: "CH₃–CH₂–CH₃ (propane)", hbr: "CH₃–CHBr–CH₃ (2-bromopropane, Markovnikov)", h2o: "CH₃–CH(OH)–CH₃ (2-propanol, Markovnikov)", kmn: "CH₃–CH(OH)–CH₂OH (1,2-propanediol)" }
  };
  var RG = { br: [t2("Bromine water", "ماء البروم"), "#ea580c"], h2: [t2("H₂ / Ni, heat", "H₂ / نيكل، تسخين"), "rgba(226,232,240,.5)"], hbr: [t2("HBr", "HBr"), "rgba(226,232,240,.5)"], h2o: [t2("H₂O / H₂SO₄", "H₂O / H₂SO₄"), "rgba(191,219,254,.5)"], kmn: [t2("Cold dilute KMnO₄", "KMnO₄ مخفف بارد"), "#7e22ce"] };
  function t2(a, b) { return [a, b]; }
  L.sec3chem_addition = function (host, cfg, done) {
    host.innerHTML = hint(t("Reactor: choose a gas and a reagent, then drag the green valve up to bubble the gas through. Polymerize: drag ethene molecules onto the glowing end of the chain.",
      "المفاعل: اختر غازًا وكاشفًا ثم اسحب الصمام الأخضر لأعلى لإمرار الغاز، والبلمرة: اسحب جزيئات الإيثين إلى الطرف المضيء من السلسلة.")) +
      '<div class="seg" id="s3am"></div><div class="seg" id="s3ag" style="margin-top:6px"></div><div class="seg" id="s3ar" style="margin-top:6px"></div>';
    var S = K.make(host, 0.6, 380);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Decolourize bromine water with ethene.", "أزل لون ماء البروم بالإيثين."), t("Show that ethane does NOT decolourize bromine water.", "أثبت أن الإيثان لا يزيل لون ماء البروم."),
      t("Add HBr to propene: which carbon gets the Br?", "أضف HBr إلى البروبين: أي ذرة كربون تأخذ البروم؟"), t("Build a polyethylene chain of 10 units.", "كوّن سلسلة بولي إيثيلين من 10 وحدات.")], done);
    var mode = "r", gas = "ethene", rg = "br", amt = 0, valve = 0, drag = null, chain = 1, mons = [], bub = [];
    K.seg(host, "#s3am", [["r", "⚗️ " + t("Reactor", "المفاعل")], ["p", "🧵 " + t("Polymerize", "البلمرة")]], mode, function (v) { mode = v; });
    K.seg(host, "#s3ag", [["ethene", t("Ethene C₂H₄", "الإيثين C₂H₄")], ["propene", t("Propene C₃H₆", "البروبين C₃H₆")], ["ethane", t("Ethane C₂H₆", "الإيثان C₂H₆")]], gas, function (v) { gas = v; amt = 0; show(); });
    K.seg(host, "#s3ar", Object.keys(RG).map(function (k) { return [k, T(RG[k][0])]; }), rg, function (v) { rg = v; amt = 0; show(); });
    function show() {
      var msg = amt < 1 ? t("Bubble at least one mole of gas through.", "مرّر مولًا على الأقل من الغاز.") : gas === "ethane" ? t("No reaction: ethane is saturated (only single bonds).", "لا تفاعل: الإيثان مشبع (روابط أحادية فقط).") : t("Product: ", "الناتج: ") + PROD[gas][rg];
      out.innerHTML = "<span>" + esc(t("Gas passed: ", "الغاز المار: ")) + "<b>" + n(r2(Math.min(amt, 9.99))) + " mol</b></span><span>" + esc(msg) + "</span>";
    }
    function seedMons() { mons = []; for (var i = 0; i < 6; i++) mons.push({ x: Math.random(), y: 0.15 + Math.random() * 0.3, vx: (Math.random() - 0.5) * 0.1, vy: (Math.random() - 0.5) * 0.1 }); }
    seedMons(); show();
    function vg() { var W = S.W, H = S.H; return { x: W * 0.12, y0: H * 0.2, y1: H * 0.8 }; }
    function chainEnd() { var W = S.W, H = S.H, step = Math.min(30, (W * 0.85) / 12); return { x: W * 0.06 + chain * step, y: H * 0.78 + (chain % 2 ? -10 : 0), step: step }; }
    S.drag({
      down: function (p) {
        if (mode === "r") { var g = vg(), vy = g.y1 - (g.y1 - g.y0) * valve; if (Math.abs(p.x - g.x) < 30 && Math.abs(p.y - vy) < 24) { drag = { v: 1 }; return true; } return false; }
        for (var i = 0; i < mons.length; i++) { var m = mons[i]; if (Math.hypot(p.x - m.x * S.W, p.y - m.y * S.H) < 22) { drag = { m: m }; return true; } }
        return false;
      },
      move: function (p) {
        if (!drag) return;
        if (drag.v) { var g = vg(); valve = clamp((g.y1 - p.y) / (g.y1 - g.y0), 0, 1); }
        else { drag.m.x = p.x / S.W; drag.m.y = p.y / S.H; }
      },
      up: function (p) {
        if (drag && drag.m) { var e = chainEnd(); if (Math.hypot(p.x - e.x - e.step, p.y - e.y) < 40) { chain++; mons.splice(mons.indexOf(drag.m), 1); mons.push({ x: Math.random(), y: 0.15 + Math.random() * 0.3, vx: 0.05, vy: 0.03 }); E.toast(t("Units: ", "الوحدات: ") + n(chain) + " · M = " + n(chain * 28) + " g/mol"); if (chain >= 10) tick(3); if (chain > 12) chain = 1; } }
        drag = null;
      },
      hover: function (p) { if (mode === "r") { var g = vg(); return Math.abs(p.x - g.x) < 30 && Math.abs(p.y - (g.y1 - (g.y1 - g.y0) * valve)) < 24; } return mons.some(function (m) { return Math.hypot(p.x - m.x * S.W, p.y - m.y * S.H) < 22; }); }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H);
      if (mode === "r") {
        amt += valve * dt * 0.5; if (valve > 0) show();
        var unsat = gas !== "ethane", fade = unsat ? clamp(amt, 0, 1) : 0;
        if (rg === "br" && amt >= 1) { if (gas === "ethene") tick(0); if (gas === "ethane") tick(1); }
        if (rg === "hbr" && gas === "propene" && amt >= 1) tick(2);
        var g = vg();
        ctx.strokeStyle = C.muted; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(g.x, g.y0 - 20); ctx.lineTo(g.x, g.y1 + 20); ctx.stroke();
        var vy = g.y1 - (g.y1 - g.y0) * valve; ctx.fillStyle = "#16a34a"; K.rr(ctx, g.x - 22, vy - 10, 44, 20, 6); ctx.fill(); txt(ctx, t("valve", "صمام"), g.x, vy - 20, { c: C.muted, s: 11 });
        var bx = W * 0.3, bw = W * 0.34, by = H * 0.3, bh = H * 0.62;
        ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(g.x, g.y0 - 20); ctx.lineTo(bx + bw / 2, g.y0 - 20); ctx.lineTo(bx + bw / 2, by + bh - 20); ctx.stroke();
        var col = RG[rg][1];
        ctx.fillStyle = col; ctx.globalAlpha = (rg === "br" || rg === "kmn") ? 1 - fade * 0.92 : 1; ctx.fillRect(bx, by + 20, bw, bh - 20); ctx.globalAlpha = 1;
        ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(bx, by, bw, bh);
        if (valve > 0 && Math.random() < valve * dt * 30) bub.push({ x: bx + bw / 2 + (Math.random() - 0.5) * 16, y: by + bh - 20 });
        bub = bub.filter(function (b) { b.y -= dt * 90; b.x += (Math.random() - 0.5); if (b.y < by + 20) return false; ctx.strokeStyle = "rgba(100,116,139,.9)"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(b.x, b.y, 3.5, 0, 7); ctx.stroke(); return true; });
        txt(ctx, T(RG[rg][0]), bx + bw / 2, by + bh + 14, { c: C.ink, s: 12 });
        var x0 = W * 0.68, fs = Math.max(11, Math.min(13, W / 46));
        txt(ctx, gas === "ethane" ? "CH₃–CH₃" : gas === "ethene" ? "CH₂=CH₂" : "CH₃–CH=CH₂", x0, H * 0.15, { c: C.ink, s: fs + 3, a: "left" });
        txt(ctx, unsat ? t("C=C: π bond breaks → addition", "C=C: تنكسر رابطة باي ← إضافة") : t("Saturated: no addition", "مشبع: لا إضافة"), x0, H * 0.25, { c: unsat ? "#16a34a" : C.muted, s: fs, a: "left" });
        if (amt >= 1 && unsat) { var pr = PROD[gas][rg].split(" ("); txt(ctx, "→ " + pr[0], x0, H * 0.4, { c: C.ink, s: fs + 1, a: "left" }); txt(ctx, "(" + pr[1], x0, H * 0.5, { c: C.muted, s: fs - 1, a: "left" }); }
        if (rg === "hbr" && gas === "propene") txt(ctx, t("H → CH₂ end (more H), Br → middle C", "H ← طرف CH₂ (الأغنى)، Br ← الكربون الأوسط"), x0, H * 0.62, { c: "#7c3aed", s: fs - 1, a: "left" });
      } else {
        var e = chainEnd(), i;
        for (i = 0; i < chain; i++) { var px = W * 0.06 + i * e.step, py = H * 0.78 + (i % 2 ? -10 : 0); if (i) { ctx.strokeStyle = C.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(px - e.step, H * 0.78 + ((i - 1) % 2 ? -10 : 0)); ctx.lineTo(px, py); ctx.stroke(); } K.dot(ctx, px, py, 8, "#16a34a"); }
        ctx.fillStyle = "rgba(250,204,21,.35)"; ctx.beginPath(); ctx.arc(e.x + e.step, e.y, 16 + 3 * Math.sin(performance.now() / 200), 0, 7); ctx.fill();
        mons.forEach(function (m) {
          if (!drag || drag.m !== m) { m.x += m.vx * dt; m.y += m.vy * dt; if (m.x < 0.05 || m.x > 0.95) m.vx *= -1; if (m.y < 0.1 || m.y > 0.5) m.vy *= -1; }
          var mx = m.x * W, my = m.y * H; K.dot(ctx, mx - 8, my, 8, "#334155"); K.dot(ctx, mx + 8, my, 8, "#334155"); ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(mx - 4, my - 2); ctx.lineTo(mx + 4, my - 2); ctx.moveTo(mx - 4, my + 2); ctx.lineTo(mx + 4, my + 2); ctx.stroke();
        });
        txt(ctx, "n CH₂=CH₂ → (–CH₂–CH₂–)ₙ", W / 2, H * 0.6, { c: C.ink, s: 14 });
        txt(ctx, "n = " + chain + "   M = " + chain * 28 + " g/mol", W / 2, H * 0.94, { c: C.muted, s: 13 });
      }
    });
  };

  /* =========================================================
     14. sec3chem_ester - esterification equilibrium (Kc = 4) and saponification
     ========================================================= */
  L.sec3chem_ester = function (host, cfg, done) {
    host.innerHTML = hint(t("Set the starting moles of acetic acid and ethanol and watch the ester yield approach equilibrium (Kc = 4). Then push it with excess alcohol or by removing water, or saponify.",
      "اضبط مولات حمض الأسيتيك والإيثانول الابتدائية وراقب ناتج الإستر وهو يقترب من الاتزان (Kc = 4)، ثم ادفعه بزيادة الكحول أو بنزع الماء، أو قم بالتصبن."));
    var S = K.make(host, 0.55, 360);
    var c = box(host, L._slider(t("Acetic acid", "حمض الأسيتيك"), 0.5, 3, 0.5, 1, "mol") + L._slider(t("Ethanol", "الإيثانول"), 0.5, 4, 0.5, 1, "mol") +
      '<div class="btn-row"><button type="button" class="btn sm tg" id="s3ew">🧽 ' + t("Remove water (conc. H₂SO₄)", "انزع الماء (H₂SO₄ مركز)") + '</button><button type="button" class="btn sm" id="s3es">🧼 ' + t("Saponify (excess NaOH)", "تصبن (زيادة NaOH)") + "</button></div>");
    var tick = L._goals(host, [t("Mix 1 mol acid with 1 mol alcohol and reach equilibrium (about 66.7%).", "اخلط 1 مول حمض مع 1 مول كحول وصل للاتزان (نحو 66.7%)."), t("Use excess alcohol to push the yield above 90%.", "استخدم زيادة من الكحول لرفع الناتج فوق 90%."),
      t("Remove water to push the yield above 95%.", "انزع الماء لرفع الناتج فوق 95%."), t("Saponify the ester completely with NaOH.", "صبّن الإستر تمامًا بـ NaOH.")], done);
    var a = 1, b = 1, x = 0, w = 0, dry = false, sap = false, tm = 0, hist = [], hadEster = 0;
    function restart() { x = 0; w = 0; sap = false; tm = 0; hist = []; hadEster = 0; }
    sl(c, 0, function (v) { return n(v) + " mol"; }, function (v) { a = v; restart(); });
    sl(c, 1, function (v) { return n(v) + " mol"; }, function (v) { b = v; restart(); });
    c.querySelector("#s3ew").onclick = function () { dry = !dry; this.classList.toggle("on", dry); };
    c.querySelector("#s3es").onclick = function () { if (x < 0.05) { E.toast(t("Make some ester first.", "كوّن بعض الإستر أولًا.")); return; } hadEster = x; sap = true; };
    function xeq() { if (dry) return Math.min(a, b) * 0.999; var B = 4 * (a + b) + w; return (B - Math.sqrt(B * B - 48 * a * b)) / 6; }
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, lim = Math.min(a, b);
      for (var s = 0; s < 10; s++) {
        var h = dt / 10;
        if (sap) { x -= x * 1.5 * h; }
        else { var fwd = (a - x) * (b - x), bwd = dry ? 0 : x * (w + x) / 4; x += 0.8 * (fwd - bwd) * h; if (dry) w = 0; }
      }
      x = clamp(x, 0, lim);
      tm += dt; if (!hist.length || tm - hist[hist.length - 1][0] > 0.1) { hist.push([tm, x / lim * 100]); if (hist.length > 400) hist.shift(); }
      var y = x / lim * 100, near = !sap && Math.abs(x - xeq()) < 0.003;
      if (near && a === 1 && b === 1 && !dry && Math.abs(y - 66.7) < 1) tick(0);
      if (near && !dry && b >= 3 * a && y > 90) tick(1);
      if (dry && y > 95) tick(2);
      if (sap && hadEster > 0.05 && x < 0.01 * lim) tick(3);
      ctx.clearRect(0, 0, W, H);
      var x0 = 12, fs = Math.max(12, Math.min(14, W / 40));
      txt(ctx, sap ? "CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH" : "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", x0, H * 0.08, { c: C.ink, s: fs, a: "left" });
      var rows = sap ? [[t("Ester", "الإستر"), x, "#16a34a"], [t("Sodium acetate", "أسيتات الصوديوم"), hadEster - x, "#0ea5e9"]] : [[t("Acid", "الحمض"), a - x, "#ef4444"], [t("Alcohol", "الكحول"), b - x, "#f59e0b"], [t("Ester", "الإستر"), x, "#16a34a"], [t("Water", "الماء"), dry ? 0 : x + w, "#3b82f6"]];
      rows.forEach(function (r, i) { bar(ctx, C, x0, H * 0.24 + i * H * 0.15, W * 0.36, r[1] / 4, r[2], r[0] + ": " + n(r2(Math.max(0, r[1]))) + " mol"); });
      var gx = W * 0.47, gw = W * 0.49, gy = H * 0.14, gh = H * 0.66, t0 = hist.length ? hist[0][0] : 0, span = Math.max(15, tm - t0);
      graph(ctx, C, gx, gy, gw, gh, [{ c: "#16a34a", d: hist.map(function (p) { return [p[0] - t0, p[1]]; }) }], 100, span);
      [50, 66.7, 100].forEach(function (v) { var yy = gy + gh * (1 - v / 100); ctx.setLineDash([3, 4]); ctx.strokeStyle = C.line; ctx.beginPath(); ctx.moveTo(gx, yy); ctx.lineTo(gx + gw, yy); ctx.stroke(); ctx.setLineDash([]); txt(ctx, v + "%", gx - 4, yy, { c: C.muted, s: 9, a: "right" }); });
      txt(ctx, t("Ester yield: ", "ناتج الإستر: ") + n(Math.round(y * 10) / 10) + "%", gx + gw / 2, H * 0.9, { c: "#16a34a", s: fs + 1 });
      txt(ctx, sap ? t("Saponification is complete, not reversible", "التصبن تفاعل تام وليس انعكاسيًا") : dry ? t("Water removed: equilibrium pushed forward", "نزع الماء: ينزاح الاتزان طرديًا") : near ? t("Equilibrium (Kc = 4)", "اتزان (Kc = 4)") : t("approaching equilibrium...", "يقترب من الاتزان..."), gx + gw / 2, H * 0.97, { c: C.muted, s: fs - 2 });
    });
  };

  var NM = {
    sec3chem_kc: ["Equilibrium and Kc simulation", "محاكاة الاتزان و Kc"], sec3chem_lechat: ["Le Chatelier piston and thermostat", "مكبس لوشاتيلييه والترموستات"], sec3chem_ostwald: ["Ionization and pH explorer", "مستكشف التأين و pH"],
    sec3chem_daniell: ["Galvanic cell builder", "بناء الخلية الجلفانية"], sec3chem_corrode: ["Corrosion and protection lab", "معمل التآكل والحماية"], sec3chem_faraday: ["Faraday electrolysis bench", "منضدة فاراداي للتحليل الكهربي"],
    sec3chem_alkane: ["Alkane series and isomers", "سلسلة الألكانات والمتشكلات"], sec3chem_addition: ["Alkene reactor and polymer builder", "مفاعل الألكينات وبناء البوليمر"], sec3chem_ester: ["Esterification equilibrium", "اتزان الأسترة"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();
