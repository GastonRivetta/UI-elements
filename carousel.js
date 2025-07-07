const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.slider-indicators .indicator');
let current = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    indicators[i].classList.toggle('active', i === idx);
  });
  current = idx;
}

document.getElementById('prev-btn').onclick = function() {
  if (current > 0) {
    showSlide(current - 1);
  }
};
document.getElementById('next-btn').onclick = function() {
  if (current < slides.length - 1) {
    showSlide(current + 1);
  }
};

// Initialize
showSlide(0);

document.getElementById('dropdownMenuBtn').onclick = function(e) {
  e.stopPropagation(); // Prevent immediate close
  var btn = this;
  var content = document.getElementById('dropdownContent');
  var isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
  btn.classList.toggle('pressed', !isOpen);
};

// Optional: close dropdown when clicking outside
document.addEventListener('click', function(e) {
  var btn = document.getElementById('dropdownMenuBtn');
  var content = document.getElementById('dropdownContent');
  if (!btn.contains(e.target) && !content.contains(e.target)) {
    content.style.display = 'none';
    btn.classList.remove('pressed');
  }
});