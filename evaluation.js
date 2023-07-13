const form = document.getElementById("form");
const correct1 = document.getElementById("correct-1");
const correct2 = document.getElementById("correct-2");
const correct3 = document.getElementById("correct-3");
const correct4 = document.getElementById("correct-4");
const correct5 = document.getElementById("correct-5");
const correct6 = document.getElementById("correct-6");
const correct7 = document.getElementById("correct-7");
const correct8 = document.getElementById("correct-8");
const correct9 = document.getElementById("correct-9");
const correct10 = document.getElementById("correct-10");
const correct11 = document.getElementById("correct-11");
const correct12 = document.getElementById("correct-12");
const correct13 = document.getElementById("correct-13");
const correct14 = document.getElementById("correct-14");
const correct15 = document.getElementById("correct-15");
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
  correct9, 
  correct10,
  correct11,
  correct12,
  correct13,
  correct14,
  correct15
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
