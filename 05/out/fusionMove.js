import { moveRight, moveLeft, moveUp, moveDown } from './move.js';
import { fusionRight, fusionLeft, fusionUp, fusionDown } from './fusion.js';
import { color } from './color.js';
export function right(i) {
    const moveRight1 = moveRight(i);
    const fusionRightResult = fusionRight(i);
    const moveRight2 = moveRight(i);
    color();
    return moveRight1 || fusionRightResult || moveRight2;
}
;
export function left(i) {
    const moveLeft1 = moveLeft(i);
    const fusionLeftResult = fusionLeft(i);
    const moveLeft2 = moveLeft(i);
    color();
    return moveLeft1 || fusionLeftResult || moveLeft2;
}
;
export function up(j) {
    const moveUp1 = moveUp(j);
    const fusionUpResult = fusionUp(j);
    const moveUp2 = moveUp(j);
    color();
    return moveUp1 || fusionUpResult || moveUp2;
}
;
export function down(j) {
    const moveDown1 = moveDown(j);
    const fusionDownResult = fusionDown(j);
    const moveDown2 = moveDown(j);
    color();
    return moveDown1 || fusionDownResult || moveDown2;
}
;
//# sourceMappingURL=fusionMove.js.map