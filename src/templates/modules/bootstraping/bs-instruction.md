## Breakpoints 
- указываются в src/styles_base/base/vars.scss
- переиспользуются в src/templates/modules/bootstraping/bs-vars.scss

## Разметка

<section class="section name">   
  <div class="name__bs-container">
      <div class="name__bs-row first">
        <img src="" alt="" class="first__bs-col--img">
        <img src="" alt="" class="first__bs-col--img">
      </div>
      <div class="name__bs-row second">
        <p class="second__bs-col--text">lorem ipsum</p>
        <img src="" alt="" class="second__bs-col--img">
      </div>    
  </div>
</section>

<section class="section name">  - section div header .. - блок шириной 100% (wrapper) 
  <div class="name__bs-container"> - отцентрированный контейнер с разметкой bootstraping module шириной ($bs-container-max-width: 1140px !default;) и внутренними полями
      <div class="name__bs-row first"> - строка (flex-box) с justify-content: center !default; и внешними полями
        <img src="" alt="" class="first__bs-col--img"> - элементы с внутренними полями
        <img src="" alt="" class="first__bs-col--img"> - элементы с внутренними полями
      </div>
      <div class="name__bs-row second">
        <p class="second__bs-col--text">lorem ipsum</p>
        <img src="" alt="" class="second__bs-col--img">
      </div>    
  </div>
</section>


## Стили
1.  @import "./bs-init.scss";
2.  перед применением задать для именно этого блока:
    // Максимальная ширина контейнера
    $bs-container-max-width: 1140px !default;

    // Выравнивание элементов в строке
    $justify-content: center !default;

    // Количество колонок
    $bs-grid-columns: 12 !default;

    // Расстояние между элементами
    $bs-grid-gap: 30px !default;

3. если на странице несколько блоков, то для каждого блока будут действовать свои переменные.

4. .section.name - имеет свои стили (фон и т.п.)

5. 
.name {
  &__bs-container {
    @include bs-container; - подключаем поведение 
    background-color: rgb(229, 255, 0); - добавляем свои стили
  }

  &__bs-row { 
    @include bs-row; - подключаем поведение 
    background-color: rgb(22, 55, 0); - добавляем свои стили
  }
}

6.  отдельно работаем с каждой строкой контейнера MOBILE - FIRST
.first__bs-col--img {
  @include bs-col(12); - количество занимаемых колонок из $bs-grid-columns
  @include transit(1s); - красивый переход на breakpoints

  @media (min-width: $tab) { - запрос на контрольную точку.  С ЭТОЙ ШИРИНЫ - ПОВЕДЕНИЕ ЭЛЕМЕНТА ИЗМЕНИТСЯ НА ТАКОЕ:
    @include bs-col(2);  - занимает меньше колонок
    @include transit(1s);
  }
}

7. отдельно прорабатываем стили дочерних элементов. Например img в picture

.second__bs-col--img {
  @include bs-col(4);

  img {
    width: 100%;
    height: auto;
  }
}