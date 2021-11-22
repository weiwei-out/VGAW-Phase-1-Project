const randomAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const searchAPI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


const TITLE = document.getElementById("TITLE");
const IMAGE = document.getElementById("IMAGE");
const CONTENT = document.getElementById("CONTENT");
const LIST = document.getElementById("list");
const RANDOM = document.getElementById("RAND");
const SEARCH = document.getElementById('SEARCH');
const INSTRUCT = document.getElementById("INSTRUCTIONS");
const LOGO = document.getElementById("LOGO");
const Leo = document.getElementById("Leo");
// const COMMENT = document.getElementById("COMMENT");

function init(){
    //Initialize LOGO
    document.getElementById("LOGO").src = "./logo.png";

    //Add Click Event for Randomize Button 
    RANDOM.addEventListener("click", randomDrink);

    //Add Search Functionality
    SEARCH.addEventListener("submit", searchDrink);

    //Add Hover Event to show Leonardo DeCaprio 
    LOGO.addEventListener("mouseover", hiLeo);
    LOGO.addEventListener("mouseleave", byeLeo)

};

function randomDrink(){
    fetch(randomAPI)
        .then(response => response.json())
        .then(populate)

    function populate(data){
        let sht = data["drinks"][0];
        //Set TITLE = Name of Drink
        TITLE.textContent = sht["strDrink"];

        //Set IMAGE = Picture of Drink
        IMAGE.src = sht["strDrinkThumb"];

        //Set INGREDIENTS
        document.getElementById("INGREDIENTS").textContent = "Ingredients";
        
        for (let i = 0; i < 16; i++) {
            let item = document.createElement('li');
            item.textContent = sht[`strIngredient${i}`];
            if (item.textContent == ""){
                console.log("Null");
            } else {
                LIST.appendChild(item);
            }
          }

        //Set INSTRUCTIONS
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

        //Set INGREDIENTS
        document.getElementById("INGREDIENTS").textContent = "Ingredients";
        let sht = data["drinks"][0];
        for (let i = 0; i < 16; i++) {
            let item = document.createElement('li');
            item.textContent = sht[`strIngredient${i}`];
            if (item.textContent == ""){
                console.log("Null");
            } else {
                LIST.appendChild(item);
            }
          }

        //Set INSTRUCTIONS
        CONTENT.textContent = tmp["strInstructions"];

        //Turn on Instructions Title h3
        INSTRUCT.textContent = "Instructions"        
    }
};

function hiLeo(){
    Leo.src = "https://media2.giphy.com/media/g9582DNuQppxC/giphy.gif?cid=ecf05e47n0d1ivxyvdy7su3rb9r3y11fon7w5da4txil7qca&rid=giphy.gif&ct=g"
}

function byeLeo(){
    Leo.src = "";
}
    
init();