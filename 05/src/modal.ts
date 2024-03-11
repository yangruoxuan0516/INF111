import {newGame} from "./new.js";
import { handleKeyDown } from './clavier.js';

const rejouerButtonWin = document.getElementById("rejouerWin");
const rejouerButtonLose = document.getElementById("rejouerLose");
const continueButton = document.getElementById("continue");
const dialogWin = document.getElementById("dialogWin") as DialogElement;
const dialogLose = document.getElementById("dialogLose") as DialogElement;
const dialogNoMove = document.getElementById("dialogNoMove") as DialogElement;

interface DialogElement extends HTMLDialogElement {
    open: boolean;
}


export function showDialogWin():void {
    (dialogWin).showModal();
};

export function showDialogLose():void {
    (dialogLose).showModal();
};

export function showDialogNoMove():void {
    (dialogNoMove).showModal();
};


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
