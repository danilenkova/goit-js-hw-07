const inputEL = document.querySelector('#validation-input');
const validLength = inputEL.getAttribute('data-length');

inputEL.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (inputEL.value.length == validLength) {
        if (inputEL.classList.contains('invalid')) {
            inputEL.classList.replace('invalid', 'valid')
        } else {
            inputEL.classList.add('valid');
        }
    } else if (inputEL.classList.contains('valid')) {
        inputEL.classList.replace('valid', 'invalid')
    } else {
        inputEL.classList.add('invalid');
    }
}