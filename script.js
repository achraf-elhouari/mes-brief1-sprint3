const API_URL = "https://countries.dev/countries";

// Tous les pays reçus de l'API (rempli une seule fois, au chargement)

const countrySection = document.querySelector('#country-list');

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
*
* @returns {Promise<Array>} Le tableau de tous les pays.
*/
async function fetchCountries() {
  try {
    const response = await fetch('https://countries.dev/countries');
    if (!response.ok)
      throw new Error('Erreur' + response.status);
    const data = await response.json();
    return data;
  }
  catch (error){
    console.error('Erreur : ' + error.message);
  }
}
const data = await fetchCountries();

let allCountries = [...data];
console.log(allCountries);
/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */
function createCountryCard(country) {
  const article = document.createElement('article');
  const image = document.createElement('img');
  image.src = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg';
  image.alt = `${country.name}'s flag`;
  image.className = "w-fit rounded-2xl";

  article.append(image);

  const countryTitle = document.createElement('h2');
  countryTitle.textContent = country.name;
  countryTitle.className = "text-2xl font-bold";

  article.append(countryTitle);

  const div1 = document.createElement('div');
  const capitaleP = document.createElement('p');
  const capitaleName = document.createElement('p');
  capitaleP.textContent = 'Capitale';
  capitaleName.textContent = country.capital;
  div1.className = "flex justify-between items-center";

  div1.append(capitaleP, capitaleName);

  const div2 = document.createElement('div');
  const populationP = document.createElement('p');
  const populationNum = document.createElement('p');
  populationP.textContent = 'Population';
  populationNum.textContent = country.population;
  div2.className = "flex justify-between items-center";

  div2.append(populationP, populationNum);

  article.append(div1, div2);
  article.className = 'border-2 rounded-2xl p-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2';
  return article;
}

function fetch_region(){
  
}

/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
function displayCountries(countries) {
  countrySection.textContent = "";
  for (let i = 0; i < 10; i++){
    countrySection.append(createCountryCard(allCountries[i]));
  }
}
displayCountries(allCountries);

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
function filterCountries() {
  // TODO
}


// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}


// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO
}

init();
