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

A trainer entry shape (in `eo-trainers.js`):
```js
ID: {
  level:'C1', time:'~4:30', position:'موضع… (Persian)',
  rawFa:"the learner's raw Persian answer, verbatim…",
  paragraphs:[
    { label:'INTRODUCTION', cls:'lb-intro', time:'⏱ ~40 ثانیه', segments:[
      {fr:"De nos jours,", fa:"امروزه،"}, …
    ]}, …
  ]
}
```
`cls`: `lb-intro` · `lb-arg1` · `lb-arg2` · `lb-arg3` · `lb-arg4` · `lb-conc`.

## THE WORKFLOW — one question at a time (follow exactly)
1. **Claude picks the next question** from the TOP of the remaining list in `eo-data.js`
   (frequency order — lowest undone id first, unless the user picks one). Use the **exact**
   question wording from `eo-data.js`.
2. **The user writes their raw Persian answer** word-by-word (their own logic and words).
   Claude does NOT invent the opinion — it comes from the user.
3. Claude converts the user's ideas into a **genuinely high-level C1, truly natural French**
   monologue. **Length MUST be 500–540 words** — verify with `wc -w` before presenting.
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

### Calibration
Tâche 3 addresses a **specific interlocutor in a defined situation** (a friend, a colleague,
a neighbour). Keep the rhetorical structure, but tune solemnity to the situation: podium
register applied to "convince your friend to sort his rubbish" reads as parody and as
memorised. Over-polish is itself a scoring risk.

## Progress (3 / 120 done)
- ✅ `#1` "Faire des études permet de réussir sa carrière…" (C1, 504 mots).
- ✅ `#2` "Quel est l’intérêt d’avoir une expérience … à l’étranger ?" (C1, 536 mots).
- ✅ `#3` "…quel rôle joue la télévision dans l’éducation des enfants ?" (C1, 516 mots, registre parlé).
- ⏭️ Next: `#4` "Pensez-vous que l’autorité soit indispensable dans l’éducation d’un enfant ?" (waiting for the user's raw Persian answer).
- Style note: natural, **spoken** C1 (not literary), precise idioms — now governed by the
  REGISTER section above. `#1`–`#3` were written before that rule and are NOT yet rewritten to it.
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
