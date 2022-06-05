const inputEl = document.querySelector('input#name-input');
console.log(inputEl);
const outputEl = document.querySelector('span#name-output');
console.log(outputEl);


function onInputChange(event) {
    if (inputEl === '') {
    outputEl.textContent = 'Anonymous';
    }
    outputEl.textContent = event.currentTarget.value;
   
}

inputEl.addEventListener('input', onInputChange);