import {flagAmountText} from "../create-ui/elements.js";
import {countFlag} from "../utils/counting.js";

function setFlag(cell) {
  flagAmountText.innerHTML = countFlag.count;
  if (cell.innerText === '🔺') {
    cell.innerText = '';
    countFlag.count += 1;
  } else if (!cell.classList.contains("clicked")) {
    cell.innerText = '🔺';
    countFlag.count -= 1;
  }
  flagAmountText.innerHTML = countFlag.count;
}

export default setFlag;
