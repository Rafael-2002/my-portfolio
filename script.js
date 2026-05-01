
/* ============================================================
   TRANSLATIONS
   ============================================================ */
const T = {
    pt: {
        'nav-about':      'Sobre',
        'nav-skills':     'Skills',
        'nav-experience': 'Experiência',
        'nav-projects':   'Projetos',
        'nav-contact':    'Contacto',

        'hero-role-prefix':    'Sou ',
        'hero-bio':            'Software Developer com foco em backend Java, REST APIs e sistemas alimentados por IA. Construo soluções de ponta a ponta com impacto real.',
        'hero-cta-primary':    'Ver Projetos',
        'hero-cta-secondary':  'Contactar',
        'scroll-hint':         'scroll',

        'about-label':   '// sobre mim',
        'about-title':   'Quem sou eu',
        'about-p1':      'Sou o <strong>Rafael Silva</strong>, Software Developer com licenciatura em Engenharia Informática pela Universidade Lusófona. Atualmente trabalho na <strong>Mooddie Digital</strong>, onde desenvolvo e mantenho uma aplicação web empresarial de grande escala com foco em Java backend.',
        'about-p2':      'Tenho experiência prática a construir sistemas de ponta a ponta — desde <strong>pipelines de dados automatizados</strong> e <strong>integração de LLMs</strong> até REST APIs escaláveis na cloud. A minha paixão está no backend e em aplicações alimentadas por IA.',
        'about-p3':      'Fora do código, os <strong>Escoteiros</strong> moldaram a minha forma de trabalhar em equipa e de liderar — valores que trago para cada projeto.',
        'about-h1-title':'Licenciatura em Engenharia Informática',
        'about-h1-sub':  'Universidade Lusófona · 2021–2025',
        'about-h2-title':'Software Developer @ Mooddie Digital',
        'about-h2-sub':  'Nov 2025 – Presente',
        'about-h3-title':'Línguas',
        'about-h3-sub':  'Português (Nativo) · Inglês (Avançado) · Espanhol (Básico)',
        'about-h4-title':'Área de Interesse',
        'about-h4-sub':  'Backend Engineering & AI-powered Systems',

        'skills-label':       '// tecnologias',
        'skills-title':       'Stack & Ferramentas',
        'skills-advanced':    'Avançado',
        'skills-intermediate':'Intermédio',
        'skills-beginner':    'Iniciante',
        'skills-tools':       'Ferramentas',

        'exp-label':        '// trajetória',
        'exp-title':        'Experiência',
        'exp-mooddie-role': 'Software Developer',
        'exp-mooddie-date': 'Nov 2025 — Presente',
        'exp-mooddie-desc': 'Desenvolvimento e manutenção de uma aplicação web empresarial de grande escala com arquitetura legacy complexa. Foco principal em Java backend — otimização de queries de base de dados, scripting e manipulação de dados XML. Envolvido na integração frontend com HTML, XHTML e componentes React.',
        'exp-cgi-role':     'Estágio Profissional',
        'exp-cgi-date':     'Jun — Nov 2025',
        'exp-cgi-desc':     'Desenvolvimento e integração de uma API REST em .NET com Azure Cosmos DB, garantindo comunicação segura entre aplicações internas e armazenamento cloud. Participação na modelação de base de dados, definição de requisitos de escalabilidade, testes de integração e produção de documentação técnica.',
        'exp-ogma-role':    'Estágio Curricular',
        'exp-ogma-date':    '2020',
        'exp-ogma-desc':    'Desenvolvimento de uma solução de Business Intelligence em PowerBI para transformar dados empresariais em insights acionáveis. Criação de dashboards interativos com KPIs personalizados, integração de múltiplas fontes de dados e relatórios automáticos para diferentes departamentos.',

        'proj-label':       '// portfólio',
        'proj-title':       'Projetos',
        'proj-featured':    'Destaque',
        'proj-wip':         'Em Desenvolvimento',
        'proj-realestate-title': 'RealEstateAI',
        'proj-realestate-desc':  'Plataforma SaaS full-stack para o mercado imobiliário português com 135K+ imóveis. Chat com IA em linguagem natural — o Gemini gera queries PostgreSQL seguras e devolve property cards interativos. Mapa com clustering GPU (Deck.gl), dashboard analítico, gestão multi-tenant de empresas, importação via feed XML e autenticação JWT com controlo de acessos por função.',
        'proj-vuln-title':  'Vulnerability Intelligence Platform',
        'proj-vuln-desc':   'Pipeline automatizado que recolhe vulnerabilidades da API NVD da NIST, as classifica em categorias de produto com um LLM, e oferece uma interface web onde os utilizadores fazem queries em linguagem natural — o modelo converte cada pergunta em SQL e executa-a com validação de segurança.',
        'proj-azure-title': 'API .NET + Azure',
        'proj-azure-desc':  'REST API empresarial em .NET integrada com Azure Cosmos DB. Arquitetura moderna, comunicação segura entre serviços e preparada para escalar em ambientes enterprise.',
        'proj-powerbi-title':'PowerBI Dashboard',
        'proj-powerbi-desc':'Solução de BI para a OGMA com dashboards interativos, KPIs em tempo real e integração de múltiplas fontes de dados para suporte à decisão empresarial.',
        'proj-lp2-title':   'The Night of the Living Deisi',
        'proj-lp2-desc':    'Protótipo de jogo em Java desenvolvido na UC de LP2, explorando herança, polimorfismo e encapsulamento num ambiente lúdico com diagrama UML incluído.',
        'proj-aed-title':   'DeisiWorldMeter',
        'proj-aed-desc':    'Aplicação Java que processa dados demográficos globais a partir de ficheiros CSV (cidades, países, população) usando estruturas de dados da UC de AED.',

        'contact-label':  '// vamos conversar',
        'contact-title':  'Pronto para colaborar?',
        'contact-intro':  'Estou sempre aberto a novas oportunidades, projetos interessantes e boas conversas sobre tecnologia. Manda uma mensagem!',
        'contact-email':  'Email',
        'contact-linkedin':'Ver Perfil',
        'contact-github': 'Ver Repositórios',
        'contact-cv':     'Curriculum Vitae',
        'contact-cv-sub': 'Download PDF',

        'footer-text': 'Feito com 💜 por Rafael Silva · ',
        'footer-back': 'Voltar ao topo ↑',

        '_typewriter': ['Software Developer', 'Java Backend Dev', 'AI Enthusiast', 'Problem Solver']
    },
    en: {
        'nav-about':      'About',
        'nav-skills':     'Skills',
        'nav-experience': 'Experience',
        'nav-projects':   'Projects',
        'nav-contact':    'Contact',

        'hero-role-prefix':   "I'm a ",
        'hero-bio':           'Software Developer focused on Java backend, REST APIs and AI-powered systems. Building end-to-end solutions with real-world impact.',
        'hero-cta-primary':   'View Projects',
        'hero-cta-secondary': 'Get in touch',
        'scroll-hint':        'scroll',

        'about-label':   '// about me',
        'about-title':   'Who I am',
        'about-p1':      "I'm <strong>Rafael Silva</strong>, a Software Developer with a Bachelor's in Computer Engineering from Lusófona University. I currently work at <strong>Mooddie Digital</strong>, where I develop and maintain a large-scale enterprise web application with a focus on Java backend.",
        'about-p2':      'I have hands-on experience building end-to-end systems — from <strong>automated data pipelines</strong> and <strong>LLM integration</strong> to scalable REST APIs in the cloud. My passion lies in backend engineering and AI-powered applications.',
        'about-p3':      'Outside of code, the <strong>Scouts</strong> shaped how I collaborate and lead — values I bring to every project.',
        'about-h1-title':"Bachelor's in Computer Engineering",
        'about-h1-sub':  'Lusófona University · 2021–2025',
        'about-h2-title':'Software Developer @ Mooddie Digital',
        'about-h2-sub':  'Nov 2025 – Present',
        'about-h3-title':'Languages',
        'about-h3-sub':  'Portuguese (Native) · English (Advanced) · Spanish (Beginner)',
        'about-h4-title':'Main Interest',
        'about-h4-sub':  'Backend Engineering & AI-powered Systems',

        'skills-label':       '// technologies',
        'skills-title':       'Stack & Tools',
        'skills-advanced':    'Advanced',
        'skills-intermediate':'Intermediate',
        'skills-beginner':    'Beginner',
        'skills-tools':       'Tools',

        'exp-label':        '// journey',
        'exp-title':        'Experience',
        'exp-mooddie-role': 'Software Developer',
        'exp-mooddie-date': 'Nov 2025 — Present',
        'exp-mooddie-desc': 'Development and maintenance of a large-scale enterprise web application built on a complex legacy architecture. Primarily focused on Java backend — database query optimisation, scripting, and structured XML data manipulation. Also involved in frontend integration using HTML, XHTML, and React components.',
        'exp-cgi-role':     'Professional Internship',
        'exp-cgi-date':     'Jun — Nov 2025',
        'exp-cgi-desc':     'Developed and integrated a .NET REST API connected to Azure Cosmos DB, ensuring secure communication between internal applications and cloud storage. Participated in database modelling, defined scalability and performance requirements, conducted integration tests and produced technical documentation.',
        'exp-ogma-role':    'Curricular Internship',
        'exp-ogma-date':    '2020',
        'exp-ogma-desc':    'Developed a Business Intelligence solution in PowerBI to transform business data into actionable insights. Created interactive dashboards with custom KPIs, integrated multiple data sources and produced automated visual reports for different departments.',

        'proj-label':        '// portfolio',
        'proj-title':        'Projects',
        'proj-featured':     'Featured',
        'proj-wip':          'In Development',
        'proj-realestate-title': 'RealEstateAI',
        'proj-realestate-desc':  'Full-stack SaaS platform for the Portuguese real estate market with 135K+ listings. AI-powered natural language chat — Gemini generates safe PostgreSQL queries and returns interactive property cards. GPU-accelerated map with clustering (Deck.gl), analytics dashboard, multi-tenant company management, XML feed import, and JWT auth with role-based access control.',
        'proj-vuln-title':   'Vulnerability Intelligence Platform',
        'proj-vuln-desc':    'Automated pipeline that fetches vulnerability data from the NIST NVD API, classifies each entry into product categories using an LLM, and provides a web interface where users query the database in natural language — the model converts each question to SQL and executes it with input sanitisation.',
        'proj-azure-title':  '.NET API + Azure',
        'proj-azure-desc':   'Enterprise REST API in .NET integrated with Azure Cosmos DB. Modern architecture, secure inter-service communication, and built to scale in enterprise environments.',
        'proj-powerbi-title':'PowerBI Dashboard',
        'proj-powerbi-desc': 'BI solution for OGMA with interactive dashboards, real-time KPIs and multi-source data integration for business decision support.',
        'proj-lp2-title':    'The Night of the Living Deisi',
        'proj-lp2-desc':     'Java game prototype developed for the LP2 course, exploring inheritance, polymorphism and encapsulation in a playful environment — includes a full UML diagram.',
        'proj-aed-title':    'DeisiWorldMeter',
        'proj-aed-desc':     'Java application that processes global demographic data from CSV files (cities, countries, population) using data structures from the AED course.',

        'contact-label':   "// let's talk",
        'contact-title':   'Ready to collaborate?',
        'contact-intro':   "I'm always open to new opportunities, interesting projects and good conversations about tech. Drop me a message!",
        'contact-email':   'Email',
        'contact-linkedin':'View Profile',
        'contact-github':  'View Repositories',
        'contact-cv':      'Curriculum Vitae',
        'contact-cv-sub':  'Download PDF',

        'footer-text': 'Made with 💜 by Rafael Silva · ',
        'footer-back': 'Back to top ↑',

        '_typewriter': ['Software Developer', 'Java Backend Dev', 'AI Enthusiast', 'Problem Solver']
    }
};

