import {level} from "../utils/counting.js";

window.addEventListener('resize', changeCells);

function changeCells() {
  let minesweeperQuery = document.querySelector('.minesweeper');
  let minesweeperCellsQuery = document.querySelectorAll('.minesweeper__cell');
  if (window.innerWidth <= 790 && level.result === "hard") {
    minesweeperQuery.style.minWidth = '450px';
    minesweeperQuery.style.width = '450px';
    minesweeperQuery.style.height = '450px';
    for (let cell of minesweeperCellsQuery) {
      cell.style.width = '18px';
      cell.style.height = '18px';
    }
  }

  if (window.innerWidth >= 790 && level.result === "hard") {
    minesweeperQuery.style.minWidth = '750px';
    minesweeperQuery.style.width = '750px';
    minesweeperQuery.style.height = '750px';
    for (let cell of minesweeperCellsQuery) {
      cell.style.width = '30px';
      cell.style.height = '30px';
    }
  }

}
