// Vérifie que le lexique neutre figure bien DANS LE TEXTE d'une fiche,
// et pas seulement dans sa boîte à outils.
// Chaque verbe est repéré par sa racine, conjugaison comprise.
const fs = require('fs');
const L = eval(fs.readFileSync(__dirname + '/lexique-neutre.js','utf8') + '\n; LEXIQUE_NEUTRE');

const MOTIFS = [
  ['permettre de',        /perme(t|ttent|ttra|ttrait|ttre)\s+(à\s+\S+\s+)?d[e’']/],
  ['contribuer à',        /contribu(e|ent|er|ait)\s+à/],
  ["favoriser l'accès à", /favoris(e|ent|er|ait)\s+l[’']accès/],
  ['constituer un obstacle', /constitu(e|ent|er|ait)\s+(\S+\s+){0,2}un\s+obstacle/],
  ['faire face à',        /fai(re|t|sant)\s+face\s+à|doivent\s+faire\s+face/],
  ['être confronté à',    /confront(é|és|ée|ées)\s+à/],
  ['avoir un impact sur', /(a|ont|avoir|aura)\s+un\s+impact/],
  ['jouer un rôle',       /jou(e|ent|er|ait)\s+un\s+rôle/],
  ['entraîner',           /entraîn(e|ent|er|ait)/],
  ['réduire / renforcer', /(rédui|diminu|augment|renforc)(re|t|sent|er|e|ent)/],
  ['tenir compte de',     /tenir\s+compte|tienne?nt\s+compte/],
  ['mettre en place',     /(mettre|met|mettent)\s+en\s+place|prendre?\s+en\s+charge/],
  ['dépendre de',         /dépend(e|ent|re|ra)?\s+(\S+\s+){0,2}(de|du|des|d[e’'])/],
  ['se révéler',          /se\s+r[ée]v[èé]l|s[’']av[èé]r/],
  ['risquer de',          /risqu(e|ent|er|ait)\s+(\S+\s+){0,2}de/],
  ['il revient à',        /il\s+revient\s+à|c[’']est\s+à\s+\S+\s+de/],
  ['avoir tendance à',    /tendance\s+à|finir\s+par|finit\s+par/],
];

function scan(txt){
  const t = txt.toLowerCase();
  return MOTIFS.filter(([, re]) => re.test(t)).map(([n]) => n);
}

const cible = process.argv[2];
if (cible) {
  const found = scan(fs.readFileSync(cible,'utf8'));
  console.log(`${found.length}/${MOTIFS.length} verbes neutres`);
  console.log('  ✓ ' + found.join(' · '));
  const abs = MOTIFS.map(([n])=>n).filter(n=>!found.includes(n));
  if (abs.length) console.log('  absents : ' + abs.join(' · '));
} else {
  const S = eval(fs.readFileSync(__dirname + '/blocs-data.js','utf8') + '\n; BLOCS_SUJETS');
  for (const f of S) {
    const t = Object.values(f.textes).flat().flatMap(p=>p.segments).map(s=>s.fr).join(' ');
    console.log('  #'+f.id, String(scan(t).length).padStart(2)+'/'+MOTIFS.length, f.q.slice(0,44));
  }
}
