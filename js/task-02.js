const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const recipe = document.querySelector('#ingredients');

const elements = ingredients.map((ingredient) => {
  const recipeEl = document.createElement('li');
  recipeEl.textContent = ingredient;
  return recipeEl;
});

recipe.append(...elements);