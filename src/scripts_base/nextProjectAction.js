export default function nextProjectAction() {
  const itemBlock = document.querySelector('.nextProject');
  const elem = itemBlock.querySelector('.nextProject__title');
  const elemOpacityValue = elem.style.opacity;

  const clickNext = document.querySelector('.nextMore');
  const iconClick = document.querySelector('.icon_clickThis');
  const iconScroll = document.querySelector('.icon_scrollV');

  itemBlock.addEventListener('mouseover', () => {
    elem.style.opacity = 1;
  })
  itemBlock.addEventListener('mouseout', () => {
    elem.style.opacity = elemOpacityValue;
  })
  itemBlock.addEventListener('click', () => {
    iconClick.classList.add('more');
    clickNext.classList.add('more');
    iconScroll.classList.add('more');
  })
}