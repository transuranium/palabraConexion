
const russianInput = document.querySelector("#answer-rus")
const englishInput = document.querySelector("#answer-eng")

function updateButtonText(){
    const nextButton = document.querySelector("button[type=submit")
  
    if (russianInput.value.length > 0 || englishInput.value.length > 0) {
      nextButton.innerText = "Controlar"
    } else {
      nextButton.innerText = "Continuar"
    }
  }

  russianInput.addEventListener("input", updateButtonText);
  englishInput.addEventListener("input", updateButtonText);