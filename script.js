const carousel = document.querySelector('.carousel');
let rotateValue = 0;

function rotateCarousel() {
  rotateValue += 130;
  carousel.style.transform = `translateX(-${rotateValue}%)`;
}

setInterval(rotateCarousel, 3000); // Muda a cada 3 segundos
