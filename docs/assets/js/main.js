"use strict";const radioInputs=document.querySelectorAll(".form__input");let numOfCards=0;const onSelectNumberOfCards=e=>{saveData(e.currentTarget.value)},onLoad=()=>{const e=getData();if(e){const t=[...radioInputs].findIndex(t=>t.value===e);radioInputs[t].checked=!0,numOfCards=parseInt(radioInputs[t].value)}else{const[e]=radioInputs;e.checked=!0,numOfCards=parseInt(e.value)}for(const e of radioInputs)e.addEventListener("change",onSelectNumberOfCards)};function getData(){return localStorage.getItem("numberOfCards")}onLoad();const saveData=e=>{localStorage.setItem("numberOfCards",e)};let firstCard=0,secondCard=0,numOfFlipped=0,numOfPairs=0;const checkPair=e=>{if(numOfFlipped)if(numOfFlipped++,(secondCard=e)===firstCard)numOfFlipped=0,++numOfPairs===numOfCards/2&&console.log("winner");else{numOfFlipped=0;const e=document.querySelectorAll(".card__item");for(const t of e)t.dataset.pair!==firstCard&&t.dataset.pair!==secondCard||setTimeout(()=>{t.classList.remove("flip")},1e3)}else numOfFlipped++,firstCard=e},cardList=document.querySelector(".card__list"),fetchButton=document.querySelector(".form__button"),basicUrl="https://raw.githubusercontent.com/Adalab/cards-data/master/",getNumberOfCards=()=>{return[...radioInputs].find(e=>!0===e.checked).value},onCardClick=e=>{const{currentTarget:t}=e;t.classList.add("flip"),checkPair(t.dataset.pair)},paintCards=e=>{cardList.innerHTML="";for(const t of e){const{pair:e,image:a}=t,r=document.createElement("li");r.classList.add("card__item"),r.setAttribute("data-pair",e);const n=document.createElement("div");n.classList.add("card__back"),n.style.backgroundImage=`url(${a})`;const s=document.createElement("div");s.style.backgroundImage="url(assets/images/back-card.png)",s.classList.add("card__front"),r.appendChild(n),r.appendChild(s),r.addEventListener("click",onCardClick),cardList.appendChild(r)}},fetchCards=e=>{const t=[...radioInputs].find(e=>!0===e.checked).value;fetch(`${e}${t}.json`).then(e=>e.json()).then(e=>{console.log(e),paintCards(e)})};fetchButton.addEventListener("click",()=>{fetchCards(basicUrl)});