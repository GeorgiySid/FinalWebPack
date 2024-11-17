import '../scss/style.scss'
if (window.innerWidth < 768) {
  new Swiper('.menuSwiperLogo', {
    // Настройки Swiper.js
    wrapperClass: 'menuSwiperLogo__logoCont',
    slidesPerView: 'auto', // нужное количество элементов на слайде
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
  })

  new Swiper('.menuSwiperRepair', {
    // Настройки Swiper.js
    wrapperClass: 'menuSwiperRepair__repairCont',
    slidesPerView: 'auto', // нужное количество элементов на слайде
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
  })

  new Swiper('.menuSwiperService', {
    // Настройки Swiper.js
    wrapperClass: 'menuSwiperService__serviceCont',
    slidesPerView: 'auto', // нужное количество элементов на слайде
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
  })
}

const main = document.querySelector('main')

const readMoreButtonSwiper = document.querySelector('.readMore-button-swiper')
const menuSwiperLogo = document.querySelector('.menuSwiperLogo')
const logoCont = document.querySelector('.menuSwiperLogo__logoCont')

const readMoreButtonInfBlock = document.querySelector(
  '.readMore-button-infBlock'
)
const HiddenTextInfBlock = document.querySelector(
  '.main_blockInf_first_text_hidden'
)

const mainSlideMenuLinks = document.querySelectorAll('.main__slideMenu_link')

const readMoreButtonRepair = document.querySelector(
  '.readMore-button-swiperRepair'
)
const repairCont = document.querySelector('.menuSwiperRepair')

const burgerMenu = document.querySelector('.burgerMenu')
const burgerButton = document.querySelector('.header__boxLeft_burger-button')
const burgerButtonCancel = document.querySelector(
  '.burgerMenu__cancel-button-action'
)
const burgerSlideLinks = document.querySelectorAll('.burgerMenu__link')

const bodyVeil = document.querySelector('.body__veil')

const messMenu = document.querySelector('.messMenu')
const messButton = document.querySelectorAll('.mess-button-action')
const messButtonClose = document.querySelector('.messMenu__header_cancelButton')


const callMenu = document.querySelector('.callMenu')
const callButton = document.querySelectorAll('.call-button-action')
const callButtonClose = document.querySelector('.callMenu__header_cancelButton')

// Функц открытия бургера
function burgerMenuOpen() {
  if (!messMenu.classList.contains('messMenu--hide')) {
    messMenu.classList.add('messMenu--hide');
  }
  if (!callMenu.classList.contains('callMenu--hide')){
    messMenu.classList.add('callMenu--hide')
  }
  if (burgerMenu.classList.contains('hide')) {
    burgerMenu.classList.remove('hide');
    if (!bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.add('body__veil--active')
    }
  }
}
// Функц закрытия бургера
function burgerMenuClose() {
  if (!burgerMenu.classList.contains('hide')) {
    burgerMenu.classList.add('hide')
    if (bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.remove('body__veil--active')
    }
  }
}

// Функция открытия месс меню
function messMenuOpen() {
  if (!burgerMenu.classList.contains('hide')) {
    burgerMenu.classList.add('hide')
  }
  if (!callMenu.classList.contains('callMenu--hide')){
    callMenu.classList.add('callMenu--hide')
  }
  if (messMenu.classList.contains('messMenu--hide')) {
    messMenu.classList.remove('messMenu--hide')
    if (!bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.add('body__veil--active')
    }
  }
}

//Функция закрытия месс меню
function messMenuClose() {
  if (!messMenu.classList.contains('messMenu--hide')) {
    messMenu.classList.add('messMenu--hide')
    if (bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.remove('body__veil--active')
    }
  }
}

//Функция открытия звон меню
function callMenuOpen(){
  if (!burgerMenu.classList.contains('hide')) {
    burgerMenu.classList.add('hide')
  }
  if (!messMenu.classList.contains('messMenu--hide')) {
    messMenu.classList.add('messMenu--hide')
  }
  if (callMenu.classList.contains('callMenu--hide')) {
    callMenu.classList.remove('callMenu--hide')
    if (!bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.add('body__veil--active')
    }
  }
}
// Функция закрытия звон меню
function callMenuClose(){
  if (!callMenu.classList.contains('callMenu--hide')) {
    callMenu.classList.add('callMenu--hide')
    if (bodyVeil.classList.contains('body__veil--active')) {
      bodyVeil.classList.remove('body__veil--active')
    }
  }
}


////////////БУРГЕР МЕНЮ////////////////

//Кнопка бургер вкл
burgerButton.addEventListener('click', function () {
  burgerMenuOpen();
})
// кнопка бурегр выкл
burgerButtonCancel.addEventListener('click', function () {
  burgerMenuClose();
})
window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    burgerMenuClose();
    messMenuClose();
  }
})
bodyVeil.addEventListener('click', function () {
  burgerMenuClose();
  messMenuClose();
  callMenuClose();
})

