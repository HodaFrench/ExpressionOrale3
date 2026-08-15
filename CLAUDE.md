# TCF Avec Hoda — Expression Orale (Tâche 3) · project guide for Claude

Bilingual (French / Persian) static site for **TCF Canada — Expression Orale, Tâche 3**.
Plain HTML/CSS/JS, no build step. UI text is Persian (RTL). Learner's L1 is Persian.
Continue the work described below; the chat that produced this does NOT transfer — this
file is the source of truth.

## Two systems in this repo (keep separate)
0. **Homepage** `index.html` — rebuilt 2026-07-30. Data-driven shell: reads `data.js` +
   `eo-data.js`, computes progress from the `done` flags, lists ready exercises, the 7
   analyses and the 12 themes. **Adding an exercise needs no edit here** — flipping
   `done:true` in `eo-data.js` is enough. Signature element: the hero is a live
   interlinear demo (real segments from trainer #3) so the method teaches itself.
   Fonts: Vazirmatn (fa/UI) + Newsreader (fr). Type-size control persisted in
   `localStorage['hk-scale']`. Previous homepage kept as `index-classic.html`.
1. **Existing SUJET system** (do NOT modify): `data.js` (CATEGORIES + LESSONS),
   `SUJET1..7_*.html` (standalone analysis pages: French + full Persian block).
   Theme vars: navy `#0f3460`, purple `#533483`.
2. **NEW EO sight-translation trainer** (the active work):
   - `eo-data.js` — 120 Tâche-3 questions classées en **12 thèmes** (`EO_THEMES` + `EO_QUESTIONS`,
     each `{id, theme, done, q}`). The list order = **fréquence/importance** (top = plus important).
   - `EO_trainer.html` — hub: recherche + filtres par thème + barre de progression. Lit
     `eo-data.js` + `eo-trainers.js`; une question est "done" si `EO_TRAINERS[id]` existe.
     Accepte `?theme=<id>` (deep-link depuis l'accueil) et met l'URL à jour au filtrage.
   - `EO_practice.html?id=N` — lecteur générique d'un trainer (rend l'interlinéaire depuis les données).
   - `eo-trainers.js` — `EO_TRAINERS = { id: {...} }`, les données interlinéaires par question.

A trainer entry shape (in `eo-trainers.js`) — **two levels per question since #4**:
```js
ID: {
  position:'موضع… (Persian)',
  rawFa:"the learner's raw Persian answer, verbatim…",
  versions:[                       // ordre croissant, obligatoire
    { id:"n7", level:"11/20", time:"~3:40", paragraphs:[ … ] },
    { id:"b2", level:"B2+",   time:"~4:05", paragraphs:[ … ] },
    { id:"c1", level:"C1",    time:"~4:00", paragraphs:[ … ] },
  ]
}
```
Each `paragraphs` entry:
```js
{ label:"INTRODUCTION", cls:"lb-intro", time:"⏱ ~45 ثانیه", segments:[
  {fr:"De nos jours,", fa:"امروزه،"}, …
]}
```
`cls` réellement stylé dans `EO_practice.html` : **`lb-intro` · `lb-arg` · `lb-conc`** — pas
`lb-arg1..4`, qui n'existent pas.

**Backward compatibility — do not break it.** Entries `#1`–`#3` predate `versions[]` and keep
the flat shape (`level` + `paragraphs` at the top level). `EO_practice.html` normalises both
into a `VERSIONS` array and only shows the level selector when there is more than one version.
Chosen level persists in `localStorage['hk-level']`.

## THE WORKFLOW — one question at a time (follow exactly)
1. **Claude picks the next question** from the TOP of the remaining list in `eo-data.js`
   (frequency order — lowest undone id first, unless the user picks one). Use the **exact**
   question wording from `eo-data.js`.
2. **The user writes their raw Persian answer** word-by-word (their own logic and words).
   Claude does NOT invent the opinion — it comes from the user.
3. Claude writes **three versions** of the same monologue: **11/20**, **B2+** and **C1**.
   Same argument chain, same order, same examples — only the linguistic level differs.
   Length: **500–540 words** for B2+ and C1; **430–470 words** for 11/20 (see below).
   ⚠️ Count with Python, not `wc -w`: the container has no UTF-8 locale and `wc -w` miscounts
   em-dashes. Use `len([w for w in text.split() if re.search(r'[A-Za-zÀ-ÿ0-9]', w)])`.
   Register and rhetoric: see the section below. It is not optional.

4. Present the French + a faithful Persian rendering; **iterate until the user approves**
   (approval looks like "خوبه" / "خوبه بریم"). Only then continue.
5. Claude segments the French into **interlinear FR↔FA chunks** (2–6 words each). The Persian
   gloss follows **French word-order (LTR)** — deliberately not natural Persian order — so it
   cues "the next phrase to produce".
6. Add the entry to `eo-trainers.js` keyed by the question id, with `rawFa` = the user's raw
   Persian answer.
7. Set that question's `done:true` in `eo-data.js`.
8. **Verify** in a browser: `EO_practice.html?id=N` renders (paras, segments, raw card,
   cumulative reveal on click), and the hub progress increments. Then commit.
9. Move on to the next question (Claude's pick, by frequency).

## REGISTER — the user's reasoning, delivered at Obama level (set 2026-07-30)
The user's brief, verbatim in substance: *the rhetorical quality must be at least Obama's,
but it must not depart from her own ideas and argumentative model — it has to be authentic
so that she does not need to memorise it.*

The reason this works: Obama's power is **structural, not lexical**. His vocabulary is
deliberately plain; the sophistication lives in the arrangement. That is exactly what the TCF
grades (cohérence, articulation, aisance) and it avoids the written-register inflation that
costs marks. So: raise the architecture, never the dictionary.

### Invariant — Claude may NOT touch
- The position/thesis, and what she concedes vs. refuses to concede.
- The list of arguments **and their order**. Her sequence is her memory hook.
- The causal chain between them (her "because" / "therefore").
- Any concrete example, comparison or personal detail she gives.

### Variable — this is where the rhetoric goes
- Sentence arrangement, length and cadence: a long developed sentence, then a short one that lands.
- Opening from the opposing view before answering it (concessio) — very Obama, and exactly
  what Tâche 3 rewards.
- Explicit antithesis: *la question n'est pas X — c'est Y*; *reculer, ce n'est pas disparaître*.
- Tricolon — **only when the three items are already hers**.
- Closing on a principle rather than on a fact.
- Spoken markers kept on purpose: *Alors oui*, *Et puis*, sentence-initial *Parce que*.
  Wrong in written French, a fluency signal in speech.

### Hard prohibitions
- **No new argument**, however good it would sound.
- **No statistic, study, institution or fact she did not state.**
- **No invented anecdote or personal experience.**
- If a tricolon needs a third item and she gave two — do **not** invent one. Use a two-part
  antithesis instead. This is the rule that gets broken first; do not break it.

### The test that decides whether a draft passes
Could she rebuild this monologue from a five-line Persian outline of her own reasoning?
If any sentence depends on a clever turn she would never have produced herself, it fails —
because then she has to memorise it, which is the exact outcome she is trying to avoid.

### Calibration — Obama **in a podcast**, not Obama at a podium (user's words)
Tâche 3 addresses a **specific interlocutor in a defined situation** (a friend, a colleague,
a neighbour). The target is the register of a thoughtful interview: eloquent but relaxed,
thinking aloud, qualifying itself, warm. Podium solemnity applied to "convince your friend to
sort his rubbish" reads as parody and as memorised. Over-polish is itself a scoring risk.

## LES NIVEAUX (révisé 2026-08-14 : B1 + B2)
Elle a tranché pour les fiches élèves : **B1 et B2, sans C1.** Un C1 n'aide pas un élève qui
vise le seuil ; il lui donne des phrases qu'il ne pourra pas dire proprement.

| | Longueur | Phrase moyenne | Marque |
|---|---|---|---|
| **B1** | **350–400 mots** | ~10 mots | principales seulement, connecteurs de base |
| **B2** | **500–540 mots** | ~13 mots | relatives, subjonctif courant, quelques nominalisations |

⚠️ **B1 est nettement plus court, et c'est délibéré.** À ce niveau on parle plus lentement,
avec des pauses : les mêmes quatre minutes portent beaucoup moins de mots. Écrire 500 mots
serait irréalisable à l'oral.

### Ce qui distingue concrètement B1 de B2
| B2 | B1 |
|---|---|
| `un message ne demande qu'un instant, alors qu'une visite demande de se déplacer` | `Écrire un message, c'est facile. Aller voir quelqu'un, c'est plus difficile.` |
| `à force de voir la vie que les autres mettent en ligne` | `Quand on regarde la vie des autres sur les réseaux` |
| `il amplifie ce qui existait déjà` | `il rend plus fort ce qui existe déjà` |
| `tous trouvent en ligne des liens qu'aucun voisinage ne leur offrirait` | `Ces personnes trouvent des amis sur Internet.` |

**Ce qui ne baisse jamais :** les six blocs, les trois arguments nommés, le contre-argument,
le pivot conditionnel. C'est la structure qui rapporte des points, pas la syntaxe.

### Techniquement
`blocs.html` ne code plus les niveaux en dur. Il lit les clés présentes dans `textes` et les
range dans l'ordre `n7 → b1 → b2 → c1`, en ouvrant sur le plus accessible. Les fiches #1 à #3
gardent donc leur paire b2/c1 sans rien casser — **mais il leur manque un B1**, c'est une dette.

## HER IDIOLECT — derived from the `rawFa` of #1, #2, #3 (2026-07-30)
The user asked that her *thinking model, her way of connecting sentences and her ordering* be
preserved. Below is what those three texts actually show. **Finding: she already uses
concession, antithesis and tricolon natively in Persian.** The Obama brief is therefore not
about importing a foreign structure — it is about not flattening, in French, the rhetoric that
is already in the Persian. Earlier drafts lost it in translation.

### Her fixed macro-structure (reproduce this order)
1. **Temporal framing.** She opens by placing the question in a span of time — *«در طیِ پنجاه
   سالِ گذشته…»*, *«در سال‌های اخیر…»*. All three do this. Never open cold on the thesis.
2. **Reversal / concession, then thesis.** *«اگرچه من هم سابقاً بر این باور بودم که… اما الان
   پذیرفته‌ام که…»* — she concedes her own former view, or an opposing one, *before* asserting.
3. **The thesis names its own arguments as labels**, announced up front: *«دو اثرِ مستقیمِ
   حیاتی دارد: اثرِ سیگنالینگ و اثرِ قابل‌انتقال‌کردنِ دانش»*. Keep the labels; they are her
   memory hooks.
4. **The thesis sentence carries its own counterweight**, appended: *«…با وجودِ هزینه‌های…»*,
   *«…علی‌رغمِ کاهشِ چشمگیرِ سهمش…»*. Do not split this off into a later paragraph.
5. **Argument → mechanism → concrete example.** Always that order. Her examples are specific
   and checkable (This Is Us, هند تا کانادا, ۱۰۰ هزار دلار, ارشدِ مارکتینگ).
6. **The conditional pivot** — her signature. After each argument she narrows it:
   *«آنچه اهمیت دارد… است»*, *«موردی که در صدرِ اولویت قرار دارد…»*. In #1 it is already a
   pure antithesis: *«نه صرفاً یک تحصیلِ ساده، بلکه تحصیل در دانشگاه‌های برتر»*.
7. **Explicit concession block**, then rebuttal: *«البته نباید نادیده گرفت که…»* → *«با این
   وجود…»* / *«اگرچه…»*.
8. **Close on a person, not a summary.** #1 projects onto *«کارمندان و مدیرانِ جوان»*; #2
   switches to direct address: *«اگر تصمیم گرفتی و بهایش را پرداختی، بدان که…»*. Warm,
   forward-looking, second person. This is very close to podcast-Obama already — keep it.

### Her stance is never absolute
It is always a **conditional yes** — *«مشروط به…»* appears explicitly in #1 and #2. Never
render her position as a flat oui. Render it as *oui, à une condition*.

### Her connectors → French equivalents (spoken register)
| فارسی | français |
|---|---|
| برای شروع باید گفت که | Déjà, il faut dire que… / Commençons par le plus simple : |
| مضاف بر این | Et puis il y a autre chose. / À cela s'ajoute que… |
| در واقع | En réalité, / En fait, |
| برای مثال | **Je prends un exemple.** (phrase courte autonome — rythme de podcast) |
| البته نباید نادیده گرفت که | Alors bien sûr, on ne peut pas faire comme si… |
| به معنای دیگر | Autrement dit, |
| با این وجود / اگرچه | Et pourtant, / Malgré tout, |
| روی‌هم‌رفته | Au fond, / Tout bien pesé, |
| آنچه اهمیت دارد X است | **Ce qui compte, ce n'est pas X — c'est Y.** |
| مشروط به… | à une condition : … |

### Register of her vocabulary
Educated professional, not folksy: she reaches for precise terms (*اثرِ سیگنالینگ*, *دانشِ
ضمنی*, *تکثرِ شخصیتی*, *بلامنازع*). French should match that — precise, but still spoken.

### Her sentence rhythm
She chains claim + mechanism with «؛» constantly. In French this becomes: a developed
sentence, then a colon or a dash, then the mechanism. Alternate with a short landing sentence
— that short sentence is where the podcast register lives.

## THIRD SYSTEM — « Blocs & collocations » (added 2026-07-31, for her STUDENTS)
Files: `blocs-data.js` + `blocs.html?id=N`. Linked from the homepage (`#blocsGrid`).

**`blocs.html` is a clone of `EO_practice.html`.** Do not redesign it. The user was explicit
twice: the site has one rhythm — you tap a Persian chunk, the French appears — and every page
must keep it. Same header, same badge, same guide box, same level bar, same toolbar, same
`.tr-seg` mechanics, same cumulative reveal. Only the data source differs
(`BLOCS_SUJETS` instead of `EO_TRAINERS`) and the level bar reads B2 / C1, opening on **B2**.

If `EO_practice.html` changes, port the change here too. They are meant to stay twins.

**What this section adds, and why it exists.** Her diagnosis of the existing trainer texts:
they did not supply good idiomatic collocations. So here the *text itself is built around
collocations*, and the extras pull those blocks out so they transfer to other subjects:
- **Toolbox** (open by default, in the slot where `rawFa` sits on the practice page): verbs with
  their construction, collocations, adjective+noun, argumentative expressions by function.
  Each card shows Persian; tap reveals the French block. Same gesture as the segments.
- **Reformulation ladder** — the `simple` line is deliberately what literal translation
  produces; `B2+` is the target.
- **Anti-translation traps**, with the reason.
- **Transferable phrases**, semantic map, grammar used.

**Her spec:** 3 arguments + 1 counter-argument (not the 2+1 of her own trainer), B2 and C1,
and never a collocation invented because it "seems possible" — only what a real B2 candidate
could say aloud in a Tâche 3.

**Several equivalents per block, never one** (asked 2026-07-31). Each toolbox entry is
`{ fa, blocs:[…], ex?, role? }` — the Persian sense on the card, and on tap the whole family of
French equivalents, ordered from the most current to the most formal. The point is variation:
a student who only knows one way of saying a thing repeats it, and repetition is exactly what
costs marks. Fiche 1: 35 entries → 129 equivalents. Fiche 2: 37 → 153.

**Workflow when she sends a ready-made French text.** She supplies a model text; Claude files
it under the right existing category (adding one only if genuinely absent), merges it with the
documented reasoning profile, and rewrites at B2 — then produces the C1 version too. Fiche 2 is
the reference for this: her text arrived with three usable arguments but with idioms placed
where they did no logical work, and with a « contre-argument » that was not one. Both were
fixed and the fix was reported to her.

### ⚠️ Le gabarit qu'elle utilise produit toujours les trois mêmes défauts
Les textes qu'elle envoie sortent visiblement d'un même modèle. Trois défauts reviennent
**mot pour mot** d'un texte à l'autre — les corriger fait partie du travail, à chaque fois :

1. **Deux idiomes en pilote automatique dans le contre-argument** :
   « Ce qui nous met la puce à l'oreille, c'est que… » et « On ne peut pas avoir le beurre et
   l'argent du beurre. » Ils sont corrects en français mais ne relient rien. Un candidat qui
   place la même expression imagée dans chaque réponse s'entend réciter.
2. **Un créneau « hypothèse au passé » imposé** : « Si les parents avaient reçu… », « Si les
   parents avaient davantage pratiqué… ». La structure est plaquée pour montrer un
   plus-que-parfait + conditionnel passé, pas parce que l'argument la demande. Garder le
   `si + imparfait, + conditionnel`, plus naturel à l'oral, et seulement s'il sert.
3. **Un participe présent en tête de phrase** : « Élevant un enfant… », « Laissant tout
   faire… », « Restant passifs devant les écrans… ». Correct, mais quasi absent de l'oral.
   → `Quand on élève…`, `Si on laisse…`.

Et le paragraphe intitulé « contre-argument » n'en est presque jamais un : il glisse vers un
sujet voisin. Il faut écrire la vraie objection, puis y replacer sa matière en appui.

**Deux textes sur un même sujet arrivent parfois avec des positions différentes** (fiche 3 :
l'un partait de « obliger échoue », l'autre de « le sport est nécessaire »). Les fusionner en
une seule chaîne d'arguments plutôt que d'en choisir un : ici, le sport est nécessaire → mais
l'obligation ruine l'envie → donc c'est le choix qui dure.

⚠️ **Open question — « علیرضا ».** She asked twice that Claude "keep Alireza's mind in hand"
while merging. That name appears nowhere in the repo and she has not answered the question,
asked twice. Fiche 2 was therefore built on the only documented reasoning profile: the IDIOLECT
section below, derived from the `rawFa` texts. **Confirm whose profile that actually is before
building more on it** — if those raw Persian answers were Alireza's rather than hers, the
section title is simply wrong and should be corrected; if Alireza is someone else, a profile
has to be derived from his own texts first, exactly as was done here.

## THE QUESTION BANK (rebuilt 2026-07-31)
`eo-data.js` now holds **309 subjects in 11 categories**, from her own relevé of what actually
came up in the exam. Two fields carry real information — do not treat them as decoration:
- **`freq`** — how many times the subject was observed (43× down to 1×). The list is sorted by
  it, so the top of the list *is* the priority order. Displayed on every card.
- **`diff`** — her ambiguity index /10. `0` means she left it blank; the badge is then hidden.

**IDs 1–7 are frozen.** They are the seven questions that already have trainers, and
`eo-trainers.js` is keyed by id. When the bank was rebuilt, each of the seven was matched back
by normalised text and kept its original id; everything else was numbered from 8 upward. Any
future rebuild must do the same — breaking an id silently orphans a trainer.

Themes gained an `emoji` field, shown on the cards and in the hub tabs.

**Pending state is explicit,** at her request: a card with no trainer reads
« هنوز جواب داده نشده », is dashed and slightly faded, and is not a link. Only `done` cards
navigate to `EO_practice.html`.

### État des fiches « blocs » (2026-08-14)
| # | sujet | thème | freq | niveaux | équivalents |
|---|---|---|---|---|---|
| 1 | gratuité des loisirs culturels | culture | 16× | B2 · C1 | 129 |
| 2 | l'autorité dans l'éducation | famille | 26× | B2 · C1 | 153 |
| 3 | obliger les enfants au sport | sport | 6× | B2 · C1 | 145 |
| 4 | Internet et l'isolement | techno | 26× | B1 · B2 | 97 |
| 5 | le téléphone pour les enfants | techno | 26× | B1 · B2 | 94 |
| 6 | travailler jusqu'à 70 ans | travail | 26× | B1 · B2 | 91 |
| 7 | études et réussite professionnelle | edu | **43×** | B1 · B2 | 92 |

⚠️ La fiche 7 traite le sujet **le plus fréquent de toute la banque (43×)**, et il existe
déjà un entraînement à elle sur la même question. Les deux ne doivent pas se ressembler : son
entraînement repose sur « l'effet de signal » et « la transférabilité du savoir » ; la fiche
élève pivote sur « le diplôme ouvre la porte, mais il ne garde pas la place ».

Dette : `#1`–`#3` n'ont pas de B1. Leur B2 existe, il ne reste qu'à le simplifier.

⚠️ **Ne pas réutiliser deux fois de suite le même pivot rhétorique.** La fiche 5 est bâtie sur
« la question est mal posée » (on ne peut pas mettre un enfant de 7 ans et un ado de 16 dans la
même phrase). Refaire le même mouvement sur la fiche 6 — « on ne peut pas mettre un professeur
et un maçon dans la même phrase » — aurait produit exactement le tic de gabarit qu'on reproche
aux textes reçus. La fiche 6 pivote donc ailleurs : **choisir ou subir**.

**`verifier-gloses.js` est désormais agnostique aux niveaux** : il lit les clés présentes dans
`textes` au lieu de supposer b2/c1. Il plantait sur les fiches B1/B2 — corrigé.

## Progress — entraînements 7/309 · fiches blocs 5
- ✅ `#1` "Faire des études permet de réussir sa carrière…" (C1 seul, 504 mots).
- ✅ `#2` "Quel est l'intérêt d'avoir une expérience … à l'étranger ?" (C1 seul, 536 mots).
- ✅ `#3` "…quel rôle joue la télévision dans l'éducation des enfants ?" (C1 seul, 516 mots).
- ✅ `#4` "Pensez-vous que l'autorité soit indispensable dans l'éducation d'un enfant ?" —
  **premier à deux niveaux** (C1 531 / B2+ 539), premier écrit sous REGISTER + IDIOLECTE.
- ✅ `#5` "Est-ce qu'il est difficile de vivre dans un pays étranger ?" (C1 537 / B2+ 538).
  Bloc d'objection réel — visa, permis, diplôme non reconnu — réfuté avec son propre principe :
  ces obstacles se connaissent **avant** le départ, d'où préparation et pas seulement motivation.
- ✅ `#6` "vivre à l'étranger : plus d'avantages ou d'inconvénients ?" (C1 509 / B2+ 531).
  Écrite depuis un **squelette de cinq lignes**, pas un texte complet. Format plus rapide pour
  elle mais qui oblige à déplier : cinq formulations sont de Claude, signalées avant validation.
- ✅ `#7` "peut-on être épanoui en vivant seul ?" (11/20 450 · B2+ 537 · C1 523) —
  **première question à trois niveaux**. Sa réponse était très
  autobiographique (son appartement, ses parents, ses réunions nocturnes) ; **à sa demande,
  transposée à la 3e personne** — les `je` restants portent la position, pas les exemples.
  Elle a aussi validé un ajout : les rencontres choisies sont de meilleure qualité que les
  rencontres subies, ce qui retourne l'objection au lieu de seulement la concéder.
- ⏭️ Next: `#8` (thème فرهنگ و اوقات فراغت) — waiting for her raw Persian answer or skeleton.

💡 **Le format squelette marche mieux.** Depuis `#6` elle peut envoyer six lignes — موضع /
دلیل اول / دلیل دوم / مثال / مخالف‌ها / جواب تو — au lieu d'un texte complet. C'est plus rapide
pour elle. En contrepartie il faut déplier davantage, donc **lister explicitement les
formulations ajoutées** avant qu'elle valide.

⚠️ **Recouvrement du thème migration.** `#2`, `#5` et `#6` sont faites et s'appuient toutes les
trois sur les Émirats — c'est sa seule grande expérience, donc légitime, mais le cadrage doit
différer : `#5` = l'arrivée et l'absence de réseau, `#6` = les années sur place et ce qu'elles
ont apporté. Ne pas laisser les trois converger.

**Dettes de niveaux** (état au 2026-07-31) :
- `#1`–`#3` : un seul niveau (C1), et écrits avant REGISTER. Deux chantiers distincts.
- `#4`–`#6` : deux niveaux, il leur manque le **11/20**.
- `#7` : les trois. C'est la cible pour toute nouvelle question.
- The reference demo `TRAINER_RELATIONS_DISTANCE.html` (relations à distance) is a standalone
  page NOT part of the 120 list — leave it as a working example.

## Gotchas
- Pages are `dir="rtl"`. The trainer's `.tr-flow` MUST set `direction:ltr` or the FR segments
  render right-to-left instead of French order. `.tr-fa` uses `text-align:left` so each Persian
  gloss sits **left-aligned, directly under its French chunk**. The user was explicit about this.
- Pages are self-contained (inline CSS/JS, no shared `assets/` folder). Google Fonts are the
  only external dependency.
- Interaction: French hidden by default; clicking a Persian chunk reveals French for it + all
  prior chunks in the same paragraph (cumulative); click again hides. Buttons: نمایش/مخفی همه.

## Run / verify locally
`python3 -m http.server 8000` then open `http://localhost:8000/EO_trainer.html`.

## Hosting (changed 2026-07-30)
The repo `HodaFrench/ExpressionOrale3` is now **public** and served by **GitHub Pages**
from `main` / root → https://hodafrench.github.io/ExpressionOrale3/

Note this reverses the earlier preference (private source + Netlify/Cloudflare). The
consequence: everything in the repo is publicly readable, including `rawFa` (the user's
raw Persian answers), `CLAUDE.md`, `HANDOFF.md` and the full commit history. If the user
ever wants the source hidden again while keeping a live site, deploy from a private repo
via Netlify or Cloudflare Pages instead.

## Accessibility bar (user requirement: ADHD-friendly)
Hold new pages to this: everything visible on load (no search/tab gates), one primary
action per screen, contrast ≥ 4.5:1 for body text, identical card shapes, visible numeric
progress, `prefers-reduced-motion` honoured, visible keyboard focus, tap targets ≥ 44px.
Do not hide content behind progressive disclosure.

## Mobile-first (set 2026-07-30)
The phone is the reference, not the fallback. Rules for any new or edited CSS:

- **`min-width` only.** Base styles target the phone; breakpoints add as the screen grows.
  `index.html` has zero `max-width` media queries — keep it that way.
  Breakpoints: **640px** (tablet, 2 columns) and **1024px** (desktop, 3–4 columns).
- **Tap targets ≥ 44×44px.** Includes `.tr-seg` — the interlinear segments are the main
  interaction of the whole site and are tapped hundreds of times per session.
- **No text below 13px.** 11–12px was in use and is unreadable on a phone.
- **Hover only behind `@media (hover:hover) and (pointer:fine)`.** On touch, `:hover` latches
  after a tap. `EO_trainer.html` had the "go" arrow revealed on hover only — invisible to a
  finger. It is now always visible on touch, hover-revealed on mouse.
- **`viewport-fit=cover`** on every page, with `env(safe-area-inset-*)` in the gutters and the
  footer so nothing hides under a notch or a home indicator.
- **`touch-action:manipulation`** on interactive elements to kill the 300ms tap delay.

Audit script pattern (Playwright, `is_mobile=True`) — check at 360px and 390px:
horizontal overflow, count of targets under 44px, smallest rendered font.
