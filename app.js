/* ==========================================================
   i18n — Language Switcher (English / Ukrainian)
   ========================================================== */
const translations = {
  en: {
    'logo-subtitle':     'BLEND PRACTICE',
    'nav-about':         'About',
    'nav-works':         'Works',
    'nav-contact':       'Contact',
    'hero-meta':         'Concept — Object — Light',
    'hero-title':        'Form shaped by <span class="italic">geometry</span>,<br>defined by <span class="italic">shadows</span>.',
    'hero-desc':         'Exploring the intersection of architectural spaces, sculptural furniture design, and fine art photography.',
    'hero-cta':          'View Selected Works',
    'about-meta':        'THE PRACTICE',
    'about-title':       'A singular search for spatial balance.',
    'about-lead':        'I am a designer working across the scales of structure, touch, and visual memory. My practice combines architectural concept modeling, custom object fabrication, and medium-format photography.',
    'about-arch-title':  'Architectural Concepts',
    'about-arch-desc':   'Developing spatial narratives that prioritize raw, local materials, connection with the natural landscape, and honest structural expression.',
    'about-obj-title':   'Object Design',
    'about-obj-desc':    'Designing tactile furniture pieces and custom functional objects that emphasize raw joints, sculptural profiles, and grain textures.',
    'about-photo-title': 'Photography',
    'about-photo-desc':  'Documenting structures and spaces in high-contrast analog formats, observing how shifting sunrays sculpt architectural forms over time.',
    'works-meta':        'SELECTED WORKS',
    'works-title':       'A curated index of projects',
    'filter-all':        'All',
    'filter-arch':       'Architecture',
    'filter-obj':        'Object Design',
    'filter-photo':      'Photography',
    'proj1-title':       'The Forest Pavilion',
    'proj1-phase':       'Concept',
    'proj2-title':       'No. 07 Organic lamp',
    'proj2-phase':       'Prototype',
    'proj3-title':       'Raw Brutalism',
    'proj3-phase':       'Fine Art',
    'contact-meta':      'COLLABORATION',
    'contact-title':     'Let\'s shape<br>something together.',
    'contact-inquiry':   'General Inquiry',
    'contact-press':     'Press & Representation',
    'form-name':         'Name',
    'form-email':        'Email Address',
    'form-scope':        'Project Scope',
    'form-opt1':         'Architectural Concept Design',
    'form-opt2':         'Custom Object Commission',
    'form-opt3':         'Editorial / Photography Assignment',
    'form-opt4':         'General Collaboration',
    'form-message':      'Describe your concept',
    'form-send':         'Send Message',
    'form-success':      'Message sent successfully!',
    'modal-phase':       'Phase',
    'modal-year':        'Year',
    'footer-copy':       '© 2026 R. Antonenko. All rights reserved.',
    'footer-journal':    'Journal',
  },
  uk: {
    'logo-subtitle':     'КОМБІНОВАНА ПРАКТИКА',
    'nav-about':         'Про мене',
    'nav-works':         'Роботи',
    'nav-contact':       'Контакт',
    'hero-meta':         'Концепція — Об\'єкт — Світло',
    'hero-title':        'Форма, народжена <span class="italic">геометрією</span>,<br>визначена <span class="italic">тінями</span>.',
    'hero-desc':         'Дослідження перетину архітектурних просторів, скульптурного дизайну меблів та документальної фотографії.',
    'hero-cta':          'Переглянути роботи',
    'about-meta':        'ПРАКТИКА',
    'about-title':       'Пошук просторового балансу.',
    'about-lead':        'Я дизайнер, що працює на перетині масштабів структури, дотику та візуальної пам\'яті. Моя практика поєднує концептуальне архітектурне моделювання, виготовлення об\'єктів та середньоформатну фотографію.',
    'about-arch-title':  'Архітектурні концепції',
    'about-arch-desc':   'Розробка просторових наративів, що надають пріоритет сирим місцевим матеріалам, зв\'язку з природним ландшафтом та чесному структурному вираженню.',
    'about-obj-title':   'Дизайн об\'єктів',
    'about-obj-desc':    'Проектування тактильних меблів та функціональних об\'єктів із акцентом на грубих з\'єднаннях, скульптурних силуетах та текстурі зерна.',
    'about-photo-title': 'Фотографія',
    'about-photo-desc':  'Документування споруд і просторів у висококонтрастних аналогових форматах, спостереження за тим, як сонячне проміння ліпить архітектурні форми.',
    'works-meta':        'ВИБРАНІ РОБОТИ',
    'works-title':       'Куратований індекс проєктів',
    'filter-all':        'Усі',
    'filter-arch':       'Архітектура',
    'filter-obj':        'Дизайн об\'єктів',
    'filter-photo':      'Фотографія',
    'proj1-title':       'Лісовий павільйон',
    'proj1-phase':       'Концепція',
    'proj2-title':       'Еко Лампа № 07',
    'proj2-phase':       'Прототип',
    'proj3-title':       'Сирий брутализм',
    'proj3-phase':       'Образотворче мистецтво',
    'contact-meta':      'СПІВПРАЦЯ',
    'contact-title':     'Створімо щось<br>разом.',
    'contact-inquiry':   'Загальний запит',
    'contact-press':     'Преса та представництво',
    'form-name':         'Ім\'я',
    'form-email':        'Електронна пошта',
    'form-scope':        'Масштаб проєкту',
    'form-opt1':         'Архітектурний концепт',
    'form-opt2':         'Замовлення об\'єкта',
    'form-opt3':         'Редакційна / фотографічна задача',
    'form-opt4':         'Загальна співпраця',
    'form-message':      'Опишіть вашу концепцію',
    'form-send':         'Надіслати',
    'form-success':      'Повідомлення успішно надіслано!',
    'modal-phase':       'Фаза',
    'modal-year':        'Рік',
    'footer-copy':       '© 2026 Р. Антоненко. Усі права захищені.',
    'footer-journal':    'Журнал',
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);

  // Update lang toggle label — show the OTHER language as the target
  document.getElementById('lang-label').textContent = lang === 'en' ? 'УКР' : 'EN';

  const t = translations[lang];

  // Plain text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML nodes (allow italic spans, <br> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // <select> options need separate handling
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (t[key] !== undefined) opt.textContent = t[key];
  });
}

