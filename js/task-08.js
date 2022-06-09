
let formEl = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: {
            email, password
        }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('Будь-ласка заповніть всі поля')
    }
    else {
        const dataForm = {
            email: email.value,
            password: password.value
        }
        console.log(dataForm);
    event.currentTarget.reset();
    }  
    }
    
formEl.addEventListener('submit', onFormSubmit);
