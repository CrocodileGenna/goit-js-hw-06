const text = document.querySelector("#text");
const fonSize = document.querySelector("#font-size-control");
const min = fonSize.getAttribute("min");
const max = fonSize.getAttribute("max");

fonSize.addEventListener("input", textSize);

function textSize() {
  text.style.fontSize = `${fonSize.value}px`;
}
fonSize.dispatchEvent(new Event("input"));
// console.log(min);
