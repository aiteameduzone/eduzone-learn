/* EduZone Learn v3 - Science, Egyptian Prep 2 (2nd preparatory), Term 1 (2026-2027).
   Follows the Ministry book "Discover and Learn! Science, Second Preparatory, First term":
   Unit 1 Matter and Energy, Unit 2 Matter and Chemical Reactions,
   Unit 3 Energy Flow in Photosynthesis and Cellular Respiration, Unit 4 Geological Processes.
   Registers EZ3.SCIG.prep2 = {units, book} (ids prep2u1l1 ...), plus objectives (EZ3.SCI3_OBJ),
   extra quiz items (EZ3.SCI3_EXTRA), diagrams (EZ3.sciDiagrams) and live simulations
   (EZ3.sciLabs.prep2_*). Same lesson shape as Prep 3 (sci3-data-a.js). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCIG = E.SCIG || {};
  var G = E.SCIG.prep2 = { book: { en: "Discover and Learn! Science, Second Preparatory, First term", ar: "اكتشف وتعلم! العلوم، الصف الثاني الإعدادي، الفصل الدراسي الأول" }, units: [] };

  /* ================= UNIT 1: MATTER AND ENERGY ================= */
  G.units.push({
    id: "prep2u1", num: 1, icon: "🌡️", color: "orange",
    title: { en: "Matter and Energy", ar: "المادة والطاقة" },
    lessons: [
      {
        id: "prep2u1l1", icon: "🧊", page: 2,
        title: { en: "States of Matter", ar: "حالات المادة" },
        idea: {
          official: {
            en: ["Matter is anything that has mass and occupies space. It has three common states: solid, liquid and gas.",
              "A solid has a fixed shape and volume. A liquid flows and takes the shape of its container but keeps its volume. Liquids and gases are called fluids.",
              "Gases can be compressed: pressing on them reduces their volume, because the spaces between their particles are large.",
              "The particle theory says matter is made of tiny particles that attract each other, have spaces between them and move all the time.",
              "In solids the attraction is very strong and particles only vibrate in place; in liquids it is weaker; in gases it is very weak, so particles move freely.",
              "Plasma is the fourth state: an ionized gas of positive ions and free electrons. It is found in the Sun, stars, lightning and the aurora."],
            ar: ["المادة هي كل ما له كتلة ويشغل حيزًا من الفراغ، ولها ثلاث حالات شائعة: الصلبة والسائلة والغازية.",
              "المادة الصلبة لها شكل وحجم ثابتان، والسائل ينساب ويأخذ شكل الإناء الذي يحتويه مع ثبات حجمه، وتُسمّى السوائل والغازات بالموائع.",
              "الغازات قابلة للانضغاط، فيقل حجمها بزيادة الضغط عليها لأن المسافات البينية بين جزيئاتها كبيرة.",
              "تنص النظرية الجزيئية على أن المادة تتكون من جسيمات دقيقة بينها قوى تجاذب ومسافات بينية، وهي في حركة مستمرة.",
              "في المادة الصلبة قوى التجاذب كبيرة جدًا والجزيئات تهتز في أماكنها، وفي السوائل أضعف، وفي الغازات ضعيفة جدًا فتتحرك الجزيئات بحرية.",
              "البلازما هي الحالة الرابعة للمادة: غاز متأين من أيونات موجبة وإلكترونات حرة، وتوجد في الشمس والنجوم والبرق والشفق القطبي."]
          },
          story: {
            en: ["Youssef is at Cairo Stadium for a big match. He thinks of the fans as particles.",
              "Before the match, everyone sits in a fixed seat and only shakes with excitement. That is a solid: fixed places, strong grip.",
              "At half-time, fans walk around the stands but stay inside the stadium, sliding past each other. That is a liquid.",
              "After the final whistle, fans rush out in every direction and fill the streets. That is a gas: weak attraction, free movement.",
              "When the crowd is squeezed into the metro station, the big gaps between people shrink. Gases can be compressed in the same way."],
            ar: ["يوسف في استاد القاهرة لمشاهدة مباراة كبيرة، ويتخيل المشجعين جزيئات.",
              "قبل المباراة يجلس كل مشجع في مقعد ثابت ويهتز من الحماس فقط؛ هذه هي الحالة الصلبة: أماكن ثابتة وتماسك قوي.",
              "بين الشوطين يتحرك المشجعون في المدرجات وينزلقون بجوار بعضهم دون أن يغادروا الاستاد؛ هذه هي الحالة السائلة.",
              "بعد صافرة النهاية يندفع المشجعون في كل اتجاه ويملؤون الشوارع؛ هذه هي الحالة الغازية: تجاذب ضعيف وحركة حرة.",
              "وعندما يتزاحم الجمهور في محطة المترو تقل المسافات الكبيرة بينهم، وهكذا يمكن ضغط الغازات."]
          }
        },
        words: [
          ["Matter", "المادة", "Anything that has mass and occupies space.", "كل ما له كتلة ويشغل حيزًا من الفراغ."],
          ["Fluids", "الموائع", "Liquids and gases: they flow and take the shape of their container.", "السوائل والغازات؛ تنساب وتأخذ شكل الإناء الذي يحتويها."],
          ["Compressibility", "قابلية الانضغاط", "The possibility of reducing the volume of a gas by increasing the pressure on it.", "إمكانية تقليل حجم الغاز بزيادة الضغط الواقع عليه."],
          ["Diffusion", "الانتشار", "Particles spreading from high concentration to low concentration: fast in gases, slow in solids.", "انتقال الجسيمات من التركيز الأعلى إلى التركيز الأقل؛ سريع في الغازات وبطيء جدًا في الصلبة."],
          ["Interparticle spaces", "المسافات البينية", "The spaces between the particles of a substance; smallest in solids, largest in gases.", "المسافات بين جزيئات المادة؛ أصغرها في الصلبة وأكبرها في الغازية."],
          ["Brownian motion", "الحركة البراونية", "Random motion of large particles (dust, pollen) hit by the molecules of a fluid.", "حركة عشوائية للجسيمات الكبيرة كالغبار وحبوب اللقاح نتيجة اصطدام جزيئات المائع بها."],
          ["Plasma", "البلازما", "The fourth state of matter: ionized gas of positive ions and free electrons, a good conductor.", "الحالة الرابعة للمادة: غاز متأين من أيونات موجبة وإلكترونات حرة، عالي التوصيل الكهربي."]
        ],
        lab: { parts: [{ type: "prep2_particles" }, {
          type: "sort",
          prompt: ["Tap a substance, then tap its state of matter.", "اضغط على مادة، ثم اضغط على حالتها."],
          bins: [["s", "🧱", "Solid", "صلبة"], ["l", "💧", "Liquid", "سائلة"], ["g", "💨", "Gas", "غازية"], ["p", "⚡", "Plasma", "بلازما"]],
          items: [[["Wood", "الخشب"], "s"], [["Iron", "الحديد"], "s"], [["Marble", "الرخام"], "s"], [["Oil", "الزيت"], "l"], [["Juice", "العصير"], "l"],
            [["Oxygen", "الأكسجين"], "g"], [["Carbon dioxide", "ثاني أكسيد الكربون"], "g"], [["Lightning", "البرق"], "p"], [["The Sun", "الشمس"], "p"]]
        }] },
        quiz: [
          { q: ["Which state of matter has a fixed shape and a fixed volume?", "أي حالات المادة لها شكل ثابت وحجم ثابت؟"],
            c: [["Solid", "الصلبة"], ["Liquid", "السائلة"], ["Gas", "الغازية"], ["Plasma", "البلازما"]],
            off: ["In solids the attraction forces are very strong, so particles only vibrate in fixed positions.", "في المادة الصلبة قوى التجاذب كبيرة جدًا، فتهتز الجزيئات في أماكنها الثابتة فقط."],
            sto: ["Like fans glued to their seats before the match, solid particles stay in place.", "مثل المشجعين الجالسين في مقاعدهم قبل المباراة، تبقى جزيئات الصلب في أماكنها."] },
          { q: ["Three sealed syringes hold air, water and sand. Pressing the piston reduces the volume of...", "ثلاث محاقن مغلقة بها هواء وماء ورمل. الضغط على المكبس يقلل حجم..."],
            c: [["the air only", "الهواء فقط"], ["the water only", "الماء فقط"], ["the sand and the water", "الرمل والماء"], ["all three equally", "الثلاثة بالتساوي"]],
            off: ["Gases are compressible because their interparticle spaces are large.", "الغازات قابلة للانضغاط لأن المسافات البينية بين جزيئاتها كبيرة."],
            sto: ["Only the air crowd has big gaps to squeeze, like a half-empty metro car.", "الهواء وحده لديه فراغات كبيرة تُضغط، مثل عربة مترو نصف فارغة."] },
          { q: ["Why are liquids and gases put in one group called fluids?", "لماذا توضع السوائل والغازات في مجموعة واحدة تسمى الموائع؟"],
            c: [["Both can flow and take the shape of their container", "كلاهما ينساب ويأخذ شكل الإناء"], ["Both have a fixed volume", "كلاهما له حجم ثابت"], ["Both can be compressed easily", "كلاهما يسهل ضغطه"], ["Both have a fixed shape", "كلاهما له شكل ثابت"]],
            off: ["Liquids and gases both flow (fluidity) and change shape with the container.", "السوائل والغازات كلاهما يتميز بالسيولة ويتغير شكله بتغير الإناء."],
            sto: ["Pour juice or let out air from a balloon: both run and spread into whatever holds them.", "اسكب العصير أو أخرج الهواء من البالون؛ كلاهما يجري ويأخذ شكل ما يحتويه."] },
          { q: ["In which state is diffusion fastest?", "في أي حالة يكون الانتشار أسرع؟"],
            c: [["Gas", "الغازية"], ["Liquid", "السائلة"], ["Solid", "الصلبة"], ["It is the same in all states", "متساوٍ في كل الحالات"]],
            off: ["Diffusion is very fast in gases, average in liquids and very slow in solids.", "الانتشار سريع جدًا في الغازات، ومتوسط في السوائل، وبطيء جدًا في المواد الصلبة."],
            sto: ["The smell of Mama's ta'meya reaches the whole flat in seconds: gas particles race around.", "رائحة طعمية ماما تملأ الشقة في ثوانٍ؛ فجزيئات الغاز تنطلق بسرعة."] },
          { q: ["Dust specks in sunlight move randomly in all directions. This is called...", "ذرات الغبار في ضوء الشمس تتحرك عشوائيًا في كل الاتجاهات. تسمى هذه الظاهرة..."],
            c: [["Brownian motion", "الحركة البراونية"], ["Compressibility", "قابلية الانضغاط"], ["Sublimation", "التسامي"], ["Plasma", "البلازما"]],
            off: ["Air molecules keep hitting the larger dust particles, pushing them randomly. Brown discovered it.", "جزيئات الهواء تصطدم باستمرار بجسيمات الغبار الأكبر فتدفعها عشوائيًا، واكتشفها العالم براون."],
            sto: ["Like a beach ball in a crowd, bounced in random directions by many hands.", "مثل كرة شاطئ وسط الزحام تدفعها أيادٍ كثيرة في اتجاهات عشوائية."] },
          { q: ["What is plasma?", "ما البلازما؟"],
            c: [["An ionized gas of positive ions and free electrons", "غاز متأين من أيونات موجبة وإلكترونات حرة"], ["A very cold solid", "مادة صلبة شديدة البرودة"], ["A thick liquid", "سائل لزج"], ["A mixture of water and air", "خليط من الماء والهواء"]],
            off: ["Plasma is the fourth state of matter with high electrical conductivity, found in the Sun, stars and lightning.", "البلازما الحالة الرابعة للمادة، عالية التوصيل الكهربي، وتوجد في الشمس والنجوم والبرق."],
            sto: ["The flash of lightning over the Nile on a stormy night is plasma lighting up the sky.", "وميض البرق فوق النيل في ليلة عاصفة هو بلازما تضيء السماء."] },
          { q: ["In which state are the forces of attraction between particles weakest?", "في أي حالة تكون قوى التجاذب بين الجزيئات أضعف ما يمكن؟"],
            c: [["Gas", "الغازية"], ["Solid", "الصلبة"], ["Liquid", "السائلة"], ["They are equal in all states", "متساوية في كل الحالات"]],
            off: ["In gases the attraction is very weak, so particles move randomly and completely freely.", "في الغازات قوى التجاذب ضعيفة جدًا، فتتحرك الجزيئات عشوائيًا وبحرية تامة."],
            sto: ["After the whistle nobody holds hands; every fan goes his own way.", "بعد الصافرة لا أحد يمسك بيد أحد؛ كل مشجع يمضي في طريقه."] }
        ]
      },
      {
        id: "prep2u1l2", icon: "♨️", page: 10,
        title: { en: "Changes in the States of Matter", ar: "التغيرات في حالات المادة" },
        idea: {
          official: {
            en: ["Matter changes state when it gains or loses thermal energy (heat).",
              "Heating ice: its temperature rises to the melting point (0°C), stays constant until all of it melts, then rises to the boiling point (100°C) and stays constant again.",
              "During melting and boiling the heat weakens the attraction between particles instead of raising the temperature.",
              "Higher pressure raises the boiling point (pressure cooker); lower pressure, as on mountains, lowers it. Impurities change melting and boiling points.",
              "State changes are reversible physical changes: melting and freezing, evaporation and condensation, sublimation and deposition. No new substance forms.",
              "Evaporation happens at the surface below the boiling point. It is faster with higher temperature, larger surface area, lower humidity and air currents."],
            ar: ["تتغير حالة المادة عندما تكتسب أو تفقد طاقة حرارية.",
              "عند تسخين الثلج ترتفع درجة حرارته حتى درجة الانصهار (صفر°م) وتثبت حتى ينصهر كله، ثم ترتفع حتى درجة الغليان (١٠٠°م) وتثبت مرة أخرى.",
              "أثناء الانصهار والغليان تُستخدم الحرارة في إضعاف قوى التجاذب بين الجزيئات بدلًا من رفع درجة الحرارة.",
              "زيادة الضغط ترفع درجة الغليان (حلة الضغط)، ونقص الضغط كما فوق الجبال يخفضها، والشوائب تغيّر درجتي الانصهار والغليان.",
              "تحولات المادة تغيرات فيزيائية عكسية: الانصهار والتجمد، والتبخر والتكثف، والتسامي والترسيب، ولا تتكون مواد جديدة.",
              "التبخر يحدث من سطح السائل عند درجة أقل من الغليان، ويزداد بارتفاع درجة الحرارة وزيادة مساحة السطح ونقص الرطوبة ووجود تيارات الهواء."]
          },
          story: {
            en: ["Mariam helps her grandmother make tea in their flat in Shubra on a cold morning.",
              "She drops ice from the freezer into the kettle. The thermometer shows 0°C and stays there while the ice melts, even with the fire on.",
              "Then the water warms up until it bubbles at 100°C, and the reading stops rising again while the water boils.",
              "When the steam touches the cold window it turns back into droplets: condensation. The change can go both ways.",
              "Grandma says that in their summer trip to Saint Catherine, high in Sinai, water boils below 100°C because the air pressure is lower."],
            ar: ["مريم تساعد جدتها في إعداد الشاي في شقتهما بشبرا في صباح بارد.",
              "تضع ثلجًا من الفريزر في الغلاية، فيشير الترمومتر إلى صفر°م ويثبت عنده أثناء انصهار الثلج رغم أن النار مشتعلة.",
              "ثم يسخن الماء حتى يغلي عند ١٠٠°م، ويتوقف الترمومتر عن الارتفاع مرة أخرى أثناء الغليان.",
              "وعندما يلمس البخار زجاج النافذة البارد يعود قطرات ماء؛ هذا هو التكثف، فالتحول يحدث في الاتجاهين.",
              "تقول الجدة إن الماء في رحلتهم الصيفية إلى سانت كاترين، المرتفعة في سيناء، يغلي عند أقل من ١٠٠°م لأن الضغط الجوي أقل."]
          }
        },
        words: [
          ["Melting point", "درجة الانصهار", "The temperature at which a solid turns into a liquid; 0°C for ice at normal pressure.", "درجة الحرارة التي تتحول عندها المادة الصلبة إلى سائلة؛ صفر°م للثلج عند الضغط المعتاد."],
          ["Boiling point", "درجة الغليان", "The temperature at which a liquid turns into vapour throughout; 100°C for pure water at 1 atm.", "درجة الحرارة التي يتحول عندها السائل إلى بخار؛ ١٠٠°م للماء النقي عند ضغط ١ ض.ج."],
          ["Evaporation", "التبخر", "Liquid turning to gas from the surface, below the boiling point, without bubbles.", "تحول السائل إلى غاز من سطحه عند درجة أقل من الغليان دون تكوّن فقاعات."],
          ["Condensation", "التكثف", "Vapour turning into liquid when it loses heat, like dew on leaves.", "تحول البخار إلى سائل عندما يفقد حرارة، مثل الندى على أوراق النبات."],
          ["Sublimation", "التسامي", "A solid turning directly into a gas, like dry ice (solid CO₂) and iodine.", "تحول المادة الصلبة إلى غاز مباشرة، مثل الثلج الجاف (ثاني أكسيد الكربون الصلب) واليود."],
          ["Deposition", "الترسيب", "A gas turning directly into a solid, like frost. It is the reverse of sublimation.", "تحول الغاز إلى صلب مباشرة مثل الصقيع، وهو عكس التسامي."],
          ["Freezing", "التجمد", "A liquid turning into a solid when it loses heat.", "تحول السائل إلى صلب عندما يفقد حرارة."]
        ],
        lab: { parts: [{ type: "prep2_heatcurve" }, {
          type: "sort",
          prompt: ["Tap a change, then tap whether the matter gains or loses heat.", "اضغط على التحول، ثم اختر هل تكتسب المادة حرارة أم تفقدها."],
          bins: [["gain", "🔥", "Gains heat", "تكتسب حرارة"], ["lose", "❄️", "Loses heat", "تفقد حرارة"]],
          items: [[["Melting", "الانصهار"], "gain"], [["Boiling", "الغليان"], "gain"], [["Evaporation", "التبخر"], "gain"], [["Sublimation", "التسامي"], "gain"],
            [["Freezing", "التجمد"], "lose"], [["Condensation", "التكثف"], "lose"], [["Deposition (frost)", "الترسيب (الصقيع)"], "lose"]]
        }] },
        quiz: [
          { q: ["While ice is melting, the thermometer reading...", "أثناء انصهار الثلج، قراءة الترمومتر..."],
            c: [["stays constant at 0°C", "تثبت عند صفر°م"], ["rises quickly", "ترتفع بسرعة"], ["falls below zero", "تنخفض تحت الصفر"], ["jumps to 100°C", "تقفز إلى ١٠٠°م"]],
            off: ["At the melting point the heat weakens the attraction between particles, so the temperature stays constant until melting is complete.", "عند درجة الانصهار تُستخدم الحرارة في إضعاف قوى التجاذب، فتثبت درجة الحرارة حتى يتم الانصهار."],
            sto: ["Mariam's thermometer waited at zero until the last ice cube in the kettle was gone.", "ترمومتر مريم انتظر عند الصفر حتى اختفى آخر مكعب ثلج في الغلاية."] },
          { q: ["On a mountain 3000 m high, pure water boils at about...", "على جبل ارتفاعه ٣٠٠٠ م يغلي الماء النقي عند نحو..."],
            c: [["90°C", "٩٠°م"], ["100°C", "١٠٠°م"], ["110°C", "١١٠°م"], ["120°C", "١٢٠°م"]],
            off: ["Lower atmospheric pressure lowers the boiling point; the book's table gives about 90°C at 3000 m.", "نقص الضغط الجوي يخفض درجة الغليان، وجدول الكتاب يعطي نحو ٩٠°م عند ٣٠٠٠ م."],
            sto: ["On a high Sinai peak, the kettle sings earlier than in Cairo.", "على قمة عالية في سيناء تصفر الغلاية أسرع منها في القاهرة."] },
          { q: ["Why does a pressure cooker cook food faster?", "لماذا تطهو حلة الضغط الطعام أسرع؟"],
            c: [["Trapped steam raises the pressure, so water boils above 100°C", "البخار المحبوس يرفع الضغط فيغلي الماء فوق ١٠٠°م"], ["It lowers the boiling point", "تخفض درجة الغليان"], ["It removes the water", "تزيل الماء"], ["It cools the food", "تبرّد الطعام"]],
            off: ["Higher pressure raises the boiling point, so the food cooks at a higher temperature and saves fuel.", "زيادة الضغط ترفع درجة الغليان، فيُطهى الطعام عند حرارة أعلى ويُوفَّر الوقود."],
            sto: ["The rattling valve on Teta's pressure cooker keeps the steam in, so the molokhia meat is ready sooner.", "صمام حلة الضغط عند تيتة يحبس البخار، فتنضج اللحمة أسرع."] },
          { q: ["Dry ice changes directly from solid to gas. This is...", "يتحول الثلج الجاف من صلب إلى غاز مباشرة. هذا هو..."],
            c: [["Sublimation", "التسامي"], ["Deposition", "الترسيب"], ["Condensation", "التكثف"], ["Melting", "الانصهار"]],
            off: ["Sublimation is the change from solid to gas without passing through the liquid state.", "التسامي هو تحول المادة من الحالة الصلبة إلى الغازية دون المرور بالحالة السائلة."],
            sto: ["The 'smoke' at a school show comes from dry ice skipping the liquid step.", "الدخان في حفلات المدرسة يأتي من ثلج جاف يتخطى مرحلة السيولة."] },
          { q: ["Which change makes wet clothes dry faster?", "أي تغيير يجعل الملابس المبتلة تجف أسرع؟"],
            c: [["Spreading them out in sunny, windy air", "فردها في هواء مشمس وفيه رياح"], ["Folding them in a humid room", "طيها في غرفة رطبة"], ["Keeping them in a closed bag", "وضعها في كيس مغلق"], ["Putting them in the shade at night", "وضعها في الظل ليلًا"]],
            off: ["Evaporation increases with temperature, surface area and air currents, and decreases with humidity.", "يزداد التبخر بارتفاع درجة الحرارة وزيادة مساحة السطح وتيارات الهواء، ويقل بزيادة الرطوبة."],
            sto: ["On the roof in Alexandria, a sunny breezy day dries Mama's sheets by noon.", "على سطح البيت في الإسكندرية، يوم مشمس فيه نسيم يجفف ملاءات ماما قبل الظهر."] },
          { q: ["When water changes from liquid to vapour, its molecules...", "عندما يتحول الماء من سائل إلى بخار، فإن جزيئاته..."],
            c: [["stay H₂O; it is a physical change", "تبقى H₂O؛ فهو تغير فيزيائي"], ["break into hydrogen and oxygen", "تتفكك إلى هيدروجين وأكسجين"], ["turn into a new substance", "تتحول إلى مادة جديدة"], ["lose their atoms", "تفقد ذراتها"]],
            off: ["Changes of state do not change the composition of molecules or form new substances.", "تحولات المادة لا تغير تركيب الجزيئات ولا تكوّن مواد جديدة."],
            sto: ["The steam from Mariam's kettle condenses back into the same water on the window.", "بخار غلاية مريم يتكثف ليعود الماء نفسه على النافذة."] },
          { q: ["Dissolving glucose in water makes its boiling point...", "إذابة الجلوكوز في الماء تجعل درجة غليانه..."],
            c: [["rise", "ترتفع"], ["fall", "تنخفض"], ["stay exactly 100°C", "تبقى ١٠٠°م تمامًا"], ["drop to 0°C", "تنخفض إلى الصفر"]],
            off: ["Impurities change the attraction between particles: the boiling point rises and the freezing point falls (180 g in 1 L: +0.5°C and -1.86°C).", "الشوائب تغير قوى التجاذب؛ فترتفع درجة الغليان وتنخفض درجة التجمد (١٨٠ جم في ١ لتر: +٠٫٥°م و-١٫٨٦°م)."],
            sto: ["Sugary syrup for konafa must get hotter than plain water before it boils.", "شربات الكنافة يجب أن يسخن أكثر من الماء العادي حتى يغلي."] }
        ]
      },
      {
        id: "prep2u1l3", icon: "🔥", page: 21,
        title: { en: "Internal Energy and Temperature", ar: "الطاقة الداخلية ودرجة الحرارة" },
        idea: {
          official: {
            en: ["A system is the part of the universe under study. An open system exchanges energy and matter, a closed one only energy, and an isolated one neither.",
              "Internal energy is the total kinetic energy plus potential energy of all the particles of a system.",
              "Temperature shows how hot or cold a system is. It measures the average kinetic energy of its particles.",
              "The same heat raises the temperature of a small mass more than a large mass, because it is shared among fewer particles.",
              "Equal masses of different substances or states change temperature differently: oil warms faster than water, and ice faster than water.",
              "Specific heat is the heat needed to raise 1 kg of a substance by 1°C. Water's is high (4180 J/kg°C), so it is used to cool car engines."],
            ar: ["النظام هو جزء الكون الخاضع للدراسة؛ فالنظام المفتوح يتبادل الطاقة والمادة، والمغلق يتبادل الطاقة فقط، والمعزول لا يتبادل أيًا منهما.",
              "الطاقة الداخلية هي مجموع طاقتي الحركة والوضع لجميع جزيئات النظام.",
              "درجة الحرارة تعبر عن مدى سخونة النظام أو برودته، وهي مقياس لمتوسط طاقة حركة جزيئاته.",
              "الكمية نفسها من الحرارة ترفع درجة حرارة الكتلة الصغيرة أكثر من الكبيرة، لأنها تتوزع على عدد أقل من الجزيئات.",
              "الكتل المتساوية من مواد أو حالات مختلفة تتغير درجة حرارتها بمقادير مختلفة؛ فالزيت يسخن أسرع من الماء، والثلج أسرع من الماء.",
              "الحرارة النوعية هي كمية الحرارة اللازمة لرفع درجة حرارة ١ كجم من المادة ١°م، وهي كبيرة للماء (٤١٨٠ جول/كجم°م) لذلك يُستخدم في تبريد محركات السيارات."]
          },
          story: {
            en: ["Omar and his sister Salma are at the beach in Marsa Matrouh at noon.",
              "The sand burns their feet, but the sea feels cool, although the same Sun shines on both. Sand has a lower specific heat than water.",
              "Salma fills a small cup and a big bucket from the same sea. Both have the same temperature, but the bucket has more particles, so more internal energy.",
              "Back at the cabin, Mama heats a little water for tea: it boils fast. The big pot for pasta takes much longer.",
              "In the car, Baba checks the radiator. Water soaks up lots of heat without getting very hot, so it protects the engine."],
            ar: ["عمر وأخته سلمى على شاطئ مرسى مطروح وقت الظهيرة.",
              "الرمل يحرق أقدامهما لكن البحر بارد، مع أن الشمس نفسها تسقط على الاثنين؛ فالحرارة النوعية للرمل أقل من الماء.",
              "تملأ سلمى كوبًا صغيرًا ودلوًا كبيرًا من البحر نفسه؛ لهما درجة الحرارة نفسها، لكن في الدلو جزيئات أكثر فطاقته الداخلية أكبر.",
              "في الشاليه تسخن ماما قليلًا من الماء للشاي فيغلي سريعًا، أما حلة المكرونة الكبيرة فتأخذ وقتًا أطول بكثير.",
              "وفي السيارة يتفقد بابا الرادياتير؛ فالماء يمتص حرارة كبيرة دون أن يسخن كثيرًا، فيحمي المحرك."]
          }
        },
        words: [
          ["System", "النظام", "Any part of the universe under study, separated from its surroundings by a boundary.", "أي جزء من الكون يخضع للدراسة، ويفصله حد عن الوسط المحيط."],
          ["Open / closed / isolated", "مفتوح / مغلق / معزول", "Open: exchanges energy and matter. Closed: energy only. Isolated: neither (thermos flask).", "المفتوح يتبادل الطاقة والمادة، والمغلق الطاقة فقط، والمعزول لا يتبادل أيًا منهما (الترمس)."],
          ["Internal energy", "الطاقة الداخلية", "Kinetic energy + potential energy of all the particles of a system.", "طاقة الحركة + طاقة الوضع لجميع جزيئات النظام."],
          ["Temperature", "درجة الحرارة", "How hot or cold a system is; a measure of the average kinetic energy of its particles.", "مدى سخونة النظام أو برودته؛ مقياس لمتوسط طاقة حركة جزيئاته."],
          ["Heat", "الحرارة", "Energy transferred from one system to another because of a difference in temperature.", "الطاقة المنتقلة من نظام إلى آخر بسبب اختلاف درجة الحرارة."],
          ["Specific heat", "الحرارة النوعية", "Heat needed to raise 1 kg of a substance by 1°C, in J/kg°C.", "كمية الحرارة اللازمة لرفع درجة حرارة ١ كجم من المادة ١°م، بوحدة جول/كجم°م."]
        ],
        lab: { parts: [{ type: "prep2_energy" }, {
          type: "sort",
          prompt: ["Tap a system, then tap its type.", "اضغط على النظام، ثم اضغط على نوعه."],
          bins: [["o", "🫖", "Open", "مفتوح"], ["c", "🥫", "Closed", "مغلق"], ["i", "🧴", "Isolated", "معزول"]],
          items: [[["Open pot of boiling water", "إناء مفتوح به ماء يغلي"], "o"], [["Glass of tea without a lid", "كوب شاي بلا غطاء"], "o"],
            [["Sealed soft drink can in ice", "علبة مياه غازية مغلقة في الثلج"], "c"], [["Closed jar of jam in the fridge", "برطمان مربى مغلق في الثلاجة"], "c"],
            [["Thermos flask with a hot drink", "ترمس به مشروب ساخن"], "i"]]
        }] },
        quiz: [
          { q: ["A thermos flask holding a hot drink is an example of...", "الترمس الذي به مشروب ساخن مثال على نظام..."],
            c: [["an isolated system", "معزول"], ["an open system", "مفتوح"], ["a closed system", "مغلق"], ["no system at all", "ليس نظامًا"]],
            off: ["An isolated system exchanges neither energy nor matter with its surroundings.", "النظام المعزول لا يتبادل الطاقة ولا المادة مع الوسط المحيط."],
            sto: ["Salma's tea stays hot in the thermos all the way to Matrouh.", "شاي سلمى يبقى ساخنًا في الترمس طوال الطريق إلى مطروح."] },
          { q: ["Temperature is a measure of...", "درجة الحرارة مقياس لـ..."],
            c: [["the average kinetic energy of the particles", "متوسط طاقة حركة الجزيئات"], ["the total mass of the particles", "الكتلة الكلية للجزيئات"], ["the number of particles", "عدد الجزيئات"], ["the potential energy only", "طاقة الوضع فقط"]],
            off: ["A higher average kinetic energy of the particles means a higher temperature.", "زيادة متوسط طاقة حركة الجزيئات تعني ارتفاع درجة الحرارة."],
            sto: ["Hot tea particles dance faster, on average, than iced tea particles.", "جزيئات الشاي الساخن ترقص في المتوسط أسرع من جزيئات الشاي المثلج."] },
          { q: ["A cup and a bucket of sea water have the same temperature. What is the same for both?", "كوب ودلو من ماء البحر لهما درجة الحرارة نفسها. ما الشيء المتساوي فيهما؟"],
            c: [["The average kinetic energy of the particles", "متوسط طاقة حركة الجزيئات"], ["The internal energy", "الطاقة الداخلية"], ["The number of particles", "عدد الجزيئات"], ["The mass", "الكتلة"]],
            off: ["Same temperature means the same average kinetic energy; the bucket has more particles, so more internal energy.", "تساوي درجة الحرارة يعني تساوي متوسط طاقة الحركة، أما الدلو ففيه جزيئات أكثر فطاقته الداخلية أكبر."],
            sto: ["Each particle in the cup moves like each one in the bucket, but the bucket holds a bigger crowd.", "كل جزيء في الكوب يتحرك مثل نظيره في الدلو، لكن الدلو يحمل جمهورًا أكبر."] },
          { q: ["Equal masses of water and corn oil get the same heat. Which warms more?", "كتلتان متساويتان من الماء وزيت الذرة اكتسبتا الحرارة نفسها. أيهما يسخن أكثر؟"],
            c: [["The oil", "الزيت"], ["The water", "الماء"], ["Both warm the same", "يسخنان بالقدر نفسه"], ["Neither changes", "لا يتغير أي منهما"]],
            off: ["Oil has a lower specific heat (2000 J/kg°C) than water (4180 J/kg°C), so its temperature rises more.", "الحرارة النوعية للزيت (٢٠٠٠ جول/كجم°م) أقل من الماء (٤١٨٠ جول/كجم°م)، فترتفع درجة حرارته أكثر."],
            sto: ["The frying pan oil is sizzling while the water pot is still only warm.", "زيت الطاسة يطشطش بينما حلة الماء ما زالت دافئة فقط."] },
          { q: ["Why is water used in car radiators?", "لماذا يُستخدم الماء في رادياتير السيارة؟"],
            c: [["It has a high specific heat", "لأن حرارته النوعية كبيرة"], ["It has a low specific heat", "لأن حرارته النوعية صغيرة"], ["It boils quickly", "لأنه يغلي بسرعة"], ["It conducts electricity", "لأنه يوصل الكهرباء"]],
            off: ["Water absorbs large amounts of heat without a big rise in temperature, protecting the engine.", "الماء يمتص كميات كبيرة من الحرارة دون ارتفاع كبير في درجة حرارته فيحمي المحرك."],
            sto: ["Baba's radiator water is like a sponge for heat on the desert road.", "ماء رادياتير بابا مثل إسفنجة للحرارة على الطريق الصحراوي."] },
          { q: ["The same flame heats 100 g and 400 g of water for the same time. Which gets hotter?", "يسخّن اللهب نفسه ١٠٠ جم و٤٠٠ جم من الماء للمدة نفسها. أيهما يسخن أكثر؟"],
            c: [["The 100 g of water", "الـ ١٠٠ جم"], ["The 400 g of water", "الـ ٤٠٠ جم"], ["They reach the same temperature", "يصلان إلى الدرجة نفسها"], ["Neither warms", "لا يسخن أي منهما"]],
            off: ["The heat is shared among fewer particles in the smaller mass, so their average kinetic energy rises more.", "الحرارة تتوزع على عدد أقل من الجزيئات في الكتلة الصغيرة فيرتفع متوسط طاقة حركتها أكثر."],
            sto: ["Mama's small tea pot boils before the big pasta pot.", "براد الشاي الصغير يغلي قبل حلة المكرونة الكبيرة."] },
          { q: ["Which substance in the book's table has the lowest specific heat, making it good for thermometers?", "أي مادة في جدول الكتاب لها أقل حرارة نوعية فتصلح للترمومترات؟"],
            c: [["Mercury (140 J/kg°C)", "الزئبق (١٤٠ جول/كجم°م)"], ["Water (4180 J/kg°C)", "الماء (٤١٨٠ جول/كجم°م)"], ["Ice (2090 J/kg°C)", "الثلج (٢٠٩٠ جول/كجم°م)"], ["Aluminium (900 J/kg°C)", "الألومنيوم (٩٠٠ جول/كجم°م)"]],
            off: ["A small amount of heat changes mercury's temperature noticeably, so it responds quickly.", "كمية صغيرة من الحرارة تغير درجة حرارة الزئبق بوضوح، فيستجيب بسرعة."],
            sto: ["Mercury is the 'quick reactor' of the table: a tiny bit of heat and it moves.", "الزئبق هو سريع الاستجابة في الجدول: قليل من الحرارة فيتحرك."] }
        ]
      },
      {
        id: "prep2u1l4", icon: "☀️", page: 30,
        title: { en: "Methods of Heat Transfer", ar: "طرق انتقال الحرارة" },
        idea: {
          official: {
            en: ["Heat flows from the hotter system to the colder one until both reach the same temperature: thermal equilibrium.",
              "Conduction moves heat through solids: vibrating particles pass energy to their neighbours without leaving their places.",
              "Metals are good thermal conductors; wood and plastic are insulators. Diamond is the best natural conductor, then silver, then copper.",
              "Convection moves heat in fluids: warm, less dense fluid rises and cold, denser fluid sinks, making convection currents, like the sea breeze.",
              "Radiation carries heat as electromagnetic waves, even through empty space, at 300,000 km/s. Infrared rays have a thermal effect.",
              "Dark, opaque objects absorb infrared better than light or shiny ones. Thermographic cameras turn infrared into coloured images."],
            ar: ["تنتقل الحرارة من النظام الأعلى في درجة الحرارة إلى الأقل حتى تتساوى درجتا حرارتهما، أي يحدث الاتزان الحراري.",
              "التوصيل ينقل الحرارة خلال المواد الصلبة؛ فالجزيئات المهتزة تنقل طاقتها إلى جاراتها دون أن تترك أماكنها.",
              "الفلزات جيدة التوصيل للحرارة، والخشب والبلاستيك عوازل، والماس أفضل موصل طبيعي ثم الفضة ثم النحاس.",
              "الحمل ينقل الحرارة في الموائع؛ فالمائع الساخن الأقل كثافة يصعد والبارد الأكثر كثافة يهبط، فتتكون تيارات الحمل مثل نسيم البحر.",
              "الإشعاع ينقل الحرارة في صورة موجات كهرومغناطيسية حتى عبر الفراغ بسرعة ٣٠٠ ألف كم/ث، والأشعة تحت الحمراء لها تأثير حراري.",
              "الأجسام الداكنة المعتمة تمتص الأشعة تحت الحمراء أكثر من الفاتحة أو اللامعة، وكاميرات التصوير الحراري تحولها إلى صور ملونة."]
          },
          story: {
            en: ["Nour is camping with her scout group at Wadi El Rayan in Fayoum.",
              "She stirs the hot soup with a metal spoon and drops it fast: the heat crawled up the spoon by conduction. The wooden spoon stays cool.",
              "In the pot, a pinch of dried mint goes round and round: hot soup rises at the centre and cooler soup sinks. That is convection.",
              "By the campfire, her face feels warm even without touching anything. The fire's infrared rays reach her by radiation.",
              "In the afternoon, a cool breeze blows from the lake towards the hot sand: a sea breeze made by convection currents."],
            ar: ["نور في رحلة تخييم مع فريق الكشافة في وادي الريان بالفيوم.",
              "تقلّب الشوربة الساخنة بملعقة معدنية ثم تتركها بسرعة؛ فالحرارة زحفت عبر الملعقة بالتوصيل، أما الملعقة الخشبية فتبقى باردة.",
              "في الحلة تدور قليلًا من أوراق النعناع الجافة؛ فالشوربة الساخنة تصعد في الوسط والأبرد تهبط، وهذا هو الحمل.",
              "بجوار نار المخيم تشعر بالدفء على وجهها دون أن تلمس شيئًا؛ فالأشعة تحت الحمراء تصلها بالإشعاع.",
              "وبعد الظهر يهب نسيم بارد من البحيرة نحو الرمال الساخنة؛ إنه نسيم تصنعه تيارات الحمل."]
          }
        },
        words: [
          ["Thermal equilibrium", "الاتزان الحراري", "The state when two systems in contact reach the same temperature and heat stops flowing.", "الحالة التي تتساوى فيها درجتا حرارة نظامين متلامسين فيتوقف انتقال الحرارة."],
          ["Conduction", "التوصيل", "Heat transfer through a solid by particle vibration, without the particles moving away.", "انتقال الحرارة خلال المادة الصلبة باهتزاز الجزيئات دون انتقالها من أماكنها."],
          ["Thermal conductivity", "التوصيل الحراري", "How well a substance conducts heat: high in metals, very low in wood and plastic.", "مقياس لقدرة المادة على توصيل الحرارة؛ مرتفع في الفلزات ومنخفض جدًا في الخشب والبلاستيك."],
          ["Convection", "الحمل", "Heat transfer in fluids by currents: warm fluid rises, cold fluid sinks.", "انتقال الحرارة في الموائع بالتيارات؛ المائع الساخن يصعد والبارد يهبط."],
          ["Sea breeze", "نسيم البحر", "Cool air moving from the sea to the land by day, because land heats faster than water.", "هواء بارد يتحرك من البحر إلى اليابس نهارًا لأن اليابس يسخن أسرع من الماء."],
          ["Radiation", "الإشعاع", "Heat transfer by electromagnetic waves, even through empty space.", "انتقال الحرارة بالموجات الكهرومغناطيسية حتى عبر الفراغ."],
          ["Thermography", "التصوير الحراري", "Detecting infrared emitted by objects and turning it into a coloured image.", "رصد الأشعة تحت الحمراء المنبعثة من الأجسام وتحويلها إلى صورة ملونة."]
        ],
        lab: { parts: [{ type: "prep2_heatflow" }, {
          type: "sort",
          prompt: ["Tap an example, then tap the method of heat transfer.", "اضغط على المثال، ثم اضغط على طريقة انتقال الحرارة."],
          bins: [["cd", "🥄", "Conduction", "التوصيل"], ["cv", "🌀", "Convection", "الحمل"], ["rd", "☀️", "Radiation", "الإشعاع"]],
          items: [[["A metal spoon in hot soup gets hot", "ملعقة معدنية في شوربة ساخنة تسخن"], "cd"], [["A pan handle made of wood stays cool", "مقبض الطاسة الخشبي يبقى باردًا"], "cd"],
            [["Space heater warms a whole room", "الدفاية تدفئ الغرفة كلها"], "cv"], [["Sea breeze in the afternoon", "نسيم البحر بعد الظهر"], "cv"], [["An eagle gliding on warm air", "نسر يحلق على الهواء الدافئ"], "cv"],
            [["Sunlight warms the Earth", "أشعة الشمس تدفئ الأرض"], "rd"], [["A snake senses its prey at night", "ثعبان يحس بفريسته ليلًا"], "rd"]]
        }] },
        quiz: [
          { q: ["A metal block from boiling water is put into cold water. Heat flows...", "قطعة معدنية من ماء يغلي وُضعت في ماء بارد. تنتقل الحرارة..."],
            c: [["from the block to the water until their temperatures are equal", "من القطعة إلى الماء حتى تتساوى درجتا حرارتهما"], ["from the water to the block", "من الماء إلى القطعة"], ["in both directions equally forever", "في الاتجاهين بالتساوي إلى الأبد"], ["not at all", "لا تنتقل"]],
            off: ["Heat flows from the higher temperature to the lower one until thermal equilibrium.", "تنتقل الحرارة من درجة الحرارة الأعلى إلى الأقل حتى يحدث الاتزان الحراري."],
            sto: ["Like water filling the lower tank until both levels match.", "مثل الماء ينساب إلى الخزان الأدنى حتى يتساوى المستويان."] },
          { q: ["Cups A (100 g, 80°C) and B (100 g, 30°C) are mixed into cup C. The likely temperature of C is...", "خُلط الكوب A (١٠٠ جم، ٨٠°م) والكوب B (١٠٠ جم، ٣٠°م) في الكوب C. درجة حرارة C المتوقعة..."],
            c: [["55°C", "٥٥°م"], ["28°C", "٢٨°م"], ["110°C", "١١٠°م"], ["30°C", "٣٠°م"]],
            off: ["Equal masses of water settle halfway between 80°C and 30°C, at about 55°C.", "الكتلتان المتساويتان من الماء تستقران في المنتصف بين ٨٠ و٣٠، أي نحو ٥٥°م."],
            sto: ["Hot tea and cool tea shake hands in the middle.", "الشاي الساخن والفاتر يتصافحان في المنتصف."] },
          { q: ["Why are cooking pots made of metal with plastic or wooden handles?", "لماذا تُصنع أواني الطهي من فلز ولها مقابض من البلاستيك أو الخشب؟"],
            c: [["Metals conduct heat well; plastic and wood are insulators", "الفلزات جيدة التوصيل والبلاستيك والخشب عوازل"], ["Plastic conducts heat better", "البلاستيك أفضل توصيلًا"], ["Metals are insulators", "الفلزات عوازل"], ["To make them heavier", "لتصبح أثقل"]],
            off: ["High thermal conductivity cooks the food; low conductivity protects the hand.", "التوصيل الحراري العالي يطهو الطعام، والمنخفض يحمي اليد."],
            sto: ["Nour's metal spoon burned; the wooden one did not.", "ملعقة نور المعدنية سخنت، أما الخشبية فلا."] },
          { q: ["A space heater is placed on the floor because...", "توضع الدفاية على الأرض لأن..."],
            c: [["warm air rises and cold air sinks, spreading heat by convection", "الهواء الدافئ يصعد والبارد يهبط فتنتشر الحرارة بالحمل"], ["heat only moves downwards", "الحرارة تتحرك لأسفل فقط"], ["the floor conducts heat to the ceiling", "الأرضية توصل الحرارة إلى السقف"], ["radiation needs the floor", "الإشعاع يحتاج الأرضية"]],
            off: ["Warm air becomes less dense and rises; cold denser air sinks to replace it, forming convection currents.", "الهواء الدافئ تقل كثافته فيصعد، والهواء البارد الأكثف يهبط ليحل محله، فتتكون تيارات الحمل."],
            sto: ["The warm air from the heater climbs like a lift, and the cold air takes the stairs down.", "الهواء الدافئ يصعد كالمصعد، والبارد ينزل على السلم."] },
          { q: ["How does heat reach the Earth from the Sun?", "كيف تصل الحرارة من الشمس إلى الأرض؟"],
            c: [["By radiation", "بالإشعاع"], ["By conduction", "بالتوصيل"], ["By convection", "بالحمل"], ["It does not reach Earth", "لا تصل إلى الأرض"]],
            off: ["Radiation needs no matter: electromagnetic waves cross empty space at 300,000 km/s.", "الإشعاع لا يحتاج إلى وسط مادي، فالموجات الكهرومغناطيسية تعبر الفراغ بسرعة ٣٠٠ ألف كم/ث."],
            sto: ["Space is empty, yet the sunshine on Nour's tent still warms it.", "الفضاء فارغ، ومع ذلك تدفئ أشعة الشمس خيمة نور."] },
          { q: ["Why are solar heater pipes painted black?", "لماذا تُطلى أنابيب السخان الشمسي باللون الأسود؟"],
            c: [["Dark objects absorb infrared radiation better", "الأجسام الداكنة تمتص الأشعة تحت الحمراء أكثر"], ["Black reflects heat", "الأسود يعكس الحرارة"], ["Black is a good insulator", "الأسود عازل جيد"], ["For decoration only", "للزينة فقط"]],
            off: ["Opaque dark objects absorb infrared better than light-coloured or shiny ones; firefighters wear shiny silver for the opposite reason.", "الأجسام الداكنة المعتمة تمتص الأشعة تحت الحمراء أكثر من الفاتحة أو اللامعة، ولهذا يرتدي رجال الإطفاء ملابس فضية لامعة."],
            sto: ["A black car in a sunny Cairo car park is the hottest one to touch.", "السيارة السوداء في جراج مشمس بالقاهرة هي الأسخن عند لمسها."] },
          { q: ["The sea breeze happens by day because...", "يحدث نسيم البحر نهارًا لأن..."],
            c: [["land heats faster than water, so air over land rises", "اليابس يسخن أسرع من الماء فيصعد الهواء فوقه"], ["water heats faster than land", "الماء يسخن أسرع من اليابس"], ["the Sun cools the land", "الشمس تبرد اليابس"], ["air over the sea rises first", "الهواء فوق البحر يصعد أولًا"]],
            off: ["Land has a lower specific heat than water, so its air warms, becomes less dense and rises; cooler sea air replaces it.", "الحرارة النوعية لليابس أقل من الماء، فيسخن الهواء فوقه وتقل كثافته ويصعد، ويحل محله هواء البحر الأبرد."],
            sto: ["On the Corniche in the afternoon, the breeze always comes from the sea.", "على الكورنيش بعد الظهر يأتي النسيم دائمًا من البحر."] }
        ]
      }
    ]
  });
})();

