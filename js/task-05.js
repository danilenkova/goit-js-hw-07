const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', event => {
    if (event.currentTarget.value !== '') {
        document.querySelector('#name-output').innerHTML = event.currentTarget.value;
    } else {
        document.querySelector('#name-output').innerHTML = `незнакомец`;
    }
});