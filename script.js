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

// cliks para direcionar ao mercado livre
let clicks = 0;
const meuLink = document.getElementById("meuLink");

meuLink.addEventListener("click", function(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  
  clicks++;

  if (clicks === 2) {
    window.location.href = "https://produto.mercadolivre.com.br/MLB-2860503012-camisa-personalizada-_JM";
  }
});
