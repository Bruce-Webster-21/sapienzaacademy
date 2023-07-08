let form = document.getElementById('form')
let answer = document.getElementById("answer")
let count = 0

function handleSubmit(e) {
  e.preventDefault()
  if (answer.checked) {
    count ++;
  }
  console.log(count)
}

form.addEventListener('submit', handleSubmit)