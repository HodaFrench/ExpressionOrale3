// ═══════════════════════════════════════════════════════════════
//  LA CHARPENTE — le squelette réutilisable de la Tâche 3
//
//  Ce fichier n'a pas été inventé : il a été extrait des textes
//  déjà écrits, en cherchant les formules présentes dans au moins
//  la moitié d'entre eux. Ce sont donc des tournures qui ont déjà
//  fait leurs preuves sur des sujets très différents.
//
//  Principe : environ 40 % d'un texte de Tâche 3 est de la
//  charpente — il ne change pas d'un sujet à l'autre. Un élève qui
//  maîtrise ces vingt-huit formules n'a plus qu'à remplir les
//  crochets. C'est là que se trouve le vrai levier : apprendre
//  vingt-huit phrases pour couvrir trois cents sujets.
// ═══════════════════════════════════════════════════════════════

const CHARPENTE = [

{ bloc: "INTRODUCTION", cls: "lb-intro", cible: "~50 s",
  role: "Situer, concéder, annoncer. Ne jamais commencer à froid par la thèse.",
  moves: [
    { fa: "۱. قاب زمانی — همیشه با یک بازه‌ی زمانی یا یک روند شروع کن، نه با موضع",
      frames: [
        "Avec l'essor de [phénomène] et [second phénomène], la question de [sujet] suscite de nombreux débats.",
        "À l'heure où [phénomène], la question de savoir si [sujet] suscite de nombreux débats.",
        "Depuis une vingtaine d'années, [phénomène] a profondément changé, et [sujet] revient sans cesse dans le débat."
      ] },
    { fa: "۲. طرح پرسش — سؤال را با کلمات خودت بازگو کن",
      frames: [
        "Il est donc légitime de se demander si [reformulation de la question].",
        "Il est donc légitime de se demander s'il faut [verbe] ou [verbe opposé]."
      ] },
    { fa: "۳. اعتراف — نظر مخالف را همین‌جا به رسمیت بشناس. این حرکت امتیاز می‌آورد",
      frames: [
        "Certains soutiennent le contraire, et je comprends leur point de vue.",
        "Certains le pensent sans hésiter, et leur inquiétude se comprend.",
        "Certains posent la question comme un choix, et c'est précisément là que je ne les suis pas."
      ] },
    { fa: "۴. تز، با وزنه‌ی مخالفش چسبیده به خودش",
      frames: [
        "Pourtant, je suis convaincu que [thèse], à condition que [condition].",
        "Je reste néanmoins convaincu que [thèse], même si [limite].",
        "Pour ma part, je dirais que [thèse], et que tout dépend de [variable]."
      ] },
    { fa: "۵. اعلام سه دلیل — اسم‌گذاری‌شان کن، این قلابِ حافظه است",
      frames: [
        "Et cela pour trois raisons : [A], [B], et [C].",
        "Et cela pour trois raisons, que je vais reprendre une à une."
      ] },
    { fa: "۶. گذار",
      frames: ["Je vais expliquer pourquoi.", "Je tiens à expliquer pourquoi."] }
  ] },

{ bloc: "ARGUMENT 1", cls: "lb-arg", cible: "~60 s",
  role: "Idée → mécanisme → exemple → pivot conditionnel.",
  moves: [
    { fa: "۱. ایده",
      frames: [
        "D'emblée, je suis d'avis que [idée].",
        "D'emblée, il me semble que [idée].",
        "Commençons par le plus simple : [idée]."
      ] },
    { fa: "۲. سازوکار — چرا این‌طور است",
      frames: [
        "En effet, [mécanisme].",
        "Cela s'explique simplement : [mécanisme].",
        "Cela s'explique notamment par [cause]."
      ] },
    { fa: "۳. مثال — همیشه بعد از سازوکار، هرگز قبلش",
      frames: [
        "Par exemple, [cas concret].",
        "Je prends un exemple. [cas concret].",
        "À titre d'exemple, [cas concret]."
      ] },
    { fa: "۴. محور — بلافاصله محدودش کن. این امضای متن است",
      frames: [
        "Ce qui compte avant tout, ce n'est pas [X] : c'est [Y].",
        "Ce qui compte, ce n'est pas [X] — c'est [Y].",
        "Il ne s'agit pas de [X], mais de [Y]."
      ] },
    { fa: "۵. بستن بند",
      frames: [
        "Par conséquent, [conséquence].",
        "Parce que sans [Y], [conséquence négative]."
      ] }
  ] },

{ bloc: "ARGUMENT 2", cls: "lb-arg", cible: "~60 s",
  role: "Même architecture, autre angle. Changer de plan : individuel → social, court terme → long terme.",
  moves: [
    { fa: "۱. ایده‌ی دوم",
      frames: [
        "En deuxième lieu, j'estime que [idée].",
        "Et puis il y a autre chose, plus profond : [idée].",
        "Il convient également de souligner que [idée]."
      ] },
    { fa: "۲. سازوکار و مثال",
      frames: [
        "Cela s'explique aisément : [mécanisme]. Par exemple, [cas].",
        "En effet, [mécanisme]. Ainsi, [cas]."
      ] },
    { fa: "۳. تعمیم",
      frames: [
        "En [gérondif], [personne] développe [qualité].",
        "Tout en [gérondif], il apprend à [verbe]."
      ] }
  ] },

{ bloc: "ARGUMENT 3", cls: "lb-arg", cible: "~50 s",
  role: "Le troisième argument est souvent une limite interne : il annonce déjà la nuance.",
  moves: [
    { fa: "۱. ورود",
      frames: [
        "Un dernier point mérite d'être pris en considération : [idée].",
        "Un dernier élément mérite d'être pris en considération : [idée].",
        "Dernier point, mais non le moindre, [idée]."
      ] },
    { fa: "۲. حد و مرز",
      frames: [
        "[X] ne doit surtout pas devenir synonyme de [dérive].",
        "Il ne faut pas confondre [X] et [Y]."
      ] },
    { fa: "۳. تعادل",
      frames: [
        "Là encore, ce qui compte, c'est l'équilibre entre [A] et [B].",
        "Malgré [nécessité], [X] doit toujours s'accompagner de [Y]."
      ] }
  ] },

{ bloc: "CONTRE-ARGUMENT", cls: "lb-arg", cible: "~50 s",
  role: "Le paragraphe le plus rentable. Donner à l'adversaire son meilleur argument, puis le retourner.",
  moves: [
    { fa: "۱. معرفی مخالف — واقعاً حرفشان را بزن، نه یک نسخه‌ی ضعیف‌شده",
      frames: [
        "Cela dit, je comprends ceux qui pensent le contraire.",
        "Cela dit, je comprends ceux qui défendent la position inverse.",
        "Alors bien sûr, il y a ceux qui pensent le contraire, et leur argument mérite qu'on s'y arrête."
      ] },
    { fa: "۲. استدلالشان",
      frames: [
        "Ils estiment que [thèse adverse], et que [conséquence redoutée].",
        "Ils rappellent que [fait gênant], et que [second fait]."
      ] },
    { fa: "۳. اعتراف صادقانه — این جمله اعتبار می‌سازد",
      frames: [
        "Leur argument n'est pas sans fondement.",
        "Leur argument tient debout, et je ne vais pas prétendre le contraire.",
        "Sur ce point, ils ont entièrement raison."
      ] },
    { fa: "۴. برگرداندن — با تز خودت، نه با حرف تازه",
      frames: [
        "Mais [X] n'est pas [Y].",
        "Mais confondre [X] et [Y], c'est justement l'erreur que je dénonce.",
        "Mais c'est justement pour ça que je parle de [nuance], et pas seulement de [approximation]."
      ] }
  ] },

{ bloc: "CONCLUSION", cls: "lb-conc", cible: "~30 s",
  role: "Trancher, poser la condition, finir sur une personne ou une image.",
  moves: [
    { fa: "۱. حکم",
      frames: [
        "Pour conclure, [A] l'emporte largement sur [B].",
        "Tout bien considéré, [A] l'emporte largement sur [B]."
      ] },
    { fa: "۲. اذعان",
      frames: [
        "Bien que [concession], [X] reste nécessaire.",
        "Bien qu'elle soit parfois difficile à [verbe], elle demeure [adjectif]."
      ] },
    { fa: "۳. شرط",
      frames: [
        "À condition que [condition], [conséquence heureuse].",
        "À condition d'être [adjectif] et [adjectif], [X] [verbe]."
      ] },
    { fa: "۴. فرودِ کوتاه — جمله‌ی آخر باید کوتاه و به‌یادماندنی باشد",
      frames: [
        "Au fond, mieux vaut [A] que [B].",
        "Il vaut mieux [A] que [B].",
        "Et [personne] qui a [vécu X] est souvent celui qui, plus tard, [conséquence]."
      ] }
  ] }

];

