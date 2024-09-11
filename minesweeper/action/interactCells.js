import {
  columns,
  mines,
  minesArr,
  rows,
  gameOver,
  numberClicks,
  cellsClicked,
  field, timerId
} from "../utils/counting.js";
import {clickedAmountText} from "../create-ui/elements.js";
import endGame from "./endGame.js";
import openPieceField from "./openPieceField.js";
import timer from "./timer.js";

let DELIMETER = ":";

function generateMines(cell) {
  for (let i = 0; i < mines.count; i++) {
    let row = Math.floor(Math.random() * rows.count);
    let column = Math.floor(Math.random() * columns.count);
    let id = "" + row + DELIMETER + column;
    if (!minesArr.includes(id) && cell.id !== id) {
      minesArr.push(id);
    } else i -= 1
  }
}

export function clickCell(cell) {

  if (cellsClicked.count === 0) {
    generateMines(cell);
    timer();
  }

  if (minesArr.includes(cell.id)) {
    gameOver = true;
    showMines();
    clearInterval(timerId);
    endGame(false);
    return;
  }

  let coords = cell.id.split(DELIMETER); // "0-0" -> ["0", "0"]
  let row = Number(coords[0]);
  let column = Number(coords[1]);

  numberClicks.count += 1;
  clickedAmountText.innerText = numberClicks;
  openPieceField(row, column);
}

function showMines() {
  for (let i = minesArr.length - 1; i >= 0; i--) {
    let coords = minesArr[i].split(DELIMETER);
    let row = parseInt(coords[0]);
    let column = parseInt(coords[1]);
    field[row][column].innerText = "💣";
    field[row][column].style.backgroundColor = "red";
  }
}

export function countFoundMines(row, column) {
  let countMines = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      countMines += checkCell(row + x, column + y);
    }
  }
  return countMines;
}

function checkCell(row, column) {
  if (row < 0 || row >= rows.count || column < 0 || column >= columns.count) {
    return 0;
  }
  return minesArr.includes("" + row + DELIMETER + column) ? 1 : 0;
}
