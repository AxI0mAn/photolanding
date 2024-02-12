// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import './pages/index.scss';
import cursorCloud from './scripts_base/cursorCloud';
cursorCloud();
import nextProjectAction from './scripts_base/nextProjectAction';
nextProjectAction();
import opacityScreen from './scripts_base/opacityScreen';
opacityScreen();

// подключение сценариев для элементов
// ВСЕ НЕ ИСПОЛЬЗУЕМЫЕ КОММЕНТИРОВАТЬ

// включить анимационный эффект для ссылки типа е3
// import button_e3 from './templates/elements/button/class-button-e3';
// button_e3();

// включить анимацию для кнопки типа burgerAnim
// import class_button_icon_burgerAnim from './templates/elements/button-icon/class-button-icon-burgerAnim';
// class_button_icon_burgerAnim();

//включить анимацию появления navMob
// import navMob from './scripts_base/navMob'
// navMob('.header__burgerAnim', '.nav')



new Swiper('.swiper__previous-project', {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 1.2,
      spaceBetween: 80
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 160
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 1.8,
      spaceBetween: 240
    }
  }
});