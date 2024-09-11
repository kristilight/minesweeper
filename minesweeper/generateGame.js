import createElement from "./create-ui/createElement.js";
import {container} from "./create-ui/elements.js";
import {
  columns,
  field, minesArr,
  gameOver,
  level,
  rows,
  soundOff
} from "./utils/counting.js";
import {clickCell} from "./action/interactCells.js";
import setFlag from "./action/setFlag.js";

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
        if (gameOver.mean || cell.classList.contains("clicked") || cell.innerText === '🔺') {
          return;
        }
        (async function () {
          if (!soundOff.mean) {
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

export default generateGame;
