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
const correct16 = document.getElementById("correct-16");
const correct17 = document.getElementById("correct-17");
const correct18 = document.getElementById("correct-18");
const correct19 = document.getElementById("correct-19");
const correct20 = document.getElementById("correct-20");
const correct21 = document.getElementById("correct-21");
const correct22 = document.getElementById("correct-22");
const correct23 = document.getElementById("correct-23");
const correct24 = document.getElementById("correct-24");
const correct25 = document.getElementById("correct-25");
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
  correct15,
  correct16,
  correct17,
  correct18,
  correct19,
  correct20,
  correct21,
  correct22,
  correct23,
  correct24,
  correct25
];

const form = document.getElementById("form");
const score = document.getElementById("score");
const level = document.getElementById("level")
const button = document.getElementById("button");

let count = 7;

function handleSubmit(e) {
  e.preventDefault();

  array.forEach((answer) => {
    if (answer.checked) {
     count++;
    }
  });

  function levelLogic() {
    if (count == 25) {
      return "B2";
    } else if (count >= 16) {
      return "B1";
    } else if (count >= 8) {
      return "A2";
    } else if (count < 8) {
      return "A1";
    }
  }

  score.innerHTML = count + "/25";
  level.innerHTML = levelLogic()
  button.style.display = "none";
}

form.addEventListener("submit", handleSubmit);
