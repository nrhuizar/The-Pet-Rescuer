let apiKey = "api_key=f45eb31a-c19e-4ac6-8c65-5035ba2b4484";
let dogUrl = "https://api.TheDogAPI.com/v1/breeds?"
let dogBreeds = document.getElementById("dog-breed");
let dogPic = document.getElementById("dog-pic");
let nameEl = document.getElementById("dog-name");
let factEl = document.getElementById("dog-info");
let favContainer = document.getElementById("fav-breeds");
let breeds = [];


// carousel 
// bulmaCarousel.attach('#carousel-demo', {
//     slidesToScroll: 1,
//     slidesToShow: 4
// });

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
    nameEl.innerHTML = "";
    nameEl.append(chosenBreed);

    
    if (chosenBreed) {
        var favButton = document.createElement("i");
        favButton.className = "button icon"; 
    
        var favIcon = document.createElement("i");
        favIcon.className = "far fa-star"; 

        favButton.appendChild(favIcon);

        nameEl.appendChild(favButton);

        favButton.onclick = function() {
            addToFav();
        };

        saveBreed();
    }
}

//let favButton = function() {
    //generate fav button   
    

    //saveBreed();
//}

// display dog breed information
let breedInfo = function (data) {
    let dWeight = document.getElementById("dog-weight");
    dWeight.textContent= "Average Weight: " + data[0].breeds[0].weight.imperial + " lbs";
    
    let dHeight = document.getElementById("dog-height");
    dHeight.textContent= "Average Height: " + data[0].breeds[0].height.imperial + " inches";

    let dJob = document.getElementById("dog-job");
    dJob.textContent= "Bred For: " + data[0].breeds[0].bred_for;

    let dLife = document.getElementById("dog-life");
    dLife.textContent= "Life Span: " + data[0].breeds[0].life_span;

    let dTemperment = document.getElementById("dog-temperment");
    dTemperment.textContent= "Temperment: " + data[0].breeds[0].temperament;
}

// add to favorite bar
let addToFav = function() {
    let favE1 = document.getElementById("dog-name");
    let cln = favE1.cloneNode(true);
    favContainer.appendChild(cln);
    cln = [];
    cln = breeds
    cln.push(breeds);
    breeds++;
    // // on click {
//    var breed = ???
//    // saveBreed(breed)
// }
    saveBreed();
}


// function saveBreed(data){
//  // save data to localStorage
//  refreshFavs()
// }
let saveBreed = function() {
    localStorage.setItem("breeds", JSON.stringify(breeds));
}

// function refreshFavs() {
//  // empty favs element
//  // getItem all the favs from local storage  
//  // repopulate
// }
let loadBreeds = function() {
    let savedBreeds = localStorage.getItem("breeds");
    console.log(savedBreeds);
    if (!savedBreeds) {
        return false
    }

    savedBreeds = JSON.parse(savedBreeds);

    for (var i = 0; i < savedBreeds.length; i++) {
        addToFav(savedBreeds[i]);
    }
}

dogBreedList();

loadBreeds();

dogBreeds.addEventListener("change", function() {

    breedImages();
    breedName();
 

    return;
});
















// // Modals

// let rootEl = document.documentElement;
// let allModals = getAll('.modal');
// let modalButtons = getAll('.modal-button');
// let modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

// if (modalButtons.length > 0) {
//         modalButtons.forEach(function (el) {
//             el.addEventListener('click', function () {
//                 let target = document.getElementById(el.dataset.target);
//                 rootEl.classList.add('is-clipped');
//                 target.classList.add('is-active');
//         });
//     });
// }

// if (modalCloses.length > 0) {
//     modalCloses.forEach(function (el) {
//         el.addEventListener('click', function () {
//             closeModals();
//         });
//     });
// }

// document.addEventListener('keydown', function (event) {
//     let e = event || window.event;
//     if (e.keyCode === 27) {
//         closeModals();
//     }
// });

// function closeModals() {
//     rootEl.classList.remove('is-clipped');
//     allModals.forEach(function (el) {
//         el.classList.remove('is-active');
//     });
// }

// // Functions

// function getAll(selector) {
//     return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
// };