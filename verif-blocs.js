// Contrôle que les « équivalents » d'une entrée en sont vraiment.
//
// Défaut réel trouvé sur le corpus : sous le sens « choix limité »
// figuraient « un choix limité », « peu de références » ET « des
// milliers de références » — un mot et son contraire au même endroit.
// Ailleurs, « la taille ne convient pas » cohabitait avec « essayer
// un vêtement », qui ne veut pas dire la même chose.
//
// Un élève qui apprend une entrée doit pouvoir remplacer n'importe
// lequel de ses éléments par n'importe quel autre. Si ce n'est pas
// le cas, l'entrée est fausse.
const fs = require('fs');
const B = eval(fs.readFileSync(__dirname + '/blocs-data.js', 'utf8') + '\n; BLOCS_SUJETS');

const CONTRAIRES = [
  [/\blimité|restreint|peu de\b/i, /\bmilliers|beaucoup de|vaste|large\b/i],
  [/\bgratuit\b/i,                 /\bcoûte cher|payant\b/i],
  [/\baugment/i,                   /\bdiminu|rédui/i],
];
const estVerbe = s => /^(se |s'|ne )?[a-zà-ÿ']+(er|ir|re|oir)\b/i.test(s);
const estNom   = s => /^(un |une |le |la |les |l'|des |du )/i.test(s);

let pb = 0;
for (const f of B)
  for (const [cat, arr] of Object.entries(f.outils))
    for (const e of arr) {
      const b = e.blocs || [];
      if (b.length < 2) continue;
      const motifs = [];
      for (const [a, z] of CONTRAIRES)
        if (b.some(x => a.test(x)) && b.some(x => z.test(x)))
          motifs.push('contient un mot ET son contraire');
      if (cat !== 'expressions' && b.some(estVerbe) && b.some(estNom))
        motifs.push('mélange un verbe et un nom');
      if (motifs.length) {
        pb++;
        console.log(`  #${f.id} ${cat} — ${e.fa}`);
        b.forEach(x => console.log(`      · ${x}`));
        motifs.forEach(x => console.log(`      ⚠️ ${x}`));
      }
    }
console.log(pb ? `\n${pb} entrée(s) à reprendre.` : 'Toutes les entrées sont cohérentes. ✅');
