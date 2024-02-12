/*
Графические изображения, присутствующие на странице, как бы подсвечиваются, попадая в область видимости. За счет изменения прозрачности от 0 до 1.
Graphic images present on the page are, as it were, highlighted when they come into view. By changing the transparency from 0 to 1.
Use in index.js
import opacityScreen from './scripts_base/opacityScreen';
opacityScreen();
*/

export default function opacityScreen() {
  const options = {
    rootMargins: ' 20pt Opt',
    threshold: [0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0]
  };
  function vdHandler(els) {
    els.forEach((data) => {
      data.target.style.opacity = 0.2 + data.intersectionRatio * 0.8;
    });
  }
  const vd = new IntersectionObserver(vdHandler, options);

  const cImgs = document.querySelectorAll('img');
  // const notUse = document.querySelector('.hero__img1');
  cImgs.forEach((el) => {
    vd.observe(el);

  });
}

