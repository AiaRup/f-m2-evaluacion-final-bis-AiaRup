'use strict';

// elements to work with
const cardList = document.querySelector('.card__list');
const fetchButton = document.querySelector('.form__button');

// vaiables to work with
const basicUrl = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

const getNumberOfCards = () => {
  const radioInputs = document.querySelectorAll('.form__input');
  const inputSelected = [...radioInputs].find(input => input.checked === true);
  return inputSelected.value;
};

const onCardClick = event => {
  const { currentTarget: cardClicked } = event;
  cardClicked.classList.add('flip');
};

const paintCards = arr => {
  for (const card of arr) {
    const { pair, image } = card;
    const cardItem = document.createElement('li');
    cardItem.classList.add('card__item');
    cardItem.setAttribute('data-pair', pair);
    const backImage = document.createElement('div');
    backImage.classList.add('card__back');
    backImage.style.backgroundImage = `url(${image})`;
    const frontImage = document.createElement('div');
    frontImage.style.backgroundImage = 'url(../../assets/images/back-card.png)';
    frontImage.classList.add('card__front');

    cardItem.appendChild(backImage);
    cardItem.appendChild(frontImage);

    cardItem.addEventListener('click', onCardClick);
    cardList.appendChild(cardItem);
  }
};

const fetchCards = url => {
  const userChoice = getNumberOfCards();
  const finalUrl = `${url}${userChoice}.json`;
  fetch(finalUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      paintCards(data);
    });
};

// event listener
fetchButton.addEventListener('click', () => {
  fetchCards(basicUrl);
});
