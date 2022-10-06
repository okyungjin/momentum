import { getRandomInt } from './utils.js';

const IMAGE_SRC = '/image';
const images = ['background1.jpeg', 'background2.jpeg', 'background3.jpeg'];

const backgroundImage = createRandomBackgroundImageElement();
document.body.appendChild(backgroundImage);

function createRandomBackgroundImageElement() {
  const chosenImage = images[getRandomInt(0, images.length)];
  const backgroundImage = document.createElement('img');
  backgroundImage.src = `${IMAGE_SRC}/${chosenImage}`;
  return backgroundImage;
}