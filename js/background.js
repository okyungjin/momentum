import { getRandomInt } from './utils.js';

const IMAGE_SRC = '/image';
const images = ['background1.jpeg', 'background2.jpeg', 'background3.jpeg'];

document.body.style.backgroundImage = `url('${getRandomImageUrl()}')`;

function getRandomImageUrl() {
  return `${IMAGE_SRC}/${images[getRandomInt(0, images.length)]}`;
}