/* ---------- Prep 2 data: Unit 2 Matter and Chemical Reactions ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var G = E.SCIG.prep2;

  G.units.push({
    id: "prep2u2", num: 2, icon: "⚗️", color: "blue",
    title: { en: "Matter and Chemical Reactions", ar: "المادة والتفاعلات الكيميائية" },
    lessons: [
      {
        id: "prep2u2l1", icon: "🧪", page: 40,
        title: { en: "Chemical Reactions", ar: "التفاعلات الكيميائية" },
        idea: {
          official: {
            en: ["A physical change alters the state or shape of a substance without changing its composition, like melting ice. A chemical change makes new substances, like burning wood.",
              "A chemical reaction breaks the bonds between atoms of the reactants and forms new bonds between atoms of the products.",
              "Baking soda and vinegar react with effervescence and give off carbon dioxide gas, which blows up a balloon.",
              "Evidence of a reaction: a precipitate (white silver chloride), a colour change (blue copper sulphate fades with zinc), a gas (hydrogen from magnesium and acid), and light and heat (burning magnesium).",
              "Properties change after a reaction: burnt sugar gives black carbon and a caramel smell; oil and caustic soda give soap.",
              "Daily-life reactions: frying eggs, a cut apple turning brown, iron rusting and fireworks."],
            ar: ["التغير الفيزيائي يغير حالة المادة أو شكلها دون تغيير تركيبها مثل انصهار الثلج، والتغير الكيميائي يكوّن مواد جديدة مثل احتراق الخشب.",
              "التفاعل الكيميائي هو كسر الروابط بين ذرات المواد المتفاعلة وتكوين روابط جديدة بين ذرات المواد الناتجة.",
              "يتفاعل بيكربونات الصوديوم مع الخل بفوران ويتصاعد غاز ثاني أكسيد الكربون الذي ينفخ البالون.",
              "دلائل حدوث التفاعل: تكوّن راسب (كلوريد الفضة الأبيض)، وتغير اللون (زوال زرقة كبريتات النحاس مع الخارصين)، وتصاعد غاز (الهيدروجين من الماغنسيوم والحمض)، وانبعاث ضوء وحرارة (احتراق الماغنسيوم).",
              "تتغير خواص المواد بعد التفاعل؛ فاحتراق السكر يعطي كربونًا أسود ورائحة الكراميل، والزيت مع الصودا الكاوية يعطي الصابون.",
              "تفاعلات في حياتنا اليومية: قلي البيض، واسمرار التفاح المقطوع، وصدأ الحديد، والألعاب النارية."]
          },
          story: {
            en: ["Karim helps his aunt in her kitchen in Mansoura before Eid.",
              "She melts butter: only its state changes. Then she bakes kahk: the dough turns golden and smells new, so a chemical reaction happened.",
              "Karim drops baking soda into vinegar in a bottle with a balloon on top. Fizz! The balloon fills with carbon dioxide.",
              "He cuts an apple for his cousin and leaves it; soon it turns brown as it reacts with oxygen in the air.",
              "At night, the fireworks over the Nile give out light and heat: more evidence that new substances are being made."],
            ar: ["كريم يساعد خالته في مطبخها بالمنصورة قبل العيد.",
              "تُذيب الزبدة فتتغير حالتها فقط، ثم تخبز الكحك فيصبح لون العجين ذهبيًا وتظهر رائحة جديدة، إذن حدث تفاعل كيميائي.",
              "يضع كريم بيكربونات الصوديوم في زجاجة بها خل وفوقها بالون، فيحدث فوران وينتفخ البالون بثاني أكسيد الكربون.",
              "يقطع تفاحة لابن خالته ويتركها، فيتحول لونها إلى البني بعد قليل لأنها تتفاعل مع أكسجين الهواء.",
              "وفي الليل تطلق الألعاب النارية فوق النيل ضوءًا وحرارة؛ دليل آخر على تكوّن مواد جديدة."]
          }
        },
        words: [
          ["Physical change", "التغير الفيزيائي", "A change in state or shape without changing composition, like melting ice.", "تغير في الحالة أو الشكل دون تغير في التركيب، مثل انصهار الثلج."],
          ["Chemical change", "التغير الكيميائي", "A change that produces new substances with different properties, like burning wood.", "تغير ينتج مواد جديدة لها خواص مختلفة، مثل احتراق الخشب."],
          ["Chemical reaction", "التفاعل الكيميائي", "Breaking bonds between atoms of reactants and forming new bonds between atoms of products.", "كسر الروابط بين ذرات المتفاعلات وتكوين روابط جديدة بين ذرات النواتج."],
          ["Reactants", "المتفاعلات", "The substances that enter a chemical reaction.", "المواد الداخلة في التفاعل الكيميائي."],
          ["Products", "النواتج", "The new substances formed by a chemical reaction.", "المواد الجديدة الناتجة من التفاعل الكيميائي."],
          ["Precipitate", "الراسب", "An insoluble solid that forms in a solution, like white silver chloride.", "مادة صلبة لا تذوب تتكون في المحلول، مثل كلوريد الفضة الأبيض."]
        ],
        lab: { parts: [{ type: "prep2_evidence" }, {
          type: "sort",
          prompt: ["Tap a change, then tap: physical or chemical?", "اضغط على التغير، ثم اختر: فيزيائي أم كيميائي؟"],
          bins: [["ph", "🧊", "Physical change", "تغير فيزيائي"], ["ch", "🔥", "Chemical change", "تغير كيميائي"]],
          items: [[["Dissolving sugar in water", "ذوبان السكر في الماء"], "ph"], [["Melting of wax", "انصهار الشمع"], "ph"], [["Water freezing in a bottle", "تجمد الماء في زجاجة"], "ph"],
            [["Milk turning into yogurt", "تحول اللبن إلى زبادي"], "ch"], [["Burning of wax", "احتراق الشمع"], "ch"], [["Rusting of an iron nail", "صدأ مسمار حديد"], "ch"], [["An orange going rotten", "تعفن برتقالة"], "ch"], [["Limewater turning milky with CO₂", "تعكر ماء الجير بثاني أكسيد الكربون"], "ch"]]
        }] },
        quiz: [
          { q: ["Which of these is a chemical change?", "أي مما يلي تغير كيميائي؟"],
            c: [["Charcoal turning into ash", "تحول الفحم إلى رماد"], ["Iodine sublimation", "تسامي اليود"], ["Heating an iron rod", "تسخين ساق حديد"], ["Melting of ice", "انصهار الثلج"]],
            off: ["Burning charcoal forms new substances; the others only change state or temperature.", "احتراق الفحم يكوّن مواد جديدة، أما الباقي فتغير في الحالة أو درجة الحرارة فقط."],
            sto: ["After the grill on Sham El-Nessim, grey ash cannot turn back into charcoal.", "بعد شواء شم النسيم لا يعود الرماد الرمادي فحمًا مرة أخرى."] },
          { q: ["Adding silver nitrate to sodium chloride solution gives...", "إضافة نترات الفضة إلى محلول كلوريد الصوديوم يعطي..."],
            c: [["a white precipitate of silver chloride", "راسبًا أبيض من كلوريد الفضة"], ["bubbles of hydrogen", "فقاعات هيدروجين"], ["a bright light", "ضوءًا ساطعًا"], ["a blue solution", "محلولًا أزرق"]],
            off: ["AgCl is insoluble in water and turns violet in sunlight.", "كلوريد الفضة لا يذوب في الماء ويتحول لونه إلى البنفسجي في ضوء الشمس."],
            sto: ["Two clear liquids meet and a white 'snow' appears in Karim's test tube.", "سائلان شفافان يلتقيان فيظهر ثلج أبيض في أنبوبة كريم."] },
          { q: ["Zinc is placed in blue copper sulphate solution. What shows a reaction happened?", "وُضع الخارصين في محلول كبريتات النحاس الأزرق. ما الدليل على حدوث تفاعل؟"],
            c: [["The blue colour disappears and reddish-brown copper forms", "يزول اللون الأزرق ويترسب نحاس بني محمر"], ["The solution turns violet", "يصبح المحلول بنفسجيًا"], ["A white powder floats", "يطفو مسحوق أبيض"], ["Nothing changes", "لا يتغير شيء"]],
            off: ["Colourless zinc sulphate forms and copper is deposited on the zinc plate.", "تتكون كبريتات الخارصين عديمة اللون ويترسب النحاس على صفيحة الخارصين."],
            sto: ["The zinc plate puts on a copper-coloured coat while the blue fades.", "صفيحة الخارصين ترتدي معطفًا نحاسيًا بينما يبهت اللون الأزرق."] },
          { q: ["Magnesium + dilute hydrochloric acid. The evidence of reaction is...", "الماغنسيوم + حمض الهيدروكلوريك المخفف. دليل حدوث التفاعل هو..."],
            c: [["bubbles of hydrogen gas", "تصاعد فقاعات غاز الهيدروجين"], ["a white precipitate", "تكوّن راسب أبيض"], ["a blue colour", "ظهور لون أزرق"], ["frost on the tube", "تكوّن صقيع على الأنبوبة"]],
            off: ["The reaction gives off hydrogen gas H₂.", "يتصاعد غاز الهيدروجين H₂ من التفاعل."],
            sto: ["The strip fizzes like a soda bottle when the acid touches it.", "الشريط يفور مثل زجاجة مياه غازية عندما يلمسه الحمض."] },
          { q: ["Burning a magnesium strip in air produces...", "احتراق شريط الماغنسيوم في الهواء ينتج..."],
            c: [["bright light, heat and white magnesium oxide powder", "ضوءًا ساطعًا وحرارة ومسحوقًا أبيض من أكسيد الماغنسيوم"], ["a blue flame and water", "لهبًا أزرق وماء"], ["a red precipitate", "راسبًا أحمر"], ["hydrogen bubbles", "فقاعات هيدروجين"]],
            off: ["Emission of light and heat is evidence of reaction; the MgO powder is soluble in water.", "انبعاث الضوء والحرارة دليل على التفاعل، ومسحوق أكسيد الماغنسيوم يذوب في الماء."],
            sto: ["The strip shines like a tiny star; wear eye protection and use tongs!", "الشريط يتوهج كنجمة صغيرة؛ استخدم واقيًا للعين وملقطًا!"] },
          { q: ["Oil heated with caustic soda solution forms...", "تسخين الزيت مع محلول الصودا الكاوية يكوّن..."],
            c: [["soap", "الصابون"], ["sugar", "السكر"], ["salt and hydrogen", "ملحًا وهيدروجين"], ["caramel", "الكراميل"]],
            off: ["A change in consistency and a new substance, soap, show a chemical reaction.", "تغير القوام وتكوّن مادة جديدة هي الصابون يدلان على حدوث تفاعل كيميائي."],
            sto: ["Karim's aunt says village grandmothers once made soap from oil this way.", "تقول خالة كريم إن الجدات في القرية كن يصنعن الصابون من الزيت بهذه الطريقة."] },
          { q: ["A cut apple turns brown in the air because...", "التفاح المقطوع يصبح بنيًا في الهواء لأن..."],
            c: [["it reacts with oxygen in the air", "يتفاعل مع أكسجين الهواء"], ["it melts", "ينصهر"], ["it evaporates", "يتبخر"], ["it loses its colour by freezing", "يفقد لونه بالتجمد"]],
            off: ["The browning is a chemical reaction with atmospheric oxygen.", "الاسمرار تفاعل كيميائي مع أكسجين الهواء الجوي."],
            sto: ["Karim's apple slices changed colour while he watched cartoons.", "شرائح تفاح كريم تغير لونها بينما كان يشاهد الكرتون."] }
        ]
      },
      {
        id: "prep2u2l2", icon: "⚖️", page: 49,
        title: { en: "Chemical Equations", ar: "المعادلات الكيميائية" },
        idea: {
          official: {
            en: ["A chemical equation represents a reaction with symbols and formulas: reactants on the left, products on the right, joined by an arrow.",
              "State symbols show the physical state: (s) solid or precipitate, (l) liquid, (g) gas, (v) vapour, (aq) aqueous solution.",
              "Law of conservation of mass: the total mass of the reactants equals the total mass of the products. Lavoisier first formulated it.",
              "An equation is balanced when the number of atoms of each element is the same on both sides.",
              "To balance: count atoms, change coefficients (never subscripts), recount, and keep the simplest ratio. Example: " + eq("N₂ + 3H₂ → 2NH₃") + "."],
            ar: ["المعادلة الكيميائية تمثل التفاعل بالرموز والصيغ: المتفاعلات على اليسار والنواتج على اليمين ويربطهما سهم.",
              "رموز الحالة الفيزيائية: (s) صلب أو راسب، و(l) سائل، و(g) غاز، و(v) بخار، و(aq) محلول مائي.",
              "قانون بقاء الكتلة: مجموع كتل المتفاعلات يساوي مجموع كتل النواتج، وأول من صاغه العالم لافوازييه.",
              "تكون المعادلة موزونة عندما يتساوى عدد ذرات كل عنصر في الطرفين.",
              "لوزن المعادلة: عُدّ الذرات، وغيّر المعاملات (لا الأرقام السفلية)، ثم أعد العد، واجعل النسبة أبسط ما يمكن. مثال: " + eq("N₂ + 3H₂ → 2NH₃") + "."]
          },
          story: {
            en: ["Hana builds molecules with her brother's Lego bricks in their flat in Heliopolis.",
              "Red bricks are oxygen atoms, black are carbon and white are hydrogen. She builds one methane molecule and one oxygen molecule.",
              "To make carbon dioxide and water she runs out of oxygen bricks! She must take a second oxygen molecule: " + eq("CH₄ + 2O₂ → CO₂ + 2H₂O") + ".",
              "When she counts, every brick she started with is in the products; none disappeared and none came from nowhere.",
              "Like the kitchen scale at the bakery, both sides must weigh the same. That is the law of conservation of mass."],
            ar: ["هنا تبني جزيئات بمكعبات الليجو الخاصة بأخيها في شقتهم بمصر الجديدة.",
              "المكعبات الحمراء ذرات أكسجين، والسوداء كربون، والبيضاء هيدروجين، فتبني جزيء ميثان وجزيء أكسجين.",
              "لتكوّن ثاني أكسيد الكربون والماء تنفد مكعبات الأكسجين! فتأخذ جزيء أكسجين ثانيًا: " + eq("CH₄ + 2O₂ → CO₂ + 2H₂O") + ".",
              "وعندما تعد، تجد كل مكعب بدأت به موجودًا في النواتج؛ لم يختفِ شيء ولم يأتِ شيء من العدم.",
              "ومثل ميزان المخبز، يجب أن يتساوى الطرفان، وهذا هو قانون بقاء الكتلة."]
          }
        },
        words: [
          ["Chemical equation", "المعادلة الكيميائية", "Symbols and formulas showing reactants and products and the ratio of their molecules.", "رموز وصيغ توضح المتفاعلات والنواتج ونسبة جزيئاتها."],
          ["Balanced equation", "المعادلة الموزونة", "Equal numbers of atoms of each element on both sides.", "تتساوى فيها أعداد ذرات كل عنصر في الطرفين."],
          ["Coefficient", "المعامل", "The number in front of a formula; the only number you change when balancing.", "الرقم الذي يسبق الصيغة، وهو الرقم الوحيد الذي يتغير عند الوزن."],
          ["Subscript", "الرقم السفلي", "The small number in a formula showing atoms in one molecule; never change it.", "الرقم الصغير في الصيغة ويدل على عدد الذرات في الجزيء الواحد، ولا يُغيّر أبدًا."],
          ["Law of conservation of mass", "قانون بقاء الكتلة", "Total mass of reactants = total mass of products.", "مجموع كتل المتفاعلات = مجموع كتل النواتج."],
          ["Aqueous solution (aq)", "محلول مائي (aq)", "A substance dissolved in water.", "مادة مذابة في الماء."],
          ["Catalyst", "العامل الحفاز", "A substance that speeds up a reaction without being consumed; written on the arrow.", "مادة تزيد سرعة التفاعل دون أن تُستهلك، وتُكتب على السهم."]
        ],
        lab: { parts: [{ type: "prep2_balance" }] },
        quiz: [
          { q: ["What is the balanced equation for making ammonia?", "ما المعادلة الموزونة لتكوين النشادر؟"],
            c: [[eq("N₂ + 3H₂ → 2NH₃"), eq("N₂ + 3H₂ → 2NH₃")], [eq("N₂ + H₂ → NH₃"), eq("N₂ + H₂ → NH₃")], [eq("N + 3H → NH₃"), eq("N + 3H → NH₃")], [eq("2N₂ + 3H₂ → 2NH₃"), eq("2N₂ + 3H₂ → 2NH₃")]],
            off: ["2 N and 6 H atoms on each side.", "ذرتا نيتروجين و٦ ذرات هيدروجين في كل طرف."],
            sto: ["Two nitrogen bricks and six hydrogen bricks before and after.", "مكعبا نيتروجين و٦ مكعبات هيدروجين قبل وبعد."] },
          { q: ["When balancing an equation, you may change...", "عند وزن المعادلة يمكنك تغيير..."],
            c: [["the coefficients only", "المعاملات فقط"], ["the subscripts", "الأرقام السفلية"], ["the symbols of elements", "رموز العناصر"], ["the arrow direction", "اتجاه السهم"]],
            off: ["Changing a subscript would change the substance itself; only coefficients change.", "تغيير الرقم السفلي يغير المادة نفسها، لذا نغير المعاملات فقط."],
            sto: ["You may take more Lego molecules, but you cannot reshape one molecule into another.", "يمكنك أخذ جزيئات ليجو أكثر، لكن لا يمكنك تحويل جزيء إلى جزيء آخر."] },
          { q: ["What does the symbol (aq) mean in an equation?", "ماذا يعني الرمز (aq) في المعادلة؟"],
            c: [["Aqueous solution: dissolved in water", "محلول مائي: مذاب في الماء"], ["A gas", "غاز"], ["A solid precipitate", "راسب صلب"], ["A catalyst", "عامل حفاز"]],
            off: ["(s) solid, (l) liquid, (g) gas, (v) vapour, (aq) aqueous solution.", "(s) صلب، (l) سائل، (g) غاز، (v) بخار، (aq) محلول مائي."],
            sto: ["Sugar stirred into tea is 'aq': it is swimming in water.", "السكر المقلّب في الشاي هو aq؛ إنه يسبح في الماء."] },
          { q: ["4.8 g of magnesium burns with 3.2 g of oxygen. The mass of magnesium oxide is...", "يحترق ٤٫٨ جم ماغنسيوم مع ٣٫٢ جم أكسجين. كتلة أكسيد الماغنسيوم..."],
            c: [["8 g", "٨ جم"], ["1.6 g", "١٫٦ جم"], ["4.8 g", "٤٫٨ جم"], ["15.36 g", "١٥٫٣٦ جم"]],
            off: ["By conservation of mass: 4.8 + 3.2 = 8 g.", "بحسب قانون بقاء الكتلة: ٤٫٨ + ٣٫٢ = ٨ جم."],
            sto: ["What goes into the pot comes out of the pot: nothing is lost.", "ما يدخل الحلة يخرج منها؛ لا شيء يضيع."] },
          { q: ["Who first formulated the law of conservation of mass?", "من أول من صاغ قانون بقاء الكتلة؟"],
            c: [["Antoine Lavoisier", "أنطوان لافوازييه"], ["Van Helmont", "فان هلمونت"], ["Alfred Wegener", "ألفريد فيجنر"], ["Brown", "براون"]],
            off: ["Lavoisier also proved oxygen is essential for combustion and named it; he is called the father of chemistry.", "أثبت لافوازييه أيضًا أن الأكسجين ضروري للاحتراق وسماه، ويُلقب بأبي الكيمياء."],
            sto: ["Lavoisier was famous for weighing everything very carefully.", "اشتهر لافوازييه بوزن كل شيء بدقة شديدة."] },
          { q: ["Which equation is balanced?", "أي المعادلات موزونة؟"],
            c: [[eq("CH₄ + 2O₂ → CO₂ + 2H₂O"), eq("CH₄ + 2O₂ → CO₂ + 2H₂O")], [eq("CH₄ + O₂ → CO₂ + H₂O"), eq("CH₄ + O₂ → CO₂ + H₂O")], [eq("Mg + O₂ → MgO"), eq("Mg + O₂ → MgO")], [eq("H₂ + O₂ → H₂O"), eq("H₂ + O₂ → H₂O")]],
            off: ["Methane burning: 1 C, 4 H and 4 O atoms on each side.", "احتراق الميثان: ذرة كربون و٤ هيدروجين و٤ أكسجين في كل طرف."],
            sto: ["Hana's Lego count matched on both sides only with two oxygen molecules.", "عدّ هنا للمكعبات تطابق في الطرفين فقط مع جزيئي أكسجين."] },
          { q: ["In a closed flask, calcium chloride and sodium sulphate react to form a precipitate. The total mass...", "في دورق مغلق تفاعل كلوريد الكالسيوم مع كبريتات الصوديوم فتكوّن راسب. الكتلة الكلية..."],
            c: [["stays the same", "تبقى كما هي"], ["increases", "تزداد"], ["decreases", "تقل"], ["becomes zero", "تصبح صفرًا"]],
            off: ["The atoms only rearrange, so the mass before and after the reaction is equal.", "الذرات يُعاد ترتيبها فقط، فتتساوى الكتلة قبل التفاعل وبعده."],
            sto: ["The sensitive balance in the lab did not move at all.", "الميزان الحساس في المعمل لم يتحرك إطلاقًا."] }
        ]
      },
      {
        id: "prep2u2l3", icon: "🥚", page: 57,
        title: { en: "Nutritional Chemistry", ar: "كيمياء التغذية" },
        idea: {
          official: {
            en: ["Nutritional chemistry studies the nutrients in food: carbohydrates, fats and proteins.",
              "Carbohydrates contain carbon, hydrogen and oxygen. They are monosaccharides (glucose, fructose), disaccharides (sucrose, maltose), oligosaccharides (raffinose) and polysaccharides (starch, cellulose).",
              "Tests: Benedict's solution (heated) turns green, orange or red with glucose; iodine turns dark blue with starch; Sudan (IV) gives red with fat; Biuret turns from blue to violet with protein.",
              "Fats have the same elements as carbohydrates but give more energy. Extra carbohydrate is stored as glycogen or fat.",
              "Proteins are made of amino acids, which contain nitrogen too. They build muscles, form enzymes (catalysts) and antibodies."],
            ar: ["كيمياء التغذية تدرس العناصر الغذائية في الطعام: الكربوهيدرات والدهون والبروتينات.",
              "الكربوهيدرات تتكون من الكربون والهيدروجين والأكسجين، وتنقسم إلى أحادية (الجلوكوز والفركتوز) وثنائية (السكروز والمالتوز) وقليلة التسكر (الرافينوز) وعديدة (النشا والسليلوز).",
              "الكشوف: محلول بندكت مع التسخين يتحول إلى الأخضر أو البرتقالي أو الأحمر مع الجلوكوز، واليود يتحول إلى الأزرق الداكن مع النشا، وسودان ٤ يعطي لونًا أحمر مع الدهون، وبيوريت يتحول من الأزرق إلى البنفسجي مع البروتين.",
              "الدهون تحتوي العناصر نفسها التي في الكربوهيدرات لكنها تعطي طاقة أكبر، والكربوهيدرات الزائدة تُخزن جليكوجين أو دهونًا.",
              "البروتينات تتكون من أحماض أمينية تحتوي أيضًا على النيتروجين، وتدخل في بناء العضلات وتكوين الإنزيمات (عوامل حفازة) والأجسام المضادة."]
          },
          story: {
            en: ["Ziad is a young footballer at a club in Alexandria. His coach asks the team to test their breakfast.",
              "A drop of iodine on a potato slice turns dark blue: starch, the team's energy food.",
              "Egg white with Biuret turns violet: protein, to build Ziad's muscles after training.",
              "Egg yolk with Sudan (IV) shows red: fat, a big energy store, but too much fried food raises cholesterol.",
              "The coach heats grape juice with blue Benedict's solution and it turns orange: lots of glucose, quick energy before the match."],
            ar: ["زياد لاعب كرة صغير في نادٍ بالإسكندرية، وطلب مدربه من الفريق اختبار فطورهم.",
              "نقطة يود على شريحة بطاطس تتحول إلى الأزرق الداكن؛ إنه النشا، غذاء الطاقة للفريق.",
              "بياض البيض مع بيوريت يتحول إلى البنفسجي؛ إنه البروتين الذي يبني عضلات زياد بعد التمرين.",
              "صفار البيض مع سودان ٤ يظهر لونًا أحمر؛ إنها الدهون، مخزن كبير للطاقة، لكن كثرة المقليات ترفع الكوليسترول.",
              "يسخّن المدرب عصير العنب مع محلول بندكت الأزرق فيتحول إلى البرتقالي؛ جلوكوز كثير وطاقة سريعة قبل المباراة."]
          }
        },
        words: [
          ["Carbohydrates", "الكربوهيدرات", "Organic compounds of carbon, hydrogen and oxygen; the body's main energy source.", "مركبات عضوية من الكربون والهيدروجين والأكسجين، المصدر الرئيسي للطاقة."],
          ["Glucose", "الجلوكوز", "A monosaccharide (grape sugar); detected with hot Benedict's solution.", "سكر أحادي (سكر العنب)، يُكشف عنه بمحلول بندكت الساخن."],
          ["Starch", "النشا", "A polysaccharide of more than 9 units; turns iodine dark blue.", "سكر عديد من أكثر من ٩ وحدات، يحول اليود إلى الأزرق الداكن."],
          ["Fats", "الدهون", "Same elements as carbohydrates but more energy; give red with Sudan (IV).", "العناصر نفسها التي في الكربوهيدرات لكنها أغنى بالطاقة، وتعطي لونًا أحمر مع سودان ٤."],
          ["Proteins", "البروتينات", "Made of amino acids (with nitrogen); turn Biuret from blue to violet.", "تتكون من أحماض أمينية (تحتوي نيتروجين)، وتحول بيوريت من الأزرق إلى البنفسجي."],
          ["Amino acids", "الأحماض الأمينية", "The water-soluble building units of proteins.", "الوحدات البنائية للبروتينات، وهي تذوب في الماء."],
          ["Enzymes", "الإنزيمات", "Proteins that act as catalysts; used in laundry powders to remove stains.", "بروتينات تعمل كعوامل حفازة، وتُستخدم في مساحيق الغسيل لإزالة البقع."]
        ],
        lab: { parts: [{ type: "prep2_food" }, {
          type: "sort",
          prompt: ["Tap a food, then tap the nutrient it is richest in.", "اضغط على الطعام، ثم اختر العنصر الغذائي الأغنى به."],
          bins: [["c", "🍞", "Carbohydrates", "كربوهيدرات"], ["f", "🧈", "Fats", "دهون"], ["p", "🍗", "Proteins", "بروتينات"]],
          items: [[["Bread", "الخبز"], "c"], [["Rice", "الأرز"], "c"], [["Potatoes", "البطاطس"], "c"], [["Butter", "الزبدة"], "f"], [["Vegetable oil", "الزيت النباتي"], "f"],
            [["Fish", "السمك"], "p"], [["Lentils and beans", "العدس والفول"], "p"], [["Egg white", "بياض البيض"], "p"]]
        }] },
        quiz: [
          { q: ["Which solution turns dark blue when added to a potato?", "أي محلول يتحول إلى الأزرق الداكن عند إضافته إلى البطاطس؟"],
            c: [["Iodine solution", "محلول اليود"], ["Biuret solution", "محلول بيوريت"], ["Sudan (IV) solution", "محلول سودان ٤"], ["Benedict's solution", "محلول بندكت"]],
            off: ["Potatoes contain starch, which turns yellowish-brown iodine dark blue.", "البطاطس تحتوي على النشا الذي يحول اليود البني المصفر إلى الأزرق الداكن."],
            sto: ["Ziad's potato slice turned dark blue in a second.", "شريحة بطاطس زياد تحولت إلى الأزرق الداكن في ثانية."] },
          { q: ["What colour does Biuret solution turn with egg white?", "إلى أي لون يتحول محلول بيوريت مع بياض البيض؟"],
            c: [["Violet", "البنفسجي"], ["Dark blue", "الأزرق الداكن"], ["Orange", "البرتقالي"], ["Red", "الأحمر"]],
            off: ["Biuret changes from blue to violet when added to proteins.", "يتحول بيوريت من الأزرق إلى البنفسجي عند إضافته إلى البروتينات."],
            sto: ["Egg white is a protein party, and violet is its colour.", "بياض البيض حفلة بروتين ولونها بنفسجي."] },
          { q: ["The balls in a protein molecule model represent...", "الكرات في نموذج جزيء البروتين تمثل..."],
            c: [["amino acids", "الأحماض الأمينية"], ["monosaccharides", "السكريات الأحادية"], ["starch molecules", "جزيئات النشا"], ["fatty acids", "الأحماض الدهنية"]],
            off: ["Proteins are chains of amino acids, which contain C, H, O and also nitrogen.", "البروتينات سلاسل من الأحماض الأمينية التي تحتوي C وH وO والنيتروجين أيضًا."],
            sto: ["Like beads on a misbaha, amino acids are strung into a protein.", "مثل حبات المسبحة تُنظم الأحماض الأمينية في سلسلة البروتين."] },
          { q: ["Enzymes are...", "الإنزيمات هي..."],
            c: [["proteins that work as catalysts", "بروتينات تعمل كعوامل حفازة"], ["energy-rich carbohydrates", "كربوهيدرات غنية بالطاقة"], ["energy-rich fats", "دهون غنية بالطاقة"], ["carbohydrates that work as catalysts", "كربوهيدرات تعمل كعوامل حفازة"]],
            off: ["Enzymes speed up reactions; they are used in detergents to remove stains.", "الإنزيمات تسرّع التفاعلات وتُستخدم في المنظفات لإزالة البقع."],
            sto: ["The coloured granules in Mama's washing powder are enzymes that eat the stains.", "الحبيبات الملونة في مسحوق غسيل ماما إنزيمات تلتهم البقع."] },
          { q: ["Sucrose (cane sugar) is a disaccharide made of...", "السكروز (سكر القصب) سكر ثنائي يتكون من..."],
            c: [["one glucose and one fructose unit", "وحدة جلوكوز ووحدة فركتوز"], ["two glucose units", "وحدتي جلوكوز"], ["more than 9 units", "أكثر من ٩ وحدات"], ["amino acids", "أحماض أمينية"]],
            off: ["Two monosaccharides join with one water molecule removed; maltose is two glucose units.", "يتحد سكران أحاديان مع نزع جزيء ماء، أما المالتوز فوحدتا جلوكوز."],
            sto: ["The sugar cane from Upper Egypt hides a glucose-fructose couple.", "قصب الصعيد يخفي ثنائيًا من الجلوكوز والفركتوز."] },
          { q: ["A food turns iodine dark blue, Biuret stays blue and Sudan (IV) gives red. It contains...", "طعام يحول اليود إلى الأزرق الداكن، ويبقى بيوريت أزرق، ويعطي سودان ٤ لونًا أحمر. إنه يحتوي على..."],
            c: [["starch and fat", "نشا ودهون"], ["starch and protein", "نشا وبروتين"], ["protein and fat", "بروتين ودهون"], ["starch, protein and fat", "نشا وبروتين ودهون"]],
            off: ["Dark blue iodine = starch; red Sudan = fat; Biuret staying blue = no protein.", "اليود الأزرق الداكن = نشا، وسودان الأحمر = دهون، وبيوريت الباقي أزرق = لا بروتين."],
            sto: ["Like French fries: potato starch fried in oil.", "مثل البطاطس المقلية: نشا البطاطس مقلي في الزيت."] },
          { q: ["Which nutrient gives the most energy per gram?", "أي عنصر غذائي يعطي أكبر طاقة لكل جرام؟"],
            c: [["Fats", "الدهون"], ["Carbohydrates", "الكربوهيدرات"], ["Proteins", "البروتينات"], ["Water", "الماء"]],
            off: ["Fats contain the same elements as carbohydrates but provide a larger amount of energy.", "الدهون تحتوي العناصر نفسها التي في الكربوهيدرات لكنها تعطي كمية أكبر من الطاقة."],
            sto: ["Camels store fat in their humps as fuel for long desert trips.", "الجمل يخزن الدهون في سنامه وقودًا للرحلات الطويلة في الصحراء."] }
        ]
      }
    ]
  });
})();

/* ---------- Prep 2 data: Units 3 and 4 ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var G = E.SCIG.prep2;
  var PS = eq("6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂"), CR = eq("C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy");

  G.units.push({
    id: "prep2u3", num: 3, icon: "🌿", color: "green",
    title: { en: "Energy Flow in Photosynthesis and Cellular Respiration", ar: "تدفق الطاقة في البناء الضوئي والتنفس الخلوي" },
    lessons: [
      {
        id: "prep2u3l1", icon: "🍃", page: 65,
        title: { en: "Photosynthesis", ar: "البناء الضوئي" },
        idea: {
          official: {
            en: ["Van Helmont grew a 2.2 kg willow in 90 kg of soil for 5 years. The tree reached 75 kg but the soil lost only 55 g, so plants do not grow mainly from soil; water is key.",
              "Photosynthesis happens in green plastids (chloroplasts): a double membrane, the stroma (fluid with enzymes) and grana, which are stacks of thylakoids containing chlorophyll.",
              "Chlorophyll absorbs red and blue light and lets green light pass, which is why leaves look green.",
              "Light dependent reactions (on the thylakoids): excited chlorophyll splits water into oxygen and hydrogen. Light independent reactions (in the stroma): hydrogen combines with CO₂ to make glucose.",
              "Overall: " + PS + ". Glucose is stored as starch in leaves, roots and stems.",
              "The rate of photosynthesis depends on light intensity, CO₂ concentration and temperature, as well as water, mineral salts and wind."],
            ar: ["زرع فان هلمونت شجرة صفصاف كتلتها ٢٫٢ كجم في ٩٠ كجم من التربة لمدة ٥ سنوات، فصارت ٧٥ كجم ولم تنقص التربة إلا ٥٥ جم؛ فالنبات لا ينمو أساسًا من التربة، والماء عامل رئيسي.",
              "يحدث البناء الضوئي في البلاستيدات الخضراء، وتتكون من غشاء مزدوج والحشوة (سائل به إنزيمات) والجرانا، وهي أكوام من الثايلاكويدات تحتوي على الكلوروفيل.",
              "يمتص الكلوروفيل الضوء الأحمر والأزرق ويسمح بمرور الضوء الأخضر، ولهذا تبدو الأوراق خضراء.",
              "التفاعلات الضوئية (على أغشية الثايلاكويدات): الكلوروفيل النشط يحلل الماء إلى أكسجين وهيدروجين، والتفاعلات اللاضوئية (في الحشوة): يتحد الهيدروجين مع ثاني أكسيد الكربون لتكوين الجلوكوز.",
              "المعادلة الكلية: " + PS + "، ويُخزن الجلوكوز في صورة نشا في الأوراق والجذور والسيقان.",
              "يتأثر معدل البناء الضوئي بشدة الضوء وتركيز ثاني أكسيد الكربون ودرجة الحرارة، وكذلك الماء والأملاح المعدنية والرياح."]
          },
          story: {
            en: ["Laila waters the molokhia plants on her grandfather's farm in Beni Suef.",
              "Grandpa says each leaf is full of tiny green kitchens called chloroplasts, like solar panels on the roof.",
              "In the morning sun, the kitchens catch red and blue light and split water, sending oxygen out of the leaf.",
              "Then they cook carbon dioxide from the air with hydrogen to make glucose, and keep it as starch for later.",
              "On a cloudy day, or if Laila covers a leaf with tape, the kitchen slows down: less light, less food."],
            ar: ["ليلى تروي نباتات الملوخية في مزرعة جدها ببني سويف.",
              "يقول جدها إن كل ورقة مليئة بمطابخ خضراء صغيرة تسمى البلاستيدات الخضراء، مثل الألواح الشمسية فوق السطح.",
              "في شمس الصباح تلتقط المطابخ الضوء الأحمر والأزرق وتحلل الماء، فيخرج الأكسجين من الورقة.",
              "ثم تطهو ثاني أكسيد الكربون من الهواء مع الهيدروجين لتصنع الجلوكوز، وتخزنه نشا لوقت لاحق.",
              "وفي اليوم الغائم، أو إذا غطت ليلى ورقة بشريط لاصق، يبطئ المطبخ؛ ضوء أقل يعني غذاء أقل."]
          }
        },
        words: [
          ["Photosynthesis", "البناء الضوئي", "Plants making glucose from CO₂ and water using light, releasing oxygen.", "صنع النبات للجلوكوز من ثاني أكسيد الكربون والماء باستخدام الضوء مع انطلاق الأكسجين."],
          ["Chloroplast", "البلاستيدة الخضراء", "A lentil-shaped organelle in green plant cells where photosynthesis happens.", "عضية تشبه حبة العدس في خلايا الأجزاء الخضراء، يحدث فيها البناء الضوئي."],
          ["Chlorophyll", "الكلوروفيل", "Green pigment on the thylakoids; absorbs red and blue light.", "صبغة خضراء على الثايلاكويدات، تمتص الضوء الأحمر والأزرق."],
          ["Stroma", "الحشوة", "Fluid inside the plastid with the enzymes for the light independent reactions.", "سائل داخل البلاستيدة به إنزيمات التفاعلات اللاضوئية."],
          ["Granum (grana)", "البذيرة (البذيرات)", "A stack of thylakoids (15 or more) where the light dependent reactions happen.", "كومة من الثايلاكويدات (١٥ أو أكثر) تحدث فيها التفاعلات الضوئية."],
          ["Light dependent reactions", "التفاعلات الضوئية", "On the thylakoids: excited chlorophyll splits water into oxygen and hydrogen.", "على الثايلاكويدات: الكلوروفيل النشط يحلل الماء إلى أكسجين وهيدروجين."],
          ["Light independent reactions", "التفاعلات اللاضوئية", "In the stroma: hydrogen combines with CO₂ using enzymes to make glucose.", "في الحشوة: يتحد الهيدروجين مع ثاني أكسيد الكربون بمساعدة الإنزيمات لتكوين الجلوكوز."]
        ],
        lab: { parts: [{ type: "prep2_photo" }] },
        quiz: [
          { q: ["What did Van Helmont's willow experiment show?", "ماذا أظهرت تجربة فان هلمونت على شجرة الصفصاف؟"],
            c: [["Tree growth does not depend mainly on soil; water is key", "نمو الشجرة لا يعتمد أساسًا على التربة، والماء عامل رئيسي"], ["The soil lost 75 kg", "التربة فقدت ٧٥ كجم"], ["Plants eat soil", "النباتات تأكل التربة"], ["Light is not needed", "الضوء غير ضروري"]],
            off: ["The tree gained about 73 kg while the soil lost only 55 g.", "اكتسبت الشجرة نحو ٧٣ كجم بينما لم تفقد التربة إلا ٥٥ جم."],
            sto: ["If the tree ate the soil, the pot would be nearly empty after 5 years. It wasn't!", "لو أكلت الشجرة التربة لفرغ الأصيص تقريبًا بعد ٥ سنوات، لكن ذلك لم يحدث!"] },
          { q: ["Where do the light dependent reactions take place?", "أين تحدث التفاعلات الضوئية؟"],
            c: [["On the thylakoid membranes of the grana", "على أغشية الثايلاكويدات في الجرانا"], ["In the stroma", "في الحشوة"], ["In the mitochondria", "في الميتوكوندريا"], ["In the roots", "في الجذور"]],
            off: ["Chlorophyll on the thylakoids absorbs light and splits water.", "الكلوروفيل على الثايلاكويدات يمتص الضوء ويحلل الماء."],
            sto: ["The grana are the solar panels; the stroma is the kitchen.", "الجرانا هي الألواح الشمسية، والحشوة هي المطبخ."] },
          { q: ["Why do plant leaves look green?", "لماذا تبدو أوراق النبات خضراء؟"],
            c: [["Chlorophyll absorbs red and blue light and reflects green", "الكلوروفيل يمتص الأحمر والأزرق ويعكس الأخضر"], ["Chlorophyll absorbs green light", "الكلوروفيل يمتص الضوء الأخضر"], ["Leaves make green light", "الأوراق تصنع ضوءًا أخضر"], ["Water is green", "الماء أخضر"]],
            off: ["An opaque object reflects its own colour; chlorophyll passes green and uses red and blue.", "الجسم المعتم يعكس لونه، والكلوروفيل يمرر الأخضر ويستخدم الأحمر والأزرق."],
            sto: ["Green is the colour the leaf does not want, so it sends it back to our eyes.", "الأخضر هو اللون الذي لا تحتاجه الورقة، فتعيده إلى أعيننا."] },
          { q: ["Which gas is released as a by-product of photosynthesis?", "ما الغاز الذي ينطلق ناتجًا ثانويًا للبناء الضوئي؟"],
            c: [["Oxygen", "الأكسجين"], ["Carbon dioxide", "ثاني أكسيد الكربون"], ["Nitrogen", "النيتروجين"], ["Hydrogen", "الهيدروجين"]],
            off: ["Splitting water in the light dependent reactions releases oxygen: " + PS + ".", "تحليل الماء في التفاعلات الضوئية يطلق الأكسجين: " + PS + "."],
            sto: ["Every bubble from a pond plant on a sunny day is oxygen leaving the kitchen.", "كل فقاعة من نبات البركة في يوم مشمس أكسجين يخرج من المطبخ."] },
          { q: ["A variegated leaf is tested with iodine. Which parts turn dark blue?", "اختُبرت ورقة مبرقشة باليود. أي الأجزاء يتحول إلى الأزرق الداكن؟"],
            c: [["Only the green parts", "الأجزاء الخضراء فقط"], ["Only the white parts", "الأجزاء البيضاء فقط"], ["The whole leaf", "الورقة كلها"], ["No part", "لا جزء"]],
            off: ["Only parts with chlorophyll make starch, showing chlorophyll is needed.", "الأجزاء التي بها كلوروفيل فقط تصنع النشا، مما يثبت أهمية الكلوروفيل."],
            sto: ["No green kitchen, no starch: the white patches stay brown with iodine.", "لا مطبخ أخضر، لا نشا؛ فالبقع البيضاء تبقى بنية مع اليود."] },
          { q: ["Part of a leaf is covered with opaque tape before the experiment. After the iodine test it...", "غُطي جزء من الورقة بشريط معتم قبل التجربة. بعد اختبار اليود فإنه..."],
            c: [["does not turn dark blue: no light, no starch", "لا يتحول إلى الأزرق الداكن: لا ضوء، لا نشا"], ["turns dark blue more strongly", "يتحول إلى الأزرق الداكن بقوة أكبر"], ["turns violet", "يتحول إلى البنفسجي"], ["turns red", "يتحول إلى الأحمر"]],
            off: ["Light is needed for starch formation.", "الضوء ضروري لتكوين النشا."],
            sto: ["Laila's taped patch was in the dark, so its kitchen never switched on.", "جزء ورقة ليلى المغطى كان في الظلام فلم يعمل مطبخه."] },
          { q: ["Which change increases the rate of photosynthesis (other factors constant)?", "أي تغيير يزيد معدل البناء الضوئي (مع ثبات العوامل الأخرى)؟"],
            c: [["More light intensity", "زيادة شدة الضوء"], ["Covering the leaf", "تغطية الورقة"], ["Removing CO₂ from the air", "إزالة ثاني أكسيد الكربون من الهواء"], ["Using only green light", "استخدام الضوء الأخضر فقط"]],
            off: ["More light (or more CO₂) raises the rate up to an optimum point.", "زيادة الضوء (أو ثاني أكسيد الكربون) ترفع المعدل حتى نقطة مثلى."],
            sto: ["Vertical farms in big cities use bright artificial lights to grow vegetables in towers.", "المزارع الرأسية في المدن الكبيرة تستخدم إضاءة صناعية قوية لزراعة الخضراوات في الأبراج."] }
        ]
      },
      {
        id: "prep2u3l2", icon: "⚡", page: 75,
        title: { en: "Cellular Respiration", ar: "التنفس الخلوي" },
        idea: {
          official: {
            en: ["Gas exchange in plants: by day and night for respiration (take in oxygen, give out CO₂), and by day only for photosynthesis.",
              "Limewater turns milky when CO₂ is produced; methylene blue loses its colour when oxygen is used up.",
              "Cellular respiration breaks down glucose in the presence of oxygen into water and CO₂, releasing energy: " + CR + ".",
              "Most of it happens in the mitochondria: outer membrane, inner membrane folded into cristae (more surface, more energy), and the matrix with enzymes. Muscle and liver cells have many.",
              "Stage 1 (cytoplasm, no oxygen): glucose becomes two pyruvic acid molecules with limited energy. Stage 2 (mitochondria, with oxygen): a large amount of energy, water and CO₂.",
              "Metabolism = anabolism (building big molecules, uses energy, like proteins from amino acids) + catabolism (breaking down, releases energy, like respiration)."],
            ar: ["تبادل الغازات في النبات: ليلًا ونهارًا في التنفس (يأخذ الأكسجين ويطلق ثاني أكسيد الكربون)، ونهارًا فقط في البناء الضوئي.",
              "ماء الجير الرائق يتعكر عند تكوّن ثاني أكسيد الكربون، ومحلول أزرق الميثيلين يزول لونه عند استهلاك الأكسجين.",
              "التنفس الخلوي هو تكسير الجلوكوز في وجود الأكسجين إلى ماء وثاني أكسيد الكربون مع انطلاق طاقة: " + CR + ".",
              "يحدث معظمه في الميتوكوندريا: غشاء خارجي، وغشاء داخلي ينثني في أعراف (مساحة أكبر وطاقة أكثر)، وحشوة بها إنزيمات، ويكثر عددها في خلايا العضلات والكبد.",
              "المرحلة الأولى (في السيتوبلازم بدون أكسجين): يتحول الجلوكوز إلى جزيئين من حمض البيروفيك مع طاقة محدودة، والمرحلة الثانية (في الميتوكوندريا مع الأكسجين): طاقة كبيرة وماء وثاني أكسيد الكربون.",
              "الأيض = البناء (تكوين جزيئات كبيرة ويستهلك طاقة، مثل البروتينات من الأحماض الأمينية) + الهدم (تكسير يطلق طاقة، مثل التنفس)."]
          },
          story: {
            en: ["Adam runs in the school marathon around the Citadel in Cairo.",
              "His muscle cells are like busy factories full of power stations: the mitochondria.",
              "Glucose from his breakfast is the fuel. It is first split in the cytoplasm into two pyruvic acid pieces, giving a little energy.",
              "The pieces enter the mitochondria where oxygen from his fast breathing helps release lots of energy, with water and CO₂ as exhaust.",
              "Like an ATM giving cash only if the account has money, the cell releases energy only from the food it has stored."],
            ar: ["آدم يجري في ماراثون المدرسة حول القلعة في القاهرة.",
              "خلايا عضلاته مثل مصانع مزدحمة مليئة بمحطات الطاقة: الميتوكوندريا.",
              "الجلوكوز من فطوره هو الوقود، ويُكسر أولًا في السيتوبلازم إلى جزيئين من حمض البيروفيك مع قليل من الطاقة.",
              "يدخل الجزيئان الميتوكوندريا حيث يساعد الأكسجين القادم من تنفسه السريع على إطلاق طاقة كبيرة، والماء وثاني أكسيد الكربون هما العادم.",
              "ومثل ماكينة الصراف الآلي التي تعطي نقودًا فقط إذا كان في الحساب رصيد، تطلق الخلية الطاقة فقط من الغذاء المخزن لديها."]
          }
        },
        words: [
          ["Gas exchange", "تبادل الغازات", "Taking in and giving out O₂ and CO₂ with the surroundings.", "أخذ وإطلاق الأكسجين وثاني أكسيد الكربون مع الوسط المحيط."],
          ["Cellular respiration", "التنفس الخلوي", "Breaking down glucose with oxygen into water and CO₂, releasing energy.", "تكسير الجلوكوز بالأكسجين إلى ماء وثاني أكسيد الكربون مع انطلاق طاقة."],
          ["Mitochondria", "الميتوكوندريا", "Bean-shaped power stations of the cell that release energy from nutrients.", "محطات طاقة تشبه حبة الفول في الخلية، تطلق الطاقة من الغذاء."],
          ["Cristae", "الأعراف", "Folds of the inner mitochondrial membrane that increase its surface area.", "انثناءات الغشاء الداخلي للميتوكوندريا تزيد مساحة سطحه."],
          ["Matrix", "الحشوة", "Fluid inside the inner membrane holding the enzymes of respiration.", "سائل داخل الغشاء الداخلي يحتوي على إنزيمات التنفس."],
          ["Anabolism", "البناء", "Building large molecules from small ones; consumes energy.", "تكوين جزيئات كبيرة من جزيئات صغيرة، ويستهلك طاقة."],
          ["Catabolism", "الهدم", "Breaking large molecules into smaller ones; releases energy.", "تكسير الجزيئات الكبيرة إلى أصغر، ويطلق طاقة."]
        ],
        lab: { parts: [{ type: "prep2_resp" }, {
          type: "sort",
          prompt: ["Tap a process, then tap: building up or breaking down?", "اضغط على العملية، ثم اختر: بناء أم هدم؟"],
          bins: [["a", "🧱", "Anabolism (building)", "بناء"], ["k", "💥", "Catabolism (breaking down)", "هدم"]],
          items: [[["Wound healing", "التئام الجروح"], "a"], [["Amino acids into proteins", "تحويل الأحماض الأمينية إلى بروتينات"], "a"], [["Photosynthesis", "البناء الضوئي"], "a"],
            [["Cellular respiration", "التنفس الخلوي"], "k"], [["Fats into energy", "تحويل الدهون إلى طاقة"], "k"], [["Breaking down proteins", "تكسير البروتينات"], "k"]]
        }] },
        quiz: [
          { q: ["When do plants respire?", "متى يتنفس النبات؟"],
            c: [["Day and night, in all living cells", "ليلًا ونهارًا في جميع الخلايا الحية"], ["Only at night", "ليلًا فقط"], ["Only in the green parts by day", "في الأجزاء الخضراء نهارًا فقط"], ["Only in winter", "في الشتاء فقط"]],
            off: ["Respiration is continuous; photosynthesis happens only in light.", "التنفس مستمر، أما البناء الضوئي فيحدث في وجود الضوء فقط."],
            sto: ["Even while Adam sleeps, his cells and his mother's houseplants keep breathing.", "حتى وآدم نائم تظل خلاياه ونباتات أمه المنزلية تتنفس."] },
          { q: ["Which observation shows that respiration produced carbon dioxide?", "أي ملاحظة تدل على أن التنفس أنتج ثاني أكسيد الكربون؟"],
            c: [["Clear limewater turns milky", "ماء الجير الرائق يتعكر"], ["Methylene blue turns darker", "أزرق الميثيلين يصبح أغمق"], ["Iodine turns dark blue", "اليود يتحول إلى الأزرق الداكن"], ["Biuret turns violet", "بيوريت يتحول إلى البنفسجي"]],
            off: ["Limewater turns milky with CO₂; methylene blue loses colour when oxygen is used up.", "ماء الجير يتعكر بثاني أكسيد الكربون، وأزرق الميثيلين يزول لونه عند استهلاك الأكسجين."],
            sto: ["Blow through a straw into limewater: your breath turns it milky.", "انفخ بشفاطة في ماء الجير؛ أنفاسك تجعله يتعكر."] },
          { q: ["Why does the inner membrane of the mitochondrion have folds (cristae)?", "لماذا يحتوي الغشاء الداخلي للميتوكوندريا على انثناءات (أعراف)؟"],
            c: [["To increase surface area and produce more energy", "لزيادة المساحة وإنتاج طاقة أكبر"], ["To store starch", "لتخزين النشا"], ["To absorb light", "لامتصاص الضوء"], ["To make it lighter", "لتصبح أخف"]],
            off: ["More surface area means respiration produces energy with higher efficiency.", "زيادة المساحة تعني إنتاج الطاقة بكفاءة أعلى في التنفس الخلوي."],
            sto: ["Like folding a long towel into a small drawer, the folds pack in more working space.", "مثل طي منشفة طويلة في درج صغير، تضع الانثناءات مساحة عمل أكبر."] },
          { q: ["Where does the first stage of cellular respiration take place?", "أين تحدث المرحلة الأولى من التنفس الخلوي؟"],
            c: [["In the cytoplasm, without oxygen", "في السيتوبلازم بدون أكسجين"], ["In the mitochondria, with oxygen", "في الميتوكوندريا مع الأكسجين"], ["In the chloroplast", "في البلاستيدة الخضراء"], ["In the nucleus", "في النواة"]],
            off: ["Glucose splits into two pyruvic acid molecules with limited energy, then pyruvic acid moves to the mitochondria.", "يتكسر الجلوكوز إلى جزيئين من حمض البيروفيك مع طاقة محدودة، ثم ينتقل الحمض إلى الميتوكوندريا."],
            sto: ["The fuel is cut in half at the factory gate before it enters the power station.", "يُقطع الوقود نصفين عند بوابة المصنع قبل دخول محطة الطاقة."] },
          { q: ["Muscle cells have many mitochondria because...", "تحتوي خلايا العضلات على ميتوكوندريا كثيرة لأن..."],
            c: [["they need a large amount of energy", "تحتاج إلى كمية كبيرة من الطاقة"], ["they make glucose", "تصنع الجلوكوز"], ["they store water", "تخزن الماء"], ["they do not respire", "لا تتنفس"]],
            off: ["Liver and muscle cells require a lot of energy, so they have more mitochondria.", "خلايا الكبد والعضلات تحتاج إلى طاقة كبيرة، فيزيد عدد الميتوكوندريا فيها."],
            sto: ["Adam's leg muscles are a city with many power stations for the marathon.", "عضلات ساقي آدم مدينة بها محطات طاقة كثيرة من أجل الماراثون."] },
          { q: ["Photosynthesis is process X and cellular respiration is process Y. Which is correct?", "البناء الضوئي العملية X والتنفس الخلوي العملية Y. أيهما صحيح؟"],
            c: [["X anabolic, Y catabolic", "X بناء، Y هدم"], ["X catabolic, Y anabolic", "X هدم، Y بناء"], ["Both anabolic", "كلاهما بناء"], ["Both catabolic", "كلاهما هدم"]],
            off: ["Photosynthesis builds glucose (uses energy); respiration breaks it down (releases energy).", "البناء الضوئي يبني الجلوكوز (يستهلك طاقة)، والتنفس يكسره (يطلق طاقة)."],
            sto: ["The leaf saves money into the account; the muscle withdraws it at the ATM.", "الورقة تودع المال في الحساب، والعضلة تسحبه من الصراف."] },
          { q: ["Which are the products of cellular respiration?", "ما نواتج التنفس الخلوي؟"],
            c: [["Carbon dioxide, water and energy", "ثاني أكسيد الكربون والماء والطاقة"], ["Glucose and oxygen", "الجلوكوز والأكسجين"], ["Starch and oxygen", "النشا والأكسجين"], ["Amino acids and water", "الأحماض الأمينية والماء"]],
            off: [CR, CR],
            sto: ["Exhaust from the power station: CO₂ breathed out and water, with energy for running.", "عادم محطة الطاقة: ثاني أكسيد كربون يُزفر وماء، مع طاقة للجري."] }
        ]
      }
    ]
  });

  G.units.push({
    id: "prep2u4", num: 4, icon: "🌋", color: "purple",
    title: { en: "Geological Processes", ar: "العمليات الجيولوجية" },
    lessons: [
      {
        id: "prep2u4l1", icon: "🌍", page: 83,
        title: { en: "Changes in Earth's Surface", ar: "التغيرات في سطح الأرض" },
        idea: {
          official: {
            en: ["In 1912 Wegener proposed continental drift: 200 million years ago all land was one continent, Pangaea, which broke apart; Africa and South America began separating 135 million years ago.",
              "Plate tectonics: the lithosphere (crust + solid upper mantle) is split into plates that move slowly on the asthenosphere, driven by convection currents. Oceanic plates are thin and dense; continental plates are thick and less dense.",
              "Divergent movement: plates move apart and new oceanic crust forms, like the Red Sea.",
              "Convergent movement: plates collide. Two oceanic plates make volcanic island chains (Japan); two continental plates make the Himalayas; oceanic under continental makes the Andes.",
              "Transform movement: plates slide side by side, forming long faults like the San Andreas fault.",
              "Earthquakes and volcanoes happen along plate boundaries and change the surface; meteorites make craters, like Mount Kamel crater in Egypt's Western Desert."],
            ar: ["في عام ١٩١٢ اقترح فيجنر فرضية الانجراف القاري: منذ ٢٠٠ مليون سنة كانت اليابسة قارة واحدة هي بانجيا ثم تفككت، وبدأت أفريقيا وأمريكا الجنوبية في الانفصال منذ ١٣٥ مليون سنة.",
              "نظرية الألواح التكتونية: الغلاف الصخري (القشرة + الجزء الصلب من الوشاح العلوي) مقسم إلى ألواح تتحرك ببطء فوق الغلاف المائع بفعل تيارات الحمل، والألواح المحيطية رقيقة وكثيفة، والقارية سميكة وأقل كثافة.",
              "الحركة التباعدية: تتباعد الألواح وتتكون قشرة محيطية جديدة، مثل البحر الأحمر.",
              "الحركة التقاربية: تتقارب الألواح؛ فلوحان محيطيان يكوّنان سلاسل جزر بركانية (اليابان)، ولوحان قاريان يكوّنان جبال الهيمالايا، ولوح محيطي تحت قاري يكوّن جبال الأنديز.",
              "الحركة الانزلاقية (التحويلية): تنزلق الألواح جنبًا إلى جنب فتتكون صدوع طويلة مثل صدع سان أندرياس.",
              "الزلازل والبراكين تحدث على حدود الألواح وتغير سطح الأرض، والنيازك تكوّن فوهات مثل فوهة جبل كامل في الصحراء الغربية بمصر."]
          },
          story: {
            en: ["Seif is snorkelling in the Red Sea at Hurghada with his diving teacher.",
              "She tells him the sea he is swimming in was born when two continental plates pulled apart, and it is still slowly widening.",
              "Seif imagines the plates as huge rafts floating on hot, slowly moving rock, pushed by convection currents.",
              "Where rafts crash, mountains rise like the Himalayas; where they grind side by side, the ground can suddenly shake in an earthquake.",
              "On the drive home, his father promises a trip to the New Valley to see Mount Kamel, a crater dug by a falling meteorite."],
            ar: ["سيف يغطس في البحر الأحمر بالغردقة مع مدربة الغوص.",
              "تخبره أن البحر الذي يسبح فيه وُلد عندما تباعد لوحان قاريان، وما زال يتسع ببطء.",
              "يتخيل سيف الألواح كطوافات ضخمة تطفو فوق صخور ساخنة تتحرك ببطء، تدفعها تيارات الحمل.",
              "حيث تتصادم الطوافات ترتفع الجبال مثل الهيمالايا، وحيث تحتك جنبًا إلى جنب قد تهتز الأرض فجأة بزلزال.",
              "وفي طريق العودة يعده والده برحلة إلى الوادي الجديد ليرى فوهة جبل كامل التي حفرها نيزك ساقط."]
          }
        },
        words: [
          ["Continental drift", "الانجراف القاري", "Wegener's idea that the continents were once one land, Pangaea, and drifted apart.", "فكرة فيجنر أن القارات كانت يابسة واحدة (بانجيا) ثم انجرفت متباعدة."],
          ["Tectonic plates", "الألواح التكتونية", "Solid pieces of the lithosphere that move slowly over the asthenosphere.", "أجزاء صلبة من الغلاف الصخري تتحرك ببطء فوق الغلاف المائع."],
          ["Divergent boundary", "الحدود التباعدية", "Where plates move apart and new oceanic crust forms (Red Sea).", "حيث تتباعد الألواح وتتكون قشرة محيطية جديدة (البحر الأحمر)."],
          ["Convergent boundary", "الحدود التقاربية", "Where plates move towards each other and one may subduct under the other.", "حيث تتقارب الألواح وقد ينزلق أحدها تحت الآخر."],
          ["Transform boundary", "الحدود الانزلاقية", "Where plates slide past each other side by side, making faults.", "حيث تنزلق الألواح بجوار بعضها جنبًا إلى جنب فتتكون صدوع."],
          ["Magma", "الصهارة", "Molten rock beneath Earth's surface.", "صخور منصهرة تحت سطح الأرض."],
          ["Meteorite", "النيزك", "A rock mass that enters the atmosphere and falls to the ground, sometimes making a crater.", "كتلة صخرية تخترق الغلاف الجوي وتسقط على الأرض، وقد تكوّن فوهة."]
        ],
        lab: { parts: [{ type: "prep2_plates" }] },
        quiz: [
          { q: ["According to Wegener, 200 million years ago the land was...", "بحسب فيجنر، كانت اليابسة منذ ٢٠٠ مليون سنة..."],
            c: [["one large continent called Pangaea", "قارة واحدة كبيرة تسمى بانجيا"], ["seven separate continents", "سبع قارات منفصلة"], ["under the ocean", "تحت المحيط"], ["made of ice", "مكونة من الجليد"]],
            off: ["Pangaea began to drift apart; Africa and South America started separating 135 million years ago.", "بدأت بانجيا في التفكك، وبدأت أفريقيا وأمريكا الجنوبية في الانفصال منذ ١٣٥ مليون سنة."],
            sto: ["The coasts of Africa and South America fit together like two puzzle pieces.", "سواحل أفريقيا وأمريكا الجنوبية تتطابق مثل قطعتي بازل."] },
          { q: ["The Red Sea was formed by...", "تكوّن البحر الأحمر نتيجة..."],
            c: [["divergence of two continental plates", "تباعد لوحين قاريين"], ["convergence of two oceanic plates", "تقارب لوحين محيطيين"], ["a meteorite", "سقوط نيزك"], ["transform movement", "حركة انزلاقية"]],
            off: ["Upward convection currents pull continental plates apart and new oceanic crust forms.", "تيارات الحمل الصاعدة تباعد اللوحين القاريين فتتكون قشرة محيطية جديدة."],
            sto: ["Seif is swimming in a crack that is slowly getting wider.", "سيف يسبح في شق يتسع ببطء."] },
          { q: ["Two continental plates converging formed...", "تقارب لوحين قاريين أدى إلى تكوين..."],
            c: [["the Himalayas", "جبال الهيمالايا"], ["the Japanese islands", "جزر اليابان"], ["the Red Sea", "البحر الأحمر"], ["the San Andreas fault", "صدع سان أندرياس"]],
            off: ["Neither plate subducts easily, so the crust crumples upward into high mountains.", "لا ينزلق أي من اللوحين بسهولة، فتنثني القشرة لأعلى مكونة جبالًا عالية."],
            sto: ["Push two rugs together on the floor: they fold up into a mountain.", "ادفع سجادتين نحو بعضهما على الأرض فتنثنيان لأعلى كالجبل."] },
          { q: ["When an oceanic plate meets a continental plate, the oceanic plate subducts because it is...", "عندما يلتقي لوح محيطي بلوح قاري ينزلق المحيطي تحته لأنه..."],
            c: [["denser", "أكبر كثافة"], ["thicker", "أكثر سمكًا"], ["lighter", "أخف"], ["hotter", "أسخن"]],
            off: ["The denser oceanic plate slides under the less dense continental plate, forming the Andes.", "اللوح المحيطي الأكثف ينزلق تحت القاري الأقل كثافة، فتتكون جبال الأنديز."],
            sto: ["The heavy raft dives under the light one.", "الطوافة الثقيلة تغوص تحت الخفيفة."] },
          { q: ["The San Andreas fault was caused by...", "تسبب في تكوين صدع سان أندرياس..."],
            c: [["transform movement of plates", "الحركة الانزلاقية للألواح"], ["divergent movement", "الحركة التباعدية"], ["convergence of two continental plates", "تقارب لوحين قاريين"], ["a volcano", "بركان"]],
            off: ["Plates sliding side by side form long faults.", "الألواح المنزلقة جنبًا إلى جنب تكوّن صدوعًا طويلة."],
            sto: ["Two cars scraping past each other leave a long scratch.", "سيارتان تحتكان ببعضهما تتركان خدشًا طويلًا."] },
          { q: ["Which of these does NOT change Earth's surface?", "أي مما يلي لا يغير سطح الأرض؟"],
            c: [["The aurora borealis", "الشفق القطبي"], ["Volcanic eruptions", "الثورات البركانية"], ["Meteorites", "النيازك"], ["Earthquakes", "الزلازل"]],
            off: ["The aurora is plasma glowing in the sky; it does not shape the ground.", "الشفق بلازما تتوهج في السماء ولا تغير شكل الأرض."],
            sto: ["The aurora paints the sky, not the land.", "الشفق يلون السماء لا الأرض."] },
          { q: ["Mount Kamel crater in the New Valley Governorate was made by...", "فوهة جبل كامل في محافظة الوادي الجديد تكونت بسبب..."],
            c: [["a meteorite", "نيزك"], ["an earthquake", "زلزال"], ["a river", "نهر"], ["plate divergence", "تباعد الألواح"]],
            off: ["Meteorites are rock masses that fall to the ground; some make huge circular craters.", "النيازك كتل صخرية تسقط على الأرض، وبعضها يكوّن فوهات دائرية ضخمة."],
            sto: ["A rock from space left a round footprint in Egypt's desert.", "صخرة من الفضاء تركت أثر قدم دائريًا في صحراء مصر."] }
        ]
      },
      {
        id: "prep2u4l2", icon: "💎", page: 91,
        title: { en: "Formation of Minerals and Soil", ar: "تكوّن المعادن والتربة" },
        idea: {
          official: {
            en: ["A mineral is a naturally occurring solid inorganic substance with a crystalline structure and a specific chemical composition, like sulphur (element) or hematite (compound).",
              "Properties of minerals: colour (yellow sulphur; quartz changes with impurities), luster (metallic galena, used for kohl) and transparency (talc opaque, mica translucent, quartz transparent). Opal is not crystalline, so it is a mineraloid.",
              "Minerals form from magma solidification: silica, potassium and sodium rich magma gives mica and quartz; magnesium and iron rich magma gives olivine and pyroxene.",
              "They also crystallize from hydrothermal vents: water heated by magma (400°C) dissolves minerals and crystallizes them, like apatite and calcite, when it meets cold ocean water (2°C).",
              "Soil forms by weathering of rocks and decomposition of organic matter. Transported soil (the Nile Delta) moved from elsewhere; sedentary residual soil (Mariout, Oasis) formed in place.",
              "Minerals and fossil fuels are non-renewable. We must use renewable energy, recycle minerals and use energy-saving technology."],
            ar: ["المعدن مادة صلبة غير عضوية توجد طبيعيًا ولها بناء بلوري وتركيب كيميائي محدد، مثل الكبريت (عنصر) والهيماتيت (مركب).",
              "خواص المعادن: اللون (الكبريت أصفر، والكوارتز يتغير لونه بالشوائب)، والبريق (الجالينا الفلزي استخدمه المصريون القدماء كحلًا)، والشفافية (التلك معتم، والميكا شبه شفافة، والكوارتز شفاف)، أما الأوبال فليس بلوريًا فهو شبه معدن.",
              "تتكون المعادن بتصلب الصهارة؛ فالصهارة الغنية بالسيليكا والبوتاسيوم والصوديوم تكوّن الميكا والكوارتز، والغنية بالماغنسيوم والحديد تكوّن الأوليفين والبيروكسين.",
              "وتتبلور أيضًا من الفتحات الحرمائية؛ فالماء الذي تسخنه الصهارة (٤٠٠°م) يذيب المعادن ثم يبلورها مثل الأباتيت والكالسيت عندما يلامس ماء المحيط البارد (٢°م).",
              "تتكون التربة بتجوية الصخور وتحلل المواد العضوية؛ فالتربة المنقولة (دلتا النيل) نُقلت من مكان آخر، والتربة المتبقية الموضعية (مريوط والواحات) تكونت في مكانها.",
              "المعادن والوقود الأحفوري موارد غير متجددة، فيجب استخدام الطاقة المتجددة وإعادة تدوير المعادن واستخدام تقنيات موفرة للطاقة."]
          },
          story: {
            en: ["Rana visits the Egyptian Museum in Tahrir with her class and sees a small pot of ancient kohl.",
              "The guide says it was made from galena, a mineral with a metallic luster, mined in the Eastern Desert.",
              "Rana imagines deep magma cooling slowly for thousands of years, letting atoms line up into big shiny crystals.",
              "On the train home through the Delta, she looks at the dark farm soil: the Nile carried it from the Ethiopian plateau over millions of years.",
              "Her cousin in Siwa Oasis has a different soil: it formed right there from weathered limestone and sandstone."],
            ar: ["رنا تزور المتحف المصري بالتحرير مع فصلها وترى إناءً صغيرًا من الكحل القديم.",
              "يقول المرشد إنه صُنع من الجالينا، معدن له بريق فلزي، استُخرج من الصحراء الشرقية.",
              "تتخيل رنا صهارة عميقة تبرد ببطء آلاف السنين، فتصطف ذراتها في بلورات كبيرة لامعة.",
              "وفي القطار عبر الدلتا تنظر إلى تربة الحقول الداكنة؛ لقد حملها النيل من الهضبة الإثيوبية عبر ملايين السنين.",
              "أما ابن خالتها في واحة سيوة فتربته مختلفة؛ تكونت في مكانها من تجوية الحجر الجيري والرملي."]
          }
        },
        words: [
          ["Mineral", "المعدن", "Natural, solid, inorganic, crystalline, with a specific chemical composition.", "مادة طبيعية صلبة غير عضوية بلورية ذات تركيب كيميائي محدد."],
          ["Crystallization", "التبلور", "Excess dissolved salt collecting into crystals as a solution cools or becomes supersaturated.", "تجمع الملح الزائد المذاب في صورة بلورات عند تبريد المحلول أو فوق تشبعه."],
          ["Luster", "البريق", "How a mineral shines; galena has a metallic luster.", "مدى لمعان المعدن؛ للجالينا بريق فلزي."],
          ["Hydrothermal vents", "الفتحات الحرمائية", "Cracks near volcanoes where magma-heated water rises and minerals crystallize in cold sea water.", "شقوق قرب البراكين يصعد منها ماء سخنته الصهارة فتتبلور المعادن في ماء البحر البارد."],
          ["Soil", "التربة", "The surface layer of the crust from rock fragments and decomposed organic matter (humus).", "الطبقة السطحية للقشرة من فتات الصخور والمواد العضوية المتحللة (الدبال)."],
          ["Transported soil", "التربة المنقولة", "Soil broken down in one place and carried elsewhere, like the Nile Delta soil.", "تربة تفتتت في مكان ونُقلت إلى آخر، مثل تربة دلتا النيل."],
          ["Sedentary (residual) soil", "التربة المتبقية (الموضعية)", "Soil formed in place by slow weathering, like Mariout and Oasis soil.", "تربة تكونت في مكانها بالتجوية البطيئة، مثل تربة مريوط والواحات."]
        ],
        lab: { parts: [{ type: "prep2_crystal" }, {
          type: "sort",
          prompt: ["Tap a mineral, then tap its transparency.", "اضغط على المعدن، ثم اختر درجة شفافيته."],
          bins: [["op", "🧱", "Opaque", "معتم"], ["tl", "🌫️", "Translucent", "شبه شفاف"], ["tp", "💎", "Transparent", "شفاف"]],
          items: [[["Talc", "التلك"], "op"], [["Galena", "الجالينا"], "op"], [["Mica", "الميكا"], "tl"], [["Pure quartz", "الكوارتز النقي"], "tp"], [["Halite (salt crystal)", "الهاليت (بلورة الملح)"], "tp"]]
        }] },
        quiz: [
          { q: ["Why is opal called a mineraloid, not a mineral?", "لماذا يسمى الأوبال شبه معدن وليس معدنًا؟"],
            c: [["It is not crystalline", "لأنه ليس بلوريًا"], ["It has no luster", "لأنه بلا بريق"], ["It is a liquid", "لأنه سائل"], ["It is organic", "لأنه عضوي"]],
            off: ["Opal has a specific composition and luster but no crystalline structure, unlike halite.", "للأوبال تركيب محدد وبريق لكنه ليس له بناء بلوري، بعكس الهاليت."],
            sto: ["Halite's atoms stand in neat rows like a school line; opal's are a crowd.", "ذرات الهاليت تقف في صفوف منتظمة كطابور المدرسة، أما الأوبال فزحام."] },
          { q: ["When silica-rich magma solidifies it forms...", "عندما تتصلب الصهارة الغنية بالسيليكا تكوّن..."],
            c: [["quartz", "الكوارتز"], ["olivine", "الأوليفين"], ["pyroxene", "البيروكسين"], ["hematite", "الهيماتيت"]],
            off: ["Silica, potassium and sodium rich magma gives mica and quartz; magnesium and iron rich magma gives olivine and pyroxene.", "الصهارة الغنية بالسيليكا والبوتاسيوم والصوديوم تعطي الميكا والكوارتز، والغنية بالماغنسيوم والحديد تعطي الأوليفين والبيروكسين."],
            sto: ["Silica magma is the recipe for clear quartz.", "صهارة السيليكا هي وصفة الكوارتز الشفاف."] },
          { q: ["The mineral pyroxene contains relatively high amounts of...", "يحتوي معدن البيروكسين على نسب مرتفعة نسبيًا من..."],
            c: [["magnesium and iron", "الماغنسيوم والحديد"], ["potassium and sodium", "البوتاسيوم والصوديوم"], ["copper and iron", "النحاس والحديد"], ["magnesium and copper", "الماغنسيوم والنحاس"]],
            off: ["Mg and Fe rich magma crystallizes into olivine and pyroxene.", "الصهارة الغنية بالماغنسيوم والحديد تتبلور إلى أوليفين وبيروكسين."],
            sto: ["Dark, heavy pyroxene gets its colour from iron.", "البيروكسين الداكن الثقيل يأخذ لونه من الحديد."] },
          { q: ["Which property describes a mineral as opaque?", "أي خاصية تصف المعدن بأنه معتم؟"],
            c: [["Transparency", "الشفافية"], ["Colour", "اللون"], ["Luster", "البريق"], ["Scratch", "الخدش"]],
            off: ["Transparency is a mineral's ability to let light pass: talc opaque, mica translucent, quartz transparent.", "الشفافية قدرة المعدن على إنفاذ الضوء: التلك معتم، والميكا شبه شفافة، والكوارتز شفاف."],
            sto: ["Hold each mineral up to the window and see how much light gets through.", "ارفع كل معدن أمام النافذة وانظر كم يمر من الضوء."] },
          { q: ["The soil of the Nile Delta is...", "تربة دلتا النيل..."],
            c: [["transported river soil", "تربة منقولة نهرية"], ["residual sedentary soil", "تربة متبقية موضعية"], ["volcanic ash", "رماد بركاني"], ["made of opal", "من الأوبال"]],
            off: ["The Nile carried rock fragments from the Ethiopian plateau; its composition differs from the rock beneath it.", "حمل النيل فتات الصخور من الهضبة الإثيوبية، ويختلف تركيبها عن الصخور التي تحتها."],
            sto: ["The Nile is a delivery truck that brought Ethiopia's soil to Egypt's farms.", "النيل شاحنة توصيل جلبت تربة إثيوبيا إلى حقول مصر."] },
          { q: ["The soil of the Oases is...", "تربة الواحات..."],
            c: [["residual sedentary soil", "تربة متبقية موضعية"], ["river-transported soil", "تربة منقولة نهرية"], ["river-sedentary soil", "تربة نهرية موضعية"], ["residual transported soil", "تربة متبقية منقولة"]],
            off: ["It formed in place from weathering of sandy and limestone rocks, so it resembles the rock beneath it.", "تكونت في مكانها من تجوية الصخور الرملية والجيرية، فتشبه الصخر الذي تحتها."],
            sto: ["The oasis soil never travelled; it grew up at home.", "تربة الواحة لم تسافر؛ لقد نشأت في بيتها."] },
          { q: ["At hydrothermal vents, minerals crystallize when...", "عند الفتحات الحرمائية تتبلور المعادن عندما..."],
            c: [["hot mineral-rich water meets cold ocean water", "يلامس الماء الساخن الغني بالمعادن ماء المحيط البارد"], ["the water freezes into ice", "يتجمد الماء"], ["sunlight hits the sea floor", "تصل أشعة الشمس إلى القاع"], ["a meteorite falls", "يسقط نيزك"]],
            off: ["Water at about 400°C rises and cools in 2°C ocean water, so minerals like apatite and calcite crystallize.", "الماء عند نحو ٤٠٠°م يصعد ويبرد في ماء المحيط عند ٢°م فتتبلور معادن مثل الأباتيت والكالسيت."],
            sto: ["Like sugar syrup forming crystals when it cools on a cold plate.", "مثل الشربات يكوّن بلورات عندما يبرد على طبق بارد."] }
        ]
      }
    ]
  });
})();

/* ---------- Prep 2: objectives, extra quiz items, tappable diagrams ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var O = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var X = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};

  /* ----- "In this lesson" objectives (from the book's lesson objectives) ----- */
  O.prep2u1l1 = { en: ["Classify materials into solids, liquids and gases", "Compare shape, fluidity, compressibility and diffusion", "Use the particle theory to explain each state", "Discover the plasma state and its uses"],
    ar: ["تصنيف المواد إلى صلبة وسائلة وغازية", "مقارنة الشكل والسيولة وقابلية الانضغاط والانتشار", "استخدام النظرية الجزيئية لتفسير كل حالة", "التعرف على حالة البلازما وتطبيقاتها"] };
  O.prep2u1l2 = { en: ["Effect of heat on the state of matter", "Draw and read the heating curve of water", "Factors affecting melting and boiling points", "Reversible changes: boiling, evaporation, sublimation", "Factors affecting the rate of evaporation"],
    ar: ["أثر الحرارة على حالة المادة", "رسم منحنى تسخين الماء وقراءته", "العوامل المؤثرة على درجتي الانصهار والغليان", "التحولات العكسية: الغليان والتبخر والتسامي", "العوامل المؤثرة على معدل التبخر"] };
  O.prep2u1l3 = { en: ["Systems: open, closed and isolated", "Internal energy and temperature", "Effect of mass, type and state on temperature change", "Specific heat and its uses"],
    ar: ["الأنظمة: المفتوحة والمغلقة والمعزولة", "الطاقة الداخلية ودرجة الحرارة", "أثر الكتلة ونوع المادة وحالتها على تغير درجة الحرارة", "الحرارة النوعية واستخداماتها"] };
  O.prep2u1l4 = { en: ["Heat flow and thermal equilibrium", "Conduction: conductors and insulators", "Convection currents and the sea breeze", "Radiation, infrared and thermography"],
    ar: ["انتقال الحرارة والاتزان الحراري", "التوصيل: الموصلات والعوازل", "تيارات الحمل ونسيم البحر", "الإشعاع والأشعة تحت الحمراء والتصوير الحراري"] };
  O.prep2u2l1 = { en: ["Physical versus chemical change", "What happens to bonds in a chemical reaction", "Evidence of a reaction: precipitate, colour, gas, light and heat", "Properties before and after a reaction", "Reactions in daily life"],
    ar: ["التغير الفيزيائي والتغير الكيميائي", "ماذا يحدث للروابط في التفاعل الكيميائي", "دلائل التفاعل: راسب ولون وغاز وضوء وحرارة", "خواص المواد قبل التفاعل وبعده", "تفاعلات في الحياة اليومية"] };
  O.prep2u2l2 = { en: ["Write symbolic chemical equations with state symbols", "The law of conservation of mass", "Steps for balancing an equation", "Coefficients versus subscripts"],
    ar: ["كتابة المعادلات الرمزية برموز الحالة", "قانون بقاء الكتلة", "خطوات وزن المعادلة", "المعاملات والأرقام السفلية"] };
  O.prep2u2l3 = { en: ["Composition of carbohydrates, fats and proteins", "Detect glucose, starch, fat and protein", "Importance of nutrients in nutrition and industry", "Relation between carbohydrates and fats"],
    ar: ["تركيب الكربوهيدرات والدهون والبروتينات", "الكشف عن الجلوكوز والنشا والدهون والبروتين", "أهمية العناصر الغذائية في التغذية والصناعة", "العلاقة بين الكربوهيدرات والدهون"] };
  O.prep2u3l1 = { en: ["Van Helmont's experiment", "Structure of the chloroplast", "Chlorophyll and light absorption", "Light dependent and light independent reactions", "Factors affecting the rate of photosynthesis"],
    ar: ["تجربة فان هلمونت", "تركيب البلاستيدة الخضراء", "الكلوروفيل وامتصاص الضوء", "التفاعلات الضوئية واللاضوئية", "العوامل المؤثرة على معدل البناء الضوئي"] };
  O.prep2u3l2 = { en: ["Gas exchange versus cellular respiration", "Structure of the mitochondrion", "The two stages of cellular respiration", "Anabolism and catabolism"],
    ar: ["تبادل الغازات والتنفس الخلوي", "تركيب الميتوكوندريا", "مرحلتا التنفس الخلوي", "البناء والهدم"] };
  O.prep2u4l1 = { en: ["Wegener's continental drift", "The theory of tectonic plates", "Divergent, convergent and transform movement", "Earthquakes, volcanoes and meteorites"],
    ar: ["فرضية الانجراف القاري لفيجنر", "نظرية الألواح التكتونية", "الحركة التباعدية والتقاربية والانزلاقية", "الزلازل والبراكين والنيازك"] };
  O.prep2u4l2 = { en: ["Properties of minerals", "How minerals form: magma and hydrothermal vents", "How soil forms: transported and sedentary", "Non-renewable resources and sustainability"],
    ar: ["خواص المعادن", "كيف تتكون المعادن: الصهارة والفتحات الحرمائية", "كيف تتكون التربة: المنقولة والمتبقية", "الموارد غير المتجددة والاستدامة"] };

  /* ----- extra quiz items: one order/match + one true/false per lesson ----- */
  X.prep2u1l1 = [
    { k: "order", q: ["Order the states from the STRONGEST to the weakest attraction between particles.", "رتب الحالات من الأقوى إلى الأضعف في قوى التجاذب بين الجزيئات."],
      items: [["Solid", "الصلبة"], ["Liquid", "السائلة"], ["Gas", "الغازية"]],
      off: ["Very strong in solids, relatively weak in liquids, very weak in gases.", "كبيرة جدًا في الصلبة، وضعيفة نسبيًا في السائلة، وضعيفة جدًا في الغازية."],
      sto: ["Seated fans, walking fans, running fans.", "مشجعون جالسون، ثم يمشون، ثم يجرون."] },
    { k: "tf", a: false, q: ["True or false: pressing on a liquid in a sealed syringe greatly reduces its volume.", "صواب أم خطأ: الضغط على سائل في محقن مغلق يقلل حجمه كثيرًا."],
      off: ["False. Liquids keep their volume; only gases are compressible.", "خطأ؛ السوائل تحتفظ بحجمها، والغازات فقط قابلة للانضغاط."],
      sto: ["The water syringe stays stuck; only the air syringe gives way.", "محقن الماء لا يتحرك، ومحقن الهواء فقط يستجيب."] }
  ];
  X.prep2u1l2 = [
    { k: "match", q: ["Match each change to its example.", "صِل كل تحول بمثاله."],
      pairs: [[["Condensation", "التكثف"], ["Dew on leaves at dawn", "الندى على الأوراق فجرًا"]], [["Sublimation", "التسامي"], ["Dry ice making smoke", "الثلج الجاف يكوّن دخانًا"]],
        [["Deposition", "الترسيب"], ["Frost forming", "تكوّن الصقيع"]], [["Freezing", "التجمد"], ["Water in the freezer", "الماء في الفريزر"]]],
      off: ["Condensation: gas to liquid. Sublimation: solid to gas. Deposition: gas to solid. Freezing: liquid to solid.", "التكثف: غاز إلى سائل، والتسامي: صلب إلى غاز، والترسيب: غاز إلى صلب، والتجمد: سائل إلى صلب."],
      sto: ["Each change is a one-way ticket that can be reversed.", "كل تحول تذكرة ذهاب يمكن عكسها."] },
    { k: "tf", a: true, q: ["True or false: while water is boiling, its temperature stays constant.", "صواب أم خطأ: أثناء غليان الماء تبقى درجة حرارته ثابتة."],
      off: ["True. The heat weakens the attraction between particles instead of raising the temperature.", "صواب؛ الحرارة تُستخدم في إضعاف قوى التجاذب بدلًا من رفع درجة الحرارة."],
      sto: ["Mariam's thermometer froze at 100°C while the kettle bubbled.", "ترمومتر مريم ثبت عند ١٠٠°م والغلاية تفور."] }
  ];
  X.prep2u1l3 = [
    { k: "order", q: ["Order by specific heat, from LOWEST to highest.", "رتب حسب الحرارة النوعية من الأقل إلى الأكبر."],
      items: [["Mercury (140)", "الزئبق (١٤٠)"], ["Copper (385)", "النحاس (٣٨٥)"], ["Aluminium (900)", "الألومنيوم (٩٠٠)"], ["Corn oil (2000)", "زيت الذرة (٢٠٠٠)"], ["Water (4180)", "الماء (٤١٨٠)"]],
      off: ["Values in J/kg°C from the book's table; water has the highest.", "القيم بوحدة جول/كجم°م من جدول الكتاب، والماء أكبرها."],
      sto: ["Mercury warms with a whisper of heat; water needs a shout.", "الزئبق يسخن بهمسة حرارة، والماء يحتاج إلى صيحة."] },
    { k: "tf", a: false, q: ["True or false: two cups of water at the same temperature always have the same internal energy.", "صواب أم خطأ: كوبان من الماء لهما درجة الحرارة نفسها لهما دائمًا الطاقة الداخلية نفسها."],
      off: ["False. Internal energy also depends on the number of particles (mass).", "خطأ؛ الطاقة الداخلية تعتمد أيضًا على عدد الجزيئات (الكتلة)."],
      sto: ["Salma's bucket holds more particles than her cup.", "دلو سلمى فيه جزيئات أكثر من كوبها."] }
  ];
  X.prep2u1l4 = [
    { k: "match", q: ["Match each method of heat transfer to how it works.", "صِل كل طريقة لانتقال الحرارة بكيفية حدوثها."],
      pairs: [[["Conduction", "التوصيل"], ["Particles vibrate and pass energy on", "الجزيئات تهتز وتنقل الطاقة"]], [["Convection", "الحمل"], ["Warm fluid rises, cold fluid sinks", "المائع الساخن يصعد والبارد يهبط"]],
        [["Radiation", "الإشعاع"], ["Electromagnetic waves, even in a vacuum", "موجات كهرومغناطيسية حتى في الفراغ"]]],
      off: ["Conduction in solids, convection in fluids, radiation through space.", "التوصيل في الصلبة، والحمل في الموائع، والإشعاع عبر الفراغ."],
      sto: ["Pass the ball, ride the lift, or send a text message.", "مرّر الكرة، أو اركب المصعد، أو أرسل رسالة."] },
    { k: "tf", a: true, q: ["True or false: diamond is the best thermal conductor among natural elements.", "صواب أم خطأ: الماس أفضل موصل للحرارة بين العناصر الطبيعية."],
      off: ["True. Diamond comes first, followed by silver, then copper.", "صواب؛ الماس أولًا ثم الفضة ثم النحاس."],
      sto: ["The sparkling diamond is also a heat highway.", "الماس اللامع طريق سريع للحرارة أيضًا."] }
  ];
  X.prep2u2l1 = [
    { k: "match", q: ["Match each reaction to its evidence.", "صِل كل تفاعل بالدليل على حدوثه."],
      pairs: [[["Silver nitrate + sodium chloride", "نترات الفضة + كلوريد الصوديوم"], ["White precipitate", "راسب أبيض"]], [["Zinc + copper sulphate", "الخارصين + كبريتات النحاس"], ["Blue colour fades", "زوال اللون الأزرق"]],
        [["Magnesium + dilute HCl", "الماغنسيوم + HCl مخفف"], ["Hydrogen bubbles", "فقاعات هيدروجين"]], [["Burning magnesium", "احتراق الماغنسيوم"], ["Bright light and heat", "ضوء ساطع وحرارة"]]],
      off: ["Each reaction shows a different sign that new substances formed.", "كل تفاعل يظهر علامة مختلفة على تكوّن مواد جديدة."],
      sto: ["Four experiments, four clues for the detective.", "أربع تجارب وأربعة أدلة للمحقق."] },
    { k: "tf", a: false, q: ["True or false: every chemical reaction gives out heat.", "صواب أم خطأ: كل تفاعل كيميائي ينطلق منه حرارة."],
      off: ["False. All reactions break and form bonds and make new substances, but not all release heat.", "خطأ؛ كل التفاعلات تكسر روابط وتكوّن روابط ومواد جديدة، لكن ليست كلها تطلق حرارة."],
      sto: ["The book lists 'release of heat' as the exception.", "الكتاب يذكر «انطلاق الحرارة» على أنه الاستثناء."] }
  ];
  X.prep2u2l2 = [
    { k: "order", q: ["Put the steps for balancing an equation in order.", "رتب خطوات وزن المعادلة."],
      items: [["Write the correct formulas", "اكتب الصيغ الصحيحة"], ["Count the atoms of each element", "عدّ ذرات كل عنصر"], ["Adjust the coefficients", "عدّل المعاملات"], ["Check both sides are equal", "تأكد من تساوي الطرفين"]],
      off: ["Write, count, adjust coefficients (not subscripts), check with the simplest ratio.", "اكتب، ثم عدّ، ثم عدّل المعاملات (لا الأرقام السفلية)، ثم تحقق بأبسط نسبة."],
      sto: ["Like a recipe: ingredients, count, adjust, taste.", "مثل الوصفة: المكونات، ثم العد، ثم الضبط، ثم التذوق."] },
    { k: "tf", a: true, q: ["True or false: in " + eq("N₂ + 3H₂ → 2NH₃") + " there are 6 hydrogen atoms on each side.", "صواب أم خطأ: في " + eq("N₂ + 3H₂ → 2NH₃") + " توجد ٦ ذرات هيدروجين في كل طرف."],
      off: ["True: 3 × 2 = 6 on the left and 2 × 3 = 6 on the right.", "صواب: ٣ × ٢ = ٦ في اليسار و٢ × ٣ = ٦ في اليمين."],
      sto: ["Six white Lego bricks before and six after.", "ستة مكعبات ليجو بيضاء قبل وستة بعد."] }
  ];
  X.prep2u2l3 = [
    { k: "match", q: ["Match each reagent to the nutrient it detects.", "صِل كل كاشف بالعنصر الغذائي الذي يكشف عنه."],
      pairs: [[["Iodine solution", "محلول اليود"], ["Starch (dark blue)", "النشا (أزرق داكن)"]], [["Benedict's solution + heat", "محلول بندكت + تسخين"], ["Glucose (green to orange)", "الجلوكوز (أخضر إلى برتقالي)"]],
        [["Sudan (IV)", "سودان ٤"], ["Fat (red)", "الدهون (أحمر)"]], [["Biuret solution", "محلول بيوريت"], ["Protein (violet)", "البروتين (بنفسجي)"]]],
      off: ["Each reagent changes colour with one nutrient.", "كل كاشف يتغير لونه مع عنصر غذائي واحد."],
      sto: ["Four colour keys for four food locks.", "أربعة مفاتيح ألوان لأربعة أقفال غذائية."] },
    { k: "tf", a: true, q: ["True or false: amino acids contain nitrogen in addition to carbon, hydrogen and oxygen.", "صواب أم خطأ: الأحماض الأمينية تحتوي على النيتروجين بالإضافة إلى الكربون والهيدروجين والأكسجين."],
      off: ["True. That nitrogen is what makes proteins different from carbohydrates and fats.", "صواب؛ النيتروجين هو ما يميز البروتينات عن الكربوهيدرات والدهون."],
      sto: ["Protein carries an extra passport stamp: N.", "البروتين يحمل ختمًا إضافيًا في جوازه: N."] }
  ];
  X.prep2u3l1 = [
    { k: "order", q: ["Order the iodine test on a leaf.", "رتب خطوات اختبار اليود على الورقة."],
      items: [["Boil the leaf in water", "اغمر الورقة في ماء يغلي"], ["Warm it in ethanol to remove chlorophyll", "سخنها في الإيثانول لإزالة الكلوروفيل"], ["Wash it with water", "اغسلها بالماء"], ["Add iodine drops", "أضف قطرات اليود"]],
      off: ["Boiling breaks cell walls; ethanol removes the green colour; washing softens; iodine shows starch.", "الغليان يكسر جدر الخلايا، والإيثانول يزيل اللون الأخضر، والغسل يلين الورقة، واليود يكشف النشا."],
      sto: ["Open, clean, rinse, then reveal the hidden starch.", "افتح، ونظف، واشطف، ثم اكشف النشا المختبئ."] },
    { k: "tf", a: false, q: ["True or false: the light independent reactions take place on the thylakoid membranes.", "صواب أم خطأ: التفاعلات اللاضوئية تحدث على أغشية الثايلاكويدات."],
      off: ["False. They take place in the stroma; the light dependent reactions are on the thylakoids.", "خطأ؛ تحدث في الحشوة، أما التفاعلات الضوئية فعلى الثايلاكويدات."],
      sto: ["Panels on the roof catch light; the kitchen downstairs cooks the sugar.", "الألواح فوق السطح تلتقط الضوء، والمطبخ في الأسفل يطهو السكر."] }
  ];
  X.prep2u3l2 = [
    { k: "order", q: ["Order the path of glucose in cellular respiration.", "رتب مسار الجلوكوز في التنفس الخلوي."],
      items: [["Glucose enters the cytoplasm", "يدخل الجلوكوز السيتوبلازم"], ["It splits into two pyruvic acid molecules", "يتكسر إلى جزيئين من حمض البيروفيك"], ["Pyruvic acid moves into the mitochondria", "ينتقل حمض البيروفيك إلى الميتوكوندريا"], ["With oxygen: lots of energy, water and CO₂", "مع الأكسجين: طاقة كبيرة وماء وثاني أكسيد الكربون"]],
      off: ["Stage 1 in the cytoplasm without oxygen, stage 2 in the mitochondria with oxygen.", "المرحلة الأولى في السيتوبلازم بدون أكسجين، والثانية في الميتوكوندريا مع الأكسجين."],
      sto: ["Cut the fuel at the gate, then burn it in the power station.", "قطّع الوقود عند البوابة ثم احرقه في المحطة."] },
    { k: "tf", a: true, q: ["True or false: methylene blue loses its colour when oxygen is used up.", "صواب أم خطأ: محلول أزرق الميثيلين يزول لونه عند استهلاك الأكسجين."],
      off: ["True. It is used to show that respiration consumes oxygen.", "صواب؛ ويُستخدم لإثبات أن التنفس يستهلك الأكسجين."],
      sto: ["The blue fades as the plant uses up the jar's oxygen at night.", "يبهت الأزرق كلما استهلك النبات أكسجين الناقوس ليلًا."] }
  ];
  X.prep2u4l1 = [
    { k: "match", q: ["Match each plate movement to the feature it made.", "صِل كل حركة للألواح بالمعلم الذي كوّنته."],
      pairs: [[["Divergent", "تباعدية"], ["The Red Sea", "البحر الأحمر"]], [["Continental + continental", "قاري + قاري"], ["The Himalayas", "الهيمالايا"]],
        [["Oceanic + oceanic", "محيطي + محيطي"], ["The Japanese islands", "جزر اليابان"]], [["Transform", "انزلاقية"], ["San Andreas fault", "صدع سان أندرياس"]]],
      off: ["Apart: new sea. Crash: mountains or island arcs. Slide: faults.", "التباعد: بحر جديد، والتصادم: جبال أو أقواس جزر، والانزلاق: صدوع."],
      sto: ["Four plate dances, four landscapes.", "أربع رقصات للألواح، وأربعة مناظر طبيعية."] },
    { k: "tf", a: true, q: ["True or false: earthquakes and volcanoes are distributed in a pattern along plate boundaries.", "صواب أم خطأ: تتوزع الزلازل والبراكين في نمط على حدود الألواح."],
      off: ["True. They do not occur randomly; they follow the plate boundaries.", "صواب؛ فهي لا تحدث عشوائيًا بل تتبع حدود الألواح."],
      sto: ["Draw them on a map and you trace the edges of the plates.", "ارسمها على الخريطة فترسم حواف الألواح."] }
  ];
  X.prep2u4l2 = [
    { k: "match", q: ["Match each mineral to its property or origin.", "صِل كل معدن بخاصيته أو أصله."],
      pairs: [[["Galena", "الجالينا"], ["Metallic luster, ancient kohl", "بريق فلزي، الكحل القديم"]], [["Sulphur", "الكبريت"], ["Yellow element mineral", "معدن عنصري أصفر"]],
        [["Hematite", "الهيماتيت"], ["Red iron oxide, Eastern Desert", "أكسيد حديد أحمر، الصحراء الشرقية"]], [["Olivine", "الأوليفين"], ["From Mg and Fe rich magma", "من صهارة غنية بالماغنسيوم والحديد"]]],
      off: ["Minerals are identified by properties like colour, luster and transparency, and by how they formed.", "تُميز المعادن بخواص مثل اللون والبريق والشفافية، وبطريقة تكوّنها."],
      sto: ["A museum tour of Egypt's minerals.", "جولة في متحف معادن مصر."] },
    { k: "tf", a: false, q: ["True or false: most Egyptian soil is residual sedentary soil.", "صواب أم خطأ: معظم تربة مصر تربة متبقية موضعية."],
      off: ["False. Most Egyptian soil is transported soil, like the Nile Delta.", "خطأ؛ معظم التربة المصرية تربة منقولة مثل دلتا النيل."],
      sto: ["The Nile delivered most of Egypt's farmland.", "النيل هو من وصّل معظم أرض مصر الزراعية."] }
  ];

  /* ----- tappable diagrams (viewBox 0 0 400 240) ----- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 12) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function balls(x0, y0, w, h, n, r, c, seed) {
    var s = "", k = seed || 7;
    for (var i = 0; i < n; i++) { k = (k * 9301 + 49297) % 233280; var a = k / 233280; k = (k * 9301 + 49297) % 233280; var b = k / 233280; s += '<circle cx="' + (x0 + r + a * (w - 2 * r)).toFixed(1) + '" cy="' + (y0 + r + b * (h - 2 * r)).toFixed(1) + '" r="' + r + '" fill="' + c + '"/>'; }
    return s;
  }
  function arrowDef(id, c) { return '<defs><marker id="' + id + '" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="' + c + '"/></marker></defs>'; }

  D.prep2u1l1 = {
    title: ["Particles in the three states", "الجزيئات في الحالات الثلاث"],
    svg: function () {
      var s = "", i, j;
      [[20, "solid"], [150, "liquid"], [280, "gas"]].forEach(function (b) { s += '<rect x="' + b[0] + '" y="40" width="100" height="120" rx="8" fill="var(--bg-2)" stroke="var(--muted)" stroke-width="2"/>'; });
      for (i = 0; i < 5; i++) for (j = 0; j < 5; j++) s += '<circle cx="' + (34 + i * 18) + '" cy="' + (82 + j * 17) + '" r="7.5" fill="#3b82f6"/>';
      s += balls(152, 95, 96, 63, 18, 7.5, "#3b82f6", 11) + balls(282, 42, 96, 116, 7, 7.5, "#3b82f6", 5);
      s += tx(70, 180, t("Solid", "صلبة")) + tx(200, 180, t("Liquid", "سائلة")) + tx(330, 180, t("Gas", "غازية"));
      s += tx(200, 220, t("attraction gets weaker →", "قوى التجاذب تضعف ←"), mut);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [70, 110, ["Solid", "الصلبة"], ["Very strong attraction, tiny spaces: particles only vibrate, so shape and volume are fixed.", "قوى تجاذب كبيرة جدًا ومسافات بينية صغيرة جدًا؛ الجزيئات تهتز فقط، فيثبت الشكل والحجم."]],
      [200, 125, ["Liquid", "السائلة"], ["Weaker attraction, larger spaces: particles slide past each other, so liquids flow and take the container's shape.", "قوى أضعف ومسافات أكبر؛ الجزيئات تنزلق بجوار بعضها، فينساب السائل ويأخذ شكل الإناء."]],
      [330, 90, ["Gas", "الغازية"], ["Very weak attraction: particles move freely and fill the container. Large spaces make gases compressible.", "قوى ضعيفة جدًا؛ الجزيئات تتحرك بحرية وتملأ الإناء، والمسافات الكبيرة تجعل الغاز قابلًا للانضغاط."]],
      [200, 210, ["Cause and effect", "السبب والنتيجة"], ["Different attraction forces (cause) give different properties (effect).", "اختلاف قوى التجاذب (السبب) يؤدي إلى اختلاف الخواص (النتيجة)."]],
      [330, 180, ["Plasma: the fourth state", "البلازما: الحالة الرابعة"], ["Heat or ionize a gas enough and it becomes positive ions and free electrons, as in the Sun and lightning.", "عند تأين الغاز يتحول إلى أيونات موجبة وإلكترونات حرة، كما في الشمس والبرق."]]
    ]
  };

  D.prep2u1l2 = {
    title: ["The heating curve of water", "منحنى تسخين الماء"],
    svg: function () {
      var s = arrowDef("p2a1", "var(--muted)");
      s += '<path d="M50 210 L50 20 M50 210 L385 210" stroke="var(--muted)" stroke-width="2" fill="none"/>';
      s += '<path d="M50 190 L100 160 L170 160 L230 70 L340 70 L380 40" stroke="#f97316" stroke-width="4" fill="none" stroke-linejoin="round"/>';
      s += '<path d="M50 160 L385 160 M50 70 L385 70" stroke="var(--line)" stroke-dasharray="4 4"/>';
      s += tx(30, 164, "0") + tx(28, 74, "100") + tx(28, 18, "°C", mut) + tx(372, 228, t("time", "الزمن"), mut);
      s += tx(75, 196, t("ice", "ثلج"), mut) + tx(135, 150, t("ice + water", "ثلج + ماء"), mut) + tx(212, 130, t("water", "ماء"), mut) + tx(285, 60, t("water + vapour", "ماء + بخار"), mut) + tx(372, 30, t("vapour", "بخار"), mut);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [75, 176, ["Ice warms", "الثلج يسخن"], ["Gaining heat raises the kinetic energy of the particles, so the temperature rises.", "اكتساب الحرارة يزيد طاقة حركة الجزيئات فترتفع درجة الحرارة."]],
      [135, 160, ["Melting point plateau", "ثبات درجة الانصهار"], ["At 0°C the temperature stays constant until all the ice melts: heat weakens the attraction forces.", "عند صفر°م تثبت درجة الحرارة حتى ينصهر الثلج كله، فالحرارة تُضعف قوى التجاذب."]],
      [200, 115, ["Water warms", "الماء يسخن"], ["The liquid gains heat and its temperature rises to the boiling point.", "يكتسب السائل حرارة فترتفع درجة حرارته حتى درجة الغليان."]],
      [285, 70, ["Boiling point plateau", "ثبات درجة الغليان"], ["At 100°C (1 atm) the water and its vapour stay at the same temperature until all of it boils.", "عند ١٠٠°م (١ ض.ج) يثبت الماء وبخاره عند الدرجة نفسها حتى يتم الغليان."]],
      [28, 74, ["Pressure matters", "أثر الضغط"], ["On a 3000 m mountain water boils at about 90°C; in a pressure cooker above 100°C.", "على جبل ارتفاعه ٣٠٠٠ م يغلي الماء عند نحو ٩٠°م، وفي حلة الضغط فوق ١٠٠°م."]]
    ]
  };

  D.prep2u1l3 = {
    title: ["System, surroundings and internal energy", "النظام والوسط المحيط والطاقة الداخلية"],
    svg: function () {
      var s = '<rect x="10" y="10" width="380" height="200" rx="14" fill="var(--orange-soft)"/>';
      s += '<ellipse cx="200" cy="112" rx="120" ry="78" fill="var(--card)" stroke="#f97316" stroke-width="3" stroke-dasharray="8 6"/>';
      s += '<path d="M150 70 L150 160 Q150 172 162 172 L238 172 Q250 172 250 160 L250 70" fill="#bfdbfe" stroke="var(--muted)" stroke-width="3"/>';
      s += balls(155, 100, 90, 70, 14, 5, "#2563eb", 3);
      s += '<path d="M200 205 q-10 -14 0 -26 q10 12 0 26z" fill="#f97316"/>';
      s += tx(60, 30, t("surroundings", "الوسط المحيط"), mut) + tx(330, 60, t("boundary", "الحد"), mut) + tx(200, 60, t("system", "النظام"));
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 130, ["The system", "النظام"], ["The part under study: here, the water. Its particles have kinetic and potential energy.", "الجزء الخاضع للدراسة، وهو هنا الماء، ولجزيئاته طاقة حركة وطاقة وضع."]],
      [318, 72, ["Boundary", "الحد"], ["Separates the system from the surroundings.", "يفصل النظام عن الوسط المحيط."]],
      [60, 40, ["Surroundings and system type", "الوسط المحيط ونوع النظام"], ["An open beaker exchanges energy and matter with the surroundings, so it is an open system.", "الكأس المفتوحة تتبادل الطاقة والمادة مع الوسط المحيط، فهي نظام مفتوح."]],
      [200, 192, ["Heat in", "دخول الحرارة"], ["Heat raises the particles' kinetic energy, so both temperature and internal energy rise.", "الحرارة تزيد طاقة حركة الجزيئات، فترتفع درجة الحرارة والطاقة الداخلية."]],
      [168, 110, ["Temperature", "درجة الحرارة"], ["The average kinetic energy of the particles. Internal energy is the total of all their energies.", "متوسط طاقة حركة الجزيئات، أما الطاقة الداخلية فمجموع طاقاتها كلها."]]
    ]
  };

  D.prep2u1l4 = {
    title: ["Three ways heat travels", "ثلاث طرق لانتقال الحرارة"],
    svg: function () {
      var s = arrowDef("p2a2", "#ef4444");
      s += '<circle cx="60" cy="50" r="26" fill="#facc15"/><path d="M95 60 L150 95" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#p2a2)"/>';
      s += '<path d="M150 150 L250 150 L240 205 L160 205 Z" fill="#bfdbfe" stroke="var(--muted)" stroke-width="3"/>';
      s += '<path d="M185 195 C170 170 175 160 200 158 M215 195 C230 170 225 160 200 158" stroke="#ef4444" stroke-width="2.5" fill="none" marker-end="url(#p2a2)"/>';
      s += '<rect x="245" y="140" width="130" height="8" rx="4" fill="#b45309"/><circle cx="200" cy="220" r="0" />';
      s += '<path d="M190 222 q-6 -10 0 -18 q6 8 0 18z" fill="#f97316"/><path d="M210 222 q-6 -10 0 -18 q6 8 0 18z" fill="#f97316"/>';
      s += tx(310, 132, t("metal spoon", "ملعقة معدنية"), mut) + tx(60, 92, t("Sun", "الشمس"), mut) + tx(200, 140, t("soup", "شوربة"), mut);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [120, 78, ["Radiation", "الإشعاع"], ["Electromagnetic waves carry heat through empty space at 300,000 km/s; infrared rays warm what absorbs them.", "موجات كهرومغناطيسية تنقل الحرارة عبر الفراغ بسرعة ٣٠٠ ألف كم/ث، والأشعة تحت الحمراء تدفئ ما يمتصها."]],
      [200, 178, ["Convection", "الحمل"], ["Hot soup at the bottom becomes less dense and rises; cooler soup sinks: convection currents.", "الشوربة الساخنة في القاع تقل كثافتها فتصعد والأبرد تهبط؛ إنها تيارات الحمل."]],
      [330, 144, ["Conduction", "التوصيل"], ["Particles of the metal spoon vibrate and pass energy along without leaving their places.", "جزيئات الملعقة المعدنية تهتز وتنقل الطاقة على طولها دون أن تترك أماكنها."]],
      [200, 214, ["Heat source", "مصدر الحرارة"], ["Heat always flows from hotter to colder until thermal equilibrium.", "تنتقل الحرارة دائمًا من الأسخن إلى الأبرد حتى الاتزان الحراري."]],
      [60, 50, ["Dark versus shiny", "الداكن واللامع"], ["Dark opaque objects absorb infrared better than shiny ones, so solar heater pipes are black.", "الأجسام الداكنة المعتمة تمتص الأشعة تحت الحمراء أكثر من اللامعة، لذا تُطلى أنابيب السخان الشمسي بالأسود."]]
    ]
  };

  D.prep2u2l1 = {
    title: ["Bonds break, atoms rearrange", "روابط تنكسر وذرات يُعاد ترتيبها"],
    svg: function () {
      var s = arrowDef("p2a3", "var(--muted)");
      function m(x, y, a, b) { return '<line x1="' + x + '" y1="' + y + '" x2="' + (x + 26) + '" y2="' + y + '" stroke="var(--muted)" stroke-width="4"/><circle cx="' + x + '" cy="' + y + '" r="13" fill="' + a + '"/><circle cx="' + (x + 26) + '" cy="' + y + '" r="13" fill="' + b + '"/>'; }
      s += m(30, 80, "#ef4444", "#ef4444") + m(30, 140, "#3b82f6", "#3b82f6");
      s += '<circle cx="165" cy="70" r="13" fill="#ef4444"/><circle cx="205" cy="90" r="13" fill="#ef4444"/><circle cx="170" cy="145" r="13" fill="#3b82f6"/><circle cx="210" cy="125" r="13" fill="#3b82f6"/>';
      s += m(300, 80, "#ef4444", "#3b82f6") + m(300, 140, "#ef4444", "#3b82f6");
      s += '<path d="M95 110 L140 110" stroke="var(--muted)" stroke-width="3" marker-end="url(#p2a3)"/><path d="M235 110 L280 110" stroke="var(--muted)" stroke-width="3" marker-end="url(#p2a3)"/>';
      s += tx(55, 190, t("reactants", "المتفاعلات")) + tx(188, 190, t("bonds broken", "روابط مكسورة")) + tx(325, 190, t("products", "النواتج"));
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [55, 110, ["Reactants", "المتفاعلات"], ["The substances that react; their atoms are joined by bonds.", "المواد المتفاعلة، وذراتها مرتبطة بروابط."]],
      [118, 100, ["Step 1: break bonds", "الخطوة ١: كسر الروابط"], ["Bonds between atoms of the reactant molecules break.", "تنكسر الروابط بين ذرات جزيئات المتفاعلات."]],
      [188, 108, ["Atoms rearrange", "إعادة ترتيب الذرات"], ["The same atoms are rearranged; none are lost or created.", "الذرات نفسها يُعاد ترتيبها؛ لا يضيع شيء ولا يُخلق شيء."]],
      [258, 100, ["Step 2: form new bonds", "الخطوة ٢: تكوين روابط جديدة"], ["New bonds form between atoms of the product molecules.", "تتكون روابط جديدة بين ذرات جزيئات النواتج."]],
      [325, 110, ["Products and evidence", "النواتج والدلائل"], ["New substances with new properties: look for a precipitate, colour change, gas, or light and heat.", "مواد جديدة بخواص جديدة؛ ابحث عن راسب أو تغير لون أو غاز أو ضوء وحرارة."]]
    ]
  };

  D.prep2u2l2 = {
    title: ["Reading a balanced equation", "قراءة معادلة موزونة"],
    svg: function () {
      var s = '<rect x="10" y="40" width="380" height="70" rx="12" fill="var(--blue-soft)"/>';
      s += '<text x="200" y="86" font-size="30" font-weight="800" text-anchor="middle" font-family="Nunito,sans-serif" style="fill:var(--ink)">N₂(g) + 3H₂(g) → 2NH₃(g)</text>';
      s += '<path d="M60 170 L340 170 M200 170 L200 215 M170 215 L230 215" stroke="var(--muted)" stroke-width="4" fill="none"/>';
      s += '<path d="M60 170 L40 195 L80 195 Z M340 170 L320 195 L360 195 Z" fill="var(--line)" stroke="var(--muted)" stroke-width="2"/>';
      s += tx(60, 150, t("2 N · 6 H", "٢ N · ٦ H")) + tx(340, 150, t("2 N · 6 H", "٢ N · ٦ H"));
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [130, 75, ["Coefficient", "المعامل"], ["The 3 in 3H₂ means three hydrogen molecules. Coefficients are what you change to balance.", "الرقم ٣ في 3H₂ يعني ثلاثة جزيئات هيدروجين، والمعاملات هي ما نغيره عند الوزن."]],
      [80, 98, ["Subscript", "الرقم السفلي"], ["The 2 in N₂ is atoms in one molecule. Never change it, or you change the substance.", "الرقم ٢ في N₂ عدد الذرات في الجزيء الواحد، ولا يُغيّر أبدًا وإلا تغيرت المادة."]],
      [100, 60, ["State symbol", "رمز الحالة"], ["(g) gas, (l) liquid, (s) solid or precipitate, (v) vapour, (aq) aqueous solution.", "(g) غاز، (l) سائل، (s) صلب أو راسب، (v) بخار، (aq) محلول مائي."]],
      [225, 75, ["The arrow", "السهم"], ["Points from reactants to products; conditions like heat or a catalyst are written on it.", "يتجه من المتفاعلات إلى النواتج، وتُكتب عليه الظروف مثل التسخين أو العامل الحفاز."]],
      [200, 190, ["Balanced = conservation of mass", "الوزن = بقاء الكتلة"], ["Equal atoms of each element on both sides, so total mass is conserved (Lavoisier).", "تساوي ذرات كل عنصر في الطرفين، فتبقى الكتلة الكلية ثابتة (لافوازييه)."]]
    ]
  };

  D.prep2u2l3 = {
    title: ["Four food tests", "أربعة كشوف غذائية"],
    svg: function () {
      var s = "", cols = [["#eab308", "#1e3a8a"], ["#2563eb", "#f97316"], ["#fde68a", "#dc2626"], ["#3b82f6", "#7c3aed"]];
      var names = [[t("Iodine", "اليود"), t("starch", "نشا")], [t("Benedict", "بندكت"), t("glucose", "جلوكوز")], [t("Sudan IV", "سودان ٤"), t("fat", "دهون")], [t("Biuret", "بيوريت"), t("protein", "بروتين")]];
      cols.forEach(function (c, i) {
        var x = 30 + i * 92;
        s += '<path d="M' + x + ' 50 L' + x + ' 165 Q' + x + ' 185 ' + (x + 20) + ' 185 Q' + (x + 40) + ' 185 ' + (x + 40) + ' 165 L' + (x + 40) + ' 50" fill="none" stroke="var(--muted)" stroke-width="3"/>';
        s += '<rect x="' + (x + 2) + '" y="105" width="18" height="78" fill="' + c[0] + '"/><rect x="' + (x + 20) + '" y="105" width="18" height="78" fill="' + c[1] + '"/>';
        s += tx(x + 20, 36, names[i][0]) + tx(x + 20, 205, names[i][1], mut);
      });
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [50, 130, ["Iodine test", "كشف اليود"], ["Yellowish-brown iodine turns dark blue with starch (potato, bread).", "اليود البني المصفر يتحول إلى الأزرق الداكن مع النشا (البطاطس والخبز)."]],
      [142, 130, ["Benedict's test", "كشف بندكت"], ["Blue Benedict's solution heated in a water bath turns green, orange or red with more glucose.", "محلول بندكت الأزرق المسخن في حمام مائي يتحول إلى الأخضر أو البرتقالي أو الأحمر كلما زاد الجلوكوز."]],
      [234, 130, ["Sudan (IV) test", "كشف سودان ٤"], ["Gives a red colour on the surface of mixtures containing fat (egg yolk).", "يعطي لونًا أحمر على سطح المخاليط المحتوية على دهون (صفار البيض)."]],
      [326, 130, ["Biuret test", "كشف بيوريت"], ["Changes from blue to violet with proteins (egg white).", "يتحول من الأزرق إلى البنفسجي مع البروتينات (بياض البيض)."]],
      [188, 220, ["Why test food?", "لماذا نكشف عن الطعام؟"], ["A person who suspects diabetes can check glucose; labels tell us nutrients in packaged food.", "من يشك في إصابته بالسكري يمكنه الكشف عن الجلوكوز، وبطاقات الغذاء توضح العناصر في الأطعمة المعبأة."]]
    ]
  };

  D.prep2u3l1 = {
    title: ["Inside a chloroplast", "داخل البلاستيدة الخضراء"],
    svg: function () {
      var s = '<ellipse cx="200" cy="115" rx="185" ry="95" fill="#bbf7d0" stroke="#15803d" stroke-width="4"/><ellipse cx="200" cy="115" rx="175" ry="85" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>';
      [[90, 90], [150, 140], [220, 85], [290, 135]].forEach(function (g) { for (var i = 0; i < 5; i++) s += '<rect x="' + (g[0] - 18) + '" y="' + (g[1] - 22 + i * 9) + '" width="36" height="7" rx="3.5" fill="#16a34a"/>'; });
      s += '<path d="M108 100 L132 140 M168 140 L202 95 M238 95 L272 140" stroke="#16a34a" stroke-width="3"/>';
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 24, ["Double membrane", "الغشاء المزدوج"], ["Outer and inner membranes let substances move in and out of the plastid.", "غشاءان خارجي وداخلي يسمحان بدخول المواد وخروجها."]],
      [90, 90, ["Granum", "البذيرة (الجرانم)"], ["A stack of 15 or more thylakoids. The light dependent reactions happen here.", "كومة من ١٥ ثايلاكويد أو أكثر، تحدث فيها التفاعلات الضوئية."]],
      [290, 120, ["Thylakoid and chlorophyll", "الثايلاكويد والكلوروفيل"], ["Thylakoid membranes hold chlorophyll, which absorbs red and blue light and splits water, releasing oxygen.", "أغشية الثايلاكويدات تحمل الكلوروفيل الذي يمتص الضوء الأحمر والأزرق ويحلل الماء فينطلق الأكسجين."]],
      [210, 175, ["Stroma", "الحشوة"], ["Fluid with enzymes: hydrogen joins CO₂ to make glucose (light independent reactions).", "سائل به إنزيمات؛ يتحد الهيدروجين مع ثاني أكسيد الكربون لتكوين الجلوكوز (التفاعلات اللاضوئية)."]],
      [185, 118, ["Thin connecting membrane", "الغشاء الرابط الرقيق"], ["Links thylakoids of neighbouring grana, increasing the surface exposed to light.", "يربط ثايلاكويدات البذيرات المتجاورة فيزيد المساحة المعرضة للضوء."]]
    ]
  };

  D.prep2u3l2 = {
    title: ["Inside a mitochondrion", "داخل الميتوكوندريا"],
    svg: function () {
      var s = '<ellipse cx="200" cy="115" rx="180" ry="90" fill="#fed7aa" stroke="#c2410c" stroke-width="4"/>';
      s += '<path d="M40 115 Q60 50 80 115 Q100 180 120 115 Q140 50 160 115 Q180 180 200 115 Q220 50 240 115 Q260 180 280 115 Q300 50 320 115 Q340 180 360 115" fill="none" stroke="#ea580c" stroke-width="5"/>';
      s += '<circle cx="110" cy="80" r="4" fill="#7c2d12"/><circle cx="230" cy="150" r="4" fill="#7c2d12"/><circle cx="300" cy="85" r="4" fill="#7c2d12"/>';
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 26, ["Outer membrane", "الغشاء الخارجي"], ["Protects the mitochondrion and regulates what enters and leaves.", "يحمي مكونات الميتوكوندريا وينظم دخول المواد وخروجها."]],
      [140, 70, ["Cristae", "الأعراف"], ["Folds of the inner membrane that increase surface area so more energy is produced.", "انثناءات الغشاء الداخلي تزيد المساحة فتُنتج طاقة أكبر."]],
      [230, 150, ["Matrix", "الحشوة"], ["Fluid with the enzymes that catalyse the reactions of stage 2.", "سائل به الإنزيمات التي تحفز تفاعلات المرحلة الثانية."]],
      [60, 160, ["Stage 2 here", "المرحلة الثانية هنا"], ["With oxygen, pyruvic acid gives a large amount of energy, water and CO₂.", "في وجود الأكسجين يعطي حمض البيروفيك طاقة كبيرة وماء وثاني أكسيد الكربون."]],
      [340, 60, ["Power stations", "محطات الطاقة"], ["Muscle and liver cells need lots of energy, so they contain many mitochondria.", "خلايا العضلات والكبد تحتاج إلى طاقة كبيرة، فتحتوي على ميتوكوندريا كثيرة."]]
    ]
  };

  D.prep2u4l1 = {
    title: ["Plate boundaries", "حدود الألواح"],
    svg: function () {
      var s = arrowDef("p2a4", "#7c2d12");
      s += '<rect x="0" y="150" width="400" height="90" fill="#fdba74"/><rect x="0" y="95" width="400" height="30" fill="#93c5fd"/>';
      s += '<path d="M0 125 L120 125 L120 150 L0 150 Z" fill="#a8a29e"/><path d="M140 125 L250 125 L250 150 L140 150 Z" fill="#78716c"/><path d="M250 110 L400 110 L400 150 L250 150 Z" fill="#a16207"/>';
      s += '<path d="M120 150 L140 150 L134 125 L126 125 Z" fill="#ef4444"/><path d="M250 150 L240 190" stroke="#57534e" stroke-width="10"/>';
      s += '<path d="M300 110 L320 70 L340 110 Z" fill="#78350f"/><path d="M318 70 q2 -10 6 -14" stroke="#ef4444" stroke-width="3" fill="none"/>';
      s += '<path d="M60 200 C60 175 110 175 110 200" stroke="#7c2d12" stroke-width="2.5" fill="none" marker-end="url(#p2a4)"/><path d="M200 200 C200 175 150 175 150 200" stroke="#7c2d12" stroke-width="2.5" fill="none" marker-end="url(#p2a4)"/>';
      s += tx(60, 88, t("ocean", "محيط"), mut) + tx(330, 140, t("continent", "قارة"), mut) + tx(330, 230, t("mantle", "الوشاح"), mut);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [130, 135, ["Divergent boundary", "حدود تباعدية"], ["Plates move apart; magma rises and makes new oceanic crust, as in the Red Sea.", "تتباعد الألواح فتصعد الصهارة وتتكون قشرة محيطية جديدة، كما في البحر الأحمر."]],
      [250, 175, ["Convergent: subduction", "تقاربية: انزلاق تحتي"], ["The denser oceanic plate slides under the continental plate (Andes).", "اللوح المحيطي الأكثف ينزلق تحت اللوح القاري (الأنديز)."]],
      [320, 85, ["Volcano", "البركان"], ["Melted rock rises through cracks and erupts at the boundary.", "الصخور المنصهرة تصعد خلال الشقوق وتثور عند الحدود."]],
      [130, 195, ["Convection currents", "تيارات الحمل"], ["Currents in the asthenosphere slowly move the plates.", "تيارات في الغلاف المائع تحرك الألواح ببطء."]],
      [60, 138, ["Oceanic versus continental", "المحيطي والقاري"], ["Oceanic crust is thin and dense; continental crust is thick and less dense.", "القشرة المحيطية رقيقة وكثيفة، والقارية سميكة وأقل كثافة."]]
    ]
  };

  D.prep2u4l2 = {
    title: ["From rock to soil", "من الصخر إلى التربة"],
    svg: function () {
      var s = '<rect x="0" y="40" width="400" height="30" fill="#78350f"/><rect x="0" y="70" width="400" height="50" fill="#a16207"/>';
      s += balls(0, 120, 400, 50, 26, 9, "#a8a29e", 9) + '<rect x="0" y="170" width="400" height="70" fill="#78716c"/>';
      s += '<path d="M60 40 L62 20 M58 30 L50 22 M62 28 L70 20" stroke="#16a34a" stroke-width="3"/><path d="M62 40 L60 80 L54 100" stroke="#a16207" stroke-width="2" fill="none"/>';
      s += tx(330, 60, t("humus", "الدبال"), 'style="fill:#fef3c7"') + tx(330, 98, t("soil", "التربة"), 'style="fill:#fef3c7"') + tx(330, 210, t("bedrock", "الصخر الأصلي"), 'style="fill:#f5f5f4"');
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 205, ["Bedrock", "الصخر الأصلي"], ["The original rock. Minerals in it formed from cooling magma or hydrothermal solutions.", "الصخر الأصلي، وتكونت معادنه من تصلب الصهارة أو من محاليل الفتحات الحرمائية."]],
      [200, 145, ["Weathering", "التجوية"], ["Wind, running water, temperature differences and plant roots break rock into fragments.", "الرياح والمياه الجارية وفروق درجات الحرارة وجذور النباتات تفتت الصخور."]],
      [200, 95, ["Soil", "التربة"], ["Mature soil holds water, air, clay, silt, gravel, sand and humus.", "التربة الناضجة تحتوي على ماء وهواء وطين وغرين وحصى ورمل ودبال."]],
      [140, 55, ["Humus", "الدبال"], ["Decomposed organic matter that enriches the top layer.", "مواد عضوية متحللة تُغني الطبقة العليا."]],
      [62, 90, ["Sedentary or transported?", "متبقية أم منقولة؟"], ["Soil formed in place (Oasis, Mariout) is sedentary; soil carried by rivers (Nile Delta) is transported.", "التربة المتكونة في مكانها (الواحات ومريوط) متبقية، والتي تحملها الأنهار (دلتا النيل) منقولة."]]
    ]
  };
})();

/* ---------- Prep 2 live simulations (part 1): particles, heating curve, internal energy,
   heat transfer, reaction evidence, equation balancer. Original designs on EZ3.simKit. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
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
  E.p2kit = { hint: hint, box: box, sl: sl, clamp: clamp, r1: r1 };

  /* =========================================================
     1. prep2_particles - particles in a box: heat slider, piston, plasma
     ========================================================= */
  L.prep2_particles = function (host, cfg, done) {
    host.innerHTML = hint(t("Move the heat slider to change the state. Drag the grey piston down to squeeze what is inside. When it is a gas, switch on the electric field.",
      "حرّك منزلق الحرارة لتغيير الحالة، واسحب المكبس الرمادي لأسفل لتضغط ما بداخله، وعندما تصبح غازًا شغّل المجال الكهربي."));
    var S = K.make(host, 0.62, 380);
    var c = box(host, L._slider(t("Heat", "الحرارة"), 0, 100, 1, 50, "") +
      '<div class="btn-row"><button type="button" class="btn sm tg" id="p2pf">⚡ ' + t("Electric field (ionize)", "مجال كهربي (تأين)") + '</button><button type="button" class="btn sm ghost" id="p2pr">↺ ' + t("Reset piston", "أعد المكبس") + "</button></div>");
    var tick = L._goals(host, [t("Cool it until it becomes a solid.", "برّدها حتى تصبح صلبة."), t("Warm it back into a liquid.", "سخّنها لتعود سائلة."),
      t("Heat it into a gas.", "سخّنها حتى تصبح غازًا."), t("Squeeze the gas to half its volume.", "اضغط الغاز إلى نصف حجمه."), t("Ionize the gas into plasma.", "حوّل الغاز إلى بلازما بالتأين.")], done);
    var N = 30, P = [], el = [], heat = 50, field = false, pist = 0, drag = false, seenSolid = false, warned = 0;
    for (var i = 0; i < N; i++) P.push({ x: K.rnd(0.1, 0.9), y: K.rnd(0.6, 0.95), vx: K.rnd(-0.2, 0.2), vy: 0 });
    function state() { return heat < 30 ? "s" : heat < 65 ? "l" : "g"; }
    sl(c, 0, function (v) { return n(v) + "%"; }, function (v) {
      heat = v; var s = state();
      if (s !== "g" && field) { field = false; c.querySelector("#p2pf").classList.remove("on"); }
      if (s === "s") { seenSolid = true; tick(0); }
      if (s === "l" && seenSolid) tick(1);
      if (s === "g") tick(2);
    });
    c.querySelector("#p2pf").onclick = function () {
      if (state() !== "g") { E.toast(t("Only a gas can be ionized. Heat it first.", "الغاز فقط يمكن تأينه، سخّنه أولًا.")); return; }
      field = !field; this.classList.toggle("on", field);
      if (field) { el = []; for (var j = 0; j < N; j++) el.push({ x: P[j].x, y: P[j].y, vx: K.rnd(-1.5, 1.5), vy: K.rnd(-1.5, 1.5) }); tick(4); E.speak(t("Plasma: positive ions and free electrons.", "بلازما: أيونات موجبة وإلكترونات حرة.")); }
    };
    c.querySelector("#p2pr").onclick = function () { pist = 0; };
    function geo() { var W = S.W, H = S.H; return { bx: W * 0.05, bw: W * 0.5, by: H * 0.08, bh: H * 0.86 }; }
    function topN() { return 0.02 + pist * 0.6; }
    S.drag({
      down: function (p) { var g = geo(), py = g.by + topN() * g.bh; if (p.x > g.bx - 10 && p.x < g.bx + g.bw + 10 && Math.abs(p.y - py) < 26) { drag = true; return true; } return false; },
      move: function (p) {
        if (!drag) return;
        var g = geo(), want = clamp((p.y - g.by) / g.bh, 0.02, 0.62), s = state(), lim = 0.62;
        if (s !== "g") { var top = 1; P.forEach(function (q) { top = Math.min(top, q.y); }); lim = Math.max(0.02, top - 0.07); }
        if (want > lim + 0.04 && s !== "g" && warned < 1) { warned = 1; E.toast(t("Liquids and solids hardly compress: no big spaces between particles.", "السوائل والمواد الصلبة لا تكاد تنضغط؛ لا توجد مسافات كبيرة بين جزيئاتها.")); }
        pist = (Math.min(want, lim) - 0.02) / 0.6;
      },
      up: function () { drag = false; warned = 0; },
      hover: function (p) { var g = geo(), py = g.by + topN() * g.bh; return p.x > g.bx && p.x < g.bx + g.bw && Math.abs(p.y - py) < 26; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), s = state(), tn = topN(), rad = Math.max(4, Math.min(g.bw, g.bh) * 0.032), rx = rad / g.bw, ry = rad / g.bh;
      ctx.clearRect(0, 0, W, H);
      // motion
      P.forEach(function (q, k) {
        if (s === "s") {
          var col = k % 6, row = Math.floor(k / 6), tx = 0.2 + col * 0.12, ty = 0.94 - row * 2.3 * ry, amp = 0.003 + heat / 30 * 0.006;
          q.x += (tx - q.x) * Math.min(1, dt * 6) + K.rnd(-amp, amp); q.y += (ty - q.y) * Math.min(1, dt * 6) + K.rnd(-amp, amp) * (g.bw / g.bh);
          q.vx = 0; q.vy = 0;
        } else if (s === "l") {
          var sp = 0.12 + (heat - 30) / 35 * 0.18;
          q.vy += 1.4 * dt; q.vx += K.rnd(-1, 1) * sp * dt * 6; q.vy += K.rnd(-1, 1) * sp * dt * 3;
          var m = Math.hypot(q.vx, q.vy); if (m > sp * 2) { q.vx *= sp * 2 / m; q.vy *= sp * 2 / m; }
          q.x += q.vx * dt; q.y += q.vy * dt;
        } else {
          var gs = 0.5 + (heat - 65) / 35 * 0.6, mm = Math.hypot(q.vx, q.vy) || 1;
          q.vx += K.rnd(-0.3, 0.3) * dt; q.vy += K.rnd(-0.3, 0.3) * dt;
          q.vx = q.vx / mm * gs; q.vy = q.vy / mm * gs; if (!isFinite(q.vx)) { q.vx = gs; q.vy = 0; }
          q.x += q.vx * dt; q.y += q.vy * dt;
        }
      });
      // simple overlap push (liquid + gas)
      if (s !== "s") for (var a = 0; a < N; a++) for (var b = a + 1; b < N; b++) {
        var dx = (P[a].x - P[b].x) * g.bw, dy = (P[a].y - P[b].y) * g.bh, d = Math.hypot(dx, dy);
        if (d > 0 && d < rad * 2) { var push = (rad * 2 - d) / 2 / d; P[a].x += dx * push / g.bw; P[a].y += dy * push / g.bh; P[b].x -= dx * push / g.bw; P[b].y -= dy * push / g.bh; if (s === "g") { var tvx = P[a].vx; P[a].vx = P[b].vx; P[b].vx = tvx; var tvy = P[a].vy; P[a].vy = P[b].vy; P[b].vy = tvy; } }
      }
      P.forEach(function (q) {
        if (q.x < rx) { q.x = rx; q.vx = Math.abs(q.vx); } if (q.x > 1 - rx) { q.x = 1 - rx; q.vx = -Math.abs(q.vx); }
        if (q.y < tn + 0.03 + ry) { q.y = tn + 0.03 + ry; q.vy = Math.abs(q.vy); } if (q.y > 1 - ry) { q.y = 1 - ry; q.vy = -Math.abs(q.vy) * (s === "l" ? 0.3 : 1); }
      });
      // box
      ctx.fillStyle = C.card; ctx.fillRect(g.bx, g.by, g.bw, g.bh);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(g.bx, g.by - 4); ctx.lineTo(g.bx, g.by + g.bh); ctx.lineTo(g.bx + g.bw, g.by + g.bh); ctx.lineTo(g.bx + g.bw, g.by - 4); ctx.stroke();
      var plasma = field && s === "g";
      P.forEach(function (q) {
        var x = g.bx + q.x * g.bw, y = g.by + q.y * g.bh;
        K.dot(ctx, x, y, rad, plasma ? "#ef4444" : s === "s" ? "#2563eb" : s === "l" ? "#3b82f6" : "#60a5fa", "rgba(0,0,0,.25)");
        if (plasma) txt(ctx, "+", x, y + 1, { c: "#fff", s: rad * 1.6 });
      });
      if (plasma) el.forEach(function (q) {
        q.x += q.vx * dt; q.y += q.vy * dt;
        if (q.x < 0.01 || q.x > 0.99) q.vx *= -1; if (q.y < tn + 0.04 || q.y > 0.99) q.vy *= -1;
        q.x = clamp(q.x, 0.01, 0.99); q.y = clamp(q.y, tn + 0.04, 0.99);
        K.dot(ctx, g.bx + q.x * g.bw, g.by + q.y * g.bh, 2.5, "#facc15");
      });
      // piston
      var py = g.by + tn * g.bh;
      ctx.fillStyle = "#94a3b8"; K.rr(ctx, g.bx + 2, py, g.bw - 4, 0.03 * g.bh, 4); ctx.fill();
      ctx.fillStyle = "#64748b"; ctx.fillRect(g.bx + g.bw / 2 - 5, Math.max(0, py - 40), 10, Math.min(40, py)); K.rr(ctx, g.bx + g.bw / 2 - 26, Math.max(0, py - 46), 52, 10, 4); ctx.fill();
      // readouts
      var vol = 1 - pist * 0.6, pres = s === "g" ? (0.85 + (heat - 65) / 35 * 0.3) / vol : null, x0 = g.bx + g.bw + 16, wid = W - x0 - 10, fs = Math.max(11, Math.min(14, wid / 13));
      var nm = plasma ? t("PLASMA", "بلازما") : s === "s" ? t("SOLID", "صلبة") : s === "l" ? t("LIQUID", "سائلة") : t("GAS", "غاز");
      txt(ctx, nm, x0 + wid / 2, g.by + 12, { c: C.ink, s: fs + 6 });
      var att = s === "s" ? 0.95 : s === "l" ? 0.55 : 0.08, spc = s === "s" ? 0.1 : s === "l" ? 0.3 : 0.9;
      [[t("Attraction", "قوى التجاذب"), att, "#f97316"], [t("Spaces", "المسافات البينية"), plasma ? 0.95 : spc, "#14b8a6"]].forEach(function (b, j) {
        var y = g.by + 44 + j * 40; txt(ctx, b[0], x0, y, { c: C.muted, s: fs - 1, a: E.isAr() ? "left" : "left" });
        ctx.fillStyle = C.line; K.rr(ctx, x0, y + 9, wid, 9, 4); ctx.fill(); ctx.fillStyle = b[2]; K.rr(ctx, x0, y + 9, Math.max(6, wid * b[1]), 9, 4); ctx.fill();
      });
      var mo = plasma ? t("ions + free electrons", "أيونات + إلكترونات حرة") : s === "s" ? t("vibrate in place", "تهتز في أماكنها") : s === "l" ? t("slide past each other", "تنزلق بجوار بعضها") : t("move freely", "تتحرك بحرية");
      txt(ctx, mo, x0, g.by + 136, { c: C.ink, s: fs - 1, a: "left" });
      txt(ctx, t("Volume: ", "الحجم: ") + n(Math.round(vol * 100)) + "%", x0, g.by + 162, { c: C.ink, s: fs, a: "left" });
      if (pres) txt(ctx, t("Pressure: ", "الضغط: ") + n(r1(pres)) + t(" atm", " ض.ج"), x0, g.by + 186, { c: "#ef4444", s: fs, a: "left" });
      txt(ctx, t("Shape: ", "الشكل: ") + (s === "s" ? t("fixed", "ثابت") : t("takes the container", "يأخذ شكل الإناء")), x0, g.by + 210, { c: C.muted, s: fs - 2, a: "left" });
      if (s === "g" && vol <= 0.5) tick(3);
    });
  };

  /* =========================================================
     2. prep2_heatcurve - heat ice to steam, live temperature-time graph
     ========================================================= */
  L.prep2_heatcurve = function (host, cfg, done) {
    host.innerHTML = hint(t("Set the heater (right = heat, left = cool) and watch the graph. Change the altitude or dissolve glucose to see the boiling and melting points move.",
      "اضبط السخان (يمين = تسخين، يسار = تبريد) وراقب المنحنى، وغيّر الارتفاع أو أذب الجلوكوز لترى درجتي الغليان والانصهار تتغيران.")) + '<div class="seg" id="p2alt"></div>';
    var S = K.make(host, 0.6, 380);
    var c = box(host, L._slider(t("Heater", "السخان"), -100, 100, 5, 60, "%") +
      '<div class="btn-row"><button type="button" class="btn sm tg" id="p2glu">🍬 ' + t("Dissolve glucose (180 g in 1 L)", "أذب جلوكوز (١٨٠ جم في ١ لتر)") + '</button><button type="button" class="btn sm ghost" id="p2hr">↺ ' + t("Start again with ice", "ابدأ من جديد بالثلج") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Melt the ice: see the temperature stay at the melting point.", "صهر الثلج: لاحظ ثبات درجة الحرارة عند درجة الانصهار."),
      t("Boil the water: see the temperature stay at the boiling point.", "اجعل الماء يغلي: لاحظ ثبات درجة الحرارة عند درجة الغليان."),
      t("Boil water high on a mountain (below 100°C).", "اجعل الماء يغلي فوق جبل عالٍ (أقل من ١٠٠°م)."),
      t("Reverse it: cool the water until it freezes again.", "اعكس التحول: برّد الماء حتى يتجمد من جديد."),
      t("Dissolve glucose and see the melting point drop below 0°C.", "أذب الجلوكوز ولاحظ انخفاض درجة الانصهار تحت الصفر.")], done);
    var ALT = [["0", 100, "0 m"], ["1800", 94, "1800 m"], ["3000", 90, "3000 m"], ["4800", 84, "4800 m"]];
    var m = 0.1, cI = 2090, cW = 4180, cS = 2010, Lf = 334000, Lv = 2260000, Pmax = 15000;
    var alt = "0", glu = false, pw = 0.6, Tm = -20, f = 0, gb = 0, time = 0, hist = [], acc = 0, meltSeen = false, wasWater = false, bubbles = [], steam = [];
    function bp() { var b = ALT.filter(function (a) { return a[0] === alt; })[0][1]; return b + (glu ? 0.5 : 0); }
    function mp() { return glu ? -1.86 : 0; }
    K.seg(host, "#p2alt", ALT.map(function (a) { return [a[0], '<span dir="ltr">' + n(Number(a[0])) + " " + t("m", "م") + "</span>"]; }), alt, function (v) { alt = v; norm(); });
    sl(c, 0, function (v) { return (v > 0 ? "🔥 " : v < 0 ? "❄️ " : "") + n(Math.abs(v)) + "%"; }, function (v) { pw = v / 100; });
    c.querySelector("#p2glu").onclick = function () { glu = !glu; this.classList.toggle("on", glu); norm(); };
    c.querySelector("#p2hr").onclick = function () { Tm = -20; f = 0; gb = 0; time = 0; hist = []; meltSeen = false; wasWater = false; };
    function norm() {
      var M = mp(), B = bp();
      if (f > 0 && f < 1) Tm = M;
      if (gb > 0 && gb < 1) Tm = B;
      if (f === 0 && Tm > M) { f = Math.min(1, cI * (Tm - M) / Lf); Tm = M; }
      if (f === 1 && gb === 0 && Tm > B) { gb = Math.min(1, cW * (Tm - B) / Lv); Tm = B; }
      if (f === 1 && gb === 0 && Tm < M) { f = Math.max(0, 1 - cW * (M - Tm) / Lf); Tm = M; }
    }
    function addHeat(q) {
      var M = mp(), B = bp(), guard = 0;
      while (Math.abs(q) > 1e-6 && guard++ < 8) {
        var need;
        if (q > 0) {
          if (f < 1 && Tm < M) { need = m * cI * (M - Tm); if (q < need) { Tm += q / (m * cI); q = 0; } else { Tm = M; q -= need; } }
          else if (f < 1) { need = m * Lf * (1 - f); if (q < need) { f += q / (m * Lf); q = 0; } else { f = 1; q -= need; } }
          else if (gb === 0 && Tm < B) { need = m * cW * (B - Tm); if (q < need) { Tm += q / (m * cW); q = 0; } else { Tm = B; q -= need; } }
          else if (gb < 1) { need = m * Lv * (1 - gb); if (q < need) { gb += q / (m * Lv); q = 0; } else { gb = 1; q -= need; } }
          else { Tm = Math.min(130, Tm + q / (m * cS)); q = 0; }
        } else {
          var qq = -q;
          if (gb === 1 && Tm > B) { need = m * cS * (Tm - B); if (qq < need) { Tm -= qq / (m * cS); qq = 0; } else { Tm = B; qq -= need; } }
          else if (gb > 0) { need = m * Lv * gb; if (qq < need) { gb -= qq / (m * Lv); qq = 0; } else { gb = 0; qq -= need; } }
          else if (f === 1 && Tm > M) { need = m * cW * (Tm - M); if (qq < need) { Tm -= qq / (m * cW); qq = 0; } else { Tm = M; qq -= need; } }
          else if (f > 0) { need = m * Lf * f; if (qq < need) { f -= qq / (m * Lf); qq = 0; } else { f = 0; qq -= need; } }
          else { Tm = Math.max(-30, Tm - qq / (m * cI)); qq = 0; }
          q = -qq;
        }
      }
    }
    function phase() {
      if (f < 1 && f > 0) return t("melting / freezing (ice + water)", "انصهار / تجمد (ثلج + ماء)");
      if (f === 0) return t("ice (solid)", "ثلج (صلب)");
      if (gb > 0 && gb < 1) return t("boiling (water + vapour)", "غليان (ماء + بخار)");
      if (gb === 1) return t("water vapour (gas)", "بخار ماء (غاز)");
      return t("water (liquid)", "ماء (سائل)");
    }
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, M = mp(), B = bp();
      addHeat(pw * Pmax * dt); time += dt;
      if (f > 0 && f < 1) meltSeen = true;
      if (f === 1 && meltSeen) tick(0);
      if (gb > 0.25) tick(1);
      if (gb > 0.02 && gb < 1 && B < 99) tick(2);
      if (f === 1) wasWater = true;
      if (f === 0 && wasWater) tick(3);
      if (glu && f > 0 && f < 1) tick(4);
      acc += dt; if (acc > 0.1) { acc = 0; hist.push([time, Tm]); if (hist.length > 700) hist = hist.filter(function (_, k) { return k % 2 === 0; }); }
      ctx.clearRect(0, 0, W, H);
      // beaker
      var bx = W * 0.05, bw = Math.min(W * 0.26, 170), by = H * 0.22, bh = H * 0.56, base = by + bh;
      var liq = f * (1 - gb), lvl = bh * (0.15 + 0.55 * liq);
      ctx.fillStyle = "rgba(59,130,246,.35)"; ctx.fillRect(bx, base - lvl, bw, lvl);
      var cubes = Math.round((1 - f) * 6);
      for (var k = 0; k < cubes; k++) { var cx = bx + 10 + (k % 3) * (bw - 20) / 3, cy = base - 14 - Math.floor(k / 3) * 26 - (f > 0 ? lvl * 0.3 : 0); ctx.fillStyle = "rgba(224,242,254,.95)"; K.rr(ctx, cx, cy - 12, (bw - 30) / 3, 22, 4); ctx.fill(); ctx.strokeStyle = "#7dd3fc"; ctx.lineWidth = 1.5; ctx.stroke(); }
      if (gb > 0 && gb < 1 && pw > 0) { if (Math.random() < 0.6) bubbles.push({ x: bx + K.rnd(8, bw - 8), y: base - 4, r: K.rnd(2, 5) }); if (Math.random() < 0.3) steam.push({ x: bx + K.rnd(10, bw - 10), y: base - lvl, a: 1 }); }
      bubbles.forEach(function (b2) { b2.y -= 70 * dt; }); bubbles = bubbles.filter(function (b2) { return b2.y > base - lvl; });
      bubbles.forEach(function (b2) { ctx.beginPath(); ctx.arc(b2.x, b2.y, b2.r, 0, 7); ctx.strokeStyle = "rgba(255,255,255,.9)"; ctx.lineWidth = 1.5; ctx.stroke(); });
      steam.forEach(function (s2) { s2.y -= 30 * dt; s2.a -= dt * 0.5; s2.x += K.rnd(-8, 8) * dt; }); steam = steam.filter(function (s2) { return s2.a > 0; });
      steam.forEach(function (s2) { K.dot(ctx, s2.x, s2.y, 9 * (1.3 - s2.a), "rgba(203,213,225," + (s2.a * 0.5) + ")"); });
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(bx - 3, by); ctx.lineTo(bx, base); ctx.lineTo(bx + bw, base); ctx.lineTo(bx + bw + 3, by); ctx.stroke();
      // heater
      var hy = base + 10;
      if (pw > 0) { for (var j = 0; j < 5; j++) { var fx = bx + bw * (0.15 + j * 0.175); ctx.fillStyle = "rgba(249,115,22," + (0.4 + 0.5 * pw) + ")"; ctx.beginPath(); ctx.moveTo(fx - 7, hy + 18); ctx.quadraticCurveTo(fx, hy - 16 * pw - Math.random() * 6, fx + 7, hy + 18); ctx.fill(); } }
      else if (pw < 0) txt(ctx, "❄️ ❄️ ❄️", bx + bw / 2, hy + 10, { s: 16 });
      // thermometer
      var tx0 = bx + bw + 18, ty0 = by - 10, th = bh + 10, frac = clamp((Tm + 30) / 160, 0, 1);
      ctx.fillStyle = C.line; K.rr(ctx, tx0, ty0, 10, th, 5); ctx.fill(); ctx.fillStyle = "#ef4444"; K.rr(ctx, tx0, ty0 + th * (1 - frac), 10, th * frac, 5); ctx.fill(); K.dot(ctx, tx0 + 5, ty0 + th + 6, 9, "#ef4444");
      txt(ctx, n(r1(Tm)) + "°C", bx + bw / 2, by - 22, { c: C.ink, s: 17 });
      // graph
      var gx = tx0 + 52, gw = W - gx - 14, gy = 14, gh = H - 44, Tmin = -30, Tmax = 130;
      function Y(v) { return gy + gh * (1 - (v - Tmin) / (Tmax - Tmin)); }
      var xmax = Math.max(20, Math.ceil(time / 10) * 10);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh); ctx.stroke();
      [[M, "#38bdf8"], [B, "#f97316"]].forEach(function (ln) { ctx.strokeStyle = ln[1]; ctx.lineWidth = 1; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.moveTo(gx, Y(ln[0])); ctx.lineTo(gx + gw, Y(ln[0])); ctx.stroke(); ctx.setLineDash([]); txt(ctx, n(r1(ln[0])), gx - 5, Y(ln[0]), { a: "right", c: ln[1], s: 11 }); });
      [-20, 50, 120].forEach(function (v) { txt(ctx, n(v), gx - 5, Y(v), { a: "right", c: C.muted, s: 10 }); });
      txt(ctx, "°C", gx + 4, gy + 4, { a: "left", c: C.muted, s: 11 }); txt(ctx, t("time →", "الزمن ←"), gx + gw - 2, gy + gh + 14, { a: "right", c: C.muted, s: 11 });
      ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 3; ctx.beginPath();
      hist.forEach(function (p2, q) { var px = gx + gw * p2[0] / xmax, py = Y(p2[1]); if (q) ctx.lineTo(px, py); else ctx.moveTo(px, py); }); ctx.stroke();
      out.innerHTML = "<span>" + t("Temperature: ", "درجة الحرارة: ") + "<b>" + n(r1(Tm)) + "°C</b></span><span>" + t("State: ", "الحالة: ") + "<b>" + esc(phase()) + "</b></span><span>" + t("Melting point: ", "درجة الانصهار: ") + "<b>" + n(r1(M)) + "°C</b></span><span>" + t("Boiling point: ", "درجة الغليان: ") + "<b>" + n(r1(B)) + "°C</b></span>";
    });
  };

  /* =========================================================
     3. prep2_energy - same heat, different mass / substance / state
     ========================================================= */
  L.prep2_energy = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose what is in each beaker and its mass. Both get the SAME heat from identical flames. Press Heat and compare the thermometers and the internal energy bars.",
      "اختر ما في كل كأس وكتلته. الكأسان يكتسبان كمية الحرارة نفسها من لهبين متماثلين. اضغط «سخّن» وقارن الترمومترين وأشرطة الطاقة الداخلية.")) +
      '<div class="btn-row"><b>A</b><div class="seg" id="p2ea"></div></div><div class="btn-row" style="margin-top:6px"><b>B</b><div class="seg" id="p2eb"></div></div>';
    var S = K.make(host, 0.62, 380);
    var c = box(host, L._slider(t("Mass of A", "كتلة A"), 100, 500, 50, 200, "g") + L._slider(t("Mass of B", "كتلة B"), 100, 500, 50, 200, "g") +
      '<div class="btn-row"><button type="button" class="btn sm primary" id="p2eh">🔥 ' + t("Heat", "سخّن") + '</button><button type="button" class="btn sm ghost" id="p2er">↺ ' + t("Cool back", "أعد التبريد") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Show two beakers with the same temperature but different internal energy.", "اعرض كأسين لهما درجة الحرارة نفسها وطاقة داخلية مختلفة."),
      t("Same substance, different masses: which warms more?", "مادة واحدة بكتلتين مختلفتين: أيهما يسخن أكثر؟"),
      t("Equal masses of water and oil: which warms more?", "كتلتان متساويتان من الماء والزيت: أيهما يسخن أكثر؟"),
      t("Equal masses of ice and water: which warms more?", "كتلتان متساويتان من الثلج والماء: أيهما يسخن أكثر؟")], done);
    var SUB = { w: [["Water", "ماء"], 4180, "#3b82f6", 20, 100], o: [["Corn oil", "زيت ذرة"], 2000, "#eab308", 20, 150], i: [["Ice", "ثلج"], 2090, "#bae6fd", -30, 0], cu: [["Copper", "نحاس"], 385, "#c2410c", 20, 150] };
    var B = [{ s: "w", m: 200, T: 20, p: [] }, { s: "w", m: 200, T: 20, p: [] }], heating = false, Q = 0, RATE = 2000;
    function reset() { B.forEach(function (b) { b.T = SUB[b.s][3]; }); Q = 0; }
    function parts(b) { var k = Math.round(b.m / 25); while (b.p.length < k) b.p.push({ x: Math.random(), y: Math.random(), a: Math.random() * 7 }); b.p.length = k; }
    ["#p2ea", "#p2eb"].forEach(function (id, i) { K.seg(host, id, Object.keys(SUB).map(function (k) { return [k, esc(T(SUB[k][0]))]; }), B[i].s, function (v) { B[i].s = v; reset(); }); });
    sl(c, 0, function (v) { return n(v) + " " + t("g", "جم"); }, function (v) { B[0].m = v; reset(); });
    sl(c, 1, function (v) { return n(v) + " " + t("g", "جم"); }, function (v) { B[1].m = v; reset(); });
    var hb = c.querySelector("#p2eh");
    hb.onclick = function () { heating = !heating; hb.innerHTML = heating ? "⏸ " + t("Stop", "أوقف") : "🔥 " + t("Heat", "سخّن"); };
    c.querySelector("#p2er").onclick = reset;
    reset();
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      if (heating) { Q += RATE * dt; B.forEach(function (b) { var sb = SUB[b.s]; b.T = Math.min(sb[4], b.T + RATE * dt / (b.m / 1000 * sb[1])); }); }
      ctx.clearRect(0, 0, W, H);
      var U = B.map(function (b) { return b.m / 1000 * SUB[b.s][1] * (b.T + 273); }), Umax = Math.max(U[0], U[1], 1);
      B.forEach(function (b, i) {
        parts(b);
        var sb = SUB[b.s], cw = W / 2, bx = i * cw + cw * 0.12, bw = cw * 0.42, bh = H * 0.55, by = H * 0.18, base = by + bh, lvl = bh * (0.25 + 0.7 * b.m / 500), sp = 6 + (b.T + 30) * 0.9;
        ctx.fillStyle = b.s === "cu" ? "rgba(194,65,12,.35)" : sb[2] + "55"; ctx.fillRect(bx, base - lvl, bw, lvl);
        b.p.forEach(function (q) { q.a += dt * sp * 0.08; var x = bx + 6 + q.x * (bw - 12) + Math.sin(q.a * 3) * sp * 0.08, y = base - 6 - q.y * (lvl - 12) + Math.cos(q.a * 2.3) * sp * 0.08; K.dot(ctx, x, y, 3.5, b.s === "i" ? "#0ea5e9" : sb[2] === "#bae6fd" ? "#0ea5e9" : sb[2]); });
        ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(bx - 3, by); ctx.lineTo(bx, base); ctx.lineTo(bx + bw, base); ctx.lineTo(bx + bw + 3, by); ctx.stroke();
        if (heating) for (var j = 0; j < 3; j++) { var fx = bx + bw * (0.25 + j * 0.25); ctx.fillStyle = "rgba(249,115,22,.75)"; ctx.beginPath(); ctx.moveTo(fx - 6, base + 22); ctx.quadraticCurveTo(fx, base - 4 - Math.random() * 6, fx + 6, base + 22); ctx.fill(); }
        // thermometer
        var tx0 = bx + bw + 12, th = bh, fr = clamp((b.T + 30) / 180, 0, 1);
        ctx.fillStyle = C.line; K.rr(ctx, tx0, by, 9, th, 4); ctx.fill(); ctx.fillStyle = "#ef4444"; K.rr(ctx, tx0, by + th * (1 - fr), 9, th * fr, 4); ctx.fill();
        txt(ctx, (i ? "B" : "A") + ": " + T(sb[0]) + " · " + n(b.m) + t(" g", " جم"), i * cw + cw / 2, 14, { c: C.ink, s: 13 });
        txt(ctx, n(r1(b.T)) + "°C", bx + bw / 2, by - 14, { c: "#ef4444", s: 16 });
        if (b.s === "i" && b.T >= 0) txt(ctx, t("melting…", "ينصهر…"), bx + bw / 2, by + 14, { c: C.muted, s: 11 });
        // internal energy bar
        var ux = i * cw + cw * 0.1, uw = cw * 0.8, uy = H - 22;
        txt(ctx, t("internal energy", "الطاقة الداخلية"), ux, uy - 10, { c: C.muted, s: 11, a: "left" });
        ctx.fillStyle = C.line; K.rr(ctx, ux, uy, uw, 9, 4); ctx.fill(); ctx.fillStyle = "#8b5cf6"; K.rr(ctx, ux, uy, Math.max(6, uw * U[i] / Umax), 9, 4); ctx.fill();
      });
      var d0 = B[0].T - SUB[B[0].s][3], d1 = B[1].T - SUB[B[1].s][3];
      out.innerHTML = "<span>" + t("Heat given to each: ", "الحرارة المكتسبة لكل كأس: ") + "<b>" + n(r1(Q / 1000)) + " kJ</b></span>" +
        B.map(function (b, i) { return "<span>" + (i ? "B" : "A") + ": ΔT = <b>" + n(r1(i ? d1 : d0)) + "°C</b> · " + t("specific heat ", "الحرارة النوعية ") + "<b>" + n(SUB[b.s][1]) + "</b> J/kg°C</span>"; }).join("");
      var same = B[0].s === B[1].s, eqm = B[0].m === B[1].m, pair = [B[0].s, B[1].s].sort().join(",");
      if (same && !eqm && Math.abs(B[0].T - B[1].T) < 0.6) tick(0);
      if (Q >= 4000) {
        if (same && Math.abs(B[0].m - B[1].m) >= 100) tick(1);
        if (pair === "o,w" && eqm) tick(2);
        if (pair === "i,w" && eqm) tick(3);
      }
    });
  };

  /* =========================================================
     4. prep2_heatflow - conduction race, convection currents, radiation, thermal camera
     ========================================================= */
  L.prep2_heatflow = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick a method. Conduction: choose the rod materials and light the flame. Convection: turn on the flame under the beaker. Radiation: switch on the lamp and drag it closer. Try the thermal camera too.",
      "اختر طريقة. التوصيل: اختر مادة الساقين وأشعل اللهب. الحمل: أشعل اللهب تحت الكأس. الإشعاع: شغّل المصباح واسحبه ليقترب. وجرّب كاميرا التصوير الحراري.")) +
      '<div class="seg" id="p2hm"></div><div class="btn-row" style="margin-top:6px" id="p2hrow"><span>' + t("Rod 1:", "الساق ١:") + '</span><div class="seg" id="p2r1"></div><span>' + t("Rod 2:", "الساق ٢:") + '</span><div class="seg" id="p2r2"></div></div>';
    var S = K.make(host, 0.6, 380);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm primary" id="p2hon">🔥 ' + t("Heat source on", "شغّل مصدر الحرارة") + '</button><button type="button" class="btn sm tg" id="p2cam">📷 ' + t("Thermal camera", "كاميرا حرارية") + '</button><button type="button" class="btn sm ghost" id="p2hrs">↺</button></div>');
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Conduction race: make all the pins fall from the better conductor first.", "سباق التوصيل: اجعل كل الدبابيس تسقط من الموصل الأفضل أولًا."),
      t("Convection: heat the water and watch a current carry the dye round.", "الحمل: سخّن الماء وشاهد التيار يدير الصبغة."),
      t("Radiation: heat the black can to 40°C.", "الإشعاع: سخّن العلبة السوداء حتى ٤٠°م."),
      t("Look at something hot with the thermal camera.", "انظر إلى شيء ساخن بالكاميرا الحرارية.")], done);
    var MAT = { cu: [["Copper", "نحاس"], 40, "#c2410c"], fe: [["Iron", "حديد"], 8, "#6b7280"], gl: [["Glass", "زجاج"], 1.5, "#a5f3fc"], wd: [["Wood", "خشب"], 0.3, "#a16207"] };
    var mode = "cd", on = false, cam = false, rods = [{ m: "cu", T: [], pins: [] }, { m: "fe", T: [], pins: [] }], NC = 22, PINS = [5, 9, 13, 17];
    var conv = 0, convT = 0, dye = [], wT = 25, lamp = { y: 0.25 }, cans = [{ T: 25, k: 0.9 }, { T: 25, k: 0.22 }], dragLamp = false;
    function resetAll() {
      rods.forEach(function (r) { r.T = []; for (var i = 0; i < NC; i++) r.T.push(25); r.pins = PINS.map(function () { return { down: 0, y: 0 }; }); r.done = 0; });
      dye = []; for (var j = 0; j < 70; j++) dye.push({ x: K.rnd(0.1, 0.4), y: K.rnd(0.7, 0.95) });
      conv = 0; convT = 0; wT = 25; cans.forEach(function (k) { k.T = 25; });
    }
    resetAll();
    K.seg(host, "#p2hm", [["cd", "🥄 " + t("Conduction", "التوصيل")], ["cv", "🌀 " + t("Convection", "الحمل")], ["rd", "☀️ " + t("Radiation", "الإشعاع")]], mode, function (v) { mode = v; on = false; upd(); host.querySelector("#p2hrow").style.display = v === "cd" ? "" : "none"; });
    ["#p2r1", "#p2r2"].forEach(function (id, i) { K.seg(host, id, Object.keys(MAT).map(function (k) { return [k, esc(T(MAT[k][0]))]; }), rods[i].m, function (v) { rods[i].m = v; resetAll(); }); });
    var hon = c.querySelector("#p2hon");
    function upd() { hon.innerHTML = on ? "⏸ " + t("Heat source off", "أطفئ مصدر الحرارة") : (mode === "rd" ? "💡 " + t("Lamp on", "شغّل المصباح") : "🔥 " + t("Heat source on", "شغّل مصدر الحرارة")); }
    hon.onclick = function () { on = !on; upd(); };
    c.querySelector("#p2cam").onclick = function () { cam = !cam; this.classList.toggle("on", cam); };
    c.querySelector("#p2hrs").onclick = function () { on = false; upd(); resetAll(); };
    function heatCol(v) { var f = clamp((v - 20) / 160, 0, 1), r = Math.round(40 + 215 * Math.min(1, f * 1.6)), g = Math.round(60 + 160 * Math.max(0, 1 - Math.abs(f - 0.5) * 2)), b = Math.round(200 * (1 - f)); return "rgb(" + r + "," + g + "," + b + ")"; }
    S.drag({
      down: function (p) { if (mode !== "rd") return false; var lx = S.W * 0.5, ly = S.H * lamp.y; if (Math.abs(p.x - lx) < 50 && Math.abs(p.y - ly) < 30) { dragLamp = true; return true; } return false; },
      move: function (p) { if (dragLamp) lamp.y = clamp(p.y / S.H, 0.1, 0.5); },
      up: function () { dragLamp = false; },
      hover: function (p) { return mode === "rd" && Math.abs(p.x - S.W * 0.5) < 50 && Math.abs(p.y - S.H * lamp.y) < 30; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, info = "";
      ctx.clearRect(0, 0, W, H);
      if (mode === "cd") {
        rods.forEach(function (r, ri) {
          var k = MAT[r.m][1], steps = Math.max(1, Math.ceil(k * dt / 0.4)), h = dt / steps;
          for (var s = 0; s < steps; s++) {
            var nT = r.T.slice();
            for (var i = 0; i < NC; i++) { var lft = i === 0 ? (on ? 250 : r.T[0]) : r.T[i - 1], rgt = i === NC - 1 ? r.T[i] : r.T[i + 1]; nT[i] = r.T[i] + h * (k * (lft - 2 * r.T[i] + rgt) - 0.02 * (r.T[i] - 25)); }
            r.T = nT;
          }
          var x0 = W * 0.16, x1 = W * 0.94, y = H * (0.3 + ri * 0.38), cw = (x1 - x0) / NC, fallen = 0;
          for (var i2 = 0; i2 < NC; i2++) {
            ctx.fillStyle = cam ? heatCol(r.T[i2]) : MAT[r.m][2]; ctx.fillRect(x0 + i2 * cw, y - 7, cw + 0.5, 14);
            if (!cam) { var glow = clamp((r.T[i2] - 60) / 300, 0, 0.8); if (glow > 0) { ctx.fillStyle = "rgba(239,68,68," + glow + ")"; ctx.fillRect(x0 + i2 * cw, y - 7, cw + 0.5, 14); } }
            var amp = clamp((r.T[i2] - 20) / 80, 0, 3); K.dot(ctx, x0 + i2 * cw + cw / 2 + K.rnd(-amp, amp), y + K.rnd(-amp, amp), 2.2, "rgba(255,255,255,.7)");
          }
          r.pins.forEach(function (pn, j) {
            var ci = PINS[j], px = x0 + ci * cw + cw / 2;
            if (!pn.down && r.T[ci] > 60) { pn.down = 1; }
            if (pn.down) { pn.y = Math.min(H * 0.3, pn.y + 260 * dt); fallen++; }
            ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(px, y + 7 + pn.y); ctx.lineTo(px, y + 30 + pn.y); ctx.stroke(); K.dot(ctx, px, y + 9 + pn.y, 4, "#fde68a");
            txt(ctx, n(j + 1), px, y - 18, { c: C.muted, s: 10 });
          });
          r.done = fallen;
          if (on) for (var f2 = 0; f2 < 3; f2++) { ctx.fillStyle = "rgba(249,115,22,.8)"; ctx.beginPath(); ctx.moveTo(x0 - 18 + f2 * 6, y + 34); ctx.quadraticCurveTo(x0 - 12 + f2 * 6, y - 4 - Math.random() * 8, x0 - 6 + f2 * 6, y + 34); ctx.fill(); }
          txt(ctx, T(MAT[r.m][0]), x0 - 6, y - 22, { c: C.ink, s: 12, a: "right" });
        });
        var a = rods[0], b = rods[1];
        if (a.m !== b.m && ((a.done === 4 && b.done < 4 && MAT[a.m][1] > MAT[b.m][1]) || (b.done === 4 && a.done < 4 && MAT[b.m][1] > MAT[a.m][1]))) tick(0);
        if (cam && on && (a.T[0] > 60 || b.T[0] > 60)) tick(3);
        info = t("Pins fallen: ", "الدبابيس الساقطة: ") + T(MAT[a.m][0]) + " " + n(a.done) + " · " + T(MAT[b.m][0]) + " " + n(b.done);
      } else if (mode === "cv") {
        conv += ((on ? 1 : 0) - conv) * Math.min(1, dt * 0.8); if (on) convT += dt; wT += ((on ? 70 : 25) - wT) * dt * 0.05;
        var bx = W * 0.2, bw = W * 0.6, by = H * 0.1, bh = H * 0.74;
        if (cam) { var gr = ctx.createLinearGradient(0, by + bh, 0, by); gr.addColorStop(0, heatCol(25 + (wT - 25) * 2 * conv + (on ? 30 : 0))); gr.addColorStop(1, heatCol(wT)); ctx.fillStyle = gr; } else ctx.fillStyle = "rgba(59,130,246,.22)";
        ctx.fillRect(bx, by, bw, bh);
        dye.forEach(function (d) {
          var X = d.x, Y = d.y, u = Math.PI * Math.sin(Math.PI * X) * Math.cos(Math.PI * Y), v = -Math.PI * Math.cos(Math.PI * X) * Math.sin(Math.PI * Y), sp = 0.17 * conv;
          d.x = clamp(d.x + u * sp * dt, 0.02, 0.98); d.y = clamp(d.y + v * sp * dt, 0.02, 0.98);
          d.x += K.rnd(-0.01, 0.01) * dt * 5; d.y += K.rnd(-0.01, 0.01) * dt * 5;
          K.dot(ctx, bx + d.x * bw, by + d.y * bh, 3, "rgba(147,51,234,.75)");
        });
        ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(bx, by - 6); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw, by - 6); ctx.stroke();
        if (on) for (var f3 = 0; f3 < 4; f3++) { var fx = bx + bw * (0.06 + f3 * 0.07); ctx.fillStyle = "rgba(249,115,22,.8)"; ctx.beginPath(); ctx.moveTo(fx - 7, by + bh + 26); ctx.quadraticCurveTo(fx, by + bh - 2 - Math.random() * 6, fx + 7, by + bh + 26); ctx.fill(); }
        if (conv > 0.4) { txt(ctx, t("warm water rises ↑", "الماء الدافئ يصعد ↑"), bx + bw * 0.18, by + bh * 0.45, { c: "#ef4444", s: 12 }); txt(ctx, t("cold water sinks ↓", "الماء البارد يهبط ↓"), bx + bw * 0.8, by + bh * 0.45, { c: "#2563eb", s: 12 }); }
        if (convT > 4 && conv > 0.8) tick(1);
        if (cam && on && conv > 0.5) tick(3);
        info = t("Water temperature: ", "درجة حرارة الماء: ") + n(Math.round(wT)) + "°C · " + t("hot water is less dense, so it rises", "الماء الساخن أقل كثافة فيصعد");
      } else {
        var ly = H * lamp.y, lx = W * 0.5, gy0 = H * 0.86, dist = (gy0 - ly) / H, I = on ? clamp(0.12 / (dist * dist), 0.2, 3) : 0;
        cans.forEach(function (k2) { k2.T += (I * k2.k * 9 - (k2.T - 25) * 0.06) * dt; });
        var ex = [W * 0.3, W * 0.7];
        if (on) { ctx.strokeStyle = "rgba(239,68,68,.6)"; ctx.lineWidth = 2; ex.forEach(function (x) { ctx.beginPath(); for (var s2 = 0; s2 <= 20; s2++) { var f4 = s2 / 20, xx = lx + (x - lx) * f4 + Math.sin(f4 * 18 - performance.now() / 120) * 5, yy = ly + 20 + (gy0 - 70 - ly - 20) * f4; if (s2) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); } ctx.stroke(); }); }
        K.dot(ctx, lx, ly, 22, on ? "#fde047" : "#e5e7eb", C.muted); ctx.fillStyle = "#64748b"; ctx.fillRect(lx - 10, ly - 34, 20, 14);
        txt(ctx, t("drag the lamp ↕", "اسحب المصباح ↕"), lx + 34, ly, { c: C.muted, s: 11, a: "left" });
        ctx.fillStyle = C.line; ctx.fillRect(0, gy0, W, 4);
        cans.forEach(function (k2, i3) {
          var x = ex[i3];
          ctx.fillStyle = cam ? heatCol(k2.T) : i3 === 0 ? "#111827" : "#e5e7eb"; K.rr(ctx, x - 26, gy0 - 70, 52, 70, 6); ctx.fill();
          if (!cam && i3 === 1) { ctx.fillStyle = "rgba(255,255,255,.8)"; ctx.fillRect(x - 18, gy0 - 64, 6, 58); }
          ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; K.rr(ctx, x - 26, gy0 - 70, 52, 70, 6); ctx.stroke();
          txt(ctx, n(r1(k2.T)) + "°C", x, gy0 - 84, { c: "#ef4444", s: 15 });
          txt(ctx, i3 === 0 ? t("black", "سوداء") : t("shiny", "لامعة"), x, gy0 + 14, { c: C.ink, s: 12 });
        });
        if (cans[0].T >= 40) tick(2);
        if (cam && cans[0].T > 32) tick(3);
        info = t("Dark objects absorb infrared better than shiny ones.", "الأجسام الداكنة تمتص الأشعة تحت الحمراء أكثر من اللامعة.");
      }
      if (cam) txt(ctx, "📷 " + t("thermal image", "صورة حرارية"), 10, 14, { c: C.ink, s: 12, a: "left" });
      out.innerHTML = "<span>" + esc(info) + "</span>";
    });
  };

  /* =========================================================
     5. prep2_evidence - drag the reagent in and spot the evidence of reaction
     ========================================================= */
  L.prep2_evidence = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose an experiment, then drag the item on the left into the tube or flask. Watch for the evidence of a chemical reaction.",
      "اختر تجربة، ثم اسحب الأداة من اليسار إلى الأنبوبة أو الدورق، وابحث عن دليل حدوث تفاعل كيميائي.")) + '<div class="seg" id="p2ev"></div>';
    var S = K.make(host, 0.6, 370);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm tg" id="p2sun">☀️ ' + t("Put in sunlight", "عرّضه لضوء الشمس") + '</button><button type="button" class="btn sm ghost" id="p2evr">↺ ' + t("New tube", "أنبوبة جديدة") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make a precipitate form.", "اجعل راسبًا يتكون."), t("Make a colour change happen.", "اجعل اللون يتغير."), t("Make a gas bubble out.", "اجعل غازًا يتصاعد."),
      t("Make light and heat given out.", "اجعل ضوءًا وحرارة ينبعثان."), t("Find a change with NO new substance (physical change).", "اكتشف تغيرًا بلا مادة جديدة (تغير فيزيائي).")], done);
    var EX = {
      agcl: [["Silver nitrate → sodium chloride", "نترات الفضة ← كلوريد الصوديوم"], ["Silver nitrate", "نترات الفضة"], "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)", 0],
      zncu: [["Zinc → copper sulphate", "خارصين ← كبريتات النحاس"], ["Zinc plate", "صفيحة خارصين"], "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)", 1],
      mgh: [["Magnesium → dilute HCl", "ماغنسيوم ← HCl مخفف"], ["Magnesium strip", "شريط ماغنسيوم"], "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)", 2],
      soda: [["Baking soda → vinegar", "بيكربونات الصوديوم ← الخل"], ["Baking soda", "بيكربونات الصوديوم"], t("baking soda + vinegar → carbon dioxide gas + …", "بيكربونات الصوديوم + الخل ← غاز ثاني أكسيد الكربون + …"), 2],
      mgo: [["Burn magnesium", "حرق الماغنسيوم"], ["Magnesium in tongs", "ماغنسيوم في ملقط"], "2Mg(s) + O₂(g) → 2MgO(s)", 3],
      sug: [["Sugar → water", "سكر ← ماء"], ["Sugar", "سكر"], t("sugar dissolves: still sugar and water", "يذوب السكر: يبقى سكرًا وماءً"), 4]
    };
    var cur = "agcl", prog = 0, added = false, item = { x: 0, y: 0, drag: false }, sun = false, bub = [], sparks = 0;
    function home() { item.x = S.W * 0.14; item.y = S.H * 0.55; }
    function reset() { prog = 0; added = false; sun = false; bub = []; home(); var b = c.querySelector("#p2sun"); b.classList.remove("on"); b.style.display = cur === "agcl" ? "" : "none"; show(); }
    K.seg(host, "#p2ev", Object.keys(EX).map(function (k) { return [k, esc(T(EX[k][0]))]; }), cur, function (v) { cur = v; reset(); });
    c.querySelector("#p2sun").onclick = function () { if (cur !== "agcl" || prog < 0.9) { E.toast(t("Make the white precipitate first.", "كوّن الراسب الأبيض أولًا.")); return; } sun = !sun; this.classList.toggle("on", sun); if (sun) { tick(1); show(); } };
    c.querySelector("#p2evr").onclick = reset;
    function target() { return cur === "mgo" ? { x: S.W * 0.55, y: S.H * 0.62 } : { x: S.W * 0.55, y: S.H * 0.42 }; }
    function show() {
      var ev = [[t("precipitate", "راسب"), cur === "agcl"], [t("colour change", "تغير اللون"), cur === "zncu" || (cur === "agcl" && sun)], [t("gas", "غاز"), cur === "mgh" || cur === "soda"], [t("light and heat", "ضوء وحرارة"), cur === "mgo"]];
      var on = prog > 0.6;
      out.innerHTML = ev.map(function (e) { return '<span class="chip ' + (on && e[1] ? "green" : "") + '">' + (on && e[1] ? "✔ " : "· ") + esc(e[0]) + "</span>"; }).join("") +
        (on ? (cur === "sug" ? '<span class="chip blue">' + t("No evidence: a physical change", "لا دليل: تغير فيزيائي") + "</span>" : '<span class="chip orange">' + t("New substances formed: chemical change", "تكونت مواد جديدة: تغير كيميائي") + "</span>") + eq(EX[cur][2]) : "");
    }
    S.onSize = function () { if (!item.drag && !added) home(); };
    reset();
    S.drag({
      down: function (p) { if (!added && Math.abs(p.x - item.x) < 40 && Math.abs(p.y - item.y) < 40) { item.drag = true; return true; } return false; },
      move: function (p) { if (item.drag) { item.x = p.x; item.y = p.y; } },
      up: function () {
        if (!item.drag) return; item.drag = false; var tg = target();
        if (Math.abs(item.x - tg.x) < 70 && Math.abs(item.y - tg.y) < 90) { added = true; E.speak(T(EX[cur][1])); } else home();
      },
      hover: function (p) { return !added && Math.abs(p.x - item.x) < 40 && Math.abs(p.y - item.y) < 40; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, tg = target();
      if (added && prog < 1) { prog = Math.min(1, prog + dt / 2.5); if (prog > 0.6) { show(); var g = EX[cur][3]; tick(g); } }
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = C.line; ctx.fillRect(W * 0.03, H * 0.75, W * 0.24, 6);
      txt(ctx, T(EX[cur][1]), W * 0.15, H * 0.82, { c: C.muted, s: 12 });
      var tx = tg.x, tw = 54, top = H * 0.12, bot = H * 0.8;
      if (cur === "mgo") {
        // burner flame
        ctx.fillStyle = "#64748b"; ctx.fillRect(tx - 8, H * 0.7, 16, H * 0.18);
        ctx.fillStyle = "rgba(59,130,246,.7)"; ctx.beginPath(); ctx.moveTo(tx - 10, H * 0.7); ctx.quadraticCurveTo(tx, H * 0.48 - Math.random() * 8, tx + 10, H * 0.7); ctx.fill();
        if (added) {
          var sx = tx, sy = H * 0.55;
          if (prog < 1 || true) { var gl = prog > 0.2 ? 1 : prog * 5; var rg = ctx.createRadialGradient(sx, sy, 2, sx, sy, 90 * gl); rg.addColorStop(0, "rgba(255,255,255," + (0.95 * gl) + ")"); rg.addColorStop(1, "rgba(255,255,255,0)"); ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(sx, sy, 90 * gl, 0, 7); ctx.fill(); }
          ctx.fillStyle = "#f8fafc"; ctx.fillRect(sx - 30, sy - 3, 30 * (1 - prog * 0.6), 6); K.dot(ctx, sx - 34, sy, 5, "#e5e7eb");
          txt(ctx, t("white MgO powder", "مسحوق MgO أبيض"), sx, H * 0.93, { c: C.muted, s: 11 });
          txt(ctx, t("heat and bright light!", "حرارة وضوء ساطع!"), tx + 70, H * 0.3, { c: "#ef4444", s: 13 });
        }
      } else if (cur === "soda") {
        // flask with balloon
        ctx.fillStyle = "rgba(254,243,199,.6)"; ctx.beginPath(); ctx.moveTo(tx - 40, bot); ctx.lineTo(tx - 12, H * 0.45); ctx.lineTo(tx + 12, H * 0.45); ctx.lineTo(tx + 40, bot); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(tx - 12, H * 0.3); ctx.lineTo(tx - 12, H * 0.45); ctx.lineTo(tx - 40, bot); ctx.lineTo(tx + 40, bot); ctx.lineTo(tx + 12, H * 0.45); ctx.lineTo(tx + 12, H * 0.3); ctx.stroke();
        var br = 10 + (added ? prog : 0) * 36; K.dot(ctx, tx, H * 0.3 - br, br, "#f43f5e");
        if (added && prog < 1) for (var b1 = 0; b1 < 4; b1++) K.dot(ctx, tx + K.rnd(-25, 25), K.rnd(H * 0.55, bot - 4), K.rnd(2, 4), "rgba(255,255,255,.9)");
        txt(ctx, t("vinegar", "خل"), tx + 60, bot - 10, { c: C.muted, s: 11, a: "left" });
      } else {
        var liquid = cur === "zncu" ? "rgba(37,99,235," + (0.65 * (1 - (added ? prog : 0)) + 0.06) + ")" : cur === "mgh" ? "rgba(254,240,138,.35)" : "rgba(186,230,253,.35)";
        ctx.fillStyle = liquid; ctx.fillRect(tx - tw / 2, H * 0.35, tw, bot - H * 0.35);
        if (cur === "agcl" && added) { var pc = sun ? "rgba(124,58,237," + 0.9 + ")" : "rgba(248,250,252,.95)"; for (var k = 0; k < 40 * prog; k++) K.dot(ctx, tx - tw / 2 + 6 + (k * 37 % (tw - 12)), bot - 6 - (k * 13 % 22) * prog, 3, pc); if (prog < 1) for (var k2 = 0; k2 < 5; k2++) K.dot(ctx, tx + K.rnd(-20, 20), K.rnd(H * 0.4, bot - 20), 2.5, "rgba(248,250,252,.9)"); }
        if (cur === "zncu" && added) { ctx.fillStyle = "#a1a1aa"; ctx.fillRect(tx - 6, H * 0.2, 12, bot - H * 0.2 - 6); ctx.fillStyle = "rgba(180,83,9," + prog + ")"; ctx.fillRect(tx - 8, H * 0.37, 16, bot - H * 0.37 - 6); }
        if (cur === "mgh" && added) { ctx.fillStyle = "#d4d4d8"; ctx.fillRect(tx - 4, bot - 50 + 30 * prog, 8, 44 - 30 * prog); if (prog < 1 || Math.random() < 0.3) bub.push({ x: tx + K.rnd(-8, 8), y: bot - 20, r: K.rnd(2, 4) }); txt(ctx, "H₂ ↑", tx + 40, H * 0.3, { c: C.ink, s: 14, a: "left" }); }
        if (cur === "sug" && added) { for (var k3 = 0; k3 < 18 * (1 - prog); k3++) K.dot(ctx, tx - tw / 2 + 8 + (k3 * 11 % (tw - 16)), bot - 6 - (k3 % 3) * 4, 2.5, "#f8fafc"); }
        bub.forEach(function (b2) { b2.y -= 70 * dt; }); bub = bub.filter(function (b2) { return b2.y > H * 0.35; });
        bub.forEach(function (b2) { ctx.beginPath(); ctx.arc(b2.x, b2.y, b2.r, 0, 7); ctx.strokeStyle = "rgba(255,255,255,.95)"; ctx.lineWidth = 1.5; ctx.stroke(); });
        ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(tx - tw / 2, top); ctx.lineTo(tx - tw / 2, bot - 14); ctx.quadraticCurveTo(tx - tw / 2, bot + 6, tx, bot + 6); ctx.quadraticCurveTo(tx + tw / 2, bot + 6, tx + tw / 2, bot - 14); ctx.lineTo(tx + tw / 2, top); ctx.stroke();
        if (cur === "mgh" && added) txt(ctx, "T = " + n(Math.round(25 + prog * 15)) + "°C", tx + 70, H * 0.55, { c: "#ef4444", s: 13, a: "left" });
      }
      // the draggable item
      if (!added) {
        var ix = item.x, iy = item.y;
        if (cur === "agcl") { ctx.fillStyle = "#e5e7eb"; K.rr(ctx, ix - 8, iy - 34, 16, 50, 4); ctx.fill(); ctx.fillStyle = "#f43f5e"; K.rr(ctx, ix - 11, iy - 44, 22, 14, 5); ctx.fill(); }
        else if (cur === "zncu") { ctx.fillStyle = "#a1a1aa"; ctx.fillRect(ix - 7, iy - 40, 14, 70); }
        else if (cur === "mgh" || cur === "mgo") { ctx.fillStyle = "#d4d4d8"; ctx.fillRect(ix - 4, iy - 34, 8, 60); if (cur === "mgo") { ctx.strokeStyle = "#475569"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(ix, iy + 26); ctx.lineTo(ix - 30, iy + 40); ctx.moveTo(ix, iy + 26); ctx.lineTo(ix + 30, iy + 40); ctx.stroke(); } }
        else { ctx.fillStyle = "#f8fafc"; K.rr(ctx, ix - 22, iy - 16, 44, 32, 6); ctx.fill(); ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.stroke(); txt(ctx, cur === "soda" ? "NaHCO₃" : "🍬", ix, iy, { c: "#334155", s: 12 }); }
        txt(ctx, "↔ " + t("drag me", "اسحبني"), ix, iy + 52, { c: C.muted, s: 11 });
      }
    });
  };

  /* =========================================================
     6. prep2_balance - balance equations with atom counters and a balance scale
     ========================================================= */
  L.prep2_balance = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick an equation. Tap ▲ and ▼ to change the coefficients (never the subscripts). The scale levels when every element has the same number of atoms on both sides.",
      "اختر معادلة، واضغط ▲ و▼ لتغيير المعاملات (لا الأرقام السفلية أبدًا). يتزن الميزان عندما يتساوى عدد ذرات كل عنصر في الطرفين.")) + '<div class="seg" id="p2eqs"></div>';
    var S = K.make(host, 0.75, 440);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Balance the ammonia equation.", "زن معادلة تكوين النشادر."), t("Balance the burning of methane.", "زن معادلة احتراق الميثان."),
      t("Balance the burning of magnesium.", "زن معادلة احتراق الماغنسيوم."), t("Balance one more equation of your choice.", "زن معادلة أخرى من اختيارك.")], done);
    var COL = { H: "#f8fafc", O: "#ef4444", N: "#3b82f6", C: "#334155", Mg: "#a3a3a3", Al: "#cbd5e1", I: "#7c3aed" }, MASS = { H: 1, C: 12, N: 14, O: 16, Mg: 24, Al: 27, I: 127 };
    // molecule templates: [element, dx, dy] in atom radii
    var MOL = {
      "N₂": [["N", -0.8, 0], ["N", 0.8, 0]], "H₂": [["H", -0.8, 0], ["H", 0.8, 0]], "O₂": [["O", -0.8, 0], ["O", 0.8, 0]], "I₂": [["I", -0.8, 0], ["I", 0.8, 0]],
      "NH₃": [["N", 0, 0], ["H", -1.3, 0.8], ["H", 1.3, 0.8], ["H", 0, -1.4]], "CH₄": [["C", 0, 0], ["H", -1.4, 0], ["H", 1.4, 0], ["H", 0, -1.4], ["H", 0, 1.4]],
      "CO₂": [["O", -1.5, 0], ["C", 0, 0], ["O", 1.5, 0]], "H₂O": [["O", 0, 0], ["H", -1.2, 0.9], ["H", 1.2, 0.9]], "Mg": [["Mg", 0, 0]], "MgO": [["Mg", -0.8, 0], ["O", 0.8, 0]],
      "HI": [["H", -0.8, 0], ["I", 0.8, 0]], "Al": [["Al", 0, 0]], "Al₂O₃": [["Al", -0.8, -0.8], ["Al", 0.8, -0.8], ["O", -1.6, 0.6], ["O", 0, 0.8], ["O", 1.6, 0.6]], "C": [["C", 0, 0]], "CO": [["C", -0.8, 0], ["O", 0.8, 0]]
    };
    var EQS = [
      { id: "nh3", name: ["Ammonia", "النشادر"], L: ["N₂", "H₂"], R: ["NH₃"], g: 0 },
      { id: "ch4", name: ["Methane burning", "احتراق الميثان"], L: ["CH₄", "O₂"], R: ["CO₂", "H₂O"], g: 1 },
      { id: "mgo", name: ["Magnesium oxide", "أكسيد الماغنسيوم"], L: ["Mg", "O₂"], R: ["MgO"], g: 2 },
      { id: "hi", name: ["Hydrogen iodide", "يوديد الهيدروجين"], L: ["H₂", "I₂"], R: ["HI"], g: 3 },
      { id: "al", name: ["Aluminium oxide", "أكسيد الألومنيوم"], L: ["Al", "O₂"], R: ["Al₂O₃"], g: 3 },
      { id: "co", name: ["Carbon monoxide", "أول أكسيد الكربون"], L: ["C", "O₂"], R: ["CO"], g: 3 }
    ];
    var cur = EQS[0], co = [], btns = [], tip = 0, last = "";
    function pick(id) { cur = EQS.filter(function (e) { return e.id === id; })[0]; co = cur.L.concat(cur.R).map(function () { return 1; }); last = ""; report(); }
    K.seg(host, "#p2eqs", EQS.map(function (e) { return [e.id, esc(T(e.name))]; }), cur.id, pick);
    function count(side) { var res = {}, list = side === "L" ? cur.L : cur.R, off = side === "L" ? 0 : cur.L.length; list.forEach(function (f, i) { MOL[f].forEach(function (a) { res[a[0]] = (res[a[0]] || 0) + co[off + i]; }); }); return res; }
    function gcd(a, b) { return b ? gcd(b, a % b) : a; }
    function els() { var o = []; cur.L.concat(cur.R).forEach(function (f) { MOL[f].forEach(function (a) { if (o.indexOf(a[0]) < 0) o.push(a[0]); }); }); return o; }
    function status() {
      var l = count("L"), r = count("R"), ok = els().every(function (e) { return l[e] === r[e]; }), g = co.reduce(gcd);
      return { ok: ok, simple: g === 1, l: l, r: r };
    }
    function text() { var all = cur.L.concat(cur.R), s = ""; all.forEach(function (f, i) { if (i === cur.L.length) s += " → "; else if (i) s += " + "; s += (co[i] > 1 ? co[i] : "") + f; }); return s; }
    function report() {
      var st = status(), msg = st.ok ? (st.simple ? '<b class="ok-t">✔ ' + t("Balanced!", "موزونة!") + "</b>" : "<b>" + t("Balanced, but use the simplest ratio.", "موزونة، لكن استخدم أبسط نسبة.") + "</b>") : "<b>" + t("Not balanced yet", "غير موزونة بعد") + "</b>";
      out.innerHTML = eq(text()) + msg;
      if (st.ok && st.simple && text() !== last) { last = text(); tick(cur.g); E.speak(t("Balanced!", "موزونة!")); }
    }
    pick("nh3");
    S.drag({
      down: function (p) { for (var i = 0; i < btns.length; i++) { var b = btns[i]; if (Math.abs(p.x - b.x) < 24 && Math.abs(p.y - b.y) < 18) { co[b.i] = clamp(co[b.i] + b.d, 1, 6); report(); return true; } } return false; },
      hover: function (p) { return btns.some(function (b) { return Math.abs(p.x - b.x) < 24 && Math.abs(p.y - b.y) < 18; }); }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, all = cur.L.concat(cur.R), nn = all.length, st = status();
      ctx.clearRect(0, 0, W, H); btns = []; ctx.direction = "ltr";
      var colW = W / (nn + 0.6), molTop = H * 0.2, molBot = H * 0.6, r = Math.max(4, Math.min(colW / 10, (molBot - molTop) / 3 / 4.2));
      all.forEach(function (f, i) {
        var x = colW * (i + 0.5) + (i >= cur.L.length ? colW * 0.6 : 0);
        if (i === cur.L.length) txt(ctx, "→", x - colW * 0.8, 40, { c: C.ink, s: 22 });
        else if (i) txt(ctx, "+", x - colW * 0.5, 40, { c: C.ink, s: 20 });
        txt(ctx, "▲", x, 14, { c: "#f97316", s: 15 }); txt(ctx, "▼", x, 66, { c: "#f97316", s: 15 });
        btns.push({ x: x, y: 14, i: i, d: 1 }, { x: x, y: 66, i: i, d: -1 });
        ctx.save(); ctx.direction = "ltr"; txt(ctx, n(co[i]), x - 16, 40, { c: "#f97316", s: 18, a: "right" }); txt(ctx, f, x - 12, 40, { c: C.ink, s: 18, a: "left" }); ctx.restore();
        var slot = (molBot - molTop) / 3;
        for (var k = 0; k < co[i]; k++) {
          var cy = molTop + slot * (Math.floor(k / 2) + 0.5), mx = co[i] === 1 ? x : x + ((k % 2) - 0.5) * colW * 0.46;
          MOL[f].forEach(function (a) { K.dot(ctx, mx + a[1] * r, cy + a[2] * r * 0.8, r, COL[a[0]], "rgba(0,0,0,.35)"); });
        }
      });
      // counters + scale
      var e = els(), tY = H * 0.66, lw = W * 0.3;
      e.forEach(function (el, j) {
        var y = tY + j * 18, lc = st.l[el] || 0, rc = st.r[el] || 0, good = lc === rc;
        K.dot(ctx, 14, y, 6, COL[el], "rgba(0,0,0,.4)"); txt(ctx, el + ": " + n(lc), 26, y, { c: good ? C.ink : "#ef4444", s: 13, a: "left" });
        K.dot(ctx, W - lw + 10, y, 6, COL[el], "rgba(0,0,0,.4)"); txt(ctx, el + ": " + n(rc), W - lw + 22, y, { c: good ? C.ink : "#ef4444", s: 13, a: "left" });
      });
      var mL = 0, mR = 0; e.forEach(function (el) { mL += (st.l[el] || 0) * MASS[el]; mR += (st.r[el] || 0) * MASS[el]; });
      var want = clamp((mR - mL) / Math.max(mL, mR) * 0.6, -0.35, 0.35); tip += (want - tip) * Math.min(1, dt * 5);
      var cx = W / 2, cy = H * 0.74, arm = Math.min(W * 0.17, 120);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, H - 8); ctx.moveTo(cx - 24, H - 8); ctx.lineTo(cx + 24, H - 8); ctx.stroke();
      var ax = Math.cos(tip) * arm, ay = Math.sin(tip) * arm;
      ctx.strokeStyle = st.ok ? "#22c55e" : C.ink; ctx.beginPath(); ctx.moveTo(cx - ax, cy - ay); ctx.lineTo(cx + ax, cy + ay); ctx.stroke();
      [[-1, t("reactants", "المتفاعلات")], [1, t("products", "النواتج")]].forEach(function (s2) { var px = cx + s2[0] * ax, py = cy + s2[0] * ay; ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - 18, py + 22); ctx.lineTo(px + 18, py + 22); ctx.closePath(); ctx.stroke(); txt(ctx, s2[1], px, py + 32, { c: C.muted, s: 11 }); });
      if (st.ok) txt(ctx, st.simple ? "✔" : "≈", cx, cy - 16, { c: "#22c55e", s: 18 });
    });
  };
})();

