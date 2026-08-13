// Version affinée : mots entiers, et on ignore les variantes B2/C1
// d'une même fiche — ce sont des reformulations voulues, pas des erreurs.
const fs = require('fs');
const norm = s => s.replace(/[«»"'’،:؛.!?—–\-]/g,'').replace(/\s+/g,' ').trim().toLowerCase();
const segs = [];
const B = eval(fs.readFileSync('blocs-data.js','utf8') + '\n; BLOCS_SUJETS');
for (const f of B) for (const lvl of ['b2','c1']) for (const p of f.textes[lvl])
  for (const s of p.segments) segs.push({doc:`bloc${f.id}`, lvl, fr:s.fr, fa:s.fa});
const T = eval(fs.readFileSync('eo-trainers.js','utf8') + '\n; EO_TRAINERS');
for (const id of Object.keys(T)) {
  const e = T[id], vers = e.versions || [{id:'c1', paragraphs:e.paragraphs}];
  for (const v of vers) for (const p of v.paragraphs)
    for (const s of p.segments) segs.push({doc:`train${id}`, lvl:v.id, fr:s.fr, fa:s.fa});
}

// même glose persane → français différents DANS DES DOCUMENTS DIFFÉRENTS
const map = {};
for (const s of segs) {
  const k = norm(s.fa);
  (map[k] ||= []).push(s);
}
const vrais = [];
for (const [fa, list] of Object.entries(map)) {
  if (fa.length < 8) continue;
  const frs = new Set(list.map(x => norm(x.fr)));
  if (frs.size < 2) continue;
  const docs = new Set(list.map(x => x.doc));
  if (docs.size < 2) continue;          // même fiche = variante de niveau, normal
  vrais.push([fa, [...frs], [...docs]]);
}
console.log('▸ incohérences entre documents différents :', vrais.length);
for (const [fa, frs, docs] of vrais) {
  console.log('   «'+fa+'»   ['+docs.join(', ')+']');
  frs.forEach(f => console.log('        →', f));
}

// mots persans à double sens, en MOT ENTIER
const RISQUE = [
  ['تاریخ', 'date / histoire'], ['علم', 'science / savoir'],
  ['قدرت', 'pouvoir / force'], ['تجربه', 'expérience / essai'],
  ['طبیعت', 'nature / caractère'], ['زبان', 'langue / langage'],
  ['حق', 'droit / vérité'], ['نظر', 'avis / regard'],
];
console.log('\n▸ mots persans à double sens (mot entier) :');
let n = 0;
for (const [w, note] of RISQUE) {
  const re = new RegExp('(^|[\\s،:؛])' + w + '($|[\\s،:؛\u200c])');
  const hits = segs.filter(s => re.test(s.fa));
  if (!hits.length) continue;
  n += hits.length;
  console.log('   «'+w+'» ('+note+') —', hits.length, 'occurrence(s)');
  for (const h of hits.slice(0,5)) console.log('      ', h.doc+'/'+h.lvl, '|', h.fr, '→', h.fa);
}
if (!n) console.log('   aucune');
