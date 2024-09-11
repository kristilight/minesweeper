import {blackout, clickedAmountText, modal, modalText, stopwatchAmountText} from "../create-ui/elements.js";
import {saveResGame} from "./resaltsGame.js";

function endGame(youWin) {

  modalText.textContent = youWin ? `You win! You found all mines in ${stopwatchAmountText.textContent} time and ${clickedAmountText.textContent} click` : 'Unfortunately, you lose :(';
  modal.classList.remove("hidden");
  blackout.classList.add("blackout-yes");

  if (youWin) {
    let resOutput = `You found all mines in ${stopwatchAmountText.textContent} time and ${clickedAmountText.textContent} click`;
    saveResGame(resOutput);
  }
}

export default endGame;
