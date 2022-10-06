import { getRandomInt } from './utils.js';

const $quote = document.querySelector('#quote span:first-child');
const $author = document.querySelector('#quote span:last-child');

const fetchedQuotes = fetch('constant/quotes.json')
  .then(res => res.json())
  .then(({ quotes }) => quotes);

fetchedQuotes
  .then(getQuoteByRandomIndex)
  .then(showQuote);

function getQuoteByRandomIndex(quotes) {
  const index = getRandomInt(0, quotes.length);
  return quotes[index];
}

function showQuote({ quote, author }) {
  $quote.innerText = quote;
  $author.innerText = author;
}