// ── Les phrases qui marchent sur presque tous les sujets ──
// Classées par fonction. Ce sont elles qu'il faut savoir par cœur.
const PASSE_PARTOUT = [
  { fa: "برای معرفی موضوع", frames: [
    "suscite de nombreux débats",
    "revient sans cesse dans le débat",
    "fait aujourd'hui l'objet de nombreuses discussions" ] },
  { fa: "برای اعتراف به نظر مخالف", frames: [
    "et je comprends leur point de vue",
    "leur argument n'est pas sans fondement",
    "je ne vais pas prétendre le contraire",
    "sur ce point, ils ont entièrement raison" ] },
  { fa: "برای محدود کردن — پرکاربردترین حرکت کل آزمون", frames: [
    "Ce qui compte, ce n'est pas [X] : c'est [Y].",
    "Il ne s'agit pas de [X], mais de [Y].",
    "[X] n'est pas [Y]." ] },
  { fa: "برای وزن‌کشی", frames: [
    "[A] l'emporte largement sur [B]",
    "les bienfaits de [X] l'emportent sur les risques de [Y]",
    "tout dépend de [variable]" ] },
  { fa: "برای شرط گذاشتن", frames: [
    "à condition que + subjonctif",
    "à condition d'être + adjectif",
    "dans la mesure où + indicatif" ] },
  { fa: "برای مسئولیت", frames: [
    "il revient à [X] de + infinitif",
    "la responsabilité ne repose pas seulement sur [X]",
    "il ne faut pas tout attendre de [X]" ] },
  { fa: "برای فرود", frames: [
    "Au fond, mieux vaut [A] que [B].",
    "Il vaut mieux [A] que [B].",
    "Et c'est peut-être là l'essentiel." ] }
];
