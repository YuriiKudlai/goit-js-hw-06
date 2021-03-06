const validationInputEl = document.querySelector('#validation-input');
const dataLengthEl = document.querySelector('input[data-length]');


const checkEnterSymbol = (event) => {
    if (event.target.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.add('valid');
    } else {
        validationInputEl.classList.remove('valid');
        validationInputEl.classList.add('invalid');
    }
   
};

validationInputEl.addEventListener('blur', checkEnterSymbol);