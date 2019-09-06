/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgSources = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]

function Carousel() {
  const carousel = document.createElement('div');
  const img = document.createElement('img');
  const rightBtn = document.createElement('div');
  const leftBtn = document.createElement('div');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  
  // set an initial carousel image
  img.setAttribute('id', 'big-image');
  img.setAttribute('data-id', 0);
  img.setAttribute('src', imgSources[0]);
  img.style.display = 'block';

  // Navigation Event listeners
  rightBtn.addEventListener('click', (e) => {
    next();
  })

  leftBtn.addEventListener('click', (e) => {
    prev();
  })

  //
  carousel.appendChild(leftBtn);
  carousel.appendChild(img);
  carousel.appendChild(rightBtn);

  return carousel;
}

const next = () => {
  const bigImg = document.querySelector('#big-image');
  const nextId = (Number(bigImg.dataset.id) + 1) % imgSources.length;
  const nextimg = imgSources[nextId];
  bigImg.setAttribute('src', nextimg);
  bigImg.setAttribute('data-id', nextId);
}

const prev = () => {
  const bigImg = document.querySelector('#big-image');
  let prevId = (Number(bigImg.dataset.id) - 1) % imgSources.length;
  prevId = prevId < 0 ? imgSources.length + prevId : prevId;
  const previmg = imgSources[prevId];
  bigImg.setAttribute('src', previmg);
  bigImg.setAttribute('data-id', prevId);
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(Carousel());

setInterval(next, 2000);
