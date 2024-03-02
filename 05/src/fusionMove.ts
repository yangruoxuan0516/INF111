import { moveRight, moveLeft, moveUp, moveDown } from './move.js';
import { fusionRight, fusionLeft, fusionUp, fusionDown } from './fusion.js';

export function right(i: number): boolean{
    return moveRight(i) || fusionRight(i) || moveRight(i);
};
export function left(i: number): boolean{
    return moveLeft(i) || fusionLeft(i) || moveLeft(i);
};
export function up(j: number): boolean{
    return moveUp(j) || fusionUp(j) || moveUp(j);
};
export function down(j: number): boolean{
    return moveDown(j) || fusionDown(j) || moveDown(j);
};