// Apply on load
applyLanguage(currentLang);

// Toggle on click
document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'uk' : 'en');
});


/* ==========================================================
   0. Hero Image Slideshow — Slow Fade, 12s Interval
   ========================================================== */
const heroImages = [
  { src: 'assets/architecture.png', alt: 'Architectural Concept — F4H' },
  { src: 'assets/architecture2.png', alt: 'Architectural Concept — 22' },
    { src: 'assets/architecture3.png', alt: 'Architectural Concept — HH' },
  { src: 'assets/object.png',       alt: 'Object Design — No. 07 Organic lamp' },
  { src: 'assets/photography.png',  alt: 'Photography — Raw Brutalism Series' },
];

let heroIndex = 0;

function cycleHeroImage() {
  const img = document.getElementById('hero-img');
  if (!img) return;

  // 1. Fade out (2s transition defined in CSS)
  img.classList.add('fade-out');

  // 2. After the fade-out completes (2s), swap the src and fade back in
  setTimeout(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    img.src = heroImages[heroIndex].src;
    img.alt = heroImages[heroIndex].alt;

    // Trigger reflow so the browser registers the opacity change
    void img.offsetWidth;

    img.classList.remove('fade-out');
  }, 2000); // must match CSS transition duration
}

// Start the slideshow: every 9 seconds show the next image
setInterval(cycleHeroImage, 9000);


/* ==========================================================
   1. Theme Switching (Light/Dark Warm Minimalist Mode)
   ========================================================== */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme or default to system preference
