import {
  blackout,
  btnNewGame, btnNewMines,
  darkTeam, easyLevel,
  flagAmountText, hardLevel,
  lightTeam, middleLevel,
  minesAmountText, modal,
  modalCross, resultBTN, resultContainer, resultCross, soundSwitch
} from "../create-ui/elements.js";
import soundClick from "./soundClick.js";
import themeClick from "../create-ui/theme.js";
import generateGame from "../generateGame.js";
import {columns, level, mines, newMines, rows} from "../utils/counting.js";
import specialGame from "./specialGame.js";
import restartMinesweeper from "./restartMinesweeper.js";

let chooseTheme = '';

document.addEventListener('DOMContentLoaded', function () {

  btnNewGame.addEventListener('click', () => {
    restartMinesweeper();
    generateGame();
    if (level.result === 'easy' || level.result === '') {
      newMines.count = 10;
      mines.count = 10;
    }
    if (level.result) {
      newMines.count = 35;
      mines.count = 35;
    }
    if (level.result === 'hard') {
      newMines.count = 85;
      mines.count = 85;
    }
    minesAmountText.value = mines.count;
    flagAmountText.innerHTML = mines.count;
  })

  easyLevel.addEventListener('click', () => {
    restartMinesweeper();
    level.result(1);
    rows.count = 10;
    columns.count = 10;
    mines.count = 10;
    flagAmountText.innerHTML = mines.count;
    minesAmountText.value = mines.count;
    generateGame();
  })

  middleLevel.addEventListener('click', () => {
    restartMinesweeper();
    level.result(2);
    rows.count = 15;
    columns.count = 15;
    mines.count= 35;
    flagAmountText.innerHTML = mines.count;
    minesAmountText.value = mines.count;
    generateGame();
  })

  hardLevel.addEventListener('click', () => {
    restartMinesweeper();
    level.result(3);
    rows.count = 25;
    columns.count = 25;
    mines.count = 85;
    flagAmountText.innerHTML = mines.count;
    minesAmountText.value = mines.count;
    generateGame();
  })

  modalCross.addEventListener("click", () => {
    modal.classList.add("hidden");
    blackout.classList.remove("blackout-yes");
  });

  lightTeam.addEventListener("click", () => {
    chooseTheme = 'light'
    themeClick();
  });

  darkTeam.addEventListener("click", () => {
    chooseTheme = 'dark'
    themeClick();
  });

  soundSwitch.addEventListener("click", soundClick);

  minesAmountText.addEventListener('input', function () {
    let inputValue = this.value;
    if (inputValue < 10) {
      newMines.count = 10;
    } else if (inputValue > 99) {
      newMines.count = 99;
    } else if (parseFloat(inputValue)) {
      newMines.count = Math.round(inputValue);
    } else {
      newMines.count = inputValue;
    }
  });

  btnNewMines.addEventListener('click', () => {
    specialGame();
  });

  resultBTN.addEventListener('click', () => {
    blackout.classList.add("blackout-yes");
    resultContainer.classList.add("result-show");
  });

  resultCross.addEventListener('click', () => {
    resultContainer.classList.remove("result-show");
    blackout.classList.remove("blackout-yes");
  });

})
