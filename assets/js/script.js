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
    }
}

//let favButton = function() {
    //generate fav button   
    

    //saveBreed();
//}

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

// add to favorite bar
let addToFav = function(breeds) {
    let favE1 = document.getElementById("dog-name");
    let cln = favE1.cloneNode(true);
    cln.className = "fav-breed title has-text-link-dark is-2";
    favContainer.appendChild(cln);
    
    var favListE1 = document.createElement("li");
    favListE1.className = "fav-breed";

    favContainer.appendChild(favListE1);

    cln.value = breeds

    breeds = [];

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

// event listener for dropdown menu
dogBreeds.addEventListener("change", function() {
    breedImages();
    breedName();
    
    return;
});

// call main page functions
dogBreedList();
dogCarousel();













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