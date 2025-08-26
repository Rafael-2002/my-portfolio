// ===== TRANSLATION SYSTEM =====
const translations = {
    pt: {
        // Navigation
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-experience': 'Experiência',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contacto',

        // Hero Section
        'hero-subtitle': 'Engenheiro Informático & Developer',
        'hero-cta': 'Ver o Meu Trabalho',

        // About Section
        'about-title': 'Sobre Mim',
        'about-p1': 'Sou o Rafael Silva, 22 anos, licenciado em Engenharia Informática. Atualmente desempenho funções em estágio profissional na CGI, onde participo no desenvolvimento e integração de soluções tecnológicas.',
        'about-p2': 'A minha experiência nos Escoteiros contribuiu significativamente para o fortalecimento de competências como liderança, espírito de equipe e resiliência, que aplico no meu percurso académico e profissional.',
        'about-p3': 'Gosto de programação backend e tenho interesse em Inteligência Artificial. Tenho paixão por resolver problemas complexos e criar soluções inovadoras.',
        'about-card-title': 'Sempre Evoluindo',
        'about-card-text': 'Focado em crescimento profissional e aprendizagem contínua de novas tecnologias.',

        // Experience Section
        'experience-title': 'Experiência Profissional',

        // Projects Section
        'projects-title': 'Os Meus Projetos',

        // Contact Section
        'contact-title': 'Vamos Trabalhar Juntos?',
        'contact-intro': 'Estou sempre aberto a novas oportunidades e desafios interessantes. Como jovem profissional em início de carreira, procuro projetos onde possa aplicar e expandir os meus conhecimentos em desenvolvimento e tecnologia.',
        'cv-title': 'Transferir CV',
        'cv-subtitle': 'Curriculum Vitae completo',
        'contact-email-title': 'Email',
        'contact-email-desc': 'Para oportunidades profissionais e colaborações',
        'contact-linkedin-title': 'LinkedIn',
        'contact-linkedin-desc': 'Conecte-se comigo profissionalmente',
        'contact-linkedin-link': 'Ver Perfil LinkedIn',
        'contact-github-title': 'GitHub',
        'contact-github-desc': 'Explore os meus projetos e código',
        'contact-github-link': 'Ver Repositórios',

        // Footer
        'footer-text': 'Feito por Rafael Silva ❤️',

        // CV Download Messages
        'cv-downloading': 'A transferir...',
        'cv-downloaded': 'Transferido!',
        'cv-not-found': 'CV não encontrado',
        'cv-not-available': 'CV não disponível',
        'cv-alert': 'CV não encontrado!\n\nPor favor:\n1. Adicione o ficheiro "Rafael_Silva_CV.pdf" na pasta "assets"\n2. Certifique-se de que o ficheiro está no formato PDF',

        // Projects
        'project-vuln-title': 'Sistema de Classificação de Vulnerabilidades',
        'project-vuln-desc': 'Desenvolvimento de um website em Django com integração de um modelo de Inteligência Artificial para classificação automática de vulnerabilidades e atribuição de severidade.',
        'project-powerbi-title': 'Dashboard PowerBI - OGMA',
        'project-powerbi-desc': 'Aplicação completa para transformação de dados empresariais em insights acionáveis, com dashboards interativos e monitorização em tempo real.',
        'project-azure-title': 'API .NET com Azure',
        'project-azure-desc': 'Desenvolvimento e integração de API robusta em .NET com Azure Cosmos DB, focada em escalabilidade e performance para ambientes empresariais.',
        'project-lp2-title': 'Projeto LP2 — The Night of the Living Deisi',
        'project-lp2-desc': 'Jogo desenvolvido em Java no âmbito da unidade curricular de Linguagens de Programação 2, com foco em orientação a objetos, herança e modularidade.',
        'project-aed-title': 'Projeto AED — DeisiWorldMeter',
        'project-aed-desc': 'Aplicação Java educativa que processa dados demográficos (cidades, países, população) e fornece visualizações/interações baseadas em filas.',

        // Modal translations
        'github-btn': 'Ver no GitHub',
        'modal-description': 'Descrição:',
        'modal-objective': 'Objetivo:',
        'modal-features': 'Principais Funcionalidades:',
        'modal-innovation': 'Inovação e Impacto:',
        'modal-context': 'Contexto:',
        'modal-solution': 'Solução desenvolvida:',
        'modal-responsibilities': 'Principais responsabilidades:',
        'modal-structure': 'Estrutura do Projeto:',
        'modal-components': 'Componentes do Projeto:',
        'modal-extra-resources': 'Recursos Extra:',

        // Vulnerability Modal
        'modal-vuln-title': 'Sistema de Classificação de Vulnerabilidades',
        'modal-vuln-desc': 'Este projeto representa o culminar da minha formação académica e consistiu no desenvolvimento de uma solução inovadora para monitorização e classificação automática de vulnerabilidades de segurança informática.',
        'modal-vuln-objective': 'Criar uma aplicação web que integra Automação Inteligente de Processos (IPA) com Modelos de Linguagem (LLM), permitindo a recolha contínua de vulnerabilidades da API oficial do NVD, a sua categorização automática e a disponibilização de dashboards interativos para equipas de segurança.',
        'modal-vuln-feature1': 'Extração automatizada de vulnerabilidades diretamente da API oficial do NVD',
        'modal-vuln-feature2': 'Classificação inteligente com IA, utilizando um LLM para atribuição automática de categorias',
        'modal-vuln-feature3': 'Consultas em linguagem natural, como: "Quais são as vulnerabilidades críticas deste mês?"',
        'modal-vuln-feature4': 'Dashboard interativo com estatísticas, evolução temporal e categorias mais afetadas',
        'modal-vuln-feature5': 'Armazenamento em base de dados relacional para histórico e análises detalhadas',
        'modal-vuln-feature6': 'Sistema de início de sessão e personalização de preferências para relatórios adaptados ao utilizador',
        'modal-vuln-innovation': 'Esta solução destaca-se pela sua proatividade, escalabilidade e custo-eficiência, oferecendo às organizações uma alternativa acessível às plataformas comerciais de cibersegurança. Automatiza tarefas repetitivas e morosas, ao mesmo tempo que apoia a tomada de decisão estratégica, libertando equipas técnicas para atividades de maior valor acrescentado.',

        // PowerBI Modal
        'modal-powerbi-title': 'Dashboard PowerBI - OGMA',
        'modal-powerbi-internship': 'Estágio Curricular - OGMA (2020)',
        'modal-powerbi-intro': 'Durante o meu estágio curricular na OGMA, desenvolvi uma solução completa de Business Intelligence para transformar dados empresariais em insights acionáveis.',
        'modal-powerbi-context': 'A empresa necessitava de uma forma mais eficaz de monitorizar performance e tomar decisões baseadas em dados em tempo real.',
        'modal-powerbi-solution': '• Criação de dashboards interativos com indicadores de desempenho (KPIs) personalizados<br>• Integração de múltiplas fontes de dados empresariais<br>• Monitorização em tempo real de métricas críticas de negócio<br>• Modelação de dados para garantir qualidade e consistência da informação<br>• Relatórios visuais automatizados para diferentes departamentos<br>• Interface intuitiva para utilizadores não técnicos',
        'modal-powerbi-result': 'O projeto resultou numa significativa melhoria na capacidade de análise e tomada de decisão da empresa, permitindo identificar tendências e oportunidades de otimização que antes não eram visíveis.',

        // Azure Modal
        'modal-azure-title': 'API .NET com Azure Cosmos DB',
        'modal-azure-internship': 'Estágio Profissional - CGI Group (2025-Presente)',
        'modal-azure-intro': 'Como parte do meu estágio profissional na CGI Group, estou envolvido no desenvolvimento e integração de uma API robusta em .NET com Azure Cosmos DB.',
        'modal-azure-objective': 'Criar uma solução escalável e performante para comunicação segura entre aplicações e base de dados na cloud, adequada para ambientes empresariais de grande escala.',
        'modal-azure-responsibilities': '• Desenvolvimento de API RESTful em .NET com arquitetura moderna<br>• Integração com Azure Cosmos DB para armazenamento NoSQL de alta performance<br>• Garantia de comunicação segura entre aplicações e base de dados<br>• Colaboração na modelação da base de dados otimizada para escalabilidade<br>• Definição de requisitos de performance para suportar operações empresariais<br>• Implementação de testes funcionais e de integração<br>• Documentação técnica detalhada para equipas internas',
        'modal-azure-impact': 'Este projeto permite-me aplicar conhecimentos de cloud computing, arquitetura de microservices e desenvolvimento enterprise-grade, contribuindo para soluções que impactam diretamente as operações de grandes empresas.',

        // LP2 Modal
        'modal-lp2-title': 'Projeto LP2 — The Night of the Living Deisi',
        'modal-lp2-desc': 'Protótipo de jogo em Java desenvolvido no âmbito da unidade curricular de Linguagens de Programação II. O projeto explora conceitos fundamentais de programação orientada a objetos, como herança, encapsulamento e polimorfismo, aplicados num ambiente lúdico.',
        'modal-lp2-structure1': '<strong>Tabuleiro</strong>: classe principal que gere jogadores, equipamentos e portas.',
        'modal-lp2-structure2': '<strong>Jogador</strong>: classe base com subclasses como <em>Zombie</em> e <em>Adulto</em>.',
        'modal-lp2-structure3': '<strong>Equipamento</strong>: inclui itens como <em>Escudo</em> e <em>Espada</em>.',
        'modal-lp2-structure4': '<strong>Porta</strong>: funciona como <em>Safe Haven</em>, protegendo os jogadores que entram nela.',
        'modal-lp2-structure5': '<strong>Diagrama UML</strong>: representa a estrutura e relações entre classes.',
        'modal-lp2-extra': 'O repositório inclui um diagrama UML e um <a href="https://youtu.be/b_oXaFSem04" target="_blank">vídeo demonstrativo no YouTube</a>.',

        // AED Modal
        'modal-aed-title': 'Projeto AED — DeisiWorldMeter',
        'modal-aed-desc': 'Projeto académico desenvolvido em Java na disciplina de Algoritmos e Estruturas de Dados (AED), com foco no tratamento e visualização de dados demográficos provenientes de ficheiros CSV.',
        'modal-aed-component1': 'Leitura e processamento de ficheiros CSV: <code>cidades.csv</code>, <code>paises.csv</code>, <code>populacao.csv</code>.',
        'modal-aed-component2': 'Classe principal na estrutura `src/pt/ulusofona/aed/deisiworldmeter` que provavelmente implementa estruturas como filas ou listas encadeadas (AED).',
        'modal-aed-component3': 'Objetivo: cálculo, visualização ou manipulação de dados populacionais e demográficos.',
        'modal-aed-component4': '<strong>Demo em vídeo:</strong> disponível no YouTube.',
        'modal-aed-extra': 'Demonstração em vídeo: <a href="https://youtu.be/7SM6i9sqWx0" target="_blank">Ver no YouTube</a>.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-subtitle': 'Computer Engineer & Developer',
        'hero-cta': 'View My Work',

        // About Section
        'about-title': 'About Me',
        'about-p1': 'I am Rafael Silva, 22 years old, graduated in Computer Engineering. I am currently working as a professional intern at CGI, where I participate in the development and integration of technological solutions.',
        'about-p2': 'My experience in Scouting contributed significantly to strengthening skills such as leadership, teamwork and resilience, which I apply in my academic and professional journey.',
        'about-p3': 'I enjoy backend programming and have an interest in Artificial Intelligence. I have a passion for solving complex problems and creating innovative solutions.',
        'about-card-title': 'Always Evolving',
        'about-card-text': 'Focused on professional growth and continuous learning of new technologies.',

        // Experience Section
        'experience-title': 'Professional Experience',

        // Projects Section
        'projects-title': 'My Projects',

        // Contact Section
        'contact-title': 'Let\'s Work Together?',
        'contact-intro': 'I am always open to new opportunities and interesting challenges. As a young professional starting my career, I look for projects where I can apply and expand my knowledge in development and technology.',
        'cv-title': 'Download CV',
        'cv-subtitle': 'Complete Curriculum Vitae',
        'contact-email-title': 'Email',
        'contact-email-desc': 'For professional opportunities and collaborations',
        'contact-linkedin-title': 'LinkedIn',
        'contact-linkedin-desc': 'Connect with me professionally',
        'contact-linkedin-link': 'View LinkedIn Profile',
        'contact-github-title': 'GitHub',
        'contact-github-desc': 'Explore my projects and code',
        'contact-github-link': 'View Repositories',

        // Footer
        'footer-text': 'Made by Rafael Silva ❤️',

        // CV Download Messages
        'cv-downloading': 'Downloading...',
        'cv-downloaded': 'Downloaded!',
        'cv-not-found': 'CV not found',
        'cv-not-available': 'CV not available',
        'cv-alert': 'CV not found!\n\nPlease:\n1. Add the file "Rafael_Silva_CV.pdf" to the "assets" folder\n2. Make sure the file is in PDF format',

        // Projects
        'project-vuln-title': 'Vulnerability Classification System',
        'project-vuln-desc': 'Development of a Django website with integration of an Artificial Intelligence model for automatic vulnerability classification and severity assignment.',
        'project-powerbi-title': 'PowerBI Dashboard - OGMA',
        'project-powerbi-desc': 'Complete application for transforming business data into actionable insights, with interactive dashboards and real-time monitoring.',
        'project-azure-title': '.NET API with Azure',
        'project-azure-desc': 'Development and integration of robust .NET API with Azure Cosmos DB, focused on scalability and performance for enterprise environments.',
        'project-lp2-title': 'LP2 Project — The Night of the Living Deisi',
        'project-lp2-desc': 'Java game developed within the Programming Languages 2 course, focusing on object-oriented programming, inheritance and modularity.',
        'project-aed-title': 'AED Project — DeisiWorldMeter',
        'project-aed-desc': 'Educational Java application that processes demographic data (cities, countries, population) and provides queue-based visualizations/interactions.',

        // Modal translations
        'github-btn': 'View on GitHub',
        'modal-description': 'Description:',
        'modal-objective': 'Objective:',
        'modal-features': 'Main Features:',
        'modal-innovation': 'Innovation and Impact:',
        'modal-context': 'Context:',
        'modal-solution': 'Developed solution:',
        'modal-responsibilities': 'Main responsibilities:',
        'modal-structure': 'Project Structure:',
        'modal-components': 'Project Components:',
        'modal-extra-resources': 'Extra Resources:',

        // Vulnerability Modal
        'modal-vuln-title': 'Vulnerability Classification System',
        'modal-vuln-desc': 'This project represents the culmination of my academic training and consisted of developing an innovative solution for monitoring and automatic classification of computer security vulnerabilities.',
        'modal-vuln-objective': 'Create a web application that integrates Intelligent Process Automation (IPA) with Language Models (LLM), enabling continuous collection of vulnerabilities from the official NVD API, their automatic categorization and provision of interactive dashboards for security teams.',
        'modal-vuln-feature1': 'Automated extraction of vulnerabilities directly from the official NVD API',
        'modal-vuln-feature2': 'Intelligent classification with AI, using an LLM for automatic category assignment',
        'modal-vuln-feature3': 'Natural language queries, such as: "What are the critical vulnerabilities this month?"',
        'modal-vuln-feature4': 'Interactive dashboard with statistics, temporal evolution and most affected categories',
        'modal-vuln-feature5': 'Storage in relational database for history and detailed analysis',
        'modal-vuln-feature6': 'Login system and preference customization for user-adapted reports',
        'modal-vuln-innovation': 'This solution stands out for its proactivity, scalability and cost-efficiency, offering organizations an accessible alternative to commercial cybersecurity platforms. It automates repetitive and time-consuming tasks, while supporting strategic decision-making, freeing technical teams for higher value-added activities.',

        // PowerBI Modal
        'modal-powerbi-title': 'PowerBI Dashboard - OGMA',
        'modal-powerbi-internship': 'Curricular Internship - OGMA (2020)',
        'modal-powerbi-intro': 'During my curricular internship at OGMA, I developed a complete Business Intelligence solution to transform business data into actionable insights.',
        'modal-powerbi-context': 'The company needed a more effective way to monitor performance and make data-driven decisions in real time.',
        'modal-powerbi-solution': '• Creation of interactive dashboards with personalized performance indicators (KPIs)<br>• Integration of multiple business data sources<br>• Real-time monitoring of critical business metrics<br>• Data modeling to ensure information quality and consistency<br>• Automated visual reports for different departments<br>• Intuitive interface for non-technical users',
        'modal-powerbi-result': 'The project resulted in a significant improvement in the company\'s analysis and decision-making capacity, allowing identification of trends and optimization opportunities that were not previously visible.',

        // Azure Modal
        'modal-azure-title': '.NET API with Azure Cosmos DB',
        'modal-azure-internship': 'Professional Internship - CGI Group (2025-Present)',
        'modal-azure-intro': 'As part of my professional internship at CGI Group, I am involved in the development and integration of a robust .NET API with Azure Cosmos DB.',
        'modal-azure-objective': 'Create a scalable and performant solution for secure communication between applications and cloud database, suitable for large-scale enterprise environments.',
        'modal-azure-responsibilities': '• Development of RESTful API in .NET with modern architecture<br>• Integration with Azure Cosmos DB for high-performance NoSQL storage<br>• Ensuring secure communication between applications and database<br>• Collaboration in database modeling optimized for scalability<br>• Definition of performance requirements to support business operations<br>• Implementation of functional and integration tests<br>• Detailed technical documentation for internal teams',
        'modal-azure-impact': 'This project allows me to apply knowledge of cloud computing, microservices architecture and enterprise-grade development, contributing to solutions that directly impact the operations of large companies.',

        // LP2 Modal
        'modal-lp2-title': 'LP2 Project — The Night of the Living Deisi',
        'modal-lp2-desc': 'Java game prototype developed within the Programming Languages II course. The project explores fundamental object-oriented programming concepts such as inheritance, encapsulation and polymorphism, applied in a playful environment.',
        'modal-lp2-structure1': '<strong>Board</strong>: main class that manages players, equipment and doors.',
        'modal-lp2-structure2': '<strong>Player</strong>: base class with subclasses like <em>Zombie</em> and <em>Adult</em>.',
        'modal-lp2-structure3': '<strong>Equipment</strong>: includes items like <em>Shield</em> and <em>Sword</em>.',
        'modal-lp2-structure4': '<strong>Door</strong>: works as <em>Safe Haven</em>, protecting players who enter it.',
        'modal-lp2-structure5': '<strong>UML Diagram</strong>: represents the structure and relationships between classes.',
        'modal-lp2-extra': 'The repository includes a UML diagram and a <a href="https://youtu.be/b_oXaFSem04" target="_blank">demonstration video on YouTube</a>.',

        // AED Modal
        'modal-aed-title': 'AED Project — DeisiWorldMeter',
        'modal-aed-desc': 'Academic project developed in Java in the Algorithms and Data Structures (AED) discipline, focusing on the treatment and visualization of demographic data from CSV files.',
        'modal-aed-component1': 'Reading and processing CSV files: <code>cidades.csv</code>, <code>paises.csv</code>, <code>populacao.csv</code>.',
        'modal-aed-component2': 'Main class in the structure `src/pt/ulusofona/aed/deisiworldmeter` that probably implements structures like queues or linked lists (AED).',
        'modal-aed-component3': 'Objective: calculation, visualization or manipulation of population and demographic data.',
        'modal-aed-component4': '<strong>Video demo:</strong> available on YouTube.',
        'modal-aed-extra': 'Video demonstration: <a href="https://youtu.be/7SM6i9sqWx0" target="_blank">Watch on YouTube</a>.'
    }
};

