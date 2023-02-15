let showForm = false
const yesButton = document.getElementById("yes-button")
const question = document.getElementById("questionH2")
const dogDiv = document.querySelector("#dog-div")


yesButton.addEventListener("click", ()=> {
    const surveyDiv = document.getElementById("survey-div")
    
    showForm = !showForm
    if(showForm) {
      formDiv.style.display = "block"
      surveyDiv.style.display = "none"
    }else {
      formDiv.style.display = "none"
    }
})

let ourDogs = []
fetch ( "http://localhost:3000/dogs" )
    .then ( r=> r.json() )
    .then (dogData => {
      let dogArray = [...dogData]
      ourDogs.push(dogArray)
      // getBigDogs(dogArray)
    })
  console.log(ourDogs)
    
const formDiv = document.querySelector("#form-div")
const questionForm = document.querySelector("#question-form")
questionForm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  if (e.target.choice.value == "yes") {
    console.log( "big dogs" )
    getBigDogs()

  } else if (e.target.choice.value == "no"){
    console.log( "small dogs" )
  } 
})

function getDogs(dogs){
  dogs.forEach(dog => {
    let imgAndBreed = document.createElement("div");
    imgAndBreed.id = dog.id
    let dogImg = document.createElement("img")
    dogImg.src = dog.image
    dogImg.className = "dog-image"
    let breedName = document.createElement("p")
    breedName.innerText = dog.breed
    dogDiv.append(imgAndBreed)
    imgAndBreed.append(breedName, dogImg)
  })
}

function getBigDogs() {
  fetch("http://localhost:3000/dogs")
  .then(response => response.json())
  .then(data =>{
    const largeDogs = data.filter(dog => dog.size === 4)
    console.log(largeDogs)
    getDogs(largeDogs)
  })
 
}
 

// fetch('path/to/your/json/file.json')
//   .then(response => response.json())
//   .then(data => {
//     const peopleByHeight = data.filter(person => person.height === 175); // replace 175 with the height you want to fetch
//     console.log(peopleByHeight); // this will log an array of people with height 175
//   })
//   .catch(error => console.error(error));
  





 
