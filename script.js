let currentSlide = 0;

function showAlert() {
    alert('Explore the latest updates and features of Call of Duty!');
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const slideWidth = document.querySelector('.carousel-item').offsetWidth;
    carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
