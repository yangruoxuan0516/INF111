import { isEmpty, getValue } from "./case.js";
import { showDialogWin, showDialogLose } from "./modal.js";
import { pop } from "./winning.js";
import { handleKeyDown } from './clavier.js';

export function full() : boolean {
    for (let i = 1; i <= 4; i++){
        for (let j = 1; j <= 4; j++){
            if (isEmpty(i, j)) {
                return false;
            }
        }
    }
    return true;
};

export function lose() : boolean {
    if (full()){
    const scoreElement = document.getElementById('score');
    let score = Number(scoreElement.innerHTML);
    for (let i = 1; i <= 3; i++){
        for (let j = 1; j <= 3; j++){
            if (getValue(i, j) == getValue(i+1, j) || getValue(i, j) == getValue(i, j+1)){
                return false;
            }
        }
    }
    showDialogLose();
    window.removeEventListener('keydown', handleKeyDown);
    return true;
}
};

export function win(): boolean {
    const scoreElement = document.getElementById('score');
    let score = Number(scoreElement.innerHTML);
    for (let i = 1; i <= 4; i++){
        for (let j = 1; j <= 4; j++){
            if (getValue(i, j) == 2048){
                pop();
                showDialogWin();
                window.removeEventListener('keydown', handleKeyDown);
                return true;
            }
        }
    }
    return false;
}