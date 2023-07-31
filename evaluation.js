const array = Array.from({ length: 25 }, (_, i) => document.getElementById(`correct-${i + 1}`));
const form = document.getElementById("form");
const score = document.getElementById("score");
const level = document.getElementById("level");
const button = document.getElementById("button");
const questions = document.getElementById("question-list")

let count = 0;

function handleSubmit(e) {
  e.preventDefault();

  count = array.reduce((acc, answer) => acc + (answer.checked ? 1 : 0), count);

  function levelLogic() {
    if (count === 25) return "Eres un B2 Avanzado";
    if (count >= 16) return "Eres un B1 Avanzado";
    if (count >= 8) return "Eres un A2 Intermedio";
    return "Eres un A1 Principiante";
  }

  score.textContent = `${count}/25`;
  level.textContent = levelLogic();
  button.style.display = "none";
  questions.style.display = "none"
}

form.addEventListener("submit", handleSubmit);
