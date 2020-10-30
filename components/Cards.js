// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let articleTest = axios.get("https://lambda-times-api.herokuapp.com/articles");
console.log(articleTest);

let articles = document.querySelector(".cards-container");

axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
        res.data.articles.javascript.forEach((item) => {
            let newArticle = articleMaker(item);
            articles.appendChild(newArticle);
        });
        res.data.articles.bootstrap.forEach((item) => {
            let newArticle = articleMaker(item);
            articles.appendChild(newArticle);
        });
        res.data.articles.jquery.forEach((item) => {
            let newArticle = articleMaker(item);
            articles.appendChild(newArticle);
        });
        res.data.articles.node.forEach((item) => {
            let newArticle = articleMaker(item);
            articles.appendChild(newArticle);
        });
        res.data.articles.technology.forEach((item) => {
            let newArticle = articleMaker(item);
            articles.appendChild(newArticle);
        });
        
    })
    .catch((error) => {
        console.log(error);
    })

    function articleMaker (articleObj) {
        let card = document.createElement("div");
        card.className = "card";
        let cardHL = document.createElement("div");
        cardHL.className = ("headline");
        cardHL.textContent = articleObj.headline;
        let author = document.createElement("div");
        author.className = "author";
        let imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
        let photo = document.createElement("img");
        photo.src = articleObj.authorPhoto;
        let name = document.createElement("span");
        name.textContent = articleObj.authorName;
    
        card.appendChild(cardHL);
        card.appendChild(author);
        author.appendChild(imgContainer);
        author.appendChild(name);
        imgContainer.appendChild(photo);
    
        return card;
    }
