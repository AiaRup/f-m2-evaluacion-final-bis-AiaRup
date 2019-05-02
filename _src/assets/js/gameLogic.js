'use strict';

let firstCard = 0;
let secondCard = 0;
let numOfFlipped = 0;
let numOfPairs = 0;
let timer = '';

const checkPair = card => {
  // if it's a first card
  if (!numOfFlipped) {
    numOfFlipped++;
    firstCard = card;
  } else {
    // second card
    numOfFlipped++;
    secondCard = card;
    // check if match
    if (secondCard === firstCard) {
      numOfFlipped = 0;
      numOfPairs++;
      // check if winning
      if (numOfPairs === numOfCards / 2) {
        console.log('winner');
        console.log(counter);
        clearInterval(timer);
        numOfPairs = 0;
        numOfFlipped = 0;
      }
    } else {
      // not a match
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