const savedTheme = localStorage.getItem('portfolio-theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
  body.classList.remove('theme-light');
  body.classList.add('theme-dark');
} else {
  body.classList.remove('theme-dark');
  body.classList.add('theme-light');
}

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('theme-light')) {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    localStorage.setItem('portfolio-theme', 'dark');
  } else {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    localStorage.setItem('portfolio-theme', 'light');
  }
});


/* ==========================================================
   2. Header Scroll Effect
   ========================================================== */
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


/* ==========================================================
   3. Viewport Scroll Reveal (Intersection Observer)
   ========================================================== */
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-active');
      // Unobserve after revealing to prevent repeated triggering
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


/* ==========================================================
   4. Mobile Menu Drawer
   ========================================================== */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMobileMenu() {
  mobileMenuBtn.classList.toggle('active');
  mobileDrawer.classList.toggle('active');
  
  if (mobileDrawer.classList.contains('active')) {
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  } else {
    document.body.style.overflow = '';
  }
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Close menu when clicking a link
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileDrawer.classList.remove('active');
    document.body.style.overflow = '';
  });
});


/* ==========================================================
   5. Portfolio Category Filter
   ========================================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active state from other buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      // Reset animations
      card.style.opacity = '0';
      card.style.transform = 'translateY(15px)';
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

      setTimeout(() => {
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('fade-out');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.classList.add('fade-out');
        }
      }, 300);
    });
  });
});


/* ==========================================================
   6. Dynamic Project Details Modal
   ========================================================== */
const projectData = [
 {
    title: "The module",
    category: "ARCHITECTURE",
    phase: "Concept Study",
    year: "2024",
    image: "assets/architecture2.png",
    description: "Situated at the water's edge, this structure acts as an interactive threshold between raw woodland and absolute shelter. Its flat raw concrete slab ceiling floats over minimalist structural glass facades, framing reflections of the lake while capturing shifting woodland shadows throughout the day. Built virtually using local raw oak accents, structural slate, and low-hydration concrete castings."
  },
  {
    title: "No. 07 Organic Lamp",
    category: "OBJECT DESIGN",
    phase: "Prototype No. 01",
    year: "2025",
    image: "assets/object.png",
    description: "A study in organic sculptural curves and raw joints. Crafted entirely from select-grade oak wood, the chair combines robust joinery with a fluid, human-centric form. The profiles transition smoothly from heavy structural feet to floating, paper-thin curves. Designed with an emphasis on tactile grain texture, hand-finished with a simple oil wax coating."
  },
  {
    title: "Raw Nature Brutalism",
    category: "PHOTOGRAPHY",
    phase: "Fine Art Series",
    year: "2026",
    image: "assets/photography.png",
    description: "Captured on a medium-format camera using black-and-white film, this photography series studies the geometric shadow play cast across modular concrete archways. Clean geometric shadows slice through structures, transforming raw concrete slabs into high-contrast canvases of pure light. The grain of the film accentuates the textures of the formwork."
  }
];

const modal = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCloseBackdrop = document.getElementById('modal-close-backdrop');
const modalImg = document.getElementById('modal-project-img');
const modalCategory = document.getElementById('modal-project-category');
const modalTitle = document.getElementById('modal-project-title');
const modalPhase = document.getElementById('modal-project-phase');
const modalYear = document.getElementById('modal-project-year');
const modalDesc = document.getElementById('modal-project-desc');

function openModal(index) {
  const data = projectData[index];
  if (!data) return;

  // Populate content
  modalImg.src = data.image;
  modalImg.alt = data.title;
  modalCategory.innerText = data.category;
  modalTitle.innerText = data.title;
  modalPhase.innerText = data.phase;
  modalYear.innerText = data.year;
  modalDesc.innerText = data.description;

  // Open modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Stop background scrolling
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Resume scrolling
}

// Bind project clicks
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const index = parseInt(card.getAttribute('data-index'), 10);
    openModal(index);
  });
});

// Close triggers
modalCloseBtn.addEventListener('click', closeModal);
modalCloseBackdrop.addEventListener('click', closeModal);

// Close on 'Escape' key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});
