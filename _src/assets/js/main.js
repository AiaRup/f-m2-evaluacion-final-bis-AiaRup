'use strict';
const radioInputs = document.querySelectorAll('.form__input');

const onSelectNumberOfCards = event => {
  saveData(event.currentTarget.value);
};
const onLoad = () => {
  // get data from local storage of exist
  const userSelection = getData();

  if (userSelection) {
    const indexOfSelection = [...radioInputs].findIndex(input => input.value === userSelection);
    radioInputs[indexOfSelection].checked = true;
  } else {
    radioInputs[0].checked = true;
  }

  // add event listeners to radio buttons
  for (const input of radioInputs) {
    input.addEventListener('change', onSelectNumberOfCards);
  }
};

onLoad();
