import {timerID} from "../utils/counting.js";
import {stopwatchAmountText} from "../create-ui/elements.js";

export default function timer() {
  let time = 0;
  timerID.count = setInterval(() => {
    time += 1;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if (minutes < 10 && seconds < 10) {
      stopwatchAmountText.innerHTML = `0${minutes} : 0${seconds}`;
    } else {
      stopwatchAmountText.innerHTML = `${minutes} : ${seconds}`;
    }
    if (minutes < 10 && seconds >= 10) {
      stopwatchAmountText.innerHTML = `0${minutes} : ${seconds}`;
    }
    if (minutes >= 10 && seconds < 10) {
      stopwatchAmountText.innerHTML = `${minutes} : 0${seconds}`;
    }
  }, 1000);
}

export function stopTimer() {
  clearInterval(timerID.count);
  stopwatchAmountText.innerHTML = `00 : 00`;
}



