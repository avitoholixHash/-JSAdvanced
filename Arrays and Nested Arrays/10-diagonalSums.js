function diagonalSums(matrix) {
    let diagonalSum = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i === j) {
                diagonalSum += matrix[i][j];
            }
            if ((i + j) == matrix.length - 1) {
                secondDiagonal += matrix[i][j];
            }
        }
    }
    let result = `${diagonalSum} ${secondDiagonal}`;
    return result;
}
let result = diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);

console.log(result);