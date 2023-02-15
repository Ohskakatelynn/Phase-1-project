let showForm = false
const yesButton = document.getElementById("yes-button")
const question = document.getElementById("questionH2")
yesButton.addEventListener("click", ()=> {
    const surveyDiv = document.getElementById("survey-div")
    console.log("hi")
    showForm = !showForm
    if(showForm) {
      formDiv.style.display = "block"
      surveyDiv.style.display = "none"
    }else {
      formDiv.style.display = "none"
    }
})


fetch ( "http://localhost:3000/dogs" )
    .then ( r=> r.json() )
    .then (data => console.log(data))
  
    
const formDiv = document.querySelector("#form-div")
const dogDiv = document.getElementById("dog-image")
const questionForm = document.querySelector("#question-form")
questionForm.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(e.target.choice.value)
  
  if (e.target.choice.value == "yes") {
    renderBigDogs()
  } else if (e.target.choice.value == "no"){
    console.log( "small dogs" )
  } 
})



 function renderBigDogs(dogs) {
   
 }


  





 
