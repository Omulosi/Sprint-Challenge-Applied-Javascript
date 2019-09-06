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

  return tab;
}

const topics = document.querySelector('.topics');

axios.get(API)
  .then(response => response.data)
  .then(data => {
    data.topics.forEach(topic => {
      topics.appendChild(Tab(topic));
    })
  })
