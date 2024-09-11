import {columns, field, gameOver, mines, rows} from "../utils/counting.js";
import {countFoundMines} from "./interactCells.js";
import winGame from "./winGame.js";

let cellsClicked = 0;


function openPieceField(row, column) {
  if (row < 0 || row >= rows.count || column < 0 || column >= columns.count) {
    return;
  }
  if (field[row][column].classList.contains("clicked") || field[row][column].innerText === '🔺') {
    return;
  }
  if (field[row][column].innerText !== '🔺') {
    field[row][column].classList.add("clicked");
  }
  cellsClicked += 1;

  let countMines = countFoundMines(row, column);
  if (countMines > 0) {
    field[row][column].innerText = countMines;
    if (countMines === 1) field[row][column].style.color = "blue";
    if (countMines === 2) field[row][column].style.color = "green";
    if (countMines === 3) field[row][column].style.color = "red";
    if (countMines === 4) field[row][column].style.color = "navy";
    if (countMines === 5) field[row][column].style.color = "brown";
    if (countMines === 6) field[row][column].style.color = "teal";
    if (countMines === 7) field[row][column].style.color = "black";
    if (countMines === 8) field[row][column].style.color = "gray";
  }
  if (countMines === 0) {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        openPieceField(row + x, column + y);
      }
    }
  }

  if (cellsClicked === rows.count * columns.count - mines.count && !gameOver) {
    winGame();
  }

}

export default openPieceField;
