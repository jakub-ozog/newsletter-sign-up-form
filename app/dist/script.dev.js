"use strict";

var submitBtn = document.querySelector('.newsletter__submit');
var inputField = document.querySelector('.newsletter__input');
var formErr = document.querySelector('.newsletter__formErr');
var sectionMain = document.querySelector('.newsletter__wrapper');
var sectionTy = document.querySelector('.newsletter__tyScreen');
var dismissBtn = document.querySelector('.-dismissBtn');
sectionTy.classList.add('-hidden');
submitBtn.addEventListener('click', function () {
  // e.preventDefault();
  var inputContent = inputField.value;

  if (inputContent.includes('@')) {
    formErr.classList.add('-hidden');
    inputField.classList.remove('-errState');
    sectionMain.classList.add('-hidden');
    sectionTy.classList.remove('-hidden');
  } else {
    inputField.classList.add('-errState');
    formErr.classList.remove('-hidden');
  }
});
dismissBtn.addEventListener('click', function () {
  sectionMain.classList.remove('-hidden');
  sectionTy.classList.add('-hidden');
});