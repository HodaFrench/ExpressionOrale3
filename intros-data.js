// ═══════════════════════════════════════════════════════════════
//  LES INTRODUCTIONS — d'après le livret des 50 introductions
//
//  Une introduction de Tâche 3 se construit en quatre étapes, dans
//  cet ordre. Elle n'a pas à être belle : elle doit amener vite et
//  proprement au premier argument.
//
//    1. PRÉSENTER   Aujourd'hui, X occupe une place importante dans…
//    2. IMPORTANCE  X permet de… · X peut avoir des effets sur…
//    3. QUESTION    On peut donc se demander si…
//    4. AVIS        À mon avis, … puis tout de suite : Tout d'abord, …
//
//  ⚠️ Ne PAS ouvrir sur « Avec l'essor de… » : correct mais lourd.
//  Cela coûte du temps sur quatre minutes, invite à la faute et
//  retarde l'entrée dans le premier argument.
// ═══════════════════════════════════════════════════════════════

const ETAPES = [
  { id: 'presenter',  n: 1, fr: "Présenter le sujet",        fa: "معرفیِ موضوع" },
  { id: 'importance', n: 2, fr: "Montrer son importance",    fa: "نشان دادنِ اهمیتش" },
  { id: 'question',   n: 3, fr: "Poser la problématique",    fa: "طرحِ پرسش" },
  { id: 'avis',       n: 4, fr: "Donner son avis",           fa: "بیانِ نظر" },
];

// Les douze formules à mémoriser. C'est cela qu'il faut savoir par cœur,
// pas les cinquante introductions.
const FORMULES = [
  { etape:'presenter',  fr:"Aujourd'hui, X occupe une place importante dans…", fa:"امروزه، X جایگاهِ مهمی در … دارد" },
  { etape:'presenter',  fr:"X joue un rôle important dans…",                   fa:"X نقشِ مهمی در … دارد" },
  { etape:'presenter',  fr:"X fait partie de notre vie quotidienne.",          fa:"X بخشی از زندگیِ روزمره‌ی ماست" },
  { etape:'presenter',  fr:"De nos jours, X est devenu(e) important(e) dans…", fa:"این روزها، X در … مهم شده است" },
  { etape:'importance', fr:"X permet de + infinitif",                          fa:"X اجازه می‌دهد که …" },
  { etape:'importance', fr:"X peut avoir des effets sur…",                     fa:"X می‌تواند بر … اثر بگذارد" },
  { etape:'importance', fr:"X présente plusieurs avantages, mais aussi quelques difficultés.", fa:"X چند مزیت دارد، اما سختی‌هایی هم" },
  { etape:'question',   fr:"On peut donc se demander si…",                     fa:"پس می‌شود پرسید آیا …" },
  { etape:'question',   fr:"La question est donc de savoir si…",               fa:"پس سؤال این است که بدانیم آیا …" },
  { etape:'question',   fr:"Il est donc intéressant de se demander si…",       fa:"پس جالب است بپرسیم آیا …" },
  { etape:'avis',       fr:"À mon avis, …  ·  Personnellement, je pense que…", fa:"به نظرِ من، … / شخصاً فکر می‌کنم که …" },
  { etape:'avis',       fr:"À mon avis, cela dépend surtout de…",              fa:"به نظرِ من، این بیش از همه به … بستگی دارد" },
];

