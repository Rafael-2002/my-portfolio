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
    card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const modal = document.getElementById(`modal-${projectId}`);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.cursor = 'pointer';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== MODAL CLOSE FUNCTIONALITY =====
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
});

// ===== CLOSE MODAL WHEN CLICKING OUTSIDE =====
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
});

// ===== CLOSE MODAL WITH ESCAPE KEY =====
document.addEventListener('keydown', function(e) {
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
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Enhanced project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    // Add ripple effect on click
    card.addEventListener('click', function(e) {
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
document.addEventListener('DOMContentLoaded', function() {
    const cvDownloadBtn = document.querySelector('.cv-download-btn');
    
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', function(e) {
            // Add visual feedback
            const originalText = this.querySelector('.cv-title').textContent;
            const titleElement = this.querySelector('.cv-title');
            
            // Check if file exists (basic check)
            fetch(this.href, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        titleElement.textContent = 'A transferir...';
                        setTimeout(() => {
                            titleElement.textContent = 'Transferido!';
                            setTimeout(() => {
                                titleElement.textContent = originalText;
                            }, 2000);
                        }, 500);
                    } else {
                        e.preventDefault();
                        titleElement.textContent = 'CV não encontrado';
                        titleElement.style.color = '#ff6b6b';
                        setTimeout(() => {
                            titleElement.textContent = originalText;
                            titleElement.style.color = '';
                        }, 3000);
                        
                        // Show alert with instructions
                        alert('CV não encontrado!\n\nPor favor:\n1. Adicione o ficheiro "Rafael_Silva_CV.pdf" na pasta "assets"\n2. Certifique-se de que o ficheiro está no formato PDF');
                    }
                })
                .catch(() => {
                    e.preventDefault();
                    titleElement.textContent = 'CV não disponível';
                    titleElement.style.color = '#ff6b6b';
                    setTimeout(() => {
                        titleElement.textContent = originalText;
                        titleElement.style.color = '';
                    }, 3000);
                });
        });
        
        // Add hover effect enhancement
        cvDownloadBtn.addEventListener('mouseenter', function() {
            this.querySelector('.cv-arrow').style.transform = 'translateY(5px)';
        });
        
        cvDownloadBtn.addEventListener('mouseleave', function() {
            this.querySelector('.cv-arrow').style.transform = 'translateY(0)';
        });
    }
});

// ===== CONTACT CARDS ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach((card, index) => {
        // Staggered animation on scroll
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.querySelector('.contact-card-icon').style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.querySelector('.contact-card-icon').style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
