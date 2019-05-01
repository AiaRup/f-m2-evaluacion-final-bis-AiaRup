'use strict';

function getData() {
  return localStorage.getItem('numberOfCards');
}

const saveData = data => {
  localStorage.setItem('numberOfCards', data);
};
