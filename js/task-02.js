const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientElements = ingredients.map((ingredient) => {
  const newIngredientEl = document.createElement("li");
  newIngredientEl.textContent = ingredient;
  newIngredientEl.classList.add("item");
  return newIngredientEl;
});

ingredientsListEl.append(...ingredientElements);
