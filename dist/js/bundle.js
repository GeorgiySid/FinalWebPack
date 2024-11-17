/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);


if (window.innerWidth < 768) {
  new Swiper('.menuSwiperLogo', {
    // Настройки Swiper.js
    wrapperClass: 'menuSwiperLogo__logoCont',
    slidesPerView: 'auto',
    // нужное количество элементов на слайде
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: true,
      disableOnInteraction: false
    }
  });
  new Swiper('.menuSwiperRepair', {
    // Настройки Swiper.js
    wrapperClass: 'menuSwiperRepair__repairCont',
    slidesPerView: 'auto',
    // нужное количество элементов на слайде
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: true,
      disableOnInteraction: false
    }
  });
  new Swiper('.menuSwiperService', {
    // Настройки Swiper.js
    wrapperClass: 'menuSwiperService__serviceCont',
    slidesPerView: 'auto',
    // нужное количество элементов на слайде
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: true,
      disableOnInteraction: false
    }
  });
}

var main = document.querySelector('main');
var readMoreButtonSwiper = document.querySelector('.readMore-button-swiper');
var menuSwiperLogo = document.querySelector('.menuSwiperLogo');
var logoCont = document.querySelector('.menuSwiperLogo__logoCont');
var readMoreButtonInfBlock = document.querySelector('.readMore-button-infBlock');
var HiddenTextInfBlock = document.querySelector('.main_blockInf_first_text_hidden');
var mainSlideMenuLinks = document.querySelectorAll('.main__slideMenu_link');
var readMoreButtonRepair = document.querySelector('.readMore-button-swiperRepair');
var repairCont = document.querySelector('.menuSwiperRepair');
var burgerMenu = document.querySelector('.burgerMenu');
var burgerButton = document.querySelector('.header__boxLeft_burger-button');
var burgerButtonCancel = document.querySelector('.burgerMenu__cancel-button-action');
var burgerSlideLinks = document.querySelectorAll('.burgerMenu__link');
var bodyVeil = document.querySelector('.body__veil');
var messMenu = document.querySelector('.messMenu');
var messButton = document.querySelectorAll('.mess-button-action');
var messButtonClose = document.querySelector('.messMenu__header_cancelButton');
var callMenu = document.querySelector('.callMenu');
var callButton = document.querySelectorAll('.call-button-action');
var callButtonClose = document.querySelector('.callMenu__header_cancelButton'); // Функц открытия бургера

function burgerMenuOpen() {
  if (!messMenu.classList.contains('messMenu--hide')) {
    messMenu.classList.add('messMenu--hide');
  }

  if (!callMenu.classList.contains('callMenu--hide')) {
    messMenu.classList.add('callMenu--hide');
  }

  if (burgerMenu.classList.contains('hide')) {
    burgerMenu.classList.remove('hide');

    if (!bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.add('body__veil--active');
    }
  }
} // Функц закрытия бургера


function burgerMenuClose() {
  if (!burgerMenu.classList.contains('hide')) {
    burgerMenu.classList.add('hide');

    if (bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.remove('body__veil--active');
    }
  }
} // Функция открытия месс меню


function messMenuOpen() {
  if (!burgerMenu.classList.contains('hide')) {
    burgerMenu.classList.add('hide');
  }

  if (!callMenu.classList.contains('callMenu--hide')) {
    callMenu.classList.add('callMenu--hide');
  }

  if (messMenu.classList.contains('messMenu--hide')) {
    messMenu.classList.remove('messMenu--hide');

    if (!bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.add('body__veil--active');
    }
  }
} //Функция закрытия месс меню


function messMenuClose() {
  if (!messMenu.classList.contains('messMenu--hide')) {
    messMenu.classList.add('messMenu--hide');

    if (bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.remove('body__veil--active');
    }
  }
} //Функция открытия звон меню


function callMenuOpen() {
  if (!burgerMenu.classList.contains('hide')) {
    burgerMenu.classList.add('hide');
  }

  if (!messMenu.classList.contains('messMenu--hide')) {
    messMenu.classList.add('messMenu--hide');
  }

  if (callMenu.classList.contains('callMenu--hide')) {
    callMenu.classList.remove('callMenu--hide');

    if (!bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.add('body__veil--active');
    }
  }
} // Функция закрытия звон меню


function callMenuClose() {
  if (!callMenu.classList.contains('callMenu--hide')) {
    callMenu.classList.add('callMenu--hide');

    if (bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.remove('body__veil--active');
    }
  }
} ////////////БУРГЕР МЕНЮ////////////////
//Кнопка бургер вкл


burgerButton.addEventListener('click', function () {
  burgerMenuOpen();
}); // кнопка бурегр выкл

