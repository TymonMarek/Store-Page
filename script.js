// Constants
const searchPhrases = ["Sunglasses", "Shirts", "T-Shirts", "Shorts", "Pants", "Socks", "Shoes", "Hats", "Gloves", "Jackets", "Sweaters", "Sweatshirts", "Underwear", "Swimwear", "Dresses"];

// Variables
let searchInputBox = document.getElementById("searchInputBox");
let closeMenuButton = document.getElementById("closeMenuButton");
let menuButton = document.getElementById("menuButton");
let navBar = document.getElementById("navBar");

// Functions
let changeSearchPhrase = () => {
  let randomPhrase = searchPhrases[Math.floor(Math.random() * searchPhrases.length)];
  searchInputBox.setAttribute("placeholder", `Search for "${randomPhrase}"...`);
};

let toggleMenu = () => {
  navBar.classList.toggle("open");
  navBar.classList.toggle("close");
};

// Events
menuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);

setInterval(changeSearchPhrase, 5000);
