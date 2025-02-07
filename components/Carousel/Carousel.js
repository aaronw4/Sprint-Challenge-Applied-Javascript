/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. 
      Make the cards slide in and out, or fade. It's up to you!
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

let pictures = [
  "assets/carousel/mountains.jpeg",
  "assets/carousel/computer.jpeg",
  "assets/carousel/trees.jpeg",
  "assets/carousel/turntable.jpeg"
]

function carouselMaker() {
  let carousel = document.createElement('div');
  let leftButton = document.createElement('div');
  let img = document.createElement('img');  
  let rightButton = document.createElement('div');

  carousel.appendChild(leftButton);
  carousel.appendChild(img);
  carousel.appendChild(rightButton);

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  img.classList.add('display');

//Designing the bottons
  leftButton.textContent = '\u02C2';
  leftButton.style.opacity = 0.6;
  rightButton.textContent = '\u02C3';
  rightButton.style.opacity = 0.6;

//Code that runs carousel loop
  var count = 0;
  img.src = pictures[count];
  leftButton.addEventListener('click', (e) => {
    count = count -1;
    if (count < 0) {
      count = 3;
    }
    img.src = pictures[count];
    TweenMax.to('.carousel', 1, {left:0});
    carousel.style.left = '1000px';
  })
  rightButton.addEventListener('click', (e) => {
    count = count +1;
    if (count > 3) {
      count = 0;
    }
    img.src = pictures[count];
    TweenMax.to('.carousel', 1, {left:0});
    carousel.style.left = '-1000px';
  })  

  return carousel;
};

let carouselCont = document.querySelector('.carousel-container');
carouselCont.appendChild(carouselMaker());