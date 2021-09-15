const inputEl = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');
const labelValue = nameLabel.textContent;

inputEl.addEventListener('input', onClickChange);

function onClickChange(event) {
    if (this.value !== '') {
        nameLabel.textContent = this.value.trim();
    } else {
        nameLabel.textContent = labelValue;
    }
}