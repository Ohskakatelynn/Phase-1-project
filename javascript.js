fetch ( "http://localhost:3000/dogs" )
    .then ( r=> r.json() )
    .then (data => renderPage(data))

const dogDiv = document.getElementById("dog-image")
function renderPage(dogs){
     dogs.forEach(dog => {
        let dogImage = document.createElement( 'img' )
        dogImage.src = dog.image
        dogDiv.append(dogImage)
        })
    }
   
