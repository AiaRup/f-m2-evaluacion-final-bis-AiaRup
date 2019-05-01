'use strict';

let firstCard = 0;
let secondCard = 0;
let numOfFlipped = 0;
let numOfPairs = 0;

const checkPair = card => {
  if (!numOfFlipped) {
    numOfFlipped++;
    firstCard = card;
    console.log('first', firstCard);
    console.log('flipped', numOfFlipped);
  } else {
    numOfFlipped++;
    secondCard = card;
    console.log('first', firstCard);
    console.log('flipped', numOfFlipped);
    console.log('secondCard', secondCard);
    // if match
    if (secondCard === firstCard) {
      numOfFlipped = 0;
      numOfPairs++;
      // check if winning
      if (numOfPairs === numOfCards / 2) {
        console.log('winner');
      }
    } else {
      numOfFlipped = 0;
      const cards = document.querySelectorAll('.card__item');

      for (const card of cards) {
        if (card.dataset.pair === firstCard || card.dataset.pair === secondCard) {
          setTimeout(() => {
            card.classList.remove('flip');
          }, 1000);
        }
      }
    }
  }
};
