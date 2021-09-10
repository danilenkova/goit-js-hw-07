const listEl = document.querySelector('#categories');
const listItemEl = document.querySelectorAll('#categories .item');
console.log('В списке ' + listItemEl.length + ' категории.');
const categoriesNames = document.querySelectorAll('.item h2');
categoriesNames.forEach((element) => {
    console.log('Категория: ' + element.textContent);
    const quantityEL = element.parentNode.querySelectorAll('li');
    console.log('Количество элементов: ' + quantityEL.length);
});

