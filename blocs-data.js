// ═══════════════════════════════════════════════════════════════
//  BLOCS & COLLOCATIONS — fiches pour les élèves
//  But : casser l'habitude de traduire depuis le persan/l'anglais.
//  On n'apprend pas des mots isolés, on apprend des BLOCS.
//  Le persan ne sert qu'à comprendre une fois — jamais à produire.
// ═══════════════════════════════════════════════════════════════

const BLOCS_SUJETS = [

{
  id: 1,
  theme: 'culture',
  q: "Les loisirs culturels (musées, théâtres, etc.) devraient être gratuits. Qu'en pensez-vous ?",
  qFa: "تفریحات فرهنگی — موزه، تئاتر و مانند این‌ها — باید رایگان باشند. نظرتان چیست؟",
  these: "Favorable, mais à une condition : une gratuité ciblée, compensée par l'État.",
  theseFa: "موافق، اما به یک شرط: رایگانیِ هدفمند که دولت هزینه‌اش را جبران کند.",

  textes: {
    b2: [
      { label: "INTRODUCTION",
        p: "L'accès à la culture soulève aujourd'hui de nombreux débats. Certains estiment que les musées et les théâtres devraient être entièrement gratuits, d'autres pensent que cela n'est pas réaliste. Personnellement, je suis d'avis que la gratuité représente un véritable atout, à condition qu'elle soit bien organisée. Je vais expliquer les raisons pour lesquelles je défends cette position." },
      { label: "ARGUMENT 1 — l'accès",
        p: "En premier lieu, la gratuité favorise l'accès à la culture pour tous. En effet, le prix d'entrée constitue souvent un obstacle pour les familles modestes. Cela s'explique notamment par le coût élevé des billets dans les grandes villes. Par exemple, une famille de quatre personnes doit parfois payer une somme importante pour une seule visite. Par conséquent, la gratuité permettrait de réduire les inégalités entre les citoyens." },
      { label: "ARGUMENT 2 — la formation du citoyen",
        p: "Il convient également de souligner que la culture joue un rôle essentiel dans la formation des citoyens. Fréquenter un musée ou une pièce de théâtre contribue à développer l'esprit critique et à renforcer la cohésion sociale. Un enfant qui découvre une exposition n'apprend pas seulement des dates : il apprend à observer, à comparer, à se poser des questions. La gratuité ne représente donc pas une dépense, mais un investissement à long terme." },
      { label: "ARGUMENT 3 — l'effet réel",
        p: "Un autre aspect mérite d'être pris en considération : la gratuité a un impact direct sur la fréquentation. Quand le prix disparaît, les publics changent, et notamment les jeunes. Par exemple, les journées gratuites organisées dans certains musées attirent un public beaucoup plus large et beaucoup plus varié. Cela montre que la barrière n'est pas le manque d'intérêt, mais bien le prix." },
      { label: "CONTRE-ARGUMENT",
        p: "Cela dit, il ne faut pas perdre de vue que les institutions culturelles font face à de fortes contraintes budgétaires. Si les recettes disparaissent, la qualité risque de se dégrader. Il convient donc de nuancer ce point : une gratuité totale et sans compensation serait difficile à mettre en place." },
      { label: "CONCLUSION",
        p: "Pour conclure, je reste convaincu que la gratuité constitue une mesure bénéfique, à condition que l'État prenne en charge la différence. Il serait donc souhaitable de mettre en place une gratuité ciblée, pour les jeunes, les étudiants et les personnes en difficulté, plutôt qu'une gratuité générale." }
    ],
    c1: [
      { label: "INTRODUCTION",
        p: "À l'heure où l'accès à la culture est présenté comme un droit, la question de savoir si les musées et les théâtres devraient être gratuits suscite de nombreux débats. Certains y voient une mesure de justice sociale, d'autres une charge que les institutions ne pourraient pas supporter. Personnellement, je suis convaincu que la gratuité représente un enjeu majeur, à condition qu'elle s'accompagne d'un financement public clair. Je tiens à expliquer les raisons pour lesquelles cette nuance me paraît déterminante." },
      { label: "ARGUMENT 1 — l'accès",
        p: "D'emblée, il me semble que la gratuité favorise l'accès à la culture pour l'ensemble de la population. En effet, le prix d'entrée constitue un obstacle réel pour les ménages modestes, qui arbitrent en permanence entre des dépenses jugées plus urgentes. Cela s'explique notamment par le coût cumulé d'une sortie familiale, transport compris. Par conséquent, supprimer ce prix reviendrait à réduire des inégalités qui se creusent dès l'enfance." },
      { label: "ARGUMENT 2 — la formation du citoyen",
        p: "Il convient également de souligner que la culture joue un rôle déterminant dans la formation des citoyens. Fréquenter une exposition ou une salle de théâtre contribue à développer l'esprit critique et à renforcer la cohésion sociale. Un enfant qui découvre une œuvre n'accumule pas des connaissances : il apprend à observer, à comparer, à formuler un jugement. Dans cette perspective, la gratuité ne relève pas de la dépense, mais bien de l'investissement." },
      { label: "ARGUMENT 3 — l'effet réel",
        p: "Un dernier élément mérite d'être pris en considération : l'impact de la gratuité sur la fréquentation est mesurable. Dès lors que la barrière tarifaire tombe, la composition du public se modifie, en particulier chez les jeunes adultes. Les journées gratuites mises en place par certaines institutions attirent ainsi un public sensiblement plus large et plus varié. Cela tend à prouver que l'obstacle n'est pas le désintérêt, mais bien le prix." },
      { label: "CONTRE-ARGUMENT",
        p: "Cela dit, il ne faut toutefois pas oublier que les institutions culturelles sont confrontées à de fortes contraintes budgétaires. Si les recettes de billetterie venaient à disparaître sans contrepartie, la qualité des expositions et la conservation des collections en pâtiraient. Il convient donc de nuancer ce point : une gratuité généralisée, sans compensation, se révélerait difficilement soutenable." },
      { label: "CONCLUSION",
        p: "Tout bien considéré, je reste convaincu que la gratuité constitue une mesure bénéfique, à condition que l'État prenne en charge le manque à gagner. Il serait donc préférable de mettre en place une gratuité ciblée — jeunes, étudiants, publics en difficulté — plutôt qu'une mesure uniforme dont personne ne pourrait garantir la pérennité." }
    ]
  },

  // ── Les blocs, classés par fonction. C'est le cœur de la fiche. ──
  outils: {
    verbes: [
      { bloc: "favoriser l'accès à…",            ex: "favoriser l'accès à la culture",              fa: "دسترسی به … را تسهیل کردن" },
      { bloc: "contribuer à + nom / infinitif",  ex: "contribuer à développer l'esprit critique",   fa: "به … کمک کردن" },
      { bloc: "constituer un obstacle",          ex: "le prix constitue un obstacle réel",          fa: "مانع بودن" },
      { bloc: "réduire les inégalités",          ex: "réduire les inégalités entre les citoyens",   fa: "نابرابری‌ها را کم کردن" },
      { bloc: "renforcer la cohésion sociale",   ex: "la culture renforce la cohésion sociale",     fa: "انسجام اجتماعی را تقویت کردن" },
      { bloc: "mettre en place une mesure",      ex: "mettre en place une gratuité ciblée",         fa: "اقدامی را اجرا کردن" },
      { bloc: "prendre en charge",               ex: "l'État prend en charge la différence",        fa: "هزینه را به عهده گرفتن" },
      { bloc: "faire face à…",                   ex: "faire face à des contraintes budgétaires",    fa: "با … مواجه بودن" },
      { bloc: "avoir un impact sur…",            ex: "avoir un impact direct sur la fréquentation", fa: "بر … تأثیر داشتن" },
      { bloc: "se révéler + adjectif",           ex: "se révéler difficilement soutenable",         fa: "از آب درآمدن، معلوم شدن که" }
    ],
    collocations: [
      { bloc: "un enjeu majeur",              fa: "مسئله‌ای اساسی" },
      { bloc: "un véritable atout",           fa: "یک برگ برنده‌ی واقعی" },
      { bloc: "des contraintes budgétaires",  fa: "محدودیت‌های بودجه‌ای" },
      { bloc: "une mesure bénéfique",         fa: "اقدامی سودمند" },
      { bloc: "un investissement à long terme", fa: "سرمایه‌گذاری بلندمدت" },
      { bloc: "la barrière tarifaire",        fa: "مانعِ قیمتی" },
      { bloc: "les recettes de billetterie",  fa: "درآمدِ فروش بلیت" },
      { bloc: "le manque à gagner",           fa: "درآمدِ از دست رفته" },
      { bloc: "un public plus large et plus varié", fa: "مخاطبی گسترده‌تر و متنوع‌تر" },
      { bloc: "les ménages modestes",         fa: "خانوارهای کم‌درآمد" }
    ],
    adjectifs: [
      { bloc: "un obstacle réel",         fa: "مانعی واقعی" },
      { bloc: "un rôle déterminant",      fa: "نقشی تعیین‌کننده" },
      { bloc: "un coût élevé",            fa: "هزینه‌ای بالا" },
      { bloc: "une mesure bénéfique",     fa: "اقدامی سودمند" },
      { bloc: "une gratuité ciblée",      fa: "رایگانیِ هدفمند" },
      { bloc: "un impact mesurable",      fa: "تأثیری قابل اندازه‌گیری" },
      { bloc: "difficilement soutenable", fa: "به‌سختی قابل دوام" }
    ],
    expressions: [
      { bloc: "Il convient de souligner que…",        role: "ajouter un argument",  fa: "باید تأکید کرد که…" },
      { bloc: "Cela s'explique notamment par…",       role: "justifier",            fa: "این عمدتاً به … برمی‌گردد" },
      { bloc: "Un autre aspect mérite d'être pris en considération…", role: "argument suivant", fa: "جنبه‌ی دیگری هم درخور توجه است" },
      { bloc: "Il ne faut pas perdre de vue que…",    role: "nuancer",              fa: "نباید از نظر دور داشت که…" },
      { bloc: "Il convient de nuancer ce point.",     role: "nuancer",              fa: "باید این نکته را تعدیل کرد" },
      { bloc: "Tout bien considéré,…",                role: "conclure",             fa: "با در نظر گرفتن همه چیز،" },
      { bloc: "à condition que + subjonctif",         role: "poser une condition",  fa: "به شرط آنکه…" },
      { bloc: "Il serait souhaitable de…",            role: "proposer",             fa: "مطلوب است که…" }
    ]
  },

  // ── L'échelle : la même idée, trois hauteurs ──
  echelle: [
    { fa: "رایگان بودن کمک می‌کند مردم بیشتر به موزه بروند.",
      simple: "La gratuité aide les gens à aller au musée.",
      b2:     "La gratuité favorise l'accès à la culture.",
      b2plus: "La gratuité favorise l'accès à la culture pour l'ensemble de la population." },
    { fa: "قیمت بلیت برای بعضی خانواده‌ها زیاد است.",
      simple: "Le prix est trop cher pour quelques familles.",
      b2:     "Le prix d'entrée constitue un obstacle pour les familles modestes.",
      b2plus: "Le prix d'entrée constitue un obstacle réel pour les ménages modestes." },
    { fa: "فرهنگ به فکر کردن آدم‌ها کمک می‌کند.",
      simple: "La culture aide les personnes à penser.",
      b2:     "La culture contribue à développer l'esprit critique.",
      b2plus: "La culture joue un rôle déterminant dans la formation des citoyens." },
    { fa: "موزه‌ها پول کافی ندارند.",
      simple: "Les musées n'ont pas assez d'argent.",
      b2:     "Les musées font face à des contraintes budgétaires.",
      b2plus: "Les institutions culturelles sont confrontées à de fortes contraintes budgétaires." },
    { fa: "دولت باید هزینه‌اش را بدهد.",
      simple: "L'État doit payer l'argent.",
      b2:     "L'État doit prendre en charge la différence.",
      b2plus: "L'État doit prendre en charge le manque à gagner." }
  ],

  // ── Le piège : ce que produit une traduction mot à mot ──
  antiTrad: [
    { faux: "Le musée est très cher pour beaucoup de personnes.",
      juste: "Le prix d'entrée constitue un obstacle pour de nombreuses familles.",
      pourquoi: "En persan on dit « موزه گران است ». En français, ce n'est pas le musée qui est cher, c'est le prix d'entrée. On nomme la chose précise, puis on lui applique un bloc." },
    { faux: "La culture donne beaucoup de choses aux gens.",
      juste: "La culture contribue à développer l'esprit critique.",
      pourquoi: "« Donner beaucoup de choses » traduit « چیزهای زیادی می‌دهد ». C'est vague. Le français d'examen attend un verbe précis + un nom précis." },
    { faux: "Le gouvernement doit donner l'argent aux musées.",
      juste: "L'État doit prendre en charge le manque à gagner.",
      pourquoi: "« Donner l'argent » est de l'anglais scolaire (give money). Le bloc naturel est « prendre en charge » + un nom de coût." },
    { faux: "Beaucoup de personnes veulent aller au musée mais ils ne peuvent pas.",
      juste: "L'obstacle n'est pas le désintérêt, mais bien le prix.",
      pourquoi: "La phrase persane décrit deux faits l'un après l'autre. Le français argumentatif oppose : « ce n'est pas X, c'est Y »." },
    { faux: "C'est un bon investissement pour le futur.",
      juste: "Il s'agit d'un investissement à long terme.",
      pourquoi: "« Pour le futur » est une traduction littérale. La collocation figée est « à long terme »." }
  ],

  // ── Ce qui se recycle ailleurs ──
  transferables: [
    { bloc: "X constitue un obstacle réel pour…",
      ailleurs: ["l'emploi : la langue constitue un obstacle réel pour les nouveaux arrivants",
                 "la santé : la distance constitue un obstacle réel pour les patients ruraux"] },
    { bloc: "X contribue à développer…",
      ailleurs: ["le sport contribue à développer l'esprit d'équipe",
                 "la lecture contribue à développer l'autonomie"] },
    { bloc: "Il ne faut pas perdre de vue que…",
      ailleurs: ["utilisable dans absolument tous les sujets, pour amener la nuance"] },
    { bloc: "…à condition que + subjonctif",
      ailleurs: ["la technologie est utile à condition qu'elle soit encadrée",
                 "le télétravail fonctionne à condition que l'entreprise l'organise"] },
    { bloc: "Il s'agit non pas d'une dépense, mais d'un investissement.",
      ailleurs: ["éducation, santé, environnement, formation — partout où l'on parle de budget public"] }
  ],

  // ── La carte du thème ──
  reseau: {
    noms: ["l'accès à la culture", "le prix d'entrée", "la billetterie", "la fréquentation",
           "les inégalités", "l'esprit critique", "la cohésion sociale", "le budget public",
           "les institutions culturelles", "le patrimoine"],
    verbes: ["favoriser", "contribuer à", "réduire", "renforcer", "financer",
             "subventionner", "élargir", "attirer", "prendre en charge", "encadrer"],
    adjectifs: ["accessible", "gratuit", "bénéfique", "déterminant", "modeste",
                "élevé", "ciblé", "durable", "varié"],
    consequences: ["une fréquentation en hausse", "un public plus varié",
                   "une réduction des inégalités", "une perte de recettes"],
    causes: ["le coût des billets", "l'éloignement géographique", "le manque d'habitude familiale"],
    solutions: ["la gratuité ciblée", "les journées gratuites", "le tarif étudiant",
                "les subventions publiques", "le pass culture"]
  },

  grammaire: [
    { structure: "à condition que + subjonctif", ex: "à condition qu'elle soit bien organisée" },
    { structure: "Si + imparfait, + conditionnel", ex: "si les recettes disparaissaient, la qualité se dégraderait" },
    { structure: "mise en relief : ce n'est pas X, c'est Y", ex: "l'obstacle n'est pas le désintérêt, mais bien le prix" },
    { structure: "nominalisation", ex: "la suppression du prix / la fréquentation des musées" },
    { structure: "voix passive", ex: "les institutions sont confrontées à des contraintes" },
    { structure: "gérondif", ex: "en supprimant le prix, on élargit le public" }
  ]
}

];
