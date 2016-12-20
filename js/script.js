var toggle  = document.querySelector('.main-nav__toggle');
var mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');

toggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

var basket = document.querySelector('.main-nav__basket');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__close');

basket.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.remove('visually-hidden');
});

modalClose.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.add('visually-hidden');
});
