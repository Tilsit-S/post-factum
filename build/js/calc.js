"use strict";

(function () {
  var openButtons = document.querySelectorAll('.calc-button');
  var modal = document.querySelector('.calc');
  var overlay = document.querySelector('.modal-overlay');
  var closeBtn = document.querySelector('.close-button');
  var openModal = function openModal(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };
  var closeModal = function closeModal(e) {
    if (e) e.preventDefault();
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  };
  openButtons.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
})();