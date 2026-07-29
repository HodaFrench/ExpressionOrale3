# HANDOFF — TCF Expression Orale (Tâche 3) sight-translation trainer

Complete transfer document. Read this **fully** before doing anything. It contains every
decision, convention, nuance, and piece of state from the project so you can continue with
zero loss of fidelity. The originating chat does NOT transfer — this file + the repo are the
single source of truth.

---

## 0) TL;DR — what you are doing
You help a learner build a **bilingual (French/Persian) sight-translation trainer** for
**TCF Canada – Expression Orale, Tâche 3** (the "give and defend your opinion" monologue).
Work proceeds **one question at a time**: the user gives a raw Persian answer → you turn it
into a polished **C1, natural, spoken** French monologue of **500–540 words** → after the
user approves, you break it into **interlinear FR↔FA segments** and add a data entry that a
generic page renders as an interactive trainer. There are **120 questions** total; **3 are
done** (#1, #2, #3). Next is **#4**.

---

## 1) Who you're working with (important)
- The learner is preparing for **TCF Canada** oral exam; L1 is **Persian**, target French **C1**.
- **Communicate in Persian** by default (the user writes mostly Persian, sometimes English).
- The user is **hands-on and opinionated about quality**. They will push back. Expect requests
  like: "make it 500–540 words", "use more precise French terms instead of translating me
  literally", "make it more spoken/less literary". Honor these; they are standing preferences now:
  - **Register:** natural **spoken** C1 — NOT overly literary/soutenu. Fluent, idiomatic,
    precise, but it must sound good said aloud (it will be memorized and performed).
  - **Fidelity vs. naturalness:** keep **maximum detail close to the user's ideas**, but
    **naturalness and correct high-level French win** over literal word-for-word rendering.
    You MAY replace the user's literal phrasing with more precise French terms/collocations.
  - **Length:** the French monologue MUST be **500–540 words**. Always verify with `wc -w`
    before presenting. Iterate (trim/expand) until it lands in range.
- **Approval gate:** never build the trainer until the user approves the monologue. Approval
  looks like **"خوبه"** / "خوبه بساز" / "همین خوبه". Present FR + a faithful Persian rendering
  per paragraph so they can verify meaning, and iterate on request.
- Privacy-conscious: wants the **source private**; see §5.

---

## 2) The product & pedagogy
Each trainer page shows the French monologue broken into short phrase chunks, with a Persian
gloss **directly under** each French chunk. The learner reads the Persian left→right (in
**French word order**) and says the French aloud; when stuck, they tap a Persian chunk to
reveal the French for it and all earlier chunks in that paragraph. This trains fast
Persian→French sight-translation for the exam. There's also a "raw Persian answer" card
(the user's own draft) stored on each page.

---

## 3) Repo layout & the two systems (keep separate!)
This repo (`TCF_Avec_Hoda` / `ExpressionOrale3`) contains **two independent systems**:

### System A — existing "SUJET" analysis pages (DO NOT MODIFY / DO NOT BREAK)
- `index.html` — the site homepage. `dir="rtl"`, Tahoma, theme vars navy `#0f3460`,
  purple `#533483`. Data-driven from `data.js`: renders search + category tabs + lesson cards.
- `data.js` — `CATEGORIES[]` and `LESSONS[]` (each lesson `{file,title,titleFr,category,score,tags,badge}`).
- `SUJET1..7_*.html` — standalone analysis pages (French text with highlight spans +
  a full Persian translation block). These are the teacher's older format. Leave them alone.
- We added into `data.js` a `trainer` category (`{id:"trainer",label:"🎯 تمرین ترجمه",color:"#9c27b0"}`)
  and two lesson cards pointing to `EO_trainer.html` and `TRAINER_RELATIONS_DISTANCE.html`.

### System B — the EO sight-translation trainer (THE ACTIVE WORK)
- `eo-data.js` — the **question bank**: `EO_THEMES` (12 themes) + `EO_QUESTIONS` (120 items).
- `EO_trainer.html` — the **hub** (search + theme filters + progress bar). Reads `eo-data.js`
  and `eo-trainers.js`.
- `EO_practice.html?id=N` — **generic reader**; renders the interlinear trainer for question N
  from the data. Works for any id that has an entry.
- `eo-trainers.js` — `EO_TRAINERS = { id: {...} }` — the interlinear data per question.
- `TRAINER_RELATIONS_DISTANCE.html` — a **standalone** earlier demo (relations à distance).
  It is NOT one of the 120 and NOT data-driven; leave it as a working example.

---

## 4) Data model — exact schemas

### `eo-data.js`
```js
const EO_THEMES = [ { id:'travail', fa:'کار و شغل', fr:'Travail & Carrière', color:'#1e88e5' }, ... ];
const EO_QUESTIONS = [ { id:1, theme:'travail', done:true, q:"Faire des études permet…" }, ... ];
```
- **120 questions, numbered 1..120, in FREQUENCY/IMPORTANCE order** (the list the user gave was
  ranked; lower id = more important/frequent). Use the **exact** `q` wording from this file.
- `done` is metadata; **the hub actually decides "done" by whether `EO_TRAINERS[id]` exists**,
  not by this flag. Still, set `done:true` when you finish a question, to keep data honest.

**The 12 themes (id — Persian — count):**
`travail` کار و شغل (19) · `immigration` مهاجرت و زندگی در خارج (16) · `societe` جامعه و ارزش‌ها (15) ·
`techno` تکنولوژی و اینترنت (13) · `sante` سلامت و تغذیه (11) · `etudes` تحصیل و آموزش (9) ·
`tourisme` گردشگری و سفر (9) · `famille` خانواده و روابط (7) · `medias` رسانه و تلویزیون (7) ·
`environnement` محیط‌زیست و اکولوژی (7) · `culture` فرهنگ و اوقات فراغت (4) · `animaux` حیوانات (3).

### `eo-trainers.js` — one entry per built question
```js
const EO_TRAINERS = {
  ID: {
    level:'C1',
    time:'~4:20',                              // spoken duration estimate
    position:'موضع: … (Persian one-line stance)',
    rawFa:"the user's raw Persian answer, verbatim (their own words) …",
    paragraphs:[
      { label:'INTRODUCTION', cls:'lb-intro', time:'⏱ ~40 ثانیه', segments:[
        { fr:"De nos jours,", fa:"امروزه،" },
        { fr:"Internet joue un rôle essentiel", fa:"اینترنت نقشی اساسی ایفا می‌کند" },
        // … 2–6 French words per chunk, Persian gloss under it
      ]},
      // ARGUMENT 1..N, then CONCLUSION
    ]
  },
};
```
- Paragraph `cls` values (control the colored label): `lb-intro` · `lb-arg1` · `lb-arg2` ·
  `lb-arg3` · `lb-arg4` · `lb-conc`.
- `time` per paragraph is a Persian label like `⏱ ~55 ثانیه`.
- Add new entries **inside** the `EO_TRAINERS = { … }` object (near the top is fine).

---

## 5) Repos, hosting & privacy
- **Live/web home = `HodaFrench/ExpressionOrale3` (PRIVATE).** This is where the finished work
  lives and where a Claude-with-GitHub session should read/write. Keep pushing here.
- The user also has a separate **public** repo where the older SUJET site was originally built.
  Do **not** push private/EO work to any public repo unless the user asks (they want it private).
- The user wants a **viewable site but private source**. GitHub Pages on a public repo exposes
  the repo; on a private repo it needs a paid plan. So for a live link prefer **Netlify /
  Cloudflare Pages / Vercel** (drag-drop the folder, or deploy from the private repo).
- Do not expose the user's real name/email in commits; use a neutral git identity and advise
  enabling "Keep my email private" on GitHub.
- If pushing to `ExpressionOrale3` from a machine authed as a different GitHub user, you need
  the HodaFrench account's auth. From a Claude-with-GitHub session, just use the connected repo.

---

## 6) Rendering & interaction (EO_practice.html) + gotchas
- French is **hidden by default** (`visibility:hidden`, slot kept). Persian glosses always show.
- **Click a Persian chunk** → reveals the French for that chunk **and all earlier chunks in the
  same paragraph** (cumulative). **Click again** on the same chunk → hides from there on.
- Toolbar buttons: **نمایش همه** / **مخفی کردن همه** (`revealAll(true/false)`).
- **GOTCHA (critical):** pages are `dir="rtl"`. The trainer flow container `.tr-flow` MUST set
  `direction:ltr`, otherwise French segments render **right-to-left** instead of French order.
  `.tr-fa` uses `text-align:left` so each Persian gloss sits **left-aligned, directly under its
  French chunk**. The user was explicit and insistent about this LTR alignment.
- Pages are **self-contained** (inline CSS/JS, no shared `assets/` folder). Only external
  dependency is **Google Fonts**.
- The generic reader escapes HTML and shows a graceful "not built yet" state for ids without data.

---

## 7) THE WORKFLOW — one question at a time (follow exactly)
1. **You pick the next question** from the **top of the remaining frequency-ordered list** in
   `eo-data.js` (lowest undone id), UNLESS the user names one. Use the **exact** `q` wording.
   The user sometimes asks for "a different theme" — then pick the lowest undone id from a theme
   not yet covered.
2. **Present the chosen question** (French + a short Persian gloss) and ask the user for their
   **raw Persian answer**, written word-by-word in their own logic and words. You do NOT invent
   the opinion; it must come from them.
3. **Convert** their ideas into a **C1, natural, SPOKEN** French monologue:
   - Structure: **INTRODUCTION + 3–4 ARGUMENTS + CONCLUSION.** If the user's answer lacks a
     conclusion, **add a short one** consistent with their stance (tell them you added it).
   - Keep **max detail close to their ideas + examples**, but prioritize naturalness and precise,
     idiomatic French. Replace literal phrasing with the right French **terms/collocations**.
   - **Length 500–540 words** — write it, then run `wc -w`, then trim/expand into range.
4. **Present** the French (labeled by paragraph) **+ a faithful Persian translation under each
   paragraph** so the user can confirm meaning. **Iterate until they approve** ("خوبه"). Offer,
   when relevant, a more-spoken vs more-literary option — the user prefers **spoken**.
5. **Segment** the approved French into **interlinear FR↔FA chunks of 2–6 words**. The Persian
   gloss must follow **French word order (LTR)** — deliberately NOT natural Persian order — so it
   cues "the next phrase to produce". Keep chunks phrase-sized and aligned to sense units.
6. **Add the entry** to `eo-trainers.js` keyed by the question id, with `rawFa` = the user's raw
   Persian answer (verbatim, their words), `position`, `level`, `time`, and the `paragraphs`.
7. **Set `done:true`** for that id in `eo-data.js`.
8. **Verify** (see §9): `EO_practice.html?id=N` renders all paragraphs/segments, raw card shows,
   cumulative reveal works; the hub progress increments and the card turns "✓ آماده — تمرین کن".
9. **Commit & push** (see §10). Then **move on to the next question** (your pick, by frequency).

---

## 8) Writing standards & precise-terminology playbook
Aim for genuine C1/C2 lexical range while staying natural and spoken. Use exact terms rather
than literal glosses. Examples of upgrades that worked and set the quality bar:
- Career/education topic: **effet de signal**, **asymétrie d'information**, **le diplôme fait
  office de gage**, **capital humain**, **savoir tacite / codifier**, **coût d'opportunité**,
  **manque à gagner**, **opérer une reconversion**, **universités de renom**.
- TV/children topic (kept **spoken**): **le petit écran**, **fenêtre ouverte sur un monde**,
  **repousser ses frontières mentales**, **médiation parentale**, **temps d'écran**,
  **plateformes de diffusion en ligne**, **esprit critique**, **tremplin vers la compréhension
  du monde**. Here the user explicitly asked to **soften literary phrasing**: e.g.
  `on ne saurait nier` → `on ne peut pas nier`; `ne saurait remplacer` → `ne remplacera jamais`;
  `Songeons` → `Pensons`; `intelligence de l'autre` → `ouverture aux autres`.
- Good spoken connectors: `Pour commencer`, `À cela s'ajoute que`, `Cela dit`, `Autrement dit`,
  `Pourtant`, `En définitive`. Vary them; don't repeat the same elegant structure twice.
- Grammar must be flawless (subjunctive after `Bien que`, `à condition que`, `pour que`, etc.).
- Invented examples/soft statistics are fine for a Tâche-3 opinion monologue (it's rhetoric,
  not fact-checking) — phrase them plausibly and attributed to the speaker's claim.

---

## 9) Verification
- Local: `python3 -m http.server 8000` then open `http://localhost:8000/EO_trainer.html`.
- From a Claude-with-GitHub session without a local server, at least sanity-check the JS data
  (valid object, balanced braces, every segment has `fr` and `fa`) and that `done` was flipped.
- When a real browser is available, confirm: correct question header, paragraph count, segment
  count, raw card present, LTR flow, cumulative reveal on click, hub progress number increments,
  no console errors. (Note: some headless screenshot tools render blank for this page — rely on
  DOM/JS checks, not the screenshot.)

---

## 10) Git & deploy conventions
- Commit per finished question. Message style (emoji + FR summary), e.g.:
  `🎯 EO #4 — Autorité dans l'éducation : monologue C1 (5xx mots, registre parlé)`
- End commit messages with:
  `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
- Push the finished work to **`ExpressionOrale3` (private) main**. Keep `HANDOFF.md`/`CLAUDE.md`
  progress updated so the next session is accurate.
- `.claude/` is gitignored. Don't commit local settings.

---

## 11) Progress log (state)
**Done: 3 / 120.** All C1, spoken register, 500–540 words, with `rawFa` stored.
- ✅ **#1** `travail` — «Faire des études permet de réussir sa carrière professionnelle. Qu'en pensez-vous ?»
  Stance: **pour** — quality/targeted studies help via two mechanisms. Key terms: *effet de signal,
  asymétrie d'information, capital humain, coût d'opportunité*. Examples: multinational choosing
  local reps by diploma; MBA ≈ $100k over 2 years. (~504 words.)
- ✅ **#2** `immigration` — «Quel est l'intérêt d'avoir une expérience professionnelle ou universitaire à l'étranger ?»
  Stance: **pour**. Ideas: networking + advanced work culture; access to cutting-edge knowledge
  (AI in the US); costs & perseverance (loneliness, adaptation, finances). Example: World Bank
  work-culture report; US AI value chain. (~536 words.)
- ✅ **#3** `medias` — «Selon vous, quel rôle joue la télévision dans l'éducation des enfants ?»
  Stance: **positive & conditional** — TV is the child's first window on the world + human
  understanding, if content is curated. Softened to a **more spoken** register on request.
  Examples: documentaries India→Canada; series *This Is Us*; TV redefined via online streaming.
  Key terms: *médiation parentale, temps d'écran, esprit critique*. (~516 words.)
- ⏭️ **NEXT: #4** `etudes` — «Pensez-vous que l'autorité soit indispensable dans l'éducation d'un
  enfant ? Pourquoi ?» — waiting for the user's raw Persian answer.

**Suggested upcoming picks** (lowest undone ids, keep spreading across themes): #4 (etudes),
#5 (immigration), #6 (immigration), #7 (famille), #8 (culture), #9 (culture), #10 (immigration)…
The user earlier liked doing **2 per theme** and varying themes; ask them if they want to keep that.

---

## 12) Do / Don't
- ✅ Use exact `q` wording; ✅ 500–540 words (verify); ✅ spoken C1 with precise terms;
  ✅ wait for "خوبه" before building; ✅ Persian gloss in French order; ✅ `.tr-flow{direction:ltr}`;
  ✅ set `done:true`; ✅ commit+push to the private repo; ✅ answer the user in Persian.
- ❌ Don't touch `SUJET*.html` / `index.html` / `data.js` structure (only additive lesson cards).
- ❌ Don't invent the user's opinion — it comes from their raw Persian.
- ❌ Don't ship literal word-for-word French; ❌ don't drift over 540 or under 500 words;
  ❌ don't push private EO work to the public repo; ❌ don't leave `done` unflipped.
