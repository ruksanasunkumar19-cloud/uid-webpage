const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let current = 0;

function updateSlides(index) {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
}

// Manual movement only
nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateSlides(current);
});

prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides(current);
});