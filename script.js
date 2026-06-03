// Script para funcionalidades do site

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            updateActiveNav();
        }
    });
});

// Atualizar link ativo na navegação
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNav();

    // Efeito de fade-in nas seções
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
});

// Adicionar animação CSS para fade-in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Menu mobile responsivo (para futuras expansões)
function setupMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');

    // Adicionar suporte para menu hambúrguer se necessário
    if (window.innerWidth <= 768) {
        // Implementar lógica mobile aqui se necessário
    }
}

window.addEventListener('resize', setupMobileMenu);
setupMobileMenu();