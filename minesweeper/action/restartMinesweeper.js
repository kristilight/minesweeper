import {countFlag, field, minesArr, numberClicks, cellsClicked, gameOver, mines} from "../utils/counting.js";
import {clickedAmountText, container, modal} from "../create-ui/elements.js";
import {stopTimer} from "./timer.js";

function restartMinesweeper() {
  let minesweeperQuery = document.querySelector('.minesweeper');
  countFlag.count = mines.count ;
  container.removeChild(minesweeperQuery);
  field.length = 0;
  minesArr.length = 0;
  numberClicks.count  = 0;
  cellsClicked.count  = 0;
  gameOver.mean = false;
  modal.classList.add("hidden");
  clickedAmountText.innerText = numberClicks.count;
  stopTimer();
}

export default restartMinesweeper;
