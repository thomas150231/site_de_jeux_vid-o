const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
let index = 0;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateCarousel() {
    track.style.transform = `translateX(-${index * 400}px)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    if (index >= images.length) index = 0;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) index = images.length - 1;
    updateCarousel();
});
