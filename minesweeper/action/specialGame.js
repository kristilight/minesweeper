import {flagAmountText, minesAmountText} from "../create-ui/elements.js";
import {columns, level, mines, newMines, rows} from "../utils/counting.js";
import generateGame from "../generateGame.js";
import restartMinesweeper from "./restartMinesweeper.js";

function specialGame() {
  minesAmountText.value = newMines.count;
  mines.count = minesAmountText.value;
  flagAmountText.innerHTML = newMines.count;
  restartMinesweeper();
  if (level.result === 'easy' || level.result === '') {
    rows.count = 10;
    columns.count = 10;
    generateGame();
  }
  if (level.result === 'middle') {
    rows.count = 15;
    columns.count = 15;
    generateGame();
  }
  if (level.result === 'hard') {
    rows.count = 25;
    columns.count = 25;
    generateGame();
  }
}

export default specialGame;
