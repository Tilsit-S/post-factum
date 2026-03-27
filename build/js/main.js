"use strict";

// Бургер меню
(function () {
  var burgerButton = document.querySelector(".burger-btn");
  var closeBurgerBtn = document.querySelector(".burger-btn-close");
  var menu = document.querySelector(".pop-up");
  var overlay = document.querySelector(".modal-overlay");
  var body = document.querySelector("body");
  function onOverlayClick(evt) {
    if (evt.target.classList.contains("modal-overlay")) {
      closeMenu();
    }
  }
  function closeMenu() {
    menu.classList.remove("show");
    overlay.classList.remove("open");
    overlay.removeEventListener("click", onOverlayClick);
    //body.classList.remove("no-scroll");
  }
  function onBurgerButtonClick(evt) {
    evt.preventDefault();
    menu.classList.add("show");
    overlay.classList.add("open");
    //body.classList.add("no-scroll");
    overlay.addEventListener("click", onOverlayClick);
  }
  burgerButton.addEventListener("click", onBurgerButtonClick);
  closeBurgerBtn.addEventListener("click", closeMenu);
})();
//product tabs
(function () {
  var tabs = Array.prototype.slice.apply(document.querySelectorAll('.product__tabs-item'));
  var content = Array.prototype.slice.apply(document.querySelectorAll('.product__content-item'));
  document.getElementById('tabs').addEventListener('click', function (e) {
    if (e.target.classList.contains('product__tabs-item')) {
      var tabSelect = tabs.indexOf(e.target);
      tabs.map(function (item) {
        return item.classList.remove('active');
      });
      tabs[tabSelect].classList.add('active');
      content.map(function (content) {
        return content.classList.remove('active');
      });
      content[tabSelect].classList.add('active');
    }
  });
})();
//fixed links
(function () {
  var body = document.querySelector("body");
  var bHeight = body.getBoundingClientRect().height;
  var screenY = window.innerHeight / 2;
  var links = document.querySelector("#fixed-links");
  window.onscroll = function () {
    if (pageYOffset > screenY) {
      links.classList.add("fixed");
    } else {
      links.classList.remove("fixed");
    }
  };
})();