/* ---------- Prep 2 live simulations (part 2): food tests, photosynthesis, cellular respiration,
   plate tectonics, minerals and soil. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit, P = E.p2kit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var txt = K.txt;
  var hint = P.hint, box = P.box, sl = P.sl, clamp = P.clamp, r1 = P.r1;

  /* =========================================================
     7. prep2_food - drag a reagent bottle into the food sample
     ========================================================= */
  L.prep2_food = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a food sample, then drag a reagent bottle onto the test tube. Benedict's solution needs the hot water bath.",
      "اختر عينة طعام، ثم اسحب زجاجة الكاشف إلى أنبوبة الاختبار. محلول بندكت يحتاج إلى الحمام المائي الساخن.")) + '<div class="seg" id="p2fs"></div>';
    var S = K.make(host, 0.6, 370);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm tg" id="p2bath">♨️ ' + t("Hot water bath", "حمام مائي ساخن") + '</button><button type="button" class="btn sm ghost" id="p2fc">🧽 ' + t("Clean tube", "نظّف الأنبوبة") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Detect starch.", "اكشف عن النشا."), t("Detect a lot of glucose (orange).", "اكشف عن جلوكوز كثير (برتقالي)."), t("Detect fat.", "اكشف عن الدهون."), t("Detect protein.", "اكشف عن البروتين.")], done);
    var FOOD = { potato: [["Potato", "بطاطس"], 1, 0, 0, 0, "#fef3c7"], bread: [["Bread", "خبز"], 1, 0, 0, 0, "#fde68a"], gh: [["Grape juice", "عصير عنب"], 0, 1, 0, 0, "#e9d5ff"], gl: [["Weak glucose solution", "محلول جلوكوز مخفف"], 0, 0.3, 0, 0, "#f1f5f9"],
      white: [["Egg white", "بياض البيض"], 0, 0, 0, 1, "#f8fafc"], yolk: [["Egg yolk", "صفار البيض"], 0, 0, 1, 1, "#facc15"], oil: [["Vegetable oil", "زيت نباتي"], 0, 0, 1, 0, "#fde047"], water: [["Water", "ماء"], 0, 0, 0, 0, "#e0f2fe"] };
    var RG = [["iod", ["Iodine", "اليود"], "#b45309"], ["ben", ["Benedict's", "بندكت"], "#2563eb"], ["sud", ["Sudan (IV)", "سودان ٤"], "#dc2626"], ["biu", ["Biuret", "بيوريت"], "#3b82f6"]];
    var cur = "potato", added = null, prog = 0, bath = false, bot = [], drag = null;
    function homes() { var W = S.W, H = S.H; bot = RG.map(function (r, i) { var o = bot[i] || {}; o.r = r; o.hx = W * 0.08 + (i % 2) * W * 0.13; o.hy = H * 0.35 + Math.floor(i / 2) * H * 0.36; if (o !== drag) { o.x = o.hx; o.y = o.hy; } return o; }); }
    function clean() { added = null; prog = 0; result(); }
    K.seg(host, "#p2fs", Object.keys(FOOD).map(function (k) { return [k, esc(T(FOOD[k][0]))]; }), cur, function (v) { cur = v; clean(); });
    c.querySelector("#p2bath").onclick = function () { bath = !bath; this.classList.toggle("on", bath); };
    c.querySelector("#p2fc").onclick = clean;
    S.onSize = homes;
    function tube() { return { x: S.W * 0.55, y: S.H * 0.15, w: 50, h: S.H * 0.62 }; }
    function colourNow() {
      var f = FOOD[cur];
      if (!added) return f[5];
      if (added === "iod") return f[1] ? "#1e1b4b" : "#b45309";
      if (added === "ben") { if (!bath) return "#2563eb"; return f[2] >= 0.8 ? "#ea580c" : f[2] >= 0.5 ? "#f59e0b" : f[2] > 0 ? "#16a34a" : "#2563eb"; }
      if (added === "sud") return f[3] ? "#fca5a5" : "#fecaca";
      return f[4] ? "#7c3aed" : "#3b82f6";
    }
    function result() {
      var f = FOOD[cur], msg = t("Drag a reagent onto the tube.", "اسحب كاشفًا إلى الأنبوبة.");
      if (added && prog > 0.7) {
        if (added === "iod") msg = f[1] ? t("Dark blue: starch is present.", "أزرق داكن: يوجد نشا.") : t("Stays yellowish-brown: no starch.", "يبقى بنيًا مصفرًا: لا يوجد نشا.");
        else if (added === "ben") msg = !bath ? t("Still blue. Put it in the hot water bath!", "ما زال أزرق. ضعه في الحمام المائي الساخن!") : f[2] >= 0.8 ? t("Orange: a lot of glucose.", "برتقالي: جلوكوز كثير.") : f[2] > 0 ? t("Green: a little glucose.", "أخضر: جلوكوز قليل.") : t("Stays blue: no glucose.", "يبقى أزرق: لا يوجد جلوكوز.");
        else if (added === "sud") msg = f[3] ? t("A red layer on the surface: fat is present.", "طبقة حمراء على السطح: توجد دهون.") : t("No red layer: no fat.", "لا توجد طبقة حمراء: لا دهون.");
        else msg = f[4] ? t("Violet: protein is present.", "بنفسجي: يوجد بروتين.") : t("Stays blue: no protein.", "يبقى أزرق: لا بروتين.");
      }
      out.innerHTML = "<span><b>" + esc(T(f[0])) + "</b></span><span>" + esc(msg) + "</span>";
    }
    homes(); result();
    S.drag({
      down: function (p) { if (added) return false; for (var i = 0; i < bot.length; i++) { var b = bot[i]; if (Math.abs(p.x - b.x) < 26 && Math.abs(p.y - b.y) < 40) { drag = b; return true; } } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () {
        if (!drag) return; var tb = tube();
        if (Math.abs(drag.x - tb.x) < 60 && drag.y < tb.y + tb.h) { added = drag.r[0]; prog = 0; E.speak(T(drag.r[1])); }
        drag.x = drag.hx; drag.y = drag.hy; drag = null;
      },
      hover: function (p) { return !added && bot.some(function (b) { return Math.abs(p.x - b.x) < 26 && Math.abs(p.y - b.y) < 40; }); }
    });
    var shown = -1;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, tb = tube(), f = FOOD[cur];
      if (added && prog < 1) prog = Math.min(1, prog + dt / 1.6);
      var key = (added || "") + (bath ? 1 : 0) + (prog > 0.7 ? 1 : 0); if (key !== shown) { shown = key; result(); }
      if (added && prog > 0.7) {
        if (added === "iod" && f[1]) tick(0);
        if (added === "ben" && bath && f[2] >= 0.8) tick(1);
        if (added === "sud" && f[3]) tick(2);
        if (added === "biu" && f[4]) tick(3);
      }
      ctx.clearRect(0, 0, W, H);
      // water bath
      if (bath) { ctx.fillStyle = "rgba(251,146,60,.25)"; K.rr(ctx, tb.x - 70, tb.y + tb.h * 0.45, 140, tb.h * 0.62, 10); ctx.fill(); for (var k = 0; k < 4; k++) txt(ctx, "〰", tb.x - 50 + k * 33, tb.y + tb.h * 0.42 - (performance.now() / 300 + k) % 1 * 14, { c: "#fb923c", s: 14 }); txt(ctx, t("hot water bath", "حمام مائي ساخن"), tb.x, tb.y + tb.h * 1.12, { c: C.muted, s: 11 }); }
      // tube contents
      var col = colourNow(), fill = tb.h * 0.55, top = tb.y + tb.h - fill;
      ctx.fillStyle = f[5]; ctx.fillRect(tb.x - tb.w / 2, top, tb.w, fill);
      if (added) {
        ctx.globalAlpha = prog; ctx.fillStyle = col;
        if (added === "sud") { ctx.fillRect(tb.x - tb.w / 2, top, tb.w, fill); if (f[3]) { ctx.fillStyle = "#dc2626"; ctx.fillRect(tb.x - tb.w / 2, top, tb.w, 12); } }
        else ctx.fillRect(tb.x - tb.w / 2, top, tb.w, fill);
        ctx.globalAlpha = 1;
      }
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(tb.x - tb.w / 2, tb.y); ctx.lineTo(tb.x - tb.w / 2, tb.y + tb.h - 18); ctx.quadraticCurveTo(tb.x - tb.w / 2, tb.y + tb.h + 6, tb.x, tb.y + tb.h + 6); ctx.quadraticCurveTo(tb.x + tb.w / 2, tb.y + tb.h + 6, tb.x + tb.w / 2, tb.y + tb.h - 18); ctx.lineTo(tb.x + tb.w / 2, tb.y); ctx.stroke();
      txt(ctx, T(f[0]), tb.x, tb.y - 10, { c: C.ink, s: 13 });
      // Benedict colour key
      var kx = W * 0.75, ky = H * 0.2;
      txt(ctx, t("Benedict's key", "مفتاح بندكت"), kx + 40, ky - 12, { c: C.muted, s: 11 });
      [["#2563eb", t("none", "لا يوجد")], ["#16a34a", t("low", "قليل")], ["#f59e0b", t("medium", "متوسط")], ["#ea580c", t("high", "كثير")]].forEach(function (k2, i) { K.dot(ctx, kx, ky + 8 + i * 22, 8, k2[0]); txt(ctx, k2[1], kx + 16, ky + 8 + i * 22, { c: C.ink, s: 12, a: "left" }); });
      txt(ctx, t("Iodine + starch → dark blue", "اليود + النشا ← أزرق داكن"), kx + 40, ky + 112, { c: C.muted, s: 10 });
      txt(ctx, t("Biuret + protein → violet", "بيوريت + بروتين ← بنفسجي"), kx + 40, ky + 128, { c: C.muted, s: 10 });
      txt(ctx, t("Sudan (IV) + fat → red", "سودان ٤ + دهون ← أحمر"), kx + 40, ky + 144, { c: C.muted, s: 10 });
      // bottles
      bot.forEach(function (b) {
        if (added === b.r[0] && b !== drag) ctx.globalAlpha = 0.35;
        ctx.fillStyle = b.r[2]; K.rr(ctx, b.x - 16, b.y - 22, 32, 44, 7); ctx.fill(); ctx.fillStyle = "#475569"; ctx.fillRect(b.x - 7, b.y - 32, 14, 10);
        txt(ctx, T(b.r[1]), b.x, b.y + 36, { c: C.ink, s: 11 }); ctx.globalAlpha = 1;
      });
    });
  };

  /* =========================================================
     8. prep2_photo - pond weed under a lamp: light, CO2, temperature, colour
     ========================================================= */
  L.prep2_photo = function (host, cfg, done) {
    host.innerHTML = hint(t("Change the light, carbon dioxide and temperature, and try coloured filters. Count the oxygen bubbles and watch the rate graph.",
      "غيّر شدة الضوء وثاني أكسيد الكربون ودرجة الحرارة وجرّب المرشحات الملونة. عُدّ فقاعات الأكسجين وراقب منحنى المعدل.")) + '<div class="seg" id="p2pc"></div>';
    var S = K.make(host, 0.58, 370);
    var c = box(host, L._slider(t("Light intensity", "شدة الضوء"), 0, 100, 5, 30, "%") + L._slider(t("Carbon dioxide", "ثاني أكسيد الكربون"), 0, 100, 5, 30, "%") + L._slider(t("Temperature", "درجة الحرارة"), 5, 45, 1, 20, "°C"));
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make the plant give off oxygen bubbles.", "اجعل النبات يطلق فقاعات أكسجين."), t("Find the light colour the plant can hardly use.", "اكتشف لون الضوء الذي لا يكاد النبات يستفيد منه."),
      t("Reach the optimum rate (95% or more).", "صل إلى المعدل الأمثل (٩٥٪ أو أكثر)."), t("Show that too much heat slows photosynthesis.", "أثبت أن الحرارة الزائدة تبطئ البناء الضوئي.")], done);
    var Lt = 30, Co = 30, Tc = 20, col = "w", rate = 0, bub = [], acc = 0, glu = 0, o2 = 0, hist = [], hacc = 0, time = 0;
    var COLS = { w: ["#fef9c3", 1, ["White", "أبيض"]], r: ["#fca5a5", 0.9, ["Red", "أحمر"]], b: ["#93c5fd", 0.85, ["Blue", "أزرق"]], g: ["#86efac", 0.12, ["Green", "أخضر"]] };
    K.seg(host, "#p2pc", Object.keys(COLS).map(function (k) { return [k, "🔦 " + esc(T(COLS[k][2]))]; }), col, function (v) { col = v; });
    sl(c, 0, function (v) { return n(v) + "%"; }, function (v) { Lt = v; });
    sl(c, 1, function (v) { return n(v) + "%"; }, function (v) { Co = v; });
    sl(c, 2, function (v) { return n(v) + "°C"; }, function (v) { Tc = v; });
    function fT(x) { return x <= 25 ? 0.25 + 0.75 * (x - 5) / 20 : x <= 32 ? 1 : Math.max(0, 1 - (x - 32) / 15); }
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, lim = Math.min(Math.min(Lt / 70, 1), Math.min(Co / 60, 1));
      var target = 100 * lim * fT(Tc) * COLS[col][1];
      rate += (target - rate) * Math.min(1, dt * 2); time += dt;
      acc += rate / 100 * 7 * dt; while (acc >= 1) { acc -= 1; bub.push({ x: K.rnd(0.3, 0.7), y: K.rnd(0.35, 0.6), r: K.rnd(2.5, 4.5) }); o2++; }
      glu += rate / 100 * dt * 0.5;
      hacc += dt; if (hacc > 0.25) { hacc = 0; hist.push(rate); if (hist.length > 120) hist.shift(); }
      if (rate > 30) tick(0);
      if (col === "g" && Lt >= 50 && Co >= 40 && Tc >= 20 && Tc <= 35 && rate < 15) tick(1);
      if (rate >= 95) tick(2);
      if (Tc >= 40 && lim >= 0.9 && rate < 60) tick(3);
      ctx.clearRect(0, 0, W, H);
      var bx = W * 0.2, bw = W * 0.34, by = H * 0.18, bh = H * 0.74, lx = W * 0.06, ly = H * 0.45;
      // light beam
      if (Lt > 0) { var gr = ctx.createLinearGradient(lx, 0, bx + bw, 0); gr.addColorStop(0, COLS[col][0]); gr.addColorStop(1, "rgba(255,255,255,0)"); ctx.globalAlpha = 0.25 + Lt / 140; ctx.fillStyle = gr; ctx.beginPath(); ctx.moveTo(lx + 14, ly - 14); ctx.lineTo(bx + bw, by); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(lx + 14, ly + 14); ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1; }
      K.dot(ctx, lx, ly, 16, Lt > 0 ? COLS[col][0] : "#e5e7eb", C.muted); ctx.fillStyle = "#64748b"; ctx.fillRect(lx - 22, ly - 8, 8, 16);
      // beaker + water
      ctx.fillStyle = "rgba(59,130,246,.18)"; ctx.fillRect(bx, by + bh * 0.12, bw, bh * 0.88);
      for (var k = 0; k < Math.round(Co / 10); k++) txt(ctx, "CO₂", bx + 12 + (k * 41 % (bw - 24)), by + bh * 0.2 + (k * 29 % (bh * 0.6)), { c: "rgba(100,116,139,.6)", s: 9 });
      // pond weed
      ctx.strokeStyle = "#15803d"; ctx.lineWidth = 3;
      [0.35, 0.5, 0.65].forEach(function (sx, i) {
        var x = bx + bw * sx, sw = Math.sin(performance.now() / 900 + i) * 4; ctx.beginPath(); ctx.moveTo(x, by + bh); ctx.quadraticCurveTo(x + sw, by + bh * 0.6, x + sw * 0.5, by + bh * 0.3); ctx.stroke();
        for (var j = 0; j < 6; j++) { var yy = by + bh * (0.35 + j * 0.1); ctx.fillStyle = rate > 5 ? "#22c55e" : "#4d7c0f"; ctx.beginPath(); ctx.ellipse(x - 8 + sw * 0.6, yy, 9, 3.5, -0.5, 0, 7); ctx.fill(); ctx.beginPath(); ctx.ellipse(x + 8 + sw * 0.6, yy + 5, 9, 3.5, 0.5, 0, 7); ctx.fill(); }
      });
      bub.forEach(function (b) { b.y -= 0.35 * dt; }); bub = bub.filter(function (b) { return b.y > 0.13; });
      bub.forEach(function (b) { ctx.beginPath(); ctx.arc(bx + b.x * bw, by + b.y * bh, b.r, 0, 7); ctx.strokeStyle = "rgba(255,255,255,.95)"; ctx.lineWidth = 1.5; ctx.stroke(); });
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw, by); ctx.stroke();
      txt(ctx, "O₂ ↑ " + n(o2), bx + bw / 2, by - 10, { c: C.ink, s: 13 });
      txt(ctx, "T = " + n(Tc) + "°C", bx + bw - 4, by + bh * 0.06, { c: "#ef4444", s: 12, a: "right" });
      // rate graph
      var gx = bx + bw + 34, gw = W - gx - 12, gy = 18, gh = H * 0.78;
      ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh); ctx.stroke();
      txt(ctx, n(100) + "%", gx - 4, gy, { a: "right", c: C.muted, s: 10 }); txt(ctx, n(0), gx - 4, gy + gh, { a: "right", c: C.muted, s: 10 });
      txt(ctx, t("rate", "المعدل"), gx + 4, gy + 6, { a: "left", c: C.muted, s: 11 }); txt(ctx, t("time →", "الزمن ←"), gx + gw, gy + gh + 12, { a: "right", c: C.muted, s: 10 });
      ctx.strokeStyle = "#22c55e"; ctx.lineWidth = 3; ctx.beginPath();
      hist.forEach(function (v, i) { var px = gx + gw * i / 119, py = gy + gh * (1 - v / 100); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }); ctx.stroke();
      // limiting factor
      var lf = Lt / 70 < Co / 60 ? t("light", "الضوء") : t("carbon dioxide", "ثاني أكسيد الكربون");
      if (lim >= 1) lf = Tc > 32 ? t("temperature (too hot)", "درجة الحرارة (مرتفعة جدًا)") : t("none: optimum", "لا شيء: الوضع الأمثل");
      out.innerHTML = "<span>" + t("Rate: ", "المعدل: ") + "<b>" + n(Math.round(rate)) + "%</b></span><span>" + t("Glucose made: ", "الجلوكوز المصنوع: ") + "<b>" + n(Math.floor(glu)) + "</b> " + t("molecules", "جزيء") + "</span><span>" + t("Limiting factor: ", "العامل المحدد: ") + "<b>" + esc(lf) + "</b></span>" + eq("6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂");
    });
  };

  /* =========================================================
     9. prep2_resp - glucose + oxygen in a muscle cell, exercise slider
     ========================================================= */
  L.prep2_resp = function (host, cfg, done) {
    host.innerHTML = hint(t("Set how hard the person exercises. Glucose (hexagons) splits in the cytoplasm, then the pieces go into the mitochondria. Switch the oxygen off and on, and add mitochondria.",
      "اضبط شدة التمرين. الجلوكوز (الأشكال السداسية) يتكسر في السيتوبلازم ثم تدخل أجزاؤه الميتوكوندريا. أوقف الأكسجين وشغّله، وأضف ميتوكوندريا."));
    var S = K.make(host, 0.6, 380);
    var c = box(host, L._slider(t("Exercise", "التمرين"), 0, 100, 5, 20, "%") + L._slider(t("Mitochondria", "الميتوكوندريا"), 1, 4, 1, 1, "") +
      '<div class="btn-row"><button type="button" class="btn sm tg on" id="p2o2">🫁 ' + t("Oxygen supply", "إمداد الأكسجين") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Release energy from glucose with oxygen.", "أطلق الطاقة من الجلوكوز بالأكسجين."), t("Cut off the oxygen: only the first stage works.", "اقطع الأكسجين: تعمل المرحلة الأولى فقط."),
      t("Watch carbon dioxide and water leave the cell.", "شاهد ثاني أكسيد الكربون والماء يغادران الخلية."), t("Power a run (exercise 80% or more) for 5 seconds.", "شغّل الجري (تمرين ٨٠٪ أو أكثر) لمدة ٥ ثوانٍ.")], done);
    var ex = 20, mito = 1, ox = true, En = 60, gl = [], py = [], o2 = [], wst = [], sp = [], spawn = 0.95, cnt = { g: 0, s2: 0, s1off: 0, co2: 0, h2o: 0 }, runT = 0, prod = 0;
    sl(c, 0, function (v) { return n(v) + "%"; }, function (v) { ex = v; });
    sl(c, 1, function (v) { return n(v); }, function (v) { mito = v; });
    c.querySelector("#p2o2").onclick = function () { ox = !ox; this.classList.toggle("on", ox); };
    function geo() { var W = S.W, H = S.H; return { x: W * 0.12, y: H * 0.08, w: W * 0.6, h: H * 0.84 }; }
    function mpos(i) { var g = geo(), spots = [[0.7, 0.3], [0.7, 0.72], [0.4, 0.25], [0.42, 0.78]]; return { x: g.x + g.w * spots[i][0], y: g.y + g.h * spots[i][1] }; }
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), D = 2 + ex * 0.12;
      var gRate = ox ? Math.min(D / 19 * 1.15, mito * 0.35) : 1.2;
      spawn += gRate * dt; while (spawn >= 1) { spawn -= 1; gl.push({ x: g.x - 10, y: g.y + g.h * K.rnd(0.3, 0.7), tx: g.x + g.w * K.rnd(0.12, 0.3), ty: g.y + g.h * K.rnd(0.3, 0.7), t: 0 }); }
      prod = 0;
      gl = gl.filter(function (q) {
        q.t += dt; q.x += (q.tx - q.x) * Math.min(1, dt * 2.5); q.y += (q.ty - q.y) * Math.min(1, dt * 2.5);
        if (q.t > 1.1) { En += 1; prod += 1; cnt.g++; if (!ox) cnt.s1off++; for (var k = 0; k < 2; k++) { var m = Math.floor(Math.random() * mito), mp = mpos(m); py.push({ x: q.x, y: q.y + (k ? 8 : -8), m: m, tx: mp.x, ty: mp.y, t: 0 }); } sp.push({ x: q.x, y: q.y, t: 0.5, big: false }); return false; }
        return true;
      });
      if (ox && Math.random() < dt * (2 + mito * 2)) { var m2 = Math.floor(Math.random() * mito), mp2 = mpos(m2); o2.push({ x: g.x + g.w * K.rnd(0.3, 0.9), y: g.y - 6, tx: mp2.x, ty: mp2.y }); }
      o2.forEach(function (q) { q.x += (q.tx - q.x) * dt * 1.5; q.y += (q.ty - q.y) * dt * 1.5; }); o2 = o2.filter(function (q) { return Math.hypot(q.x - q.tx, q.y - q.ty) > 10; });
      py = py.filter(function (q) {
        q.t += dt;
        if (!ox) { q.x += K.rnd(-20, 20) * dt; q.y += K.rnd(-20, 20) * dt; return q.t < 2.5; }
        q.x += (q.tx - q.x) * Math.min(1, dt * 2); q.y += (q.ty - q.y) * Math.min(1, dt * 2);
        if (q.t > 1.2 && mpos(Math.min(q.m, mito - 1))) {
          En += 9; prod += 9; cnt.s2++; sp.push({ x: q.tx, y: q.ty, t: 0.7, big: true });
          for (var k2 = 0; k2 < 3; k2++) wst.push({ x: q.tx, y: q.ty, vx: K.rnd(60, 140), vy: K.rnd(-60, 60), c: k2 < 2 ? 0 : 1 });
          return false;
        }
        return true;
      });
      wst.forEach(function (w) { w.x += w.vx * dt; w.y += w.vy * dt; }); wst = wst.filter(function (w) { if (!w.out && w.x > g.x + g.w + 4) { w.out = 1; if (w.c === 0) cnt.co2++; else cnt.h2o++; } return w.x < W + 10; });
      sp.forEach(function (s2) { s2.t -= dt; }); sp = sp.filter(function (s2) { return s2.t > 0; });
      En = clamp(En - D * dt, 0, 100);
      if (cnt.s2 >= 1) tick(0);
      if (cnt.s1off >= 2) tick(1);
      if (cnt.co2 + cnt.h2o >= 10) tick(2);
      var enough = ox && gRate * 19 >= D - 0.05;
      if (ex >= 80 && enough && En > 30) { runT += dt; if (runT >= 5) tick(3); } else runT = 0;
      ctx.clearRect(0, 0, W, H);
      // blood vessel + cell
      ctx.fillStyle = "rgba(239,68,68,.18)"; ctx.fillRect(0, 0, g.x - 8, H); txt(ctx, t("blood", "الدم"), (g.x - 8) / 2, H - 12, { c: "#ef4444", s: 11 });
      ctx.fillStyle = "rgba(244,114,182,.12)"; K.rr(ctx, g.x, g.y, g.w, g.h, 26); ctx.fill(); ctx.strokeStyle = "#db2777"; ctx.lineWidth = 3; ctx.stroke();
      txt(ctx, t("cytoplasm (stage 1)", "السيتوبلازم (المرحلة ١)"), g.x + g.w * 0.2, g.y + 16, { c: C.muted, s: 11 });
      for (var i = 0; i < 4; i++) {
        var mp3 = mpos(i), on = i < mito, mw = Math.min(g.w * 0.2, 80), mh = mw * 0.5;
        ctx.globalAlpha = on ? 1 : 0.15; ctx.fillStyle = "#fed7aa"; ctx.beginPath(); ctx.ellipse(mp3.x, mp3.y, mw / 2, mh / 2, 0, 0, 7); ctx.fill(); ctx.strokeStyle = "#c2410c"; ctx.lineWidth = 2; ctx.stroke();
        ctx.beginPath(); for (var j = 0; j <= 8; j++) { var xx = mp3.x - mw * 0.4 + mw * 0.8 * j / 8, yy = mp3.y + (j % 2 ? mh * 0.28 : -mh * 0.28); if (j) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); } ctx.strokeStyle = "#ea580c"; ctx.stroke(); ctx.globalAlpha = 1;
      }
      txt(ctx, t("mitochondria (stage 2)", "الميتوكوندريا (المرحلة ٢)"), mpos(0).x, mpos(0).y - g.h * 0.16, { c: C.muted, s: 11 });
      gl.forEach(function (q) { ctx.beginPath(); for (var k3 = 0; k3 < 6; k3++) { var a = k3 * Math.PI / 3; ctx.lineTo(q.x + 9 * Math.cos(a), q.y + 9 * Math.sin(a)); } ctx.closePath(); ctx.fillStyle = "#facc15"; ctx.fill(); ctx.strokeStyle = "#a16207"; ctx.lineWidth = 1.5; ctx.stroke(); });
      py.forEach(function (q) { K.dot(ctx, q.x, q.y, 5, "#fb923c", "#9a3412"); });
      o2.forEach(function (q) { K.dot(ctx, q.x - 3, q.y, 3.5, "#3b82f6"); K.dot(ctx, q.x + 3, q.y, 3.5, "#3b82f6"); });
      wst.forEach(function (w) { if (w.c === 0) { K.dot(ctx, w.x, w.y, 3.5, "#64748b"); } else K.dot(ctx, w.x, w.y, 3.5, "#38bdf8"); });
      sp.forEach(function (s2) { var rr = (s2.big ? 22 : 9) * (1 - s2.t); ctx.strokeStyle = "rgba(250,204,21," + s2.t + ")"; ctx.lineWidth = s2.big ? 4 : 2; ctx.beginPath(); ctx.arc(s2.x, s2.y, rr + 4, 0, 7); ctx.stroke(); });
      // energy bar
      var ex0 = g.x + g.w + 18, ew = W - ex0 - 12, eh = H * 0.6, ey = H * 0.12;
      txt(ctx, t("energy", "الطاقة"), ex0 + ew / 2, ey - 8, { c: C.ink, s: 12 });
      ctx.fillStyle = C.line; K.rr(ctx, ex0 + ew * 0.3, ey, ew * 0.4, eh, 6); ctx.fill();
      ctx.fillStyle = En > 30 ? "#facc15" : "#ef4444"; K.rr(ctx, ex0 + ew * 0.3, ey + eh * (1 - En / 100), ew * 0.4, eh * En / 100, 6); ctx.fill();
      txt(ctx, n(Math.round(En)) + "%", ex0 + ew / 2, ey + eh + 14, { c: C.ink, s: 12 });
      txt(ctx, ex >= 80 ? "🏃" : ex >= 30 ? "🚶" : "🧍", ex0 + ew / 2, ey + eh + 38, { s: 22 });
      if (En < 15) txt(ctx, t("tired!", "مُتعب!"), ex0 + ew / 2, ey + eh + 60, { c: "#ef4444", s: 12 });
      out.innerHTML = "<span>" + t("Glucose used: ", "الجلوكوز المستهلك: ") + "<b>" + n(cnt.g) + "</b></span><span>CO₂ " + t("out: ", "الخارج: ") + "<b>" + n(cnt.co2) + "</b></span><span>H₂O " + t("out: ", "الخارج: ") + "<b>" + n(cnt.h2o) + "</b></span><span>" + (ox ? t("Oxygen on: both stages, a lot of energy", "الأكسجين متاح: المرحلتان وطاقة كبيرة") : t("No oxygen: stage 1 only, limited energy", "لا أكسجين: المرحلة الأولى فقط وطاقة محدودة")) + "</span>" + (ex >= 60 && !enough ? '<span class="chip red">' + (ox ? t("Not enough mitochondria to keep up!", "الميتوكوندريا غير كافية لتلبية الطلب!") : t("No oxygen: the muscle tires quickly.", "لا أكسجين: تتعب العضلة بسرعة.")) + "</span>" : "") + eq("C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy");
    });
  };

  /* =========================================================
     10. prep2_plates - drag the plates: diverge, converge, transform; meteorite
     ========================================================= */
  L.prep2_plates = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a plate pair. Drag the right-hand plate left (towards) or right (apart). In transform mode, drag a plate up or down along the fault. Try a meteorite too.",
      "اختر زوجًا من الألواح. اسحب اللوح الأيمن لليسار (تقارب) أو لليمين (تباعد). في الوضع الانزلاقي اسحب اللوح لأعلى أو لأسفل على طول الصدع. وجرّب سقوط نيزك.")) + '<div class="seg" id="p2pl"></div>';
    var S = K.make(host, 0.6, 380);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm" id="p2met">☄️ ' + t("Drop a meteorite", "أسقط نيزكًا") + '</button><button type="button" class="btn sm ghost" id="p2plr">↺</button></div>');
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Open a new sea between two continents (like the Red Sea).", "افتح بحرًا جديدًا بين قارتين (مثل البحر الأحمر)."), t("Build high mountains from two continents (like the Himalayas).", "ابنِ جبالًا عالية من قارتين (مثل الهيمالايا)."),
      t("Make a volcano where one plate sinks under another.", "كوّن بركانًا حيث ينزلق لوح تحت آخر."), t("Cause an earthquake at a transform fault.", "سبّب زلزالًا عند صدع انزلاقي."), t("Make a crater with a meteorite.", "كوّن فوهة بنيزك.")], done);
    var mode = "cc", d = 0, drag = false, dx0 = 0, d0 = 0, slip = 0, stress = 0, off = 0, shake = 0, seis = [], met = null, craters = [], lava = [];
    var NM = { cc: ["Continent + continent", "قارة + قارة"], oc: ["Ocean + continent", "محيط + قارة"], oo: ["Ocean + ocean", "محيط + محيط"], tf: ["Transform (top view)", "انزلاقي (منظر علوي)"] };
    K.seg(host, "#p2pl", Object.keys(NM).map(function (k) { return [k, esc(T(NM[k]))]; }), mode, function (v) { mode = v; d = 0; stress = 0; off = 0; slip = 0; craters = []; });
    c.querySelector("#p2met").onclick = function () { if (mode === "tf") { E.toast(t("Use a cross-section view for the meteorite.", "استخدم منظر المقطع للنيزك.")); return; } if (!met) met = { x: S.W * 0.08, y: -10, tx: S.W * K.rnd(0.72, 0.9), ty: S.H * (mode === "oo" ? 0.5 : 0.28) }; };
    c.querySelector("#p2plr").onclick = function () { d = 0; stress = 0; off = 0; slip = 0; craters = []; seis = []; };
    function geo() { var W = S.W, H = S.H; return { sea: H * 0.32, surf: H * 0.4, mid: W * 0.5 }; }
    S.drag({
      down: function (p) { if (mode === "tf") { if (p.x > S.W * 0.5) { drag = true; dx0 = p.y; d0 = slip; return true; } return false; } if (p.x > S.W * 0.45 && p.y > S.H * 0.2 && p.y < S.H * 0.8) { drag = true; dx0 = p.x; d0 = d; return true; } return false; },
      move: function (p) { if (!drag) return; if (mode === "tf") { slip = clamp(d0 + (p.y - dx0) / S.H, -0.35, 0.35); } else d = clamp(d0 + (p.x - dx0) / (S.W * 0.25), -1, 1); },
      up: function () { drag = false; },
      hover: function (p) { return mode === "tf" ? p.x > S.W * 0.5 : p.x > S.W * 0.45 && p.y > S.H * 0.2 && p.y < S.H * 0.8; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), msg = "";
      ctx.clearRect(0, 0, W, H);
      var sx = shake > 0 ? K.rnd(-6, 6) * shake : 0; shake = Math.max(0, shake - dt * 0.8);
      ctx.save(); ctx.translate(sx, 0);
      if (mode !== "tf") {
        var conv = Math.max(0, -d), div = Math.max(0, d), contL = mode === "cc", contR = mode !== "oo";
        // mantle with convection arrows
        ctx.fillStyle = "#fdba74"; ctx.fillRect(-10, H * 0.62, W + 20, H * 0.4);
        var ph = performance.now() / 1000;
        for (var a = 0; a < 2; a++) { var cx = W * (0.25 + a * 0.5), dir = (d >= 0 ? 1 : -1) * (a ? 1 : -1); ctx.strokeStyle = "rgba(124,45,18,.45)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(cx, H * 0.8, W * 0.18, H * 0.1, 0, 0, 7); ctx.stroke(); var an = ph * dir; K.dot(ctx, cx + Math.cos(an) * W * 0.18, H * 0.8 + Math.sin(an) * H * 0.1, 4, "#7c2d12"); }
        txt(ctx, t("mantle (convection currents)", "الوشاح (تيارات الحمل)"), W * 0.5, H * 0.95, { c: "#7c2d12", s: 11 });
        // sea
        ctx.fillStyle = "rgba(59,130,246,.35)"; ctx.fillRect(-10, g.sea, W + 20, H * 0.62 - g.sea);
        var gap = div * W * 0.22, lEdge = g.mid - gap / 2, rEdge = g.mid + gap / 2 + (conv > 0 && mode === "cc" ? 0 : 0);
        function plate(x0, x1, cont, ytop) { ctx.fillStyle = cont ? "#a16207" : "#57534e"; ctx.fillRect(x0, ytop, x1 - x0, H * 0.62 - ytop); ctx.fillStyle = cont ? "#65a30d" : "#44403c"; ctx.fillRect(x0, ytop, x1 - x0, 5); }
        var yL = contL ? H * 0.28 : H * 0.5, yR = contR ? H * 0.28 : H * 0.5;
        if (div > 0) {
          plate(-10, lEdge, contL, yL); plate(rEdge, W + 10, contR, yR);
          ctx.fillStyle = "#44403c"; ctx.fillRect(lEdge, H * 0.52, gap, H * 0.1);
          ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.moveTo(g.mid - 10, H * 0.62); ctx.lineTo(g.mid, H * 0.5); ctx.lineTo(g.mid + 10, H * 0.62); ctx.fill();
          msg = contL && contR ? (div > 0.6 ? t("A new sea fills the rift, like the Red Sea.", "بحر جديد يملأ الأخدود، مثل البحر الأحمر.") : t("A rift valley opens; magma rises.", "ينفتح وادٍ أخدودي وتصعد الصهارة.")) : t("Divergent: new oceanic crust forms.", "تباعد: تتكون قشرة محيطية جديدة.");
          if (contL && contR && div > 0.6) tick(0);
        } else {
          var push = conv * W * 0.12;
          if (mode === "cc") {
            plate(-10, g.mid + push * 0.3, true, yL); plate(g.mid - push * 0.3, W + 10, true, yR);
            var mh = conv * H * 0.24; ctx.fillStyle = "#78716c"; ctx.beginPath(); ctx.moveTo(g.mid - W * 0.16, yL); ctx.lineTo(g.mid - W * 0.05, yL - mh * 0.7); ctx.lineTo(g.mid, yL - mh); ctx.lineTo(g.mid + W * 0.06, yL - mh * 0.75); ctx.lineTo(g.mid + W * 0.16, yL); ctx.fill();
            if (mh > 20) { ctx.fillStyle = "#f8fafc"; ctx.beginPath(); ctx.moveTo(g.mid - 12, yL - mh + 12); ctx.lineTo(g.mid, yL - mh); ctx.lineTo(g.mid + 12, yL - mh + 12); ctx.fill(); }
            msg = conv > 0.6 ? t("Two continents crumple up into high mountains, like the Himalayas.", "قارتان تنثنيان لأعلى فتتكون جبال عالية مثل الهيمالايا.") : t("Convergent: the continents push together.", "تقارب: القارتان تتدافعان.");
            if (conv > 0.6) tick(1);
          } else {
            // left plate oceanic sinks under right plate
            var bxp = g.mid + push * 0.2;
            plate(-10, bxp, false, H * 0.5);
            ctx.fillStyle = "#57534e"; ctx.beginPath(); ctx.moveTo(bxp, H * 0.5); ctx.lineTo(bxp + conv * W * 0.25, H * 0.5 + conv * H * 0.35); ctx.lineTo(bxp + conv * W * 0.25 - 18, H * 0.5 + conv * H * 0.35 + 14); ctx.lineTo(bxp - 12, H * 0.62); ctx.closePath(); ctx.fill();
            plate(bxp, W + 10, contR, yR);
            var vh = conv * (contR ? H * 0.16 : H * 0.3), vx = bxp + W * 0.12, base = contR ? yR : H * 0.5;
            ctx.fillStyle = "#57534e"; ctx.beginPath(); ctx.moveTo(vx - W * 0.09, base); ctx.lineTo(vx - 8, base - vh); ctx.lineTo(vx + 8, base - vh); ctx.lineTo(vx + W * 0.09, base); ctx.fill();
            if (conv > 0.5) { ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(vx, base - vh); ctx.lineTo(vx, H * 0.62); ctx.stroke(); if (Math.random() < 0.3) lava.push({ x: vx, y: base - vh, vx: K.rnd(-30, 30), vy: K.rnd(-90, -40), t: 1 }); tick(2); }
            msg = contR ? t("The denser oceanic plate sinks under the continent; rock melts and a volcano forms (Andes).", "اللوح المحيطي الأكثف ينزلق تحت القارة فتنصهر الصخور ويتكون بركان (الأنديز).") : (base - vh < g.sea ? t("A chain of volcanic islands rises from the sea (Japan).", "سلسلة جزر بركانية ترتفع من البحر (اليابان).") : t("One oceanic plate sinks under the other.", "لوح محيطي ينزلق تحت الآخر."));
          }
          if (d === 0) msg = t("Drag the right plate left or right.", "اسحب اللوح الأيمن لليسار أو لليمين.");
        }
        lava.forEach(function (q) { q.x += q.vx * dt; q.y += q.vy * dt; q.vy += 120 * dt; q.t -= dt; }); lava = lava.filter(function (q) { return q.t > 0; });
        lava.forEach(function (q) { K.dot(ctx, q.x, q.y, 3, "#f97316"); });
        craters.forEach(function (cr) { ctx.fillStyle = "#44403c"; ctx.beginPath(); ctx.ellipse(cr.x, cr.y + 2, 22, 7, 0, 0, Math.PI); ctx.fill(); });
        if (met) {
          met.x += (met.tx - met.x) * dt * 2.2; met.y += (met.ty - met.y) * dt * 2.2;
          K.dot(ctx, met.x, met.y, 7, "#78350f"); ctx.strokeStyle = "rgba(249,115,22,.7)"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(met.x, met.y); ctx.lineTo(met.x - 40, met.y - 30); ctx.stroke();
          if (Math.abs(met.y - met.ty) < 4) { craters.push({ x: met.x, y: met.ty }); met = null; shake = 0.6; tick(4); E.speak(t("Impact! A crater formed.", "اصطدام! تكونت فوهة.")); }
        }
        txt(ctx, t("drag ↔", "اسحب ↔"), W * 0.85, H * 0.22, { c: C.muted, s: 12 });
      } else {
        // transform: top view
        var fx = W * 0.5, seg = 40;
        stress = clamp(Math.abs(slip - off) * 6, 0, 1.2);
        if (stress >= 1) { off = slip; stress = 0; shake = 1; seis.push(1); tick(3); E.speak(t("Earthquake!", "زلزال!")); }
        ctx.fillStyle = "#a3e635"; ctx.fillRect(0, 0, fx, H); ctx.fillStyle = "#bef264"; ctx.fillRect(fx, 0, W - fx, H);
        var shiftR = off * H, bend = (slip - off) * H;
        // a road crossing the fault
        ctx.strokeStyle = "#475569"; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(0, H * 0.5); ctx.lineTo(fx - 60, H * 0.5); ctx.quadraticCurveTo(fx, H * 0.5 + bend * 0.5, fx, H * 0.5 + bend * 0.5); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(fx, H * 0.5 + shiftR + bend * 0.5); ctx.quadraticCurveTo(fx + 60, H * 0.5 + shiftR + bend, fx + 100, H * 0.5 + shiftR + bend); ctx.lineTo(W, H * 0.5 + shiftR + bend); ctx.stroke();
        ctx.strokeStyle = "#7c2d12"; ctx.lineWidth = 3; ctx.setLineDash([10, 6]); ctx.beginPath(); ctx.moveTo(fx, 0); ctx.lineTo(fx, H); ctx.stroke(); ctx.setLineDash([]);
        txt(ctx, t("fault", "الصدع"), fx + 6, 16, { c: "#7c2d12", s: 12, a: "left" });
        txt(ctx, t("drag this plate ↕", "اسحب هذا اللوح ↕"), W * 0.78, H * 0.15, { c: "#1f2937", s: 12 });
        // stress bar + seismograph
        ctx.fillStyle = "rgba(255,255,255,.8)"; K.rr(ctx, 10, H - 70, W * 0.4, 60, 8); ctx.fill();
        txt(ctx, t("stress in the rocks", "الإجهاد في الصخور"), 20, H - 58, { c: "#1f2937", s: 11, a: "left" });
        ctx.fillStyle = "#e5e7eb"; ctx.fillRect(20, H - 46, W * 0.4 - 20, 8); ctx.fillStyle = stress > 0.75 ? "#ef4444" : "#f59e0b"; ctx.fillRect(20, H - 46, (W * 0.4 - 20) * Math.min(1, stress), 8);
        ctx.strokeStyle = "#1f2937"; ctx.lineWidth = 1.5; ctx.beginPath();
        for (var s = 0; s < 60; s++) { var xx = 20 + s * (W * 0.4 - 20) / 60, yy = H - 22 + Math.sin(s * 1.7 + performance.now() / 60) * (shake * 12 + 1); if (s) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); } ctx.stroke();
        msg = stress > 0 ? t("The rocks bend and store energy...", "الصخور تنثني وتخزن الطاقة...") : t("Plates slide side by side along the fault (San Andreas).", "الألواح تنزلق جنبًا إلى جنب على طول الصدع (سان أندرياس).");
        if (shake > 0.3) msg = t("Earthquake! The stored energy was released at the plate boundary.", "زلزال! انطلقت الطاقة المخزنة عند حدود الألواح.");
      }
      ctx.restore();
      out.innerHTML = "<span>" + esc(msg) + "</span>";
    });
  };

  /* =========================================================
     11. prep2_crystal - magma cooling, hydrothermal vent, soil formation
     ========================================================= */
  L.prep2_crystal = function (host, cfg, done) {
    host.innerHTML = hint(t("Magma: choose the magma type and cooling speed, then press Cool. Vent: turn up the vent temperature. Soil: switch on the weathering agents and the river.",
      "الصهارة: اختر نوع الصهارة وسرعة التبريد ثم اضغط «برّد». الفتحة: ارفع درجة حرارة الفتحة. التربة: شغّل عوامل التجوية والنهر.")) + '<div class="seg" id="p2cm"></div>';
    var S = K.make(host, 0.6, 380);
    var c = box(host, '<div id="p2cA"><div class="seg" id="p2mt"></div>' + L._slider(t("Cooling speed", "سرعة التبريد"), 1, 10, 1, 3, "") + '<div class="btn-row"><button type="button" class="btn sm primary" id="p2cool">❄️ ' + t("Cool the magma", "برّد الصهارة") + "</button></div></div>" +
      '<div id="p2cB" style="display:none">' + L._slider(t("Vent water temperature", "درجة حرارة ماء الفتحة"), 100, 400, 10, 150, "°C") + "</div>" +
      '<div id="p2cC" style="display:none"><div class="btn-row"><button type="button" class="btn sm tg" id="w0">💨 ' + t("Wind", "الرياح") + '</button><button type="button" class="btn sm tg" id="w1">🌧️ ' + t("Running water", "المياه الجارية") + '</button><button type="button" class="btn sm tg" id="w2">🌡️ ' + t("Hot days, cold nights", "نهار حار وليل بارد") + '</button><button type="button" class="btn sm tg" id="w3">🌱 ' + t("Plant roots", "جذور النباتات") + '</button><button type="button" class="btn sm tg" id="w4">🏞️ ' + t("River", "النهر") + "</button></div></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Grow large crystals by cooling magma slowly.", "كوّن بلورات كبيرة بتبريد الصهارة ببطء."), t("Make quartz and mica from silica-rich magma.", "كوّن الكوارتز والميكا من صهارة غنية بالسيليكا."),
      t("Make olivine and pyroxene from Mg-Fe rich magma.", "كوّن الأوليفين والبيروكسين من صهارة غنية بالماغنسيوم والحديد."), t("Build a mineral chimney at a hydrothermal vent.", "ابنِ مدخنة معادن عند فتحة حرمائية."),
      t("Weather rock into soil and let the river carry it to a delta.", "فتّت الصخر إلى تربة ودع النهر ينقلها إلى دلتا.")], done);
    var mode = "mg", mt = "si", spd = 3, Tg = 1200, cooling = false, nuc = [], fin = false;
    var vT = 150, chim = 0, fl = [], dep = [];
    var wx = [false, false, false, false, false], soil = 0, humus = 0, delta = 0, frag = [], carried = [];
    var MIN = { si: [[["Quartz", "الكوارتز"], "rgba(241,245,249,.9)", 6], [["Mica", "الميكا"], "#a16207", 4]], mg: [[["Olivine", "الأوليفين"], "#65a30d", 6], [["Pyroxene", "البيروكسين"], "#1f2937", 4]] };
    K.seg(host, "#p2cm", [["mg", "🌋 " + t("Magma", "الصهارة")], ["hv", "♨️ " + t("Hydrothermal vent", "فتحة حرمائية")], ["sl", "🌱 " + t("Soil", "التربة")]], mode, function (v) {
      mode = v; host.querySelector("#p2cA").style.display = v === "mg" ? "" : "none"; host.querySelector("#p2cB").style.display = v === "hv" ? "" : "none"; host.querySelector("#p2cC").style.display = v === "sl" ? "" : "none";
    });
    K.seg(host, "#p2mt", [["si", t("Silica-rich (K, Na)", "غنية بالسيليكا (K، Na)")], ["mg", t("Magnesium + iron rich", "غنية بالماغنسيوم والحديد")]], mt, function (v) { mt = v; cooling = false; nuc = []; fin = false; Tg = 1200; });
    sl(c, 0, function (v) { return v <= 3 ? t("slow", "بطيئة") + " (" + n(v) + ")" : v >= 8 ? t("fast", "سريعة") + " (" + n(v) + ")" : n(v); }, function (v) { spd = v; });
    sl(c, 1, function (v) { return n(v) + "°C"; }, function (v) { vT = v; });
    c.querySelector("#p2cool").onclick = function () {
      var W = S.W, H = S.H, k = Math.round(3 + (spd - 1) / 9 * 42); nuc = []; Tg = 1200; fin = false; cooling = true;
      for (var i = 0; i < k; i++) nuc.push({ x: K.rnd(0.06, 0.94), y: K.rnd(0.1, 0.9), born: K.rnd(800, 1100), r: 0, max: 0, m: i % 2, rot: K.rnd(0, 3) });
      nuc.forEach(function (a) { var dm = 1; nuc.forEach(function (b) { if (a !== b) dm = Math.min(dm, Math.hypot((a.x - b.x) * 1.23, a.y - b.y)); }); a.max = dm * 0.55; });
    };
    for (var w = 0; w < 5; w++) (function (j) { c.querySelector("#w" + j).onclick = function () { wx[j] = !wx[j]; this.classList.toggle("on", wx[j]); }; })(w);
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, msg = "";
      ctx.clearRect(0, 0, W, H);
      if (mode === "mg") {
        var rate = 60 + (spd - 1) / 9 * 340, ax = W * 0.05, aw = W * 0.62, ay = H * 0.08, ah = H * 0.84;
        if (cooling) { Tg = Math.max(600, Tg - rate * dt); nuc.forEach(function (q) { if (Tg < q.born && q.r < q.max) q.r = Math.min(q.max, q.r + 0.08 * dt); }); if (Tg <= 600) { cooling = false; fin = true; nuc.forEach(function (q) { if (Tg < q.born && q.r < 0.02) q.r = Math.min(q.max, 0.02); }); } }
        var hot = clamp((Tg - 600) / 600, 0, 1);
        ctx.fillStyle = "rgb(" + Math.round(120 + 135 * hot) + "," + Math.round(60 + 60 * hot) + "," + Math.round(40 * (1 - hot) + 20) + ")"; K.rr(ctx, ax, ay, aw, ah, 14); ctx.fill();
        nuc.forEach(function (q) {
          if (q.r <= 0) return; var mm = MIN[mt][q.m], R = q.r * ah, sides = mm[2], cx = ax + q.x * aw, cy = ay + q.y * ah;
          ctx.beginPath(); for (var k = 0; k < sides; k++) { var an = q.rot + k * Math.PI * 2 / sides; ctx.lineTo(cx + R * Math.cos(an) * (sides === 4 ? 1.4 : 1), cy + R * Math.sin(an) * (sides === 4 ? 0.6 : 1)); } ctx.closePath();
          ctx.fillStyle = mm[1]; ctx.fill(); ctx.strokeStyle = "rgba(0,0,0,.35)"; ctx.lineWidth = 1; ctx.stroke();
        });
        var avg = 0, cnt = 0; nuc.forEach(function (q) { if (q.r > 0) { avg += q.r; cnt++; } }); avg = cnt ? avg / cnt * ah * 2 : 0;
        var kx = ax + aw + 14;
        txt(ctx, n(Math.round(Tg)) + "°C", kx, ay + 12, { c: "#ef4444", s: 16, a: "left" });
        txt(ctx, t("crystals: ", "البلورات: ") + n(cnt), kx, ay + 40, { c: C.ink, s: 12, a: "left" });
        txt(ctx, t("average size: ", "متوسط الحجم: ") + n(Math.round(avg)) + " px", kx, ay + 60, { c: C.ink, s: 12, a: "left" });
        MIN[mt].forEach(function (mm, i) { K.dot(ctx, kx + 8, ay + 92 + i * 24, 8, mm[1], "rgba(0,0,0,.4)"); txt(ctx, T(mm[0]), kx + 22, ay + 92 + i * 24, { c: C.ink, s: 12, a: "left" }); });
        if (fin) {
          msg = avg > ah * 0.16 ? t("Slow cooling: few, large crystals.", "تبريد بطيء: بلورات قليلة وكبيرة.") : t("Fast cooling: many, small crystals.", "تبريد سريع: بلورات كثيرة وصغيرة.");
          if (avg > ah * 0.16) tick(0);
          if (mt === "si") tick(1); else tick(2);
        } else msg = cooling ? t("The magma is cooling and crystallizing…", "الصهارة تبرد وتتبلور…") : t("Press Cool the magma.", "اضغط «برّد الصهارة».");
      } else if (mode === "hv") {
        var fy = H * 0.85, vx = W * 0.4, strength = (vT - 100) / 300;
        ctx.fillStyle = "rgba(30,64,175,.35)"; ctx.fillRect(0, 0, W, fy); ctx.fillStyle = "#57534e"; ctx.fillRect(0, fy, W, H - fy);
        ctx.fillStyle = "#ef4444"; ctx.fillRect(vx - 4, fy, 8, H - fy);
        if (Math.random() < dt * (4 + strength * 30)) fl.push({ x: vx + K.rnd(-5, 5), y: fy - chim, a: 1 });
        fl.forEach(function (q) { q.y -= (40 + strength * 80) * dt; q.x += K.rnd(-20, 20) * dt; q.a -= dt * 0.35; }); fl = fl.filter(function (q) { return q.a > 0; });
        fl.forEach(function (q) { K.dot(ctx, q.x, q.y, 6 * (1.4 - q.a), "rgba(" + Math.round(120 + 135 * strength) + ",80,60," + q.a * 0.6 + ")"); });
        if (vT >= 250) chim = Math.min(H * 0.55, chim + dt * (vT - 200) / 200 * 16);
        ctx.fillStyle = "#78716c"; ctx.beginPath(); ctx.moveTo(vx - 16 - chim * 0.12, fy); ctx.lineTo(vx - 7, fy - chim); ctx.lineTo(vx + 7, fy - chim); ctx.lineTo(vx + 16 + chim * 0.12, fy); ctx.fill();
        for (var k2 = 0; k2 < chim / 12; k2++) K.dot(ctx, vx + Math.sin(k2 * 2.1) * (8 + k2 * 0.4), fy - k2 * 12, 3, k2 % 2 ? "#e5e7eb" : "#a7f3d0");
        txt(ctx, t("cold ocean water 2°C", "ماء محيط بارد ٢°م"), W * 0.78, H * 0.15, { c: "#bfdbfe", s: 12 });
        txt(ctx, t("vent water ", "ماء الفتحة ") + n(vT) + "°C", vx, fy + 18, { c: "#fef3c7", s: 12 });
        txt(ctx, t("calcite, apatite", "كالسيت، أباتيت"), vx + 70, fy - chim * 0.6, { c: "#f8fafc", s: 12, a: "left" });
        if (chim > H * 0.3) tick(3);
        msg = vT < 250 ? t("The water is not hot enough to carry many dissolved minerals.", "الماء ليس ساخنًا بما يكفي ليحمل معادن مذابة كثيرة.") : t("Hot mineral-rich water meets cold sea water and minerals crystallize.", "الماء الساخن الغني بالمعادن يلامس ماء البحر البارد فتتبلور المعادن.");
      } else {
        var wr = (wx[0] ? 1 : 0) + (wx[1] ? 1.2 : 0) + (wx[2] ? 1 : 0) + (wx[3] ? 0.8 : 0), gy0 = H * 0.3, rockTop = gy0 + soil * H * 0.4;
        soil = Math.min(1, soil + wr * dt * 0.035); if (wx[3]) humus = Math.min(1, humus + dt * 0.05);
        if (wr > 0 && Math.random() < dt * wr * 3) frag.push({ x: K.rnd(0, W * 0.6), y: rockTop, vy: K.rnd(10, 30), t: 1 });
        if (wx[4] && soil > 0.15) { var moved = Math.min(soil - 0.1, dt * 0.06); soil -= moved; delta = Math.min(1, delta + moved * 1.4); if (Math.random() < dt * 8) carried.push({ x: W * 0.3, y: gy0 + 4, t: 0 }); }
        ctx.fillStyle = "#bae6fd"; ctx.fillRect(0, 0, W, gy0);
        ctx.fillStyle = "#78716c"; ctx.fillRect(0, gy0, W * 0.62, H - gy0);
        ctx.fillStyle = "#a16207"; ctx.fillRect(0, gy0, W * 0.62, soil * H * 0.4);
        if (humus > 0) { ctx.fillStyle = "#422006"; ctx.fillRect(0, gy0, W * 0.62, humus * 10 * Math.min(1, soil * 4)); }
        for (var k3 = 0; k3 < 30; k3++) K.dot(ctx, (k3 * 53) % (W * 0.6), gy0 + soil * H * 0.4 + 10 + (k3 * 37) % (H * 0.5), 3 + k3 % 4, "#a8a29e");
        frag.forEach(function (q) { q.t -= dt; q.y += q.vy * dt; }); frag = frag.filter(function (q) { return q.t > 0; }); frag.forEach(function (q) { K.dot(ctx, q.x, q.y, 3, "#d6d3d1"); });
        // river + delta region
        ctx.fillStyle = "#60a5fa"; ctx.fillRect(W * 0.62, gy0 - 6, W * 0.38, 10);
        ctx.fillStyle = "#57534e"; ctx.fillRect(W * 0.62, gy0 + 4, W * 0.38, H - gy0);
        ctx.fillStyle = "#854d0e"; ctx.beginPath(); ctx.moveTo(W * 0.7, gy0 + 4); ctx.lineTo(W, gy0 + 4); ctx.lineTo(W, gy0 + 4 + delta * H * 0.35); ctx.quadraticCurveTo(W * 0.85, gy0 + 4 + delta * H * 0.2, W * 0.7, gy0 + 4); ctx.fill();
        if (wx[4]) { ctx.fillStyle = "#3b82f6"; ctx.fillRect(0, gy0 - 6, W * 0.62, 6); }
        carried.forEach(function (q) { q.t += dt; q.x += 120 * dt; }); carried = carried.filter(function (q) { return q.x < W * 0.92; }); carried.forEach(function (q) { K.dot(ctx, q.x, q.y - 3, 2.5, "#a16207"); });
        if (wx[3]) for (var k4 = 0; k4 < 5; k4++) { var px = W * 0.08 + k4 * W * 0.11; ctx.strokeStyle = "#16a34a"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(px, gy0); ctx.lineTo(px, gy0 - 18); ctx.stroke(); ctx.strokeStyle = "#a16207"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(px, gy0); ctx.lineTo(px - 6, gy0 + 30 * Math.max(0.3, soil)); ctx.moveTo(px, gy0); ctx.lineTo(px + 6, gy0 + 34 * Math.max(0.3, soil)); ctx.stroke(); }
        txt(ctx, t("sedentary soil (forms in place)", "تربة متبقية (تتكون في مكانها)"), W * 0.31, gy0 + Math.max(14, soil * H * 0.2), { c: "#fef3c7", s: 11 });
        txt(ctx, t("delta: transported soil", "الدلتا: تربة منقولة"), W * 0.84, gy0 + 22 + delta * H * 0.12, { c: "#fef3c7", s: 11 });
        txt(ctx, t("rock", "الصخر"), W * 0.31, H - 14, { c: "#f5f5f4", s: 11 });
        if (delta > 0.35) tick(4);
        msg = wr === 0 ? t("Switch on weathering agents to break the rock.", "شغّل عوامل التجوية لتفتيت الصخر.") : wx[4] ? t("The river carries soil away and deposits it: transported soil, like the Nile Delta.", "النهر يحمل التربة ويرسبها: تربة منقولة مثل دلتا النيل.") : t("Weathering breaks the rock; soil builds up in place: sedentary soil, like the Oases.", "التجوية تفتت الصخر فتتراكم التربة في مكانها: تربة متبقية مثل الواحات.");
      }
      out.innerHTML = "<span>" + esc(msg) + "</span>";
    });
  };

  /* ---------- part names ---------- */
  var NM = {
    prep2_particles: ["Particles in a box simulation", "محاكاة الجزيئات في صندوق"], prep2_heatcurve: ["Heating curve simulation", "محاكاة منحنى التسخين"],
    prep2_energy: ["Same heat, different beakers", "حرارة واحدة وكؤوس مختلفة"], prep2_heatflow: ["Heat transfer simulation", "محاكاة انتقال الحرارة"],
    prep2_evidence: ["Reaction evidence lab", "معمل دلائل التفاعل"], prep2_balance: ["Equation balancer", "موازن المعادلات"],
    prep2_food: ["Food tests lab", "معمل الكشف عن الغذاء"], prep2_photo: ["Photosynthesis simulation", "محاكاة البناء الضوئي"],
    prep2_resp: ["Cellular respiration simulation", "محاكاة التنفس الخلوي"], prep2_plates: ["Moving plates simulation", "محاكاة حركة الألواح"],
    prep2_crystal: ["Minerals and soil simulation", "محاكاة المعادن والتربة"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();
