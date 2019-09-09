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

const ArticlesAPI = "https://lambda-times-backend.herokuapp.com/articles";

function Card({authorName, authorPhoto, headline}) {
  const card = document.createElement('div');
  const headlineElem = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const name = document.createElement('span');
  
  // Add attributes
  card.classList.add('card');
  headlineElem.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  
  // Add data
  headlineElem.textContent = headline;
  img.src = authorPhoto;
  name.textContent = authorName;

  imgContainer.appendChild(img);

  author.appendChild(imgContainer);
  author.appendChild(name);

  card.appendChild(headlineElem);
  card.appendChild(author);

  return card;
}

const cardsContainer = document.querySelector('.cards-container');

axios.get(ArticlesAPI)
  .then(response => response.data)
  .then(data => {
    const articles = data.articles;
    for (let article in articles) {
      articles[article].map((articleData) => {
        const card = Card(articleData);
        card.setAttribute('data-article', article);
        cardsContainer.appendChild(card);
      })
    }
  })
