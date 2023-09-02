"use strict";

var submitBtn = document.querySelector('.newsletter__submit');
var inputField = document.querySelector('.newsletter__input');
var formErr = document.querySelector('.newsletter__formErr');
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var inputContent = inputField.value;

  if (inputContent.includes('@')) {
    formErr.classList.add('-hidden');
    inputField.classList.remove('-errState');
  } else {
    inputField.classList.add('-errState');
    formErr.classList.remove('-hidden');
  }
});