/* ============================================================
   MP Website — JavaScript
   وليد أحمد صلاح أبودنقل
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Translations
     ---------------------------------------------------------- */
  const translations = {
    ar: {
      loading: 'جاري التحميل...',
      skipToContent: 'تخطي إلى المحتوى',
      mpName: 'وليد أحمد صلاح أبودنقل',
      logoSubtitle: 'عضو مجلس النواب · حزب الجبهة الوطنية',
      navHome: 'الرئيسية',
      navAbout: 'عن النائب',
      navAchievements: 'الإنجازات',
      navServices: 'الخدمات',
      navComplaints: 'الشكاوى والاقتراحات',
      navOffice: 'موقع المكتب',
      navContact: 'تواصل معنا',
      heroBadge: 'عضو مجلس النواب المصري',
      heroSubtitle: 'عضو مجلس النواب · حزب الجبهة الوطنية',
      heroDesc: 'نائب يعمل من أجل المواطن المصري، يقدم خدمات متميزة، ويستمع لصوت الشعب لبناء مستقبل أفضل لمصر.',
      heroBtnContact: 'تواصل معنا',
      heroBtnComplaint: 'إرسال شكوى',
      heroStatYears: 'سنوات خدمة عامة',
      heroStatRequests: 'طلب مواطن تم حله',
      aboutTag: 'تعرف عليه',
      aboutTitle: 'نبذة عن النائب',
      aboutDesc: 'قائد وطني ملتزم بخدمة المواطن المصري وتطوير المجتمع',
      aboutPhoto: 'صورة النائب',
      aboutBadge: 'حزب الجبهة الوطنية',
      aboutBio: 'وليد أحمد صلاح أبودنقل، عضو مجلس النواب المصري عن حزب الجبهة الوطنية. يتميز بخبرة واسعة في العمل العام والخدمة المجتمعية، ويعمل بجد من أجل تحقيق طموحات المواطنين وتقديم حلول عملية لمشكلاتهم اليومية.',
      visionTitle: 'الرؤية',
      visionText: 'مصر قوية مزدهرة، ينعم فيها كل مواطن بالكرامة والعدالة والتنمية المستدامة.',
      missionTitle: 'الرسالة',
      missionText: 'تمثيل صوت المواطن في البرلمان، وتقديم خدمات متميزة، والعمل على تحقيق التنمية المحلية.',
      valuesTitle: 'القيم',
      valuesText: 'النزاهة، الشفافية، المساءلة، والالتزام بخدمة الوطن والمواطن.',
      cardLeadership: 'القيادة',
      cardLeadershipDesc: 'قيادة فعّالة في البرلمان والمجتمع المحلي لتحقيق التغيير الإيجابي.',
      cardExperience: 'الخبرة',
      cardExperienceDesc: 'سنوات من العمل العام والخبرة البرلمانية في خدمة المواطنين.',
      cardCommunity: 'خدمة المجتمع',
      cardCommunityDesc: 'مبادرات مجتمعية متنوعة لدعم الأسر المحتاجة وتنمية المجتمع.',
      cardRepresentation: 'التمثيل الشعبي',
      cardRepresentationDesc: 'تمثيل حقيقي لمصالح الدائرة الانتخابية في مجلس النواب.',
      achievementsTag: 'سجل الإنجازات',
      achievementsTitle: 'الإنجازات',
      achievementsDesc: 'إنجازات ملموسة في خدمة المواطنين وتنمية المجتمع',
      statRequests: 'طلب مواطن تم حله',
      statEvents: 'فعالية مجتمعية',
      statProjects: 'مشروع تنموي',
      statYears: 'سنة خدمة عامة',
      timeline1Title: 'افتتاح مركز خدمات المواطنين',
      timeline1Desc: 'تدشين مركز متكامل لاستقبال شكاوى وطلبات المواطنين على مدار الأسبوع.',
      timeline2Title: 'مشروع تطوير البنية التحتية',
      timeline2Desc: 'إنجاز 20 مشروعاً لتطوير الطرق والمرافق العامة في الدائرة الانتخابية.',
      timeline3Title: 'مبادرة التعليم للجميع',
      timeline3Desc: 'توفير منح دراسية ودعم تعليمي لـ 500 طالب وطالبة من الأسر المحتاجة.',
      timeline4Title: 'حملة الرعاية الصحية',
      timeline4Desc: 'تنظيم قوافل طبية مجانية استفاد منها أكثر من 3000 مواطن.',
      servicesTag: 'ما نقدمه',
      servicesTitle: 'الخدمات',
      servicesDesc: 'خدمات متكاملة لخدمة المواطنين وتلبية احتياجاتهم',
      service1Title: 'استقبال شكاوى المواطنين',
      service1Desc: 'استقبال ومتابعة شكاوى المواطنين وحلها بأسرع وقت ممكن.',
      service2Title: 'طلبات الخدمات',
      service2Desc: 'تقديم طلبات الخدمات الحكومية والمساعدة في إجراءاتها.',
      service3Title: 'المقترحات',
      service3Desc: 'استقبال مقترحات المواطنين لتطوير الخدمات والمشاريع.',
      service4Title: 'حجز موعد بالمكتب',
      service4Desc: 'حجز موعد لمقابلة النائب أو فريق العمل في المكتب الانتخابي.',
      service5Title: 'المساعدات الاجتماعية',
      service5Desc: 'تقديم المساعدات الاجتماعية للأسر المحتاجة والفئات الأولى بالرعاية.',
      serviceLink: 'قدّم طلبك ←',
      complaintsTag: 'صوتك مسموع',
      complaintsTitle: 'الشكاوى والاقتراحات',
      complaintsDesc: 'قدّم شكواك أو اقتراحك وسيتم متابعته في أقرب وقت',
      formName: 'الاسم بالكامل',
      formPhone: 'رقم الهاتف',
      formEmail: 'البريد الإلكتروني',
      formGovernorate: 'المحافظة',
      formSelectGov: '— اختر المحافظة —',
      govCairo: 'القاهرة',
      govAlex: 'الإسكندرية',
      govGiza: 'الجيزة',
      govSharqia: 'الشرقية',
      govDakahlia: 'الدقهلية',
      govOther: 'أخرى',
      formCity: 'المركز / المدينة',
      formType: 'نوع الطلب',
      formSelectType: '— اختر نوع الطلب —',
      typeComplaint: 'شكوى',
      typeSuggestion: 'اقتراح',
      typeInquiry: 'استفسار',
      formSubject: 'عنوان الطلب',
      formDetails: 'تفاصيل الطلب',
      formFile: 'رفع ملف (اختياري)',
      formFileLabel: 'اختر ملفاً أو اسحبه هنا',
      formFileHint: 'PDF, JPG, PNG, DOC — بحد أقصى 5 ميجابايت',
      formPrivacy: 'أوافق على سياسة الخصوصية',
      formSubmit: 'إرسال الطلب',
      officeTag: 'زيارتنا',
      officeTitle: 'عنوان المكتب',
      officeDesc: 'نرحب بزيارتكم في المكتب الانتخابي',
      officeAddressTitle: 'العنوان',
      officeAddress: 'شارع التحرير، الدقي، الجيزة، جمهورية مصر العربية',
      officeHoursTitle: 'مواعيد العمل',
      officeHours: 'السبت — الخميس: 9:00 ص — 5:00 م<br>الجمعة: مغلق',
      officePhoneTitle: 'الهاتف',
      officeWhatsAppTitle: 'واتساب',
      officeEmailTitle: 'البريد الإلكتروني',
      contactTag: 'ابقَ على تواصل',
      contactTitle: 'تواصل معنا',
      contactDesc: 'نحن هنا للاستماع إليكم وخدمتكم',
      contactPhone: 'الهاتف',
      contactWhatsApp: 'واتساب',
      contactFacebook: 'فيسبوك',
      contactFacebookDesc: 'تابعنا على فيسبوك',
      contactInstagram: 'إنستغرام',
      contactInstagramDesc: 'تابعنا على إنستغرام',
      contactEmail: 'البريد الإلكتروني',
      contactHours: 'مواعيد العمل',
      contactHoursDesc: 'السبت — الخميس: 9:00 ص — 5:00 م',
      footerParty: 'حزب الجبهة الوطنية',
      footerDesc: 'نائب يعمل من أجل المواطن المصري، ملتزم بالخدمة والتنمية.',
      footerQuickLinks: 'روابط سريعة',
      footerContact: 'تواصل',
      footerRights: 'جميع الحقوق محفوظة.',
      popupTitle: 'تم الإرسال بنجاح!',
      popupDesc: 'شكراً لتواصلك معنا. سيتم مراجعة طلبك والرد عليك في أقرب وقت.',
      popupClose: 'حسناً',
      // Validation messages
      errRequired: 'هذا الحقل مطلوب',
      errPhone: 'يرجى إدخال رقم هاتف مصري صحيح',
      errEmail: 'يرجى إدخال بريد إلكتروني صحيح',
      errPrivacy: 'يجب الموافقة على سياسة الخصوصية',
      errFileSize: 'حجم الملف يجب ألا يتجاوز 5 ميجابايت',
      errFileType: 'نوع الملف غير مدعوم',
      themeToggle: 'تبديل الوضع الليلي',
      backToTop: 'العودة للأعلى',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
      pageTitle: 'وليد أحمد صلاح أبودنقل | عضو مجلس النواب',
      metaDescription: 'الموقع الرسمي للنائب وليد أحمد صلاح أبودنقل — عضو مجلس النواب المصري عن حزب الجبهة الوطنية.',
      logoAlt: 'حزب الجبهة الوطنية',
      heroPhotoAlt: 'وليد أحمد صلاح أبودنقل - عضو مجلس النواب',
      aboutPhotoAlt: 'وليد أحمد صلاح أبودنقل - عضو مجلس النواب المصري'
    },
    en: {
      loading: 'Loading...',
      skipToContent: 'Skip to content',
      mpName: 'Walid Ahmed Salah Aboudanqal',
      logoSubtitle: 'Member of Parliament · National Front Party',
      navHome: 'Home',
      navAbout: 'About',
      navAchievements: 'Achievements',
      navServices: 'Services',
      navComplaints: 'Complaints & Suggestions',
      navOffice: 'Office Location',
      navContact: 'Contact Us',
      heroBadge: 'Member of the Egyptian House of Representatives',
      heroSubtitle: 'Member of Parliament · National Front Party',
      heroDesc: 'A dedicated representative working for the Egyptian citizen, providing exceptional services and listening to the voice of the people to build a better future for Egypt.',
      heroBtnContact: 'Contact Us',
      heroBtnComplaint: 'Submit a Complaint',
      heroStatYears: 'Years of Public Service',
      heroStatRequests: 'Citizen Requests Resolved',
      aboutTag: 'Get to Know Him',
      aboutTitle: 'About the Representative',
      aboutDesc: 'A national leader committed to serving the Egyptian citizen and community development',
      aboutPhoto: 'Representative Photo',
      aboutBadge: 'National Front Party',
      aboutBio: 'Walid Ahmed Salah Aboudanqal, Member of the Egyptian House of Representatives for the National Front Party. He has extensive experience in public service and community work, striving to fulfill citizens\' aspirations and provide practical solutions to their daily challenges.',
      visionTitle: 'Vision',
      visionText: 'A strong, prosperous Egypt where every citizen enjoys dignity, justice, and sustainable development.',
      missionTitle: 'Mission',
      missionText: 'Representing the voice of citizens in Parliament, providing exceptional services, and working towards local development.',
      valuesTitle: 'Values',
      valuesText: 'Integrity, transparency, accountability, and commitment to serving the nation and its citizens.',
      cardLeadership: 'Leadership',
      cardLeadershipDesc: 'Effective leadership in Parliament and the local community to achieve positive change.',
      cardExperience: 'Experience',
      cardExperienceDesc: 'Years of public service and parliamentary experience serving citizens.',
      cardCommunity: 'Community Service',
      cardCommunityDesc: 'Diverse community initiatives supporting needy families and community development.',
      cardRepresentation: 'Public Representation',
      cardRepresentationDesc: 'Genuine representation of the electoral district\'s interests in the House of Representatives.',
      achievementsTag: 'Track Record',
      achievementsTitle: 'Achievements',
      achievementsDesc: 'Tangible achievements in serving citizens and community development',
      statRequests: 'Citizen Requests Resolved',
      statEvents: 'Community Events',
      statProjects: 'Development Projects',
      statYears: 'Years of Public Service',
      timeline1Title: 'Citizen Services Center Opening',
      timeline1Desc: 'Launching an integrated center for receiving citizen complaints and requests throughout the week.',
      timeline2Title: 'Infrastructure Development Project',
      timeline2Desc: 'Completing 20 projects to develop roads and public facilities in the electoral district.',
      timeline3Title: 'Education for All Initiative',
      timeline3Desc: 'Providing scholarships and educational support to 500 students from needy families.',
      timeline4Title: 'Healthcare Campaign',
      timeline4Desc: 'Organizing free medical convoys benefiting over 3,000 citizens.',
      servicesTag: 'What We Offer',
      servicesTitle: 'Services',
      servicesDesc: 'Comprehensive services to serve citizens and meet their needs',
      service1Title: 'Citizen Complaints Reception',
      service1Desc: 'Receiving and following up on citizen complaints and resolving them as quickly as possible.',
      service2Title: 'Service Requests',
      service2Desc: 'Submitting government service requests and assisting with procedures.',
      service3Title: 'Suggestions',
      service3Desc: 'Receiving citizen suggestions for developing services and projects.',
      service4Title: 'Office Appointment Booking',
      service4Desc: 'Booking an appointment to meet the representative or staff at the electoral office.',
      service5Title: 'Social Assistance',
      service5Desc: 'Providing social assistance to needy families and priority care groups.',
      serviceLink: 'Submit Request →',
      complaintsTag: 'Your Voice Matters',
      complaintsTitle: 'Complaints & Suggestions',
      complaintsDesc: 'Submit your complaint or suggestion and it will be followed up promptly',
      formName: 'Full Name',
      formPhone: 'Phone Number',
      formEmail: 'Email Address',
      formGovernorate: 'Governorate',
      formSelectGov: '— Select Governorate —',
      govCairo: 'Cairo',
      govAlex: 'Alexandria',
      govGiza: 'Giza',
      govSharqia: 'Sharqia',
      govDakahlia: 'Dakahlia',
      govOther: 'Other',
      formCity: 'City / District',
      formType: 'Request Type',
      formSelectType: '— Select Request Type —',
      typeComplaint: 'Complaint',
      typeSuggestion: 'Suggestion',
      typeInquiry: 'Inquiry',
      formSubject: 'Request Subject',
      formDetails: 'Request Details',
      formFile: 'Upload File (Optional)',
      formFileLabel: 'Choose a file or drag it here',
      formFileHint: 'PDF, JPG, PNG, DOC — Max 5 MB',
      formPrivacy: 'I agree to the privacy policy',
      formSubmit: 'Submit Request',
      officeTag: 'Visit Us',
      officeTitle: 'Office Address',
      officeDesc: 'We welcome your visit to the electoral office',
      officeAddressTitle: 'Address',
      officeAddress: 'Tahrir Street, Dokki, Giza, Arab Republic of Egypt',
      officeHoursTitle: 'Working Hours',
      officeHours: 'Saturday — Thursday: 9:00 AM — 5:00 PM<br>Friday: Closed',
      officePhoneTitle: 'Phone',
      officeWhatsAppTitle: 'WhatsApp',
      officeEmailTitle: 'Email',
      contactTag: 'Stay Connected',
      contactTitle: 'Contact Us',
      contactDesc: 'We are here to listen and serve you',
      contactPhone: 'Phone',
      contactWhatsApp: 'WhatsApp',
      contactFacebook: 'Facebook',
      contactFacebookDesc: 'Follow us on Facebook',
      contactInstagram: 'Instagram',
      contactInstagramDesc: 'Follow us on Instagram',
      contactEmail: 'Email',
      contactHours: 'Working Hours',
      contactHoursDesc: 'Saturday — Thursday: 9:00 AM — 5:00 PM',
      footerParty: 'National Front Party',
      footerDesc: 'A representative working for the Egyptian citizen, committed to service and development.',
      footerQuickLinks: 'Quick Links',
      footerContact: 'Contact',
      footerRights: 'All rights reserved.',
      popupTitle: 'Submitted Successfully!',
      popupDesc: 'Thank you for contacting us. Your request will be reviewed and you will receive a response shortly.',
      popupClose: 'OK',
      errRequired: 'This field is required',
      errPhone: 'Please enter a valid Egyptian phone number',
      errEmail: 'Please enter a valid email address',
      errPrivacy: 'You must agree to the privacy policy',
      errFileSize: 'File size must not exceed 5 MB',
      errFileType: 'File type is not supported',
      themeToggle: 'Toggle dark mode',
      backToTop: 'Back to top',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      pageTitle: 'Walid Ahmed Salah Aboudanqal | Member of Parliament',
      metaDescription: 'Official website of MP Walid Ahmed Salah Aboudanqal — Member of the Egyptian House of Representatives for the National Front Party.',
      logoAlt: 'National Front Party',
      heroPhotoAlt: 'Walid Ahmed Salah Aboudanqal - Member of Parliament',
      aboutPhotoAlt: 'Walid Ahmed Salah Aboudanqal - Member of the Egyptian House of Representatives'
    }
  };

  /* ----------------------------------------------------------
     State
     ---------------------------------------------------------- */
  let currentLang = localStorage.getItem('lang') || 'ar';
  let currentTheme = localStorage.getItem('theme') || 'light';
  let countersAnimated = false;

  /* ----------------------------------------------------------
     DOM Elements
     ---------------------------------------------------------- */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const html = document.documentElement;
  const header = $('#header');
  const nav = $('.nav');
  const navLinks = $$('.nav-link');
  const menuToggle = $('#menu-toggle');
  const themeToggle = $('#theme-toggle');
  const backToTop = $('#back-to-top');
  const loadingScreen = $('#loading-screen');
  const complaintForm = $('#complaint-form');
  const successPopup = $('#success-popup');
  const popupClose = $('#popup-close');
  const fileInput = $('#attachment');
  const fileNameDisplay = $('#file-name');

  /* ----------------------------------------------------------
     Language Switch
     ---------------------------------------------------------- */
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    const t = translations[lang];
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    html.lang = lang;
    html.dir = dir;
    document.title = t.pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t.metaDescription;

    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (t[key].includes('<br>')) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    $$('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) {
        el.alt = t[key];
      }
    });

    $$('.lang-btn').forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    themeToggle.setAttribute('aria-label', t.themeToggle);
    backToTop.setAttribute('aria-label', t.backToTop);
    backToTop.title = t.backToTop;
    menuToggle.setAttribute('aria-label', nav.classList.contains('open') ? t.menuClose : t.menuOpen);
  }

  function initLanguage() {
    $$('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    setLanguage(currentLang);
  }

  /* ----------------------------------------------------------
     Theme Toggle
     ---------------------------------------------------------- */
  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    html.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  }

  function initTheme() {
    setTheme(currentTheme);
    themeToggle.addEventListener('click', () => {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  /* ----------------------------------------------------------
     Loading Screen
     ---------------------------------------------------------- */
  function initLoading() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        loadingScreen.setAttribute('aria-hidden', 'true');
      }, 2000);
    });
  }

  /* ----------------------------------------------------------
     Sticky Navbar & Scroll Effects
     ---------------------------------------------------------- */
  function initScrollEffects() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      header.classList.toggle('scrolled', scrollY > 50);
      backToTop.classList.toggle('visible', scrollY > 400);

      updateActiveNavLink();
    });
  }

  function updateActiveNavLink() {
    const sections = $$('section[id]');
    let current = '';

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  /* ----------------------------------------------------------
     Mobile Menu
     ---------------------------------------------------------- */
  function initMobileMenu() {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);

      const t = translations[currentLang];
      menuToggle.setAttribute('aria-label', isOpen ? t.menuClose : t.menuOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  /* ----------------------------------------------------------
     Smooth Scroll
     ---------------------------------------------------------- */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ----------------------------------------------------------
     Back to Top
     ---------------------------------------------------------- */
  function initBackToTop() {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------------
     Scroll Reveal (Intersection Observer)
     ---------------------------------------------------------- */
  function initScrollReveal() {
    const reveals = $$('.reveal');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      reveals.forEach((el) => observer.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('visible'));
    }
  }

  /* ----------------------------------------------------------
     Animated Counters
     ---------------------------------------------------------- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.textContent = prefix + current.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
      }
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const statNumbers = $$('.stat-number');

    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !countersAnimated) {
              countersAnimated = true;
              statNumbers.forEach(animateCounter);
              counterObserver.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      const statsSection = $('.stats-grid');
      if (statsSection) counterObserver.observe(statsSection);
    }
  }

  /* ----------------------------------------------------------
     Form Validation
     ---------------------------------------------------------- */
  function getValidationMessages() {
    return translations[currentLang];
  }

  function validatePhone(phone) {
    const cleaned = phone.replace(/\s/g, '');
    return /^(01)[0-9]{9}$/.test(cleaned) || /^(\+20)?1[0-9]{9}$/.test(cleaned);
  }

  function validateEmail(email) {
    if (!email) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`error-${fieldId}`);
    if (field) field.classList.add('error');
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`error-${fieldId}`);
    if (field) field.classList.remove('error');
    if (errorEl) errorEl.textContent = '';
  }

  function validateForm() {
    const t = getValidationMessages();
    let isValid = true;

    const fields = ['fullName', 'phone', 'email', 'governorate', 'city', 'requestType', 'subject', 'details'];
    fields.forEach(clearError);
    clearError('privacy');

    const fullName = $('#fullName').value.trim();
    const phone = $('#phone').value.trim();
    const email = $('#email').value.trim();
    const governorate = $('#governorate').value;
    const city = $('#city').value.trim();
    const requestType = $('#requestType').value;
    const subject = $('#subject').value.trim();
    const details = $('#details').value.trim();
    const privacy = $('#privacy').checked;

    if (!fullName) {
      showError('fullName', t.errRequired);
      isValid = false;
    }

    if (!phone) {
      showError('phone', t.errRequired);
      isValid = false;
    } else if (!validatePhone(phone)) {
      showError('phone', t.errPhone);
      isValid = false;
    }

    if (email && !validateEmail(email)) {
      showError('email', t.errEmail);
      isValid = false;
    }

    if (!governorate) {
      showError('governorate', t.errRequired);
      isValid = false;
    }

    if (!city) {
      showError('city', t.errRequired);
      isValid = false;
    }

    if (!requestType) {
      showError('requestType', t.errRequired);
      isValid = false;
    }

    if (!subject) {
      showError('subject', t.errRequired);
      isValid = false;
    }

    if (!details) {
      showError('details', t.errRequired);
      isValid = false;
    }

    if (!privacy) {
      showError('privacy', t.errPrivacy);
      isValid = false;
    }

    return isValid;
  }

  function initForm() {
    if (!complaintForm) return;

    complaintForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm()) {
        showPopup();
        complaintForm.reset();
        if (fileNameDisplay) fileNameDisplay.textContent = '';
      }
    });

    const inputs = complaintForm.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.id) clearError(input.id);
      });
      input.addEventListener('change', () => {
        if (input.id) clearError(input.id);
      });
    });

    if (fileInput) {
      fileInput.addEventListener('change', () => {
        const t = getValidationMessages();
        const file = fileInput.files[0];

        if (!file) {
          fileNameDisplay.textContent = '';
          return;
        }

        const allowedTypes = [
          'application/pdf',
          'image/jpeg',
          'image/png',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        const maxSize = 5 * 1024 * 1024;

        if (file.size > maxSize) {
          alert(t.errFileSize);
          fileInput.value = '';
          fileNameDisplay.textContent = '';
          return;
        }

        if (!allowedTypes.includes(file.type)) {
          alert(t.errFileType);
          fileInput.value = '';
          fileNameDisplay.textContent = '';
          return;
        }

        fileNameDisplay.textContent = file.name;
      });
    }
  }

  /* ----------------------------------------------------------
     Success Popup
     ---------------------------------------------------------- */
  function showPopup() {
    successPopup.removeAttribute('hidden');
    requestAnimationFrame(() => {
      successPopup.classList.add('active');
    });
    document.body.classList.add('no-scroll');
    popupClose.focus();
  }

  function hidePopup() {
    successPopup.classList.remove('active');
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
      successPopup.setAttribute('hidden', '');
    }, 300);
  }

  function initPopup() {
    popupClose.addEventListener('click', hidePopup);
    successPopup.addEventListener('click', (e) => {
      if (e.target === successPopup) hidePopup();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && successPopup.classList.contains('active')) {
        hidePopup();
      }
    });
  }

  /* ----------------------------------------------------------
     Footer Year
     ---------------------------------------------------------- */
  function initFooter() {
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* ----------------------------------------------------------
     Keyboard Navigation Enhancement
     ---------------------------------------------------------- */
  function initAccessibility() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });
  }

  /* ----------------------------------------------------------
     Initialize
     ---------------------------------------------------------- */
  function init() {
    initLanguage();
    initTheme();
    initLoading();
    initScrollEffects();
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
    initScrollReveal();
    initCounters();
    initForm();
    initPopup();
    initFooter();
    initAccessibility();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
