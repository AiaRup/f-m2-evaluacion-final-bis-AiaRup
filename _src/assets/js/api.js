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

const paintCards = arr => {
  for (const card of arr) {
    const { pair, image } = card;
    const cardItem = document.createElement('li');
  }
};

const fetchCards = url => {
  const userChoice = getNumberOfCards();
  const finalUrl = `${url}${userChoice}.json`;
  fetch(finalUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};

// event listener
fetchButton.addEventListener('click', () => {
  fetchCards(basicUrl);
});
