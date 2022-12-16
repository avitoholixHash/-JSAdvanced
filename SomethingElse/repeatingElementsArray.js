//A repeating element in an array
let arr = [1, 2, 3, 3, 4, 5, 88, 99, 66, 88];
let repeatingNumbers = [];

arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 1]){
        repeatingNumbers.push(arr[i]);
    }
}

console.log(repeatingNumbers);