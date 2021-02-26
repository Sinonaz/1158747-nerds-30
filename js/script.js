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

if (popup) {
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
}

// CLOSE_MODAL

if (popup) {
  popupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('bounceOutDown');
    popup.classList.remove('shake');
    window.setTimeout(function () {
      popup.classList.remove('modal_open');
    }, 500);
  });
}

// CLOSE_ESC

if (popup) {
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
}

// SEND_FOMR

if (popup) {
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
}

// SLIDER

var advantages = document.querySelector('.advantages');
var slider = advantages.querySelector('.slider');
var slider1 = advantages.querySelector('.slider-1');
var slider2 = advantages.querySelector('.slider-2');
var slider3 = advantages.querySelector('.slider-3');
var slide1 = advantages.querySelector('.slide-1');
var slide2 = advantages.querySelector('.slide-2');
var slide3 = advantages.querySelector('.slide-3');

if (slider) {
  slider1.addEventListener('click', function () {
    slide1.classList.remove('slide_hidden');
    slide2.classList.add('slide_hidden');
    slide3.classList.add('slide_hidden');
  });
  
  slider2.addEventListener('click', function () {
    slide1.classList.add('slide_hidden');
    slide2.classList.remove('slide_hidden');
    slide3.classList.add('slide_hidden');
  });
  
  slider3.addEventListener('click', function () {
    slide1.classList.add('slide_hidden');
    slide2.classList.add('slide_hidden');
    slide3.classList.remove('slide_hidden');
  });
}