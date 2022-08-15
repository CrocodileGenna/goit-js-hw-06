const input = document.querySelector("#validation-input");
const dataLength = Number(input.dataset.length);

input.addEventListener("blur", borderColor);

function borderColor(event) {
  if (event.currentTarget.value.length === dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
console.log(dataLength);
