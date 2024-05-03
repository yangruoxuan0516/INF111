import { newGame } from "./new.js";
import { handleKeyDown } from './clavier.js';
const rejouerButtonWin = document.getElementById("rejouerWin");
const rejouerButtonLose = document.getElementById("rejouerLose");
const continueButton = document.getElementById("continue");
const dialogWin = document.getElementById("dialogWin");
const dialogLose = document.getElementById("dialogLose");
const dialogNoMove = document.getElementById("dialogNoMove");
export function showDialogWin() {
    (dialogWin).showModal();
}
;
export function showDialogLose() {
    (dialogLose).showModal();
}
;
export function showDialogNoMove() {
    (dialogNoMove).showModal();
}
;
rejouerButtonWin.addEventListener("click", () => {
    dialogWin.close("animalNotChosen");
    newGame();
});
rejouerButtonLose.addEventListener("click", () => {
    dialogLose.close("animalNotChosen");
    newGame();
});
continueButton.addEventListener("click", () => {
    dialogNoMove.close("animalNotChosen");
    window.addEventListener('keydown', handleKeyDown);
});
//# sourceMappingURL=modal.js.map