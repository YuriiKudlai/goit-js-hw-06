const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListEl = document.querySelector('#ingredients');

const itemsListItemEl = ingredients.map(ingredient => {
const createEl = document.createElement("li");
createEl.classList.add("item");
  createEl.textContent = `${ingredient}`;
  console.log(createEl);
  return createEl;
  }
);


ingredientsListEl.append(...itemsListItemEl);
console.log(ingredientsListEl);
