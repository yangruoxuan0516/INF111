function getCell(i: number, j: number): HTMLTableCellElement | undefined{
    if (1 <= i && i <= 4 && 1 <= j && j <= 4) {
        const c = document.getElementById(i.toString() + j.toString());
        return c as HTMLTableCellElement;
    } else {
        return undefined;
    }
};

export function setValue(id: string, i: number, j: number, value: number): boolean{
    const cell = getCell(i, j);
    if (cell) {
        if (value == 0) {
            cell.innerHTML = '*';
        }
        else {
            cell.innerHTML = value.toString();
        }
        return true;
    } else {
        return false;
    }
};

export function getValue(i: number, j: number): number{
    const cell = getCell(i, j);
    if (cell) {
        console.log(Number(cell.innerHTML))
        return Number(cell.innerHTML);
    } else {
        console.log(0);
        return 0;
    }
};

// function isEmpty(i: number, j: number): boolean{
//     const cell = getCell(i, j);
//     if (cell) {
//         cell.innerHTML = value.toString();
//         return true;
//     } else {
//         return false;
//     }};