// Chaque introduction est découpée par ÉTAPE, puis en segments cliquables.
const INTROS = [

{ id: 7, freq: 43, theme: 'edu',
  q: "Faire des études permet de réussir sa carrière professionnelle.",
  qFa: "تحصیل کردن باعثِ موفقیتِ شغلی می‌شود.",
  b1: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, les études", "امروزه، تحصیل"],
      ["occupent une place importante", "جایگاهِ مهمی دارد"],
      ["dans la vie des jeunes.", "در زندگیِ جوان‌ها."]]},
    { etape:'importance', segs:[
      ["Elles permettent d'apprendre beaucoup de choses", "اجازه می‌دهد چیزهای زیادی یاد بگیریم"],
      ["et de préparer son avenir professionnel.", "و آینده‌ی شغلی‌مان را آماده کنیم."],
      ["Cependant, elles demandent du temps", "با این حال، وقت می‌خواهد"],
      ["et coûtent cher aux familles.", "و برای خانواده‌ها گران تمام می‌شود."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["si le diplôme suffit pour réussir sa carrière.", "آیا مدرک برای موفقیتِ شغلی کافی است."]]},
    { etape:'avis', segs:[
      ["À mon avis, les études sont très utiles,", "به نظرِ من، تحصیل خیلی مفید است،"],
      ["mais elles ne suffisent pas.", "اما کافی نیست."],
      ["Je vais expliquer pourquoi.", "توضیح می‌دهم چرا."]]},
  ],
  b2: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, les études supérieures", "امروزه، تحصیلاتِ عالی"],
      ["occupent une place importante", "جایگاهِ مهمی دارد"],
      ["dans la vie des jeunes.", "در زندگیِ جوان‌ها."]]},
    { etape:'importance', segs:[
      ["Elles permettent d'acquérir des connaissances", "اجازه می‌دهد دانش کسب کنیم"],
      ["et de préparer son avenir professionnel.", "و آینده‌ی شغلی‌مان را آماده کنیم."],
      ["Cependant, elles demandent beaucoup de temps", "با این حال، وقتِ زیادی می‌خواهد"],
      ["et représentent un coût important pour les familles.", "و برای خانواده‌ها هزینه‌ی مهمی است."]]},
    { etape:'question', segs:[
      ["La question est donc de savoir", "پس سؤال این است که بدانیم"],
      ["si le diplôme suffit vraiment pour réussir sa carrière.", "آیا مدرک واقعاً برای موفقیتِ شغلی کافی است."]]},
    { etape:'avis', segs:[
      ["Personnellement, je pense que les études", "شخصاً، فکر می‌کنم تحصیل"],
      ["jouent un rôle essentiel,", "نقشی اساسی دارد،"],
      ["mais qu'elles ne suffisent pas à elles seules.", "اما به‌تنهایی کافی نیست."],
      ["Je vais développer trois arguments.", "سه استدلال را باز می‌کنم."]]},
  ]},

{ id: 8, freq: 37, theme: 'immigration',
  q: "Vivre à l'étranger a-t-il plus d'avantages ou d'inconvénients ?",
  qFa: "زندگی در خارج مزیتِ بیشتری دارد یا عیب؟",
  b1: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, partir vivre à l'étranger", "امروزه، رفتن و زندگی در خارج"],
      ["fait partie des projets de nombreuses personnes.", "بخشی از برنامه‌ی خیلی‌هاست."]]},
    { etape:'importance', segs:[
      ["Cette expérience permet de trouver du travail,", "این تجربه اجازه می‌دهد کار پیدا کنیم،"],
      ["de découvrir une autre culture", "فرهنگِ دیگری را بشناسیم"],
      ["et d'apprendre une nouvelle langue.", "و زبانِ تازه‌ای یاد بگیریم."],
      ["Cependant, elle peut aussi avoir des effets", "با این حال، می‌تواند اثر هم بگذارد"],
      ["sur la vie de famille et sur le moral.", "بر زندگیِ خانوادگی و بر روحیه."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["si vivre à l'étranger a plus d'avantages que d'inconvénients.", "آیا زندگی در خارج مزیتش بیشتر است یا عیبش."]]},
    { etape:'avis', segs:[
      ["À mon avis, les avantages sont plus importants,", "به نظرِ من، مزیت‌ها مهم‌ترند،"],
      ["à condition de bien préparer son départ.", "به شرطِ خوب آماده کردنِ رفتن."],
      ["Je vais expliquer pourquoi.", "توضیح می‌دهم چرا."]]},
  ],
  b2: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, partir vivre à l'étranger", "امروزه، رفتن و زندگی در خارج"],
      ["occupe une place importante", "جایگاهِ مهمی دارد"],
      ["dans les projets de nombreuses personnes.", "در برنامه‌های خیلی‌ها."]]},
    { etape:'importance', segs:[
      ["Cette expérience permet d'accéder à un autre marché du travail,", "این تجربه اجازه می‌دهد به بازارِ کارِ دیگری دسترسی پیدا کنیم،"],
      ["de découvrir une autre culture", "فرهنگِ دیگری را بشناسیم"],
      ["et d'apprendre une nouvelle langue.", "و زبانِ تازه‌ای یاد بگیریم."],
      ["Cependant, elle peut également avoir des effets", "با این حال، می‌تواند اثر هم بگذارد"],
      ["sur la vie de famille et sur le moral.", "بر زندگیِ خانوادگی و بر روحیه."]]},
    { etape:'question', segs:[
      ["La question est donc de savoir", "پس سؤال این است که بدانیم"],
      ["si vivre à l'étranger apporte plus d'avantages que d'inconvénients.", "آیا زندگی در خارج مزیتِ بیشتری می‌آورد یا عیب."]]},
    { etape:'avis', segs:[
      ["Personnellement, je pense que les avantages sont plus importants,", "شخصاً، فکر می‌کنم مزیت‌ها مهم‌ترند،"],
      ["à condition que le départ soit bien préparé.", "به شرط آنکه رفتن خوب آماده شده باشد."],
      ["Je vais développer trois arguments.", "سه استدلال را باز می‌کنم."]]},
  ]},