//Переход по ссылкам бургер
for (var i = 0; i < burgerSlideLinks.length; i++) {
  burgerSlideLinks[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    for (let j = 0; j < burgerSlideLinks.length; j++) {
      burgerSlideLinks[j].classList.remove('burgerMenu__link--active')
    }
    // Добавляем класс  к текущей ссылке
    this.classList.add('burgerMenu__link--active')
  })
}

//////////////////////////////////////

///////////Меню Звон//////////////////

for (var i = 0; i < callButton.length; i++) {
  callButton[i].addEventListener('click', function () {
    callMenuOpen();
  })
}
callButtonClose.addEventListener('click', function () {
  callMenuClose();
})

//////////////////////////////////////

///////////Меню месс////////////////
for (var i = 0; i < messButton.length; i++) {
  messButton[i].addEventListener('click', function () {
    messMenuOpen()
  })
}
messButtonClose.addEventListener('click', function () {
  messMenuClose()
})

//////////////////////////////////////

// Переход по ссылкам гл меню
for (var i = 0; i < mainSlideMenuLinks.length; i++) {
  mainSlideMenuLinks[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    for (let j = 0; j < mainSlideMenuLinks.length; j++) {
      mainSlideMenuLinks[j].classList.remove('main__slideMenu_link--active')
    }
    // Добавляем класс  к текущей ссылке
    this.classList.add('main__slideMenu_link--active')
  })
}

//Открытие и закрытие repairswiper
readMoreButtonRepair.addEventListener('click', function () {
  if (repairCont.style.overflow === 'hidden') {
    repairCont.style.overflow = 'visible'
    repairCont.style.height = '380px'
    readMoreButtonRepair.querySelector(
      '.readMore-button-swiperRepair-descrip'
    ).textContent = 'Скрыть'
    const imgExpandInfBlock = readMoreButtonRepair.querySelector(
      '.readMore-button-swiperRepair-expand--rotate'
    )
    imgExpandInfBlock.style.transform = 'rotate(180deg)'
  } else {
    repairCont.style.overflow = 'hidden'
    repairCont.style.height = '190px'
    readMoreButtonRepair.querySelector(
      '.readMore-button-swiperRepair-descrip'
    ).textContent = 'Показать все'
    const imgExpandInfBlock = readMoreButtonRepair.querySelector(
      '.readMore-button-swiperRepair-expand--rotate'
    )
    imgExpandInfBlock.style.transform = 'rotate(0deg)'
  }
})

//Открытие и закрытие меню текста + поврот стрелки
readMoreButtonInfBlock.addEventListener('click', function () {
  if (HiddenTextInfBlock.classList.contains('deactive')) {
    HiddenTextInfBlock.classList.remove('deactive')
    readMoreButtonInfBlock.querySelector(
      '.readMore-button-infBlock-discription'
    ).textContent = 'Скрыть'
    const imgExpandInfBlock = readMoreButtonInfBlock.querySelector(
      '.readMore-button-infBlock-expand--rotate'
    )
    imgExpandInfBlock.style.transform = 'rotate(180deg)'
  } else {
    HiddenTextInfBlock.classList.add('deactive')
    readMoreButtonInfBlock.querySelector(
      '.readMore-button-infBlock-discription'
    ).textContent = 'Читать далее'
    const imgExpandInfBlock = readMoreButtonInfBlock.querySelector(
      '.readMore-button-infBlock-expand--rotate'
    )
    imgExpandInfBlock.style.transform = 'rotate(0deg)'
  }
})
// открытие и закрытие меню с лого
readMoreButtonSwiper.addEventListener('click', function () {
  if (menuSwiperLogo.style.overflow === 'hidden') {
    menuSwiperLogo.style.overflow = 'visible'
    logoCont.style.height = 'auto'
    readMoreButtonSwiper.querySelector(
      '.readMore-button-swiper-descrip'
    ).textContent = 'Скрыть'
    const readMoreButtonSwiperExpand = readMoreButtonSwiper.querySelector(
      '.readMore-button-swiper-expand--rotate'
    )
    readMoreButtonSwiperExpand.style.transform = 'rotate(180deg)'
  } else {
    menuSwiperLogo.style.overflow = 'hidden'
    logoCont.style.height = '165px'
    readMoreButtonSwiper.querySelector(
      '.readMore-button-swiper-descrip'
    ).textContent = 'Показать все'
    const readMoreButtonSwiperExpand = readMoreButtonSwiper.querySelector(
      '.readMore-button-swiper-expand--rotate'
    )
    readMoreButtonSwiperExpand.style.transform = 'rotate(0deg)'
  }
})