let currentLanguage = 'pt';

function translatePage(lang) {
    currentLanguage = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML for elements that contain HTML tags, textContent for others
            if (translations[lang][key].includes('<') || translations[lang][key].includes('&')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update language toggle
    const langToggle = document.querySelector('.lang-toggle');
    const langOptions = document.querySelectorAll('.lang-option');

    // Remove active class from all options
    langOptions.forEach(option => option.classList.remove('active'));

    if (lang === 'pt') {
        langToggle.classList.remove('en');
        document.querySelector('[data-lang="pt"]').classList.add('active');
        document.documentElement.lang = 'pt';
    } else {
        langToggle.classList.add('en');
        document.querySelector('[data-lang="en"]').classList.add('active');
        document.documentElement.lang = 'en';
    }

    // Update page title and meta
    if (lang === 'en') {
        document.title = 'Rafael Silva - Computer Engineer & Developer';
        document.querySelector('meta[name="description"]').content = 'Rafael Silva - Computer Engineer & Developer specialized in .NET, Python, Azure and Machine Learning';
        document.querySelector('meta[property="og:description"]').content = 'Computer Engineer & Developer';
    } else {
        document.title = 'Rafael Silva - Engenheiro Informático & Developer';
        document.querySelector('meta[name="description"]').content = 'Rafael Silva - Engenheiro Informático & Developer especializado em .NET, Python, Azure e Machine Learning';
        document.querySelector('meta[property="og:description"]').content = 'Engenheiro Informático & Developer';
    }

    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize language system
document.addEventListener('DOMContentLoaded', function () {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferred-language') || 'pt';
    translatePage(savedLang);

    // Add language toggle functionality
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');
            if (selectedLang !== currentLanguage) {
                translatePage(selectedLang);
            }
        });
    });
});

