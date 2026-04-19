document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.querySelector('.btn-get-started');
    const nav = document.querySelector('.main-nav');

    // 1. Smooth Scroll Logic
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', (e) => {
            const targetId = getStartedBtn.getAttribute('href');
            
            // Check if it's an internal link
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, 
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // 2. Navbar Scroll Color Effect
    window.addEventListener('scroll', () => {
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.background = "rgba(0, 0, 0, 0.9)";
            } else {
                nav.style.background = "rgba(0, 0, 0, 0.5)";
            }
        }
    });
});