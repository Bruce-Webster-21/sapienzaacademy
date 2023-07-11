const form = document.getElementById("form");
const correct1 = document.getElementById("correct-1");
const correct2 = document.getElementById("correct-2");
const correct3 = document.getElementById("correct-3");
const score = document.getElementById("score");
const button = document.getElementById("button");
const array = [correct1, correct2, correct3];

let count = 0;

function handleSubmit(e) {
  e.preventDefault();
  for (let i = 0; i < array.length; i++) {
    if (array[i].checked) {
      count++;
    }
  }

  score.innerHTML = count;
  button.style.display = "none";
}

form.addEventListener("submit", handleSubmit);
