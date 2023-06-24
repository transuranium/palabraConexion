const wordEl = document.getElementById('word');
const answerRusEl = document.getElementById('answer-rus');
const answerEngEl = document.getElementById('answer-eng');
const resultEl = document.getElementById('result');
const formEl = document.querySelector('form');



let currentIndex = 0; // Индекс текущего слова

function training() {
  if (currentIndex >= words.length) {
    currentIndex = 0; // Если достигнут конец массива, сбрасываем индекс на 0
  }
  
  const word = words[currentIndex];
  wordEl.innerText = word.esp;
  formEl.reset();


  formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const answerRus = answerRusEl.value.toLowerCase();
    const answerEng = answerEngEl.value.toLowerCase();

    if (answerRus === word.rus && answerEng === word.eng) {
      resultEl.innerText = "Correcto!";
      resultEl.classList.add('correct');
    } else {
      resultEl.innerText = ` Ruso: ${word.rus}. Inglés: ${word.eng}.`;
      resultEl.classList.remove('correct');
    }
  });
}



formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  currentIndex++; // Переходим к следующему слову после каждого нажатия на кнопку submit
  training();
});

training();

