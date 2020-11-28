let apiKey = "&key=L6hnfi6qPY2Ymz7I2e8VxHfWKuXZeyjl6cYxhyIclCcLCJjnHw";
let dogUrl = "https://dog.ceo/api/breeds/list/all"
let dogBreeds = document.getElementById("dog-breed");
let dogPic = document.getElementById("dog-pic");
let nameEl = document.getElementById("dog-name");
let factEl = document.getElementById("dog-info");


// carousel 
// bulmaCarousel.attach('#carousel-demo', {
//     slidesToScroll: 1,
//     slidesToShow: 4
// });

// generate pictures from Dog API
let dogBreedList = function () {
    fetch(dogUrl)
    .then(function(response) {
        response.json()   
        .then(function(data) {
            // console.log(data);
            Object.keys(data.message).forEach(list => {
                let breed = document.createElement("option");
                breed.textContent = list;
                breed.value = list;
                dogBreeds.appendChild(breed);

            })

        })
    })
}

// Get breed images from DogAPI
let breedImages = function() {
    let chosenBreed = dogBreeds.options[dogBreeds.selectedIndex].value;
    let imageUrl = "https://dog.ceo/api/breed/" + chosenBreed + "/images/random";

    fetch(imageUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            console.log(data);
            dogsEl = data.message;
            dogPic.setAttribute("src", dogsEl);
            dogPic.setAttribute("alt", "Image of " + dogsEl);
            
        })
    })
}

// append Breed Name to Title in right card
let breedName = function () {
    let chosenBreed = dogBreeds.options[dogBreeds.selectedIndex].value;
    
    nameEl.innerHTML = "";
    nameEl.append(chosenBreed);
    
}

// get dog breed facts
let breedfacts = function () {
    let chosenBreed = dogBreeds.options[dogBreeds.selectedIndex].value;
    let factUrl = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&explaintext=1&list=search&srsearch=dog_" + chosenBreed + "&prop=extracts&exintro=1&explaintext=1&redirects=1";

    fetch(factUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            console.log(data);
            
            fact = data.query.search[0].snippet;
            // fact.remove("<span>");
            factEl.innerHTML = "";
            factEl.append(fact);
            
            
        })
    })

}

dogBreedList();

dogBreeds.addEventListener("change", function() {
    breedImages();
    breedName();
    breedfacts();

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