'use strict';

// elements to work with
const cardList = document.querySelector('.card__list');
const fetchButton = document.querySelector('.form__button');
const pageTimer = document.querySelector('.page__timer');

// vaiables to work with
const basicUrl = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
let counter = 0;
let arrCards = [];

const getNumberOfCards = () => {
  const inputSelected = [...radioInputs].find(input => input.checked === true);
  numOfCards = parseInt(inputSelected.value);
  return inputSelected.value;
};

const onCardClick = event => {
  if (isFlippebale) {
    const { currentTarget: cardClicked } = event;
    cardClicked.classList.add('flip');
    checkPair(cardClicked.dataset.pair);
  }
};

const paintCards = arr => {
  cardList.innerHTML = '';
  for (const card of arr) {
    const { pair, image } = card;
    const cardItem = document.createElement('li');
    cardItem.classList.add('card__item');
    cardItem.setAttribute('data-pair', pair);
    const backImage = document.createElement('div');
    backImage.classList.add('card__back');
    backImage.style.backgroundImage = `url(${image})`;
    const frontImage = document.createElement('div');
    frontImage.style.backgroundImage = 'url(assets/images/back-card.png)';
    frontImage.classList.add('card__front');

    cardItem.appendChild(backImage);
    cardItem.appendChild(frontImage);

    cardItem.addEventListener('click', onCardClick);
    cardList.appendChild(cardItem);
  }
};

const shuffle = arr => {
  return arr.sort(() => {
    return 0.5 - Math.random();
  });
};

const createArrayOfCards = arrData => {
  return arrData.map(card => {
    return { image: card.image, pair: card.pair };
  });
};

const fetchCards = url => {
  const userChoice = getNumberOfCards();
  const finalUrl = `${url}${userChoice}.json`;
  fetch(finalUrl)
    .then(response => response.json())
    .then(data => {
      // resetGame();
      arrCards = shuffle(createArrayOfCards(data));
      paintCards(arrCards);
      // start clock
      counter = 0;
      pageTimer.innerHTML = counter;
      timer = setInterval(() => {
        counter++;
        pageTimer.innerHTML = counter;
      }, 1000);
    });
};

// event listener
fetchButton.addEventListener('click', () => {
  fetchCards(basicUrl);
});
