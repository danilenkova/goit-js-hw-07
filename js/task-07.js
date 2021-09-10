const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', changeTextSize);

function changeTextSize(event) {
    document.querySelector('#text').style.fontSize = `${inputEl.value}px`;
}