burgerButtonCancel.addEventListener('click', function () {
  burgerMenuClose();
});
window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    burgerMenuClose();
    messMenuClose();
  }
});
bodyVeil.addEventListener('click', function () {
  burgerMenuClose();
  messMenuClose();
  callMenuClose();
}); //Переход по ссылкам бургер

for (var i = 0; i < burgerSlideLinks.length; i++) {
  burgerSlideLinks[i].addEventListener('click', function (evt) {
    evt.preventDefault();

    for (var j = 0; j < burgerSlideLinks.length; j++) {
      burgerSlideLinks[j].classList.remove('burgerMenu__link--active');
    } // Добавляем класс  к текущей ссылке


    this.classList.add('burgerMenu__link--active');
  });
} //////////////////////////////////////
///////////Меню Звон//////////////////


for (var i = 0; i < callButton.length; i++) {
  callButton[i].addEventListener('click', function () {
    callMenuOpen();
  });
}

callButtonClose.addEventListener('click', function () {
  callMenuClose();
}); //////////////////////////////////////
///////////Меню месс////////////////

for (var i = 0; i < messButton.length; i++) {
  messButton[i].addEventListener('click', function () {
    messMenuOpen();
  });
}

messButtonClose.addEventListener('click', function () {
  messMenuClose();
}); //////////////////////////////////////
// Переход по ссылкам гл меню

for (var i = 0; i < mainSlideMenuLinks.length; i++) {
  mainSlideMenuLinks[i].addEventListener('click', function (evt) {
    evt.preventDefault();

    for (var j = 0; j < mainSlideMenuLinks.length; j++) {
      mainSlideMenuLinks[j].classList.remove('main__slideMenu_link--active');
    } // Добавляем класс  к текущей ссылке


    this.classList.add('main__slideMenu_link--active');
  });
} //Открытие и закрытие repairswiper


readMoreButtonRepair.addEventListener('click', function () {
  if (repairCont.style.overflow === 'hidden') {
    repairCont.style.overflow = 'visible';
    repairCont.style.height = '380px';
    readMoreButtonRepair.querySelector('.readMore-button-swiperRepair-descrip').textContent = 'Скрыть';
    var imgExpandInfBlock = readMoreButtonRepair.querySelector('.readMore-button-swiperRepair-expand--rotate');
    imgExpandInfBlock.style.transform = 'rotate(180deg)';
  } else {
    repairCont.style.overflow = 'hidden';
    repairCont.style.height = '190px';
    readMoreButtonRepair.querySelector('.readMore-button-swiperRepair-descrip').textContent = 'Показать все';

    var _imgExpandInfBlock = readMoreButtonRepair.querySelector('.readMore-button-swiperRepair-expand--rotate');

    _imgExpandInfBlock.style.transform = 'rotate(0deg)';
  }
}); //Открытие и закрытие меню текста + поврот стрелки

readMoreButtonInfBlock.addEventListener('click', function () {
  if (HiddenTextInfBlock.classList.contains('deactive')) {
    HiddenTextInfBlock.classList.remove('deactive');
    readMoreButtonInfBlock.querySelector('.readMore-button-infBlock-discription').textContent = 'Скрыть';
    var imgExpandInfBlock = readMoreButtonInfBlock.querySelector('.readMore-button-infBlock-expand--rotate');
    imgExpandInfBlock.style.transform = 'rotate(180deg)';
  } else {
    HiddenTextInfBlock.classList.add('deactive');
    readMoreButtonInfBlock.querySelector('.readMore-button-infBlock-discription').textContent = 'Читать далее';

    var _imgExpandInfBlock2 = readMoreButtonInfBlock.querySelector('.readMore-button-infBlock-expand--rotate');

    _imgExpandInfBlock2.style.transform = 'rotate(0deg)';
  }
}); // открытие и закрытие меню с лого

readMoreButtonSwiper.addEventListener('click', function () {
  if (menuSwiperLogo.style.overflow === 'hidden') {
    menuSwiperLogo.style.overflow = 'visible';
    logoCont.style.height = 'auto';
    readMoreButtonSwiper.querySelector('.readMore-button-swiper-descrip').textContent = 'Скрыть';
    var readMoreButtonSwiperExpand = readMoreButtonSwiper.querySelector('.readMore-button-swiper-expand--rotate');
    readMoreButtonSwiperExpand.style.transform = 'rotate(180deg)';
  } else {
    menuSwiperLogo.style.overflow = 'hidden';
    logoCont.style.height = '165px';
    readMoreButtonSwiper.querySelector('.readMore-button-swiper-descrip').textContent = 'Показать все';

    var _readMoreButtonSwiperExpand = readMoreButtonSwiper.querySelector('.readMore-button-swiper-expand--rotate');

    _readMoreButtonSwiperExpand.style.transform = 'rotate(0deg)';
  }
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map