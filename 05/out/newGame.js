import { setValue } from './case.js';
document.addEventListener("DOMContentLoaded", (event) => {
    newGame();
    console.log("nouvelle partie lancée !");
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function newGame() {
    const i1 = getRandomInt(1, 4);
    const j1 = getRandomInt(1, 4);
    const i2 = getRandomInt(1, 4);
    const j2 = getRandomInt(1, 4);
    while (i1 == i2 && j1 == j2) {
        const i2 = getRandomInt(1, 4);
        const j2 = getRandomInt(1, 4);
    }
    ;
    if (Math.random() < 0.85) {
        setValue(i1, j1, 2);
    }
    else {
        setValue(i1, j1, 4);
    }
    if (Math.random() < 0.86) {
        setValue(i2, j2, 2);
    }
    else {
        setValue(i2, j2, 4);
    }
}
//# sourceMappingURL=newGame.js.map