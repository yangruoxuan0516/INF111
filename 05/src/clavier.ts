import {left, right, up, down} from './fusionMove.js';

document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
        const scoreElement = document.getElementById('score');
        let score = Number(scoreElement.innerHTML);
            if (event.key === 'ArrowUp') {
            console.log(`haut`);
            for(let i = 1; i <= 4; i++){
                up(i);
                console.log("up(",i,") is called")
            }
                score++;
            }
            else if (event.key === 'ArrowDown') {
                console.log(`bas`);
                for(let i = 1; i <= 4; i++){
                    down(i);
                }
                score++;
            }
            else if (event.key === 'ArrowLeft') {
                console.log(`gauche`);
                for(let j = 1; j <= 4; j++){
                    left(j);
                }
                score++;
            }
            else if (event.key === 'ArrowRight') {
                console.log(`droite`);
                for(let j = 1; j <= 4; j++){
                    right(j);
                }
                score++;
            }

        scoreElement.innerHTML = score.toString();
    });
});

