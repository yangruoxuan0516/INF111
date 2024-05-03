function getCell(i, j) {
    if (1 <= i && i <= 4 && 1 <= j && j <= 4) {
        const c = document.getElementById(i.toString() + j.toString());
        return c;
    }
    else {
        return undefined;
    }
}
;
export function setValue(i, j, value) {
    const cell = getCell(i, j);
    if (cell) {
        if (value == 0) {
            cell.innerHTML = '*';
        }
        else {
            cell.innerHTML = value.toString();
        }
        return true;
    }
    else {
        console.log('invalid cell');
        return false;
    }
}
;
export function getValue(i, j) {
    const cell = getCell(i, j);
    if (cell) {
        if (cell.innerHTML == '*') {
            return 0;
        }
        else {
            return Number(cell.innerHTML);
        }
    }
    else {
        console.log('invalid cell');
    }
}
;
export function isEmpty(i, j) {
    const cell = getCell(i, j);
    if (cell.innerHTML == '*') {
        return true;
    }
    else {
        return false;
    }
}
;
//# sourceMappingURL=case.js.map