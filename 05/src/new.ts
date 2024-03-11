import { isEmpty, setValue } from './case.js';
import { color } from './color.js';
import { handleKeyDown } from './clavier.js';

document.addEventListener("DOMContentLoaded", (event) => {
    newGame();
  });

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function newGame(): void {
    for (let i = 1; i <= 4; i++){
        for (let j = 1; j <= 4; j++){
            setValue(i, j, 0);
        }
    }
    const scoreElement = document.getElementById('score');
    let score = Number(scoreElement.innerHTML);
    score = 0;
    scoreElement.innerHTML = score.toString();
    const i1 = getRandomInt(1, 4);
    const j1 = getRandomInt(1, 4);
    const i2 = getRandomInt(1, 4);
    const j2 = getRandomInt(1, 4);    
    while (i1 == i2 && j1 == j2){
        const i2 = getRandomInt(1, 4);
        const j2 = getRandomInt(1, 4);    
    };
    if (Math.random() < 0.85){
        setValue(i1, j1, 2);
    }
    else {
        setValue(i1, j1, 4);
    }
    if (Math.random() < 0.86){
        setValue(i2, j2, 2);
    }
    else {
        setValue(i2, j2, 4);
    }    
    color();
    window.addEventListener('keydown', handleKeyDown);
    console.log("nouvelle partie lancée !");
}

export function newCase(): void {
    let i = getRandomInt(1, 4);
    let j = getRandomInt(1, 4);
    while (!isEmpty(i, j)){
        i = getRandomInt(1, 4);
        j = getRandomInt(1, 4);
        }
    if (Math.random() < 0.85){
        setValue(i, j, 2);
    }
    else {
        setValue(i, j, 4);
    }
    color();
}