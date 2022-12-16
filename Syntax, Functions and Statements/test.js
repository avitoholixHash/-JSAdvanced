let numN = 5;

let string = '';

for (let row = 1; row <= numN; row++) {
    //Print space
    for (let space = 1; space <= numN - row; space++) {
        string += ' ';
    }
    //Print star
    for (let col = 0; col < 2 * row - 1; col++) {

        string += '*';
    }
    string += '\n';
}
console.log(string);