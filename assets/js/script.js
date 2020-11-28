let apiKey = "&key=L6hnfi6qPY2Ymz7I2e8VxHfWKuXZeyjl6cYxhyIclCcLCJjnHw";
let dogUrl = "https://dog.ceo/api/breeds/list/all"
let selectBreeds = document.getElementById("dog-breed");


let dogBreeds = ["Affenpinscher", "African", "Airedale", "Akita", "Appenzeller", "Australian Shepard", "Basenji", "Beagle", "Bluetick", "Borzoi", "Bouvier", "Boxer", "Barbacon", "Briard", "Norwegian Buhund", "Boston Bulldog", "English Bulldog", "French Bulldog", "Staffordshire Bullterrier", "Cairn", "Australian Cattledog", "Chihuahua", "Chow", "Clumber", "Cockapoo", "Border Collie", "Coonhound", "Cardigan Corgi", "Cotondetulear", "Dachshund", "Dalmatian", "Great Dane", "Scottish Deerhound", "Dhole", "Dingo", "Doberman", "Norwegian Elkhound", "entlebucher", "Eskimo", "Lapphund Finnish", "Bichon Frise", "Germanshepard", "Italian Greyhound", "Groenendael", "Havanese", "Afghan Hound", "Basset Hound", "Blood Hound", "English Hound", "Ibizan Hound", "Plott Hound", "Walker Hound", "Husky", "Keeshond", "Kelpie", "Komondor", "Kuvasz", "Labrador", "Leonberg", "Lhasa", "Malamute", "Malinois", "Maltese", "Bull Mastiff", "English Mastiff", "Tibetan Mastiff", "Mexicanhairless", "Mix", "Bernese Mountain", "Swiss Mointain", "Newfoundland", "Otterhound", "Caucasian Ovcharka", "Papillon", "Pekinese", "Pembroke", "Miniature Pinscher", "Pitbull", "German Pointer", "Germanlonghair Pointer", "Pomeranian", "Miniature Poodle", "Standard Poodle", "Toy Poodle", "Pug", "Puggle", "Pyrenees", "Redbone", "Chesapeake Retriever", "Curly Retriever", "Flatcoated Retriever", "Golden Retriever", "Rhodesian Ridgeback", "Rottweiler", "Saluki", "Samoyed", "Schipperke", "Giant Schnauzer", "Miniature Schnauzer", "English Setter", "Gordon Setter", "Irish Setter", "English Sheepdog", "Shetland Sheepdog", "Shiba", "Shihtzu", "Blenheim Spaniel", "Brittany Spaniel", "Cocker Spaniel", "Irish Spaniel", "Japanese Spaniel", "Sussex Spaniel", "Welsh Spaniel", "English Springer", "Stbernard", "American Terrier", "Australian Terrier", "Bedlington Terrier", "Border Terrier", "Dandie Terrier", "Fox Terrier", "Irish Terrier", "Kerryblue Terrier", "Lakeland Terrier", "Norfolk Terrier", "Norwich Terrier", "Patterdale Terrier", "Russell Terrier", "Scottish Terrier", "Sealyham Terrier", "Silky Terrier", "Tibetan Terrier", "Toy Terrier", "Westhighland Terrier", "Wheaten Terrier", "Yorkshire Terrier", "Vizsla", "Spanish Waterdog", "Weimaraner", "Whippet", "Irish Wolfhound"];

// carousel 
// bulmaCarousel.attach('#carousel-demo', {
//     slidesToScroll: 1,
//     slidesToShow: 4
// });

// Get breed list from API Array
let breedList = function () {
    fetch(dogUrl)
    .then(function(response) {
        response.json()   
    .then(function(data) {
        console.log(data);
        // let breed = "";
        Object.keys(data.message).forEach(list => {
            let breed = document.createElement("option");
            breed.textContent = list;
            breed.value = list;
            selectBreeds.appendChild(breed);

        })
        })
    })
}

breedList();

// pet form breed array in Modal 

// for (let i = 0; i < dogBreeds.length; i++) {
//     let breed = dogBreeds[i];
    // let el = document.createElement("option");
    // el.textContent = breed;
    // el.value = breed;
    // selectBreeds.appendChild(el);
    
// }














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