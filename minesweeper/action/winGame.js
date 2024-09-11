import {gameOver, soundOff, timerID} from "../utils/counting.js";
import endGame from "./endGame.js";

const audioWin = new Audio('audio/triumphal_trumpet.mp3');

function winGame() {
  gameOver.mean = true;
  if (!soundOff.mean) {
    (async function () {
      await audioWin.play();
    })();
  }
  endGame(true);
  clearInterval(timerID.count)
}

export default winGame;
