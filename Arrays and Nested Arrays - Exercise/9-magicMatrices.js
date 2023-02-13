function magicMatrices(matrix) {

    for(let i = 0; i < matrix.length - 1; i++){
        let rowSumOne = matrix[i].reduce((acc, el) => acc + el);
        let rowSumTwo = matrix[i + 1].reduce((acc, el) => acc + el);
        console.log(rowSumOne);
        console.log(rowSumTwo);

        // rowSumOne = 0;
        // rowSumTwo =0;
    }
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);