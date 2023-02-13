fetch ( "http://localhost:3000/dogs" )
    .then ( r=> r.json() )
    .then (data => console.log(data))
    

const dogDiv = document.getElementById("dog-image")
const submitButton = document.createElement("button")
// function renderPage(dogs){
//      dogs.forEach(dog => )
//     }

const yesButton = document.getElementById("yes-button")
yesButton.addEventListener("click", () => {
  document.getElementById('questions-1').style.display = 'none'
  const form1Div = document.createElement("div")
  form1Div.className = "form-group"
  const form1 = document.createElement("form")
  form1.id = "form1"
  const input01 = document.createElement("input")
  input01.type = "radio"
  input01.name = "choice"
  input01.value = "yes"
  input01.textContent = "Yes"

  const input02 = document.createElement("input")
  input02.type = "radio"
  input02.name = "choice"
  input02.value = "no"
  input02.innerText = "No"
  
  submitButton.innerText = "Submit Answer"
  form1.append(input01, input02);
  form1Div.append(form1)
  const body = document.getElementsByTagName("body")[0]
  body.append(form1Div)

  const question1 = document.createElement("h2")
  question1.innerText = "Do you have a dog?"
  form1Div.append(question1)

})

const noButton = document.getElementById("no-button")

 
