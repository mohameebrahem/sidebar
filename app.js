const images = Array.from(document.querySelectorAll('.slider-container img'));
const slideNumber = document.querySelector('.slide-number');
const indicatorsContainer = document.querySelector('.indicators');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicators = document.createElement('ul');
let count = images.length;
let currentIndex = 1;

indicatorsContainer.appendChild(indicators);
for (let i = 1; i <= images.length; i++) {
  const indicatorli = document.createElement('li');
  indicatorli.textContent = i;
  indicators.appendChild(indicatorli);
}
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
function next() {
  if (nextBtn.classList.contains('disabled')) {
    return false;
  } else {
    currentIndex++;
    theChecker();
  }
}
function prev() {
  if (prevBtn.classList.contains('disabled')) {
    return false;
  } else {
    currentIndex--;
    theChecker();
  }
}
function theChecker() {
  removeActive();
  slideNumber.textContent = `#${currentIndex} From ${count}`;
  images[currentIndex - 1].classList.add('active');

  indicators.children[currentIndex - 1].classList.add('active');
  if (currentIndex == 1) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }
  if (currentIndex == count) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
}
theChecker();
function removeActive() {
  images.forEach((img) => {
    img.classList.remove('active');
    Array.from(indicators.children).forEach((ind) => {
      ind.classList.remove('active');
    });
  });
}

let bullets = Array.from(indicators.children);

for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = () => {
    currentIndex = i + 1;

    theChecker();
  };
}
