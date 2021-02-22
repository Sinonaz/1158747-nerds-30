var button = document.querySelector('.user_button');
var popup = document.querySelector('.modal_container');
var shadow = document.querySelector('.modal_shadow');
var close = document.querySelector('.modal_close');
var form = popup.querySelector('.modal_form');
var login = popup.querySelector('.input_login');
var email = popup.querySelector('.input_email');
var storage = localStorage.getItem('input_login');

// OPEN_MODAL

button.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('modal_open');
  shadow.classList.add('modal_shadow_block');
  popup.classList.remove('bounceOutDown');
    if (storage) {
      login.value = storage;
      mail.focus();
  } else {
      login.focus();
  }
});

// CLOSE_MODAL

close.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('bounceOutDown');
  window.setTimeout(function() {
    popup.classList.remove('modal_open');
    shadow.classList.remove('modal_shadow_block');
  }, 500);
});

shadow.addEventListener("click", function(event) {
  event.preventDefault();
  window.setTimeout(function() {
    popup.classList.remove('modal_open');
    shadow.classList.remove('modal_shadow_block');
  }, 500);
});