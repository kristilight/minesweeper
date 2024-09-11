import {resultTextAmount} from "../create-ui/elements.js";

let resLocal = [];

export function saveResGame(resNew) {
  if (resNew) {
    resLocal.unshift(resNew);
  }
  let newArrLocal = resLocal.join(', ').split(', ');
  if (newArrLocal.length > 10) {
    let newArr = newArrLocal.slice(0, 10);
    resultTextAmount.innerHTML = newArr.join(' ');
    localStorage.setItem('result', newArr.join(', '));
  } else {
    localStorage.setItem('result', newArrLocal.join(', '));
    resultTextAmount.innerHTML = newArrLocal.join(' ');
  }
}

export function loadSaveResGame() {
  let local = localStorage.getItem('result');
  if (local) {
    resLocal.push(local);
    let newResLocal = resLocal.join(', ').split(', ');
    if (newResLocal.length > 10) {
      newResLocal.shift();
    }
    resultTextAmount.innerHTML = newResLocal.join(' ');
  }
}

loadSaveResGame();
