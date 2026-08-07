// StudyChina Navigator — Exam-day prep translations.
// Languages: en (English), ur (Urdu, RTL), ar (Arabic, RTL), fr (French).
// Chinese (zh) is the base text already inside data.js EXAM_PREP; this file
// only supplies the other languages. RTL is applied by app.js for ur & ar.
// Edit strings here to fix/extend translations — no code change needed.

const EXAM_I18N = {
  "white-screen": {
    en: {
      title: "Client white screen / crash",
      summary: "The exam client opens to a blank screen, or freezes mid-test — the most panic-inducing situation.",
      before: [
        "Run the official “system / environment check” tool 1 day before",
        "Use the latest Chrome / Edge; disable all browser extensions",
        "Right-click the exam client → “Run as administrator”",
        "Screenshot & save your candidate ID + admission-ticket number (you can still get in with these after a white screen)",
        "Save the proctor’s emergency phone number to your phone"
      ],
      fix: "White screen ≠ exam cancelled. Screenshot the error first, then call the proctor immediately. If the main device crashes, switch to a backup device + phone hotspot.",
      tip: "Most white screens are GPU-driver or extension conflicts — fixable in 2 minutes."
    },
    ur: {
      title: "سافٹ ویئر کا سفید اسکرین / کریش",
      summary: "امتحانی سافٹ ویئر کھولنے پر خالی اسکرین آتی ہے یا بیچ میں ہینگ ہو جاتا ہے — سب سے زیادہ گھبراہٹ والی صورتحال۔",
      before: [
        "امتحان سے ایک دن پہلے آفیشل \"سسٹم / ماحولیاتی چیک\" ٹول چلائیں",
        "تازہ ترین Chrome/Edge استعمال کریں اور تمام براؤزر ایکسٹینشنز بند کریں",
        "امتحانی سافٹ ویئر پر دائیں کلک کریں → \"ایڈمنسٹریٹر کے طور پر چلائیں\"",
        "اپنا امیدوار آئی ڈی + داخلے کا ٹکٹ نمبر اسکرین شاٹ محفوظ کریں (سفید اسکرین کے بعد بھی ان سے داخل ہو سکتے ہیں)",
        "نگراں کا ایمرجنسی فون نمبر موبائل میں محفوظ کریں"
      ],
      fix: "سفید اسکرین ≠ امتحان کینسل۔ پہلے ایرر اسکرین شاٹ لیں، فوراً نگراں کو کال کریں۔ مرکزی آلہ کریش ہو جائے تو بیک اپ ڈیوائس + موبائل ہاٹ اسپاٹ استعمال کریں۔",
      tip: "زیادہ تر سفید اسکرینیں گرافکس ڈرائیور یا ایکسٹینشن ٹکراز کی وجہ سے ہوتی ہیں — 2 منٹ میں حل ہو سکتی ہیں۔"
    },
    ar: {
      title: "شاشة بيضاء / توقف مفاجئ للتطبيق",
      summary: "يفتح تطبيق الاختبار على شاشة بيضاء، أو يتجمد أثناء الامتحان — أكثر المواقف المثيرة للذعر.",
      before: [
        "شغّل أداة \"فحص النظام/البيئة\" الرسمية قبل يوم من الاختبار",
        "استخدم أحدث إصدار من Chrome/Edge؛ عطّل كل إضافات المتصفح",
        "زرّ الفأرة الأيمن على تطبيق الاختبار ← \"تشغيل كمسؤول\"",
        "التقط صورة شاشة واحفظ رقم المرشح + رقم بطاقة الدخول (يمكنك الدخول بهما حتى بعد الشاشة البيضاء)",
        "احفظ رقم هاتف المراقب للطوارئ في هاتفك"
      ],
      fix: "الشاشة البيضاء ≠ إلغاء الاختبار. التقط صورة للخطأ أولاً ثم اتصل بالمراقب فوراً. إن تعطّل الجهاز الرئيسي، بدّل إلى جهاز احتياطي + نقطة اتصال الهاتف.",
      tip: "معظم الشاشات البيضاء سببها تعارض في تعريف كرت الشاشة أو الإضافات — يمكن حلها في دقيقتين."
    },
    fr: {
      title: "Écran blanc / plantage du logiciel",
      summary: "Le logiciel de l'examen s'ouvre sur un écran blanc ou se bloque en plein test — la situation la plus paniquante.",
      before: [
        "Lance l'outil officiel de \"vérification système/environnement\" la veille",
        "Utilise la dernière version de Chrome/Edge ; désactive toutes les extensions",
        "Clic droit sur le logiciel → \"Exécuter en tant qu'administrateur\"",
        "Fais une capture et sauvegarde ton ID candidat + n° de ticket (tu peux encore entrer avec après un écran blanc)",
        "Enregistre le numéro d'urgence du surveillant dans ton téléphone"
      ],
      fix: "Écran blanc ≠ examen annulé. Capture d'abord l'erreur, puis appelle immédiatement le surveillant. Si le PC principal plante, bascule sur un appareil de secours + hotspot téléphone.",
      tip: "La plupart des écrans blancs viennent d'un conflit de pilote GPU ou d'extension — réglable en 2 min."
    }
  },

  "scaling": {
    en: {
      title: "Display scaling glitch",
      summary: "Windows scaling set to 125% / 150% — the exam UI gets cut off and buttons fall outside the screen.",
      before: [
        "Right-click desktop → Display settings → set scaling to 100%",
        "Set resolution to “Recommended”",
        "Use only ONE monitor (no extend / mirror)",
        "Close extra windows"
      ],
      fix: "UI cut off → set scaling back to 100% and restart the exam client.",
      tip: "Confirm the full UI displays correctly in the official self-check the day before."
    },
    ur: {
      title: "ڈسپلے اسکیلنگ کا مسئلہ",
      summary: "Windows اسکیلنگ 125% / 150% پر سیٹ ہو — امتحانی انٹرفیس کٹ جاتا ہے اور بٹن اسکرین کے باہر چلے جاتے ہیں۔",
      before: [
        "ڈیسک ٹاپ پر دائیں کلک کریں → ڈسپلے سیٹنگز → اسکیلنگ 100% کریں",
        "ر_resolution کو \"مشورہ کردہ\" (Recommended) پر رکھیں",
        "صرف ایک ہی مانیٹر استعمال کریں (ایکسٹینڈ/مِرر بند کریں)",
        "اضافی ونڈوز بند کریں"
      ],
      fix: "انٹرفیس کٹ گیا → اسکیلنگ واپس 100% کریں اور امتحانی کلائنٹ ری اسٹارٹ کریں۔",
      tip: "امتحان سے ایک دن پہلے آفیشل سیلف چیک میں یقینی بنائیں کہ پورا انٹرفیس دکھ رہا ہے۔"
    },
    ar: {
      title: "خلل في تكبير الشاشة",
      summary: "تكبير Windows مضبوط على 125% / 150% — فيُقطع واجهة الاختبار وتخرج الأزرار خارج الشاشة.",
      before: [
        "زرّ الفأرة الأيمن على سطح المكتب ← إعدادات العرض ← اجعل التكبير 100%",
        "اضبط الدقة على \"موصى به\"",
        "استخدم شاشة واحدة فقط (لا دمج ولا مرآة)",
        "أغلق النوافذ الزائدة"
      ],
      fix: "الواجهة مقطوعة → أعد التكبير إلى 100% ثم أعد تشغيل تطبيق الاختبار.",
      tip: "تأكد من ظهور الواجهة كاملة في الفحص الذاتي الرسمي قبل يوم من الاختبار."
    },
    fr: {
      title: "Problème de mise à l'échelle",
      summary: "Le zoom Windows réglé sur 125% / 150% — l'interface de l'examen est coupée et les boutons sortent de l'écran.",
      before: [
        "Clic droit sur le bureau → Paramètres d'affichage → zoom à 100%",
        "Résolution sur \"Recommandée\"",
        "N'utilise qu'UN écran (pas d'étendu / miroir)",
        "Ferme les fenêtres superflues"
      ],
      fix: "Interface coupée → remets le zoom à 100% et redémarre le logiciel.",
      tip: "Vérifie que toute l'interface s'affiche dans l'auto-test officiel la veille."
    }
  },

  "mic": {
    en: {
      title: "Microphone not working",
      summary: "The proctor can’t hear you — your exam may be paused or flagged.",
      before: [
        "Grant microphone permission to the exam browser",
        "Test the mic in system sound settings",
        "Use wired headphones (avoid Bluetooth lag)",
        "Close other apps using the mic (Zoom / Teams / WeChat)",
        "Do a test call right before the exam"
      ],
      fix: "Proctor can’t hear you → re-enable permission, plug in wired headphones, restart the client, and tell the proctor.",
      tip: "The proctor needs to hear your room. If the mic fails they’ll guide you to retry — don’t exit."
    },
    ur: {
      title: "مائیکروفون کام نہیں کر رہا",
      summary: "نگراں آپ کی آواز نہیں سن سکتا — امتحان روکا جا سکتا ہے یا نشان زد کیا جا سکتا ہے۔",
      before: [
        "امتحانی براؤزر کو مائیکروفون کی اجازت دیں",
        "سسٹم آواز سیٹنگز میں مائیک ٹیسٹ کریں",
        "وائرڈ ہیڈفون استعمال کریں (بلوٹوتھ کی دیری سے بچیں)",
        "مائیک استعمال کرنے والی دیگر ایپس بند کریں (Zoom / Teams / WeChat)",
        "امتحان سے عین پہلے ایک ٹیسٹ کال کریں"
      ],
      fix: "نگراں آواز نہ سنے → اجازت دوبارہ دیں، وائرڈ ہیڈفون لگائیں، کلائنٹ ری اسٹارٹ کریں، اور نگراں کو بتائیں۔",
      tip: "نگراں کو آپ کے کمرے کی آواز سننی چاہیے۔ مائیک خراب ہو تو وہ دوبارہ کوشش کروائیں گے — باہر نہ نکلیں۔"
    },
    ar: {
      title: "الميكروفون لا يعمل",
      summary: "المراقب لا يسمعك — قد يُوقَف الاختبار أو يُعلَّم كحالة شاذة.",
      before: [
        "امنح إذن الميكروفون لمتصفح الاختبار",
        "اختبر الميكروفون من إعدادات الصوت في النظام",
        "استخدم سماعة سلكية (تجنب تأخير البلوتوث)",
        "أغلق التطبيقات الأخرى التي تستخدم الميكروفون (Zoom / Teams / WeChat)",
        "أجرِ مكالمة تجريبية قبيل الاختبار مباشرة"
      ],
      fix: "المراقب لا يسمعك → أعد تفعيل الإذن، وصّل سماعة سلكية، أعد تشغيل التطبيق، وأخبر المراقب.",
      tip: "المراقب يحتاج لسماع بيئة الغرفة. إن تعطّل الميكروفون سيوجّهك للمحاولة مجدداً — لا تخرج."
    },
    fr: {
      title: "Microphone ne fonctionne pas",
      summary: "Le surveillant ne t'entend pas — l'examen peut être suspendu ou signalé.",
      before: [
        "Donne la permission micro au navigateur de l'examen",
        "Teste le micro dans les paramètres son du système",
        "Utilise un casque filaire (évite le décalage Bluetooth)",
        "Ferme les autres apps utilisant le micro (Zoom / Teams / WeChat)",
        "Fais un appel test juste avant l'examen"
      ],
      fix: "Le surveillant ne t'entend pas → réactive la permission, branche un casque filaire, redémarre le logiciel, et préviens le surveillant.",
      tip: "Le surveillant doit entendre ta pièce. Si le micro lâche, il te guidera pour réessayer — ne quitte pas."
    }
  },

  "whiteboard": {
    en: {
      title: "Whiteboard rules",
      summary: "Not knowing whether paper / physical board / on-screen board is allowed — easiest way to panic on the spot.",
      before: [
        "Read the whiteboard rules on your admission ticket",
        "If a physical board is allowed: prepare a small erasable board + pen (no paper, no phone)",
        "If using the on-screen board: practise it beforehand",
        "When in doubt, ask the proctor"
      ],
      fix: "Follow the on-screen prompts exactly; if unsure, ask the proctor on the spot — don’t use paper on your own.",
      tip: "Rules differ per exam. Never assume you can bring paper."
    },
    ur: {
      title: "وائٹ بورڈ کے قواعد",
      summary: "یہ نہ جاننا کہ کاغذ / فزیکل بورڈ / آن اسکرین بورڈ کی اجازت ہے یا نہیں — جگہ پر گھبراہٹ کی سب سے بڑی وجہ۔",
      before: [
        "اپنے داخلے کے ٹکٹ میں وائٹ بورڈ کے قواعد پڑھیں",
        "اگر فزیکل بورڈ کی اجازت ہو: چھوٹا قابلِ تعمیر بورڈ + پین تیار کریں (کاغذ یا فون نہیں ہونا چاہیے)",
        "اگر آن اسکرین بورڈ استعمال کرنا ہے: پہلے سے پریکٹس کریں",
        "شک ہو تو نگراں سے پوچھیں"
      ],
      fix: "اسکرین پر دیے گئے اشاروں پر بالکل عمل کریں؛ یقین نہ ہو تو فوراً نگراں سے پوچھیں — خود سے کاغذ مت استعمال کریں۔",
      tip: "ہر امتحان کے قواعد مختلف ہوتے ہیں۔ کاغذ لانے کا ہرگز فرض نہ کریں۔"
    },
    ar: {
      title: "قواعد السبورة",
      summary: "عدم معرفة ما إذا كان مسموحاً بالورق / سبورة فيزيائية / سبورة على الشاشة — أبسط سبب للذعر لحظياً.",
      before: [
        "اقرأ قواعد السبورة على بطاقة الدخول",
        "إن كان مسموحاً بسبورة فيزيائية: جهّز سبورة صغيرة قابلة للمسح + قلماً (بدون ورق، بدون هاتف)",
        "إن كنت تستخدم السبورة على الشاشة: تدرّب عليها مسبقاً",
        "عند الشك، اسأل المراقب"
      ],
      fix: "اتبع الإرشادات على الشاشة تماماً؛ عند الشك اسأل المراقب في الحين — لا تستخدم الورق من تلقاء نفسك.",
      tip: "القواعد تختلف من اختبار لآخر. لا تفترض أبداً إحضار الورق."
    },
    fr: {
      title: "Règles du tableau",
      summary: "Ne pas savoir si le papier / un tableau physique / un tableau à l'écran est autorisé — la façon la plus simple de paniquer sur place.",
      before: [
        "Lis les règles du tableau sur ton ticket d'admission",
        "Si un tableau physique est autorisé : prépare un petit tableau effaçable + stylo (pas de papier, pas de téléphone)",
        "Si tu utilises le tableau à l'écran : entraîne-toi à l'avance",
        "En cas de doute, demande au surveillant"
      ],
      fix: "Suis exactement les instructions à l'écran ; en cas de doute, demande au surveillant sur le moment — n'utilise pas de papier de toi-même.",
      tip: "Les règles diffèrent selon l'examen. N'assume jamais que le papier est autorisé."
    }
  },

  "passport": {
    en: {
      title: "Passport & ticket match",
      summary: "Name mismatch = you can’t enter the exam. The most common verification failure.",
      before: [
        "The night before, check your passport and ticket names match EXACTLY (no nicknames)",
        "Make sure the photo is clear and recent",
        "Have both documents within reach",
        "Check your passport’s validity period"
      ],
      fix: "Found a mismatch → contact admissions / proctor hotline before the exam; on the day, present BOTH documents.",
      tip: "Spend 2 minutes checking the night before — it avoids the worst-case scenario on exam day."
    },
    ur: {
      title: "پاسپورٹ اور ٹکٹ کا میچ",
      summary: "نام مماثل نہ ہوں تو امتحان میں داخلہ نہیں ملتا — سب سے عام تصدیق کی ناکامی۔",
      before: [
        "پچھلی رات پاسپورٹ اور ٹکٹ کے نام بالکل مماثل چیک کریں (عرفیت نہ استعمال کریں)",
        "یقینی بنائیں تصویر واضح اور حالیہ ہو",
        "دونوں دستاویزات ہاتھ کی پہنچ میں رکھیں",
        "پاسپورٹ کی میعادِ صلاحیت چیک کریں"
      ],
      fix: "بے ترتیبی ملے → امتحان سے پہلے ایڈمیشن / نگراں ہاٹ لائن سے رابطہ کریں؛ دن میں دونوں دستاویزات پیش کریں۔",
      tip: "پچھلی رات 2 منٹ چیک کریں — امتحان کے دن بدترین صورتحال سے بچ جاتے ہیں۔"
    },
    ar: {
      title: "تطابق الجواز مع بطاقة الدخول",
      summary: "عدم تطابق الاسم = لا يمكنك دخول الاختبار. أكثر حالات فشل التحقق شيوعاً.",
      before: [
        "في الليلة السابقة، تحقق من تطابق اسم جوازك والبطاقة تماماً (دون أسماء مستعارة)",
        "تأكد أن الصورة واضحة وحديثة",
        "اجعل الوثيقتين في متناول يدك",
        "افحص صلاحية جواز السفر"
      ],
      fix: "وجدت اختلافاً → تواصل مع خط س hotline القبول/المراقبة قبل الاختبار؛ وفي اليوم قدّم الوثيقتين معاً.",
      tip: "خصّص دقيقتين للفحص في الليلة السابقة — يتجنب أسوأ سيناريو في يوم الاختبار."
    },
    fr: {
      title: "Correspondance passeport & ticket",
      summary: "Nom différent = pas d'entrée à l'examen. La cause la plus fréquente d'échec de vérification.",
      before: [
        "La veille, vérifie que le nom du passeport et du ticket correspondent EXACTEMENT (pas de surnoms)",
        "Assure-toi que la photo est nette et récente",
        "Garde les deux documents à portée de main",
        "Vérifie la validité de ton passeport"
      ],
      fix: "Tu vois une différence → contacte la hotline admissions/surveillant avant l'examen ; le jour J, présente LES DEUX documents.",
      tip: "2 minutes de vérification la veille évitent le pire scénario le jour J."
    }
  },

  "calculator": {
    en: {
      title: "Calculator allowed?",
      summary: "Not knowing the calculator rule — you either waste time in the exam or risk a violation.",
      before: [
        "Read the notice: is a calculator allowed at all?",
        "If allowed: confirm the type (basic, non-programmable)",
        "If not allowed: practise mental / on-screen calculation",
        "The built-in on-screen calculator is often the ONLY compliant one"
      ],
      fix: "Only use a calculator the notice allows; the built-in on-screen calculator is usually the only compliant one.",
      tip: "CSCA math calculator rules follow your official notice — don’t rely on memory."
    },
    ur: {
      title: "کیلکولیٹر کی اجازت؟",
      summary: "کیلکولیٹر کے قواعد نہ جاننا — امتحان میں وقت ضائع ہوتا ہے یا خلاف ورزی کا خطرہ۔",
      before: [
        "نوٹس پڑھیں: کیلکولیٹر کی اجازت ہے یا نہیں؟",
        "اگر اجازت ہو: قسم کی تصدیق کریں (بنیادی، غیر پروگرام ایبل)",
        "اگر اجازت نہ ہو: ذہنی / آن اسکرین حساب کی پریکٹس کریں",
        "اسکرین پر موجود بلٹ ان کیلکولیٹر اکثر واحد compliant ہوتا ہے"
      ],
      fix: "صرف وہی کیلکولیٹر استعمال کریں جس کی نوٹس میں اجازت ہو؛ آن اسکرین بلٹ ان کیلکولیٹر ہی عام طور پر واحد مجاز ہوتا ہے۔",
      tip: "CSCA ریاضی کے کیلکولیٹر قواعد آپ کے آفیشل نوٹس کے مطابق ہیں — یادداشت پر انحصار نہ کریں۔"
    },
    ar: {
      title: "هل الآلة الحاسبة مسموحة؟",
      summary: "عدم معرفة قاعدة الآلة الحاسبة — إما تضييع وقت في الاختبار أو خطر مخالفة.",
      before: [
        "اقرأ الإشعار: هل الآلة الحاسبة مسموحة أصلاً؟",
        "إن كانت مسموحة: تأكد من النوع (أساسية، غير قابلة للبرمجة)",
        "إن لم تكن مسموحة: تدرّب على الحساب الذهني / على الشاشة",
        "الآلة الحاسبة المدمجة على الشاشة هي غالباً الوحيدة المسموحة"
      ],
      fix: "استخدم فقط الآلة الحاسبة التي يسمح بها الإشعار؛ الآلة المدمجة على الشاشة هي عادة الوحيدة المسموحة.",
      tip: "قواعد آلة حاسبة رياضيات CSCA تتبع إشعارك الرسمي — لا تعتمد على الذاكرة."
    },
    fr: {
      title: "Calculatrice autorisée ?",
      summary: "Ne pas connaître la règle de la calculatrice — tu perds du temps à l'examen ou risques une infraction.",
      before: [
        "Lis l'avis : la calculatrice est-elle autorisée ?",
        "Si oui : confirme le type (basique, non programmable)",
        "Si non : entraîne-toi au calcul mental / à l'écran",
        "La calculatrice intégrée à l'écran est souvent la SEULE conforme"
      ],
      fix: "N'utilise que la calculatrice autorisée par l'avis ; la calculatrice intégrée à l'écran est généralement la seule conforme.",
      tip: "Les règles de calculatrice du CSCA math suivent ton avis officiel — ne compte pas sur ta mémoire."
    }
  }
};

// Source-tier legend used in the Database view.
const SCORE_SOURCE_LABEL = {
  official: "官方文件",
  reported: "招办口径"
};
