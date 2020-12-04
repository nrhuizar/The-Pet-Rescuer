let apiKey = "api_key=f45eb31a-c19e-4ac6-8c65-5035ba2b4484";
let dogUrl = "https://api.TheDogAPI.com/v1/breeds?"
let dogBreeds = document.getElementById("dog-breed");
let dogPic = document.getElementById("dog-pic");
let nameEl = document.getElementById("dog-name");
let factEl = document.getElementById("dog-info");
let favContainer = document.getElementById("fav-breeds");

let breeds = [];

// carousel 
bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 3
});
// call carousel pictures
let dogCarousel = function() {
    dogPic1();
    dogPic2();
    dogPic3();
    dogPic4();
    dogPic5();
    dogPic6();
    dogPic7();
    dogPic8();
}

// functions that call each picture for the carousel
let dogPic1 = function() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        response.json()   
        .then(function(data) {
            let randomPic = data.message;
            let p1 = document.getElementById("pic1");
            p1.setAttribute("src", randomPic);
            p1.setAttribute("alt", "Image of Random Dog");
            p1.setAttribute("class", "carousel-image");            
        })
    })
}
let dogPic2 = function() {
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        response.json()   
        .then(function(data) {
            let randomPic = data.message;
            let p2 = document.getElementById("pic2");
            p2.setAttribute("src", randomPic);
            p2.setAttribute("alt", "Image of Random Dog"); 
            p2.setAttribute("class", "carousel-image");            
        })
    })
}
let dogPic3 = function() {
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        response.json()   
        .then(function(data) {
            let randomPic = data.message;
            let p3 = document.getElementById("pic3");
            p3.setAttribute("src", randomPic);
            p3.setAttribute("alt", "Image of Random Dog");
            p3.setAttribute("class", "carousel-image");   
        })
    })
}
let dogPic4 = function() {
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        response.json()   
        .then(function(data) {
            let randomPic = data.message;
            let p4 = document.getElementById("pic4");
            p4.setAttribute("src", randomPic);
            p4.setAttribute("alt", "Image of Random Dog");
            p4.setAttribute("class", "carousel-image"); 
        })
    })
}
let dogPic5 = function() {
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        response.json()   
        .then(function(data) {
            let randomPic = data.message;
            let p5 = document.getElementById("pic5");
            p5.setAttribute("src", randomPic);
            p5.setAttribute("alt", "Image of Random Dog"); 
            p5.setAttribute("class", "carousel-image");   
        })
    })
}
let dogPic6 = function() {
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        response.json()   
        .then(function(data) {
            let randomPic = data.message;
            let p6 = document.getElementById("pic6");
            p6.setAttribute("src", randomPic);
            p6.setAttribute("alt", "Image of Random Dog"); 
            p6.setAttribute("class", "carousel-image");   
        })
    })
}
let dogPic7 = function() {
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        response.json()   
        .then(function(data) {
            let randomPic = data.message;
            let p7 = document.getElementById("pic7");
            p7.setAttribute("src", randomPic);
            p7.setAttribute("alt", "Image of Random Dog");
            p7.setAttribute("class", "carousel-image"); 
        })
    })
}
let dogPic8 = function() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        response.json()   
        .then(function(data) {
            let randomPic = data.message;
            let p8 = document.getElementById("pic8");
            p8.setAttribute("src", randomPic);
            p8.setAttribute("alt", "Image of Random Dog"); 
            p8.setAttribute("class", "carousel-image");    
        })
    })
}

// generate name list from Dog API
let dogBreedList = function () {
    fetch(dogUrl + apiKey)
    .then(function(response) {
        response.json()   
        .then(function(data) {
            // console.log(data);
            menuData(data);
            
            
        })
    })
}

// function gets breed names and appends them to the dropdown
let menuData = function (data) {
    for (let i = 0; i < data.length; i++) {
        let breedName = data[i].name;
        let breedID = data[i].id;
        // console.log(breedID);
        let breed = document.createElement("option");
        breed.textContent = breedName;
        breed.value = breedName;
        breed.setAttribute("id", breedID);
        dogBreeds.appendChild(breed);
    }
}

// Get breed images from DogAPI
let breedImages = function() {
    let chosenBreed = dogBreeds.options[dogBreeds.selectedIndex].id;
    let imageUrl = "https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=" + chosenBreed + "&" + apiKey;

    fetch(imageUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            // console.log(data);

            //generate dog image and append
            dogsEl = data[0].url;
            dogPic.setAttribute("src", dogsEl);
            dogPic.setAttribute("alt", "Image of " + dogsEl);
           
            //get dog breed information
        breedInfo(data);
        })
    })
}

// append Breed Name to Title in right card
let breedName = function () {
    let chosenBreed = dogBreeds.options[dogBreeds.selectedIndex].value;
    let chosenBreedID = dogBreeds.options[dogBreeds.selectedIndex].id;
    nameEl.innerHTML = "";
    nameEl.append(chosenBreed);

    
    // if (nameEl) {
        // create icon element
        var favButton = document.createElement("i");
        favButton.className = "button icon"; 
        var favIcon = document.createElement("i");
        favIcon.className = "far fa-star"; 
        favButton.appendChild(favIcon);

        // set attributes for button icon
        favButton.classList = "button is-warning is-light is-small is-outlined";
        favButton.setAttribute("onclick", `addToFav()`);

        
    
        let breedSaveBtn = document.getElementById("breedSaveBtn");
        breedSaveBtn.innerHTML = "";
        breedSaveBtn.textContent = "Save This Breed: ";
        breedSaveBtn.appendChild(favButton);
        
        favButton.onclick = function(event) {
                    chosenBreed = event.currentTarget.parentElement.innerText;
                    // console.log(chosenBreed);
                    addToFav(chosenBreed);
        };
        // favButton.onclick = function() {
        //     addToFav();
        // };
    // }
}

