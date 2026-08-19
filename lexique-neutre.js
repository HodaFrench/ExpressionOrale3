// ═══════════════════════════════════════════════════════════════
//  LE LEXIQUE NEUTRE — la partie du gabarit qui ne change jamais
//
//  Constat qui a rendu ce fichier nécessaire : sur les 676 blocs des
//  huit premières fiches, 528 n'apparaissaient QUE dans une seule.
//  L'élève voyait donc 78 % du vocabulaire une fois et jamais plus.
//  Et le peu qui revenait était presque uniquement des connecteurs —
//  « cela dit », « pour conclure » — jamais les VERBES.
//
//  Ce fichier fixe les verbes, noms et adjectifs qui ne dépendent
//  d'aucun sujet et qui doivent donc figurer dans CHAQUE fiche.
//  Règle : une fiche = ce lexique neutre (toujours le même)
//                    + une dizaine de mots propres au sujet.
//  Rien de plus. Le reste doit être coupé.
// ═══════════════════════════════════════════════════════════════

const LEXIQUE_NEUTRE = {

  // ── LES VERBES. Le cœur. Ils marchent sur n'importe quel sujet. ──
  verbes: [
    { fa: "اجازه دادن / ممکن کردن",
      blocs: ["permettre de + inf.", "permettre à qqn de + inf.", "donner la possibilité de"],
      ex: ["la gratuité permet d'accéder à la culture",
           "le diplôme permet d'accéder à certains métiers",
           "le sport permet de développer la coopération"] },

    { fa: "کمک کردن به",
      blocs: ["contribuer à + nom/inf.", "aider à + inf.", "participer à + nom"],
      ex: ["contribuer à développer l'esprit critique",
           "contribuer à changer notre façon de voir",
           "contribuer à préparer l'enfant à la vie en société"] },

    { fa: "تسهیل کردنِ دسترسی",
      blocs: ["favoriser l'accès à…", "faciliter l'accès à…", "ouvrir l'accès à…"],
      ex: ["favoriser l'accès à la culture",
           "favoriser l'accès à des opportunités",
           "favoriser l'accès à l'emploi"] },

    { fa: "مانع بودن",
      blocs: ["constituer un obstacle", "représenter un frein", "être un obstacle à…"],
      ex: ["le prix constitue un obstacle réel",
           "la langue constitue un obstacle réel",
           "l'âge constitue un obstacle à l'embauche"] },

    { fa: "مواجه شدن با",
      blocs: ["faire face à…", "être confronté à…", "se heurter à…"],
      ex: ["faire face à des contraintes budgétaires",
           "faire face à des démarches administratives",
           "être confronté à des difficultés"] },

    { fa: "تأثیر داشتن بر",
      blocs: ["avoir un impact sur…", "avoir des conséquences sur…", "influer sur…"],
      ex: ["avoir un impact sur la fréquentation",
           "avoir un impact positif sur la carrière",
           "avoir des conséquences sur le moral"] },

    { fa: "نقش داشتن در",
      blocs: ["jouer un rôle important dans…", "jouer un rôle déterminant dans…", "jouer un rôle essentiel dans…"],
      ex: ["la culture joue un rôle déterminant dans la formation des citoyens",
           "l'ouverture joue un rôle important dans le développement personnel",
           "l'exemple des parents joue un rôle déterminant"] },

    { fa: "به وجود آوردن (پیامد)",
      blocs: ["entraîner + nom", "provoquer + nom", "engendrer + nom"],
      ex: ["entraîner une baisse de la fréquentation",
           "engendrer de la peur ou de la rébellion",
           "entraîner des problèmes de santé"] },

    { fa: "کم کردن / زیاد کردن",
      blocs: ["réduire + nom", "diminuer + nom", "augmenter + nom", "renforcer + nom"],
      ex: ["réduire les inégalités",
           "augmenter les chances de départ",
           "renforcer la confiance en soi"] },

    { fa: "در نظر گرفتن",
      blocs: ["tenir compte de…", "prendre en compte…", "prendre en considération…"],
      ex: ["il faut tenir compte du coût",
           "tenir compte de l'âge de l'enfant",
           "prendre en compte les besoins de chacun"] },

    { fa: "به عهده گرفتن / اجرا کردن",
      blocs: ["prendre en charge…", "mettre en place…", "assurer…"],
      ex: ["l'État doit prendre en charge la différence",
           "mettre en place une gratuité ciblée",
           "mettre en place une vraie préparation"] },

    { fa: "بستگی داشتن به",
      blocs: ["dépendre de…", "tout dépend de…", "être une question de…"],
      ex: ["tout dépend de l'usage qu'on en fait",
           "cela dépend surtout de la préparation",
           "tout dépend de la personne et du métier"] },

    { fa: "از آب درآمدن",
      blocs: ["se révéler + adj.", "s'avérer + adj.", "apparaître comme…"],
      ex: ["se révéler difficilement soutenable",
           "se révéler plus difficile que prévu",
           "s'avérer très utile"] },

    { fa: "خطرِ چیزی را داشتن",
      blocs: ["risquer de + inf.", "il y a un risque de…", "menacer de…"],
      ex: ["risquer de dégrader la qualité",
           "risquer de développer une dépendance",
           "risquer de perdre confiance"] },

    { fa: "بر عهده‌ی کسی بودن",
      blocs: ["il revient à qqn de + inf.", "c'est à qqn de + inf.", "il appartient à qqn de + inf."],
      ex: ["il revient aux parents de fixer des règles",
           "il revient à l'État de compenser",
           "il revient à chacun de choisir"] },

    { fa: "گرایش داشتن به",
      blocs: ["avoir tendance à + inf.", "être amené à + inf.", "finir par + inf."],
      ex: ["avoir tendance à progresser moins vite",
           "finir par abandonner",
           "finir par trouver sa place"] }
  ],

  // ── LES NOMS NEUTRES ──
  noms: [
    { fa: "مزیت‌ها و عیب‌ها", blocs: ["les avantages et les inconvénients", "les bénéfices et les risques"] },
    { fa: "برگِ برنده",       blocs: ["un véritable atout", "un avantage réel", "un atout considérable"] },
    { fa: "مانعی واقعی",      blocs: ["un obstacle réel", "un frein important", "une vraie difficulté"] },
    { fa: "مسئله‌ای اساسی",   blocs: ["un enjeu majeur", "une question centrale", "un point essentiel"] },
    { fa: "سرمایه‌گذاری بلندمدت", blocs: ["un investissement à long terme", "un investissement d'avenir"] },
    { fa: "هزینه‌ی بالا",     blocs: ["un coût élevé", "un prix important", "une dépense lourde"] },
    { fa: "تعادل",            blocs: ["un équilibre entre X et Y", "le juste milieu", "le bon dosage"] },
    { fa: "پیامد",            blocs: ["une conséquence", "un effet", "un résultat"] },
    { fa: "اعتماد به نفس",    blocs: ["la confiance en soi", "l'estime de soi"] },
    { fa: "زندگیِ روزمره",    blocs: ["la vie quotidienne", "le quotidien", "la vie de tous les jours"] }
  ],

  // ── LES ADJECTIFS NEUTRES ──
  adjectifs: [
    { fa: "ضروری",      blocs: ["indispensable", "essentiel", "nécessaire", "incontournable"] },
    { fa: "تعیین‌کننده", blocs: ["déterminant", "décisif", "central"] },
    { fa: "سودمند",     blocs: ["bénéfique", "positif", "utile", "efficace"] },
    { fa: "مضر",        blocs: ["néfaste", "négatif", "préjudiciable"] },
    { fa: "سنجیده",     blocs: ["mesuré", "modéré", "raisonnable", "bien dosé"] },
    { fa: "ماندگار",    blocs: ["durable", "à long terme", "qui s'inscrit dans la durée"] }
  ]
};

// ── RÈGLE D'ÉCRITURE ────────────────────────────────────────────
// Avant de publier une fiche, vérifier que :
//   1. les seize verbes ci-dessus y figurent presque tous ;
//   2. le vocabulaire propre au sujet ne dépasse pas une dizaine
//      d'entrées (le prix d'entrée, la billetterie, le cyberharcèlement…) ;
//   3. aucune image inventée par le rédacteur n'a été ajoutée.
// Un bloc qui n'apparaît que dans une seule fiche n'apprend rien.
