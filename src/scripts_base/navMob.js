export default function navMob(class_btn, class_element) {
  const btn = document.querySelector(class_btn);
  const element = document.querySelector(class_element);

  let screen_width = () => {
    if (window.innerWidth <= 768) {
      // 0...768
      element.classList.add('moboff');
    } else {
      // 769...Inf
      element.classList.remove('moboff');
    }
  }

  //  при изменении размера width экрана <= 768, добавляется класс moboff, а при размере width экрана >= 768 убирается
  window.addEventListener('resize', function () {
    screen_width();
  });

  //  после загрузки страницы, проверяем размер width экрана <= 768, добавляется класс moboff, а при размере width экрана >= 768 убирается
  window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
      screen_width();
    }
  });

  if (btn && element) {
    btn.addEventListener('click', () => {
      element.classList.toggle('moboff');
      element.classList.toggle('mobon');
    });
    window.onclick = function (event) {
      if (event.target == element) {
        element.classList.toggle('mobon');
        element.classList.toggle('moboff');
        btn.classList.toggle('active');
      }
    };
  }
}