import {soundSwitch} from "../create-ui/elements.js";
import {soundOffChoose} from "../utils/counting.js";

function soundClick() {
  if (soundSwitch.innerHTML === 'off') {
    soundSwitch.innerHTML = 'on';
    soundOffChoose = true;
  } else {
    soundSwitch.innerHTML = 'off';
    soundOffChoose = false;
  }
}

export default soundClick;
