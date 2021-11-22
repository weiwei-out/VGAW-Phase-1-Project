/*
1.LOGO - Flatiron Lounge
2.TITLE - drink name
3.IMAGE - default or drink image
4.CONTENT - about drink
5.SEARCH - search bar
6.RANDOM - randomize button 
*/
const randomAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const searchAPI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


const TITLE = document.getElementById("TITLE");
const IMAGE = document.getElementById("IMAGE");
const CONTENT = document.getElementById("CONTENT");
const RANDOM = document.getElementById("RAND");
const SEARCH = document.getElementById('SEARCH');
const INSTRUCT = document.getElementById("INSTRUCTIONS");


function init(){
    //Initialize Default Page
    renderPage();

    //Add Click Event for Randomize Button 
    RANDOM.addEventListener("click", randomDrink);

    //Add Search Functionality
    SEARCH.addEventListener("submit", searchDrink);
    
};

function renderPage(){
    //Set Logo
    document.getElementById("LOGO").src = "./logo.png";
};


function randomDrink(){
    fetch(randomAPI)
        .then(response => response.json())
        .then(populate)

    function populate(data){
        sht = data["drinks"][0];
        //Set TITLE = Name of Drink
        TITLE.textContent = sht["strDrink"];

        //Set IMAGE = Picture of Drink
        IMAGE.src = sht["strDrinkThumb"];

        //Set CONTENT = Instructions 
        CONTENT.textContent = sht["strInstructions"];

        //Turn on Instructions Title h3
        INSTRUCT.textContent = "Instructions"
    }
}

function searchDrink(event){
    //Store Intake
    let intake; 
    event.preventDefault();
    intake = SEARCH.children[0].value; 
    // console.log(intake);

    fetch(searchAPI + intake)
        .then(response => response.json())
        .then(populate)
    
    function populate(data){
        tmp = data["drinks"][0];

        //Set TITLE = Name of Drink
        TITLE.textContent = tmp["strDrink"];

        //Set IMAGE = Picture of Drink
        IMAGE.src = tmp["strDrinkThumb"];

        //Set CONTENT = Instructions 
        CONTENT.textContent = tmp["strInstructions"];

        //Turn on Instructions Title h3
        INSTRUCT.textContent = "Instructions"
    }
};


init();