const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
  if (span.textContent === "") {
    span.textContent = "Anonymous";
  }
  //   console.log(input.textContent);
  //   return input;
});
