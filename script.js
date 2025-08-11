// Animar secciones al hacer scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('section, footer').forEach(sec => {
        let pos = sec.getBoundingClientRect().top;
        let win = window.innerHeight;
        if (pos < win - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});

// Efecto inicial
document.querySelectorAll('section, footer').forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.6s ease-out";
});

//Traducción
const translations = {
    es: {
    name: "Jordi Arbiol Mir",
    tagline: "Desarrollador de Software | Especialista en C#, Kotlin y SQL/PLSQL",
    "about-title": "Sobre mí",
    "about-text": "Soy un desarrollador con experiencia en aplicaciones móviles, videojuegos y backend, apasionado por crear soluciones creativas y eficientes. Aprendo rápidamente y me definen las palabras tranquilidad, esfuerzo y amabilidad. Me encanta hacer deporte, superarme a mí mismo, y soy un apasionado de la programación, el diseño y el dibujo.",
    "experience-title": "Experiencia",
    "job1-title": "Desarrollador Freelance",
    "job1-date": "2024 - Actualidad",
    "job1-desc": "Desarrollo de aplicaciones móviles y de escritorio personalizadas, además de videojuegos, participando en todo el proceso, desde la creación de sprites hasta la programación y el diseño.",
    "job2-title": "Helpdesk & Soporte Técnico en Audifilm Consulting SL",
    "job2-date": "2024 - Actualidad",
    "job2-desc": "Gestión de bases de datos SQL y programación en PL/SQL. También realizo Business Intelligence (BI) con el software ATLAS SBI. Atiendo incidencias técnicas y brindo soporte de software empresarial mediante herramientas de ticketing como Jira y llamadas telefónicas.",
    "skills-title": "Habilidades",
    "contact-title": "Contacto",
    "email": "startimeron@gmail.com",
    "phone": "650736658",
    "phone-label": "Teléfono:",
    },
    en: {
    name: "Jordi Arbiol Mir",
    tagline: "Software Developer | Specialist in C#, Kotlin, and SQL/PLSQL",
    "about-title": "About Me",
    "about-text": "I am a developer with experience in mobile apps, video games, and backend systems, passionate about creating creative and efficient solutions. I learn quickly and am defined by the values of calmness, dedication, and kindness. I enjoy sports, self-improvement, and I am passionate about programming, design, and drawing.",
    "experience-title": "Experience",
    "job1-title": "Freelance Developer",
    "job1-date": "2024 - Present",
    "job1-desc": "Develop customized mobile and desktop applications as well as video games, being involved in the entire process, from creating sprites to scripting and design.",
    "job2-title": "Helpdesk & Technical Support at Audifilm Consulting SL",
    "job2-date": "2024 - Present",
    "job2-desc": "Manage SQL databases and program in PL/SQL. Also perform Business Intelligence (BI) using ATLAS SBI software. Handle technical incidents and provide enterprise software support through ticketing tools like Jira and phone calls.",
    "skills-title": "Skills",
    "contact-title": "Contact",
    "email": "startimeron@gmail.com",
    "phone": "650736658",
    "phone-label": "Phone:",
    },
cat: {
    name: "Jordi Arbiol i Mir",
    tagline: "Desenvolupador de Software | Especialista en C#, Kotlin i SQL/PLSQL",
    "about-title": "Sobre mi",
    "about-text": "Sóc un desenvolupador amb experiència en aplicacions mòbils, videojocs i backend, apassionat per crear solucions creatives i eficients. Aprenc ràpidament i em defineixen les paraules tranquil·litat, esforç i amabilitat. M'encanta fer esport, superar-me i sóc apassionat de la programació, el disseny i el dibuix.",
    "experience-title": "Experiència",
    "job1-title": "Desenvolupador Freelance",
    "job1-date": "2024 - Actualitat",
    "job1-desc": "Desenvolupo aplicacions mòbils i d’escriptori personalitzades, així com videojocs, participant en tot el procés, des de la creació de sprites fins a la programació i el disseny.",
    "job2-title": "Helpdesk i Suport Tècnic a Audifilm Consulting SL",
    "job2-date": "2024 - Actualitat",
    "job2-desc": "Gestió de bases de dades SQL i programació en PL/SQL. També faig Business Intelligence (BI) amb el programari ATLAS SBI. Atenc incidències tècniques i ofereixo suport de programari empresarial a través d’eines de ticketing com Jira i trucades telefòniques.",
    "skills-title": "Habilitats",
    "contact-title": "Contacte",
    "email": "startimeron@gmail.com",
    "phone": "650736658",
    "phone-label": "Telèfon:",
    }
};

const langButtons = document.querySelectorAll('.lang-selector button');

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);

        // Cambiar el estilo activo
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

function changeLanguage(lang) {
    const langData = translations[lang];
    for (const id in langData) {
        const el = document.getElementById(id);
        if (!el) continue;

        // Para los enlaces especiales como email y URLs, actualizamos href además de texto
        if (id === 'email') {
            el.textContent = langData[id];
            el.href = `mailto:${langData[id]}`;
        } else if (id === 'linkedin' || id === 'github') {
            el.textContent = langData[id];
            el.href = `https://${langData[id]}`;
        } else {
            el.textContent = langData[id];
        }
    }
}

// Inicializar idioma español al cargar
changeLanguage('es');