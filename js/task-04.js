let counterValue = 0;
const clikerPlus = document.querySelector('button[data-action="increment"]');
const clikerMinus = document.querySelector('button[data-action="decrement"]');
const result = document.querySelector("#value");

clikerPlus.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  return (result.textContent = counterValue);
});
clikerMinus.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  return (result.textContent = counterValue);
});