{ id: 9, freq: 35, theme: 'immigration',
  q: "Apprendre la langue du pays où l'on vit est essentiel pour s'intégrer.",
  qFa: "یاد گرفتنِ زبانِ کشورِ میزبان برای ادغام ضروری است.",
  b1: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, beaucoup de personnes", "امروزه، خیلی‌ها"],
      ["vivent dans un pays qui n'est pas le leur.", "در کشوری زندگی می‌کنند که مالِ خودشان نیست."],
      ["La langue joue un rôle important", "زبان نقشِ مهمی دارد"],
      ["dans leur vie quotidienne.", "در زندگیِ روزمره‌شان."]]},
    { etape:'importance', segs:[
      ["Elle permet de travailler,", "اجازه می‌دهد کار کنیم،"],
      ["de comprendre les autres et de se faire des amis.", "دیگران را بفهمیم و دوست پیدا کنیم."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["si la langue est vraiment nécessaire pour s'intégrer.", "آیا زبان واقعاً برای ادغام لازم است."]]},
    { etape:'avis', segs:[
      ["À mon avis, elle est nécessaire,", "به نظرِ من، لازم است،"],
      ["mais elle ne suffit pas.", "اما کافی نیست."],
      ["Je vais expliquer pourquoi.", "توضیح می‌دهم چرا."]]},
  ],
  b2: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, la langue", "امروزه، زبان"],
      ["occupe une place centrale", "جایگاهی مرکزی دارد"],
      ["dans la vie des personnes qui s'installent à l'étranger.", "در زندگیِ کسانی که در خارج ساکن می‌شوند."]]},
    { etape:'importance', segs:[
      ["Elle permet de travailler,", "اجازه می‌دهد کار کنیم،"],
      ["de comprendre les autres", "دیگران را بفهمیم"],
      ["et de participer à la vie sociale du pays.", "و در زندگیِ اجتماعیِ کشور شرکت کنیم."],
      ["Cependant, l'apprendre demande du temps", "با این حال، یاد گرفتنش وقت می‌خواهد"],
      ["et beaucoup d'efforts.", "و تلاشِ زیادی."]]},
    { etape:'question', segs:[
      ["La question est donc de savoir", "پس سؤال این است که بدانیم"],
      ["si la langue est vraiment indispensable pour s'intégrer.", "آیا زبان واقعاً برای ادغام ضروری است."]]},
    { etape:'avis', segs:[
      ["Personnellement, je pense qu'elle est nécessaire,", "شخصاً، فکر می‌کنم لازم است،"],
      ["mais qu'elle n'est pas suffisante.", "اما کافی نیست."],
      ["Je vais développer trois arguments.", "سه استدلال را باز می‌کنم."]]},
  ]},

