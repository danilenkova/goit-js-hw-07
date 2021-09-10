const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const recipe = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
    const recipeEl = document.createElement('li');
    recipeEl.textContent = ingredient;
    recipe.appendChild(recipeEl);
});