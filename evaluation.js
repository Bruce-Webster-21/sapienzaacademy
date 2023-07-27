const array = Array.from({ length: 15 }, (_, i) => document.getElementById(`correct-${i + 1}`));
const form = document.getElementById("form");
const score = document.getElementById("score");
const level = document.getElementById("level");
const button = document.getElementById("button");

let count = 0;

function handleSubmit(e) {
  e.preventDefault();

  count = array.reduce((acc, answer) => acc + (answer.checked ? 1 : 0), count);

  function levelLogic() {
    if (count === 25) return "B2 Avanzado";
    if (count >= 16) return "B1 Avanzado";
    if (count >= 8) return "A2 Intermedio";
    return "A1 Principiante";
  }

  score.textContent = `${count}/25`;
  level.textContent = levelLogic();
  button.style.display = "none";
}

form.addEventListener("submit", handleSubmit);
