const inputEL = document.querySelector('#validation-input');

inputEL.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (inputEL.value.length == inputEL.getAttribute('data-length')) {
        inputEL.className = 'valid';
    } else {
        inputEL.className = 'invalid';
    }
}