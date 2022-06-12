const inputEl = document.querySelector('input#name-input');

const outputEl = document.querySelector('span#name-output');



function onInputChange(event) {
    const userInput = event.currentTarget.value;
    if (userInput === '') {
      return outputEl.textContent = 'Anonymous';
    }
    outputEl.textContent = userInput;

}

inputEl.addEventListener('input', onInputChange);