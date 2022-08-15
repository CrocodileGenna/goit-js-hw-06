const arrItem = document.querySelectorAll(".item");
const itemLength = arrItem.length;
console.log(`Number of categories:${itemLength}`);

arrItem.forEach((el, inex, arr) => {
  console.log(`Category:${el.firstElementChild.textContent}`);
  console.log(`Elements:${el.lastElementChild.children.length}`);
});
