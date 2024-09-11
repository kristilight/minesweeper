import {blackout, body, header, modal, modalText, resultContainer} from "./elements.js";

let chooseTheme = '';

function themeClick() {
  let texts = document.querySelectorAll('.text');
  let minesweeperQuery = document.querySelector('.minesweeper');
  if (chooseTheme === 'dark') {
    header.classList.add("header-dark");
    body.classList.add('body-dark');
    minesweeperQuery.classList.add('minesweeper-dark');
    modal.classList.add('modal-dark');
    modalText.classList.add('modal-text-dark');
    blackout.classList.add('blackout-dark');
    resultContainer.classList.add('result-dark');
    for (let text of texts) {
      text.classList.add("text-dark");
    }
  }
  if (chooseTheme === 'light') {
    header.classList.remove("header-dark");
    body.classList.remove('body-dark');
    minesweeperQuery.classList.remove('minesweeper-dark');
    modal.classList.remove('modal-dark');
    modalText.classList.remove('modal-text-dark');
    blackout.classList.remove('blackout-dark');
    resultContainer.classList.remove('result-dark');
    for (let text of texts) {
      text.classList.remove("text-dark");
    }
  }
}

export default themeClick;
