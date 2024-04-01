let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar ou retroceder os slides
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Função para mostrar os slides
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  
  // Voltar ao primeiro slide se chegar ao último
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Esconder todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Mostrar o slide atual
  slides[slideIndex - 1].style.display = "block";  
}

// Automatizar a mudança de slide a cada 3 segundos (3000 milissegundos)
setInterval(function() {
  changeSlide(1);
}, 3000);

// ONMOUSE
function addShadow(element) {
  element.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.3)';
}

function removeShadow(element) {
  element.style.boxShadow = 'none';
}
