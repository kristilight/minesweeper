import {soundSwitch} from "../create-ui/elements.js";
import {soundOff} from "../utils/counting.js";

function soundClick() {
  if (soundSwitch.innerHTML === 'off') {
    soundSwitch.innerHTML = 'on';
    soundOff.mean = true;
  } else {
    soundSwitch.innerHTML = 'off';
    soundOff.mean = false;
  }
}

export default soundClick;
