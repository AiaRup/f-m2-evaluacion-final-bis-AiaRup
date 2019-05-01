'use strict';
const radioInputs = document.querySelectorAll('.form__input');
let numOfPairs = 0;
let numOfCards = 0;

const onSelectNumberOfCards = event => {
  saveData(event.currentTarget.value);
};
const onLoad = () => {
  // get data from local storage of exist
  const userSelection = getData();

  if (userSelection) {
    const indexOfSelection = [...radioInputs].findIndex(input => input.value === userSelection);
    radioInputs[indexOfSelection].checked = true;
    numOfCards = parseInt(radioInputs[indexOfSelection].value);
    numOfPairs = numOfCards / 2;
  } else {
    const [firstChoice] = radioInputs;
    firstChoice.checked = true;
    numOfCards = parseInt(firstChoice.value);
    numOfPairs = numOfCards / 2;
  }

  // add event listeners to radio buttons
  for (const input of radioInputs) {
    input.addEventListener('change', onSelectNumberOfCards);
  }
};

onLoad();