{ id: 4, freq: 26, theme: 'techno',
  q: "L'utilisation d'Internet favorise-t-elle l'isolement des individus ?",
  qFa: "آیا استفاده از اینترنت انزوای افراد را تسهیل می‌کند؟",
  b1: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, Internet", "امروزه، اینترنت"],
      ["fait partie de notre vie quotidienne.", "بخشی از زندگیِ روزمره‌ی ماست."]]},
    { etape:'importance', segs:[
      ["Nous l'utilisons pour communiquer,", "برای ارتباط از آن استفاده می‌کنیم،"],
      ["travailler et rester en contact avec les autres.", "برای کار و برای در تماس ماندن با دیگران."],
      ["Cependant, certaines personnes passent", "با این حال، بعضی‌ها می‌گذرانند"],
      ["beaucoup de temps seules devant un écran.", "وقتِ زیادی را تنها پای صفحه."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["si Internet rend les gens plus seuls.", "آیا اینترنت آدم‌ها را تنهاتر می‌کند."]]},
    { etape:'avis', segs:[
      ["À mon avis, Internet n'isole personne tout seul :", "به نظرِ من، اینترنت به‌تنهایی کسی را منزوی نمی‌کند:"],
      ["tout dépend de la façon dont on l'utilise.", "همه‌چیز به شیوه‌ی استفاده بستگی دارد."],
      ["Je vais expliquer pourquoi.", "توضیح می‌دهم چرا."]]},
  ],
  b2: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, Internet", "امروزه، اینترنت"],
      ["occupe une place importante", "جایگاهِ مهمی دارد"],
      ["dans notre vie quotidienne.", "در زندگیِ روزمره‌ی ما."]]},
    { etape:'importance', segs:[
      ["Il permet de communiquer rapidement,", "اجازه می‌دهد سریع ارتباط برقرار کنیم،"],
      ["de travailler et de rester en contact", "کار کنیم و در تماس بمانیم"],
      ["avec des personnes qui vivent loin.", "با کسانی که دور زندگی می‌کنند."],
      ["Cependant, cette utilisation quotidienne", "با این حال، این استفاده‌ی روزمره"],
      ["peut avoir des effets sur nos relations réelles.", "می‌تواند بر روابطِ واقعی‌مان اثر بگذارد."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["si Internet favorise l'isolement des individus.", "آیا اینترنت انزوای افراد را تسهیل می‌کند."]]},
    { etape:'avis', segs:[
      ["Personnellement, je pense qu'Internet n'isole personne à lui seul :", "شخصاً، فکر می‌کنم اینترنت به‌تنهایی کسی را منزوی نمی‌کند:"],
      ["tout dépend de la façon dont on l'utilise.", "همه‌چیز به شیوه‌ی استفاده بستگی دارد."],
      ["Je vais développer trois arguments.", "سه استدلال را باز می‌کنم."]]},
  ]},

{ id: 2, freq: 26, theme: 'famille',
  q: "L'autorité est-elle indispensable dans l'éducation d'un enfant ?",
  qFa: "آیا اقتدار در تربیتِ کودک ضروری است؟",
  b1: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, l'éducation des enfants", "امروزه، تربیتِ کودکان"],
      ["occupe une place importante", "جایگاهِ مهمی دارد"],
      ["dans les discussions entre parents.", "در گفت‌وگوهای میانِ والدین."]]},
    { etape:'importance', segs:[
      ["Certaines familles préfèrent des règles strictes.", "بعضی خانواده‌ها قواعدِ سخت را ترجیح می‌دهند."],
      ["D'autres laissent beaucoup de liberté.", "بعضی آزادیِ زیادی می‌دهند."],
      ["Ces deux méthodes peuvent avoir des effets", "این دو روش می‌توانند اثر بگذارند"],
      ["très différents sur l'enfant.", "خیلی متفاوت بر کودک."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["si l'autorité est nécessaire dans l'éducation.", "آیا اقتدار در تربیت لازم است."]]},
    { etape:'avis', segs:[
      ["À mon avis, elle est nécessaire,", "به نظرِ من، لازم است،"],
      ["à condition d'être juste et bienveillante.", "به شرطِ عادلانه و مهربان بودن."],
      ["Je vais expliquer pourquoi.", "توضیح می‌دهم چرا."]]},
  ],
  b2: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, l'éducation des enfants", "امروزه، تربیتِ کودکان"],
      ["occupe une place importante", "جایگاهِ مهمی دارد"],
      ["dans les discussions entre parents.", "در گفت‌وگوهای میانِ والدین."]]},
    { etape:'importance', segs:[
      ["Certaines familles préfèrent des règles strictes,", "بعضی خانواده‌ها قواعدِ سخت را ترجیح می‌دهند،"],
      ["d'autres laissent beaucoup de liberté à leurs enfants.", "بعضی به بچه‌هایشان آزادیِ زیادی می‌دهند."],
      ["Ces deux méthodes peuvent avoir des effets", "این دو روش می‌توانند اثر بگذارند"],
      ["très différents sur le développement de l'enfant.", "خیلی متفاوت بر رشدِ کودک."]]},
    { etape:'question', segs:[
      ["La question est donc de savoir", "پس سؤال این است که بدانیم"],
      ["si l'autorité est indispensable dans l'éducation.", "آیا اقتدار در تربیت ضروری است."]]},
    { etape:'avis', segs:[
      ["Personnellement, je pense qu'elle est nécessaire,", "شخصاً، فکر می‌کنم لازم است،"],
      ["à condition qu'elle soit juste et bienveillante.", "به شرط آنکه عادلانه و مهربان باشد."],
      ["Je vais développer trois arguments.", "سه استدلال را باز می‌کنم."]]},
  ]},

