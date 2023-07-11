const form = document.getElementById('form')
const correct1 = document.getElementById("correct1")
const correct2 = document.getElementById("correct2")
const correct3 = document.getElementById("correct3")

const array = [ correct1, correct2 , correct3]
let count = 0

function handleSubmit(e) {
  e.preventDefault()
  for (let i = 0; i < array.length; i++) {
    if (array[i].checked) {
      count++;
    }
  }
  console.log(count)
}

form.addEventListener('submit', handleSubmit)