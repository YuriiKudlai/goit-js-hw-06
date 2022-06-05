
let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function onDecrementBtnClick() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);