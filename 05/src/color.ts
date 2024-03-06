import { getValue } from "./case.js";

export function color(): void {
    for (let i = 1; i <=4; i++) {
        for (let j = 1; j <=4; j++) {
            let tdElement = document.getElementById(i.toString() + '' + j.toString());
            if (getValue(i,j) == 0){
                tdElement.style.backgroundColor = 'white';
            }
            let shade = Math.log2(getValue(i,j))/10;
            tdElement.style.backgroundColor = 'rgba(255, 0, 0,'+ shade.toString() +')';
        }
    }
}