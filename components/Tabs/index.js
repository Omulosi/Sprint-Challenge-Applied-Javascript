// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const API = "https://lambda-times-backend.herokuapp.com/topics";

function Tab(topic) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = topic;
  tab.setAttribute('data-topic', topic);

  tab.addEventListener('click', filterCards);

  if (topic === 'all') {
    tab.style.background = '#fff';
    tab.style.color = '#333';
    tab.style.border = '1px solid #333';
  }

  return tab;
}

const topicsContainer = document.querySelector('.topics');

axios.get(API)
  .then(response => response.data)
  .then(data => {
    const topics = ['all', ...data.topics];
    topics.forEach(topic => {
      topicsContainer.appendChild(Tab(topic));
    })
  })

const filterCards = (e) => {
  const topic = e.target.dataset.topic;
  const cards = [...document.querySelectorAll('.card')];
  cards.forEach((card) => {
    card.style.display = 'block';
    if (!topic.includes(card.dataset.article)) {
      card.style.display = 'none';
    }
    if (topic === 'all'){
      card.style.display = 'block';
    }
  })
}
