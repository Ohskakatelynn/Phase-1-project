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
    })
  
const formDiv = document.querySelector("#form-div")
const questionForm = document.querySelector("#question-form")
questionForm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  if (e.target.choice.value == "yes") {
    getBigDogs()
  } else if (e.target.choice.value == "no"){
    getNotBigDogs()
  } 
  formDiv.style.display= "none"
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
    let breedName = document.createElement("h2")
    breedName.innerText = dog.breed
    dogDiv.append(imgAndBreed)
    imgAndBreed.append(breedName, dogImg)
    
    dogImg.addEventListener("click", () => {
      const list = document.getElementById("ul")
      const itemsOnList = document.createElement("li")
      itemsOnList.innerText = dog.description
      // itemsOnList.innerText = dog["energy-level"]
      // itemsOnList.innerText = dog.price
      // itemsOnList.innerText = dog.friendly
      // itemsOnList.innerText = dog.sheds
      // itemsOnList.innerText = dog.sassy
      list.append(itemsOnList)
      imgAndBreed.append(list)
      
      
    
    })
   

    
    // breedName.addEventListener("click", () => {
    //   const list = document.getElementById("ul")
    //   const itemsOnList = document.createElement("li")
    //   list.append(itemsOnList)
    //   itemsOnList.innerText = dog["energy-level"]
    //   itemsOnList.innerText = dog.price
    //   itemsOnList.innerText = dog.friendly
    //   itemsOnList.innerText = dog.sheds
    //   itemsOnList.innerText = dog.sassy
    //   breedName.append(list)

    })
  }

  // function dogsDetails(dogs){
  //   dogs.forEach(dog => {
  //   const list = document.getElementById("ul")
  //   const itemsOnList = document.createElement("li")
  //   itemsOnList.innerText = dog["energy-level"]
  //   itemsOnList.innerText = dog.price
  //   itemsOnList.innerText = dog.friendly
  //   itemsOnList.innerText = dog.sheds
  //   itemsOnList.innerText = dog.sassy
  //   list.append(itemsOnList)
    
    
  //   })
  // }

function getBigDogs() {
  fetch("http://localhost:3000/dogs")
  .then(response => response.json())
  .then(data =>{
    const largeDogs = data.filter(dog => dog.size === 4)
    getDogs(largeDogs)
    let showBigDogs = true
    if (showBigDogs) {
      const notBigDogs = document.querySelectorAll(".not-big")
      for (let i = 0; i < notBigDogs.length; i++) {
        notBigDogs[i].style.display = "none";
      }
    }
  })
}
 function getNotBigDogs(){
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(data =>{
      const notBigDogs = data.filter(dog => dog.size < 4)
      getDogs(notBigDogs)
      let showBigDogs = true
    if (showBigDogs) {
      const bigDogs = document.querySelectorAll(".big")
      for (let i = 0; i < bigDogs.length; i++) {
        bigDogs[i].style.display = "none";
      }
    }
  })
 }