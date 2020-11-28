let apiKey = "&key=L6hnfi6qPY2Ymz7I2e8VxHfWKuXZeyjl6cYxhyIclCcLCJjnHw";
let petfinderUrl = "https://api.petfinder.com/v2/animals?type=dog"
let petfinderToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJMNmhuZmk2cVBZMlltejdJMmU4VnhIZldLdVhaZXlqbDZjWXhoeUljbENjTENKam5IdyIsImp0aSI6ImFlYTI0NDgzYjJhNTNmMzYzMzU5OGZmNjIxOTliZGY1ZTA1NGZhNmFmNmYxZDVlNGQ1NzY0NmU3YTVjZWE1MzBkZThhZTBiMzhhZjdiNjBkIiwiaWF0IjoxNjA2MjYwNzc2LCJuYmYiOjE2MDYyNjA3NzYsImV4cCI6MTYwNjI2NDM3Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.DLJ9sEasUaG4qZy_bFPZUbEUkNBw7jtLavBLIKk0ZM4cM22OoXHpN1762fiSk3lAWI1p3r_Wga2OjS2oRr6C5Q0LtVFvedQw98SBIfSUDmvG2jBVikytSVuSQSVx-qAMgfhelcYVWfonWO_kL25zNx-48RgPPqU2uDdWhh2xGxOSxkpgrkhGIIqb8iKgWSdHb1w3V8Zfkrw_aoat_L261Vhq_Sc2FJAJuDeVt7HB1qlexgj-J3YSJBi5x0N64yUgiX063HzCskdeqsBVCgWmdn8mIgLzdlDrN0W2DeQQvPcVxBBVbo9AshSLdYoTgEUZXRmLb73NLOzPzjjWRLfFEA";

// carousel 
// bulmaCarousel.attach('#carousel-demo', {
//     slidesToScroll: 1,
//     slidesToShow: 4
// });



// let petSearch = function (data) {
//     let petfinderUrl = "https://api.petfinder.com/v2/animals?type=dog" + apiKey;

//     fetch(petfinderUrl)
//     .then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         })
//     })
// }


// petSearch();


// pet form breed array in Modal 
let dogBreeds = ["Affenpinscher", "African", "Airedale", "Akita", "Appenzeller", "Australian Shepard", "Basenji", "Beagle", "Bluetick", "Borzoi", "Bouvier", "Boxer", "Barbacon", "Briard", "Norwegian Buhund", "Boston Bulldog", "English Bulldog", "French Bulldog", "Staffordshire Bullterrier", "Cairn", "Australian Cattledog", "Chihuahua", "Chow", "Clumber", "Cockapoo", "Border Collie", "Coonhound", "Cardigan Corgi", "Cotondetulear", "Dachshund", "Dalmatian", "Great Dane", "Scottish Deerhound", "Dhole", "Dingo", "Doberman", "Norwegian Elkhound", "entlebucher", "Eskimo", "Lapphund Finnish", "Bichon Frise", "Germanshepard", "Italian Greyhound", "Groenendael", "Havanese", "Afghan Hound", "Basset Hound", "Blood Hound", "English Hound", "Ibizan Hound", "Plott Hound", "Walker Hound", "Husky", "Keeshond", "Kelpie", "Komondor", "Kuvasz", "Labrador", "Leonberg", "Lhasa", "Malamute", "Malinois", "Maltese", "Bull Mastiff", "English Mastiff", "Tibetan Mastiff", "Mexicanhairless", "Mix", "Bernese Mountain", "Swiss Mointain", "Newfoundland", "Otterhound", "Caucasian Ovcharka", "Papillon", "Pekinese", "Pembroke", "Miniature Pinscher", "Pitbull", "German Pointer", "Germanlonghair Pointer", "Pomeranian", "Miniature Poodle", "Standard Poodle", "Toy Poodle", "Pug", "Puggle", "Pyrenees", "Redbone", "Chesapeake Retriever", "Curly Retriever", "Flatcoated Retriever", "Golden Retriever", "Rhodesian Ridgeback", "Rottweiler", "Saluki", "Samoyed", "Schipperke", "Giant Schnauzer", "Miniature Schnauzer", "English Setter", "Gordon Setter", "Irish Setter", "English Sheepdog", "Shetland Sheepdog", "Shiba", "Shihtzu", "Blenheim Spaniel", "Brittany Spaniel", "Cocker Spaniel", "Irish Spaniel", "Japanese Spaniel", "Sussex Spaniel", "Welsh Spaniel", "English Springer", "Stbernard", "American Terrier", "Australian Terrier", "Bedlington Terrier", "Border Terrier", "Dandie Terrier", "Fox Terrier", "Irish Terrier", "Kerryblue Terrier", "Lakeland Terrier", "Norfolk Terrier", "Norwich Terrier", "Patterdale Terrier", "Russell Terrier", "Scottish Terrier", "Sealyham Terrier", "Silky Terrier", "Tibetan Terrier", "Toy Terrier", "Westhighland Terrier", "Wheaten Terrier", "Yorkshire Terrier", "Vizsla", "Spanish Waterdog", "Weimaraner", "Whippet", "Irish Wolfhound"];
let selectBreeds = document.getElementById("dog-breed");

for (let i = 0; i < dogBreeds.length; i++) {
    let breed = dogBreeds[i];
    let el = document.createElement("option");
    el.textContent = breed;
    el.value = breed;
    selectBreeds.appendChild(el);
    
}

// Modals

let rootEl = document.documentElement;
let allModals = getAll('.modal');
let modalButtons = getAll('.modal-button');
let modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

if (modalButtons.length > 0) {
        modalButtons.forEach(function (el) {
            el.addEventListener('click', function () {
                let target = document.getElementById(el.dataset.target);
                rootEl.classList.add('is-clipped');
                target.classList.add('is-active');
        });
    });
}

if (modalCloses.length > 0) {
    modalCloses.forEach(function (el) {
        el.addEventListener('click', function () {
            closeModals();
        });
    });
}

document.addEventListener('keydown', function (event) {
    let e = event || window.event;
    if (e.keyCode === 27) {
        closeModals();
    }
});

function closeModals() {
    rootEl.classList.remove('is-clipped');
    allModals.forEach(function (el) {
        el.classList.remove('is-active');
    });
}

// Functions

function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
};