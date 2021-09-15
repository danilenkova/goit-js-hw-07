const listEl = document.querySelector('#categories');
console.log('В списке ' + listEl.children.length + ' категории.');

const listItemEl = listEl.querySelectorAll('.item');
listItemEl.forEach(element => {
    console.log('Категория: ' + element.firstElementChild.textContent);
    console.log('Количество элементов: ' + element.lastElementChild.children.length);
});