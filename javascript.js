fetch ( "http://localhost:3000/dogs" )
    .then ( r=> r.json() )
    .then (data => console.log(data))
    

const dogDiv = document.getElementById("dog-image")
const submitButton = document.createElement("button")
// function renderPage(dogs){
//      dogs.forEach(dog => )
//     }

function addNewQ (){
    let form1Div = document.createElement("div")
  form1Div.className = "form-group"
  form1Div.id = "form-1"
  const form1 = document.createElement("form")
  form1.innerHTML = `
    <h1> New Question</h1><br>
     <form>
      <input type="radio" name="choice" value="yes"> Yes
     <input type="radio" name="choice" value="no"> No
    </form>
  `
  form1Div.append(form1);
  const body = document.getElementsByTagName("body")[0]
  body.append(form1Div)
  const question1 = document.createElement("h2")
  question1.innerText = "Do you have a dog?"
  form1Div.append(question1)
}

const yesButton = document.getElementById("yes-button")
yesButton.addEventListener("click", ()=> {
    console.log("hi")
    addNewQ()
    addSubmitBtn()
})
function addSubmitBtn() {
    document.getElementById('questions-1').style.display = 'none'
    let submitBtn = document.createElement("button")
    submitBtn.id = "submit1"
    submitBtn.innerText = "Submit"
    submitBtn.addEventListener("click", () =>{
    console.log("Submit")
    
  })
}


//   const input02 = document.createElement("input")
//   input02.type = "radio"
//   input02.name = "choice"
//   input02.value = "no"
//   input02.innerText = "No"
//   form1.append(input01);
  

  



let submit1 = document.querySelector("#submit1")
console.log(submit1)

const noButton = document.getElementById("no-button")

 
