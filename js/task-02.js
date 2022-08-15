const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elemUl = document.querySelector("ul");

const elemList = ingredients.map((ingr) => {
  const liItem = document.createElement("li");
  liItem.classList.add("item");
  liItem.textContent = ingr;
  return liItem;
});

elemUl.append(...elemList);
