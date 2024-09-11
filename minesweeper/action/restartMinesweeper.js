import {countFlag, field, numberClicks, minesArr, cellsClicked, gameOver, mines} from "../utils/counting.js";
import {clickedAmountText, container, modal} from "../create-ui/elements.js";
import {stopTimer} from "./timer.js";

function restartMinesweeper() {
  let minesweeperQuery = document.querySelector('.minesweeper');
  countFlag.count = mines.count ;
  container.removeChild(minesweeperQuery);
  field = [];
  minesArr = [];
  numberClicks.count  = 0;
  cellsClicked.count  = 0;
  gameOver = false;
  modal.classList.add("hidden");
  clickedAmountText.innerText = numberClicks;
  stopTimer();
}

export default restartMinesweeper;
