const russianInput = document.querySelector("#answer-rus");
const englishInput = document.querySelector("#answer-eng");
const nextButton = document.querySelector("button[type=submit]");

function updateButtonText() {
  if (russianInput.value.length > 0 || englishInput.value.length > 0) {
    nextButton.innerText = "Controlar";
  } else {
    nextButton.innerText = "Continuar";
  }
}

nextButton.addEventListener("click", function() {
  nextButton.innerText = "Continuar";
});

russianInput.addEventListener("input", updateButtonText);
englishInput.addEventListener("input", updateButtonText);
