// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardData = axios.get('https://lambda-times-backend.herokuapp.com/articles');
console.log(cardData);

function cardMaker(items) {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgCont = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(name);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    headline.textContent = items.headline;
    img.src = items.authorPhoto;
    name.textContent = items.authorName;

    return items;
}

let cardsCont = document.querySelector('.cards-container');

cardData.then(result => {
//    cardsCont.appendChild(cardMaker(result.data.articles.bootstrap[0]));
    
    result.data.articles.bootstrap.forEach(i => {
        cardsCont.appendChild(cardMaker(i));
    })
})

.catch((err) => {
    console.log(err);
})