// ===== ANIMATED PARTICLES BACKGROUND =====
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const delay = Math.random() * 6;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDelay = delay + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.2;

        container.appendChild(particle);
    }
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== HEADER BACKGROUND ON SCROLL =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 15, 35, 0.9)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// ===== FADE IN ANIMATION ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===== PROJECT CARDS MODAL FUNCTIONALITY =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        const modal = document.getElementById(`modal-${projectId}`);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });

    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.cursor = 'pointer';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== MODAL CLOSE FUNCTIONALITY =====
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
});

// ===== CLOSE MODAL WHEN CLICKING OUTSIDE =====
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
});

// ===== CLOSE MODAL WITH ESCAPE KEY =====
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// ===== INITIALIZE PARTICLES =====
createParticles();

// ===== RECREATE PARTICLES ON RESIZE =====
window.addEventListener('resize', () => {
    document.getElementById('particles').innerHTML = '';
    createParticles();
});

// ===== ADDITIONAL SMOOTH ANIMATIONS =====
// Add loading animation
document.addEventListener('DOMContentLoaded', function () {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Enhanced project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    // Add ripple effect on click
    card.addEventListener('click', function (e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(0, 245, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== CV DOWNLOAD FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function () {
    const cvDownloadBtn = document.querySelector('.cv-download-btn');

    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', function (e) {
            // Add visual feedback
            const originalText = this.querySelector('.cv-title').textContent;
            const titleElement = this.querySelector('.cv-title');

            // Check if file exists (basic check)
            fetch(this.href, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        titleElement.textContent = translations[currentLanguage]['cv-downloading'];
                        setTimeout(() => {
                            titleElement.textContent = translations[currentLanguage]['cv-downloaded'];
                            setTimeout(() => {
                                titleElement.textContent = originalText;
                            }, 2000);
                        }, 500);
                    } else {
                        e.preventDefault();
                        titleElement.textContent = translations[currentLanguage]['cv-not-found'];
                        titleElement.style.color = '#ff6b6b';
                        setTimeout(() => {
                            titleElement.textContent = originalText;
                            titleElement.style.color = '';
                        }, 3000);

                        // Show alert with instructions
                        alert(translations[currentLanguage]['cv-alert']);
                    }
                })
                .catch(() => {
                    e.preventDefault();
                    titleElement.textContent = translations[currentLanguage]['cv-not-available'];
                    titleElement.style.color = '#ff6b6b';
                    setTimeout(() => {
                        titleElement.textContent = originalText;
                        titleElement.style.color = '';
                    }, 3000);
                });
        });

        // Add hover effect enhancement
        cvDownloadBtn.addEventListener('mouseenter', function () {
            this.querySelector('.cv-arrow').style.transform = 'translateY(5px)';
        });

        cvDownloadBtn.addEventListener('mouseleave', function () {
            this.querySelector('.cv-arrow').style.transform = 'translateY(0)';
        });
    }
});

// ===== CONTACT CARDS ANIMATION =====
document.addEventListener('DOMContentLoaded', function () {
    const contactCards = document.querySelectorAll('.contact-card');

    contactCards.forEach((card, index) => {
        // Staggered animation on scroll
        card.style.animationDelay = `${index * 0.1}s`;

        // Enhanced hover effects
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.querySelector('.contact-card-icon').style.transform = 'scale(1.2) rotate(10deg)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
            this.querySelector('.contact-card-icon').style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
