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
export default initiliaze;