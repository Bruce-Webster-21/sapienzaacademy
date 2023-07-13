const form = document.getElementById("form");
const correct1 = document.getElementById("correct-1");
const correct2 = document.getElementById("correct-2");
const correct3 = document.getElementById("correct-3");
const correct4 = document.getElementById("correct-4");
const correct5 = document.getElementById("correct-5");
const correct6 = document.getElementById("correct-6");
const correct7 = document.getElementById("correct-7");
const correct8 = document.getElementById("correct-8");
const score = document.getElementById("score");
const button = document.getElementById("button");
const array = [
  correct1,
  correct2,
  correct3,
  correct4,
  correct5,
  correct6,
  correct7,
  correct8,
];

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
