// Plafond B1 : signale ce qui dépasse le niveau.
// Le B1 n'est pas du B2 raté — c'est du français simple et juste.
const fs = require('fs');
const TROP_HAUT = [
  ['dont',            /\bdont\b/gi,                                  'relative avec dont'],
  ['lequel',          /\b(lequel|laquelle|auquel|duquel|lesquels)\b/gi,'relative avec lequel'],
  ['subj_rare',       /\b(bien qu[e’']|quoiqu[e’']|sans qu[e’']|avant qu[e’']|pour qu[e’']|afin qu[e’']|à condition qu[e’'])/gi, 'subjonctif au-delà de « il faut que »'],
  ['connecteur_haut', /\b(néanmoins|toutefois|cela dit|en revanche|or |dès lors|par ailleurs|il n[e’']en reste pas moins|à l[e’']inverse)/gi, 'connecteur B2'],
  ['impersonnel',     /\b(il convient de|il s[e’']agit de|il incombe|il revient à|force est de)/gi, 'tournure impersonnelle B2'],
  ['gerondif',        /\ben (?!plus|effet|revanche|ligne|général|France|même|tout|cas)[a-zéèêàçûôî]+ant\b/gi, 'gérondif'],
  ['ppresent',        /(^|[.!?] )[A-ZÉÈÀ][a-zéèêàçûôî]+ant\b/gm,     'participe présent en tête'],
  ['infpasse',        /\baprès (avoir|être) [a-zéèêàçûôî]+/gi,        'infinitif passé'],
  ['nominal',         /\b(l[ae’]|les|une|un|du|des) (réduction|augmentation|amélioration|acceptation|diminution|transmission|reconnaissance|valorisation|dégradation)\b/gi, 'nominalisation'],
  ['restriction',     /\bne [^.,;:]{1,30}\bqu[e’']\b/gi,              'restriction ne … que'],
  ['relief',          /ce n[e’']est pas .{2,50}[:,—] c[e’']est/gi,    'mise en relief'],
  ['passif',          /\b(est|sont|était|étaient) (souvent |parfois |toujours |également )?[a-zéèêàçûôî]+(é|és|ée|ées)\b/gi, 'voix passive'],
];
const t = fs.readFileSync(process.argv[2], 'utf8');
const mots = t.split(/\s+/).filter(w => /[A-Za-zÀ-ÿ0-9]/.test(w)).length;
const phrases = t.split(/[.!?:]+/).filter(x => x.trim()).length;
console.log(`mots : ${mots} | phrases : ${phrases} | moyenne : ${(mots/phrases).toFixed(1)} mots`);
let total = 0;
for (const [, re, nom] of TROP_HAUT) {
  const m = t.match(re);
  if (m) { total += m.length; console.log(`  ⚠️  ${nom} ×${m.length} — ${[...new Set(m)].slice(0,3).join(' / ')}`); }
}
console.log(total ? `\n→ ${total} éléments au-dessus du B1` : '\n→ rien au-dessus du B1 ✅');
