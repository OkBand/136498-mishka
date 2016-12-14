var toggle  = document.querySelector(".main-nav__toggle");
var close = document.querySelector(".main-nav__close");
var mainNav = document.querySelector(".main-nav__wrapper");

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  toggle.classList.add("visually-hidden");
  close.classList.remove("visually-hidden");
  mainNav.classList.remove("main-nav__wrapper--closed");
});

close.addEventListener("click", function(event) {
event.preventDefault();
  close.classList.add("visually-hidden");
  toggle.classList.remove("visually-hidden");
  mainNav.classList.add("main-nav__wrapper--closed");
});

var basket = document.querySelector(".main-nav__basket");
var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".modal__close");

basket.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("visually-hidden");
});

modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.add("visually-hidden");
});
