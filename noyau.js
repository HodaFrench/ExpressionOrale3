// ═══════════════════════════════════════════════════════════════
//  LE NOYAU COMMUN
//
//  Corriger un défaut réel de mes premières fiches : j'écrivais un
//  français littéraire, avec des images que j'inventais moi-même
//  (« l'épaisseur d'un lien », « il ne garde pas la place »,
//  « voir vieillir ses parents par écran »). Elles sonnent bien,
//  mais l'élève ne les rencontrera nulle part ailleurs : elles ne
//  lui servent donc à rien.
//
//  Ce fichier fixe la liste des tournures RÉELLEMENT COURANTES qui
//  doivent revenir d'une fiche à l'autre. L'élève doit retrouver
//  les mêmes, encore et encore, jusqu'à les produire sans y penser.
//  La variété est ici un défaut, pas une qualité.
// ═══════════════════════════════════════════════════════════════

const NOYAU = {

  // ── Ouvrir ──
  ouvrir: [
    "De nos jours, …",
    "Aujourd'hui, …",
    "Depuis quelques années, …",
    "On entend souvent dire que…",
    "C'est une question qui revient souvent.",
    "C'est un sujet dont on parle beaucoup."
  ],

  // ── Poser la question ──
  poser: [
    "On peut donc se demander si…",
    "Il est donc légitime de se demander si…",
    "La question est de savoir si…",
    "Alors, est-ce que…?"
  ],

  // ── Donner son avis ──
  avis: [
    "À mon avis, …",
    "Selon moi, …",
    "Personnellement, je pense que…",
    "Je suis convaincu(e) que…",
    "D'après moi, …"
  ],

  // ── Annoncer le plan ──
  annoncer: [
    "Je vais expliquer pourquoi.",
    "Et cela pour trois raisons.",
    "Je vais développer trois arguments.",
    "Voici les raisons pour lesquelles je pense cela."
  ],

  // ── Enchaîner les arguments ──
  enchainer: [
    "Tout d'abord, …",
    "Premièrement, …",
    "Ensuite, …",
    "De plus, …",
    "Par ailleurs, …",
    "Enfin, …"
  ],

  // ── Expliquer et justifier ──
  expliquer: [
    "En effet, …",
    "C'est-à-dire que…",
    "Cela s'explique par…",
    "La raison est simple :",
    "Autrement dit, …"
  ],

  // ── Illustrer ──
  illustrer: [
    "Par exemple, …",
    "Prenons un exemple.",
    "Je pense notamment à…",
    "C'est le cas de…"
  ],

  // ── Conséquence ──
  consequence: [
    "Par conséquent, …",
    "C'est pourquoi…",
    "Du coup, …",
    "Résultat : …",
    "Cela permet de…"
  ],

  // ── Nuancer, concéder ──
  nuancer: [
    "Cependant, …",
    "Bien sûr, …",
    "Il est vrai que…",
    "Je comprends que…",
    "Il ne faut pas oublier que…",
    "Cela dit, …"
  ],

  // ── Opposer ──
  opposer: [
    "En revanche, …",
    "Au contraire, …",
    "Mais, …",
    "D'un côté… de l'autre…",
    "Alors que…"
  ],

  // ── Conclure ──
  conclure: [
    "Pour conclure, …",
    "En conclusion, …",
    "Finalement, …",
    "En fin de compte, …",
    "Pour toutes ces raisons, …"
  ],

  // ── Les verbes qui reviennent partout ──
  verbes: [
    "jouer un rôle important dans",
    "avoir un impact sur",
    "avoir des conséquences sur",
    "permettre de + infinitif",
    "aider à + infinitif",
    "empêcher de + infinitif",
    "faire face à",
    "tenir compte de",
    "prendre conscience de",
    "se rendre compte de",
    "avoir tendance à",
    "être obligé de",
    "avoir besoin de",
    "avoir le choix",
    "trouver un équilibre",
    "profiter de",
    "manquer de",
    "risquer de + infinitif"
  ],

  // ── Les noms qui reviennent partout ──
  noms: [
    "les avantages et les inconvénients",
    "un problème",
    "une solution",
    "une conséquence",
    "un risque",
    "un choix",
    "la vie quotidienne",
    "la société",
    "l'expérience",
    "les relations",
    "la santé",
    "le temps libre"
  ],

  // ── Les adjectifs qui reviennent partout ──
  adjectifs: [
    "important",
    "nécessaire",
    "utile",
    "difficile",
    "possible",
    "efficace",
    "positif / négatif",
    "grave",
    "fréquent"
  ]
};

// ── À NE PAS FAIRE ──────────────────────────────────────────────
// Images inventées par le rédacteur, retirées des fiches :
//   « l'épaisseur d'un lien »          → « une vraie amitié »
//   « il ne garde pas la place »       → « cela ne suffit pas »
//   « les pertes arrivent sans bruit » → « on ne s'en rend pas compte tout de suite »
//   « voir vieillir ses parents par écran » → « voir ses parents seulement en vidéo »
//   « le bilan penche du bon côté »    → « les avantages sont plus importants »
//   « il hérite d'un appareil… »       → « il reçoit un téléphone… »
//   « un vide inattendu »              → « un moment très difficile »
// Règle : si l'expression n'existe pas telle quelle dans une méthode
// de FLE ou dans la presse ordinaire, elle ne va pas dans une fiche.
