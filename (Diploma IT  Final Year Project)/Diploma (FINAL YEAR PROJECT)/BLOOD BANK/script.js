// JavaScript for sliding banner
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    let index = 0;

    function showSlide(n) {
        const slideWidth = slides.clientWidth;
        slides.style.transform = `translateX(-${slideWidth * n}px)`;
    }

    function nextSlide() {
        index = (index + 1) % slides.children.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + slides.children.length) % slides.children.length;
        showSlide(index);
    }

    // Set up automatic slide change
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Initial setup
    showSlide(index);
});
