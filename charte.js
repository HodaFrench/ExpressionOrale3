// ═══════════════════════════════════════════════════════════════
//  CHARTE DE RÉDACTION
//
//  Écrite après un constat mesuré sur les neuf premières fiches :
//   · deux échelles de niveaux coexistaient (B2+C1 et B1+B2) ;
//   · le registre variait d'une fiche à l'autre — la fiche 1
//     contenait cinq tournures littéraires et deux connecteurs
//     ordinaires, la fiche 8 l'inverse exact ;
//   · les paragraphes faisaient 66 à 87 mots, trop peu pour un
//     argument réellement développé.
//
//  Résultat : les textes ne semblaient pas écrits par la même
//  personne. Ce fichier est là pour que cela n'arrive plus.
// ═══════════════════════════════════════════════════════════════

const CHARTE = {

  // ── 1. NIVEAUX ── un seul couple, partout, sans exception
  niveaux: {
    b1: { mots: [380, 420], phrase: 11, nom: 'B1' },
    b2: { mots: [520, 560], phrase: 14, nom: 'B2' },
  },

  // ── 2. LONGUEUR DE CHAQUE BLOC (niveau B2) ──
  // C'était le vrai défaut : des paragraphes trop courts pour
  // contenir les quatre mouvements d'un argument.
  blocs: [
    { id: 'introduction', mots: [85,  95],  role: "quatre étapes du livret" },
    { id: 'argument1',    mots: [105, 120], role: "quatre mouvements" },
    { id: 'argument2',    mots: [105, 120], role: "quatre mouvements" },
    { id: 'argument3',    mots: [95,  110], role: "quatre mouvements, porte la nuance" },
    { id: 'contre',       mots: [85,  100], role: "objection réelle + réfutation" },
    { id: 'conclusion',   mots: [60,  70],  role: "verdict + condition + formule courte" },
  ],

  // ── 3. STRUCTURE INTERNE D'UN ARGUMENT ──
  // Obligatoire, dans cet ordre. C'est ce qui manquait : l'exemple
  // était souvent absent, et la conséquence presque toujours.
  mouvements: [
    { n: 1, nom: "Annonce",     amorces: ["Tout d'abord, …", "Ensuite, …", "Cependant, il ne faut pas oublier que…"] },
    { n: 2, nom: "Mécanisme",   amorces: ["En effet, …", "Cela s'explique par…", "La raison est simple :"] },
    { n: 3, nom: "Exemple",     amorces: ["Par exemple, …", "Prenons l'exemple de…", "C'est le cas de…"] },
    { n: 4, nom: "Conséquence", amorces: ["Par conséquent, …", "C'est pourquoi…", "De plus, …"] },
  ],

  // ── 4. INTRODUCTION : les quatre étapes ──
  introduction: [
    { n: 1, nom: "Présenter",  amorces: ["Aujourd'hui, X occupe une place importante dans…", "X joue un rôle important dans…"] },
    { n: 2, nom: "Importance", amorces: ["X permet de…", "Cependant, X demande…"] },
    { n: 3, nom: "Question",   amorces: ["On peut donc se demander si…", "La question est donc de savoir si…"] },
    { n: 4, nom: "Avis",       amorces: ["À mon avis, …", "Personnellement, je pense que…"] },
  ],

  // ── 5. CONCLUSION : trois mouvements ──
  conclusion: [
    { n: 1, nom: "Verdict",   amorces: ["Pour conclure, je pense que…", "Pour toutes ces raisons, …"] },
    { n: 2, nom: "Nuance",    amorces: ["Cependant, …", "Il faut aussi…"] },
    { n: 3, nom: "Formule",   amorces: ["En fin de compte, …", "Il vaut mieux X que Y."] },
  ],

  // ── 6. LES CONNECTEURS AUTORISÉS ── liste fermée
  // Rien d'autre. C'est la fermeture de cette liste qui donne
  // l'impression d'un auteur unique.
  connecteurs: {
    ouvrir:      ["Aujourd'hui,", "De nos jours,", "Depuis quelques années,"],
    enchainer:   ["Tout d'abord,", "Ensuite,", "De plus,", "Par ailleurs,", "Enfin,"],
    expliquer:   ["En effet,", "Cela s'explique par…", "Autrement dit,", "La raison est simple :"],
    illustrer:   ["Par exemple,", "Prenons l'exemple de…", "C'est le cas de…"],
    consequence: ["Par conséquent,", "C'est pourquoi…", "Cela permet de…"],
    nuancer:     ["Cependant,", "Bien sûr,", "Il est vrai que…", "Il ne faut pas oublier que…",
                  "Il convient de nuancer ce point."],
    opposer:     ["En revanche,", "Au contraire,", "Alors que…"],
    concéder:    ["Je ne vais pas prétendre le contraire.", "Il faut reconnaître que…"],
    conclure:    ["Pour conclure,", "En fin de compte,", "Pour toutes ces raisons,"],
  },

  // ── 7. TOURNURES INTERDITES ──
  // Correctes en français, mais elles cassent l'unité du corpus :
  // trop écrites pour un oral B2, et l'élève ne les reverra pas.
  interdits: [
    "d'emblée",                  // → "tout d'abord"
    "se révélerait",             // → "serait"
    "difficilement soutenable",  // → "difficile à maintenir"
    "il est illusoire de",       // → "il ne faut pas croire que"
    "ne saurait",                // → "ne peut pas"
    "en pâtiraient",             // → "en souffriraient"
    "tout bien considéré",       // → "pour conclure"
    "force est de constater",
    "d'aucuns",
    "Avec l'essor de…",          // ouverture bannie par le livret
  ],

  // ── 8. PAS D'IMAGES : dire ce que la phrase veut dire ──
  // Une image n'explique rien à qui apprend la langue. « Des métiers
  // qui resteraient fermés » oblige l'élève à deviner ; à l'oral il
  // ne devinera pas. Contrôle automatique : verif-flou.js
  images: [
    ["des métiers qui resteraient fermés", "des métiers qu'on ne peut pas exercer sans diplôme"],
    ["le diplôme ouvre des portes",        "le diplôme aide beaucoup à commencer"],
    ["apprendre beaucoup de choses",       "apprendre un métier"],
    ["des compétences qui dépassent les cours", "des compétences qu'on n'apprend pas seulement dans les livres"],
    ["le diplôme ne garantit rien à lui seul",  "le diplôme ne garantit pas un bon poste"],
    ["le diplôme n'est qu'un point de départ",  "le diplôme seul ne suffit pas"],
    ["c'est la personne qui fait la différence", "c'est le travail de chacun qui décide de la suite"],
  ],
};
