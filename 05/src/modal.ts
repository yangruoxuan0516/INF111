import {newGame} from "./new.js";

const rejouerButtonWin = document.getElementById("rejouerWin");
const rejouerButtonLose = document.getElementById("rejouerLose");
const dialogWin = document.getElementById("dialogWin") as DialogElement;
const dialogLose = document.getElementById("dialogLose") as DialogElement;

interface DialogElement extends HTMLDialogElement {
    open: boolean;
}

function openCheck(dialog: DialogElement): void {
    if (dialog.open) {
        console.log("Dialog open");
    } else {
        console.log("Dialog closed");
    }
}


export function showDialogWin():void {
    (dialogWin).showModal();
    // openCheck(dialogWin);
};

export function showDialogLose():void {
    (dialogLose).showModal();
    // openCheck(dialogLose);
};


rejouerButtonWin.addEventListener("click", () => {
    dialogWin.close("animalNotChosen");
    // openCheck(dialogWin);
    newGame();
});

rejouerButtonLose.addEventListener("click", () => {
    dialogLose.close("animalNotChosen");
    // openCheck(dialogLose);
    newGame();
});