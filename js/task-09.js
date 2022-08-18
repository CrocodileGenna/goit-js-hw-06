function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

const RandomColor = getRandomHexColor();

btn.addEventListener("click", () => {
  body.style.background = RandomColor;
  span.innerHTML = RandomColor;
});
