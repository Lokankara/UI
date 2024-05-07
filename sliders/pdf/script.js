let currentSlide = 0;
const slides = document.querySelectorAll('.slides embed');

function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
  currentSlide += n;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);
