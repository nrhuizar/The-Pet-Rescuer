var petContainerE1 = document.querySelector("#pet-container");
var petModal = document.querySelector("#petModal");
var btnClose = document.querySelector("#btnClose");
var span = document.getElementsByClassName("close")[0];

// Display Pet Results
var displayPets = function(animals) {
    if (animals.length === 0) {
        petContainerE1.textContent = "No Pets Found.";
        return;
    }

    petContainerE1.textContent = "";

    for (var i = 0; i < animals.length; i++) {
        var petName = animals[i].name;

        var petE1 = document.createElement("a");
        petE1.classList = "content";
        
        petName = document.createElement("span");
        petName.textContent = petName;

        petE1.appendChild(petE1);
    }
};

// Opens Pet Modal
petContainerE1.onclick = function() {
    petModal.classList = "is-active";
};



// Closes Modal
btnClose.onclick = function() {
    petModal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == petModal) {
        petModal.style.display = "none";       
    }
};


// Hero Carousel
bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 4
});

petContainerE1.addEventListener("click", petModal);