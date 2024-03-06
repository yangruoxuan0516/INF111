import {left, right, up, down} from './fusionMove.js';
// import { moveUp, moveDown, moveLeft, moveRight } from './move.js';
// import { fusionUp, fusionDown, fusionLeft, fusionRight } from './fusion.js';
// import { setValue } from './case.js';
import { newCase } from './new.js';
import { lose , win } from './case.js';

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
                if (win()){
                    window.alert('Bravo t\'as gagné ! T\'as fait ' + score + ' coups :3');
                }
                if (lose()){
                    window.alert('Oops c\'est la fin ! T\'as fait ' + score + ' coups :3');
                }
                else{
                    newCase();
                }
            }
            else if (event.key === 'ArrowDown') {
                console.log(`bas`);
                for(let i = 1; i <= 4; i++){
                    down(i);
                }
                score++;
                if (win()){
                    window.alert('Bravo t\'as gagné ! T\'as fait ' + score + ' coups :3');
                }
                if (lose()){
                    window.alert('Oops c\'est la fin ! T\'as fait ' + score + ' coups :3');
                }
                else{
                    newCase();
                }
            }
            else if (event.key === 'ArrowLeft') {
                console.log(`gauche`);
                for(let j = 1; j <= 4; j++){
                    left(j);
                }
                score++;
                if (win()){
                    window.alert('Bravo t\'as gagné ! T\'as fait ' + score + ' coups :3');
                }
                if (lose()){
                    window.alert('Oops c\'est la fin ! T\'as fait ' + score + ' coups :3');
                }
                else{
                    newCase();
                }
            }
            else if (event.key === 'ArrowRight') {
                console.log(`droite`);
                for(let j = 1; j <= 4; j++){
                    right(j);
                }
                score++;
                if (win()){
                    window.alert('Bravo t\'as gagné ! T\'as fait ' + score + ' coups :3');
                }
                if (lose()){
                    window.alert('Oops c\'est la fin ! T\'as fait ' + score + ' coups :3');
                }
                else{
                    newCase();
                }
            }

            // TEST
            else if (event.key === 't') {
                // console.log(isEmpty(1, 1), isEmpty(1, 2), isEmpty(1, 3), isEmpty(1, 4),isEmpty(2, 1), isEmpty(2, 2), isEmpty(2, 3), isEmpty(2, 4),isEmpty(3, 1), isEmpty(3, 2), isEmpty(3, 3), isEmpty(3, 4),isEmpty(4, 1), isEmpty(4, 2), isEmpty(4, 3), isEmpty(4, 4));
                // console.log(getValue(1,1), getValue(1,2), getValue(1,3), getValue(1,4),getValue(2,1), getValue(2,2), getValue(2,3), getValue(2,4),getValue(3,1), getValue(3,2), getValue(3,3), getValue(3,4),getValue(4,1), getValue(4,2), getValue(4,3), getValue(4,4));
                // console.log(setValue(1,1,2),setValue(1,2,2),setValue(1,3,2),setValue(1,4,2),setValue(2,1,2),setValue(2,2,2),setValue(2,3,2),setValue(2,4,2),setValue(3,1,2),setValue(3,2,2),setValue(3,3,2),setValue(3,4,2),setValue(4,1,2),setValue(4,2,2),setValue(4,3,2),setValue(4,4,2),setValue(5,5,2));
                
                // setValue(1,1,0);setValue(1,2,0);setValue(1,3,0);setValue(1,4,0);
                // setValue(2,1,0);setValue(2,2,0);setValue(2,3,0);setValue(2,4,0);
                // setValue(3,1,0);setValue(3,2,0);setValue(3,3,0);setValue(3,4,0);
                // setValue(4,1,0);setValue(4,2,0);setValue(4,3,0);setValue(4,4,0);
                // setValue(1,1,4);setValue(1,3,2);
                // setValue(2,2,2);setValue(2,4,4);
                // setValue(3,1,4);setValue(3,2,2);setValue(3,4,4);
                // setValue(4,1,2);setValue(4,3,2);setValue(4,4,2);

                // setValue(1,1,0);setValue(1,2,0);setValue(1,3,0);setValue(1,4,0);
                // setValue(2,1,0);setValue(2,2,0);setValue(2,3,0);setValue(2,4,0);
                // setValue(3,1,0);setValue(3,2,0);setValue(3,3,0);setValue(3,4,0);
                // setValue(4,1,0);setValue(4,2,0);setValue(4,3,0);setValue(4,4,0);
                
                // setValue(1,3,2);setValue(1,4,2);
                // setValue(2,1,4);setValue(2,2,2);
                // setValue(3,1,4);setValue(3,2,4);
                // setValue(4,1,2);setValue(4,4,2);
                
            }
            // else if (event.key === 'w') { // test up
            //     for(let i = 1; i <= 4; i++){
            //         // moveUp(i);
            //     }
            // }
            // else if (event.key === 's') { // test down
            //     for(let i = 1; i <= 4; i++){
            //         // moveDown(i);
            //     }
            // }
            // else if (event.key === 'a') { // test left
            //     for(let j = 1; j <= 4; j++){
            //         // moveLeft(j);
            //     }
            // }
            // else if (event.key === 'd') { // test right
            //     for(let j = 1; j <= 4; j++){
            //         // moveRight(j);
            //         fusionRight(j);
            //     }
            // }

        scoreElement.innerHTML = score.toString();
    });
});

