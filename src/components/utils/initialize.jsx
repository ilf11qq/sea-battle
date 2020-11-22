const initiliaze = (len) => {
    const array = [];
    for (let i = 0; i < len; i++) {
        array[i] = [];
        for (let g = 0; g < len; g++) {
            array[i][g] = {
                isPlayer: true,
                isClicked: false,
                isEmpty: true,
                row: i,
                column: g,
            }
        }
    }
    return array
}
const isSquarePossible = (arr, row, column) => {
    const possibleSquars = [[0, 0],[-1, 0],[0, -1],[-1, -1],[1, 0],[0, 1],[1, 1],[-1, 1],[1, -1]];
    for (let item of possibleSquars) {
        if(row + item[0] >= 0 && row + item[0] < 10 && column + item[1] >= 0 && column + item[1] < 10 && !(arr[row + item[0]][column + item[1]].isEmpty)) {
            return false;
        }
    }
    return true
}
const isSquaresPossible = (arr, row, column, direction, range) => {
    for (let i = 0; i < range; i++) {
        if (direction === 'vertical') {
            if (!isSquarePossible(arr,row + i, column)) return false
        }
        if (direction === 'gorizontal') {
            if (!isSquarePossible(arr,row, column + i)) return false
        }
    }
    return true;
}
const createShips = (array, numberOfShips ) => {
    let randRow, randColumn;
    const lNumberOfShips = numberOfShips;
    while(numberOfShips > 0) {
        const direction = Math.random() < 1/2 ? 'vertical' : 'gorizontal';
        randRow = Math.floor(Math.random() * 10);
        randColumn = Math.floor(Math.random() * 10);
        if (direction === 'vertical') {
            while (randRow - 1 < 0 || randRow + 4 - lNumberOfShips > 9) {
                randRow = Math.floor(Math.random() * 10);
            }
            if(isSquaresPossible(array, randRow, randColumn, direction, 5 - lNumberOfShips)) {
                for (let i = 0; i < 5 - lNumberOfShips; i++) {
                    array[randRow + i][randColumn].isEmpty = false;
                }
                numberOfShips--
            }
        }
        else {
            while (randColumn - 1 < 0 || randColumn + 4 - lNumberOfShips > 9) {
                randColumn = Math.floor(Math.random() * 10);
            }
            if(isSquaresPossible(array, randRow, randColumn, direction, 5 - lNumberOfShips)) {
                for (let i = 0; i < 5 - lNumberOfShips; i++) {
                    array[randRow][randColumn + i].isEmpty = false;
                }
                numberOfShips--
            }
        }
    }
}
const randomizeBoard = () => {
    const array = initiliaze(10);
    createShips(array, 4);
    createShips(array, 3);
    createShips(array, 2);
    createShips(array, 1);
    return array
}
export {initiliaze, isSquarePossible, randomizeBoard};