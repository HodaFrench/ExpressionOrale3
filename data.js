// ═══════════════════════════════════════════════════════════
//  بانک محتوای سایت — Hoda KHEDMATI
//  برای اضافه کردن جزوه‌ی جدید: فقط یک بلوک به این لیست اضافه کن.
//  صفحه‌ی اصلی، دسته‌بندی و جستجو خودکار ساخته می‌شن.
// ═══════════════════════════════════════════════════════════

// دسته‌بندی‌ها — برای اضافه کردن دسته‌ی جدید (ویدیو، آزمون، وبلاگ...) فقط اینجا یک خط اضافه کن
const CATEGORIES = [
  { id: "oral",    label: "🗣️ بیان شفاهی (Tâche 3)", color: "#2196f3" },
  { id: "trainer", label: "🎯 تمرین ترجمه",           color: "#9c27b0" },
  { id: "grammar", label: "📐 گرامر",                color: "#4caf50" },
  { id: "vocab",   label: "📚 لغت و واژگان",          color: "#ff9f43" },
  { id: "exercise",label: "✍️ تمرین",                color: "#e91e63" },
  // مثال برای آینده — کافیه کامنت رو برداری:
  // { id: "video", label: "🎬 ویدیو", color: "#9c27b0" },
  // { id: "exam",  label: "📝 آزمون", color: "#00bcd4" },
  // { id: "blog",  label: "📰 وبلاگ", color: "#795548" },
];

// لیست جزوه‌ها
const LESSONS = [
  {
    file: "TRAINER_RELATIONS_DISTANCE.html",
    title: "تمرین ترجمه — روابط از راه دور",
    titleFr: "Entraînement à la traduction orale — Relations à distance",
    category: "trainer",
    score: null,
    tags: ["C1", "فارسی ← فرانسه", "تعاملی"],
    badge: "🎯"
  },
  {
    file: "SUJET1_AIDE_PERSONNES.html",
    title: "کمک به افراد در وضعیت دشوار",
    titleFr: "Qui doit aider les personnes en difficulté ?",
    category: "oral",
    score: 97,
    tags: ["B2", "۵ استدلال"],
    badge: ""
  },
  {
    file: "SUJET2_ETUDES_CARRIERE.html",
    title: "تحصیلات و موفقیت شغلی",
    titleFr: "Faire des études permet de réussir sa carrière",
    category: "oral",
    score: 96,
    tags: ["B1 + B2", "دو سطح"],
    badge: ""
  },
  {
    file: "SUJET3_TELEPHONE_ECOLE.html",
    title: "تلفن همراه در مدرسه",
    titleFr: "Devrait-on empêcher le téléphone à l'école ?",
    category: "oral",
    score: 99,
    tags: ["B2+", "فونت بزرگ", "۶ استدلال"],
    badge: ""
  },
  {
    file: "SUJET4_EXPATRIATION.html",
    title: "زندگی در کشور دیگر",
    titleFr: "S'habituer à vivre dans un autre pays",
    category: "oral",
    score: 97,
    tags: ["B2", "۵ استدلال"],
    badge: ""
  },
  {
    file: "SUJET5_RELATIONS_DISTANCE.html",
    title: "روابط از راه دور",
    titleFr: "Relations à distance vs relations directes",
    category: "oral",
    score: 98,
    tags: ["B2+", "۴ استدلال"],
    badge: ""
  },
  {
    file: "SUJET6_FAMILLE.html",
    title: "اهمیت خانواده",
    titleFr: "La famille occupe-t-elle la place la plus importante ?",
    category: "oral",
    score: 99,
    tags: ["B2 + TCF Pro", "دو سطح"],
    badge: "⭐"
  },
  {
    file: "SUJET7_TRI_DECHETS.html",
    title: "تفکیک زباله",
    titleFr: "Tout le monde peut participer au tri des déchets",
    category: "oral",
    score: 98,
    tags: ["B2 + TCF Pro", "دو سطح", "۶ استدلال"],
    badge: "⭐"
  },
];
