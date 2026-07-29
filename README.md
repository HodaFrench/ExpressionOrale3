# TCF avec Hoda KHEDMATI — Expression Orale · Tâche 3

Site d'entraînement bilingue **français / persan** pour la préparation au
**TCF Canada, Expression Orale — Tâche 3**.

HTML/CSS/JS statique, sans build. Interface en persan (RTL), langue maternelle
de l'apprenant : le persan.

**En ligne :** https://hodafrench.github.io/ExpressionOrale3/

---

## Deux systèmes

### 1. Entraînement à la traduction orale — les 120 sujets

L'apprenant lit le persan **de gauche à droite** et produit le français à voix
haute. En cas de blocage, un clic sur un segment persan révèle le français
correspondant et tous les segments précédents du paragraphe.

| Fichier | Rôle |
|---|---|
| `EO_trainer.html` | Le hub : recherche, filtres par thème, barre de progression. Accepte `?theme=famille` |
| `EO_practice.html?id=N` | Le lecteur d'un exercice — rend l'interlinéaire depuis les données |
| `eo-data.js` | Les 120 questions, classées en 12 thèmes, **par ordre de fréquence** |
| `eo-trainers.js` | Les données interlinéaires, une entrée par question traitée |
| `TRAINER_RELATIONS_DISTANCE.html` | Exemple autonome, hors des 120 |

L'ordre des questions dans `eo-data.js` n'est pas arbitraire : **il suit la
probabilité d'apparition à l'examen.** Un numéro plus petit = un sujet plus
important. Le numéro affiché sur chaque carte est ce rang.

### 2. Analyses complètes — 7 sujets

Une réponse modèle par sujet, avec les arguments, les connecteurs logiques
analysés et la traduction persane de chaque section.

| Fichier | Sujet | Niveau |
|---|---|---|
| `SUJET1_AIDE_PERSONNES.html` | Qui doit aider les personnes en difficulté ? | B2 · 97/100 |
| `SUJET2_ETUDES_CARRIERE.html` | Faire des études permet de réussir sa carrière | B1 + B2 · 96/100 |
| `SUJET3_TELEPHONE_ECOLE.html` | Devrait-on empêcher le téléphone à l'école ? | B2+ · 99/100 |
| `SUJET4_EXPATRIATION.html` | S'habituer à vivre dans un autre pays | B2 · 97/100 |
| `SUJET5_RELATIONS_DISTANCE.html` | Relations à distance vs relations directes | B2+ · 98/100 |
| `SUJET6_FAMILLE.html` | La famille occupe-t-elle la place la plus importante ? | B2 + TCF Pro · 99/100 |
| `SUJET7_TRI_DECHETS.html` | Tout le monde peut participer au tri des déchets | B2 + TCF Pro · 98/100 |

---

## Structure du site

```
index.html            page d'accueil — tout le contenu visible d'un coup
├── EO_trainer.html   → les 120 sujets  → EO_practice.html?id=N
├── SUJET1..7_*.html  → les analyses complètes
└── index-classic.html  ancienne page d'accueil, conservée
```

`index.html` se construit **à partir des données** : elle lit `data.js` et
`eo-data.js`, calcule la progression, liste les exercices prêts et les 12
thèmes. Ajouter un exercice ne demande donc aucune retouche de la page
d'accueil — il suffit de mettre `done:true` dans `eo-data.js`.

---

## Accessibilité — pensé pour l'attention

Choix concrets, pas décoratifs :

- **Tout est visible au chargement.** Aucun contenu caché derrière une
  recherche ou un onglet : ce qu'on ne voit pas n'existe pas.
- **Une seule action principale** sur l'accueil, qui pointe vers le dernier
  exercice prêt.
- **Réglage de la taille du texte** (A− / A+), conservé d'une visite à l'autre.
- **Contrastes vérifiés** — le texte secondaire est à 5,7:1, l'accent ambre à
  5,1:1 (seuil AA : 4,5:1).
- **Progression chiffrée et visible**, pour voir le mouvement.
- **Cartes de forme identique** partout, couleur de thème comme repère de
  balayage.
- `prefers-reduced-motion` respecté, focus clavier visible.

---

## Ajouter un exercice

1. Ouvrir `eo-data.js`, repérer la première question avec `done:false`.
2. Écrire la réponse en persan, puis la porter en français C1 naturel
   (500–540 mots).
3. Découper le français en segments de 2 à 6 mots ; la glose persane suit
   **l'ordre des mots français**, pas l'ordre persan naturel.
4. Ajouter l'entrée dans `eo-trainers.js`, clé = l'`id` de la question.
5. Passer cette question à `done:true` dans `eo-data.js`.
6. Vérifier `EO_practice.html?id=N` dans un navigateur, puis committer.

Détails complets du format et des pièges : voir `CLAUDE.md`.

---

## Lancer en local

```bash
python3 -m http.server 8000
# puis http://localhost:8000/
```

Seule dépendance externe : Google Fonts (Vazirmatn, Newsreader).

---

**Hoda KHEDMATI** — Formatrice agréée TCF Canada, spécialiste Expression Orale · Tâche 3
