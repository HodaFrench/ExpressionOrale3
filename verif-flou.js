// ═══════════════════════════════════════════════════════════════
//  DÉTECTEUR DE FLOU
//
//  Elle a repéré « des métiers qui resteraient fermés autrement »
//  et a posé la bonne question : fermés, ça veut dire quoi ?
//  C'était une image, pas une explication — et je l'avais écrite
//  dans la fiche que je venais de donner comme modèle.
//
//  Une image n'explique rien à quelqu'un qui apprend la langue.
//  Elle oblige l'élève à deviner, et à l'oral il ne devinera pas.
//  Ce fichier liste les tournures à remplacer par ce qu'elles
//  veulent dire, avec la correction en face.
// ═══════════════════════════════════════════════════════════════

const FLOU = [
  { re: /rest(erai|ent|e)nt? ferm/i,
    quoi: "« des métiers fermés » — image",
    mieux: "des métiers qu'on ne peut pas exercer sans diplôme" },

  { re: /ouvre (beaucoup de |des |la )?porte/i,
    quoi: "« ouvrir des portes » — image",
    mieux: "aide beaucoup à commencer / facilite l'accès à" },

  { re: /autrement\s*\./i,
    quoi: "« autrement » seul — autrement que quoi ?",
    mieux: "dire l'autre terme : sans diplôme, par la pratique…" },

  { re: /beaucoup de choses/i,
    quoi: "« des choses » — lesquelles ?",
    mieux: "nommer : un métier, une méthode, des compétences" },

  { re: /à (lui|elle) seule?\s*\./i,
    quoi: "« à lui seul » — flou",
    mieux: "dire ce qui n'est pas garanti : ne garantit pas un bon poste" },

  { re: /(vont|va) plus loin que|dépassent? largement/i,
    quoi: "« aller plus loin / dépasser » — image",
    mieux: "qu'on n'apprend pas seulement dans les livres" },

  { re: /fait la différence/i,
    quoi: "« faire la différence » — flou",
    mieux: "dire qui décide de quoi : c'est le travail de chacun qui décide de la suite" },

  { re: /un point de départ\s*\./i,
    quoi: "« un point de départ » — image",
    mieux: "le diplôme seul ne suffit pas" },

  { re: /l'épaisseur|sans bruit|par écran|penche du bon côté/i,
    quoi: "image inventée par le rédacteur",
    mieux: "dire le fait, simplement" },
];

// ── usage ──
//   node verif-flou.js                → contrôle toutes les fiches
//   node verif-flou.js chemin.txt     → contrôle un brouillon
if (typeof require !== 'undefined' && require.main === module) {
  const fs = require('fs');
  const cible = process.argv[2];

  const scan = (txt, ou) => {
    let n = 0;
    for (const f of FLOU) {
      const m = txt.match(f.re);
      if (m) {
        const i = txt.search(f.re);
        console.log(`  ${ou} — ${f.quoi}`);
        console.log(`      …${txt.slice(Math.max(0, i - 40), i + 50).trim()}…`);
        console.log(`      → ${f.mieux}`);
        n++;
      }
    }
    return n;
  };

  let total = 0;
  if (cible) {
    total = scan(fs.readFileSync(cible, 'utf8'), cible);
  } else {
    const B = eval(fs.readFileSync(__dirname + '/blocs-data.js', 'utf8') + '\n; BLOCS_SUJETS');
    for (const f of B)
      for (const lvl of Object.keys(f.textes))
        total += scan(f.textes[lvl].flatMap(p => p.segments).map(s => s.fr).join(' '), `#${f.id} ${lvl}`);
  }
  console.log(total ? `\n${total} tournure(s) à reprendre.` : 'Aucune tournure floue. ✅');
}
