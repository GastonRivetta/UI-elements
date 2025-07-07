const miniSlides = document.querySelectorAll('.carousel-slide-mini');
const miniIndicators = document.querySelectorAll('.slider-indicators-mini .indicator-mini');
let miniCurrent = 0;

function showMiniSlide(idx) {
  miniSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    miniIndicators[i].classList.toggle('active', i === idx);
  });
  miniCurrent = idx;
}

document.getElementById('prev-btn-mini').onclick = function() {
  if (miniCurrent > 0) {
    showMiniSlide(miniCurrent - 1);
  }
};
document.getElementById('next-btn-mini').onclick = function() {
  if (miniCurrent < miniSlides.length - 1) {
    showMiniSlide(miniCurrent + 1);
  }
};

// Initialize
showMiniSlide(0);