// ==================== DARK MODE ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
} else if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
}

// Alternar tema e salvar no localStorage
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// ==================== MENU HAMBURGUER ====================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link (opcional)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== MOCK DATA (Banco de Dados de Notícias) ====================
const newsData = [
    {
        id: 1,
        title: "Juventude Rural e Ações Climáticas: O despertar climático dos jovens do campo",
        excerpt: "A juventude rural passou a perceber os efeitos das mudanças climáticas na agricultura e na vida das comunidades, buscando formas de proteger a natureza.",
        category: "Clima",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
        date: "14 Mar 2025",
        readTime: "5 min"
    },
    {
        id: 2,
        title: "Festival Nacional da Juventude Rural: Protagonismo e sustentabilidade",
        excerpt: "O evento reúne jovens do campo de várias regiões do Brasil para discutir agricultura, educação, cultura, sustentabilidade e direitos da juventude rural.",
        category: "Eventos",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
        date: "10 Mar 2025",
        readTime: "4 min"
    },
    {
        id: 3,
        title: "Campanha Nacional de Enfrentamento à Violência no Campo",
        excerpt: "A campanha defende os direitos humanos, a proteção da terra e do meio ambiente, denunciando casos de violência e desigualdade no campo.",
        category: "Direitos",
        image: "https://images.unsplash.com/photo-1593113630400-ea4288462a22?w=600&h=400&fit=crop",
        date: "05 Mar 2025",
        readTime: "6 min"
    },
    {
        id: 4,
        title: "Agricultura Sustentável: Práticas para o futuro do planeta",
        excerpt: "A agricultura sustentável promove o uso responsável dos recursos naturais, incentivando rotação de culturas, redução de agrotóxicos e preservação da biodiversidade.",
        category: "Sustentabilidade",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
        date: "28 Fev 2025",
        readTime: "7 min"
    },
    {
        id: 5,
        title: "Êxodo Rural: Desafios e oportunidades para a nova geração",
        excerpt: "O movimento de pessoas que deixam o campo para viver nas cidades em busca de melhores condições, analisando causas e consequências.",
        category: "Sociedade",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
        date: "22 Fev 2025",
        readTime: "5 min"
    },
    {
        id: 6,
        title: "A Força dos Jovens na Construção de um Futuro Sustentável",
        excerpt: "Os jovens do campo unem conhecimento, inovação e responsabilidade ambiental para garantir qualidade de vida para as gerações presentes e futuras.",
        category: "Protagonismo",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&h=400&fit=crop",
        date: "18 Fev 2025",
        readTime: "8 min"
    }
];

// ==================== RENDERIZAR NOTÍCIAS DINAMICAMENTE ====================
const newsGrid = document.getElementById('newsGrid');

function renderNews() {
    if (!newsGrid) return;
    
    newsGrid.innerHTML = newsData.map(news => `
        <article class="news-card">
            <img src="${news.image}" alt="${news.title}" class="news-img" loading="lazy">
            <div class="news-content">
                <span class="news-category">${news.category}</span>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                <div class="news-meta">
                    <span><i class="far fa-calendar-alt"></i> ${news.date}</span>
                    <span><i class="far fa-clock"></i> ${news.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Inicializar renderização
renderNews();

// ==================== ANIMAÇÃO DE SCROLL SUAVE ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== "#" && href !== "") {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ==================== BOTÃO DE BUSCA (exemplo simples) ====================
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        alert('🔍 Funcionalidade de busca em desenvolvimento. Em breve você poderá pesquisar notícias sobre juventude rural e ações climáticas!');
    });
}

// ==================== NEWSLETTER FORM (simulação) ====================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        if (input.value.trim() !== '') {
            alert(`Obrigado pelo interesse, ${input.value}! Você receberá nossas novidades.`);
            input.value = '';
        } else {
            alert('Por favor, insira um e-mail válido.');
        }
    });
}

// Pequeno efeito de fade-in ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
