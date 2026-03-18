"use strict";

//blog-табы
(function () {
  var tabs = Array.prototype.slice.apply(document.querySelectorAll('.option__tabs-item'));
  var content = Array.prototype.slice.apply(document.querySelectorAll('.option__content-item'));
  document.getElementById('optionTabs').addEventListener('click', function (e) {
    if (e.target.classList.contains('option__tabs-item')) {
      var tabSelect = tabs.indexOf(e.target);
      tabs.map(function (item) {
        return item.classList.remove('active');
      });
      tabs[tabSelect].classList.add('active');
      content.map(function (content) {
        return content.classList.remove('active-item');
      });
      content[tabSelect].classList.add('active-item');
    }
  });
})();