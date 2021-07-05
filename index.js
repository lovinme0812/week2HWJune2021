let position = 0;

const nextSlide = function () { 
  const jsCarousel = document.getElementById('jsCarousel');
  position -= 400;
  jsCarousel.style.transform = `translateX(${position}px)`;
}

const prevSlide = function () { 
  const jsCarousel = document.getElementById('jsCarousel');
  position += 400;
  jsCarousel.style.transform = `translateX(${position}px)`;
}