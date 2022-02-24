//Preloader

window.addEventListener('load', function () {
  var preload = document.querySelector('.loaderBg');
  var name = document.querySelector('.content h1');
  var job = document.querySelector('.content h6');
  var arrow = document.querySelector('.arrows');

  // fading the load circle
  preload.classList.add('finish-loading');
  document.body.style.overflow = 'auto';
  setTimeout(function () {
    preload.classList.remove('loaderBg');
  }, 500);

  //smooth display
  setTimeout(function () {
    name.classList.add('smooth-display');
  }, 400);

  setTimeout(function () {
    job.classList.add('smooth-display');
  }, 800);

  setTimeout(function () {
    arrow.classList.add('smooth-display');
  }, 1200);
});

//scroll down arrow
var arrow = document.querySelector('.arrows');
var portfolio = document.querySelector('#portfolio');
var portfolioOffset = portfolio.offsetTop;

arrow.addEventListener('click', function () {
  window.scrollTo({ top: portfolioOffset, behavior: 'smooth' });
});

//Buttons wave effect
var buttons = document.querySelectorAll('.button, .about a');

function generateRipples(e, element) {
  var x = e.offsetX;
  var y = e.offsetY;

  var waves = document.createElement('span');
  waves.style.left = x + 'px';
  waves.style.top = y + 'px';
  element.appendChild(waves);
}

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    generateRipples(e, this);
  });
});

// Fading Page Elements
var disappeared = document.querySelectorAll('.disappeared');
fadeinPosition = window.innerHeight;

disappeared.forEach(function (element) {
  window.addEventListener('scroll', function () {
    var elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < fadeinPosition) {
      element.classList.add('fadein');
    }
  });
});

var bars = document.querySelectorAll('.progress-bar');

bars.forEach(function (element) {
  var barClass = element.dataset.progress;

  window.addEventListener('scroll', function () {
    var elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < fadeinPosition) {
      element.classList.add(barClass);
    }
  });
});

//Scroll to Top
var arrow = document.querySelector('.arrow');

window.addEventListener('scroll', function () {
  arrow.classList.toggle('active', window.scrollY > 500);
});

arrow.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

var header = document.querySelector('header');

window.addEventListener('scroll', function () {
  var name = document.querySelector('header h1');
  var job = document.querySelector('header h6');
  var pos = window.pageYOffset / 3 + 'px';

  header.style.backgroundPosition = 'center ' + pos;
  name.style.transform =
    'translate(-50%, ' + (window.scrollY * -0.2 - 50) + '%)';
  job.style.transform = 'translate(-50%, ' + (window.scrollY * 1.2 - 50) + '%)';

  if (window.scrollY == 0) {
    name.style.textShadow = 'none';
  } else {
    name.style.textShadow =
      '0 1px ' +
      window.scrollY * 0.05 +
      'px #fff, 0 1px ' +
      window.scrollY * 0.08 +
      'px #fff';
  }
  job.style.opacity = 1 - window.scrollY / 300;
  job.style.transition = 'initial';
});
