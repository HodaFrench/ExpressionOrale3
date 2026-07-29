# TCF Avec Hoda — Expression Orale (Tâche 3) · project guide for Claude

Bilingual (French / Persian) static site for **TCF Canada — Expression Orale, Tâche 3**.
Plain HTML/CSS/JS, no build step. UI text is Persian (RTL). Learner's L1 is Persian.
Continue the work described below; the chat that produced this does NOT transfer — this
file is the source of truth.

## Two systems in this repo (keep separate)
1. **Existing SUJET system** (do NOT modify): `index.html` (homepage, data-driven from
   `data.js`), `data.js` (CATEGORIES + LESSONS), `SUJET1..7_*.html` (standalone analysis
   pages: French + full Persian block). Theme vars: navy `#0f3460`, purple `#533483`.
2. **NEW EO sight-translation trainer** (the active work):
   - `eo-data.js` — 120 Tâche-3 questions classées en **12 thèmes** (`EO_THEMES` + `EO_QUESTIONS`,
     each `{id, theme, done, q}`). The list order = **fréquence/importance** (top = plus important).
   - `EO_trainer.html` — hub: recherche + filtres par thème + barre de progression. Lit
     `eo-data.js` + `eo-trainers.js`; une question est "done" si `EO_TRAINERS[id]` existe.
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
   monologue, keeping **maximum detail close to the user's**, but fluency/naturalness first.
   **Length MUST be 500–540 words** — verify with `wc -w` before presenting.
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

## Progress (3 / 120 done)
- ✅ `#1` "Faire des études permet de réussir sa carrière…" (C1, 504 mots).
- ✅ `#2` "Quel est l’intérêt d’avoir une expérience … à l’étranger ?" (C1, 536 mots).
- ✅ `#3` "…quel rôle joue la télévision dans l’éducation des enfants ?" (C1, 516 mots, registre parlé).
- ⏭️ Next: `#4` "Pensez-vous que l’autorité soit indispensable dans l’éducation d’un enfant ?" (waiting for the user's raw Persian answer).
- Style note: the user prefers a **natural, spoken** C1 register (not overly literary) with precise idioms/terms.
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

## Hosting & privacy (user preference)
The user wants the **source private** but a viewable site. GitHub Pages public exposes the repo,
so prefer **Netlify / Cloudflare Pages / Vercel** (drag-drop or deploy from a private repo) for
any live link. Repos in play: `alimalekieu-lab/TCF_Avec_Hoda` (public) and
`HodaFrench/ExpressionOrale3` (private).