/* ============================================================
   LANGUAGE
   ============================================================ */
let lang = localStorage.getItem('rs-lang') || 'pt';

function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    localStorage.setItem('rs-lang', l);

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const val = T[l]?.[key];
        if (val == null) return;
        if (val.includes('<')) el.innerHTML = val;
        else el.textContent = val;
    });

    document.getElementById('langText').textContent = l === 'pt' ? 'EN' : 'PT';

    // reset typewriter
    twStrings = T[l]['_typewriter'];
    resetTypewriter();
}

document.getElementById('langToggle').addEventListener('click', () => {
    applyLang(lang === 'pt' ? 'en' : 'pt');
});

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
});

(function trackRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(trackRing);
})();

document.querySelectorAll(
    'a, button, .bento-card, .contact-card, .highlight-card, .skill-tag, .social-link'
).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('expand'));
    el.addEventListener('mouseleave', () => ring.classList.remove('expand'));
});

/* ============================================================
   SCROLL PROGRESS + HEADER
   ============================================================ */
const progressBar = document.getElementById('scrollProgress');
const header      = document.getElementById('header');

window.addEventListener('scroll', () => {
    const st  = document.documentElement.scrollTop;
    const sh  = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (st / sh * 100) + '%';
    header.classList.toggle('scrolled', st > 50);
    highlightNav();
}, { passive: true });

