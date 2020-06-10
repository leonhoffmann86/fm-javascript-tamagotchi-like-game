import { ICONS } from "./constants";

const TOGGLE_HIGHLIGHTED = (icon, show) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;

  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      TOGGLE_HIGHLIGHTED(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      TOGGLE_HIGHLIGHTED(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      TOGGLE_HIGHLIGHTED(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      TOGGLE_HIGHLIGHTED(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
