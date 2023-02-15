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
  
    
const formDiv = document.querySelector("#form-div")
const questionForm = document.querySelector("#question-form")
questionForm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  if (e.target.choice.value == "yes") {
    console.log( "big dogs" )
    getBigDogs()

  } else if (e.target.choice.value == "no"){
    console.log( "small dogs" )
    getSmallDogs()

  } 
})

function getDogs(dogs){
  dogs.forEach(dog => {
    let imgAndBreed = document.createElement("div");
    imgAndBreed.id = dog.id
    if(dog.size === 4){
      imgAndBreed.className = "big"
    } else if (dog.size < 4){
      imgAndBreed.className = "not-big"
    }
    let dogImg = document.createElement("img")
    dogImg.src = dog.image
    dogImg.className = "dog-image"
    dogImg.addEventListener("mouseover", () => {
      alert("Give dog pets")
    })
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
    let showBigDogs = true
    if (showBigDogs) {
      const smallDogs = document.querySelectorAll(".small")
      for (let i = 0; i < smallDogs.length; i++) {
        smallDogs[i].style.display = "none";
      }
      console.log([smallDogs])
    }
    
  })
 
}
 function getSmallDogs(){
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(data =>{
      const smallDogs = data.filter(dog => dog.size < 4)
      // console.log(smallDogs)
      getDogs(smallDogs)
      let showBigDogs = true
    if (showBigDogs) {
      const bigDogs = document.querySelectorAll(".big")
      for (let i = 0; i < bigDogs.length; i++) {
        bigDogs[i].style.display = "none";
      }
      
    }
      
  })

 }
 


  





 
