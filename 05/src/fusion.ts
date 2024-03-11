import { getValue, setValue } from './case.js';

export function fusionRight(i: number): boolean{
    let moved = false;
    for (let j = 4; j >= 2; j--){
        if (getValue(i, j) != 0 && getValue(i, j) == getValue(i, j - 1)){
            setValue(i, j, 2 * getValue(i, j));
            setValue(i, j - 1, 0);
            moved = true;
        }
    }
    return moved;
};

export function fusionLeft(i: number): boolean{
    let moved = false;
    for (let j = 1; j <= 3; j++){
        if (getValue(i, j) != 0 && getValue(i, j) == getValue(i, j + 1)){
            setValue(i, j, 2 * getValue(i, j));
            setValue(i, j + 1, 0);
            moved = true;
        }
    }
    return moved;
};

export function fusionUp(j: number): boolean{
    let moved = false;
    for (let i = 1; i <= 3; i++){
        if (getValue(i, j) != 0 && getValue(i, j) == getValue(i + 1, j)){
            setValue(i, j, 2 * getValue(i, j));
            setValue(i + 1, j, 0);
            moved = true;
        }
    }
    return moved;
};

export function fusionDown(j: number): boolean{
    let moved = false;
    for (let i = 4; i >= 2; i--){
        if (getValue(i, j) != 0 && getValue(i, j) == getValue(i - 1, j)){
            setValue(i, j, 2 * getValue(i, j));
            setValue(i - 1, j, 0);
            moved = true;
        }
    }
    return moved;
};