// display dog breed information
let breedInfo = function (data) {

    // dog weight
    let txtWeight = document.getElementById("weightTitle");
    txtWeight.textContent = "Average Weight: ";

    let dWeight = document.getElementById("dog-weight");
    dWeight.textContent =  data[0].breeds[0].weight.imperial + " lbs";

    // dog height
    let txtHeight = document.getElementById("heightTitle");
    txtHeight.textContent = "Average Height: ";

    let dHeight = document.getElementById("dog-height");
    dHeight.textContent = data[0].breeds[0].height.imperial + " inches";

    // dog job
    let txtJob= document.getElementById("jobTitle");
    txtJob.textContent = "Bred For: ";

    let dJob = document.getElementById("dog-job");
    dJob.textContent=  data[0].breeds[0].bred_for;

    // dog life span
    let txtLife= document.getElementById("lifeTitle");
    txtLife.textContent = "Life Span: ";
 
    let dLife = document.getElementById("dog-life");
    dLife.textContent = data[0].breeds[0].life_span;

    // dog temperment
    let txtTemp= document.getElementById("tempTitle");
    txtTemp.textContent = "Temperment: ";
 
    let dTemperment = document.getElementById("dog-temperment");
    dTemperment.textContent = data[0].breeds[0].temperament;
}

// add to localStorage
// let addToFav = function(value) {
    // get current array in ls, or use an empty array if null    
    // if (breeds) {
    //     breeds.value = breeds;
    // } else {
    //     breeds = [];
    // }
    // push value to this array ^
    
// add to favorite bar
let addToFav = function(breeds) {

    var favListE1 = document.createElement("li");
    favListE1.className = "fav-breed";

    favContainer.appendChild(favListE1);


    let chosenBreedID = dogBreeds.options[dogBreeds.selectedIndex].id;
    let favE1 = document.getElementById("dog-name");
    let cln = favE1.cloneNode(true);
    cln.className = "fav-breed button is-info is-light is-medium is-outlined";
    cln.setAttribute("id", chosenBreedID)
    cln.setAttribute("onclick", `savedBreedImages("${cln.id}")`);
    favListE1.appendChild(cln);
    
    

    cln.value = breeds

    breeds.push(value);

    for (let i = 0; i < breeds.length; i++) {
    // set it back to localStorage
        if (breeds) {
        localStorage.setItem("breeds", JSON.stringify(breeds));
        displayFaves();

    // console.log(breeds);
        } 
    }

    // // on click {
//    var breed = ???
//    // saveBreed(breed)
// }
    // saveBreed();
}

// display to favContainer
let displayFaves = function(breeds) {
    // clear favContainer
    favContainer.innerHTML = "";
    // pull localStorage
    localStorage.getItem(breeds);
    // console.log(breeds);
    // create new cards
    for (let i = 0; i < breeds.length; i++) {
    let favBreed = document.createElement("li");
    favBreed.className = "card title has-text-link-dark is-2";
    favBreed.innerHTML = breeds[i];
    // append them to favContainer
    favContainer.appendChild(favBreed);
    }
}

let loadBreeds = function() {
    let breeds = localStorage.getItem("breeds");

    if (!breeds) {
        return false
    }
       
    breeds = JSON.parse(breeds);
    for (var i = 0; i < breeds.length; i++) {
        displayFaves(breeds);
    }

}

// dogBreedList();
// addToFav();



//get saved breed images and append to main content
let savedBreedImages = function(id) {
    // let chosenBreed = favListE1.id;
    let imageUrl = "https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=" + id + "&" + apiKey;

    fetch(imageUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            // console.log(data);

            //generate dog image and append
            dogsEl = data[0].url;
            dogPic.setAttribute("src", dogsEl);
            dogPic.setAttribute("alt", "Image of " + dogsEl);
        
            //get dog breed information
        savedBreedInfo(data);
        })
    })
}

// display dog breed information
let savedBreedInfo = function (data) {
    // dog breed
    let breedName = document.getElementById("dog-name");
    breedName.textContent = data[0].breeds[0].name;
    // dog weight
    let txtWeight = document.getElementById("weightTitle");
    txtWeight.textContent = "Average Weight: ";

    let dWeight = document.getElementById("dog-weight");
    dWeight.textContent =  data[0].breeds[0].weight.imperial + " lbs";

    // dog height
    let txtHeight = document.getElementById("heightTitle");
    txtHeight.textContent = "Average Height: ";

    let dHeight = document.getElementById("dog-height");
    dHeight.textContent = data[0].breeds[0].height.imperial + " inches";

    // dog job
    let txtJob= document.getElementById("jobTitle");
    txtJob.textContent = "Bred For: ";

    let dJob = document.getElementById("dog-job");
    dJob.textContent=  data[0].breeds[0].bred_for;

    // dog life span
    let txtLife= document.getElementById("lifeTitle");
    txtLife.textContent = "Life Span: ";

    let dLife = document.getElementById("dog-life");
    dLife.textContent = data[0].breeds[0].life_span;

    // dog temperment
    let txtTemp= document.getElementById("tempTitle");
    txtTemp.textContent = "Temperment: ";

    let dTemperment = document.getElementById("dog-temperment");
    dTemperment.textContent = data[0].breeds[0].temperament;
}



// event listener for dropdown menu
dogBreeds.addEventListener("change", function() {
    breedImages();
    breedName();
    
    return;
});

// call main page functions
dogBreedList();
dogCarousel();
loadBreeds();
