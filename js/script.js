var button = document.querySelector('.user_button');
var popup = document.querySelector('.modal_container');
var popupClose = document.querySelector('.modal_close');
var form = popup.querySelector('.modal_form');
var login = popup.querySelector('.input_login');
var email = popup.querySelector('.input_email');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

// OPEN_MODAL

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal_open');
  popup.classList.remove('bounceOutDown');
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

// CLOSE_MODAL

popupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('bounceOutDown');
  popup.classList.remove('shake');
  window.setTimeout(function () {
    popup.classList.remove('modal_open');
  }, 500);
});

// CLOSE_ESC

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal_open')) {
      popup.classList.add('bounceOutDown');
      window.setTimeout(function () {
        popup.classList.remove('modal_open');
      }, 500);
      popup.classList.remove('shake');
    }
  }
});

// SEND_FOMR

form.addEventListener('submit', function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove('shake');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('shake');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});

// SLIDER

var advantages = document.querySelector('.advantages');
var label1 = advantages.querySelector('.label-1');
var label2 = advantages.querySelector('.label-2');
var label3 = advantages.querySelector('.label-3');
var slide1 = advantages.querySelector('.slide-1');
var slide2 = advantages.querySelector('.slide-2');
var slide3 = advantages.querySelector('.slide-3');

label1.addEventListener('click', function () {
  slide1.classList.remove('slide_hidden');
  slide2.classList.add('slide_hidden');
  slide3.classList.add('slide_hidden');
});

label2.addEventListener('click', function () {
  slide1.classList.add('slide_hidden');
  slide2.classList.remove('slide_hidden');
  slide3.classList.add('slide_hidden');
});

label3.addEventListener('click', function () {
  slide1.classList.add('slide_hidden');
  slide2.classList.add('slide_hidden');
  slide3.classList.remove('slide_hidden');
});