{ id: 5, freq: 26, theme: 'techno',
  q: "Chaque enfant devrait-il avoir son propre téléphone portable ?",
  qFa: "آیا هر کودکی باید تلفنِ خودش را داشته باشد؟",
  b1: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, le téléphone portable", "امروزه، تلفن همراه"],
      ["fait partie de la vie de tout le monde,", "بخشی از زندگیِ همه است،"],
      ["même des enfants.", "حتی بچه‌ها."]]},
    { etape:'importance', segs:[
      ["Il permet de rester en contact avec ses parents", "اجازه می‌دهد با پدر و مادر در تماس بمانیم"],
      ["et d'appeler en cas de problème.", "و در صورتِ مشکل زنگ بزنیم."],
      ["Cependant, il peut aussi avoir des effets négatifs", "با این حال، می‌تواند اثرهای منفی هم داشته باشد"],
      ["sur le sommeil et sur les résultats scolaires.", "بر خواب و بر نتایجِ درسی."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["si chaque enfant devrait avoir son propre téléphone.", "آیا هر کودکی باید تلفنِ خودش را داشته باشد."]]},
    { etape:'avis', segs:[
      ["À mon avis, cela dépend surtout de l'âge", "به نظرِ من، این بیش از همه به سن بستگی دارد"],
      ["et de l'accompagnement des parents.", "و به همراهیِ والدین."],
      ["Je vais expliquer pourquoi.", "توضیح می‌دهم چرا."]]},
  ],
  b2: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, le téléphone portable", "امروزه، تلفن همراه"],
      ["occupe une place importante", "جایگاهِ مهمی دارد"],
      ["dans la vie des familles.", "در زندگیِ خانواده‌ها."]]},
    { etape:'importance', segs:[
      ["Il permet aux parents de joindre leurs enfants", "اجازه می‌دهد والدین به بچه‌هایشان دسترسی داشته باشند"],
      ["à tout moment de la journée.", "در هر لحظه از روز."],
      ["Cependant, son utilisation peut avoir des effets", "با این حال، استفاده از آن می‌تواند اثر بگذارد"],
      ["sur le sommeil, la concentration et la vie sociale.", "بر خواب، تمرکز و زندگیِ اجتماعی."]]},
    { etape:'question', segs:[
      ["La question est donc de savoir", "پس سؤال این است که بدانیم"],
      ["si chaque enfant devrait avoir son propre téléphone.", "آیا هر کودکی باید تلفنِ خودش را داشته باشد."]]},
    { etape:'avis', segs:[
      ["Personnellement, je pense que cela dépend surtout de l'âge", "شخصاً، فکر می‌کنم این بیش از همه به سن بستگی دارد"],
      ["et de l'accompagnement des parents.", "و به همراهیِ والدین."],
      ["Je vais développer trois arguments.", "سه استدلال را باز می‌کنم."]]},
  ]},

