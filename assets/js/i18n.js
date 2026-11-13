/* =========================================================
   Arabic translations.
   English lives in index.html. Any element with data-i18n="key"
   is swapped with AR[key] when Arabic is active. Tech names
   (FastAPI, Angular, ...) intentionally stay in English.
   ========================================================= */
(function () {
  'use strict';

  var AR = {
    /* Meta */
    _title: 'محمد إسلام كامران | مهندس أنظمة خلفية (Python, FastAPI)',
    _desc: 'محمد إسلام كامران: مهندس أنظمة خلفية وقائد فريق في دبي. Python وFastAPI وDjango وFlask، وقاعدة بيانات MySQL، وميزات فورية عبر WebSockets، وبوابات ويب، والنشر على AWS.',

    /* Header */
    logo: 'إسلام كامران',
    nav_about: 'نبذة عني',
    nav_work: 'الأعمال',
    nav_expertise: 'الخبرات',
    nav_experience: 'المسيرة المهنية',
    nav_contact: 'التواصل',
    nav_inquire: 'تواصل معي',

    /* Hero */
    hero_eyebrow: 'مهندس أنظمة خلفية · Python و FastAPI',
    hero_title: 'محمد<br><em>إسلام كامران</em>',
    hero_lead: 'أبني الأنظمة الخلفية وبوابات الويب من البداية إلى النهاية، من تصميم قاعدة البيانات والواجهات البرمجية إلى النشر والصيانة، وغالباً باستخدام Python وFastAPI.',
    loc_dubai: 'دبي، الإمارات العربية المتحدة',
    hero_years: 'خبرة تزيد عن 4 سنوات',
    hero_open: 'متاح لفرص جديدة',
    btn_work: 'استعرض أعمالي',
    btn_cv: 'تحميل السيرة الذاتية',
    cv_be: 'الأنظمة الخلفية',
    cv_be_sub: 'Python و FastAPI والواجهات البرمجية',
    cv_fs: 'التطوير المتكامل (Full Stack)',
    cv_fs_sub: 'Python و Angular',
    badge_kicker: 'حالياً',
    badge_title: 'قائد فريق، تقنية المعلومات والابتكار',

    /* At a glance */
    results_label: 'لمحة سريعة',
    r1: 'سنوات خبرة<br>في المجال',
    r2: 'مهندسين<br>أقودهم',
    r3: 'بوابات ويب<br>مبنية وتعمل',
    r4: 'صفحة هبوط<br>منشورة',
    r5: 'ورقة بحثية<br>كمؤلف أول',

    /* About */
    about_eyebrow: 'نبذة عني',
    about_title: 'من قاعدة البيانات<br><em>إلى النشر.</em>',
    about_p1: 'أنا مهندس أنظمة خلفية مقيم في دبي، لدي أكثر من 4 سنوات من الخبرة في قطاعات العقارات وتجارة السيارات والبرمجيات كخدمة والرعاية الصحية الأمريكية. يتركّز معظم عملي على <strong>Python وFastAPI</strong> مع <strong>MySQL</strong>، وأتولّى الأنظمة من التصميم حتى النشر والصيانة على <strong>AWS</strong> وInMotion وVercel وRender.',
    about_p2: 'أقود اليوم فريقاً من أربعة مهندسين في Indus Real Estate (Apparel Group). نبني ونشغّل بوابات الشركة للعقارات والوكلاء والخدمات التقنية والمدير العام، إضافة إلى أكثر من 15 صفحة هبوط عامة، مع إشعارات فورية وبيانات قوائم حية عبر WebSockets. وفي Indus تعلّمت أيضاً الواجهات الأمامية: Angular وReact وPHP.',
    about_p3: 'بدأت مسيرتي في البحث العلمي؛ إذ أثمرت دراستي للماجستير (MPhil) في جامعة قائد أعظم عن ورقة بحثية محكّمة بصفتي المؤلف الأول حول تشفير الصور باستخدام المشي الكمومي.',
    f1_k: 'مجال التركيز',
    f1_v: 'الأنظمة الخلفية باستخدام Python وFastAPI',
    f2_k: 'أيضاً',
    f2_v: 'بوابات ويب باستخدام Angular وReact وPHP',
    f3_k: 'التعليم',
    f3_v: 'ماجستير الفلسفة (MPhil) في علوم الحاسوب، جامعة قائد أعظم',
    f4_k: 'مكان الإقامة',

    /* Work */
    work_eyebrow: 'أعمال مختارة',
    work_title: 'مشاريع <em>مميزة</em>',
    work_sub: 'ما بنيته وأطلقته في العمل، وما أتعلّمه بنفسي.',
    k_stack: 'التقنيات',
    k_scope: 'النطاق',
    k_role: 'الدور',
    k_type: 'النوع',
    k_published: 'النشر',
    k_read: 'الورقة',
    view_paper: 'عرض الورقة',

    p1_tag: 'عقارات · تطوير متكامل',
    p1_t: 'بوابات العقارات',
    p1_d: 'بوابات بنيتها وأشغّلها في Indus Real Estate للعقارات والوكلاء وإدارة الخدمات التقنية (Indus Specialty) والمدير العام.',
    p1_h1: 'إشعارات فورية عبر WebSockets',
    p1_h2: 'بيانات قوائم حية من Property Finder (PF)',
    p1_h3: 'مصادقة JWT وتخزين مؤقت وتحديد معدل الطلبات على الواجهات البرمجية',
    p1_i: '4 بوابات، من التصميم إلى النشر',

    p2_tag: 'ويب · تسويق',
    p2_t: 'صفحات الهبوط والمواقع العامة',
    p2_d: 'أكثر من 15 صفحة هبوط وموقعاً عاماً لشركة Indus، سريعة ومتاحة ومُصانة باستمرار.',
    p2_i: 'أكثر من 15 صفحة متاحة للجمهور',

    p3_tag: 'مجموعة Baig · أنظمة خلفية',
    p3_t: 'Big Star و Zeeshan Motors',
    p3_d: 'منصات FastAPI لمجموعة Baig في دبي، مع تكامل Google Maps وPlaces، وأتمتة عبر Selenium، ومراقبة الأداء عبر New Relic.',
    p3_i: 'قائد الأنظمة الخلفية والواجهات وDevOps',

    p4_tag: 'برمجيات كخدمة · أمان',
    p4_t: 'Rollout و Neptune',
    p4_d: 'في K2X: الواجهة الخلفية لمنتج Rollout باستخدام FastAPI مع JWT/OAuth2 وصلاحيات قائمة على الأدوار، وواجهة خلفية بـ Flask مع تسجيل الدخول عبر Google لمنتج Neptune القائم على GPT.',
    p4_i: 'مهندس برمجيات / مالك منتج',

    p5_tag: 'تقنيات صحية · تعليمية',
    p5_t: 'تقييم النطق والتعرّف الضوئي الطبي',
    p5_d: 'مكوّن التحدث باستخدام OpenAI Whisper لتطبيق Rosetta لتعلّم الإنجليزية، إضافة إلى OCR بـ Flask لـ 47 بطاقة تأمين أمريكية شائعة وروبوتات للمستندات الطبية.',
    p5_i: '4 منتجات: Rosetta وFOX وOCR وCoding Bot',

    p6_tag: 'بحث علمي · تشفير',
    p6_t: 'تشفير الصور بالمشي الكمومي',
    p6_d: 'ورقة بحثية محكّمة بصفتي المؤلف الأول: مخطط لتشفير الصور قائم على الخلط والانتشار باستخدام المشي الكمومي والخرائط اللوجستية الفوضوية.',
    pub_venue: 'مجلة CMC · معامل التأثير 3.7',

    p7_tag: 'شخصي · تعلّم',
    p7_t: 'مشاريع تدريبية في LLM وRAG',
    p7_d: 'مشاريع شخصية من دورة نماذج اللغة الكبيرة (Krish Naik): واجهات LLM والاسترجاع عبر قواعد بيانات المتجهات مثل Pinecone. منشورة على لينكدإن.',
    p7_i: 'تعلّم شخصي، ليس في بيئة إنتاج',

    /* Expertise */
    exp_eyebrow: 'الخبرات',
    exp_title: 'ما <em>أقدّمه</em>',
    e1_t: 'تطوير الأنظمة الخلفية',
    e1_n: 'نقطة قوتي الأساسية، نحو 80% من عملي',
    e2_t: 'أتعلّمه حالياً',
    e2_n: 'مشاريع تدريبية، ليست في الإنتاج بعد',
    e3_t: 'الواجهات الأمامية',
    e3_n: 'معرفة عملية اكتسبتها في Indus',
    e4_t: 'النشر والاستضافة',
    e4_n: 'إطلاق الأنظمة الحية وصيانتها',
    e5_t: 'قيادة الفريق',
    e5_n: 'قيادة فريق من 4 مهندسين',
    e_also: 'أيضاً:',
    c_llm: 'نماذج اللغة وRAG',
    c_plan: 'التخطيط والتسليم',
    c_po: 'مالك المنتج',
    c_end: 'من التصميم إلى النشر',
    c_maint: 'الصيانة والدعم',

    /* Experience */
    car_eyebrow: 'المسيرة',
    car_title: 'الخبرة <em>المهنية</em>',
    j1_date: 'مارس 2025 — حتى الآن',
    j1_t: 'قائد فريق، تقنية المعلومات والابتكار',
    j1_b1: 'قيادة فريق من 4 مهندسين لبناء منصات الويب الخاصة بالشركة وتشغيلها، من التخطيط حتى النشر والدعم.',
    j1_b2: 'بناء بوابات للعقارات والوكلاء والخدمات التقنية (Indus Specialty) والمدير العام باستخدام FastAPI وAngular/TypeScript وMySQL.',
    j1_b3: 'إضافة إشعارات فورية وبيانات قوائم حية من Property Finder باستخدام WebSockets.',
    j1_b4: 'تأمين الواجهات البرمجية عبر JWT والبرمجيات الوسيطة، وإضافة التخزين المؤقت وتحديد معدل الطلبات.',
    j1_b5: 'إطلاق أكثر من 15 صفحة هبوط، ونشر الخدمات وتشغيلها على AWS (EC2 وRDS وموازنة الأحمال وPM2) واستضافة InMotion.',
    j2_date: 'مايو 2024 — أغسطس 2026',
    j2_note: 'دوام كامل، ثم دوام جزئي إلى جانب Indus منذ مارس 2025',
    j2_t: 'مهندس رئيسي للأنظمة الخلفية ومستشار تقني',
    j2_loc: 'عمل هجين · دبي / باكستان',
    j2_b1: 'بناء واجهات خلفية بـ FastAPI لمنتجي Big Star وZeeshan Motors التابعين لمجموعة Baig في دبي.',
    j2_b2: 'تكامل واجهات Google Maps وPlaces وواجهات الحاويات، وبناء أدوات استخراج البيانات والأتمتة عبر Selenium.',
    j2_b3: 'إضافة تحديد معدل الطلبات والتخزين المؤقت، ومتابعة أداء الواجهات البرمجية عبر New Relic.',
    j2_b4: 'قيادة أعمال الأنظمة الخلفية والواجهات وDevOps؛ والنشر على AWS (EC2 وRDS) مع موازنة الأحمال وPM2.',
    j3_date: 'أكتوبر 2022 — أبريل 2023',
    j3_t: 'مهندس برمجيات',
    j3_loc: 'باكستان',
    j3_b1: 'بناء واجهات Django البرمجية لمكوّن التحدث في تطبيق Rosetta لتعليم الإنجليزية لطلاب المدارس باستخدام OpenAI Whisper.',
    j3_b2: 'العمل على تطبيق OCR بـ Flask يستخرج البيانات من 47 بطاقة تأمين أمريكية شائعة الاستخدام.',
    j3_b3: 'بناء ميزات FOX Caregiver وروبوتات تستخرج البيانات من المستندات الطبية وتقيّمها، مع تخزينها في MongoDB.',
    j4_date: 'أغسطس 2021 — يوليو 2022',
    j4_t: 'زميل بحثي',
    j4_org: 'جامعة قائد أعظم',
    j4_loc: 'إسلام آباد، باكستان',
    j4_b1: 'بحث رسالة الماجستير (MPhil): نظام عالي الأمان لتشفير الصور باستخدام المشي الكمومي والفوضى.',
    j4_b2: 'تنفيذ خوارزمية المشي الكمومي في MATLAB وبناء الخلط والانتشار على مستوى البكسل باستخدام الخرائط اللوجستية الفوضوية وعملية XOR.',
    j4_b3: 'نُشر البحث كمؤلف أول في مجلة Computers, Materials & Continua (معامل التأثير 3.7).',
    j5_date: 'مايو 2023 — أبريل 2024',
    j5_t: 'مهندس برمجيات / مالك منتج',
    j5_loc: 'باكستان · من المقر',
    j5_note: 'مشاريع لعملاء عن بُعد مرتبطين بشركة SquareX في الدنمارك',
    j5_b1: 'بناء الواجهة الخلفية لمنتج "Rollout" باستخدام FastAPI وSQLAlchemy وAlembic وMySQL وSQLite، مع المراقبة عبر New Relic.',
    j5_b2: 'تنفيذ مصادقة JWT وOAuth2 مع التحكم في الوصول القائم على الأدوار لعملاء المؤسسات.',
    j5_b3: 'بناء الواجهة الخلفية بـ Flask وتسجيل الدخول عبر Google لمنتج "Neptune" القائم على GPT، والذي سُلّم للعميل Drip.',
    j5_b4: 'مالك منتج لمشروع الطاقة ECOWAS مع إدارة فريق من خمسة أشخاص؛ وتطوير الواجهة الخلفية والهندسة الميدانية لمشروع DGIPR الحكومي.',
    ed1_t: 'ماجستير الفلسفة (MPhil) في علوم الحاسوب',
    ed1_s: 'جامعة قائد أعظم، إسلام آباد',
    ed2_t: 'بكالوريوس هندسة أنظمة الحاسوب',
    ed2_s: 'جامعة الهندسة والتكنولوجيا، بيشاور',

    /* Contact */
    ct_eyebrow: 'تواصل',
    ct_title: 'لنبنِ معاً<br><em>شيئاً مميزاً.</em>',
    ct_sub: 'متاح لأدوار الأنظمة الخلفية (Python / FastAPI) والتطوير المتكامل وقيادة الفرق.',
    cc_email: 'البريد الإلكتروني',
    cc_wa: 'واتساب / الهاتف',
    cc_li: 'لينكدإن',
    cv_btn_be: 'سيرة الأنظمة الخلفية',
    cv_btn_fs: 'سيرة التطوير المتكامل',

    /* Intro */
    intro_1: 'محمد',
    intro_2: 'إسلام',
    intro_3: 'كامران',
    intro_skip: 'تخطي',

    /* Footer */
    ft_name: 'محمد إسلام كامران',
    ft_top: 'العودة للأعلى'
  };

  var original = new WeakMap();
  var meta = document.querySelector('meta[name="description"]');
  var EN_TITLE = document.title;
  var EN_DESC = meta ? meta.getAttribute('content') : '';

  function apply(lang) {
    var isAr = lang === 'ar';
    var root = document.documentElement;
    root.lang = isAr ? 'ar' : 'en';
    root.dir = isAr ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!original.has(el)) original.set(el, el.innerHTML);
      var key = el.getAttribute('data-i18n');
      el.innerHTML = (isAr && AR[key] != null) ? AR[key] : original.get(el);
    });

    document.title = isAr ? AR._title : EN_TITLE;
    if (meta) meta.setAttribute('content', isAr ? AR._desc : EN_DESC);

    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.setAttribute('aria-label', isAr ? 'Switch to English' : 'التبديل إلى العربية');
      btn.setAttribute('title', isAr ? 'English' : 'العربية');
    }
    root.classList.remove('i18n-pending');
  }

  window.I18N = {
    apply: apply,
    current: function () { return document.documentElement.lang === 'ar' ? 'ar' : 'en'; }
  };

  // Initial: the head script already set lang/dir if Arabic was saved.
  if (document.documentElement.lang === 'ar') apply('ar');
})();
