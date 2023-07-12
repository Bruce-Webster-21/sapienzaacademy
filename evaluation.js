const form = document.getElementById("form");
const correct1 = document.getElementById("correct-1");
const score = document.getElementById("score");
const button = document.getElementById("button");
const array = [correct1];

let count = 0;

function handleSubmit(e) {
  e.preventDefault();

  array.forEach((answer) => {
    if (answer.checked) {
      count++;
    }
  });

  score.innerHTML = count;
  button.style.display = "none";
}

form.addEventListener("submit", handleSubmit);