{ id: 6, freq: 26, theme: 'travail',
  q: "Travailler jusqu'à l'âge de 70 ans, est-ce une bonne idée ?",
  qFa: "کار کردن تا هفتاد سالگی، فکرِ خوبی است؟",
  b1: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, les gens vivent plus longtemps", "امروزه، آدم‌ها بیشتر عمر می‌کنند"],
      ["et travaillent souvent plus tard.", "و اغلب دیرتر کار می‌کنند."]]},
    { etape:'importance', segs:[
      ["Le travail permet de garder un rythme,", "کار اجازه می‌دهد ریتم را حفظ کنیم،"],
      ["de rester actif et d'avoir un revenu.", "فعال بمانیم و درآمد داشته باشیم."],
      ["Cependant, tous les métiers", "با این حال، همه‌ی شغل‌ها"],
      ["ne demandent pas le même effort physique.", "تلاشِ بدنیِ یکسانی نمی‌خواهند."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["s'il est raisonnable de travailler jusqu'à soixante-dix ans.", "آیا کار کردن تا هفتاد سالگی معقول است."]]},
    { etape:'avis', segs:[
      ["À mon avis, la vraie question n'est pas l'âge :", "به نظرِ من، سؤالِ واقعی سن نیست:"],
      ["c'est de savoir si on choisit ou si on est obligé.", "این است که بدانیم انتخاب می‌کنیم یا مجبوریم."],
      ["Je vais expliquer pourquoi.", "توضیح می‌دهم چرا."]]},
  ],
  b2: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, l'espérance de vie", "امروزه، امیدِ زندگی"],
      ["occupe une place centrale", "جایگاهی مرکزی دارد"],
      ["dans les débats sur la retraite.", "در بحث‌های مربوط به بازنشستگی."]]},
    { etape:'importance', segs:[
      ["Le travail permet de garder un rythme,", "کار اجازه می‌دهد ریتم را حفظ کنیم،"],
      ["de rester en contact avec les autres", "با دیگران در تماس بمانیم"],
      ["et de transmettre son expérience.", "و تجربه‌مان را منتقل کنیم."],
      ["Cependant, tous les métiers", "با این حال، همه‌ی شغل‌ها"],
      ["n'ont pas les mêmes effets sur le corps.", "اثرِ یکسانی بر بدن ندارند."]]},
    { etape:'question', segs:[
      ["La question est donc de savoir", "پس سؤال این است که بدانیم"],
      ["s'il est raisonnable de travailler jusqu'à soixante-dix ans.", "آیا کار کردن تا هفتاد سالگی معقول است."]]},
    { etape:'avis', segs:[
      ["Personnellement, je pense que la vraie question n'est pas l'âge :", "شخصاً، فکر می‌کنم سؤالِ واقعی سن نیست:"],
      ["c'est de savoir si l'on choisit ou si l'on subit.", "این است که بدانیم انتخاب می‌کنیم یا تحمل."],
      ["Je vais développer trois arguments.", "سه استدلال را باز می‌کنم."]]},
  ]},

