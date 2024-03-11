import { getValue, setValue } from './case.js';

export function moveRight(i: number): boolean{
    let moved = false;
    for (let j = 4; j >= 1; j--){
        if (getValue(i, j) != 0){
            let k = j;
            while (k < 4 && getValue(i, k + 1) == 0){
                k++;
            }
            if (k > j){
                setValue(i, k, getValue(i, j));
                setValue(i, j, 0);
                moved = true;
            }
        }
    }
    return moved;
};

export function moveLeft(i: number): boolean{
    let moved = false;
    for (let j = 1; j <= 4; j++){
        if (getValue(i, j) != 0){
            let k = j;
            while (k > 1 && getValue(i, k - 1) == 0){
                k--;
            }
            if (k < j){
                setValue(i, k, getValue(i, j));
                setValue(i, j, 0);
                moved = true;
            }
        }
    }
    return moved;
};

export function moveUp(j: number): boolean{
    let moved = false;
    for (let i = 1; i <= 4; i++){
        if (getValue(i, j) != 0){
            let k = i;
            while (k > 1 && getValue(k - 1, j) == 0){
                k--;
            }
            if (k < i){
                setValue(k, j, getValue(i, j));
                setValue(i, j, 0);
                moved = true;
            }
        }
    }
    return moved;
};

export function moveDown(j: number): boolean{
    let moved = false;
    for (let i = 4; i >= 1; i--){
        if (getValue(i, j) != 0){
            let k = i;
            while (k < 4 && getValue(k + 1, j) == 0){
                k++;
            }
            if (k > i){
                setValue(k, j, getValue(i, j));
                setValue(i, j, 0);
                moved = true;
            }
        }
    }
    return moved;
};

