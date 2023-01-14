// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
 
const countriesContainer = document.querySelector(".countries-container");


// 2 - Passer les données à une variable
let countriesData = [];


// 3 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
async function fetchCountries() {

    await fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        countriesData = data;
    });
    console.log(countriesData);

    countriesDisplay();
}
window.addEventListener("load", fetchCountries());


// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
function countriesDisplay() {
    countriesContainer.innerHTML = countriesData.map((country) => 
    `
        <div class="card">
            <img src=${country.flags.svg} alt="drapeau ${country.translations.fra.common}"
            <h2>${country.translations.fra.common}</h2>
            <h4>${country.capital}</h4>

// fonction toLocaleString(), qui permet d'avoir un espace entre les milliers.
            <p>Population : ${country.population.toLocaleString()}</p>
        </div>
    
    `).join("");
}




// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