{ id: 1, freq: 16, theme: 'culture',
  q: "Les loisirs culturels devraient-ils être gratuits ?",
  qFa: "آیا تفریحاتِ فرهنگی باید رایگان باشند؟",
  b1: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, les musées et les théâtres", "امروزه، موزه‌ها و تئاترها"],
      ["jouent un rôle important", "نقشِ مهمی دارند"],
      ["dans la vie culturelle d'un pays.", "در زندگیِ فرهنگیِ یک کشور."]]},
    { etape:'importance', segs:[
      ["Ils permettent de découvrir de nouvelles choses", "اجازه می‌دهند چیزهای تازه کشف کنیم"],
      ["et d'apprendre beaucoup.", "و خیلی یاد بگیریم."],
      ["Cependant, le prix des billets", "با این حال، قیمتِ بلیت"],
      ["est parfois trop élevé pour certaines familles.", "گاهی برای بعضی خانواده‌ها خیلی بالاست."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["si les loisirs culturels devraient être gratuits.", "آیا تفریحاتِ فرهنگی باید رایگان باشند."]]},
    { etape:'avis', segs:[
      ["À mon avis, c'est une bonne solution,", "به نظرِ من، راه‌حلِ خوبی است،"],
      ["à condition que l'État paie la différence.", "به شرط آنکه دولت تفاوتش را بپردازد."],
      ["Je vais expliquer pourquoi.", "توضیح می‌دهم چرا."]]},
  ],
  b2: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, les musées et les théâtres", "امروزه، موزه‌ها و تئاترها"],
      ["occupent une place importante", "جایگاهِ مهمی دارند"],
      ["dans la vie culturelle d'un pays.", "در زندگیِ فرهنگیِ یک کشور."]]},
    { etape:'importance', segs:[
      ["Ils permettent de découvrir de nouvelles choses,", "اجازه می‌دهند چیزهای تازه کشف کنیم،"],
      ["d'apprendre et de mieux comprendre le monde.", "یاد بگیریم و دنیا را بهتر بفهمیم."],
      ["Cependant, le prix des billets", "با این حال، قیمتِ بلیت"],
      ["peut représenter un obstacle pour certaines familles.", "برای بعضی خانواده‌ها می‌تواند مانع باشد."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["si les loisirs culturels devraient être gratuits.", "آیا تفریحاتِ فرهنگی باید رایگان باشند."]]},
    { etape:'avis', segs:[
      ["À mon avis, la gratuité est une bonne solution,", "به نظرِ من، رایگانی راه‌حلِ خوبی است،"],
      ["à condition que l'État prenne en charge la différence.", "به شرط آنکه دولت تفاوتش را به عهده بگیرد."],
      ["Je vais développer trois arguments.", "سه استدلال را باز می‌کنم."]]},
  ]},

{ id: 3, freq: 6, theme: 'sport',
  q: "Faut-il obliger les enfants à pratiquer une activité sportive ?",
  qFa: "آیا باید کودکان را به ورزش مجبور کرد؟",
  b1: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, le sport", "امروزه، ورزش"],
      ["joue un rôle important", "نقشِ مهمی دارد"],
      ["dans la santé des enfants.", "در سلامتِ کودکان."]]},
    { etape:'importance', segs:[
      ["Il permet de rester en forme,", "اجازه می‌دهد تناسب اندام حفظ شود،"],
      ["de mieux dormir et de se faire des amis.", "بهتر بخوابیم و دوست پیدا کنیم."],
      ["Pourtant, beaucoup d'enfants", "با این حال، خیلی از بچه‌ها"],
      ["passent trop de temps devant les écrans.", "وقتِ زیادی پای صفحه می‌گذرانند."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["s'il faut obliger les enfants à faire du sport.", "آیا باید بچه‌ها را به ورزش مجبور کرد."]]},
    { etape:'avis', segs:[
      ["À mon avis, il vaut mieux encourager", "به نظرِ من، بهتر است تشویق کنیم"],
      ["que forcer.", "تا اینکه مجبور کنیم."],
      ["Je vais expliquer pourquoi.", "توضیح می‌دهم چرا."]]},
  ],
  b2: [
    { etape:'presenter', segs:[
      ["Aujourd'hui, le sport", "امروزه، ورزش"],
      ["joue un rôle important", "نقشِ مهمی دارد"],
      ["dans la santé des enfants.", "در سلامتِ کودکان."]]},
    { etape:'importance', segs:[
      ["Il permet de rester en forme,", "اجازه می‌دهد تناسب اندام حفظ شود،"],
      ["de mieux dormir et de rencontrer d'autres jeunes.", "بهتر بخوابیم و با جوان‌های دیگر آشنا شویم."],
      ["Pourtant, beaucoup d'enfants", "با این حال، خیلی از بچه‌ها"],
      ["passent la plupart de leur temps devant les écrans.", "بیشترِ وقتشان را پای صفحه می‌گذرانند."]]},
    { etape:'question', segs:[
      ["On peut donc se demander", "پس می‌شود پرسید"],
      ["s'il faut obliger les enfants à pratiquer un sport.", "آیا باید بچه‌ها را به ورزش مجبور کرد."]]},
    { etape:'avis', segs:[
      ["À mon avis, il vaut mieux encourager fermement", "به نظرِ من، بهتر است قاطعانه تشویق کنیم"],
      ["sans jamais contraindre.", "بی‌آنکه هرگز اجبار کنیم."],
      ["Je vais développer trois arguments.", "سه استدلال را باز می‌کنم."]]},
  ]},

];
