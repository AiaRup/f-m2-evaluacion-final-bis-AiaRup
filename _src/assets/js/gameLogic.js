'use strict';

let firstCard = 0;
let secondCard = 0;
let numOfFlipped = 0;

const checkPair = card => {
  console.log('card recieved', card);

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
        console.log('WINN');
      }
    } else {
      numOfFlipped = 0;

      console.log('in else');
      const cards = document.querySelectorAll('.card__item');

      for (const card of cards) {
        console.log('card loop', card);

        if (card.dataset.pair === firstCard || card.dataset.pair === secondCard) {
          console.log('card in if', card.dataset.pair);
          setTimeout(() => {
            card.classList.remove('flip');
          }, 1000);
        }
      }
    }
  }
};