function highlightNav() {
    const scrollY = window.scrollY + 100;
    document.querySelectorAll('section[id]').forEach(sec => {
        const top = sec.offsetTop;
        const id  = sec.getAttribute('id');
        if (scrollY >= top && scrollY < top + sec.offsetHeight) {
            document.querySelectorAll('.nav-link').forEach(a =>
                a.classList.toggle('active', a.getAttribute('href') === '#' + id)
            );
        }
    });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Staggered children
const childObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.reveal-child').forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 130);
        });
    });
}, { threshold: 0.05 });

document.querySelectorAll('.section').forEach(s => childObs.observe(s));

/* ============================================================
   TYPEWRITER
   ============================================================ */
let twStrings = T[lang]['_typewriter'];
let twIdx = 0, twChar = 0, twDeleting = false, twTimer;

function typeStep() {
    const el  = document.getElementById('typewriter');
    if (!el) return;
    const cur = twStrings[twIdx];

    if (twDeleting) {
        el.textContent = cur.slice(0, --twChar);
    } else {
        el.textContent = cur.slice(0, ++twChar);
    }

    let delay = twDeleting ? 55 : 95;

    if (!twDeleting && twChar === cur.length) {
        delay = 2200; twDeleting = true;
    } else if (twDeleting && twChar === 0) {
        twDeleting = false;
        twIdx = (twIdx + 1) % twStrings.length;
        delay = 380;
    }

    twTimer = setTimeout(typeStep, delay);
}

function resetTypewriter() {
    clearTimeout(twTimer);
    const el = document.getElementById('typewriter');
    if (el) el.textContent = '';
    twIdx = 0; twChar = 0; twDeleting = false;
    twTimer = setTimeout(typeStep, 900);
}

/* ============================================================
   3D CARD TILT
   ============================================================ */
document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r  = card.getBoundingClientRect();
        const x  = (e.clientX - r.left) / r.width  - 0.5;
        const y  = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
        card.style.transition = 'border-color .3s, box-shadow .3s, background .3s';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform .5s ease, border-color .3s, box-shadow .3s, background .3s';
    });
});

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('hamburger').classList.remove('open');
    });
});

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('mobileMenu').classList.toggle('open');
});

/* ============================================================
   FOOTER YEAR
   ============================================================ */
document.getElementById('footerYear').textContent = new Date().getFullYear();

/* ============================================================
   INIT
   ============================================================ */
applyLang(lang);
resetTypewriter();
