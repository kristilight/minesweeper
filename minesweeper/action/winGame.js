import {gameOver, soundOffChoose, timerId} from "../utils/counting.js";
import endGame from "./endGame.js";

const audioWin = new Audio('audio/triumphal_trumpet.mp3');

function winGame() {
  gameOver = true;
  if (!soundOffChoose) {
    (async function () {
      await audioWin.play();
    })();
  }
  endGame(true);
  clearInterval(timerId)
}

export default winGame;
