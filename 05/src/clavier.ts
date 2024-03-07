import {left, right, up, down} from './fusionMove.js';
// import { moveUp, moveDown, moveLeft, moveRight } from './move.js';
// import { fusionUp, fusionDown, fusionLeft, fusionRight } from './fusion.js';
import { getValue } from './case.js';
import { newCase } from './new.js';
import { full, lose , win } from './result.js';
// import { color } from './color.js';
import { pop } from './winning.js';

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
        const scoreElement = document.getElementById('score');
        let score = Number(scoreElement.innerHTML);
            if (event.key === 'ArrowUp') {
                console.log(`haut`);
                for(let i = 1; i <= 4; i++){
                    up(i);
                }
                score++;
                const WIN = win();
                const LOSE = lose();
                const FULL = full();
                if (!FULL && !WIN && !LOSE){
                    newCase();
                }
            }
            else if (event.key === 'ArrowDown') {
                console.log(`bas`);
                for(let i = 1; i <= 4; i++){
                    down(i);
                }
                score++;
                const WIN = win();
                const LOSE = lose();
                const FULL = full();
                if (!FULL && !WIN && !LOSE){
                    newCase();
                }
            }
            else if (event.key === 'ArrowLeft') {
                console.log(`gauche`);
                for(let j = 1; j <= 4; j++){
                    left(j);
                }
                score++;
                const WIN = win();
                const LOSE = lose();
                const FULL = full();
                if (!FULL && !WIN && !LOSE){
                    newCase();
                }
            }
            else if (event.key === 'ArrowRight') {
                console.log(`droite`);
                for(let j = 1; j <= 4; j++){
                    right(j);
                }
                score++;
                const WIN = win();
                const LOSE = lose();
                const FULL = full();
                if (!FULL && !WIN && !LOSE){
                    newCase();
                }
            }
        scoreElement.innerHTML = score.toString();
    });
});

