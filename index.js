// const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
// fetch(API)
//     .then(response => response.json())
//     .then(data => console.log(data))

//------------------------------------------------------------------------

/*
1. Cocktail Search Bar 
2. Randomize Button
3. Image
4. Logo
*/




function init(){
    renderImage();
    randomDrink();
    searchDrink();
};

function renderImage(){
    //Set Title
    document.getElementById("TITLE").textContent = "Flatiron Lounge";
    //Set Logo
    document.getElementById("LOGO").src = "./logo.png";
    //Set Image 
    document.getElementById("IMAGE").src = "./defaultImage.png";
};

function randomDrink(){
    document.getElementById("RANDOM").addEventListener("click", cb);

    function cb(){
        const API = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        fetch(API)
            .then(response => response.json())
            .then(data => console.log(data))
    }
}

function searchDrink(){
    document.getElementById("SEARCH").addEventListener("submit", cb);

    function cb(){
        const searchAPI = `URL ${submit}`;
        fetch(searchAPI)
            .then(response => response.json())
            .then(data => console.log(data))
    }
}









//------------------------------------------------------------------------
//API Setup 
const API = "http://localhost:3000/images/1";

fetch(API)
    //Convert to JSON
    .then(res => res.json())
    //Run renderImage immediately 
    .then(renderImage);

let count = 0;
function renderImage(image){
    //Set Title = image.title (string from db.json)
    document.getElementById("card-title").textContent = image.title;
    //Set Image = image.image (string from db.json with file location of image)
    document.getElementById("card-image").src = image.image;
    //Set Likes = 0 (value from db.json)
    document.getElementById("like-count").textContent = `${count} Likes`;


    //Reference Like Button and create Event Listener that calls Callback Function
    document.getElementById("like-button").addEventListener("click", likesCount);

    //Callback Function increments count and sets the content of like-count = '# Likes'
    function likesCount(){
        ++ count;
        document.getElementById("like-count").textContent = `${count} Likes`;
    };

    //Declare var for Comments List 
    const commentsList = document.getElementById("comments-list");
    //Clear out text in Comments Section 
    commentsList.innerHTML = "";
    //forEach on all "comments" key within "image"
    image.comments.forEach(comment => {
        //Create var and set it as a list item
        const listItem = document.createElement('li');
        //listItem = <li>textContent</li> 
        listItem.textContent = comment.content;
        //Append to commentsList 
        commentsList.append(listItem);
    });
};

document.getElementById('comment-form').addEventListener("submit", submit)