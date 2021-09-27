const coll = parseInt(prompt('Coll mass'));
const row = parseInt(prompt('Row mass'));
const startC = parseInt(prompt('Start mass Coll'));
const startR = parseInt(prompt('Start mass Row'));
// const direction = prompt('Direction mass');

function taskMass(coll, row) {
    let res = new Array(row).fill().map(() => new Array(coll).fill(""));
    let counter = 1;
    let startCol = startC;
    let endCol = coll - 1;
    let startRow = startR;
    let endRow = row - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            res[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let j = startRow; j <= endRow; j++) {
            res[j][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            res[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            res[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return res;
}
console.log(taskMass(coll, row));