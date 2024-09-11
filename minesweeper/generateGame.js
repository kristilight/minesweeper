import createElement from "./create-ui/createElement.js";
import {container} from "./create-ui/elements.js";
import {
  columns,
  field,
  gameOver,
  level,
  minesArr,
  rows, soundOffChoose, mines, newMines,
} from "./utils/counting.js";
import {clickCell} from "./action/interactCells.js";
import setFlag from "./action/setFlag.js";

import {
  blackout,
  btnNewGame, btnNewMines,
  darkTeam, easyLevel,
  flagAmountText, hardLevel,
  lightTeam, middleLevel,
  minesAmountText, modal,
  modalCross, resultBTN, resultContainer, resultCross, soundSwitch
} from "./create-ui/elements.js";
import soundClick from "./action/soundClick.js";
import themeClick from "./create-ui/theme.js";
import specialGame from "./action/specialGame.js";
import restartMinesweeper from "./action/restartMinesweeper.js";

let audioClick = new Audio('audio/effect.mp3');
let audioBombClick = new Audio('audio/classic_hurt.mp3');
let DELIMETER = ":";

function generateGame() {
  const minesweeper = createElement('div', '', 'minesweeper');

  if (level.result === 'easy' || level.result === '') {
    minesweeper.style.width = "300px";
    minesweeper.style.minWidth = "300px";
    minesweeper.style.height = "300px";
  }

  if (level.result === 'middle') {
    minesweeper.style.width = "450px";
    minesweeper.style.minWidth = "450px";
    minesweeper.style.height = "450px";
  }

  if (level.result === 'hard') {
    minesweeper.style.width = "750px";
    minesweeper.style.minWidth = "750px";
    minesweeper.style.height = "750px";
  }

  for (let row = 0; row < rows.count; row++) {
    let rowCells = [];
    for (let column = 0; column < columns.count; column++) {

      const cell = createElement('div', '', 'minesweeper__cell');
      cell.id = "" + row + DELIMETER + column;
      cell.addEventListener("click", () => {
        if (gameOver || cell.classList.contains("clicked") || cell.innerText === '🔺') {
          return;
        }
        (async function () {
          if (!soundOffChoose) {
            if (!minesArr.includes(cell.id)) {
              await audioClick.play();
            } else {
              await audioBombClick.play();
            }
          }
          await clickCell(cell);
        })();
      })

      cell.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        setFlag(cell)
      });

      minesweeper.append(cell);
      rowCells.push(cell);
    }
    field.push(rowCells);
  }
  container.append(minesweeper);
}

generateGame();

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


export default generateGame;
