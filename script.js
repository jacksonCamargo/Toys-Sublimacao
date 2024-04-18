// const carousel = document.querySelector('.carousel');
// let rotateValue = 0;

// function rotateCarousel() {
//   rotateValue += 130;
//   carousel.style.transform = `translateX(-${rotateValue}%)`;
 
// }
// setInterval(rotateCarousel, 3000); // Muda a cada 3 segundos
const carousel = document.querySelector('.carousel');
let rotateValue = 0;
const totalItems = document.querySelectorAll('.carousel .card').length;
let currentItem = 0;

function rotateCarousel() {
  currentItem++;
  if (currentItem >= totalItems) {
    currentItem = 0;
    rotateValue = 0;
  }
  rotateValue += 100 / totalItems;
  carousel.style.transform = `translateX(-${rotateValue}%)`;
}

setInterval(rotateCarousel, 3000);

