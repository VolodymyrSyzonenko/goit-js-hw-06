const countCategoriesAndItems = () => {
  const categoriesItemsEl = document.querySelectorAll(".item");
  const categoriesEl = categoriesItemsEl.length;

  console.log(`Number of categories: ${categoriesEl}`);

  categoriesItemsEl.forEach((item) => {
    const categoryNameEl = item.querySelector("h2");
    const elementsEl = item.querySelectorAll("li");

    console.log(`Category: ${categoryNameEl.textContent}`);
    console.log(`Elements: ${elementsEl.length}`);
  });
};

countCategoriesAndItems();